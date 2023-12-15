
let lastModified =  document.lastModified;

document.getElementById("lastModified").innerText = `Last modification: ${lastModified}`


let currentDate = new Date();

let year = currentDate.getFullYear();

let footer = document.querySelector("footer");

let firstP = document.getElementById("copyright");

firstP.innerHTML = `&copy; ${year} Scoots<br><b>Angel Orozco</b><br>WDD 230 Project`



//hamburguer button

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    
});




// Dark mode

const modeButton = document.querySelector(".slider");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const titles = document.querySelectorAll(".card h2");
const cards = document.querySelectorAll(".card");
const foot = document.querySelector("footer");
const nav = document.querySelector("nav");
const a = document.querySelectorAll("li a");
const hr = document.querySelectorAll("hr");
const currency = document.querySelectorAll(".currency");


modeButton.addEventListener("click", () => {

	const news = document.querySelectorAll(".news");
	const newsa = document.querySelectorAll(".news a");


	if (modeButton.style.backgroundColor === "") {
		body.style.background = "#000";
		body.style.color = "#fff";
		modeButton.style.backgroundColor = "#2196F3";
		header.style.backgroundColor = "#1d2d44";
		titles.forEach(element => {
			element.style.backgroundColor = '#1d2d44';
		});
		cards.forEach(element => {
			element.style.backgroundColor = '#1d2d44';
			element.style.borderColor = "white";
		});
		a.forEach(element => {
			element.style.color = 'white';
		});
		hr.forEach(element => {
			element.style.borderColor = 'white';
		});
		currency.forEach(element => {
			element.style.backgroundColor = '#0d1321ff';
		});
		news.forEach(element => {
			element.style.backgroundColor = '#1d2d44';
			element.style.borderColor = "white";
		});
		newsa.forEach(element => {
			element.style.color = "white";
		});
		foot.style.backgroundColor = "#0e273b";
		nav.style.backgroundColor = "#1d2d44";
		
		
	} else if (modeButton.style.backgroundColor != 'white'){
		
		body.style.background = "";
		body.style.color = "";
		modeButton.style.backgroundColor = "";
		header.style.backgroundColor = "";
		titles.forEach(element => {
			element.style.backgroundColor = '';
		});
		cards.forEach(element => {
			element.style.backgroundColor = '';
			element.style.borderColor = "";
		});
		a.forEach(element => {
			element.style.color = '';
		});
		hr.forEach(element => {
			element.style.borderColor = '';
		});
		currency.forEach(element => {
			element.style.backgroundColor = '';
		});
		news.forEach(element => {
			element.style.backgroundColor = '';
			element.style.borderColor = "";
		});
		newsa.forEach(element => {
			element.style.color = "";
		});
		foot.style.backgroundColor = "";
		nav.style.backgroundColor = "";
	}
});

