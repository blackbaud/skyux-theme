import * as FontFaceObserver from 'fontfaceobserver';

import {
  Injectable
} from '@angular/core';

@Injectable()
export class SkyAppStyleLoader {
  public static readonly LOAD_TIMEOUT = 3000;
  public isLoaded = false;

  public loadStyles(): Promise<any> {
    if (this.isLoaded) {
      return Promise.resolve();
    }

    const fontAwesome4 = new FontFaceObserver('FontAwesome', { weight: 900 });
    const fontAwesome5 = new FontFaceObserver('Font Awesome 5 Brands', { weight: 400 });
    const blackbaudSans = new FontFaceObserver('Blackbaud Sans');

    return Promise
      .all([
        // FA does not contain the latin characters "BESbwy", so we need a custom test string.
        // https://github.com/bramstein/fontfaceobserver#how-to-use
        fontAwesome4.load('\uf0fc', SkyAppStyleLoader.LOAD_TIMEOUT),
        fontAwesome5.load('\uf415', SkyAppStyleLoader.LOAD_TIMEOUT),
        blackbaudSans.load(undefined, SkyAppStyleLoader.LOAD_TIMEOUT)
      ])
      .then(() => {
        this.isLoaded = true;
      })
      .catch((error) => {
        // Errors loading the font should not stop the page from rendering.
        // Passing the error along in case the client wants to do something with it.
        return Promise.resolve({
          error
        });
      });
  }
}
