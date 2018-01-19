const nodemon = require('nodemon');
const polyfill = require('./bundles/polyfill');
const app = require('./bundles/app');
const readline = require('readline');
const components = require('./bundles/components');

let started = false;

nodemon({
  ext: 'js,scss',
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
    app();
    const { bundleSingleFile } = components;
    // if file is not in src/app , then bundleSingleFile
    arr.forEach(f => !~f.indexOf('src/app') ? bundleSingleFile(f.replace('.scss', '.js')) : () => {});
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
