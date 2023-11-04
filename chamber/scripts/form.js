
let lastModified =  document.lastModified;

document.getElementById("lastModified").innerText = `Last modification: ${lastModified}`


let currentDate = new Date();

let year = currentDate.getFullYear();

let footer = document.querySelector("footer");

let firstP = document.getElementById("copyright");

firstP.innerHTML = `&copy; ${year} Cordoba's Chamber<br><b>Angel Orozco</b><br>WDD 230 Project`



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
const form = document.querySelectorAll(".top input");
const formsbs = document.querySelectorAll(".sbs");
const forml = document.querySelectorAll("form legend");
const label = document.querySelectorAll(".top");
const tableborder = document.querySelectorAll("table td, table");

modeButton.addEventListener("click", () => {
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
        form.forEach(element => {
			element.style.color = '#fff';
		});
        label.forEach(element => {
			element.style.color = '#fff';
		});
        formsbs.forEach(element => {
			element.style.color = '#fff';
		});
        forml.forEach(element => {
			element.style.color = '#fff';
		});
		tableborder.forEach(element => {
			element.style.border = '1px solid #fff';
		});
		foot.style.backgroundColor = "#0e273b";
		nav.style.backgroundColor = "#1d2d44";
		
		
	} else if (modeButton.style.backgroundColor != 'white'){
		body.style.background = "#f0ebd8";
		body.style.color = "#000";
		modeButton.style.backgroundColor = "";
		header.style.backgroundColor = "#1d2d44";
		titles.forEach(element => {
			element.style.backgroundColor = '#748cab';
		});
		cards.forEach(element => {
			element.style.backgroundColor = '#748cab';
		});
		a.forEach(element => {
			element.style.color = '#1d2d44';
		});
		hr.forEach(element => {
			element.style.borderColor = '#0d1321';
		});
		currency.forEach(element => {
			element.style.backgroundColor = '#ccc';
		});
        form.forEach(element => {
			element.style.color = '#555';
		});
        formsbs.forEach(element => {
			element.style.color = '#555';
		});
        forml.forEach(element => {
			element.style.color = 'var(--rich-black)';
		});
        label.forEach(element => {
			element.style.color = '#9c2c13';
		});
		tableborder.forEach(element => {
			element.style.border = '1px solid #000';
		});
		foot.style.backgroundColor = "#1d2d44";
		nav.style.backgroundColor = "#1d2d44";
		
	}
});

