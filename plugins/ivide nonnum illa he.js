const Ktb = require('../events');
const Config = require('../config');
const Heroku = require('heroku-client');
const {secondsToHms} = require('./afk');
const got = require('got');
const {MessageType} = require('@adiwajshing/baileys');
const sql = require('./sql/greetings');

const Language = require('../language');
const Lang = Language.getString('heroku');
const Langr = Language.getString('lydia');

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


Ktb.addCommand({ 'handler ?', fromMe: true, dontAddCommandList: true, desc: Lang.GETVAR_DESC}, (async (message, match) => {

        await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        for (vr in vars) {
            if ('HANDLERS'.trim() == vr) return await message.sendMessage("```{} - {}```".format(vr, vars[vr]));
        }
        await message.client.sendMessage(message.jid,Lang.NOT_FOUND, MessageType.text);
    }).catch(async (error) => {
        await message.client.sendMessage(message.jid,error.message, MessageType.text);
    });
}));
