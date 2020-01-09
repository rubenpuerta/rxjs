import { fromEvent } from "rxjs";
import { take, first, tap, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    tap<MouseEvent>(() => console.log("tap")),
    // map(e => ({ clientY: e.clientY, clientX: e.clientX }))
    map(({ clientY, clientX }) => ({ clientY, clientX })),
    first(e => e.clientY >= 150)
  )
  .subscribe({
    next: val => console.log("next:", val),
    complete: () => console.log("complete")
  });
