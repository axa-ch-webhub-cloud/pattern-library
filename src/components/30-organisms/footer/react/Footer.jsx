import React, { createElement, useState } from 'react';
import createAXAFooterReact from '../index.react';

const AXAFooterReact = createAXAFooterReact(createElement);

const DemoFooter = () => {
  //   const languages = [
  //     { text: 'DE' },
  //     { text: 'FR' },
  //     { text: 'IT' },
  //     { text: 'EN' },
  //   ];

  //   const disclaimer = [{ text: 'Terms of use' }, { text: 'Data protection' }];

  //   const initialLanguage = 'EN';
  //   const [activeLanguage, setActiveLanguage] = useState(initialLanguage);

  //   const [disclaimerChange, setDisclaimerChange] = useState('-');

  //   const handleAXAFooterLanguageChange = language => {
  //     setActiveLanguage(language);
  //   };

  //   const handleAXAFooterDisclaimerChange = disclaimer => {
  //     setDisclaimerChange(disclaimer);
  //   };

  return (
    <div>
      <AXAFooterReact dynamic />
    </div>
  );
};

export default DemoFooter;
