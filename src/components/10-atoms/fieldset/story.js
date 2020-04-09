/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

storiesOf('Components|Atoms/Fieldset', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Fieldset', () => {
    const error = text('error', '');
    const horizontal = boolean('horizontal', false);
    const enableresponsivestretch = boolean('enableResponsiveStretch', false);

    const wrapper = document.createElement('div');
    const template = html`
      <axa-text variant="size-3">
        Resize your browser to a tablet or mobile width to see the effect of
        "enableResponsiveStretch"</axa-text
      >
      <br />
      <axa-fieldset
        ?horizontal="${horizontal}"
        error="${error}"
        ?enableresponsivestretch="${enableresponsivestretch}"
      >
        <axa-checkbox
          label="I agree to conditions of data protection."
          error="Please accept our terms and conditions."
        ></axa-checkbox>
        <axa-checkbox label="I accept the conditions"></axa-checkbox>
        <axa-checkbox
          label="I want to sign up for the newsletter"
          checked
          disabled
        ></axa-checkbox>
      </axa-fieldset>
    `;

    render(template, wrapper);
    return wrapper;
  });
