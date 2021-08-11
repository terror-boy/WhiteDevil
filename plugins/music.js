/* Copyright (C) 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhiteDevil - TERROR BOY
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'music', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://imgur.com/qIivLac.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*MUSIC COMMANDS*
    _(THIS COMMANDS DOESNOT NEED HANDLERS)_
    
    
*🎧 Command:* _music1_
*🎶 Description:* _play music1_


*🎧 Command:* _music2_
*🎶 Description:* _play music2_



*🎧 Command:* _music3_
*🎶 Description:* _play music3_




*🎧 Command:* _music4_
*🎶 Description:* _play music4_



*🎧 Command:* _music5_
*🎶 Description:* _play music5_




*🎧 Command:* _music6_
*🎶 Description:* _play music6_




*🎧 Command:* _music7_
*🎶 Description:* _play music7_





*🎧 Command:* _music8_
*🎶 Description:* _play music8_






*_CODED BY MASTER KARTHIK-TERROR-BOY_*
`}) 

})); 
