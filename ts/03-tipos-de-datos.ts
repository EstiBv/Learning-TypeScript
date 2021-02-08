// String
let cadena: string = "Falopia";
// cadena = 12; terminal avisa con error (como propTypes en react)

// Number
let numero: number = 12;

// Booleano
let verdadero_falso: boolean = true;

// Any -- cualquier valor
let cualquiera: any = "hola";

// Arrays -- <tipo dato en el array>
let lenguajes: Array<string> = ["JS", "jQuery", "TS"];
// --Otra manera de declarar
let years: Number[] = [10, 20, 30];
let things: any[] = [10, "20"];

// Multiples datos
let both: string | number = "esti";
both = 30;

console.log(
  cadena,
  numero,
  verdadero_falso,
  cualquiera,
  lenguajes,
  years,
  things,
  both
);

// declarar tipos de datos
type alphanumeric = string | number;
let nameUser: alphanumeric = "Falopia";
let ageUser: alphanumeric = 20;
