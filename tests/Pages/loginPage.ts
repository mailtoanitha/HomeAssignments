import { chromium, Page } from "@playwright/test"
import dot from "dotenv"

dot.config({path: 'Data/leafTap.env'})
export class LoginPage {

    page: Page

    constructor(tempage: Page) {
        this.page = tempage
    }

    async launchBrowser() {
        await this.page.goto(process.env.LF_url as string)
    }

    async enterCredentials() {
        await this.page.locator('#username').fill(process.env.LF_username as string)
        await this.page.locator('#password').fill(process.env.LF_password as string)
        await this.page.locator('.decorativeSubmit').click()
    }

    async clickOnCRMPage()
    {
        await this.page.getByText('CRM/SFA').click()
    }


    }

