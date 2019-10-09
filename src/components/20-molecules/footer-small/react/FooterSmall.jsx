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
        onLanguageClick={handleAXAFooterLanguageChange}
        onDisclaimerClick={handleAXAFooterDisclaimerChange}
        dynamic
      >
        <a slot="disclaimer-item" href="https://google.ch">
          Johannes
        </a>
        <a slot="disclaimer-item" href="https://digitec.ch">
          Benjamin
        </a>
        <a slot="language-item" href="https://google.ch">
          DE
        </a>
        <a
          slot="language-item"
          className="m-footer-small__link--active"
          href="https://digitec.ch"
        >
          FR
        </a>
        <a slot="language-item" href="https://digitec.ch">
          IT
        </a>
        <a slot="language-item" href="https://digitec.ch">
          EN
        </a>
        <span slot="copyright">© 2019 AXA Insurance Ltd.</span>
      </AXAFooterSmallReact>
    </div>
  );
};

export default DemoFooterSmall;
