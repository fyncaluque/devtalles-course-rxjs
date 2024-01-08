import { asyncScheduler } from "rxjs";

/**
 * *setTimeout
 * asyncScheduler.schedule(function, time, state/arguments)
 */
const hello = () => console.log("Hello World");
const great = (name) => console.log(`Hello ${name}`);
asyncScheduler.schedule(hello, 3000);
asyncScheduler.schedule(great, 3000, "Paul");

/**
 * *setInterval
 */
const subscription = asyncScheduler.schedule(
  function (state) {
    console.log(state);
    this.schedule(state + 1, 1000);
  },
  2000,
  0
);

asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);
