const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('ok');

Asena.addCommand({pattern: 'ok', fromMe: false, desc: Lang.OK}, (async (message, match) => {


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `!ok
`}) 

}));
