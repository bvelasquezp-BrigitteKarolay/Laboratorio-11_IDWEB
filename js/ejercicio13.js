// EJERCICIO 13 - CARRITO DE COMPRAS SIMPLE

let total = 0;
let continuar;

do {
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));
  while (isNaN(precio) || precio <= 0) {
    precio = parseFloat(prompt("Error. Ingrese un precio valido:"));
  }

  total += precio;
  continuar = prompt("Desea agregar otro producto? (s/n)").toLowerCase();

} while (continuar === "s");

alert("El total a pagar por los productos es: S/ " + total.toFixed(2));
