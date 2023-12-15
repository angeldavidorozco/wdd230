const urlN = 'http://api.mediastack.com/v1/news?access_key=d14931e3f0d1620ebabc6b9132bbf0e9&keywords=Argentina&countries=us'

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
        const title = data.data[i].title;
        const link = data.data[i].url;

        pArt.innerHTML = `<h3>${title}</h3><a href="${link}" target="_blank">Link to article</a> <br>`

        pArt.setAttribute('class', 'news')

        pNews.appendChild(pArt);
    }

}