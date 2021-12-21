

/*  
RE CODE - KTB 
*/

const Ktb = require('../events');
const {WAConnection , MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const config = require('../config');
const util = require('util')
const parseInt = require('parse-int');
const chalk = require('chalk');
const conn = new WAConnection();

const White = require('../white');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true

var SYSDTXT =  '😇 ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴜꜱɪɴɢ *ᴡʜɪᴛᴇᴅᴇᴠɪʟ ʙᴏᴛ* 😇'

var VER = '😍 *꧁•⊹٭𝙰𝚛𝚎 𝚈𝚘𝚞 𝚑𝚊𝚙𝚙𝚢٭⊹•꧂* 😍'
var MSG = '*WEBSITE          _https://whitedevil-bot.yolasite.com/_* \n\n *Github link       _https://github.com/terror-boy/WhiteDevil_* \n\n *Audio commads-1    _https://github.com/terror-boy/White/tree/master/uploads_* \n\n *Audio commads-2    _https://github.com/terror-boy/White/tree/master/upload_* \n\n *Sticker commads  _https://github.com/terror-boy/White/tree/master/stickers_* \n\n *Video Commands   _https://github.com/terror-boy/White/tree/master/video_* \n\n *Bot Setting malayalam* _:_ *https://youtu.be/XYGbXI4nm1M*'

  Ktb.addCommand({pattern: 'git', fromMe: wk, desc: Lang.ALIVE_DESC}, (async (message, match) => {
    
    var logo = await axios.get ('https://i.imgur.com/GerJ77X.mp4', {responseType: 'arraybuffer'})
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.video, { thumbnail: White.tm_b })

    
        
    const buttons = [
        {buttonId: VER, buttonText: {displayText: VER }, type: 1},
        {buttonId: SYSDTXT, buttonText: {displayText: SYSDTXT }, type: 1}
    ]
    const buttonMessage = {
        contentText: MSG,
        footerText: '© ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋᴀʀᴛʜɪᴋ-ᴛᴇʀʀᴏʀ-ʙᴏʏ © \n\n owner- type owner \n\n',
        buttons: buttons,
        headerType: 5,
        videoMessage: media.message.videoMessage    
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
}))


     
     
   
