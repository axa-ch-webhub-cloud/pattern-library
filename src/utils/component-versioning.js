import { html } from 'lit-element';
import defineOnce from './define-once';

// helper functions
const toKebabCase = dottedVersionString =>
  `${dottedVersionString}`.replace(/\./g, '-').replace(/[^A-Za-z0-9-]/g, '');

const versionedTag = (tagName, version) => `${tagName}-${toKebabCase(version)}`;

const extractDependencies = componentClass => {
  const { versions, tagName } = componentClass;
  // extract all dependencies by comparing with master-component tag name
  const dependencies = Object.keys(versions).filter(name => name !== tagName);
  // pair the list of dependency tag names with their versions
  return [dependencies, dependencies.map(_tagName => versions[_tagName])];
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

// ///
// API functions
// ///

// examples: defineVersioned(AXADatepicker, AXADropdown, AXAButton], __VERSION_INFO__);
//           defineVersioned([AXADatepicker],  __VERSION_INFO__);
//           defineVersioned([this, AXADropdown],  __VERSION_INFO__);
//           defineVersioned([AXACheckbox], 'rsv');
const defineVersioned = (dependencies, versionInfo) => {
  const customVersion = typeof versionInfo === 'string' && versionInfo;
  // process all dependant components that it lists...
  let versionedTagName = '';
  dependencies.forEach(dependency => {
    const componentClass =
      dependency instanceof HTMLElement ? dependency.constructor : dependency;
    // ordinary, non-POD versioning?
    if (!customVersion) {
      // yes, inject version info into component-defining class
      const { tagName } = componentClass;
      componentClass.versions = versionInfo[tagName];
      // define its *unversioned*-tag variant first
      defineOnce(tagName, componentClass);
    }
    // extracting each dependant component's version,
    const { tagName, versions } = componentClass;
    const version = customVersion || versions[tagName];
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
