import { Observer, of } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.error("error: ", error),
  complete: () => console.log("complete"),
};

/**
 * *Of
 * Observable que emite valores de manera sync
 */
const obs$ = of<number[]>(1, 2, 3, 4, 5);
// const obs$ = of(1, 2, 3, 4, 5, ...[6, 7, 8]);
// const obs$ = of(
//   ["a", "b"],
//   { name: "Paul" },
//   function () {},
//   Promise.resolve(true)
// );

console.log("Start observable");
obs$.subscribe(observer);
console.log("End observable");
