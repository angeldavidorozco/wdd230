const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


//JSON Request

const baseURL = "https://angeldavidorozco.github.io/wdd230/";
const linksURL = "data/members.json";

const list = document.querySelector('#directory');

async function getInfo() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.table(data.prophets); // temporary testing of data retreival
    displayInfo(data.companies); // note that we reference the prophets array of the JSON data object, not just the object
  }
  
  getInfo();


  const displayInfo = (company) => {
    company.forEach((company) => {

       

        // Create elements to add to the div.cards element
        let section = document.createElement('section');
        let img = document.createElement('img'); // fill in the blank
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let a = document.createElement('a');
        let membership = document.createElement('p');
        let ceo = document.createElement('p');


        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        a.textContent = `${company.website}`;
        membership.textContent = `${company.membership_level}`;
        ceo.textContent = `CEO: ${company.CEO}`;

        

        a.setAttribute('href', company.website);

        img.setAttribute('src', `styles/images/${company.icon}`);
        img.setAttribute('alt', `Logo of ${company.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '250');
        img.setAttribute('height', '250');
        section.setAttribute('class', company.membership_level)


        section.appendChild(img);
        section.appendChild(a);
        section.appendChild(address);
        section.appendChild(phone);
        
        section.appendChild(ceo);

        list.appendChild(section);
        
        
  
    });
  }




