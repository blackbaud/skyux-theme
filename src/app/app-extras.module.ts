import {
  NgModule
} from '@angular/core';

import {
  SkyCodeModule
} from '@blackbaud/skyux-lib-code-block';

import {
  SkyMediaQueryModule
} from '@skyux/core';

import {
  SkyDocsToolsModule,
  SkyDocsToolsOptions
} from '@skyux/docs-tools';

import {
  SkyAuthHttpClientModule
} from '@skyux/http';

import {
  SkyIconModule
} from '@skyux/indicators';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkyThemeModule
} from './public/public_api';

@NgModule({
  exports: [
    SkyAppLinkModule,
    SkyAuthHttpClientModule, // Supports docs pages with `svcid` param.
    SkyCodeModule,
    SkyDocsToolsModule,
    SkyIconModule,
    SkyThemeModule,
    SkyMediaQueryModule
  ],
  providers: [
    {
      provide: SkyDocsToolsOptions,
      useValue: {
        gitRepoUrl: 'https://github.com/blackbaud/skyux-theme',
        packageName: '@skyux/theme'
      }
    }
  ]
})
export class AppExtrasModule { }
