let frases = [
	'Vamos inf1a, com tudo!',
	'O time infalível',
	'Infutebol',
	'Apenas piadas inforçadas',
	'Só os ratinf',
	'Derrotas desinfreadas'
]

let pEl = document.querySelector('header > p');

pEl.innerText = frases[Math.floor(Math.random() * frases.length)];

