const fs = require('fs');
const inquirer = require('inquirer');
const { addManager, next, addEngineer, addIntern } = require('./src/questions');
const writeToFile = require('./src/writeToFile');
const generateHTML = require('./src/generateHTML');

// import and config for ascii-art
const logo = require('asciiart-logo');
const config = require('./package.json');
// prints splash screen
console.log(logo(config).render());

// import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// declares variable to hold answers
let manager = {};
const engineers = [];
const interns = [];

const finish = () => {
  const htmlData = generateHTML(manager, engineers, interns);
  !fs.existsSync('dist') && fs.mkdirSync('dist');
  return writeToFile('./dist/index.html', htmlData);
};

const nextAction = () => {
  return inquirer
    .prompt(next)
    .then(answers => {
      switch (answers.nextAction) {
        case 'Add an engineer':
          return inquirer
            .prompt(addEngineer)
            .then(answers => {
              const newEngineer = new Engineer(answers.engineerName, answers.engineerEmployeeId, answers.engineerEmailAddress, answers.engineerGithubUsername)
              engineers.push(newEngineer);
              nextAction();
            })
        case 'Add an intern':
          return inquirer
            .prompt(addIntern)
            .then(answers => {
              const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
              interns.push(newIntern);
              nextAction();
            })
        case 'Finish building the team':
          finish();
      }
    })
    .catch(error => {
      console.log(error);
    });
};

const start = () => {
  return inquirer
    .prompt(addManager)
    .then(answers => {
      const newManager = new Manager(answers.teamManagerName, answers.teamManagerEmployeeId, answers.teamManagerEmailAddress, answers.teamManagerOfficeNumber)
      nextAction();
      manager = newManager;
    })
    .catch(error => {
      console.log(error);
    });
};

// calls function to start program
start();