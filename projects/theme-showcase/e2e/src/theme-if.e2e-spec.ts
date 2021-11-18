import { browser } from 'protractor';

import { expect, SkyHostBrowser } from '@skyux-sdk/e2e';

describe('Theme if directive', () => {
  beforeEach(async () => {
    await SkyHostBrowser.get('visual/theme-if');
    await SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should match the previous screenshot when the theme changes outside of change detection', async (done) => {
    // The component switches themes inside a setTimeout(), so give it time to
    // take effect.
    await browser.sleep(100);

    expect('#sky-theme-if-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'sky-theme-if-theme-switched',
    });
  });
});
