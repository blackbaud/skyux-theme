import {
  Component,
  OnInit
} from '@angular/core';

import {
  SkyTheme,
  SkyThemeMode,
  SkyThemeSettings
} from '../../public/public_api';

@Component({
  selector: 'app-theming-demo',
  templateUrl: './theming-demo.component.html',
  styleUrls: ['./theming-demo.component.scss']
})
export class ThemingDemoComponent implements OnInit {

  public set themeName(value: string) {
    this._themeName = value;

    this.updateThemeSettings();
  }

  public get themeName(): string {
    return this._themeName;
  }

  public section = 'conditional';

  public themeSettings: SkyThemeSettings;

  private _themeName = 'default';

  public ngOnInit() {
    this.updateThemeSettings();
  }

  private updateThemeSettings() {
    let theme: SkyTheme;
    let themeMode = SkyThemeMode.presets.light;

    switch (this.themeName) {
      case 'modern-light':
        theme = SkyTheme.presets.modern;
        break;
      case 'modern-dark':
        theme = SkyTheme.presets.modern;
        themeMode = SkyThemeMode.presets.dark;
        break;
      default:
        theme = SkyTheme.presets.default;
        break;
    }
    this.themeSettings = new SkyThemeSettings(
      theme,
      themeMode
    );
  }
}
