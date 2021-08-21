// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type:'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'N/A'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What needs to be run to install dependencies?',
        default: 'npm install',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to test?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know in order to use this respository?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to this repository?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully generated" + fileName);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("ExampleREADME.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
