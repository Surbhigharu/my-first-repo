import {Page,Locator,expect} from "@playwright/test"
export default class BooksPage{
readonly page:Page;
readonly booklink: Locator
readonly sortBy:Locator
readonly openbooks:Locator

constructor( page:Page)
{
this.page=page;
this.booklink=page.locator('div.block-category-navigation').getByRole('link', { name: 'Books' });
this.sortBy=page.locator('select#products-orderby');
this.openbooks=page.locator('div.product-grid .product-title');

}
async open()
{
 await this.booklink.click();
}
async sortDropdown(label :string)
{
await this.sortBy.selectOption({label});
await expect (this.page).toHaveURL(/orderby/);

}
async openBook(name:string)
{
await this.openbooks.filter({hasText:name}).click();
}
}