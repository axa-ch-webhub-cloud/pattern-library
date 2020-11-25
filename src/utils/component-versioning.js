import { html } from 'lit-element';
import defineOnce from './define-once';

// constants
const RESERVED_CHARACTER = '{'; // not allowed in HTML tags or their attributes ...
// and also not part of static template strings due to ${...} syntax!

// helper functions
const toKebabCase = dottedVersionString =>
  `${dottedVersionString}`.replace(/\./g, '-').replace(/[^A-Za-z0-9-]/g, '');

const versionedTag = (tagName, version) => `${tagName}-${toKebabCase(version)}`;

const extractDependencies = componentClass => {
  const { versions, tagName } = componentClass;
  // extract all dependencies...
  const dependencies = Object.keys(versions)
    // ... by comparing with master-component tag name
    .filter(name => name !== tagName)
    // ... and sorting longest-first (e.g. axa-button-link comes before axa-button)
    .sort((a, b) => b.length - a.length);
  // pair the list of dependency tag names with their versions
  return [dependencies, dependencies.map(_tagName => versions[_tagName])];
};

const oldTag = (tagName, closing = '', openingBracket = '<') =>
  `${openingBracket}${closing}${tagName}`;

// How to make a new tag? It's tempting to just append the version info.
// However, we don't want to rewrite tags more than once: given axa-button-link in version 6.3.4
// and axa-button in version 5.0.9, we DONT'T WANT
// <axa-button-link =1> <axa-button-link-6-3-4 =2> <axa-button-5-0-9-link-6-3-4.

// So, the simplest solution replaces a rewritten tag in such a way that it does not START
// like any other tag, using a reserved character '{'. To continue with our example, we might have
// <axa-button-link =1> {axa-button-link-6-3-4. Then the erroneous rewriting step =2> can no longer match.

// Of course, in the end we need a bulk replacement of the '{'s by their original '<'s, which is simple.
const newTag = (tagName, aVersion, closing) =>
<<<<<<< HEAD
<<<<<<< HEAD
  oldTag(versionedTag(tagName, aVersion), closing, RESERVED_CHARACTER);
=======
  oldTag(versionedTag(tagName, aVersion) + ' ', closing);
>>>>>>> fix component versioning the ugly way
=======
  oldTag(`${versionedTag(tagName, aVersion)} `, closing);
>>>>>>> improve documentation and eslint fixes

// Example: someStrings = ['<div><axa-dropdown .items="','" </axa-dropdown></div>']
//          aTagname = 'axa-dropdown', aVersion = '7.0.2'
//
// Rewritten as           ['<div><axa-dropdown-7-0-2 .items="','" </axa-dropdown-7-0-2></div>'].
//
<<<<<<< HEAD
// Note: this uses the split-join technique to perform global string substitution
// without needing the special-character escaping necessary for
// a reg-exp-based alternative (the latter is marginally faster, but our strings here are short)
const rewrite = (someStrings, aTagName, aVersion) =>
  someStrings.map(string =>
=======
// The first character after each tag name (e.g. after "<axa-button-link") can be either a line
// break or a whitespace. We also need to consider that charater, because "<axa-button" is part
// of "<axa-button-link" (which was a prod issue) and generated a version like this: "<axa-button-6.0.5-link"
// Reason: It was not made sure that the tagname is "finished" before, just if it is contained.
//
// Note: This uses the split-join technique to perform global string substitution without needing the
// special-character escaping necessary a reg-exp-based alternative (the latter is marginally faster,
// but our strings here are short)
const rewriteTagsWithVersion = (someStrings, aTagName, aVersion) => {
  const tagNameWithAddedWhitespace = `${aTagName} `;
  const versionWithAddedWhitespace = `${aVersion} `;
  return someStrings.map(string =>
>>>>>>> improve documentation and eslint fixes
    string
      .split('\n')
      .join(' ')
      .split(oldTag(tagNameWithAddedWhitespace))
      .join(newTag(aTagName, versionWithAddedWhitespace))
      .split(oldTag(tagNameWithAddedWhitespace, '/'))
      .join(newTag(aTagName, versionWithAddedWhitespace, '/'))
  );
};

// ///
// API functions
// ///

// examples:
//           defineVersioned([AXADatepicker],  __ VERSION_INFO__); // main component
//           defineVersioned([AXADropdown],  __ VERSION_INFO__, this); // dependent component
//           defineVersioned([AXACheckbox], 'rsv'); // custom version
const defineVersioned = (dependencies, versionInfo, parentInstance) => {
  // set up
  const customVersion = typeof versionInfo === 'string' && versionInfo;
  let versionedTagName = '';
  // process all dependant components that it lists...
  dependencies.forEach(dependency => {
    const componentClass =
      dependency instanceof HTMLElement ? dependency.constructor : dependency;
    // extract each dependant component's version
    const { tagName } = componentClass;
    const externalVersion = !customVersion && versionInfo[tagName];
    // ordinary, non-POD versioning?
    if (externalVersion) {
      // yes, first time versioning/registration of this component, but its class
      // contains a PL-reserved 'versions' property?
      if (!window.customElements.get(tagName) && componentClass.versions) {
        // yes, this class is wrongly implemented - premature exit
        throw Error(
          `'versions' is a reserved class property, but was found in ${tagName}'s class`
        );
      }
      // inject version info into component-defining class - this helps for live debugging
      componentClass.versions = externalVersion;
      // define its *unversioned*-tag variant first
      defineOnce(tagName, componentClass);
    }
    // extract each dependant component's version,
    let { versions } = componentClass;
    if (!versions && parentInstance) {
      // taking the parent component's noted version for this dependency if needed,
      versions = versionInfo[parentInstance.constructor.tagName];
    }
    // assembling a new, versioned name,
    const version = customVersion || versions[tagName];
    versionedTagName = versionedTag(tagName, version);
    // and redundantly defining
    //     versionedTagName |-> dependentComponentClass'
    // in parallel to the existing unversioned definition
    //     tagName |-> dependentComponentClass
    //
    // Note: the class expression formally creates a *new* dependentComponentClass' with identical behaviour,
    // which is needed to get around a bi-uniqueness constraint imposed by the
    // custom-elements registry, cf. https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define
    // under section Exceptions:NotSupportedError)
    defineOnce(versionedTagName, class extends componentClass {});
  });

  return versionedTagName; // for convenience in single-component custom-versioned definitions
};

const versionedHtml = componentInstance => (strings, ...args) => {
  // derive class from instance
  const componentClass = componentInstance.constructor;
  // extract dependency info by looking at versions of component
  const [tagNames, versions] = extractDependencies(componentClass);
  // rewrite incoming array of static parts of template literals
  // in such a way that tags of dependent components are versioned:
  let newStrings = strings;
  // 1. rewriting proper, turning tags into versioned ones with funny initial brackets (see newTag(...) above)
  for (let i = 0, n = tagNames.length; i < n; i++) {
    newStrings = rewriteTagsWithVersion(newStrings, tagNames[i], versions[i]);
  }
  // 2. finish rewriting by converting funny initial brackets back to standard ones
  for (let i = 0, n = newStrings.length; i < n; i++) {
    newStrings[i] = newStrings[i].split(RESERVED_CHARACTER).join('<');
  }
  // let lit-html see the rewritten static parts together with the
  // unchanged dynamic arg(ument)s
  return html(newStrings, ...args);
};

export { defineVersioned, versionedHtml };
