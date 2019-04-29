const outdent = require('outdent');
const chalk = require('chalk');
const readline = require('readline');

const { getAMOType, prepareName, createFiles } = require('./functions.js');

process.stdin.setEncoding('utf8');

console.log(
  chalk.cyan(outdent`
    Hello Dear developer, thank you for contributing with us. 😊

    I will help you to create a new web component 😎.

    You can choose between ATOM📗, MOLECULE📘 or ORGANISM📙.

    As a general guideline, an ATOM📗 is a small component.
    An ATOM📗 does not have dependencies to other components.

    A MOLECULE📘is most likely your default choice unless it's a much bigger component and not a simple atom.

    An ORGANISM📙 is a much bigger component, containing multiple molecules.
    i.e (header, footer, navigation, image gallery)

    Now, please tell me what do you wan to create:

    Type
    - a: for ATOM📗
    - m: for MOLECULE📘
    - o: for ORGANISM📙
  `)
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let currentStep = 0;
const FREE_TEXT_KEY = 'TEXT';
let STORE = {};

const A = 'a';
const M = 'm';
const O = 'o';

const reset = () => {
  currentStep = 0;
  STORE = {};

  console.log(
    chalk.yellow(outdent`
    Reset, your choices. Select again a AMO Type
  `)
  );
};

const STEPS = {
  0: {
    a: () => {
      currentStep++; // eslint-disable-line no-plusplus
      STORE.type = A;
      getAMOType(A);
    },
    m: () => {
      currentStep++; // eslint-disable-line no-plusplus
      STORE.type = M;
      getAMOType(M);
    },
    o: () => {
      currentStep++; // eslint-disable-line no-plusplus
      STORE.type = O;
      getAMOType(O);
    },
  },
  1: {
    [FREE_TEXT_KEY]: prepareName(({ className, fileName }) => {
      currentStep++; // eslint-disable-line no-plusplus

      console.log(
        chalk.yellow(outdent`

        I will create NOW the new component.
        Press ${chalk.bold('y')} for yes and ${chalk.bold('n')} for exit

      `)
      );

      STORE.className = className;
      STORE.fileName = fileName;
    }),
    n: reset,
  },
  2: {
    y: createFiles(STORE, A, M, O, () => {
      currentStep++; // eslint-disable-line no-plusplus

      console.log(
        chalk.yellow(outdent`

      Done! Happy coding 🍻🍻

      `)
      );

      process.exit();
    }),
    n: () => {
      process.exit();
    },
  },
};

rl.on('line', line => {
  const userInput = line.trim();

  if (STEPS[currentStep] && STEPS[currentStep][userInput]) {
    STEPS[currentStep][userInput]();
  } else if (STEPS[currentStep] && STEPS[currentStep][FREE_TEXT_KEY]) {
    STEPS[currentStep][FREE_TEXT_KEY](userInput);
  } else {
    console.log(
      chalk.red(outdent`

      Command not recognised, please try again

    `)
    );
  }
});

rl.on('close', () => {
  rl.write('end');
});
