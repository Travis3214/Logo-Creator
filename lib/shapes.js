// Creating a class for the shapes //
class Shape {
    constructor () {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
};

// This creates a square while taking in the properties from shape class //
class Square extends Shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
};

// This creates a circle while taking in the properties from shape class //
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
};

// This creates a triangle while taking in the properties from shape class //
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
};

// Exports classes so we can use them in index.js //
module.exports = {Square, Circle, Triangle};