
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




//timestamp

const timestamp = new Date();
document.getElementById('timestamp').value = timestamp;

function validateForm() {
	var amount = document.getElementById('amount');
	var type = document.getElementById('hours');
	var number = amount.value;


	if (number<3 & type.checked ) {
		
		return false; // Prevent form submission
	}

	return true; // Allow form submission
}