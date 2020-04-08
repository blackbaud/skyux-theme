import {
  SkyThemeModeConfig
} from './theme-mode-config';

/**
 * Defines properties of a SKY UX theme.
 */
export class SkyThemeConfig {

  /**
   * The preset themes available in SKY UX.
   */
  public static readonly presets = {
    default: new SkyThemeConfig(
      'default',
      'sky-theme-default',
      [
        SkyThemeModeConfig.presets.light
      ]
    ),
    modern: new SkyThemeConfig(
      'modern',
      'sky-theme-modern',
      [
        SkyThemeModeConfig.presets.light,
        SkyThemeModeConfig.presets.dark
      ]
    )
  };

  /**
   * Creates a new theme.
   * @param name The name of the theme.
   * @param hostClass The class on the host element which child components should reference when
   * adusting for a specified theme.
   * @param supportsDarkMode A flag indicating whether the theme supports dark mode.
   */
  constructor(
    public readonly name: string,
    public readonly hostClass: string,
    public readonly supportedModes: SkyThemeModeConfig[]
  ) { }

}
