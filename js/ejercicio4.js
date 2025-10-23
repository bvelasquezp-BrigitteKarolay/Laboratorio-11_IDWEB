// EJERCICIO 4 - CLASIFICAR EDAD SEGUN RANGO

let edad = parseInt(prompt("Ingrese su edad:"));

while (isNaN(edad) || edad < 0) {
  edad = parseInt(prompt("Edad invalida. Ingrese nuevamente su edad:"));
}

let categoria = "";

if (edad < 12) {
  categoria = "Nino";
} else if (edad >= 12 && edad <= 17) {
  categoria = "Adolescente";
} else if (edad >= 18 && edad <= 59) {
  categoria = "Adulto";
} else {
  categoria = "Adulto mayor";
}

alert("Categoria: " + categoria);
