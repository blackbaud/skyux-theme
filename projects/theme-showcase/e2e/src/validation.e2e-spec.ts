import {
  by,
  element
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Validation', () => {

  beforeEach(async () => {
    await SkyHostBrowser.get('visual/validation');
    await SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should match the text input required screenshot', async (done) => {
    // Click on input
    await element(by.css('#text-input input')).click();
    // Click off input
    await element(by.css('#select-input select')).click();
    expect('#text-input')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'standard-input-validation'
      });
  });

  it('should match the select input required screenshot', async (done) => {
    // Click on select
    await element(by.css('#select-input select')).click();
    // Click off select
    await element(by.css('#text-input input')).click();
    expect('#select-input')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'select-validation'
      });
  });

});
