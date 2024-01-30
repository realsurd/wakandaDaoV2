import algosdk from 'algosdk'
import * as bkr from 'beaker-ts'

export class Proposal {
  name: string = ''
  description: string = ''
  is_open: boolean = false
  end_time: bigint = BigInt(0)
  yes_count: bigint = BigInt(0)
  no_count: bigint = BigInt(0)
  static codec: algosdk.ABIType = algosdk.ABIType.from('(string,string,bool,uint64,uint64,uint64)')
  static fields: string[] = ['name', 'description', 'is_open', 'end_time', 'yes_count', 'no_count']
  static decodeResult(val: algosdk.ABIValue | undefined): Proposal {
    return bkr.decodeNamedTuple(val, Proposal.fields) as Proposal
  }
  static decodeBytes(val: Uint8Array): Proposal {
    return bkr.decodeNamedTuple(Proposal.codec.decode(val), Proposal.fields) as Proposal
  }
}
export class proposals extends bkr.ApplicationClient {
  desc: string = ''
  override appSchema: bkr.Schema = {
    declared: { membership_token: { type: bkr.AVMType.bytes, key: 'membership_token', desc: '', static: false } },
    reserved: {},
  }
  override acctSchema: bkr.Schema = { declared: {}, reserved: {} }
  override approvalProgram: string =
    'I3ByYWdtYSB2ZXJzaW9uIDgKaW50Y2Jsb2NrIDAgMSAyOSA2NTUzNgpieXRlY2Jsb2NrIDB4IDB4MDAKdHhuIE51bUFwcEFyZ3MKaW50Y18wIC8vIDAKPT0KYm56IG1haW5fbDEyCnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4N2NlMTJjMDIgLy8gImFkZF9wcm9wb3NhbChzdHJpbmcsc3RyaW5nLHVpbnQ2NCl2b2lkIgo9PQpibnogbWFpbl9sMTEKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHhkNzc4YWQyNSAvLyAicmVhZF9wcm9wb3NhbChzdHJpbmcpKHN0cmluZyxzdHJpbmcsYm9vbCx1aW50NjQsdWludDY0LHVpbnQ2NCkiCj09CmJueiBtYWluX2wxMAp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweDQ0ZDA3Mzk1IC8vICJ2b3RlX3llcyhzdHJpbmcpdm9pZCIKPT0KYm56IG1haW5fbDkKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHgwZTE4NzAzNCAvLyAidm90ZV9ubyhzdHJpbmcpdm9pZCIKPT0KYm56IG1haW5fbDgKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHg4OWNiOGE5YSAvLyAiZGVsZXRlX3Byb3Bvc2FsKHN0cmluZyl2b2lkIgo9PQpibnogbWFpbl9sNwplcnIKbWFpbl9sNzoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKY2FsbHN1YiBkZWxldGVwcm9wb3NhbGNhc3Rlcl8xMAppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sODoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKY2FsbHN1YiB2b3Rlbm9jYXN0ZXJfOQppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sOToKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKY2FsbHN1YiB2b3RleWVzY2FzdGVyXzgKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDEwOgp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydApjYWxsc3ViIHJlYWRwcm9wb3NhbGNhc3Rlcl83CmludGNfMSAvLyAxCnJldHVybgptYWluX2wxMToKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKY2FsbHN1YiBhZGRwcm9wb3NhbGNhc3Rlcl82CmludGNfMSAvLyAxCnJldHVybgptYWluX2wxMjoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQpibnogbWFpbl9sMTQKZXJyCm1haW5fbDE0Ogp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAo9PQphc3NlcnQKY2FsbHN1YiBjcmVhdGVfMAppbnRjXzEgLy8gMQpyZXR1cm4KCi8vIGNyZWF0ZQpjcmVhdGVfMDoKcHJvdG8gMCAwCnB1c2hieXRlcyAweDZkNjU2ZDYyNjU3MjczNjg2OTcwNWY3NDZmNmI2NTZlIC8vICJtZW1iZXJzaGlwX3Rva2VuIgpwdXNoYnl0ZXMgMHgzMTMyMzMzODM2MzEzMzM1MzUzNiAvLyAiMTIzODYxMzU1NiIKYXBwX2dsb2JhbF9wdXQKcmV0c3ViCgovLyBhZGRfcHJvcG9zYWwKYWRkcHJvcG9zYWxfMToKcHJvdG8gMyAwCmludGNfMCAvLyAwCmJ5dGVjXzAgLy8gIiIKaW50Y18wIC8vIDAKZHVwbiAzCmJ5dGVjXzAgLy8gIiIKZHVwCmludGNfMSAvLyAxCiEKIQpmcmFtZV9idXJ5IDAKaW50Y18wIC8vIDAKZnJhbWVfYnVyeSAyCmludGNfMCAvLyAwCmZyYW1lX2J1cnkgMwpmcmFtZV9kaWcgLTMKZnJhbWVfYnVyeSA3CmZyYW1lX2RpZyA3CmZyYW1lX2J1cnkgNgppbnRjXzIgLy8gMjkKZnJhbWVfYnVyeSA0CmZyYW1lX2RpZyA0CmZyYW1lX2RpZyA3CmxlbgorCmZyYW1lX2J1cnkgNQpmcmFtZV9kaWcgNQppbnRjXzMgLy8gNjU1MzYKPAphc3NlcnQKZnJhbWVfZGlnIDQKaXRvYgpleHRyYWN0IDYgMApmcmFtZV9kaWcgLTIKZnJhbWVfYnVyeSA3CmZyYW1lX2RpZyA2CmZyYW1lX2RpZyA3CmNvbmNhdApmcmFtZV9idXJ5IDYKZnJhbWVfZGlnIDUKZnJhbWVfYnVyeSA0CmZyYW1lX2RpZyA0Cml0b2IKZXh0cmFjdCA2IDAKY29uY2F0CmJ5dGVjXzEgLy8gMHgwMAppbnRjXzAgLy8gMApmcmFtZV9kaWcgMApzZXRiaXQKY29uY2F0CmZyYW1lX2RpZyAtMQppdG9iCmNvbmNhdApmcmFtZV9kaWcgMgppdG9iCmNvbmNhdApmcmFtZV9kaWcgMwppdG9iCmNvbmNhdApmcmFtZV9kaWcgNgpjb25jYXQKZnJhbWVfYnVyeSAxCmZyYW1lX2RpZyAtMwpleHRyYWN0IDIgMApib3hfZGVsCnBvcApmcmFtZV9kaWcgLTMKZXh0cmFjdCAyIDAKZnJhbWVfZGlnIDEKYm94X3B1dApyZXRzdWIKCi8vIHJlYWRfcHJvcG9zYWwKcmVhZHByb3Bvc2FsXzI6CnByb3RvIDEgMQpieXRlY18wIC8vICIiCmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMApib3hfZ2V0CnN0b3JlIDEKc3RvcmUgMApsb2FkIDEKYXNzZXJ0CmxvYWQgMApmcmFtZV9idXJ5IDAKcmV0c3ViCgovLyB2b3RlX3llcwp2b3RleWVzXzM6CnByb3RvIDEgMAppbnRjXzAgLy8gMApieXRlY18wIC8vICIiCmludGNfMCAvLyAwCmR1cApieXRlY18wIC8vICIiCmludGNfMCAvLyAwCmR1cG4gMwpieXRlY18wIC8vICIiCmR1cApmcmFtZV9kaWcgLTEKZXh0cmFjdCAyIDAKYm94X2dldApzdG9yZSAzCnN0b3JlIDIKbG9hZCAzCmFzc2VydApsb2FkIDIKZnJhbWVfYnVyeSAxCmZyYW1lX2RpZyAxCnB1c2hpbnQgMTMgLy8gMTMKZXh0cmFjdF91aW50NjQKZnJhbWVfYnVyeSAwCmZyYW1lX2RpZyAwCmludGNfMSAvLyAxCisKZnJhbWVfYnVyeSAyCmZyYW1lX2RpZyAxCnB1c2hpbnQgMjEgLy8gMjEKZXh0cmFjdF91aW50NjQKZnJhbWVfYnVyeSAzCmZyYW1lX2RpZyAxCmZyYW1lX2RpZyAxCnB1c2hpbnQgMiAvLyAyCmV4dHJhY3RfdWludDE2CmRpZyAxCmxlbgpzdWJzdHJpbmczCmZyYW1lX2J1cnkgNApmcmFtZV9kaWcgMQpwdXNoaW50IDMyIC8vIDMyCmdldGJpdApmcmFtZV9idXJ5IDUKZnJhbWVfZGlnIDEKcHVzaGludCA1IC8vIDUKZXh0cmFjdF91aW50NjQKZnJhbWVfYnVyeSA2CmZyYW1lX2RpZyAtMQpmcmFtZV9idXJ5IDEwCmZyYW1lX2RpZyAxMApmcmFtZV9idXJ5IDkKaW50Y18yIC8vIDI5CmZyYW1lX2J1cnkgNwpmcmFtZV9kaWcgNwpmcmFtZV9kaWcgMTAKbGVuCisKZnJhbWVfYnVyeSA4CmZyYW1lX2RpZyA4CmludGNfMyAvLyA2NTUzNgo8CmFzc2VydApmcmFtZV9kaWcgNwppdG9iCmV4dHJhY3QgNiAwCmZyYW1lX2RpZyA0CmZyYW1lX2J1cnkgMTAKZnJhbWVfZGlnIDkKZnJhbWVfZGlnIDEwCmNvbmNhdApmcmFtZV9idXJ5IDkKZnJhbWVfZGlnIDgKZnJhbWVfYnVyeSA3CmZyYW1lX2RpZyA3Cml0b2IKZXh0cmFjdCA2IDAKY29uY2F0CmJ5dGVjXzEgLy8gMHgwMAppbnRjXzAgLy8gMApmcmFtZV9kaWcgNQpzZXRiaXQKY29uY2F0CmZyYW1lX2RpZyA2Cml0b2IKY29uY2F0CmZyYW1lX2RpZyAyCml0b2IKY29uY2F0CmZyYW1lX2RpZyAzCml0b2IKY29uY2F0CmZyYW1lX2RpZyA5CmNvbmNhdApmcmFtZV9idXJ5IDEKZnJhbWVfZGlnIC0xCmV4dHJhY3QgMiAwCmJveF9kZWwKcG9wCmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMApmcmFtZV9kaWcgMQpib3hfcHV0CnJldHN1YgoKLy8gdm90ZV9ubwp2b3Rlbm9fNDoKcHJvdG8gMSAwCmludGNfMCAvLyAwCmJ5dGVjXzAgLy8gIiIKaW50Y18wIC8vIDAKZHVwCmJ5dGVjXzAgLy8gIiIKaW50Y18wIC8vIDAKZHVwbiAzCmJ5dGVjXzAgLy8gIiIKZHVwCmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMApib3hfZ2V0CnN0b3JlIDUKc3RvcmUgNApsb2FkIDUKYXNzZXJ0CmxvYWQgNApmcmFtZV9idXJ5IDEKZnJhbWVfZGlnIDEKcHVzaGludCAyMSAvLyAyMQpleHRyYWN0X3VpbnQ2NApmcmFtZV9idXJ5IDAKZnJhbWVfZGlnIDAKaW50Y18xIC8vIDEKKwpmcmFtZV9idXJ5IDIKZnJhbWVfZGlnIDEKcHVzaGludCAxMyAvLyAxMwpleHRyYWN0X3VpbnQ2NApmcmFtZV9idXJ5IDMKZnJhbWVfZGlnIDEKZnJhbWVfZGlnIDEKcHVzaGludCAyIC8vIDIKZXh0cmFjdF91aW50MTYKZGlnIDEKbGVuCnN1YnN0cmluZzMKZnJhbWVfYnVyeSA0CmZyYW1lX2RpZyAxCnB1c2hpbnQgMzIgLy8gMzIKZ2V0Yml0CmZyYW1lX2J1cnkgNQpmcmFtZV9kaWcgMQpwdXNoaW50IDUgLy8gNQpleHRyYWN0X3VpbnQ2NApmcmFtZV9idXJ5IDYKZnJhbWVfZGlnIC0xCmZyYW1lX2J1cnkgMTAKZnJhbWVfZGlnIDEwCmZyYW1lX2J1cnkgOQppbnRjXzIgLy8gMjkKZnJhbWVfYnVyeSA3CmZyYW1lX2RpZyA3CmZyYW1lX2RpZyAxMApsZW4KKwpmcmFtZV9idXJ5IDgKZnJhbWVfZGlnIDgKaW50Y18zIC8vIDY1NTM2CjwKYXNzZXJ0CmZyYW1lX2RpZyA3Cml0b2IKZXh0cmFjdCA2IDAKZnJhbWVfZGlnIDQKZnJhbWVfYnVyeSAxMApmcmFtZV9kaWcgOQpmcmFtZV9kaWcgMTAKY29uY2F0CmZyYW1lX2J1cnkgOQpmcmFtZV9kaWcgOApmcmFtZV9idXJ5IDcKZnJhbWVfZGlnIDcKaXRvYgpleHRyYWN0IDYgMApjb25jYXQKYnl0ZWNfMSAvLyAweDAwCmludGNfMCAvLyAwCmZyYW1lX2RpZyA1CnNldGJpdApjb25jYXQKZnJhbWVfZGlnIDYKaXRvYgpjb25jYXQKZnJhbWVfZGlnIDMKaXRvYgpjb25jYXQKZnJhbWVfZGlnIDIKaXRvYgpjb25jYXQKZnJhbWVfZGlnIDkKY29uY2F0CmZyYW1lX2J1cnkgMQpmcmFtZV9kaWcgLTEKZXh0cmFjdCAyIDAKYm94X2RlbApwb3AKZnJhbWVfZGlnIC0xCmV4dHJhY3QgMiAwCmZyYW1lX2RpZyAxCmJveF9wdXQKcmV0c3ViCgovLyBkZWxldGVfcHJvcG9zYWwKZGVsZXRlcHJvcG9zYWxfNToKcHJvdG8gMSAwCmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMApib3hfZGVsCnBvcApyZXRzdWIKCi8vIGFkZF9wcm9wb3NhbF9jYXN0ZXIKYWRkcHJvcG9zYWxjYXN0ZXJfNjoKcHJvdG8gMCAwCmJ5dGVjXzAgLy8gIiIKZHVwCmludGNfMCAvLyAwCnR4bmEgQXBwbGljYXRpb25BcmdzIDEKZnJhbWVfYnVyeSAwCnR4bmEgQXBwbGljYXRpb25BcmdzIDIKZnJhbWVfYnVyeSAxCnR4bmEgQXBwbGljYXRpb25BcmdzIDMKYnRvaQpmcmFtZV9idXJ5IDIKZnJhbWVfZGlnIDAKZnJhbWVfZGlnIDEKZnJhbWVfZGlnIDIKY2FsbHN1YiBhZGRwcm9wb3NhbF8xCnJldHN1YgoKLy8gcmVhZF9wcm9wb3NhbF9jYXN0ZXIKcmVhZHByb3Bvc2FsY2FzdGVyXzc6CnByb3RvIDAgMApieXRlY18wIC8vICIiCmR1cAp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCmZyYW1lX2J1cnkgMQpmcmFtZV9kaWcgMQpjYWxsc3ViIHJlYWRwcm9wb3NhbF8yCmZyYW1lX2J1cnkgMApwdXNoYnl0ZXMgMHgxNTFmN2M3NSAvLyAweDE1MWY3Yzc1CmZyYW1lX2RpZyAwCmNvbmNhdApsb2cKcmV0c3ViCgovLyB2b3RlX3llc19jYXN0ZXIKdm90ZXllc2Nhc3Rlcl84Ogpwcm90byAwIDAKYnl0ZWNfMCAvLyAiIgp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCmZyYW1lX2J1cnkgMApmcmFtZV9kaWcgMApjYWxsc3ViIHZvdGV5ZXNfMwpyZXRzdWIKCi8vIHZvdGVfbm9fY2FzdGVyCnZvdGVub2Nhc3Rlcl85Ogpwcm90byAwIDAKYnl0ZWNfMCAvLyAiIgp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCmZyYW1lX2J1cnkgMApmcmFtZV9kaWcgMApjYWxsc3ViIHZvdGVub180CnJldHN1YgoKLy8gZGVsZXRlX3Byb3Bvc2FsX2Nhc3RlcgpkZWxldGVwcm9wb3NhbGNhc3Rlcl8xMDoKcHJvdG8gMCAwCmJ5dGVjXzAgLy8gIiIKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpmcmFtZV9idXJ5IDAKZnJhbWVfZGlnIDAKY2FsbHN1YiBkZWxldGVwcm9wb3NhbF81CnJldHN1Yg=='
  override clearProgram: string = 'I3ByYWdtYSB2ZXJzaW9uIDgKcHVzaGludCAwIC8vIDAKcmV0dXJu'
  override methods: algosdk.ABIMethod[] = [
    new algosdk.ABIMethod({
      name: 'add_proposal',
      desc: '',
      args: [
        { type: 'string', name: 'name', desc: '' },
        { type: 'string', name: 'description', desc: '' },
        { type: 'uint64', name: 'end_time', desc: '' },
      ],
      returns: { type: 'void', desc: '' },
    }),
    new algosdk.ABIMethod({
      name: 'read_proposal',
      desc: '',
      args: [{ type: 'string', name: 'name', desc: '' }],
      returns: { type: '(string,string,bool,uint64,uint64,uint64)', desc: '' },
    }),
    new algosdk.ABIMethod({
      name: 'vote_yes',
      desc: '',
      args: [{ type: 'string', name: 'proposal_name', desc: '' }],
      returns: { type: 'void', desc: '' },
    }),
    new algosdk.ABIMethod({
      name: 'vote_no',
      desc: '',
      args: [{ type: 'string', name: 'proposal_name', desc: '' }],
      returns: { type: 'void', desc: '' },
    }),
    new algosdk.ABIMethod({
      name: 'delete_proposal',
      desc: '',
      args: [{ type: 'string', name: 'proposal_name', desc: '' }],
      returns: { type: 'void', desc: '' },
    }),
  ]
  async add_proposal(
    args: {
      name: string
      description: string
      end_time: bigint
    },
    txnParams?: bkr.TransactionOverrides,
  ): Promise<bkr.ABIResult<void>> {
    const result = await this.execute(
      await this.compose.add_proposal(
        { name: args.name, description: args.description, end_time: args.end_time },
        txnParams,
      ),
    )
    return new bkr.ABIResult<void>(result)
  }
  async read_proposal(
    args: {
      name: string
    },
    txnParams?: bkr.TransactionOverrides,
  ): Promise<bkr.ABIResult<[string, string, boolean, bigint, bigint, bigint]>> {
    const result = await this.execute(await this.compose.read_proposal({ name: args.name }, txnParams))
    return new bkr.ABIResult<[string, string, boolean, bigint, bigint, bigint]>(
      result,
      result.returnValue as [string, string, boolean, bigint, bigint, bigint],
    )
  }
  async vote_yes(
    args: {
      proposal_name: string
    },
    txnParams?: bkr.TransactionOverrides,
  ): Promise<bkr.ABIResult<void>> {
    const result = await this.execute(await this.compose.vote_yes({ proposal_name: args.proposal_name }, txnParams))
    return new bkr.ABIResult<void>(result)
  }
  async vote_no(
    args: {
      proposal_name: string
    },
    txnParams?: bkr.TransactionOverrides,
  ): Promise<bkr.ABIResult<void>> {
    const result = await this.execute(await this.compose.vote_no({ proposal_name: args.proposal_name }, txnParams))
    return new bkr.ABIResult<void>(result)
  }
  async delete_proposal(
    args: {
      proposal_name: string
    },
    txnParams?: bkr.TransactionOverrides,
  ): Promise<bkr.ABIResult<void>> {
    const result = await this.execute(
      await this.compose.delete_proposal({ proposal_name: args.proposal_name }, txnParams),
    )
    return new bkr.ABIResult<void>(result)
  }
  compose = {
    add_proposal: async (
      args: {
        name: string
        description: string
        end_time: bigint
      },
      txnParams?: bkr.TransactionOverrides,
      atc?: algosdk.AtomicTransactionComposer,
    ): Promise<algosdk.AtomicTransactionComposer> => {
      return this.addMethodCall(
        algosdk.getMethodByName(this.methods, 'add_proposal'),
        { name: args.name, description: args.description, end_time: args.end_time },
        txnParams,
        atc,
      )
    },
    read_proposal: async (
      args: {
        name: string
      },
      txnParams?: bkr.TransactionOverrides,
      atc?: algosdk.AtomicTransactionComposer,
    ): Promise<algosdk.AtomicTransactionComposer> => {
      return this.addMethodCall(
        algosdk.getMethodByName(this.methods, 'read_proposal'),
        { name: args.name },
        txnParams,
        atc,
      )
    },
    vote_yes: async (
      args: {
        proposal_name: string
      },
      txnParams?: bkr.TransactionOverrides,
      atc?: algosdk.AtomicTransactionComposer,
    ): Promise<algosdk.AtomicTransactionComposer> => {
      return this.addMethodCall(
        algosdk.getMethodByName(this.methods, 'vote_yes'),
        { proposal_name: args.proposal_name },
        txnParams,
        atc,
      )
    },
    vote_no: async (
      args: {
        proposal_name: string
      },
      txnParams?: bkr.TransactionOverrides,
      atc?: algosdk.AtomicTransactionComposer,
    ): Promise<algosdk.AtomicTransactionComposer> => {
      return this.addMethodCall(
        algosdk.getMethodByName(this.methods, 'vote_no'),
        { proposal_name: args.proposal_name },
        txnParams,
        atc,
      )
    },
    delete_proposal: async (
      args: {
        proposal_name: string
      },
      txnParams?: bkr.TransactionOverrides,
      atc?: algosdk.AtomicTransactionComposer,
    ): Promise<algosdk.AtomicTransactionComposer> => {
      return this.addMethodCall(
        algosdk.getMethodByName(this.methods, 'delete_proposal'),
        { proposal_name: args.proposal_name },
        txnParams,
        atc,
      )
    },
  }
}
