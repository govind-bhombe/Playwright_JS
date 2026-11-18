import{Page, Locator}from '@playwright/test'

export class helper{
    constructor(private page:Page){}

    async fill(x:Locator, value:string)
    {
    
        await x.fill(value)
        console.log('Value is filled in input field ' +' '+ value)

    }

    async click(x:Locator)
    {
        console.log('clicking on button')
        await x.click()
        console.log('clicked on button')
    }

    async Takescreenshot(name: string)
    {
        await this.page.screenshot({
            path : `screenshots/${name}.png`,
            fullPage: true
        })
    }


}