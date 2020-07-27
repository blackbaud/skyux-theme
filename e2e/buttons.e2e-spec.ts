import {
  browser,
  by,
  element
} from 'protractor';

import {
  expect,
  SkyHostBrowser,
  SkyVisualThemeSelector
} from '@skyux-sdk/e2e';

import {
  ThemePlatformHelper
} from './utils/theme-platform-utils';

describe('Buttons', () => {
  let currentTheme: string;
  let currentThemeMode: string;
  const defaultStateSelector = '#screenshot-buttons-default-state';
  const disabledStateSelector = '#screenshot-buttons-disabled-state';

  //#region helpers
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

  async function hoverMouseOverSelector(selector: string): Promise<any> {
    return browser.actions()
      .mouseMove(element(by.css(selector)))
      .perform();
  }

  async function scrollToElement(selector: string): Promise<void> {
    return SkyHostBrowser.scrollTo(selector);
  }

  async function validateButton(
    done: DoneFn,
    selector: string,
    screenshotName: string,
    hover: boolean = false
  ): Promise<void> {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    await scrollToElement(selector);

    if (hover) {
      await hoverMouseOverSelector(selector);
    }

    expect(selector).toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName(screenshotName)
    });
  }

  function validateAllButtons () {
    // .sky-btn-default
    it('should match screenshot for default button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-default`, 'btn-default');
    });

    it('should match screenshot when hovering on default button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-default`, 'btn-default-hover', true);
    });

    it('should match screenshot for disabled default button', (done) => {
      validateButton(done, `${disabledStateSelector} .sky-btn-default`, 'btn-default-disabled');
    });

    // .sky-btn-primary
    it('should match screenshot for default button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-primary`, 'btn-primary');
    });

    it('should match screenshot when hovering on default button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-primary`, 'btn-primary-hover', true);
    });

    it('should match screenshot for disabled default button', (done) => {
      validateButton(done, `${disabledStateSelector} .sky-btn-primary`, 'btn-primary-disabled');
    });

    // .sky-btn-danger
    it('should match screenshot for default button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-danger`, 'btn-danger');
    });

    it('should match screenshot when hovering on default button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-danger`, 'btn-danger-hover', true);
    });

    it('should match screenshot for disabled default button', (done) => {
      validateButton(done, `${disabledStateSelector} .sky-btn-danger`, 'btn-danger-disabled');
    });

    // .sky-btn-link
    it('should match screenshot for default button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-link`, 'btn-link');
    });

    it('should match screenshot when hovering on default button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-link`, 'btn-link-hover', true);
    });

    it('should match screenshot for disabled default button', (done) => {
      validateButton(done, `${disabledStateSelector} .sky-btn-link`, 'btn-link-disabled');
    });

    // .sky-btn-borderless
    it('should match screenshot for default button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-borderless`, 'btn-borderless');
    });

    it('should match screenshot when hovering on default button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-borderless`, 'btn-borderless-hover', true);
    });

    it('should match screenshot for disabled default button', (done) => {
      validateButton(done, `${disabledStateSelector} .sky-btn-borderless`, 'btn-borderless-disabled');
    });

    // a.sky-btn
    it('should match screenshot for anchor button', (done) => {
      validateButton(done, `${defaultStateSelector} a.sky-btn-primary`, 'btn-anchor');
    });

    it('should match screenshot when hovering on anchor button', (done) => {
      validateButton(done, `${defaultStateSelector} a.sky-btn-primary`, 'btn-anchor-hover', true);
    });

    it('should match screenshot for disabled anchor button', (done) => {
      validateButton(done, `${disabledStateSelector} a.sky-btn-primary`, 'btn-anchor-disabled');
    });

    // .sky-btn-icon
    it('should match screenshot for icon button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-icon`, 'btn-icon');
    });

    it('should match screenshot when hovering on icon button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-icon`, 'btn-icon-hover', true);
    });

    it('should match screenshot for disabled icon button', (done) => {
      validateButton(done, `${disabledStateSelector} .sky-btn-icon`, 'btn-icon-disabled');
    });

    // .sky-btn-link-inline
    it('should match screenshot for inline link button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-link-inline`, 'btn-link-inline');
    });

    it('should match screenshot when hovering on inline link button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-link-inline`, 'btn-link-inline-hover', true);
    });

    it('should match screenshot for disabled inline link button', (done) => {
      validateButton(done, `${disabledStateSelector} .sky-btn-link-inline`, 'btn-link-inline-disabled');
    });

    // .sky-btn-borderless-inline
    it('should match screenshot for borderless inline button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-borderless-inline`, 'btn-borderless-inline');
    });

    it('should match screenshot when hovering on borderless inline button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-btn-borderless-inline`, 'btn-borderless-inline-hover', true);
    });

    it('should match screenshot for disabled borderless inline button', (done) => {
      validateButton(done, `${disabledStateSelector} .sky-btn-borderless-inline`, 'btn-borderless-inline-disabled');
    });

    // .sky-input-group-btn
    it('should match screenshot for input group button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-input-group-btn`, 'btn-input-group');
    });

    it('should match screenshot when hovering on input group button', (done) => {
      validateButton(done, `${defaultStateSelector} .sky-input-group-btn`, 'btn-input-group-hover', true);
    });

    it('should match screenshot for disabled input group button', (done) => {
      validateButton(done, `${disabledStateSelector} .sky-input-group-btn`, 'btn-input-group-disabled');
    });
  }
  //#endregion

  beforeEach(async () => {
    currentTheme = undefined;
    currentThemeMode = undefined;

    await SkyHostBrowser.get('visual/buttons');
    await SkyHostBrowser.setWindowBreakpoint('md');
  });

  validateAllButtons();

  describe('when modern theme', () => {

    beforeEach(async () => {
      await selectTheme('modern', 'light');

      validateAllButtons();
    });

    describe('when modern theme in dark mode', () => {

      beforeEach(async () => {
        await selectTheme('modern', 'dark');

        validateAllButtons();
      });

    });

  });

});
