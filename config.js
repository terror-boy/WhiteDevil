/* Copyright (C) 2021 TERROR-BOY.

WhiteDevil - TERROR-BOY
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v8.0.2.',
    CHANNEL: 'https://t.me/remasterplugin',
    SESSION: process.env.WHITE_SESSION === undefined ? '' : process.env.WHITE_SESSION,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    AFN: process.env.ALL_CAPTION === undefined ? '*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*' : process.env.ALL_CAPTION,
    THERI_KICK: process.env.THERI_KICK === undefined ? 'false' : process.env.THERI_KICK,
    BAD_KICK: process.env.BAD_KICK === undefined ? 'false' : process.env.BAD_KICK,
    WELCOME: process.env.WELCOME === undefined ? 'pp' : process.env.WELCOME,
    ALL_LINK_BAN: process.env.ALL_LINK_BAN === undefined ? 'false' : process.env.ALL_LINK_BAN,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    OWNER: process.env.OWNER_NAME === undefined ? 'TERROR BOY' : process.env.OWNER_NAME,
    WHTDL: process.env.BGM_DURATION === undefined ? '39999600' : process.env.BGM_DURATION,
    OWNERNUM: process.env.OWNER_NUMBER === undefined ? '9778044264' : process.env.OWNER_NUMBER,
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://imgur.com/kB30S41.png' : process.env.ALIVE_LOGO,
    TERRORBOY: process.env.TAG_REPLY === undefined ? '919778044264@s.whatsapp.net' : process.env.TAG_REPLY,
    LIYANAME: process.env.LIYA_NAME === undefined ? 'ZARA MWOL' : process.env.LIYA_NAME,
    SAIDNUMBER: process.env.SAID_NUMBER=== undefined ? '918606759500' : process.env.SAID_NUMBER,
    INBO: process.env.INBO_BLOCK === undefined ? 'false' : process.env.INBO_BLOCK,
    INBO1: process.env.INBO_BLOCK === undefined ? 'true' : process.env.INBO_BLOCK,
    AI: process.env.AI_EVA === undefined ? 'false' : process.env.AI_EVA,
    WD_AI: process.env.WD_AI === undefined ? 'true' : process.env.WD_AI,
    KTB1: process.env.WHTS_PASSWORD === undefined ? false : process.env.WHTS_PASSWORD,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    BOT: process.env.BOT_NAME === undefined ? 'ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ' : process.env.BOT_NAME,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BOT1: process.env.BOT_NAMES === undefined ? 'ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ' : process.env.BOT_NAMES,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    AUTOSTICKER: process.env.AUTO_STICKER === undefined ? true : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    WSD: process.env.WSD === undefined ? '*꧁•⊹٭D͙O͙W͙N͙L͙O͙A͙D͙I͙N͙G͙ W͙H͙A͙T͙S͙A͙P͙P͙ S͙T͙A͙T͙U͙S͙٭⊹•꧂*' : process.env.WSD,
    WSU: process.env.WSU === undefined ? '*꧁•⊹٭𝚄𝙿𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝚂𝚃𝙰𝚃𝚄𝚂٭⊹•꧂*' : process.env.WSU,
    SONGD: process.env.SONGD === undefined ? 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGD,
    SONGU: process.env.SONGU === undefined ? 'ᴜᴘʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGU,
    TALKING_WHITEDEVIL: process.env.TALKING_WHITEDEVIL === undefined ? 'false' : process.env.TALKING_WHITEDEVIL,
    WEL_GIF: process.env.WEL_GIF === undefined ? 'https://i.imgur.com/nErXUGj.mp4' : process.env.WEL_GIF,
    GIF_BYE: process.env.GIF_BYE === undefined ? 'https://i.imgur.com/Z1jCYGN.mp4' : process.env.GIF_BYE,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    BOTPLK: process.env.BOT_NAME === undefined ? 'ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ' : process.env.BOT_NAME,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    PLKBGM: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    OVERMSG: process.env.OVER_MESSAGE === undefined ? 'default' : process.env.OVER_MESSAGE,
    KTB: process.env.TAG_HEADER === undefined ? 'WhiteDevil' : process.env.TAG_HEADER,
    TB: process.env.TAG_HEADER === undefined ? '' : process.env.TAG_HEADER,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.#!;]' : process.env.HANDLERS,
    YAK: process.env.YAK === undefined ? '919778042644,0' : process.env.YAK,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    DEVELOPER: 'TERROR BOY',
    AUTHOR: 'TERROR BOY',
    GIT: 'https://github.com/terror-boy/WhiteDevil.git',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY, 
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
};
 
