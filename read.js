const inquirer = require('inquierer');
const fs = require('fs');

const question = 
[
    {
    // Project title
    type: 'input',
    message: 'What is your project title?',
    name:'Project Title',
    },
    // Project Description
    {
        type: 'input',
        message: 'Add a description of your project',
        name: 'Description',
    },
    // Table of contents
    {
        type: 'input',
        message: 'Add a table of contents for your READme',
        name: 'Table of Contents',
    },
    // Installation
    {
        type: 'input',
        message: 'What are the steps to install your project?',
        name: 'Installation',
    },
    // Usage
    {
        type: 'input',
        message: 'Provide instructions and examples how to use (ie, screenshot)',
        name: 'usage',
    },
    // Credits
    {
        type: 'input',
        message: 'List collaborators, if any with their github profile links',
        name: 'credits',
    },
    // License
    {
        type: 'input',
        message: 'What can other developer do/cannot do with your project',
        name: 'license'
    }
    // Github Username
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'GitHub Username'
    }

]