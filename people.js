let overlay = document.querySelector('.img-container');
let info = document.querySelector('.info');

overlay.addEventListener("mouseover", mouseOver);
overlay.addEventListener("mouseout", mouseOut);

function mouseOver() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
	xhr.onload = function(){
		let data = JSON.parse(xhr.responseText);
		renderHTML(xhr);
	};
	xhr.send();
};	

function mouseOut() {

}

function renderHTML(x){
	const content = "<h1>"+ "heading"+"</h1><br><p>"+"test"+"</p>";
	info.insertAdjacentHTML('beforeend', content);
};