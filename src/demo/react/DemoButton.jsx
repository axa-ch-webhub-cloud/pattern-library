import React, { createElement } from 'react';
import '../../components/10-atoms/button';
import createAXAButtonReact from '../../components/10-atoms/button/index.react';

const AXAButtonReact = createAXAButtonReact(createElement);

const DemoButton = () => {
  const handleAXAButtonClick = () => {
    /* eslint-disable no-alert */
    window.alert('Oo yeah you clicked me');
    /* eslint-enable no-alert */
  };

  return (
    <div>
      <p>with react wrapper - callback props are possible, too:</p>
      <AXAButtonReact onClick={handleAXAButtonClick}>
        I&apos;m clickable
      </AXAButtonReact>
    </div>
  );
};

export default DemoButton;
