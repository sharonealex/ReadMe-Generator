//Import node package for inquirer module and file module
const inquirer = require("inquirer");
const fsPromises = require('fs').promises;
const generateMarkdown = require('../src/utils/generateMarkdown')

//Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project titled? (Required)",
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Provide a short description (Required)",
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log('You need to enter a short description to continue!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "projectInstallation",
        message: "What are the steps required to install your project? (Required)",
        validate: projectInstallation => {
            if (projectInstallation) {
                return true;
            } else {
                console.log('You need to enter steps for installation and setup!');
                return false;
            }
        }
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
        name: "projectContribution",
        message:
            "Describe contribution guidelines for submission of pull requests",
    },
    {
        type: "input",
        name: "projectTests",
        message: "Please provide examples on how to run tests here",
    },
    {
        type: "checkbox",
        name: "projectLicense",
        message: "Choose License? (Required)",
        choices: ['Apache', 'MIT', 'None'],
        validate: projectLicense => {
            if (projectLicense) {
                return true;
            } else {
                console.log('You need to enter license of the project!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "gitHubURL",
        message: "Enter your github application URL (Required)",
        validate: gitHubURL => {
            if (gitHubURL) {
                return true;
            } else {
                console.log('You need to enter github application URL  project!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email for any follow up questions (Required)",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('You need to enter email for further questions!');
                return false;
            }
        }
    },
]

/**
 * Function to write the generated ReadMe to a .md file.
 */
function writeToFile(data) {
    const fileName = "SampleREADME.md";
    return fsPromises.writeFile(fileName, data)
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
