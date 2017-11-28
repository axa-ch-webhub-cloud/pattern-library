import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';

let id = 65;

class Wrap extends BaseComponentGlobal {
  constructor() {
    super(styles, template);

    this.id = String.fromCharCode(id++);
  }

  connectedCallback() {
    console.log(`>>>> connected Wrap-${this.id}`);
    super.connectedCallback();

    this.className = 'a-wrap';
  }

  render() {
    console.log(`#### render Wrap-${this.id}`);
    super.render();
  }

  disconnectedCallback() {
    console.log(`<<<< disconnected Wrap-${this.id}`);
  }
}

window.customElements.define('axa-wrap', Wrap);

BaseComponentGlobal.appendGlobalStyles(styles);
