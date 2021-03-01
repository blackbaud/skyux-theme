import {
  Component
} from '@angular/core';

import {
  SkyThemeService
} from '../theme.service';

@Component({
  selector: 'app-theme-if-test',
  templateUrl: './theme-if-test.component.html'
})
export class SkyThemeIfTestComponent {
  constructor(
    private themeSvc: SkyThemeService
  ) {
  }

  public get themeService(): SkyThemeService {
    return this.themeSvc;
  }
}
