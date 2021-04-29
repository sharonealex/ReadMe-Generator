# Professional README Generator

## Description

This is a node.js command line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). I have attempted to stay close to the guidelines provided at [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide).

This application allows  the project developer to focus on coding and build aspects more.

The below video link is a demonstration of how this application works on the server.

## Demo Video

Here is a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

https://drive.google.com/file/d/1eB88VxVu6F51_NBy6d0zxxT9bSrVcs5i/view

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation Steps
  1. install Node.js
  2. git clone the project into local machine.
  3. run `npm install` at the level of package.json and check if the inquirer module in installed.
  4. Go into `src` folder and run `node index.js`

## Usage

The application will be invoked by using the following command:

```bash
node index.js
```
The command will prompt the user for inputs with all required and optional fields for creating a professional ReadMe.md file

Answer all question prompts and on successful journery a Readme will be created.

## Additional Info

 -GithubDeployedUrl: TBC
 -Email: user@example.com



