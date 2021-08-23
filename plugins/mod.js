const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('bot links');

Asena.addCommand({pattern: 'bots', fromMe: false, desc: Lang.BS}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/hZ4Fpr5.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*bot lists* \n\n\n
\n *https://github.com/terror-boy/WhiteDevil/* -owned by Karthik_terror-boy \n
\n *https://github.com/nexusNw/filo/* -owned by nexusNw \n
\n *https://github.com/cyberchekuthan/Amalser_v1/* -owned by Amalser \n
\n *https://github.com/farhan-dqz/JulieMwol/* -owned by Farhan-dqz \n
\n *https://github.com/saidalisaid2/Liyamol/* -owned by saidali \n
\n *https://github.com/J-I-H-A-D/ElsaMwol/* -owned by Jihad \n
\n *https://github.com/afnanplk/lastpink* -owned by Afnan plk \n
\n *https://github.com/ameer-kallumthodi/pikachu* -owned by ameer kallumthodi \n\n\n\n\n
      ~*its just a small lists. More gits will available soon....... 🙂*~
`}) 

}));
