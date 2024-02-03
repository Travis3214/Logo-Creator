// Importing you shapes from the shapes file
const { Triangle, Square, Circle } = require("./shapes.js");

// This is a test case to make sure a square renders with a red background
describe("Square test", () => {
  test("test for a square with a red background", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="red" />'
    );
  });
});

// This is a test case to make sure a triangle renders with a blue background
describe("Triangle test", () => {
  test("test for a triangle with a blue background", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// This is a test case to make sure a cirlce renders with the background color code #5bc603
describe("Circle test", () => {
  test("test for a circle with a #5bc603 background", () => {
    const shape = new Circle();
    shape.setColor("#5bc603");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#5bc603" />'
    );
  });
});