import {
  Component
} from '@angular/core';

import {
  SkyThemeSettings
} from '../theme-settings';

@Component({
  selector: 'app-theme-if-test',
  templateUrl: './theme-if-test.component.html'
})
export class SkyThemeIfTestComponent {
  public themeSettings: SkyThemeSettings;
}
