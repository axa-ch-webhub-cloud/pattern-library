import React, { useState, createElement } from 'react';

import createAXACheckbox from '../../components/10-atoms/checkbox/index.react';
import createAXAFieldset from '../../components/10-atoms/fieldset/index.react';

const AXACheckbox = createAXACheckbox(createElement);
const AXAFieldset = createAXAFieldset(createElement);

const DemoCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <AXAFieldset>
      <AXACheckbox
        onChange={() => {
          setChecked(!checked);
        }}
        checked={checked}
        label="I'm a checkbox that is controlled"
      />
      <AXACheckbox
        onChange={() => {
          console.log('clicked');
        }}
        label="I'm a checkbox with longer label and error"
        error=" Im an error"
      />
    </AXAFieldset>
  );
};

export default DemoCheckbox;
