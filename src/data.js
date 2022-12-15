
function filterByDirector (data, director) {
    let moviesByDirector = data.films.filter(film=> 
     film.director === director
    );
    return moviesByDirector;
  };


  function filterByProducer (data, producer) {
    let moviesByProducer = data.films.filter(film=> 
     film.producer === producer
    );
    return moviesByProducer;
  };


export {filterByDirector,filterByProducer};
