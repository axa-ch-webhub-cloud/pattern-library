/* eslint-disable react/prop-types */
import React, { createElement, useState } from 'react';
import createAXAFooterSmallReact from '../index.react';

const AXAFooterSmallReact = createAXAFooterSmallReact(createElement);

const DemoFooterSmall = ({
  language1,
  language2,
  language3,
  language4,
  dataProtection,
  termsOfUse,
}) => {
  const [activeLanguage, setActiveLanguageIndex] = useState('-');

  const [disclaimerChange, setDisclaimerIndex] = useState('-');

  const handleAXAFooterLanguageClicked = languageIndex => {
    setActiveLanguageIndex(languageIndex);
  };

  const handleAXAFooterDisclaimerClicked = disclaimerIndex => {
    setDisclaimerIndex(disclaimerIndex);
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
          {language1}
        </a>
        <a slot="language-item" href="https://axa.ch/fr/particuliers.html">
          {language2}
        </a>
        <a slot="language-item" href="https://axa.ch/it/clienti-privati.html">
          {language3}
        </a>
        <a slot="language-item" href="https://axa.ch/en/private-customers.html">
          {language4}
        </a>
        <a
          slot="disclaimer-item"
          href="https://axa.ch/en/information/terms-of-use.html"
        >
          {termsOfUse}
        </a>
        <a
          slot="disclaimer-item"
          href="https://axa.ch/en/information/data-protection.html"
        >
          {dataProtection}
        </a>
        <span slot="copyright">&copy; 2019 AXA Insurance Ltd.</span>
      </AXAFooterSmallReact>
    </div>
  );
};

export default DemoFooterSmall;
