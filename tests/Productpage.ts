import {Page, expect , Locator} from '@playwright/test'

export default class ProductPage
{
readonly page : Page;
readonly quantity: Locator;
readonly addToCart:Locator;
readonly barNotification:Locator;
readonly Notification:Locator;

constructor(page:Page)
{
    this.page=page;
    this.quantity= page.locator('input.qty-input');
    this.addToCart=page.locator('input.add-to-cart-button').first();
    this.barNotification= page.getByRole('link',{name:'shopping cart',exact :true})
 this.Notification= page.locator('.bar-notification');
}

async addToKart(qty:string)
{
await this.quantity.fill(qty);
await this.addToCart.click();
await expect(this.Notification).toContainText('The product has been added');
await this.barNotification.click();
}


}