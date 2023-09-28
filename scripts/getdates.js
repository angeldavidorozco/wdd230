
let lastModified =  document.lastModified;

document.getElementById("lastModified").innerText = `Last modification: ${lastModified}`


let currentDate = new Date();

let year = currentDate.getFullYear();

let footer = document.querySelector("footer");

let firstP = footer.firstElementChild;

firstP.innerHTML = `&copy; ${year}<br>Angel Orozco<br>Argentina <img src="styles/images/argentina-flag-icon.svg" alt="flag">`


//hamburguer button

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const map = document.querySelector('#map');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    map.classList.toggle('open');
});