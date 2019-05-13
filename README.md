# Patterns Library v2

[![Build Status](https://travis-ci.org/axa-ch/patterns-library.svg?branch=develop)](https://travis-ci.org/axa-ch/patterns-library)

[Check out our Contribution File](https://github.com/axa-ch/patterns-library/blob/develop/CONTRIBUTION.md#rules-and-lintings)

[Check out our Architecture File](https://github.com/axa-ch/patterns-library/blob/develop/ARCHITECTURE.md)

[Check out our Code of Conduct](https://github.com/axa-ch/patterns-library/blob/develop/CODE_OF_CONDUCT.md)

We only export holistic and self contained WebComponents based on CustomElement, ShadowDom and HTML Templates.

We do not support Built-ins

## Released Components
- [AXA Button](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/button)
- [AXA Button Link](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/button-link)
- [AXA Icon](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/icon)
- [AXA Link](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/link)
- [AXA Footer Small](https://github.com/axa-ch/patterns-library/tree/develop/src/components/20-molecules/footer-small)
- [AXA Table Sortable](https://github.com/axa-ch/patterns-library/tree/develop/src/components/30-organisms/table-sortable)
- [AXA Table](https://github.com/axa-ch/patterns-library/tree/develop/src/components/30-organisms/table)

## Alpha Released Components
- [AXA Datepicker](https://github.com/axa-ch/patterns-library/tree/develop/src/components/20-molecules/datepicker)
- [AXA Dropdown](https://github.com/axa-ch/patterns-library/tree/develop/src/components/20-molecules/dropdown)

## Scaffolding

Simply, just run `npm run new` and follow on screen instructions

## Layout and Reset CSS

Resetting CSS on the `<body>` or `<html>` is the responsibility of to the system that embeds the component. This is important for 100% width sized components like the Top content bar or the header.

Here an example on how it can look like:

```html
<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
</style>

```

## Polyfills

Please read here:
[Polyfills in the patterns library](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill#README.md)
