import {test} from "@playwright/test"

test('Check Locators', async ({page}) => {
    
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox',{name: "Username"}).fill('democsr2')
    await page.getByLabel('Password').fill('crmsfa')
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByText('CRM/SFA',{exact:true}).click()
    await page.getByText('Create Lead',{exact:true}).click()
    await page.locator("//input[@id='createLeadForm_companyName']").fill("TestLeaf")
    await page.locator("//input[@id='createLeadForm_firstName']").fill("Anitha")
    await page.locator("//input[@id='createLeadForm_lastName']").fill("Chinnu")
    await page.locator("//input[@id='createLeadForm_personalTitle']").fill("Mrs.")
    await page.locator("//input[@id='createLeadForm_generalProfTitle']").fill("CEO")
    await page.locator("[name='annualRevenue']").fill("1500000")
    await page.locator("#createLeadForm_departmentName").fill("QA")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9087654321")
    await page.getByRole('button',{name:"Create Lead"}).click()
})