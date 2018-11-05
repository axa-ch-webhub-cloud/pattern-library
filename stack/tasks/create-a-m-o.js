const fs = require('fs');
const mkdirp = require('mkdirp'); // eslint-disable-line import/no-extraneous-dependencies
const readline = require('readline');
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
let componentName = '';
let isBuiltin = false;
let buildinElement = '';

const mapElement = {
  a: 'ATOM📗',
  m: 'MOLECULE📘',
  o: 'ORGANISM📙',
};

const getNativeElementConstructor = (tag) => {
  switch (tag) {
    case 'a':
      return 'HTMLAnchorElement';
    case 'area':
      return 'HTMLAreaElement';
    case 'audio':
      return 'HTMLAudioElement';
    case 'br':
      return 'HTMLBRElement';
    case 'base':
      return 'HTMLBaseElement';
    case 'body':
      return 'HTMLBodyElement';
    case 'button':
      return 'HTMLButtonElement';
    case 'canvas':
      return 'HTMLCanvasElement';
    case 'dl':
      return 'HTMLDListElement';
    case 'datalist':
      return 'HTMLDataListElement';
    case 'details':
      return 'HTMLDetailsElement';
    case 'dialog':
      return 'HTMLDialogElement';
    case 'dir':
      return 'HTMLDirectoryElement';
    case 'div':
      return 'HTMLDivElement';
    case 'document':
      return 'HTMLDocument';
    case 'embed':
      return 'HTMLEmbedElement';
    case 'fieldset':
      return 'HTMLFieldSetElement';
    case 'font':
      return 'HTMLFontElement';
    case 'form':
      return 'HTMLFormElement';
    case 'frame':
      return 'HTMLFrameElement';
    case 'frameset':
      return 'HTMLFrameSetElement';
    case 'hr':
      return 'HTMLHRElement';
    case 'head':
      return 'HTMLHeadElement';
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return 'HTMLHeadingElement';
    case 'html':
      return 'HTMLHtmlElement';
    case 'iframe':
      return 'HTMLIFrameElement';
    case 'img':
      return 'HTMLImageElement';
    case 'input':
      return 'HTMLInputElement';
    case 'li':
      return 'HTMLLIElement';
    case 'label':
      return 'HTMLLabelElement';
    case 'legend':
      return 'HTMLLegendElement';
    case 'link':
      return 'HTMLLinkElement';
    case 'map':
      return 'HTMLMapElement';
    case 'marquee':
      return 'HTMLMarqueeElement';
    case 'media':
      return 'HTMLMediaElement';
    case 'menu':
      return 'HTMLMenuElement';
    case 'meta':
      return 'HTMLMetaElement';
    case 'meter':
      return 'HTMLMeterElement';
    case 'del':
      return 'HTMLModElement';
    case 'ins':
      return 'HTMLModElement';
    case 'ol':
      return 'HTMLOListElement';
    case 'object':
      return 'HTMLObjectElement';
    case 'obtgroup':
      return 'HTMLOptGroupElement';
    case 'option':
      return 'HTMLOptionElement';
    case 'output':
      return 'HTMLOutputElement';
    case 'p':
      return 'HTMLParagraphElement';
    case 'param':
      return 'HTMLParamElement';
    case 'picture':
      return 'HTMLPictureElement';
    case 'pre':
      return 'HTMLPreElement';
    case 'progress':
      return 'HTMLProgressElement';
    case 'quote':
      return 'HTMLQuoteElement';
    case 'script':
      return 'HTMLScriptElement';
    case 'select':
      return 'HTMLSelectElement';
    case 'source':
      return 'HTMLSourceElement';
    case 'span':
      return 'HTMLSpanElement';
    case 'style':
      return 'HTMLStyleElement';
    case 'caption':
      return 'HTMLTableCaptionElement';
    case 'td':
      return 'HTMLTableCellElement';
    case 'th':
      return 'HTMLTableCellElement';
    case 'col':
      return 'HTMLTableColElement';
    case 'colgroup':
      return 'HTMLTableColElement';
    case 'table':
      return 'HTMLTableElement';
    case 'tr':
      return 'HTMLTableRowElement';
    case 'thead':
    case 'tfoot':
    case 'tbody':
      return 'HTMLTableSectionElement';
    case 'template':
      return 'HTMLTemplateElement';
    case 'textarea':
      return 'HTMLTextAreaElement';
    case 'title':
      return 'HTMLTitleElement';
    case 'track':
      return 'HTMLTrackElement';
    case 'ul':
      return 'HTMLUListElement';
    case 'video':
      return 'HTMLVideoElement';

    default:
      return 'HTMLElement';
  }
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

      a for ATOM 📗
      m for MOLECULE 📘
      o for ORGANISM 📙

    `));
};

const displayIsBuiltinElementCheck = () => {
  console.log(chalk.white(outdent`
      Are you extending built-in elements? [y/n]
    `));
};
const whichElementDoYouExtend = () => {
  console.log(chalk.white(outdent`

      Alright. We need more information.
      Which built-in element do you want to extend?

      Please enter the tag name and press enter.

    `));
};

const getClassName = _name => `AXA${camelCase(_name)}`;

const writeIndexJs = (path, _name) => {
  const className = getClassName(_name);
  const nativeElementConstructor = getNativeElementConstructor(buildinElement);
  const BaseConstructor = isBuiltin ? `${nativeElementConstructor}Base` : 'BaseComponentGlobal';

  fs.writeFileSync(
    `${path}/index.js`,
    outdent`import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

      ${isBuiltin ?
        `import { withBase, withAllHocs } from '../../js/abstract/hocs';`
      :
        `import ${BaseConstructor} from '../../js/abstract/base-component-global';`
      }

      import defineOnce from '../../js/define-once';
      // import the styles used for this component
      import styles from './index.scss';
      // import the template used for this component
      import template from './_template';

      ${isBuiltin ?
        `const ${BaseConstructor} = withAllHocs(withBase(${nativeElementConstructor}));`
      : ''}

      class ${className} extends ${BaseConstructor} {
        static tagName = 'axa-${_name}'
        ${isBuiltin ? `static buildinTagName = '${buildinElement}'` : ''}

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
        
        // Always use init if you want to construct your element
        // never use the constructor directly, we call init for you with the proper context
        // @link https://github.com/WebReflection/document-register-element#v1-caveat
        init() {
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

      ${isBuiltin ?
        `defineOnce(${className}.tagName, ${className}, { extends: '${buildinElement}' });`
      :
        `defineOnce(${className}.tagName, ${className});`
      }

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
  const markup = isBuiltin ?
    outdent`<${buildinElement} is="axa-${_name}" classes="${element}-${_name}"></${buildinElement}>
    `
    :
    outdent`<axa-${_name} classes="${element}-${_name}"></axa-${_name}>
    `;

  fs.writeFileSync(
    `${path}/_preview.html`,
    markup
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

// @todo: this should be a clean state machine
const CLI_GET_ATOMIC_TYPE = 'CLI_GET_ATOMIC_TYPE';
const CLI_READ_ELEMENT_NAME = 'CLI_READ_ELEMENT_NAME';
const CLI_GET_BUILTIN = 'CLI_GET_BUILTIN';
const CLI_READ_BUILTIN_NAME = 'CLI_READ_BUILTIN_NAME';
const CLI_FINISH = 'CLI_FINISH';
let CLI_STATE = CLI_GET_ATOMIC_TYPE;
const reWhitespaceSep = /\s+/g;
const ELEMENT_NAME_SEP = '-';

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  const input = chunk && chunk.trim();

  switch (CLI_STATE) {
    case CLI_GET_ATOMIC_TYPE:
      switch (input) {
        case 'a':
        case 'm':
        case 'o':
          element = input;
          CLI_STATE = CLI_READ_ELEMENT_NAME;
          displayNameText();
          break;

        default:
          displayElementSelector();
      }
      break;

    case CLI_READ_ELEMENT_NAME:
      if (input) {
        componentName = input.replace(reWhitespaceSep, ELEMENT_NAME_SEP);
        CLI_STATE = CLI_GET_BUILTIN;
        displayIsBuiltinElementCheck();
      } else {
        displayNameText();
      }
      break;

    case CLI_GET_BUILTIN:
      switch (input) {
        case 'y':
          isBuiltin = true;
          whichElementDoYouExtend();
          CLI_STATE = CLI_READ_BUILTIN_NAME;
          break;
        case 'n':
          isBuiltin = false;
          CLI_STATE = CLI_FINISH;
          createBoilerplate(componentName);
          break;

        default:
          displayIsBuiltinElementCheck();
      }
      break;

    case CLI_READ_BUILTIN_NAME:
      if (input) {
        buildinElement = input.replace(reWhitespaceSep, ELEMENT_NAME_SEP);
        CLI_STATE = CLI_FINISH;
        createBoilerplate(componentName);
      } else {
        displayIsBuiltinElementCheck();
      }
      break;

    case CLI_FINISH:
      break;
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});
