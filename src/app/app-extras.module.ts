import {
  NgModule
} from '@angular/core';

import {
  SkyMediaQueryModule
} from '@skyux/core';

import {
  SkyThemeModule
} from './public';

import {
  SkyAppStyleLoader
} from './public/style-loader';

@NgModule({
  exports: [
    SkyThemeModule,
    SkyMediaQueryModule
  ],
  providers: [
    SkyAppStyleLoader
  ]
})
export class AppExtrasModule { }
