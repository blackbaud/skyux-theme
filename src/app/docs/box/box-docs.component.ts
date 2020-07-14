import {
  Component
} from '@angular/core';

import {
  SkyTheme,
  SkyThemeMode,
  SkyThemeSettings
} from '@skyux/theme';

@Component({
  selector: 'app-box-docs',
  templateUrl: './box-docs.component.html'
})
export class BoxDocsComponent {

  public modernLightTheme = new SkyThemeSettings(
    SkyTheme.presets.modern,
    SkyThemeMode.presets.light
  );

}
