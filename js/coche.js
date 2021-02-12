"use strict";
console.log("hola coche");
// clase coche (molde de objeto)
var Coche = /** @class */ (function () {
    function Coche() {
        this.model = " ";
        this.color = " ";
        this.fastness = 0;
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    return Coche;
}());
// objeto coche (crear objeto/instanciar clase)
var car = new Coche();
car.model = "Fiat";
car.color = "Red";
car.fastness = 90;
console.log("El coche 1 es :  " + car.model + " " + car.color + " " + car.fastness);
car.setColor("Black");
console.log("La petición de cambio de color ha sido recibida: " + car.getColor());
var coche2 = new Coche();
coche2.setColor("White");
var coche3 = new Coche();
coche3.setColor("Blue");
console.log("Color coche2: " +
    coche2.getColor() +
    ". " +
    "Color coche3: " +
    coche3.getColor() +
    ".");
