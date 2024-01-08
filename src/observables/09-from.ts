import { from, of } from "rxjs";

/**
 * of: observable que emite une secuencia en base a sus argumentos
 * from: emite une secuencia también (promise, iterable, observable, array,...)
 */

// Mismos comportamiento
// const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = from("Fernando");

const source$ = from(fetch("https://api.github.com/users/klerith"));

source$.subscribe(async (res) => {
  const data = await res.json();
  console.log(data);
});

// Function generator
const functionGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const iterable = functionGenerator();
from(iterable).subscribe(console.log);
