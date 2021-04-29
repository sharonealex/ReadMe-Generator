// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


/**
 * @param {*} readmeValues 
 * @returns populated Readme string and generate the markdown.
 */
 function generateMarkdown(readmeValues) {
    return `# ${readmeValues.projectTitle} [![license](https://img.shields.io/badge/license-${readmeValues.projectLicense}-blue)](https://shields.io)
      
  #### Table of Contents
  1. [Project Description](#project-description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contributor Guidelines](#contributor-guidelines)
  5. [Credits](#credits)
  5. [Test Instructions](#test-instructions)
  6. [License](#license)
  7. [Questions](#questions)

  ## Project Description
  * ${readmeValues.projectDescription}
  ## Installation Instructions
  * ${readmeValues.projectInstallation}
  ## Usage Information
  * ${readmeValues.projectUsage}
  ## Contributor Guidelines
  * ${readmeValues.projectContribution}
  ## Credits
  * ${readmeValues.projectCredits}
  ## Test Instructions
  * ${readmeValues.projectTests}
  ## License
  * licensed under the ${readmeValues.projectLicense}
  ## Questions
  * Follow me on Github - Github: [${readmeValues.gitHubURL}](https://github.com/${readmeValues.gitHubURL})
  * Reach out to me on email: ${readmeValues.email}
  `
  
}


module.exports = generateMarkdown;
