import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

    
    let login = document.getElementById('#enviar');
    login.addEventListener("click",() =>{
        let name = document.getElementById("nombre").value;
        localStorage.setItem(name);
    
        window.location="otro.html";
    })








//console.log(example, data);
