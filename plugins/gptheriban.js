/* Copyright © 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WHITE DEVIL ----»»» TERROR BOY
*/
const Ktb = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var ANTIT_on = ''
    var ANTIT_off = ''
   
    if (config.LANG == 'EN') {
        l_dsc = 'remove given theri'
        alr_on = '!'
        alr_off = '!'
        ANTIT_off = '*ANTI_THERI TURNED ON*'
        ANTIT_off = '*ANTI_THERI TURNED OFF*'
    }
    if (config.LANG == 'ML') {
        l_dsc = '.'
        alr_on = '!'
        alr_off = '!'
        ANTIT_on = 'ANTI_THERI TURNED ON'
        ANTIT_off = 'ANTI_THERI TURNED Off'
    }
   
    Ktb.addCommand({pattern: 'whitetheri ?(.*)', fromMe: true, desc: l_dsc, usage: '.whitetheri on / of' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTI_THERI']: 'false'
                    } 
                });
                await message.sendMessage(ANTIT_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTI_THERI']: 'true'
                    } 
                });
                await message.sendMessage(ANTIT_on)
        }
    }));
