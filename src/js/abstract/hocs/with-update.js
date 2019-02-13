import PropTypes from "../../prop-types";

import lifecycleLogger from "../utils/lifecycle-logger";
import dasherize from "../../dasherize";
import toProp from "../../to-prop";
import camelize from "../../camelize";
import debounce from "../../debounce";
import getAttribute from "../../get-attribute";
import fire from "../../fire";
import { AXA_EVENTS } from "../../ui-events";

const withUpdate = Base =>
  /**
   * Adds attribute observation and enables **First Class Props**.
   */
  class WithUpdate extends Base {
    static get observedAttributes() {
      const { propTypes } = this;
      const derivedAttributes =
        propTypes && Object.keys(propTypes).map(dasherize);

      return derivedAttributes;
    }

    init(options) {
      super.init(options);

      this._isConnected = false;
      this.props = {};
      this.updatedDebounced = debounce(
        () => this.updated && this.updated(),
        50
      );

      const {
        constructor: { observedAttributes }
      } = this;

      // add DOM property getters/setters for related attributes
      if (Array.isArray(observedAttributes)) {
        observedAttributes.forEach(attr => {
          const key = camelize(attr);

          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)(
              `\n<-> apply getter/setter for ${key} by _${attr}`
            );
          }
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
        lifecycleLogger(this.logLifecycle)(
          `\n^^^ connectedCallback -> ${this.nodeName}#${this._id}`
        );
      }

      if (!this._isConnected) {
        this._isConnected = true;

        const {
          constructor: { observedAttributes }
        } = this;

        this.initialClassName = this.className;

        if (Array.isArray(observedAttributes)) {
          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)(
              `\n!!! observedAttributes start -> ${this.nodeName}#${this._id}`
            );
          }

          const {
            constructor: { propTypes }
          } = this;

          observedAttributes.forEach(attr => {
            const key = camelize(attr);

            if (this.hasAttribute(attr)) {
              const value = getAttribute(this, attr, propTypes[key]);

              this.props[key] = value;
            }
          });

          this.checkPropTypes();

          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)(
              `\n??? observedAttributes end -> ${this.nodeName}#${this._id}`
            );
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
      // super important to call throuth the prototype chain, so that lazy initialisation can happen
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(name, oldValue, newValue);
      }

      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)(
          `+++ attributeChangedCallback -> ${this.nodeName}#${
            this._id
          } | ${name} from ${oldValue} to ${newValue}\n`
        );
      }

      // only update the value if it has actually changed
      // and only re-render if it has changed
      if (!this.shouldUpdateCallback(newValue, oldValue)) {
        return;
      }

      const key = camelize(name);

      // add, update attribute
      if (this.hasAttribute(name)) {
        const {
          constructor: { propTypes }
        } = this;
        this.props[key] = toProp(newValue, name, propTypes[key]);
      } else {
        // delete attribute
        this.props[key] = null;
      }

      this.checkPropTypes();

      // if value is updated, we presume that an axa on change event have to be triggered
      if (name === "value" && newValue !== null) {
        fire(this, AXA_EVENTS.AXA_CHANGE, newValue, {
          bubbles: true,
          cancelable: true,
          composed: true
        });
      }

      this.updatedDebounced();
    }

    /**
     * A fast and simpler way to update multiple props in one go.
     * Especially useful for integrations and to prevent multiple re-renders.
     *
     * @param {{}} props - DOM properties to be updated.
     */
    setProps(props) {
      // super important to call throuth the prototype chain, so that lazy initialisation can happen
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback();
      }

      const {
        constructor: { observedAttributes = [] }
      } = this;
      const propsKeys = Object.keys(props);
      const filter = key => observedAttributes.indexOf(dasherize(key)) > -1;
      /**
       * Props reducer for batch processing.
       *
       * @param {{}} props - The properties to be batch processed.
       * @param {Boolean} shouldUpdate - Is re-render necessary?
       * @param {String} key - the current property's key.
       * @returns {{props: {}, shouldUpdate: boolean}} - For the next accumulator iteration.
       */
      // eslint-disable-next-line no-shadow
      const reduceProps = ({ props, shouldUpdate }, key) => {
        const value = props[key];
        const oldValue =
          this.props && this.props[key] ? this.props[key] : undefined;

        if (!shouldUpdate && !this.shouldUpdateCallback(value, oldValue)) {
          return {
            props,
            shouldUpdate: false
          };
        }

        this.props[key] = value;

        return {
          props,
          shouldUpdate: true
        };
      };
      const { shouldUpdate } = propsKeys
        .filter(filter)
        .reduce(reduceProps, { props, shouldUpdate: false });

      this.checkPropTypes();

      if (shouldUpdate && this._isConnected) {
        if (ENV !== PROD) {
          lifecycleLogger(this.logLifecycle)(
            `\n---> setProps for ${propsKeys.join(", ")}`
          );
        }

        if (this.updated) {
          this.updated();
        }
      } else if (shouldUpdate && !this._isConnected) {
        // @todo: find out why that component never connects
        // eslint-disable-next-line no-console
        console.warn(
          "setProps(): Custom Element not connected and props never update",
          this
        );
      }
    }

    /**
     * Check types at runtime.
     */
    checkPropTypes() {
      const {
        constructor: { propTypes, tagName },
        props
      } = this;

      if (propTypes) {
        PropTypes.checkPropTypes(propTypes, props, "prop", tagName);
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
        lifecycleLogger(this.logLifecycle)(
          `$$$ disconnectedCallback -> ${this.nodeName}#${this._id}\n`
        );
      }

      this._isConnected = false;
    }
  };

export default withUpdate;
