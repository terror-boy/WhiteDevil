/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
RE CODE - KTB 
*/

const Ktb = require('../events');
const {WAConnection , MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const config = require('../config');
const util = require('util')
const parseInt = require('parse-int');
const chalk = require('chalk');
const conn = new WAConnection();

const White = require('../white');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true

var SYSDTXT =  '💻 System status'

var VER = '🧬 Version'

var MSG = config.ALIVEMSG

  Ktb.addCommand({pattern: 'live', fromMe: wk, desc: Lang.ALIVE_DESC}, (async (message, match) => {
    
    var logo = await axios.get (White.Bot, {responseType: 'arraybuffer'})
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: White.tm_b })

    var BUTTHANDLE = '';
    if (/\[(\W*)\]/.test(config.HANDLERS)) {
        BUTTHANDLE = config.HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        BUTTHANDLE = '.';
    }
        
    const buttons = [
        {buttonId: BUTTHANDLE + 'version', buttonText: {displayText: VER }, type: 1},
        {buttonId: BUTTHANDLE + 'status', buttonText: {displayText: SYSDTXT }, type: 1}
    ]
    const buttonMessage = {
        contentText: MSG,
        footerText: '© Terror-boy ©',
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage    
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
}))

Ktb.addCommand({pattern: 'status', fromMe: wk, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text, {quoted: message.data}
    );
}));

Ktb.addCommand({pattern: 'version', fromMe: wk, desc: 'nil', dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
   
    await message.client.sendMessage(message.jid, 
        `*🧬 WhiteDevil Version 🧬*\n\n` + 
        '```Installed version :```\n' +
        config.VERSION + 
        `\n\nCheck official website : https://whitedevil-bot.yolasite.com/`
   , MessageType.text, {quoted: message.data});
    
}));

     
     
   
