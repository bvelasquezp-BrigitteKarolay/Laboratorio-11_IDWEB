// EJERCICIO 10 - MENU DE CALCULO DE AREAS

let opcion;

do {
  opcion = prompt(
    "MENU DE CALCULO DE AREAS:\n" +
    "1. Calcular area del circulo\n" +
    "2. Calcular area del rectangulo\n" +
    "3. Salir\n\n" +
    "Ingrese una opcion (1-3):"
  );

  switch (opcion) {
    case "1":
      let radio = parseFloat(prompt("Ingrese el radio del circulo:"));
      if (!isNaN(radio) && radio > 0) {
        let areaCirculo = Math.PI * Math.pow(radio, 2);
        alert("El area del circulo es: " + areaCirculo.toFixed(2));
      } else {
        alert("Dato invalido.");
      }
      break;

    case "2":
      let base = parseFloat(prompt("Ingrese la base del rectangulo:"));
      let altura = parseFloat(prompt("Ingrese la altura del rectangulo:"));
      if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
        let areaRect = base * altura;
        alert("El area del rectangulo es: " + areaRect.toFixed(2));
      } else {
        alert("Datos invalidos.");
      }
      break;

    case "3":
      alert("Saliendo del programa...");
      break;

    default:
      alert("Opcion no valida.");
  }
} while (opcion !== "3");
