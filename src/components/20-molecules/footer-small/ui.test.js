import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Footer Small - Static links').page(
  `${host}/iframe.html?id=molecules-footer-small--footer-small`
);

test('should render four languages', async t => {
  const german = Selector(
    () => document.querySelector(`axa-footer-small`).shadowRoot
  )
    .find('a')
    .withText('DE');
  await t.expect(german.exists).ok();

  const french = Selector(
    () => document.querySelector(`axa-footer-small`).shadowRoot
  )
    .find('a')
    .withText('FR');
  await t.expect(french.exists).ok();

  const italian = Selector(
    () => document.querySelector(`axa-footer-small`).shadowRoot
  )
    .find('a')
    .withText('IT');
  await t.expect(italian.exists).ok();

  const english = Selector(
    () => document.querySelector(`axa-footer-small`).shadowRoot
  )
    .find('a')
    .withText('EN');
  await t.expect(english.exists).ok();
});

test('should render disclaimer section', async t => {
  const termsOfUse = Selector(() =>
    document
      .querySelector(`axa-footer-small`)
      .shadowRoot.querySelector('.m-footer-small__disclaimer')
      .querySelector('.m-footer-small__list-item')
  )
    .find('a')
    .withText('Terms of use');
  await t.expect(termsOfUse.exists).ok();
});

test('should have a copyright section', async t => {
  const copyright = Selector(
    () =>
      document
        .querySelector(`axa-footer-small`)
        .shadowRoot.querySelector('slot[name="copyright"]')
        .assignedNodes()[0]
  );
  await t.expect(copyright.exists).ok();
  await t.expect(copyright.textContent).eql('© 2019 AXA Insurance Ltd.');
});

test('should have a link in the href attribute', async t => {
  const german = Selector(() =>
    document
      .querySelector(`axa-footer-small`)
      .shadowRoot.querySelector('.m-footer-small__list')
  )
    .find('a')
    .withText('DE');
  await t
    .expect(german.getAttribute('href'))
    .eql('https://axa.ch/de/privatkunden.html');
});

fixture('Footer Small - Dynamic Links Demo').page(
  `${host}/iframe.html?id=molecules-footer-small-demos--footer-small-dynamic-links`
);

test('should update indices on click', async t => {
  const germanLanguage = Selector(() =>
    document.querySelector(`axa-footer-small`).shadowRoot.querySelector('a')
  );

  const lastClickedLanguageIndex = Selector('#active-language');
  await t
    .expect(lastClickedLanguageIndex.textContent)
    .eql('Language - Index Clicked: -');
  await t.click(germanLanguage);
  await t
    .expect(lastClickedLanguageIndex.textContent)
    .eql('Language - Index Clicked: 0');
});

fixture('Footer Small - React smoke test').page(
  `${host}/iframe.html?id=molecules-footer-small-react--footer-with-callbacks-on-language`
);

test('should render react axa footer small', async t => {
  const copyright = Selector(
    () =>
      document
        .querySelector(`axa-footer-small`)
        .shadowRoot.querySelector('slot[name="copyright"]')
        .assignedNodes()[0]
  );
  await t.expect(copyright.exists).ok();
  await t.expect(copyright.textContent).eql('© 2019 AXA Insurance Ltd.');
});
