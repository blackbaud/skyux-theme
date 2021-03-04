import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

import {
  SkyThemeModule
} from '../theme.module';

import {
  SkyThemeIfTestComponent
} from './fixtures/theme-if-test.component';

import {
  SkyThemeSettings
} from './theme-settings';

import {
  SkyTheme
} from './theme';

import {
  SkyThemeMode
} from './theme-mode';

import {
  SkyThemeService
} from './theme.service';

describe('ThemeIf directive', () => {
  let fixture: ComponentFixture<SkyThemeIfTestComponent>;
  const defaultThemeSettings = new SkyThemeSettings(SkyTheme.presets.default, SkyThemeMode.presets.light);
  const modernThemeSettings = new SkyThemeSettings(SkyTheme.presets.modern, SkyThemeMode.presets.dark);
  let themeService: SkyThemeService;

  beforeEach(() => {
    themeService = new SkyThemeService();
    TestBed.configureTestingModule({
      declarations: [
        SkyThemeIfTestComponent
      ],
      imports: [
        SkyThemeModule
      ],
      providers: [
        { provide: SkyThemeService, useValue: themeService }
      ]
    });
    fixture = TestBed.createComponent(SkyThemeIfTestComponent);
  });

  it('should display nothing if no theme is set', () => {
    expect(fixture.debugElement.nativeElement.querySelectorAll('.sky-theme-if-test').length).toBe(0);
  });

  it('should work with the default theme', async () => {
    themeService.setTheme(defaultThemeSettings);
    return testForElementShowing('default theme');
  });

  it('should work with the modern theme', async () => {
    themeService.setTheme(modernThemeSettings);
    return testForElementShowing('modern theme');
  });

  // Test the scenario where settings change and previously displayed elements need to be hidden.
  it('should reflect theme changes', async () => {
    themeService.setTheme(defaultThemeSettings);
    await testForElementShowing('default theme');
    themeService.setTheme(modernThemeSettings);
    return testForElementShowing('modern theme');
  });

  // Test the scenario where `skyTheme` directive sets a theme and those settings are inherited.
  it('should work when wrapped in Theme directive', async () => {
    await testForWrappedElementShowing('wrapped in default theme');
    fixture.componentInstance.useModernTheme();
    return testForWrappedElementShowing('wrapped in modern theme');
  });

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
