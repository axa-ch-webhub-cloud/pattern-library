import React, { createElement, useState } from 'react';
import createAXAFooterSmallReact from '../index.react';

const AXAFooterSmallReact = createAXAFooterSmallReact(createElement);

const DemoFooterSmall = () => {
  const languages = [
    { text: 'DE' },
    { text: 'FR' },
    { text: 'IT' },
    { text: 'EN' },
  ];

  const disclaimer = [{ text: 'Terms of use' }, { text: 'Data protection' }];

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
        languageItems={languages}
        disclaimerItems={disclaimer}
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
