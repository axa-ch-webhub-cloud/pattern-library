import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Dropdown')
  .page(`${host}/iframe.html?id=components-dropdown--story`)
  .afterEach(async t => {
    await t.maximizeWindow();
  });

test('should render correctly', async t => {
  const dropdown = await Selector(() => document.querySelector(`axa-dropdown`));
  await t.expect(dropdown.exists).ok();
});

test('should render arrow icon color correctly', async t => {
  const expectedColor = 'rgb(0, 0, 143)';
  const dropdownArrowIcon = await Selector(() =>
    document.querySelector(`axa-dropdown .m-dropdown__select-icon svg`)
  );
  await t
    .expect(dropdownArrowIcon.getStyleProperty('color'))
    .eql(expectedColor);
});

test('On Desktop the first element should have index 1 if defaulttitle is set', async t => {
  const firstOption = await Selector(
    () => document.querySelectorAll(`axa-dropdown .m-dropdown__button`)[0]
  );

  await t.expect(firstOption.getAttribute('data-index')).eql('1');
}).before(async t => {
  await t.maximizeWindow();
});

test('On mobiles the first element should have index 1 if defaulttitle is set', async t => {
  const firstOption = await Selector(() =>
    document.querySelector(`axa-dropdown .m-dropdown__option[value='Item 1']`)
  );

  await t.expect(firstOption.getAttribute('data-index')).eql('1');
}).before(async t => {
  await t.resizeWindow(767, 767);
});

fixture('Dropdown disabled').page(
  `${host}/iframe.html?id=components-dropdown--story&knob-label=&knob-value=&knob-defaulttitle=Please%20Select&knob-name=&knob-error=Error%20Message&knob-disabled=true&knob-data-test-id=&knob-max-height=`
);

test('should render arrow icon color correctly if disabled', async t => {
  const expectedColor = 'rgb(153, 153, 153)';
  const dropdownArrowIcon = await Selector(() =>
    document.querySelector(`axa-dropdown .m-dropdown__select-icon svg`)
  );
  await t
    .expect(dropdownArrowIcon.getStyleProperty('color'))
    .eql(expectedColor);
});

test('should not set any background color on svg parent span', async t => {
  const expectedColor = 'rgba(0, 0, 0, 0)';
  const dropdownArrowIcon = await Selector(() =>
    document.querySelector(`axa-dropdown .m-dropdown__select-icon`)
  );
  await t
    .expect(dropdownArrowIcon.getStyleProperty('background-color'))
    .eql(expectedColor);
});

fixture('Dropdown check mark').page(
  `${host}/iframe.html?id=components-dropdown--story&knob-checkmark=true`
);
test('should show checkmark', async t => {
  const dropdownCheckmark = await Selector(() =>
    document.querySelector(`axa-dropdown .js-dropdown__check`)
  );
  await t.expect(dropdownCheckmark.exists).ok();
});

fixture('Dropdown error').page(
  `${host}/iframe.html?id=components-dropdown--story&knob-invalid=true&knob-error=error`
);

test('should show error message and have the correct color', async t => {
  const $axaError = await Selector(() =>
    document.querySelector(`axa-dropdown .js-dropdown__error `)
  );
  await t.expect($axaError.innerText).eql('error');
  await t
    .expect(await $axaError.getStyleProperty('color'))
    .eql('rgb(201, 20, 50)');

  const getBorderColor = ClientFunction(() => {
    return window
      .getComputedStyle(
        document.querySelector('axa-dropdown .js-dropdown__toggle')
      )
      .getPropertyValue('border-color');
  });

  await t.expect(await getBorderColor()).eql('rgb(201, 20, 50)');
});

// Dropdown react controlled
fixture('Dropdown React').page(
  `${host}/iframe.html?id=components-dropdown-react-demos--react-component`
);

test('should render dropdown as reactified component', async t => {
  const dropdownReact = await Selector(() =>
    document.querySelector('axa-dropdown[data-test-id="dropdown-react"]')
  );
  await t.expect(dropdownReact.exists).ok();
});

test('should exhibit controlled-component behaviour', async t => {
  const dropdownReact = await Selector(() =>
    document.querySelector('axa-dropdown[data-test-id="dropdown-react"]')
  );

  const freezeCheckbox = await Selector(() =>
    document.querySelector('axa-checkbox.freeze-checkbox')
  );

  await t.expect(freezeCheckbox.exists).ok();

  const thirdOption = await Selector(() =>
    document.querySelector('axa-dropdown button[data-index="3"]')
  );

  const getControlledValue = ClientFunction(() => {
    const valueSpan = document.querySelector(
      'span[data-test-id="dropdown-react-controlled-value"]'
    );
    return valueSpan.innerText;
  });

  await t.click(dropdownReact);
  await t.click(thirdOption);
  await t
    .wait(
      50 /* give click handler time to execute and influence controlled value */
    )
    .expect(await getControlledValue())
    .eql('Item 3');
});

// Dropdown react controlled forced native-selector
fixture('Dropdown React native').page(
  `${host}/iframe.html?id=components-dropdown-react-demos--react-component`
);

test('should exhibit controlled-component behaviour when native', async t => {
  const dropdownReact = await Selector(() =>
    document.querySelector('axa-dropdown[data-test-id="dropdown-react"]')
  );

  const freezeCheckbox = await Selector(() =>
    document.querySelector('axa-checkbox.freeze-checkbox')
  );

  const nativeCheckbox = await Selector(() =>
    document.querySelector('axa-checkbox.native-checkbox')
  );

  await t.expect(freezeCheckbox.exists).ok();
  await t.expect(nativeCheckbox.exists).ok();

  const thirdOption = await Selector(() =>
    document.querySelector('axa-dropdown button[data-index="3"]')
  );

  const firstOption = await Selector(() =>
    document.querySelector('axa-dropdown button[data-index="1"]')
  );

  const getControlledValue = ClientFunction(() => {
    const valueSpan = document.querySelector(
      'span[data-test-id="dropdown-react-controlled-value"]'
    );
    return valueSpan.innerText;
  });

  const getControlledVisuals = ClientFunction(() => {
    const innerSelect = document.querySelector('axa-dropdown select');
    return innerSelect.selectedIndex;
  });

  await t.click(dropdownReact);
  await t.click(thirdOption);
  await t
    .wait(
      50 /* give click handler time to execute and influence controlled value */
    )
    .expect(await getControlledValue())
    .eql('Item 3');

  await t.click(freezeCheckbox);
  await t.click(nativeCheckbox);
  await t
    .wait(
      50 /* give click handler time to execute and influence controlled value */
    )
    .click(firstOption);

  await t
    .wait(
      50 /* give click handler time to execute and influence controlled value */
    )
    .expect(await getControlledValue())
    .eql('Item 3');

  /* verify whether visuals/UX agree with controlled value */
  await t.expect(await getControlledVisuals()).eql(3);
});

// Dropdown react uncontrolled
fixture('Dropdown React uncontrolled').page(
  `${host}/iframe.html?id=components-dropdown-react--story-uncontrolled`
);

test('should allow setting non-initial item via items property', async t => {
  const dropdown = await Selector(() =>
    document.querySelector(
      'axa-dropdown[data-test-id="uncontrolled-dropdown-react"]'
    )
  );
  await t.expect(dropdown.exists).ok();
  const getVisibleItem = ClientFunction(() => {
    const visibleItem = document.querySelector(
      'axa-dropdown[data-test-id="uncontrolled-dropdown-react"] .js-dropdown__toggle > span'
    );
    return visibleItem.innerText;
  });
  await t.expect(await getVisibleItem()).eql('From CHF 1,000 to 10,000');
});

// Dropdown react focussable
fixture('Dropdown React uncontrolled').page(
  `${host}/iframe.html?id=components-dropdown-react-demos--focussable`
);

test('should fire onFocus/onBlur correctly', async t => {
  const dropdown = await Selector(() =>
    document.querySelector(
      'axa-dropdown[data-test-id="focussable-dropdown-react"]'
    )
  );

  await t.expect(dropdown.exists).ok();

  const inputBeforeDropdown = await Selector(() =>
    document.querySelector('input[placeholder="focus before dropdown"]')
  );

  await t.click(inputBeforeDropdown);

  // tab into and then out of axa-dropdown
  await t.pressKey('tab tab');

  const getEventLog = ClientFunction(() => {
    const eventLog = document.querySelector(
      'span[data-test-id="focussable-dropdown-react-event-log"]'
    );
    return eventLog.innerText;
  });

  await t
    .wait(
      50 /* give onFocus/Blur handlers time to execute and influence event-log output */
    )
    .expect(await getEventLog())
    .eql('events:focus,blur,');
});

fixture('Dropdown Form').page(
  `${host}/iframe.html?id=components-dropdown-demos--in-a-form`
);

test('should submit correct value to form', async t => {
  const dropdown = await Selector(() =>
    document.querySelector('axa-dropdown[data-test-id="dropdown-forms"]')
  );
  await t.expect(dropdown.exists).ok();
  await t.click(dropdown);
  const secondOption = await Selector(() =>
    document.querySelector(
      'axa-dropdown[data-test-id="dropdown-forms"] button[data-value="FR"]'
    )
  );
  await t.click(secondOption);
  const submitButton = await Selector(() =>
    document.querySelector('#dropdown-form axa-button[type="submit"]')
  );
  await t.click(submitButton);
  const getFormData = ClientFunction(() => {
    const valueSpan = document.querySelector(
      '#dropdown-form span[id="form-data-lang"]'
    );
    return valueSpan.innerText;
  });
  await t
    .wait(50 /* give click handler time to execute and influence form data */)
    .expect(await getFormData())
    .eql('FR');

  // test that native onchange callback fired upon selecting the 2nd option
  // and returned the expected event.detail values
  const getFormTitle = ClientFunction(
    () => document.querySelector('#dropdown-form').title
  );

  await t.expect(await getFormTitle()).eql('FR,2 ');
});

test('should react to value property changes', async t => {
  const getDropdownTitle = ClientFunction(
    () =>
      document.querySelector('axa-dropdown[data-test-id="dropdown-forms"]')
        .title
  );

  const setValue = ClientFunction(value => {
    document.querySelector(
      'axa-dropdown[data-test-id="dropdown-forms"]'
    ).value = value;
    return document.querySelector('axa-dropdown[data-test-id="dropdown-forms"]')
      .value;
  });

  await t.expect(await setValue('DE')).eql('DE');
  await t.expect(await getDropdownTitle()).eql('Deutsch');

  await t.expect(await setValue('IT')).eql('IT');
  await t.expect(await getDropdownTitle()).eql('Italiano');

  await t.expect(await setValue('FR')).eql('FR');
  await t.expect(await getDropdownTitle()).eql('Français');
});

test('should react to items property changes', async t => {
  const getDropdownTitle = ClientFunction(
    () =>
      document.querySelector('axa-dropdown[data-test-id="dropdown-forms"]')
        .title
  );

  const setItems = ClientFunction(_items => {
    document.querySelector(
      'axa-dropdown[data-test-id="dropdown-forms"]'
    ).items = _items;
    return true;
  });

  const getValue = ClientFunction(
    () =>
      document.querySelector('axa-dropdown[data-test-id="dropdown-forms"]')
        .value
  );

  await t
    .expect(
      await setItems([
        { name: 'Deutsch', value: 'DE', selected: true },
        { name: 'Français', value: 'FR' },
        { name: 'Italiano', value: 'IT' },
      ])
    )
    .ok();
  await t.expect(await getValue()).eql('DE');
  await t.expect(await getDropdownTitle()).eql('Deutsch');

  await t
    .expect(
      await setItems([
        { name: 'Deutsch', value: 'DE' },
        { name: 'Français', value: 'FR' },
        { name: 'Italiano', value: 'IT', selected: true },
      ])
    )
    .ok();
  await t.expect(await getValue()).eql('IT');
  await t.expect(await getDropdownTitle()).eql('Italiano');

  await t
    .expect(
      await setItems([
        { name: 'Deutsch', value: 'DE' },
        { name: 'Français', value: 'FR', selected: true },
        { name: 'Italiano', value: 'IT' },
      ])
    )
    .ok();

  await t.expect(await getValue()).eql('FR');
  await t.expect(await getDropdownTitle()).eql('Français');
});
