// EJERCICIO 9 - SUMA DE NUMEROS HASTA N, OMITIENDO MULTIPLOS DE 5

let n = parseInt(prompt("Ingrese un numero N para sumar desde 1 hasta N (omitiendo multiplos de 5):"));

while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Error. Ingrese un numero valido mayor que 0:"));
}

let suma = 0;

for (let i = 1; i <= n; i++) {
  if (i % 5 !== 0) {
    suma += i;
  }
}

alert("La suma de los numeros del 1 al " + n + " (sin multiplos de 5) es: " + suma);
