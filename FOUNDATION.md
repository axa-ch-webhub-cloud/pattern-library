# Foundation

## Motivation

The AXA Pattern Library (short: **PL**) aims for a plug-and-play framework of web components that are conformant to AXA's style guide 
and ready to use within different frontend technology stacks (native HTML, React, ....).

As such, PL needs both a solid foundation and best practices for specifying and using its components. This document explores the 
option space of such a foundation.

## Why a foundation?

[@justinfagnani](https://twitter.com/justinfagnani/status/1090689541206302720)
```
Web Components are really low level.

They only tell you *where* (custom element instance, shadow root) and
*when* (element creation, connected, attribute change, etc) to render. 
But they don't say *how* to render. 

That's up to you.

[...]

lit-html and LitElement are two helpers [...] that help with the when/what/how breakdown.

LitElement: (when) property changes & render batched/async. (where) setup ShadowRoot.
lit-html: (what) render DOM (how) declarative/functional
```

## Choosing a foundational framework

In early spring 2019, PL already exists within AXA in version 1 (short: **v1**), realising an organically grown inhouse option (short: **IH**).

Overarching **desiderata** that all options for a foundational frameworks should satisfy:
* use custom web elements (short: **CE**)
* lightweight, relatively small bundle size
* use ES modules
* interop with common frontend frameworks possible (native, React, Angular, Vue,...)

Questions:
* Other options than IH?
* Criteria to decide between options?

### Foundation options

1. Continue to use IH by AXA
1. Use [lit-element](https://lit.dev/docs/api/LitElement/) by
Google ([BSD 3-clause
License](https://github.com/lit/lit/blob/main/LICENSE) +
[Patent clause](http://polymer.github.io/PATENTS.txt)). Lit-element
allows ShadowDOM/scoped CSS, and uses [&lt;template&gt; under the
hood](https://lit.dev/docs/libraries/standalone-templates/#rendering-lit-html-templates). 

### Criteria for evaluating foundation options

1. What is the [bus factor](https://en.wikipedia.org/wiki/Bus_factor): If *N* core developers of a software were hypothetically run over by a bus, would further development of the software be in grave danger?
1. How stable is it?
1. Who else uses it or depends on it, is there an eco system around it?
1. Closeness to a major browser vendor (to tap into deep knowledge when relevant specs are not detailed enough)?
1. Quality of code?
1. Quality of documentation?
1. Supports extension of built-ins?

### Evaluation of foundation options

#### IH by Axa
* bus factor 1-2. 
* Stability unclear, not yet production-ready because of [major issues](https://github.com/axa-ch-webhub-cloud/pattern-library/issues).
* Only used inhouse by AXA teams (18 Github stars &mdash; these are the 2019 numbers at the time of decision-making).
* Devs not close to any major browser vendor. 
* Quality of code variable, not typed JS.
* Quality of documentation low, too little, spotty.
* Built-ins can be extended, but quality and coverage of necessary Safari polyfill unclear.

#### lit-element by Google
* bus factor [>= 2](https://github.com/lit/lit-element/graphs/contributors), [code owners](https://github.com/lit/lit-element/blob/master/.github/CODEOWNERS) are Google engineers that could be replaced by other Google engineers. 
* Stability: [production-ready](https://www.polymer-project.org/blog/2019-02-05-lit-element-and-lit-html-release).
* User base growing (1320 Github stars, 3811 for lit-html &mdash; these are the 2019 numbers at the time of decision-making, now we have 9.9k Github stars in early 2022 for [lit](https://github.com/lit/lit)), anecdotal evidence via [retweets from Justin Fagnani](https://twitter.com/justinfagnani), growing tool support as evidence for growing eco system (ibid.).
[lit-element is officially recommended for new projects over
Polymer](https://www.polymer-project.org/blog/2018-05-02-roadmap-faq#polymer-3.0-or-litelement).
Additionally, [YouTube built on Polymer 1/CE version 0](https://react-etc.net/entry/youtube-is-being-rebuilt-on-web-components-and-polymer) throws deprecation warnings for removal of CE v.0 in March 2019 = a candidate for rewrite in lit-element?! 
* Lit-element core devs are Google engineers, can get advice from Blink platform engineers.
* High code quality, Typescript, comprehensive + understandable answers  in issues, suggesting deep understanding, e.g. [this issue on synchronous rendering](https://github.com/Polymer/lit-element/issues/365#issuecomment-448075179). 
* High [documentation](https://lit-element.polymer-project.org/guide) quality, [dedicated technical writer](https://github.com/Polymer/lit-element/commits?author=katejeffreys).
* No built-ins extension [planned](https://github.com/Polymer/lit-element/issues/417#issuecomment-453208618) until Safari's stand on the issue changes.

### Choosing the foundation

The evaluation clearly points to **lit-element** as the preferred choice.

## Using the foundation

### Background

CEs are dual-faced, having a HTML and a Javascript side. When instantiated via HTML, they inherit its limitations:

* attributes must be string-valued &mdash; complex data structures must be serialized for conformance
* global attributes are reserved &mdash; *class, id, title, onclick, &hellip;* have built-in behaviour
* semantic wellformedness of children is not enforced, since HTML is not typed (and browsers are very forgiving)

When instantiated via JavaScript, additional possibilities are enabled:

* properties can be used &mdash; allowing any JS data type as value

### Principles

#### Prefer declarative HTML over complex properties for CE content
CEs might be used in a pure-HTML scenario. For example, Markdown and AEM components support raw HTML.

In such a setting, it could be very cumbersome to author large and complex stringified JSON values for CE attributes. In contrast specifying a CE content subtree via HTML looks quite idiomatic and can be handled with existing authoring tools, profits from nice syntax highlighting, etc.

Besides, in the limit large values turn into infinite values, which in practice means streaming. This is not as outlandish as it seems at first sight, since event streams of *a priori* unbounded length arise naturally in practice (e.g. Twitter tweets). In the streaming case, there is a clear difference between stringified JSON and HTML: only the latter enjoys native browser support, since the browser's HTML parser is a streaming parser. In the future, [streaming fetch() into CEs](https://lit.dev/docs/templates/directives/) can be expected in more [browsers](https://developer.mozilla.org/de/docs/Web/API/ReadableStream#Browser_compatibility) than today and [early experiments](https://jakearchibald.com/2016/streaming-template-literals/) will give way to clean implementation. The point here is that specifying a CE content subtree in a declarative fashion via HTML enjoys broader applicability and is more future-proof, since it includes large and  even conceptually infinite content, i.e. the streaming scenario. 

It is worth noting that this principle is a preference rather than an absolute requirement &mdash; clearly there can be cases where complex properties can be more concise.

#### Flexible React-CE bridge

React currently has problems using CEs as-is. They stem from the following assumptions:

- React knows only properties (which can take any JS value type), CE natively uses string-valued attributes accessed with set/getAttribute.
- React has its own synthetic event model, CEs use native events (including CustomEvent-constructed ones).
- React appears to have a whitelist of known HTML tags and their attributes, CEs don't appear in such a whitelist.

Because of these and other differences the [recommended
approach](https://reactjs.org/docs/web-components.html) is to **wrap
each CE in a React component** before exposing it to authors working
in React. 

The central question then becomes what's the most elegant, feature-complete and robust approach to bridging the React-CE gap.

The IH approach uses a Higher-Order Component (short: **HOC**)
*withReact*, derived from
[github.com/webcomponents/react-integration](https://github.com/webcomponents/react-integration). This
is used in practice to wrap every CE separately, resulting in a long
export list of React components provided by the PL. The downsides of
current *withReact* are, that it executes bridging code in numerous
phases of the React lifecycle at runtime, making it a relatively
heavy-weight approach, and that it has unsolved bugs. Can we do
better? 

A new approach by the original author of the HOC is
[github.com/skatejs/val](https://github.com/skatejs/val) (127 LoC, maintained).
Its essence is to replace the JSX tag function of each framework, here
*React.createElement*, with a custom tag function, which contains
attribute/event/property management logic besides calling the original
tag function. When using an appropriate @jsx pragma directive that is
interpreted at build time, one can continue to use idiomatic JSX to
write the CE wrapper. **skatejs/val appears worth trying out as an
alternative.** 

The ultimate goal would be a transpiler which creates CE-React
'bindings' automatically; we may have to incrementally approach this
goal via building a series of significant manual wrappers before
distilling their essence into such an automated approach. 
