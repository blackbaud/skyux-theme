import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkyBordersDemoComponent } from './visual/borders/borders-demo.component';
import { SkyButtonsDemoComponent } from './visual/buttons/buttons-demo.component';
import { HTMLInputsDemoComponent } from './visual/inputs/inputs-demo.component';
import { SkyResponsiveDemoComponent } from './visual/responsive/responsive-demo.component';
import { SwitchControlsDemoComponent } from './visual/switch-controls/switch-controls-demo.component';
import { SkyThemeIfDemoComponent } from './visual/theme-if/theme-if-demo.component';
import { ThemingDemoComponent } from './visual/theming/theming-demo.component';
import { SkyValidationDemoComponent } from './visual/validation/validation-demo.component';
import { VisualComponent } from './visual/visual.component';

const routes: Routes = [
  {
    path: '',
    component: VisualComponent
  },
  {
    path: 'visual/borders',
    component: SkyBordersDemoComponent
  },
  {
    path: 'visual/buttons',
    component: SkyButtonsDemoComponent
  },
  {
    path: 'visual/inputs',
    component: HTMLInputsDemoComponent
  },
  {
    path: 'visual/responsive',
    component: SkyResponsiveDemoComponent
  },
  {
    path: 'visual/switch-controls',
    component: SwitchControlsDemoComponent
  },
  {
    path: 'visual/theme-if',
    component: SkyThemeIfDemoComponent
  },
  {
    path: 'visual/theming',
    component: ThemingDemoComponent
  },
  {
    path: 'visual/validation',
    component: SkyValidationDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
