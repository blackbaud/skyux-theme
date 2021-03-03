import {
  Directive,
  Host,
  Input,
  OnDestroy,
  Optional,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

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

import {
  SkyThemeDirective
} from './theme.directive';

/**
 * Component that works like `ngIf` to show markup for matching theme.
 *
 * If the directive is within a `skyTheme` directive, it uses settings from that directive.
 */
@Directive({
  selector: '[skyThemeIf]'
})
export class SkyThemeIfDirective implements OnDestroy {
  private context: string;
  private currentTheme: SkyThemeSettings | undefined;
  private ngUnsubscribe = new Subject();
  private hasView: boolean = false;

  constructor(
    @Optional() @Host() public skyTheme: SkyThemeDirective,
    private themeSvc: SkyThemeService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    if (skyTheme) {
      this.themeSettings = skyTheme.skyTheme;
    }
    this.themeSvc.settingsChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(settingsChange => {
        this.themeSettings = settingsChange.currentSettings;
      });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  /**
   * A string that should match the name of a theme, such as `'default'` or `'modern'`.
   *
   * @param themeName
   */
  @Input()
  set skyThemeIf(themeName: string) {
    this.context = themeName.toLowerCase();
    this.updateView();
  }

  private set themeSettings(settings: SkyThemeSettings) {
    this.currentTheme = settings;
    this.updateView();
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
