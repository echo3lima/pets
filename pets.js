let info = document.querySelector(".big-container");

window.addEventListener("load", ajax);

function ajax() {
    let xhr = new XMLHttpRequest();
 	xhr.open('GET', 'https://raw.githubusercontent.com/echo3lima/pets/master/pets.json');
 	xhr.onload = function(){
 		let data = JSON.parse(xhr.responseText);
 		console.log(data[0]);
 		
 		renderHTML(data);
 	};
 	xhr.send(); 
};

function renderHTML(x){
	let content = ""
	for (i=0; i < x.length; i++) {
		content += "<div class='img-container' style='background-image: url(" + x[i].bg +")'>"
		 + "<div id='info-content'>" + "<h1 id='info-heading'>" + x[i].name + "</h1><br><p>"
		 + "Likes: " + x[i].foods.likes[0] + ", " + x[i].foods.likes[1] + "</p>" + "</div>" + "</div>";
	}
	info.insertAdjacentHTML('beforeend', content);
};