
////////////////////////////////////////////
//
//API FETCH
//
////////////////////////////////////////////

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-31.42&lon=-64.19&appid=796bb46e588464da545cdd3267149339&units=imperial"

const hUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=-31.42&lon=-64.19&appid=796bb46e588464da545cdd3267149339&units=imperial"

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

    let j = 4;
    
    for (let i = 0; i < 3; i++) {
        
        let infoWeather = document.createElement('p');

        const iconsrc = `https://openweathermap.org/img/w/${data.list[j].weather[0].icon}.png`
        let desc = data.list[j].weather[0].description;

        let day = convertMsToDate(data.list[j].dt_txt);

        
        infoWeather.innerHTML = `
        
        <p class="apiWeather"> 
        ${day}
        </p>
        <div class="apiWeather">       
        <img id="weather-icon" src="${iconsrc}" alt="${desc}">

        <span id="current-temp">${Math.round(data.list[j].main.temp)}&deg;F</span>
        </div> 
        <figcaption class="apiWeather">${desc}</figcaption>
        
        `
        forecast.appendChild(infoWeather);
        j += 8;
    }
	
}


let tData = document.getElementById("tData");
let wsData = document.getElementById("wsData");


function displayResults(data){
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description;
	currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F - ${desc}`;

    tData.innerHTML = Math.round(data.main.temp);
    wsData.innerHTML = data.wind.speed;

    weatherIcon.setAttribute('alt', desc );
    weatherIcon.setAttribute('src', iconsrc );
	
    calcWC();
}

function convertMsToDate(ms) {
    var date = new Date(ms);
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0'); 
    var year = date.getFullYear();

    return month + '-' + day + '-' + year;
}



function calcWC(){
    tData = Number(tData.innerHTML);
    wsData = Number(wsData.innerHTML);
    if(tData<=50 && wsData>3.0){

        let wcData = 35.74 + (0.6215 * tData) - (35.75 * Math.pow(wsData, 0.16)) + (0.4275 * tData * Math.pow(wsData, 0.16));

        document.getElementById("wcData").innerHTML = wcData.toFixed(2);

    }
    else{
        let wcData = "NaN"
        document.getElementById("wcData").innerHTML = wcData;
    }
}



/*BANNER*/

var banner = document.getElementById('banner');
var closeBtn = document.getElementById('close');

var date = new Date();
var day = date.getDay();

if (day === 1 || day === 2 || day === 3) { //Changes the days when it appears
    banner.style.display = 'block';
}

closeBtn.onclick = function() {
    banner.style.display = 'none';
}