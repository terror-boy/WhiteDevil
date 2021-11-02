const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const got = require('got');

const White = require('../white');
const Config = require('../config');
const LOAD_ING = "*RESULT FOUND UPLOADING...*"

const axios = require('axios')
const Axios = require('axios')

const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'ininfo ?(.*)', fromMe: wk, desc: 'searching insta info' , dontAddCommandList: true }, async (message, match) => {
	
	await message.client.sendMessage(message.jid, '*SEARCHING YOU DATA*' , MessageType.text, { quoted: message.data });
	
	const {data} = await axios(`https://zenzapi.xyz/api/stalker/ig?username=${match[1]}&apikey=whitedevil-terrorboy`)
	
        const { status, result } = data
	
	var img = await Axios.get(`${result.profilehd}`, {responseType: 'arraybuffer'})
	
        if(!status) return await message.sendMessage('*NO RESULT FOUND*')
	
        await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });

        let msg = '```'
        msg +=  `NAME :${result.fullname}\n\n`
        msg +=  `A/C PRIVATE :${result.private}\n\n`
        msg +=  `A/C VERIFIED :${result.verified}\n\n`
        msg +=  `FOLLOWERS :${result.follower}\n\n`
        msg +=  `FOLLOWING :${result.following}\n\n`
        msg +=  `BIO :${result.bio}\n\n`
        msg +=  `SAVED MEDIA :${result.savedmedia}\n\n`
        msg +=  `FB CONNECTED :${result.conneted_fb}\n\n`
        msg +=  `TIMELINE :${result.timeline}\n\n`
        msg +=  `VIDEO TIMELINE :${result.videotimeline}\n\n`
        msg += '```'
         return await message.client.sendMessage(message.jid,Buffer.from(img.data), MessageType.image, {mimetype: Mimetype.jpg , caption: msg , 
thumbnail: White.tm_b})
        });
