import {
  browser,
  by,
  element,
  ElementFinder
} from 'protractor';

import {
  expect,
  SkyHostBrowser,
  SkyVisualThemeSelector
} from '@skyux-sdk/e2e';

describe('Icon group controls', () => {
  let currentTheme: string;
  let currentThemeMode: string;

  function getLastCheckbox(): ElementFinder {
    return element(by.css(
      '#screenshot-checkbox-icon-group sky-checkbox:last-of-type .sky-switch-control'
    ));
  }

  function getLastRadioButton(): ElementFinder {
    return element(by.css(
      '#screenshot-radio-icon-group sky-radio:last-of-type .sky-switch-control'
    ));
  }

  async function hoverElement(selector: ElementFinder): Promise<void> {
    await browser.actions().mouseMove(selector).perform();
  }

  async function selectTheme(theme: string, mode: string): Promise<void> {
    currentTheme = theme;
    currentThemeMode = mode;

    return SkyVisualThemeSelector.selectTheme(theme, mode);
  }

  function getScreenshotName(name: string): string {
    if (currentTheme) {
      name += '-' + currentTheme;
    }

    if (currentThemeMode) {
      name += '-' + currentThemeMode;
    }

    return name;
  }

  function runTests(): void {
    it('should match previous checkbox icon group screenshot', async (done) => {
      expect('#screenshot-checkbox-icon-group').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('checkbox-icon-group')
      });
    });

    it('should match previous checkbox icon group screenshot while hovering', async (done) => {
      await hoverElement(getLastCheckbox());
      expect('#screenshot-checkbox-icon-group').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('checkbox-icon-group-hover')
      });
    });

    it('should match previous checkbox icon group screenshot while focused', async (done) => {
      await getLastCheckbox().click();
      await SkyHostBrowser.moveCursorOffScreen();
      expect('#screenshot-checkbox-icon-group').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('checkbox-icon-group-focus')
      });
    });

    it('should match previous checkbox icon group screenshot while disabled', async (done) => {
      expect('#screenshot-checkbox-icon-group-disabled').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('checkbox-icon-group-disabled')
      });
    });

    it('should match previous radio icon group screenshot', async (done) => {
      expect('#screenshot-radio-icon-group').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('radio-icon-group')
      });
    });

    it('should match previous radio icon group screenshot while hovering', async (done) => {
      await hoverElement(getLastRadioButton());
      expect('#screenshot-radio-icon-group').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('radio-icon-group-hover')
      });
    });

    it('should match previous radio icon group screenshot while focused', async (done) => {
      await getLastRadioButton().click();
      await SkyHostBrowser.moveCursorOffScreen();
      expect('#screenshot-radio-icon-group').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('radio-icon-group-focus')
      });
    });

    it('should match previous radio icon group screenshot while disabled', async (done) => {
      expect('#screenshot-radio-icon-group-disabled').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('radio-icon-group-disabled')
      });
    });
  }

  beforeEach(async () => {
    await SkyHostBrowser.get('visual/icon-group-controls');
    await SkyHostBrowser.setWindowBreakpoint('lg');
    currentTheme = undefined;
    currentThemeMode = undefined;
  });

  runTests();

  describe('when modern theme', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'light');
    });

    runTests();
  });

  describe('when modern theme in dark mode', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'dark');
    });

    runTests();
  });

});
