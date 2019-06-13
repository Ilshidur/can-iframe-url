# can-iframe-url (in active development)

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)

[![npm version][version-badge]][version-url]
[![Known Vulnerabilities][vulnerabilities-badge]][vulnerabilities-url]
[![dependency status][dependency-badge]][dependency-url]
[![devdependency status][devdependency-badge]][devdependency-url]
[![build status][build-badge]][build-url]
[![Code Climate][maintainability-badge]][maintainability-url]
[![downloads][downloads-badge]][downloads-url]

[![NPM][npm-stats-badge]][npm-stats-url]

> Detect if an url can be included in an <iframe> by detecting the `X-Frame-Options` header with a HEAD request.

## Install

`npm install can-iframe-url` or `yarn add can-iframe-url`

## Compatibility

This package compatibility depends on the [Fetch API](https://caniuse.com/#feat=fetch) and on promises.

**UMD compatible.**

*Note : this library does not handle how browsers behaviors might differ from each other. This is purely based on the `X-Frame-Options` intended behavior.*

## Usage

### Node.js

```javascript
// Exports a function that returns a Promise
const canIframeUrl = require('can-iframe-url');

const includeAllowed = await canIframeUrl('http://google.com', null);
const includeAllowed = await canIframeUrl('http://google.com', 'google.com');
// false
```

### Browser

```javascript
const includeAllowed = await window.canIframeUrl('http://google.com', window.location.hostname);
// false
```

## TODO

- API docs

## License

MIT License

Copyright (c) 2018-2019 **Nicolas COUTIN**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[version-badge]: https://img.shields.io/npm/v/can-iframe-url.svg
[version-url]: https://www.npmjs.com/package/can-iframe-url
[vulnerabilities-badge]: https://snyk.io/test/npm/can-iframe-url/badge.svg
[vulnerabilities-url]: https://snyk.io/test/npm/can-iframe-url
[dependency-badge]: https://david-dm.org/ilshidur/can-iframe-url.svg
[dependency-url]: https://david-dm.org/ilshidur/can-iframe-url
[devdependency-badge]: https://david-dm.org/ilshidur/can-iframe-url/dev-status.svg
[devdependency-url]: https://david-dm.org/ilshidur/can-iframe-url#info=devDependencies
[build-badge]: https://travis-ci.org/Ilshidur/can-iframe-url.svg
[build-url]: https://travis-ci.org/Ilshidur/can-iframe-url
[maintainability-badge]: https://api.codeclimate.com/v1/badges/357ff2a5b751442d0dd7/maintainability
[maintainability-url]: https://codeclimate.com/github/Ilshidur/can-iframe-url/maintainability
[downloads-badge]: https://img.shields.io/npm/dt/can-iframe-url.svg
[downloads-url]: https://www.npmjs.com/package/can-iframe-url
[npm-stats-badge]: https://nodei.co/npm/can-iframe-url.png?downloads=true&downloadRank=true
[npm-stats-url]: https://nodei.co/npm/can-iframe-url
