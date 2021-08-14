const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('music');

Asena.addCommand({pattern: 'music', fromMe: false, desc: Lang.MC}, (async (message, match) => {


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `!ok
`}) 

}));
