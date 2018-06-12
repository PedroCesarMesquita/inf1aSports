
let textoLideEl=document.querySelector('#camisasLide');
let camisasEl = document.querySelector('#camisas');
camisasEl.addEventListener("mouseover",function(){
	textoLideEl.innerHTML = '<p>Responsáveis pela produção dos unifomes afirma que já está na reta final: "Está na reta final".</p>';
} ); 
camisasEl.addEventListener("mouseout",function(){
	textoLideEl.innerHTML = '<p>RETA FINAL!</p>';
} ); 