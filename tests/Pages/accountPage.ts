import { HomePage } from "./homePage";
import {expect, Locator,Page} from "@playwright/test"

export class AccountPage extends HomePage
{   
   s:string=""
   
    async fillForm()
    {
      const t = await this.page.locator('[id="accountName"]')
      await t.fill('College Account3'); 
      this.s = await t.inputValue();
      await this.page.locator('[id="groupNameLocal"]').fill('Education')
      await this.page.locator('//select[@name="industryEnumId"]').selectOption({value:"IND_AEROSPACE"})
      await this.page.locator('[type="submit"]').click()
    }

    async verifyAccountCreation()
    {
        console.log("The verified input value is:", this.s);
        const text = await this.page.locator('//tr/td/span[text()="Account Name"]/following::span[@class="tabletext"][1]').innerText()
        console.log(text);        
        expect(text).toContain(this.s)
    }

    
}