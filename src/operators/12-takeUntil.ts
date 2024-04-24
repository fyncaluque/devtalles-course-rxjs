import { fromEvent, interval, takeUntil } from "rxjs";

const button = document.createElement("button");
button.innerHTML = "Detener timer";
document.querySelector("body").append(button);

const timer$ = interval(1000);
const button$ = fromEvent(button, "click");

// takeUntil(observable) emite valores hasta que el observable definida entre llaves emita un valor
timer$.pipe(takeUntil(button$)).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Complete"),
});
