import { timer, interval } from "rxjs";

const observer = {
  next: (value) => console.log(value),
  complete: () => console.log("Complete"),
};

// Funciones async
const interval$ = interval(1000);
// const timer$ = timer(5000); // Se ejecutara dentro de 5s
// const timer$ = timer(5000,1000); // Se ejecuta en 5s, emite valor cada 1s

const now = new Date();
now.setSeconds(now.getSeconds() + 5);
const timer$ = timer(now); // Se ejecuta pasados 5 segundos desde la fecha, emite valor cada 1s

console.log("Start");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("End");
