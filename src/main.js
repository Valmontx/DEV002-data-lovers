import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// // import data from './data/rickandmorty/rickandmorty.js';
import data from './data/ghibli/ghibli.js';

/*-------------------Mostrar data-----------------------*/

let cards = document.getElementById("cards")
data.films.forEach(element => {

    let dataMovies = document.createElement("div")
    dataMovies.className = "card"
    cards.appendChild(dataMovies)

    dataMovies.innerHTML += `
    
    <div class="poster"><img id="poster" src="${element.poster}"/></div>
    <p class ="parrafo" id="title" class="title">${element.title} </p>
    <p class ="parrafo" id="releaseDate">${element.release_date} </p>
    
    </div>
    </div>
     `

})