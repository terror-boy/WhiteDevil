/* COPYRIGHT © TOXIC DEVIL
   RE-CODED - TERROR BOY
*/
let Asena = require('../events');
let Config = require('../config');
let fs = require('fs');
let {
    MessageType
} = require('@adiwajshing/baileys');
let Language = require('../language');
let Lang = Language.getString('list');
let td = Config.WORKTYPE == 'public' ? false: true
let hrs = new Date().getHours()

var wish = ''
var wishml = ''
var wishid = ''
var anti_link = ''
var auto_bio = ''
var language = ''
var MSG = ''
var FMSG = ''
if (hrs < 12) wish = 'May today bring you the joys of yesterday’s hopes! Good Morning ⛅', wishml = 'ഇന്നലത്തെ പ്രതീക്ഷകളുടെ സന്തോഷം ഇന്ന് നിങ്ങൾക്ക് നൽകട്ടെ! സുപ്രഭാതം ⛅', wishid = 'Semoga hari ini membawakan Anda kegembiraan dari harapan kemarin! Selamat pagi ⛅'
if (hrs >= 12 && hrs <= 17) wish = 'Wishing you a Healthy & Happy Fabulous Noon! Good Afternoon 🌞', wishml = 'നിങ്ങൾക്ക് ആരോഗ്യകരവും സന്തോഷകരവുമായ അതിശയകരമായ ഉച്ചഭക്ഷണം ആശംസിക്കുന്നു! ഗുഡ് ആഫ്റ്റർനൂൺ 🌞', wishid - 'Semoga Anda Sehat & Selamat Siang yang Luar Biasa! Selamat siang 🌞'
if (hrs >= 17 && hrs <= 19) wish = 'May the setting sun take down all your sufferings with it and make you hopeful for a new day! Good Evening 🌥', wishml = 'അസ്തമയ സൂര്യൻ നിങ്ങളുടെ എല്ലാ കഷ്ടപ്പാടുകളും ഇല്ലാതാക്കുകയും ഒരു പുതിയ ദിവസത്തിനായി നിങ്ങളെ പ്രതീക്ഷിക്കുകയും ചെയ്യട്ടെ! ഗുഡ് ഈവനിംഗ് 🌥', wishid = 'Semoga matahari terbenam menghapus semua penderitaan Anda dengannya dan membuat Anda berharap untuk hari yang baru! Selamat malam 🌥'
if (hrs >= 19 && hrs <= 24) wish = 'Touch your heart, close your eyes, make a wish & Sleep! Good night 🌙', wishml = 'നിങ്ങളുടെ ഹൃദയത്തിൽ സ്പർശിക്കുക, കണ്ണുകൾ അടയ്ക്കുക, നിങ്ങളുടെ മനസ്സിൽ ഒരു ആഗ്രഹം പറയുകയും ഉറങ്ങുകയും ചെയ്യുക! ശുഭ രാത്രി 🌙', wishid = 'Sentuh hatimu, pejamkan matamu, buat permohonan & Tidur! Selamat malam 🌙'
if (Config.ANTILINK == 'true') anti_link = 'On'
if (Config.ANTILINK == 'false') anti_link = 'Off'
if (Config.AUTOBIO == 'true') auto_bio = 'On'
if (Config.AUTOBIO == 'false') auto_bio = 'Off'
if (Config.LANG == 'EN') language = 'English', FMSG = 'Have a Nice Day 💖\n\n```Git:``` *'+Config.GIT+'*\n\n```Thank You For using WhiteDevil 💕```\n*© WhiteDevil, Made By Terror Boy*\n\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n   *⦁◊═⦁ WhiteDevil ⦁═◊⦁*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*', MSG = '*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n   *⦁◊═⦁ WhiteDevil ⦁═◊⦁*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n\nHi *user!*,\n*'+wish+'*\n\n*◆ BOT INFO ◆*\n\n```▣ Developer:``` *TERROR BOY*\n```▣ Owner:``` *'+Config.OWNER+'*\n```▣ Contact Owner:``` *wa.me/'+Config.OWNERNUM+'*\n```▣ Version:``` *'+Config.VERSION+'*\n```▣ Branch:``` *'+Config.BRANCH+'*\n```▣ Language:``` *'+language+'*\n```▣ Auto Bio:``` *'+auto_bio+'*\n```▣ Antilink:``` *'+anti_link+'*\n```▣ Work Type:``` *'+Config.WORKTYPE+'*\n\n∎ ⇓ *Commands* ⇓ ∎\n\n'
if (Config.LANG == 'ML') language = 'മലയാളം', FMSG = 'ഒരു നല്ല ദിനം ആശംസിക്കുന്നു 💖\n\n```ഗിറ്റ്:``` *'+Config.GIT+'*\n\n```WhiteDevil ഉപയോഗിച്ചതിന് നന്ദി 💕```\n*© WhiteDevil, ഉണ്ടാക്കിയത് TERROR BOY*\n\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n   *⦁◊═⦁ WhiteDevil ⦁═◊⦁*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*', MSG = '*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n   *⦁◊═⦁ WhiteDevil ⦁═◊⦁*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n\nനമസ്കാരം *user!*,\n*'+wishml+'*\n\n*◆ ബോട്ട് വിവരം ◆*\n\n```▣ ഡെവലപ്പർ:``` *TERROR BOY*\n```▣ ഉടമ:``` *'+Config.OWNER+'*\n```▣ ഉടമയുമായി ബന്ധപ്പെടുക:``` *wa.me/'+Config.OWNERNUM+'*\n```▣ Version:``` *'+Config.VERSION+'*\n```▣ Branch:``` *'+Config.BRANCH+'*\n```▣ ഭാഷ:``` *'+language+'*\n```▣ ഓട്ടോ ബയോ:``` *'+auto_bio+'*\n```▣ ആന്റി ലിങ്ക്:``` *'+anti_link+'*\n```▣ വര്‍ക്ക്‌ തരം:``` *'+Config.WORKTYPE+'*\n\n∎ ⇓ *കമാൻഡുകൾ* ⇓ ∎\n\n'
if (Config.LANG == 'ID') language = 'Indonasian', FMSG = 'Semoga harimu menyenangkan 💖\n\n```Git:``` *'+Config.GIT+'*\n\n```Terima kasih telah menggunakan WhiteDevil 💕```\n*© WhiteDevil, Dibuat oleh TERROR BOY*\n\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n   *⦁◊═⦁ WhiteDevil ⦁═◊⦁*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*', MSG = '*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n   *⦁◊═⦁ WhiteDevil ⦁═◊⦁*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n\nHai *user!*,\n*'+wishid+'*\n\n*◆ INFORMASI BOT ◆*\n\n```▣ Pengembang:``` *TERROR BOY*\n```▣ Pemilik:``` *'+Config.OWNER+'*\n```▣ Version:``` *'+Config.VERSION+'*\n```▣ Branch:``` *'+Config.BRANCH+'*\n```▣ Hubungi Pemilik:``` *wa.me/'+Config.OWNERNUM+'*\n```▣ Bahasa:``` *'+language+'*\n```▣ Bio otomatis:``` *'+auto_bio+'*\n```▣ Anti Tautan:``` *'+anti_link+'*\n```▣ Jenis Pekerjaan:``` *'+Config.WORKTYPE+'*\n\n∎ ⇓ *Perintah* ⇓ ∎\n\n'

WhatsAlexa.addCommand({
    pattern: 'list ?(.*)', fromMe: td, dontAddCommandList: true
}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            Asena.commands.map(
                async (command) => {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var match = [command.pattern];
                    }

                    var HANDLER = '';

                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]): command.pattern) + (command.desc === '' ? '```\n\n': '```\n');
                    if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n': '```\n');
                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            );

            await message.client.sendMessage(
                message.jid,
                MSG + CMD_HELP + FMSG,
                MessageType.text,
                {
                    contextInfo: {
                        forwardingScore: 49,
                        isForwarded: true
                    },
                    quoted: {
                        key: {
                            fromMe: false,
                            participant: `0@s.whatsapp.net`,
                            ...(message.jid ? {
                                remoteJid: "status@broadcast"
                            }: {})
                        },
                        message: {
                            "imageMessage": {
                                "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                                "mimetype": "image/jpeg",
                                "caption": "◄━━━━━━━⦁⦁ WhiteDevil Menu ⦁⦁━━━━━━━━►",
                                "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                                "fileLength": "28777",
                                "height": 1080,
                                "width": 1079,
                                "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                                "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                                "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                                "mediaKeyTimestamp": "1610993486",
                                "jpegThumbnail": fs.readFileSync('./src/image/Whitedevil.png')}}}});
        } else {

            var CMD_HELP = '';
            WhatsAlexa.commands.map(
                async (command) => {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var cmatch = [command.pattern];
                    }

                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';

                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]): command.pattern) + (command.desc === '' ? '```\n\n': '```\n');
                        if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n': '```\n');
                        if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid, MSG + CMD_HELP + FMSG, MessageType.text, {
                    contextInfo: {
                        forwardingScore: 49, isForwarded: true
                    }, quoted: {
                        key: {
                            fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? {
                                remoteJid: "status@broadcast"
                            }: {})
                        }, message: {
                            "imageMessage": {
                                "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "◄━━━━━━━⦁⦁ WhiteDevil Menu ⦁⦁━━━━━━━━►", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/image/Whitedevil.png')}}}});
        }
    }));

WhatsAlexa.addCommand({
    pattern: 'menu ?(.*)', fromMe: td, dontAddCommandList: true
}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            Asena.commands.map(
                async (command) => {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var match = [command.pattern];
                    }

                    var HANDLER = '';

                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]): command.pattern) + (command.desc === '' ? '```\n\n': '```\n');
                    if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n': '```\n');
                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            );

            await message.client.sendMessage(
                message.jid,
                MSG + CMD_HELP + FMSG,
                MessageType.text,
                {
                    contextInfo: {
                        forwardingScore: 49,
                        isForwarded: true
                    },
                    quoted: {
                        key: {
                            fromMe: false,
                            participant: `0@s.whatsapp.net`,
                            ...(message.jid ? {
                                remoteJid: "status@broadcast"
                            }: {})
                        },
                        message: {
                            "imageMessage": {
                                "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                                "mimetype": "image/jpeg",
                                "caption": "◄━━━━━━━⦁⦁ WhiteDevil Menu ⦁⦁━━━━━━━━►",
                                "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                                "fileLength": "28777",
                                "height": 1080,
                                "width": 1079,
                                "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                                "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                                "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                                "mediaKeyTimestamp": "1610993486",
                                "jpegThumbnail": fs.readFileSync('./src/image/Whitedevil.png')}}}});
        } else {

            var CMD_HELP = '';
            Asena.commands.map(
                async (command) => {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var cmatch = [command.pattern];
                    }

                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';

                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]): command.pattern) + (command.desc === '' ? '```\n\n': '```\n');
                        if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n': '```\n');
                        if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid, MSG + CMD_HELP + FMSG, MessageType.text, {
                    contextInfo: {
                        forwardingScore: 49, isForwarded: true
                    }, quoted: {
                        key: {
                            fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? {
                                remoteJid: "status@broadcast"
                            }: {})
                        }, message: {
                            "imageMessage": {
                                "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "◄━━━━━━━⦁⦁ WhiteDevil Menu ⦁⦁━━━━━━━━►", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/image/Whitedevil.png')}}}});
        }
    }));

Asena.addCommand({
    pattern: 'help ?(.*)', fromMe: td, dontAddCommandList: true
}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            Asena.commands.map(
                async (command) => {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var match = [command.pattern];
                    }

                    var HANDLER = '';

                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]): command.pattern) + (command.desc === '' ? '```\n\n': '```\n');
                    if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n': '```\n');
                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            );

            await message.client.sendMessage(
                message.jid,
                MSG + CMD_HELP + FMSG,
                MessageType.text,
                {
                    contextInfo: {
                        forwardingScore: 49,
                        isForwarded: true
                    },
                    quoted: {
                        key: {
                            fromMe: false,
                            participant: `0@s.whatsapp.net`,
                            ...(message.jid ? {
                                remoteJid: "status@broadcast"
                            }: {})
                        },
                        message: {
                            "imageMessage": {
                                "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                                "mimetype": "image/jpeg",
                                "caption": "◄━━━━━━━⦁⦁ WhiteDevil Menu ⦁⦁━━━━━━━━►",
                                "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                                "fileLength": "28777",
                                "height": 1080,
                                "width": 1079,
                                "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                                "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                                "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                                "mediaKeyTimestamp": "1610993486",
                                "jpegThumbnail": fs.readFileSync('./src/image/Whitedevil.png')}}}});
        } else {

            var CMD_HELP = '';
            Asena.commands.map(
                async (command) => {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var cmatch = [command.pattern];
                    }

                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';

                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]): command.pattern) + (command.desc === '' ? '```\n\n': '```\n');
                        if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n': '```\n');
                        if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid, MSG + CMD_HELP + FMSG, MessageType.text, {
                    contextInfo: {
                        forwardingScore: 49, isForwarded: true
                    }, quoted: {
                        key: {
                            fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? {
                                remoteJid: "status@broadcast"
                            }: {})
                        }, message: {
                            "imageMessage": {
                                "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "◄━━━━━━━⦁⦁ WhiteDevil Menu ⦁⦁━━━━━━━━►", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/image/Whitedevil.png')}}}});
        }
    }));

Asena.addCommand({
    pattern: 'wd ?(.*)', fromMe: td, dontAddCommandList: true
}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            WhatsAlexa.commands.map(
                async (command) => {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var match = [command.pattern];
                    }

                    var HANDLER = '';

                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]): command.pattern) + (command.desc === '' ? '```\n\n': '```\n');
                    if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n': '```\n');
                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            );

            await message.client.sendMessage(
                message.jid,
                MSG + CMD_HELP + FMSG,
                MessageType.text,
                {
                    contextInfo: {
                        forwardingScore: 49,
                        isForwarded: true
                    },
                    quoted: {
                        key: {
                            fromMe: false,
                            participant: `0@s.whatsapp.net`,
                            ...(message.jid ? {
                                remoteJid: "status@broadcast"
                            }: {})
                        },
                        message: {
                            "imageMessage": {
                                "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                                "mimetype": "image/jpeg",
                                "caption": "◄━━━━━━━⦁⦁ WhiteDevil Menu ⦁⦁━━━━━━━━►",
                                "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                                "fileLength": "28777",
                                "height": 1080,
                                "width": 1079,
                                "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                                "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                                "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                                "mediaKeyTimestamp": "1610993486",
                                "jpegThumbnail": fs.readFileSync('./src/image/Whitedevil.png')}}}});
        } else {

            var CMD_HELP = '';
            Asena.commands.map(
                async (command) => {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var cmatch = [command.pattern];
                    }

                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';

                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]): command.pattern) + (command.desc === '' ? '```\n\n': '```\n');
                        if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n': '```\n');
                        if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid, MSG + CMD_HELP + FMSG, MessageType.text, {
                    contextInfo: {
                        forwardingScore: 49, isForwarded: true
                    }, quoted: {
                        key: {
                            fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? {
                                remoteJid: "status@broadcast"
                            }: {})
                        }, message: {
                            "imageMessage": {
                                "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "◄━━━━━━━⦁⦁ WhiteDevil Menu ⦁⦁━━━━━━━━►", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/image/Whitedevil.png')}}}});
        }
    }));

Asena.addCommand({
    pattern: 'cmd ?(.*)', fromMe: td, dontAddCommandList: true
}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            WhatsAlexa.commands.map(
                async (command) => {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var match = [command.pattern];
                    }

                    var HANDLER = '';

                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]): command.pattern) + (command.desc === '' ? '```\n\n': '```\n');
                    if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n': '```\n');
                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            );

            await message.client.sendMessage(
                message.jid,
                MSG + CMD_HELP + FMSG,
                MessageType.text,
                {
                    contextInfo: {
                        forwardingScore: 49,
                        isForwarded: true
                    },
                    quoted: {
                        key: {
                            fromMe: false,
                            participant: `0@s.whatsapp.net`,
                            ...(message.jid ? {
                                remoteJid: "status@broadcast"
                            }: {})
                        },
                        message: {
                            "imageMessage": {
                                "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                                "mimetype": "image/jpeg",
                                "caption": "◄━━━━━━━⦁⦁ WhiteDevil Menu ⦁⦁━━━━━━━━►",
                                "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                                "fileLength": "28777",
                                "height": 1080,
                                "width": 1079,
                                "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                                "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                                "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                                "mediaKeyTimestamp": "1610993486",
                                "jpegThumbnail": fs.readFileSync('./src/image/Whitedevil.png')}}}});
        } else {

            var CMD_HELP = '';
            Asena.commands.map(
                async (command) => {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var cmatch = [command.pattern];
                    }

                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';

                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]): command.pattern) + (command.desc === '' ? '```\n\n': '```\n');
                        if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n': '```\n');
                        if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid, MSG + CMD_HELP + FMSG, MessageType.text, {
                    contextInfo: {
                        forwardingScore: 49, isForwarded: true
                    }, quoted: {
                        key: {
                            fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? {
                                remoteJid: "status@broadcast"
                            }: {})
                        }, message: {
                            "imageMessage": {
                                "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "◄━━━━━━━⦁⦁ WhiteDevil Menu ⦁⦁━━━━━━━━►", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/image/Whitedevil.png')}}}});
        }
    }));