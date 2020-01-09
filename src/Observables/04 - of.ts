import { of } from "rxjs";

// const obs$ = of(1, 2, 3, 5, 6, 7);
const obs$ = of<number>(...[1, 2, 3, 5, 6, 7], 8, 9, 10);

// const obs$ = of([1,2], { a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log('Inicio del Obs$');

obs$.subscribe(
  next => console.log("next", next),
  error => console.warn("error", error),
  () => console.info("Terminamos la secuencia")
);

console.log('Fin del Obs$');