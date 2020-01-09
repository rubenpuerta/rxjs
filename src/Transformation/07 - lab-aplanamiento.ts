import { fromEvent, of } from "rxjs";
import {
  tap,
  concatMap,
  map,
  mergeMap,
  pluck,
  catchError,
  switchMap,
  exhaustMap
} from "rxjs/operators";
import { ajax, AjaxError } from "rxjs/ajax";

// Crear un formulario
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const submitBtn = document.createElement("button");

// Helper
const peticionHttpLogin = userPass =>
  ajax
    .post("https://reqres.in/api/login?delay=1", userPass)
    .pipe(pluck("response", "token"), catchError(atrapaError));

const atrapaError = (err: AjaxError) => {
  console.warn("error en: ", err.message);
  return of({ message: 'Login incorrecto'});
};

// Configuraciones
inputEmail.type = "email";
inputEmail.placeholder = "email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "password";
inputPass.value = "cityslicka";

submitBtn.innerHTML = "Ingresar";

form.append(inputEmail, inputPass, submitBtn);
document.querySelector("body").append(form);

// Streams
const submitForm$ = fromEvent(form, "submit").pipe(
  tap(e => e.preventDefault()),
  map(e => ({
    email: e.target[0].value,
    password: e.target[1].value
  })),
  exhaustMap(peticionHttpLogin)
);

submitForm$.subscribe(token => {
  console.log(token);
});
