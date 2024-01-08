import { from, interval } from "rxjs";
import { scan, take } from "rxjs/operators";

const accumulator = (acc, curr) => acc + curr;

/***
 * Scan emite el valor acumulado en cada emisión de la información
 * *scan(function accumulator, initial value)
 */
interval(500).pipe(take(5), scan(accumulator, 10)).subscribe(console.log);

// Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: "fher", autenticado: false, token: null },
  { id: "fher", autenticado: true, token: "ABC" },
  { id: "fher", autenticado: true, token: "ABC123" },
];

const state$ = from(user)
  .pipe(
    scan<Usuario, Usuario, Usuario>((acc, cur) => ({ ...acc, ...cur }), {
      edad: 33,
    })
  )
  .subscribe((state) => console.log("Estado de usuario: ", state));
