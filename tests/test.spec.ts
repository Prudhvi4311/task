import { LoginPage } from "../pages/LoginPage"
import { test, expect, describe } from "../fixtures/myfixtures"
//import {test,expect} from "@playwright/test"

test("Login test", async ({ page, loginpage }) => {
    //load the app
    await page.goto("https://demoqa.com/login", { waitUntil: "domcontentloaded" });
    //by using fixture created a login page object calling login function from loginpage class
    loginpage.loginapp('testuser1', 'Test@1234');
    console.log("Login is successfull");
    //verfiy the username after logging
    const usernametext = await page.locator("label[id='userName-value']").textContent();
    await expect(usernametext).toContain('testuser1');
    //verfiy the page url
    await expect(page).toHaveURL("https://demoqa.com/profile");
    //verify the logout button
    const logoutbtn = page.getByRole('button', { name: 'Log out' });
    await expect(logoutbtn).toBeVisible();
})