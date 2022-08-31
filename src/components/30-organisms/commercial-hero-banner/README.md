# Commercial Hero Banner

The commercial hero banner is a component to set something into the focus of the user.

## Properties

### Variant

| Attribute     | Details                                                            |
| ------------- | ------------------------------------------------------------------ |
| `variant`     | 'dark' or 'light', sets the theme (gradient), light is the default |
| `imagesource` | The source of the cover image (link or base64 string)              |

## Childfragments

```js
<axa-commercial-hero-banner>
  <header slot="title"> // Only one title
    <h1>...<h1> // Header
    <p>...<p> // Subheading
  </header>
  <p slot="content">...</p> // You can put multiple <p> elements with the 'content' slot
  <div slot="content" class="checkmarks">...</div> //  Either p[slot=content] or div[slot=content] can be added, not both
  <small slot="disclaimer">...</small> // Only one disclaimer
  <axa-button slot="button" /> // Can also be 'axa-button', meant as CTA (Call to Action)
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
  <div slot="content" class="checkmarks">
    <div class="checkmark">
      <axa-icon
        class="checkmark-icon"
        icon="check-circle"
        size="auto"
      ></axa-icon>
      <span class="checkmark-text">Extra Cookie</span>
    </div>
    <div class="checkmark">
      <axa-icon
        class="checkmark-icon"
        icon="check-circle"
        size="auto"
      ></axa-icon>
      <span class="checkmark-text">Awesome People</span>
    </div>
  </div>
  <small slot="disclaimer">Terms and Conditions apply.</small>
  <axa-button
    href="https://axa.ch"
    slot="button"
    variant="red"
    size="large"
  >
    GET A QUOTE
  </axa-button>

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

NOTE: Text description in p[slot=content] and checkmarks in div.checkmarks[slot=content] are mutually exclusive elements i.e. they cannot be added at the same time.

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

.checkmarks {
  font-size: 16px;
  letter-spacing: 0.02em;
  line-height: 24px;
  font-family: 'Source Sans Pro', Arial, sans-serif;
}

.checkmark {
  margin-bottom: 5px;
  display: flex;
}

.checkmark-icon {
  color: #668980;
}

.checkmark-text {
  margin-left: 10px;
}
```
