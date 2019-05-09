# Footer - Small

This is the small version of the footer. If you use multiple footers, this one should always appear at the very bottom.

## Usage

```bash
npm install @axa-ch/footer-small
```

```js
import '@axa-ch/footer-small';

const languages = JSON.stringify([
  { text: 'DE', link: 'https://axa.ch/de/privatkunden.html' },
  { text: 'FR', link: 'https://axa.ch/fr/particuliers.html' },
  { text: 'IT', link: 'https://axa.ch/it/clienti-privati.html' },
  { text: 'EN', link: 'https://axa.ch/en/private-customers.html' },
]);

const disclaimer = JSON.stringify([
  {
    text: 'Terms of use',
    link: 'https://axa.ch/en/information/terms-of-use.html',
  },
  {
    text: 'Data protection',
    link: 'https://axa.ch/en/information/data-protection.html',
  },
]);
```

```html
<axa-footer-small
  activelanguage="DE"
  languageitems="${languages}"
  disclaimeritems="${disclaimer}"
  copyrighttext="© 2019 AXA Insurance Ltd."
/>;
```

### React

Create a React-ified small footer with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAFooterSmallReact from '@axa-ch/footer-small/lib/index.react';

const AXAFooterSmallReact = createAXAFooterSmallReact(createElement);

export default AXAFooterSmallReact;
```

```js
const languages = [
  { text: 'DE' },
  { text: 'FR' },
  { text: 'IT' },
  { text: 'EN' },
];

const disclaimer = [{ text: 'Terms of use' }, { text: 'Data protection' }];

const handleAXAFooterLanguageChange = language => {
  console.log(language); // EN, DE, ...
};

const handleAXAFooterDisclaimerChange = disclaimer => {
  console.log(disclaimer); // Terms of use, Data protection
};

return (
  <div>
    <AXAFooterSmallReact
      languageItems={languages}
      disclaimerItems={disclaimer}
      onLanguageChange={handleAXAFooterLanguageChange}
      onDisclaimerChange={handleAXAFooterDisclaimerChange}
      activeLanguage="EN"
      copyrightText="© 2019 AXA Insurance Ltd."
      dynamic
    />
  </div>
);
```

### Pure HTML pages

If want a footer with static links, that will route to wherever the `href` attributes are pointing:

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
    <axa-footer-small
      activelanguage="DE"
      languageitems="${languages}"
      disclaimeritems="${disclaimer}"
      copyrighttext="© 2019 AXA Insurance Ltd."
    ></axa-footer-small>
    <script src="node_modules/@axa-ch/footer-small/dist/index.js"></script>
  </body>
</html>
```

If you want to listen for changes, pass in the additional `dynamic` boolean attribute like this:

```html
....
<axa-footer-small
  activelanguage="DE"
  languageitems="${languages}"
  disclaimeritems="${disclaimer}"
  copyrighttext="© 2019 AXA Insurance Ltd."
  dynamic
></axa-footer-small>
....
```

With this, a click on any footer link will not automatically redirect the user anywhere, but instead fire an event that you can subscribe to. Example:

```js
const footerSmall = document.querySelector('axa-footer-small');

footerSmall.addEventListener('axa-language-change', languageEvent => {
  console.log(languageEvent.detail); // Content: DE, EN, ...`;
});

footerSmall.addEventListener('axa-disclaimer-change', disclaimerEvent => {
  console.log(disclaimerEvent.detail); // Content: Terms of use, Data protection
});
```

Check the demo folder for this use case.

## Properties

### languageitems - Example

An array of items that represent the language section.

```js
const languages = [
  { text: string, link: string },
  ...
];
```

### disclaimeritems - Example

An array of items that represent the disclaimer section.

```js
const disclaimers = [
  { text: string, link: string },
  ...
];
```

### copyrighttext

A string representing the text in the copyright section.

### activelanguage

A string representing the language that should be highlighted in the footer. Equivalent to the value of a `text` property in an item of the `languageitems` attribute.
