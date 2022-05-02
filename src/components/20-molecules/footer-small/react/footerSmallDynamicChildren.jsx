/* eslint-disable react/prop-types */
import React, { createElement, useState } from 'react';
import createAXAFooterSmallReact from '../index.react';

const AXAFooterSmall = createAXAFooterSmallReact(createElement);

const languageOptions = [
  { name: 'DE', isActive: true },
  { name: 'EN' },
  { name: 'FR' },
  { name: 'IT' },
];

const LEGALS = [
  [
    { name: 'Nutzungshinweise', url: '#' },
    { name: 'Datenschutz', url: '#' },
  ],
  [
    { name: 'Conditions of use', url: '#' },
    { name: 'Data protection', url: '#' },
  ],
  [
    { name: 'Conditions d’utilisation', url: '#' },
    { name: 'Protection des données', url: '#' },
  ],
  [
    { name: "Avvertenze per l'utilizzazione", url: '#' },
    { name: 'Protezione dei dati', url: '#' },
  ],
];

const COPYRIGHT = [
  '© 2020 AXA Versicherungen AG',
  '© 2020 AXA Insurance Ltd.',
  '© 2020 AXA Assurances SA',
  '© 2020 AXA Assicurazioni SA',
];

const DemoFooterSmallDynamicChildren = () => {
  const [activeLanguage, setActiveLanguageIndex] = useState(0);

  const [disclaimerChange, setDisclaimerIndex] = useState(0);
  const [legals, setLegals] = useState(LEGALS[0]);
  const [copyrightText, setCopyrightText] = useState(COPYRIGHT[0]);

  const handleLanguageClick = languageIndex => {
    delete languageOptions[activeLanguage].isActive;
    languageOptions[languageIndex].isActive = true;
    setActiveLanguageIndex(languageIndex);
    setLegals(LEGALS[languageIndex]);
    setCopyrightText(COPYRIGHT[languageIndex]);
  };

  const handleLegalClick = disclaimerIndex => {
    setDisclaimerIndex(disclaimerIndex);
  };

  return (
    <div>
      <p>Language - Index Clicked: {activeLanguage}</p>
      <p>Disclaimer - Index Clicked: {disclaimerChange}</p>
      <AXAFooterSmall
        onLanguageClick={handleLanguageClick}
        onDisclaimerClick={handleLegalClick}
        dynamic
      >
        {languageOptions.map(l => (
          <a
            key={l.name}
            slot="language-item"
            className={l.isActive ? 'm-footer-small__link--active' : undefined}
            href="https://patterns.axa.ch"
          >
            {l.name.toUpperCase()}
          </a>
        ))}
        {legals.map(l => (
          <a
            key={l.name}
            slot="disclaimer-item"
            href={l.url}
            target="_blank"
            rel="noreferrer"
          >
            {l.name}
          </a>
        ))}
        <span slot="copyright">{copyrightText}</span>
      </AXAFooterSmall>
    </div>
  );
}

export default DemoFooterSmallDynamicChildren;
