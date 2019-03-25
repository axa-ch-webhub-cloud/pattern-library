const { dependencies } = require('../package.json');

const ALLOWED_DEPENDENCIES = [
  '@skatejs/val',
  '@webcomponents/webcomponentsjs',
  'lit-element',
  'lit-html'
];

const { length : found } = Object.keys(dependencies).filter(
  key => !~ALLOWED_DEPENDENCIES.indexOf(key)
);

if (found) {
  throw new Error(`
    A new dependency has been added.

    Please make sure that it is a dependency that is necessary for end users

    If not, then add it as devDependency.

    `
  )
}

process.exit(0);
