// CLASE (estructura del objeto)
class Camiseta {
  /* Propiedades (características) . Atributo public. Indica la visibilidad de esa variable que pertenece a la estructura del objeto. 
  
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

  /* MÉTODO (acciones del objeto (-> ver Pantalón) donde está tambien el CONSTRUCTOR (-> ver Bufanda))*/
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

// -----------------------------

class Bufanda {
  private color: string;
  private features: string;
  private brand: string;
  private size: number | string;
  private price: number;

  /* CONSTRUCTOR : método *especial dentro de una clase
1- dar valor inicial a los atributos/props
2-es el primero que se ejecuta
3- recibe parametros y estos se pasan (como props)
4- no retona 
*/
  constructor(
    color: string,
    features: string,
    brand: string,
    size: number | string,
    price: number
  ) {
    this.color = color;
    this.features = features;
    this.brand = brand;
    this.size = size;
    this.price = price;
  }
  public setFeatures(features: string) {
    this.features = features;
  }

  public getPrize() {
    return this.price;
  }
}

let bufanda = new Bufanda("pink", "polyester", "pull&bear", "unique", 12);
console.log(bufanda);
console.log(bufanda.getPrize());

bufanda.setFeatures("cottons");
console.log(bufanda);
