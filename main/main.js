let noticiasEl = document.querySelector('#noticias');
let tituloEl   = document.querySelector('#titulo');

let indice = 0, tempo = 0, contarTempo = true;

let noticias = [
	{ titulo: 'Reta Final!', imagem: '../imgs/camisas_fundo.png' },
	{ titulo: 'Cavalo foda', imagem: '../imgs/cavalo.jpg' },
	{ titulo: 'Nyan Cat u.u', imagem: '../imgs/nyancat.jpg' }
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
		indice = (indice ? indice - 1 : noticias.length + 1);

	tituloEl.innerText = noticias[indice].titulo;
	noticiasEl.style.backgroundImage = 'url("' + noticias[indice].imagem + '")';
}

noticiasEl.addEventListener("mouseover", function() { contarTempo = false; });
noticiasEl.addEventListener("mouseout",  function() { contarTempo = true;  });

let setasEl = document.querySelectorAll('.setas');

for(let i = 0; i < setasEl.length; i++) {
	setasEl[i].addEventListener('click', function() { mudaImagem(i); });
}
