const baseURL = "https://angeldavidorozco.github.io/wdd230/";
const linksURL = "data/links.json";

const list = document.querySelector('#linkList');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.table(data.prophets); // temporary testing of data retreival
    displayLinks(data.lessons); // note that we reference the prophets array of the JSON data object, not just the object
  }
  
  getLinks();


  const displayLinks = (link) => {
    link.forEach((link) => {

        link.links.forEach((act) =>{

        // Create elements to add to the div.cards element
        let li = document.createElement('li');
        let a = document.createElement('a'); // fill in the blank
        
        let actNumber = document.createElement('p');

        actNumber.textContent = `Week ${link.lesson}: ${act.title}`;

        a.setAttribute('href', act.url);
        a.appendChild(actNumber)
        li.appendChild(a);
        list.appendChild(li);

        });

        
        
  
    });
  }