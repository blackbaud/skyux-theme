import {
  ChangeDetectorRef,
  Directive,
  EmbeddedViewRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import {
  interval,
  ReplaySubject,
  Subject
} from 'rxjs';

import {
  debounce,
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
export class SkyThemeIfDirective implements OnInit, OnDestroy {
  /**
   * A string that should match the name of a theme, `'default'` or `'modern'`.
   */
  @Input()
  public set skyThemeIf(value: 'default' | 'modern') {
    this.context = value;
    this.updates?.next();
  }

  private currentTheme: SkyThemeSettings | undefined;
  private context: 'default' | 'modern';
  private embeddedView: EmbeddedViewRef<any> | undefined;
  private ngUnsubscribe = new Subject();
  private updates: ReplaySubject<undefined>;

  constructor(
    private themeSvc: SkyThemeService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private changeDetector: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.updates = new ReplaySubject(1, 1);
    this.updates.asObservable()
      .pipe(debounce(() => interval(10)))
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.updateView());
    this.themeSvc.settingsChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((settingsChange: SkyThemeSettingsChange) => {
        this.currentTheme = settingsChange.currentSettings;
        this.updates.next();
      });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public updateView() {
    const condition = this.context && this.currentTheme?.theme.name === this.context;
    if (condition && this.viewContainer.length === 0) {
      this.embeddedView = this.viewContainer.createEmbeddedView(this.templateRef);
      this.changeDetector.detectChanges();
    } else if (!condition && this.embeddedView) {
      this.viewContainer.clear();
      this.embeddedView.destroy();
      this.embeddedView = undefined;
    }
  }
}
