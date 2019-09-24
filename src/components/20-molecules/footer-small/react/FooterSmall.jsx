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

  return (
    <div>
      <p>Currently selected language: {activeLanguage}</p>
      <p>Disclaimer changed to: {disclaimerChange}</p>
      <AXAFooterSmallReact
        languageItems={languageItems}
        disclaimerItems={disclaimerItems}
        onLanguageChange={handleAXAFooterLanguageChange}
        onDisclaimerChange={handleAXAFooterDisclaimerChange}
        activeLanguage={activeLanguage}
        copyrightText="© 2019 AXA Insurance Ltd."
        dynamic
      />
    </div>
  );
};

export default DemoFooterSmall;
