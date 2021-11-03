/*Codded by @phaticusthiccy
Telegram: https://t.me/phaticusthiccy
Instagram: https://instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const White = require('../white');
const cheerio = require('cheerio')
const FormData = require('form-data')
const Axios = require('axios');

const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('conventer');

function webp2mp4File(path) {
    return new Promise(async (resolve, reject) => {
        const bodyForm = new FormData()
        bodyForm.append('new-image-url', '')
        bodyForm.append('new-image', fs.createReadStream(path))
        await Axios({
            method: 'post',
            url: 'https://s6.ezgif.com/webp-to-mp4',
            data: bodyForm,
            headers: {
                'Content-Type': `multipart/form-data boundary=${bodyForm._boundary}`
            }
        }).then(async ({ data }) => {
            const bodyFormThen = new FormData()
            const $ = cheerio.load(data)
            const file = $('input[name="file"]').attr('value')
            const token = $('input[name="token"]').attr('value')
            const convert = $('input[name="file"]').attr('value')
            const gotdata = {
                file: file,
                token: token,
                convert: convert
            }
            bodyFormThen.append('file', gotdata.file)
            bodyFormThen.append('token', gotdata.token)
            bodyFormThen.append('convert', gotdata.convert)
            await Axios({
                method: 'post',
                url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
                data: bodyFormThen,
                headers: {
                    'Content-Type': `multipart/form-data boundary=${bodyFormThen._boundary}`
                }
            }).then(({ data }) => {
                const $ = cheerio.load(data)
                const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
                resolve({
                    status: true,
                    message: "*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*",
                    result: result
                })
            }).catch(reject)
        }).catch(reject)
    })
}


    Asena.addCommand({pattern: 'mp3$', fromMe: wk, desc: Lang.MP4TOAUDİO_DESC}, (async (message, match) => {    
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid, Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(mid,Lang.MP4TOAUDİO,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)    
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: false});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'photo$', fromMe: false, desc: Lang.STİCKER_DESC}, (async (message, match) => {    
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid, Lang.STİCKER_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(mid,Lang.STİCKER,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fromFormat('webp_pipe')
            .save('output.jpg')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*', quoted: message.data ,
thumbnail: White.tm_b });
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
   Asena.addCommand({pattern: 'mp4$', desc: Lang.ANİM_STİCK, fromMe: wk}, (async (message, match) => {
        const mid = message.jid
        if (message.reply_message === false) return await message.sendMessage(Lang.STİCKER_NEEDREPLY);
        await message.client.sendMessage(mid, Lang.ANİMATE, MessageType.text)
        const savedFilename = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await webp2mp4File(savedFilename).then(async (rest) => {
            await Axios({ method: "GET", url: rest.result, responseType: "stream"}).then(({ data }) => {
                const saving = data.pipe(fs.createWriteStream('/root/WhatsAsenaDuplicated/stweb.mp4'))
                saving.on("finish", async () => {
                    await message.client.sendMessage(mid, fs.readFileSync('/root/WhatsAsenaDuplicated/stweb.mp4'), MessageType.video, { mimetype: Mimetype.mp4, caption: '*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*', quoted: message.data , 
thumbnail: White.tm_b })
                    if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
                    if (fs.existsSync('/root/WhatsAsenaDuplicated/stweb.mp4')) fs.unlinkSync('/root/WhatsAsenaDuplicated/stweb.mp4')
                })
            })
        })
    }));
    
    // document credit:- afnanplk[pinkymwol--> https://github.com/afnanplk/Pinky] 
    
    var doc_desc = ''
    var plk = ''
    var afn = ''
    var usge = ''
     if (Config.LANG == 'EN') {
        doc_desc = 'CONVERT TO DOCUMENT AND ADD GIVEN NAME'
        plk = '```NAMING AND DOCIFYING```'
        afn = '```PLEASE REPLY TO A AUDIO```'
        usge = '```.doc whitedevil *replace whitedevil with desired name*```'
    }
    if (Config.LANG == 'ML') {
        doc_desc = 'ഡോക്യുമെന്റിലേക്ക് പരിവർത്തനം ചെയ്യുകയും നൽകിയപേര് ചേർക്കുകയും ചെയ്യുക'
        afn = '```ഒരു ഓഡിയോയ്ക്ക് മറുപടി നൽകുക```'
        plk = '```ഡോക്യുമെന്റിലേക്ക് പരിവർത്തനം ചെയ്യുകയും പേര് നൽകുകയും ചെയ്യുന്നു```'
        usge = '```.doc whitedevil```'
    }
    
    Asena.addCommand({pattern: 'doc ?(.*)', fromMe: wk, desc: doc_desc , usage : usge}, (async (message, match) => { 
      
        if (match[1] === '') return await message.client.sendMessage(message.jid,'give me a name',MessageType.text);  
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid,afn, MessageType.text);
        var downloading = await message.client.sendMessage(mid,plk,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)    
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.mp3'), MessageType.document, {filename: match[1] + '.mp3', mimetype: 'audio/mpeg', quoted: message.data});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'tovideo ?(.*)', fromMe: wk, desc: 'convert audio to video' , usage : usge}, (async (message, match) => { 
      
        if (match[1] === '') return await message.client.sendMessage(message.jid,'give me a name',MessageType.text);  
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid,afn, MessageType.text);
        var downloading = await message.client.sendMessage(mid,plk,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)    
            .save('output.mp4')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.mp4'), MessageType.video, {caption: match[1] + '.mp4', mimetype: Mimetype.mp4, quoted: message.data, thumbnail: White.tm_b});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    
