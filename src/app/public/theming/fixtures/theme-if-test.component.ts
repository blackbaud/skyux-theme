import {
  Component,
  OnDestroy
} from '@angular/core';

import {
  takeUntil
} from 'rxjs/operators';

import {
  Subject
} from 'rxjs';

import {
  SkyThemeSettings
} from '../theme-settings';

import {
  SkyThemeService
} from '../theme.service';

@Component({
  selector: 'app-theme-if-test',
  templateUrl: './theme-if-test.component.html'
})
export class SkyThemeIfTestComponent implements OnDestroy {
  public themeSettings: SkyThemeSettings;
  private ngUnsubscribe = new Subject();

  constructor(
    private themeSvc: SkyThemeService
  ) {
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
}
