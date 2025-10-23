// EJERCICIO 14 - CARRITO DE COMPRAS CON PRESUPUESTO

let presupuesto = parseFloat(prompt("Ingrese su presupuesto total:"));

while (isNaN(presupuesto) || presupuesto <= 0) {
  presupuesto = parseFloat(prompt("Error. Ingrese un presupuesto valido:"));
}

let total = 0;
let continuar;

do {
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));

  while (isNaN(precio) || precio <= 0) {
    precio = parseFloat(prompt("Error. Ingrese un precio valido:"));
  }

  if (total + precio > presupuesto) {
    alert("No puede agregar este producto. Supera su presupuesto disponible.");
  } else {
    total += precio;
    alert("Producto agregado. Total actual: S/ " + total.toFixed(2));
  }

  continuar = prompt("Desea agregar otro producto? (s/n)").toLowerCase();

} while (continuar === "s");

alert("Compra finalizada. Total gastado: S/ " + total.toFixed(2) + "\nPresupuesto restante: S/ " + (presupuesto - total).toFixed(2));
