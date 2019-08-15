# Commercial Hero Banner

The commercial hero banner is a component to set something into the focus of the user.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/commercial-hero-banner
```

```js
import '@axa-ch/commercial-hero-banner';
...
<axa-commercial-hero-banner variant="dark"
  imagesource="https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg">
    <h2 slot="category">This example shows specific picture classes</h2>
    <h1 slot="title">Drive with peace of mind</h1>
    <p slot="content">
      Whether you need to insure your first car or renew your existing car
      insurance, AXA can provide a range of car insurance policies to suit your
      requirements and offer great product benefits at a price you can afford
    </p>
    <small slot="disclaimer">Terms and Conditions apply.</small>
    <axa-button-link href="https://axa.ch" slot="button" variant="red" size="large">
      GET A QUOTE
    </axa-button-link>
</axa-commercial-hero-banner>
```

### React

Create a React-ified commercial-hero-banner with the createElement function from your React version and then use it like this:

```js
// File: AxaCommercialHeroBanner.js
import { createElement } from 'react';
import createAXACommercialHeroBannerReact from '@axa-ch/commercial-hero-banner/lib/index.react';

const AXACommercialHeroBannerReact = createAXACommercialHeroBannerReact(
  createElement
);

export default AXACommercialHeroBannerReact;
```

```js
import AXACommercialHeroBannerReact from './AxaCommercialHeroBanner.js';
import AXAButtonLink from 'AxaButtonLink.js';

<AXACommercialHeroBannerReact
  variant="dark"
  imageSource="https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg"
>
  <h2 slot="category">This example shows specific picture classes</h2>
  <h1 slot="title">Drive with peace of mind</h1>
  <p slot="content">
    Whether you need to insure your first car or renew your existing car
    insurance, AXA can provide a range of car insurance policies to suit your
    requirements and offer great product benefits at a price you can afford
  </p>
  <small slot="disclaimer">Terms and Conditions apply.</small>
  <AXAButtonLink href="https://axa.ch" slot="button" variant="red" size="large">
    GET A QUOTE
  </AXAButtonLink>
</AXACommercialHeroBannerReact>;
```

### Pure HTML pages

Import the commercial-hero-banner-defining script and use a commercial-hero-banner like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Your awesome title</title>
  </head>
  <body>
    <axa-commercial-hero-banner
      variant="dark"
      imageSource="https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg"
    >
      <h2 slot="category">This example shows specific picture classes</h2>
      <h1 slot="title">Drive with peace of mind</h1>
      <p slot="content">
        Whether you need to insure your first car or renew your existing car
        insurance, AXA can provide a range of car insurance policies to suit
        your requirements and offer great product benefits at a price you can
        afford
      </p>
      <small slot="disclaimer">Terms and Conditions apply.</small>
      <axa-button-link
        href="https://axa.ch"
        slot="button"
        variant="red"
        size="large"
      >
        GET A QUOTE
      </axa-button-link>
    </axa-commercial-hero-banner>
    <script src="node_modules/@axa-ch/commercial-hero-banner/dist/index.js"></script>
    <script src="node_modules/@axa-ch/axa-button-link/dist/index.js"></script>
  </body>
</html>
```

## Childfragments

```js
<axa-commercial-hero-banner>
  <h2 slot="category">...</h2>  // Only one category
  <h1 slot="title">...</h1> // Only one title
  <p slot="content">...</p> // You can put multiple <p> elements with the 'content' slot
  <small slot="disclaimer">...</small> // Only one disclaimer
  <axa-button-link slot="button" /> // You can put multiple <p> elements with the 'content' slot
</axa-commercial-hero-banner>
```

```

## Properties

### Variant

| Attribute     | Details                                               |
| ------------- | ----------------------------------------------------- |
| `variant`     | 'dark' or 'light', sets the theme (gradient)          |
| `imagesource` | The source of the cover image (link or base64 string) |

### Migration Notes

You don't have to pay attention to anything for upgrading to newer version.
```
