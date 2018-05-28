import toProp from '../../to-prop';
import { lifecycleLogger } from './with-lifecycle';

const withUpdate = Base =>
  class extends Base {
    /**
     * Default behaviour is to re-render on attribute addition, change or removal.
     */
    attributeChangedCallback(name, newValue, oldValue) {
      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)(`+++ attributeChangedCallback -> ${this.nodeName}#${this._id} | ${name} from ${oldValue} to ${newValue}\n`);
      }

      const key = this.__attributeToPropertyMap[name];

      this[key] = toProp(newValue);
    }
  };

export default withUpdate;
