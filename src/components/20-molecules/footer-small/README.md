# Footer - Small

This is the small version of the footer. This footer belongs to the very bottom of the webpage.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/footer-small
```

### React

Create a React-ified small footer with the createElement function from your React version and then use it like this:

```js
import React, { createElement, useState } from 'react';
import createAXAFooterSmallReact from '@axa-ch/footer-small/lib/index.react';

const AXAFooterSmallReact = createAXAFooterSmallReact(createElement);

const DemoFooterSmall = () => {
  const [activeLanguage, setActiveLanguageIndex] = useState('-');

  const [disclaimerChange, setDisclaimerIndex] = useState('-');

  const handleAXAFooterLanguageClicked = language => {
    setActiveLanguageIndex(language);
  };

  const handleAXAFooterDisclaimerClicked = disclaimer => {
    setDisclaimerIndex(disclaimer);
  };

  return (
    <div>
      <p>Language - Index Clicked: {activeLanguage}</p>
      <p>Disclaimer - Index Clicked: {disclaimerChange}</p>
      <AXAFooterSmallReact
        onLanguageClick={handleAXAFooterLanguageClicked}
        onDisclaimerClick={handleAXAFooterDisclaimerClicked}
        dynamic
      >
        <a
          slot="language-item"
          className="m-footer-small__link--active"
          href="https://axa.ch/de/privatkunden.html"
        >
          DE
        </a>
        <a slot="language-item" href="https://axa.ch/fr/particuliers.html">
          FR
        </a>
        <a slot="language-item" href="https://axa.ch/it/clienti-privati.html">
          IT
        </a>
        <a slot="language-item" href="https://axa.ch/en/private-customers.html">
          EN
        </a>
        <a
          slot="disclaimer-item"
          href="https://axa.ch/en/information/terms-of-use.html"
        >
          Terms of use
        </a>
        <a
          slot="disclaimer-item"
          href="https://axa.ch/en/information/data-protection.html"
        >
          Data protection
        </a>
        <span slot="copyright">&copy; 2019 AXA Insurance Ltd.</span>
      </AXAFooterSmallReact>
    </div>
  );
};
```

### Pure HTML pages

#### Static approach

If you want a footer with static links, that will automatically route to wherever the `href` attributes are pointing:

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
    <axa-footer-small>
      <a
        slot="language-item"
        href="https://axa.ch/de/privatkunden.html"
        class="m-footer-small__link--active"
      >
        DE
      </a>
      <a slot="language-item" href="https://axa.ch/fr/particuliers.html">
        FR
      </a>
      <a slot="language-item" href="https://axa.ch/it/clienti-privati.html">
        IT
      </a>
      <a slot="language-item" href="https://axa.ch/en/private-customers.html">
        EN
      </a>
      <a
        slot="disclaimer-item"
        href="https://axa.ch/en/information/terms-of-use.html"
      >
        Terms of use
      </a>
      <a
        slot="disclaimer-item"
        href="https://axa.ch/en/information/data-protection.html"
      >
        Data protection
      </a>
      <span slot="copyright">&copy; 2019 AXA Insurance Ltd.</span>
    </axa-footer-small>

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
    <script>
      const wrapper = document.createElement('div');
      const activeLanguage = document.createElement('p');
      activeLanguage.id = 'active-language';
      activeLanguage.innerText = `Language - Index Clicked: ${selectedLanguageKey}`;
      const clickedDisclaimer = document.createElement('p');
      clickedDisclaimer.id = 'clicked-disclaimer';
      clickedDisclaimer.innerText = `Disclaimer - Index Clicked: -`;

      const footerSmall = document.createElement('axa-footer-small');
      footerSmall.dynamic = true;

      const deLanguageLink = document.createElement('a');
      deLanguageLink.slot = 'language-item';
      deLanguageLink.href = 'https://axa.ch/de/privatkunden.html';
      deLanguageLink.classList.add('m-footer-small__link--active');
      deLanguageLink.textContent = 'DE';

      const frLanguageLink = document.createElement('a');
      frLanguageLink.slot = 'language-item';
      frLanguageLink.href = 'https://axa.ch/de/privatkunden.html';
      frLanguageLink.textContent = 'FR';

      const itLanguageLink = document.createElement('a');
      itLanguageLink.slot = 'language-item';
      itLanguageLink.href = 'https://axa.ch/de/privatkunden.html';
      itLanguageLink.textContent = 'IT';

      const enLanguageLink = document.createElement('a');
      enLanguageLink.slot = 'language-item';
      enLanguageLink.href = 'https://axa.ch/de/privatkunden.html';
      enLanguageLink.textContent = 'EN';

      const termsOfUseLink = document.createElement('a');
      termsOfUseLink.slot = 'disclaimer-item';
      termsOfUseLink.href = 'https://axa.ch/en/information/terms-of-use.html';
      termsOfUseLink.textContent = 'Terms of use';

      const dataProtectionLink = document.createElement('a');
      dataProtectionLink.slot = 'disclaimer-item';
      dataProtectionLink.href =
        'https://axa.ch/en/information/data-protection.html';
      dataProtectionLink.textContent = 'Data protection';

      const copyRightText = document.createElement('span');
      copyRightText.slot = 'copyright';
      copyRightText.textContent = '&copy; 2019 AXA Insurance Ltd.';

      footerSmall.appendChild(deLanguageLink);
      footerSmall.appendChild(frLanguageLink);
      footerSmall.appendChild(itLanguageLink);
      footerSmall.appendChild(enLanguageLink);
      footerSmall.appendChild(termsOfUseLink);
      footerSmall.appendChild(dataProtectionLink);
      footerSmall.appendChild(copyRightText);

      wrapper.appendChild(activeLanguage);
      wrapper.appendChild(clickedDisclaimer);
      wrapper.appendChild(footerSmall);

      footerSmall.addEventListener('axa-language-click', languageEvent => {
        const languageResult = document.getElementById('active-language');
        languageResult.innerText = `Language - Index Clicked: ${
          languageEvent.detail
        }`;
      });

      footerSmall.addEventListener('axa-disclaimer-click', disclaimerEvent => {
        const clickedDisclaimers = document.getElementById(
          'clicked-disclaimer'
        );
        clickedDisclaimers.innerText = `Disclaimer - Index Clicked: ${
          disclaimerEvent.detail
        }`;
      });

      document.querySelector('body').appendChild(wrapper);
    </script>

    <script src="node_modules/@axa-ch/footer-small/dist/index.js"></script>
  </body>
</html>
```

## How-To

**Highlight a language (mark it as `active`)?**

Set the class `.m-footer-small__link--active` to the language item children, that you want to highlight. Example:

`<a slot="language-item" href="https://axa.ch/de/privatkunden.html" class="m-footer-small__link--active">`

## Properties

### dynamic

Add this boolean attribute if you want to have control over what happens if a user clicks one of the language- or disclaimer-items.

### [React exclusive] onLanguageClick

Add a callback method that should run as soon as a language link gets clicked.

### [React exclusive] onDisclaimerClick

Add a callback method that should run as soon as a disclaimer link gets clicked.

## Migration Notes

From 1.x to 2.x: [Do not bother doing this, you should go straight to the 2.x to 3.x migration part and use the latest version] The necessary "key" property on the items was introduced. Not providing this key will break your component after upgrading.

From 2.x to 3.x: Childfragments replaced the JSON structure. This is a complete overhaul and you need to start from scratch. The biggest change apart from that will be, that `onLanguageClick` and `onDisclaimerClick` now fire the index of the element, instead of a name or a key.
