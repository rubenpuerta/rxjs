import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const url = "https://httpbin.org/delxxxay/1";

const manejaError = (resp: AjaxError) => {
  console.warn("error: ", resp.message);
  return of({
    ok: false,
    usuarios: []
  });
};

const obs$ = ajax.getJSON(url, {
  "Content-Type": "application/json",
  "mi-token": "ABC123"
});
const obs2$ = ajax(url);

// obs$
//   .pipe(catchError(manejaError))
//   .subscribe(data => console.log("getJSON:", data));
// obs2$
//   .pipe(catchError(manejaError))
//   .subscribe(data => console.log("ajax:", data));

obs$.pipe(catchError(manejaError)).subscribe({
  next: val => console.log("next: ", val),
  error: err => console.warn("error en subs: ", err),
  complete: () => console.log("complete")
});

// obs2$.subscribe(data => console.log("ajax:", data));
