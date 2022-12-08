import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.view';


Given(/^I am select my destiny (.+)$/, async (Destiny) => {
     await LoginPage.registerDestiny(Destiny);
});

When (/^I write range of date: (.*) - (.*) - the (.*)$/, async (start, end, monthYear) => {
    //await expect(LoginPage.btnConfirmDate).toBeExisting();
    await LoginPage.setDate(start, end, monthYear)
});
