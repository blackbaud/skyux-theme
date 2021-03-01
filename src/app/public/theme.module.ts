import {
  NgModule
} from '@angular/core';

import {
  SkyAppStyleLoader
} from './style-loader';

import {
  SkyAppViewportService
} from './viewport.service';

import {
  SkyThemeDirective
} from './theming/theme.directive';

import {
  SkyThemeIfDirective
} from './theming/theme-if.directive';

@NgModule({
  declarations: [
    SkyThemeDirective,
    SkyThemeIfDirective
  ],
  providers: [
    SkyAppStyleLoader,
    SkyAppViewportService
  ],
  exports: [
    SkyThemeDirective,
    SkyThemeIfDirective
  ]
})
export class SkyThemeModule { }
