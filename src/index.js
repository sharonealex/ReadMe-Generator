//Import node package for inquirer module.
const inquirer = require('inquirer');

//Function that collects user inputs required to create the readme doco.
function getUserInputs(){

    return inquirer.prompt([
        {
            type: "input",
            name: "Project_Title",
            message: "What is your project tittled?"
          },
          {
            type: "input",
            name: "Description",
            message: "Provide a short description"
          },
          {
            type: "input",
            name: "Installation",
            message: "What are the steps required to install your project?"
          },
          {
            type: "input",
            name: "Usage",
            message: "Provide instructions and examples for usage"
          },
          {
            type: "input",
            name: "Credits",
            message: "List your collaborators, if any, with links to their GitHub profiles."
          },
          {
            type: "input",
            name: "Tests",
            message: "Please provide examples on how to run tests here"
          },
          {
            type: "checkbox",
            message: "License?",
            name: "License",
            choices: [
              "[MIT License](LICENSE.txt)", 
              "[GNU GPLv3 License](COPYING.txt)", 
            ]
          },
         
          {
            type: "input",
            name: "githubDeployedURL",
            message: "Enter your github application URL"
          }
        ]);
      }

getUserInputs()
  .then(function(answers) {
   console.log(answers);
  })
  .catch(function(err) {
    console.log(err);
  });
