import { interval, fromEvent } from "rxjs";
import { takeUntil, skip, tap } from "rxjs/operators";

const boton = document.createElement("button");
boton.innerHTML = "Detener timer";

document.querySelector("body").append(boton);

const counter$ = interval(300);
const clickBtn$ = fromEvent(boton, "click").pipe(
  tap(() => console.log("Tap antes de skip")),
  skip(1),
  tap(() => console.log("Tap después de skip"))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: val => console.log("next:", val),
  complete: () => console.log("complete")
});
