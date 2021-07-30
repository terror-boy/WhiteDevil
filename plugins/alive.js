let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let os = require('os')
let util = require('util')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
let handler = async (m, { conn }) => {
  let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let aliven =`
    \`\`\`ᴏɪ\`\`\` *${username}*\n
    \`\`\`ɪᴀᴍ ʜᴇʀᴇ!!!\`\`\`
    \`\`\`ᴡʜᴀᴛ ʏᴏᴜ ᴡᴀɴᴛ ʙʀᴏ\`\`\`
   *_🔋 ʙᴀᴛᴛᴇʀʏ_* : \`\`\`${conn.battery ? `${conn.battery.value}%\n${conn.battery.live ? '🔌 Charging...' : '⚡ Discharging'}` : 'Unknown'}\`\`\`
    `.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', aliven, m, false)
  }
}
handler.help = ['alive']
handler.tags = ['tools']
handler.command = /^alive$/i
module.exports = handler
