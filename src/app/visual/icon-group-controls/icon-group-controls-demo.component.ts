import {
  Component
} from '@angular/core';

import {
  SkyThemeService,
  SkyThemeSettings
} from '@skyux/theme';

@Component({
  selector: 'app-icon-group-controls-demo',
  templateUrl: './icon-group-controls-demo.component.html'
})
export class IconGropudControlsDemoComponent {

  constructor(
    private themeSvc: SkyThemeService
  ) { }

  public themeSettingsChange(themeSettings: SkyThemeSettings): void {
    this.themeSvc.setTheme(themeSettings);
  }

}
