/* eslint-disable jest/no-identical-title */

import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

const axaBlue = 'rgb(0, 0, 143)';
const primRedFlamingo = 'rgb(240, 118, 98)';
const primWhite = 'rgb(255, 255, 255)';
const linkText = 'This is a simple link';

fixture('Link').page(`${host}/iframe.html?id=components--link`);

test('should display correctly', async t => {
  const axaLink = Selector('axa-link');
  await t
    .expect(axaLink.getAttribute('href'))
    .eql('https://www.axa.ch/en/information/data-protection.html');

  const linkElement = Selector(
    () => document.querySelector('axa-link').shadowRoot
  ).find('a');
  await t
    .expect(linkElement.getAttribute('href'))
    .eql('https://www.axa.ch/en/information/data-protection.html');

  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(axaBlue);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${axaBlue}`);

  const linkTextElement = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkTextElement.textContent).eql('Data protection statement');
});

fixture('Link - External').page(
  `${host}/iframe.html?id=components--link&knob-link=https://axa.ch/en/private-customers.html&knob-Link%20text=This%20is%20a%20simple%20link&knob-external=true`
);

test('should display correctly', async t => {
  const axaLink = Selector('axa-link');
  await t
    .expect(axaLink.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');
  await t.expect(axaLink.hasAttribute('external')).ok();

  const linkElement = Selector(
    () => document.querySelector('axa-link').shadowRoot
  ).find('a');
  await t
    .expect(linkElement.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');

  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(axaBlue);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${axaBlue}`);

  const linkTextElement = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkTextElement.textContent).eql('This is a simple link');
});

fixture('Link - Simple Link - Icon').page(
  `${host}/iframe.html?id=components--link&knob-link=https://axa.ch/en/private-customers.html&knob-Link%20text=This%20is%20a%20simple%20link&knob-variant=icon&knob-icon=download`
);

test('should display correctly', async t => {
  const axaLink = Selector('axa-link');
  await t
    .expect(axaLink.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');

  const linkElement = Selector(
    () => document.querySelector('axa-link').shadowRoot
  ).find('a');
  await t
    .expect(linkElement.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');

  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(axaBlue);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${axaBlue}`);

  const arrowIcon = linkElement.find('.js-icon');
  await t.expect(arrowIcon.hasClass('a-link__icon')).ok();
  await t.expect(arrowIcon.getAttribute('icon')).eql('download');
  const linkTextElement = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkTextElement.textContent).eql(linkText);
});

fixture('Link - Simple Link - Static Arrow Right').page(
  `${host}/iframe.html?id=components--link&knob-link=https://axa.ch/en/private-customers.html&knob-Link%20text=This%20is%20a%20simple%20link&knob-variant=arrowright`
);

test('should display correctly', async t => {
  const axaLink = Selector('axa-link');
  await t
    .expect(axaLink.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');

  const linkElement = Selector(
    () => document.querySelector('axa-link').shadowRoot
  ).find('a');
  await t
    .expect(linkElement.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');

  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(axaBlue);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${axaBlue}`);

  const arrowIcon = linkElement.find('.js-icon');
  await t.expect(arrowIcon.hasClass('a-link__icon')).ok();
  await t.expect(arrowIcon.getAttribute('icon')).eql('arrow-right');
  const linkTextElement = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkTextElement.textContent).eql(linkText);
});

fixture('Link - Simple Link - Static Arrow Left').page(
  `${host}/iframe.html?id=components--link&knob-link=https://axa.ch/en/private-customers.html&knob-Link%20text=This%20is%20a%20simple%20link&knob-variant=arrowleft`
);

test('should display correctly', async t => {
  const axaLink = Selector('axa-link');
  await t
    .expect(axaLink.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');

  const linkElement = Selector(
    () => document.querySelector('axa-link').shadowRoot
  ).find('a');
  await t
    .expect(linkElement.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');

  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(axaBlue);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${axaBlue}`);

  const arrowIcon = linkElement.find('.js-icon');
  await t.expect(arrowIcon.hasClass('a-link__icon')).ok();
  await t.expect(arrowIcon.getAttribute('icon')).eql('arrow-right');
  const linkTextElement = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkTextElement.textContent).eql(linkText);
});

fixture('Link - Simple Link - Animated Arrow Right').page(
  `${host}/iframe.html?id=components--link&knob-link=https://axa.ch/en/private-customers.html&knob-Link%20text=This%20is%20a%20simple%20link&knob-variant=arrowright-animated`
);

test('should display correctly', async t => {
  const axaLink = Selector('axa-link');
  await t
    .expect(axaLink.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');
  await t.expect(axaLink.getAttribute('variant')).contains('animated');

  const linkElement = Selector(
    () => document.querySelector('axa-link').shadowRoot
  ).find('a');
  await t
    .expect(linkElement.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');

  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(axaBlue);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${axaBlue}`);

  const arrowIcon = linkElement.find('.js-icon');
  await t.expect(arrowIcon.hasClass('a-link__icon')).ok();
  await t.expect(arrowIcon.getAttribute('icon')).eql('arrow-right');
  const linkTextElement = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkTextElement.textContent).eql(linkText);
});

fixture('Link - Simple Link - Animated Arrow Left').page(
  `${host}/iframe.html?id=components--link&knob-link=https://axa.ch/en/private-customers.html&knob-Link%20text=This%20is%20a%20simple%20link&knob-variant=arrowleft-animated`
);

test('should display correctly', async t => {
  const axaLink = Selector('axa-link');
  await t
    .expect(axaLink.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');
  await t.expect(axaLink.getAttribute('variant')).contains('animated');

  const linkElement = Selector(
    () => document.querySelector('axa-link').shadowRoot
  ).find('a');
  await t
    .expect(linkElement.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');

  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(axaBlue);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${axaBlue}`);

  const arrowIcon = linkElement.find('.js-icon');
  await t.expect(arrowIcon.hasClass('a-link__icon')).ok();
  await t.expect(arrowIcon.getAttribute('icon')).eql('arrow-right');
  const linkTextElement = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkTextElement.textContent).eql(linkText);
});

fixture('Link - Simple Link - Red Color').page(
  `${host}/iframe.html?id=components--link&knob-link=https://axa.ch/en/private-customers.html&knob-Link%20text=This%20is%20a%20simple%20link&knob-variant=icon-red`
);

test('should display correctly', async t => {
  const axaLink = Selector('axa-link');
  await t
    .expect(axaLink.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');
  await t.expect(axaLink.getAttribute('variant')).eql('icon-red');

  const linkElement = Selector(
    () => document.querySelector('axa-link').shadowRoot
  ).find('a');
  await t
    .expect(linkElement.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');

  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(primRedFlamingo);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${primRedFlamingo}`);
});

fixture('Link - Simple Link - White Color').page(
  `${host}/iframe.html?id=components--link&knob-link=https://axa.ch/en/private-customers.html&knob-Link%20text=This%20is%20a%20simple%20link&knob-variant=icon-white`
);

test('should display correctly', async t => {
  const axaLink = Selector('axa-link');
  await t
    .expect(axaLink.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');
  await t.expect(axaLink.getAttribute('variant')).eql('icon-white');

  const linkElement = Selector(
    () => document.querySelector('axa-link').shadowRoot
  ).find('a');
  await t
    .expect(linkElement.getAttribute('href'))
    .eql('https://axa.ch/en/private-customers.html');

  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(primWhite);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${primWhite}`);
});

fixture('Link - Reactified, dynamic icons').page(
  `${host}/iframe.html?id=examples-link-react--variable-icons`
);

test('should correctly update icon and text', async t => {
  const axaLink = await Selector(() => document.querySelector('axa-link'));
  const axaLinkEmbedded = await Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );

  const downIconSignature =
    'M16.59 8.295L12 12.875l-4.59-4.58L6 9.705l6 6 6-6-1.41-1.41z'; // expand.svg
  const upIconSignature =
    'M12 8.295l-6 6 1.41 1.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6z'; // collapse.svg

  const iconSVGPathElement = Selector(() =>
    document
      .querySelector('axa-link')
      .shadowRoot.querySelector('.js-icon')
      .shadowRoot.querySelector('path')
  );

  await t
    .expect(await iconSVGPathElement.getAttribute('d'))
    .eql(downIconSignature);

  await t.expect(await axaLink.textContent).eql('Mehr Filter');

  await t.click(axaLinkEmbedded);

  await t
    .expect(await iconSVGPathElement.getAttribute('d'))
    .eql(upIconSignature);

  await t.expect(await axaLink.textContent).eql('Weniger Filter');
});
