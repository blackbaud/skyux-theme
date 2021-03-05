import {
  Injectable
} from '@angular/core';

import {
  SkyIconManifest
} from './icon-manifest';

const manifest: SkyIconManifest = require('@skyux/icons/assets/manifest.json');

/**
 * Provides a method for retrieving metadata about the SKY UX icon font.
 */
@Injectable()
export class SkyIconManifestService {

  constructor() { }

  /**
   * Gets metadata about the SKY UX icon font.
   */
  public getManifest(): SkyIconManifest {
    return manifest;
  }
}
