<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# pad

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Pad a string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-pad
```

</section>

<section class="usage">

## Usage

```javascript
var pad = require( '@stdlib/string-pad' );
```

#### pad( str, len\[, options] )

Pads a `string` such that the padded `string` has a `length` of `len`.

```javascript
var str = pad( 'a', 5 );
// returns 'a    '
```

The function accepts the following `options`:

-   **lpad**: `string` used to left pad. Default: `''`.
-   **rpad**: `string` used to right pad. Default: `' '`.
-   **centerRight**: `boolean` indicating whether to center right in the event of a tie. Default: `false` (i.e., center left).

By default, an input `string` is padded with spaces. To pad with a different character or sequence of characters, provide a pad `string`.

```javascript
var str = pad( 'a', 10, {
    'lpad': 'b'
});
// returns 'bbbbbbbbba'

str = pad( 'a', 12, {
    'rpad': 'b'
});
// returns 'abbbbbbbbbbb'
```

To center an input `string`, provide both `lpad` and `rpad` options.

```javascript
var opts = {
    'lpad': 'a',
    'rpad': 'c'
};

var str = pad( 'b', 11, opts );
// returns 'aaaaabccccc'
```

When both `lpad` and `rpad` are specified and `len-str.length` is **odd**, left and right padding cannot equally split the available padding space. By default, right padding receives the extra character (i.e., the input `string` is left-centered).

```javascript
var opts = {
    'lpad': 'a',
    'rpad': 'c'
};

var str = pad( 'b', 10, opts );
// returns 'aaaabccccc'
```

To center right, set the `centerRight` option.

```javascript
var opts = {
    'lpad': 'a',
    'rpad': 'c',
    'centerRight': true
};

var str = pad( 'b', 10, opts );
// returns 'aaaaabcccc'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to [lpad][@stdlib/string/left-pad] and [rpad][@stdlib/string/right-pad], any padding which does not evenly divide available space is trimmed such that the returned `string` length is **always** `len`.

    ```javascript
    var opts = {
        'lpad': 'boop',
        'rpad': 'woot'
    };
    var str = pad( 'beep', 10, opts );
    // returns 'boobeepwoo'
    ```

-   Similarly, if `len < str.length`, the input `string` is trimmed.

    ```javascript
    // Pad right, trim right:
    var str = pad( 'beep', 2 );
    // returns 'be'

    // Pad left, trim left:
    str = pad( 'beep', 2, {
        'lpad': 'b'
    });
    // returns 'ep'

    // Pad both, trim both:
    str = pad( 'beep', 2, {
        'lpad': '@',
        'rpad': '!'
    });
    // returns 'ee'

    // Pad both, trim both starting from left:
    str = pad( 'abcdef', 3, {
        'lpad': '@',
        'rpad': '!'
    });
    // returns 'cde'

    // Pad both, trim both starting from right:
    str = pad( 'abcdef', 3, {
        'lpad': '@',
        'rpad': '!',
        'centerRight': true
    });
    // returns 'bcd'
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var round = require( '@stdlib/math-base-special-round' );
var randu = require( '@stdlib/random-base-randu' );
var pad = require( '@stdlib/string-pad' );

var str = 'boop';
var out;
var len;
var i;

for ( i = 0; i < 100; i++ ) {
    len = round( randu()*10.0 ) + str.length;
    out = pad( str, len, {
        'lpad': 'beep',
        'rpad': 'p'
    });
    console.log( '%s. %d. %d.', out, len, out.length );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/string-pad
```

</section>

<section class="usage">

### Usage

```text
Usage: padstr [options] [<string>] --len <length>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --len length          String length.
         --lpad str            String used to left pad. Default: ''.
         --rpad str            String used to right pad. Default: ' '.
         --cright              Center right in the event of a tie.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ padstr beep --len 10 --lpad b --rpad p
bbbbeepppp
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep' | pad --len 9 --lpad a --rpad o
aabeepoo0
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-pad.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-pad

[test-image]: https://github.com/stdlib-js/string-pad/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/string-pad/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-pad/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-pad?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-pad.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-pad/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-pad/main/LICENSE

[@stdlib/string/left-pad]: https://github.com/stdlib-js/string-left-pad

[@stdlib/string/right-pad]: https://github.com/stdlib-js/string-right-pad

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
