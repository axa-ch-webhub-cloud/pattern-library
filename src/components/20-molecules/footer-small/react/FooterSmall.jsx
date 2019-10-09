import React, { createElement, useState } from 'react';
import createAXAFooterSmallReact from '../index.react';

const AXAFooterSmallReact = createAXAFooterSmallReact(createElement);

const DemoFooterSmall = () => {
  const initialLanguage = 'EN';
  const [activeLanguage, setActiveLanguage] = useState(initialLanguage);

  const [disclaimerChange, setDisclaimerChange] = useState('-');

  const handleAXAFooterLanguageChange = language => {
    setActiveLanguage(language);
  };

  const handleAXAFooterDisclaimerChange = disclaimer => {
    setDisclaimerChange(disclaimer);
  };

  return (
    <div>
      <p>Language - Index Clicked: {activeLanguage}</p>
      <p>Disclaimer - Index Clicked: {disclaimerChange}</p>
      <AXAFooterSmallReact
        onLanguageClick={handleAXAFooterLanguageChange}
        onDisclaimerClick={handleAXAFooterDisclaimerChange}
        dynamic
      >
        <a slot="language-item" href="https://axa.ch/de/privatkunden.html">
          DE
        </a>
        <a
          slot="language-item"
          className="m-footer-small__link--active"
          href="https://axa.ch/fr/particuliers.html"
        >
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
        <span slot="copyright">© 2019 AXA Insurance Ltd.</span>
      </AXAFooterSmallReact>
    </div>
  );
};

export default DemoFooterSmall;
