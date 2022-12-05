//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
    
//Mostrar Data//
const tarjetas= document.getElementById('containerCard')
containerCard.innerHTML=`
<div = 'containerCard'>${data.films[0].director} ${data.films[0].description}${data.films[0].producer}${data.films[0].release_date} ${data.films[0].title}</div>
<img src="${data.films[0].poster}"/>`


console.log(data.films)











//console.log(example, data);
