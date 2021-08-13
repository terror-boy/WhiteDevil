/* Copyright (C) 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhiteDevil - TERROR BOY

DON'T COPY THIS CODE BEFORE
 ASKING ME BECAUSE YOU NEED TO
ADD ONE MORE THING IN THIS.
        -TERROR-BOY
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('music');

Asena.addCommand({pattern: 'music', fromMe: false, desc: Lang.MC}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://imgur.com/qIivLac.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*🎧MUSIC COMMANDS🎧👇*
   
_(THIS COMMANDS DOES NOT NEED HANDLERS)_/n/n/n/n/n/n*🎧 Command:* _m1_ /n/n *🎶Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴏᴋᴇʏ ᴏᴋᴀ ʟᴏᴋᴀᴍ* /n/n/n/n *🎧 Command:* _m2_/n/n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴏʀᴜ ᴅɪɴᴀᴍ* /n/n/n/n *🎧 Command:* _m3_/n/n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ: sʜɪᴠᴀ ᴛʜᴀᴅᴀᴠᴀᴍ*  /n/n/n/n *🎧 Command:* _m4_/n/n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴛʜᴀᴛᴛᴜᴍ ᴍᴜᴛᴛᴜᴍ ᴛʜᴀʟʟᴀᴍ* /n/n/n/n *🎧 Command:* _m5_/n/n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ʏᴀᴀʀᴀɪʏᴜᴍ ɪᴠʟᴏ ᴀᴢʜᴀɢᴀ* /n/n/n/n *🎧 Command:* _m6_/n/n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴀᴍʀɪ sɪ* /n/n/n/n *🎧 Command:* _m7_/n/n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴋᴀɴᴄʜɪᴍᴍɪʏᴏ ᴄᴏᴠᴇʀ sᴏɴɢ* /n/n/n/n *🎧 Command:* _m8_/n/n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴍᴀɴɪᴋᴇ ᴍᴀɢᴇ ʜɪᴛʜᴇ (ᴍᴀʟᴀʏᴀʟᴀᴍ & ᴛᴀᴍɪʟ ᴠᴇʀsɪᴏɴ)* /n/n/n/n/n/n/n/n *_𝘾𝙊𝘿𝙀𝘿 𝘽𝙔 𝙈𝘼𝙎𝙏𝙀𝙍 𝙆𝘼𝙍𝙏𝙃𝙄𝙆-𝙏𝙀𝙍𝙍𝙊𝙍-𝘽𝙊𝙔_*
`}) 

}));
