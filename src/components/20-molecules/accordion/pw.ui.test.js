const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-accordion';

const delayTimeAnimation = 500;

function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

describe('Accordion', () => {
  it('should check if accordion is open', async () => {
    await openAccordion();

    const accordionContentMaxHeight = await page.$eval(
      '.m-accordion__content',
      el => window.getComputedStyle(el).maxHeight
    );

    expect(
      await page.$eval('.m-accordion__content', el =>
        el.classList.contains('m-accordion__content--open')
      )
    ).toBeTruthy();

    expect(accordionContentMaxHeight !== 0).toBeTruthy();
  });

  it('should check if svg is rendered', async () => {
    await openAccordion();

    expect(await page.$$('svg')).toBeTruthy();
  });

  it('checks if accordion is small', async () => {
    await openAccordion();

    expect(
      await page.$eval('.m-accordion__title', el =>
        el.classList.contains('m-accordion__title--small')
      )
    ).toBeTruthy();
  });

  it('checks if accordion is disabled', async () => {
    await openAccordionDisabled();

    const accordionContainerColor = await page.$eval(
      '.m-accordion__title-container',
      el => window.getComputedStyle(el).color
    );

    expect(accordionContainerColor).toBe('rgb(204, 204, 204)');
  });

  it('When changing the window size, calculate and set the max-height of accordion again.', async () => {
    await openAccordion();

    const accordionContentMaxHeight = await page.$eval(
      '.m-accordion__content',
      el => window.getComputedStyle(el).maxHeight
    );
    await page.setViewportSize({ width: 500, height: 500 });

    // Wait until the max-height value is set.
    await delay(delayTimeAnimation);
    const expectedAccordionContentMaxHeight = await page.$eval(
      '.m-accordion__content',
      el => window.getComputedStyle(el).maxHeight
    );

    expect(
      expectedAccordionContentMaxHeight > accordionContentMaxHeight
    ).toBeTruthy();
  });

  it('should change text on state change', async () => {
    await page.goto(
      `${host}/iframe.html?id=examples-accordion-react--demo-accordion-on-state-change&viewMode=story`
    );

    await page.click('text=Test Accordion on state change');

    await delay(delayTimeAnimation);

    expect(await page.textContent('text=true')).toBe('true');
  });
});

async function openAccordion() {
  await page.goto(
    `${host}/iframe.html?args=open:true;small:true&id=components-accordion--accordion&viewMode=story`
  );
  await page.waitForSelector(tag);
}

async function openAccordionDisabled() {
  await page.goto(
    `${host}/iframe.html?args=disabled:true;open:true&id=components-accordion--accordion&viewMode=story`
  );
  await page.waitForSelector(tag);
}
