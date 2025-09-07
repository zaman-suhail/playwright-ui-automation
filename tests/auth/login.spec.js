const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/auth/LoginPage');
const logger = require('../../utils/logger');

require('dotenv').config();

test('Login Test', async ({ page }) => {
  const loginpage = new LoginPage(page);

  const baseUrl = process.env.BASE_URL;
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  await loginpage.goto(baseUrl);

  await loginpage.login(username, password);

  logger.info('login done successfully');
});
