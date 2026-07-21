import {test} from "@playwright/test"

test("Application Form", async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill('Demosalesmanager')
    await page.locator('#password').fill('crmsfa')
    await page.locator('[type="submit"]').click()    
    await page.locator('[src="/opentaps_images/integratingweb/crm.png"]').click()
    await page.locator('[href="/crmsfa/control/leadsMain"]').click()
    await page.locator('.frameSectionBody > ul > li [href="/crmsfa/control/createLeadForm"]').click()

    await page.locator('[id="createLeadForm_companyName"]').fill('TestLeaf')
    await page.locator('[id="createLeadForm_firstName"]').fill('Anitha')
    await page.locator('[id="createLeadForm_lastName"]').fill('Chinnu')
    await page.locator('[id="createLeadForm_personalTitle"]').fill('Mrs')
    await page.locator('[id="createLeadForm_generalProfTitle"]').fill('QA')
    await page.locator('[id="createLeadForm_annualRevenue"]').fill('1500000')
    await page.locator('[id="createLeadForm_departmentName"]').fill('Computer')
    await page.locator('[id="createLeadForm_primaryPhoneNumber"]').fill('9087654321')
    await page.locator('[name="submitButton"]').click()

})