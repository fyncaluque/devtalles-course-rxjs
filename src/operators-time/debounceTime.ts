import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { fromEvent } from "rxjs";

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(
    map(({ target }) => target["value"]),
    debounceTime(1000),
    distinctUntilChanged()
  )
  .subscribe(console.log);
