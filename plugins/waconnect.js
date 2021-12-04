/* Copyright (C) 2021 Karthik_terror-boy.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhiteDevil - Karthik_terror-boy
*/

const Ktb = require('../events');

const chalk = require('chalk');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');

const qrcode = require('qrcode')
const fs = require('fs');

    Ktb.addCommand({pattern: 'tmp$', fromMe: true, desc: 'testing'}, (async (message, match) => {   

  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [3, 3234, 9]
 conn.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
       	bot = await client.sendMessage(message.jid, buffer, MessageType.image, {caption:'Scan QR to become a bot\n*Rules:*\nQR will be changed every 30 seconds'})
    	setTimeout(() => {
       	client.deleteMessage(id, bot.key)
       },30000)
    })
    conn.on('connecting', () => {
    })
    conn.on('open', () => {
    	conn.sendMessage(
      conn.user.jid,
      'WHITE;;;' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      ),
      MessageType.text
    );


    process.exit(0);
  });
  await conn.connect()
}))
