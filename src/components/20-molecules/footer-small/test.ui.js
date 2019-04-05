import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture.only('Footer Small').page(`${host}/iframe.html?id=molecules-footer-small--footer-small`);

// test('should display four languages', async t => {
//   //   const axaFooter = Selector('axa-footer-small').find('.m-footer-small__list');
//   const axaFooterLanguageSection = Selector(() =>
//     document.querySelector(`axa-footer-small`).shadowRoot.querySelector('.m-footer-small__list')
//   );
//   //   await t.expect(axaFooterLanguageSection.exists).ok();

//   const axaFooterLanguages = axaFooterLanguageSection('axa-link');
//   await t.expect(axaFooterLanguages.exists).ok();
//   console.log(axaFooterLanguages.childElementCount);
// });

test('should display four languages', async t => {
  //   const axaFooter = Selector('axa-footer-small').find('.m-footer-small__list');
  const axaFooterLanguageSection = Selector(
    () =>
      document
        .querySelector(`axa-footer-small`)
        .shadowRoot.querySelector('.m-footer-small__list')
        .querySelectorAll('axa-link')[1]
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(axaFooterLanguageSection.textContent).eql('FR');
  await t.expect(axaFooterLanguageSection.exists).ok();

  const axaFooterLanguages = axaFooterLanguageSection('axa-link');
  await t.expect(axaFooterLanguages.exists).ok();
  console.log(axaFooterLanguages.childElementCount);
});

// test('should have a linked disclaimer section', async t => {});

// test('should have a copyright section', async t => {});
