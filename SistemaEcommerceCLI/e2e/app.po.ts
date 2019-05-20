import { browser, element, by } from 'protractor';
import { Locator } from 'protractor/built/locators';

export class SistemaEcommerceCLIPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(<Locator>by.css('h1'));
    /* return element(by.css('app-root h1')).getText(); */
  }
}
