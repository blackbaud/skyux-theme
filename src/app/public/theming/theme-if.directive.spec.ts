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
  const themeService = new SkyThemeService();
  const getElements = (): NodeList => {
    return fixture.debugElement.nativeElement.querySelectorAll('.sky-theme-if-test');
  };
  const getWrappedElements = (): NodeList => {
    return fixture.debugElement.nativeElement.querySelectorAll('.sky-theme-if-wrapped-test');
  };

  beforeEach(() => {
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
    TestBed.inject(SkyThemeService);
    fixture = TestBed.createComponent(SkyThemeIfTestComponent);
  });

  it('should initialize the theme service with default settings', () => {
    expect(getElements().length).toBe(0);
  });

  it('should work with the default theme', () => {
    themeService.setTheme(defaultThemeSettings);
    fixture.detectChanges();
    fixture.whenStable();
    const elements = getElements();
    expect(elements.length).toBe(1);
    expect((elements[0] as HTMLElement).innerText).toBe('default theme');
  });

  it('should work with the modern theme', () => {
    themeService.setTheme(modernThemeSettings);
    fixture.detectChanges();
    fixture.whenStable();
    const elements = getElements();
    expect(elements.length).toBe(1);
    expect((elements[0] as HTMLElement).innerText).toBe('modern theme');
  });

  it('should reflect theme changes', () => {
    let elements: NodeList;
    themeService.setTheme(modernThemeSettings);
    fixture.detectChanges();
    fixture.whenStable();
    elements = getElements();
    expect(elements.length).toBe(1);
    expect((elements[0] as HTMLElement).innerText).toBe('modern theme');
    themeService.setTheme(defaultThemeSettings);
    fixture.detectChanges();
    fixture.whenStable();
    elements = getElements();
    expect(elements.length).toBe(1);
    expect((elements[0] as HTMLElement).innerText).toBe('default theme');
  });

  it('should work when wrapped in Theme directive', () => {
    let elements: NodeList;

    fixture.detectChanges();
    fixture.whenStable();
    elements = getWrappedElements();
    expect(elements.length).toBe(1);
    expect((elements[0] as HTMLElement).innerText).toBe('wrapped in default theme');

    fixture.componentInstance.useModernTheme();
    fixture.detectChanges();
    fixture.whenStable();
    elements = getWrappedElements();
    expect(elements.length).toBe(1);
    expect((elements[0] as HTMLElement).innerText).toBe('wrapped in modern theme');
  });
});
