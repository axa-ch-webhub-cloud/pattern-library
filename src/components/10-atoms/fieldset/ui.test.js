import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Fieldset - basic functionality').page(`${host}/iframe.html?id=components-fieldset--fieldset`);

test('should render fieldset', async t => {
  const fieldset = await Selector('axa-fieldset');
  await t.expect(fieldset.exists).ok();
});

test('should render an error message', async t => {
  const errorMessage = 'Invalid selection';

  const setError = ClientFunction(() => {
    document.querySelector('axa-fieldset').error = 'Invalid selection';
    return document.querySelector('axa-fieldset').error;
  });

  await t.expect(await setError()).eql(errorMessage);

  const getError = ClientFunction(() => {
    const fieldset = document.querySelector('axa-fieldset');
    const styles = window.getComputedStyle(fieldset, ':after');
    return [styles.getPropertyValue('color'), styles.getPropertyValue('content')];
  });

  const expected = JSON.stringify(['rgb(201, 20, 50)', `"${errorMessage}"`]);
  await t.expect(JSON.stringify(await getError())).eql(expected);
});

fixture('Fieldset - horizontal').page(`${host}/iframe.html?id=components-fieldset--fieldset&knob-error=&knob-horizontal=true`);

test('should render horizontally', async t => {
  const getError = ClientFunction(() => {
    const fieldset = document.querySelector('axa-fieldset');
    const styles = window.getComputedStyle(fieldset);
    return [styles.getPropertyValue('display'), styles.getPropertyValue('flex-wrap'), styles.getPropertyValue('flex-direction')];
  });

  const expected = JSON.stringify(['flex', 'wrap', 'row']);
  await t.expect(JSON.stringify(await getError())).eql(expected);
});

fixture('Fieldset - enableResponsiveStretch').page(`${host}/iframe.html?id=components-fieldset--fieldset&knob-error=&knob-horizontal=stretch`);

test('should responsive stretch', async t => {
  const getError = ClientFunction(() => {
    const fieldset = document.querySelector('axa-fieldset > * > *');
    const styles = window.getComputedStyle(fieldset);
    return [styles.getPropertyValue('width'), styles.getPropertyValue('margin-right')];
  });

  const expected = JSON.stringify(['513px', '0px']); // 545px width of the radio correspond to 100% in a 575px window
  await t.expect(JSON.stringify(await getError())).eql(expected);
}).before(async t => {
  await t.resizeWindow(575, 575);
});
