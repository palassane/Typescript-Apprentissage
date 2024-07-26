"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var myShape = new shape_1.Shape(10, 15);
var myCircle = new circle_1.Circle(5, 10, 20);
var myRectangle = new rectangle_1.Rectangle(2, 4, 3, 5);
//declarer un tableau de shape
var theShapes = [];
//ajouter myshape dans le tableau
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShape = theShapes_1[_i];
    console.log(tempShape.getInfo());
}
