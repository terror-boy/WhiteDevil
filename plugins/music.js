/* Copyright (C) 2021 TERROR BOY
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhiteDevil- TERROR BOY

DON'T COPY PASTE THIS BEFORE ASKING ME
         -TERROR-BOY
*/

const Asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const MC = ('To play music');

const code = ('*𒆜𝙷𝙴𝚁𝙴 𝙸𝚂 𝚃𝙷𝙴 𝙼𝚄𝚂𝙸𝙲 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂👇𒆜* \n\n\n\n\n *🎧 Command:* _m1_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴏᴋᴇʏ ᴏᴋᴀ ʟᴏᴋᴀᴍ* \n\n\n\n *🎧 Command:* _m2_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴏʀᴜ ᴅɪɴᴀᴍ* \n\n\n\n *🎧 Command:* _m3_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ: sʜɪᴠᴀ ᴛʜᴀᴅᴀᴠᴀᴍ* \n\n\n\n *🎧 Command:* _m4_ \n\n\n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴛʜᴀᴛᴛᴜᴍ ᴍᴜᴛᴛᴜᴍ ᴛʜᴀʟʟᴀᴍ* \n\n *🎧 Command:* _m5_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ʏᴀᴀʀᴀɪʏᴜᴍ ɪᴠʟᴏ ᴀᴢʜᴀɢᴀ* \n\n\n\n  *🎧 Command:* _m6_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴀᴍʀɪ sɪ* \n\n\n\n *🎧 Command:* _m7_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴋᴀɴᴄʜɪᴍᴍɪʏᴏ ᴄᴏᴠᴇʀ sᴏɴɢ* \n\n\n\n *🎧 Command:* _m8_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴍᴀɴɪᴋᴇ ᴍᴀɢᴇ ʜɪᴛʜᴇ (ᴍᴀʟᴀʏᴀʟᴀᴍ & ᴛᴀᴍɪʟ ᴠᴇʀsɪᴏɴ)* \n\n\n\n *🎧 Command:* _m9_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴍᴀᴢʜᴀᴛʜᴜʟʟɪᴋᴀʟ (ᴍᴀʟᴇ ᴠᴇʀsɪᴏɴ)* \n\n\n\n *🎧 Command:* _m10_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴘʀɪʏᴀᴍ ᴍᴜsɪᴄ* \n\n\n\n *🎧 Command:* _m11_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴇᴇ ᴋᴀᴛʜᴀʏᴏ* \n\n\n\n *🎧 Command:* _m12_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴇᴋᴀᴀɴᴛʜᴀ ᴛʜᴀᴀʀᴀᴍᴇ* \n\n\n\n *🎧 Command:* _m13_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ɴᴇᴇʀᴏʟᴀᴍ ᴍᴇʟᴇ ᴍᴏᴏᴅᴜᴍ* \n\n\n\n *🎧 Command:* _m14_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:sʏᴇ ʀᴀᴀ ᴛɪᴛʟᴇ sᴏɴɢ* \n\n\n\n *🎧 Command:* _m15_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴋᴜʀᴜᴍʙᴀᴛʜɪ ᴄʜᴜɴᴅᴀʀɪ ɴᴇᴇ* \n\n\n\n *🎧 Command:* _m16_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴋᴜʀᴜᴍʙɪ ᴋᴜʀᴜᴍʙɪ* \n\n\n\n *🎧 Command:* _m17_ \n\n *🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴅɪʟ ᴋᴏ ᴋᴀʀʀᴀʀ ᴀᴀʏᴀ ʀᴇᴘʀɪsᴇ - ɴᴇʜᴀ ᴋᴀᴋᴋᴀʀ* \n\n\n\n\n\n\n *_𝘾𝙊𝘿𝙀𝘿 𝘽𝙔 𝙈𝘼𝙎𝙏𝙀𝙍 𝙆𝘼𝙍𝙏𝙃𝙄𝙆-𝙏𝙀𝙍𝙍𝙊𝙍-𝘽𝙊𝙔_*')

Asena.addCommand({pattern: 'musics', fromMe: false, deleteCommand: false, desc: MC,}, (async (message, match) => {

  

        await message.client.sendMessage(
          message.jid,code, MessageType.text);

    
}));
