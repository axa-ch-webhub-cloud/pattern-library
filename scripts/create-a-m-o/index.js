const outdent = require('outdent');
const chalk = require('chalk');

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
  `));
