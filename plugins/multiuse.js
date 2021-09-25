/* Copyright © 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WHITE DEVIL ----»»» TERROR BOY
*/

const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require ('axios')
const LOAD_ING = "*✅️Connecting To INSTAGRAM*"
const UPLOAD_ING = "*✅️Connected To INSTAGRAM* \n\n\n *DOWNLOADING & UPLOADING IN PROCESS...*"

Ktb.addCommand({pattern: 'insta ?(.*)', fromMe: true, desc: "Downloads from instagaram" , dontAddCommandList: true }, async (message, match) => {
    
    const {data} = await axios(`https://zenzapi.xyz/api/downloader/instagram?url=${match[1]}&apikey=farhandqz`)
    const { status, result } = data
if(!status) return await message.sendMessage('not found')
var reply = await message.client.sendMessage(message.jid, LOAD_ING ,MessageType.text);

let ktb =  await axios.get(`${result.url}`)
const msg = `${result.type}`
 reply = await message.client.sendMessage(message.jid,UPLOAD_ING ,MessageType.text);

    if (msg === 'image') { await message.sendMessage(Buffer.from(ktb.data), MessageType.image,{ caption: "*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*" }) }

    if (msg === 'video') { await message.sendMessage(Buffer.from(ktb.data), MessageType.video,{ caption: "*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*" }) }
    
 return await message.client.sendMessage(message.jid, "*❌️SOMETHING WRONG❌️* \n\n ```REASON```: *_API KEY EXPIRED._* \n *Please inform the developer (TERROR-BOY)*", MessageType.text);
});
