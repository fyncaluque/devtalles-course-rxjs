import { fromEvent } from "rxjs";
import { pluck } from "rxjs/operators";

/**
 * *Pluck permite obtener el valor especificando el nombre de la propiedad de un objeto
 */
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const baseURI$ = keyup$.pipe(pluck("target", "baseURI"));
baseURI$.subscribe((value) => console.log("URI=>", value));
