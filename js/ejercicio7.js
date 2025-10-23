// EJERCICIO 7 - CAJERO AUTOMATICO

let monto = parseInt(prompt("Ingrese el monto que desea retirar (multiplo de 10):"));

while (isNaN(monto) || monto <= 0 || monto % 10 !== 0) {
  monto = parseInt(prompt("Error. Ingrese un monto valido, multiplo de 10:"));
}

let billetes100 = Math.floor(monto / 100);
monto %= 100;

let billetes50 = Math.floor(monto / 50);
monto %= 50;

let billetes20 = Math.floor(monto / 20);
monto %= 20;

let billetes10 = Math.floor(monto / 10);

let mensaje = "ENTREGA DE BILLETES:\n";
mensaje += "Billetes de 100: " + billetes100 + "\n";
mensaje += "Billetes de 50: " + billetes50 + "\n";
mensaje += "Billetes de 20: " + billetes20 + "\n";
mensaje += "Billetes de 10: " + billetes10;

alert(mensaje);
