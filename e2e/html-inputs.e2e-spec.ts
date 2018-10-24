import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('HTML Default Inputs (Sky Form Control)', () => {
  it('should match screenshot - group 1', (done) => {
    SkyHostBrowser.get('visual/inputs');
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#group1');
    expect('#group1').toMatchBaselineScreenshot(done, {
      screenshotName: 'html-inputs-group-1'
    });
  });

  it('should match screenshot - group 2', (done) => {
    SkyHostBrowser.get('visual/inputs');
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#group2');
    expect('#group2').toMatchBaselineScreenshot(done, {
      screenshotName: 'html-inputs-group-2'
    });
  });

  it('should match screenshot - group 3', (done) => {
    SkyHostBrowser.get('visual/inputs');
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#group3');
    expect('#group3').toMatchBaselineScreenshot(done, {
      screenshotName: 'html-inputs-group-3'
    });
  });
});
