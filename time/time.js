let jogadorSelecionado = 2;
let jogadores = [
	{
		nome: 'JONATA',
		num: '1',
		posicao: 'goleiro',
		gols: 0
	},
	{
		nome: 'CEARA',
		num: '5',
		posicao: 'fixo',
		gols: 'alguns'
	},
	{
		nome: 'ALFACE',
		num: '9',
		posicao: 'ala',
		gols: 1
	},
	{
		nome: 'FUNECO',
		num: '10',
		posicao: 'atacante',
		gols: 'muitos'
	},
	{
		nome: 'WAGAO',
		num: '69',
		posicao: 'ala',
		gols: 'bastantes'
	}
];

let h3El = document.querySelector('h3');
let fotoEl = document.querySelector('#foto-jogador');
let posicaoEl = document.querySelector('#posicao > span');
let golsEl = document.querySelector('#gols > span');

let jogadoresEl = document.querySelectorAll('.jogadores');

for(let i = 0; i < jogadoresEl.length; i++) {
	jogadoresEl[i].addEventListener('click', function() {

		jogadoresEl[jogadorSelecionado].classList.remove('jogador-selecionado');
		jogadoresEl[jogadorSelecionado = i].classList.add('jogador-selecionado');

		h3El.innerHTML = jogadores[i].nome + ' <span>' + jogadores[i].num + '</span>';
		fotoEl.src = '../imgs/' + jogadores[i].nome.toLowerCase() + '.jpg';
		posicaoEl.innerText = jogadores[i].posicao;
		golsEl.innerText = jogadores[i].gols;
	});
}
