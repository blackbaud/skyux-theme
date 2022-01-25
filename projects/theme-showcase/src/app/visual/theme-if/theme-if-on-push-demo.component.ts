import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-theme-if-on-push-demo',
  templateUrl: './theme-if-on-push-demo.component.html',
  styleUrls: ['./theme-if-on-push-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkyThemeIfOnPushDemoComponent {
  @Input()
  public displayText: string | undefined;
}
