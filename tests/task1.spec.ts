import { test, expect, describe } from "../fixtures/myfixtures"
import { testConfig } from "../test.config";

let config : testConfig;

test.beforeEach( async ({page})=>{
    config = new testConfig();
    await page.goto(config.appurl);
})

test("Login test", async ({ page, loginpage }) => {
    //by using fixture created a login page object calling login function from loginpage class
    loginpage.loginapp(config.username, config.password);
    console.log("Login is successfull");
    await page.screenshot({path:`screenshots/userName_${Date.now()}.png`});
    //verfiy the username after logging
    const usernametext = await page.locator("label[id='userName-value']").textContent();
    await page.screenshot({path:`screenshots/userName_${Date.now()}.png`})
    await expect(usernametext).toContain('testuser1');
    //verfiy the page url
    await expect(page).toHaveURL("https://demoqa.com/profile");
    //verify the logout button
    const logoutbtn = page.getByRole('button', { name: 'Log out' });
    await logoutbtn.screenshot({path:`screenshots/userName_${Date.now()}.png`});
    await expect(logoutbtn).toBeVisible();
})
