# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.2](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@2.0.1...@bedrock-layout/primitives@2.0.2) (2022-07-28)


### Bug Fixes

* **inline:** remove [@property](https://github.com/property) for minItemWidth ([9eaefd8](https://github.com/Bedrock-Layouts/Bedrock/commit/9eaefd8f8a26382583889d268b059e0c72c1e657))





## [2.0.1](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@2.0.0...@bedrock-layout/primitives@2.0.1) (2022-07-14)


### Bug Fixes

* fix peer dependencies in hooks ([16a3cde](https://github.com/Bedrock-Layouts/Bedrock/commit/16a3cdee04996a3cc360a42720c62be44aa42b38)), closes [#1355](https://github.com/Bedrock-Layouts/Bedrock/issues/1355)





# [2.0.0](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.4.9...@bedrock-layout/primitives@2.0.0) (2022-06-22)


### Features

* **columndrop:** change basis prop to be minItemWidth ([68c2a0f](https://github.com/Bedrock-Layouts/Bedrock/commit/68c2a0fbd07f6ea218c1cfe1a4ee05db0f909184)), closes [#1178](https://github.com/Bedrock-Layouts/Bedrock/issues/1178)
* **inline:** add min item width to the inline component ([100a4b7](https://github.com/Bedrock-Layouts/Bedrock/commit/100a4b792b1d412c6939bb38c6a3cc7d26ee7fa8))


### BREAKING CHANGES

* **inline:** Previously the inline component would attempt to fit all the content when you did
the switchAt prop.  This will no longer be the case
* **columndrop:** basis will no longer be a valid prop for column-drop.  From now on use
minItemWidth.





## [1.4.9](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.4.8...@bedrock-layout/primitives@1.4.9) (2022-06-10)


### Bug Fixes

* update peer dependencies to include React 18 ([cfdfaed](https://github.com/Bedrock-Layouts/Bedrock/commit/cfdfaedaa950645897cf4466c381a9946153ed3e)), closes [#1321](https://github.com/Bedrock-Layouts/Bedrock/issues/1321)





## [1.4.8](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.4.7...@bedrock-layout/primitives@1.4.8) (2022-05-20)


### Bug Fixes

* **reel:** set scroll overflow to auto ([0193c99](https://github.com/Bedrock-Layouts/Bedrock/commit/0193c991995806322b243ee0c4c41aca338a9047)), closes [#1293](https://github.com/Bedrock-Layouts/Bedrock/issues/1293)





## [1.4.7](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.4.6...@bedrock-layout/primitives@1.4.7) (2022-05-01)

**Note:** Version bump only for package @bedrock-layout/primitives





## [1.4.6](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.4.5...@bedrock-layout/primitives@1.4.6) (2022-04-22)

**Note:** Version bump only for package @bedrock-layout/primitives





## [1.4.5](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.4.4...@bedrock-layout/primitives@1.4.5) (2022-04-17)

**Note:** Version bump only for package @bedrock-layout/primitives





## [1.4.4](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.4.3...@bedrock-layout/primitives@1.4.4) (2022-04-15)

**Note:** Version bump only for package @bedrock-layout/primitives





## [1.4.3](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.4.2...@bedrock-layout/primitives@1.4.3) (2022-03-29)

**Note:** Version bump only for package @bedrock-layout/primitives





## [1.4.2](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.4.1...@bedrock-layout/primitives@1.4.2) (2022-03-19)

**Note:** Version bump only for package @bedrock-layout/primitives





## [1.4.1](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.4.0...@bedrock-layout/primitives@1.4.1) (2022-03-13)

**Note:** Version bump only for package @bedrock-layout/primitives





# [1.4.0](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.3.0...@bedrock-layout/primitives@1.4.0) (2022-03-08)


### Features

* add number and CSSLength as valid gutter options for stack, split, and columns components ([2d4b6a9](https://github.com/Bedrock-Layouts/Bedrock/commit/2d4b6a94d8aac2b3a842feca2959cb6b0535405b))
* **appboundary:** make Appboundary accept number or CSSLength ([5a9af41](https://github.com/Bedrock-Layouts/Bedrock/commit/5a9af41d16c94620c21267160f23a204afbc7022))
* **cover:** change cover to use number or CSSlength as Gutter as well ([6768cc4](https://github.com/Bedrock-Layouts/Bedrock/commit/6768cc4662d315989a07ad2a7586167f67a783bb))





# [1.3.0](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.2.5...@bedrock-layout/primitives@1.3.0) (2022-03-03)


### Features

* **columns:** bring it more in line with css ([f85b0ab](https://github.com/Bedrock-Layouts/Bedrock/commit/f85b0ab910779bd3feab13a4793ce4a8c235989e))
* **register-resize-callback:** publish resize callback package ([20943fd](https://github.com/Bedrock-Layouts/Bedrock/commit/20943fde350628bbb4e721e95d2025db3d4a8c2b))





## [1.2.5](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.2.4...@bedrock-layout/primitives@1.2.5) (2022-02-25)

**Note:** Version bump only for package @bedrock-layout/primitives





## [1.2.4](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.2.3...@bedrock-layout/primitives@1.2.4) (2022-02-23)

**Note:** Version bump only for package @bedrock-layout/primitives





## [1.2.3](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.2.2...@bedrock-layout/primitives@1.2.3) (2022-02-23)


### Bug Fixes

* **inline:** make content fit by default ([0b5bc17](https://github.com/Bedrock-Layouts/Bedrock/commit/0b5bc179153eac102b28bcd3b08736c4cf3fab13))





## [1.2.2](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.2.1...@bedrock-layout/primitives@1.2.2) (2022-02-22)


### Bug Fixes

* **inline:** fix the bug with inline where switchAt wasn't working ([65357c2](https://github.com/Bedrock-Layouts/Bedrock/commit/65357c2f8990c56d964cd528ce8dd1baf5842abc))





## [1.2.1](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.2.0...@bedrock-layout/primitives@1.2.1) (2022-02-19)


### Bug Fixes

* **inline:** don't force min-width ([829ff3e](https://github.com/Bedrock-Layouts/Bedrock/commit/829ff3e0cf50c1c0016c0dc091602329d7ac5fd9))





# [1.2.0](https://github.com/Bedrock-Layouts/Bedrock/compare/@bedrock-layout/primitives@1.1.0...@bedrock-layout/primitives@1.2.0) (2022-02-16)


### Features

* **frame:** allow ratio string in `ratio` prop ([e6d37b1](https://github.com/Bedrock-Layouts/Bedrock/commit/e6d37b165702ac8f27e021644afa29b6e7797cc7))





# 1.1.0 (2022-02-10)


### Features

* **primitives:** add the primitives package ([d70628a](https://github.com/Bedrock-Layouts/Bedrock/commit/d70628ad84b1b995b17c223f510c6ab4303d8a3b))
