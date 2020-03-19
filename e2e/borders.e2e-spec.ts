import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Borders', () => {

  beforeEach(() => {
    SkyHostBrowser.get('visual/borders');
    SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should match the previous screenshot', (done) => {
    expect('#sky-borders-demo')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'borders'
      });
  });

});
