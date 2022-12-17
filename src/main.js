import {filterByDirector,filterByProducer,dataFilmsAsc,dataFilmsDesc,dataMostRated,dataLessRated,} from "./data.js";
import data from './data/ghibli/ghibli.js';




let cards = document.getElementById("cards")

renderCards(data.films) /*se plotea en el html*/
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

/*------------------filtro de busqueda director y productor---------------*/
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


/*---------------Ordenar films fecha de lanzamiento--------------*/
let selectDate = document.getElementById("dateBtn");
selectDate.addEventListener("change", function (event) {
    const value = document.getElementById("dateBtn").value;
    if (event.target.value === "most recent") {
        let movieAsc = dataFilmsAsc(data.films)
        console.log(movieAsc); 
        renderCards(movieAsc)
    } else if (event.target.value === "less recent") {
        let movieDesc = dataFilmsDesc(data.films)
        //console.log(movieDes);
        renderCards(movieDesc)
    }
});


/*---------------Ordenar films por puntuación--------------*/
let selectScore = document.getElementById("scoreBtn");
selectScore.addEventListener("change", function (event) {
    const value = document.getElementById("scoreBtn").value;
    if (event.target.value === "most rated") {
        let movieMost = dataMostRated(data.films)
        console.log(movieMost); 
        renderCards(movieMost)
    } else if (event.target.value === "less rated") {
        let movieLess = dataLessRated(data.films)
        console.log(movieLess);
        renderCards(movieLess)
    }
});

/*--------------contador de data----------*/





















