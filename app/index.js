const TelegramBot = require('node-telegram-bot-api')
const converter = require('./converter')

const token = process.env.RANSOM_EMOJI_TOKEN
const options = process.env.DEV ? {polling: true} : { webHook: { port : config.PORT, host : config.HOST }}
const bot = new TelegramBot(token, options)

if(options.webhook) bot.setWebHook(config.RANSOM_BOT_URI + ':443/bot' + token)

bot.on("inline_query", (query) => {
    let ransomEmoji = converter.convert(query.query) || ''
    bot.answerInlineQuery(query.id, [
        {
            type: "article",
            id: "testarticle",
            title: query.query,
            description: ransomEmoji,
            input_message_content: {
                message_text: ransomEmoji
            }
        }
    ])
});