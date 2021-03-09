import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
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
  private hasView = false;

  constructor(
    private themeSvc: SkyThemeService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  /**
   * Called from test fixture.
   *
   * @internal
   */
  public doCheck(): void {
    this.updateView();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('skyThemeIf')) {
      this.updateView();
    }
  }

  public ngOnInit(): void {
    this.themeSvc.settingsChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((settingsChange: SkyThemeSettingsChange) => {
        this.currentTheme = settingsChange.currentSettings;
      });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private updateView(): void {
    const condition = this.context && this.currentTheme?.theme.name === this.context;
    if (condition && !this.hasView) {
      this.embeddedView = this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.viewContainer.clear();
      this.embeddedView.destroy();
      this.hasView = false;
    }
  }
}
