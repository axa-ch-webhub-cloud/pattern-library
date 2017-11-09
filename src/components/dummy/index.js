import { BaseComponentShadow } from '../_abstract/component-types';

class CoreDummy extends BaseComponentShadow {}

window.customElements.define('hello-world', CoreDummy);
