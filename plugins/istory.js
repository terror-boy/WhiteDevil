/* Copyright © 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WHITE DEVIL ----»»» TERROR BOY
*/

const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require ('axios')
const LOAD_ING = "*✅️Connecting To INSTAGRAM*"
const UPLOAD_ING = "*✅️Connected To INSTAGRAM* \n\n\n *DOWNLOADING STORY & UPLOADING IN PROCESS...*"

Ktb.addCommand({pattern: 'igstory ?(.*)', fromMe: false, desc: "Downloads STORY from instagaram" , dontAddCommandList: true }, async (message, match) => {
    
    var reply = await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
    
  const {data} = await axios(`https://xteam.xyz/dl/igs?nama=${match[1]}&APIKEY=ab9942f95c09ca89`)
    const { status, result } = data
     if(!status) return await message.sendMessage('api error')
         let ktb =  await axios.get(`${result.nama}`)
         const msg = `${result.type}`

    reply = await message.client.sendMessage(message.jid,UPLOAD_ING , MessageType.text, { quoted: message.data });
    
    if (type === 'image') return await message.sendMessage(data, MessageType.image, { caption: "*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*", quoted: message.data })
    
    if (type === 'video') return await message.sendMessage(data, MessageType.video, { caption: "*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*", quoted: message.data })
    
});
    








