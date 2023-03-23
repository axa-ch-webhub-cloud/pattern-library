Component Versioning
====================

## Problem Statement

We want to support component versioning in a [Micro Frontend](https://micro-frontends.org/) architecture.

Micro Frontends are an emerging new paradigm on how to decompose a web page or web app into major features, each of which is owned and developed by an independent team.

Think of a micro frontend as an application written in SPA style that suddenly finds itself having to coexist with other SPAs on the same webpage. Furthermore, imagine each of these SPAs being developed by an independent team of software developers, who each chose different versions of UI components for their SPA. How can all these UI components in their different versions coexist on the same webpage without giving up team independence? That's the versioning dilemma in a nutshell.

Have a look [here](https://github.com/axa-ch-webhub-cloud/midgard/blob/develop/DOCUMENTATION.md#pattern-library-versioning) for more details.

## Constraints

The solution to the versioning dilemma should respect a few constraints:

1. Cross-browser support
1. Works for component with and without [ShadowDOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
1. Ability to choose either the latest or a particular fixed npm version for a component
1. Ability to choose a user-defined version name
1. Minimal code updates when switching versions, both in component code and applications
1. Be friendly to testing

## Solution

Our solution automatically injects `package.json` version information into component code at build time. With PL components now being **version-aware _at runtime_**, we can **rewrite custom element names** under the hood to include version information. For those components that cannot use ShadowDOM, in particular form elements, we also **prefix CSS rule selectors** with versioned component tag names. The **unversioned component name**  always represents the first-loaded component on the page, and may be used when there is no possibility of conflict. Otherwise, each SPA can _either_ use an **npm-versioned component** such as `<axa-datepicker-7-0-2>` _or_ employ a **user-defined versioning** scheme, e.g. using the reserved SPA name as unique versioning suffix on a given web page! This leads to components such as `<axa-datepicker-rsv>`, designating the datepicker used in a SPA named `rsv` (whose actual npm version is then defined in the SPA's own package.json dependencies).

This solution satisfies all of our constraints:

1. It enjoys cross-browser support because it doesn't use any new mechanisms, and the old, unversioned components are cross-browser ready (if necessary, using polyfills shipped with them).
1. For components with ShadowDOM, CSS is scoped to the component automatically (using ShadyCSS via lit-element for Internet Explorer). For components without it, our components have a component-tag-name prefix in every CSS rule already (just like how ShadyCSS does it), and, by versioning this prefix, scoping is preserved.
1. To use the latest version of a component, an application developer just issues the appropriate directive in her package.json dependencies (e.g. `latest` or `^minimumVersion`) and uses the generic component tag name. To use a specific version, she likewise fixes the exact version (e.g. `7.0.2`) and uses the versioned component tag name.
1. To employ user-defined versioning, an application developer employs a PL-provided helper function that accepts a version string.
1. Our solution stores npm versioning information only in component package.jsons as the single source of truth. Making this information available at runtime is automatic and requires no code changes. For application authors, code change is as minimal as possible under the user-defined versioning scheme: choose an application-specific unique version string once, and call the PL-provided helper function once for every component with that unique version!
1. Under the user-defined versioning scheme, all PL component names are invariant under npm version changes. Therefore, after tests are rewritten once to reference user-defined names like `axa-datepicker-rsv` they do **not** need to be updated again every time a npm version changes.

Getting Practical
-----------------

SPA authors developing under React are familiar with the **old way of including components**:
```js
import { createElement } from 'react';

import createAXAButtonReact from '@axa-ch-webhub-cloud/button/lib/index.react';

export const AXAButton = createAXAButtonReact(createElement);

// use <AXAButton ... /> in your JSX later
```

Here is the recommended **new way of including _user-versioned_ components**:
```js
import { createElement } from 'react';

import createAXAButtonReact from '@axa-ch-webhub-cloud/button/lib/index.react';

const podNameAsVersionSuffix = 'YOUR UNIQUE SPA SHORT-NAME HERE'; // e.g. 'rsv'

export const AXAButton = createAXAButtonReact(createElement, podNameAsVersionSuffix);

// *again* use <AXAButton ... /> in your JSX later, without fear of SPA-to-SPA conflicts
// due to different <axa-button> versions.
```

Apart from the aforementioned best practice for SPA authors, other versioning schemes are
possible and up to the user. For example, a ***numerical versioning scheme*** would look like this:
```js
import { createElement } from 'react';

import createAXAButtonReact from '@axa-ch-webhub-cloud/button/lib/index.react';

const numericalVersion = '4.1.2'; // must match with SPA dependency @axa-ch-webhub-cloud/button's version

export const AXAButton = createAXAButtonReact(createElement, numericalVersion);

// In the DOM, the button would appear as <axa-button-4-1-2>
```

An ***automatic _npm_ version*** could be obtained like this:
```js
const automaticVersion = tagName => window.customElements.get(tagName).versions[tagName];
// use like this: automaticVersion('axa-button')
```

For **native** use of versioned components, applications may choose how to consume a component:
```html
<!-- for sake of illustration, assume the following script provides version 4.1.2 of axa-button -->
<script src="node_modules/@axa-ch-webhub-cloud/button/dist/index.js"></script>
<!-- always up-to-date, but risky: don't specify a version -->
<axa-button>OK</axa-button>
<!-- safe, but requires manual editing whenever version changes: fix a particular npm version -->
<axa-button-4-1-2>OK</axa-button-4-1-2>
```
