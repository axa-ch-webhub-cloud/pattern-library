import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Footer Small - Static links').page(
  `${host}/iframe.html?id=components-footer-small--footer-small`
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
  `${host}/iframe.html?id=examples-footer-small-pure-html--dynamic-links`
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
  `${host}/iframe.html?id=examples-footer-small-react--callbacks-on-language`
);

test('should render Reactified axa-footer-small', async t => {
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

fixture('Footer Small - React dynamic children test').page(
  `${host}/iframe.html?id=examples-footer-small-react--dynamic-change-of-children-upon-language-change`
);

test('should update Reactified axa-footer-small when children change dynamically', async t => {
  const disclaimers = await Selector(() =>
    document
      .querySelector(`axa-footer-small`)
      .shadowRoot.querySelector(
        '.m-footer-small__disclaimer .m-footer-small__list'
      )
  ).innerText;

  await t.expect(disclaimers).contains('Nutzungshinweise  Datenschutz');

  const italian = Selector(() =>
    document
      .querySelector(`axa-footer-small`)
      .shadowRoot.querySelector('.js-footer-small__link-3')
  );

  await t.click(italian);

  const italianDisclaimers = await Selector(() =>
    document
      .querySelector(`axa-footer-small`)
      .shadowRoot.querySelector(
        '.m-footer-small__disclaimer .m-footer-small__list'
      )
  ).innerText;

  await t
    .expect(italianDisclaimers)
    .contains("Avvertenze per l'utilizzazione  Protezione dei dati");
});
