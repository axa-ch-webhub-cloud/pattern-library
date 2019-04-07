import React, { createElement } from 'react';
import createAXAIconReact from '../../components/10-atoms/icon/index.react';
import axaLogo from '../../static/svg/logo-axa.svg'


const AXAIconReact = createAXAIconReact(createElement);

const DemoIcon = () => {
  return (
    <div>
      <p>Show download icon</p>
      <AXAIconReact icon='download' />
      <p>icon from resource</p>
      <AXAIconReact icon={axaLogo} />
    </div>
  );
};

export default DemoIcon;
