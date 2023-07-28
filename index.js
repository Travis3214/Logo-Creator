// Import needed const //
const fs = require('fs');
const inquirer = require('inquirer');

// Const for the shapes that are going to be used from shapes.js //
const {square, circle, triangle} = require('./lib/shapes')

// Creating a questions array for the inquirer prompt to use //
const questions = [
    {
        type:'input',
        name:'text',
        message:'Enter up to 3 characters that you would like to use:',
    },
    {
        type:'input',
        name:'text-color',
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
        name:'shape-color',
        message:'What color do you want the shape to be:',
    },
];