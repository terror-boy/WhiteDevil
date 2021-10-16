const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'owner ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:KARTHIK [WHITEDEVIL]\n' // full name
            + 'ORG:WhiteDevil;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=994403216454:+91 9778042644\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "KARTHIK [WHITEDEVIL]", vcard: vcard}, MessageType.contact)
}))
