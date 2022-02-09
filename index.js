// UDAH RAPIH MASIH GA SUBREK? //
// TERLALU KAU KAWAN 😪 //
// YT : FBOTZ YT //
// IG : @fandyyy._ //
const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatkey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const fs = require('fs')
const hx = require('hxz-api')
const axios = require("axios")
const crypto = require('crypto') 
const yts = require( 'yt-search')
const request = require('request')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const moment = require('moment-timezone')
const imageToBase64 = require('image-to-base64')
const { exec, spawn, execSync } = require('child_process')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { y2mate } = require('./lib/y2mate');
const { wikiSearch } = require('./lib/wiki.js')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
gambar = fs.readFileSync('./thumb.jpeg')
tamnel = fs.readFileSync('./fake.jpeg')
const { Miminnya, BotName, fake, ownerNumber, targetpc, lolkey, prefix, instagram, youtube} = require('./setting.json')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
//const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, author, close,
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/functions')
const { sgrup, sshop, sowner, smaker, sgame1, sgame2, sgame3, sgame4, sgame5, sother } = require('./FbotzSynyster/simple.js')
const { menu } = require('./FbotzSynyster/menu.js')
const { donasi } = require('./FbotzSynyster/donasi.js')
const { rules } = require('./FbotzSynyster/rules.js')
const { allpayment } = require('./shop/allpayment.js')
const { freefire } = require('./shop/freefire.js')
const { mobilelegend } = require('./shop/mobilelegend.js')
const { pubg } = require('./shop/pubg.js')
const { sosis } = require('./shop/sosis.js')
const { format } = require('./shop/format.js')
const { sewa } = require('./FbotzSynyster/sewa.js')

let _antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
let _antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))

angka = ['1','2','3','4','5','6','7','8','9']
const randomnay1 = angka[Math.floor(Math.random() * (angka.length))]
const randomnay2 = angka[Math.floor(Math.random() * (angka.length))]

isSelf = false
isPublic = false
autobio = true
a = '```'
HardiApi = 'hardianto'
/*async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}*/
//================================================================================//
           
function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var Jam = Math.floor(seconds / (60*60));
            var Menit = Math.floor(seconds % (60*60) / 60);
            var Detik = Math.floor(seconds % 60);
            return `*${BotName} Telah Online Selama :*\n\n${a}${pad(Jam)} Jam${a}\n${a}${pad(Menit)} Menit${a}\n${a}${pad(Detik)} Detik${a}`
            }
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = 'Selamat Malam 🌌 Dan Selamat Beristirahat 🛌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = 'Selamat Petang 🌆 Dan Selamat Beristirahat 😴'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = 'Selamat Sore 🌇 Dan Selamat Beristirahat 💆🏻‍♂️'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = 'Selamat Siang 🏞 Dan Selamat Beraktifitas 💼'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = 'Selamat Pagi 🌅 Dan Selamat Beraktifitas 😎'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = 'Selamat Malam 🏙 Dan Selamat Beristirahat 😪'
}
  
//================================================================================//
           
            module.exports = mika = async (mika, mek, _welkom) => {
	        try {
	     //   const { id } = message
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			global.prefix
			global.blocked	
		    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
	        const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
            const hour_now = moment().format('HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '#'          	
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		    const command1 = body.slice(2).trim().split(/ +/).shift().toLowerCase()		
		    undef2 = fs.readFileSync('./database/group/tag1.webp')
	      	const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix)
	       	const q = args.join(' ')
		    const botNumber = mika.user.jid
		    const botNumberss = mika.user.jid + '@c.us'
		    const isGroup = from.endsWith('@g.us')
		    let sender = isGroup ? mek.participant : mek.key.remoteJid
		    const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`]
		    const isOwner = ownerNumber.includes(sender)
	     	const totalchat = await mika.chats.all()
		    const groupMetadata = isGroup ? await mika.groupMetadata(from) : ''
		    const groupName = isGroup ? groupMetadata.subject : ''
	     	const groupId = isGroup ? groupMetadata.jid : ''
		    const groupMembers = isGroup ? groupMetadata.participants : ''
		    const groupDesc = isGroup ? groupMetadata.desc : ''
	     	const groupOwner = isGroup ? groupMetadata.owner : ''
		    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		    const isGroupAdmins = groupAdmins.includes(sender) || false        
		    const isWelkom = isGroup ? _welkom.includes(from) : false
            const conts = mek.key.fromMe ? mika.user.jid : mika.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = mek.key.fromMe ? mika.user.name : conts.notify || conts.vname || conts.name || '-'
            const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
            const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByreply) : []
            const mentionUser = mention != undefined ? mention.filter(n => n) : []
           
            const isAntiLink = isGroup ? _antilink.includes(from) : false
            const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
            const isBan = ban.includes(sender)
//================================================================================//
           
		mess = {
			wait: 'Please Waiting. . .',
			success: 'Successl!',
			wrongFormat: 'Wrong Format!! Please Read Menu!',
			error: {
				stick: 'This is not sticker',
				url: 'Url EROR',
			},
			only: {
				group: 'Only Group!!',
				owner: 'Onlt owner Bot!!',
				gcadmin: 'Only Group Admins',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))        }
        const reply = (teks) => {
            mika.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            mika.sendMessage(hehe, teks, text)
        }
        const sendVn = (teks) => {mika.sendMessage(from, teks, audio, {mimetype:"audio/mp4", ptt:true, quoted:mek,contextInfo: {forwardingScore: 508, isForwarded: true}})}
        
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? mika.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : mika.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        let runtime = function (seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor((seconds % (3600 * 24)) / 3600);
        var m = Math.floor((seconds % 3600) / 60);
        var s = Math.floor(seconds % 60);
        var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
        };
        function clockString(ms) {
        let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
        let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
        let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
        return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
        }
        if (autobio){
        if (autobio === false) return           
        let settingstatus = 0;
        if (new Date() * 1 - settingstatus > 1000) {
        let _uptime = process.uptime() * 1000;
        let uptimer = clockString(_uptime);
        await mika.setStatus(`${BotName} ONLINE | ⏰ ${uptimer}`).catch((_) => _);
        settingstatus = new Date() * 1;
        }}
        if (budy.includes("https://chat.whatsapp.com/")) {
        if (!isGroup) return
        if (!isAntiLink) return
        if (isGroupAdmins) return
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply(`*「 GROUP LINK DETECTOR 」*\n\n${a}Selamat Kamu Kena Kick 😄${a}\n${a}Kameranya Aku Tarok Situ 👉${a}`)
        setTimeout(() => {
        mika.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
        }, 0)
        }
        if (budy.length > 3500) {
        if (!isGroup) return
        if (!isAntiVirtex) return
        if (isGroupAdmins) return
        reply('Tandai telah dibaca\n'.repeat(300))
        reply(`*「 VIRTEX DETECTOR 」*\n\n${a}Udah Gede Masih Maen Virtex 😡${a}\n${a}Dajjal Menyertaimu Nak👁️${a}`)
        console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
        mika.groupRemove(from, [sender])
        }     
        
//================================================================================//
           
        const fakestatus = (teks) => {
        mika.sendMessage(from, teks, text, {
        quoted: {
        key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
        },
        message: {
        "imageMessage": {
        "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
        "mimetype": "image/jpeg",
        "caption": fake,
        "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
        "fileLength": "28777",
        "height": 1080,
        "width": 1079,
        "mediakey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
        "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
        "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
        "mediakeyTimestamp": "1610993486",
        "jpegThumbnail": tamnel,
        "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
        }
        }
        }
        })
        }
// ================ //
           const fkontak = { 
           key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `Hallo ${pushname}\n${ucapanWaktu}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': tamnel}}} 
           const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 1945, status: 200, thumbnail: tamnel, surface: 200, message: `Made By ${Miminnya}`, orderTitle: 'LordFandyyy', sellerJid: '0@s.whatsapp.net'} } }                	

//=================================================//	
 
        const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        }
        mika.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: troli
        })
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        mika.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
        jadinya = await mika.prepareMessage(from, img, image)
        buttonMessagesI = {
        imageMessage: jadinya.message.imageMessage,
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 4
        }
        mika.sendMessage(from, buttonMessagesI, buttonsMessage, {
        quoted: troli,
        })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return mika.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }          
        
//===============================================================================//
        const sendMedia = async(from, url, text="", mids=[]) =>{
                if(mids.length > 0){
                text = normalizeMention(from, text, mids)
                } 
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                mime = res.headers['content-type']
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
                };
                download(url, filename, async function () {
                console.log('done');
                let media = fs.readFileSync(filename)
                let type = mime.split("/")[0]+"Message"
                if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
                }
                if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
                }
                mika.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})                    
                    fs.unlinkSync(filename)
                });
                } 
         const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    mika.sendMessage(to, media, type, { quoted: troli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }                                 
        const sendStickerFromUrl = async(to, url) => {
        var names = Date.now() / 10000;
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
         };
        download(url, './stik' + names + '.png', async function () {
        console.log('selesai');
        let filess = './stik' + names + '.png'
        let asw = './stik' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
        let media = fs.readFileSync(asw)
        mika.sendMessage(to, media, MessageType.sticker,{quoted:mek})
        fs.unlinkSync(filess)
        fs.unlinkSync(asw)
        });
        });
        }
        const sendFile = async (medya, namefile, capti, tag, vn) => {
        baper = await getBuffer(medya)
        mimi = ''
        if (namefile.includes('m4a')){
        mika.sendMessage(from, baper, audio,{mimetype: 'audio/mp4',quoted: tag, filename: namefile, ptt: vn})
        }
        if (namefile.includes('mp4')){
        mika.sendMessage(from, baper, video, {mimetype: 'video/mp4', quoted: tag, caption: capti, filename: namefile})
        }
        if (namefile.includes('gif')){
        mika.sendMessage(from, baper, video, {mimetype: Mimetype.gif, caption: capti, quoted: tag, filename: namefile})
        } 
        if (namefile.includes('png')){
        mika.sendMessage(from, baper, image, {quoted: tag, caption: capti, filename: namefile})
        }
        if (namefile.includes('webp')){
        mika.sendMessage(from, baper, sticker, {quoted: tag})
        } else {
        kobe = namefile.split(`.`)[1]
        mika.sendMessage(from, baper, document, {mimetype: kobe, quoted: tag, filename: namefile})
        }
        }
        const sendFileFromUrl = async(link, type, options) => {
        hasil = await getBuffer(link)
        mika.sendMessage(from, hasil, type, options).catch(e => {
        fetch(link).then((hasil) => {
        mika.sendMessage(from, hasil, type, options).catch(e => {
        mika.sendMessage(from, { url : link }, type, options).catch(e => {
        reply('_[ ! ] Error failed to download and send media_')
        console.log(e)
       })
     })
   })
 })
}
//================================================================================//

	  colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
	  const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	  const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	  const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	  const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	  const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	  const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
       
      if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
      if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))
//================================================================================/
//============================ A L L  C A S E  M E N U ==============================
//================================================================================/
switch (command) {  
//===== S e l e c t i o n  m e n u
      case 'menu': case 'help':
            listMsg = {
            buttonText: 'KLIK DISINI 👋',
            footerText: fake,
            description: `*Hai Kak @${sender.split('@')[0]} 💐*\n*${ucapanWaktu}*\n\n*Saya ${BotName} Akan Membantu Kamu Dalam Berbagai Hal*\n\n*Berikut List Menu Yang Tersedia Selamat Menikmati*\n\n${a}Note : Jika Ada Fitur Yang Error Harap Lapor Ke Owner Agar Segera Diperbaiki 🤗${a}`,
            sections: [
            {
            "title": `Silahkan Dipilih Kak ${pushname} 🤗`,
            rows: [
            {
              "title": "ALL MENU 🏘️",
              "rowId": `${prefix}allmenu`
            },
            {
              "title": "SHOP MENU 💎",
              "rowId": `${prefix}shopmenu`
            },
            {
              "title": "GROUP MENU 👨‍👦‍👦",
              "rowId": `${prefix}groupmenu`
            },
            {
              "title": "OWNER MENU 👤",
              "rowId": `${prefix}ownermenu`
            },
            {
              "title": "MAKER MENU 👨‍🎨",
              "rowId": `${prefix}makermenu`
            },
            {
              "title": "GAME MENU 🎰",
              "rowId": `${prefix}gamemenu`
            },
            {
              "title": "OTHER MENU ☕",
              "rowId": `${prefix}othermenu`
            },
            {
              "title": "DONASI 🎁",
              "rowId": `${prefix}donasi`
            },
            {
              "title": "SOURCE CODE 👨‍💻",
              "rowId": `${prefix}sc`
            },
            {
              "title": "BIG THANKS TO 🏆",
              "rowId": `${prefix}tqto`
            },
            {
              "title": "RULES 📚",
              "rowId": `${prefix}ruls`
            }
            ]
            }],
            listType: 1
            }
            mika.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}})
            break

/// ALL MENU
      case 'allmenu':
      case 'all':
            imgall = fs.readFileSync('./media/allmenu.jpg')
            but = [
            { buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💰' }, type: 1 },
            { buttonId: `${prefix}shop`, buttonText: { displayText: 'STORE 💎' }, type: 1 }
                 ]
            sendButLocation(from, menu(prefix), fake, imgall, but)
            break

/// JUALAN
      case 'shopmenu': case 'shop':
            listMsg = {
            buttonText: 'KLIK DISINI 👋',
            footerText: fake,
            description: `*Hai Kak @${sender.split('@')[0]}*\n*${ucapanWaktu}*\n\n*Berikut List Voucher Game Yang Tersedia Di Toko Kami 🛒*\n\n${a}Note : Jika Ada Fitur Yang Error Harap Lapor Ke Owner Agar Segera Diperbaiki 🤗${a}`,
            sections: [
            {
            "title": `Silahkan Dipilih Kak ${pushname} 🤗`,
            rows: [
            {
              "title": "ALL PAYMENT 🤑💰",
              "rowId": `${prefix}allpayment`
            },
            {
              "title": "MOBILE LEGEND 🎮🕹️",
              "rowId": `${prefix}ml`
            },
            {
              "title": "FREE FIRE 🎮🔫",
              "rowId": `${prefix}epep`
            },
            {
              "title": "PUBG 🎮🔫",
              "rowId": `${prefix}pubg`
            },
            {
              "title": "SOSIS 🌭",
              "rowId": `${prefix}sosis`
            }
            ]
            }],
            listType: 1
            }
            mika.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}})
            break
      case 'allpayment':
            sorce = fs.readFileSync('./shop/imgshop/allpayment.jpg')
            but = [
            { buttonId: `${prefix}menu`, buttonText: { displayText: 'HOME 🏘️' }, type: 1 },
                 ]
            sendButLocation(from, allpayment(prefix), fake, sorce, but)
            break
      case 'ml':
      case 'mobilelegend':
            imgml = fs.readFileSync('./shop/imgshop/mobilelegend.jpeg')
            but = [
            { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋🏽‍♂️' }, type: 1 }
                 ]
            sendButLocation(from, mobilelegend(prefix), fake, imgml, but)
            break
      case 'freefire':
      case 'epep':
            imgepep = fs.readFileSync('./shop/imgshop/freefire.jpeg')
            but = [
            { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋🏼‍♂️' }, type: 1 },
                 ]
            sendButLocation(from, freefire(prefix), fake, imgepep, but)
            break
     case 'pubg':
            imgpubg = fs.readFileSync('./shop/imgshop/pubg.jpeg')
            but = [
            { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋🏻‍♂️' }, type: 1 },
                 ]
            sendButLocation(from, pubg(prefix), fake, imgpubg, but)
            break
     case 'sosis':
            imgsosis = fs.readFileSync('./shop/imgshop/sosis.jpeg')
            but = [
            { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋‍♂️' }, type: 1 },
                 ]
            sendButLocation(from, sosis(prefix), fake, imgsosis, but)
            break
      case 'formatorder': case 'format':
            mika.sendMessage(from, format(prefix), MessageType.text, {quoted: mek})
            break
      case 'salin': 
            if (args.length < 1) return balas(`Salin/Copy Pesan Tadi Lalu Kirim Balik`) 
            teks = args.join(' ')
            reply('Silahkan Selesaikan Transaksi Terlebih Dahulu, Baru Akan Kami Proses 😎 Serta Harap Lampirkan Bukti Transfer 🤤')
            mika.sendMessage(`${ownerNumber}@s.whatsapp.net`,`*Hai Owner, Ada Orderan Nih*\n*Mohon Di Proses Segera*\n\n${teks}`, text)
            mika.sendMessage(`${ownerNumber}@s.whatsapp.net`,`*Tapi Jangan Lupa Cek Dulu Di WA Bot Sudah Selesai Belum Transaksinya*`, text)
            break

/// GROUP MENU 
      case 'groupmenu':
            imggrup = fs.readFileSync('./media/groupmenu.jpg')
            but = [
            { buttonId: `${prefix}source`, buttonText: { displayText: 'SUMBER 🔍' }, type: 1 },
            { buttonId: `${prefix}shop`, buttonText: { displayText: 'SHOP 💎' }, type: 1 }
                 ]
            sendButLocation(from, sgrup(prefix), fake, imggrup, but)
            break
      case 'welcome' :
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            but = [
            { buttonId: '!welcomeon', buttonText: { displayText: 'ON ⚔️' }, type: 1 },
            { buttonId: '!welcomeoff', buttonText: { displayText: 'OFF ⚰️' }, type: 1 }
            ]
            sendButton(from, "Silahkan Pilih Untuk Welcome Group", fake, but, mek)
            break
     case 'welcomeon':   
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (isWelkom) return reply(`\`\`\`✓ Sukses Mengaktifkan Fitur Welcome Di Group\`\`\` *${groupMetadata.subject}*`)
            _welkom.push(from)
            fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom))
            reply(`\`\`\`✓ Sukses Mengaktifkan Fitur Welcome Di Group\`\`\` *${groupMetadata.subject}*`)
            break
      case 'welcomeoff':
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (isWelkom) return reply(`\`\`\`✓ Sukses Menonaktifkan Fitur Welcome Di Group\`\`\` *${groupMetadata.subject}*`)
            _welkom.push(from, 1)
            fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom))
            reply(`\`\`\`✓ Sukses Menonaktifkan Fitur Welcome Di Group\`\`\` *${groupMetadata.subject}*`)
            break
     case 'hidetag':
	        if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
	        if (!isOwner && !isGroupAdmins) return reply(`Khusus admin gan`)
			var value = body.slice(9)
			var group = await mika.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map( async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var options = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			mika.sendMessage(from, options, text,{quoted :mek})
			break
      case 'antilink' :
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (!isBotGroupAdmins) return reply("Bot Bukan Admin 😔")
            but = [
            { buttonId: '!antilinkon', buttonText: { displayText: 'ON ⚔️' }, type: 1 },
            { buttonId: '!antilinkoff', buttonText: { displayText: 'OFF ⚰️' }, type: 1 }
            ]
            sendButton(from, "Silahkan Pilih Untuk Antilink Group", fake, but, mek)
            break
      case 'antilinkon' :
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (!isBotGroupAdmins) return reply("Bot Bukan Admin 😔")
            if (isAntiLink) return reply('Anti Link Sudah On')
            _antilink.push(from)
            fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
            reply(`\`\`\`✓ Sukses Mengaktifkan Fitur Anti Link Di Group\`\`\` *${groupMetadata.subject}*`)
            break
     case 'antilinkoff' :
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (!isBotGroupAdmins) return reply("Bot Bukan Admin 😔")
            if (!isAntiLink) return reply('Anti Link Sudah Off Sebelumnya')
            _antilink.splice(from, 1)
            fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
            reply(`\`\`\`✓Sukses Menonaktifkan Fitur Anti Link Di Group\`\`\` *${groupMetadata.subject}*`)
            break
      case 'antivirtex' : case 'antivirtext':
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (!isBotGroupAdmins) return reply("Bot Bukan Admin 😔")
            but = [
            { buttonId: '!antivirtexon', buttonText: { displayText: 'ON ⚔️' }, type: 1 },
            { buttonId: '!antivirtexoff', buttonText: { displayText: 'OFF ⚰️' }, type: 1 }
            ]
            sendButton(from, "Silahkan Pilih Untuk Antivirtex Group", fake, but, mek)
            break
      case 'antivirtexon' :
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (!isBotGroupAdmins) return reply("Bot Bukan Admin 😔")
            if (isAntiVirtex) return reply(`\`\`\`Sukses Mengaktifkan Mode Anti Virtex Di Group\`\`\` *${groupMetadata.subject}*`)
            _antivirtex.push(from)
            fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
            reply(`\`\`\`Sukses Mengaktifkan Mode Anti Virtex Di Group\`\`\` *${groupMetadata.subject}*`)
            break
      case 'antivirtexoff' :
            if (!isGroup) return reply(`Khusus Grup Ngab ??`)
            if (!isGroupAdmins) return reply(`Khusus Grup Coeg`)
            if (!isBotGroupAdmins) return reply("Bot Bukan Admin 😔")
            if (!isAntiVirtex) return reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
            _antivirtex.splice(from, 1)
            fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
            reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
            break
      case 'group' :
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isBotGroupAdmins) return reply("Bot Bukan Admin 😔")
            but = [
            { buttonId: '!groupbuka', buttonText: { displayText: 'BUKA 🚪' }, type: 1 },
            { buttonId: '!grouptutup', buttonText: { displayText: 'TUTUP 🚪' }, type: 1 }
            ]
            sendButton(from, "Silahkan Pilih Untuk Buka/Tutup Group", fake, but, mek)
            break
      case 'groupbuka' :
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (!isBotGroupAdmins) return reply("Bot Bukan Admin 😔")
            reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
            mika.groupSettingChange(from, GroupSettingChange.messageSend, false)
            break
      case 'grouptutup' :
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (!isBotGroupAdmins) return reply("Bot Bukan Admin 😔")
            reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
            mika.groupSettingChange(from, GroupSettingChange.messageSend, true)
            break
      case 'promote' :
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (!isBotGroupAdmins) return reply("Bot Bukan Admin 😔")
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            if (mentioned.length > 1) {
            teks = 'Perintah Di Terima, Anda Sekarang Menjadi Admin :\n'
            for (let _ of mentioned) {
            teks += `@${_.split('@')[0]}\n`
            }
            mentions(teks, mentioned, true)
            mika.groupMakeAdmin(from, mentioned)
            } else {
            mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
            mika.groupMakeAdmin(from, mentioned)
            }
            break
      case 'demote' :
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (!isBotGroupAdmins) return reply("Bot Bukan Admin 😔")
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            if (mentioned.length > 1) {
            teks = 'Perintah Di Terima, Anda Tidak Menjadi Admin Lagi :\n'
            for (let _ of mentioned) {
            teks += `@${_.split('@')[0]}\n`
            }
            mentions(teks, mentioned, true)
            mika.groupDemoteAdmin(from, mentioned)
            } else {
            mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
            mika.groupDemoteAdmin(from, mentioned)
            }
            break
     case 'add' :
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (!isBotGroupAdmins) return reply("Bot Bukan Admin 😔")
            if (args.length < 1) return reply('Yang mau di add siapa??')
            if (args[0].startsWith('08')) return reply('Gunakan kode negara 62 Gan')
            try {
            num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
            mika.groupAdd(from, [num])
            } catch (e) {
            console.log('Error :', e)
            reply('Gagal menambahkan target, mungkin karena di private')
            }
            break
      case 'kick':
			if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
			if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
			if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
			if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
			var kickya = q.split('@')[1] + '@s.whatsapp.net'
			await mika.groupRemove(from, [kickya])
			reply(`Succses kick target!`)
			break
      case 'tagall':
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
            members_id = []
            teks = (args.length > 1) ? args.join(' ').trim() : ''
            teks += '\n\n'
            for (let mem of groupMembers) {
            teks += `• @${mem.jid.split('@')[0]}\n`
            members_id.push(mem.jid)
            }
            mentions(teks, members_id, true)
            break
      case 'setname': case 'setnamegc':
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
            mika.groupUpdateSubject(from, `${body.slice(9)}`)
            mika.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
            break
     case 'setppgrup': case 'setppgc':
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins && !isOwner) return reply(`Lu Admin? 🤨`)
            if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
            if (isQuotedImage) {
            let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            let media = await mika.downloadMediaMessage(encmedia)
            mika.updateProfilePicture(from, media)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
            } else if (isQuotedSticker){
            if (mek.message.videoMessage) return reply('Error Bro Wkwkwk')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            media = await mika.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.png')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply('Gagal, hehehe')
            buffer = fs.readFileSync(ran)
            mika.updateProfilePicture(from, buffer)
            fs.unlinkSync(ran)
            })
            } else {
            reply(`Kirim atau tag gambar/sticker dengan caption ${prefix}setppgrup ya sayang 💕`)
            }
            break
      case 'setdesc': case 'setdesk':
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isGroupAdmins) return reply(`Lu Admin? 🤨`)
            if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
            mika.groupUpdateDescription(from, `${body.slice(9)}`)
            mika.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
            break
      case 'linkgrup' : case 'linkgrub': case 'linkgc':
            if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
            if (!isBotGroupAdmins) return reply("Bot Bukan Admin 😔")
            linkgc = await mika.groupInviteCode(from)
            yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
            mika.sendMessage(from, yeh, text, { quoted: mek })
            break
      case 'revoke': case 'resetlinkgc': case 'resetlink':
            if (!isGroup) return reply('Khusus Grup Ngab 😏')
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply('Lu Admin? 🤨')           
            if (!isBotGroupAdmins) return reply(`Bot Bukan Admin 😔`)
            mika.query({ json: ['action', 'inviteReset', from], expect200: true })
            reply(`Sukses Reset Link Group!`)
            break

/// OWNER MENU
      case 'ownermenu':
            imgowner = fs.readFileSync('./media/ownermenu.jpg')
            but = [
            { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋‍♂️' }, type: 1 },
                 ]
            sendButLocation(from, sowner(prefix), fake, imgowner, but)
            break
     case 'join':
			if (!isOwner && !mek.key.fromMe) return reply("Khusus Owner Ngab 😏") 
			try {
		    ini_url = args[' ']
			if (args.length < 1) return reply(`LINK NYA MANA??`)	
			var codeInvite = ini_url.split('https://chat.whatsapp.com/')[1]
			if (!codeInvite) return reply('pastikan link sudah benar!')
			var response = await mika.acceptInvite(codeInvite)
			reply('SUKSES!!!, JGN LUPA SUBSCRIBE FBOTZ YT')
			} catch {
			reply('LINK ERROR!')
			}
      case 'bc': 
      case 'broadcast':
             if (!isOwner && !mek.key.fromMe) return  reply('LU BUKAN OWNER 😡')
             if (args.length < 1) return reply('teks?')
             anu100 = await mika.chats.all()
             if (isMedia && !mika.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mika).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mika
             bc100 = await mika.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             mika.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
             }
             fakestatus('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             mika.sendMessage(_.jid, 
			{"contentText": `*「 𝐏𝐄𝐒𝐀𝐍 𝐒𝐈𝐀𝐑𝐀𝐍 𝐁𝐎𝐓 」*\n\n${body.slice(4)}`,
			"footerText": `${ucapanWaktu}`,
			"buttons": [
			{"buttonId": `${prefix}donasi`,
			"buttonText": {"displayText": "DONASI 💰"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: tamnel,
			}}, MessageType.buttonsMessage )
            }
            fakestatus('Suksess broadcast')
            }
            break
      case 'setppbot':
            if (!isOwner && !mek.key.fromMe) return
            if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
            enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            media = await mika.downloadAndSaveMediaMessage(enmedia)
            await mika.updateProfilePicture(botNumber, media)
            reply(`Done Lord 😎`)
            break
      case 'setnamabot': case 'setnamebot':{
			if (!isOwner && !mek.key.fromMe) return reply(`Khusus Grup Ngab 😏`)
			if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Fbotz 🤙`)
			mika.updateProfileName(q)
			.then((res) => reply('Sukses Lord'))
			.catch((err) => reply('Eror Lord'))
			}
			break
	  case 'setbiobot':{
			if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Ngab 😏`)
			if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Fbotz 🤙`)
			mika.setStatus(q)
			.then((res) => reply('Sukses Lord'))
			.catch((err) => reply('Eror Lord'))
			}
			break

/// MAKER MENU
      case 'makermenu':
            imgmaker = fs.readFileSync('./media/makermenu.jpg')
            but = [
            { buttonId: `${prefix}tqto`, buttonText: { displayText: 'TQTO 🏆' }, type: 1 },
            { buttonId: `${prefix}ruls`, buttonText: { displayText: 'RULES 📚' }, type: 1 }
                 ]
            sendButLocation(from, smaker(prefix), fake, imgmaker, but)
            break
      case 'toimg': case 'toimage':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await mika.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Upp Sorry Failed to Convert To Sticker^_^')
			buffer = fs.readFileSync(ran)
			mika.sendMessage(from, buffer, image, {quoted: fkontak})
			fs.unlinkSync(ran)
			})
			break            
      case 'sticker': case 'stiker': case 'sg': case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await mika.downloadAndSaveMediaMessage(encmedia)
            ran = '666.webp'
            await ffmpeg(`./${media}`)
            .input(media)
            .on('start', function (cmd) {
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            reply('error')
            })
            .on('end', function () {
            mika.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await mika.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            mika.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else {
            reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
            }
            break
      case 'attp':
            if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
            buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
            mika.sendMessage(from, buffer, sticker, { quoted: mek })
            break
      
// CASE GAME MENU //
      case 'gamemenu': case 'game': case 'fun':
            listMsg = {
            buttonText: 'KLIK DISINI 👋',
            footerText: fake,
            description: `*Hai Kak @${sender.split('@')[0]}*\n*${ucapanWaktu}*\n\n*Berikut List Game Menu Yang Tersedia*\n\n${a}Note : Jika Ada Fitur Yang Error Harap Lapor Ke Owner Agar Segera Diperbaiki 🤗${a}`,
            sections: [
            {
            "title": `Silahkan Dipilih Kak ${pushname} 🤗`,
            rows: [
            {
              "title": "GAME MENU 1 🎰",
              "rowId": `${prefix}mainan1`
            },
            {
              "title": "GAME MENU 2 🎮",
              "rowId": `${prefix}mainan2`
            },
            {
              "title": "GAME MENU 3 🎰",
              "rowId": `${prefix}mainan3`
            },
            {
              "title": "GAME MENU 4 🎮",
              "rowId": `${prefix}mainan4`
            },
            {
              "title": "GAME MENU 5 🎰",
              "rowId": `${prefix}mainan5`
            }
            ]
            }],
            listType: 1
            }
            mika.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}})
            break
      case 'mainan1':
            imggame1 = fs.readFileSync('./media/gamemenu.jpg')
            but = [
            { buttonId: `${prefix}ruls`, buttonText: { displayText: 'RULES 📚' }, type: 1 },
                 ]
            sendButLocation(from, sgame1(prefix), fake, imggame1, but)
            break
            case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
            case 'bego': case 'pintar': case 'jago': case 'nolep': case 'monyet':                 	 
            case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
            case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
            case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl': case 'gatel': case 'gatal':
			if (!isGroup) return reply("ONLY GRUB") 	 
 		   jds = []
		    const A12 = groupMembers
  		  const B12 = groupMembers
 		   const C12 = A12[Math.floor(Math.random() * A12.length)]
	 	   D12 = `Hmm.. Seperti Biasa Yang *Ter${command}* Disini Pasti @${C12.jid.split('@')[0]}`                  
		    jds.push(C12.jid)
	  	  mentions(D12, jds, true)
	 	   break
      case 'mainan2':
            imggame2 = fs.readFileSync('./media/gamemenu.jpg')
            but = [
            { buttonId: `${prefix}ruls`, buttonText: { displayText: 'RULES 📚' }, type: 1 },
                 ]
            sendButLocation(from, sgame2(prefix), fake, imggame2, but)
            break
            case 'vganteng': case 'vcantik': case 'vjelek': case 'vgoblok':  
            case 'vbego': case 'vpintar': case 'vjago': case 'vnolep': case 'vmonyet':                 	 
            case 'vbabi': case 'vbeban': case 'vbaik': case 'vjahat': case 'vanjing': 
            case 'vharam': case 'vkontol': case 'vpakboy': case 'vpakgirl': 
            case 'vwibu': case 'vhebat': case 'vsadboy': case 'vsadgirl': case 'vgatel': case 'vgatal':
			if (!isGroup) return reply("ONLY GRUP")
 		   jds = []
		    const AS1 = groupMembers
 		   const CS1 = AS1[Math.floor(Math.random() * AS1.length)]	 	                      
 		   const vcardd = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${command1}\n` 
            + `ORG: NAK ${command1};\n`
            + `TEL;type=CELL;type=VOICE;waid=${CS1.jid.split('@')[0]}:+${CS1.jid.split('@')[0]}\n`
            + 'END:VCARD' 
            mika.sendMessage(from, {displayname: "Jeff", vcard: vcardd}, MessageType.contact, { quoted: nay1})
            reply(`Wkwk Dia Yang *Ter${command1}* Disini`)			
	 	   break
      case 'mainan3':
            imggame3 = fs.readFileSync('./media/gamemenu.jpg')
            but = [
            { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋‍♂️' }, type: 1 },
                 ]
            sendButLocation(from, sgame3(prefix), fake, imggame3, but)
            break
            case 'xkontol':	
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')				 	
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break
            case 'xganteng': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
			case 'xcantik': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
			case 'xjelek': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
			case 'xgoblok': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 				  
            case 'xbego': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
			case 'xpintar': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
			case 'xjago': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
			case 'xnolep': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
		    case 'xmonyet':		     
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 				                 	 
            case 'xbabi': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
			case 'xbeban': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
			case 'xbaik': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
			case 'xjahat': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
			case 'xanjing':  
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 				
            case 'xharam': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
			case 'xkontol': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
			case 'xpakboy': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
			case 'xpakgirl':  
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 				
            case 'xwibu': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
			case 'xhebat': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
			case 'xsadboy': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break 	
		    case 'xsadgirl': 
		    if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break
            case 'xgatel': case 'xgatal':
		    if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			mika.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Oyy... Gw ${command1} Tau 😆!*`} } } })   		
			break
      case 'mainan4':
            imggame4 = fs.readFileSync('./media/gamemenu.jpg')
            but = [
            { buttonId: `${prefix}ruls`, buttonText: { displayText: 'RULES 📚' }, type: 1 },
                 ]
            sendButLocation(from, sgame4(prefix), fake, imggame4, but)
            break
            case 'zganteng': case 'zcantik': case 'zjelek': case 'zgoblok':  
            case 'zbego': case 'zpintar': case 'zjago': case 'znolep': case 'zmonyet':                 	 
            case 'zbabi': case 'zbeban': case 'zbaik': case 'zjahat': case 'zanjing': 
            case 'zharam': case 'zkontol': case 'zpakboy': case 'zpakgirl': 
            case 'zwibu': case 'zhebat': case 'zsadboy': case 'zsadgirl': case 'zgatel': case 'zgatal':
            nyy = fs.readFileSync('./database/group/tag2.webp')
            if (!isGroup) return reply("ONLY GRUB") 	 
		    const AS11 = groupMembers		     
 		   const CS21 = AS11[Math.floor(Math.random() * AS11.length)]	 	    		     
			mika.sendMessage(from, nyy, sticker, {quoted: { key: { fromMe: false, participant: `${CS21.jid.split('@')[0]}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `Aku Adalah Yang Ter${command1} Disini:v` }}})
			break
     case 'mainan5':
            imggame5 = fs.readFileSync('./media/gamemenu.jpg')
            but = [
            { buttonId: `${prefix}ruls`, buttonText: { displayText: 'RULES 📚' }, type: 1 },
                 ]
            sendButLocation(from, sgame5(prefix), fake, imggame5, but)
            break
            case 'gantengcek':
            N = `KE *GANTENGAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'cantikcek':
            N = `KE *CANTIKAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}% :v*`
            reply(N)
            break
            case 'jelekcek':                 	
            N = `KE *J3L3K4N* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'goblokcek':
            N = `KE *GOBLOKAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'begocek':
            N = `KE *BEGO* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'pintercek': 
            case 'pintarcek':
            N = `KE *PINTARAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'jagocek': 
            N = `KE *JAGOAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'nolepcek': 
            N = `KE *NOLEPAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'babicek': 
            N = `KE *BABIAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'bebancek':
            N = `KE *BEBANAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'baikcek':
            N = `KE *BAIKAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'jahatcek': 
            N = `KE *JAHATAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'anjingcek': 
            N = `KE *ANJINGAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break              
            case 'haramcek':
            N = `KE *HARAMAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break  
            case 'kontolcek': 
            N = `KE *KOMTOLAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'pakboycek': 
            N = `KE *PAKBOYZ* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'pakgirlcek':	
            N = `KE *PAKGILR* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break             
            case 'sangecek':
            N = `JIWA *SANGE* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break
            case 'bapercek':
            N = `JIWA *BAPERAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break
            case 'gatelcek': case 'gatalcek':
            N = `KE *GATELAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break             

// CASE OTHER MENU //
       case 'othermenu':
            imgother = fs.readFileSync('./media/othermenu.jpeg')
            but = [
            { buttonId: `${prefix}ruls`, buttonText: { displayText: 'RULES 📚' }, type: 1 },
                 ]
            sendButLocation(from, sother(prefix), fake, imgother, but)
            break
      case 'infobot':
            timestamp = speed();
	        latensi = speed() - timestamp
            txtinfo =
            `┏━➤ *INFO BOT* 
*┃┃* Creator Bot : Fandyyy (FBOTZ YT)
*┃┃* Nama Owner : ${Miminnya}
*┃┃* Nama Bot : ${BotName}
*┃┃* Prefix : Multi Prefix
*┃┃* Runtime : ${runtime(process.uptime())}
*┃┃* Speed : ${latensi.toFixed(4)} second
*┃┃* Language : Javascript & Nodejs
*┗━━━━━━━ •*`
             imginfo = tamnel
             but = [
             { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 },
             { buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT 📖' }, type: 1 }
             ]
            sendButLocation(from, txtinfo, fake, imginfo, but)
            break
      case "speed":
      case "ping":
            timestamp = speed();
            latensi = speed() - timestamp;
            exec(`neofetch --stdout`, (error, stdout, stderr) => {
            child = stdout.toString("utf-8");
            ssd = child.replace(/Memory:/, "Ram:");
            pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
            reply(pingnya);
            });
            break
      case "runtime":
      case "test":
            run = process.uptime();
            txtrun = `${kyun(run)}`;
            but = [
            { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 },
            ]
            sendButton(from, txtrun, fake, but, mek)
            break
      case 'delete':
      case 'del':
      case 'd':
            if (!isQuotedReply) return reply(`Reply Pesan Yang Dikirim Oleh Bot!!`)
            mika.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
            break
      case 'owner': case 'own':
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard1 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${Miminnya}\n`
            + `ORG:Owner ${BotName} ;\n`
            + `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:${setting.ownerNumber}\n`
            + 'END:VCARD'.trim()
            mika.sendMessage(from, {displayName: `Owner ${BotName}`, vcard: vcard1}, contact, 
            { quoted: fkontak, 
            })
            fakestatus(`_Tuh Kak Kontak Ownerku_`)
            break
      case 'creator':
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard2 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:FANDYYY 👑\n`
            + `ORG:Creator ${BotName} ;\n`
            + `TEL;type=CELL;type=VOICE;waid=6285609233482:6285609233482\n`
            + 'END:VCARD'.trim()
            mika.sendMessage(from, {displayName: `Ownernya ${BotName}`, vcard: vcard2}, contact, 
            { quoted: fkontak, 
            })
            fakestatus(`_Tuh Kak Kontak Creatorku_`)
            break
      case 'sewa': case 'sewabot': case 'booking':
            footersewa = `Minat? Tekan Tombol Dibawah Ini 👇`
            imgsewa = fs.readFileSync('./media/sewa.jpeg')
            but = [
            { buttonId: `${prefix}ownersewa`, buttonText: { displayText: 'SEWA BANG 🙋🏽‍♂️' }, type: 1 }
                 ]
            sendButLocation(from, sewa(prefix), footersewa, imgsewa, but)
            break
      case 'ownersewa':
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard1 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${Miminnya}\n`
            + `ORG:Owner ${BotName} ;\n`
            + `TEL;type=CELL;type=VOICE;waid=${ownerNumber}:${ownerNumber}\n`
            + 'END:VCARD'.trim()
            mika.sendMessage(from, {displayName: `Owner ${BotName}`, vcard: vcard1}, contact, 
            { quoted: fkontak, 
            })
            fakestatus(`_Silahkan Chat Owner Untuk Sewa Bot 😉_`)
            break

// CASE SUMBER //
      case 'sc':
      case 'source':
            txtsc = `*Script Ini Berasal Dari Channel :*\n${a}bit.ly/Fbotz_YT${a}\n\n*Base Ori :*\n${a}https://bit.ly/FEBZABOTZ${a}\n\n*Baileys From :*\n${a}bit.ly/AdiwajshingBaileys${a}\n\n*Channel Para Author Yang Membantu Pembuatan Script Ini :*\n${a}bit.ly/HannSykes${a}\n${a}bit.ly/ZEEONEOFC${a}\n${a}https://bit.ly/Rimurubotz${a}`
            source = fs.readFileSync('./media/source.jpg')
            but = [
            { buttonId: `${prefix}menu`, buttonText: { displayText: 'HOME 🏘️' }, type: 1 },
            { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }
                 ]
            sendButLocation(from, txtsc, fake, source, but)
            break

/// CASE TERIMA KASIH
      case 'tqto':
      case 'big thanks to':
            txttq = `*BIG THANKS TO :*\n\n${a}❖ Allah SWT${a}\n${a}❖ Nabi Muhammad SAW${a}\n${a}❖ Adiwajshing Baileys${a}\n${a}❖ Febzabotz${a}\n${a}❖ Fbotz YT${a}\n${a}❖ HannSykes${a}\n${a}❖ Zeeone Ofc${a}\n${a}Rimurubotz${a}\n${a}❖ Usep${a}\n${a}❖ Penyedia Apikey${a}`
            tqto = fs.readFileSync('./media/tqto.jpg')
            but = [
            { buttonId: `${prefix}menu`, buttonText: { displayText: 'HOME 🏘️' }, type: 1 },
            { buttonId: `${prefix}ruls`, buttonText: { displayText: 'RULES 📔' }, type: 1 }
                 ]
            sendButLocation(from, txttq, fake, tqto, but)
            break

/// CASE PERATURAN
       case 'ruls':
       case 'rules':
            ruls = fs.readFileSync('./media/rules.jpg')
            but = [
            { buttonId: `${prefix}menu`, buttonText: { displayText: 'HOME 🏘️' }, type: 1 },
            { buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 🎁' }, type: 1 }
                 ]
            sendButLocation(from, rules(prefix, rules), fake, ruls, but)
            break

/// CASE DONASI
      case 'donasi':
            donsi = fs.readFileSync('./media/donasi.jpg')
            but = [
            { buttonId: `${prefix}menu`, buttonText: { displayText: 'HOME 🏘️' }, type: 1 }
                 ]
            sendButLocation(from, donasi(prefix, donasi), fake, donsi, but)
            break

/// JANGAN DI APUS TOD
default:
            if (budy.startsWith('>')){
            try {
	                if (!isOwner) return reply(`${a}Mau Ngapain Banh? Mau Eval Ya? Khusus Owner${a} *${BotName}*`)
                    return mika.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
                    } catch(err) {
                    e = String(err)
                    reply(e)
                    }
                    }  
           if (budy.startsWith('$')){
                    if (!isOwner) return reply(`${a}Mau Ngapain Banh? Mau Eval Ya? Khusus Owner${a} *${BotName}*`)
                    qur = budy.slice(2)
                    exec(qur, (err, stdout) => {
                    if (err) return reply(`Fbotz :~ ${err}`)
                    if (stdout) {
                    reply(stdout)
                    }
                    })
                    }
         if (budy.startsWith('=>')){
                    if (!isOwner) return reply(`${a}Mau Ngapain Banh? Mau Eval Ya? Khusus Owner${a} *${BotName}*`)
                    var konsol = budy.slice(3)
                    Return = (sul) => {
                    var sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                    if (sat == undefined){
                    bang = util.format(sul)
                    }
                    return reply(bang)
                    }
          try {
                    reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                    console.log('\x1b[1;31m~\x1b[1;37m>', '[', '\x1b[1;32m EXC \x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
                    } catch(e){
                    reply(String(e))
                    }
                }
		   }
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	}
}


	
    
