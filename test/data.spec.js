import { filterByDirector } from '../src/data.js';


describe( 'filterByDirector', () => {
  it('filterByDirector  es una funcion', () => {
    expect(typeof filterByDirector).toBe('function');
  });

  it('ordena la data por director', () => {

    const director = 'Hayao Miyazaki';
    const resultado = filterByDirector( director);
    const resultadoFinal = [
      { director: 'Hayao Miyazaki', pelicula: 'Castle in the sky' },
      { director: 'Hayao Miyazaki', pelicula: 'Porco Rosso' },
    ]
    it('deberia retornar resultadoFinal'), () => {
      expect(resultado).toEqual(resultadoFinal);
    };

});
});

 