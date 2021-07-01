
# 5.0.0-beta.2 (2021-07-01)

- Fixed the `styles/_compat/_variables.scss` file to use `math.div()` when dividing number values. []()
# 5.0.0-beta.1 (2021-06-24)

- Added font face definitions for "BLKB Sans" and deprecated "Blackbaud Sans." [#243](https://github.com/blackbaud/skyux-theme/pull/243)

# 5.0.0-beta.0 (2021-06-15)

- Initial beta release.
- Updated `5.0.0-next` branch with features from the `master` branch. [#236](https://github.com/blackbaud/skyux-theme/pull/236)

# 4.17.0 (2021-06-15)

- Updated the SKY UX icon font version to 4.0.0-beta.3. [#238](https://github.com/blackbaud/skyux-theme/pull/238)

# 4.16.3 (2021-05-19)

- Added a CSS class to omit the link style on `<a>` tags that do not have `href` attributes. [#229](https://github.com/blackbaud/skyux-theme/pull/229)

# 5.0.0-alpha.0 (2021-05-19)

- Added support for `@angular/core@^12`. [#232](https://github.com/blackbaud/skyux-theme/pull/232)
- Removed `SkyAppStyleLoader` and `SkyAppViewportService` from the `providers` section of `SkyThemeModule` and added `providedIn: 'root'` to those services. [#232](https://github.com/blackbaud/skyux-theme/pull/232)

# 4.16.2 (2021-04-30)

- Fixed placeholder text styles in modern theme. [#226](https://github.com/blackbaud/skyux-theme/pull/226)

# 4.16.1 (2021-04-22)

- Fixed the NPM release.

# 4.16.0 (2021-04-22)

- Added additional spacing classes for templates. [#222](https://github.com/blackbaud/skyux-theme/pull/222)

# 4.15.5 (2021-04-09)

- Fixed the `skyThemeIf` and `skyThemeClass` directives to work properly when `SkyThemeService` is provided but not initialized. [#220](https://github.com/blackbaud/skyux-theme/pull/220)

# 4.15.4 (2021-03-24)

- Fixed the `skyThemeIf` and `skyThemeClass` directives to work properly when `SkyThemeService` is not provided. [#217](https://github.com/blackbaud/skyux-theme/pull/217)

# 4.15.3 (2021-03-23)

- Updated the change detection for `skyThemeIf` to use lifecycle hook. [#215](https://github.com/blackbaud/skyux-theme/pull/215)

# 4.15.2 (2021-03-15)

- Added change detection to `skyThemeIf`. [#213](https://github.com/blackbaud/skyux-theme/pull/213)

# 4.15.1 (2021-03-10)

- Added `SkyThemeIconManifestModule` to the public API. [#210](https://github.com/blackbaud/skyux-theme/pull/210)

# 4.15.0 (2021-03-09)

- Updated the SKY UX icon font version to 4.0.0-beta.2. [#205](https://github.com/blackbaud/skyux-theme/pull/205)
- Added `SkyThemeIconManifestService` for retrieving metadata about the SKY UX icon font. [#205](https://github.com/blackbaud/skyux-theme/pull/205)

# 4.14.0 (2021-03-08)

- Added the `skyThemeIf` and `skyThemeClass` directives. [#204](https://github.com/blackbaud/skyux-theme/pull/204)

# 4.13.2 (2020-11-11)

- Fixed button padding in the modern theme. [#198](https://github.com/blackbaud/skyux-theme/pull/198)

# 4.13.1 (2020-11-06)

- Removed a bad CSS import that was causing build failures. [#194](https://github.com/blackbaud/skyux-theme/pull/194)

# 4.13.0 (2020-11-02)

- Added the `sky-btn-icon-borderless` CSS class. [#194](https://github.com/blackbaud/skyux-theme/pull/194)

# 4.12.0 (2020-10-14)

- Updated buttons to use the `box-shadow` CSS attribute instead of `border` for displaying borders. [#191](https://github.com/blackbaud/skyux-theme/pull/191)

# 4.11.0 (2020-10-07)

- Updated the `sky-headline` CSS class to have the same styles as the `sky-font-display-3` class in the modern theme. [#189](https://github.com/blackbaud/skyux-theme/pull/189)

# 4.10.3 (2020-10-01)

- Fixed the `.sky-switch` CSS styles to properly position its input elements within `overflow` parent elements. [#187](https://github.com/blackbaud/skyux-theme/pull/187)

# 4.10.2 (2020-09-01)

- Fixed modern theme styles shared by the radio button and checkbox components. [#184](https://github.com/blackbaud/skyux-theme/pull/184)

# 4.10.1 (2020-08-28)

- Fixed hyperlink and tab text colors in the modern theme. [#182](https://github.com/blackbaud/skyux-theme/pull/182)

# 4.10.0 (2020-08-21)

- Added modern theme styles shared by the radio button and checkbox components. [#180](https://github.com/blackbaud/skyux-theme/pull/180)

# 4.9.1 (2020-08-20)

- Fixed small button styles in the modern theme. [#178](https://github.com/blackbaud/skyux-theme/pull/178)

# 4.9.0 (2020-08-14)

- Updated elevation background colors in the modern theme's dark mode. [#176](https://github.com/blackbaud/skyux-theme/pull/176)
- Made header margins overridable in the modern theme. [#176](https://github.com/blackbaud/skyux-theme/pull/176)

# 4.8.0 (2020-07-30)

- Updated responsive mixins to work with components that do not use view encapsulation. [#170](https://github.com/blackbaud/skyux-theme/pull/170)
- Updated modern theme padding styles for tab buttons. [#172](https://github.com/blackbaud/skyux-theme/pull/172)

# 4.7.0 (2020-07-29)

- Added modern theme button styles for active, focused, and hover states. [#162](https://github.com/blackbaud/skyux-theme/pull/162)

# ~~4.6.0 (2020-07-28)~~

- This version is broken. Upgrade to 4.7.0.

# ~~4.5.0 (2020-07-27)~~

- This version is broken. Upgrade to 4.7.0.

# 4.4.0 (2020-07-06)

- Added additional padding and margin classes to the modern theme. [#148](https://github.com/blackbaud/skyux-theme/pull/148)
- Updated the SKY UX icon font version to 4.0.0-beta.0. [#149](https://github.com/blackbaud/skyux-theme/pull/149)

# 4.3.0 (2020-06-17)

- Added the `sky-screen-reader-only` CSS class which hides text from users but is read by assistive technology. [#145](https://github.com/blackbaud/skyux-theme/pull/145)

# 4.2.1 (2020-06-05)

- Fixed the input group buttons to properly reset the `border-radius` CSS property. [#142](https://github.com/blackbaud/skyux-theme/pull/142)

# 4.2.0 (2020-06-03)

- Added modern theme styles for buttons. [#140](https://github.com/blackbaud/skyux-theme/pull/140)

# 4.1.0 (2020-05-28)

- Added error label styling to the modern theme's dark mode. [#136](https://github.com/blackbaud/skyux-theme/pull/136)
- Updated the SKY UX icon font version to 3.0.0-beta.2. [#137](https://github.com/blackbaud/skyux-theme/pull/137)

# 4.0.0 (2020-05-11)

### New features

- Added support for `@angular/core@^9`. [#94](https://github.com/blackbaud/skyux-theme/pull/94)
- Updated the pipeline to transpile to the [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview). [#94](https://github.com/blackbaud/skyux-theme/pull/94)

### Bug fixes

- Added CSS overrides to changes made by `normalize-scss@7` to maintain style consistency with `@skyux/theme@3`. [#95](https://github.com/blackbaud/skyux-theme/pull/95)

### Breaking changes

- Dropped support for `rxjs@5`. Consumers can install `rxjs-compat@^6` to support older versions of `rxjs`. [#94](https://github.com/blackbaud/skyux-theme/pull/94)

# 4.0.0-rc.7 (2020-05-07)

- Added bug fixes and features from the `master` branch. [#131](https://github.com/blackbaud/skyux-theme/pull/131)

# 3.16.0 (2020-05-07)

- Added modern theme styles for tabs. [#128](https://github.com/blackbaud/skyux-theme/pull/128)

# 4.0.0-rc.6 (2020-05-06)

- Added bug fixes and features from the `master` branch. [#129](https://github.com/blackbaud/skyux-theme/pull/129)

# 3.15.0 (2020-04-30)

- Added the `sky-box` CSS class to the modern theme. [#125](https://github.com/blackbaud/skyux-theme/pull/125)

# 4.0.0-rc.5 (2020-04-28)

- Added bug fixes and features from the `master` branch. [#124](https://github.com/blackbaud/skyux-theme/pull/124)

# 3.14.2 (2020-04-27)

- Fixed modern theme header styles by overriding the default theme's `font-family` and `color` CSS properties. [#122](https://github.com/blackbaud/skyux-theme/pull/122)

# 4.0.0-rc.4 (2020-04-24)

- Added bug fixes and features from the `master` branch. [#121](https://github.com/blackbaud/skyux-theme/pull/121)

# 3.14.1 (2020-04-24)

- Restored the bold font style to the `sky-headline` CSS class used by components like key info. [#119](https://github.com/blackbaud/skyux-theme/pull/119)

# 4.0.0-rc.3 (2020-04-23)

- Added bug fixes and features from the `master` branch. [#121](https://github.com/blackbaud/skyux-theme/pull/121)

# 3.14.0 (2020-04-23)

- Added elevation, heading, spacing and text CSS classes for the modern theme. [#110](https://github.com/blackbaud/skyux-theme/pull/110)

# 3.13.1 (2020-04-23)

- Fixed the `.sky-switch-input` styles to correctly position native inputs within `overflow` containers. [#114](https://github.com/blackbaud/skyux-theme/pull/114)

# 3.13.0 (2020-04-22)

- Added theming capabilities. [#108](https://github.com/blackbaud/skyux-theme/pull/108)

# 4.0.0-rc.2 (2020-04-02)

- Updated the development and peer dependencies. [#107](https://github.com/blackbaud/skyux-theme/pull/107)

# 3.12.0 (2020-04-01)

- Updated the SKY UX icon font version to 3.0.0-beta.1. [#105](https://github.com/blackbaud/skyux-theme/pull/105)

# 3.11.0 (2020-03-27)

- Added the beta version of the SKY UX icon font to the list of fonts loaded during bootstrap. [#102](https://github.com/blackbaud/skyux-theme/pull/102)

# 3.10.0 (2020-03-19)

- Added CSS classes for dark, light, and row borders. [#100](https://github.com/blackbaud/skyux-theme/pull/100)

# 4.0.0-rc.1 (2020-02-20)

### Bug fixes

- Added CSS overrides to changes made by `normalize-scss@7` to maintain style consistency with `@skyux/theme@3`. [#95](https://github.com/blackbaud/skyux-theme/pull/95)

# 4.0.0-rc.0 (2020-02-19)

### New features

- Added support for `@angular/core@^9`. [#94](https://github.com/blackbaud/skyux-theme/pull/94)
- Updated the pipeline to transpile to the [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview). [#94](https://github.com/blackbaud/skyux-theme/pull/94)

### Breaking changes

- Dropped support for `rxjs@5`. Consumers can install `rxjs-compat@^6` to support older versions of `rxjs`. [#94](https://github.com/blackbaud/skyux-theme/pull/94)

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
