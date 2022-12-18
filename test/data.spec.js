import { filterByDirector } from '../src/data.js';


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
    
    expect(resultadoReal()).toEqual(resultadoEsperado);
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
