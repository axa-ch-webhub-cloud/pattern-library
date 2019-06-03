/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Title primary', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Title primary - Size 1',
    () => '<axa-title-primary>Title primary 1</axa-title-primary>'
  )
  .add(
    'Title primary - Size 2',
    () =>
      '<axa-title-primary variant="size-2">Title primary 2</axa-title-primary>'
  )
  .add(
    'Title primary - Size 3',
    () =>
      '<axa-title-primary variant="size-3">Title primary 3</axa-title-primary>'
  )
  .add(
    'Title primary - Size 4',
    () =>
      '<axa-title-primary variant="size-4">Title primary 4</axa-title-primary>'
  )
  .add(
    'Title primary - Size 5',
    () =>
      '<axa-title-primary variant="size-5">Title primary 5</axa-title-primary>'
  )
  .add(
    'Title primary - Size 6',
    () =>
      '<axa-title-primary variant="size-6">Title primary 6</axa-title-primary>'
  );
