let visitsDisplay = document.querySelector(".visits");
let visitDate = document.querySelector(".visitDate");

const msToDays = 84600000;

const theDateToday = new Date();

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let lastVisit = Number(window.localStorage.getItem("lastVisit")) || Date.now();

localStorage.setItem("newVisit" , Date.now());

let newVisit = Number(window.localStorage.getItem("newVisit"))

///Processing dates

let current = newVisit / msToDays;
let last = lastVisit / msToDays;

let daysSince = Math.round(current - last);



if (numVisits === 0) {
	
	visitsDisplay.textContent = `Welcome! Let us know if you have any question.`;

} else {
	
	visitsDisplay.textContent = `This is your visit number: ${numVisits +1}`;
}


if (daysSince < 1 && daysSince >= 0) {
	
	visitDate.textContent = `Back so soon! Awesome!`;

} else if (daysSince === 1){

	visitDate.textContent = `You last visited: 1 day ago`;
	

}else{
	visitDate.textContent = `You last visited: ${daysSince} days ago`;
}



numVisits++;
localStorage.setItem("daysSince" , daysSince);
localStorage.setItem("lastVisit" , newVisit);
localStorage.setItem("numVisits-ls", numVisits);


document.querySelector(".month").innerHTML = `- ${currentDate.getMonth() + 1}/${year}`

