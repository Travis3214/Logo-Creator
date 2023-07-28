// Import needed const //
const fs = require('fs');
const inquirer = require('inquirer');

// Const for the shapes that are going to be used from shapes.js //
const {square, circle, triangle} = require('./lib/shapes')

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
        choices: ['square', 'cirlce', 'triangle'],
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