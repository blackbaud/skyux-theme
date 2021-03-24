import {
  Directive,
  Input,
  OnDestroy,
  Optional,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import {
  SkyTheme,
  SkyThemeMode
} from '@skyux/theme';

import {
  Subject
} from 'rxjs';

import {
  takeUntil
} from 'rxjs/operators';

import {
  SkyThemeSettings
} from './theme-settings';

import {
  SkyThemeService
} from './theme.service';

/**
 * Component that works like `ngIf` to show markup for matching theme.
 *
 * If the directive is within a `skyTheme` directive, it uses settings from that directive.
 */
@Directive({
  selector: '[skyThemeIf]'
})
export class SkyThemeIfDirective implements OnDestroy {
  /**
   * A string that should match the name of a theme, `'default'` or `'modern'`.
   *
   * @param value
   */
  @Input()
  public set skyThemeIf(value: 'default' | 'modern') {
    this.context = value;
    this.updateView();
  }

  private set themeSettings(settings: SkyThemeSettings) {
    this.currentTheme = settings;
    this.updateView();
  }

  private context: string;
  private currentTheme: SkyThemeSettings | undefined;
  private ngUnsubscribe = new Subject();
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    @Optional() themeSvc: SkyThemeService,
  ) {
    if (!themeSvc) {
      this.themeSettings = new SkyThemeSettings(
        SkyTheme.presets.default,
        SkyThemeMode.presets.light
      );
    } else {
      themeSvc.settingsChange
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(settingsChange => {
          this.themeSettings = settingsChange.currentSettings;
        });
    }
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private updateView(): void {
    const condition = this.context && this.currentTheme?.theme.name === this.context;
    if (condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
