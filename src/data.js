


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

export function ordenarAscendente (films) {
  let date = films.sort((a, b) => {
    return b.release_date - a.release_date
  });
  return date;
}

export function ordenarDescendente (films) {
  let dateSort = films.sort((a, b) => {
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
    return a.rt_score - b.rt_score
  });
  return rtscore;
}

export function scoreLest(peliculas){
  let rtscores = peliculas.sort((a,b) => {
    return b.rt_score - a.rt_score
  });
 return rtscores;
}

