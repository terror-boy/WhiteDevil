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

     AT = 'ON'
     ATO = 'OFF'
    }

    if (config.LANG == 'ML') {

     AT = 'ON'
     ATO = 'OFF'
    }

 Asena.addCommand({pattern: 'fbgm ?(.*)', fromMe: true,dontAddCommandList: true,desc: 'change theri on/off. example - .wtheri off/on' }, (async (message, match) => {
        if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_DURATION']: '39999600'
                    } 
                });
                await message.sendMessage(AT)
        } else if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_DURATION']: 'false'
                    } 
                });
                await message.sendMessage(ATO)
        }
    }));
