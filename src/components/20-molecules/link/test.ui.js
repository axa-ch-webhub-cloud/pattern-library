import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Datepicker').page(`${host}/iframe.html?id=atoms-link--unstyled-link`);

test.only('should display unstyled link', async t => {
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
