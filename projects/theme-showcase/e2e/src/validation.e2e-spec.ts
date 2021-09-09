import {
  by,
  element
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

import {
  ThemePlatformHelper
} from './utils/theme-platform-utils';

describe('Validation', () => {

  beforeEach(() => {
    SkyHostBrowser.get('visual/validation');
    SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should match the text input required screenshot', (done) => {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    // Click on input
    element(by.css('#text-input input')).click();
    // Click off input
    element(by.css('#select-input select')).click();
    expect('#text-input')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'standard-input-validation'
      });
  });

  it('should match the select input required screenshot', (done) => {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    // Click on select
    element(by.css('#select-input select')).click();
    // Click off select
    element(by.css('#text-input input')).click();
    expect('#select-input')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'select-validation'
      });
  });

});
