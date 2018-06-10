let partidasEl = document.querySelectorAll('.partidas');
let campsEl = document.querySelectorAll('.camps');
let datasEl = document.querySelectorAll('.datas');

for(let i = 0; i < partidasEl.length; i++) {

	let gp = JSON.parse(partidasEl[i].innerText.charAt(7));
	let gc = JSON.parse(partidasEl[i].innerText.substr(9, 2));

	if(gp > gc) partidasEl[i].style.backgroundColor = 'rgb(25, 193, 0)';
	else if(gp < gc) partidasEl[i].style.backgroundColor = 'rgb(255, 48, 48)';
	else partidasEl[i].style.backgroundColor = 'rgb(147, 147, 147)';

	partidasEl[i].addEventListener('mouseover', function() {
		campsEl[i].innerHTML = '<br>' + partidasEl[i].dataset.camp;
		datasEl[i].innerHTML = '<br>' + partidasEl[i].dataset.data;
	});

	partidasEl[i].addEventListener('mouseout', function() {
		campsEl[i].innerHTML = '';
		datasEl[i].innerHTML = '';
	});
}
