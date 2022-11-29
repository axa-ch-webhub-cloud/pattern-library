const fs = require('fs');
const dependents = require('../data/dependents.json');
const { plibNpmModules } = require('../plib-npm-modules.cjs');

const dependentsData = dependents.map(dependent => {
  const dependentData = {
    name: dependent,
    usePolyfill: false,
    useWebcomponents: false,
    useReact: false,
    useNativeIife: false,
    components: {},
  };

  if (fs.existsSync(`./node_modules/${dependent}/package.json`)) {
    const pkg = require(`${dependent}/package.json`);
    if (pkg.dependencies) {
      plibNpmModules.forEach(moduleName => {
        if (pkg.dependencies[moduleName]) {
          dependentData.components[moduleName] = pkg.dependencies[moduleName];
        }
        if (
          pkg.dependencies[moduleName] &&
          moduleName === '@axa-ch/patterns-library-polyfill'
        ) {
          dependentData.usePolyfill = true;
        }
      });
    }
  }

  if (fs.existsSync(`./node_modules/${dependent}/lib/index.js`)) {
    const data = fs.readFileSync(`./node_modules/${dependent}/lib/index.js`);
    // Who use webcomponents
    if (data.includes(`from ${dependent}`)) {
      dependentData.useWebcomponents = true;
    }
    // Who use react components
    if (data.includes('lib/index.react')) {
      dependentData.useReact = true;
    }
  }

  if (fs.existsSync(`./node_modules/${dependent}/index.html`)) {
    // Who use native iife components
    const data = fs.readFileSync(`./node_modules/${dependent}/index.html`);
    if (data.includes(`/dist/index.js`)) {
      dependentData.useNativeIife = true;
    }
    // Who use webcomponents
    if (data.includes(`from ${dependent}`)) {
      dependentData.useWebcomponents = true;
    }
  }

  return dependentData;
});

if (fs.existsSync('./data/dependents-analyse.json')) {
  fs.unlinkSync('./data/dependents-analyse.json');
}

fs.writeFileSync(
  './data/dependents-analyse.json',
  JSON.stringify(dependentsData)
);
