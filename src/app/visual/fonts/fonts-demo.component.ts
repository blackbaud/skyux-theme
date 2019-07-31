import {
  Component
} from '@angular/core';

import {
  SkyAppStyleLoader
} from '@skyux/theme';

@Component({
  selector: 'fonts-demo',
  templateUrl: './fonts-demo.component.html'
})
export class FontsDemoComponent {

  public status = 'Loading...';

  constructor(
    private styleLoader: SkyAppStyleLoader
  ) {
    this.styleLoader.loadStyles()
      .then((error: any) => {
        if (error) {
          this.status = 'Done loading, but there was an error.';
          console.error(error);
        } else {
          this.status = 'Loaded successfully.';
        }
      });
  }

}
