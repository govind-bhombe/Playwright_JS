import{Page, expect} from '@playwright/test'

export class DragToDrop{
    constructor(private page: Page){}

    async dd()
    {
        const a = this.page.getByTestId('drag-source')
        const b = this.page.getByLabel('Drop target area') 
        await a.dragTo(b)
        await expect(this.page.locator('#drag-drop-message')).toHaveText('Item dropped successfully!')
    }
}