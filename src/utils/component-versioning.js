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

// examples: defineVersioned([AXADatepicker, AXADropdown, AXAButton], __ VERSION_INFO__);
//           defineVersioned([AXADatepicker],  __ VERSION_INFO__);
//           defineVersioned([AXADropdown],  __ VERSION_INFO__);
//           defineVersioned([AXAContainer],  __ VERSION_INFO__, 'axa-footer');
//           defineVersioned([AXACheckbox], 'rsv');
const defineVersioned = (dependencies, versionInfo, parentElementName) => {
  // set up
  const customVersion = typeof versionInfo === 'string' && versionInfo;
  let versionedTagName = '';
  // process all dependant components that it lists...
  dependencies.forEach(dependency => {
    const componentClass =
      dependency instanceof HTMLElement ? dependency.constructor : dependency;
    // extract each dependant component's version
    const { tagName } = componentClass;

    // TODO: the versionInfo object is different on every different build (dist, storybook-dist, lib)
    const externalVersion =
      versionInfo[tagName] ||
      versionInfo[parentElementName][tagName] ||
      'truthy'; // any truthy value is working. on falsy we get an error on dist-js-usage.

    // ordinary, non-POD versioning?
    if (!customVersion && externalVersion) {
      // yes, first time versioning/registration of this component, but its class
      // contains a PL-reserved 'versions' property?
      if (!window.customElements.get(tagName) && componentClass.versions) {
        // yes, this class is wrongly implemented - premature exit
        throw Error(
          `'versions' is a reserved class property, but was found in ${tagName}'s class`
        );
      }
      // inject version info into component-defining class
      componentClass.versions = externalVersion;
      // define its *unversioned*-tag variant first
      defineOnce(tagName, componentClass);
    }
    // extract each dependant component's version,
    const { versions } = componentClass;
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
