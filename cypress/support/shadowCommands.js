const Promise = require('bluebird');

import { merge } from 'lodash';
import { waitsFor, catchRejection } from './waitsfor';
import { smartlog } from './smartlog';
import { should, ensureChainerExists } from './shadowShould';
import { shadowSelect as _shadowSelect } from './shadowSelect';
import $ from 'jquery';

/**
 * 
 * ## About
 * 
 * Cypress does not have native support for `shadowDom`.
 * This module gives us the ability to run similar commands in shadow DOM.
 * These commands are not as fully developed as the native ones,
 * but resemble native Cypress commands in usage.
 * 
 * > Only use these commands on elements *within* a `shadowRoot`,
 * not on elements which may have a `shadowRoot`.
 * 
 * What to Expect
 * * Commands should feel familiar as Cypress ones and behave in similar ways
 * * There is automatic retrying for certain commands (e.g. `shadowGet` and `shadowShould`)
 * * Non-Dom results can be yielded into regular Cypress commands.
 * For example:
 * 
```js
cy.shadowGet('some-shadow-element')
  .then($el => $el.text())
  .should('match', /*.?/g); // no need to build non-DOM interactors!
```
 * 
 * The main differences are
 * * Limited API use / less supported features
 * * Retrying is on a per command (not per chain) basis (except for `shadowGet`,
 * which does support retrying upcoming assertions)
 * * No extra visibility/attachment/covered/disabled checks on `click` and `trigger`
 * * Potentially others...TBD
 * 
 ## API
 * 
 * 
 * @module shadowDom
 */

/**
 * Register shadow commands on the `cy` namespace,
 * such as `shadowGet`, `shadowShould`, etc.
 */
function registerShadowCommands() {
  const OPTIONAL_SUBECT = { prevSubject: 'optional' };
  const PREV_SUBJECT = { prevSubject: true };

  Cypress.Commands.add('shadowGet', OPTIONAL_SUBECT, shadowGet);

  Cypress.Commands.add('shadowFind', PREV_SUBJECT, shadowFind);

  Cypress.Commands.add('shadowEq', PREV_SUBJECT, shadowEq);

  Cypress.Commands.add('shadowContains', PREV_SUBJECT, shadowContains);

  Cypress.Commands.add('shadowShould', PREV_SUBJECT, shadowShould);

  Cypress.Commands.add('shadowClick', PREV_SUBJECT, shadowClick);

  Cypress.Commands.add('shadowSelect', PREV_SUBJECT, shadowSelect);

  Cypress.Commands.add('shadowTrigger', PREV_SUBJECT, shadowTrigger);
}

/**
 * **Retryable / Async**
 * 
 * * deeply searches DOM for all elements which have a `shadowRoot`
 * * queries (with jquery) each `shadowRoot` with provided selector
 * * Returns all matching results
 * * Subject is optional
 * 
 * @param {string} selector jquery selector used to find matching elements
 * @param {object} [options] the options to modify behaviour of the command
 * @param {number} [options.timeout] number of ms to retry the query until 
 * marking the command as failed. Defaults to 4s or the `defaultCommandTimeout`
 * in cypress.config.
 * @example
### Syntax

```js
.shadowGet(selector)
.shadowGet(selector, options)
```

### Usage

```js
// searches entire DOM
cy.shadowGet('custom-el-in-shadow')

// searches only within container-el
cy.get('container-el')
  .shadowGet('custom-el-in-shadow')

// waits up to 30s (resolve immediately when found)
cy.shadowGet('custom-el-in-shadow', { timeout: 30000 })

```
 */
function shadowGet(subject, selector, passedOptions = {}) {
  smartlog.log('[shadowGet] arguments', subject, selector);

  const options = _addElemTimeoutMsg(selector, passedOptions);
  // this._timeout = options.timeout || Cypress.config('defaultCommandTimeout') || 4000;

  // setup log to start spinner off
  const log = Cypress.log({
    message: selector,
    verify: true,
  });

  let foundElements;

  const getElements = () =>
    waitsFor(() => {
      const win = cy.state('window');
      foundElements = _queryShadowChildren(subject ? subject[0] : win.document.body, selector);
      return foundElements.length > 0;
    }, options)
      .then(() => {
        smartlog.log('[shadowGet] found', foundElements);
        // setting found $el on log to mimic cypress logging
        log.$el = foundElements;
        return $(foundElements);
      })
      .catch(err => {
        // catching and rethrowing this way =>
        // error message applied to current log
        Cypress.utils.throwErr(err, {
          onFail: log,
        });
      });
  const resolveElements = function() {
    cy.clearTimeout('shadowGet');
    return Promise['try'](getElements).then(function($el) {
      if (options.verify === false) {
        return $el;
      }
      return cy.verifyUpcomingAssertions($el, options, {
        onRetry: resolveElements,
      });
    });
  };

  return resolveElements();
}

/**
 * **Retryable / Async**
 * 
 * * must be chained from another command (e.g. `shadowGet` or `get`)
 * * queries (via jquery) the yielded element and the yielded element's `shadowRoot` for matches
 * * **Only** searches within the `shadowRoot` of the yielded element (as well as just the regular DOM children)
 * * **Note** it is a **shallow** search within the yielded elements shadowRoot. It will **not**
 * do a deep search through shadowRoots for the matching element. For deep search, use `shadowGet`
 * 
 * > You may wonder why a shallow search is needed. That's because in shadowDom
 * > Unique selectors like `id`s can be repeated. Sometimes we just want to search
 * > in the immediate root without worrying about coliding with things further down
 * > the DOM tree.
 * 
 * @param {string} selector jquery selector used to find matching elements
 * @param {object} [options] the options to modify behaviour of the command
 * @param {number} [options.timeout] number of ms to retry the query until 
 * marking the command as failed. Defaults to 4s or the `defaultCommandTimeout`
 * in cypress.config.
 * @example
### Syntax

```js
.shadowFind(selector)
.shadowFind(selector, options)
```

### Usage

```js
// shadowFind queries against the subjects' children and shadowRoot
cy.get('container-el')
  .shadowFind('button.action') 

// shadowGet matches from all shadowRoots
// shadowFind queries against the subjects' children and shadowRoot
cy.shadowGet('custom-el-in-shadow')
  .shadowFind('button.action') // will query against the subject's children and shadowRoot
```
 */
function shadowFind(subject, selector, passedOptions) {
  smartlog.log('[shadowFind] arguments', subject, selector);

  const options = _addElemTimeoutMsg(selector, passedOptions);

  // setup log to start spinner off
  const log = Cypress.log({
    message: selector,
  });

  let foundElements;

  // returning promise => spinner
  return waitsFor(() => {
    foundElements = _queryChildrenAndShadowRoot(subject, selector);
    return foundElements.length > 0;
  }, options)
    .then(() => {
      smartlog.log('[shadowFind] found', foundElements);
      // setting found $el on log to mimic cypress logging
      log.$el = foundElements;
      return foundElements;
    })
    .catch(err => {
      // catching and rethrowing this way =>
      // error message applied to current log
      Cypress.utils.throwErr(err, {
        onFail: log,
      });
    });
}

/**
 * **Retryable / Async**
 * (Up to 4s, timeout not customizable)
 * 
 * This Utility is most useful when needing to run 
 * assertions against shadowDom elements and it does so by leveraging `jquery-chai`. `Cypress` also does this, but it does not work in shadowDom.
 * * it accepts the `string` syntax like Cypress' `should`
 * * it does not accept the `function` syntax 
 * (but you can still use `should` with shadow elements as long as you run non `jquery-chai` assertions)
 * * This smooths over the issues with Cypress' `jquery-chai`,
 * which does explicit checks that are incompatible with shadowDom.
 * * It uses a clean version of jquery and chai to run assertions against shadowDom elements.
 * * In general, you can use `should` as long as you do not need to assert against the shadow DOM.
 * 
 * > **When should I use `shadowShould` and when should I use `should`?**
 * > 
 * > Use `shadowShould` whenever you need to run assertions
 *  against elements within the `shadowDom`.
 * > Lite DOM and regular DOM can be used with `should`.
 * > Also, any non-DOM values can be used with `should`. 
 * > You can do something like, 
 * >
 * >`.should(($el) => expect($el.text()).to.match(/.?/))`
 * > 
 * > Or even,
 * >
 * > `.then(($el) => $el.text()).should('match', /.?/))`.
 * >
 * > These are examples of taking non-DOM values from the shadowDom elements and using
 * > regular Cypress commands and assertions on them. 
 * 
 * @param {string} chainer the string
 * @param {any} value the value to be checked
 * @param {string} method the sub-chainer to check (see example)
 * 
 * @example
### Syntax

```js
.shadowShould(chainers)
.shadowShould(chainers, value)
.shadowShould(chainers, method, value)
```

### Usage

```js
cy.get('@dateLabel')
  .should('have.text', '2017-11-22');

cy.get('@datepicker')
  .shadowFind('button[value="2017-11-22"]')
  .shadowShould('have.attr', 'tabindex', '0');
```

 */

function shadowShould(subject, chainer, ...rest) {
  const message = _formatElementMessage(subject[0], chainer, ...rest);

  const log = Cypress.log({
    message: message,
    state: 'pending',
  });

  // allow jquery chai to throw an error if we pass a bad chainer
  ensureChainerExists(subject, chainer);

  return waitsFor(() => {
    try {
      should(subject, chainer, ...rest);
      return true;
    } catch (ex) {
      return false;
    }
  })
    .then(() => {
      assert(true, message);
      return subject;
    })
    .catch(() => {
      try {
        should(subject, chainer, ...rest);
      } catch (err) {
        Cypress.utils.throwErr(err, {
          onFail: log,
        });
      }
    });
}

/**
 * **No-Retry / Sync**
 * 
 * Yields a subject at the index from a given subject.
 * 
 * For example, if this is chained from a `shadowGet` 
 * which yields multiple elements, `shadowEq` will return
 * the element at the specified index.
 * 
 * It will *not* retry and yields whatever is passed
 * into it synchronously.
 * 
 * @param {number} index specifies the index of 
 * the element to yield from the subject
 * 
 * @example
### Syntax

```js
.shadowEq(selector)
```

### Usage

```js
cy.get('container-el')
  .shadowFind('button.action') 
  .shadowEq(2)

cy.shadowGet('custom-el-in-shadow')
  .shadowEq(4)
```
 */
function shadowEq(subject, index) {
  Cypress.log({
    name: 'shadoweq',
    message: index,
  });

  // todo check into how cypress handles this situation
  if (subject[index] === undefined) {
    throw new Error('There is no subject at the specified index');
  }

  return subject[index];
}

/**
 * **No-Retry / Sync**
 * 
 * * Allows you to click on an element within a shadowRoot.
 * * Can be chained from `shadowGet`, `shadowFind`, or `shadowEq`
 * * Clicks on the first element (index 0) from the 
 * yielded elements of previous command
 * * Cypress' `click` does not work in shadowDom for multiple reasons
 * * Uses native or jquery .click functionality,
 * but does not do additional checks Cypress' click does 
 * such as checking the component is visible, 
 * not covered, and not disabled. 
 * * Would need to put in more work to ensure component clicks cannot pass 
 * through when the component is not in an actual interactive state.
 * @example
### Syntax

```js
.shadowClick()
```

### Usage

```js
cy.get('container-el')
  .shadowGet('custom-element-within-shadow-dom')
  .shadowFind('button.action')
  .shadowClick()
```
 */
function shadowClick(subject, options) {
  Cypress.log({
    name: 'shadowclick',
  });
  // todo: retry until element is "clickable"
  if (subject[0].tagName === 'A') {
    // jQuery click doesn't work on Anchors
    // https://stackoverflow.com/questions/34174134/triggering-click-event-on-anchor-tag-doesnt-works
    subject[0].click();
  } else {
    subject.click();
  }
}

/**
 * **No-Retry / Sync**
 * 
 * * Allows you to select an option from a `select` element within a shadowRoot.
 * * Can be chained from `shadowGet`, `shadowFind`, or `shadowEq`
 * * Expects an actual `select` element to be the subject
 * * Selects the provided `option` from the first element (index 0) from the 
 * yielded elements of previous command
 * * Option can be by `value` or by `text`, but must be strictly equal
 * * Cypress' `select` does not work in shadowDom for multiple reasons
 * * Does not do additional checks Cypress' select does 
 * such as checking the component is visible, 
 * not covered, and not disabled. 
 * * Would need to put in more work to ensure component selects cannot pass 
 * through when the component is not in an actual interactive state.
 * 
 * 
 * @param {String|Number} option The option from the `select` to select,
 * by `value` or by `text`
 *  
 * @example
### Syntax

```js
.shadowSelect(option)
```

### Usage

```js
  cy
    .shadowGet('upd-select[name="state"]')
    .shadowFind('select')
    .shadowSelect('AL'); // by value

  cy
    .shadowGet('upd-select[name="bedrooms"]')
    .shadowFind('select')
    .shadowSelect('3 Bedroooms'); // by text
``` 
 */
function shadowSelect(subject, select, options) {
  Cypress.log({
    name: 'shadowselect',
    message: `'${select}' on ${subject[0].tagName}`,
  });

  return _shadowSelect(subject, select, options);
}

/**
 * **No Retry / Sync**
 * 
 * * allows to trigger an event similarly to how Cypress' `trigger` works. 
 * * This works with elements on the shadow DOM since they pose problems with 
 * almost all of Cypress' commands. 
 * * Currently only supports these events:
 *   * `keydown`
 *   * `keypress`
 *   * `keyup`
 *   * `change`
 *   * `input`
 * * Options can also be provided per event
 *   * `key` events supports keyboard event options i.e. `keyCode` or `bubbles`
 *   * `change` and `input` events support the `value` for the update
 * 
 * @param {string} event The event from the above list which will be triggered
 * @param {object|value} options Options which depend on the kind of event and 
 * modify the event's behaviour
 * 
 * @example
```js
.shadowTrigger(event)
.shadowTrigger(event, options)
```

### Usage

```js
// Changing an input
cy
  .shadowGet('upd-input[name="postalCode"]')
  .shadowFind('input')
  .shadowTrigger('input', '99511');

// changing value of a custom element
cy
  .shadowGet('upd-datepicker')
  .shadowTrigger('change', '2019-01-02');

// triggering a key event
cy.get('@datepicker')
  .shadowFind('button[aria-selected="true"]')
  .shadowTrigger('keydown', { keyCode: 39, bubbles: true });
```
 */
function shadowTrigger(subject, event, options) {
  Cypress.log({
    name: 'shadowTrigger',
  });
  // todo: retry until element is "interactable"
  const createdEvent = _createEvent(event, options, subject[0]);
  console.log(createdEvent);
  if (!createdEvent) {
    throw new Error(`Event not supported by shadowTrigger: ${event}`);
  }
  subject[0].dispatchEvent(createdEvent);
  return subject;
}

/**
 * **No-Retry / Sync**
 * 
 * Convenience function to assert partial match between the `textContent` of
 * an element and the passed in value.
 * 
 * This does not work like `cy.contains`.
 * 
 * Literally just runs this assertion:
 * ```js
 *   expect(subject[0].textContent).to.contain(text)
 * ```
 * 
 * @param {string} text the text to match against
 * 
 * @example
```js
.shadowContains(text)
```

### Usage

```js
  cy
    .shadowGet('some-custom-elem')
    .shadowContains('Should contain this text...')
``` 
 */
function shadowContains(subject, text) {
  expect(subject[0].textContent).to.contain(text);
  return subject;
}

/* PRIVATE / INTERNAL */

function _formatElementMessage(element, chainer, ...rest) {
  const elementText = element.tagName.toLowerCase(),
    id = element.id ? `#${element.id}` : '',
    chainerText = chainer.replace('.', ' '),
    check = rest.join(' ');
  return `expect **<${elementText}${id}>** to ${chainerText} **${check}**`;
}

function _isShadowElement(el) {
  return el.shadowRoot && el.shadowRoot.childNodes && el.shadowRoot.childNodes.length > 0;
}

function _getAllShadowChildren(elems) {
  return elems.reduce((acc, el) => {
    acc.push(el);
    let nodesToReduce = [];
    // smartlog.log('[shadow] get for element', el);
    if (el.childNodes) {
      nodesToReduce = nodesToReduce.concat([...el.childNodes]);
    }
    if (el.shadowRoot) {
      nodesToReduce = nodesToReduce.concat([...el.shadowRoot.childNodes]);
    }
    if (el.tagName === 'SLOT') {
      // NOTE: `assignedNodes` are part of litedom, therefore will be in the childNodes
      // doing this here duplicates what we return
      // nodesToReduce = nodesToReduce.concat([...el.assignedNodes()])
    }
    return acc.concat(_getAllShadowChildren(nodesToReduce));
  }, []);
}

function _queryShadowChildren(node, query) {
  const shadowRoots = _getAllShadowChildren([node]).filter(_isShadowElement);

  smartlog.log('[shadowroots]', shadowRoots);
  const matchedEls = shadowRoots.reduce((matched, el) => [...matched, ...$(el.shadowRoot).find(query)], []);

  smartlog.log('Matched els', matchedEls);

  return matchedEls;
}

function _queryChildrenAndShadowRoot(subject, selector) {
  let foundElements = [...subject.find(selector)];
  const shadowRoots = [...subject].map(s => s.shadowRoot).filter(root => root !== undefined);
  shadowRoots.forEach(root => {
    foundElements = [...$(root).find(selector)].concat(foundElements);
  });
  return foundElements;
}

function _addElemTimeoutMsg(selector, opts) {
  return merge({}, opts, {
    message: `Expected to find element: '${selector}' but never found it.`,
  });
}

function _createEvent(event, options, element) {
  if (['keydown', 'keypress', 'keyup'].indexOf(event) !== -1) {
    // In Chromium/Electron, dispatchEvent with keyCode will be received as 0
    // this fixes that issue
    // https://stackoverflow.com/questions/10455626/keydown-simulation-in-chrome-fires-normally-but-not-the-correct-key/10520017#10520017
    const customEvent = document.createEvent('KeyboardEvent', options),
      { keyCode } = options;

    ['keyCode', 'which'].forEach(prop => {
      Object.defineProperty(customEvent, prop, {
        get: function() {
          return this.keyCodeVal;
        },
      });
    });

    if (customEvent.initKeyboardEvent) {
      customEvent.initKeyboardEvent(event, true, true, document.defaultView, false, false, false, false, keyCode, keyCode);
    } else {
      customEvent.initKeyEvent(event, true, true, document.defaultView, false, false, false, false, keyCode, 0);
    }

    customEvent.keyCodeVal = keyCode;

    if (customEvent.keyCode !== keyCode) {
      throw new Error(`keyCode mismatch keyCode ${customEvent.keyCode} which ${customEvent.which}`);
    }

    return customEvent;
  }
  if (['change', 'input'].indexOf(event) !== -1) {
    element.value = options;
    const change = document.createEvent('HTMLEvents');
    change.initEvent(event, true, true);
    return change;
  }
}

export { registerShadowCommands };
