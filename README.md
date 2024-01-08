# Curso de RXJS

## Descripción

Este repositorio contiene materiales, ejercicios y ejemplos destinados a aprender y dominar RxJS, una potente biblioteca para la programación reactiva en JavaScript. Sumérgete en flujos observables, operadores y mucho más para mejorar tu comprensión e implementación de patrones reactivos.

- Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```

Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.

- Cuando termine de instalar los node_modules, entonces podemos ejecutar el proyecto con el siguiente comando

```
npm start
```

Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el `package.json`

## Cambiar el puerto

Por defecto, el puerto para este proyecto es el `8081`, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el `package.json` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack serve --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (Graban los cambios antes de ejecutar el `npm start` nuevamente)
