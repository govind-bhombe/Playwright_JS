//import {test as base, Page, expect} from '@playwright/test'
 
//type Myfixture={
  //  auth:any
//}

export const test = base.extend<Myfixture>({
    auth : async ({page}, use) =>
    {
      const url = 'https://automationpracticehubapp.netlify.app/'
    await page.goto(url)
    const username =  page.getByTestId('login-username')
    await username.fill('Admin')
    const password =  page.locator('#login-password')
    await password.fill('Hello@123')
    const signBtn = page.getByText('Sign In', {exact: true})
    await signBtn.click();
    
    await use(page)   
    }
})