// EJERCICIO 3 - CALCULAR PROMEDIO CON VALIDACION

let suma = 0;
let cantidadNotas = 5;

// BUCLE PARA INGRESAR LAS NOTAS
for (let i = 1; i <= cantidadNotas; i++) {
  let nota = parseFloat(prompt("Ingrese la nota " + i + " (entre 0 y 20):"));

  // VALIDACION DE RANGO
  while (isNaN(nota) || nota < 0 || nota > 20) {
    nota = parseFloat(prompt("Error. Ingrese una nota valida entre 0 y 20:"));
  }

  suma += nota;
}

// CALCULO DEL PROMEDIO
let promedio = suma / cantidadNotas;

// MUESTRA EL RESULTADO
alert("El promedio de las notas es: " + promedio.toFixed(2));
