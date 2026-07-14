import { Page } from "@playwright/test";

export class LoginPage {

    constructor(private page: Page) {}

    async openApplication() {
        await this.page.goto("https://automationpractice.techwithjatin.com/");
    }
}