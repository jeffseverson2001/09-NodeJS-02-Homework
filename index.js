// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your Project Title: ",
        name: "title"
    },
    {
        type: "input",
        message: "Enter the Description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Enter the Installation Instructions: ",
        name: "instructions"
    },
    {
        type: "input",
        message: "Enter the Usage Information: ",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter the Contribution Guidelines: ",
        name: "contribution"
    },
    {
        type: "input",
        message: "Enter the Test Instructions: ",
        name: "test"
    },{
        type: "list",
        message: "What License do you want to use? ",
        choices: [
            "MIT",
            "Apache License 2.0",
            "GNU GPLv3",
            "ISC License"
        ],
        name: "license"
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Readme File Created")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) =>
        console.log(data)
    )
}

// Function call to initialize app
init();
