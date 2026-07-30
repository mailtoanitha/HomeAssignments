import { test, expect } from "@playwright/test"

test('alert-frames', async ({ page }) => {

    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')

    const frame = await page.frameLocator('[id="iframeResult"]')

    const messageOnButton = await frame.locator('//button[text() = "Try it"]').innerText()
    console.log(messageOnButton);
    expect(messageOnButton).toBe('Try it')


    page.on("dialog", async (alert) => {

        let Type = alert.type()
        console.log(Type);

        let Message = alert.message()
        console.log(Message);

        await alert.accept()
         
    

    })
    await frame.locator('//button[text() = "Try it"]').click()


    //Message below the button
    const messageBelowButton = await frame.locator('[id="demo"]').innerText()
    console.log(messageBelowButton);    
    expect(messageBelowButton).toContain('You pressed OK!')

   
})