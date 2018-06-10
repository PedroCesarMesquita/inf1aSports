const partidas = [
	{ // partidas[0]
		adversario: 'MEC 1A',
		golsPro: 4,
		golsContra: 3
	},
	{ // partidas[1]
		adversario: 'INF 2A',
		golsPro: 3,
		golsContra: 4	
	},
	{ // partidas[2]
		adversario: 'MEC 1A',
		golsPro: 4,
		golsContra: 4
	},
	{ // partidas[3]
		adversario: 'EST/TT 1A',
		golsPro: 6,
		golsContra: 5
	}
]

let mainEl = document.querySelector('main');

for(let partida of partidas) {
	let partidaEl = document.createElement('p');
	partidaEl.classList.add('partidas');

	if(partida.golsPro > partida.golsContra)
		partidaEl.style.backgroundColor = '#19c100';

	else if(partida.golsPro < partida.golsContra)
		partidaEl.style.backgroundColor = '#ff3030';

	else
		partidaEl.style.backgroundColor = '#939393';
	
	partidaEl.innerHTML = 'INF 1A ' + partida.golsPro + 'x' + partida.golsContra + ' ' + partida.adversario;
	mainEl.appendChild(partidaEl);
}

