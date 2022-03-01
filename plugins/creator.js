const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = "BEGIN:VCARD\nVERSION:3.0\nN:1;ZaBot-MD;;;\nFN:ZaBot-MD\nitem1.TEL;waid=6281227144597:+62 812-2714-4597\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:ZaBot-MD\nEND:VCARD"
                conn.sendMessage(m.chat, { contacts: { contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler