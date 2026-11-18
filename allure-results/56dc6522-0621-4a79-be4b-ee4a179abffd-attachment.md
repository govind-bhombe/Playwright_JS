# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: validationOftags.spec.ts >> two tests >> validation of drag and drop2 @Regression
- Location: tests\validationOftags.spec.ts:56:5

# Error details

```
ReferenceError: auth is not defined
```

# Test source

```ts
  1   | //import{test} from '../fixtures/auth'
  2   | import {test} from '@playwright/test'
  3   | import{DragToDrop} from '../pages/DragandDrop'
  4   | import { helper } from '../utils/uiHelper'
  5   | //import { faker } from '@faker-js/faker'
  6   | import { faker } from '@faker-js/faker';
  7   | // Execution	Command
  8   | // Smoke tests	npx playwright test --grep "@smoke"
  9   | // Sanity tests	npx playwright test --grep "@sanity"
  10  | // Regression tests	npx playwright test --grep "@regression"
  11  | // Exclude smoke tests	npx playwright test --grep-invert "@smoke"
  12  | 
  13  | // Yes! You can use -g as a shorthand for --grep in Playwright.
  14  | // npx playwright test -g "@Regression"
  15  | 
  16  | test.describe('two tests', ()=>{
  17  |     test('validation of form filling debug', async ({ page }) => {
  18  | 
  19  |     console.log('Current URL =>', await page.url());
  20  | 
  21  |     await page.goto('https://automationpracticehubapp.netlify.app/');
  22  | 
  23  |     console.log('After goto =>', await page.url());
  24  | 
  25  |     await page.waitForTimeout(10000);
  26  | });
  27  |     test('validation of form filling', {tag:['@Smoke', '@regression']}, async ({page})=>{
  28  |      test.setTimeout(60000);
  29  |         const h = new helper(page)
  30  |         
  31  |         await page.waitForLoadState('networkidle')
  32  |         const firstName = page.getByPlaceholder('Enter your first name')
  33  |         const lastName =  page.locator('#last-name')
  34  |         const email =  page.locator('#email')
  35  |         const formpassword =  page.getByLabel('Password')
  36  |         const feedback =  page.getByTestId('feedback')
  37  |         const submitButton = page.getByLabel('Submit Details')
  38  |         const validationMsg = page.getByTestId('submit-success-message')
  39  | 
  40  |         const randomFirstName = faker.person.firstName;
  41  |         const randomLastName = faker.person.lastName;
  42  |         const randomEmail = faker.internet.email;
  43  |         const randomPassword = faker.internet.password
  44  |         const randomFeedback = faker.commerce.productName
  45  | 
  46  |         await h.fill(firstName, randomFirstName('male'))
  47  |         await h.fill(lastName, randomLastName())
  48  |         await h.fill(email, randomEmail())
  49  |         await h.fill(formpassword, randomPassword())
  50  |         await h.fill(feedback, randomFeedback())
  51  |         await h.click(submitButton)
  52  |         await h.Takescreenshot('Form submitted')
  53  | 
  54  |     })
  55  | 
  56  | test('validation of drag and drop2 @Regression', async ({page})=>{
  57  | 
> 58  |         const x = new DragToDrop(auth)
      |                                  ^ ReferenceError: auth is not defined
  59  |         await page.getByRole('link', { name: 'Advanced Elements' }).click();
  60  |         await x.dd()
  61  |     })
  62  | // test('validation of drag and drop', {tag:['@Smoke', '@regression']}, async ({page})=>{
  63  | //      test.setTimeout(60000);
  64  | //         const x = new DragToDrop(auth)
  65  | //         await page.getByRole('link', { name: 'Advanced Elements' }).click();
  66  | //         await x.dd()
  67  | //     })
  68  | // test('validation of form filling2', {tag:['@sanity', '@regression']}, async ({page})=>{
  69  | //     test.setTimeout(60000);
  70  | //         const h = new helper(page)
  71  |         
  72  | //         await page.waitForLoadState('networkidle')
  73  | //         const firstName = page.getByPlaceholder('Enter your first name')
  74  | //         const lastName =  page.locator('#last-name')
  75  | //         const email =  page.locator('#email')
  76  | //         const formpassword =  page.getByLabel('Password')
  77  | //         const feedback =  page.getByTestId('feedback')
  78  | //         const submitButton = page.getByLabel('Submit Details')
  79  | //         const validationMsg = page.getByTestId('submit-success-message')
  80  | 
  81  | //         const randomFirstName = faker.person.firstName;
  82  | //         const randomLastName = faker.person.lastName;
  83  | //         const randomEmail = faker.internet.email;
  84  | //         const randomPassword = faker.internet.password
  85  | //         const randomFeedback = faker.commerce.productName
  86  | 
  87  | //         await h.fill(firstName, randomFirstName('male'))
  88  | //         await h.fill(lastName, randomLastName())
  89  | //         await h.fill(email, randomEmail())
  90  | //         await h.fill(formpassword, randomPassword())
  91  | //         await h.fill(feedback, randomFeedback())
  92  | //         await h.click(submitButton)
  93  | //         await h.Takescreenshot('Form submitted')
  94  | 
  95  | //     })
  96  | })
  97  | 
  98  |     
  99  | // demo
  100 | // test('validation of form filling', async ({page, auth})=>{
  101 | 
  102 | //         const h = new helper(page)
  103 |         
  104 | //         await page.waitForLoadState('networkidle')
  105 | //         const firstName = page.getByPlaceholder('Enter your first name')
  106 | //         const lastName =  page.locator('#last-name')
  107 | //         const email =  page.locator('#email')
  108 | //         const formpassword =  page.getByLabel('Password')
  109 | //         const feedback =  page.getByTestId('feedback')
  110 | //         const submitButton = page.getByLabel('Submit Details')
  111 | //         const validationMsg = page.getByTestId('submit-success-message')
  112 | 
  113 | //         const randomFirstName = faker.person.firstName;
  114 | //         const randomLastName = faker.person.lastName;
  115 | //         const randomEmail = faker.internet.email;
  116 | //         const randomPassword = faker.internet.password
  117 | //         const randomFeedback = faker.commerce.productName
  118 | 
  119 | //         await h.fill(firstName, randomFirstName('male'))
  120 | //         await h.fill(lastName, randomLastName())
  121 | //         await h.fill(email, randomEmail())
  122 | //         await h.fill(formpassword, randomPassword())
  123 | //         await h.fill(feedback, randomFeedback())
  124 | //         await h.click(submitButton)
  125 | //         await h.Takescreenshot('Form submitted')
  126 | 
  127 | //     })
```