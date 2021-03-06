/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var repeat = require( '@stdlib/string-repeat' );
var format = require( '@stdlib/string-format' );
var floor = require( '@stdlib/math-base-special-floor' );
var ceil = require( '@stdlib/math-base-special-ceil' );
var lpad = require( '@stdlib/string-left-pad' );
var rpad = require( '@stdlib/string-right-pad' );
var abs = require( '@stdlib/math-base-special-abs' );
var FLOAT64_MAX_SAFE_INTEGER = require( '@stdlib/constants-float64-max-safe-integer' );
var validate = require( './validate.js' );


// MAIN //

/**
* Pads a string such that the padded string has a length of `len`.
*
* @param {string} str - string to pad
* @param {NonNegativeInteger} len - string length
* @param {Options} [options] - function options
* @param {string} [options.lpad=''] - string used to left pad
* @param {string} [options.rpad=' '] - string used to right pad
* @param {boolean} [options.centerRight=false] - boolean indicating whether to center right in the event of a tie
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} at least one padding must have a length greater than `0`
* @returns {string} padded string
*
* @example
* var str = pad( 'a', 5 );
* // returns 'a    '
*
* @example
* var str = pad( 'a', 10, {
*     'lpad': 'b'
* });
* // returns 'bbbbbbbbba'
*
* @example
* var str = pad( 'a', 12, {
*     'rpad': 'b'
* });
* // returns 'abbbbbbbbbbb'
*
* @example
* var opts = {
*     'lpad': 'a',
*     'rpad': 'c'
* };
* var str = pad( 'b', 10, opts );
* // returns 'aaaabccccc'
*
* @example
* var opts = {
*     'lpad': 'a',
*     'rpad': 'c',
*     'centerRight': true
* };
* var str = pad( 'b', 10, opts );
* // returns 'aaaaabcccc'
*/
function pad( str, len, options ) {
	var nright;
	var nleft;
	var isodd;
	var right;
	var left;
	var opts;
	var err;
	var tmp;
	var n;
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	if ( !isNonNegativeInteger( len ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', len ) );
	}
	if ( len > FLOAT64_MAX_SAFE_INTEGER ) {
		throw new RangeError( format( 'invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.', len ) );
	}
	opts = {};
	if ( arguments.length > 2 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( opts.lpad && opts.rpad ) {
		n = ( len-str.length ) / 2;
		if ( n === 0 ) {
			return str;
		}
		tmp = floor( n );
		if ( tmp !== n ) {
			isodd = true;
		}
		if ( n < 0 ) {
			n = floor( abs( n ) );
			nleft = n;
			nright = str.length - n;

			// If |len-str.length| is an odd number, take away an additional character from one side...
			if ( isodd ) {
				if ( opts.centerRight ) {
					nright -= 1;
				} else {
					nleft += 1;
				}
			}
			return str.substring( nleft, nright );
		}
		nleft = ceil( n / opts.lpad.length );
		left = repeat( opts.lpad, nleft );

		nright = ceil( n / opts.rpad.length );
		right = repeat( opts.rpad, nright );

		// If (len-str.length) is an odd number, give one side one extra character...
		n = tmp;
		nleft = n;
		nright = n;
		if ( isodd ) {
			if ( opts.centerRight ) {
				nleft += 1;
			} else {
				nright += 1;
			}
		}
		left = left.substring( 0, nleft );
		right = right.substring( 0, nright );
		return left + str + right;
	}
	if ( opts.lpad ) {
		tmp = lpad( str, len, opts.lpad );
		return tmp.substring( tmp.length-len );
	}
	if ( opts.rpad ) {
		return ( rpad( str, len, opts.rpad ) ).substring( 0, len );
	}
	if ( opts.rpad === void 0 ) {
		return ( rpad( str, len, ' ' ) ).substring( 0, len );
	}
	throw new RangeError( format( 'invalid argument. At least one padding option must have a length greater than 0. Left padding: `%s`. Right padding: `%s`.', opts.lpad, opts.rpad ) );
}


// EXPORTS //

module.exports = pad;
