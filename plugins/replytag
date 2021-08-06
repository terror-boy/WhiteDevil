const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {
  if (text) conn.sendFile(m.chat, 'TAG_REPLY' + encodeURIComponent(text), 'some.mp3', '', m, false, { asSticker: true })
  else throw 'Uhm...Teksnya?'
}
handler.help = ['tagg <teks>']
handler.tags = ['mp3']
handler.command = /^reply$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
