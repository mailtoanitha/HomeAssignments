import {test} from "@playwright/test"
import { AccountPage } from "./Pages/accountPage"

test('Account Creation', async ({page}) => {

let a = new AccountPage(page)
await a.launchBrowser()
await a.enterCredentials()
await a.clickOnCRMPage()
await a.gotoAccount()
await a.createAccount()
await a.fillForm()
await a.verifyAccountCreation()
})