const baseURL = "https://angeldavidorozco.github.io/wdd230/";
const linksURL = "data/rent.json";

const main = document.querySelector('#products');

async function fetchRent() {
    try{
        const response = await fetch(linksURL);
        if (response.ok){

        const data = await response.json();

        console.log(data);
       
        createCard(data);
    }
    } catch(error){
        console.log(error);
    }
}

fetchRent();
  
  function createCard(data) {


    

    for (var i = 0; i < data.products.length; i++) {
        var cards = '';
        
        console.log(data.products[i])
        cards = `<div class="card product">
        <h2>${data.products[i].name} / For ${data.products[i].maxPersons} Persons</h2>
        <hr>
        <h4>Costs:</h4>
        <img src="${data.products[i].url}.jpg" alt="${data.products[i].name}" width="90%" height="auto" loading="lazy">
        <ul>
          <li>HalfDay: ${data.products[i].rentalOptions.halfDay.cost}</li>
          <li>FullDay: ${data.products[i].rentalOptions.fullDay.cost}</li>
        </ul>
        <h4>Costs with reservation:</h4>
        <ul>
          <li>HalfDay: ${data.products[i].rentalOptions.halfDay.reserve}</li>
          <li>FullDay: ${data.products[i].rentalOptions.fullDay.reserve}</li>
        </ul>
      </div> 
      `

      main.innerHTML += cards;
    }
    

  }
