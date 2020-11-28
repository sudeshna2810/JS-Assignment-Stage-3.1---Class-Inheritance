// declare class
class Shape {
  constructor(color) {
    this.color = color;
  }
  drawShape() {
    console.log("Shape Drawn");
  }
  calculateArea(shape) {
    console.log("Area Calculated for: " + shape);
  }
}

// export class using module.exports
module.exports = Shape;
