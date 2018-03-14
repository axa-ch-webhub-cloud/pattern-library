import { BaseComponentGlobal } from '../_abstract/component-types';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';
import getAttributes from '../../js/get-attributes';

const patchReplaceAndRemoveChild = (refsStore) => {
  let lastParentNode;

  refsStore.forEach((ref) => {
    const { parentNode } = ref;
    const { replaceChild, removeChild } = parentNode;

    if (lastParentNode === parentNode) {
      return;
    }

    lastParentNode = parentNode;

    parentNode.replaceChild = function replaceChildPatch(newNode, oldNode) {
      const index = refsStore.indexOf(oldNode);

      if (index > -1) {
        refsStore.splice(index, 1, newNode);
      }

      replaceChild.call(this, newNode, oldNode);
    };

    parentNode.removeChild = function removeChildPatch(node) {
      const index = refsStore.indexOf(node);

      if (index > -1) {
        refsStore.splice(index, 1);
      }

      removeChild.call(this, node);
    };
  });
};

class AXATest extends BaseComponentGlobal {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes() { return ['foo']; }

  constructor() {
    super(styles, template);

    console.log(`constructor -> ${this.nodeName}`);

    console.log(this.children);

    // does this provide context (See docs for context) ?
    // this.enableContext()

    // or do you want to consume a specific context
    // this.selectContext('axa-context-provider');
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    console.log(`connectedCallback -> ${this.nodeName}`);

    this.className = `${this.initialClassName} m-test`;
    // Your DOM interaction here, but keep it decoupled.
    // If you don't have any, just remove this function
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`attributeChangedCallback -> ${this.nodeName} [${name}=${oldValue}] to [${name}=${newValue}]`);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    console.log(`disconnectedCallback -> ${this.nodeName}`);

    // Don't forget to cleanup :)
  }

  render() {
    // super.render();

    console.log(`render -> ${this.nodeName}`);

    const { _template: template } = this;

    if (template) {
      try {
        if (!this._hasRendered) {
          const childrenFragment = document.createDocumentFragment();
          const refsStore = [];

          while (this.firstChild) {
            refsStore.push(this.firstChild);
            childrenFragment.appendChild(this.firstChild);
          }

          this.refsStore = refsStore;
          this.childrenFragment = childrenFragment;
        }

        const items = template(getAttributes(this), this.childrenFragment);
        const renderFragment = document.createDocumentFragment();

        if (Array.isArray(items)) {
          items.forEach((item) => {
            renderFragment.appendChild(item);
          });
        } else if (items) {
          if (typeof items === 'string') {
            const err = new Error(THROWED_ERROR);
            // @TODO: implement log system
            console.error( // eslint-disable-line
              `\n%cWeb Component %c${this.nodeName}%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: ${err.stack}\n`, // eslint-disable-line
              'color: #580000; font-size: 14px; line-height:16px;',
              'background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;',
              'color: #580000; font-size: 14px; line-height:16px;',
            );
            throw err;
          }
          renderFragment.appendChild(items);
        }

        super.innerHTML = '';
        super.appendChild(renderFragment);

        // @todo: we may need to rerender upon replace/remove child
        patchReplaceAndRemoveChild(this.refsStore);
        this._hasRendered = true;
      } catch (err) {
        if (err.message !== THROWED_ERROR) {
          console.error( // eslint-disable-line
            `\n%cWeb Component %c${this.nodeName}%c has an error while loading its template:\n${err}\n\nStack Trace: ${err.stack}\n`,
            'color: #580000; font-size: 14px; line-height:16px;',
            'background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;',
            'color: #580000; font-size: 14px; line-height:16px;',
          );
        }
      }
    }
  }

  // monkey patching DOM APIs
  set innerText(text) {
    console.log(`set innerText -> ${text}`);

    const textNode = document.createTextNode(text);

    this.refsStore = [textNode];
    this.childrenFragment.appendChild(textNode);

    this.render();
  }

  set innerHTML(html) {
    console.log(`set innerHTML -> ${html}`);

    const div = document.createElement('div');

    div.innerHTML = html;

    this.refsStore = [];

    while (div.firstChild) {
      this.refsStore.push(div.firstChild);
      this.childrenFragment.appendChild(div.firstChild);
    }

    this.render();
  }

  appendChild(node) {
    console.log(`set appendChild -> ${node}`);

    this.refsStore.push(node);

    this.refsStore.forEach((ref) => {
      this.childrenFragment.appendChild(ref);
    });

    this.render();
  }
}

wcdomready(() => {
  window.customElements.define('axa-test', AXATest);
});

export default AXATest;
