const alphabet = require('emoji-alphabet').alphabet

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function convert(text){
	return text.split('').map((x) => {
        let emoji = alphabet[x.toUpperCase()]
        return emoji === undefined ? '  ' : emoji instanceof Array ? getRandom(emoji) : emoji
    }).join('')
}

module.exports.convert = convert