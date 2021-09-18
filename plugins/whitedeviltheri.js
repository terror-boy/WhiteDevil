const Asena = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;


 var AT = ''
 var ATO = ''

  if (config.LANG == 'EN') {

     AT = 'ᴀɴᴛɪ ᴛʜᴇʀɪ ᴏɴ'
     ATO = 'ᴀɴᴛɪ ᴛʜᴇʀɪ ᴏꜰꜰ'

    }

    if (config.LANG == 'ML') {

     AT = 'ᴀɴᴛɪ ᴛʜᴇʀɪ ᴏɴ'
     ATO = 'ᴀɴᴛɪ ᴛʜᴇʀɪ ᴏꜰꜰ'
    }

 Asena.addCommand({pattern: 'wtheri ?(.*)', fromMe: true,dontAddCommandList: true,desc: 'change theri on/off. example - .wtheri off/on' }, (async (message, match) => {
        if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ALL_LINK_BAN']: 'true'
                    } 
                });
                await message.sendMessage(AT)
        } else if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ALL_LINK_BAN']: 'false'
                    } 
                });
                await message.sendMessage(ATO)
        }
    }));
