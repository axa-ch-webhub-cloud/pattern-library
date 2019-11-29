import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Checkbox - basic functionality').page(
  `${host}/iframe.html?id=atoms-checkbox--checkbox`
);

const TAG = 'axa-checkbox';

test('should render checkbox', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
});

test('should style checked checkbox-icon inner box correctly', async t => {
  const getIconBackgroundColor = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    checkbox.checked = true;
    checkbox.disabled = false;
    return window
      .getComputedStyle(checkbox.querySelector('.a-checkbox__icon'), ':after')
      .getPropertyValue('background-color');
  });
  const measuredColor = await getIconBackgroundColor();
  await t.expect(measuredColor).eql('rgb(0, 0, 143)');
});

test('should style unchecked checkbox-icon inner box correctly', async t => {
  const getIconBackgroundColor = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    return window
      .getComputedStyle(checkbox.querySelector('.a-checkbox__icon'), ':after')
      .getPropertyValue('background-color');
  });

  const setProperties = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    checkbox.checked = false;
    checkbox.disabled = false;
  });

  await setProperties();
  await t
    .wait(50)
    .expect(await getIconBackgroundColor())
    .eql('rgba(0, 0, 0, 0)');
});

test('should style checked disabled checkbox-icon inner box correctly', async t => {
  const getIconBackgroundColor = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    return window
      .getComputedStyle(checkbox.querySelector('.a-checkbox__icon'), ':after')
      .getPropertyValue('background-color');
  });

  const setProperties = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    checkbox.checked = true;
    checkbox.disabled = true;
  });

  await setProperties();
  await t
    .wait(50)
    .expect(await getIconBackgroundColor())
    .eql('rgb(204, 204, 204)');
});

test('should style checked error checkbox-icon inner box correctly', async t => {
  const getIconBackgroundColor = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    return window
      .getComputedStyle(checkbox.querySelector('.a-checkbox__icon'), ':after')
      .getPropertyValue('background-color');
  });

  const setProperties = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    checkbox.checked = true;
    checkbox.disabled = false;
    checkbox.error = 'please deselect!';
  });

  await setProperties();
  await t
    .wait(50)
    .expect(await getIconBackgroundColor())
    .eql('rgb(201, 20, 50)');
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

fixture('Checkbox - Label as a parent').page(
  `${host}/iframe.html?id=atoms-checkbox-demos--feature-use-your-own-label-as-a-parant`
);

test.only('should be clickable + change state and render parent label', async t => {
  const $axaCheckbox = await Selector(TAG);
  const label = $axaCheckbox.parent();

  await t.click($axaCheckbox);
  await t.expect($axaCheckbox.checked).ok();
  await t.expect($axaCheckbox.count).eql(2);

  // has parent label
  await t.expect(label).ok();
});
