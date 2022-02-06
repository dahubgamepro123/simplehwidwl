const express = require('express')
const app = express()
const Headers = ['Syn-Fingerprint','Fingerprints']
const WhitelistedHwids = ['hwid1']

const wlCheck = (req,res)=>{
    for (let i = 0; i< Headers.length;i++){
        if (req.header(Headers[i])){
            if (WhitelistedHwids.find(req.header[Headers[i]])){
                res.write('Whitelisted!')
            }
        }
    }
}

module.exports = wlCheck