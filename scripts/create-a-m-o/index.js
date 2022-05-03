const outdent = require('outdent');
const chalk = require('chalk');
const readline = require('readline');

const { getAMOType, prepareName, createFiles } = require('./functions');

process.stdin.setEncoding('utf8');

// eslint-disable-next-line no-console
console.log(
  chalk.cyan(outdent`
    Hello, dear developer, thank you for contributing to us. 😊

    I will help you create a new web component 😎.

    In terms of granularity, you can choose between ATOM📗, MOLECULE📘 or ORGANISM📙.

    As a general guideline, an ATOM📗 is a small component.
    An ATOM📗 does not depend on other components.

    A MOLECULE📘 is most likely your default choice, unless it's a much bigger component and not a simple atom.

    An ORGANISM📙 is a much bigger component, containing multiple molecules.
    Example organisms would be a header, footer, navigation, or an image gallery.

    Now, please tell me what kind of component to create for you:

    Type one of
    - a: for ATOM📗
    - m: for MOLECULE📘
    - o: for ORGANISM📙
    and submit with Enter:

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

  // eslint-disable-next-line no-console
  console.log(
    chalk.yellow(outdent`
    Reset your choices. Select again an a-m-o type
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

      // eslint-disable-next-line no-console
      console.log(
        chalk.yellow(outdent`

        I am creating the new component *now*.
        Press ${chalk.bold('y')} for yes, or ${chalk.bold('n')} to exit,
        followed by Enter:

      `)
      );

      STORE.className = className;
      STORE.fileName = fileName;
    }),
    n: reset,
  },
  2: {
    y: createFiles(STORE, A, M, O, folder => {
      currentStep++; // eslint-disable-line no-plusplus

      // eslint-disable-next-line no-console
      console.log(
        chalk.yellow(outdent`

        I am done! Happy coding 🍻🍻!
        Your new component lives here: ${folder}.
        Make sure to terminate any running 'npm start'
        and re-start to see your new component in the browser.

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
    // eslint-disable-next-line no-console
    console.log(
      chalk.red(outdent`

      I don't understand this command, please try again!

    `)
    );
  }
});

rl.on('close', () => {
  rl.write('end');
});
