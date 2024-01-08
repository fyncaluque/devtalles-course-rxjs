import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const reducer = (accumulator, currentValue) => accumulator + currentValue;

/***
 * Reduce emite el valor acumulado cuando se completa todo el flujo de datos
 * *reduce(function accumulator, initial value)
 */
interval(500)
  .pipe(take(5), tap(console.log), reduce(reducer, 10))
  .subscribe(console.log);
