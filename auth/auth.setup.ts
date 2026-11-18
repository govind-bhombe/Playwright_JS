import{test as setup, expect}from '@playwright/test'
import path from 'path'
import { Page } from '@playwright/test';

setup('Login and auth', async ({page})=>{

    await page.goto('https://automationpracticehubapp.netlify.app/')
     await page.waitForLoadState('networkidle');

    console.log(page.url());
    const username =  page.getByTestId('login-username')
    await username.fill('Admin')
    const password =  page.locator('#login-password')
    await password.fill('Hello@123')    
    const signBtn = page.getByText('Sign In', {exact: true})
    await signBtn.click();

  //await expect(page.getByText('Sign In')).toBeHidden(); 
    await page.waitForTimeout(3000);
    await page.context().storageState({
        path: 'auth/auth.json'
    })
    console.log('Auth saving')
})