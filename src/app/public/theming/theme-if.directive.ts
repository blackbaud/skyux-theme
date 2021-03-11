import {
  AfterContentInit,
  ChangeDetectorRef,
  Directive,
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
export class SkyThemeIfDirective implements AfterContentInit, OnDestroy {
  /**
   * A string that should match the name of a theme, `'default'` or `'modern'`.
   */
  @Input()
  public set skyThemeIf(value: 'default' | 'modern') {
    this.themeCriteria = value;
    setTimeout(() => this.updateView(), 0);
  }

  private currentTheme: SkyThemeSettings | undefined;
  private themeCriteria: 'default' | 'modern';
  private embeddedView: EmbeddedViewRef<any> | undefined;
  private ngUnsubscribe = new Subject();

  constructor(
    private themeSvc: SkyThemeService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private changeDetector: ChangeDetectorRef
  ) {}

  public ngAfterContentInit(): void {
    this.themeSvc.settingsChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((settingsChange: SkyThemeSettingsChange) => {
        if (this.currentTheme?.theme.name !== settingsChange.currentSettings.theme.name) {
          this.currentTheme = settingsChange.currentSettings;
          setTimeout(() => this.updateView(), 0);
        }
      });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public updateView(): void {
    const condition = this.themeCriteria && this.currentTheme?.theme.name === this.themeCriteria;
    if (condition && !this.embeddedView) {
      this.embeddedView = this.viewContainer.createEmbeddedView(this.templateRef);
      /* istanbul ignore next */
      if (this.viewContainer.length > 1) {
        this.viewContainer.detach(0);
      }
      this.changeDetector.detectChanges();
    } else if (!condition && this.embeddedView) {
      this.viewContainer.clear();
      this.embeddedView.destroy();
      this.embeddedView = undefined;
    }
  }
}
