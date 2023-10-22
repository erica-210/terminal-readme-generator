// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const utils = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project titled?',
        name: 'title',
        default: 'Working Title',
    },
    {
        type: 'input',
        message: 'Project description?',
        name: 'description',
        default: 'Working Description',
    },
    {
        type: 'input',
        message: 'What, if any, installation steps does the project require?',
        name: 'installation',
        default: 'No Installation Rquired',
    },
    {
        type: 'input',
        message: 'What instructions or examples are needed for project usage?',
        name: 'usage',
        default: 'No Usage Applicable',
    },
    {
        type: 'input',
        message: 'What can other developers do to contribute to the project?',
        name: 'contributing',
        default: 'No contributions Necessary',
    },
    {
        type: 'input',
        message: 'What tests, if any, have been run and give examples?',
        name: 'tests',
        default: 'No Tests Needed',
    },
    {
        type: 'list',
        message: 'Project license?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license',
        default: 'No License Required',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), err => {
       err? console.log(err) : console.log('sucess!')
    });
}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
