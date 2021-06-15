import {
  Directive,
  Optional
} from '@angular/core';

import {
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';

import {
  SkyTheme
} from './theme';

import {
  SkyThemeMode
} from './theme-mode';

import {
  SkyThemeSettings
} from './theme-settings';

import {
  SkyThemeService
} from './theme.service';

const defaultTheme = new SkyThemeSettings(
  SkyTheme.presets.default,
  SkyThemeMode.presets.light
);

@Directive({
  selector: '[skyTheme]'
})
export class SkyThemeDirective implements OnInit, OnDestroy {

  @Input()
  public set skyTheme(value: SkyThemeSettings) {
    this._skyTheme = value || defaultTheme;

    if (this.initialized) {
      this.themeSvc.setTheme(this.skyTheme);
    }
  }

  public get skyTheme(): SkyThemeSettings {
    return this._skyTheme;
  }

  private initialized: boolean;

  private _skyTheme = defaultTheme;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    @Optional() private themeSvc?: SkyThemeService
  ) { }

  public ngOnInit(): void {
    if (this.themeSvc) {
      this.themeSvc.init(
        this.elRef.nativeElement,
        this.renderer,
        this.skyTheme
      );

      this.initialized = true;
    }
  }

  public ngOnDestroy(): void {
    if (this.themeSvc) {
      this.themeSvc.destroy();
    }
  }

}
