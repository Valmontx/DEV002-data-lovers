import { filterByDirector, filterByProducer,ordenarAscendente,ordenarDescendente } from '../src/data.js';


describe('filterByDirector', () => {
  it('is a function', () => {
    expect(typeof filterByDirector).toBe('function');
  });

  it('filtra las peliculas por  el nombre del director', () => {
    const director = [
      {director: 'Isao Takahata'}
    ]
    expect(filter(director)).toBe('Isao Takahata');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
