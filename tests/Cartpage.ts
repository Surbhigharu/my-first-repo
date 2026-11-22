import {Page,Locator, expect} from "@playwright/test"

export default class Cartpage
{

readonly page:Page;
readonly removebox:Locator;
readonly UpdateShoppingCart:Locator;
readonly Terms:Locator;
readonly checkOut :Locator;

constructor (page:Page)
{
    this.page =page;
    this.removebox = page.getByRole('checkbox',{name:'removefromcart'});
    this.UpdateShoppingCart= page.locator('input.update-cart-button');
    this.Terms=page.locator('input#termsofservice');
    this.checkOut=page.getByRole('button',{name:'Checkout',exact :true});

}

async OrderCart()
{
await this.UpdateShoppingCart.click();
await this.Terms.check();
await this.checkOut.click();
await expect(this.page).toHaveURL(/onepagecheckout/);

}

/*async clearCart() {
  for (const box of await this.removebox.all()) {
    await box.check();
  }
  //await this.updateShoppingCart.click();
} */
}