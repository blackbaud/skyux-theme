import {
  Component
} from '@angular/core';

@Component({
  selector: 'sky-responsive-demo',
  templateUrl: './responsive-demo.component.html',
  styleUrls: ['./responsive-demo.component.scss']
})
export class SkyResponsiveDemoComponent {

  public currentBreakpoint = 'xs';

  public setClass(breakpoint: string) {
    this.currentBreakpoint = breakpoint;
  }

}
