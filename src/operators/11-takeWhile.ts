import { of, first, take, takeWhile } from "rxjs";

const numbers$ = of(1, 2, 3, 4, 5);

numbers$.pipe(takeWhile((n) => n < 4)).subscribe(console.log);
// takeWhile(función , valor que rompe la emisión)
numbers$.pipe(takeWhile((n) => n < 4, true)).subscribe(console.log);
