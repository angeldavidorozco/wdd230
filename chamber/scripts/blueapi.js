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