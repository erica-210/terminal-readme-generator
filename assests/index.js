// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const util = require('util');
const generatorMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project titled?',
        name: 'title',
        validate:(value)=>{if(value){return true} else {return 'Input required'}}
    },
    {
        type: 'input',
        message: 'Project description?',
        name: 'description',
        validate:(value)=>{if(value){return true} else {return 'Input required'}}
    },
    {
        type: 'input',
        message: 'What, if any, installation steps does the project require?',
        name: 'installation',
        default: 'No Installation Required',
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
        default: 'No Contributions Required',
    },
    {
        type: 'input',
        message: 'What tests, if any, have been run and give examples?',
        name: 'tests',
        default: 'No Tests Required',
    },
    {
        type: 'list',
        message: 'Project license?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'Apache', 'MIT', 'Boost', 'The Unlicense'],
        name: 'license',
        default: 'No License Required',
    },
    {
        type: 'input',
        message: 'GitHub Username:',
        name: 'github',
        validate:(value)=>{if(value){return true} else {return 'Input required'}}
    },
    {
        type: 'input',
        message: 'E-mail:',
        name: 'email',
        validate:(value)=>{if(value){return true} else {return 'Input required'}}
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //console.log(data);
   //console.log(typeof(data)); 

    fs.writeFile(fileName, data, err => {
       // console.log(fileName)
        //console.log(data)
       err? console.log(err) : console.log('sucess!')
    });
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generatorMarkdown(data));
       // console.log(data)
    })
}

// Function call to initialize app
init();
