/* Copyright (C) 2021 TERROR-BOY

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhiteDevil --->>> TERROR-BOY 
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const SLang = Language.getString('conventer');
const NLang = Language.getString('scrapers');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
var antitheri_var = ''
async function antlch() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        antitheri_var = vars.ANTI_THERI
    });
}
antlch()
var ldc = ''
if (Config.LANG == 'AZ') ldc = '*Bağlantı Aşkarlandı!*'
if (Config.LANG == 'TR') ldc = '*‎Link Tespit Edildi!*'
if (Config.LANG == 'EN') ldc = '➶➶➶➶➶ 𝙒𝙃𝙄𝙏𝙀𝘿𝙀𝙑𝙄𝙇 ➷➷➷➷➷ \n\n\n *·÷±‡±𝐌𝐎𝐍𝐄 𝐈𝐓𝐇 𝐈𝐕𝐈𝐃𝐄 𝐕𝐄𝐍𝐃𝐀.𝐆𝐎𝐎𝐃 𝐁𝐘𝐄🖐🏻🖐±‡±÷·* \n\n *—(••÷[ മോനേ ഇത് ഇവിടെ വേണ്ട.𝔾𝕆𝕆𝔻 𝔹𝕐𝔼🖐🏻🖐🏻 ]÷••)—*'
if (Config.LANG == 'ML') ldc = '➶➶➶➶➶ 𝙒𝙃𝙄𝙏𝙀𝘿𝙀𝙑𝙄𝙇 ➷➷➷➷➷ \n\n\n *·÷±‡±𝐌𝐎𝐍𝐄 𝐈𝐓𝐇 𝐈𝐕𝐈𝐃𝐄 𝐕𝐄𝐍𝐃𝐀.𝐆𝐎𝐎𝐃 𝐁𝐘𝐄🖐🏻🖐±‡±÷·* \n\n *—(••÷[ മോനേ ഇത് ഇവിടെ വേണ്ട.𝔾𝕆𝕆𝔻 𝔹𝕐𝔼🖐🏻🖐🏻 ]÷••)—*'
if (Config.LANG == 'ID') ldc = '*Tautan Terdeteksi!*'
if (Config.LANG == 'PT') ldc = '*Link Detectado!*'
if (Config.LANG == 'RU') ldc = '*Ссылка обнаружена!*'
if (Config.LANG == 'HI') ldc = '*लिंक का पता चला!*'
if (Config.LANG == 'ES') ldc = '*Enlace Detectado!*'
Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (antitheri_var == 'true' && message.jid !== '905511384572-1616356915@g.us') {
        let regex1 = new RegExp('Myre')
        let regex2 = new RegExp('Myr')
        let regex3 = new RegExp('myr')
        let regex4 = new RegExp('myre')
        let regex5 = new RegExp('nude')
        if (regex1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        } 
        else if (regex2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
         else if (regex3.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
        else if (regex4.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
        else if (regex5.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
        else if (message.message.match(/((?:[.]py)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
        else if (message.message.match(/((?:[.]html)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
        else if (message.message.match(/((?:[.]org)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
        else if (message.message.match(/((?:[.]in)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
         else if (message.message.match(/((?:[.]me)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
    }
}));
