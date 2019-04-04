import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Link').page(`${host}/iframe.html?id=atoms-link--unstyled-link`);

test('should display unstyled link correctly', async t => {
  const axaLink = Selector('axa-link');
  await t.expect(axaLink.getAttribute('href')).eql('https://axa.ch/en/private-customers.html');

  const linkElement = Selector(() => document.querySelector('axa-link').shadowRoot).find('a');
  await t.expect(linkElement.getAttribute('href')).eql('https://axa.ch/en/private-customers.html');

  const link = Selector(() => document.querySelector('axa-link').shadowRoot.querySelector('a'));
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql('rgb(0, 0, 91)');
  await t.expect(link.getStyleProperty('text-decoration')).eql('none solid rgb(0, 0, 91)');

  const linkText = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkText.textContent).eql('This simple link just links');
});

fixture('Link').page(`${host}/iframe.html?id=atoms-link--red-link`);

test('should display red link correctly', async t => {
  const axaLink = Selector('axa-link');
  await t.expect(axaLink.getAttribute('href')).eql('https://axa.ch/en/private-customers.html');
  await t.expect(axaLink.getAttribute('color')).eql('red');

  const linkElement = Selector(() => document.querySelector('axa-link').shadowRoot).find('a');
  await t.expect(linkElement.getAttribute('href')).eql('https://axa.ch/en/private-customers.html');

  const link = Selector(() => document.querySelector('axa-link').shadowRoot.querySelector('a'));
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql('rgb(240, 118, 98)');
  await t.expect(link.getStyleProperty('text-decoration')).eql('none solid rgb(240, 118, 98)');

  const linkText = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkText.textContent).eql('Red Link');
});

fixture('Link').page(`${host}/iframe.html?id=atoms-link--white-link`);

test('should display white link correctly', async t => {
  const axaLink = Selector('axa-link');
  await t.expect(axaLink.getAttribute('href')).eql('https://axa.ch/en/private-customers.html');
  await t.expect(axaLink.getAttribute('color')).eql('white');

  const linkElement = Selector(() => document.querySelector('axa-link').shadowRoot).find('a');
  await t.expect(linkElement.getAttribute('href')).eql('https://axa.ch/en/private-customers.html');

  const link = Selector(() => document.querySelector('axa-link').shadowRoot.querySelector('a'));
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql('rgb(255, 255, 255)');
  await t.expect(link.getStyleProperty('text-decoration')).eql('none solid rgb(255, 255, 255)');

  const linkText = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkText.textContent).eql('White Link');
});

fixture('Link').page(`${host}/iframe.html?id=atoms-link--decorated`);

test('should display decorated link correctly', async t => {
  const axaLink = Selector('axa-link');
  await t.expect(axaLink.getAttribute('href')).eql('https://axa.ch/en/private-customers.html');
  await t.expect(axaLink.hasAttribute('deco')).ok();

  const linkElement = Selector(() => document.querySelector('axa-link').shadowRoot).find('a');
  await t.expect(linkElement.getAttribute('href')).eql('https://axa.ch/en/private-customers.html');

  const link = Selector(() => document.querySelector('axa-link').shadowRoot.querySelector('a'));
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql('rgb(0, 0, 91)');
  await t.expect(link.getStyleProperty('text-decoration')).eql('underline solid rgb(0, 0, 91)');

  const linkText = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkText.textContent).eql('Decorated Link');
});

fixture('Link').page(`${host}/iframe.html?id=atoms-link--bold`);

test('should display bold link correctly', async t => {
  const axaLink = Selector('axa-link');
  await t.expect(axaLink.getAttribute('href')).eql('https://axa.ch/en/private-customers.html');
  await t.expect(axaLink.hasAttribute('bold')).ok();

  const linkElement = Selector(() => document.querySelector('axa-link').shadowRoot).find('a');
  await t.expect(linkElement.getAttribute('href')).eql('https://axa.ch/en/private-customers.html');

  const link = Selector(() => document.querySelector('axa-link').shadowRoot.querySelector('a'));
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql('rgb(0, 0, 91)');
  await t.expect(link.getStyleProperty('text-decoration')).eql('none solid rgb(0, 0, 91)');
  await t.expect(link.getStyleProperty('font-weight')).eql('700');

  const linkText = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkText.textContent).eql('Bold Link');
});
