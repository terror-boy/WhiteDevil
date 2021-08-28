/* Copyright (C) 2020 Yusuf Usta.
re edit by saidali 
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var THERI_on = ''
    var THERI_off = ''
   
    if (config.LANG == 'EN') {
        l_dsc = 'chilla theri vilichaal spot kick. -bot owner command'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        THERI_on = '*eni chilla theri vilcha kick akkum*'
        THERI_off = '*eni enth theri vennelum vili*'
    }
   
    if (config.LANG == 'HI') {
        l_dsc = 'एंटीलिंक टूल को सक्रिय करता है।'
        alr_on = 'एंटीलिंक पहले से ही खुला है!'
        alr_off = 'एंटीलिंक वर्तमान में बंद है!'
        THERI_on = 'bgm option turndा!'
        THERI_off = 'bgm option turned off'
    }
    if (config.LANG == 'ML') {
        l_dsc = 'chilla theri vilichaal spot kick. -bot owner command'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        THERI_on = '*ᴡʜɪᴛᴇᴅᴇᴠɪʟ* \n\n *𝐄𝐧𝐧𝐢 𝐥𝐢𝐧𝐤𝐮𝐦 𝐭𝐡𝐞𝐫𝐢𝐲𝐮𝐦 𝐢𝐭𝐭𝐚𝐥 𝐬𝐩𝐨𝐭𝐭𝐢𝐥 𝐫𝐞𝐦𝐨𝐯𝐞 𝐜𝐡𝐞𝐲𝐢𝐲𝐮𝐦*'
        THERI_off = '*ᴡʜɪᴛᴇᴅᴇᴠɪʟ* \n\n *𝐄𝐧𝐢 𝐞𝐧𝐭𝐡 𝐥𝐢𝐧𝐤𝐮𝐦 𝐭𝐡𝐞𝐫𝐢𝐲𝐮𝐦 𝐯𝐞𝐧𝐧𝐞𝐥𝐮𝐦 𝐢𝐭𝐭𝐨*'
    }
   
    Asena.addCommand({pattern: 'link ?(.*)', fromMe: true, desc: l_dsc, usage: '.link no / yes' }, (async (message, match) => {
        if (match[1] == 'yes') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['THERI_KICK']: 'false'
                    } 
                });
                await message.sendMessage(THERI_off)
        } else if (match[1] == 'no') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['THERI_KICK']: 'true'
                    } 
                });
                await message.sendMessage(THERI_on)
        }
    }));
