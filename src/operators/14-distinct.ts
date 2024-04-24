import { distinct, of } from "rxjs";

const numbers$ = of(1, 2, 3, 4, 5, 1, 6, 7, 2, 8);

// numbers$.subscribe(console.log);

/**
 * *distinct()
 * Emite valores que no han sido emitidos, si alguno ya fue emitido no lo emite
 * Usa el operador de equidad ===
 */
numbers$.pipe(distinct()).subscribe(console.log);
