// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,w=/(\..*[^0])0*e/;function v(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=f.call(n,w,"$1e"),n=f.call(n,y,"e"),n=f.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),r.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+m(n):m(n)+r}var j=String.fromCharCode,O=Array.isArray;function T(r){return r!=r}function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,c,l,s,f;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))c+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,T(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),c+=n.arg||"",l+=1}return c}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function k(r){var e,t;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[R(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var I,P=Object.prototype,F=P.toString,A=P.__defineGetter__,C=P.__defineSetter__,$=P.__lookupGetter__,z=P.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||z.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&A&&A.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var N=I;function B(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){return"number"==typeof r}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return L&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,Z=Object.prototype.hasOwnProperty;function U(r,e){return null!=r&&Z.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",q=M()?function(r){var e,t,n;if(null==r)return W.call(r);t=r[Y],e=U(r,Y);try{r[Y]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return W.call(r)},D=Number,H=D.prototype.toString,J=M();function K(r){return"object"==typeof r&&(r instanceof D||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function Q(r){return G(r)||K(r)}B(Q,"isPrimitive",G),B(Q,"isObject",K);var rr=Number.POSITIVE_INFINITY,er=D.NEGATIVE_INFINITY,tr=Math.floor;function nr(r){return r<rr&&r>er&&tr(e=r)===e;var e}function ir(r){return G(r)&&nr(r)}function or(r){return K(r)&&nr(r.valueOf())}function ar(r){return ir(r)||or(r)}function ur(r){return ir(r)&&r>=0}function cr(r){return or(r)&&r.valueOf()>=0}function lr(r){return ur(r)||cr(r)}function sr(r){return"string"==typeof r}B(ar,"isPrimitive",ir),B(ar,"isObject",or),B(lr,"isPrimitive",ur),B(lr,"isObject",cr);var fr=String.prototype.valueOf,pr=M();function gr(r){return"object"==typeof r&&(r instanceof String||(pr?function(r){try{return fr.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function dr(r){return sr(r)||gr(r)}B(dr,"isPrimitive",sr),B(dr,"isObject",gr);var hr=void 0!==String.prototype.repeat,br=String.prototype.repeat,yr=hr?function(r,e){return br.call(r,e)}:function(r,e){var t,n;if(0===r.length||0===e)return"";for(t="",n=e;1==(1&n)&&(t+=r),0!=(n>>>=1);)r+=r;return t};function wr(r,e){if(!sr(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));if(!ur(e))throw new TypeError(k("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));return yr(r,e)}function vr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}var mr=Math.ceil,Er=9007199254740991;function jr(r,e,t){var n;if(!sr(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));if(!ur(e))throw new TypeError(k("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!sr(n=t))throw new TypeError(k("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(e>Er)throw new RangeError(k("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return function(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=mr(n),yr(t,n)+r)}(r,e,n)}function Or(r,e,t){var n;if(!sr(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));if(!ur(e))throw new TypeError(k("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!sr(n=t))throw new TypeError(k("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else n=" ";if(e>Er)throw new RangeError(k("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return function(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=mr(n),r+yr(t,n))}(r,e,n)}var Tr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)},_r=/./;function Sr(r){return"boolean"==typeof r}var Vr=Boolean,xr=Boolean.prototype.toString,Rr=M();function kr(r){return"object"==typeof r&&(r instanceof Vr||(Rr?function(r){try{return xr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Ir(r){return Sr(r)||kr(r)}B(Ir,"isPrimitive",Sr),B(Ir,"isObject",kr);var Pr="object"==typeof self?self:null,Fr="object"==typeof window?window:null,Ar="object"==typeof globalThis?globalThis:null,Cr=function(r){if(arguments.length){if(!Sr(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Ar)return Ar;if(Pr)return Pr;if(Fr)return Fr;throw new Error("unexpected error. Unable to resolve global object.")}(),$r=Cr.document&&Cr.document.childNodes,zr=Int8Array;function Nr(){return/^\s*function\s*([^(]*)/i}var Br=/^\s*function\s*([^(]*)/i;function Gr(r){return null!==r&&"object"==typeof r}function Lr(r){var e,t,n,i;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Br.exec(n.toString()))return e[1]}return Gr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(Nr,"REGEXP",Br),B(Gr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Tr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Gr));var Mr="function"==typeof _r||"object"==typeof zr||"function"==typeof $r?function(r){return Lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Lr(r).toLowerCase():e};function Wr(r){return"function"===Mr(r)}var Zr,Ur=Object,Xr=Object.getPrototypeOf;Zr=Wr(Object.getPrototypeOf)?Xr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Yr=Zr,qr=Object.prototype;function Dr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Tr(r)}(r)&&(e=function(r){return null==r?null:(r=Ur(r),Yr(r))}(r),!e||!U(r,"constructor")&&U(e,"constructor")&&Wr(e.constructor)&&"[object Function]"===q(e.constructor)&&U(e,"isPrototypeOf")&&Wr(e.isPrototypeOf)&&(e===qr||function(r){var e;for(e in r)if(!U(r,e))return!1;return!0}(r)))}return function(r,e,t){var n,i,o,a,u,c,l,s,f,p;if(!sr(r))throw new TypeError(vr("1Oz3F",r));if(!ur(e))throw new TypeError(vr("1Oz3X",e));if(e>Er)throw new RangeError(vr("1OzAP",e));if(c={},arguments.length>2&&(l=function(r,e){return Dr(e)?U(e,"lpad")&&(r.lpad=e.lpad,!sr(r.lpad))?new TypeError(vr("1Oz2W","lpad",r.lpad)):U(e,"rpad")&&(r.rpad=e.rpad,!sr(r.rpad))?new TypeError(vr("1Oz2W","rpad",r.rpad)):U(e,"centerRight")&&(r.centerRight=e.centerRight,!Sr(r.centerRight))?new TypeError(vr("1Oz2o","centerRight",r.centerRight)):null:new TypeError(vr("1Oz2V",e))}(c,t)))throw l;if(c.lpad&&c.rpad)return 0==(f=(e-r.length)/2)?r:((s=tr(f))!==f&&(o=!0),f<0?(i=f=tr((p=f,Math.abs(p))),n=r.length-f,o&&(c.centerRight?n-=1:i+=1),r.substring(i,n)):(i=mr(f/c.lpad.length),u=wr(c.lpad,i),n=mr(f/c.rpad.length),a=wr(c.rpad,n),i=f=s,n=f,o&&(c.centerRight?i+=1:n+=1),(u=u.substring(0,i))+r+(a=a.substring(0,n))));if(c.lpad)return(s=jr(r,e,c.lpad)).substring(s.length-e);if(c.rpad)return Or(r,e,c.rpad).substring(0,e);if(void 0===c.rpad)return Or(r,e," ").substring(0,e);throw new RangeError(vr("1OzAR",c.lpad,c.rpad))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pad=e();
//# sourceMappingURL=browser.js.map
