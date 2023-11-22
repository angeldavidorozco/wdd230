const urlN = 'https://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=fb73926091db47b697357036289d59a2'

async function apiFetchNews() {
    try{
        const response = await fetch(urlN);
        if (response.ok){

        const data = await response.json();

        console.log(data);
       
        displayNews(data);
    }
    } catch(error){
        console.log(error);
    }
}

apiFetchNews();

let pNews = document.getElementById("dnews");

function displayNews(data) {
    
    for(let i = 0; i<2; i++)
    {
        let pArt = document.createElement("div");
        const title = data.articles[i].title;
        const link = data.articles[i].url;

        pArt.innerHTML = `<h3>${title}</h3><a href="${link}" target="_blank">Link to article</a> <br>`

        pArt.setAttribute('class', 'news')

        pNews.appendChild(pArt);
    }

}