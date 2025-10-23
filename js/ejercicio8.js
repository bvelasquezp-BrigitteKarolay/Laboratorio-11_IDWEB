// EJERCICIO 8 - NUMEROS PRIMOS EN RANGO

let limite = parseInt(prompt("Ingrese un numero para mostrar los numeros primos hasta ese valor:"));

while (isNaN(limite) || limite < 2) {
  limite = parseInt(prompt("Error. Ingrese un numero mayor o igual a 2:"));
}

let primos = [];

for (let i = 2; i <= limite; i++) {
  let esPrimo = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) {
    primos.push(i);
  }
}

alert("Numeros primos hasta " + limite + ":\n" + primos.join(", "));
