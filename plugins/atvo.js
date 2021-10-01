/* Copyright © 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WHITE DEVIL ----»»» TERROR BOY
*/

const Ktb = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');


const Language = require('../language');
const Lang = Language.getString('Autovideo');

// AUTO VIDEO COMMAND LIST

// THIS PLUGIN IS OWNED BY KARTHIK_TERROR-BOY

const code = ("*𒆜𝙷𝙴𝚁𝙴 𝙸𝚂 𝚃𝙷𝙴 AUTO VIDEO 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂👇𒆜*\n\n𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 Karthik_terror-boy's *WhiteDevil*\n■□■□■□■□■□■□■□■□■□■□\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *Free fire*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *ff*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *Manchester United*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *Manchester*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *Manju warrier*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *Manju* \n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *Whitedevil*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *pubg*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *life*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *[LOADING.....]*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *[LOADING.....]*\n\n *[IF DID NOT GET RESULT IT MAY BE BOT IS UNDER MAINTANCE OR ELSE IF YOU USE HANDLERS LIKE(!/,.#)]*\n\n■□■□■□■□■□■□■□■□■□■□\n\n\n═════💢WhiteDevil💢═════\n▣▣▣▣▣▣▣▣▣ OWNER: Karthik_terror-boy  ▣▣▣▣▣▣▣▣▣▣
")

Ktb.addCommand({pattern: 'atvdo', fromMe:false , desc: Lang.AV}, (async (message, match) => {

  

        await message.client.sendMessage(
          message.jid,code, MessageType.text);

    
}));
