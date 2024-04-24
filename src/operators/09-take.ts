import { of, take } from "rxjs";

const numbers$ = of(1, 2, 3, 4, 5);
// take: emite la cantidad indicada de valores
numbers$.pipe(take(3)).subscribe(console.log);
