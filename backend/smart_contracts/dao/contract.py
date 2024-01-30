from beaker import *
from beaker.lib.storage import BoxMapping, BoxList

from pyteal import *

SECONDS_PER_DAY = Int(86400)


class Proposal(abi.NamedTuple):
    name: abi.Field[abi.String]
    description: abi.Field[abi.String]
    is_open: abi.Field[abi.Bool]
    end_time: abi.Field[abi.Uint64]
    yes_count: abi.Field[abi.Uint64]
    no_count: abi.Field[abi.Uint64]
    


class AppState:
    proposals = BoxMapping(abi.String, Proposal)
    membership_token = GlobalStateValue(
        stack_type=TealType.bytes, default=Bytes("1238613556")
    )


app = Application("proposals", state=AppState()).apply(
    unconditional_create_approval, initialize_global_state=True
)


# @app.external(authorize=Authorize.holds_token("1238613556"))
@app.external
def add_proposal(
    name: abi.String, description: abi.String, end_time: abi.Uint64
) -> Expr:
    is_open = abi.Bool()
    proposal_obj = Proposal()
    yes_count = abi.Uint64()
    no_count = abi.Uint64()
    return Seq(
        is_open.set(Int(1)),
        yes_count.set(Int(0)),
        no_count.set(Int(0)),
        proposal_obj.set(name, description, is_open, end_time, yes_count, no_count),
        app.state.proposals[name.get()].set(proposal_obj),
    )


@app.external
def read_proposal(name: abi.String, *, output: Proposal) -> Expr:
    return app.state.proposals[name.get()].store_into(output)


@app.external
def vote_yes(proposal_name: abi.String) -> Expr:
    yes = abi.Uint64()
    
    return Seq(
        (proposal := Proposal()).decode(app.state.proposals[proposal_name.get()].get()),
        (proposal.yes_count.store_into(yes)),
        (yes_count := abi.Uint64()).set(yes.get() + Int(1)),
        (no_count := abi.Uint64()).set(proposal.no_count),
        (description := abi.String()).set(proposal.description),
        (is_open := abi.Bool()).set(proposal.is_open),
        (end_time := abi.Uint64()).set(proposal.end_time),
        proposal.set(
            proposal_name, description, is_open, end_time, yes_count, no_count
        ),
        app.state.proposals[proposal_name.get()].set(proposal),
    )


@app.external
def vote_no(proposal_name: abi.String,) -> Expr:
    no = abi.Uint64()
    
    return Seq(
        (proposal := Proposal()).decode(app.state.proposals[proposal_name.get()].get()),
        (proposal.no_count.store_into(no)),
        (no_count := abi.Uint64()).set(no.get() + Int(1)),
        (yes_count := abi.Uint64()).set(proposal.yes_count),
        (description := abi.String()).set(proposal.description),
        (is_open := abi.Bool()).set(proposal.is_open),
        (end_time := abi.Uint64()).set(proposal.end_time),
        proposal.set(
            proposal_name, description, is_open, end_time, yes_count, no_count
        ),
        app.state.proposals[proposal_name.get()].set(proposal),
    )

# @app.external
# def delete_proposal(proposal_name: abi.String):
#     Pop(app.state.proposals[proposal_name.get()].delete())
