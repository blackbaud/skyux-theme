import {
  ChangeDetectorRef,
  Directive,
  DoCheck,
  Input,
  OnDestroy,
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

/**
 * Component that works like `ngIf` to show markup for matching theme.
 *
 * If the directive is within a `skyTheme` directive, it uses settings from that directive.
 */
@Directive({
  selector: '[skyThemeIf]'
})
export class SkyThemeIfDirective implements DoCheck, OnDestroy {
  /**
   * A string that should match the name of a theme, `'default'` or `'modern'`.
   *
   * @param value
   */
  @Input()
  public set skyThemeIf(value: 'default' | 'modern') {
    this.context = value;
    this.updateShouldHaveView();
  }

  private set themeSettings(settings: SkyThemeSettings) {
    this.currentTheme = settings;
    this.updateShouldHaveView();
  }

  private context: string;
  private currentTheme: SkyThemeSettings | undefined;
  private ngUnsubscribe = new Subject();
  private hasView = false;
  private shouldHaveView = false;

  constructor(
    private themeSvc: SkyThemeService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private changeDetector: ChangeDetectorRef
  ) {
    this.themeSvc.settingsChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(settingsChange => {
        this.themeSettings = settingsChange.currentSettings;
      });
  }

  public ngDoCheck(): void {
    if (this.shouldHaveView !== this.hasView) {
      this.updateView();
    }
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private updateShouldHaveView() {
    this.shouldHaveView = this.context && this.currentTheme?.theme.name === this.context;
  }

  private updateView(): void {
    if (this.shouldHaveView && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
      this.changeDetector.detectChanges();
    } else if (!this.shouldHaveView && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
