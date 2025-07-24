import {test as base, Page} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"


type myfixture= {
    loginpage:LoginPage
}

export const test = base.extend<myfixture>({
    loginpage : async ({page}, use)=>{
        const lp = new LoginPage(page);
        await use(lp);
    }
})

export const expect = test.expect;
export const describe = test.describe;

