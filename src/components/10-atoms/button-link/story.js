/* global document */
import { storiesOf } from '@storybook/html';
import Readme from './README.md';
import './index';

storiesOf('Atoms/Button Link', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
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
      <axa-button-link variant="inverted">Inverted</axa-button-link>
      <axa-button-link variant="inverted-blue-ocean">inverted-blue-ocean</axa-button-link>
      <axa-button-link variant="inverted-red-tosca">inverted-red-tosca</axa-button-link>
      <axa-button-link variant="inverted-purple-logan">inverted-purple-logan</axa-button-link>
      <axa-button-link variant="inverted-green-viridian">inverted-green-viridian</axa-button-link>
      <axa-button-link variant="inverted-blue-teal">inverted-blue-teal</axa-button-link>
    </div>`
  )
  .add(
    'Button Link - disabled',
    () => '<axa-button-link disabled>Disabled</axa-button-link>'
  )
  .add(
    'Button Link - size',
    () => `
    <div>
      <axa-button-link size="small">Small</axa-button-link>
      <axa-button-link>Medium</axa-button-link>
      <axa-button-link size="large">Large</axa-button-link>
    </div>`
  )
  .add(
    'Button Link - motionOff',
    () => `
    <div>
        <axa-button-link motionoff>MotionOff</axa-button-link>
        <axa-button-link motionoff variant="red">MotionOff + Red</axa-button-link>
        <axa-button-link motionoff variant="secondary">MotionOff + Secondary</axa-button-link>
      </div>
    </div>`
  )
  /* Icon */
  .add(
    'Button - icon',
    () => `<axa-button-link icon="download">Icon</axa-button-link>`
  )

  /* Arrow */
  .add(
    'Button - icon(arrow-right)',
    () => `<axa-button-link icon="arrow-right">Icon</axa-button-link>`
  );
