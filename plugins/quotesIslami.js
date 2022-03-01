handler = (m, {conn}) => {
    conn.fetchJson(global.API(`lol`, `/api/quotes/islami`, {}, 'apikey'))
        .then((ap) => {
            conn.sendButton(m.chat, ap.result, wm, '', [{buttonId: '.quotesislami', buttonText: {displayText: 'NEXT'}, type: 1}], m)
        })
}

handler.tags = ['quotes']
handler.command = ['quotesislami']
handler.help = ['quotesislami']

module.exports = handler