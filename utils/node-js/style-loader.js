/* jshint node: true */
'use strict';

/**
 * This file is almost identical to src/app/public/style-loader.ts.
 * It exists separately as JS in order to be used globally in unit tests.
 */
require('style-loader!@skyux/theme/css/sky.css');

const FontFaceObserver = require('fontfaceobserver');
const LOAD_TIMEOUT = 30000;

module.exports = {
  loadStyles: function () {
    const fontAwesome4 = new FontFaceObserver('FontAwesome', { weight: 900 });
    const fontAwesome5 = new FontFaceObserver('Font Awesome 5 Brands', { weight: 400 });
    const blackbaudSans = new FontFaceObserver('Blackbaud Sans');

    return Promise.all(
      [
        // FA does not contain the latin characters "BESbwy", so we need a custom test string.
        // https://github.com/bramstein/fontfaceobserver#how-to-use
        fontAwesome4.load('\uf0fc', LOAD_TIMEOUT),
        fontAwesome5.load('\uf415', LOAD_TIMEOUT),
        blackbaudSans.load(undefined, LOAD_TIMEOUT)
      ]
    );
  }
};
