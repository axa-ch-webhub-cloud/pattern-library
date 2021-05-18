import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Radio - basic functionality').page(`${host}/iframe.html?id=examples-radio-pure-html--default`);

test('should render radio button', async t => {
  const radio = await Selector('axa-radio');
  await t.expect(radio.exists).ok();
});

fixture('Radio - controlled-component behaviour under React 1').page(`${host}/iframe.html?id=examples-radio-react--controlled-component-react-ified`);

test('should show controlled-component behaviour in button mode', async t => {
  const radio1 = await Selector('axa-radio#radio1');
  const radio2 = await Selector('axa-radio#radio2');
  const checked = await Selector('#checked');

  await t.click(radio2);

  await t.expect(radio2.getAttribute('checked')).eql('');

  await t.expect(radio1.getAttribute('checked')).notOk();

  await t.expect(checked.textContent).eql('checked: ⟨false, true⟩');

  await t.click('#freeze');

  await t.click(radio1);

  await t.expect(checked.textContent).eql('checked: ⟨false, true⟩');

  await t.click('#freeze');

  await t.click(radio1);

  await t.expect(checked.textContent).eql('checked: ⟨true, false⟩');

  await t.expect(radio2.getAttribute('checked')).notOk();

  await t.expect(radio1.getAttribute('checked')).eql('');
});

fixture('Radio - controlled-component behaviour under React 2').page(`${host}/iframe.html?id=examples-radio-react--controlled-component-react-ified`);

test('should show controlled-component behaviour in default mode', async t => {
  const radio1 = await Selector('axa-radio#radio1');
  const radio2 = await Selector('axa-radio#radio2');
  const checked = await Selector('#checked');
  const button = await Selector('#button');
  const visible = await Selector('#visible');

  await t.click(button);

  await t.click(radio2);

  await t.expect(radio2.getAttribute('checked')).eql('');

  await t.expect(radio1.getAttribute('checked')).notOk();

  await t.expect(checked.textContent).eql('checked: ⟨false, true⟩');

  await t.click('#freeze');

  await t.click(radio1);

  await t.expect(checked.textContent).eql('checked: ⟨false, true⟩');

  await t.click('#freeze');

  await t.click(radio1);

  await t.expect(checked.textContent).eql('checked: ⟨true, false⟩');

  await t.expect(radio2.getAttribute('checked')).notOk();

  await t.expect(radio1.getAttribute('checked')).eql('');

  // rendering axa-radios invisible cleanly removes them from DOM without exceptions being thrown
  await t.click(visible);

  await t.expect(radio1.exists).notOk();
  await t.expect(radio2.exists).notOk();
});
