import { html } from 'lit';
import defineOnce from './define-once';

/* eslint max-classes-per-file: ["error", 3] */

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
  oldTag(versionedTag(tagName, aVersion), closing, RESERVED_CHARACTER);

// Example: someStrings = ['<div><axa-dropdown .items="','" </axa-dropdown></div>']
//          aTagname = 'axa-dropdown', aVersion = '7.0.2'
//
// Rewritten as           ['<div><axa-dropdown-7-0-2 .items="','" </axa-dropdown-7-0-2></div>'].
//
// Note: this uses the split-join technique to perform global string substitution
// without needing the special-character escaping necessary for
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

// There are 3 supported modes for invoking defineVersioned:
//           1. defineVersioned([AXADatepicker],  __VERSION_INFO__); // define main component, unversioned+versioned
//           - here the dependencies array is always of length 1, and the outermost version-info key is
//           - identical to the component-class tag name. This mode is used at the end of any component's index.js.
//
//           2. defineVersioned([AXADropdown],  __VERSION_INFO__, this); // dependent component(s), versioned
//           - here the dependencies array may be of length > 1, and the outermost version-info key is identical
//           - to the tag name of the component instance referenced by this. This mode is used at the end of the constructor
//           - of a component.
//
//           3. defineVersioned([AXACheckbox], 'rsv'); // custom version (here: 'rsv'), versioned.
//           -  here the dependencies array may be of length > 1, containing component classes only, and every such class
//           - is defined with their tagname plus -customVersion appended. This mode is used in utils/with-react.js.

// Here is a typical example of how __VERSION_INFO__ is instantiated:
//
//           {"axa-datepicker":{"axa-datepicker":"17.0.5","axa-dropdown":"11.0.5"}}
//
// Note how the version-info object needs to be dereferenced *twice* using the main-component tag name of 'axa-datepicker' to arrive
// at its NPM version string '17.0.5'. The peculiar way the version-info object is structured is so that both modes 1 and 2 are
// supported, and that the signatures of all modes are easy to use at the relevant places in the code.

const defineVersionedMainComponent = (
  customElementClass,
  versionInfoObject
) => {
  // extract tag name from class
  const { tagName } = customElementClass;
  // dereference version info *twice* to get NPM version of main component
  const npmVersion = versionInfoObject[tagName][tagName];
  // build npm-versioned tag name
  const npmVersionedTagName = versionedTag(tagName, npmVersion);
  // define unversioned custom element in global registry
  defineOnce(tagName, customElementClass);
  // define versioned custom element in global registry, using a unique new class with same behaviour
  defineOnce(npmVersionedTagName, class extends customElementClass {});
};

const defineCustomVersionedComponents = (
  customElementClasses,
  versionInfoString
) => {
  let customVersionedTagName;
  customElementClasses.forEach(customElementClass => {
    // extract tag name from class
    const { tagName } = customElementClass;
    // build custom-versioned tag name
    customVersionedTagName = versionedTag(tagName, versionInfoString);
    // define versioned custom element in global registry, using a unique new class with same behaviour
    defineOnce(customVersionedTagName, class extends customElementClass {});
  });
  // report the new tag name to the caller for convenience - relevant only in *single-component* custom-versioned definitions (primary use case: withReact)
  return customVersionedTagName;
};

const defineVersionedDependentComponents = (
  customElementClasses,
  versionInfoObject,
  instance
) => {
  // derive main-component class from instance
  const mainComponentClass = instance.constructor;
  // extract tag name from class
  const { tagName } = mainComponentClass;
  // dereference version-info object using the tag name to get dependents' version-info bundle
  const dependentsVersionInfoObject = versionInfoObject[tagName];
  // do we erroneously already have a 'versions' property in this class?
  if (!window.customElements.get(tagName) && mainComponentClass.versions) {
    // yes, this class is wrongly implemented - premature exit
    throw Error(
      `'versions' is a reserved class property, but was found in ${tagName}'s class`
    );
  }
  // inject version info into component-defining class - this is needed by extractDependencies(..) above and also helps for live debugging
  mainComponentClass.versions = dependentsVersionInfoObject;
  // process all classes, interpreted as dependents...
  customElementClasses.forEach(customElementClass => {
    // extract tag name from class
    const { tagName: dependentTagName } = customElementClass;
    // dereference version info to get NPM version
    const npmVersion = dependentsVersionInfoObject[dependentTagName];
    // build npm-versioned tag name
    const npmVersionedTagName = versionedTag(dependentTagName, npmVersion);
    // define versioned custom element in global registry, using a unique new class with same behaviour
    defineOnce(npmVersionedTagName, class extends customElementClass {});
  });
};

const defineVersioned = (customElementClasses, versionInfo, instance) => {
  // classify modes:
  // mode 1?
  if (instance)
    return defineVersionedDependentComponents(
      customElementClasses,
      versionInfo,
      instance
    );
  // mode 2?
  if (typeof versionInfo === 'string')
    return defineCustomVersionedComponents(customElementClasses, versionInfo);
  // mode 3!
  return defineVersionedMainComponent(customElementClasses[0], versionInfo);
};

// prettier-ignore
const versionedHtml =
  componentInstance =>
    (strings, ...args) => {
    // derive class from instance
      const componentClass = componentInstance.constructor;
      // extract dependency info by looking at versions of component
      const [tagNames, versions] = extractDependencies(componentClass);
      // rewrite incoming array of static parts of template literals
      // in such a way that tags of dependent components are versioned:
      let newStrings = strings;
      // 1. rewriting proper, turning tags into versioned ones with funny initial brackets (see newTag(...) above)
      for (let i = 0, n = tagNames.length; i < n; i++) {
        newStrings = rewrite(newStrings, tagNames[i], versions[i]);
      }
      // 2. finish rewriting by converting funny initial brackets back to standard ones
      for (let i = 0, n = newStrings.length; i < n; i++) {
        newStrings[i] = newStrings[i].split(RESERVED_CHARACTER).join('<');
      }
      // fake a proper TemplateResult because lit now checks the .raw property
      // (cf. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#raw_strings)
      newStrings.raw = newStrings;
      // let lit-html see the rewritten static parts together with the
      // unchanged dynamic arg(ument)s
      return html(newStrings, ...args);
    };

export { defineVersioned, versionedHtml };
