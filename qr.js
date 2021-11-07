/* Copyright (C) 2021 Karthik_terror-boy.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhiteDevil - Karthik_terror-boy
*/

const chalk = require('chalk');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const fs = require('fs');
async function whatsAsena() {
  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [3, 3234, 9]
  const rows = [
 {title: 'Whitedevil bot support group:-', description: "\n\n*https://chat.whatsapp.com/KDT4Q5F4zq99ubruR5T9k1*", rowId:"wd1"},
 {title: 'Password in heroku:-', description: "\n\n• whitedevil\n• Whitedevil\n\n\n```you can take any one```", rowId:"wd2"},
 {title: 'All bot support group:-', description: "\n\n*https://chat.whatsapp.com/CY7wJC070o04yxfTuT1yPf*", rowId:"wd3"}
]

const sections = [{title: "please check it", rows: rows}]

const button = {
 buttonText: 'Click Me Here!',
 description: "*Hello,Thank you for using Whitedevil*\n\n ```please check it```",
 sections: sections,
 listType: 1
}


  conn.on('connecting', async () => {
    console.log(`${chalk.green.bold('Karthik_terror-boy ')}${chalk.green.bold('-WhiteDevil')}
${chalk.white.italic('WhiteDevilString code recipient')}
${chalk.blue.bold('ℹ️  Connecting WhiteDevil... Please wait.')}`);
  });

  conn.on('open', async () => { 
    console.log(
      chalk.green.bold('WHITEDEVIL QR Code: '),
      'WHITE;;;' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      )
    );
    await conn.sendMessage(
      conn.user.jid,
      'WHITE;;;' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      ),
      MessageType.text
    );
    if (conn.user.jid.startsWith('91')) {
      await conn.sendMessage(
        conn.user.jid,
        '*~___________~* *'+ conn.user.name + ' ~___________~*\n\n*▪️ WhiteDevil Successfully Scanned✅️*\n*▪️Thanks For Choosing WhiteDevil 💞*',
        MessageType.text
      );
      await conn.sendMessage(
        conn.user.jid, fs.readFileSync("./boot/bott.mp3"), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true});
        await conn.sendMessage( conn.user.jid, button, MessageType.listMessage);
        await conn.sendMessage(
        conn.user.jid,
        '*~___________~* *'+ conn.user.name + ' ~___________~*\n\n*THIS IS ANNOUNCEMENT MESSAGE*\n\n*THERE WILL BE NO REPLY FROM MY OWNWER FOR MONDAY-FRIDAY BECAUSE OF BUSY IN CLASS* \n\n *YOU CAN REPORT BUGS & ERRORS IN OFFICIAL BOT GROUP[ https://chat.whatsapp.com/CY7wJC070o04yxfTuT1yPf ]* \n*FOR ALL BOT SUPPORT* \n *YOU SHOULD MENTION ME IN THIS GROUP OR SAY THE NAME OF BOT.......*\n\n\n\n           --- *BOT OWNER*',
        MessageType.text
      );
    } else {
      await conn.sendMessage(
        conn.user.jid,
        '*~__~* *'+ conn.user.name + ' ~__~*\n\n*▪️ WhiteDevil Successfully Scanned✅️*\n*▪️Thanks For Choosing WhiteDevil 💞*',
        MessageType.text
      );
      await conn.sendMessage(
        conn.user.jid, fs.readFileSync("./boot/bott.mp3"), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true});
        await conn.sendMessage( conn.user.jid, button, MessageType.listMessage);
        await conn.sendMessage(
        conn.user.jid,
        '*~__~* *'+ conn.user.name + ' ~__~*\n\n*THIS IS ANNOUNCEMENT MESSAGE*\n\n*THERE WILL BE NO REPLY FROM MY OWNWER FOR MONDAY-FRIDAY BECAUSE OF BUSY IN CLASS* \n\n *YOU CAN REPORT BUGS & ERRORS IN OFFICIAL BOT GROUP[ https://chat.whatsapp.com/CY7wJC070o04yxfTuT1yPf ]* \n*FOR ALL BOT SUPPORT* \n *YOU SHOULD MENTION ME IN THIS GROUP OR SAY THE NAME OF BOT.......*\n\n\n\n           --- *BOT OWNER*',
        MessageType.text
      );
    }
    console.log(
      chalk.green.bold(
        "\n\n Nigalkku sandesham pakarthan \n kaliyunnillegil,whatsapp parishodikkuka \n nigalude numberillekku  code ayachinnu!\n\n\n\n"
      ),
      chalk.green.bold(
        'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
      )
    );
    process.exit(0);
  });

  await conn.connect();
}

whatsAsena();
