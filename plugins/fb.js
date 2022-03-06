let xfar = require('xfarr-api')

let fetch = require('node-fetch')

let handler = async (m, { conn, command, text }) => {

    if (!text) throw 'LINK'

  let res = await xa.Facebook(text)

m.reply('*WAIT 😎...*')

conn.sendFile(m.chat,res.medias[2].url, '', `FB Downloader

720p`, m)

}

handler.help = ['fb <url>']

handler.tags = ['internet']

handler.command = /^fb$/i

module.exports = handler
