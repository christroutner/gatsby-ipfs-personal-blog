/*
  This library contains the application logic for working with the BCH blockchain
  and decoding memo.cash protocol messages from BCH transactions.
*/

// const BITBOXSDK = require('bitbox-sdk')
// const BITBOX = new BITBOXSDK()

// minimal-slp-wallet-web
const BchWallet = typeof window !== 'undefined' ? window.SlpWallet : null

// bch-message-lib
const BchMessage = typeof window !== 'undefined' ? window.BchMessage : null

class MEMO {
  constructor (addr) {
    // By default make hash an empty string.
    this.currentHash = ''

    // If user specified a hash to use, use that.
    if (addr && addr !== '') {this.addr = addr}
    else { throw new Error(`Must pass a BCH address to Memo constructor.`)}

    if(BchWallet) {
      this.wallet = new BchWallet()
      this.bchjs = this.wallet.bchjs
    }

    if(BchMessage)
      this.bchMessage = new BchMessage({bchjs: this.bchjs})
  }

  // Checks to see if a new hash been published to the BCH network. If a new
  // hash is detected, it returns the hash. Otherwise, it returns false.
  async checkForUpdates () {
    const hash = await this.findHash()

    // Handle initializing the server.
    if (this.currentHash === '') this.currentHash = hash

    // If new hash is detected.
    if (hash !== this.currentHash) {
      this.currentHash = hash

      return hash
    }

    return false
  }

  // Walk the transactions associated with an address until a proper IPFS hash is
  // found. If one is not found, will return false.
  async findHash () {
    try {
      console.log(`finding latest IPFS hash for address: ${this.addr}...`)

      const txs = await this.bchMessage.memo.memoRead(this.addr, 'IPFS UPDATE')
      // console.log(`txs: ${JSON.stringify(txs, null, 2)}`)

      // If the array is empty, then return false.
      if(txs.length === 0) return false

      // The transactions should automatically be sorted by the bchMessage
      // library. So Just return the hash from the first entry.
      return txs[0].hash

    } catch (err) {
      console.log(`Could not find IPFS hash in transaction history.`)
      return false
    }
  }

  // Filters a string to see if it matches the proper pattern of:
  // 'IPFS UPDATE <hash>'
  // Returns the hash if the pattern matches. Otherwise, returns false.
  filterHash (msg) {
    try {
      if (msg.indexOf('IPFS UPDATE') > -1) {
        const parts = msg.split(' ')
        const hash = parts.pop()

        if (hash.length === 46) {
          return hash
        }

        return false
      }
    } catch (err) {
      // Exit silently
      return false
    }
  }

  // The original decodeTransaction() did not work on the front end. This function
  // is a hack around the issue.
  decodeTransaction2(asm) {
    try {
      const asmWords = asm.split(" ")
      //console.log(`asmWords: ${JSON.stringify(asmWords,null,2)}`)

      if(asmWords[0] === "OP_RETURN" && asmWords[1] === "621") {
        const msg = Buffer.from(asmWords[2], "hex").toString()
        //console.log(`msg: ${msg}`)
        return msg
      }

      return false
    } catch(err) {
      console.warn(`Error in decodeTransaction2: `, err)
      return false
    }
  }

  // Decodes BCH transaction assembly code. If it matches the memo.cash
  // protocol for posts, it returns the post message. Otherwise returns false.
  decodeTransaction (asm) {
    try {
      // Decode the assembly into a string.
      let fromASM = this.bchjs.Script.fromASM(asm)
      console.log(`fromASM: ${fromASM.toString()}`)
      let decodedArr = this.bchjs.Script.decode(fromASM)
      console.log(`decodedArr: ${JSON.stringify(decodedArr)}`)

      const decodedStr = decodedArr.toString()
      console.log(`decodedStr: ${JSON.stringify(decodedStr)}`)

      // Split the string based on commas.
      const splitStr = decodedStr.split(',')

      if (splitStr[0] === '106') {
        //const msg = decodedArr[2].toString()
        const msg = this.bchjs.Script.decode(decodedArr[2])
        console.log(`msg: ${msg}`)
      }

      // Detect OP_RETURN & Memo Cash message
      if (splitStr[0] === '106' && splitStr[1] === 'b') {
        // console.log(`splitStr: ${JSON.stringify(splitStr, null, 2)}`)

        // Get the last element from the array.
        const endStr = splitStr.pop()
        // console.log(`endStr: ${endStr}`)

        // Return the message.
        return endStr
      }

      return false
    } catch (err) {
      console.error(err)
      // Exit quietly
      return false
    }
  }
}

module.exports = MEMO
