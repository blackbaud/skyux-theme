# 4.0.0-rc.0 (2020-02-19)

### New features

- Updated the pipeline to transpile to the [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview). [#94](https://github.com/blackbaud/skyux-theme/pull/94)

### Breaking changes

- Dropped support for `rxjs@5`. Consumers may install `rxjs-compat@^6` to support older versions of `rxjs`. [#94](https://github.com/blackbaud/skyux-theme/pull/94)

# 3.9.0 (2019-12-16)

- Added a borderless variant for both normal and inline buttons. [#90](https://github.com/blackbaud/skyux-theme/pull/90)
- Added a danger variant for buttons. [#89](https://github.com/blackbaud/skyux-theme/pull/89)
- Added a disabled state for the `sky-form-control` class. [#87](https://github.com/blackbaud/skyux-theme/pull/87)

# 3.8.0 (2019-10-08)

- Added support for `@blackbaud/skyux-design-tokens@0.0.13`. [#83](https://github.com/blackbaud/skyux-theme/pull/83)

# 3.7.1 (2019-09-27)

- Fixed `select` inputs to have round corners. [#80](https://github.com/blackbaud/skyux-theme/pull/80)

# 3.7.0 (2019-05-22)

- Added support for `@blackbaud/skyux-design-tokens@0.0.12`, which includes a new SCSS variable for page background color. [#69](https://github.com/blackbaud/skyux-theme/pull/69)

# 3.6.0 (2019-05-03)

- Added mixins for responsive designs. [#58](https://github.com/blackbaud/skyux-theme/pull/58)
- Fixed spacing for radio button and checkbox labels. [#62](https://github.com/blackbaud/skyux-theme/pull/62)

# 3.5.0 (2019-04-29)

- Added thin and semi-bold font faces. [#56](https://github.com/blackbaud/skyux-theme/pull/56)

# 3.4.1 (2019-02-21)

- Fixed radio and checkbox labels to align with checkboxes and radio buttons using a top baseline. [#50](https://github.com/blackbaud/skyux-theme/pull/50)
- Fixed radio and checkbox labels to wrap contents when overflowing a parent element. [#50](https://github.com/blackbaud/skyux-theme/pull/50)

# 3.4.0 (2019-01-08)

- Added style for invalid `textarea` elements. [#46](https://github.com/blackbaud/skyux-theme/pull/46) (Thanks @Blackbaud-JeffDye)
- Added support for `@blackbaud/skyux-design-tokens@0.0.11`. [#45](https://github.com/blackbaud/skyux-theme/pull/45)

# 3.3.1 (2018-11-29)

- Fixed native HTML select fields to use appropriate CSS style when control value is invalid. [#38](https://github.com/blackbaud/skyux-theme/pull/38)
- Fixed `.sky-btn-tab` SCSS mixin to properly style the hover state for a selected, non-disabled tab. [#41](https://github.com/blackbaud/skyux-theme/pull/41)

# 3.3.0 (2018-11-19)

- Updated peer dependencies to support Angular versions greater than `4.3.6`. [#39](https://github.com/blackbaud/skyux-theme/pull/39)

# 3.2.2 (2018-11-01)

- Fixed `.sky-form-control` CSS class name to not hide range input selector. [#35](https://github.com/blackbaud/skyux-theme/pull/35)

# 3.2.1 (2018-10-30)

- Fixed long checkbox labels to not display a horizontal scrollbar. [#32](https://github.com/blackbaud/skyux-theme/pull/32)

# 3.2.0 (2018-09-25)

- Added support for `@skyux/theme@0.0.10`.

# 3.1.1 (2018-09-17)

- Fixed text input styles for iOS devices. [#28](https://github.com/blackbaud/skyux-theme/pull/28)

# 3.1.0 (2018-08-28)

- Added icon styles for `sky-switch-control` form elements. [#23](https://github.com/blackbaud/skyux-theme/pull/23)

# 3.0.0 (2018-08-23)

- Initial major release.

# 3.0.0-alpha.10 (2018-08-23)

- Added `z-index` SASS variables to be used by various components. [#19](https://github.com/blackbaud/skyux-theme/pull/19)

# 3.0.0-alpha.9 (2018-08-23)

- Cleaned up code presentation and style. [#18](https://github.com/blackbaud/skyux-theme/pull/18)
- Removed automatic require statement for global style sheet. [#18](https://github.com/blackbaud/skyux-theme/pull/18)

# 3.0.0-alpha.8 (2018-08-22)

- Created `_compat` directory for styles that are used only by SKY UX components.

# 3.0.0-alpha.7 (2018-08-18)

- Bugfix to remove Builder config from dependency.

# 3.0.0-alpha.6 (2018-08-17)

- Added RxJS to peer dependencies. [#15](https://github.com/blackbaud/skyux-theme/pull/15)

# 3.0.0-alpha.5 (2018-08-17)

- Added support for `@skyux-sdk/e2e`.
- Updated Travis-CI config.

# 3.0.0-alpha.4 (2018-08-14)

- Added `SkyAppViewportService`. [#9](https://github.com/blackbaud/skyux-theme/pull/9)

# 3.0.0-alpha.3 (2018-08-13)

- Added BrowserStack testing to CI. [#3](https://github.com/blackbaud/skyux-theme/pull/3)

# 3.0.0-alpha.2 (2018-08-09)

- Removed unused dependencies. [#6](https://github.com/blackbaud/skyux-theme/pull/6)
- Merged changes from SKY UX 2. [#6](https://github.com/blackbaud/skyux-theme/pull/6)

# 3.0.0-alpha.1 (2018-08-03)

- Added types for `fontfaceobserver` NPM package. (#4)[https://github.com/blackbaud/skyux-theme/pull/4]
- Added missing repository fields to package.json. [#4](https://github.com/blackbaud/skyux-theme/pull/4)
- Updated unit tests for 100% code coverage. [#4](https://github.com/blackbaud/skyux-theme/pull/4)


# 3.0.0-alpha.0 (2018-08-03)

- Initial release
