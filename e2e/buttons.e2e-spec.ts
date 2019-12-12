import {
  browser,
  by,
  element
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Buttons', () => {
  function hoverMouseOverSelector(selector: string): any {
    return browser.actions()
      .mouseMove(element(by.css(`#screenshot-buttons-default-state ${selector}`)))
      .perform();
  }

  beforeEach(() => {
    SkyHostBrowser.get('visual/buttons');
    SkyHostBrowser.setWindowBreakpoint('md');
  });

  it('should match default state screenshot', (done) => {
    expect('#screenshot-buttons-default-state')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'default-state'
      });
  });

  it('should match disabled state screenshot', (done) => {
    expect('#screenshot-buttons-disabled-state')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'disabled-state'
      });
  });

  it('should match the baseline screenshot while hovering a primary button', function (done) {
    hoverMouseOverSelector('.sky-btn-primary').then(() => {
      expect('#screenshot-buttons-default-state').toMatchBaselineScreenshot(done, {
        screenshotName: 'btn-primary-hover'
      });
    });
  });

  it('should match the baseline screenshot while hovering a danger button', function (done) {
    hoverMouseOverSelector('.sky-btn-danger').then(() => {
      expect('#screenshot-buttons-default-state').toMatchBaselineScreenshot(done, {
        screenshotName: 'btn-danger-hover'
      });
    });
  });

  it('should match the baseline screenshot while hovering a default button', function (done) {
    hoverMouseOverSelector('.sky-btn-default').then(() => {
      expect('#screenshot-buttons-default-state').toMatchBaselineScreenshot(done, {
        screenshotName: 'btn-default-hover'
      });
    });
  });

  it('should match the baseline screenshot while hovering a link button', function (done) {
    hoverMouseOverSelector('.sky-btn-link').then(() => {
      expect('#screenshot-buttons-default-state').toMatchBaselineScreenshot(done, {
        screenshotName: 'btn-link-hover'
      });
    });
  });

  it('should match the baseline screenshot while hovering an inline link button', function (done) {
    hoverMouseOverSelector('.sky-btn-link-inline').then(() => {
      expect('#screenshot-buttons-default-state').toMatchBaselineScreenshot(done, {
        screenshotName: 'btn-link-inline-hover'
      });
    });
  });

  it('should match the baseline screenshot while hovering an anchor button', function (done) {
    hoverMouseOverSelector('a.sky-btn').then(() => {
      expect('#screenshot-buttons-default-state').toMatchBaselineScreenshot(done, {
        screenshotName: 'anchor-btn-hover'
      });
    });
  });
});
