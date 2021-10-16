const Ktb = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

Ktb.addCommand({ pattern: 'ktb ?(.*)', fromMe: false, desc: b64, usage: usage }, async (message, match) => {


// send a contact!
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:KARTHIK \n' 
            + 'ORG:WHITEDEVIL;\n'
            + 'TEL;type=CELL;type=VOICE;waid=919778042644:+91 97780 42644\n' 
            + 'END:VCARD'
const sentMsg  = await conn.sendMessage(id, {displayname: "WHITEDEVIL", vcard: vcard}, MessageType.contact)

});
