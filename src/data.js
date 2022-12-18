/*--------------Filter director y producer--------*/

function filterByDirector (data, director) {
    let moviesByDirector = data.films.filter(film=> 
     film.director === director
    );
    return moviesByDirector;
  }


  function filterByProducer (data, producer) {
    let moviesByProducer = data.films.filter(film=> 
     film.producer === producer
    );
    return moviesByProducer;
  }


export {filterByDirector,filterByProducer};


/*--------------Sort release_date------------*/

function dataFilmsAsc (data) {
  let dateAsc = data.sort((a, b) => {
    return b.release_date - a.release_date
  });
  return dateAsc
}


function  dataFilmsDesc(data)  {
  let dateDesc = data.sort((a, b) => {
    return a.release_date - b.release_date
  });
  return dateDesc
  
}
export {dataFilmsDesc,dataFilmsAsc}

/*--------------Sort rt_score------------*/
function dataMostRated (data) {
  let mostRated = data.sort((a, b) => {
    return b.rt_score - a.rt_score
  });
  return mostRated
}


function  dataLessRated(data)  {
  let lessRated = data.sort((a, b) => {
    return a.rt_score - b.rt_score
  });
  return lessRated
  
}
export {dataMostRated,dataLessRated}


/*----------Estadisticas de los films---------*/

export const score = (data) => {
  let scoreMovie= [];
for (let i= 0; i < data.length; i++){
  let scoreNumber = parseInt(data[i]["rt_score"]);
  scoreMovie.push(scoreNumber);
}
return scoreMovie;
}



export const computeStats = (data) => {
  const average = data.reduce((a,b) => a + b, 0) / data.length;
  const averageDigits = average.toFixed(2)
  return averageDigits; 
}

















