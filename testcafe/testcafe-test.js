import { Selector } from 'testcafe';

fixture('TestCafe Democase').page('http://localhost:9001/iframe.html?selectedKind=Button&selectedStory=Button%20Native');

test('Should check button for various states', async t => {
  console.log('init');

  await Selector('axa-button').withExactText("I'M CLICKABLE");
  // This is how to access the shadow dom with TestCafe. Native selectors are allowed, which is a plus.
  const random = await Selector(() => document.querySelector('axa-button').shadowRoot);
  const testWithId = await Selector(() => document.querySelector('#buttonWC').shadowRoot.querySelector('#buttonInner'));
  const testQuerySelector = await Selector(() => document.querySelector('axa-button').shadowRoot.querySelector('.m-button__flex-wrapper'));

  const insidebutton = random.find('button');
  await insidebutton();
  await t.expect(insidebutton.exists).ok();
  await t.expect(insidebutton.hasAttribute('id')).ok();
  await t.expect(insidebutton.hasClass('m-button')).ok();
  await t.expect(insidebutton.getStyleProperty('background-color')).eql('rgb(0, 0, 143)');

  console.log('finished');
});
