// import using require
const Shape = require("./shape.js");

// declare class
class Circle extends Shape {
  constructor(props) {
    super(props);
  }
  calculateArea() {
    console.log("Calculated Area of Circle");
  }
}

// export class using module.exports
module.exports = Shape;
