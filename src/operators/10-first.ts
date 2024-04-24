import { of, first, take } from "rxjs";

const numbers$ = of(1, 2, 3, 4, 5);

// first: emite solo el primer valor o el primer valor que cumpla con la condición
// numbers$.pipe(take(1)).subscribe(console.log);
numbers$.pipe(first()).subscribe(console.log);

numbers$.pipe(first((value) => value > 3)).subscribe(console.log);
