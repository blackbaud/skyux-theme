import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualComponent } from './visual.component';
import { SkyBordersDemoComponent } from './borders/borders-demo.component';
import { SkyButtonsDemoComponent } from './buttons/buttons-demo.component';
import { HTMLInputsDemoComponent } from './inputs/inputs-demo.component';
import { SkyResponsiveDemoComponent } from './responsive/responsive-demo.component';
import { ThemingDemoComponent } from './theming/theming-demo.component';
import { SkyValidationDemoComponent } from './validation/validation-demo.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkyE2eThemeSelectorModule } from '@skyux/e2e-client';
import { SkyCheckboxModule, SkyRadioModule } from '@skyux/forms';
import { SkyThemeModule } from '@skyux/theme';
import { SkyResponsiveContentComponent } from './responsive/responsive-content.component';
import { SwitchControlsDemoComponent } from './switch-controls/switch-controls-demo.component';
import { SkyThemeIfDemoComponent } from './theme-if/theme-if-demo.component';
import { SkyThemeIfOnPushDemoComponent } from './theme-if/theme-if-on-push-demo.component';

@NgModule({
  declarations: [
    SkyBordersDemoComponent,
    SkyButtonsDemoComponent,
    HTMLInputsDemoComponent,
    SkyResponsiveContentComponent,
    SkyResponsiveDemoComponent,
    SkyThemeIfDemoComponent,
    SkyThemeIfOnPushDemoComponent,
    SwitchControlsDemoComponent,
    ThemingDemoComponent,
    SkyValidationDemoComponent,
    VisualComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SkyCheckboxModule,
    SkyE2eThemeSelectorModule,
    SkyRadioModule,
    SkyThemeModule
  ]
})
export class VisualModule { }
