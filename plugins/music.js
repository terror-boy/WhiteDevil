/* Copyright (C) 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhiteDevil - TERROR BOY
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

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*MUSIC COMMANDS*
   
_(THIS COMMANDS DOES NOT NEED HANDLERS)_
    
    
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





*🎧 Command:* _music9_
*🎶 Description:* _play music9_





*🎧 Command:* _music10_
*🎶 Description:* _play music10_




*🎧 Command:* _music11_
*🎶 Description:* _play music11_





*🎧 Command:* _music12_
*🎶 Description:* _play music12_




*🎧 Command:* _music13_
*🎶 Description:* _play music13_





*🎧 Command:* _music14_
*🎶 Description:* _play music14_





*🎧 Command:* _music15_
*🎶 Description:* _play music15_





*🎧 Command:* _music16_
*🎶 Description:* _play music16_





*🎧 Command:* _music17_
*🎶 Description:* _play music17_





*🎧 Command:* _music18_
*🎶 Description:* _play music18_






*🎧 Command:* _music19_
*🎶 Description:* _play music19_





*🎧 Command:* _music20_
*🎶 Description:* _play music20_







*_CODED BY MASTER KARTHIK-TERROR-BOY_*
`}) 

}));

/* DON'T COPY THIS CODE BEFORE
 ASKING ME BECAUSE YOU NEED TO
ADD ONE MORE THING IN THIS.
      -TERROR-BOY
*/
