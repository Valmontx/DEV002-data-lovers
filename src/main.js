
import { filterByDirector, filterByProducer, ordenarAscendente, ordenarDescendente,SearchMovie } from './data.js';
import data from './data/ghibli/ghibli.js';
// data de peliculas 
const peliculas = data.films
let containerCard = document.getElementById('containerCard')
let director = document.getElementById("directorBtn").value
let ordenar = document.getElementById('dateBtn').value;
let dateBtn = document.getElementById('dateBtn')

/*-------------------------- Mostrar data-------------------------*/
// crear la funcion// 


function moviesAll(data) {
   containerCard.innerHTML = ""
   data.forEach(element => {
      let div = document.createElement('div')
      div.className = 'card'
      containerCard.appendChild(div)
      div.innerHTML += `  
<div class ="dataImg">
<div class ="cards"> 
<p class ="poster"><img id = "poster" src = " ${element.poster}"/></p> 
<p class = "informacion" id ="tittle" class="titulo"> ${element.title}</p>
<p class = "informacion" id= "relase_date">  ${element.release_date}</p>
</div>`

   });
}
   moviesAll(data.films)

/*--------------seleccionar mas informacion en tarjetas--------------- */
containerCard.addEventListener('click', () => {
   location.href = "pagina.html"
});

/*-------------------filtrado director------------------*/

document.getElementById('directorBtn').addEventListener('change', (event) => {
   let info
   const director = event.target.value
   if (director === 'All') {
      info = data.films
   }
   else {
      info = filterByDirector(data, director)
   }

       moviesAll(info)
});

/*-------------------fitrado productor------------------*/
document.getElementById('producerBtn').addEventListener('change', (event) => {
   let info
   const producer = event.target.value
   if (producer === 'All') {
      info = data.films
   }  
   else {
      info = filterByProducer(data, producer)
   }
       moviesAll(info)

});

/*-------------------organizar por año-------------------*/
document.getElementById('dateBtn').addEventListener('change', (event) => {

   if (event.target.value === "most recent") {
      let ordenarAsc = ordenarAscendente(peliculas)
      console.log(ordenarAsc)
      moviesAll(ordenarAsc)

   } else if (event.target.value === "lest recent") {
      let ordenarDes = ordenarDescendente(peliculas)
      console.log(ordenarDes)
      moviesAll(ordenarDes)

   }

});

/*------------------Filtrar por nombre de pelicula------------------*/
 const search = document.getElementById('buscador')
 search.addEventListener('keyup', (element) => {
   (element.target.value)
 let searchig = SearchMovie(peliculas,element.target.value);
     moviesAll(searchig)

 });












//<p class = "description" id ="description" class="parrado">  ${element.description}</p>
//<p class = "informacion" id= "productor"> Productor: ${element.producer}</p>
//<p class = "informacion" id= "director"> Director : ${element.director}</p>
//<p class = "informacion" id="rt_score"> Puntaje:${element.rt_score}</p>
