import { computeStatic, filterByDirector, filterByProducer, ordenarAscendente, ordenarDescendente, scoreLest, scoreMost,score} from '../src/data.js';


describe('filterByDirector', () => {
  it('filterByDirector  es una funcion', () => {
    expect(typeof filterByDirector).toBe('function');
  });

  it('filtra la data por director', () => {
    const data = [
      { director: 'Hayao Miyazaki', pelicula: 'Castle in the sky' },
      { director: 'Isao Takahara', pelicula: 'Only yesterday' },
      { director: 'Hayao Miyazaki', pelicula: 'Porco Rosso' }
    ]
    const director = 'Hayao Miyazaki';
    const resultado = filterByDirector(data, director);
    const resultadoFinal = [
      { director: 'Hayao Miyazaki', pelicula: 'Castle in the sky' },
      { director: 'Hayao Miyazaki', pelicula: 'Porco Rosso' },
    ]

    expect(resultado).toEqual(resultadoFinal);
  });
});


describe('filterByProducer', () => {
  it('filterByProducer es una funcion', () => {
    expect(typeof filterByProducer).toBe('function');
  });
  it('filtra la data por productor', () => {
    const data = [
      { productor: 'Hayao Miyazaki', pelicula: 'Only yesterday' },
      { productor: 'Isao Takahata', pelicula: 'Castle in the sky' },
      { productor: 'Hayao Miyazaki', pelicula: 'Porco Rosso' },
    ]
    const productor = 'Isao Takahata';
    const resultado = filterByProducer(data, productor);
    const resultadoFinal = [
      { productor: 'Isao Takahata', pelicula: 'Castle in the sky' },
    ]
      expect(resultado).toEqual(resultadoFinal);
  });
});

describe ('ordenarAscendente', () =>{
  it( 'ordenarAscendente es una funcion' , () =>{
    expect (typeof ordenarAscendente).toBe('function') ;
  });
  it ('ordena las peliculas por año ' , () => {
    const data =  [
      {relase_date: 2002, pelicula: 'Castle in the sky'},
      {relase_date: 2001, pelicula: 'Only yesterday'},
      
   ]
   const resultado = ordenarAscendente(data)
   const resultadoFinal = [
   {relase_date: 2001 , pelicula: 'Only yesterday'},
   {relase_date: 2002 , pelicula:'Castle in the sky'},
  ]
  expect (resultado).toEqual(resultadoFinal);
  });
});

describe ('ordenarDescendente', () =>{
  it ('ordenarDescendente es una funcion', () => {
  expect (typeof ordenarDescendente).toBe('function');
  });
  it( 'ordena las peliculas por año', () =>{
    const data = [
      {relase_date:'2000',pelicula:'Castle in the sky' },
      {relase_date:'2001', pelicula:'Only yesterday'},
      {relase_date:'2002', pelicula:'Porco Rosso'},
    ]
    
    const resultado = ordenarDescendente( data)
    const resultadoFinal = [
      {relase_date:'2002',pelicula:'Castle in the sky' },
      {relase_date:'2001', pelicula:'Only yesterday'},
      {relase_date:'2000', pelicula:'Porco Rosso'},
    ]
    expect(resultado).toEqual(resultadoFinal);
  });
});

describe('scoreMost', () => {
  it('scoreMost es una funcion', () => {
    expect(typeof scoreMost).toBe('function');
  });
  it ('ordena el puntaje a mayor', () => {
    const data = [
      {rt_score:'96',pelicula:'Castle in the sky' },
      {rt_score:'100', pelicula:'Only yesterday'},
      {rt_score:'98', pelicula:'Porco Rosso'},
    ]
    const more = 'rt_score'
    const resultado = scoreMost(data,more)
    const resultadoFinal = [
      {rt_score:'100', pelicula:'Castle in the sky' },
      {rt_score:'98', pelicula:'Only yesterday'},
      {rt_score:'96', pelicula:'Porco Rosso'},
    ]
    expect(resultado).toEqual(resultadoFinal);
  });
});
 
describe('scoreLest', () => {
  it('scoreLest es una funcion', () => {
    expect(typeof scoreMost).toBe('function');
  });
  it ('ordena el puntaje a menor', () => {
    const data = [
      {rt_score:'96',pelicula:'Castle in the sky' },
      {rt_score:'100', pelicula:'Only yesterday'},
      {rt_score:'98', pelicula:'Porco Rosso'},
    ]
     
    const resultado = scoreLest(data)
    const resultadoFinal = [
      {rt_score:'96', pelicula:'Castle in the sky' },
      {rt_score:'98', pelicula:'Only yesterday'},
      {rt_score:'100', pelicula:'Porco Rosso'},
    ]
    expect(resultado).toEqual(resultadoFinal);
  });
});

describe('computeStatic y score', () =>{
  it('computeStatic y score son una funcion',() =>{
    expect(computeStatic).toBe('function');
    expect(score).toBe('function');
  });
  it ('debe mostrar el promedio de las calificaciones', () =>{
    const data = [
     {rt_score:'96', pelicula:'Castle in the sky' },
     {rt_score: "100", pelicula: "Only Yesterday" },
     {rt_score: "98", pelicula: "Porco Rosso" },
    ]
    const resultado1 = score(data)
    const resultadoFinal = [96,100,98]
    expect (resultado1).toEqual(resultadoFinal)
    
    const resultado2 = computeStatic( resultado1 )
    const resultadoFinal2 = '98.00'
    expect (resultado2).toEqual(resultadoFinal2);
  });
});