let noticiasEl=document.querySelector('#noticias');
let indice = 0,tempo=0, contarTempo = true;
let tituloEl = document.querySelector("#titulo");
let imagens = [
	"../imgs/camisas_fundo.png",
	"../imgs/cavalo.jpg",
	"../imgs/nyancat.jpg"
];
let titulos = [
	"Reta Final!",
	"Cavalo Foda",
	"Nyan Cat Foda"
];
setInterval(function(){
	if(tempo == 5) {
		mudaImagem(1);
		tempo = 0;
	}
	else if(contarTempo) tempo++;
	else tempo = 0;
},1000);

function mudaImagem (sentido){
	if(sentido)
		indice = (indice == imagens.length  - 1 ? 0 : indice + 1);
	else
		indice = (indice ? indice - 1 : imagens.length + 1);
	noticiasEl.style.backgroundImage = 'url("' + imagens[indice] + '")';
}
noticiasEl.addEventListener("mouseover",function() {
	contarTempo = false;
});
noticiasEl.addEventListener("mouseout",function() {
	contarTempo = true;
});
