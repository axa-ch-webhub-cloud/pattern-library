import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;
const TAG = 'axa-checkbox';

fixture('Checkbox - basic functionality').page(`${host}/iframe.html?id=components-checkbox--checkbox`);

test('should render checkbox', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
});

test('should style checked checkbox-icon inner box correctly', async t => {
  const getIconBackgroundColor = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    checkbox.checked = true;
    checkbox.disabled = false;
    return window.getComputedStyle(checkbox.querySelector('.a-checkbox__icon'), ':after').getPropertyValue('background-color');
  });
  const measuredColor = await getIconBackgroundColor();
  await t.expect(measuredColor).eql('rgb(0, 0, 143)');
});

test('should style unchecked checkbox-icon inner box correctly', async t => {
  const getIconBackgroundColor = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    return window.getComputedStyle(checkbox.querySelector('.a-checkbox__icon'), ':after').getPropertyValue('background-color');
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
    return window.getComputedStyle(checkbox.querySelector('.a-checkbox__icon'), ':after').getPropertyValue('background-color');
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
    return window.getComputedStyle(checkbox.querySelector('.a-checkbox__icon'), ':after').getPropertyValue('background-color');
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
    .eql('rgb(0, 0, 143)'); // has to be blue when selected, due to styleguide specification
});

test('should set refId on label and input', async t => {
  const label = await Selector('.a-checkbox__wrapper');
  const input = await Selector('.a-checkbox__input');

  await t.expect(label.hasAttribute('for')).ok();
  await t.expect(input.hasAttribute('id')).ok();

  await t.expect((await input.getAttribute('id')) === (await label.getAttribute('for'))).ok();
});

fixture('Checkbox - with error label').page(`${host}/iframe.html?id=components-checkbox--checkbox&knob-refId=checkbox-h555d87h399&knob-label=I%20agree%20to%20conditions%20of%20data%20protection.&knob-name=my-checkbox&knob-checked=true&knob-error=true&viewMode=story`);

test('should show error text with a margin left', async t => {
  const errorlabel = await Selector('.a-checkbox__error');
  await t.expect(errorlabel.getStyleProperty('margin-left')).eql('31px');
});

fixture('Checkbox - Disabled and checked').page(`${host}/iframe.html?id=components-checkbox--checkbox&knob-refId=checkbox-xu5ogmxpvh&knob-label=this%20is%20a%20label&knob-name=my-checkbox&knob-variant=undefined&knob-checked=false&knob-disabled=true`);

test('should set checkbox element to disabled + not change state', async t => {
  const $axaCheckbox = await Selector(TAG);

  await t.expect(await $axaCheckbox.hasAttribute('disabled')).ok();
  await t.click($axaCheckbox);
  await t.expect($axaCheckbox.checked).notOk();
});

fixture('Checkbox - Label as a child of the component').page(`${host}/iframe.html?id=examples-checkbox-pure-html--use-your-own-label-as-a-child-of-the-component`);

test('should be clickable + change state and render child label', async t => {
  const $axaCheckbox = await Selector(TAG);
  const $axaCheckboxNonLinkLabelText = await Selector(`${TAG} .non-link-label-text`);
  const label = $axaCheckbox.child();
  await t.click($axaCheckboxNonLinkLabelText);
  await t.expect($axaCheckbox.checked).ok();
  await t.expect($axaCheckbox.count).eql(1);

  // has child label
  await t.expect(label.exists).ok();
});

fixture('Checkbox - Variant checkmark').page(`${host}/iframe.html?id=components-checkbox--checkbox&knob-refId=checkbox-fmurdvbx9pv&knob-label=this%20is%20a%20label&knob-name=my-checkbox&knob-variant=checkmark&knob-checked=true`);

test('should show checkbox variant checkmark', async t => {
  const getIconBackgroundColor = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    const checkmarkWrapper = document.querySelector('.a-checkbox__icon--checkmark');
    checkbox.checked = true;
    checkbox.disabled = false;
    return window.getComputedStyle(checkmarkWrapper).getPropertyValue('background-color');
  });
  const measuredColor = await getIconBackgroundColor();
  await t.expect(measuredColor).eql('rgb(0, 0, 143)');
});

fixture('Checkbox - Variant checkmark-inverted').page(`${host}/iframe.html?id=components-checkbox--checkbox&knob-refId=checkbox-00zf06b7egl3n&knob-label=I%20agree%20to%20conditions%20of%20data%20protection.&knob-name=my-checkbox&knob-variant=checkmark-inverted&knob-checked=true`);

test('box should have correct background-color', async t => {
  const getIconBackgroundColor = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    const checkmarkWrapper = document.querySelector('.a-checkbox__icon--checkmark');
    checkbox.checked = true;
    checkbox.disabled = false;
    return window.getComputedStyle(checkmarkWrapper).getPropertyValue('background-color');
  });
  const measuredColor = await getIconBackgroundColor();
  await t.expect(measuredColor).eql('rgb(255, 255, 255)');
});

test('checkmark should have correct color', async t => {
  const getIconBackgroundColor = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    const checkmarkWrapper = document.querySelector('.a-checkbox__icon-checkmark');
    checkbox.checked = true;
    checkbox.disabled = false;
    return window.getComputedStyle(checkmarkWrapper).getPropertyValue('color');
  });
  const measuredColor = await getIconBackgroundColor();
  await t.expect(measuredColor).eql('rgb(0, 0, 143)');
});

test('label text should have correct color', async t => {
  const getIconBackgroundColor = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    const checkmarkWrapper = document.querySelector('.a-checkbox__content');
    checkbox.checked = true;
    checkbox.disabled = false;
    return window.getComputedStyle(checkmarkWrapper).getPropertyValue('color');
  });
  const measuredColor = await getIconBackgroundColor();
  await t.expect(measuredColor).eql('rgb(255, 255, 255)');
});

fixture('Checkbox - Variant checkmark-inverted: disabled').page(`${host}/iframe.html?id=components-checkbox--checkbox&knob-refId=checkbox-tz6etn0cv7e&knob-label=I%20agree%20to%20conditions%20of%20data%20protection.&knob-name=my-checkbox&knob-variant=checkmark-inverted&knob-checked=true&knob-disabled=true`);

test('if disabled: box should have correct background-color', async t => {
  const getIconBackgroundColor = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    const checkmarkWrapper = document.querySelector('.a-checkbox__icon--checkmark');
    checkbox.checked = true;
    checkbox.disabled = false;
    return window.getComputedStyle(checkmarkWrapper).getPropertyValue('background-color');
  });
  const measuredColor = await getIconBackgroundColor();
  await t.expect(measuredColor).eql('rgba(0, 0, 0, 0)'); // transparent color
});

test('if disabled: checkmark should have correct color', async t => {
  const getIconBackgroundColor = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    const checkmarkWrapper = document.querySelector('.a-checkbox__icon-checkmark');
    checkbox.checked = true;
    checkbox.disabled = false;
    return window.getComputedStyle(checkmarkWrapper).getPropertyValue('color');
  });
  const measuredColor = await getIconBackgroundColor();
  await t.expect(measuredColor).eql('rgb(77, 155, 166)');
});

test('if disabled: label text should have correct color', async t => {
  const getIconBackgroundColor = ClientFunction(() => {
    const checkbox = document.querySelector('axa-checkbox');
    const checkmarkWrapper = document.querySelector('.a-checkbox__content');
    checkbox.checked = true;
    checkbox.disabled = false;
    return window.getComputedStyle(checkmarkWrapper).getPropertyValue('color');
  });
  const measuredColor = await getIconBackgroundColor();
  await t.expect(measuredColor).eql('rgb(77, 155, 166)');
});

fixture('Checkbox - DOM update works also on children').page(`${host}/iframe.html?id=examples-checkbox-react--updates-also-as-child`);

test('should update checkbox when its children change', async t => {
  const checkboxPropLabel = await Selector(() => document.querySelector('.first')).find('.a-checkbox__content');

  const checkboxChildLabel = await Selector(() => document.querySelector('.second'))
    .find('p.a-checkbox__children-inline > *')
    .addCustomDOMProperties({
      innerHTML: el => el.innerHTML,
    });

  const buttonToRerenderCheckboxChildren = await Selector('.js-checkbox__demo-button-rerender-children');

  await t.expect(checkboxChildLabel.innerHTML).contains('Rerenders: 0');
  await t.expect(checkboxPropLabel.textContent).contains('Rerenders: 0');
  await t.click(buttonToRerenderCheckboxChildren);
  await t.expect(checkboxChildLabel.innerHTML).contains('Rerenders: 1');
  await t.expect(checkboxPropLabel.textContent).contains('Rerenders: 1');
});

fixture('Checkbox - controlled behaviour under React').page(`${host}/iframe.html?id=examples-checkbox-react--default-with-label`);

test('should shows correct controlled behavior', async t => {
  const frozenControl = await Selector('input[data-test-id="frozen"]');
  const checkbox = await Selector('axa-checkbox');
  const checkboxClickable = await Selector('axa-checkbox > label');
  // clicking on checkbox changes checked state:
  await t.expect(checkbox.exists).ok();
  // from false before...
  await t.expect(checkbox.checked).notOk();
  // ... to true after click
  await t.click(checkboxClickable);
  await t.expect(checkbox.checked).ok();
  // ... and back
  await t.click(checkboxClickable);
  await t.wait(50);
  await t.expect(checkbox.checked).notOk();
  // after freezing the last controlled state...
  await t.click(frozenControl);
  await t.wait(50);
  // ... a click on the checkbox no longer changes state
  await t.click(checkboxClickable);
  await t.wait(50);
  await t.expect(checkbox.checked).notOk();
});

fixture('Checkbox - without a label, with error state').page(`${host}/iframe.html?id=examples-checkbox-pure-html--without-a-label&viewMode=story`);

test('should be clickable', async t => {
  const checkbox = await Selector('axa-checkbox');
  const checkboxClickable = await Selector('axa-checkbox > label');

  await t.expect(checkbox.exists).ok();
  await t.click(checkboxClickable);
  await t.expect(checkbox.checked).ok();
});

test('should show error text without a margin left', async t => {
  const errorlabel = await Selector('.a-checkbox__error');
  await t.expect(errorlabel.getStyleProperty('margin-left')).eql('0px');
});
