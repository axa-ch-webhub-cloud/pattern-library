import camelize from '../../camelize';
import debounce from '../../debounce';
import getAttribute from '../../get-attribute';
import maybe from '../../maybe';
import PropertyExistsException from '../property-exists-exception';

const THROWED_ERROR = 'throwed';
const PROPERTY_WHITELIST = ['title', 'checked', 'disabled'];
const ids = {};
const getId = (nodeName) => {
  if (!(nodeName in ids)) {
    ids[nodeName] = 0;
  }

  return ++ids[nodeName]; // eslint-disable-line no-plusplus
};
const lifecycleLogger = maybe((...args) => console.log(...args))()(true);

const withBase = Base =>
  class extends Base {
    constructor(styles = '', template) {
      super();

      this._initialise(styles, template);
      this._id = getId(this.nodeName);
      this._props = {};
      this.__attributeToPropertyMap = {};
      this.reRender = debounce(() => this.render(), 50);

      const { constructor: { observedAttributes } } = this;

      // add DOM property getters/setters for related attributes
      if (Array.isArray(observedAttributes)) {
        observedAttributes.forEach((attr) => {
          const key = camelize(attr);
          this.__attributeToPropertyMap[attr] = key;
          const hasKey = key in this;

          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)(`\n<-> apply getter/setter for ${key} by _${attr}`);
          }

          if (PROPERTY_WHITELIST.indexOf(key) === -1 && hasKey) {
            throw new PropertyExistsException(key, this);
          }

          // @todo: may we should allow deletion by setting configurable: true
          Object.defineProperty(this, key, {
            get() {
              return this[`_${attr}`];
            },
            set(value) {
              this[`_${attr}`] = value;

              this._props[key] = value;

              if (hasKey) {
                super[key] = value;
              }

              if (this._isConnected && this._hasRendered) {
                if (ENV !== PROD) {
                  lifecycleLogger(this.logLifecycle)(`\n---> setter for ${key} by _${attr}`);
                }

                this.reRender();
              }
            },
          });
        });
      }
    }

    /**
     * _initialise - description
     *
     * @param  {type} styles description
     * @param  {type} template description
     * @return {type}        description
     */
    _initialise(styles, template = null) {
      this._styles = styles;
      this._template = template;
      this._hasTemplate = !!template;
      this._hasRendered = false;
      this._isConnected = false;
    }

    /**
     * connectedCallback - description
     *
     * @return {type}  description
     */
    connectedCallback() {
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

              this[key] = value;
            }
          });

          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)(`\n??? observedAttributes end -> ${this.nodeName}#${this._id}`);
          }
        }
      }

      this.render();
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

    /**
     * render - method can be overwritten and is called right after the component is connected
     * @TODO how to deal with re-renders, e.g. triggered by `attributeChangedCallback` or observed DOM
     *
     * @return {type}  description
     */
    render() {
      if (this._hasTemplate) {
        if (ENV !== PROD) {
          lifecycleLogger(this.logLifecycle)(`render -> ${this.nodeName}#${this._id} <- initial: ${!this._hasRendered}`);
        }

        const { _template: template } = this;

        try {
          // At initial rendering -> collect the light DOM first
          if (!this._hasRendered) {
            const childrenFragment = document.createDocumentFragment();
            const lightDOMRefs = [];

            while (this.firstChild) {
              lightDOMRefs.push(this.firstChild);
              childrenFragment.appendChild(this.firstChild);
            }

            this._lightDOMRefs = lightDOMRefs;
            this.childrenFragment = childrenFragment;
          } else { // Reuse the light DOM for subsequent rendering
            this._lightDOMRefs.forEach((ref) => {
              // Note: DocumentFragments always get emptied after being appended to another document (they get moved)
              // so we can always reuse this
              this.childrenFragment.appendChild(ref);
            });
          }

          const items = template(this._props, this.childrenFragment);
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
                `\n%cWeb Component %c${this.nodeName}%c#${this._id} does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: ${err.stack}\n`, // eslint-disable-line
                'color: #580000; font-size: 14px; line-height:16px;',
                'background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;',
                'color: #580000; font-size: 14px; line-height:16px;',
              );
              throw err;
            }
            renderFragment.appendChild(items);
          }

          // rebuild the whole DOM subtree
          // @todo: this will break/disconnect previous DOM references, associated events and stuff like that
          // @todo: may need to be improved by DOM diffing, JSX, whatever
          while (this.firstChild) {
            this.removeChild(this.firstChild);
          }
          super.appendChild(renderFragment);
        } catch (err) {
          if (err.message !== THROWED_ERROR) {
            console.error( // eslint-disable-line
              `\n%cWeb Component %c${this.nodeName}%c#${this._id} has an error while loading its template:\n${err}\n\nStack Trace: ${err.stack}\n`,
              'color: #580000; font-size: 14px; line-height:16px;',
              'background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;',
              'color: #580000; font-size: 14px; line-height:16px;',
            );
          }
        }
      }
      this._hasRendered = true;
    }
  };

export default withBase;
