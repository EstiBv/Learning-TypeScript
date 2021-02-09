// Clase (estructura del objeto)

class Camiseta {
  /* Propiedades (características) . Atributo public. indica la visibilidad de esa variable que pertenece a la estructura del objeto. 
  
  Cuando se instacie el objeto ( var Camiseta = new Camiseta()), se pueden modificar las características porque son publics

  Estos atributos pueden ser:
  -public: acceso a props y métodos desde clase actual, herencias u otras clases
  -protected: acceso desde la clase que lo define y otra clase heredada
  -privated: solo desde la clase (ej: class Pantalón)
  */

  public color: string = "red";
  public features: string = "short";
  public brand: string = "nike";
  public size: string = "small";
  public price: number = 22;

  // Métodos (acciones del objeto)
}
var camiseta = new Camiseta();

camiseta.color = "black";
camiseta.features = "long";
camiseta.brand = "elle";
camiseta.size = "M";
camiseta.price = 17.99;

var zapatilla = new Camiseta();

zapatilla.color = "white";
zapatilla.features = "runner";
zapatilla.brand = "adidas";
zapatilla.size = "38";
zapatilla.price = 47.9;

console.log(camiseta, zapatilla);

// ---------------------------

class Pantalon {
  private color: string = "blue";
  private features: string = "large";
  private brand: string = "springfield";
  private size: number | string = "42";
  private price: number = 30;

  /* Métodos (acciones del objeto) 
  1- para acceder al cambio siendo privadas crear funcion para manipularlas*/
  public changepropierties(color: string, size: string | number) {
    this.color = color;
    this.size = size;
  }

  /* 
   2- para manipular una prop, crear funcion */
  public getBrand() {
    return this.brand;
  }
}
// var con props iniciales del obj
let pantalon = new Pantalon();

// var con props modificada del obj
let pantalon2 = new Pantalon();
pantalon2.changepropierties("red", 38);
pantalon2.getBrand();

console.log(pantalon);
console.log(pantalon2);
console.log(pantalon2.getBrand());
