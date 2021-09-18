/* Copyright © 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WHITE DEVIL ----»»» TERROR BOY
*/

const Hisham = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')


const ANTI_THERI = "➶➶➶➶➶ 𝙒𝙃𝙄𝙏𝙀𝘿𝙀𝙑𝙄𝙇 ➷➷➷➷➷ \n\n\n *·÷±‡±𝐌𝐎𝐍𝐄 𝐈𝐓𝐇 𝐈𝐕𝐈𝐃𝐄 𝐕𝐄𝐍𝐃𝐀.𝐆𝐎𝐎𝐃 𝐁𝐘𝐄🖐🏻🖐±‡±÷·* \n\n *—(••÷[ മോനേ ഇത് ഇവിടെ വേണ്ട.𝔾𝕆𝕆𝔻 𝔹𝕐𝔼🖐🏻🖐🏻 ]÷••)—*"
 if (Config.ANTI_THERI == 'true') {
Hisham.addCommand({on: 'text', fromMe: false, delownsewcmd: false, onlyPm: false }, (async (message, match) => {
        let regexb1ichu = new RegExp('thayoli')
        let regexb2ichu = new RegExp('myre')
        let regexb3ichu = new RegExp('kunna')
        let regexb4ichu = new RegExp('poorimone')
        let regexb5ichu = new RegExp('myr')
        let regexb6ichu = new RegExp('patti')
        let regexb7ichu = new RegExp('oombi')
        let regexb8ichu = new RegExp('thendi')
        let regexb9ichu = new RegExp('thendi')
// export data -(Hisham-muhammed)
          if (regexb1ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + ANTI_THERI + '*', MessageType.text);
             await message.client.groupRemove(message.jid, [message.data.participant]);
          } 
        else if (regexb2ichu.test(message.message)) {
          
           await message.client.sendMessage(message.jid, '*' + ANTI_THERI + '*', MessageType.text);
             await message.client.groupRemove(message.jid, [message.data.participant]);
          }
         else if (regexb3ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + ANTI_THERI + '*', MessageType.text);
             await message.client.groupRemove(message.jid, [message.data.participant]);
          }
        else if (regexb4ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + ANTI_THERI + '*', MessageType.text);
             await message.client.groupRemove(message.jid, [message.data.participant]);
          }
          else if (regexb5ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + ANTI_THERI + '*', MessageType.text);
             await message.client.groupRemove(message.jid, [message.data.participant]);
          }
          else if (regexb6ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + ANTI_THERI + '*', MessageType.text);
             await message.client.groupRemove(message.jid, [message.data.participant]);
          }
         else if (regexb6ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + ANTI_THERI + '*', MessageType.text);
             await message.client.groupRemove(message.jid, [message.data.participant]);
          }
         else if (regexb7ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + ANTI_THERI + '*', MessageType.text);
             await message.client.groupRemove(message.jid, [message.data.participant]);
          }
         else if (regexb8ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + ANTI_THERI + '*', MessageType.text);
             await message.client.groupRemove(message.jid, [message.data.participant]);
          }
         else if (regexb9ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + ANTI_THERI + '*', MessageType.text);
             await message.client.groupRemove(message.jid, [message.data.participant]);
          }
          
}));


}
