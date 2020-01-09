import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

const totalReducer = (acc: number, crr: number) => acc + crr;

interval(300)
  .pipe(take(6), tap(console.log), reduce(totalReducer))
  .subscribe({
    next: val => console.log("next:", val),
    complete: () => console.log("Completado")
  });
