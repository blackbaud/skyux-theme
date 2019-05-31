import {
  Component
} from '@angular/core';

import {
  SkyAppStyleLoader
} from '../../public/style-loader';

@Component({
  selector: 'sky-fonts-demo',
  templateUrl: './fonts-demo.component.html',
  styleUrls: ['./fonts-demo.component.scss']
})
export class FontsComponent {
  public status = 'loading';

  constructor(
    private skyAppStyleLoader: SkyAppStyleLoader
  ) {
    this.skyAppStyleLoader
      .loadStyles()
      .then((err: any) => {
        if (err) {
          this.status = 'Loaded, but there was an error';
          console.error(err);
        } else {
          this.status = 'Loaded successfully';
        }
      });
  }
}
