//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

//Mostrar Data//
//const tarjetas = document.getElementById('containerCard')
//containerCard.innerHTML = `
//<div = 'containerCard'>${data.films[0].director} ${data.films[0].description}${data.films[0].producer}${data.films[0].release_date} ${data.films[0].title}</div>
//<img src="${data.films[0].poster}"/>`


console.log(data.films)

let containerCard = document.getElementById('containerCard')
let filtrado = document.getElementById('filtros')

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

/*seleccionar mas informacion en tarjetas */
containerCard.addEventListener('click', () => {
    location.href = "pagina.html"
    
  });

 /*filtrar data director*/
 
const mostrar = document.addEventListener('click', () =>{
    

});

   let buscar = data.films.filter(function(person){
     if (person.director == 'Isao Takahata , Hayao Miyazaki '){
        return true;
        }else{
        return false;
        }
   });

    console.log(buscar);
    
   

  
      

      
   

    
    
 
 


 
 
 /*Metodo ordenar o comparacion*/


   
 
 


   
   






//<p class = "description" id ="description" class="parrado">  ${element.description}</p>
//<p class = "informacion" id= "productor"> Productor: ${element.producer}</p>
//<p class = "informacion" id= "director"> Director : ${element.director}</p>
//<p class = "informacion" id="rt_score"> Puntaje:${element.rt_score}</p>

