// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");

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
        message: "Enter Credits Here: ",
        name: "credits"
    },
    {
        type: "input",
        message: "Enter the Test Instructions: ",
        name: "test"
    }, {
        type: "list",
        message: "What License do you want to use? ",
        choices: [
            "MIT",
            "Apache 2.0",
            "GNU GPLv3",
            "MPL 2.0"
        ],
        name: "license"
    },
    {
        type: "input",
        message: "Enter your GitHub username: ",
        name: "github"
    },
    {
        type: "input",
        message: "Enter your Email Address: ",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let markData = markdown(data);
    fs.writeFile(fileName, markData, (err) =>
        err ? console.error(err) : console.log("Readme File Created in Output Folder")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        //console.log(data)
        writeToFile("./output/README.md", data)
    })
}

// Function call to initialize app
init();
