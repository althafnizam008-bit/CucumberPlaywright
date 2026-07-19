import { Given, Then, Before, After, When } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { page } from "../Hooks/Hooks";
import { ConfigReader } from "../config/ConfigurationReader.";




Given('User launches the application2', async function () {
 await page.goto(ConfigReader.get('BASEURL'));   
 
});

When('User enters valid username and password2', async function () {
   await page.getByRole('link', { name: 'Sign in' }).click();
  
});

When('User clicks on Sign in button2', async function () {
  await page.locator('#email').fill('Frect1977@fleckens.hu');
  await page.locator('#passwd').fill('password');
});

Then('User should login successfully2', async function () {
  await page.locator('#SubmitLogin').click();
});

Then('page should idle for 2 seconds', async function () {
  await page.waitForTimeout(2000);
});