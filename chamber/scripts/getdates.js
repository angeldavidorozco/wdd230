
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
const map = document.querySelector('#map');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    map.classList.toggle('open');
});