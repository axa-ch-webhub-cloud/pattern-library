import defineOnce from './define-once';
import { html } from 'lit-element';

// helper functions
const toKebabCase = dottedVersionString =>
  `${dottedVersionString}`.replace(/\./g, '-').replace(/[^A-z0-9\-]/g, '');

const versionedTag = (tagName, version) => `${tagName}-${toKebabCase(version)}`;

const extractDependencies = componentClass => {
  const { versions, tagName } = componentClass;
  // extract all dependencies by comparing with master-component tag name
  const dependencies = Object.keys(versions).filter(name => name !== tagName);
  // pair the list of dependency tag names with their versions
  return [dependencies, dependencies.map(tagName => versions[tagName])];
};

const oldTag = (tagName, closing = '') => `<${closing}${tagName}`;

const newTag = (tagName, aVersion, closing) =>
  oldTag(versionedTag(tagName, aVersion), closing);

// Example: someStrings = ['<div><axa-dropdown .items="','" </axa-dropdown></div>']
//          aTagname = 'axa-dropdown', aVersion = '7.0.2'
//
// Rewritten as           ['<div><axa-dropdown-7-0-2 .items="','" </axa-dropdown-7-0-2></div>'].
//
// Note: this uses the split-join technique to perform global string substitution
// without needing the special-character escaping necessary
// a reg-exp-based alternative (the latter is marginally faster, but our strings here are short)
const rewrite = (someStrings, aTagName, aVersion) =>
  someStrings.map(string =>
    string
      .split(oldTag(aTagName))
      .join(newTag(aTagName, aVersion))
      .split(oldTag(aTagName, '/'))
      .join(newTag(aTagName, aVersion, '/'))
  );

/////
// API functions
/////

// examples: defineVersioned(AXADatepicker, [AXADropdown, AXAButton]);
//           defineVersioned(AXADatepicker);
//           defineVersioned(this, [AXADropdown]);
//           defineVersioned(AXACheckbox, [], 'rsv');
const defineVersioned = (
  aComponentClass,
  dependencies = [],
  overrideVersion
) => {
  // for convenience, allow passing both instances and classes
  const componentClass =
    aComponentClass instanceof HTMLElement
      ? aComponentClass.constructor
      : aComponentClass;
  // get version info of component
  const { versions } = componentClass;
  // this is a single-component definition only?
  if (dependencies.length === 0) {
    // yes, define its unversioned-tag variant first
    const { tagName } = componentClass;
    defineOnce(tagName, componentClass);
    // then queue itself as to-be-versioned pseudo-dependency
    dependencies.push(componentClass);
  }

  let versionedTagName = '';
  // process all dependant component that it lists...
  dependencies.forEach(dependentComponentClass => {
    // extracting each dependant component's version,
    const { tagName } = dependentComponentClass;
    const version = overrideVersion || versions[tagName];
    // assembling a new, versioned name,
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
    defineOnce(versionedTagName, class extends dependentComponentClass {});
  });

  return versionedTagName; // for convenience in single-component definitions
};

const versionedHtml = componentInstance => (strings, ...args) => {
  // derive class from instance
  const componentClass = componentInstance.constructor;
  // extract dependency info by looking at versions of component
  const [tagNames, versions] = extractDependencies(componentClass);
  // rewrite incoming array of static parts of template literals
  // in such a way that tags of dependent components are versioned
  let newStrings = strings;
  for (let i = 0, n = tagNames.length; i < n; i++) {
    newStrings = rewrite(newStrings, tagNames[i], versions[i]);
  }
  // let lit-html see the rewritten static parts together with the
  // unchanged dynamic arg(ument)s
  return html(newStrings, ...args);
};

export { defineVersioned, versionedHtml };
