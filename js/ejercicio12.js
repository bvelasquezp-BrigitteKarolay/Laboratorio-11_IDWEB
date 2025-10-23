// EJERCICIO 12 - MENU CON MULTIPLES OPCIONES

let opcion;

do {
  opcion = prompt(
    "MENU PRINCIPAL:\n" +
    "1. Mostrar fecha actual\n" +
    "2. Contar de 1 a 10\n" +
    "3. Calcular el cuadrado de un numero\n" +
    "4. Salir\n\n" +
    "Seleccione una opcion (1-4):"
  );

  switch (opcion) {
    case "1":
      let fecha = new Date();
      alert("La fecha actual es: " + fecha.toLocaleDateString());
      break;

    case "2":
      let conteo = "";
      for (let i = 1; i <= 10; i++) {
        conteo += i + " ";
      }
      alert("Conteo: " + conteo);
      break;

    case "3":
      let numero = parseFloat(prompt("Ingrese un numero:"));
      if (!isNaN(numero)) {
        alert("El cuadrado de " + numero + " es: " + (numero * numero));
      } else {
        alert("Dato invalido.");
      }
      break;

    case "4":
      alert("Saliendo del menu...");
      break;

    default:
      alert("Opcion no valida.");
  }
} while (opcion !== "4");
