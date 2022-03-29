const glob = require('glob');
const chalk = require('chalk');
const outdent = require('outdent');
const fs = require('fs');
const { sep } = require('path');
const { dependencies } = require('../package.json');

const ALLOWED_CATEGORIES = [
  '00-materials',
  '05-utils',
  '10-atoms',
  '20-molecules',
  '30-organisms',
]

const ALLOWED_DEPENDENCIES = [
  '@skatejs/val',
  '@webcomponents/webcomponentsjs',
  '@ungap/global-this',
  'lit',
];

console.log(chalk.cyan(outdent`
  
  👉 Testing project constraints...
`));

const { length : found } = Object.keys(dependencies).filter(
  key => ALLOWED_DEPENDENCIES.indexOf(key) === -1
);

if (found) {
  throw new Error(`
    A new dependency has been added.

    Please make sure that it is a dependency that is necessary for end users

    If not, then add it as devDependency.

    `
  )
}

// get all components and test if there is any package json with main field or not allowed categories
const files = glob.sync(`src${sep}components${sep}*(${ALLOWED_CATEGORIES.join('|')})${sep}*${sep}index.js`);

files.forEach((file) => {
  const pkgPath = file.replace('index.js', 'package.json');
  if (fs.existsSync(pkgPath)) {
    const pkgData = fs.readFileSync(pkgPath, 'UTF-8');
    let pkg
    try {
      pkg = JSON.parse(pkgData);
    } catch (e) {
      throw new Error(`Package json in path ${pkgPath} has a problem. Err: ${e}`);
    }
    if (pkg && pkg.main) {
      throw new Error(
        chalk.red(outdent`

          The package.json ${pkgPath} has a "main":"${pkg.main}"
          key/value pair which is not allowed to exist in the source code.

          Maybe your last build or publish broke unexpectedly.
          How to fix this: Remove all main fields in the package.jsons of all components and try again.
          For your information: Main field will be added during build or publish and after it finishes is going to be removed.

          `)
      );
    }
  }
});

// Test if there are not allowed categories
const allFiles = glob.sync(`src${sep}components${sep}*${sep}**${sep}*.js`);

allFiles.forEach((file) => {
  // file is like this: src/components/20-molecules/datepicker/index.js
  const { 2: category } = file.split(sep);
  if (ALLOWED_CATEGORIES.indexOf(category) === -1) {
    throw new Error(
      chalk.red(outdent`

        The category ${category} is not allowed!

        Allowed categories are: ${ALLOWED_CATEGORIES.join(', ')}
        `)
    );
  }
});

console.log(chalk.green(outdent`

  👉 All project constraints are met
`));

process.exit(0);
