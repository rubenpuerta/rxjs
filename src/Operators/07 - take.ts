import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5).pipe(
  tap(x => console.log("tap-numeros$:", x))
);

numeros$
  .pipe(
    tap(x => console.log("tap", x)),
    take(3)
  )
  .subscribe({
    next: val => console.log("next:", val),
    complete: () => console.log("Complete")
  });
