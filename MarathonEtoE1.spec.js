import { test, expect } from "@playwright/test"

test("PVR - Marathon", async ({ page }) => {

  await page.goto("https://www.pvrcinemas.com/")
  await page.locator('//h6[text()="Chennai"]').click()
  await page.locator('//span[text()="Cinema"]').click()

  await page.locator('//div[@id="cinema"]/span').click()
  const cinemaList = page.locator('//div[@class="p-dropdown-items-wrapper"]/ul/li')
  const count = await cinemaList.count()
  const randomIndex = Math.floor(Math.random() * count);
  console.log("cinema index", count, randomIndex);
  await cinemaList.nth(randomIndex).click()


  const activeDateWrapper = page.locator('div', { hasClass: 'p-dropdown-items-wrapper' }).filter({ hasText: 'Today' });
  const dateList = activeDateWrapper.locator('ul', { role: 'listbox' }).locator('li span');
  await dateList.first().waitFor({ state: 'visible', timeout: 5000 })
  const avail = await dateList.allTextContents()
  console.log(avail);

  const index = Math.floor(Math.random() * avail.length)
  console.log(`Total dates found: ${avail.length}. Randomly selected index: ${index}`);
  await dateList.nth(index).click()

  await page.locator('//div[@class="p-dropdown-items-wrapper"]/ul/li/span[text()="JANA NAYAGAN"]').click()

  const time = page.locator('div', { hasClass: 'p-dropdown-items-wrapper' }).filter({ hasText: 'PM' })
  const TimeList = time.locator('ul', { role: 'listbox' }).locator('li[class="p-dropdown-item"] span[class="mx-2"]');
  await TimeList.first().waitFor({ state: 'visible', timeout: 5000 })
  const avail1 = await TimeList.allTextContents()
  console.log(avail1);

  const index1 = Math.floor(Math.random() * avail1.length)
  console.log(`Total dates found: ${avail1.length}. Randomly selected index: ${index1}`);
  await TimeList.nth(index1).click()

  await page.getByRole('button', { name: "Submit" }).click()

  await page.locator('//button[text()="Accept"]').click()

  await page.locator('//button[@class="sc-kCuUfV iBvycX reject-terms"]').click()

  //Seat Selection
  const available_seats = page.locator('//span[@class="seat-current-pvr"]')
  const seats_count = await available_seats.count()
  const randomIndex4 = Math.floor(Math.random() * seats_count);
  const selectedSeat = available_seats.nth(randomIndex4)
  const seat_Name = await selectedSeat.innerText()

  const rowLetter =
    await selectedSeat.locator('xpath=ancestor::tr//span[contains(@class, "seat-row-no")]').first().innerText();
  console.log("Seat number", seat_Name, rowLetter);
  let row_seat = rowLetter+seat_Name
  console.log(row_seat);

  await selectedSeat.click()

 const seatNumber = await page.locator('div[class="seat-number"] p').innerText()
 console.log(seatNumber);
 
 expect.soft(row_seat).toMatch(seatNumber)

 const movieName = await page.locator('div[class="summary-movies-content"] h5').innerText()
 console.log(movieName);

 expect("JANA NAYAGAN").toMatch(movieName)

 const total = await page.locator('[class="grand-amount"]').innerText()
 console.log(total);
 const dtotal = total.replace(/^[\d.]/g,'')
 console.log(dtotal);

 expect(total).toContain(dtotal)
 await page.locator('[class="sc-bbbBoY kbsOBB btn-proceeded"]').click() 
 
})