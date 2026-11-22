import {test, expect} from '@playwright/test'
//import loginpage from './Login'
import fs from 'fs';

//code to read file from json y

const jsonPath = "TestData/data.json";


const LoginCredential:any = JSON.parse(fs.readFileSync(jsonPath,'utf-8'));


for (const {email, password} of LoginCredential)
{

test (`logintest${email}`, async ({page}) => {
    
   await page.goto ('https://demowebshop.tricentis.com/login');
    await page.locator('#Email').fill(email);
    await page.locator('#Password').fill(password);
    await page.locator('input.button-1.login-button').click();
})

}