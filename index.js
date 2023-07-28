// Import needed const //
const fs = require('fs');
const inquirer = require('inquirer');

// Const for the shapes that are going to be used from shapes.js //
const {Square, Circle, Triangle} = require('./lib/shapes')

// Creating inquirer prompt for the user to input what they want their logo to be //
function inqPrompt() {
inquirer.prompt([
    {
        type:'input',
        name:'text',
        message:'Enter up to 3 characters that you would like to use:',
    },
    {
        type:'input',
        name:'textColor',
        message:'What color would you like the text to be:',
    },
    {
        type:'list',
        name:'shape',
        message:'What shape would you like to use for your image:',
        choices: ['Square', 'Circle', 'Triangle'],
    },
    {
        type:'input',
        name:'shapeColor',
        message:'What color do you want the shape to be:',
    },
])
.then((answers) => {
    if (answers.text.length > 3) {
        console.log("Text cannot have more than 3 characters");
        inqPrompt();
      } else {
        writeToFile("logo.svg", answers);
      }
    })
};

// Making a function to write the svg logo using the users answers //
function writeToFile(fileName, answers) {
    // This will make sure the file starts empty //
    let svgString = "";
    // Sets dimensions of logo container //
    svgString =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // This wraps the users text in a <g> tag so the input text shows up in front instead of behind the logo //
    svgString += "<g>";
    // Takes users selected shape and inputs it into the svg //
    svgString += `${answers.shape}`;

    // Conditional check to add users shape choice to the svg //
    let shapeChoice;
    if (answers.shape === "Square") {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" height="160" width="160"  fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === "Circle") {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
    } else {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    }

    // <text> tag gives the text properties i want to the users text //
    svgString += `<text x="150" y="130" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`;
    // Closing </g> tag //
    svgString += "</g>";
    // Closing </svg> tag //
    svgString += "</svg>";

    // Use fs to generate svg file //
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Successfully generated logo.svg");
    });
}

// Calls the inquirer prompt when node index.js is ran //
inqPrompt();