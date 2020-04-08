import {
  Injectable,
  Renderer2
} from '@angular/core';

import {
  Observable,
  ReplaySubject
} from 'rxjs';

import {
  SkyThemeSettings
} from './theme-settings';

import {
  SkyThemeSettingsChange
} from './theme-settings-change';

/**
 * Provides methods for updating and handling changes to the current theme.
 */
@Injectable()
export class SkyThemeService {

  /**
   * Notifies consumers when the current theme has changed.
   */
  public get themeChange(): Observable<SkyThemeSettingsChange> {
    return this.themeObs;
  }

  private current: SkyThemeSettings;

  private hostEl: any;

  private renderer: Renderer2;

  private theme: ReplaySubject<SkyThemeSettingsChange>;

  private themeObs: Observable<SkyThemeSettingsChange>;

  constructor() { }

  /**
   * Initializes the theme service with the specified parameters. This should only be called
   * from a host component that provides its own theme to child components.
   * @param hostEl The host element under which themed components are rendered.
   * @param renderer A Renderer2 instance for updating the host element with theme changes.
   * @param theme The initial theme.
   */
  public init(
    hostEl: any,
    renderer: Renderer2,
    theme: SkyThemeSettings
  ): void {
    this.hostEl = hostEl;
    this.renderer = renderer;

    this.theme = new ReplaySubject<SkyThemeSettingsChange>(1);
    this.themeObs = this.theme.asObservable();

    this.setTheme(theme);
  }

  /**
   * Destroys the current theme service. This should only be called from a host component that
   * provides its own theme to child components.
   */
  public destroy(): void {
    this.theme.complete();

    this.hostEl =
      this.renderer =
      undefined;
  }

  /**
   * Updates the current theme.
   * @param newTheme The new theme to apply.
   */
  public setTheme(newTheme: SkyThemeSettings): void {
    const oldTheme = this.current;

    this.applyTheme(oldTheme, newTheme);
    this.applyThemeMode(oldTheme, newTheme);

    this.theme.next({
      newTheme,
      oldTheme
    });

    this.current = newTheme;
  }

  private applyTheme(oldTheme: SkyThemeSettings, newTheme: SkyThemeSettings): void {
    const oldClass = oldTheme && oldTheme.config.hostClass;
    const newClass = newTheme.config.hostClass;

    const hostClassChanged = !oldClass || oldClass !== newClass;

    if (hostClassChanged) {
      if (oldClass) {
        this.removeHostClass(oldClass);
      }

      this.addHostClass(newClass);
    }
  }

  private applyThemeMode(oldTheme: SkyThemeSettings, newTheme: SkyThemeSettings): void {
    const oldClass = oldTheme && oldTheme.mode.hostClass;
    const newClass = newTheme.mode.hostClass;

    const hostModeClassChanged = !oldTheme || oldClass !== newClass;

    if (hostModeClassChanged) {
      if (oldClass) {
        this.removeHostClass(oldClass);
      }

      if (newTheme.config.supportedModes.indexOf(newTheme.mode) >= 0) {
        this.addHostClass(newClass);
      }
    }
  }

  private addHostClass(className: string): void {
    this.renderer.addClass(this.hostEl, className);
  }

  private removeHostClass(className: string): void {
    this.renderer.removeClass(this.hostEl, className);
  }
}
