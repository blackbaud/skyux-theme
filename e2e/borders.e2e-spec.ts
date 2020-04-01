import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

import {
  ThemePlatformHelper
} from './utils/theme-platform-utils';

describe('Borders', () => {

  beforeEach(() => {
    SkyHostBrowser.get('visual/borders');
    SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should match the previous screenshot', (done) => {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    expect('#sky-borders-demo')
      .toMatchBaselineScreenshot(done, {
        screenshotName: 'borders'
      });
  });

});
