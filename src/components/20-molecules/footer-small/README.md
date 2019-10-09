# Footer - Small

This is the small version of the footer. If you use multiple footers, this one should always appear at the very bottom.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/footer-small
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
  { key: 'de', text: 'DE' },
  { key: 'fr', text: 'FR' },
  { key: 'it', text: 'IT' },
  { key: 'en', text: 'EN' },
];

const disclaimer = [
  { key: 'tos', text: 'Terms of use' },
  { key: 'privacy', text: 'Data protection' },
];

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
      onLanguageClick={handleAXAFooterLanguageChange}
      onDisclaimerClick={handleAXAFooterDisclaimerChange}
      copyrightText="© 2019 AXA Insurance Ltd."
      dynamic
    />
  </div>
);
```

### Pure HTML pages

#### Static approach

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
      copyrighttext="© 2019 AXA Insurance Ltd."
      activelanguage="de"
    ></axa-footer-small>

    <script>
      const languages = JSON.stringify([
        { key: 'de', text: 'DE', link: 'https://axa.ch/de/privatkunden.html' },
        { key: 'fr', text: 'FR', link: 'https://axa.ch/fr/particuliers.html' },
        {
          key: 'it',
          text: 'IT',
          link: 'https://axa.ch/it/clienti-privati.html',
        },
        {
          key: 'en',
          text: 'EN',
          link: 'https://axa.ch/en/private-customers.html',
        },
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

      const footer = document.querySelector('axa-footer-small');
      footer.setAttribute('languageitems', languages);
      footer.setAttribute('disclaimeritems', disclaimer);
    </script>
    <script src="node_modules/@axa-ch/footer-small/dist/index.js"></script>
  </body>
</html>
```

#### dynamic approach

This approach will not redirect the user automatically, if he/she clicks on a link, but instead fire an event. If you want to listen for such events, pass in the additional `dynamic` boolean attribute and set your listeners like this:

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
      copyrighttext="© 2019 AXA Insurance Ltd."
      activelanguage="de"
      dynamic
    ></axa-footer-small>

    <script>
      const languages = JSON.stringify([
        { key: 'de', text: 'DE', link: 'https://axa.ch/de/privatkunden.html' },
        { key: 'fr', text: 'FR', link: 'https://axa.ch/fr/particuliers.html' },
        {
          key: 'it',
          text: 'IT',
          link: 'https://axa.ch/it/clienti-privati.html',
        },
        {
          key: 'en',
          text: 'EN',
          link: 'https://axa.ch/en/private-customers.html',
        },
      ]);

      const disclaimer = JSON.stringify([
        {
          key: 'tos',
          text: 'Terms of use',
          link: 'https://axa.ch/en/information/terms-of-use.html',
        },
        {
          key: 'privacy',
          text: 'Data protection',
          link: 'https://axa.ch/en/information/data-protection.html',
        },
      ]);

      const footer = document.querySelector('axa-footer-small');
      footer.setAttribute('languageitems', languages);
      footer.setAttribute('disclaimeritems', disclaimer);

      footer.addEventListener('axa-language-click', e =>
        console.log(e.detail)
      );

      footer.addEventListener('axa-disclaimer-click', e =>
        console.log(e.detail)
      );
    </script>
    <script src="node_modules/@axa-ch/footer-small/dist/index.js"></script>
  </body>
</html>
```

## Properties

### dynamic

Add this boolean attribute if you want to have control over what happens if a user clicks one of the language- or disclaimer-items.

### languageitems & disclaimeritems

An array of items that represents the language- / disclaimer-section.

`key`: The value that will be yielded, if the `dynamic` property is set and a user clicks on a link.

```js
const languages = [
  { key: string, text: string, link: string },
  ...
];
```

```js
const disclaimers = [
  { key: string, text: string, link: string },
  ...
];
```

### copyrighttext

A string representing the text in the copyright section.

### activelanguage

A string representing the key of the language that should be highlighted in the footer. Equivalent to the value of a `text` property in an item of the `languageitems` attribute.

## Migration Notes

From 1.x to 2.x. the necessary "key" property on the items was introduced. Not providing this key will break your component after upgrading.
