import camelize from '../../camelize';
import toProp from '../../to-prop';
import maybe from '../../maybe';

// eslint-disable-next-line
const lifecycleLogger = maybe((...args) => console.log(...args))()(true);

export const withUpdate = Base =>
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
