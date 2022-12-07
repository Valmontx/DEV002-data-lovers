//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

//Mostrar Data//
//const tarjetas = document.getElementById('containerCard')
//containerCard.innerHTML = `
//<div = 'containerCard'>${data.films[0].director} ${data.films[0].description}${data.films[0].producer}${data.films[0].release_date} ${data.films[0].title}</div>
//<img src="${data.films[0].poster}"/>`


console.log(data.films)

let containerCard = document.getElementById('containerCard')

data.films.forEach(element => {
    let box = document.createElement('box')
    box.className = 'card' // className sirve para evitar conflictos con el class del DOM
    containerCard.appendChild(box) //El método appendChild() inserta un nuevo nodo dentro de la estructura DOM 
    box.innerHTML += `
<div class ="dataImg">
<div class ="cards"> 
<p class ="poster"><img id = "poster" src = " ${element.poster}"/></p>
<p class = "informacion" id ="tittle" class="titulo"> ${element.title}</p>
<p class = "informacion" id= "relase_date">  ${element.release_date}</p>
</div>`

});

//<p class = "description" id ="description" class="parrado">  ${element.description}</p>
//<p class = "informacion" id= "productor"> Productor: ${element.producer}</p>
//<p class = "informacion" id= "director"> Director : ${element.director}</p>
//<p class = "informacion" id="rt_score"> Puntaje:${element.rt_score}</p>



//console.log(example, data);
