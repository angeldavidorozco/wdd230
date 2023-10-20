document.getElementById("tData").addEventListener("input", calculateWindChill);
document.getElementById("wsData").addEventListener("input", calculateWindChill);

function calculateWindChill() {
    let tData = document.getElementById("tData").value;
    let wsData = document.getElementById("wsData").value;

    if(tData<=50 && wsData>3.0){

        let wcData = 35.74 + (0.6215 * tData) - (35.75 * Math.pow(wsData, 0.16)) + (0.4275 * tData * Math.pow(wsData, 0.16));

        document.getElementById("wcData").innerHTML = wcData.toFixed(2);

    }
    else{
        let wcData = "NaN"
        document.getElementById("wcData").innerHTML = wcData;
    }

    
}