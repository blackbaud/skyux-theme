
import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Fonts', () => {

  beforeEach(() => {
    SkyHostBrowser.get('visual/fonts');
    SkyHostBrowser.setWindowBreakpoint('md');
  });

  it('should match baseline screenshot', (done) => {
    expect('#screenshot-fonts')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'fonts'
      });
  });

});
