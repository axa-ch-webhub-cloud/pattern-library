/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Text', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Text - Default',
    () => `<axa-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet laoreet mauris sit amet congue.
            Pellentesque lacinia imperdiet turpis, sit amet finibus est porta sit amet.
            Vestibulum maximus enim suscipit, bibendum nisi et, sodales turpis.
            Morbi eget eros sed tortor finibus pretium nec at lacus. Fusce egestas cursus nisl et sollicitudin.
            Pellentesque id metus neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec ornare risus non egestas vulputate. Aliquam ultrices condimentum libero ut ultrices.
            Vivamus mauris tellus, semper at consequat sit amet, semper nec metus. Mauris sed commodo dolor.
            Pellentesque lorem neque, varius sit amet euismod eget, hendrerit quis justo.
            Nam quis nunc sit amet tellus volutpat convallis quis nec tellus.
            Mauris sed mi risus. Praesent ultrices neque ac leo vehicula facilisis. Morbi eu ullamcorper mauris.
          </axa-text>`
  )
  .add(
    'Text - Size 2',
    () => `<axa-text variant="size-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet laoreet mauris sit amet congue.
            Pellentesque lacinia imperdiet turpis, sit amet finibus est porta sit amet.
            Vestibulum maximus enim suscipit, bibendum nisi et, sodales turpis.
            Morbi eget eros sed tortor finibus pretium nec at lacus. Fusce egestas cursus nisl et sollicitudin.
            Pellentesque id metus neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec ornare risus non egestas vulputate. Aliquam ultrices condimentum libero ut ultrices.
            Vivamus mauris tellus, semper at consequat sit amet, semper nec metus. Mauris sed commodo dolor.
            Pellentesque lorem neque, varius sit amet euismod eget, hendrerit quis justo.
            Nam quis nunc sit amet tellus volutpat convallis quis nec tellus.
            Mauris sed mi risus. Praesent ultrices neque ac leo vehicula facilisis. Morbi eu ullamcorper mauris.
          </axa-text>`
  )
  .add(
    'Text - Size 3',
    () => `<axa-text variant="size-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet laoreet mauris sit amet congue.
            Pellentesque lacinia imperdiet turpis, sit amet finibus est porta sit amet.
            Vestibulum maximus enim suscipit, bibendum nisi et, sodales turpis.
            Morbi eget eros sed tortor finibus pretium nec at lacus. Fusce egestas cursus nisl et sollicitudin.
            Pellentesque id metus neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec ornare risus non egestas vulputate. Aliquam ultrices condimentum libero ut ultrices.
            Vivamus mauris tellus, semper at consequat sit amet, semper nec metus. Mauris sed commodo dolor.
            Pellentesque lorem neque, varius sit amet euismod eget, hendrerit quis justo.
            Nam quis nunc sit amet tellus volutpat convallis quis nec tellus.
            Mauris sed mi risus. Praesent ultrices neque ac leo vehicula facilisis. Morbi eu ullamcorper mauris.
          </axa-text>`
  )
  .add(
    'Text - Bold',
    () => `<axa-text variant="bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet laoreet mauris sit amet congue.
            Pellentesque lacinia imperdiet turpis, sit amet finibus est porta sit amet.
            Vestibulum maximus enim suscipit, bibendum nisi et, sodales turpis.
            Morbi eget eros sed tortor finibus pretium nec at lacus. Fusce egestas cursus nisl et sollicitudin.
            Pellentesque id metus neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec ornare risus non egestas vulputate. Aliquam ultrices condimentum libero ut ultrices.
            Vivamus mauris tellus, semper at consequat sit amet, semper nec metus. Mauris sed commodo dolor.
            Pellentesque lorem neque, varius sit amet euismod eget, hendrerit quis justo.
            Nam quis nunc sit amet tellus volutpat convallis quis nec tellus.
            Mauris sed mi risus. Praesent ultrices neque ac leo vehicula facilisis. Morbi eu ullamcorper mauris.
          </axa-text>`
  );
