const alphabet = require('emoji-alphabet').alphabet

function convert(text){
	return text.split('').map((x) => {
        let emoji = alphabet[x.toUpperCase()]
        return emoji === undefined ? '➖' : emoji instanceof Array ? emoji[0] : emoji
    }).join('')
}

module.exports.convert = convert