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
const instagram = async (url, key) => {
    const {data} = await axios(`https://zenzapi.xyz/api/downloader/instagram?url=${match[1]}&apikey=farhandqz`)
    
let ktb =  await axios.get(`${result.url}`)
const msg = `${result.type}`

}
Ktb.addCommand({pattern: 'insta ?(.*)', fromMe: false, desc: "Downloads from instagaram" , dontAddCommandList: true }, async (message, match) => {
    
    var reply = await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
    
    const { status, type, data } = await instagram(match[1], 'ktb')
    if (!status) return await message.sendMessage('*❌️SOMETHING WRONG❌️* \n\n ```REASON```: *_API KEY EXPIRED._* \n *Please inform the developer (TERROR-BOY)*')


 reply = await message.client.sendMessage(message.jid,UPLOAD_ING , MessageType.text, { quoted: message.data });
 
    if (type === 'image') return await message.sendMessage(data, MessageType.image, { caption: "*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*", quoted: message.data })
    
    if (type === 'video') return await message.sendMessage(data, MessageType.video, { caption: "*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*", quoted: message.data })
    
});
    
// thanks to :- farhan-dqz
