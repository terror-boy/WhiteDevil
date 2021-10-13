/* created by afnanplk
*/

const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');



if (Config.WORKTYPE == 'private') {
	
Asena.addCommand({pattern: 'device ?(.*)', fromMe: true, desc: Lang.DEVICE , dontAddCommandList: true }, async (message, match) => {
	const url = `https://docs-jojo.herokuapp.com/api/gsm_arena?q=${match[1]}`;
	try {
		const response = await got(url);
    
		const json = JSON.parse(response.body);
    
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '``` IMAGE      : *' + json.img  *' \n' +  'NAME      : *' + json.title + '* \n' + 'DATE      :'+ json.released + 'WEIGHT    :' + json.weight + '\n' + 'VERSION   :'+ json.os_version + '\n' + 'ROM       :' + json.storage + '\n' + 'DISPLAY   :'+ json.display_size  + '\n' + 'RAM       :' + json.ram + '\n' + 'BATTERY   :'+ json.battery + '\n' + 'MP        :' + json.camera_pixel + '\n' + 'VIDEO MP  :'+ json.video_pixel + '```' , MessageType.text);
      } catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
}

else if (Config.WORKTYPE == 'public') {
	
Asena.addCommand({pattern: 'device ?(.*)', fromMe: false, desc: Lang.DEVICE , dontAddCommandList: true }, async (message, match) => {
	const url = `https://docs-jojo.herokuapp.com/api/gsm_arena?q=${match[1]}`;
	try {
		const response = await got(url);
    
		const json = JSON.parse(response.body);
              
              if (response.statusCode === 200) return await message.client.sendMessage(message.jid,  '```NAME      : *' + json.title + '* \n' + 'DATE      :'+ json.released +  '\n' + 'WEIGHT    :' + json.weight + 'VERSION   :'+ json.os_version + '\n' + 'ROM       :' + json.storage + '\n' + 'DISPLAY   :'+ json.display_size  + '\n' + 'RAM       :' + json.ram + '\n' + 'BATTERY   :'+ json.battery + '\n' + 'MP        :' + json.camera_pixel + '\n' + 'VIDEO MP  :'+ json.video_pixel + '```' , MessageType.text);
      } catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
	 Asena.addCommand({pattern: 'what now', fromMe: false, desc: Lang.NEWEP }, (async (message, match) => {  
       
        await message.sendMessage('*CMND* \n .b64en \n *DESC* \n Text encryption using base64.\n *example:* .b64en <text>\n\n *CMND* \n .b64de \n *DESC* \n decrypt the encrypted text using base64.\n *example:* .b64de <encrypted text>\n\n *CMND* \n .device\n *DESC* \n know details of a mobilephone\n *example:* .device rog 5\n\n *CMND* \n .glue\n *DESC* \n new textmaker \n *example:* .glue whitedevil\n\n *CMND* \n .wasted\n *DESC* \n new photoeditor \n *example:* .wasted https://i.imgur.com/2vJLteZ.jpeg\n\n *CMND* \n .delete\n *DESC* \n new photoeditor \n *example:* .delete https://i.imgur.com/2vJLteZ.jpeg\n\n *CMND* \n .emoji\n *DESC* \n new imagetopng \n *example:* .emoji 😍   ) ', MessageType.text,{ quoted: message.data });
        
    }));
}
