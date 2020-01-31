import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Checkbox - basic functionality').page(
  `${host}/iframe.html?id=components-atoms-checkbox--checkbox`
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
    .eql('rgb(0, 0, 143)'); // has to be blue when seleted, due to styleguide specification
});

test('should be clickable + change state', async t => {
  const $axaCheckbox = await Selector(TAG);
  await t.click($axaCheckbox);
  await t.expect($axaCheckbox.checked).ok();
});

test('should set refId on label and input', async t => {
  const label = await Selector('.a-checkbox__wrapper');
  const input = await Selector('.a-checkbox__input');

  await t.expect(label.hasAttribute('for')).ok();
  await t.expect(input.hasAttribute('id')).ok();

  await t
    .expect(
      (await input.getAttribute('id')) === (await label.getAttribute('for'))
    )
    .ok();
});

fixture('Checkbox - Disabled and checked').page(
  `${host}/iframe.html?id=components-atoms-checkbox--checkbox&knob-refId=checkbox-xu5ogmxpvh&knob-label=this%20is%20a%20label&knob-name=my-checkbox&knob-variant=undefined&knob-checked=false&knob-disabled=true`
);

test('should set checkbox element to disabled + not change state', async t => {
  const $axaCheckbox = await Selector(TAG);

  await t.expect(await $axaCheckbox.hasAttribute('disabled')).ok();
  await t.click($axaCheckbox);
  await t.expect($axaCheckbox.checked).notOk();
});

fixture('Checkbox - Label as a child of the component').page(
  `${host}/iframe.html?id=components-atoms-checkbox-demos--feature-use-your-own-label-as-a-child-of-the-component`
);

test('should be clickable + change state and render parent label', async t => {
  const $axaCheckbox = await Selector(TAG);
  const label = $axaCheckbox.child();

  await t.click($axaCheckbox);
  await t.expect($axaCheckbox.checked).ok();
  await t.expect($axaCheckbox.count).eql(1);

  // has parent label
  await t.expect(label).ok();
});

fixture('Checkbox - Variant checkmark').page(
  `${host}/iframe.html?id=components-atoms-checkbox--checkbox&knob-refId=checkbox-fmurdvbx9pv&knob-label=this%20is%20a%20label&knob-name=my-checkbox&knob-variant=checkmark&knob-checked=true`
);

test('should show checkbox variant checkmark', async t => {
  const getIconBackgroundColor = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    const checkmarkWrapper = document.querySelector(
      '.a-checkbox__icon--checkmark'
    );
    checkbox.checked = true;
    checkbox.disabled = false;
    return window
      .getComputedStyle(checkmarkWrapper)
      .getPropertyValue('background-color');
  });
  const measuredColor = await getIconBackgroundColor();
  await t.expect(measuredColor).eql('rgb(0, 0, 143)');
});

fixture('Checkbox - DOM update works also on children').page(
  `${host}/iframe.html?id=components-atoms-checkbox-react-demo--checkbox-updates-also-as-child`
);

test('should update checkbox when its children change', async t => {
  const checkboxPropLabel = await Selector(() =>
    document.querySelector('.first')
  ).find('.a-checkbox__content');

  const checkboxChildLabel = await Selector(() =>
    document.querySelector('.second')
  )
    .find('.a-text--size-3')
    .addCustomDOMProperties({
      innerHTML: el => el.innerHTML,
    });

  const buttonToRerenderCheckboxChildren = await Selector(
    '.js-checkbox__demo-button-rerender-children'
  );

  await t.expect(checkboxChildLabel.innerHTML).contains('Rerenders: 0');
  await t.expect(checkboxPropLabel.textContent).contains('Rerenders: 0');
  await t.click(buttonToRerenderCheckboxChildren);
  await t.expect(checkboxChildLabel.innerHTML).contains('Rerenders: 1');
  await t.expect(checkboxPropLabel.textContent).contains('Rerenders: 1');
});
