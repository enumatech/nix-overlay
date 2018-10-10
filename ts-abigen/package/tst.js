const ethUtil = require('ethereumjs-util')
const mod = require('./out')
const i = new mod.RPCClient('http://localhost:8545', {
  from: '0x39d754891d6c32e95945acbfe5af0309ddd2ae22'
})
i.addSigner('0x39d754891d6c32e95945acbfe5af0309ddd2ae22', (msg) => {
  const sig = ethUtil.ecsign(msg, Buffer.from('ffffffffffffffffffffffffffffffff'))
  const aggBuf = Buffer.concat([sig.r, sig.s])
  return aggBuf
})

const contract = i.revokeListContractAt('0x39d754891d6c32e95945acbfe5af0309ddd2ae20')
contract.registerDelegateForSender.sendTransaction('0x39d754891d6c32e95945acbfe5af0309ddd2ae21')
  .then(ret => {
    console.log(ret)
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

// const EthereumTx = require('ethereumjs-tx');
// const ethUtil = require('ethereumjs-util')

// function wrapSign(txParams, chainId) {
//   const privateKey = Buffer.from('ffffffffffffffffffffffffffffaaaa')
//   const tx = new EthereumTx({
//     nonce: '0x00',
//     gasPrice: '0x09184e72a000',
//     gasLimit: '0x2710',
//     to: '0x0000000000000000000000000000000000000000',
//     value: '0x00',
//     data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
//     chainId: chainId,
//   })

//   const msgHash = tx.hash(false)

//   // TODO: Replace me
//   const sig = ethUtil.ecsign(msgHash, privateKey)
//   sig.v = undefined // drop v value to ensure recovered
//   Object.assign(tx, sig)

//   function eip155(v) {
//     const chainId = tx._chainId || 0
//     return v + (chainId * 2 + 8)
//   }

//   // Try recovery params
//   tx.v = eip155(27)
//   if (!tx.verifySignature()) {
//     tx.v = eip155(28)
//   }

//   return tx
// }

// console.log(wrapSign({}, 1339))
