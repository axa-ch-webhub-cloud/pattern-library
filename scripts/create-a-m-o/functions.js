const chalk = require('chalk');
const outdent = require('outdent');

const getAMOType = (type) => {
  console.log(chalk.cyan(outdent`

    Ok good, you choose to create a new component of type ${chalk.bold(type)}.

    Now, tell me how your new component should be called

  `));
};

const prepareName = done => (userInput) => {
  const capitalizeFirstLetter = string => string
    .charAt(0)
    .toUpperCase() + string
    .slice(1);
  const camelCase = string => string
    .split(/[-_ ]+/)
    .map(capitalizeFirstLetter)
    .join('');
  const fileName = userInput.replace(/ /g, '-').toLowerCase();
  const className = `AXA${camelCase(fileName)}`;

  console.log(className);

  console.log(chalk.cyan(outdent`
    Ok good, we will setup all the files for your new component

    Class name: ${chalk.bold(className)}
    Folder name: ${chalk.bold(fileName)}
  `));

  done();
};

const createFiles = done => () => {

  
  done();
};


module.exports = {
  getAMOType,
  prepareName,
  createFiles,
};
