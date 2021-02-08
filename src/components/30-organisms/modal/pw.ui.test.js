// const host = process.env.TEST_HOST_STORYBOOK_URL;

// describe('Button', () => {
//   it('open modal', async () => {
//     await openModal();

//     expect(await page.isVisible('o-modal-window')).toBe(true);
//     // expect(await page.waitForElementState("visible", {timeout: 5000}))
//     // await page.waitForSelector('o-modal-window').
//     // expect(await page.getAttribute('o-modal-window').toBe("open"))
//   });

//   it('close by close button', async () => {
//     await openModal();
//     await page.click('o-modal-window__close-button');

//     expect(await page.isVisible('o-modal-window')).toBe(false);
//   });

//   // it('close by pressing outside the modal', async () => {
//   //   await openModal();
//   // });

//   // it('check if text in modal is rendered', async () => {
//   //   await openModal();
//   // });
// });

// async function openModal() {
//   await page.goto(`${host}/iframe.html?id=components--modal&viewMode=story`);
//   await page.click('js-modal-story__button');
// }

// // it('should render button', async () => {
// //   await page.goto(
// //     `${host}/iframe.html?id=components--modal&viewMode=story`
// //   );
// //   await page.waitForSelector('.a-button__flex-wrapper');
// //   const axaButtonText = await page.textContent('axa-button');

// //   expect(axaButtonText).toBe('You clicked me: 0, btw my event name is click');
// // });

// // it('should submit before and after text child updates', async () => {
// //     const axaButtonSelector = '[data-test-id="button-submit-text-change"]';
// //     await page.goto(`${host}/iframe.html?id=examples-button-react--in-a-form`);
// //     await page.waitForSelector(axaButtonSelector);

// //     const axaButton = await page.$(axaButtonSelector);
// //     const getAxaButtonText = () => page.textContent(axaButtonSelector);

// //     expect(await getAxaButtonText()).toContain('0');

// //     await axaButton.click();
// //     expect(await getAxaButtonText()).toContain('1');

// //     await axaButton.click();
// //     expect(await getAxaButtonText()).toContain('2');
// // });
