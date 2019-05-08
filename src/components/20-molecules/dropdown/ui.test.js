import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Dropdown').page(`${host}/iframe.html?id=molecules-dropdown--dropdown`);

test('should render correctly', async t => {
  const dropdown = await Selector(() =>
    document.querySelector(`axa-dropdown[data-test-id="dropdown"]`)
  );
  await t.expect(dropdown.exists).ok();
});

// Dropdown react
fixture('Datepicker React').page(
  `${host}/iframe.html?id=molecules-dropdown-react--dropdown-as-react-component`
);
test('should render dropdown as reactified component', async t => {
  const dropdownReact = await Selector(() =>
    document.querySelector('axa-dropdown[data-test-id="dropdown-react"]')
  );
  await t.expect(dropdownReact.exists).ok();
});
