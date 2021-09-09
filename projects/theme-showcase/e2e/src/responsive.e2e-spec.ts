import {
  by,
  element
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Responsive mixins', () => {

  beforeEach(async () => {
    await SkyHostBrowser.get('visual/responsive');
    await SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should match screenshot at lg screen size and xs container', async (done) => {
    await SkyHostBrowser.scrollTo('#xs-toggle');
    await element(by.css('#xs-toggle')).click();
    await SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-lg-screen-xs-container'
      });
  });

  it('should match screenshot at lg screen size and sm container', async (done) => {
    await SkyHostBrowser.scrollTo('#sm-toggle');
    await element(by.css('#sm-toggle')).click();
    await SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-lg-screen-sm-container'
      });
  });

  it('should match screenshot at lg screen size and md container', async (done) => {
    await SkyHostBrowser.scrollTo('#md-toggle');
    await element(by.css('#md-toggle')).click();
    await SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-lg-screen-md-container'
      });
  });

  it('should match screenshot at lg screen size and lg container', async (done) => {
    await SkyHostBrowser.scrollTo('#lg-toggle');
    await element(by.css('#lg-toggle')).click();
    await SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-lg-screen-lg-container'
      });
  });

  it('should match screenshot at xs screen size and xs container', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await SkyHostBrowser.scrollTo('#xs-toggle');
    await element(by.css('#xs-toggle')).click();
    await SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-xs-screen-xs-container'
      });
  });

  it('should match screenshot at xs screen size and sm container', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await SkyHostBrowser.scrollTo('#sm-toggle');
    await element(by.css('#sm-toggle')).click();
    await SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-xs-screen-sm-container'
      });
  });

  it('should match screenshot at xs screen size and md container', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await SkyHostBrowser.scrollTo('#md-toggle');
    await element(by.css('#md-toggle')).click();
    await SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-xs-screen-md-container'
      });
  });

  it('should match screenshot at xs screen size and lg container', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await SkyHostBrowser.scrollTo('#lg-toggle');
    await element(by.css('#lg-toggle')).click();
    await SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-xs-screen-lg-container'
      });
  });

});
