import PropTypes from 'prop-types';

import PropertyExistsException from '../utils/property-exists-exception';
import lifecycleLogger from '../utils/lifecycle-logger';
import dasherize from '../../dasherize';
import toProp from '../../to-prop';
import camelize from '../../camelize';
import debounce from '../../debounce';
import getAttribute from '../../get-attribute';
import fire from '../../fire';
import { AXA_EVENTS } from '../../ui-events';

const PROPERTY_WHITELIST = ['title', 'checked', 'disabled'];

const withUpdate = Base =>
  /**
   * Adds attribute observation and enables **First Class Props**.
   */
  class WithUpdate extends Base {
    static get observedAttributes() {
      const { propTypes } = this;
      const derivedAttributes = propTypes && Object.keys(propTypes).map(dasherize);

      return derivedAttributes;
    }

    constructor(options) {
      super(options);

      this._isConnected = false;
      this._props = {};
      this._hasKeys = {};
      this.updatedDebounced = debounce(() => this.updated && this.updated(), 50);
      const { constructor: { observedAttributes } } = this;

      // add DOM property getters/setters for related attributes
      if (Array.isArray(observedAttributes)) {
        observedAttributes.forEach((attr) => {
          const key = camelize(attr);
          const hasKey = key in this;

          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)(`\n<-> apply getter/setter for ${key} by _${attr}`);
          }

          if (PROPERTY_WHITELIST.indexOf(key) === -1 && hasKey) {
            throw new PropertyExistsException(key, this);
          }

          this._hasKeys[key] = hasKey;

          // @todo: may we should allow deletion by setting configurable: true
          Object.defineProperty(this, key, {
            get() {
              return this._props[key];
            },
            set(value) {
              // only update the value if it has actually changed
              // and only re-render if it has changed
              if (!this.shouldUpdateCallback(this._props[key], value)) {
                return;
              }

              this._props[key] = value;

              // sync DOM property if in white list
              if (hasKey) {
                super[key] = value;
              }

              if (this._isConnected && this._hasRendered) {
                if (ENV !== PROD) {
                  lifecycleLogger(this.logLifecycle)(`\n---> setter for ${key} by _${key}`);
                }

                this.updatedDebounced();
              }
            },
          });
        });
      }
    }

    /**
     * connectedCallback - description
     *
     * @return {type}  description
     */
    connectedCallback() {
      if (super.connectedCallback) {
        super.connectedCallback();
      }

      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)(`\n^^^ connectedCallback -> ${this.nodeName}#${this._id}`);
      }

      if (!this._isConnected) {
        this._isConnected = true;

        const { constructor: { observedAttributes } } = this;

        this.initialClassName = this.className;

        if (Array.isArray(observedAttributes)) {
          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)(`\n!!! observedAttributes start -> ${this.nodeName}#${this._id}`);
          }

          observedAttributes.forEach((attr) => {
            const key = camelize(attr);

            if (this.hasAttribute(attr)) {
              const value = getAttribute(this, attr);
              const hasKey = this._hasKeys[key];

              this._props[key] = value;

              if (hasKey) {
                super[key] = value;
              }
            }
          });

          this.checkPropTypes();

          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)(`\n??? observedAttributes end -> ${this.nodeName}#${this._id}`);
          }
        }
      }

      if (this.updated) {
        this.updated();
      }
    }

    /**
     * Default behaviour is to update on attribute addition, change or removal.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)(`+++ attributeChangedCallback -> ${this.nodeName}#${this._id} | ${name} from ${oldValue} to ${newValue}\n`);
      }

      // only update the value if it has actually changed
      // and only re-render if it has changed
      if (!this.shouldUpdateCallback(newValue, oldValue)) {
        return;
      }

      const key = camelize(name);

      // add, update attribute
      if (this.hasAttribute(name)) {
        this[key] = toProp(newValue, name);
      } else { // delete attribute
        this[key] = null;
      }

      this.checkPropTypes();

      // if value is updated, we presume that an axa on change event have to be triggered
      if (name === 'value' && newValue !== null) {
        fire(this, AXA_EVENTS.AXA_CHANGE, newValue, { bubbles: true, cancelable: true, composed: true });
      }
    }

    /**
     * A fast and simpler way to update multiple props in one go.
     * Especially useful for integrations and to prevent multiple re-renders.
     *
     * @param {{}} props - DOM properties to be updated.
     */
    setProps(props) {
      const { constructor: { observedAttributes = [] } } = this;
      const propsKeys = Object.keys(props);
      const filter = key => observedAttributes.indexOf(dasherize(key)) > -1;
      const { shouldUpdate } = propsKeys.filter(filter).reduce(this._reduceProps, { props, shouldUpdate: false });

      this.checkPropTypes();

      if (shouldUpdate && this._isConnected && this._hasRendered) {
        if (ENV !== PROD) {
          lifecycleLogger(this.logLifecycle)(`\n---> setProps for ${propsKeys.join(', ')}`);
        }

        if (this.updated) {
          this.updated();
        }
      }
    }

    /**
     * Props reducer for batch processing.
     *
     * @param {{}} props - The properties to be batch processed.
     * @param {Boolean} shouldUpdate - Is re-render necessary?
     * @param {String} key - the current property's key.
     * @returns {{props: {}, shouldUpdate: boolean}} - For the next accumulator iteration.
     */
    _reduceProps = ({ props, shouldUpdate }, key) => {
      const hasKey = this._hasKeys[key];

      if (PROPERTY_WHITELIST.indexOf(key) === -1 && hasKey) {
        throw new PropertyExistsException(key, this);
      }

      const name = `_${key}`;
      const value = props[key];
      const oldValue = this[name];

      if (!shouldUpdate && !this.shouldUpdateCallback(value, oldValue)) {
        return {
          props,
          shouldUpdate: false,
        };
      }

      this[name] = value;
      this._props[key] = value;

      if (hasKey) {
        super[key] = value;
      }

      return {
        props,
        shouldUpdate: true,
      };
    }

    /**
     * Check types at runtime.
     */
    checkPropTypes() {
      const { constructor: { propTypes, tagName } } = this;

      if (propTypes) {
        PropTypes.checkPropTypes(propTypes, this._props, 'prop', tagName);
      }
    }

    /**
     * Check if a re-render is really necessary.
     * Basic check does a shallow comparison.
     *
     * @param {*} newValue - the new value of an attribute.
     * @param {*} oldValue - the existing value of an attribute.
     * @returns {Boolean} - Returns `true` if attributes have changed, else `false`.
     */
    // eslint-disable-next-line class-methods-use-this
    shouldUpdateCallback(newValue, oldValue) {
      return newValue !== oldValue;
    }

    /**
     * disconnectedCallback - description
     *
     * @return {type}  description
     */
    disconnectedCallback() {
      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)(`$$$ disconnectedCallback -> ${this.nodeName}#${this._id}\n`);
      }

      this._isConnected = false;
    }
  };

export default withUpdate;
