import { from, range } from "rxjs";
import { filter } from "rxjs/operators";

// Filtrar los números impares
range(1, 10)
  .pipe(filter((value) => value % 2 === 1))
  .subscribe(console.log);

// Filtrar personajes
interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "Joker",
  },
];

from(personajes)
  .pipe(filter((personaje) => personaje.tipo == "heroe"))
  .subscribe(console.log);
