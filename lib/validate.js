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

var isPlainObject = require( '@stdlib/assert-is-plain-object' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var format = require( '@stdlib/error-tools-fmtprodmsg' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - options to validate
* @param {string} [options.lpad] - string used to left pad
* @param {string} [options.rpad] - string used to right pad
* @param {boolean} [options.centerRight] - boolean indicating whether to center right in the event of a tie
* @returns {(null|Error)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'lpad': 'a',
*     'rpad': 'b'
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isPlainObject( options ) ) {
		return new TypeError( format( '0hL2h', options ) );
	}
	if ( hasOwnProp( options, 'lpad' ) ) {
		opts.lpad = options.lpad;
		if ( !isString( opts.lpad ) ) {
			return new TypeError( format( '0hL2i', 'lpad', opts.lpad ) );
		}
	}
	if ( hasOwnProp( options, 'rpad' ) ) {
		opts.rpad = options.rpad;
		if ( !isString( opts.rpad ) ) {
			return new TypeError( format( '0hL2i', 'rpad', opts.rpad ) );
		}
	}
	if ( hasOwnProp( options, 'centerRight' ) ) {
		opts.centerRight = options.centerRight;
		if ( !isBoolean( opts.centerRight ) ) {
			return new TypeError( format( '0hL30', 'centerRight', opts.centerRight ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;