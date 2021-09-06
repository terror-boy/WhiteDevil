const Asena = require('../events');

const {MessageType,Mimetype} = require('@adiwajshing/baileys');

const fs = require('fs');

const axios = require('axios');

const FormData = require('form-data');

const ffmpeg = require('fluent-ffmpeg');

const I_DES = "FIND IMAGE ✨️"

Asena.addCommand({pattern: 'url', fromMe: false, desc: I_DES }, (async (message, match) => {

    if (message.reply_message === false) return await message.client.sendMessage(message.jid, '* reply aayitt koduk!', MessageType.text);


var formdata = new FormData();
formdata.append("refresh_token", "{{refreshToken}}");
formdata.append("client_id", "{{clientId}}");
formdata.append("client_secret", "{{clientSecret}}");
formdata.append("grant_type", "refresh_token");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.imgur.com/oauth2/token", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => 
     console.log('error', error));
  
        });


}));
