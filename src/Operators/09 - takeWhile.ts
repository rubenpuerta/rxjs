import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
  map(({ x, y }) => ({x, y})),
  // takeWhile( ({ y }) => y <= 150)
  takeWhile( ({ y }) => y <= 150, true) // Con True muestra el valor que cancela la subscricion
).subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
})