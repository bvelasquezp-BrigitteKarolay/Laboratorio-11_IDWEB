// EJERCICIO 11 - VERIFICACION DE NUMERO ARMSTRONG

let numero = prompt("Ingrese un numero para verificar si es Armstrong:");

while (isNaN(numero) || numero.trim() === "") {
  numero = prompt("Error. Ingrese un numero valido:");
}

let digitos = numero.split("").map(Number);
let n = digitos.length;
let suma = 0;

for (let i = 0; i < n; i++) {
  suma += Math.pow(digitos[i], n);
}

if (suma === parseInt(numero)) {
  alert(numero + " ES un numero Armstrong.");
} else {
  alert(numero + " NO es un numero Armstrong.");
}
