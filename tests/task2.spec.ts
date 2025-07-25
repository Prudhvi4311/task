import { test, expect } from "@playwright/test";
import formdata from "../testdata/formdata.json"

test("fill the form with valid details", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/input-form-demo");

  await page.locator("#name").fill(formdata.firstName);
  await page.locator("input[type='email'][name='email'][id='inputEmail4']").fill(formdata.email);
  await page.getByPlaceholder("Password").fill("Hello@123");
  await page.getByPlaceholder("Company").fill("Benefithub");
  await page.getByPlaceholder("Website").fill(formdata.website);
  
  await page.selectOption('select[name="country"]', { label: formdata.country });

  await page.getByPlaceholder("City").fill(formdata.city);
  await page.getByPlaceholder("Address 1").fill(formdata.address1);
  await page.getByPlaceholder("Address 2").fill(formdata.address2);
  await page.getByPlaceholder("State").fill(formdata.state);
  await page.getByPlaceholder("Zip code").fill(formdata.zip);

  // Find and click the "Submit" button more specifically
  await page.getByRole('button', { name: 'Submit' }).click();

  //verfiy the message
  const message = await page.locator('p[class="success-msg hidden"]').textContent();

  await expect(message).toContain("Thanks for contacting us");
});
