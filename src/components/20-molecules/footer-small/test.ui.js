import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Footer Small').page(
  `${host}/iframe.html?id=molecules-footer-small--footer-small`
);

test('should display four languages', async t => {
  const german = Selector(
    () =>
      document
        .querySelector(`axa-footer-small`)
        .shadowRoot.querySelector('.m-footer-small__list')
        .querySelectorAll('axa-link')[0]
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(german.exists).ok();
  await t.expect(german.textContent).eql('DE');

  const french = Selector(
    () =>
      document
        .querySelector(`axa-footer-small`)
        .shadowRoot.querySelector('.m-footer-small__list')
        .querySelectorAll('axa-link')[1]
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(french.exists).ok();
  await t.expect(french.textContent).eql('FR');

  const italian = Selector(
    () =>
      document
        .querySelector(`axa-footer-small`)
        .shadowRoot.querySelector('.m-footer-small__list')
        .querySelectorAll('axa-link')[2]
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(italian.exists).ok();
  await t.expect(italian.textContent).eql('IT');

  const english = Selector(
    () =>
      document
        .querySelector(`axa-footer-small`)
        .shadowRoot.querySelector('.m-footer-small__list')
        .querySelectorAll('axa-link')[3]
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(english.exists).ok();
  await t.expect(english.textContent).eql('EN');
});

test('should display disclaimer section', async t => {
  const termsOfUse = Selector(
    () =>
      document
        .querySelector(`axa-footer-small`)
        .shadowRoot.querySelector('.m-footer-small__disclaimer')
        .querySelector('.m-footer-small__list-item')
        .querySelectorAll('axa-link')[0]
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(termsOfUse.exists).ok();
  await t.expect(termsOfUse.textContent).eql('Terms of use');
});

test('should have a copyright section', async t => {
  const copyright = Selector(() =>
    document
      .querySelector(`axa-footer-small`)
      .shadowRoot.querySelector('div[class*="js-footer-small__copyright"]')
  );
  await t.expect(copyright.exists).ok();
  await t.expect(copyright.textContent).eql('© 2019 AXA Insurance Ltd.');
});
