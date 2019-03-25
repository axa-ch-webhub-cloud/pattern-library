import { Selector } from 'testcafe';
import { datePickerAccessor } from './datepicker-accessor';

fixture('Datepicker').page('http://localhost:9999/iframe.html?id=molecules-datepicker--datepicker');

test('Choose august the first from the month july', async t => {
  const datepicker = Selector('axa-datepicker');
  const dropDown = await Selector(() => document.querySelector('axa-datepicker').shadowRoot.querySelector('axa-dropdown'));
  await t.click(dropDown);

  const monthFebruary = await Selector(() =>
    document
      .querySelector('axa-datepicker')
      .shadowRoot.querySelector('axa-dropdown[class*="js-datepicker__dropdown-month"]')
      .shadowRoot.querySelector('button[data-value="1"]')
  );

  await t.click(monthFebruary);

  const selectTheSixteenth = await Selector(() =>
    document.querySelector('axa-datepicker').shadowRoot.querySelector('button[data-index="18"]')
  );
  await t.click(selectTheSixteenth);
  await t.debug();
});
