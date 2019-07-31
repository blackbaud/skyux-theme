import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Fonts', () => {

  beforeEach(() => {
    SkyHostBrowser.get('visual/fonts');
    SkyHostBrowser.setWindowBreakpoint('xs');
  });

  it('should match fonts screenshot', (done) => {
    expect('#screenshot-fonts').toMatchBaselineScreenshot(done, {
      screenshotName: 'fonts'
    });
  });

});
