//By Johannes
//Jangan bully saya bang
//Saya Masih pemula ðŸ—¿

let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.lolhuman.xyz/api/random/nsfw/hololewd?apikey=genbotkey`
  conn.sendFile(m.chat, res, 'lewdholo.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['lewdholo'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(lewdholo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

