import { Selector } from 'testcafe';

fixture('TestCafe Democase').page('http://localhost:9001');

test('Check react button', async t => {
  const a = Selector('div');
  await t.click(a.withExactText('Demo'));
  await t.click(Selector('a[href="?selectedKind=Demo&selectedStory=Button%20React&full=0&addons=1&stories=1&panelRight=0"]'));

  //   await t.expect(Selector('p').withExactText('with react wrapper - callback props are possible:').exists).ok();

  await t
    .switchToIframe(Selector('#storybook-preview-iframe'))
    .expect(Selector('axa-button').withExactText("I'M DISABLED").exists)
    .ok();

  await t
    // We are already in the iFrame, this line will break the test.
    // .switchToIframe(Selector('#storybook-preview-iframe'))
    .expect(
      Selector('axa-button')
        .withExactText("I'M DISABLED")
        .hasAttribute('disabled')
    )
    .ok();

  // Custom elements do not expose their internals, so the following assertion fails.
  //   await t
  // .expect(Selector('axa-button').withExactText("I'M DISABLED").hasChildElements)
  // .ok();

  // Testing how to workaround accessing shadow dom
  await Selector('axa-button').withExactText("I'M CLICKABLE");
  // This is how to access the shadow dom with TestCafe.
  const buttonInsideAxaButton = await Selector(() => document.querySelector('axa-button[color="red"]').shadowRoot.querySelector('button'));
  await t.expect(buttonInsideAxaButton.exists).ok();
  await t.expect(buttonInsideAxaButton.getStyleProperty('background-color')).eql('rgb(240, 118, 98)');
  await t.expect(buttonInsideAxaButton.hasClass('m-button')).ok();
  await t.expect(buttonInsideAxaButton.hasClass('m-button--red')).ok();
});
