/* jshint node: true */
'use strict';

require('style-loader!@skyux/theme/css/sky.css');

const FontFaceObserver = require('fontfaceobserver');
const LOAD_TIMEOUT = 30000;

/**
 * This file is almost identical to src/app/public/style-loader.ts.
 * It exists separately as Node.JS in order to be used globally in unit tests.
 */
module.exports = {
  loadStyles: function () {
    const fontAwesome = new FontFaceObserver('Font Awesome 5 Free');
    const blackbaudSans = new FontFaceObserver('Blackbaud Sans');

    return Promise.all(
      [
        // Specify a character for FontAwesome since some browsers will fail to detect
        // when the font is loaded unless a known character with a different width
        // than the default is not specified.
        fontAwesome.load('\uf111', LOAD_TIMEOUT),
        blackbaudSans.load(null, LOAD_TIMEOUT)
      ]
    );
  }
};
