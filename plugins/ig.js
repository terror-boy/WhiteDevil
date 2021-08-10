/* Copyright (C) 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhiteDevil - TERROR BOY
*/


const Asena = require('../events')
const { MessageType, Mimetype} = require('@adiwajshing/baileys')
const axios = require('axios')
const sd = "Download videos from Instagram."
const got = require('got');
const gt = "Shows the Github profile."
const hb = "Cannot be rented"
const yb = "Rentable"
const tvig = "Downloads videos via IGTV."
const ph = "Download photos from Instagram"
const { errorMessage, infoMessage } = require('../helpers')
const Language = require('../language');
const Lang = Language.getString('instagram')


Asena.addCommand({ pattern: 'igvideo ?(.*)', fromMe: true, desc: sd }, async (message, match) => {

    const userName = match[1]

    if (userName === '') return await message.client.sendMessage(message.jid, '```URL Gir!```')

    await axios.get(`https://docs-jojo.herokuapp.com/api/insta?url=${userName}`).then(async (response) => {

        const { resource } = response.data

        const profileBuffer = await axios.get(resource.url[0], { responseType: 'arraybuffer' })

        if (resource.url.is_video[0]) {
            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, { caption: '*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*' })
        }
        else if (!resource.url.is_video[0]) {
            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: '*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*' })
        }
    }).catch(async (err) => {
        await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName))
    })
});
Asena.addCommand({ pattern: 'igphoto ?(.*)', fromMe: true, desc: ph }, async (message, match) => {

    const userName = match[1]

    if (userName === '') return await message.client.sendMessage(message.jid, '```URL Gir!```')

    await axios
      .get(`https://api.zeks.xyz/api/ig?url=${userName}&apikey=apivinz`)
      .then(async (response) => {

        const {
          owner,
          caption,
          url, 
        } = response.data.result

        const phig = await axios.get(url, 
          {responseType: 'arraybuffer',
        })

        const msg = `*User name:* ${owner} \n*Description:* ${caption}`

        await message.sendMessage(Buffer.from(phig.data), MessageType.image, { 
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.client.sendMessage(message.jid, 'Not found'),
      )
  },
)

Asena.addCommand({ pattern: 'igvideo ?(.*)', fromMe: true, desc: tvig }, async (message, match) => {

    const userName = match[1]

    if (userName === '') return await message.client.sendMessage(message.jid, '```URL Gir!```')

    await axios
      .get(`https://videfikri.com/api/igtv/?url=${userName}`)
      .then(async (response) => {

        const {
          likes, 
          comment, 
          username,
          full_name, 
          caption,
          video_url, 
          duration,
        } = response.data.result

        const tvdat = await axios.get(video_url, 
          {responseType: 'arraybuffer',
        })

        const msg = `*User name:* ${username} \n*Name:* ${full_name} \n*like:* ${likes} \n*Comment:* ${comment} \n*Description:* ${caption} \n*Length:* ${duration}`

        await message.sendMessage(Buffer.from(tvdat.data), MessageType.video, { 
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.client.sendMessage(message.jid, 'Not found'),
      )
  },
)

Asena.addCommand({ pattern: 'github ?(.*)', fromMe: true, desc: gt }, async (message, match) => {

    const userName = match[1]

    if (userName === '') return await message.client.sendMessage(message.jid, '```Github Kullanıcı İsmi Gir!```')

    await axios
      .get(`https://videfikri.com/api/github/?username=${userName}`)
      .then(async (response) => {

        const {
          hireable,
          company,
          profile_pic,
          username,
          fullname, 
          blog, 
          location,
          email,
          public_repository,
          biografi,
          following,
          followers,
          public_gists,
          profile_url,
          last_updated,
          joined_on,
        } = response.data.result

        const githubscrap = await axios.get(profile_pic, 
          {responseType: 'arraybuffer',
        })

        const msg = `*Kullanıcı Adı:* ${username} \n*İsmi:* ${fullname} \n*Takipçi:* ${followers} \n*Takip Edilen:* ${following} \n*Biyografi:* ${biografi} \n*Açık Repolar:* ${public_repository} \n*Açık Gistler:* ${public_gists} \n*Konumu:* ${location} \n*Email:* ${email} \n*Blog:* ${blog} \n*Şirket:* ${company} \n*Kiralanabilir mi?:* ${hireable === "true" ? yb : hb} \n*Katılma Tarihi:* ${joined_on} \n*Son Güncelleme Tarihi:* ${last_updated} \n*Profil Bağlantısı:* ${profile_url}`

        await message.sendMessage(Buffer.from(githubscrap.data), MessageType.image, { 
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.client.sendMessage(message.jid, 'Bulunamadı'),
      )
  },
)
Asena.addCommand({ pattern: 'ista ?(.*)', fromMe: true, desc: Lang.DESC }, (async (message, match) => {
	if (match[0].includes('install')) return;
        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text, { quoted: message.data });
        if (!match[1].includes('www.instagram.com')) return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text, { quoted: message.data });
	
        let urls = `https://api.xteam.xyz/dl/ig?url=${match[1]}&APIKEY=ab9942f95c09ca89`
        var response = await got(urls) 
        const json = JSON.parse(response.body);

        if (json.status === false) return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text, { quoted: message.data });
        
        if (json.code === 403) return await message.client.sendMessage(message.jid, '```API Error!```', MessageType.text, { quoted: message.data });

        await message.client.sendMessage(message.jid, Tlang.DOWN, MessageType.text, { quoted: message.data });

        let url = json.result.data[0].data;
        let name = json.result.data[0].type;
        await axios({ method: "get", url, headers: { 'DNT': 1, 'Upgrade-Insecure-Request': 1 }, responseType: 'arraybuffer'}).then(async (res) => {
            if (name === 'video') { return await message.sendMessage(Buffer(res.data), MessageType.video, { caption: '*' + Tlang.USERNAME + '* ' + json.result.username + '\n*' + Tlang.LİNK + '* ' + 'http://instagram.com/' + json.result.username + '\n*Beğeni Sayısı:* ' + json.result.likes + '\n*' + Tlang.CAPTİON + '* ' + json.result.caption }) } else { return await message.sendMessage(Buffer(res.data), MessageType.image, { caption: '*' + Tlang.USERNAME + '* ' + json.result.username + '\n*' + Tlang.LİNK + '* ' + 'http://instagram.com/' + json.result.username + '\n*Beğeni Sayısı:* ' + json.result.likes + '\n*' + Tlang.CAPTİON + '* ' + json.result.caption });
            }
        });

}));
