//EDIT SESUKA KALIAN 😉

// UCAPAN WELCOME
const welkam = (mem, mdata) => {
	return `*Welcome @${mem.split('@')[0]} Di ${mdata.subject}*

_Semoga Kamu Betah Dan Senang Berada Disini_
_Serta Jangan Lupa Untuk Baca Dan Patuhi Rules Yang Ada_`
}

exports.welkam = welkam

// UCAPAN GOODBYE
const goodbye = (mem, mdata) => {
	return `Sayonaraaa @${mem.split('@')[0]} 👋`
}

exports.goodbye = goodbye