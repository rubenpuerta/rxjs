import { fromEvent } from "rxjs";
import { auditTime, tap, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x }) => ({ x })),
    tap(val => console.log("tap", val)),
    auditTime(2000)
  )
  .subscribe({
    next: val => console.log("next:", val),
    complete: () => console.log("complete")
  });
