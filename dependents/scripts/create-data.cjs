const fs = require('fs');
const PackageDependents = require('package-dependents');
const { plibNpmModules } = require('../plib-npm-modules.cjs');

if (fs.existsSync('./data/dependents.json')) {
  fs.unlinkSync('./data/dependents.json');
}

exludeDependents = [
  '@axa-ch/alt-pod-agency-search',
  '@axa-ch/alt-pod-mortgage-calculator',
  '@axa-ch/alt-pod-chatbot',
  '@axa-ch/alt-pod-havarie',
  '@axa-ch/alt-pod-kmu-20',
  '@axa-ch/alt-pod-myaxa',
  '@axa-ch/testing-cpa',
  '@axa-ch/pod-webhub-dtidemo',
  'lit-js-design-system',
  'test-webpack-module-a',
  'test-webpack-module-b',
  'test-webpack-module-d',
  '@axa-ch/pod-skeleton-example',
  '@axa-ch/pod-react-skeleton-example',
  '@axa-ch/pod-react-auth-skeleton-example',
  '@axa-ch/pod-adaptive-cards-testings',
  '@axa-ch/pod-webhub-polyfills',
];

const dependents = new Set();
const promises = plibNpmModules.map(name =>
  PackageDependents(name, 'latest').then(packages => {
    packages.forEach(c => {
      if (
        !dependents.has(c.name) &&
        !plibNpmModules.includes(c.name) &&
        !exludeDependents.includes(c.name)
      ) {
        dependents.add(c.name);
      }
    });
  })
);

Promise.all(promises).then(() => {
  fs.writeFileSync(
    './data/dependents.json',
    JSON.stringify(Array.from(dependents))
  );
});
