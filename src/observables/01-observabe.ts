import { Observable, Observer } from "rxjs";

/**
 * *Observable
 */

//const observable$  = Observable.create() ?Deprecated
const observable$ = new Observable<string>((subscriber) => {
  // MÉTODOS
  subscriber.next("Hello"); // Valor emitido
  subscriber.next("World");

  //Error forzado
  //   const obj = undefined;
  //   obj.message = "Hi";

  subscriber.complete(); // Termina de emitir

  subscriber.next("Other message"); // Ya no se emite el mensaje
});

// observable$.subscribe(resp=>{console.log(resp)})
// observable$.subscribe(console.log);

/**
 * *Observer
 */

// observable$.subscribe(
//   //Observer
//   (value) => console.log("next", value),
//   (error) => console.log("error", error),
//   () => console.log("complete")
//   //Observer
// );

const observer: Observer<string> = {
  next: (value) => console.log("next", value),
  error: (error) => console.error("next", error),
  complete: () => console.info("complete"),
};

observable$.subscribe(observer);
