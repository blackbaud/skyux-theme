import {
  SkyThemeModeConfig
} from './theme-mode-config';

import {
  SkyThemeConfig
} from './theme-config';

/**
 * Specifies the theme and mode to be applied to a host element.
 */
export class SkyThemeSettings {

  /**
   * Creates a new SkyThemeSettings instance.
   * @param config The theme configuration.
   * @param mode The theme mode.
   */
  constructor(
    public readonly config: SkyThemeConfig,
    public readonly mode: SkyThemeModeConfig
  ) { }

}
