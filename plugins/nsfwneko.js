// xie hua piao piao batman membuka kulkas dan mngambil semangka lalu memberikan mayo di atas semangka

let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Tobat Kak', m)
}
handler.help = ['nsfwneko']
handler.tags = ['dewasa']
handler.command = /^nsfwneko$/i

handler.private = true

module.exports = handler
