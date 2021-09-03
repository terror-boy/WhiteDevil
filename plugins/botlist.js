const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'bots', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/qs6CScf.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `\n\n *ʙᴏᴛ ʟɪꜱᴛꜱ* \n\n
\n      *_W͎H͎I͎T͎E͎D͎E͎V͎I͎L͎_*    \n *https://github.com/terror-boy/WhiteDevil/* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 𝐊𝐚𝐫𝐭𝐡𝐢𝐤_𝐭𝐞𝐫𝐫𝐨𝐫-𝐛𝐨𝐲 \n
\n      *_F̟I̟L̟O̟_*    \n *https://github.com/nexusNw/filo/* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 𝐧𝐞𝐱𝐮𝐬𝐍𝐰 \n
\n      *_A͎M͎A͎L͎S͎E͎R͎-͎V͎1͎_*    \n *https://github.com/cyberchekuthan/Amalser_v1/* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 𝐀𝐦𝐚𝐥𝐬𝐞𝐫 \n
\n      *_J͎U͎L͎I͎E͎M͎W͎O͎L͎_*    \n *https://github.com/farhan-dqz/JulieMwol/* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 𝐅𝐚𝐫𝐡𝐚𝐧-𝐝𝐪𝐳 \n
\n      *_J͎U͎L͎I͎E͎-M͎W͎O͎L͎_*    \n *https://github.com/farhan-dqz/Julie-Mwol/* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 𝐅𝐚𝐫𝐡𝐚𝐧-𝐝𝐪𝐳 \n
\n      *_L͎I͎Y͎A͎M͎O͎L͎_*    \n *https://github.com/saidalisaid2/Liyamol/* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 𝐬𝐚𝐢𝐝𝐚𝐥𝐢 \n
\n      *_E͎L͎S͎A͎M͎O͎L͎_*    \n *https://github.com/J-I-H-A-D/ElsaMwol/* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 𝐉𝐢𝐡𝐚𝐝 \n
\n      *_L͎A͎S͎T͎P͎I͎N͎K͎_*    \n *https://github.com/afnanplk/lastpink* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 𝐀𝐟𝐧𝐚𝐧 𝐩𝐥𝐤 \n
\n      *_D͎X͎T͎R͎O͎X͎_*    \n *https://github.com/amal-dx/DXTROX_V1* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 𝗔𝗠𝗔𝗟-𝗗𝗫 \n
\n      *_D͎E͎A͎D͎P͎O͎O͎L͎_*    \n *https://github.com/shazz-shahid/Deadpool* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 𝐬𝐡𝐚𝐳𝐳-𝐬𝐡𝐚𝐡𝐢𝐝 \n
\n      *_J͎O͎K͎E͎R͎B͎O͎T͎_*    \n *https://github.com/J0kerser/Jokerbot* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 𝐉𝟎𝐤𝐞𝐫𝐬𝐞𝐫 \n
\n      *_P͎I͎K͎A͎C͎H͎U͎_*    \n *https://github.com/ameer-kallumthodi/pikachu* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 𝐚𝐦𝐞𝐞𝐫 𝐤𝐚𝐥𝐥𝐮𝐦𝐭𝐡𝐨𝐝𝐢 \n\n\n\n\n
      ~*its just a small lists. More gits will available soon....... 🙂*~
`}) 

}));



// font:- https://fancyfontsgenerator.com/stylish-malayalam-fonts.html
