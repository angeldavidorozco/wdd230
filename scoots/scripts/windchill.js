
////////////////////////////////////////////
//
//API FETCH
//
////////////////////////////////////////////

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.44&lon=-86.89&appid=796bb46e588464da545cdd3267149339&units=imperial"

const hUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.44&lon=-86.89&appid=796bb46e588464da545cdd3267149339&units=imperial"

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok){

        const data = await response.json();

        console.log(data);
       
        displayResults(data);
    }
    } catch(error){
        console.log(error);
    }
}

async function apiFetchHourly() {
    try{
        const response = await fetch(hUrl);
        if (response.ok){

        const data = await response.json();

        console.log(data);
       
        displayResultsH(data);
    }
    } catch(error){
        console.log(error);
    }
}

apiFetchHourly();

apiFetch();

let forecast = document.getElementById('forecast');

function displayResultsH(data){


        let infoWeather = document.createElement('p');

        const iconsrc = `https://openweathermap.org/img/w/${data.list[5].weather[0].icon}.png`
        let desc = data.list[5].weather[0].description;

        let day = convertMsToDate(data.list[5].dt_txt);

        
        infoWeather.innerHTML = `
        
        <p class="apiWeather"> 
        ${day} 3:00 PM
        </p>
        <div class="apiWeather">       
        <img id="weather-icon" src="${iconsrc}" alt="${desc}">

        <span id="current-temp">${Math.round(data.list[5].main.temp)}&deg;F</span>
        </div> 
        <figcaption class="apiWeather">${desc}</figcaption>
        
        `
        forecast.appendChild(infoWeather);

	
}


let tData = document.getElementById("hData");
let wsData = document.getElementById("wsData");


var banner = document.getElementById('banner');



function displayResults(data){
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let high = data.main.temp_max
    let desc = data.weather[0].description;
	currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F - ${desc}`;

    hData.innerHTML = Math.round(data.main.humidity);

    banner.innerHTML = `
    <span id="close">❌</span>
    <p>Highest Temp of the day:  ${high} &deg;F</p>
    `

    
    var closeBtn = document.getElementById('close');
    closeBtn.onclick = function() {
        banner.style.display = 'none';
    }
    

    weatherIcon.setAttribute('alt', desc );
    weatherIcon.setAttribute('src', iconsrc );
	
}

function convertMsToDate(ms) {
    var date = new Date(ms);
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0'); 
    var year = date.getFullYear();

    return month + '-' + day + '-' + year;
}






/*BANNER*/


var date = new Date();
var day = date.getDay();

if (day) { //Changes the days when it appears
    banner.style.display = 'block';
    
}
