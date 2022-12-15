import {filterByDirector,filterByProducer} from "./data.js";
import data from './data/ghibli/ghibli.js';


/*-------------------Mostrar data-----------------------*/

let cards = document.getElementById("cards")
const director= document.getElementById("directorBtn").value

renderCards(data.films)
function renderCards(data){
    cards.innerHTML = ''
    data.forEach(element => {

        setCard(element)
        
        })
}
function setCard(element){
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
}

/*------------------filtro de busqueda director---------------*/
document.getElementById("directorBtn").addEventListener("change",(event)=>{
    var  info
    const director = event.target.value
    if (director==="All"){
         info = data.films
    }
    else { 
         info = filterByDirector(data,director)
    }   
    renderCards(info)
});


document.getElementById("producerBtn").addEventListener("change",(event)=>{
    var  info
    const producer = event.target.value
    if (producer==="All"){
         info = data.films
    }
    else { 
         info = filterByProducer(data,producer)
    }   
    renderCards(info)
});


