import {test, expect} from "@playwright/test"
import fs from 'fs';
import * as XLSX from 'xlsx'
//load excel file 
// File > workbook >sheetname>>worksheets > row & columns 
const excelPath = "TestData/Book1.xlsx";
const workbook = XLSX.readFile(excelPath);
const sheetname =  workbook.SheetNames[0]
const worksheets = workbook.Sheets[sheetname];

const logindata:any = XLSX.utils.sheet_to_json(worksheets);

for ( const {email, password} of logindata)

    {
        test (`login test${email}`, async ({page}) => {
             await page.goto ('https://demowebshop.tricentis.com/login');
    await page.locator('#Email').fill(email);
    await page.locator('#Password').fill(password);
    await page.locator('input.button-1.login-button').click();
            
        })


    }


