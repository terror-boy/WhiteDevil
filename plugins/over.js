/* Copyright (C) 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhiteDevil - TERROR BOY
*/

const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const Asena = require('../events');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');
const fs = require('fs');

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Asena.addCommand({pattern: 'over ?(.*)', fromMe: true, dontAddCommandList: true, onlyGroup: true, desc: Lang.BAN_DESC}, (async (message, match) => {  
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (Config.BANMSG == 'default') {
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + '```, ' + Lang.BANNED + '```', MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupRemove(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupRemove(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
    else {
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Config.BANMSG, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupRemove(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Config.BANMSG, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupRemove(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
}));
