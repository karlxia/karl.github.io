var myImage =document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool,' + storedName;
}
myButton.onclick = function(){
	setUserName();
}
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/beauty.jpeg'){
		myImage.setAttribute('src', 'images/chi.jpg');
	}else{
		myImage.setAttribute('src', 'images/beauty.jpeg');
	}
}
document.querySelector('html').onclick = function(){
//	alert('Ouch! Stop poking me!');
}
