import { test } from "@playwright/test"

test("Window handling", async ({ page, context }) => {

    await page.goto("https://www.leafground.com/window.xhtml")

    const parentWindow = context.waitForEvent('page')

    await page.locator('//span[text()="Open"]').click()

    const childWindow = await parentWindow
    await childWindow.locator('//input[@id="email"]').fill('testleaf@example.com')
    await childWindow.close()
    await page.locator('//span[text()="Open Multiple"]').click()
    const AllWindows = context.pages()    
    const openedWindows = AllWindows.length
    console.log("The no of opened windows:  ", openedWindows );
   })