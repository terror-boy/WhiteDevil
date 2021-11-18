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

     AT = ''
     ATO = ''

    }

    if (config.LANG == 'ML') {

     AT = ''
     ATO = ''
    }

 Asena.addCommand({pattern: 'callblock ?(.*)', fromMe: true,dontAddCommandList: true,desc: 'change theri on/off. example - .wtheri off/on' }, (async (message, match) => {
        if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CB']: 'true'
                    } 
                });
                await message.sendMessage(AT)
        } else if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CB']: 'false'
                    } 
                });
                await message.sendMessage(ATO)
        }
    }));
