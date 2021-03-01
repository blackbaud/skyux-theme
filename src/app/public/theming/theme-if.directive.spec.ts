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

describe('ThemeIf directive', () => {
  let fixture: ComponentFixture<SkyThemeIfTestComponent>;
  const defaultThemeSettings = new SkyThemeSettings(SkyTheme.presets.default, SkyThemeMode.presets.light);
  const modernThemeSettings = new SkyThemeSettings(SkyTheme.presets.modern, SkyThemeMode.presets.dark);
  const getElements = (): NodeList => {
    return fixture.debugElement.nativeElement.querySelectorAll('.sky-theme-if-test');
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SkyThemeIfTestComponent
      ],
      imports: [
        SkyThemeModule
      ]
    });
    fixture = TestBed.createComponent(SkyThemeIfTestComponent);
  });

  it('should initialize the theme service with default settings', () => {
    expect(getElements().length).toBe(0);
  });

  it('should work with the default theme', () => {
    fixture.componentInstance.themeService.setTheme(defaultThemeSettings);
    fixture.detectChanges();
    const elements = getElements();
    expect(elements.length).toBe(1);
    expect((elements[0] as HTMLElement).innerText).toBe('default theme');
  });

  it('should work with the modern theme', () => {
    fixture.componentInstance.themeService.setTheme(modernThemeSettings);
    fixture.detectChanges();
    const elements = getElements();
    expect(elements.length).toBe(1);
    expect((elements[0] as HTMLElement).innerText).toBe('modern theme');
  });

  it('should reflect theme changes', () => {
    let elements: NodeList;
    for (let i = 1; i <= 2; i++) {
      fixture.componentInstance.themeService.setTheme(defaultThemeSettings);
      fixture.detectChanges();
      elements = getElements();
      expect(elements.length).toBe(1);
      expect((elements[0] as HTMLElement).innerText).toBe('default theme');
      fixture.componentInstance.themeService.setTheme(modernThemeSettings);
      fixture.detectChanges();
      elements = getElements();
      expect(elements.length).toBe(1);
      expect((elements[0] as HTMLElement).innerText).toBe('modern theme');
    }
  });
});
