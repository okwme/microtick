
const API = require('mtapi')
const api = new API("http://45.79.187.79:8081") 
const fs = require('fs');

const defaultWalletPath = __dirname + '/../privateKey.json'

module.exports = async function init(walletPath) {
    let wallet
    try {
      if (walletPath) {
        if (!fs.existsSync(__dirname + '/../' + walletPath)) {
          console.log(`Wallet not found in path: '${__dirname + '/../' + walletPath}'`)
          return
        } else {
            console.log(`Wallet found in path: '${__dirname + '/../' + walletPath}'`)
            walletJSON = JSON.parse(fs.readFileSync(__dirname + '/../' + walletPath))
            await api.init(walletJSON)
        }
      } else {
        if (fs.existsSync(defaultWalletPath)) {
          console.log(`Using wallet found in ${defaultWalletPath}`)
          walletJSON = JSON.parse(fs.readFileSync(defaultWalletPath))
          await api.init(walletJSON)
        } else {
          await api.init()
          wallet = await api.getWallet()
          console.log(`Saving wallet to ${defaultWalletPath}`)
          fs.writeFileSync(defaultWalletPath, JSON.stringify(wallet, null, 2))
        }
      }
      wallet = await api.getWallet()
      if (!wallet.pub) {
        throw new Error(`Wallet undefined`)
      }
    } catch (err) {
      console.error(err)
    }
    return
}

