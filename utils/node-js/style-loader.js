/* jshint node: true */
'use strict';

require('style-loader!@skyux/theme/css/sky.css');

const FontFaceObserver = require('fontfaceobserver');
const LOAD_TIMEOUT = 30000;

module.exports = {
  loadStyles() {
    const fontAwesome = new FontFaceObserver('FontAwesome');
    const blackbaudSans = new FontFaceObserver('Blackbaud Sans');

    return Promise.all(
      [
        // Specify a character for FontAwesome since some browsers will fail to detect
        // when the font is loaded unless a known character with a different width
        // than the default is not specified.
        fontAwesome.load('\uf0fc', LOAD_TIMEOUT),
        blackbaudSans.load(null, LOAD_TIMEOUT)
      ]
    );
  }
};
