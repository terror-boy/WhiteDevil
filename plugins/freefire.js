let Asena = require('../events');
let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let Config = require('../config');
let need = "*type some word after command*\n*command enthelum perupara nenba"
let tdc = '*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*'

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'freefire ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text=${encodeURIComponent(match[1])}&text2=LiyaMol`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: tdc })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'freefire ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text=${encodeURIComponent(match[1])}&text2=LiyaMol`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: tdc })

    }));
    
}
