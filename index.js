// Packages needed for this application
const inquire = require ("inquirer");
const generateMarkdown = require ("./utils/generateMarkdown");
// console.log(generateMarkdown);
const fs = require ("fs");

// Array of questions for user input
const questions = [
    {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
},
{
    type: "input",
    name: "description",
    message: "What is the project about? Give a detailed description of your project.",
},
{
    type: "input",
    name: "tableOfContents",
    message: "Table of Contents",
},
{
    type: "input",
    name: "installation",
    message: "What does your user need to install this app (ie. dependencies)?",
},
{
    type: "input",
    name: "usage",
    message: "How is the app used? Give instructions.",
},
// {
//     type: "list",
//     name: "liscence",
//     message: "What liscence is being used (ie. MIT)?",
// },
{
    type: "input",
    name: "contributing",
    message: "Who contributed to this project?",
},

{
    type: "input",
    name: "testing",
    message: "What commands are needed to test this app?",
},
{
    type: "input",
    name: "questions",
    message: "Contact info for inquiries.",
},
{
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
},
{
    type: "input",
    name: "email",
    message: "What is your email address?",
},

];

// Function to write README file
function writeToFile(data) {
    fs.writeFile ("README.md", data, err => {
        if (err) throw err;
        console.log ("Your file has been created")
    })

};

// Function to initialize app
function init() {
    inquire.prompt(
        questions
    ).then(answers => {
        console.log(answers);
        console.log(answers.title);
        const templateGenerator = generateMarkdown(answers);
        console.log(templateGenerator);
        writeToFile(templateGenerator);
    })
};

// Function call to initialize app
init();
