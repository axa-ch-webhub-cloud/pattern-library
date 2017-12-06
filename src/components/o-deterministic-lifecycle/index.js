import { BaseComponentGlobal } from '../_abstract/component-types';
import { domready } from '../../js/domready';

class Parent extends BaseComponentGlobal {
  constructor() {
    super();

    console.log('Parent -> constructor');
  }

  connectedCallback() {
    super.connectedCallback();

    console.log('Parent > connectedCallback');
  }

  attributesChangedCallback() {
    super.attributesChangedCallback();

    console.log('Parent - attributesChangedCallback');
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    console.log('Parent < disconnectedCallback');
  }
}

class Child extends BaseComponentGlobal {
  constructor() {
    super();

    console.log('Child -> constructor');
  }

  connectedCallback() {
    super.connectedCallback();

    console.log('Child > connectedCallback');
  }

  attributesChangedCallback() {
    super.attributesChangedCallback();

    console.log('Child - attributesChangedCallback');
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    console.log('Child < disconnectedCallback');
  }
}

domready(() => {
  window.customElements.define('axa-child', Child);
});

domready(() => {
  window.customElements.define('axa-parent', Parent);
});
