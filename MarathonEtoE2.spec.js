import { test, expect } from "@playwright/test"
import { text } from "node:stream/consumers"

test('Decathalon - End to End', async ({ page }) => {

    await page.goto("https://www.decathlon.in/")
    const homePAge = await page.locator('[aria-label="Decathlon Home"]')

    const search = await page.locator('[type="search"]')
    expect(search).toBeEnabled()
    search.fill('shoes')
    search.press('Enter')

    const searchWord = await page.locator('[data-test-id="search-query-text"]').innerText()
    expect(searchWord).toContain("shoes")   


    await page.locator('[aria-controls="gender_id_en"]').click()
    await page.locator('[data-test-id="filter-checkbox-gender_id_en-MEN"]').click()

    await page.locator('[aria-controls="sport_pratice_en"]').click()
    await page.locator('[data-test-id="filter-checkbox-sport_pratice_en-Running"]').click()

    await page.getByAltText('Men Running Shoes Superior Grip Cushioned Upto 10km/week, Jogflow100 - Navy Blue').click()
    await page.locator('[data-test-id="pdp-size-option-text-6"]').click()

    await page.locator('[data-test-id="pdp:add-to-cart-button"]').click()

    await page.locator(" //h3[text()='Product(s) added to cart']").isVisible()

    await page.locator('[data-test-id="button"]').click()
    const totalValue = await page.locator('//div[@data-test-id="cart:cart-checkout-total-cart-value"]').innerText()
    console.log("The total value is = ", totalValue)

})