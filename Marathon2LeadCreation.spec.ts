import { test, expect } from "@playwright/test"
import Data from "../tests/Data/browserBasedDetail.json"

test('Lead Creation - SalesForce', async ({ page }, { project }) => {

    const browserName = project.name;
    const userBrowser = Data[browserName as keyof typeof Data]

    //Login salesforce
    await page.goto('https://login.salesforce.com/')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()

    //navigation from App Launcher to Marketing
    await page.locator('div.slds-icon-waffle').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('[placeholder="Search apps or items..."]').pressSequentially('Marketing')
    await page.locator('p.slds-truncate').click()

    //Creation of Lead
    await page.locator('//span[@class="slds-truncate" and text()="Leads"]').click()
    await page.locator('div[title="New"]').click()
    await page.locator('(//button[@aria-label="Salutation"])[1]').click()
    await page.locator('div [data-value="Mrs."]').click()
    await page.locator('[name="firstName"]').fill(userBrowser.firstName)
    await page.locator('[name="lastName"]').fill(userBrowser.lastName)
    await page.locator('[name="Company"]').fill(userBrowser.company)
    await page.locator('[name="SaveEdit"]').click()
    await expect(page.locator('[class="toastMessage slds-text-heading--small forceActionsText"]')).toContainText('created')

    //Convert to opportunity
    const convert = page.getByRole('button', { name: "Convert" })
    await convert.click()
    await page.locator('[title="Opportunity"]').click()
    const oppName = page.locator('//span[text()="Opportunity Name"]/following::input[1]')
    await oppName.clear()
    await oppName.fill(userBrowser.opportunity)
    const oppChangeName = await oppName.inputValue()
    console.log("New Opp Name: ", oppChangeName);
    await convert.click()
    await expect(page.locator('[class="title"] h2')).toContainText('converted')

    //Check Lead name on the Lead page
    await page.getByRole('button', { name: "Go to Leads" }).click()
    const search = page.locator('[aria-label="Search this list..."]')
    await search.pressSequentially(userBrowser.firstName)
    await page.keyboard.press('Enter')
    await expect(page.locator('//p[text()="Nothing to see here"]')).toBeVisible()

    //Check the same on the opportunity page
    await page.locator('//span[@class="slds-truncate" and text()="Opportunities"]').click()
    await search.fill(userBrowser.opportunity)
    await page.locator(`//a[@class="slds-truncate"]/slot/span[text()="${oppChangeName}"]`).click()
    const oppChangeNameCheck = await page.locator('//div/slot/records-entity-label[text()="Opportunity"]/following::lightning-formatted-text[1]').innerText()
    console.log("Check opp Name: ", oppChangeNameCheck);
    expect(oppChangeNameCheck).toContain(oppChangeName)
})