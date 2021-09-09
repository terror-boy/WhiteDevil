const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('scrapers');


Asena.addCommand({pattern: 'p ?(.*)', fromMe: false, desc: Lang.PLAY_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_PLAY,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_PLAY,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_PLAY ,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: false});
            });
    }));
