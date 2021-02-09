"use strict";
// Clase (estructura del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
        /* Propiedades (características) . Atributo public. indica la visibilidad de esa variable que pertenece a la estructura del objeto.
        
        Cuando se instacie el objeto ( var Camiseta = new Camiseta()), se pueden modificar las características porque son publics
      
        Estos atributos pueden ser:
        -public: acceso a props y métodos desde clase actual, herencias u otras clases
        -protected: acceso desde la clase que lo define y otra clase heredada
        -privated: solo desde la clase (ej: class Pantalón)
        */
        this.color = "red";
        this.features = "short";
        this.brand = "nike";
        this.size = "small";
        this.price = 22;
        // Métodos (acciones del objeto)
    }
    return Camiseta;
}());
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
var Pantalon = /** @class */ (function () {
    function Pantalon() {
        this.color = "blue";
        this.features = "large";
        this.brand = "springfield";
        this.size = "42";
        this.price = 30;
    }
    /* Métodos (acciones del objeto)
    1- para acceder al cambio siendo privadas crear funcion para manipularlas*/
    Pantalon.prototype.changepropierties = function (color, size) {
        this.color = color;
        this.size = size;
    };
    /*
     2- para manipular una prop, crear funcion */
    Pantalon.prototype.getBrand = function () {
        return this.brand;
    };
    return Pantalon;
}());
// var con props iniciales del obj
var pantalon = new Pantalon();
// var con props modificada del obj
var pantalon2 = new Pantalon();
pantalon2.changepropierties("red", 38);
pantalon2.getBrand();
console.log(pantalon);
console.log(pantalon2);
console.log(pantalon2.getBrand());
