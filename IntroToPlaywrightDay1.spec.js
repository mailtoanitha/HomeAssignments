import { chromium, test, webkit, expect} from "@playwright/test"

test('Ms Edge', async () => {

    if (test.info().project.name === 'webkit') {
        return;
    }

    const browser = await chromium.launch({ channel: "msedge", headless: false })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.redbus.in/")
    const title = await page.title()
    const url = await page.url()

    await expect(page).toHaveTitle(/Bus Booking Online/i);
    await expect(page).toHaveURL("https://www.redbus.in/");
    console.log(`Edge - Redbus title: ${title}`);
    console.log(`Edge - Redbus URL: ${url}`);

    const browser1 = await webkit.launch({ headless: false })
    const context1 = await browser1.newContext()
    const page1 = await context1.newPage()
    await page1.goto("https://www.flipkart.com/")
    const title1 = await page1.title()
    const url1 = await page1.url()

   await expect(page1).toHaveTitle(/Online Shopping Site/i);
   await expect(page1).toHaveURL("https://www.flipkart.com/");
    console.log(`Webkit - Flipkart title: ${title1}`);
    console.log(`Webkit - Flipkart URL: ${url1}`);

})

