# Architecture

## Summary

This is a living document for the architecture of the Pattern Library
version 2 (short: **v2**). We strive to describe the big picture here,
but also document how we got there. This includes the forces that
shape the architecture, such as choice of framework or self-imposed
desiderata and external real-world constraints, but also the rational
process by which we evolve it.

## What is the Pattern Library?

The Pattern Library is a custom components library developed by [AXA
Winterthur](https://axa.ch) with the intent of harmonizing UI
components across its web sites.

## Big Picture

To be filled.

## New Foundation

Version 2 is based on
**[lit-element](https://lit-element.polymer-project.org)**, a simple
base class for creating fast, lightweight web components provided by
Google.

Web components are also known as [Custom
Elements](https://developers.google.com/web/fundamentals/web-components/customelements)
(short: **CE**), a browser-native technology supported by [web
standards](https://html.spec.whatwg.org/multipage/custom-elements.html) and poly-fillable for older browsers.

[Here](https://raw.githubusercontent.com/axa-ch-webhub-cloud/pattern-library/develop/FOUNDATION.md) you can read how we arrived at this choice.

By default, and in contrast to v1, we use [Shadow
DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom)
wherever possible, mainly because it enables scoped CSS (which
supports our desideratum 4 below). This is also lit-element's default.

Conversely, we *don't* extend built-in native HTML
elements, again in contrast to v1. We share the [sentiment](https://github.com/Polymer/lit-element/issues/417#issuecomment-453208618) of
lit-element to not support them as long as WebKit refuses to implement them. 

As part of the new foundation, we also chose a new approach to export
components to React, based on
[skatejs/val](https://github.com/skatejs/val). Since JSX is just [syntactic
sugar](https://reactjs.org/docs/react-without-jsx.html) for calls to a
tag-creator function
[``React.createElement``](https://reactjs.org/docs/react-api.html#createElement),
the main idea of skatejs/val to wrap and instrument any such function applies straightforwardly.

## How we learn

Here is a necessarily incomplete list of ways we learn and inform
ourselves on what to do better in v2:

1. Look at v1 code and identify shortcomings as well as good parts.
2. Look at
[issues](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/) filed by
v1 users. Then generalize to distill fewer *fundamental issues* from these, to be
addressed in v2.
3. Within the v2 foundation, conduct targeted experiments guided by the
outcome of 2. The goal of each experiment is to demonstrate *how to
solve* one or more fundamental issues at hand.
4. Feed back insights from 2. and 3. into *lived best practices* for
implementing custom components.

## Desiderata

The outcome of Pattern Library v2 is a foundation on which to build
custom components, plus a set of actual custom
components which evolves over time. We desire that:

1. components are usable under [React](https://reactjs.org/).
1. components are usable as stand-alone HTML.
1. components are usable in a cross-browser fashion for the set of browsers that
AXA-Winterthur cares about, including Internet Explorer 11+.
1. components are usable in a plug-and-play way (details to be specified).
1. overall complexity of component implementation in v2 is markedly reduced,
compared to v1.


## Fundamental Issues

To classify an issue as fundamental is ultimately a judgement call made by a
domain expert. While this will always remain subjective, we try to
motivate *why* an issue was included in the list below, before
sketching *how* it can be adressed.

1. **Excessive complexity of v1 foundation**.
   - **Source:** v1 code inspection, sheer number of
   [issues](https://github.com/axa-ch-webhub-cloud/pattern-library/issues).
   - **Why:** Reasonable to assume v1 complexity is a root cause of
   unsolved fundamental issues and edge cases.
   - **How:** use new foundation as simplicity *enabler*, pay attention
   to simplest-possible-solution on per-component basis to overall satisfy
   desideratum 5.
   
1. **Dynamic children**.
   - **Source:**
   e.g. [#778](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/778),
   [#859](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/859).
   - **Why:** Idiomatic to specify children of a custom component as
   function of props or state and expect re-render if function inputs
   change, esp. given desiderata 1, 4.
   - **Experiment:**
   [lit-element-and-dynamic-children](https://github.com/axa-ch-webhub-cloud/lit-element-and-dynamic-children)
   &nbsp; ([**Demo**](http://localhost:6006/?path=/story/demo--dynamic-children-react))
   - **How:** If by default we don't transform children in any
   way, simple HTML composition ensures that both the static and the dynamic case
   work out of the box. Mere styling as one frequent case does not need
   transforms, declarative CSS suffices. If we would ever need to override that default, we
   could  transform initial children using a
   [TreeWalker](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker)
   and catch dynamic updates thereafter via a
   [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). Beware
   of [caveats](https://github.com/Polymer/lit-element/issues/619#issuecomment-473344968).

   *Note: There are no known examples demonstrating a need for the
    dynamic-transform case at the moment. Since CEs implement a style
    guide, the ensuing focus on styling makes such cases unlikely at best.*

1. **Controlled Inputs**.
   - **Source:**
   [#439](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/439),
   [#793](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/793)
   - **Why:** In React, it is quite idiomatic (though not mandatory) to
   control the ``value`` or ``checked`` properties of ``<input>,
   <select>``, overriding built-in native behaviour.
   - **Experiment:**
   [react-with-lit-element](https://github.com/axa-ch-webhub-cloud/react-with-lit-element) &nbsp; ([**Demo**](http://localhost:6006/?path=/story/demo--controlled-inputs-react))
   - **How:** Looking at ``value,checked`` we can  determine whether a CE should be controlled.
    We then monitor UI-state-changing events via [lit-element event
    listeners](https://lit-element.polymer-project.org/guide/events) and
   let both property changes and user events lead to a post-render
   correction of the visual state of an input element to conform with
   the controlled state (we can use native DOM APIs for that).

1. **Component Nesting**.
   - **Source:**
   [#778](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/778).
   - **Why:** Ease of authoring without fear of breaking things. We need to be able to reason locally that
   each CE is correct, and have assurance they stay correct when
   put together in arbitrary ways, including
   nested 'components-in-components'. This presumes a [principle of
   compositionality](https://en.wikipedia.org/wiki/Principle_of_compositionality).
   - **Experiment:**
   [lit-element-and-dynamic-children](https://github.com/axa-ch-webhub-cloud/lit-element-and-dynamic-children),
   specifically its custom-tables-in-custom-tables aspect.
   - **How:** By not disturbing the natural compositionality of HTML, see 2.

1. **Deduplicated Styles**.
   - **Source:** [#492](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/492).
   - **Why:** DOM weight increases proportional to the number of CE
   instances per page, which matters on mobile &mdash; if each instance redundantly includes
   styling, the increase is more dramatic.
   - **Experiment:** [lit-element-and-dynamic-children](https://github.com/axa-ch-webhub-cloud/lit-element-and-dynamic-children).
   - **How:** Store a reference to the document that each instance
   belongs to in a global ``WeakMap``,
   render inline ``<style>`` only if reference count is 1. *Benefit:
   ``<style>`` introduced lazily at usage site when CE first used.* *Drawback: Doesn't work
   when Shadow DOM with scoped CSS is used.* For very modern browsers [constructable
   stylesheets](https://developers.google.com/web/updates/2019/02/constructable-stylesheets)
   solve the issue also in the Shadow DOM case (Chrome 73+; feature-detecting and
   exploiting this is already a built-in feature of lit-element).

1. **Concise HTML templates**.
   - **Source:** [#583](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/583).
   - **Why:** CE implementors need a *concise*, developer-friendly way of specifying *parametric* HTML
   content to be rendered, since many CEs need to be built and since
   they would normally react to properties/attributes.
   - **How:** lit-element provides this out of the box by including the
   awesome [lit-html](https://lit-html.polymer-project.org/). The key ingredient is [tagged template
   literals](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/template_strings#Tagged_Template-Strings)
   which are authored in a syntax very close to JSX, like 
   this: <br> ``render() { return html `<p>${this.myProp}</p>`; }``.

1. **Inherited CSS Properties**.
   - **Source:** [#524](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/524).
   - **Why:** CE users need assurance that page CSS
   cannot fundamentally destroy CE-intrinsic styling, otherwise
   styleguide conformance needs to be checked on a case-by-case basis.
   - **Experiment:** 
   [lit-element-and-dynamic-children, commit 107c26e](https://github.com/axa-ch-webhub-cloud/lit-element-and-dynamic-children/commit/107c26e3e9d58bd112399f9035aaa3082fe25924).
   - **How:** While inherited CSS properties like ``text-align`` can
   indeed even pierce a Shadow DOM boundary,  it is easy for an CE
   implementor to prevent this by declaring fixed values for the
   properties they care about. As an example, in CE-intrinsic styling
   one could write ``text-align: initial`` to block an inherited
   ``text-align: center`` from external styling.

1. **Name Clashes With Built-in DOM Properties**.
   - **Source:** [#451](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/451).
   - **Why:** CE implementors and users alike are interested in natural
   naming for CE properties &mdash; allowing a property like
   ``prefix`` despite a built-in property with the same name aids the
   *principle of least surprise*.
   - **How:** By basing v2 on lit-element, clash avoidance comes for free, in the
   form of *automatic* invisible prefixing of declared properties with
   ``__``. Continuing with the example, ``prefix`` and ``__prefix``
   will no longer clash internally under v2.
   
1. **Real Properties**.
   - **Source:** [#397](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/397).
   - **Why:** CE users expect to be able to use real properties with any permitted
   JS value type &mdash; constant (de-)serialization to and from the
   ``String`` data type is cumbersome and inefficient.
   - **How:** lit-element allows [real, dynamically observed
   properties](https://lit-element.polymer-project.org/guide/properties)
   out of the box, including ``Array, Object`` data types. Reflecting
   these to attributes is optional. For event handlers, ``Function``
   is supported as well.
   
1. **CSS Specificity**.
   - **Source:** [#383](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/383).
   - **Why:** CE consumers expect not have to fight CSS specificity issues
   originating from the pattern library itself.
   - **How:** For v2 CEs using Shadow DOM, intrinsic styling is both
   invisible and scoped, preventing the issue. For v2 CEs that need to
   avoid Shadow DOM, intrinsic CSSc can be manually scoped using a
   pattern like <br>
   ``my-ce <rest-of-CSS-selector> { ... }``, making undesired
   external CSS overrides more unlikely (because they would need to
   mention the name of the CE, not just some accidentally duplicated
   internal class name).

1. **Minimal Rerendering**.
   - **Source:** e.g. [#408](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/).
   - **Why:** Re-rendering can not only lead to expensive browser paint
   operations, but might also produce unwanted side effects (like losing focus
   on an ``<input>``).
   - **Experiment:** [react-with-lit-element](https://github.com/axa-ch-webhub-cloud/react-with-lit-element).
   - **How:** lit-element is *extremely good* at avoiding unnecessary
   re-rendering *and* minimizing the amount of DOM subject to
   re-rendering thanks to [lit-html](https://docs.google.com/presentation/d/1KVYiupSAoFyECDwJwxQlJTk8RvSzhg-UKGpZ8-nFm3I/edit#slide=id.g4dceb8c29b_3_221). Our particular strategy for controlled inputs
   does not lose focus. In the general case, the ``updated()`` [life-cycle](https://lit-element.polymer-project.org/guide/lifecycle)
   method of lit-element would allow to correct any reversible post-rendering UI-state
   issues like focus loss, since it is guaranteed to be called after ``render()``.

1. **React refs**.
   - **Source:** [#778](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/778).
   - **Why:** React users expect to be able to place [`ref`](https://reactjs.org/docs/refs-and-the-dom.html)
   pseudo-properties on CEs, especially in the idiomatic callback
   style. In the latter style, they expect to be called back on both
   mounting and unmounting of a CE.
   - **Experiment:** [react-with-lit-element, commit 8888048](https://github.com/axa-ch-webhub-cloud/react-with-lit-element/commit/88880489c644f6637a73d58a58c2b7dc8ad99616)
   - **How:** When exporting a CE to React, we use a wrapper around React's [``createElement``](https://reactjs.org/docs/react-api.html#createElement) called
   [skatejs/val](https://github.com/skatejs/val). It comes with
   built-in ``ref`` support. Unfortunately, wrapped CEs are seen by React as
   functional components, whereas React's ``ref`` support is
   restricted to class-defined components. However, in React version **16.3.0** or later
   we can use [``React.forwardRef``](https://reactjs.org/docs/forwarding-refs.html)
   to forward the ``ref`` to the wrapper, thus restoring full ``ref`` support.

   *Note: ``React.findDOMNode`` is not considered here, since it has
    been [deprecated in Strict Mode](https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage).*

1. **FOUC**.
   - **Source:** [#365](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/365).
   - **Why:** CE users expect to be able to suppress or at least
   minimize the F(lash)O(f)U(nstyled)C(ontent) that results from using
   CEs before their JS definitions have been loaded e.g. over a slow network.
   - **Experiment:** [lit-element-and-fouc](https://github.com/axa-ch-webhub-cloud/lit-element-and-fouc)
   - **How:** Place a short critical inline CSS style in a page's
   ``<head>`` that uses ``:not(:defined) {...}`` to regulate how
   undefined CEs are rendered in general. This does not cover Internet
   Explorer 11, though &mdash; but via server-side browser detection or
   conditional IE includes we can use ``my-ce1, my-ce2,
   ... {...}`` instead to achieve the same effect.

   *Note: the experiment cited above shows that, depending on the exact details of CE-intrinsic
   styling, FOUC compensation can only be approximative. The reason is
   that the   __precise__ geometry of a CE can only be known after it is defined
   together with all of its children. In practice, good-enough FOUC
   compensation is the goal.*

1. **Events**.
   - **Source:** [#846](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/846),[#778](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/778).
   - **Why:** CE users expect to register event callbacks on a CE
   using simple mechanisms that feel idiomatic to the framework within which
   they work (see e.g. desideratum 1). They furthermore expect to be called back *reliably*
   on event occurrence.
   - **Experiment:**
   [react-with-lit-element](https://github.com/axa-ch-webhub-cloud/react-with-lit-element),
   cf. App.js under React.
   - **How:** We use lit-html's built-in [``@event``](https://lit-element.polymer-project.org/guide/events) notation
   inside CEs built with lit-element. The [skatejs/val](https://github.com/skatejs/val)
   wrapper for React export preserves registered event callbacks. As a
   result, event handling becomes reliable.

   *Note: Handlers for React's synthetic events can be explicitly passed as props,
    as demonstrated for ``onChange`` in the experiment above. For generic support,
    see [this skatejs/val issue](https://github.com/skatejs/val/issues/26).*

1. **SSR**.
   - **Source:** [e.g. this external issue](https://github.com/Polymer/lit-html/issues/461)
   - **Why:** CE users hope to use CEs in a S(erver-)S(ide)R(endering)
   scenario, e.g. motivated by SEO concerns.
   - **Experiment:** to be done. However, there is an external [lit-html-server](https://github.com/popeindustries/lit-html-server).
   - **How:** to be filled.

1. **React Router**.
   - **Source:** [#859](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/859)
   - **Why:** CE users expect to use CEs in scenarios controlled by [React Router](https://reacttraining.com/react-router/web/api/). In particular, they expect no surprises with respect to child updateability when routes change.
   - **Experiment:** [lit-element-and-react-router](https://github.com/axa-ch-webhub-cloud/lit-element-and-react-router).
   - **How:** The most critical case of instantiating and updating
   components under React Router appears to be ``<Route component>``,
   since the
   [documentation](https://reacttraining.com/react-router/web/api/Route)
   details how ``React.createElement`` is used *internally* to create
   the component that should be rendered when the route in question
   matches. Exported CE
   components have already been wrapped by
   [skatejs/val](https://github.com/skatejs/val) for React
   compatibility. Creating a component again from there unsurprisingly
   works, since we're back to the case of dynamic children under 2. above.

1. **Unit Testing**.
   - **Source:** [#786](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/786)
   - **Why:** CE users hope to write unit tests involving CEs,
   including indirect scenarios like React components using CEs as
   leaf nodes. In particular, they want to write these unit tests in [jest](https://jestjs.io/).
   - **Experiment:** to be done. This needs an experiment since unit
   tests typically run in node.js, which does not come with DOM out of
   the box and needs a DOM emulation like [jsdom](https://github.com/jsdom/jsdom) to work with CE. The
   experiment should evaluate the quality and fidelity of the
   emulation for the purpose at hand, as well as determine which polyfills are necessary.
   - **How:** to be filled.


## Best Practices in Component Implementation

See also [Google's best
practices](https://developers.google.com/web/fundamentals/web-components/best-practices).

1. Don't impose classes on a CE from within. Using classes is reserved
for the author *using* your CE. If you need CE-internal styling to
react to CE configuration, use attribute selectors instead. For
example, when you need to react to the presence of Boolean attribute ``open``,
you could write ``:host([open]) .my-class {/* style open state */}``.

1. Minimize serialized complex attribute values for CEs. While you
*could* put JSON values there, these are cumbersome to specify and
read, and require expensive (de-)serialization operations.

1. Maximize composable HTML in CEs that allow children. This way we
mimic the idiomatic behaviour of native HTML's
``<select>,<ul>,<ol>,<dl>,<table>``, which all allow an author to freely
specify their children, yet come with clear built-in expectation as to
what children are semantically appropriate.

<!-- Can we use [hooks](https://reactjs.org/docs/hooks-intro.html) for
a functional specification of stateful components (e.g. building from
[this](https://stackblitz.com/edit/typescript-lit-html-hooks-gyrkjs))? -->