/* Copyright (C) 2021 terror-boy
CODDED terror-boy
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhiteDevil
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '919544593237-1613282758@g.us') {

            return;
        }

        if (Config.PLK == 'default') {
            await message.client.sendMessage(message.jid,'WhiteDevil Bot created by *KARTHIK Terror-boy*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.TERRORBOY + 'WhiteDevil Bot created by *KARTHIK Terror-boy*', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '919544593237-1613282758@g.us') {

            return;
        }

        if (Config.TERRORBOY == 'default') {
            await message.client.sendMessage(message.jid,'WhiteDevil Bot created by *KARTHIK Terror-boy*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.TERRORBOY + 'WhiteDevil Bot created by *KARTHIK Terror-boy*', MessageType.text);
        }
    }));
}
