import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

/**
 * *Operadores sirven para transformar la información que se emite por el observable
 */
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const keyupCode$ = keyup$.pipe(map((event) => event.code)); //map<valor entrante, valor devuelto>
keyupCode$.subscribe((value) => console.log("Code key =>", value));
