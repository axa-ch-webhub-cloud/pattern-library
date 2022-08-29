import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container';
import { args, argTypes } from '../story.args';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXACookieDisclaimerReact from './AXACookieDisclaimerReact';
import AXALinkReact from '../../../10-atoms/link/react/AXALinkReact';
import AXATextReact from '../../../10-atoms/text/react/AXATextReact';

export default {
  title: 'Examples/Cookie Disclaimer/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
  },
  args,
  argTypes,
  layout: 'fullscreen',
};

export const CookieDisclaimer = ({
  title,
  buttonname,
  href,
  description,
  slot,
}) =>
  createReactContainer(
    <div>
      <AXACookieDisclaimerReact
        onClick={() => {
          document.getElementById(
            'checkbox-output'
          ).innerHTML = `Clicked on: ${Date.now()}`;
        }}
        title={title}
        buttonname={buttonname}
      >
        <p>
          {description}
          <AXALinkReact variant="arrowright-animated-white" href={href}>
            {slot}
          </AXALinkReact>
        </p>
      </AXACookieDisclaimerReact>
      <AXATextReact id="checkbox-output">Clicked on:</AXATextReact>
    </div>
  );
