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




const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#rpassword");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.display = "block";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.setCustomValidity("Invalid field.");
		
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
        kp2.setCustomValidity("");
	}
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}


const form = document.querySelector('form');
const submitBtn = document.querySelector('.submitBtn');

  form.addEventListener('keyup', (event) => {
    if (form.checkValidity()) {
      
      submitBtn.style.backgroundColor = "var(--valid-color)"
    }
    else
    {
      submitBtn.style.backgroundColor = "var(--invalid-color)"
    }
  });