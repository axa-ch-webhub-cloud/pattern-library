/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Input File', module)
  .addDecorator(withMarkdown(Readme))

  /* Default */
  .add('Input File - Default', () => '<axa-input-file>Default</axa-input-file>')

  /* Icon */
  .add(
    'Input File - Icon',
    () => '<axa-input-file icon="arrow-right">Icon</axa-input-file>'
  )

  /* Disabled */
  .add(
    'Input File - Disabled',
    () => '<axa-input-file disabled>Disabled</axa-input-file>'
  )

  /* Multiple */
  .add(
    'Input File - Multiple',
    () => `<axa-input-file multiple>Multiple</axa-input-file>`
  )

  /* Accept */
  .add(
    'Input File - Accept',
    () =>
      '<axa-input-file accept="application/pdf">Accept only PDF</axa-input-file>'
  )

  /* Capture */
  .add(
    'Input File - Capture',
    () => `
    <div>
      <axa-input-file capture="capture">Capture</axa-input-file>
      <axa-input-file accept="image/*" capture>Capture Image</axa-input-file>
      <axa-input-file accept="video/*" capture>Capture Video</axa-input-file>
    </div>`
  );
