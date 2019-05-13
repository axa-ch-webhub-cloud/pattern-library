import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Checkbox - basic functionality').page(
  `${host}/iframe.html?id=atoms-checkbox--checkbox-preselected-clickable-with-label`
);

const TAG = 'axa-checkbox';

test('should render checkbox', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
});

test('should style checkbox default CSS (test axa blue bg color)', async t => {
  const getIconBackgroundColor = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    checkbox.checked = true;
    return window
      .getComputedStyle(checkbox.querySelector('.a-checkbox__icon'), ':after')
      .getPropertyValue('background-color');
  });
  const measuredColor = await getIconBackgroundColor();
  await t.expect(measuredColor).eql('rgb(0, 0, 143)');
});

test('should be clickable + change state', async t => {
  const $axaCheckbox = await Selector(TAG);
  await t.click($axaCheckbox);
  await t.expect($axaCheckbox.checked).ok();
});

test('should set checkbox element to disabled + not change state', async t => {
  const $axaCheckbox = await Selector(TAG);
  const setDisabled = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    checkbox.checked = false;
    checkbox.disabled = true;
  });
  await setDisabled();
  await t.expect(await $axaCheckbox.hasAttribute('disabled')).ok();
  await t.click($axaCheckbox);
  await t.expect($axaCheckbox.checked).notOk();
});
