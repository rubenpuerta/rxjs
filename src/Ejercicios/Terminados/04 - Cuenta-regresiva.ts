import { interval } from "rxjs";
import { scan, startWith, take, tap, map } from "rxjs/operators";

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {
  const inicio = 7;
  const countdown$ = interval(700).pipe(
    // scan((acc, cur, idx) => inicio - idx, inicio),
    // take(8)
    map(i => inicio - i),
    take(inicio + 1)
  );

  // No tocar esta línea ==================
  countdown$.subscribe(console.log); // =
  // ======================================
})();
