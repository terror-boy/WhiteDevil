/* Codded by TERROR BOY
IT JUST FOR FUN:)
*/

const Asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const BK = ('It is just for fun');

const code = ('*_📢ANNOUNCEMENT📢_* \n\n\n *WHITEDEVIL IS AVAILABLE NOW*')
Asena.addCommand({pattern: 'back', fromMe: true, deleteCommand: true, desc: BK,}, (async (message, match) => {


        await message.client.sendMessage(
          message.jid,code, MessageType.text);

    

}));
