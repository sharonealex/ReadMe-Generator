//Import node package for inquirer module.
const inquirer = require("inquirer");
const fsPromises = require('fs').promises;

//Function to insert the user inputs into the standard ReadMe template.
function populateMarkupTemplate(readmeValues) {
    return `# ${readmeValues.projectTitle}
      
  #### Table of Contents
  1. [Project Description](#project-description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contributor Guidelines](#contributor-guidelines)
  5. [Code of Conduct](#code-of-conduct)
  6. [Test Instructions](#test-instructions)
  7. [License](#license)
  8. [Questions](#questions)

  ## Project Description
  * ${readmeValues.projectDescription}
  ## Installation Steps
  * ${readmeValues.projectInstallation}
  ## Usage Information
  * ${readmeValues.projectUsage}
  ## Credits for Contribution
  * ${readmeValues.projectCredits}
  ## Test Instructions
  * ${readmeValues.projectTests}
  ## License
  * licensed under the ${readmeValues.projectLicense}
  ## Questions
  * Follow me on Github at [${readmeValues.projectDeployedURL}](${readmeValues.projectDeployedURL})`;
}

//Function that collects user inputs required to create the readme doco.
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
    ]);
}



getUserInputs()
    .then(populateMarkupTemplate)
    .then((data) => {
        return fsPromises.writeFile("README.md", data)
            .then(() => {
                console.log('JSON saved');
            })
            .catch(er => {
                console.log(er);
            });
    })
    .catch(function (err) {
        console.log(err);
    });
