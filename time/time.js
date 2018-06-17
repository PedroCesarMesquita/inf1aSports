let jogadorSelecionado = 2;
let jogadores = [
	{
		nome: 'JONATA',
		num: '1',
		gols: 0
	},
	{
		nome: 'CEARA',
		num: '5',
		gols: 'alguns'
	},
	{
		nome: 'ALFACE',
		num: '9',
		gols: 1
	},
	{
		nome: 'FUNECO',
		num: '10',
		gols: 'muitos'
	},
	{
		nome: 'SOCO',
		num: '13',
		gols: 1
	},
	{
		nome: 'WAGAO',
		num: '69',
		gols: 'bastantes'
	},
	{
		nome: 'CHULES',
		num: '92',
		gols: 2
	}
];

let h3El = document.querySelector('h3');
let fotoEl = document.querySelector('#foto-jogador');
let golsEl = document.querySelector('#gols');

let jogadoresEl = document.querySelectorAll('.jogadores');

for(let i = 0; i < jogadoresEl.length; i++) {
	jogadoresEl[i].addEventListener('click', function() {

		jogadoresEl[jogadorSelecionado].classList.remove('jogador-selecionado');
		jogadoresEl[jogadorSelecionado = i].classList.add('jogador-selecionado');

		h3El.innerHTML = jogadores[i].nome + ' <span>' + jogadores[i].num + '</span>';
		fotoEl.src = '../imgs/' + jogadores[i].nome.toLowerCase() + '.jpg';
		golsEl.innerText = jogadores[i].gols + (jogadores[i].gols == 1 ? ' gol' : ' gols');
	});
}
