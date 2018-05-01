const nodemon = require('nodemon');
const polyfill = require('./bundles/polyfill');
const app = require('./bundles/app');
const readline = require('readline');
const components = require('./bundles/components');

const SRC_COMPONENTS = 'src/components/';

let started = false;

nodemon({
  ext: 'js,jsx,scss',
  watch: './src',
  script: './stack/server',
  args: ['DEV'],
}).on('start', () => {
  if (!started) {
    polyfill();
    app();
    components.bundleAllFiles();
    started = true;
  }
}).on('crash', () => {
  process.exit(1);
}).on('restart', (arr) => {
  if (arr && arr.length) {
    const { bundleSingleFile } = components;
    let compPaths = arr.filter(f => ~f.indexOf('src/app') || ~f.indexOf('src/components'));
    if (compPaths.length === arr.length) {
      // if file is not in src/app , then bundleSingleFile
      compPaths = compPaths.map((f) => {
        const split = f.split(SRC_COMPONENTS);
        if (split.length === 2) {
          const compName = split[1].split('/');
          if (compName[0]) {
            return `${split[0]}${SRC_COMPONENTS}${compName[0]}/index.js`;
          }
          return f;
        }
        return f;
      });

      compPaths.forEach(f => !~f.indexOf('src/app') ? bundleSingleFile(f.replace('.scss', '.js')) : () => {});
    } else {
      // TODO: you can access the file in the bundle of rollup and read the dependecy tree.
      // TODO: So here we should have a map with all depedndecies and trigger only those who include the utility js.
      components.bundleAllFiles();
    }
    app();
  }
});

const processOnClose = () => {
  nodemon.emit('quit');
  process.exit();
  started = false;
};

process.on('uncaughtException', processOnClose);
process.on('SIGTERM', processOnClose);

if (process.platform === 'win32') {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('SIGINT', () => {
    process.emit('SIGINT');
  });
}

process.on('SIGINT', processOnClose);
