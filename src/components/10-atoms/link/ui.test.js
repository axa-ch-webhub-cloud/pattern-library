/* eslint-disable jest/no-identical-title */

import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

const axaBlue = 'rgb(0, 0, 143)';
const primRedFlamingo = 'rgb(240, 118, 98)';
const primWhite = 'rgb(255, 255, 255)';

fixture('Link - Hyperlink').page(
  `${host}/iframe.html?id=atoms-link--hyperlink`
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

  const linkText = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkText.textContent).eql('This simple link just links');
});

fixture('Link - External').page(
  `${host}/iframe.html?id=atoms-link--external-link`
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

  const linkText = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t
    .expect(linkText.textContent)
    .eql("All links with the 'external' attribute will open in a new tab");
});

fixture('Link - Simple Link - Icon').page(
  `${host}/iframe.html?id=atoms-link--simple-link-icon`
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

  const arrowIcon = linkElement.find('axa-icon');
  await t.expect(arrowIcon.hasClass('a-link__icon')).ok();
  await t.expect(arrowIcon.getAttribute('icon')).eql('download');
  const linkText = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkText.textContent).eql('Download Link');
});

fixture('Link - Simple Link - Static Arrow Right').page(
  `${host}/iframe.html?id=atoms-link--simple-link-static-arrow-right`
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

  const arrowIcon = linkElement.find('axa-icon');
  await t.expect(arrowIcon.hasClass('a-link__icon')).ok();
  await t.expect(arrowIcon.getAttribute('icon')).eql('arrow-right');
  const linkText = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkText.textContent).eql('Arrow Right Link');
});

fixture('Link - Simple Link - Static Arrow Left').page(
  `${host}/iframe.html?id=atoms-link--simple-link-static-arrow-left`
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

  const arrowIcon = linkElement.find('axa-icon');
  await t.expect(arrowIcon.hasClass('a-link__icon')).ok();
  await t.expect(arrowIcon.getAttribute('icon')).eql('arrow-right');
  const linkText = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkText.textContent).eql('Arrow Left Link');
});

fixture('Link - Simple Link - Animated Arrow Right').page(
  `${host}/iframe.html?id=atoms-link--simple-link-animated-arrow-right`
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

  const arrowIcon = linkElement.find('axa-icon');
  await t.expect(arrowIcon.hasClass('a-link__icon')).ok();
  await t.expect(arrowIcon.getAttribute('icon')).eql('arrow-right');
  const linkText = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkText.textContent).eql('Motion Link Right');
});

fixture('Link - Simple Link - Animated Arrow Left').page(
  `${host}/iframe.html?id=atoms-link--simple-link-animated-arrow-left`
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

  const arrowIcon = linkElement.find('axa-icon');
  await t.expect(arrowIcon.hasClass('a-link__icon')).ok();
  await t.expect(arrowIcon.getAttribute('icon')).eql('arrow-right');
  const linkText = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkText.textContent).eql('Motion Link Left');
});

fixture('Link - Simple Link - Red Color').page(
  `${host}/iframe.html?id=atoms-link--simple-link-red-color`
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
  `${host}/iframe.html?id=atoms-link--simple-link-white-color`
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
