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
    SkyHostBrowser.scrollTo('#xs-toggle');
    element(by.css('#xs-toggle')).click();
    SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-lg-screen-xs-container'
      });
  });

  it('should match screenshot at lg screen size and sm container', (done) => {
    SkyHostBrowser.scrollTo('#sm-toggle');
    element(by.css('#sm-toggle')).click();
    SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-lg-screen-sm-container'
      });
  });

  it('should match screenshot at lg screen size and md container', (done) => {
    SkyHostBrowser.scrollTo('#md-toggle');
    element(by.css('#md-toggle')).click();
    SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-lg-screen-md-container'
      });
  });

  it('should match screenshot at lg screen size and lg container', (done) => {
    SkyHostBrowser.scrollTo('#lg-toggle');
    element(by.css('#lg-toggle')).click();
    SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-lg-screen-lg-container'
      });
  });

  it('should match screenshot at xs screen size and xs container', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#xs-toggle');
    element(by.css('#xs-toggle')).click();
    SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-xs-screen-xs-container'
      });
  });

  it('should match screenshot at xs screen size and sm container', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#sm-toggle');
    element(by.css('#sm-toggle')).click();
    SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-xs-screen-sm-container'
      });
  });

  it('should match screenshot at xs screen size and md container', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#md-toggle');
    element(by.css('#md-toggle')).click();
    SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-xs-screen-md-container'
      });
  });

  it('should match screenshot at xs screen size and lg container', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#lg-toggle');
    element(by.css('#lg-toggle')).click();
    SkyHostBrowser.scrollTo('#screenshot-responsive');
    expect('#screenshot-responsive')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'responsive-xs-screen-lg-container'
      });
  });

});
