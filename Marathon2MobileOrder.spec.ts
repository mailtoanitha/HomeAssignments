import {test,expect} from "@playwright/test"
import dotenv from "dotenv"

dotenv.config({path:'../Data/hw.env'})

test('Order Mobile in Servie Now',async ({page}) => {

    //Login the application
    await page.goto(process.env.Service_url as string)
    await page.locator('#user_name').fill(process.env.Service_username as string)
    await page.locator('#user_password').fill(process.env.Service_password as string)
    await page.getByRole('button',{name: "Log in"}).click()

    //Select Service Catalog
    await page.locator('[aria-label="All"]').click()
    const filterAll = page.locator('[id="filter"]')
    await filterAll.fill('Service Catalog')
    await page.locator('mark.filter-match').first().click()

    //Same frame locator for different pages
    const frame = await page.frameLocator('[id="gsft_main"]')

    //Mobile Order
    await frame.locator('a.category_title_link').last().click()   
    await frame.getByText('Apple iPhone 13 pro',{exact:true}).click()   
    await frame.locator('//label[@class="radio-label" and text()="Yes"]').click()
    await frame.locator('[class="cat_item_option sc-content-pad form-control"]').fill('99')
    await frame.locator('//select[@class="form-control cat_item_option "]').selectOption('Unlimited [add $4.00]')
    await frame.locator('//label[@class="radio-label" and text()="Sierra Blue"]').click()
    await frame.locator('//label[@class="radio-label" and text()="512 GB [add $300.00]"]').click()
    await frame.getByRole('button',{name: "Order Now"}).click()   

    //Confirm Order submission
    const subText = await frame.locator('//div[@id="sc_order_status_intro_text"]//span[2]').innerText()
    console.log(subText);
    expect(subText).toContain('submitted')

    //Get the order number
    const orderNumber = await frame.locator('[id="requesturl"]').innerText()
    console.log(`Successfully copied request number: ${orderNumber}`);

    //Storing screenshot
    await page.screenshot({ path: 'screenshots/order-page.png' });
    })