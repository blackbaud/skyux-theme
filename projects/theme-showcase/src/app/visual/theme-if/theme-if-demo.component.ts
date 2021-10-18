import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import {
  SkyTheme,
  SkyThemeMode,
  SkyThemeService,
  SkyThemeSettings
} from '@skyux/theme';

@Component({
  selector: 'app-theme-if-demo',
  templateUrl: './theme-if-demo.component.html',
  styleUrls: ['./theme-if-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyThemeIfDemoComponent {
  constructor(private themeSvc: SkyThemeService) {
    // Simulate the theme switching outside of a typical Angular change detection cycle.
    // This ensures change detection is run on the component with the `skyThemeIf` directive
    // applied to it when the theme changes. Success means the text passed to the
    // app-theme-if-on-push-demo component's displayText property to be displayed when
    // switching to modern theme; failure is that the display text never shows.
    setTimeout(() => {
      this.themeSvc.setTheme(new SkyThemeSettings(
        SkyTheme.presets.modern,
        SkyThemeMode.presets.light
      ));
    });
  }
}
