


export function  filterByDirector (data, director) {
  let moviesByDirector = data.films.filter(film => 
    film.director === director
    );
    return moviesByDirector;
};

export function filterByProducer (data,producer) {
  let moviesByProducer = data.films.filter(film =>
   film.producer === producer 
   );
   return moviesByProducer;
};

export function ordenarAscendente (ordenarAsc) {
  let date = ordenarAsc.sort((a, b) => {
    return b.release_date - a.release_date
  });
  return date;
}

export function ordenarDescendente (ordenarDes) {
  let dateSort = ordenarDes.sort((a, b) => {
    return a.release_date - b.release_date
  });
  return dateSort;
};


