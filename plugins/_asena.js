/* Copyright (C) 2020 TERROR-BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
White Devil - TERROR-BOY
*/

const Asena = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const fs = require("fs")

const Language = require('../language');
const Lang = Language.getString('_asena');

let td = Config.WORKTYPE == 'public' ? false : true

 Asena.addCommand({pattern: 'help ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + Lang.EXAMPLE + ': ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            );
            await message.client.sendMessage(
                message.jid,  '*WhiteDevil* \n\n     *Created by ©TERROR BOY©* \n\n ◄━━━━━━━⦁⦁◯\n   ⦁◊═⦁ WhiteDevil ⦁═◊⦁\n*◯⦁⦁━━━━━━━━►\n\n\n' + CMD_HELP, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./White/image/logo.jpg')}}}});        
        } 
        else {
            var CMD_HELP = '';
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + Lang.EXAMPLE + ': ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n\n';
                        }
                        if (command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.warn + '```\n\n'
                        }
                        if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if  (command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                        }
                        if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid,  '*WhiteDevil* \n\n     *Created by ©TERROR BOY©* \n\n ◄━━━━━━━⦁⦁◯\n   ⦁◊═⦁ WhiteDevil ⦁═◊⦁\n*◯⦁⦁━━━━━━━━►\n\n\n' + CMD_HELP, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./White/image/logo.jpg')}}}});
          
        }
    }));

    

    Asena.addCommand({pattern: 'list ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
        
        var CMD_HELP = '';
        if (match[1] === '') {
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + Lang.EXAMPLE + ': ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            );
            await message.client.sendMessage(
                message.jid, '*WhiteDevil* \n\n     *Created by ©TERROR BOY©* \n\n ◄━━━━━━━⦁⦁◯\n   ⦁◊═⦁ WhiteDevil ⦁═◊⦁\n*◯⦁⦁━━━━━━━━►\n\n\n' + CMD_HELP, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./White/image/logo.jpg')}}}});
        } 
        else {
            var CMD_HELP = '';
            
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + Lang.EXAMPLE + ': ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n\n';
                        }
                        if (command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.warn + '```\n\n'
                        }
                        if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if  (command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                        }
                        if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid, '*WhiteDevil* \n\n     *Created by ©TERROR BOY©* \n\n ◄━━━━━━━⦁⦁◯\n   ⦁◊═⦁ WhiteDevil ⦁═◊⦁\n*◯⦁⦁━━━━━━━━►\n\n\n' + CMD_HELP, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./White/image/logo.jpg')}}}});
           
        }
    }));

