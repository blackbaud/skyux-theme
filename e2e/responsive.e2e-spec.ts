import {
  by,
  element
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Responsive mixins', () => {

  beforeEach(() => {
    SkyHostBrowser.get('visual/responsive');
    SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should match screenshot at lg screen size and xs container', (done) => {
    element(by.css('#xs-toggle')).click();
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-lg-screen-xs-container'
      });
  });

  it('should match screenshot at lg screen size and sm container', (done) => {
    element(by.css('#sm-toggle')).click();
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-lg-screen-sm-container'
      });
  });

  it('should match screenshot at lg screen size and md container', (done) => {
    element(by.css('#md-toggle')).click();
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-lg-screen-md-container'
      });
  });

  it('should match screenshot at lg screen size and lg container', (done) => {
    element(by.css('#lg-toggle')).click();
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-lg-screen-lg-container'
      });
  });

  it('should match screenshot at xs screen size and xs container', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('#xs-toggle')).click();
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-xs-screen-xs-container'
      });
  });

  it('should match screenshot at xs screen size and sm container', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('#sm-toggle')).click();
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-xs-screen-sm-container'
      });
  });

  it('should match screenshot at xs screen size and md container', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('#md-toggle')).click();
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-xs-screen-md-container'
      });
  });

  it('should match screenshot at xs screen size and lg container', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('#lg-toggle')).click();
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-xs-screen-lg-container'
      });
  });

});
