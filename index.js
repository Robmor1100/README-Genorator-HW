// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message:'What are the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your projectt?',        
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are some contribution guidelines for your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to add?',
        choices: ['MIT', 'Apache', 'GNU GPL', 'BSD', 'None'  ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('README.md file created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
