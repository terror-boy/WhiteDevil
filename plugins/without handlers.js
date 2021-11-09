/* Copyright (C) 2021 TERROR-BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WHITE DEVIL ----»»» TERROR BOY
*/



/*
 __________   _________     ________________  ________  
     EDUTHO BUT CREDIT THERANAM ALLEGIL ETH 👈🏻👆🏻👆🏻
     
     REMOVE CHEYIYARUTH
     
     THANKS TO MY SUPPORTERS
_______  __________  ___________  ________    __________     
*/


const Ktb = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const got = require('got');
const cwebp = require('cwebp-bin');
const exec = require('child_process').exec;
const os = require("os");
const White = require('../white');
const LOAD_ING = "*TRYING TO DOWNLOAD*"
const UPLOAD_ING = "*✅️ DOWNLOADING COMPLETED* \n\n *UPLOADING IN PROCESS...*"
const axios = require('axios')
const Axios = require('axios')
const Config = require('../config');
const ILOAD_ING = "*✅️Connecting To INSTAGRAM*"
const IUPLOAD_ING = "*✅️Connected To INSTAGRAM* \n\n\n *DOWNLOADING & UPLOADING IN PROCESS...*"
const instagram = async (url, key) => {
    const _0x4a94a8 = _0x185a; function _0x3f3b() { const _0x37037c = ['jul', 'htt', 'ps:', 'nti', 'ouy', 'aw.', 'kit', '/in', 'sta', '?ur', 'dat', 'get', 'arr']; _0x3f3b = function () { return _0x37037c; }; return _0x3f3b(); } function _0x185a(_0x38e93d, _0x3f3b83) { const _0x185a5f = _0x3f3b(); _0x185a = function (_0x829ec5, _0x405d60) { _0x829ec5 = _0x829ec5 - 0xe5; let _0x20f676 = _0x185a5f[_0x829ec5]; return _0x20f676; }; return _0x185a(_0x38e93d, _0x3f3b83); } if (key != _0x4a94a8(0xe5) + 'ie') throw new Error('Jul' + 'ie'); const response = await axios(_0x4a94a8(0xe6) + _0x4a94a8(0xe7) + '//u' + _0x4a94a8(0xe8) + 'tle' + 'd-1' + _0x4a94a8(0xe9) + 'r1r' + 'szh' + _0x4a94a8(0xea) + 'run' + _0x4a94a8(0xeb) + '.sh' + _0x4a94a8(0xec) + _0x4a94a8(0xed) + _0x4a94a8(0xee) + 'l=' + url); const { status, result } = response[_0x4a94a8(0xef) + 'a']; if (!status) return { 'status': status }; const { type, data } = result[0x0]; const res = await axios[_0x4a94a8(0xf0)](data, { 'responseType': _0x4a94a8(0xf1) + 'ayb' + 'uff' + 'er' }); return { 'type': type, 'data': res[_0x4a94a8(0xef) + 'a'], 'status': status };
}

const Language = require('../language');
const Lang = Language.getString('sticker');

const rows = [
 {title: 'Whitedevil bot support group:-', description: "\n\n*https://chat.whatsapp.com/KDT4Q5F4zq99ubruR5T9k1*", rowId:"wd1"},
 {title: 'Password in heroku:-', description: "\n\n• whitedevil\n• Whitedevil\n\n\n```you can take any one```", rowId:"wd2"},
 {title: 'All bot support group:-', description: "\n\n*https://chat.whatsapp.com/CY7wJC070o04yxfTuT1yPf*", rowId:"wd3"}
]

const sections = [{title: "WhiteDevil Menu", rows: rows}]

const button = {
 buttonText: 'Click Me Here!!!',
 description: "*Hello,This is  Whitedevil bot*\n\n ```please check it```",
 sections: sections,
 listType: 1
}

const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true

Ktb.addCommand({on: 'text', fromMe: wk, deleteCommand: false}, (async (message, match) => {
    if (message.jid === '919562803423-1627735504@g.us') {
	    
             return;
         }
         let regex1 = new RegExp('sticker')
       //  let regex2 = new RegExp('https://www.instagram.com')
         let regex3 = new RegExp('owner')
         let regex4 = new RegExp('Owner')
        // let regex5 = new RegExp('https://youtu.be')
	 let regex6 = new RegExp('link')
	 
         
         if (regex1.test(message.message)) {
              
              if (message.reply_message === false) return false;
		 
        var downloading = await message.client.sendMessage(message.jid,Lang.DOWNLOADING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            
	  },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === false && message.reply_message.image) {
            ffmpeg(location)
                .outputOptions(["-y", "-vcodec libwebp"])
                .videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1')
                .save('st.webp')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid,contextInfo: { forwardingScore: 2, isForwarded: true }, fromMe: true})


        }

        ffmpeg(location)
            .outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"])
            .videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1')
            .save('sticker.webp')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./White/image/logo.jpg')}}}});
}
    /*
    if (regex2.test(message.message)) {
              
              var reply = await message.client.sendMessage(message.jid, ILOAD_ING , MessageType.text, { quoted: message.data });
    
              const { status, type, data } = await instagram('https://www.instagram.com/${match[1]}', 'julie')
               if (!status) return await message.sendMessage('*❌️SOMETHING WRONG❌️* \n\n ```REASON```: *_API KEY EXPIRED_*\n\n*CONTACT the  developer-->> (TERROR-BOY)[https://tinyurl.com/suf4xpat]*')
           
               reply = await message.client.sendMessage(message.jid,IUPLOAD_ING , MessageType.text, { quoted: message.data });
               
               if (type === 'image') return await message.sendMessage(data, MessageType.image, { caption: "*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*", quoted: message.data  , thumbnail: White.tm_b })
               
               if (type === 'video') return await message.sendMessage(data, MessageType.video, { caption: "*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*", quoted: message.data , thumbnail: White.tm_b })
            }
*/
if (regex3.test(message.message)) {

    const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:KARTHIK [WHITEDEVIL]\n' // full name
            + 'ORG:WhiteDevil;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=994403216454:+91 9778042644\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "KARTHIK [WHITEDEVIL]", vcard: vcard}, MessageType.contact)
}

if (regex4.test(message.message)) {

    const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:KARTHIK [WHITEDEVIL]\n' // full name
            + 'ORG:WhiteDevil;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=994403216454:+91 9778042644\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "KARTHIK [WHITEDEVIL]", vcard: vcard}, MessageType.contact)
}
/*
if (regex5.test(message.message)) {

    var reply = await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
	
        const {data} = await axios(`https://api.zeks.me/api/ytplaymp4?apikey=ApiKannappi&q=https://youtu.be/${match[1]}`)
	
        const { status, result } = data


	const videoBuffer = await axios.get(`${result.url_video}`, {responseType: 'arraybuffer'})

        if(!status) return await message.sendMessage('*NO RESULT FOUND🥲*')

	reply = await message.client.sendMessage(message.jid,UPLOAD_ING , MessageType.text, { quoted: message.data });

        let msg = '```'
        msg +=  `TITLE :${result.title}\n\n`
        msg +=  `THUMBNAIL :${result.thumbnail}\n\n`
        msg +=  `SOURCE :${result.source}\n\n`
        msg +=  `SIZE :${result.size}\n\n`
        msg +=  `DOWNLOADING LINK :${result.url_video}\n\n`
        msg += '```' 
	 return await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false , caption: msg , thumbnail: White.tm_b}); 
}
	*/
if (regex6.test(message.message)) {

       await message.client.sendMessage(message.jid, button, MessageType.listMessage);
	
}	
	
}));
    






