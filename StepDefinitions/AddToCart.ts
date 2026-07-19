import { Given, Then, Before, After, When } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { page } from "../Hooks/Hooks";
import { ConfigReader } from "../config/ConfigurationReader.";

Given('User selects women category from the menu', async function () {
await page.locator('a[title="Women"]').click();
});

When('User selects a product and add it to the cart', async function () {
  
});

Then('Item should be added to the cart successfully', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

