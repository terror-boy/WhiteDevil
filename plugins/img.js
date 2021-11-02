/* Copyright © 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WHITE DEVIL ----»»» TERROR BOY
*/

const Ktb = require('../events');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const Config = require('../config');
const White = require('../white');
const LOAD_ING = "*TRYING TO DOWNLOAD*"
const UPLOAD_ING = "*DOWNLOADING COMPLETED* \n\n *UPLOADING IN PROCESS...*"
const axios = require('axios')
const Axios = require('axios')

const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true


Ktb.addCommand({pattern: 'google ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,"*word need to search*");

    var webimage = await axios.get(`https://zenzapi.xyz/api/gimage2?query=${match[1]}&apikey=whitedevil-terrorboy`, { responseType: 'arraybuffer' })
    
    let msg = '```'
        msg +=  `TITLE :${match[1]}\n\n`
         msg += '```'

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: msg , thumbnail: White.tm_b})

}));

Ktb.addCommand({pattern: 'gimg ?(.*)', fromMe: wk, desc: 'to get google img'}, async (message, match) => {

var reply = await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
	
        const {data} = await axios(`https://zenzapi.xyz/api/gimage?query=${match[1]}&apikey=whitedevil-terrorboy`)
	
        const { status, result } = data

	var img = await Axios.get(`${result}`, {responseType: 'arraybuffer'})
	

        if(!status) return await message.sendMessage('*NO RESULT FOUND🥲*')

	reply = await message.client.sendMessage(message.jid,UPLOAD_ING , MessageType.text, { quoted: message.data });

        let msg = '```'
        msg +=  `TITLE :${match[1]}\n\n`
        msg +=  `SOURCE :${result}\n\n`
        msg += '```'
         return await message.client.sendMessage(message.jid,Buffer.from(img.data), MessageType.image, {mimetype: Mimetype.jpg , caption: msg , thumbnail: White.tm_b})
        });
    
