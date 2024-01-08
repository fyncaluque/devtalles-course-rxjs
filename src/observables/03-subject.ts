import { Observable, Observer, Subject } from "rxjs";

// Interfaz de un observer
const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.error("error: ", error),
  complete: () => console.log("complete"),
};

const interval$ = new Observable<number>((subscriber) => {
  const interval = setInterval(() => {
    subscriber.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Interval destroy");
  };
});

/**
 * 1- Cast multiple (emisión multiple)
 * 2- También es un observer
 */
const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

const sub1 = subject$.subscribe(observer);
const sub2 = subject$.subscribe(observer);

setInterval(() => {
  subject$.next("Valor emitido por subject");
  subject$.complete();
  subscription.unsubscribe();
}, 3000);

/**
 * Nota: El complete() o unsubscribe() de un observable es independiente.
 */
