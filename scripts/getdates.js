
let lastModified =  document.lastModified;

document.getElementById("lastModified").innerText = `Last modification: ${lastModified}`


let currentDate = new Date();

let year = currentDate.getFullYear();

let footer = document.querySelector("footer");

let firstP = footer.firstElementChild;

firstP.innerHTML = `&copy; ${year}<br>Angel Orozco<br>Argentina <img src="styles/images/argentina-flag-icon.svg" alt="flag" width="16" height="10">`


//hamburguer button

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const map = document.querySelector('#map');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    map.classList.toggle('open');
});



// Dark mode

const modeButton = document.querySelector(".slider");
const body = document.querySelector("body");
const header = document.querySelector("header");
const titles = document.querySelectorAll(".card h3");
const cards = document.querySelectorAll(".card");
const foot = document.querySelector("footer");
const nav = document.querySelector("nav");
const a = document.querySelectorAll("li a");

modeButton.addEventListener("click", () => {
	if (modeButton.style.backgroundColor === "") {
		body.style.background = "#000";
		body.style.color = "#fff";
		modeButton.style.backgroundColor = "#2196F3";
		header.style.backgroundColor = "#0e273b";
		titles.forEach(element => {
			element.style.backgroundColor = '#0e273b';
		});
		cards.forEach(element => {
			element.style.backgroundColor = '#3f3f3f';
		});
		a.forEach(element => {
			element.style.color = 'white';
		});
		foot.style.backgroundColor = "#0e273b";
		nav.style.backgroundColor = "#3f3f3f";
		
	} else if (modeButton.style.backgroundColor != 'white'){
		body.style.background = "#fff";
		body.style.color = "#000";
		modeButton.style.backgroundColor = "";
		header.style.backgroundColor = "#1d4d72";
		titles.forEach(element => {
			element.style.backgroundColor = '#1d4d72';
		});
		cards.forEach(element => {
			element.style.backgroundColor = 'white';
		});
		a.forEach(element => {
			element.style.color = 'black';
		});
		foot.style.backgroundColor = "#1d4d72";
		nav.style.backgroundColor = "black";
		
	}
});


const visitsDisplay = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}


numVisits++;


localStorage.setItem("numVisits-ls", numVisits);



////////////////////////////////////////////
//
//API FETCH
//
////////////////////////////////////////////

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-31.42&lon=-64.19&appid=796bb46e588464da545cdd3267149339&units=imperial"


async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok){

        const data = await response.json();
       
        displayResults(data)
    }
    } catch(error){
        console.log(error);
    }
}

apiFetch();


function displayResults(data){
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description;
	currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F - ${desc}`;

    weatherIcon.setAttribute('alt', desc );
    weatherIcon.setAttribute('src', iconsrc );
	
    calcWC();
}

