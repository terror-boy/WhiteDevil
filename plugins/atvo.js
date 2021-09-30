
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
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

 Ktb.addCommand({pattern: 'avdo', fromMe:false , desc: Lang.AV}, (async (message, match) => {

    
      const autovideoMessage = [
          "𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 Karthik_terror-boy's 𝐛𝐨𝐭.\n\n*WhiteDevil*\n\n📽 *AUTO VIDEO* 📽\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *Free fire*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *ff*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *Manchester United*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *Manchester*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *Manju warrier*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *Manju* \n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *Whitedevil*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *pubg*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *life*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *[LOADING.....]*\n ➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  *[LOADING.....]*\n\n *[IF DID NOT GET RESULT IT MAY BE BOT IS UNDER MAINTANCE OR ELSE IF YOU USE HANDLERS LIKE(!/,.#)]*\n\n═════💢WhiteDevil💢═════\n\n\n▣▣▣▣▣▣▣▣▣ OWNER: Karthik_terror-boy  ▣▣▣▣▣▣▣▣▣▣▣"
      ]
      
      await message.client.sendMessage(message.jid, autovideoMessage , MessageType.text,)

}));
