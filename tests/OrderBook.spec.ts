import {test,expect } from '@playwright/test'
import loginpage from './Login'
import  BooksPage from './Bookspage';
import ProductPage from './Productpage';
import Cartpage from './Cartpage';

test.beforeEach('test01', async ({page}) => {
    const login= new loginpage(page);
    const books=new BooksPage(page);
    await login.goto();
    await login.login('surbhi67859@gmail.com','surbhi');
    await books.open();
    await books.sortDropdown('Name: A to Z');
    await books.openBook('Health Book');
     

})

test.beforeEach('test02',async ({page}) => {
    const product=new ProductPage(page);
    await product.addToKart('2');
   
    
})

test('test03',async ({page}) => {
    
    const Cart=new Cartpage(page);
    await Cart.OrderCart();
     await page.pause();
})