import { Observable, Observer } from "rxjs";

// const observer: Observer<number> = {
//   next: (value) => console.log("next: ", value),
//   error: (error) => console.error("error: ", error),
//   complete: () => console.log("complete"),
// };

const observable$ = new Observable<number>((subscriber) => {
  // Contador que emite el valor de count
  let count = 0;

  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
    console.log("count: ", count);
  }, 1000);

  setInterval(() => {
    subscriber.complete();
  }, 5000);

  //   Al ejecutar el complete() , se ejecutara el return()
  return () => {
    clearInterval(interval);
    console.log("Interval destruido");
  };
});

/**
 * *Subscription
 */
const subscriptionOne = observable$.subscribe((num) =>
  console.log("subscriptionOne: ", num)
);
const subscriptionTwo = observable$.subscribe((num) =>
  console.log("subscriptionTwo: ", num)
);

/**
 * *Unsubscribe
 */
setInterval(() => {
  subscriptionOne.unsubscribe();
}, 2000);
setInterval(() => {
  subscriptionTwo.unsubscribe();
}, 8000);

/***
 * Nota:  Cuando todas las suscripciones al observable se hayan cancelado, el observable se completa de manera natural o explícita.
 */
