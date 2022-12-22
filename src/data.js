


export function  filterByDirector (peliculas , director) {
  let moviesByDirector = peliculas.filter(film => 
    film.director === director
    
  );
    return moviesByDirector;
}

export function filterByProducer (peliculas , producer) {
  let moviesByProducer = peliculas.filter (film =>
   film.producer === producer 
   );
   return moviesByProducer;
}

export function ordenarAscendente (peliculas) {
  let date = peliculas.sort((a, b) => {
    return b.release_date - a.release_date
  });
  return date;
}

export function ordenarDescendente (peliculas) {
  let dateSort = peliculas.sort((a, b) => {
    return a.release_date - b.release_date
  });
  return dateSort;
}
 export function SearchMovie  (peliculas,value) {
  let movies = peliculas.filter( element =>
    element.title.toLowerCase().includes(value.toLowerCase())
    );
    return movies;
 }

 export function scoreMost(peliculas){
  let rtscore = peliculas.sort((a,b) => {
    return b.rt_score - a.rt_score
  });
  return rtscore;
}

export function scoreLest(data){
  let rtscores = data.sort((a,b) => {
    return a.rt_score - b.rt_score
  });
 return rtscores;
}
/*--------------contador del puntaje de lasa peliculas-------- */
export function computeStatic(peliculas) {
let estimate = peliculas.reduce((a,b) => a + b, 0 )/peliculas.length;
let estimatedigits = estimate.toFixed(2)

return estimatedigits;
}

export function score( peliculas) {
  let scoreMovie = [];
  for (let i = 0; i < peliculas.length; i++){
    let scoreNumber = parseInt(peliculas[i]["rt_score"]);
    scoreMovie.push(scoreNumber);
  }
  return scoreMovie;
}

