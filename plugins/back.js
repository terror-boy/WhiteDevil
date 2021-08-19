/* Copyright (C) 2021 TERROR BOY.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhiteDevil - TERROR BOY

 Codded by TERROR BOY
IT JUST FOR FUN:)
*/


const Asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const BK = ('It is just for fun');

const code = ('```📢ANNOUNCEMENT📢``` \n\n\n *WHITEDEVIL IS AVAILABLE NOW*')
Asena.addCommand({pattern: 'back', fromMe: true, deleteCommand: true, desc: BK,}, (async (message, match) => {


        await message.client.sendMessage(
          message.jid,code, MessageType.text);

    

}));
