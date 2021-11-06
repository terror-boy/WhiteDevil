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
	
	
	
	const {data} = await axios(`https://api.lolhuman.xyz/api/ytplay?apikey=0676782d8333fc73bbb2f2a5&query=${match[1]}`)
	
        const { status, result , info} = data
	
	var img = await Axios.get(`${result.info.thumbnail}`, {responseType: 'arraybuffer'})
	
	const audioBuffer = await axios.get(`${result.audio.link}`, {responseType: 'arraybuffer'})
	
        if(!status) return await message.sendMessage('*NO RESULT FOUND*')
	
        await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
        let msg = '```'
        msg +=  `TITLE :${result.info.title}\n\n`
        msg +=  `THUMBNAIL :${result.info.thumbnail}\n\n`
        msg +=  `CHANNEL :${result.info.channel}\n\n`
        msg +=  `DESCRIPTION :${result.info.description}\n\n`
        msg +=  `TOTAL VIEWS :${result.info.view}\n\n`
        msg +=  `SIZE :${result.audio.size}\n\n`
        msg += '```'
         return await message.client.sendMessage(message.jid,Buffer.from(img.data), MessageType.image, {mimetype: Mimetype.jpg , caption: msg , thumbnail: White.tm_b })
	 return await message.client.sendMessage(message.jid,Buffer.from(audioBuffer.data), MessageType.audio, {mimetype: Mimetype.m4a,  quoted : message.data })
        });
