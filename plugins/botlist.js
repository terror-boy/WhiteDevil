const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');

let td = Config.WORKTYPE == 'public' ? false : true


Asena.addCommand({pattern: 'bots', fromMe: td, desc: "GIVE THE LIST OF WHATSAPP BOTS"}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/qs6CScf.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `\n\n *▁ ▂ ▄ ▅ ▆ ▇  Wʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ Lɪꜱᴛꜱ  ▇ ▆ ▅ ▄ ▂ ▁* \n\n
\n      ▣ *Sophia* ▣\n\n\n\n◯⦁⦁━━►  _LINK : https://github.com/Hisham-Muhammed/-SOPHIA_\n\n◯⦁⦁━━► _OWNER : Hisham_\n\n\n\n\n▣ *Julie mwol* ▣\n\n\n\n◯⦁⦁━━►  _LINK : https://github.com/farhan-dqz/JulieMwol_\n\n◯⦁⦁━━► _OWNER : Farhan-dqz_\n\n\n\n\n▣ *Pikachu* ▣\n\n\n\n◯⦁⦁━━►  _LINK : github.com/ameer-kallumthodi/pikachu_\n\n◯⦁⦁━━► _OWNER : Ameer Suhail_\n\n\n\n\n▣ *WhiteDevil* ▣\n\n\n\n◯⦁⦁━━►  _LINK : https://github.com/terror-boy/WhiteDevil_\n\n◯⦁⦁━━► _OWNER : karthik_terror-boy_\n\n\n\n\n▣ *WhatsAlexa* ▣\n\n\n\n◯⦁⦁━━►  _LINK : https://github.com/TOXIC-DEVIL/WhatsAlexa_\n\n◯⦁⦁━━► _OWNER : TOXIC DEVIL_\n\n\n\n\n▣ *Filo V2* ▣\n\n\n\n◯⦁⦁━━►  _LINK : https://github.com/nexusNw/filov2_\n\n◯⦁⦁━━► _OWNER : Nexusnw_\n\n\n\n\n▣ *Nandhutty_v2* ▣\n\n\n\n◯⦁⦁━━►  _LINK : https://github.com/Ajmal-Achu/Nandhutty_v2_\n\n◯⦁⦁━━► _OWNER : Ajmal and Achu_\n\n\n\n\n▣ *DXTROX-V_1* ▣\n\n\n\n◯⦁⦁━━►  _LINK : https://github.com/amal-dx/DXTROX_V1_\n\n◯⦁⦁━━► _OWNER : Amal-dx_\n\n\n\n\n▣ *Amalser_v2* ▣\n\n\n\n◯⦁⦁━━►  _LINK : https://github.com/cyberchekuthan/Amalser_v2_\n\n◯⦁⦁━━► _OWNER : Amalser [cyberchekuthan]_\n\n\n\n\n▣ *PinkyMwol* ▣\n\n\n\n◯⦁⦁━━►  _LINK : https://github.com/afnanplk/Pinky_\n\n◯⦁⦁━━► _OWNER : Afnan plk_\n\n\n\n\n▣ *Wa-Bot* ▣\n\n\n\n◯⦁⦁━━►  _LINK : https://github.com/0X-ShadoW-X0/Wa-Bot_\n\n◯⦁⦁━━► _OWNER : Shadow_\n\n\n\n\n
`}) 

}));



