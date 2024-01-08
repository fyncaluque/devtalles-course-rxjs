import { range } from "rxjs";
import { filter, tap } from "rxjs/operators";

// Filtrar los números impares
range(1, 10)
  .pipe(
    //Hará un seguimiento de los valores emitidos
    tap((value) => console.log("tap: ", value)),
    filter((value) => value % 2 === 1)
    // La información que muestre dependerá mucho en que parte del  flujo se coloque
    // tap((value) => console.log("tap: ", value)),
  )
  .subscribe(console.log);
