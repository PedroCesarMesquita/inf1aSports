let partidaSelecionada = 0;
let partidas = [
	{
		resultado: 'INF 1A 0x5 ELE 1B',
		campeonato: 'Copa Calouro',
		data: '28/06',
		gols: ['404 Not Found']
	},
	{
		resultado: 'INF 1A 5x4 MCT 1A',
		campeonato: 'Copa Calouro',
		data: '21/05',
		gols: ['Funeco 4', 'Chules 1']
	},
	{
		resultado: 'INF 1A 3x2 MEC 1A',
		campeonato: 'Amistoso',
		data: '04/05',
		gols: ['num sei']
	},
	{
		resultado: 'INF 1A 3x4 INF 2A',
		campeonato: 'Amistoso',
		data: '27/04',
		gols: ['num sei']
	},
	{
		resultado: 'INF 1A 0x8 ELE 1A',
		campeonato: 'Copa Calouro',
		data: '26/04',
		gols: ['404 Not Found']
	},
	{
		resultado: 'INF 1A 1x10 MEC 2B',
		campeonato: 'Amistoso',
		data: '02/04',
		gols: ['Funeco 1']
	},
	{
		resultado: 'INF 1A 4x4 MEC 1A',
		campeonato: 'Amistoso',
		data: '23/03',
		gols: ['404 Not Found']
	},
	{
		resultado: 'INF 1A 3x2 ELT 1A',
		campeonato: 'Amistoso',
		data: '22/03',
		gols: ['Funeco 3']
	},
	{
		resultado: 'INF 1A 6x5 EST/TT 1A',
		campeonato: 'Amistoso',
		data: '15/03',
		gols: ['Wagao 3', 'Alface 1', 'Ceara 1', 'Funeco 1']
	}
]

let h3El = document.querySelector('#jogo > h3');
let campeonatoEl = document.querySelector('#campeonato');
let dataEl = document.querySelector('#data');
let golsEl = document.querySelector('#gols');
let iconeSpan = '<span><img src="../imgs/trofeu.png"></span>';

let partidasEl = document.querySelectorAll('.partidas');

for(let i = 0; i < partidasEl.length; i++) {
	partidasEl[i].addEventListener('click', function() {

		partidasEl[partidaSelecionada].classList.remove('partida-selecionada');
		partidasEl[partidaSelecionada = i].classList.add('partida-selecionada');

		h3El.innerText = partidas[i].resultado;
		campeonatoEl.innerHTML = iconeSpan + partidas[i].campeonato;
		dataEl.innerText = partidas[i].data;

		golsEl.innerHTML = partidas[i].gols[0];
		for(let j = 1; j < partidas[i].gols.length; j++) {
			golsEl.innerHTML += '<br>' + partidas[i].gols[j];
		}
	});
}
