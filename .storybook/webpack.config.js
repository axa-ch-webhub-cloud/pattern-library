const path = require('path');
const base = path.resolve(process.cwd(), 'src');
const babelOptions = require('./.babelrc'); // get the babelrc file
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const fs = require('fs');

require('dotenv-extended').load();

// Global Import SCSS Materials -> SCSS Materials as they are always a dependency.
const globals = require(path.resolve(__dirname, '..', 'config', 'globals.js'))
  .map(item => `@import '${base}/${item}';`)
  .join('\n')
  .replace(/\\/g, '/'); // use '/' dir seps on win32, to satisfy sass-loader/LibSass; otherwise crash
;

// GATHER VERSION INFO FROM COMPONENTS

// synchronous directory-walker iterator
function *walkSync(dir, filter = /.*/, acceptable = () => true) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
      const pathToFile = path.join(dir, file);
      const isDirectory = fs.statSync(pathToFile).isDirectory();
      if (isDirectory) {
          yield *walkSync(pathToFile, filter, acceptable);
      } else if (filter.test(pathToFile) && acceptable(dir, file, pathToFile)) {
          yield pathToFile.split(path.sep);
      }
  }
}

// helpers
const requirePackageJSON = dir => fs.existsSync(path.join(dir, 'package.json'));

const clean = name => name.replace(/^@axa\-ch\//, 'axa-');

const justVersionInfo = info => info.replace(/[^A-Za-z0-9\.]/g, ''); // deliberate consequence: ignore caret

const pick = object => {
  const result = {};
  const components = Object.keys(object).filter( key => key.indexOf('@axa-ch/') === 0 );
  components.forEach( name => {
    result[clean(name)] = justVersionInfo(object[name]);
  });
  return result;
}

const currentDirectory = path.resolve(__dirname, '..');

const versionInfo = {};

// find all importable components ...
for (const file of walkSync(`src${path.sep}components`, /(?<!node_modules.*)package\.json$/, requirePackageJSON)) {
  // construct full path to component package.json
   const filePath = [currentDirectory, ...file].join(path.sep);
   // load package.json's content
   const packageJSON = require(filePath);
   // extract relevant key-value pairs
   const {name, version, dependencies = {}} = packageJSON;
   // harvest version info from them
   versionInfo[clean(name)] = {[clean(name)]: version, ...pick(dependencies)};
}

const stringifiedVersionInfo = JSON.stringify(versionInfo);

// END GATHER VERSION INFO FROM COMPONENTS

module.exports = ({ config }) => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '~/materials': path.join(base, 'components', 'materials'),
  });

  config.plugins.push(
    new webpack.DefinePlugin({__VERSION_INFO__: stringifiedVersionInfo})
  );

  config.module.rules.push(
    {
      test: /\.scss$/,
      loaders: [
        'to-string-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer({ grid: 'autoplace' })]
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            data: globals,
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.js$/,
      exclude: /node_modules\/(?!lit\-element|lit\-html|@axa\-ch)/,
      loader: 'babel-loader',
      options: babelOptions,
    },
    {
      test: /\.jsx/,
      exclude: /node_modules\/(?!lit\-element|lit\-html|@axa\-ch)/,
      loader: 'babel-loader',
      options: {...babelOptions, presets: [...babelOptions.presets]},
    },
    {
      test: /\CHANGELOG.md$/,
      use: [
        {
          loader: "html-loader"
        },
        {
          loader: "markdown-loader",
          options: {
            gfm: true,
            breaks: false // TODO: make it work
          }
        }
      ]
    }
  );

  config.watchOptions = {
    poll: 1000,
    ignored: ["node_modules"]
  };

  return config;
};
