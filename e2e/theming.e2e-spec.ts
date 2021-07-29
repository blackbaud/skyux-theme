import {
  browser,
  by
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

import {
  ThemePlatformHelper
} from './utils/theme-platform-utils';

describe('Theming', () => {
  let currentThemeName: string;
  let currentSection: string;

  function selectItem(selectId: string, optionValue: string): void {
    browser.findElement(by.css(`#${selectId} option[value="${optionValue}"]`)).click();
  }

  function selectTheme(themeName: string): void {
    currentThemeName = themeName;
    selectItem('themeNameSelector', themeName);
  }

  function selectSection(section: string): void {
    currentSection = section;
    selectItem('sectionSelector', section);
  }

  function validate(done: DoneFn): void {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    expect('#screenshot-theme-container')
      .toMatchBaselineScreenshot(done, {
        screenshotName: `theming-${currentSection}-${currentThemeName}`
      });
  }

  beforeEach(() => {
    SkyHostBrowser.get('visual/theming');
    SkyHostBrowser.setWindowBreakpoint('lg');
  });

  describe('when default theme', () => {
    beforeEach(() => {
      selectTheme('default');
    });

    it('box/elevation should match the previous screenshot', (done) => {
      selectSection('box-elevation');
      validate(done);
    });

    it('headers should match the previous screenshot', (done) => {
      selectSection('headers');
      validate(done);
    });

    it('margin should match the previous screenshot', (done) => {
      selectSection('margin');
      validate(done);
    });

    it('padding should match the previous screenshot', (done) => {
      selectSection('padding');
      validate(done);
    });

    it('paragraph should match the previous screenshot', (done) => {
      selectSection('paragraph');
      validate(done);
    });

    it('text should match the previous screenshot', (done) => {
      selectSection('text');
      validate(done);
    });
  });

  describe('when modern theme', () => {
    describe('in light mode', () => {
      beforeEach(() => {
        selectTheme('modern-light');
      });

      it('box/elevation should match the previous screenshot', (done) => {
        selectSection('box-elevation');
        validate(done);
      });

      it('headers should match the previous screenshot', (done) => {
        selectSection('headers');
        validate(done);
      });

      it('margin should match the previous screenshot', (done) => {
        selectSection('margin');
        validate(done);
      });

      it('padding should match the previous screenshot', (done) => {
        selectSection('padding');
        validate(done);
      });

      it('paragraph should match the previous screenshot', (done) => {
        selectSection('paragraph');
        validate(done);
      });

      it('text should match the previous screenshot', (done) => {
        selectSection('text');
        validate(done);
      });
    });

    describe('in dark mode', () => {
      beforeEach(() => {
        selectTheme('modern-dark');
      });

      it('box/elevation should match the previous screenshot', (done) => {
        selectSection('box-elevation');
        validate(done);
      });

      it('headers should match the previous screenshot', (done) => {
        selectSection('headers');
        validate(done);
      });

      it('margin should match the previous screenshot', (done) => {
        selectSection('margin');
        validate(done);
      });

      it('padding should match the previous screenshot', (done) => {
        selectSection('padding');
        validate(done);
      });

      it('paragraph should match the previous screenshot', (done) => {
        selectSection('paragraph');
        validate(done);
      });

      it('text should match the previous screenshot', (done) => {
        selectSection('text');
        validate(done);
      });
    });
  });

});
