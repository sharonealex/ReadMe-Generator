//Import node package for inquirer module and file module
const inquirer = require("inquirer");
const fsPromises = require('fs').promises;
const generateMarkdown = require('../src/utils/generateMarkdown')

/**
 * Function that collects user inputs required to create the readme doco.
 * @returns promise
 */
function getUserInputs() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is your project tittled?",
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
                "[MIT License](LICENSE.txt)",
                "[GNU GPLv3 License](COPYING.txt)",
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
    ]);
}

function writeToFile(data) {
    const fileName = "README.md";
    return fsPromises.writeFile("README.md", data)
}

/**
 * Function for entry point to get the User inputs to populate the readMe template, which then gets 
 * written into a newly created .md file.
 */

getUserInputs()
    .then(generateMarkdown)
    .then(writeToFile)
    .then(() => {
        console.log("===ReadMe created for your project successcfully===")
    })
    .catch(function (err) {
        console.log(err);
    });

init(getUserInputs())    

init();    
