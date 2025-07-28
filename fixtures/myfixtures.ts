import {test as base, Page} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"


type myfixture= {
    lp:LoginPage
}

export const test = base.extend<myfixture>({
    lp : async ({page}, use)=>{
        const loginpage = new LoginPage(page);
        await use(loginpage);
    }
})

export const expect = test.expect;
export const describe = test.describe;

