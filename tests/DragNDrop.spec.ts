import{test} from '../fixtures/auth'
import {DragToDrop} from '../pages/DragandDrop'
test ('validation of drag and drop', async({page, auth}) =>{
    const x = new DragToDrop(auth)
    await page.getByRole('link', { name: 'Advanced Elements' }).click();
    await x.dd()
    
    console.log("drag and drop successfully done")
})