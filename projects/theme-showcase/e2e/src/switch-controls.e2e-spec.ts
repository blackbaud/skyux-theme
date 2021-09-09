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

describe('Switch form controls', () => {
  let currentTheme: string;
  let currentThemeMode: string;

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

    // Checkboxes
    it('should match previous checkbox screenshot', async (done) => {
      expect('#screenshot-checkbox').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('checkbox')
      });
    });

    it('should match previous checkbox screenshot while hovering', async (done) => {
      const checkbox = element(by.css(
        '#screenshot-checkbox sky-checkbox:nth-child(2) .sky-switch-control'
      ));
      await hoverElement(checkbox);
      expect('#screenshot-checkbox').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('checkbox-hover')
      });
    });

    it('should match previous checkbox screenshot while focused', async (done) => {
      const checkbox = element(by.css(
        '#screenshot-checkbox sky-checkbox:nth-child(2) .sky-switch-control'
      ));
      await checkbox.click();
      expect('#screenshot-checkbox').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('checkbox-focus')
      });
    });

    // Radio
    it('should match previous radio screenshot', async (done) => {
      expect('#screenshot-radio').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('radio')
      });
    });

    it('should match previous radio screenshot while hovering', async (done) => {
      const radio = element(by.css(
        '#screenshot-radio li:nth-child(2) .sky-switch-control'
      ));
      await hoverElement(radio);
      expect('#screenshot-radio').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('radio-hover')
      });
    });

    it('should match previous radio screenshot while focused', async (done) => {
      const checkbox = element(by.css(
        '#screenshot-radio li:nth-child(2) .sky-switch-control'
      ));
      await checkbox.click();
      expect('#screenshot-radio').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('radio-focus')
      });
    });

    // Checkbox icon group
    it('should match previous checkbox icon group screenshot', async (done) => {
      expect('#screenshot-checkbox-icon-group').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('checkbox-icon-group')
      });
    });

    it('should match previous checkbox icon group screenshot while hovering', async (done) => {
      const checkbox = element(by.css(
        '#screenshot-checkbox-icon-group sky-checkbox:nth-child(2) .sky-switch-control'
      ));
      await hoverElement(checkbox);
      expect('#screenshot-checkbox-icon-group').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('checkbox-icon-group-hover')
      });
    });

    it('should match previous checkbox icon group screenshot while focused', async (done) => {
      const checkbox = element(by.css(
        '#screenshot-checkbox-icon-group sky-checkbox:nth-child(2) .sky-switch-control'
      ));
      await checkbox.click();
      await SkyHostBrowser.moveCursorOffScreen();
      expect('#screenshot-checkbox-icon-group').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('checkbox-icon-group-focus')
      });
    });

    // Radio icon group
    it('should match previous radio icon group screenshot', async (done) => {
      await SkyHostBrowser.scrollTo('#screenshot-radio-icon-group');
      expect('#screenshot-radio-icon-group').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('radio-icon-group')
      });
    });

    it('should match previous radio icon group screenshot while hovering', async (done) => {
      await SkyHostBrowser.scrollTo('#screenshot-radio-icon-group');
      const radio = element(by.css(
        '#screenshot-radio-icon-group sky-radio:nth-child(2) .sky-switch-control'
      ));
      await hoverElement(radio);
      expect('#screenshot-radio-icon-group').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('radio-icon-group-hover')
      });
    });

    it('should match previous radio icon group screenshot while focused', async (done) => {
      await SkyHostBrowser.scrollTo('#screenshot-radio-icon-group');
      const radio = element(by.css(
        '#screenshot-radio-icon-group sky-radio:nth-child(2) .sky-switch-control'
      ));
      await radio.click();
      await SkyHostBrowser.moveCursorOffScreen();
      expect('#screenshot-radio-icon-group').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('radio-icon-group-focus')
      });
    });
  }

  beforeEach(async () => {
    await SkyHostBrowser.get('visual/switch-controls');
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
