/**
 * Defines properties of a SKY UX theme mode.
 */
export class SkyThemeModeConfig {

  /**
   * The preset themes available in SKY UX.
   */
  public static readonly presets = {
    light: new SkyThemeModeConfig(
      'light',
      'sky-theme-mode-light'
    ),
    dark: new SkyThemeModeConfig(
      'dark',
      'sky-theme-mode-dark'
    )
  };

  /**
   * Creates a new theme mode.
   * @param name The name of the theme mode.
   * @param hostClass The class on the host element which child components should reference when
   * adusting for a specified theme mode.
   */
  constructor(
    public readonly name: string,
    public readonly hostClass: string
  ) { }

}
