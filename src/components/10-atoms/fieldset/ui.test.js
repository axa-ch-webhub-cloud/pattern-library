import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Fieldset - basic functionality').page(
  `${host}/iframe.html?id=components-atoms-fieldset--fieldset`
);

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
    return [
      styles.getPropertyValue('color'),
      styles.getPropertyValue('content'),
    ];
  });

  const expected = JSON.stringify(['rgb(201, 20, 50)', `"${errorMessage}"`]);
  await t.expect(JSON.stringify(await getError())).eql(expected);
});
