// EJERCICIO 5 - CONTADOR DE NUMEROS PARES E IMPARES

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt("Ingrese el numero " + i + ":"));

  while (isNaN(numero)) {
    numero = parseInt(prompt("Error. Ingrese un numero valido:"));
  }

  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

alert("Total de numeros pares: " + pares + "\nTotal de numeros impares: " + impares);
