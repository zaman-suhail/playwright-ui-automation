const { defineConfig } = require('@playwright/test');

const env = process.env.TEST_ENV || 'qa';
require('dotenv').config({ path: `.env.${env}` });

module.exports = defineConfig({
  retries: 2,
  timeout: 30 * 1000, // 30 seconds per test
  testDir: './tests',
  reporter: [
    ['list'],
    [
      'allure-playwright',
      {
        resultsDir: './reports/allure-results',
        detail: true,
        suiteTitle: true,
      },
    ],
  ],
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10 * 1000,
    baseURL: process.env.BASE_URL,
  },
});
