/* Copyright (C) 2021 TERROR BOY.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhiteDevil - TERROR BOY

 Codded by TERROR BOY
IT JUST FOR FUN:)
*/

const Asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const BY = ('This command for any emergency when the charge is low');

const code = ('```📢ANNOUNCEMENT📢``` \n\n\n *WHITEDEVIL WILL UNAVAILABLE* \n\n\n\n\n  _REASON:LOW BATTERY_')
Asena.addCommand({pattern: 'low battery', fromMe: true, deleteCommand: true, desc: BY,}, (async (message, match) => {


        await message.client.sendMessage(
          message.jid,code, MessageType.text);

    

}));
