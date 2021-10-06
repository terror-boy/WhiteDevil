
const Asena = require('../events');

const {MessageType,Mimetype} = require('@adiwajshing/baileys');

const fs = require('fs');

const axios = require('axios');

const FormData = require('form-data');

const ffmpeg = require('fluent-ffmpeg');

const FIND_DESC = "Finds the Song ✨️"

Asena.addCommand({pattern: 'find', fromMe: false, desc: FIND_DESC }, (async (message, match) => {

  if (message.reply_message === false) return await message.client.sendMessage(message.jid, 'replay to a audio!', MessageType.text);
  var filePath = await message.client.downloadAndSaveMediaMessage({
      key: {
          remoteJid: message.reply_message.jid,
          id: message.reply_message.id
      },
      message: message.reply_message.data.quotedMessage
  });
  var form = new FormData();
  ffmpeg(filePath).format('mp3').save('music.mp3').on('end', async () => {
      form.append('api_token', '2bd1fcb3ccd15607f72cdbb527907ce6');
      form.append('file', fs.createReadStream('./music.mp3'));
      form.append('return', 'apple_music, spotify');
      var configs = {
          headers: {
              ...form.getHeaders()
          }
      }
      await axios.post('https://api.audd.io/', form, configs).then(async (response) => {
          var res = response.data
          if (res === 'success') {
              await message.client.sendMessage(message.jid, `Title: ${res.title}\nArtist: ${res.artist}`, MessageType.text);
          } else {
              await message.client.sendMessage(message.jid, '*HERE IS HIS NUMBER*\n\n *---> [ https://tinyurl.com/yxu4m432 ]*', MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption":'*FIND FEATURE IS BLOCKED BY OWNER PLEASE CONTACT HIM*', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./White/image/logo.jpg')}}}}); 
          }
      }).catch((error) =>  {
          console.log(error);
      });
  });
}));
