//import{test} from '../fixtures/auth'
import {test} from '@playwright/test'
import{DragToDrop} from '../pages/DragandDrop'
import { helper } from '../utils/uiHelper'
//import { faker } from '@faker-js/faker'
import { faker } from '@faker-js/faker';
// Execution	Command
// Smoke tests	npx playwright test --grep "@smoke"
// Sanity tests	npx playwright test --grep "@sanity"
// Regression tests	npx playwright test --grep "@regression"
// Exclude smoke tests	npx playwright test --grep-invert "@smoke"

// Yes! You can use -g as a shorthand for --grep in Playwright.
// npx playwright test -g "@Regression"

test.describe('two tests', ()=>{
//     test('validation of form filling debug', async ({ page }) => {

//     console.log('Current URL =>', page.url());

//     await page.goto('https://automationpracticehubapp.netlify.app/');

//     console.log('After goto =>', page.url());

//     await page.waitForTimeout(10000);
// });
    test('validation of form filling', {tag:['@Smoke', '@regression']}, async ({page})=>{
        test.setTimeout(60000);
        await page.goto('/');

        console.log('URL:', await page.url());

        console.log(await page.evaluate(() => localStorage.getItem('isAuthenticated')));

        const h = new helper(page)
        
        await page.waitForLoadState('networkidle')
        const firstName = page.getByPlaceholder('Enter your first name')
        const lastName =  page.locator('#last-name')
        const email =  page.locator('#email')
        const formpassword =  page.getByLabel('Password')
        const feedback =  page.getByTestId('feedback')
        const submitButton = page.getByLabel('Submit Details')
        const validationMsg = page.getByTestId('submit-success-message')

        const randomFirstName = faker.person.firstName;
        const randomLastName = faker.person.lastName;
        const randomEmail = faker.internet.email;
        const randomPassword = faker.internet.password
        const randomFeedback = faker.commerce.productName

        await h.fill(firstName, randomFirstName('male'))
        await h.fill(lastName, randomLastName())
        await h.fill(email, randomEmail())
        await h.fill(formpassword, randomPassword())
        await h.fill(feedback, randomFeedback())
        await h.click(submitButton)
        await h.Takescreenshot('Form submitted')

    })

test('validation of drag and drop2 @Regression', async ({page})=>{
        test.setTimeout(60000);
        await page.goto('/');
        const x = new DragToDrop(page)
        await page.getByRole('link', { name: 'Advanced Elements' }).click();
        await x.dd()
    })
// test('validation of drag and drop', {tag:['@Smoke', '@regression']}, async ({page})=>{
//      test.setTimeout(60000);
//         const x = new DragToDrop(page)
//         await page.getByRole('link', { name: 'Advanced Elements' }).click();
//         await x.dd()
//     })
// test('validation of form filling2', {tag:['@sanity', '@regression']}, async ({page})=>{
//     test.setTimeout(60000);
//         const h = new helper(page)
        
//         await page.waitForLoadState('networkidle')
//         const firstName = page.getByPlaceholder('Enter your first name')
//         const lastName =  page.locator('#last-name')
//         const email =  page.locator('#email')
//         const formpassword =  page.getByLabel('Password')
//         const feedback =  page.getByTestId('feedback')
//         const submitButton = page.getByLabel('Submit Details')
//         const validationMsg = page.getByTestId('submit-success-message')

//         const randomFirstName = faker.person.firstName;
//         const randomLastName = faker.person.lastName;
//         const randomEmail = faker.internet.email;
//         const randomPassword = faker.internet.password
//         const randomFeedback = faker.commerce.productName

//         await h.fill(firstName, randomFirstName('male'))
//         await h.fill(lastName, randomLastName())
//         await h.fill(email, randomEmail())
//         await h.fill(formpassword, randomPassword())
//         await h.fill(feedback, randomFeedback())
//         await h.click(submitButton)
//         await h.Takescreenshot('Form submitted')

//     })
})

    
// demo
// test('validation of form filling', async ({page, auth})=>{

//         const h = new helper(page)
        
//         await page.waitForLoadState('networkidle')
//         const firstName = page.getByPlaceholder('Enter your first name')
//         const lastName =  page.locator('#last-name')
//         const email =  page.locator('#email')
//         const formpassword =  page.getByLabel('Password')
//         const feedback =  page.getByTestId('feedback')
//         const submitButton = page.getByLabel('Submit Details')
//         const validationMsg = page.getByTestId('submit-success-message')

//         const randomFirstName = faker.person.firstName;
//         const randomLastName = faker.person.lastName;
//         const randomEmail = faker.internet.email;
//         const randomPassword = faker.internet.password
//         const randomFeedback = faker.commerce.productName

//         await h.fill(firstName, randomFirstName('male'))
//         await h.fill(lastName, randomLastName())
//         await h.fill(email, randomEmail())
//         await h.fill(formpassword, randomPassword())
//         await h.fill(feedback, randomFeedback())
//         await h.click(submitButton)
//         await h.Takescreenshot('Form submitted')

//     })