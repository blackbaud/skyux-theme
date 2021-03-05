import {
  SkyIconManifest
} from './icon-manifest';

import {
  SkyIconManifestService
} from './icon-manifest.service';

const manifest: SkyIconManifest = require('@skyux/icons/assets/manifest.json');

describe('SKY icon manifest service', () => {
  let manifestSvc: SkyIconManifestService;

  beforeEach(() => {
    manifestSvc = new SkyIconManifestService();
  });

  it('should return the manifest file from the @skyux/icons package', () => {
    expect(manifestSvc.getManifest()).toEqual(manifest);
  });

});
