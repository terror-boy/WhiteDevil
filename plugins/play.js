const Asena = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const White = require('../white');
const LOAD_ING = "*RESULT FOUND UPLOADING...* \n\n *🛑SONG IS UNDER MAINTAINCE🛑*"
const axios = require('axios')
const Axios = require('axios')


Asena.addCommand({pattern: 'play ?(.*)', fromMe: false, desc: 'play song' , dontAddCommandList: true }, async (message, match) => {
	
	await message.client.sendMessage(message.jid, '*SEARCHING YOU DATA*' , MessageType.text, { quoted: message.data });
	
	const {data} = await axios(`https://zenzapi.xyz/api/play/playmp3?query=${match[1]}&apikey=whitedevil-terrorboy`)
	
        const { status, result } = data
	
	var img = await Axios.get(`${result.thumb}`, {responseType: 'arraybuffer'})
	
	const audioBuffer = await axios.get(`${result.url}`, {responseType: 'arraybuffer'})
	
        if(!status) return await message.sendMessage('*NO RESULT FOUND*')
	
        await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
        let msg = '```'
        msg +=  `TITLE :${result.title}\n\n`
        msg +=  `THUMBNAIL :${result.thumb}\n\n`
        msg +=  `CHANNEL :${result.channel}\n\n`
        msg +=  `DATE OF PUBLISHED :${result.published}\n\n`
        msg +=  `TOTAL VIEWS :${result.views}\n\n`
        msg +=  `DOWNLOADING LINK :${result.url}\n\n`
        msg += '```'
         return await message.client.sendMessage(message.jid,Buffer.from(img.data), MessageType.image, {mimetype: Mimetype.jpg , caption: msg , thumbnail: White.tm_b })
	 return await message.client.sendMessage(message.jid,Buffer.from(audioBuffer.data), MessageType.document, {filename: "*HERE IS YOUR AUDIO !!!*" , mimetype: Mimetype.webma,  quoted : message.data })
        });
