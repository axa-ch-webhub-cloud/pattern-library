Component Versioning
====================

## Problem Statement

[Micro Frontends](https://micro-frontends.org/) are an emerging new paradigm on how to decompose a web page or web app into major features, each of which is owned and developed by an independent team.

In the AXA Switzerland context these are known as PODs. PODs are _not_ sandboxed via `iframe`s for various good reasons, so care must be taken to avoid POD-to-POD conflicts on the same web page. PODs may use higher-level frameworks, in particular [React](https://reactjs.org/). Technically, PODs are [npm](http://npmjs.org/) packages.

Simultaneously, PODs are encouraged to use [AXA pattern-library](https://github.com/axa-ch/patterns-library) (**PL**) components for their UI aspects, to reap the many benefits of company-wide design systems in a practical and battle-tested implementation. PL components are built ontop of Google's [lit-element](https://lit-element.polymer-project.org/), hence ultimately use browser-native [Custom Elements](https://developers.google.com/web/fundamentals/web-components/customelements) (**CE**). They are distributed as separate [npm](http://npmjs.org/) packages.

Herein lies the problem: PODs are developed by independent teams, hence might employ different versions of PL components. One team might use the `<axa-datepicker>` component at version 4.0.1 in their POD, another might use `<axa-datepicker>` at version 7.0.2.
There can be good reasons to not always go with the latest version, such as company-mandated code freezes or fixed release and testing schedules, or even avoiding a particular bug or preferring a feature that was removed in the latest version.

Once PODs come together on the same web page, however, only the first-loaded version of a same-named component will be usable, because the CE specification mandates that CE names must be [unique](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define#Exceptions) per page. At face value, this threatens the independence of teams, because they would now have to coordinate choosing a common version of a component, while having different per-team priorities and constraints.

Therefore we are seeking a solution that allows PL components of differing versions to coexist on a page, with their functionality - defined by JavaScript - and their styling - defined by CSS - isolated from one another.

## Constraints

The solution to the versioning dilemma should respect a few constraints:

1. Cross-browser support
1. Works for component with and without [ShadowDOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
1. Ability to choose between latest and particular npm version
1. Ability to choose user-defined version name
1. Minimal code updates when switching versions, both in component code and applications
1. Be friendly to testing

## Solution

Our solution automatically injects `package.json` version information into component code at build time. With PL components now being **version-aware _at runtime_**, we can **rewrite custom element names** under the hood to include version information. For those components that cannot use ShadowDOM, in particular form elements, we also **prefix CSS rule selectors** with versioned component tag names. The **unversioned component name**  always represents the first-loaded component on the page, and may be used when there is no possibility of conflict. Otherwise, each POD can _either_ use an **npm-versioned component** such as `<axa-datepicker-7-0-2>` _or_ employ a **user-defined versioning** scheme, e.g. using the reserved POD name as unique versioning suffix on a given web page! This leads to components such as `<axa-datepicker-rsv>`, designating the datepicker used in a POD named `rsv` (whose actual npm version is then defined in the POD's own package.json dependencies).

This solution satisfies all of our constraints:

1. It enjoys cross-browser support because it doesn't use any new mechanisms, and the old, unversioned components are cross-browser ready (if necessary, using polyfills shipped with them).
1. For components with ShadowDOM, CSS is scoped to the component automatically (using ShadyCSS via lit-element for Internet Explorer). For components without it, our components had a component-tag-name prefix in every CSS rule already (just like what ShadyCSS does), and by versioning that prefix scoping is preserved.
1. To use the latest version of a component, an application developer just issues the appropriate directive in her package.json dependencies (e.g. `latest` or `^minimumVersion`) and uses the generic component tag name. To use a specific version, she likewise fixes the exact version (e.g. `7.0.2`) and uses the versioned component tag name.
1. To employ user-defined versioning, an application developer employs a PL-provided helper function that accepts a version string.
1. Our solution stores npm versioning information only in component package.jsons as the single source of truth. Making this information available at runtime is automatic and requires no code changes. For application authors, code change is as minimal as possible under the user-defined versioning scheme: choose a application-specific unique version string once, call the PL-provided helper function for every component with that unique version!
1. Under the user-defined versioning scheme, all PL component names are invariant under npm version changes, so after tests are rewritten once to reference user-defined names like `axa-datepicker-rsv` they do **not** need to be updated everytime a npm version changed.

Getting Practical
-----------------

POD authors developing under React are familiar with the **old way of including components**:
```js
import { createElement } from 'react';

import createAXAButtonReact from '@axa-ch/button/lib/index.react';

export const AXAButton = createAXAButtonReact(createElement);

// use <AXAButton ... /> in your JSX later
```

Here is the recommended **new way of including _user-versioned_ components**:
```js
import { createElement } from 'react';

import createAXAButtonReact from '@axa-ch/button/lib/index.react';

const podNameAsVersionSuffix = 'YOUR UNIQUE POD SHORT-NAME HERE'; // e.g. 'rsv'

export const AXAButton = createAXAButtonReact(createElement, podNameAsVersionSuffix);

// *again* use <AXAButton ... /> in your JSX later, without fear of POD-to-POD conflicts
// between different <axa-button> versions.
```
