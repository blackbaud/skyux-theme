import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
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
export class SkyThemeIfDirective implements OnInit, OnChanges, OnDestroy {
  /**
   * A string that should match the name of a theme, `'default'` or `'modern'`.
   *
   * @param value
   */
  @Input()
  public set skyThemeIf(value: 'default' | 'modern') {
    this.context = value;
  }

  private context: string;
  private currentTheme: SkyThemeSettings | undefined;
  private embeddedView: EmbeddedViewRef<any> | undefined;
  private ngUnsubscribe = new Subject();

  constructor(
    private themeSvc: SkyThemeService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  public ngOnChanges(): void {
    this.updateView();
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public ngOnInit(): void {
    this.themeSvc.settingsChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((settingsChange: SkyThemeSettingsChange) => {
        this.currentTheme = settingsChange.currentSettings;
      });
  }

  private updateView(): void {
    const condition = this.context && this.currentTheme?.theme.name === this.context;
    if (condition && !this.embeddedView) {
      this.embeddedView = this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!condition && this.embeddedView) {
      this.viewContainer.clear();
      this.embeddedView.destroy();
      this.embeddedView = undefined;
    }
  }
}
