/* Copyright (C) 2021 TERROR BOY.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

WhiteDevil - TERROR BOY

*/

const fs = require("fs");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require(./WhiteDevil/');
const { DataTypes } = require('sequelize');
const googleTTS = require('google-translate-tts');
const { getMessage } = require("./plugins/sql/greetings");
const axios = require('axios');
const White = require('./white');
const got = require('got');

// Sql
const WhiteDevilDB = config.DATABASE.define('WhiteDevil', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});

const plugindb = require('./plugins/sql/plugin');

// Yalnızca bir kolaylık. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
   });
};
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function WhiteDevil () {
    await config.DATABASE.sync();
    var StrSes_Db = await WhiteDevilDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    
    
       const conn = new WAConnection();
    conn.version = [3,2147,14];
    const Session = new StringSession();

    conn.browserDescription = ["WhiteDevil-Bot", "Safari", '1.0.0']

    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

    conn.on ('credentials-updated', async () => {
        console.log(
            chalk.blueBright.italic('✅ Login information updated!')
        );

        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await WhiteDevilDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('WHITE')}${chalk.blue.bold('DEVIL')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}
${chalk.blue.italic('ℹ️ Connecting to WhatsApp...')}`);
    });
    

    conn.on('open', async () => {
        console.log(
            chalk.green.bold('✅ Login successful!')
        );
        console.log(
            chalk.blueBright.italic('Confirming password...')
        );
        if (config.KTB1 == 'whitedevil' || config.KTB1 == 'Whitedevil') {
        //thanks to afnanplk
        console.log(
            chalk.green.bold('THANK YOU FOR VISITING WHATSAPP GROUP -key cofirmed-')
        );
         }
         else if (config.KTB1 == 'whitedevil' || config.KTB1 == 'Whitedevil') {
         console.log(
            chalk.red.bold('make sure you have typed the correct password'));
         throw new Error("Password Error ⚠⚠ ");         
         return; //created by afnanplk
         }

        console.log(
            chalk.blueBright.italic('⬇️ Installing external plugins...')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });

        console.log(
            chalk.blueBright.italic('⬇️Installing plugins...')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });

        console.log(
            chalk.green.bold('✅ WHITE DEVIL working!')
       );
        
         if (config.LANG == 'EN') {
             await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/Whitedevil.png"), MessageType.image, { caption: `『 Whitedevil』\n\nHello ${conn.user.name}!\n\n*🆘 General Help For You! 🆘*\n\n🔹 *#alive:* Check if the bot is running.\n\n🔹 *#list:* Shows the complete list of commands.\n\n🔹 *#restart:* It Restarts the bot.\n\n🔹 *#shutdown:* It Shutdown/Turn off the bot.\n\n *⚠ Warning, If you shutdown/turn off, there is no command to turn on the bot So You must got to heroku & turn on the worker. ⚠*.\n\nThank You For Using Whitedevil 💖`});
              await conn.sendMessage(conn.user.jid, fs.readFileSync("./White/bot/bott.mp3"), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true});
         
         } else if (config.LANG == 'ID') {
             await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/Whitedevil.png"), MessageType.image, { caption: `『 Whitedevil 』\n\nHalo ${conn.user.name}!\n\n*🆘 Bantuan umum 🆘*\n\n🔹 *#alive:* Periksa apakah bot sedang berjalan.\n\n🔹 *#list:* Menampilkan daftar lengkap perintah.\n\n🔹 *#restart:* Ini me-restart bot.\n\n🔹 *#shutdown:* Ini Matikan/Matikan bot.\n\n *⚠ Peringatan, Jika Anda mematikan/mematikan, tidak ada perintah untuk menghidupkan bot Jadi Anda harus pergi ke heroku & Nyalakan worker. ⚠*.\n\nTerima Kasih Telah Menggunakan Whitedevil 💖`});
              await conn.sendMessage(conn.user.jid, fs.readFileSync("./White/bot/bott.mp3"), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true});
              
         } else {
             await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/Whitedevil.png"), MessageType.image, { caption: `『 Whitedevil 』\n\n *ഹലോ*  ${conn.user.name}!\n\n*🆘 പൊതുവായ സഹായം 🆘*\n\n🔹 *#alive:* ബോട്ട് പ്രവർത്തിക്കുന്നുണ്ടോയെന്ന് പരിശോധിക്കുന്നു.\n\n🔹 *#list:* കമാൻഡുകളുടെ പൂർണ്ണ ലിസ്റ്റ് കാണിക്കുന്നു.\n\n🔹 *#restart:* ഇത് ബോട്ടിനെ പുനരാരംഭിപ്പിക്കുന്നു.\n\n🔹 *#shutdown:* ഇത് ഷട്ട്ഡൗൺ/ബോട്ട് ഓഫ് ചെയ്യുന്നു.\n\n *⚠ മുന്നറിയിപ്പ്, നിങ്ങൾ ഷട്ട്ഡൗൺ/ഓഫ് ചെയ്യുകയാണെങ്കിൽ, ബോട്ട് ഓണാക്കാൻ ഒരു കമാൻഡും ഇല്ല അതിനാൽ നിങ്ങൾ Heroku ഇല്പോയി worker ഓൺ ചെയ്യണം ⚠*.\n\nWhitedevil ഉപയോഗിച്ചതിന് നന്ദി 💖`});
             await conn.sendMessage(conn.user.jid, fs.readFileSync("./White/bot/bott.mp3"), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true});
              
              }
     });








    
 
    
    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        var tb = 'https://gitlab.com/terror-boy/version.sh/-/raw/main/announcement.sh'
        
        while (getGMTh == 1 && getGMTm == 1) {
            const {data} = await axios(tb)
            const { en, ml } = data
            var announce = ''
            if (config.LANG == 'EN') announce = en
            if (config.LANG == 'ML') announce = ml
            if (config.LANG == 'ID') announce = en
            
            let video = ''
            let image = '' //'https://i.imgur.com/kB30S41.jpg'
            
            if (video.includes('http') || video.includes('https')) {
                var VID = video.split('youtu.be')[1].split(' ')[0].replace('/', '')
                var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
                yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
                yt.on('end', async () => {
                    return await conn.sendMessage(conn.user.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {caption: announce, mimetype: Mimetype.mp4});
                });
            } else {
                if (image.includes('http') || image.includes('https')) {
                    var imagegen = await axios.get(image, { responseType: 'arraybuffer'})
                    return await conn.sendMessage(conn.user.jid, Buffer.from(imagegen.data), MessageType.image, { caption: announce })
                } else {
                    return await conn.sendMessage(conn.user.jid, announce, MessageType.text)
                }
            }
        }
    }, 50000);
    
    
    
      


    
     conn.on('chat-update', async m => {
        if (!m.hasNewMessage) return;
        if (!m.messages && !m.count) return;
        let msg = m.messages.all()[0];
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
        if (config.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
 

        if (config.WELCOME == 'pp' || config.WELCOME == 'Pp' || config.WELCOME == 'PP' || config.WELCOME == 'pP' ) {
                   if (msg.messageStubType === 32 || msg.messageStubType === 28) {
 
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp 
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                    
                    const tag = '@' + msg.messageStubParameters[0].split('@')[0]
                    
                   var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {thumbnail: White.tm_b, caption:  gb.message.replace('{pp}', '').replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name).replace('{time}', time).replace('{mention}', tag), contextInfo: {mentionedJid: [msg.messageStubParameters[0]]}}); });                           
        } else if (gb.message.includes('{gp}')) {
                let gp
                try { gp = await conn.getProfilePicture(msg.key.remoteJid); } catch { gp = await conn.getProfilePicture(); }
                const tag = '@' + msg.messageStubParameters[0].split('@')[0]
                    var rashijson = await conn.groupMetadata(msg.key.remoteJid)
                   var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
   
                await axios.get(gp, {responseType: 'arraybuffer'}).then(async (res) => {
                    //created by Raashii
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {thumbnail: White.tm_b, caption:  gb.message.replace('{gp}', '').replace('{gphead}', rashijson.subject).replace('{gpmaker}', rashijson.owner).replace('{gpdesc}', rashijson.desc).replace('{owner}', conn.user.name).replace('{time}', time).replace('{mention}', tag), contextInfo: {mentionedJid: [msg.messageStubParameters[0]]} }); });
             
   } else if (gb.message.includes('{gif}')) {
                //created by afnanplk
                const tag = '@' + msg.messageStubParameters[0].split('@')[0]
                    var plkpinky = await axios.get(config.GIF_BYE, { responseType: 'arraybuffer' })
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                   var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

                await conn.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {thumbnail: White.tm_b, mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name).replace('{time}', time).replace('{mention}', tag), contextInfo: {mentionedJid: [msg.messageStubParameters[0]]} });
            } else {
              var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
              
              const tag = '@' + msg.messageStubParameters[0].split('@')[0]
                   await conn.sendMessage(msg.key.remoteJid,gb.message.replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name).replace('{time}', time).replace('{mention}', tag),MessageType.text,{ contextInfo: {mentionedJid: [msg.messageStubParameters[0]]}});
                   
              }
              
            } 
           
            return;
            
                  
         }else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
          
            // welcome
            const tag = '@' + msg.messageStubParameters[0].split('@')[0]
             var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                   var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                    //created by afnanplk
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {thumbnail: White.tm_b, caption:  gb.message.replace('{pp}', '').replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name).replace('{time}', time).replace('{mention}', tag), contextInfo: {mentionedJid: [msg.messageStubParameters[0]]} }); });                           
           } else if (gb.message.includes('{gp}')) {
             
             const tag = '@' + msg.messageStubParameters[0].split('@')[0]
             
                let gp
                try { gp = await conn.getProfilePicture(msg.key.remoteJid); } catch { gp = await conn.getProfilePicture(); }
                     var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                  var rashijson = await conn.groupMetadata(msg.key.remoteJid)
                await axios.get(gp, {responseType: 'arraybuffer'}).then(async (res) => {
                    //created by Raashii
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {thumbnail: White.tm_b, caption:  gb.message.replace('{gp}', '').replace('{gphead}', rashijson.subject).replace('{gpmaker}', rashijson.owner).replace('{gpdesc}', rashijson.desc).replace('{owner}', conn.user.name).replace('{time}', time).replace('{mention}', tag), contextInfo: {mentionedJid: [msg.messageStubParameters[0]]} }); });
} else if (gb.message.includes('{gif}')) {
                   var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
               const tag = '@' + msg.messageStubParameters[0].split('@')[0]
                var plkpinky = await axios.get(config.WEL_GIF, { responseType: 'arraybuffer' })
                var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {thumbnail: White.tm_b, mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name).replace('{time}', time).replace('{mention}', tag), contextInfo: {mentionedJid: [msg.messageStubParameters[0]]} });
            } else {
              const tag = '@' + msg.messageStubParameters[0].split('@')[0]
              var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                    await conn.sendMessage(msg.key.remoteJid,gb.message.replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name).replace('{time}', time).replace('{mention}', tag),MessageType.text,{ contextInfo: {mentionedJid: [msg.messageStubParameters[0]]}});
            }
          }         
       
            
              return; 
//callblock

    }else if (msg.messageStubType === 45 ||msg.messageStubType === 40 ||msg.messageStubType === 46 || msg.messageStubType === 41) {
  if (config.CALLB == 'true') {
  
     await conn.blockUser(msg.key.remoteJid, "add");
    
  }
  return;
  }


        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
  
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                       
                        var match = text_msg.match(command.pattern);
                        
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
/*
                        if (command.deleteCommand && msg.key.fromMe) {
                            await whats.delete(); 
                        }
*/
                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            if (config.LANG == 'EN') {
                                await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/Whitedevil.png"), MessageType.image, { caption: '*『 ERROR 』*\n\n*Whitedevil an error has occurred!*\n_Report this error to the developer! [ TERROR BOY ]._\n\n*Error:* ```' + error + '```\n\n' });
                                await conn.sendMessage(conn.user.jid, fs.readFileSync("./White/bot/error.mp3"), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true});
                            } else if (config.LANG == 'ML') {
                                await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/Whitedevil.png"), MessageType.image, { caption: '*『 ERROR 』*\n\n*Whitedevil error സംഭവിച്ചു!*\n_ഈ error  ഡെവലപ്പറെ അറിയിക്കുക! [ TERROR BOY ]._\n\n*error:* ```' + error + '```\n\n' });
                                await conn.sendMessage(conn.user.jid, fs.readFileSync("./White/bot/error.mp3"), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true});
                            } else {
                                await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/Whitedevil.png"), MessageType.image, { caption: '*『 KESALAHAN 』*\n\n*Whitedevil telah terjadi kesalahan!*\n_Laporkan kesalahan ini ke pengembang [ TERROR BOY ]._\n\n*Kesalahan:* ```' + error + '```\n\n' });
                            }
                        }
                    }
                }
            }
        )
    }});
    
    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Refreshing your old version string...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }

}
WhiteDevil();
