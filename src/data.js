/*--------------Filter director y producer--------*/

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


/*--------------Sort release_date------------*/

function dataFilmsAsc (data,films)  {
  let dateAsc = data.films.sort((a, b) => {
    return b.release_date - a.release_date 
          
  });
  return yearSort;
}


export{dataFilmsAsc};

 function dataFilmsDesc (data,films) {
  let dateDesc = data.films.sort((a, b) => {
    return a.release_date - b.release_date
  });
  return yearSortDate;
}

export {dataFilmsDesc}


/*--------------Sort rt_score------------*/


/*-----------------Buscador--------------*/

