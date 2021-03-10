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
  public set skyThemeIf(value: 'default' | 'modern') {
    if (value !== this.themeCriteria) {
      this.themeCriteria = value;
      this.hasChanges = true;
      this.loaded = !!(this.currentTheme?.theme.name);
    }
  }

  private currentTheme: SkyThemeSettings | undefined;
  private themeCriteria: 'default' | 'modern';
  private embeddedView: EmbeddedViewRef<any> | undefined;
  private ngUnsubscribe = new Subject();
  private loaded = false;
  private hasChanges = false;

  constructor(
    private themeSvc: SkyThemeService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  public ngAfterContentInit(): void {
    this.themeSvc.settingsChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((settingsChange: SkyThemeSettingsChange) => {
        if (this.currentTheme?.theme.name !== settingsChange.currentSettings.theme.name) {
          this.currentTheme = settingsChange.currentSettings;
          this.hasChanges = true;
          this.loaded = !!(this.themeCriteria);
        }
      });
  }

  public ngDoCheck(): void {
    if (this.hasChanges && this.loaded) {
      this.hasChanges = false;
      this.updateView();
    }
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private updateView(): void {
    const condition = this.themeCriteria && this.currentTheme?.theme.name === this.themeCriteria;
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
