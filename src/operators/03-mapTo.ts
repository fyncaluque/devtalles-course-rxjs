import { fromEvent } from "rxjs";
import { mapTo } from "rxjs/operators";

/**
 * *MapTo convierte el valor devuelto en dato especifico
 */
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const keypress$ = keyup$.pipe(mapTo("Tecla presionada"));
keypress$.subscribe((value) => console.log("URI=>", value));
