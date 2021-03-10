import {
  AfterContentInit,
  Directive,
  DoCheck,
  EmbeddedViewRef,
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

import {
  SkyThemeSettingsChange
} from './theme-settings-change';

/**
 * Component that works like `ngIf` to show markup for matching theme.
 *
 * If the directive is within a `skyTheme` directive, it uses settings from that directive.
 */
@Directive({
  selector: '[skyThemeIf]'
})
export class SkyThemeIfDirective implements AfterContentInit, DoCheck, OnDestroy {
  /**
   * A string that should match the name of a theme, `'default'` or `'modern'`.
   */
  @Input()
  public skyThemeIf: 'default' | 'modern';

  private currentTheme: SkyThemeSettings | undefined;
  private embeddedView: EmbeddedViewRef<any> | undefined;
  private ngUnsubscribe = new Subject();
  private previousCondition = false;

  constructor(
    private themeSvc: SkyThemeService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  public ngAfterContentInit(): void {
    this.themeSvc.settingsChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((settingsChange: SkyThemeSettingsChange) => {
        this.currentTheme = settingsChange.currentSettings;
      });
  }

  public ngDoCheck(): void {
    this.updateView();
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private updateView(): void {
    const condition = this.skyThemeIf && this.currentTheme?.theme.name === this.skyThemeIf;
    if (condition !== this.previousCondition) {
      this.previousCondition = condition;
      if (condition && !this.embeddedView) {
        this.embeddedView = this.templateRef.createEmbeddedView({});
        this.viewContainer.clear();
        this.viewContainer.insert(this.embeddedView);
      } else if (!condition && this.embeddedView) {
        this.viewContainer.clear();
        this.embeddedView.destroy();
        this.embeddedView = undefined;
      }
    }
  }
}
