/* Copyright (C) 2021 TERROR-BOY

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhiteDevil --->>> TERROR-BOY 

NINGAL VENNAMEGILL EDUTHO BUT CREDIT REMOVE CHEYIYARUTH 

*/

// thanks to amalser
// credit to respective owners
// I dont know  who is the real owner

const Ktb = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Ktb.addCommand({pattern: 'ktb', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: 'i am fine 🥰'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'Do you like Bot'}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: 'Hii'}, type: 1}
      ]
     
     await message.sendMessage("hellow"), {type: 1},
     await message.sendMessage("hello"), {type: 2},
     await message.sendMessage("hehe"), { type: 3}
     
      const buttonMessage = {
          contentText: "Hi How Are You ?",
          footerText: 'owner   ©',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
