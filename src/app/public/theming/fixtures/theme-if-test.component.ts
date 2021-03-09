import {
  Component,
  OnInit,
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
export class SkyThemeIfTestComponent implements OnInit {
  public themeSettings: SkyThemeSettings;
  @ViewChildren(SkyThemeIfDirective) testDirectives!: QueryList<SkyThemeIfDirective>;

  public doCheck(): void {
    if (this.testDirectives?.length) {
      this.testDirectives.forEach(testDirective => {
        testDirective.doCheck();
      });
    }
  }

  public ngOnInit(): void {
    this.useDefaultTheme();
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
