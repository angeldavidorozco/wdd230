
let lastModified =  document.lastModified;

document.getElementById("lastModified").innerText = `Last modification: ${lastModified}`


let currentDate = new Date();

let year = currentDate.getFullYear();

let footer = document.querySelector("footer");

let firstP = document.getElementById("copyright");

firstP.innerHTML = `&copy; ${year} Cordoba's Chamber<br><b>Angel Orozco</b><br>WDD 230 Project`

document.querySelector(".month").innerHTML = `- ${currentDate.getMonth() + 1}/${year}`

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
		foot.style.backgroundColor = "#1d2d44";
		nav.style.backgroundColor = "#1d2d44";
		
	}
});

//Api request

let oficial = document.querySelector(".oficial");
let blue = document.querySelector(".blue");
let oficiale = document.querySelector(".oficiale");
let bluee = document.querySelector(".bluee");

fetch('https://api.bluelytics.com.ar/v2/latest', {
  method: 'GET' // or 'POST'
})

.then(response => response.json())
.then(data => {
	oficiale.innerHTML = data.oficial_euro.value_avg;
	bluee.innerHTML =  data.blue_euro.value_avg;
	oficial.innerHTML = data.oficial.value_avg;
	blue.innerHTML =  data.blue.value_avg;
	})

.catch((error) => {

  console.error('Error:', error);

});