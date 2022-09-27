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

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Pad a string.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import pad from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-pad@esm/index.mjs';
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import pad from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-pad@esm/index.mjs';

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

</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/left-pad`][@stdlib/string/left-pad]</span><span class="delimiter">: </span><span class="description">left pad a string.</span>
-   <span class="package-name">[`@stdlib/string/right-pad`][@stdlib/string/right-pad]</span><span class="delimiter">: </span><span class="description">right pad a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-pad.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-pad

[test-image]: https://github.com/stdlib-js/string-pad/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-pad/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-pad/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-pad?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-pad.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-pad/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-pad/tree/deno
[umd-url]: https://github.com/stdlib-js/string-pad/tree/umd
[esm-url]: https://github.com/stdlib-js/string-pad/tree/esm
[branches-url]: https://github.com/stdlib-js/string-pad/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-pad/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/left-pad]: https://github.com/stdlib-js/string-left-pad/tree/esm

[@stdlib/string/right-pad]: https://github.com/stdlib-js/string-right-pad/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
