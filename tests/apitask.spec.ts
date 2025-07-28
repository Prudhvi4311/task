import { test, expect, request } from "@playwright/test"


let responseclick: any;

test.beforeEach(async ({ page }) => {
    await page.waitForLoadState()
    await page.goto("https://demo.playwright.dev/todomvc/#/")
})

test("add the todo task", async ({ page }) => {

    const addtaskhere = await page.locator(".new-todo")

    await addtaskhere.fill("Buy the milk")
    await page.keyboard.press('Enter')
    await addtaskhere.fill("reading the book")
    await page.keyboard.press('Enter')
    await addtaskhere.fill("workout for 30 min")
    await page.keyboard.press('Enter')

    const listiteam = await page.locator("ul.todo-list li");
    const len = await listiteam.count();

    for (let i = 0; i < len; i++) {
        const text = await listiteam.nth(i).textContent();
        console.log(text)
        if (i === len - 1) {
            const toggleCheckbox = listiteam.nth(i).locator('.toggle');
            const apiContext = await request.newContext();
            const response = await apiContext.get('https://demo.playwright.dev/todomvc/#/completed');
            expect(response.status()).toBe(200);
        }

    }

    // this app doesn't have backend, so it store the data in local storage under keys

})


