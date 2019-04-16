import React, { createElement, useState } from 'react';
import createAXAFooterSmallReact from '../../components/20-molecules/footer-small/index.react';

const AXAFooterSmallReact = createAXAFooterSmallReact(createElement);

const DemoFooterSmall = () => {
  const languages = [
    { text: 'DE', link: 'https://axa.ch/de/privatkunden.html' },
    { text: 'FR', link: 'https://axa.ch/fr/particuliers.html' },
    { text: 'IT', link: 'https://axa.ch/it/clienti-privati.html' },
    { text: 'EN', link: 'https://axa.ch/en/private-customers.html' },
  ];

  const disclaimer = [
    { text: 'Terms of use', link: 'https://axa.ch/en/information/terms-of-use.html' },
    { text: 'Data protection', link: 'https://axa.ch/en/information/data-protection.html' },
  ];

  const [count, setCount] = useState(0);

  const handleAXAFooterLanguageChange = () => {
    console.log('successssssss');
  };

  return (
    <div>
      <p>with react wrapper - callback props are possible, too:</p>
      <AXAFooterSmallReact languageItems={languages} disclaimerItems={disclaimer} onLanguageChange={handleAXAFooterLanguageChange} />
    </div>
  );
};

export default DemoFooterSmall;
