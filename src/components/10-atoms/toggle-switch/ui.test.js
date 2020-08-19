import { ClientFunction, Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;
const TAG = 'axa-toggle-switch';
const CLASS = '.a-toggle-switch';

fixture('Toggle Switch - basic functionality').page(
  `${host}/iframe.html?id=components--toggle-switch`
);
test('should render toggle-switch', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();

  const $axaElemShadow = await Selector(
    () => document.querySelector(TAG).shadowRoot,
    { dependencies: { TAG } }
  );

  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should set correct background-color to inactive toggle-switch-slider', async t => {
  const setProperties = ClientFunction(() => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');

    toggleSwitch.active = false;
    toggleSwitch.disabled = false;
  });

  const getBackgroundColor = ClientFunction(() => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');
    const toggleSwitchShadow = toggleSwitch.shadowRoot;

    const toggleSwitchSlider = toggleSwitchShadow.querySelector(
      '.a-toggle-switch__slider'
    );

    return window
      .getComputedStyle(toggleSwitchSlider)
      .getPropertyValue('background-color');
  }).with({ boundTestRun: t });

  await setProperties();

  // Timeout is needed to wait until the animation has finished.
  setTimeout(async () => {
    await t.expect(await getBackgroundColor()).eql('rgb(153, 153, 153)');
  }, 410);
});

test('should set correct background-color to active toggle-switch-slider', async t => {
  const setProperties = ClientFunction(() => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');

    toggleSwitch.active = true;
    toggleSwitch.disabled = false;
  });

  const getBackgroundColor = ClientFunction(() => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');
    const toggleSwitchShadow = toggleSwitch.shadowRoot;

    const toggleSwitchSlider = toggleSwitchShadow.querySelector(
      '.a-toggle-switch__slider'
    );

    return window
      .getComputedStyle(toggleSwitchSlider)
      .getPropertyValue('background-color');
  }).with({ boundTestRun: t });

  await setProperties();

  // Timeout is needed to wait until the animation has finished.
  setTimeout(async () => {
    await t.expect(await getBackgroundColor()).eql('rgb(28, 197, 78)');
  }, 410);
});

test('should set correct background-color to inactive disabled toggle-switch-slider', async t => {
  const setProperties = ClientFunction(() => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');

    toggleSwitch.active = true;
    toggleSwitch.disabled = false;
  });

  const getBackgroundColor = ClientFunction(() => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');
    const toggleSwitchShadow = toggleSwitch.shadowRoot;

    const toggleSwitchSlider = toggleSwitchShadow.querySelector(
      '.a-toggle-switch__slider'
    );

    return window
      .getComputedStyle(toggleSwitchSlider)
      .getPropertyValue('background-color');
  }).with({ boundTestRun: t });

  await setProperties();

  // Timeout is needed to wait until the animation has finished.
  setTimeout(async () => {
    await t.expect(await getBackgroundColor()).eql('rgb(245, 245, 245)');
  }, 410);
});

test('should set correct background-color to active disabled toggle-switch-slider', async t => {
  const setProperties = ClientFunction(() => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');

    toggleSwitch.active = true;
    toggleSwitch.disabled = false;
  });

  const getBackgroundColor = ClientFunction(() => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');
    const toggleSwitchShadow = toggleSwitch.shadowRoot;

    const toggleSwitchSlider = toggleSwitchShadow.querySelector(
      '.a-toggle-switch__slider'
    );

    return window
      .getComputedStyle(toggleSwitchSlider)
      .getPropertyValue('background-color');
  }).with({ boundTestRun: t });

  await setProperties();

  // Timeout is needed to wait until the animation has finished.
  setTimeout(async () => {
    await t.expect(await getBackgroundColor()).eql('rgb(159, 217, 180)');
  }, 410);
});

test('should add attributes checked and disabled to input if needed', async t => {
  const setProperties = ClientFunction(() => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');

    toggleSwitch.active = true;
    toggleSwitch.disabled = true;
  });

  const getInputAttribute = ClientFunction(attributeName => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');
    const toggleSwitchShadow = toggleSwitch.shadowRoot;

    const toggleSwitchInput = toggleSwitchShadow.querySelector(
      '.a-toggle-switch__input'
    );

    return toggleSwitchInput.hasAttribute(attributeName);
  });

  await setProperties();

  await t.expect(await getInputAttribute('checked')).ok();
  await t.expect(await getInputAttribute('disabled')).ok();
});

test('should not add attributes checked and disabled to input if not needed', async t => {
  const setProperties = ClientFunction(() => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');

    toggleSwitch.active = false;
    toggleSwitch.disabled = false;
  });

  const getInputAttribute = ClientFunction(attributeName => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');
    const toggleSwitchShadow = toggleSwitch.shadowRoot;

    const toggleSwitchInput = toggleSwitchShadow.querySelector(
      '.a-toggle-switch__input'
    );

    return toggleSwitchInput.hasAttribute(attributeName);
  });

  await setProperties();

  await t.expect(await getInputAttribute('checked')).notOk();
  await t.expect(await getInputAttribute('disabled')).notOk();
});

test('should change state when clicked and not disabled', async t => {
  const setProperties = ClientFunction(() => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');

    toggleSwitch.active = false;
    toggleSwitch.disabled = false;
  });

  const performClick = async () => {
    const toggleSwitch = Selector(() =>
      document
        .querySelector('axa-toggle-switch')
        .shadowRoot.querySelector('.a-toggle-switch')
    );

    await t.click(toggleSwitch);
  };

  const isChecked = ClientFunction(() => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');
    const toggleSwitchShadow = toggleSwitch.shadowRoot;

    const toggleSwitchInput = toggleSwitchShadow.querySelector(
      '.a-toggle-switch__input'
    );

    return toggleSwitchInput.hasAttribute('checked');
  });

  await setProperties();
  await performClick();

  await t.expect(await isChecked()).ok();
});

test('should not change state when clicked and disabled', async t => {
  const setProperties = ClientFunction(() => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');

    toggleSwitch.active = false;
    toggleSwitch.disabled = true;
  });

  const performClick = async () => {
    const toggleSwitch = Selector(() =>
      document
        .querySelector('axa-toggle-switch')
        .shadowRoot.querySelector('.a-toggle-switch')
    );

    await t.click(toggleSwitch);
  };

  const isChecked = ClientFunction(() => {
    const toggleSwitch = document.querySelector('axa-toggle-switch');
    const toggleSwitchShadow = toggleSwitch.shadowRoot;

    const toggleSwitchInput = toggleSwitchShadow.querySelector(
      '.a-toggle-switch__input'
    );

    return toggleSwitchInput.hasAttribute('checked');
  });

  await setProperties();
  await performClick();

  await t.expect(await isChecked()).notOk();
});
