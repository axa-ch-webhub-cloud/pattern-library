import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import withNoBorder from '../../../../../.storybook/addons/no-border';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoFooterSmall from './FooterSmall';
import DemoFooterSmallDynamicChildren from './footerSmallDynamicChildren';

storiesOf('Examples/Footer Small/React', module)
  .addDecorator(withNoBorder)
  .addDecorator(withKnobs)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Callbacks on language', () => {
    const language1 = text('First language', `DE`);
    const language2 = text('Second language', `FR`);
    const language3 = text('Third language', `IT`);
    const language4 = text('Fourth language', `EN`);
    const termsOfUse = text('Terms of use', `Terms of use`);
    const dataProtection = text('Data protection', `Data protection`);

    const container = document.createElement('div');
    container.id = 'footer-small';
    const root = createRoot(container);
    root.render(
      <DemoFooterSmall
        language1={language1}
        language2={language2}
        language3={language3}
        language4={language4}
        termsOfUse={termsOfUse}
        dataProtection={dataProtection}
      />
    );

    return container;
  })
  .add('Dynamic change of children upon language change', () => {
    const container = document.createElement('div');
    container.id = 'footer-small-dynamic-children';
    const root = createRoot(container);

    root.render(<DemoFooterSmallDynamicChildren />);
    return container;
  });
