/* Coded by rashi
Re-coded by KTB 
*/

const Asena = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const LOAD_ING = "*TRYING TO DOWNLOAD*"
const UPLOAD_ING = "*✅️ DOWNLOADING COMPLETED* \n\n *UPLOADING IN PROCESS...*"
const axios = require('axios')
const Axios = require('axios')

const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'ytv ?(.*)', fromMe: wk, desc: 'video downloading links from youtube'}, async (message, match) => {

var reply = await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
	
        const {data} = await axios(`https://api.zeks.me/api/ytplaymp4?apikey=ApiKannappi&q=${match[1]}`)
	
        const { status, result } = data

	var img = await Axios.get(`${result.thumbnail}`, {responseType: 'arraybuffer'})
	

        if(!status) return await message.sendMessage('*NO RESULT FOUND🥲*')

	reply = await message.client.sendMessage(message.jid,UPLOAD_ING , MessageType.text, { quoted: message.data });

        let msg = '```'
        msg +=  `TITLE :${result.title}\n\n`
        msg +=  `THUMBNAIL :${result.thumbnail}\n\n`
        msg +=  `SOURCE :${result.source}\n\n`
        msg +=  `SIZE :${result.size}\n\n`
        msg +=  `DOWNLOADING LINK :${result.url_video}\n\n`
        msg += '```'
         return await message.client.sendMessage(message.jid,Buffer.from(img.data), MessageType.image, {mimetype: Mimetype.jpg , caption: msg , thumbnail: "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"})
        });
    
