import { computeStatic, filterByDirector, filterByProducer, ordenarAscendente, ordenarDescendente, scoreLest, scoreMost,score} from '../src/data.js';

import { filterByDirector,filterByProducer,dataFilmsAsc,dataFilmsDesc,dataMostRated,dataLessRated,score,computeStats } from '../src/data.js';

describe('filterByDirector', () => {
  it('filterByDirector es una funcion', () => {
    expect(typeof filterByDirector).toBe('function');
  });

  it('filtra las peliculas por director', () => {
    const data = [
      { director: "Hayao Miyazaki", pelicula: "Castle in the Sky" },
      { director: "Isao Takahata", pelicula: "Only Yesterday" },
      { director: "Hayao Miyazaki", pelicula: "Porco Rosso" }
    ]
    const director = "Hayao Miyazaki";
    const resultadoReal = filterByDirector(data, director);
    const resultadoEsperado = [{ director: "Hayao Miyazaki", pelicula: "Castle in the Sky" }, { director: "Hayao Miyazaki", pelicula: "Porco Rosso" }]

    expect(resultadoReal).toEqual(resultadoEsperado);
  });
});


describe('filterByProducer', () => {
  it('filterByProducer es una funcion', () => {
    expect(typeof filterByProducer).toBe('function');
  });

  it('filtra las peliculas por productor', () => {
    const data = [
      { producer: "Hayao Miyazaki", pelicula: "Castle in the Sky" },
      { producer: "Isao Takahata", pelicula: "Only Yesterday" },
      { producer: "Hayao Miyazaki", pelicula: "Porco Rosso" }
    ]
    const producer = "Hayao Miyazaki";
    const resultadoReal = filterByProducer(data, producer);
    const resultadoEsperado = [{ producer: "Hayao Miyazaki", pelicula: "Castle in the Sky" }, { producer: "Hayao Miyazaki", pelicula: "Porco Rosso" }]

    expect(resultadoReal).toEqual(resultadoEsperado);
  });
});



describe('dataFilmsAsc', () => {
  it('dataFilmsAsc es una funcion', () => {
    expect(typeof dataFilmsAsc).toBe('function');
  });

  it('ordena las peliculas por ano de estreno', () => {
    const data = [
      { release_date: "2002", pelicula: "Castle in the Sky" },
      { release_date: "2001", pelicula: "Only Yesterday" },
      { release_date: "2000", pelicula: "Porco Rosso" }
    ]

    const resultadoReal = dataFilmsAsc(data);
    const resultadoEsperado = [{ release_date: "2000", pelicula: "Porco Rosso" }, { release_date: "2001", pelicula: "Only Yesterday" }, { release_date: "2002", pelicula: "Castle in the Sky"}]

    expect(resultadoReal).toEqual(resultadoEsperado);
  });
});


describe('dataFilmsDesc', () => {
  it('dataFilmsDesc es una funcion', () => {
    expect(typeof dataFilmsDesc).toBe('function');
  });

  it('ordena las peliculas por ano de estreno', () => {
    const data = [
      { release_date: "2000", pelicula: "Castle in the Sky" },
      { release_date: "2001", pelicula: "Only Yesterday" },
      { release_date: "2002", pelicula: "Porco Rosso" }
    ]

    const resultadoReal = dataFilmsDesc(data);
    const resultadoEsperado = [{ release_date: "2002", pelicula: "Porco Rosso" }, { release_date: "2001", pelicula: "Only Yesterday" }, { release_date: "2000", pelicula: "Castle in the Sky"}]

    expect(resultadoReal).toEqual(resultadoEsperado);
  });
});


describe('dataMostRated', () => {
  it('dataMostRated es una funcion', () => {
    expect(typeof dataMostRated).toBe('function');
  });

  it('ordena las peliculas que tienen mayor puntuacion', () => {
    const data = [
      { rt_score: "96", pelicula: "Castle in the Sky" },
      {rt_score: "100", pelicula: "Only Yesterday" },
      { rt_score: "98", pelicula: "Porco Rosso" }
    ]

    const resultadoReal = dataMostRated(data);
    const resultadoEsperado = [{ rt_score: "100", pelicula: "Only Yesterday" }, { rt_score: "98", pelicula: "Porco Rosso" }, { rt_score: "96", pelicula: "Castle in the Sky"}]

    expect(resultadoReal).toEqual(resultadoEsperado);
  });
});


describe('dataLessRated', () => {
  it('dataLessRated es una funcion', () => {
    expect(typeof dataLessRated).toBe('function');
  });

  it('ordena las peliculas que tienen menor puntuacion', () => {
    const data = [
      { rt_score: "96", pelicula: "Castle in the Sky" },
      { rt_score: "100", pelicula: "Only Yesterday" },
      { rt_score: "98", pelicula: "Porco Rosso" }
    ]

    const resultadoReal = dataLessRated(data);
    const resultadoEsperado = [{ rt_score: "96", pelicula: "Castle in the Sky" }, { rt_score: "98", pelicula: "Porco Rosso" }, { rt_score: "100", pelicula: "Only Yesterday"}]

    expect(resultadoReal).toEqual(resultadoEsperado);
  });
});




describe('score and computeStats', () => {
  it('score and computeStats are a function', () => {
    expect(typeof score).toBe('function');
    expect(typeof computeStats).toBe('function');
  });

  it('muestra un promedio las calificaciones de las peliculas ghibli', () => {
    const data = [
      { rt_score: "96", pelicula: "Castle in the Sky" },
      { rt_score: "100", pelicula: "Only Yesterday" },
      { rt_score: "98", pelicula: "Porco Rosso" }
    ]

    const resultadoReal = score(data);
    const resultadoEsperado = [96,100,98]

    expect(resultadoReal).toEqual(resultadoEsperado);


    const resultadoReal2= computeStats(resultadoReal)
    const resultadoEsperado2= "98.00"
    expect(resultadoReal2).toEqual(resultadoEsperado2);
  });
});

