/* Copyright (C) 2021 TERROR-BOY

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhiteDevil --->>> TERROR-BOY 

NINGAL VENNAMEGILL EDUTHO BUT CREDIT REMOVE CHEYIYARUTH 

*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const inquirer = require('inquirer')

Asena.addCommand({pattern: 'ktb', fromMe: false, desc: "test"}, (async (message, match) => {

const rows = [
 {title: 'Github',  rowId:"rowid1"},
 {title: 'Owner',  rowId:"rowid2"}
]

const sections = [{title: "test", rows: rows}]

const button = {
 buttonText: 'Click Me!',
 description: "Hello it's list message",
 sections: sections,
 listType: 1
}  

const sendMsg = await message.client.sendMessage(message.jid, button, MessageType.listMessage)




const main = async () => {
    try {
        const { choice } = await inquirer.prompt(rows);
        choice == rows[0] && require("Under maintaince");
        choice == rows[1] && require("Undermaintaince");
    } catch (err) {
        print(err, "err");
        
        await message.client.sendMessage(message.jid, choice, MessageType.text );   
    }
}

}));

