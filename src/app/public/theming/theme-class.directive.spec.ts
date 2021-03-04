import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

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

import {
  SkyThemeModule
} from '../theme.module';

import {
  SkyThemeClassTestComponent
} from './fixtures/theme-class-test.component';

describe('ThemeClass directive', () => {
  let fixture: ComponentFixture<SkyThemeClassTestComponent>;
  const defaultThemeSettings = new SkyThemeSettings(SkyTheme.presets.default, SkyThemeMode.presets.light);
  const modernThemeSettings = new SkyThemeSettings(SkyTheme.presets.modern, SkyThemeMode.presets.dark);
  let themeService: SkyThemeService;

  beforeEach(() => {
    themeService = new SkyThemeService();
    TestBed.configureTestingModule({
      declarations: [
        SkyThemeClassTestComponent
      ],
      imports: [
        SkyThemeModule
      ],
      providers: [
        { provide: SkyThemeService, useValue: themeService }
      ]
    });
    fixture = TestBed.createComponent(SkyThemeClassTestComponent);
  });

  it('should start from class and ngClass values', async () => {
    return testForElementWithClasses('sky-theme-class-test added-ng-class');
  });

  it('should work with the default theme', async () => {
    themeService.setTheme(defaultThemeSettings);
    return testForElementWithClasses('sky-theme-class-test added-ng-class example-default');
  });

  it('should work with the modern theme', async () => {
    themeService.setTheme(modernThemeSettings);
    return testForElementWithClasses('sky-theme-class-test added-ng-class example-modern');
  });

  // Test the scenario where settings change and previous classes are removed.
  it('should reflect both theme and class changes', async () => {
    themeService.setTheme(defaultThemeSettings);
    await testForElementWithClasses('sky-theme-class-test added-ng-class example-default');
    themeService.setTheme(modernThemeSettings);
    await testForElementWithClasses('sky-theme-class-test added-ng-class example-modern');
    fixture.componentInstance.exampleString = 'hello-world';
    return testForElementWithClasses('added-ng-class example-modern hello-world sky-theme-class-test');
  });

  // Test the scenario where `skyTheme` directive sets a theme and those settings are inherited.
  it('should work when wrapped in Theme directive', async () => {
    await testForWrappedElementWithClasses('sky-theme-class-wrapped-test example-default');
    fixture.componentInstance.useModernTheme();
    return testForWrappedElementWithClasses('sky-theme-class-wrapped-test example-modern');
  });

  async function testForElementWithClasses(expected: string) {
    fixture.detectChanges();
    await fixture.whenStable();
    const elements = fixture.debugElement.nativeElement.querySelectorAll('.sky-theme-class-test');
    expect(elements.length).toBe(1);
    expected.split(' ').forEach(className => expect(elements[0]).toHaveCssClass(className));
  }

  async function testForWrappedElementWithClasses(expected: string) {
    fixture.detectChanges();
    await fixture.whenStable();
    const elements = fixture.debugElement.nativeElement.querySelectorAll('.sky-theme-class-wrapped-test');
    expect(elements.length).toBe(1);
    expected.split(' ').forEach(className => expect(elements[0]).toHaveCssClass(className));
  }
});
