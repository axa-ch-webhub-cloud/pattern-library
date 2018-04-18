#!/usr/bin/env node
const SVGSpriter = require('svg-sprite');
const fs = require('fs');
const File = require('vinyl');
const path = require('path');
const mkdirp = require('mkdirp');
const glob = require('glob');
const constants = require('../constants');

const CWD = process.cwd();
const ENV = process.argv[2];

const destAssets = ENV === constants.ENV.PROD ? 'dist/assets' : '.tmp/assets';

// Create spriter instance (see below for `config` examples)
const spriter = new SVGSpriter({
  dest: destAssets,
  mode: {
    symbol: {
      render: {},
    },
  },
});

// Add SVG source files — the manual way ...
glob.glob('src/assets/icons/**/*.svg', { CWD }, (err, files) => {
  files.forEach((file) => {
    // Create and add a vinyl file instance for each SVG
    spriter.add(new File({
      path: path.join(CWD, file), // Absolute path to the SVG file
      base: CWD, // Base path (see `name` argument)
      contents: fs.readFileSync(path.join(CWD, file)), // SVG file contents
    }));
  });

  spriter.compile((error, result /* , data */) => {
    const { sprite } = result.symbol;
    // Recursively create directories as needed
    mkdirp.sync(`${destAssets}/icons`);
    // Write the generated resource to disk
    fs.writeFileSync(`${destAssets}/icons/icons.svg`, sprite.contents);
    console.log(`\nIcons sprite generated to: ${destAssets}/icons/icons.svg\n`);
  });
});
