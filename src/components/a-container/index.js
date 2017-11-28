import styles from './index.scss';
import template from './_template'
import { BaseComponentGlobal } from '../_abstract/component-types';

let id = 65;

class Container extends BaseComponentGlobal {
  constructor() {
    super(styles, template);

    this.id = String.fromCharCode(id++);
  }

  connectedCallback() {
    console.log(`>>>> connected Container-${this.id}`);
    super.connectedCallback();

    this.className = 'a-container';
  }

  render() {
    console.log(`#### render Container-${this.id}`);
    super.render();
  }

  disconnectedCallback() {
    console.log(`<<<< disconnected Container-${this.id}`);
  }
}

window.customElements.define('axa-container', Container);

BaseComponentGlobal.appendGlobalStyles(styles);
