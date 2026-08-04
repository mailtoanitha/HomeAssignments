import { test, expect } from "@playwright/test"
import path from "path";

test("multiple upload", async ({ page }) => {

  await page.goto("https://www.leafground.com/file.xhtml")

  const multipleUpload = await page.locator('(//input[@type="file"])[2]')

  await multipleUpload.setInputFiles([path.join(__dirname, 'Document/sample.png'), path.join(__dirname, 'Document/sample1.png')])

  await expect(page.locator('//div[text()="sample.png"]')).toContainText("sample")
  await expect(page.locator('//div[text()="sample1.png"]')).toContainText("sample1")
  
})




