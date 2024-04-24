import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const button = document.createElement("button");
button.innerHTML = "Detener timer";
document.querySelector("body").append(button);

// skip(n) omite la cantidad(n) indicada de emisiones del observable
const timer$ = interval(1000);
const button$ = fromEvent(button, "click").pipe(
  // Omitirá los 3 primeros clicks luego detendrá la emisión
  skip(3)
);

timer$.pipe(takeUntil(button$)).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Complete"),
});

const interval$ = interval(2000);

interval$
  .pipe(
    tap((value) => console.log("tap: ", value)),
    skip(3)
  )
  .subscribe({
    next: (value) => console.log("timer: ", value),
    complete: () => console.log("Complete"),
  });
