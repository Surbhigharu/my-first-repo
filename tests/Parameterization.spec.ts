import {test, expect} from '@playwright/test'

const Logincredential :string[][] = [['surbhi67859@gmail.com','surbhi'],['surbhi69@gmail.com','surbhi']];
 //const Counter :string[] = ['1','2'];
///Using for loop 
 /*for (const [email,password] of Logincredential)
 {
test (`logintest ${email}`,async ({page}) => {
    await page.goto ('https://demowebshop.tricentis.com/login');
    await page.locator('#Email').fill(email);
    await page.locator('#Password').fill(password);
    await page.locator('input.button-1.login-button').click();
//await page.pause();

})
 }

//Using for each loop 

Logincredential.forEach (([email,password]) => {
    test (`logintest ${email}`,async ({page}) => {
    await page.goto ('https://demowebshop.tricentis.com/login');
    await page.locator('#Email').fill(email);
    await page.locator('#Password').fill(password);
    await page.locator('input.button-1.login-button').click();
//await page.pause();

})
})*/

//Describe box 

for (const [email,password] of Logincredential)
 {
    test.describe('loginDataDriven',async () => {
        
test (`logintest ${email}`,async ({page}) => {
    await page.goto ('https://demowebshop.tricentis.com/login');
    await page.locator('#Email').fill(email);
    await page.locator('#Password').fill(password);
    await page.locator('input.button-1.login-button').click();
//await page.pause();
})
 })
}