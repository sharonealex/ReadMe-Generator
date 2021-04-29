//Import node package for inquirer module and file module
const inquirer = require("inquirer");
const fsPromises = require('fs').promises;
const generateMarkdown = require('../src/utils/generateMarkdown')

//Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project titled?",
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Provide a short description",
    },
    {
        type: "input",
        name: "projectInstallation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "projectUsage",
        message: "Provide instructions and examples for usage",
    },
    {
        type: "input",
        name: "projectCredits",
        message:
            "List your collaborators, if any, with links to their GitHub profiles.",
    },
    {
        type: "input",
        name: "projectTests",
        message: "Please provide examples on how to run tests here",
    },
    {
        type: "checkbox",
        message: "License?",
        name: "projectLicense",
        choices: [
            "MIT",
            "Apache",
            "None"
        ],
    },
    {
        type: "input",
        name: "projectDeployedURL",
        message: "Enter your github application URL",
    },
    {
        type: "input",
        name: "projectQuestionsEmail",
        message: "Enter your email for any follow up questions",
    },
]

/**
 * Function to write the generated ReadMe to a .md file.
 */
function writeToFile(data) {
    console.log(data)
    const fileName = "README.md";
    return fsPromises.writeFile("README.md", data)
}

/**
 * Function that collects user inputs required to create the readme doco.
 */
 function getUserInputs(questions) {
    return inquirer.prompt(questions)
}

/**
 * Function to initialize the application.
 */
function init() {
    getUserInputs(questions)
    .then(generateMarkdown)
    .then(writeToFile)
    .then(() => {
        console.log("===ReadMe created for your project successcfully===")
    })
    .catch(function (err) {
        console.log("Error thrown is..." + err);
    });
};
     
/**
 * Function call to initialize app
 */
init();    
