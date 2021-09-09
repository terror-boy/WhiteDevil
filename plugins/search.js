/* Copyright (C) 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WHITE DEVIL-->> TERROR BOY
*/

const KTB = require('../events')
const {MessageType} = require('@adiwajshing/baileys');
const QueenAmdi = require('queenamdi-public-1');
const axios = require('axios')
const FormData = require('form-data');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const Config = require('../config');
let FM = Config.WORKTYPE == 'public' ? false : true
const { fetchJson, getBuffer } = require('./fetcher')

const Language = require('../language')
const Lang = Language.getString('search')


KTB.addCommand(({ pattern: 'mo ?(.*)', fromMe: FM, desc: Lang.USAGE,  deleteCommand: false }, async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data});    
  var load = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

  var apikey = await QueenAmdi.api()

  get_result = await fetchJson('https://api.lolhuman.xyz/api/moddroid?apikey=' + apikey.key + `&query=${match[1]}`)
  get_result = get_result.result
    ini_txt = ""
        for (var x of get_result) {
        ini_txt += `📚 Name : ${x.name}\n`
        ini_txt += `⚙️ Link : ${x.link}\n\n`
        }

      await message.client.sendMessage(message.jid, '*❖ WHITEDEVIL Search Engine ❖*\n' + Lang.MODDROID + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ini_txt,MessageType.text, {quoted: message.data});
      return await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
}));

KTB.addCommand({ pattern: 'spo ?(.*)', fromMe: FM, desc: Lang.SPO_USAGE,  deleteCommand: false }, async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data});    
  var load = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

  var apikey = await QueenAmdi.api()

  get_result = await fetchJson('https://api.lolhuman.xyz/api/spotifysearch?apikey=' + apikey.key + `&query=${match[1]}`)
  get_result = get_result.result
    ini_txt = ""
        for (var x of get_result) {
        ini_txt += `📚 Title : ${x.title}\n`
        ini_txt += `🕺🏻 Artists : ${x.artists}\n`
        ini_txt += `⚙️ Link : ${x.link}\n\n`
        }

  await message.client.sendMessage(message.jid, '*❖ Nexa Search Engine ❖*\n' + Lang.SPOTIFY + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ini_txt,MessageType.text, {quoted: message.data});
  return await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
});

KTB.addCommand({ pattern: 'getpack ?(.*)', fromMe: FM, desc: Lang.APK_DESC,  deleteCommand: false }, async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data});    
  var load = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

  var apikey = await QueenAmdi.api()

  get_result = await fetchJson('https://api.lolhuman.xyz/api/playstore?apikey=' + apikey.key + `&query=${match[1]}`)
  get_result = get_result.result
    ini_txt = ""
        for (var x of get_result) {
        ini_txt += `📚 Name : ${x.title}\n`
        ini_txt += `💵 Price : ${x.priceText}\n`
        ini_txt += `👨🏻‍💻 Developer : ${x.developer}\n`
        ini_txt += `⚙️ Playstore Link : ${x.url}\n`
        ini_txt += `📁 Package name : ${x.appId}\n\n`
        }

  await message.client.sendMessage(message.jid, '*❖ WHITEDEVIL Search Engine ❖*\n' + Lang.PSTORE + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ini_txt,MessageType.text, {quoted: message.data});
  return await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})


});
