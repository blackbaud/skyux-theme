import {
  Component
} from '@angular/core';

import {
  SkyDocsDemoControlPanelChange,
  SkyDocsDemoControlPanelRadioChoice
} from '@skyux/docs-tools';

import {
  SkyTheme,
  SkyThemeMode,
  SkyThemeSettings
} from '@skyux/theme';

@Component({
  selector: 'app-box-docs',
  templateUrl: './box-docs.component.html',
  styleUrls: ['./box-docs.component.scss']
})
export class BoxDocsComponent {

  public modernLightTheme = new SkyThemeSettings(
    SkyTheme.presets.modern,
    SkyThemeMode.presets.light
  );

  public layoutChoices: SkyDocsDemoControlPanelRadioChoice[] = [
    { value: 'page', label: 'On page background' },
    { value: 'container', label: 'Inside other containers' }
  ];

  public selectedLayout: string;

  public onDemoSelectionChange(change: SkyDocsDemoControlPanelChange): void {
    if (change.layout) {
      this.selectedLayout = change.layout;
    }
  }

}
