import { browser, by } from 'protractor';

import { expect, SkyHostBrowser } from '@skyux-sdk/e2e';

describe('Theming', () => {
  let currentThemeName: string;
  let currentSection: string;

  async function selectItem(
    selectId: string,
    optionValue: string
  ): Promise<void> {
    return browser
      .findElement(by.css(`#${selectId} option[value="${optionValue}"]`))
      .click();
  }

  async function selectTheme(themeName: string): Promise<void> {
    currentThemeName = themeName;
    return selectItem('themeNameSelector', themeName);
  }

  async function selectSection(section: string): Promise<void> {
    currentSection = section;
    return selectItem('sectionSelector', section);
  }

  function validate(done: DoneFn): void {
    expect('#screenshot-theme-container').toMatchBaselineScreenshot(done, {
      screenshotName: `theming-${currentSection}-${currentThemeName}`,
    });
  }

  beforeEach(async () => {
    await SkyHostBrowser.get('visual/theming');
    await SkyHostBrowser.setWindowBreakpoint('lg');
  });

  describe('when default theme', () => {
    beforeEach(async () => {
      await selectTheme('default');
    });

    it('box/elevation should match the previous screenshot', async (done) => {
      await selectSection('box-elevation');
      validate(done);
    });

    it('headers should match the previous screenshot', async (done) => {
      await selectSection('headers');
      validate(done);
    });

    it('margin should match the previous screenshot', async (done) => {
      await selectSection('margin');
      validate(done);
    });

    it('padding should match the previous screenshot', async (done) => {
      await selectSection('padding');
      validate(done);
    });

    it('paragraph should match the previous screenshot', async (done) => {
      await selectSection('paragraph');
      validate(done);
    });

    it('text should match the previous screenshot', async (done) => {
      await selectSection('text');
      validate(done);
    });

    it('unstyled list should match the previous screenshot', async (done) => {
      await selectSection('unstyled-list');
      validate(done);
    });
  });

  describe('when modern theme', () => {
    describe('in light mode', () => {
      beforeEach(async () => {
        await selectTheme('modern-light');
      });

      it('box/elevation should match the previous screenshot', async (done) => {
        await selectSection('box-elevation');
        validate(done);
      });

      it('headers should match the previous screenshot', async (done) => {
        await selectSection('headers');
        validate(done);
      });

      it('margin should match the previous screenshot', async (done) => {
        await selectSection('margin');
        validate(done);
      });

      it('padding should match the previous screenshot', async (done) => {
        await selectSection('padding');
        validate(done);
      });

      it('paragraph should match the previous screenshot', async (done) => {
        await selectSection('paragraph');
        validate(done);
      });

      it('text should match the previous screenshot', async (done) => {
        await selectSection('text');
        validate(done);
      });

      it('unstyled list should match the previous screenshot', async (done) => {
        await selectSection('unstyled-list');
        validate(done);
      });
    });

    describe('in dark mode', () => {
      beforeEach(async () => {
        await selectTheme('modern-dark');
      });

      it('box/elevation should match the previous screenshot', async (done) => {
        await selectSection('box-elevation');
        validate(done);
      });

      it('headers should match the previous screenshot', async (done) => {
        await selectSection('headers');
        validate(done);
      });

      it('margin should match the previous screenshot', async (done) => {
        await selectSection('margin');
        validate(done);
      });

      it('padding should match the previous screenshot', async (done) => {
        await selectSection('padding');
        validate(done);
      });

      it('paragraph should match the previous screenshot', async (done) => {
        await selectSection('paragraph');
        validate(done);
      });

      it('text should match the previous screenshot', async (done) => {
        await selectSection('text');
        validate(done);
      });

      it('unstyled list should match the previous screenshot', async (done) => {
        await selectSection('unstyled-list');
        validate(done);
      });
    });
  });
});
