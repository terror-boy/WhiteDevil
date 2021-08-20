const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'list', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[1] = "https://avatars.githubusercontent.com/u/85664936?v=4";
    r_text[2] = "https://camo.githubusercontent.com/15cd035329b5b86f2908acfcdc39db031e4e167b1445aba7ff5a19f7c7b19933/68747470733a2f2f6361726469766f2e76657263656c2e6170702f6170693f6e616d653d4b41525448494b5f544552524f522d253230424f59266465736372697074696f6e3d48692c25323049276d253230612532306d6f646572617465253230446576656c6f70657225323025463025394625393825384526696d6167653d68747470733a2f2f692e696d6775722e636f6d2f4e796f54674a452e706e676261636b67726f756e64436f6c6f723d253233656366306631266769746875623d746572726f722d626f7926267061747465726e3d6c65616626636f6c6f725061747465726e3d253235656165616561.jpg";
   
    
    
    var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━✨️WhiteDevil✨️━━━━━⛦
𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 Karthik_terror-boy's 𝐛𝐨𝐭.
            *WhiteDevil*
■□■□■□■□■□■□■□■□■□■□
♕ *𝙈𝙚𝙙𝙞𝙖 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♕
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -song <text>
🍙𝙐𝙨𝙚➜ Downloads song for you.
⚠️.song  baby love
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -video <yt link>
🍙𝙐𝙨𝙚➜ Downloads video from YouTube link.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -insta <link>
🍙𝙐𝙨𝙚➜   Downloads content from instagram.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -yt<text>
🍙𝙐𝙨𝙚➜   Gives you YT links.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -show <show name>
🍙𝙐𝙨𝙚➜   Get info related to tv series and shows.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -gif 
🍙𝙐𝙨𝙚➜ Converts video to gif.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -tomp3 
🍙𝙐𝙨𝙚➜ Converts video into audio.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -say <text>
🍙𝙐𝙨𝙚➜ Converts text into voice.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -img <text>
🍙𝙐𝙨𝙚➜ It sends image from google.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trt <language code>
🍙𝙐𝙨𝙚➜ Translate the text you tag.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wiki <text>
🍙𝙐𝙨𝙚➜ It sends Wikipedia result.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -lyric <text>
🍙𝙐𝙨𝙚➜ Finds the lyrics of the song.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -covid <country code>
🍙𝙐𝙨𝙚➜ Send the covid stats of your country.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -weather <city>
🍙𝙐𝙨𝙚➜ Tells you about the weather of your place.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -removebg 
🍙𝙐𝙨𝙚➜ Removes the background of tge image.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ocr
🍙𝙐𝙨𝙚➜ Finds the text written on the image.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wallpaper
🍙𝙐𝙨𝙚➜ It sends you random wallpaper.
■□■□■□■□■□WhiteDevil■□■□■□■□■□
♟ *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♟
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -joke 
🍙𝙐𝙨𝙚➜ It sends a random joke.
 
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -meme <text>
🍙𝙐𝙨𝙚➜ Cations the image into a meme.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -quote 
🍙𝙐𝙨𝙚➜ It sends a random quote.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ss <website link>
🍙𝙐𝙨𝙚➜ It sends the screenshot of the website.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -changesay <text>
🍙𝙐𝙨𝙚➜ Converts text into changesay meme image.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trumpsay
🍙𝙐𝙨𝙚➜ Convert text into Trump's tweet.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -compliment 
🍙𝙐𝙨𝙚➜ Gives you a compliment.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -bitly <link>
🍙𝙐𝙨𝙚➜   Shorten your link.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -dict 
🍙𝙐𝙨𝙚➜   Dictionary [-dict en;anime]
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -zodiac <leo> 
🍙𝙐𝙨𝙚➜   Tells you about your horoscope.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -qr <text>
🍙𝙐𝙨𝙚➜   Converts text into qr code.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -movie 
🍙𝙐𝙨𝙚➜  Gives you info about movie.
⚠️movie master
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -anime <text>
🍙𝙐𝙨𝙚➜  Gives you info about anime.
⚠️anime whitedevil
■□■□■□■□■WhiteDevil□■□■□■□■□■□
♝ *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♝
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -sticker 
🍙𝙐𝙨𝙚➜ Converts img/gif into a sticker.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -photo 
🍙𝙐𝙨𝙚➜ Converts sticker into image.
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -attp <text>
🍙𝙐𝙨𝙚➜ Converts text into glowing sticker.
⚠️ex  attp whitedevil
■□■□■□■□■□■□■□■□■□■□
═════💢WhiteDevil💢═════
▣▣▣▣▣▣▣▣▣ Karthik_terror-boy  ▣▣▣▣▣▣▣▣▣▣▣
`}) 

}));
