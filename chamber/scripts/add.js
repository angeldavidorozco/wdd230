const baseURL = "https://angeldavidorozco.github.io/wdd230/";
const linksURL = "data/members.json";

const list = document.querySelector('.advertisements .card');

async function getAdd() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.table(data.prophets); // temporary testing of data retreival
    displayInfo(data.companies); // note that we reference the prophets array of the JSON data object, not just the object
  }
  
  getAdd();


  const displayInfo = (companies) => {
    // Group companies by membership level
    let companiesByLevel = {
        "Gold": [],
        "Silver": [],
        "Bronze": []
    };

    companies.forEach((company) => {
        companiesByLevel[company.membership_level].push(company);
    });

    //Choose randomly from each level
    let selectedCompanies = [];
    for (let level in companiesByLevel) {
        let companies = companiesByLevel[level];
        let randomIndex = Math.floor(Math.random() * companies.length);
        selectedCompanies.push(companies[randomIndex]);
    }

    // Display the selected companies
    selectedCompanies.forEach((company) => {
        
        let div = document.createElement('div');
        let webp = document.createElement('h3');
        let cName = document.createElement('h2');
        let add = document.createElement('p');

        cName.textContent = `${company.name}`;
        webp.innerHTML = `<a href=${company.website}>${company.website}</a>`;
        add.textContent = `"${company.add}"`;

        div.setAttribute('class', `card ${company.membership_level}`);

        div.appendChild(cName);
        div.appendChild(webp);
        div.appendChild(add);

        list.appendChild(div);
    });
}

