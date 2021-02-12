console.log("hola coche");
// clase coche (molde de objeto)
class Coche {
  public model: string = " ";
  public color: string = " ";
  public fastness: number = 0;

  public getColor() {
    return this.color;
  }
  public setColor(color: string) {
    this.color = color;
  }
}
// objeto coche (crear objeto/instanciar clase)
let car = new Coche();
car.model = "Fiat";
car.color = "Red";
car.fastness = 90;
console.log(
  "El coche 1 es :  " + car.model + " " + car.color + " " + car.fastness
);
car.setColor("Black");
console.log(
  "La petición de cambio de color ha sido recibida: " + car.getColor()
);

let coche2 = new Coche();
coche2.setColor("White");
let coche3 = new Coche();
coche3.setColor("Blue");

console.log(
  "Color coche2: " +
    coche2.getColor() +
    ". " +
    "Color coche3: " +
    coche3.getColor() +
    "."
);
