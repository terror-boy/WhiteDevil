const Asena = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');

Asena.addCommand({ pattern: 'topdf', fromMe: true, desc: "Convert to pdf.", owner: false }, (async (message, match) => {
    if (!message.reply_message) return await message.sendMessage('*Reply to a message*!');
    if (message.reply_message.audio || message.reply_message.video || message.reply_message.sticker || message.reply_message.pdf) return message.sendMessage('*Not supported!*');
    let location = await message.reply_message.downloadMediaMessage();
    toPDF(location).then(async (pdfBuffer) => {
        return await message.sendMessage(pdfBuffer, { filename: Math.floor(Math.random() * 999999) + '.pdf', mimetype: Mimetype.pdf }, MessageType.document);
    }, (err) => console.log(`topdf : ${err}`))
}))

Asena.addCommand({ pattern: 'wasted', fromMe: true, desc: "Wasted banner.", owner: false }, (async (message, match) => {
    if (!message.reply_message || !message.reply_message.image) return await message.sendMessage("*Reply to a image.*");
    let location = await message.reply_message.downloadMediaMessage();
    let buffer = await banner(location, 'wasted')
    return await message.sendMessage(buffer, {}, MessageType.image)
}));

Asena.addCommand({ pattern: 'trigged', fromMe: true, desc: "Triggered banner.", owner: false }, (async (message, match) => {
    if (!message.reply_message || !message.reply_message.image) return await message.sendMessage("*Reply to a image.*");
    let location = await message.reply_message.downloadMediaMessage();
    let buffer = await banner(location, 'triggered')
    return await message.sendMessage(buffer, { mimetype: Mimetype.webp }, MessageType.sticker);
}));
