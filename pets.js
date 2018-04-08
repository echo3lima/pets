let info = document.querySelector(".big-container");

window.addEventListener("load", ajax);

function ajax() {
    let xhr = new XMLHttpRequest();
 	xhr.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
 	xhr.onload = function(){
 		let data = JSON.parse(xhr.responseText);

 		
 		renderHTML(xhr);
 	};
 	xhr.send(); 
};

function renderHTML(x){
	const content = "<div class='img-container' style='background-image: url('https://www.hd-wallpapersdownload.com/script/bulk-upload/hd-funny-pics-of-cat.jpg')'>"+"<div id='info-content'>"+"<h1>"+"heading"+"</h1><br><p>"+"test"+"</p>"+"</div>"+"</div>";
	console.log(info);
	info.insertAdjacentHTML('beforeend', content);
};



 //      <div class="img-container" style="background-image: url('http://kotopes.ru/images/article/82/150%20Mops%202.jpg')">
 //        <p></p>
 //      </div>
 //      <div class="img-container" style="background-image: url('https://cdn.designsmaz.com/wp-content/uploads/2016/03/Cat-with-Sunglasses-Background.jpg')">
 //        <p></p>
 //      </div>




// function mouseOver() {
// 	let xhr = new XMLHttpRequest();
// 	xhr.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
// 	xhr.onload = function(){
// 		let data = JSON.parse(xhr.responseText);
// 		console.log(data[0]);
// 		renderHTML(xhr);
// 	};
// 	xhr.send();
// };	




