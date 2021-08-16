const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const WN = "it sends warning  message"
const Config = require('../config');



 if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'warn', fromMe: true, deleteCommand: true, desc: WN,}, (async (message, match) => {
        
            var r_text = new Array ();
        
            r_text[1] = "⚠️ Warning ⚠️\n\n\n 2 warnings remaining";
            r_text[2] ="⚠️ Warning ⚠️\n\n\n 1 warnings remaining";
            r_text[3] ="!over";
            
          
        
            var i = Math.floor(4*Math.order())
        
            await message.client.sendMessage(
                message.jid,(r_text[i]), MessageType.text);
        
            }));
}
