// EJERCICIO 6 - TABLA DE MULTIPLICAR DEL 1 AL 12

let numero = parseInt(prompt("Ingrese un numero para mostrar su tabla de multiplicar:"));

while (isNaN(numero)) {
  numero = parseInt(prompt("Error. Ingrese un numero valido:"));
}

let resultado = "TABLA DEL " + numero + ":\n\n";

for (let i = 1; i <= 12; i++) {
  resultado += numero + " x " + i + " = " + (numero * i) + "\n";
}

alert(resultado);
