
import {test, expect, Page, Locator} from "@playwright/test"

export class LoginPage{

    private readonly page: Page;
    private readonly usernametxt: Locator;
    private readonly passwordtxt: Locator;
    private readonly loginbtn: Locator;

    constructor(page:Page){
        this.page = page;
        this.usernametxt = page.locator("input[id='userName']");
        this.passwordtxt = page.locator("input[id='password']");
        this.loginbtn = page.locator("button[id='login']")
    }

    async setusername(username:string){
        await this.page.waitForLoadState('domcontentloaded')
        await this.usernametxt.scrollIntoViewIfNeeded()
        await expect(this.usernametxt).toBeVisible({ timeout: 3000 });
        await this.usernametxt.fill(username)
    }

    async setpassword(password:string){
        await expect(this.passwordtxt).toBeVisible({ timeout: 3000 });
        //await this.passwordtxt.scrollIntoViewIfNeeded()
        await this.passwordtxt.fill(password)
    }

    async loginapp(username:string, password: string){
        await this.setusername(username);
        await this.setpassword(password);
        await this.loginbtn.click()
    }
}