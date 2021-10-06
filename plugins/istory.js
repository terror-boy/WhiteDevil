/* Copyright © 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WHITE DEVIL ----»»» TERROR BOY
*/

const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require("got");
const axios = require ('axios')
const LOAD_ING = "*✅️Connecting To INSTAGRAM*"
const UPLOAD_ING = "*✅️Connected To INSTAGRAM* \n\n\n *DOWNLOADING STORY & UPLOADING IN PROCESS...*"

Ktb.addCommand({pattern: 'story ?(.*)', fromMe: false, desc: "Downloads STORY from instagaram" , dontAddCommandList: true }, async (message, match) => {
    if (match[0].includes('install')) return;
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*need username*', MessageType.text, { quoted: message.data });
    var reply = await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });

