/* Copyright (C) 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhiteDevil - TERROR BOY
*/


/* DON'T COPY THIS CODE BEFORE
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
   
_(THIS COMMANDS DOES NOT NEED HANDLERS)_
    
_(blank description means songs need to add)_
    
        
*🎧 Command:* _m1_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴏᴋᴇʏ ᴏᴋᴀ ʟᴏᴋᴀᴍ*

       
*🎧 Command:* _m2_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴏʀᴜ ᴅɪɴᴀᴍ*
    
    
*🎧 Command:* _m3_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ: sʜɪᴠᴀ ᴛʜᴀᴅᴀᴠᴀᴍ*
    
    
*🎧 Command:* _m4_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴛʜᴀᴛᴛᴜᴍ ᴍᴜᴛᴛᴜᴍ ᴛʜᴀʟʟᴀᴍ*
    
    
*🎧 Command:* _m5_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ʏᴀᴀʀᴀɪʏᴜᴍ ɪᴠʟᴏ ᴀᴢʜᴀɢᴀ*
    
    
*🎧 Command:* _m6_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴀᴍʀɪ sɪ*

    
    
*🎧 Command:* _m7_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴋᴀɴᴄʜɪᴍᴍɪʏᴏ ᴄᴏᴠᴇʀ sᴏɴɢ*
    
    
*🎧 Command:* _m8_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴍᴀɴɪᴋᴇ ᴍᴀɢᴇ ʜɪᴛʜᴇ (ᴍᴀʟᴀʏᴀʟᴀᴍ & ᴛᴀᴍɪʟ ᴠᴇʀsɪᴏɴ)*

    
    
*🎧 Command:* _m9_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴍᴀᴢʜᴀᴛʜᴜʟʟɪᴋᴀʟ (ᴍᴀʟᴇ ᴠᴇʀsɪᴏɴ)*

    
    
*🎧 Command:* _m10_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴘʀɪʏᴀᴍ ᴍᴜsɪᴄ*
    
    
*🎧 Command:* _m11_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴇᴇ ᴋᴀᴛʜᴀʏᴏ*

    
    
*🎧 Command:* _m12_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴇᴋᴀᴀɴᴛʜᴀ ᴛʜᴀᴀʀᴀᴍᴇ*

    
    
*🎧 Command:* _m13_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ɴᴇᴇʀᴏʟᴀᴍ ᴍᴇʟᴇ ᴍᴏᴏᴅᴜᴍ*
    
    
*🎧 Command:* _m14_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:sʏᴇ ʀᴀᴀ ᴛɪᴛʟᴇ sᴏɴɢ*

    
    
*🎧 Command:* _m15_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴋᴜʀᴜᴍʙᴀᴛʜɪ ᴄʜᴜɴᴅᴀʀɪ ɴᴇᴇ*

    
    
*🎧 Command:* _m16_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴋᴜʀᴜᴍʙɪ ᴋᴜʀᴜᴍʙɪ*

    
    
*🎧 Command:* _m17_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:ᴅɪʟ ᴋᴏ ᴋᴀʀʀᴀʀ ᴀᴀʏᴀ ʀᴇᴘʀɪsᴇ - ɴᴇʜᴀ ᴋᴀᴋᴋᴀʀ*

    
    
*🎧 Command:* _m18_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:*

    
    
*🎧 Command:* _m19_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:*

    
    
*🎧 Command:* _m20_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:*

    
    
*🎧 Command:* _m21_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:*

    
    
*🎧 Command:* _m22_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:*

    
    
*🎧 Command:* _m23_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:*

    
    
*🎧 Command:* _m24_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:*

    
    
*🎧 Command:* _m25_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:*

    
    
*🎧 Command:* _m26_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:*

    
    
*🎧 Command:* _m27_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:*

    
    
*🎧 Command:* _m28_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:*

    
    
*🎧 Command:* _m29_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:*

    
    
*🎧 Command:* _m30_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:*

    
    
*🎧 Command:* _m31_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:*

    
    
*🎧 Command:* _m32_

*🎶 Description:* *ᴛᴏ ᴘʟᴀʏ sᴏɴɢ:*




*_𝘾𝙊𝘿𝙀𝘿 𝘽𝙔 𝙈𝘼𝙎𝙏𝙀𝙍 𝙆𝘼𝙍𝙏𝙃𝙄𝙆-𝙏𝙀𝙍𝙍𝙊𝙍-𝘽𝙊𝙔_*
`}) 

}));












/* font generator: https://coolsymbol.com/cool-fancy-text-generator.html
*/
