import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Dropdown').page(`${host}/iframe.html?id=molecules-dropdown--dropdown`);

test('should render correctly', async t => {
  const dropdown = await Selector(() =>
    document.querySelector(`axa-dropdown[data-test-id="dropdown"]`)
  );
  await t.expect(dropdown.exists).ok();
});

fixture('Dropdown valid').page(
  `${host}/iframe.html?id=molecules-dropdown--dropdown-w-valid-checkmark`
);
test('should show checkmark', async t => {
  const dropdownCheckmark = await Selector(() =>
    document.querySelector(
      `axa-dropdown[data-test-id="dropdown-valid"] .m-dropdown__valid-icon .m-dropdown__valid-icon-inner-active`
    )
  );
  await t.expect(dropdownCheckmark.exists).ok();
});

fixture('Dropdown error').page(
  `${host}/iframe.html?id=molecules-dropdown--dropdown-w-error-message`
);

test('should show error message and correct colors', async t => {
  const dropdown = await Selector(() =>
    document.querySelector(`axa-dropdown[data-test-id="dropdown-error"]`)
  );

  await t.expect(dropdown.exists).ok();

  const getErrorMessage = ClientFunction(() => {
    const errorDiv = document.querySelector(
      'axa-dropdown[data-test-id="dropdown-error"] > .m-dropdown__error'
    );
    return errorDiv.innerText;
  });

  await t.expect(await getErrorMessage()).eql('please select an item');

  const getBorderColor = ClientFunction(() => {
    return window
      .getComputedStyle(
        document.querySelector(
          'axa-dropdown[data-test-id="dropdown-error"] .m-dropdown__list--enhanced'
        )
      )
      .getPropertyValue('border-color');
  });

  await t.expect(await getBorderColor()).eql('rgb(201, 20, 50)');
});

// Dropdown react controlled
fixture('Dropdown React').page(
  `${host}/iframe.html?id=molecules-dropdown-react--dropdown-as-react-component`
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
    document.querySelector('axa-checkbox')
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

// Dropdown react uncontrolled
fixture('Dropdown React uncontrolled').page(
  `${host}/iframe.html?id=molecules-dropdown-react--dropdown-as-uncontrolled-react-component`
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
      'axa-dropdown[data-test-id="uncontrolled-dropdown-react"] .m-dropdown__toggle > span'
    );
    return visibleItem.innerText;
  });
  await t.expect(await getVisibleItem()).eql('Item B');
});

fixture('Dropdown Form').page(
  `${host}/iframe.html?id=molecules-dropdown--dropdown-inside-form`
);

test('should submit correct value to form', async t => {
  const dropdown = await Selector(() =>
    document.querySelector('axa-dropdown[data-test-id="dropdown-forms"]')
  );
  await t.expect(dropdown.exists).ok();
  await t.click(dropdown);
  const secondOption = await Selector(() =>
    document.querySelector(
      'axa-dropdown[data-test-id="dropdown-forms"] button[data-index="2"]'
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
});
