const fs = require('fs');
const mkdirp = require('mkdirp'); // eslint-disable-line import/no-extraneous-dependencies
const outdent = require('outdent');
const chalk = require('chalk');

const CWD = process.cwd();
const reAMO = /^(?:a|m|o)$/;
const handleError = (err) => {
  if (err) {
    console.error(err); // eslint-disable-line
    process.exit(1);
  }
};

process.stdin.setEncoding('utf8');

console.log(chalk.cyan(outdent`

    Hello Dear developer, thank you for contributing with us. 😊

    I will help you to create a new web component 😎.

    You can choose between ATOM📗, MOLECULE📘 or ORGANISM📙.

    As a general guideline, an ATOM📗 is indivisible and is the smallest component.
    It won't make sense to use it on its own, but is an essential building block. An ATOM📗 should not have dependencies to other elements

    An ORGANISM📙 is the finished and ready to use component. It must have at least one element as dependency.

    A MOLECULE📘 is a not completely finished component and can be reused somewhere else. It must contain at least one ATOM📗.

    Now, please tell me what do you wan to create
  `));

let element = '';

const mapElement = {
  a: 'ATOM📗',
  m: 'MOLECULE📘',
  o: 'ORGANISM📙',
};


const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);
const camelCase = string => string.split(/[-_]+/).map(capitalizeFirstLetter).join('');

const displayNameText = () => {
  console.log(chalk.white(outdent`

    Please enter the name of the new ${mapElement[element]} ( something that make sense 😉 ).

    `));
};

const displayElementSelector = () => {
  console.log(chalk.white(outdent`

      Press:

      1 for ATOM 📗
      2 for MOLECULE 📘
      3 for ORGANISM 📙

    `));
};

const getClassName = _name => `AXA${camelCase(_name)}`;

const writeIndexJs = (path, _name) => {
  const className = getClassName(_name);

  fs.writeFileSync(
    `${path}/index.js`,
    outdent`import PropTypes from 'prop-types';
    
      import BaseComponentGlobal from '../../js/abstract/base-component-global';
      import defineOnce from '../../js/define-once';
      // import the styles used for this component
      import styles from './index.scss';
      // import the template used for this component
      import template from './_template';

      class ${className} extends BaseComponentGlobal {
        static tagName = 'axa-${_name}'
        
        // specify runtime type-checking here, if you use custom attributes
        // this will also derived your needed observed attributes automatically for you
        static propTypes = {
          classes: PropTypes.string,
        }

        // Only use this if you need to observe attributes other than your prop-types!
        // Specify observed attributes so that attributeChangedCallback will work,
        // this is essential for external re-rendering trigger.
        // static get observedAttributes() {
        //  return ['classes'];
        // }

        constructor() {
          super({ styles, template });

          // does this provide context (See docs for context) ?
          // this.provideContext()

          // or do you want to consume a specific context
          // this.consumeContext('axa-context-provider');
        }

        /**
         * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
         */
        connectedCallback() {
          super.connectedCallback();

          this.className = \`\${this.initialClassName} ${element}-${_name}\`;
          // Your DOM interaction here, but keep it decoupled.
          // If you don't have any, just remove this function
        }

        // You have some special logic? Or need to update the web-components DOM node itself?
        // Then don't forget to make sure that incremental rendering works properly.
        // attributeChangedCallback(name, oldValue, newValue) {
        //   super.attributeChangedCallback(name, oldValue, newValue);
        // }

        // You may want to update stuff before rendering.
        // willRenderCallback(initial) {
        // }

        // You may want to update staff after rendering
        // didRenderCallback(initial) {
        // }

        disconnectedCallback() {
          super.disconnectedCallback();

          // Don't forget to cleanup :)
        }

        // Do you consume context?
        // contextCallback(contextNode) {
        //   contextNode is now available.
        // }
      }

      defineOnce(${className}.tagName, ${className});

      export default ${className};

    `
    , handleError,
  );
};

const writeIndexScss = (path, _name) => {
  fs.writeFileSync(
    `${path}/index.scss`,
    outdent`
      .${element}-${_name} {
        display: block;

        // IMPORTANT: make sure to deal with inherited CSS properties here, like text-align!
      }

    `
    , handleError,
  );
};

const writePreviewAndHtml = (path, _name) => {
  fs.writeFileSync(
    `${path}/_preview.html`,
    outdent`<axa-${_name} class="is-custom-element-disconnected" classes="${element}-${_name}"></axa-${_name}>
    `
    , handleError,
  );
  fs.writeFileSync(
    `${path}/_example.html`,
    outdent`<!--Please create here a HTML example by using just default HTML tags-->
    `
    , handleError,
  );
};

const writeTemplateJs = (path) => {
  fs.writeFileSync(
    `${path}/_template.js`,
    outdent`import html from 'nanohtml';

      export default ({ classes }) => html\`
        <article class=\${classes}>Ready to start</article>
      \`;

    `,
    handleError,
  );
};

const updateReactExports = (_element, _name) => {
  if (!reAMO.test(_element)) {
    return;
  }

  const className = getClassName(_name);
  const classNameWC = `${className}WC`;

  fs.writeFileSync(
    `${CWD}/src/js/react-exports.js`,
    outdent`

      import ${classNameWC} from '../components/${_element}-${_name}/';
      export const ${className} = withReact(${classNameWC});
    `,
    { flag: 'a' },
    handleError,
  );
};

const updateIndex = (_element, _name) => {
  if (!reAMO.test(_element)) {
    return;
  }

  const className = getClassName(_name);

  fs.writeFileSync(
    `${CWD}/src/index.js`,
    outdent`

      export { default as ${className} } from './components/${_element}-${_name}';
    `,
    { flag: 'a' },
    handleError,
  );
};

const createBoilerplate = (_name) => {
  const path = `${CWD}/src/components/${element}-${_name}`;

  if (fs.existsSync(`${path}/index.js`)) {
    console.log(chalk.cyan('\nComponent already exists. Please start over again 😥 \n')); //eslint-disable-line
    element = '';
    displayElementSelector();
  } else {
    console.log(chalk.cyan(outdent`

      I'm creating ${element === 'a' ? 'an' : 'a'} ${mapElement[element]} called ${_name} for you...

      `));

    mkdirp(`${path}`, () => {
      writeIndexJs(path, _name);
      writeIndexScss(path, _name);
      writePreviewAndHtml(path, _name);
      writeTemplateJs(path);
      updateReactExports(element, _name);
      updateIndex(element, _name);
      console.log(chalk.cyan(outdent`

          Created under ${path}
          happy Coding 😊

        `));

      process.exit(0);
    });
  }
};


process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  switch (parseInt(chunk, 10)) {
    case 1:
      element = 'a';
      displayNameText();
      break;
    case 2:
      element = 'm';
      displayNameText();
      break;
    case 3:
      element = 'o';
      displayNameText();
      break;
    default:
      if (element && chunk) {
        createBoilerplate(chunk.trim().replace(/\s+/g, '-'));
      } else {
        displayElementSelector();
      }
      break;
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});
