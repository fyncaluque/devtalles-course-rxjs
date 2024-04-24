import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numbers$ = of(1, 2, 2, 3, 4, 5, 2);

/**
 * *distinctUntilChanged()
 * Deja de emitir el valor si la previa emisión ya fue emitida
 */
numbers$.pipe(distinctUntilChanged()).subscribe(console.log);

/**
 **Example 2
 */
interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: "Megaman",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "Zero",
  },
  {
    nombre: "Dr. Willy",
  },
  {
    nombre: "X",
  },
  {
    nombre: "X",
  },
  {
    nombre: "Zero",
  },
];

from(personajes)
  .pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre))
  .subscribe(console.log);
