// Creating a class for the shapes //
class shape {
    constructor () {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
};

// This creates a square while taking in the properties from shape class //
class square extends shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
};

// This creates a circle while taking in the properties from shape class //
class circle extends shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}