let noticiasEl = document.querySelector('main');
let tituloEl   = document.querySelector('#titulo');
let linkEl = document.querySelector('#link');

let indice = 0, tempo = 0, contarTempo = true;

let noticias = [
	{
	titulo: 'Reta Final!',
	imagem: '../imgs/camisas_fundo.png',
	endereço: '../noticia-final/index.html'
	},
	{
	titulo: 'Convocados por INF2',
	imagem: '../imgs/inf2.jpg',
	endereço: '../noticia-inf2/index.html'
	},
	{
	titulo: 'Fora da copa!',
	imagem: '../imgs/sadboys.png',
	endereço: '../noticia-foradacopa/index.html'
	},
	{
	titulo: 'Resenha CEFET-MG',
	imagem: '../imgs/campo.png',
	endereço: '../noticia-video/index.html'}
];

setInterval(function() {
	if(tempo == 5) {
		mudaImagem(1);
		tempo = 0;
	}
	else if(contarTempo) tempo++;
	else tempo = 0;
}, 1000);

function mudaImagem(sentido) {
	if(sentido)
		indice = (indice == noticias.length  - 1 ? 0 : indice + 1);
	else
		indice = (indice ? indice - 1 : noticias.length - 1);

	tituloEl.innerHTML = '<a href="'+noticias[indice].endereço+'" id="link">'+noticias[indice].titulo;
	noticiasEl.style.backgroundImage = 'url("' + noticias[indice].imagem + '")';
}

noticiasEl.addEventListener("mouseover", function() { contarTempo = false; });
noticiasEl.addEventListener("mouseout",  function() { contarTempo = true;  });

let setasEl = document.querySelectorAll('.setas');

for(let i = 0; i < setasEl.length; i++) {
	setasEl[i].addEventListener('click', function() { mudaImagem(i); });
}