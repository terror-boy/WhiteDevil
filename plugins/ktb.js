/* Coded by KARTHIK-TERROR-BOY
 
NINGAL VENNAMEGILL EDUTHO BUT CREDIT REMOVE CHEYIYARUTH 
*/

const Asena = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const toPDF = require("custom-soffice-to-pdf");
const axios = require('axios')
const Axios = require('axios')

const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'topdf ?(.*)', fromMe: wk, desc: 'convert img to pdf'}, async (message, match) => {

if (!message.reply_message)
      return await message.sendMessage(Lang.REPLY_MSG);
    if (
      message.reply_message.audio ||
      message.reply_message.video ||
      message.reply_message.sticker ||
      message.reply_message.pdf
    )
      return message.sendMessage(Lang.NOT_SUPPORTED);
    toPDF(await message.reply_message.downloadMediaMessage()).then(
      async (pdfBuffer) => {
        return await message.sendMessage(
          pdfBuffer,
          {
            filename:"WHITEDEVIL BOT" + ".pdf",
            mimetype: Mimetype.pdf,
          },
          MessageType.document
        );
      },
      (err) => console.log(`topdf : ${err}`)
    );
  }
);







