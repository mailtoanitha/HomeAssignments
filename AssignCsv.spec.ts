import {test,expect} from "@playwright/test"
import {parse} from "csv-parse/sync"
import fs from "fs"
import path from "path"

const filepath = path.join(__dirname,'../Utils', 'loginData.csv')

let value:any[] = parse(fs.readFileSync(filepath,"utf-8"),{skip_empty_lines:true,columns:true});
console.log(value);

for(let login of value)
{
    test(`Login with different credentials - ${login.tcid}`,async ({page}) => {

        await page.goto("https://leaftaps.com/opentaps/control/main")
        await page.locator('#username').fill(login.username)
        await page.locator('#password').fill(login.password)
        await page.locator('.decorativeSubmit').click()

        const homepage = await page.locator('[value="Logout"]')
        expect(homepage).toBeVisible()

        const title = await page.title()
        expect(title).toContain('TestLeaf')
        
        
    })
}


