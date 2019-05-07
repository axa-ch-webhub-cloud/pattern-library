/* global document */
import { storiesOf } from '@storybook/html';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';
import './index';

storiesOf('Atoms/Button Link', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Button Link - default',
    () => '<axa-button-link href="https://axa.ch/">Default</axa-button-link>'
  )
  .add(
    'Button Link - external',
    () =>
      '<axa-button-link href="https://axa.ch/" external>External</axa-button-link>'
  )
  .add(
    'Button Link - variant: red',
    () => '<axa-button-link variant="red">Red</axa-button-link>'
  )
  .add(
    'Button Link - variant: secondary',
    () => '<axa-button-link variant="secondary">Secondary</axa-button-link>'
  )
  .add(
    'Button Link - variant: inverted',
    () => `
    <div style="background-color: #00008f; width: 500px; height: 100px; padding-top: 30px; padding-bottom: 30px">
      <axa-button-link variant='inverted'>Inverted</axa-button-link>
    </div>`
  )
  .add(
    'Button - variant: inverted-green',
    () => `
    <div style="background-color: #027180; width: 500px; height: 100px; padding-top: 30px; padding-bottom: 30px">
      <axa-button-link variant='inverted-green'>Inverted-Green</axa-button-link>
    </div>`
  )
  .add(
    'Button - variant: inverted-dark-blue',
    () => `
    <div style="background-color: #00005b; width: 500px; height: 100px; padding-top: 30px; padding-bottom: 30px">
      <axa-button-link variant='inverted-dark-blue'>Inverted-Dark-Blue</axa-button-link>
    </div>`
  )
  .add(
    'Button Link - disabled',
    () => '<axa-button-link disabled>Disabled</axa-button-link>'
  )
  .add('Button Link - large', () => `<axa-button-link>Large</axa-button-link>`)
  .add(
    'Button Link - motion',
    () => `
    <div>
        <axa-button-link motionoff>MotionOff</axa-button-link>
        <axa-button-link motionoff variant="red">MotionOff + Red</axa-button-link>
        <axa-button-link motionoff variant="secondary">MotionOff + Secondary</axa-button-link>
      </div>
    </div>`
  )
  .add(
    'Button Link - icon',
    () => `<axa-button-link icon="arrow-right">Icon</axa-button-link>`
  );
