import {filterByDirector,filterByProducer,dataFilmsAsc,dataFilmsDesc} from "./data.js";
import data from './data/ghibli/ghibli.js';




let cards = document.getElementById("cards")

renderCards(data.films)
function renderCards(data){
    cards.innerHTML = ''
    data.forEach(element => {

        setCard(element)
        
        })
}
/*-------------------Mostrar data-----------------------*/
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
    if (director === "All"){
         info = data.films /*variable que contiene el array de los films*/
    }
    else { 
         info = filterByDirector(data,director)
    }   
    renderCards(info)
});


document.getElementById("producerBtn").addEventListener("change",(event)=>{
    var  info
    const producer = event.target.value
    if (producer === "All"){
         info = data.films
    }
    else { 
         info = filterByProducer(data,producer)
    }   
    renderCards(info)
});


/*---------------Ordenar films--------------*/
 document.getElementById("dateBtn").addEventListener("change",(event)=>{
    var ordenar
    const ordenarAsc = event.target.value
    if (ordenarAsc === "All") {
     ordenar = ordenarAscendente(data,ordenarAsc)
     ordenarCards(ordenarAsc)
    } else if (event.target.value === "2") {
        let movieDes = dataMoviesDesc(movies)
        //console.log(movieDes);
        generadorCard(movieDes)
    }
});