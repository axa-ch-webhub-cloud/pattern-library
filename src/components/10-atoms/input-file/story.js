/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Input File', module)
  .addDecorator(withMarkdown(Readme))

  /* Default */
  .add(
    'Input File - Default',
    () => '<axa-input-file>Default</axa-input-file>'
  )

  /* Icon */
  .add(
    'Input File - Icon',
    () => '<axa-input-file icon="arrow-right">Icon</axa-input-file>'
  )

  /* Multiple */
  .add(
    'Input File - Multiple',
    () => `<axa-input-file multiple>Multiple</axa-input-file>`
  )

  /* Accept */
  .add(
    'Input File - Accept',
    () => '<axa-input-file accept="application/pdf">Accept only PDF</axa-input-file>'
  )

  /* Capture */
  .add(
    'Input File - Capture',
    () => `
    <div>
      <axa-input-file accept="image" capture>Capture</axa-input-file>
      <axa-input-file capture="user">Capture User</axa-input-file>
      <axa-input-file capture="environment">Capture Environment</axa-input-file>
    </div>`
  );
