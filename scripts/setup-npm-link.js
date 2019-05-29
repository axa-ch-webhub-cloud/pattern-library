/* eslint-disable no-console */
const { exec } = require('child_process');
const clipboardy = require('clipboardy');
const chalk = require('chalk');

const ls = exec('lerna ls --json');
const setGlobalNPMSymlinks = [];
const setLocalNPMLinks = [];

ls.stdout.on('data', data => {
  const packages = JSON.parse(data);
  packages.forEach(component => {
    setGlobalNPMSymlinks.push(`cd ${component.location} && npm link`);
    setLocalNPMLinks.push(`npm link ${component.name}`);
  });
});

ls.on('close', () => {
  const setGlobalSymlinks = exec(`${setGlobalNPMSymlinks.join(' & ')}`);
  setGlobalSymlinks.on('close', () => {
    console.log(
      chalk.blue(
        `Registered lerna packages are now globally symlinked. The reverse command for each package (\`npm link\`) has been copied to your clipboard.`
      ),
      '\n'
    );
    console.log(chalk.green(setLocalNPMLinks.join('\n')));
    clipboardy.writeSync(setLocalNPMLinks.join('\n'));
  });
});
