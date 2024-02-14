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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# pad

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Pad a string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-pad
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

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

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/string-pad-cli
```

</section>

<!-- CLI usage documentation. -->

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
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'beep\nboop' | padstr --len 10 --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nboop' | padstr --len 10 --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ padstr beep --len 10 --lpad b --rpad p
bbbbeepppp
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep' | pad --len 9 --lpad a --rpad o
aabeepooo
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beep\tboop' | pad --len 9 --lpad a --rpad o --split '\t'
aabeepooo
aaboopooo
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-left-pad`][@stdlib/string/left-pad]</span><span class="delimiter">: </span><span class="description">left pad a string.</span>
-   <span class="package-name">[`@stdlib/string-right-pad`][@stdlib/string/right-pad]</span><span class="delimiter">: </span><span class="description">right pad a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-pad.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-pad

[test-image]: https://github.com/stdlib-js/string-pad/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/string-pad/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-pad/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-pad?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-pad.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-pad/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-pad#cli
[cli-url]: https://github.com/stdlib-js/string-pad/tree/cli
[@stdlib/string-pad]: https://github.com/stdlib-js/string-pad/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-pad/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-pad/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-pad/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-pad/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-pad/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-pad/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-pad/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-pad/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/left-pad]: https://github.com/stdlib-js/string-left-pad

[@stdlib/string/right-pad]: https://github.com/stdlib-js/string-right-pad

<!-- </related-links> -->

</section>

<!-- /.links -->
