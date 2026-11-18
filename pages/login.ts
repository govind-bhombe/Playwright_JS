import {Page, expect} from '@playwright/test'

export class login {
    constructor(private page:Page) {}

//     // Error: page.goto: net::ERR_ABORTED; maybe frame was detached?  -->> need to add await when calling this class from test folder
// Call log:
//   - navigating to "https://automationpracticehubapp.netlify.app/", waiting until "load"

    async doLogin()
    {
        const url = 'https://automationpracticehubapp.netlify.app/'
        await this.page.goto(url)
        const pageTitle ='You Can Do it'
        await expect(this.page).toHaveTitle(pageTitle)
        const username = this.page.getByPlaceholder('Admin')
        await username.fill("Admin")
        const password = this.page.getByTestId('login-password')
        await password.fill("Hello@123")
        const signBtn = this.page.locator('.login-submit')
        await signBtn.click()
        const homepage =this.page.getByText('Basic Elements')
        await homepage.isVisible();
    }
}