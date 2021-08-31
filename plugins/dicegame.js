const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const con = require('../config');

// Descriptions
const SEWA = "Roll dice randomly.\Random ആയിട്ട് roll ചെയ്യും just for fun"

// Sentences
const SEWB = "🎁 ```Rolling Dice!``` 🎲"

// Results
const SEWC = "```Dice Rolled:``` "


    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'roll', fromMe: true, desc: SEWA}, (async (message, match) => {

            await message.client.sendMessage(message.jid, SEWB, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, SEWC + `${r_text[i]}`, MessageType.text);

        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'roll', fromMe: false, desc: SEWA}, (async (message, match) => {

            await message.client.sendMessage(message.jid, SEWB, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, SEWC + `${r_text[i]}`, MessageType.text);

        }));
    }
