import { LoginPage } from "./loginPage";

export class HomePage extends LoginPage
{
    async gotoAccount()
    {
      await this.page.getByRole('link', { name: 'Accounts' }).click()
    }

    async createAccount()
    {
        await this.page.getByRole('link', { name: "Create Account" }).click()
    }
}