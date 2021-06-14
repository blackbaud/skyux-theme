import {
  Injectable
} from '@angular/core';

import {
  SkyThemeIconManifest
} from './icon-manifest';

import manifest from '@skyux/icons/assets/manifest.json';

/**
 * Provides a method for retrieving metadata about the SKY UX icon font.
 */
@Injectable({
  providedIn: 'root'
})
export class SkyThemeIconManifestService {

  constructor() { }

  /**
   * Gets metadata about the SKY UX icon font.
   */
  public getManifest(): SkyThemeIconManifest {
    return manifest;
  }
}
