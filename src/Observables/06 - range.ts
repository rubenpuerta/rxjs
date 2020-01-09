import { of, range, asyncScheduler } from 'rxjs';

// const src$ = of(1,2,3,4,5);

// console.log('inicio');
// src$.subscribe(console.log);
// console.log('fin');

const src2$ = range(1,5, asyncScheduler);

console.log('inicio');
src2$.subscribe(console.log);
console.log('fin');