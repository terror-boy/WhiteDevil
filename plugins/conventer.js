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

    var ktb = ''
    var afn = ''
    var use = ''
     if (Config.LANG == 'EN') {
        ktb = '```NAMING AND DOCIFYING```'
        afn = '```PLEASE REPLY TO A AUDIO```'
        use = '```.tovideo whitedevil *replace whitedevil with desired name*```'
    }
    if (Config.LANG == 'ML') {
        afn = '```ഒരു ഓഡിയോയ്ക്ക് മറുപടി നൽകുക```'
        ktb = '```വീഡിയോയിലേക്ക് പരിവർത്തനം  ചെയ്യുകയും പേര് നൽകുകയും ചെയ്യുന്നു```'
        use = '```.tovideo whitedevil```'
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
    Asena.addCommand({pattern: 'tovideo ?(.*)', fromMe: wk, desc: 'convert audio to video' , usage : use}, (async (message, match) => { 
      
        if (match[1] === '') return await message.client.sendMessage(message.jid,'give me a name',MessageType.text);  
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid,afn, MessageType.text);
        var downloading = await message.client.sendMessage(mid,ktb,MessageType.text);
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
                await message.client.sendMessage(mid, fs.readFileSync('output.mp4'), MessageType.video, {caption: '```'     + match[1] + '.mp4```'  , mimetype: Mimetype.mp4, quoted: message.data, thumbnail: "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" })
        });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

   Asena.addCommand({pattern: 'qrde ?(.*)', fromMe: wk, desc: 'convert audio to video' , usage : use}, (async (message, match) => { 
      
         const mid = message.jid
    if (message.reply_message === false) return await message.client.sendMessage(mid,'reply to qr code image', MessageType.text);
    var downloading = await message.client.sendMessage(mid,ktb,MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)    
        .save('output.jpg')
        .on('end', async () => {
        const rs = ( fs.readFileSync('output.jpg') );
            const res = await axios(`https://api.zeks.me/api/qrdecode?apikey=apivinz&image=${rs}?data&size=500x500&margin=0`)
        return await message.client.deleteMessage(mid,res.data.result ,MessageType.text);
    return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
}

        )}
));

Asena.addCommand({pattern: 'me ?(.*)', fromMe: wk, desc: 'convert audio to video' , usage : use}, (async (message, match) => { 
      
         const mid = message.jid
    if (message.reply_message === false) return await message.client.sendMessage(mid,'reply to audio', MessageType.text);
    var downloading = await message.client.sendMessage(mid,ktb,MessageType.text);
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
        const rs = ( fs.readFileSync('output.mp3') );
            const res = await axios(`https://api.zeks.me/api/searchmusic?apikey=itsmewhitedevil&audio=${rs}`)
            
            let msg = '```'
        msg +=  `TITLE :${data.title}\n\n`
        msg +=  `ARTISTS :${data.artists}\n\n`
        msg +=  `GENRE :${data.genre}\n\n`
        msg +=  `ALBUM :${data.album}\n\n`
        msg +=  `RELEASE DATE :${data.release_date}\n\n`
        msg += '```'
        return await message.client.deleteMessage(mid, msg ,MessageType.text);
    return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
}

        )}
));
