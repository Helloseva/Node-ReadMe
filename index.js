const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

    {
        type: "input",
        message: "What is your project title?",
        name: "title",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },
      {
        type: "input",
        message: "What is a description of your project?",
        name: "description",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },
      {
        type: "input",
        message: "How do you intall this project?",
        name: "installation",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },
      {
        type: "input",
        message: "How do you use this project?",
        name: "usage",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },
      {
        type: "input",
        message: "Enter collaborators",
        name: "collabarators",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },
      {
        type: "list",
        message: "What license are you going to use?",
        name: "license",
        choices: [
          "EPL 1.0",
          "Apache 2.0",
          "GNU v3",
          "BSD 2",
          "Mozilla",
          "MIT",
          "None of these",
        ],
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },
      {
        type: "input",
        message: "How can others contribute to this project?",
        name: "contributions",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },
      {
        type: "input",
        message: "How do you run the test for this project??",
        name: "testing",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },
      {
        type: "input",
        message: "Enter your GitHub username",
        name: "github",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },
      {
        type: "input",
        message: "Enter your Email address",
        name: "email",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },
    ];
    

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName);
        console.log(data);
        if (err) {
          return console.log(err);
        } else {
          console.log("uraa!");
        }
      });
    }


// function to initialize program
function init() {

    inquirer.prompt(questions).then(function (data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
      });
    }

// function call to initialize program
init();
