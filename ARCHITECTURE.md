# Architecture

## Summary

This is a living document for the architecture of the Patterns Library
version 2 (short: **v2**). We strive to describe the big picture here,
but also document how we got there. This includes the forces that
shape the architecture, such as choice of framework or self-imposed
desiderata and external real-world constraints, but also the rational
process by which we evolve it.

## What is the Patterns Library?

The Patterns Library is a custom components library developed by [AXA
Winterthur](https://axa.ch) with the intent of harmonizing UI
components across its web sites.

## Big Picture

To be filled.

## Framework

Version 2 is based on
**[lit-element](https://lit-element.polymer-project.org)**, a simple
base class for creating fast, lightweight web components provided by
Google.

Web components are also known as [Custom
Elements](https://developers.google.com/web/fundamentals/web-components/customelements)
(short: **CE**), a browser-native technology supported by web
standards and poly-fillable for older browsers.

[Here]() you can read how we arrived at this choice.

By default, and in contrast to v1, we use [Shadow
DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom)
wherever possible, mainly because it enables scoped CSS (which
supports our desideratum 4 below). This is also lit-element's default.

Conversely, we *don't* extend built-in native HTML
elements, again in contrast to v1 but in line with what
lit-element does (which in turn points to WebKit's refusal to implement them).

## How we learn

Here is a necessarily incomplete list of ways we learn and inform
ourselves on what to do better in v2:

1. Look at v1 code and identify shortcomings as well as good parts.
2. Look at
[issues](https://github.com/axa-ch/patterns-library/issues/) filed by
v1 users. Then generalize to distill fewer *fundamental issues* from these, to be
addressed in v2.
3. Within the v2 framework, conduct targeted experiments guided by the
outcome of 2. The goal of each experiment is to demonstrate *how to
solve* one or more fundamental issues at hand.
4. Feed back insights from 2. and 3. into *lived best practices* for
implementing custom components.

## Desiderata

The outcome of Patterns Library v2 is a foundation in which to build
custom components, plus a set of actual custom
components which evolves over time. We desire that:

1. components are usable under [React](https://reactjs.org/).
1. components are usable as stand-alone HTML.
1. components are usable in a cross-browser fashion for the set of browsers that
AXA-Winterthur cares about, including Internet Explorer 11+.
1. components are usable in a plug-and-play way (details to be specified).
1. the foundation is markedly less complex than v1.


## Fundamental Issues

To classify an issue as fundamental is ultimately a judgement call made by a
domain expert. While this will always remain subjective, we try to
motivate *why* an issue was included in the list below.

1. **Excessive complexity of foundation**.
   - **Source:** v1 code inspection, sheer number of
   [issues](https://github.com/axa-ch/patterns-library/issues).
   - **Why:** Reasonable to assume v1 complexity is a root cause of
   unsolved fundamental issues and edge cases.
   - **How:** use new framework as simplicity *enabler*, pay attention
   to simplest-possible-solution on per-component basis to overall satisfy
   desideratum 5.
   
1. **Dynamic children**.
   - **Source:**
   e.g. [#778](https://github.com/axa-ch/patterns-library/issues/778),
   [#859](https://github.com/axa-ch/patterns-library/issues/859).
   - **Why:** Idiomatic to specify children of a custom component as
   function of props or state and expect re-render if function inputs
   change, esp. given desiderata 1, 4.
   - **Experiment:**
   [lit-element-and-dynamic-children](https://github.com/axa-ch/lit-element-and-dynamic-children).
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
   [#439](https://github.com/axa-ch/patterns-library/issues/439),
   [#793](https://github.com/axa-ch/patterns-library/issues/793)
   - **Why:** In React, it is quite idiomatic (though not mandatory) to
   control the ``value`` or ``checked`` properties of ``<input>,
   <select>``, overriding built-in native behaviour.
   - **Experiment:**
   [lit-element-and-controlled-inputs](https://github.com/markus-walther/react-with-lit-element).
   - **How:** Looking at ``value,checked`` we can  determine whether a CE should be controlled.
    We then monitor UI-state-changing events via [lit-element event
    listeners](https://lit-element.polymer-project.org/guide/events) and
   let both property changes and user events lead to a post-render
   correction of the visual state of an input element to confirm with
   the controlled state (we can use native DOM APIs for that).

1. **Component Nesting**.
   - **Source:**
   [#778](https://github.com/axa-ch/patterns-library/issues/778).
   - **Why:** Ease of authoring without fear of breaking things. We need to be able to reason locally that
   each CE is correct, then enjoy automatic global correctness even in the face of
   nested 'components-in-components' from the principle of
   compositionality.
   - **Experiment:**
   [lit-element-and-dynamic-children](https://github.com/axa-ch/lit-element-and-dynamic-children),
   specifically its custom-tables-in-custom-tables aspect.
   - **How:** see 2.

1. **Deduplicated Styles**.
   - **Source:** [#492](https://github.com/axa-ch/patterns-library/issues/492).
   - **Why:** DOM weight increases proportional to the number of CE
   instances per page, which matters on mobile &mdash; if each instance redundantly includes
   styling, the increase is more dramatic.
   - **Experiment:** [lit-element-and-dynamic-children](https://github.com/axa-ch/lit-element-and-dynamic-children).
   - **How:** Store a reference to each instance in a global ``WeakSet``,
   render inline ``<style>`` only if not previously stored. *Benefit:
   ``<style>`` introduced lazily at usage site when CE first used.* *Drawback: Doesn't work
   when Shadow DOM used.* For very modern browsers [constructable
   stylesheets](https://developers.google.com/web/updates/2019/02/constructable-stylesheets)
   solve the issue also in the Shadow DOM case (Chrome 73+; feature-detecting and
   exploiting this is already built-in to lit-element).

1. **Concise HTML templates**.
   - **Source:** [#583](https://github.com/axa-ch/patterns-library/issues/583).
   - **Why:** CE implementors need a *concise*, developer-friendly way of specifying *parametric* HTML
   content to be rendered, since many CEs need to be built and since
   they would normally react to properties/attributes.
   - **How:** lit-element provides this out of the box by including the
   awesome [lit-html](https://lit-html.polymer-project.org/). The key ingredient is [tagged template
   literals](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/template_strings#Tagged_Template-Strings)
   which are authored in a syntax very close to JSX, like 
   this: <br> ``render() { return html `<p>${this.myProp}</p>`; }``.

1. **Inherited CSS Properties**.
   - **Source:** [#524](https://github.com/axa-ch/patterns-library/issues/524).
   - **Why:** CE users need assurance that page CSS
   cannot fundamentally destroy CE-intrinsic styling, otherwise
   styleguide conformance needs to be checked on a case-by-case basis.
   - **Experiment:** 
   [lit-element-and-dynamic-children, commit 107c26e](https://github.com/axa-ch/lit-element-and-dynamic-children/commit/107c26e3e9d58bd112399f9035aaa3082fe25924).
   - **How:** While inherited CSS properties like ``text-align`` can
   indeed even pierce a Shadow DOM boundary,  it is easy for an CE
   implementor to prevent this by declaring fixed values for the
   properties they care about. As an example, in CE-intrinsic styling
   one could write ``text-align: initial`` to block an inherited
   ``text-align: center`` from external styling.

1. **Name Clashes With Built-in DOM Properties**.
   - **Source:** [#451](https://github.com/axa-ch/patterns-library/issues/451).
   - **Why:** CE implementors and users alike are interested in natural
   naming for CE properties &mdash; allowing a property like
   ``prefix`` despite a built-in property with the same name aids the
   *principle of least surprise*.
   - **How:** By basing v2 on lit-element, clash avoidance comes for free, in the
   form of *automatic* invisible prefixing of declared properties with
   ``__``. Continuing with the example, ``prefix`` and ``__prefix``
   will no longer clash internally under v2.
   
1. **Real Properties**.
   - **Source:** [#397](https://github.com/axa-ch/patterns-library/issues/397).
   - **Why:** CE users expect to be able to use real properties with any permitted
   JS value type &mdash; constant (de-)serialization to and from the
   ``String`` data type is cumbersome and inefficient.
   - **How:** lit-element allows [real, dynamically observed
   properties](https://lit-element.polymer-project.org/guide/properties)
   out of the box, including ``Array, Object`` data types. Reflecting
   these to attributes is optional. For event handlers, ``Function``
   is supported as well.
   
1. **CSS Specificity**.
   - **Source:** [#383](https://github.com/axa-ch/patterns-library/issues/383).
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
   - **Source:** e.g. [#408](https://github.com/axa-ch/patterns-library/issues/).
   - **Why:** Re-rendering can not only lead to expensive browser paint
   operations, but might also produce unwanted side effects (like losing focus
   on an ``<input>``).
   - **Experiment:** [lit-element-and-controlled-inputs](https://github.com/markus-walther/react-with-lit-element).
   - **How:** lit-element is *extremely good* at avoiding unnecessary
   re-rendering thanks to lit-html. Our particular strategy for controlled inputs
   does not lose focus. In the general case, the ``updated()`` [life-cycle](https://lit-element.polymer-project.org/guide/lifecycle)
   method of lit-element would allow to correct any reversible post-rendering UI-state
   issues like focus loss, since it is guaranteed to be called after ``render()``.

1. **React refs**.
   - **Source:** [#778](https://github.com/axa-ch/patterns-library/issues/778).
   - **Why:** React users expect to be able to place [`ref`](https://reactjs.org/docs/refs-and-the-dom.html)
   pseudo-properties on CEs, especially in the idiomatic callback
   style. In the latter style, they expect to be called back on both
   mounting and unmounting of a CE.
   - **Experiment:** to be done.
   - **How:** To be specified.

1. **FOUC**.
   - **Source:** [#365](https://github.com/axa-ch/patterns-library/issues/365).
   - **Why:** CE users expect to be able to suppress or at least
   minimize the F(lash)O(f)U(nstyled)C(ontent) that results from using
   CEs before their JS definitions may have been loaded over a slow network.
   - **Experiment:** [lit-element-and-fouc](https://github.com/axa-ch/lit-element-and-fouc)
   - **How:** Place a short critical inline CSS style in a page's
   ``<head>`` that uses ``:not(:defined) {...}`` to regulate how
   undefined CEs are rendered in general. This does not cover Internet
   Explorer 11, though &mdash; but via server-side browser detection or
   conditional IE includes we can use ``my-ce1, my-ce2,
   ... {...}`` instead to achieve the same effect.

*Note: the cited experiment shows that depending on CE-intrinsic
 styling FOUC compensation can only be approximative, since the
 __precise__ geometry of a CE can only be known after it is defined
 together with all its children. In practice, good-enough FOUC
 compensation will suffice.*





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