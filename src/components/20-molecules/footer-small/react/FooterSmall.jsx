import React, { createElement, useState } from 'react';
import createAXAFooterSmallReact from '../index.react';

const AXAFooterSmallReact = createAXAFooterSmallReact(createElement);

const DemoFooterSmall = () => {
  const languageItems = [
    { text: 'DE', key: 'de' },
    { text: 'FR', key: 'fr' },
    { text: 'IT', key: 'it' },
    { text: 'EN', key: 'en' },
  ];

  const disclaimerItems = [
    { text: 'Terms of use', key: 'tos' },
    { text: 'Data protection', key: 'privacy' },
  ];

  const initialLanguage = 'EN';
  const [activeLanguage, setActiveLanguage] = useState(initialLanguage);

  const [disclaimerChange, setDisclaimerChange] = useState('-');

  const handleAXAFooterLanguageChange = language => {
    setActiveLanguage(language);
  };

  const handleAXAFooterDisclaimerChange = disclaimer => {
    setDisclaimerChange(disclaimer);
  };

  const handleClick = e => {
    e.preventDefault();
    console.log('clicc');
  };

  return (
    <div>
      <p>Currently selected language: {activeLanguage}</p>
      <p>Disclaimer changed to: {disclaimerChange}</p>
      <a slot="disclaimer-item" href="https://ag.ch" onClick={handleClick}>
        asdM
      </a>
      <AXAFooterSmallReact
        onLanguageChange={handleAXAFooterLanguageChange}
        onDisclaimerChange={handleAXAFooterDisclaimerChange}
        dynamic
      >
        <a slot="disclaimer-item" href="https://google.ch">
          Johannes
        </a>
        <a slot="disclaimer-item" href="https://digitec.ch">
          Benjamin
        </a>
        <a slot="disclaimer-item">Unbekannt</a>
        <a
          slot="language-item"
          className="m-footer-small__link--bold"
          href="https://google.ch"
        >
          DE
        </a>
        <a
          slot="language-item"
          className="m-footer-small__link--bold m-footer-small__link--active"
          href="https://digitec.ch"
        >
          FR
        </a>
        <a
          slot="language-item"
          className="m-footer-small__link--bold m-footer-small__link--active"
          href="https://digitec.ch"
        >
          IT
        </a>
        <a
          slot="language-item"
          className="m-footer-small__link--bold m-footer-small__link--active"
          href="https://digitec.ch"
        >
          EN
        </a>
        <span slot="copyright">© 2019 AXA Insurance Ltd.</span>
      </AXAFooterSmallReact>
    </div>
  );
};

export default DemoFooterSmall;
