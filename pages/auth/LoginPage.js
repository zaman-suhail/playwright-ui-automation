const { log } = require('winston');
const logger = require('../../utils/logger');

class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginClick = '#login-button';
  }

  async goto(baseUrl) {
    logger.info(`Navigating to ${baseUrl}`);
    await this.page.goto(baseUrl);
  }

  async enterUserName(username) {
    logger.info(`Logging in with ${username}`);
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLoginButton() {
    await this.page.click(this.loginClick);
  }

  async login(username, password) {
    await this.enterUserName(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}

module.exports = LoginPage;
