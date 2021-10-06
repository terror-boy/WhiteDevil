/* Copyright © 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WHITE DEVIL ----»»» TERROR BOY
*/

const Ktb = require('../events');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');


Ktb.addCommand({pattern: 'glue ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://zenzapi.xyz/api/textpro/gluetext?text=${match[1]}&apikey=whitedevil-terrorboy`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: '*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*'})

}));



Ktb.addCommand({pattern: 'wasted ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

  
    if (match[1] === '') return await message.client.sendMessage(message.jid,"need image url");

    var webimage = await axios.get(`https://zenzapi.xyz/api/image/wasted?image=${match[1]}&apikey=whitedevil-terrorboy`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: '*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*'})

}));

Ktb.addCommand({pattern: 'delete ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

  
    if (match[1] === '') return await message.client.sendMessage(message.jid,"need image url");

    var webimage = await axios.get(`https://zenzapi.xyz/api/image/delete?image=${match[1]}&apikey=whitedevil-terrorboy`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: '*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*'})

}));
