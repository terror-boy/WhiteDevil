const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: "OWNER NUMBER"}, (async (message, match) => {

    

const ownr = "*YOU CAN CONTACT MY OWNER,HE WILL HELP YOU.* \n\n *BUT DON'T SPAM IN HIS PM OR DISTURB BY CALLING.*\n*IF HE DOESN'T REPLY WAIT FOR ONE DAY HE WILL REPLY.*"
await message.client.sendMessage(message.jid, ownr, MessageType.text , { quoted: message.data})
}))
