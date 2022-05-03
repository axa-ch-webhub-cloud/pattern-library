import React, { useState } from 'react';
import AXALink from './AXALinkReact';

const t = (scope, text) => {
  const language = 'de'; // for test determinism; replace with navigator.language.slice(0, 2) in real use...
  const TRANSLATIONS = {
    todo: {
      'Less Filter': { de: 'Weniger Filter' },
      'More Filter': { de: 'Mehr Filter' },
    },
  };
  return ((TRANSLATIONS[scope] || {})[text] || {})[language] || text;
};

const DemoLink = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <span>Dynamic icon change via onClick:</span>
      <hr style={{ height: '1rem', border: '0' }} />
      <AXALink
        onClick={toggleExpand}
        variant="icon"
        icon={expanded ? 'collapse' : 'expand'}
      >
        {expanded ? t('todo', 'Less Filter') : t('todo', 'More Filter')}
      </AXALink>
    </>
  );
};

export default DemoLink;
