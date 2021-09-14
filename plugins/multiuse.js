const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const IG_DESC = "Downloads Image/Video From Instagram"
const LOAD_ING = "*✅️Connected To INSTAGRAM* \n\n\n *DOWNLOADING & UPLOADING IN PROCESS...*"
const Config = require('../config');

const Language = require('../language');
const { errorMessage, infoMessage } = require('../helpers');
const Lang = Language.getString('instagram') ;


if (Config.WORKTYPE == 'private') {
Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: true, desc: IG_DESC }, async (message, match) => {
  const userName = match[1]
  if(!userName) return await message.sendMessage('not found')
await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text);

//if(match[1] == '') return 
    let { data, type } = await instaGram(match[1], '03e489f0f5e52095');
//if(match[1] == '') return 
    if (type === 'image') { await message.sendMessage(data, MessageType.image,{ caption: "*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*" }) }
    else if (type === 'video') { await message.sendMessage(data, MessageType.video,{ caption: "*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*" }) }
});
//const axios = require('axios')
async function instaGram(url, key){
const _0x477b=['135767iKnckP','673rRPNhH','data','1oVaSnc','1wFsRJN','5ZNKfRV','1082797kEqNzc','33405qKXkqX','get','536467jgcujZ','1509050KmQvtd','1sEPhwh','&APIKEY=','510217irWqHr','1753kjFBCd','20fokBTd'];function _0x34d6(_0x4f9dd8,_0x1e6344){return _0x34d6=function(_0x477b29,_0x34d6ab){_0x477b29=_0x477b29-0x128;let _0x12f50b=_0x477b[_0x477b29];return _0x12f50b;},_0x34d6(_0x4f9dd8,_0x1e6344);}const _0x88f305=_0x34d6;(function(_0x346d1d,_0xbe28c5){const _0x7c775f=_0x34d6;while(!![]){try{const _0x4a8522=parseInt(_0x7c775f(0x129))*-parseInt(_0x7c775f(0x136))+parseInt(_0x7c775f(0x12f))*parseInt(_0x7c775f(0x137))+parseInt(_0x7c775f(0x128))*parseInt(_0x7c775f(0x12d))+parseInt(_0x7c775f(0x12e))+parseInt(_0x7c775f(0x133))*parseInt(_0x7c775f(0x131))+parseInt(_0x7c775f(0x12c))*-parseInt(_0x7c775f(0x132))+-parseInt(_0x7c775f(0x135))*-parseInt(_0x7c775f(0x12b));if(_0x4a8522===_0xbe28c5)break;else _0x346d1d['push'](_0x346d1d['shift']());}catch(_0x1daac9){_0x346d1d['push'](_0x346d1d['shift']());}}}(_0x477b,0xc048d));const res=await axios('https://xteam.xyz/dl/ig?url='+url+_0x88f305(0x134)+key),{data,type}=res[_0x88f305(0x12a)]['result'][_0x88f305(0x12a)][0x0],buffer=await axios[_0x88f305(0x130)](data,{'responseType':'arraybuffer'});return{'data':buffer[_0x88f305(0x12a)],'type':type};
}
}
else if (Config.WORKTYPE == 'public') {
  Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: false, desc: IG_DESC }, async (message, match) => {
    const userName = match[1]
    if(!userName) return await message.sendMessage('not found')
  await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text);
  
  //if(match[1] == '') return 
      let { data, type } = await instaGram(match[1], '2b87de8af2faa2fe');
  //if(match[1] == '') return 
      if (type === 'image') { await message.sendMessage(data, MessageType.image,{ caption: "*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*" }) }
    else if (type === 'video') { await message.sendMessage(data, MessageType.video,{ caption: "*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*", quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption":, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/image/Whitedevil.png')}}};
});

//const axios = require('axios')
async function instaGram(url, key){
const _0x477b=['135767iKnckP','673rRPNhH','data','1oVaSnc','1wFsRJN','5ZNKfRV','1082797kEqNzc','33405qKXkqX','get','536467jgcujZ','1509050KmQvtd','1sEPhwh','&APIKEY=','510217irWqHr','1753kjFBCd','20fokBTd'];function _0x34d6(_0x4f9dd8,_0x1e6344){return _0x34d6=function(_0x477b29,_0x34d6ab){_0x477b29=_0x477b29-0x128;let _0x12f50b=_0x477b[_0x477b29];return _0x12f50b;},_0x34d6(_0x4f9dd8,_0x1e6344);}const _0x88f305=_0x34d6;(function(_0x346d1d,_0xbe28c5){const _0x7c775f=_0x34d6;while(!![]){try{const _0x4a8522=parseInt(_0x7c775f(0x129))*-parseInt(_0x7c775f(0x136))+parseInt(_0x7c775f(0x12f))*parseInt(_0x7c775f(0x137))+parseInt(_0x7c775f(0x128))*parseInt(_0x7c775f(0x12d))+parseInt(_0x7c775f(0x12e))+parseInt(_0x7c775f(0x133))*parseInt(_0x7c775f(0x131))+parseInt(_0x7c775f(0x12c))*-parseInt(_0x7c775f(0x132))+-parseInt(_0x7c775f(0x135))*-parseInt(_0x7c775f(0x12b));if(_0x4a8522===_0xbe28c5)break;else _0x346d1d['push'](_0x346d1d['shift']());}catch(_0x1daac9){_0x346d1d['push'](_0x346d1d['shift']());}}}(_0x477b,0xc048d));const res=await axios('https://xteam.xyz/dl/ig?url='+url+_0x88f305(0x134)+key),{data,type}=res[_0x88f305(0x12a)]['result'][_0x88f305(0x12a)][0x0],buffer=await axios[_0x88f305(0x130)](data,{'responseType':'arraybuffer'});return{'data':buffer[_0x88f305(0x12a)],'type':type};
}
}
