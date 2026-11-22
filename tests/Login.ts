import {type Page, type Locator } from '@playwright/test';

export default class loginpage
{
    readonly page:Page;
    readonly loginlink :Locator;
    readonly email :Locator;
    readonly password :Locator;
    readonly rememberme:Locator;
    readonly loginbutton:Locator;

    constructor(page:Page)
    {
          this.page=page;
          this.loginlink =page.locator('a.ico-login');
          this.email =page.locator('#Email');
          this.password=page.locator('#Password');
          this.rememberme=page.locator('#RememberMe');
          this.loginbutton=page.locator('input.button-1.login-button');


    }

    async goto()
    {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }
 async login(email:string,password:string)
 {
 await this.loginlink.click();
 await this.email.fill(email);
 await this.password.fill(password);
 await this.rememberme.check();
 await this.loginbutton.click();
 }

}