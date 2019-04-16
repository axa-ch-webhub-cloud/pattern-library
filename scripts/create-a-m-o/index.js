const outdent = require('outdent');
const chalk = require('chalk');
const readline = require('readline');

// const {
//   getAMOType,
// } = require('./functions.js');

process.stdin.setEncoding('utf8');

console.log(chalk.cyan(outdent`
    Hello Dear developer, thank you for contributing with us. 😊

    I will help you to create a new web component 😎.

    You can choose between ATOM📗, MOLECULE📘 or ORGANISM📙.

    As a general guideline, an ATOM📗 is the smallest component.
    It won't make sense to use it on its own, but is an essential building block.
    An ATOM📗 should not have dependencies to other elements.

    An ORGANISM📙 is the finished and ready to use component. It must have at least one element as dependency.
    As a rule of thumb, everything that has 100% width is an organism.

    A MOLECULE📘 can be a finished component and can be reused somewhere else but has never 100% width.
    It must contain at least one ATOM📗.

    Now, please tell me what do you wan to create:

    Type
    - a: for ATOM📗
    - m: for MOLECULE📘
    - o: for ORGANISM📙
  `));


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let currentStep = 0;
const FREE_TEXT_KEY = 'TEXT';
const STORE = {};

const A = 'a';
const M = 'm';
const O = 'o';

const STEPS = {
  0: {
    a: () => {
      currentStep++; // eslint-disable-line no-plusplus
      STORE.type = A;
    },
    m: () => {
      currentStep++; // eslint-disable-line no-plusplus
      STORE.type = M;
    },
    o: () => {
      currentStep++; // eslint-disable-line no-plusplus
      STORE.type = O;
    },
  },
};


rl.on('line', (line) => {
  const userInput = line.trim();

  if (STEPS[currentStep] && STEPS[currentStep][userInput]) {
    STEPS[currentStep][userInput]();
  } else if (STEPS[currentStep] && STEPS[currentStep][FREE_TEXT_KEY]) {
    STEPS[currentStep][FREE_TEXT_KEY](userInput);
  } else {
    console.log(chalk.red(outdent`

      Command not recognised, please try again

    `));
  }
});

rl.on('close', () => {
  rl.write('end');
});
