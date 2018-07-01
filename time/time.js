let jogadorSelecionado = 3;
let jogadores = [
	{
		nome: 'JONATA',
		num: '1',
		gols: -23,
		chute: 20,
		dibre: 30,
		rataria: 99
	},
	{
		nome: 'CEARA',
		num: '5',
		gols: 'alguns',
		chute: 70,
		dibre: 60,
		rataria: 50
	},
	{
		nome: 'PEDRO',
		num: '7',
		gols: 'x',
		chute: 50,
		dibre: 65,
		rataria: 70
	},
	{
		nome: 'ALFACE',
		num: '9',
		gols: 1,
		chute: 70,
		dibre: 99,
		rataria: 99
	},
	{
		nome: 'FUNECO',
		num: '10',
		gols: 'muitos',
		chute: 99,
		dibre: 99,
		rataria: 90
	},
	{
		nome: 'GABINO',
		num: '11',
		gols: 'x',
		chute: 70,
		dibre: 70,
		rataria: 70
	},
	{
		nome: 'SOCO',
		num: '13',
		gols: 1,
		chute: 0,
		dibre: 0,
		rataria: 0
	},
	{
		nome: 'WAGAO',
		num: '69',
		gols: 'bastantes',
		chute: 80,
		dibre: 70,
		rataria: 80
	},
	{
		nome: 'CHULES',
		num: '92',
		gols: 2,
		chute: 80,
		dibre: 75,
		rataria: 80
	}
];

let h3El = document.querySelector('h3');
let fotoEl = document.querySelector('#foto-jogador');
let golsEl = document.querySelector('#gols');
let chuteEl = document.querySelector('#chute > span');
let dibreEl = document.querySelector('#dibre > span');
let ratariaEl = document.querySelector('#rataria > span');
let overallEl = document.querySelector('#overall');

let jogadoresEl = document.querySelectorAll('.jogadores');

for(let i = 0; i < jogadoresEl.length; i++) {
	jogadoresEl[i].addEventListener('click', function() {

		jogadoresEl[jogadorSelecionado].classList.remove('jogador-selecionado');
		jogadoresEl[jogadorSelecionado = i].classList.add('jogador-selecionado');

		h3El.innerHTML = jogadores[i].nome + ' <span>' + jogadores[i].num + '</span>';
		fotoEl.src = '../imgs/' + jogadores[i].nome.toLowerCase() + '.jpg';
		golsEl.innerText = jogadores[i].gols + (jogadores[i].gols == 1 ? ' gol' : ' gols');
		chuteEl.innerText = jogadores[i].chute;
		dibreEl.innerText = jogadores[i].dibre;
		ratariaEl.innerText = jogadores[i].rataria;
		overallEl.innerText = parseInt((jogadores[i].chute + jogadores[i].dibre + jogadores[i].rataria) / 3);
	});
}
