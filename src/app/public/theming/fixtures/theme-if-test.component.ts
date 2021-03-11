import {
  AfterContentInit,
  Component,
  QueryList,
  ViewChildren
} from '@angular/core';

import {
  SkyTheme
} from '../theme';

import {
  SkyThemeMode
} from '../theme-mode';

import {
  SkyThemeSettings
} from '../theme-settings';

import {
  SkyThemeIfDirective
} from '../theme-if.directive';

@Component({
  selector: 'app-theme-if-test',
  templateUrl: './theme-if-test.component.html'
})
export class SkyThemeIfTestComponent implements AfterContentInit {
  public themeSettings: SkyThemeSettings;
  @ViewChildren(SkyThemeIfDirective)
  private testDirectives!: QueryList<SkyThemeIfDirective>;
  public testThemeName: 'default' | 'modern' = 'default';

  public ngAfterContentInit(): void {
    this.useDefaultTheme();
  }

  public doCheck(): void {
    if (this.testDirectives?.length) {
      this.testDirectives.forEach(testDirective => {
        testDirective.updateView();
      });
    }
  }

  public useDefaultTheme(): void {
    this.themeSettings = new SkyThemeSettings(
      SkyTheme.presets.default,
      SkyThemeMode.presets.light
    );
  }

  public useModernTheme(): void {
    this.themeSettings = new SkyThemeSettings(
      SkyTheme.presets.modern,
      SkyThemeMode.presets.light
    );
  }
}
