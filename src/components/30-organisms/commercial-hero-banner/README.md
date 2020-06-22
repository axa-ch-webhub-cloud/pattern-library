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
    <header slot="title">
      <p>This example shows specific picture classes</p>
      <h1>Drive with peace of mind</h1>
    </header>
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
  <header slot="title">
    <p>This example shows specific picture classes</p>
    <h1>Drive with peace of mind</h1>
  </header>
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
      <header slot="title">
        <p>This example shows specific picture classes</p>
        <h1>Drive with peace of mind</h1>
      </header>
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
  <header slot="title"> // Only one title
    <h1>...<h1> // Header
    <p>...<p> // Subheading
  </header>
  <p slot="content">...</p> // You can put multiple <p> elements with the 'content' slot
  <small slot="disclaimer">...</small> // Only one disclaimer
  <axa-button-link slot="button" /> // Can also be 'axa-button', meant as CTA (Call to Action)
  <slot name="addon-section"></slot> // Any DOM node, positioning and styling is the responsibility of the user
</axa-commercial-hero-banner>
```

### slot="addon-section"

This slot is optional. The styling and positioning is completely up to you, the hero banner component only gives you the ability to easily embed it.

Here is a complete example of how you can make use of it, including the positioning:

```html
<axa-commercial-hero-banner
  variant="dark"
  imageSource="https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg"
>
  <header slot="title">
    <p>This example shows specific picture classes</p>
    <h1>Drive with peace of mind</h1>
  </header>
  <p slot="content">
    Whether you need to insure your first car or renew your existing car
    insurance, AXA can provide a range of car insurance policies to suit your
    requirements and offer great product benefits at a price you can afford
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

  <div slot="addon-section">
    <div class="o-commercial-hero-banner-demo__badge-wrapper">
      <p class="o-commercial-hero-banner-demo__badge-content">
        Get up to CHF 100 discount
      </p>
    </div>
    <div class="o-commercial-hero-banner-demo__addon-example">
      This could be the customer review badge
    </div>
  </div>
</axa-commercial-hero-banner>
```

```css
.o-commercial-hero-banner-demo__badge-wrapper {
  position: absolute;
  right: 20px;
  display: flex;
  padding: 10px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-radius: 50% 50% 50% 0;
  background: #c91432;
  color: #fff;

  top: 10px;
  width: 120px;
  height: 120px;
}

.o-commercial-hero-banner-demo__badge-content {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.01em;
  font-size: 16px;
}

.o-commercial-hero-banner-demo__addon-example {
  display: block;
  background: blue;
  color: white;
  height: 100px;
  width: 200px;
  margin-top: 20px;
}

@media (min-width: 576px) {
  .o-commercial-hero-banner-demo__badge-wrapper {
    width: 140px;
    height: 140px;
  }

  .o-commercial-hero-banner-demo__badge-content {
    font-size: 18px;
  }
}

@media (min-width: 992px) {
  .o-commercial-hero-banner-demo__badge-wrapper {
    margin-top: 0;
    top: 44px;
    width: 160px;
    height: 160px;
  }

  .o-commercial-hero-banner-demo__badge-content {
    font-size: 20px;
    line-height: 24px;
  }

  .o-commercial-hero-banner-demo__addon-example {
    position: absolute;
    top: 380px;
    right: 20px;
  }
}

@media (min-width: 1200px) {
  .o-commercial-hero-banner-demo__badge-wrapper {
    right: 150px;
  }

  .o-commercial-hero-banner-demo__addon-example {
    right: 150px;
  }
}
```

## Properties

### Variant

| Attribute     | Details                                                            |
| ------------- | ------------------------------------------------------------------ |
| `variant`     | 'dark' or 'light', sets the theme (gradient), light is the default |
| `imagesource` | The source of the cover image (link or base64 string)              |
