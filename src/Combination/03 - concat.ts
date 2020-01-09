import { interval, concat, of } from "rxjs";
import { take } from "rxjs/operators";

const interval$ = interval(1000);

concat(interval$.pipe(take(3)), interval$.pipe(take(2)), of(1), [
  1,
  2,
  3,
  4
]).subscribe(console.log);
