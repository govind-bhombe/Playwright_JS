  import{test, expect} from '@playwright/test'
  import{login} from '../pages/login'

  test('Navigate To WebAPP', async({page})=>
    {
     
        const loginRef = new login(page)
        await loginRef.doLogin()  /// use await other wise you will get >> Error: page.goto: net::ERR_ABORTED; maybe frame was detached?

        const firstname = page.getByPlaceholder('Enter your first name')
        const lastnmae = page.locator('#last-name')
        const email = page.locator('#email')
        const formpassword = page.getByLabel('Password')
        const feedback = page.getByTestId('feedback')
        const submitButton = page.getByLabel('Submit Details')

      
  }) 