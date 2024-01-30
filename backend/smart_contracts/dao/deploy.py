from beaker import localnet, client
from beaker.consts import algo
from contract import app, add_proposal, read_proposal, vote_yes, vote_no
from pyteal import Btoi, Int

app.build().export("./artifacts")
# accounts = localnet.get_accounts()
# sender = accounts[0]

# app_client = client.ApplicationClient(
#     app=app,
#     sender=sender.address,
#     signer=sender.signer,
#     client=localnet.get_algod_client(),
# )

# app_id, addre, tnxId = app_client.create()
# app_client.fund(1 * algo)
# app_client.call(
#     add_proposal,
#     name="welfare",
#     description="Welfare fo dao wakanda staff",
#     end_time=9990,
#     boxes=[(app_client.app_id, "welfare")],
# )

# app_client.call(
#     vote_yes,
#     proposal_name="welfare",
#     boxes=[(app_client.app_id, "welfare")],
# )

# app_client.call(
#     vote_yes,
#     proposal_name="welfare",
#     boxes=[(app_client.app_id, "welfare")],
# )
# app_client.call(
#     vote_no,
#     proposal_name="welfare",
#     boxes=[(app_client.app_id, "welfare")],
# )
# value = app_client.call(
#     read_proposal, name="welfare", boxes=[(app_client.app_id, "welfare")]
# ).return_value


# print(f"The proposal with voting is {value}")
# result = app_client.call(increment, x=10, y=98).return_value
# globa_state = app_client.call(read_global_state).return_value

# app_client.call(add_student, id=1, name="lafiagi")

# get_new_sudent = app_client.call(get_student, id=1).return_value
# print(f"The new student is {get_new_sudent}")
# print(f"The global state {globa_state}")
