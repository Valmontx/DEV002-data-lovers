
import { filterByDirector, filterByProducer, ordenarAscendente, ordenarDescendente } from './data.js';
import data from './data/ghibli/ghibli.js';
// data de peliculas 
const peliculas = data.films
let containerCard = document.getElementById('containerCard')
let director = document.getElementById("directorBtn").value
let dateBtn = document.getElementById('dateBtn')

/*-------------------------- Mostrar data-------------------------*/
// crear la funcion// 




data.films.forEach(element => {
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


/*--------------seleccionar mas informacion en tarjetas--------------- */
containerCard.addEventListener('click', () => {
   location.href = "pagina.html"


});

/*-------------------filtrado director------------------*/

document.getElementById('directorBtn').addEventListener('change', (event) => {
   var info
   const director = event.target.value
   if (director === 'All') {
      info = data.films
   }
   else {
      info = filterByDirector(data, director)
   }
   moviesAll(info)
   /* poner el nombre de la funcion que tiene la data completa*/
});

/*-------------------fitrado productor------------------*/
document.getElementById('producerBtn').addEventListener('change', (event) => {
   var info
   const producer = event.target.value
   if (producer === 'All') {
      info = data.films
   }
   else {
      info = filterByProducer(data, producer)
   }


});

/*-------------------organizar por año-------------------*/
document.getElementById('dateBtn').addEventListener('change', (event) => {
   let ordenar = document.getElementById('dateBtn').value;
   if (event.target.value === "most recent") {
      let ordenarAsc = ordenarAscendente(peliculas)
      console.log(ordenarAsc)
      // containerCard(ordenarAsc)

   } else if (event.target.value === "lest recent") {
      let ordenarDes = ordenarDescendente(peliculas)
      console.log(ordenarDes)
      // crear funcion para imprimir en pantalla

   }

});












//<p class = "description" id ="description" class="parrado">  ${element.description}</p>
//<p class = "informacion" id= "productor"> Productor: ${element.producer}</p>
//<p class = "informacion" id= "director"> Director : ${element.director}</p>
//<p class = "informacion" id="rt_score"> Puntaje:${element.rt_score}</p>
