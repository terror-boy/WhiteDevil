/* Copyright (C) 2021 Vai838.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');

Asena.addCommand({pattern: 'news ?(.*)', fromMe: false, desc: Lang.NEWS_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_CATEGORY);
	const url = `https://inshortsapi.vercel.app/news?category=${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📁 ' + Lang.CATEGORY +':* ```' + match[1] + '```\n\n\n' +
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[0].title + '```\n' + 
                '*📰 ' + Lang.NEWS +':* ```' + json.data[0].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[0].readMoreUrl + '```\n\n' +
                '*◼️ ' + Lang.NEWST +':* ```' + json.data[1].title + '```\n' +                                                                         
		'*📰 ' + Lang.NEWS +':* ```' + json.data[1].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[1].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + json.data[2].title + '```\n' +
                '*📰 ' + Lang.NEWS +':* ```' + json.data[2].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[2].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + json.data[3].title + '```\n' +
   	        '*📰 ' + Lang.NEWS +':* ```' + json.data[3].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[3].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + json.data[4].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[4].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[4].readMoreUrl + '```\n\n'+ 
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[5].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[5].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[5].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[6].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[6].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[6].readMoreUrl + '```\n\n'+									 
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[7].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[7].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[7].readMoreUrl + '```\n\n'+									 
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[8].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[8].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[8].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[9].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[9].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[9].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[10].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[10].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[10].readMoreUrl + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDC, MessageType.text);
	}
});
const AI = ""
 if (Config.AI == 'true') {
Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (message.jid === '919562803423-1627735504@g.us') {

             return;
         }
         let regex1 = new RegExp('Ok')
         let regex2 = new RegExp('name')
         let regex3 = new RegExp('bot')
         let regex4 = new RegExp('Whitedevil')
         let regex5 = new RegExp('Karthik')
         let regex6 = new RegExp('ok')
         let regex7 = new RegExp('Who are you')
         let regex8 = new RegExp('send')
         let regex9 = new RegExp('Di')
         let regex10 = new RegExp('bye')
         let regex11 = new RegExp('OWNER')
         let regex12 = new RegExp('RULES')
         let regex13 = new RegExp('INFO')
         let regex14 = new RegExp('Hi')
         let regex15 = new RegExp('Da')
         let regex16 = new RegExp('Pm')
         let regex17 = new RegExp('bot setting')
         let regex18 = new RegExp('Bot setting')
         let regex19 = new RegExp('setting')
         let regex20 = new RegExp('bs')
	 let regex21 = new RegExp('yblockedfind')
          if (regex1.test(message.message)) {              
             await message.client.sendMessage(message.jid,'\n *「 ENNA OK😍😍 」*', MessageType.text, {quoted: message.data })
         } 
         else if (regex2.test(message.message)) {
            await message.client.sendMessage(message.jid,'my name is Whitedevil' , MessageType.text, {quoted: message.data })
         }
          else if (regex3.test(message.message)) {
             await message.client.sendMessage(message.jid,'yes tell me', MessageType.text, {quoted: message.data })
         }
         else if (regex4.test(message.message)) {
            await message.client.sendMessage(message.jid,'ʏᴇꜱ ᴛʜᴀᴛꜱ ᴍᴇ', MessageType.text, {quoted: message.data })
         }
         else if (regex5.test(message.message)) {
           await message.client.sendMessage(message.jid,'i know him he is my creator', MessageType.text, {quoted: message.data })
         }
          else if (regex6.test(message.message)) {
            await message.client.sendMessage(message.jid,'\n *「 ENNA OK😍😍 」*', MessageType.text, {quoted: message.data })
         }
          else if (regex7.test(message.message)) {
            await message.client.sendMessage(message.jid,'```I am Whitedevil.```', MessageType.text, {quoted: message.data })
         }
          else if (regex8.test(message.message)) {
            await message.client.sendMessage(message.jid,'what', MessageType.text, {quoted: message.data })
         }
          else if (regex9.test(message.message)) {
            await message.client.sendMessage(message.jid,'enthada kutta', MessageType.text, {quoted: message.data })
         }
         else if (regex10.test(message.message)) {
            await message.client.sendMessage(message.jid,'```oh, ninnod arenkilm ivde nikkan paranjo..poo mister```', MessageType.text, {quoted: message.data })
         }
         else if (regex11.test(message.message)) {
            await message.client.sendMessage(message.jid,'\n ```MY creator``` \n\n bit.ly/3yhm9Oz', MessageType.text, {quoted: message.data })
         }   
         else if (regex12.test(message.message)) {
            await message.client.sendMessage(message.jid,'┌ *「 RULES 」* \n│ 🛂 ഉടമയുടെ മേൽനോട്ടം\n │ ✅ ദയവായി അനുസരിക്കുക >_< \n │  \n │ നിയന്ത്രണങ്ങൾ എപ്പോൾ വേണമെങ്കിലും ആകാം സൗകര്യർത്ഥ മാറ്റി \n └──── \n\n 1. കമാൻഡ് ചെയ്യുമ്പോൾ ദയവായി സ്പാം ചെയ്യരുത് \n 2. ബോട്ട് നമ്പറിലേക്ക് വിർടെക്സ്, ബഗ്, ബോംബ് തുടങ്ങിയവ അയയ്ക്കരുത് \n 3. ഉടമയെ അപമാനിക്കുന്നത് അവർ നേരിട്ട് എടുക്കും \n 4. ബോട്ട് കമാൻഡിൽ ഉപയോക്താവ് ചെയ്യുന്നതിന് ബോട്ട്/ഉടമ ഉത്തരവാദിയല്ല \n 5. ബോട്ട് നമ്പറുകളിലേക്ക് വിളിക്കാൻ അനുവാദം ഇല്ല \n 6. EXP/പരിധി/ലെവൽ ചതികൾ നിരോധിച്ചിരിക്കുന്നു \n 7. ബോട്ട് പ്രതികരിക്കുന്നില്ലെങ്കിൽ, അതിനർത്ഥം അത് ഓഫ് എന്നാണ് \n 8. ഏതെങ്കിലും ബഗുകൾ *! റിപ്പോർട്ട് *വഴി റിപ്പോർട്ട് ചെയ്യുക \n\n\n *「 CONSEQUENCES 」* \n 1. നിങ്ങൾ റൂൾ നമ്പർ 5 (കോളിംഗ്) ലംഘിക്കുകയാണെങ്കിൽ നിങ്ങളെ തടയും \n 2. നിങ്ങൾ നിയമങ്ങൾ 1, 2,  \n 3 ലംഘിക്കുകയാണെങ്കിൽ, നിങ്ങൾക്ക് ബോട്ടുകളിൽ നിന്ന് നിരോധിക്കാവുന്നതാണ് \n 4. നിങ്ങൾ റൂൾ നമ്പർ 3 (അപമാനിക്കൽ) ലംഘിക്കുകയാണെങ്കിൽ, നിങ്ങൾക്ക് ബോട്ട് ഉപയോഗിക്കാവുന്നതാണ്', MessageType.text, {quoted: message.data })
         }
         else if (regex13.test(message.message)) {
            await message.client.sendMessage(message.jid,'┌ *「 ABOUT 」* \n\n\n *HELLO I AM WHITEDEVIL USED FOR ENTERTAINMENT PURPOSE AS YOU ARE MY USERS YOU SHOULD MAINTAIN YOUR DIGNITY*', MessageType.text, {quoted: message.data })
         }

         else if (regex14.test(message.message)) {
            await message.client.sendMessage(message.jid,'┌ *「 ABOUT 」* \n\n\n *HELLO I AM WHITEDEVIL USED FOR ENTERTAINMENT PURPOSE AS YOU ARE MY USERS YOU SHOULD MAINTAIN YOUR DIGNITY*', MessageType.text, {quoted: message.data })
         }

         else if (regex15.test(message.message)) {
            await message.client.sendMessage(message.jid,'┌ *「 എന്താടോ😉」* \n *ഞാൻ ഇവിടെ ഉണ്ട്...😉*', MessageType.text, {quoted: message.data })
         }
        
         else if (regex16.test(message.message)) {
            await message.client.sendMessage(message.jid,'┌ *「 അത് എന്ത് ചോദ്യം 😉」* \n *വരുന്നത് ഓക്കെ കൊള്ളാം spam ആക്കരുത്...😉*', MessageType.text, {quoted: message.data })
         }
        
         else if (regex17.test(message.message)) {
            await message.client.sendMessage(message.jid,'*http://imgur.com/a/alPJ0fY.mp4*', MessageType.text, {quoted: message.data })
         }
        
         else if (regex18.test(message.message)) {
            await message.client.sendMessage(message.jid,'*http://imgur.com/a/alPJ0fY.mp4*', MessageType.text, {quoted: message.data })
         }
        
         else if (regex18.test(message.message)) {
            await message.client.sendMessage(message.jid,'*http://imgur.com/a/alPJ0fY.mp4*', MessageType.text, {quoted: message.data })
         }
        
         else if (regex19.test(message.message)) {
            await message.client.sendMessage(message.jid,'*http://imgur.com/a/alPJ0fY.mp4*', MessageType.text, {quoted: message.data })
        }
       
         else if (regex20.test(message.message)) {
            await message.client.sendMessage(message.jid,'*http://imgur.com/a/alPJ0fY.mp4*', MessageType.text, {quoted: message.data })
         }
       
         else if (regex21.test(message.message)) {
            await message.client.sendMessage(message.jid,'api key error', MessageType.text, {quoted: message.data })
         }
  }));

 }
