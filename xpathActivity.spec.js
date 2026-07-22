import {test,expect} from "@playwright/test"

test('Xpath check', async ({page}) => {

    await page.goto("https://login.salesforce.com/")
  
    await page.locator('//div[@id="username_container"]/child::input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('//input[@type="submit"]/preceding::input[@id="password"]').fill('TestLeaf@2025')
    await page.locator('//div[@id="theloginform"]//child::div/input/following::input[@type="submit"]').click()
    await page.locator('//div[@class="slds-icon-waffle"]').click()
    await page.locator('//button[text()="View All"]').click()
    await page.locator('//div[@type="search"]/child::input[@type="search" and @role="combobox"]').fill('Accounts')
    await page.locator('//mark[text()="Accounts"]').click()

    await page.locator('//div[@title="New"]').click()
    await page.locator('//input[@name="Name"]').fill('TestLeaf')
    await page.locator('(//button[@type="button" and @role="combobox"])[1]').click()
    await page.locator('//span[text()="Competitor"]').click()
     await page.locator('//button[@aria-label="Industry"]').click()
    await page.locator('//span[@title="Agriculture"]').click()
    await page.locator('//button[@name="SaveEdit"]').click()
    const text = await page.locator('//span[@class="toastMessage slds-text-heading--small forceActionsText"]').innerText()
    console.log(text);
    expect(text).toContain('TestLeaf')
    

})
    
