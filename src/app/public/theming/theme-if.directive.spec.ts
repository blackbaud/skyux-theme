import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  BehaviorSubject
} from 'rxjs';

import {
  expect
} from '@skyux-sdk/testing';

import {
  SkyTheme
} from './theme';

import {
  SkyThemeIfTestComponent
} from './fixtures/theme-if-test.component';

import {
  SkyThemeMode
} from './theme-mode';

import {
  SkyThemeModule
} from '../theme.module';

import {
  SkyThemeService
} from './theme.service';

import {
  SkyThemeSettings
} from './theme-settings';

import {
  SkyThemeSettingsChange
} from './theme-settings-change';

describe('ThemeIf directive', () => {
  let fixture: ComponentFixture<SkyThemeIfTestComponent>;
  const defaultThemeSettings = new SkyThemeSettings(SkyTheme.presets.default, SkyThemeMode.presets.light);
  const modernThemeSettings = new SkyThemeSettings(SkyTheme.presets.modern, SkyThemeMode.presets.dark);
  let mockThemeSvc: {
    settingsChange: BehaviorSubject<SkyThemeSettingsChange>
  };

  beforeEach(() => {
    mockThemeSvc = {
      settingsChange: new BehaviorSubject<SkyThemeSettingsChange>(
        {
          currentSettings: defaultThemeSettings,
          previousSettings: undefined
        }
      )
    };
    TestBed.configureTestingModule({
      declarations: [
        SkyThemeIfTestComponent
      ],
      imports: [
        SkyThemeModule
      ],
      providers: [
        { provide: SkyThemeService, useValue: mockThemeSvc }
      ]
    });
    fixture = TestBed.createComponent(SkyThemeIfTestComponent);
  });

  it('should display nothing if no theme is set', () => {
    expect(fixture.debugElement.nativeElement.querySelectorAll('.sky-theme-if-test').length).toBe(0);
  });

  it('should work with the default theme', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    await switchThemeSettingsTo(defaultThemeSettings);
    return testForElementShowing('default theme');
  });

  it('should work with the modern theme', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    await switchThemeSettingsTo(modernThemeSettings);
    return testForElementShowing('modern theme');
  });

  // Test the scenario where settings change and previously displayed elements need to be hidden.
  it('should reflect theme changes', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    await switchThemeSettingsTo(modernThemeSettings);
    await testForElementShowing('modern theme');
    await switchThemeSettingsTo(defaultThemeSettings);
    await testForElementShowing('default theme');
    await switchThemeSettingsTo(modernThemeSettings);
    return testForElementShowing('modern theme');
  });

  // Test the scenario where `skyTheme` directive sets a theme and those settings are inherited.
  it('should show initial theme when wrapped in Theme directive', async () => {
    fixture.detectChanges();
    await fixture.whenRenderingDone();
    fixture.componentInstance.doCheck();
    await testForWrappedElementShowing('wrapped in default theme');
  });

  // Test the scenario where `skyTheme` directive sets a theme and those settings are inherited.
  it('should show changes when wrapped in Theme directive', async () => {
    fixture.detectChanges();
    await fixture.whenRenderingDone();
    fixture.componentInstance.doCheck();
    await testForWrappedElementShowing('wrapped in default theme');
    fixture.componentInstance.useModernTheme();
    fixture.detectChanges();
    await fixture.whenRenderingDone();
    fixture.componentInstance.doCheck();
    return testForWrappedElementShowing('wrapped in modern theme');
  });

  async function switchThemeSettingsTo(themeSettings: SkyThemeSettings) {
    mockThemeSvc.settingsChange.next({
      currentSettings: themeSettings,
      previousSettings: mockThemeSvc.settingsChange.getValue().currentSettings
    });
    fixture.componentInstance.doCheck();
    return Promise.resolve();
  }

  async function testForElementShowing(expected: string) {
    fixture.detectChanges();
    await fixture.whenStable();
    const elements = fixture.debugElement.nativeElement.querySelectorAll('.sky-theme-if-test');
    expect(elements.length).toBe(1);
    expect(elements[0]).toHaveText(expected);
  }

  async function testForWrappedElementShowing(expected: string) {
    fixture.detectChanges();
    await fixture.whenStable();
    const elements = fixture.debugElement.nativeElement.querySelectorAll('.sky-theme-if-wrapped-test');
    expect(elements.length).toBe(1);
    expect(elements[0]).toHaveText(expected);
  }
});
