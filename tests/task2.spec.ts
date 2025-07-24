import {test, expect} from "@playwright/test"

test("fill the form", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/input-form-demo")

    await page.locator("#name").fill('prudhvi');
    //page.pause();
    await page.locator('input[placeholder="Email"]').fill("prudhviraj37371@gmail.com");
    await page.getByPlaceholder("password").fill("Hello@123")
    await page.getByPlaceholder("Company").fill("Benefithub")
    await page.getByPlaceholder("Website").fill("https://www.benefithub.com")
    await page.locator('select[name="country"]').scrollIntoViewIfNeeded();
await page.selectOption('select[name="country"]', { value: 'India' });
    
    await page.getByPlaceholder('City').fill('Hyderabad');
    await page.getByPlaceholder('Address 1').fill("Kukatpally")
    await page.getByPlaceholder("Address 2").fill("vvnagar")
    await page.getByPlaceholder("State").fill("Telanagana")
    await page.getByPlaceholder("Zip code").fill("500072")
    await page.getByRole('button').click();
    //await  
})