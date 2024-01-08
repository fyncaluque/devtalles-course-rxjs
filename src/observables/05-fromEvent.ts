import { fromEvent } from "rxjs";

const obs1 = fromEvent<PointerEvent>(document, "click");
const obs2 = fromEvent<KeyboardEvent>(document, "keyup");

obs1.subscribe(({ x, y }) => {
  console.log(`x:${x} / y:${y}`);
});

obs2.subscribe(({ key }) => {
  console.log(key);
});
