import { ajax, AjaxError } from "rxjs/ajax";
import { map, pluck, catchError } from "rxjs/operators";
import { of } from "rxjs";

const url = "https://api.github.com/users?per_page=5";

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const atrapaError = (err: AjaxError) => {
  console.warn("error en: ", err.message);
  return of([]);
};

const fetchPromise = fetch(url);

// fetchPromise
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(err => {
//     console.error('Se produjo un error:', err);
//   });

// fetchPromise
//   .then( manejaErrores )
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(err => {
//     console.warn('Se produjo un error:', err);
//   });

ajax(url)
  .pipe(pluck("response"), catchError(atrapaError))
  .subscribe(users => console.log("usuarios: ", users));
