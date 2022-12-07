const fs = require('fs');
const pkg = require('../package.json');
const dependents = require('../data/dependents.json');

pkg.dependencies = dependents.reduce((a, v) => ({ ...a, [v]: 'latest' }), {});
fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));
