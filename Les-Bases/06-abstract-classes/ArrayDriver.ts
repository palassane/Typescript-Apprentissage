import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(2, 4, 3, 5);

//declarer un tableau de shape
let theShapes: Shape []  = [];

//ajouter myshape dans le tableau
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes){
  console.log(tempShape.getInfo());
  console.log(tempShape.calculateArea());
  console.log();
}