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
    await SkyHostBrowser.scrollTo('#screenshot-buttons-default-state');

    return browser.actions()
      .mouseMove(element(by.css(`#screenshot-buttons-default-state ${selector}`)))
      .perform();
  }

  async function scrollToDefaultState(): Promise<void> {
    return SkyHostBrowser.scrollTo('#screenshot-buttons-default-state');
  }

  async function validateDefaultState(done: DoneFn): Promise<void> {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    await scrollToDefaultState();

    expect('#screenshot-buttons-default-state')
      .toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('btn-default-state')
      });
  }

  async function validateDisabledState(done: DoneFn): Promise<void> {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    await SkyHostBrowser.scrollTo('#screenshot-buttons-disabled-state');

    expect('#screenshot-buttons-disabled-state')
      .toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('btn-disabled-state')
      });
  }

  async function validatePrimaryHover(done: DoneFn): Promise<void> {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    await scrollToDefaultState();

    await hoverMouseOverSelector('.sky-btn-primary');

    expect('#screenshot-buttons-default-state').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('btn-primary-hover')
    });
  }

  async function validateDangerHover(done: DoneFn): Promise<void> {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    await scrollToDefaultState();

    await hoverMouseOverSelector('.sky-btn-danger');

    expect('#screenshot-buttons-default-state').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('btn-danger-hover')
    });
  }

  async function validateDefaultHover(done: DoneFn): Promise<void> {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    await scrollToDefaultState();

    await hoverMouseOverSelector('.sky-btn-default');

    expect('#screenshot-buttons-default-state').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('btn-default-hover')
    });
  }

  async function validateLinkHover(done: DoneFn): Promise<void> {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    await scrollToDefaultState();

    await hoverMouseOverSelector('.sky-btn-link');

    expect('#screenshot-buttons-default-state').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('btn-link-hover')
    });
  }

  async function validateLinkInlineHover(done: DoneFn): Promise<void> {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    await scrollToDefaultState();

    await hoverMouseOverSelector('.sky-btn-link-inline');

    expect('#screenshot-buttons-default-state').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('btn-link-inline-hover')
    });
  }

  async function validateBorderlessHover(done: DoneFn): Promise<void> {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    await scrollToDefaultState();

    await hoverMouseOverSelector('.sky-btn-borderless');

    expect('#screenshot-buttons-default-state').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('btn-link-borderless-hover')
    });
  }

  async function validateBorderlessInlineHover(done: DoneFn): Promise<void> {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    await scrollToDefaultState();

    await hoverMouseOverSelector('.sky-btn-borderless-inline');

    expect('#screenshot-buttons-default-state').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('btn-link-borderless-inline-hover')
    });
  }

  async function validateAnchorHover(done: DoneFn): Promise<void> {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    await scrollToDefaultState();

    await hoverMouseOverSelector('a.sky-btn');

    expect('#screenshot-buttons-default-state').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('btn-anchor-hover')
    });
  }

  beforeEach(async () => {
    currentTheme = undefined;
    currentThemeMode = undefined;

    await SkyHostBrowser.get('visual/buttons');
    await SkyHostBrowser.setWindowBreakpoint('md');
  });

  it('should match default state screenshot', (done) => {
    validateDefaultState(done);
  });

  it('should match disabled state screenshot', (done) => {
    validateDisabledState(done);
  });

  it('should match the baseline screenshot while hovering a primary button', (done) => {
    validatePrimaryHover(done);
  });

  it('should match the baseline screenshot while hovering a danger button', (done) => {
    validateDangerHover(done);
  });

  it('should match the baseline screenshot while hovering a default button', (done) => {
    validateDefaultHover(done);
  });

  it('should match the baseline screenshot while hovering a link button', (done) => {
    validateLinkHover(done);
  });

  it('should match the baseline screenshot while hovering an inline link button', (done) => {
    validateLinkInlineHover(done);
  });

  it('should match the baseline screenshot while hovering a borderless button', (done) => {
    validateBorderlessHover(done);
  });

  it('should match the baseline screenshot while hovering a borderless inline button', (done) => {
    validateBorderlessInlineHover(done);
  });

  it('should match the baseline screenshot while hovering an anchor button', (done) => {
    validateAnchorHover(done);
  });

  describe('when modern theme', () => {

    beforeEach(async () => {
      await selectTheme('modern', 'light');
    });

    it('should match default state screenshot', (done) => {
      validateDefaultState(done);
    });

    it('should match disabled state screenshot', (done) => {
      validateDisabledState(done);
    });

    it('should match the baseline screenshot while hovering a primary button', (done) => {
      validatePrimaryHover(done);
    });

    it('should match the baseline screenshot while hovering a danger button', (done) => {
      validateDangerHover(done);
    });

    it('should match the baseline screenshot while hovering a default button', (done) => {
      validateDefaultHover(done);
    });

    it('should match the baseline screenshot while hovering a link button', (done) => {
      validateLinkHover(done);
    });

    it('should match the baseline screenshot while hovering an inline link button', (done) => {
      validateLinkInlineHover(done);
    });

    it('should match the baseline screenshot while hovering a borderless button', (done) => {
      validateBorderlessHover(done);
    });

    it('should match the baseline screenshot while hovering a borderless inline button', (done) => {
      validateBorderlessInlineHover(done);
    });

    it('should match the baseline screenshot while hovering an anchor button', (done) => {
      validateAnchorHover(done);
    });

    describe('when modern theme in dark mode', () => {

      beforeEach(async () => {
        await selectTheme('modern', 'dark');
      });

      it('should match default state screenshot', (done) => {
        validateDefaultState(done);
      });

      it('should match disabled state screenshot', (done) => {
        validateDisabledState(done);
      });

      it('should match the baseline screenshot while hovering a primary button', (done) => {
        validatePrimaryHover(done);
      });

      it('should match the baseline screenshot while hovering a danger button', (done) => {
        validateDangerHover(done);
      });

      it('should match the baseline screenshot while hovering a default button', (done) => {
        validateDefaultHover(done);
      });

      it('should match the baseline screenshot while hovering a link button', (done) => {
        validateLinkHover(done);
      });

      it('should match the baseline screenshot while hovering an inline link button', (done) => {
        validateLinkInlineHover(done);
      });

      it('should match the baseline screenshot while hovering a borderless button', (done) => {
        validateBorderlessHover(done);
      });

      it('should match the baseline screenshot while hovering a borderless inline button', (done) => {
        validateBorderlessInlineHover(done);
      });

      it('should match the baseline screenshot while hovering an anchor button', (done) => {
        validateAnchorHover(done);
      });

    });

  });

});
