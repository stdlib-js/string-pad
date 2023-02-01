// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pad=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var l,s,f,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(u.call(r,e)||c.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),f="get"in t,p="set"in t,s&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&o&&o.call(r,e,t.get),p&&a&&a.call(r,e,t.set),r};var l=e;function s(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function f(r){return"number"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return p&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;function b(r,e){return null!=r&&h.call(r,e)}var y="function"==typeof Symbol?Symbol.toStringTag:"";var w=g()?function(r){var e,t,n;if(null==r)return d.call(r);t=r[y],e=b(r,y);try{r[y]=void 0}catch(e){return d.call(r)}return n=d.call(r),e?r[y]=t:delete r[y],n}:function(r){return d.call(r)},v=Number,m=v.prototype.toString;var E=g();function j(r){return"object"==typeof r&&(r instanceof v||(E?function(r){try{return m.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function T(r){return f(r)||j(r)}s(T,"isPrimitive",f),s(T,"isObject",j);var _=Number.POSITIVE_INFINITY,O=v.NEGATIVE_INFINITY,S=Math.floor;function x(r){return r<_&&r>O&&S(e=r)===e;var e}function V(r){return f(r)&&x(r)}function R(r){return j(r)&&x(r.valueOf())}function k(r){return V(r)||R(r)}function I(r){return V(r)&&r>=0}function P(r){return R(r)&&r.valueOf()>=0}function F(r){return I(r)||P(r)}function A(r){return"string"==typeof r}s(k,"isPrimitive",V),s(k,"isObject",R),s(F,"isPrimitive",I),s(F,"isObject",P);var L=String.prototype.valueOf;var N=g();function C(r){return"object"==typeof r&&(r instanceof String||(N?function(r){try{return L.call(r),!0}catch(r){return!1}}(r):"[object String]"===w(r)))}function $(r){return A(r)||C(r)}s($,"isPrimitive",A),s($,"isObject",C);var B=9007199254740991;function G(r){return"number"==typeof r}function M(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Z(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+M(i):M(i)+r,n&&(r="-"+r)),r}var U=String.prototype.toLowerCase,W=String.prototype.toUpperCase;function X(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!G(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Z(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Z(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===W.call(r.specifier)?W.call(t):U.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Y(r){return"string"==typeof r}var z=Math.abs,q=String.prototype.toLowerCase,D=String.prototype.toUpperCase,H=String.prototype.replace,J=/e\+(\d)$/,K=/e-(\d)$/,Q=/^(\d+)$/,rr=/^(\d+)e/,er=/\.0$/,tr=/\.0*e/,nr=/(\..*[^0])0*e/;function ir(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!G(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":z(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=H.call(t,nr,"$1e"),t=H.call(t,tr,"e"),t=H.call(t,er,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=H.call(t,J,"e+0$1"),t=H.call(t,K,"e-0$1"),r.alternate&&(t=H.call(t,Q,"$1."),t=H.call(t,rr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===D.call(r.specifier)?D.call(t):q.call(t)}function or(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function ar(r,e,t){var n=e-r.length;return n<0?r:r=t?r+or(n):or(n)+r}var ur=String.fromCharCode,cr=isNaN,lr=Array.isArray;function sr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function fr(r){var e,t,n,i,o,a,u,c,l;if(!lr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(Y(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=sr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,cr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,cr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=X(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!cr(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=cr(o)?String(n.arg):ur(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=ir(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Z(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ar(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var pr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function gr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function dr(r){var e,t,n,i;for(t=[],i=0,n=pr.exec(r);n;)(e=r.slice(i,pr.lastIndex-n[0].length)).length&&t.push(e),t.push(gr(n)),i=pr.lastIndex,n=pr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function hr(r){return"string"==typeof r}function br(r){var e,t,n;if(!hr(r))throw new TypeError(br("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=dr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return fr.apply(null,t)}function yr(r,e){var t,n;if(!A(r))throw new TypeError(br("invalid argument. First argument must be a string. Value: `%s`.",r));if(!I(e))throw new TypeError(br("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(0===r.length||0===e)return"";if(r.length*e>B)throw new RangeError(br("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r.length*e));for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t}function wr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var vr=Math.ceil;function mr(r,e,t){var n,i;if(!A(r))throw new TypeError(br("invalid argument. First argument must be a string. Value: `%s`.",r));if(!I(e))throw new TypeError(br("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!A(i=t))throw new TypeError(br("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(e>B)throw new RangeError(br("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return(n=(e-r.length)/i.length)<=0?r:yr(i,n=vr(n))+r}function Er(r,e,t){var n,i;if(!A(r))throw new TypeError(br("invalid argument. First argument must be a string. Value: `%s`.",r));if(!I(e))throw new TypeError(br("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!A(i=t))throw new TypeError(br("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else i=" ";if(e>B)throw new RangeError(br("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return(n=(e-r.length)/i.length)<=0?r:r+yr(i,n=vr(n))}function jr(r){return Math.abs(r)}var Tr=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};var _r=/./;function Or(r){return"boolean"==typeof r}var Sr=Boolean.prototype.toString;var xr=g();function Vr(r){return"object"==typeof r&&(r instanceof Boolean||(xr?function(r){try{return Sr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function Rr(r){return Or(r)||Vr(r)}function kr(){return new Function("return this;")()}s(Rr,"isPrimitive",Or),s(Rr,"isObject",Vr);var Ir="object"==typeof self?self:null,Pr="object"==typeof window?window:null,Fr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ar="object"==typeof Fr?Fr:null;var Lr=function(r){if(arguments.length){if(!Or(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return kr()}if(Ir)return Ir;if(Pr)return Pr;if(Ar)return Ar;throw new Error("unexpected error. Unable to resolve global object.")}(),Nr=Lr.document&&Lr.document.childNodes,Cr=Int8Array;function $r(){return/^\s*function\s*([^(]*)/i}var Br=/^\s*function\s*([^(]*)/i;function Gr(r){return null!==r&&"object"==typeof r}function Mr(r){var e,t,n,i;if(("Object"===(t=w(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Br.exec(n.toString()))return e[1]}return Gr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}s($r,"REGEXP",Br),s(Gr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Tr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Gr));var Zr="function"==typeof _r||"object"==typeof Cr||"function"==typeof Nr?function(r){return Mr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Mr(r).toLowerCase():e};function Ur(r){return"function"===Zr(r)}var Wr,Xr=Object.getPrototypeOf;Wr=Ur(Object.getPrototypeOf)?Xr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===w(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Yr=Wr;var zr=Object.prototype;function qr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Tr(r)}(r)&&(e=function(r){return null==r?null:(r=Object(r),Yr(r))}(r),!e||!b(r,"constructor")&&b(e,"constructor")&&Ur(e.constructor)&&"[object Function]"===w(e.constructor)&&b(e,"isPrototypeOf")&&Ur(e.isPrototypeOf)&&(e===zr||function(r){var e;for(e in r)if(!b(r,e))return!1;return!0}(r)))}function Dr(r,e){return qr(e)?b(e,"lpad")&&(r.lpad=e.lpad,!A(r.lpad))?new TypeError(wr("0hL2i","lpad",r.lpad)):b(e,"rpad")&&(r.rpad=e.rpad,!A(r.rpad))?new TypeError(wr("0hL2i","rpad",r.rpad)):b(e,"centerRight")&&(r.centerRight=e.centerRight,!Or(r.centerRight))?new TypeError(wr("0hL30","centerRight",r.centerRight)):null:new TypeError(wr("0hL2h",e))}return function(r,e,t){var n,i,o,a,u,c,l,s,f;if(!A(r))throw new TypeError(wr("0hL3R",r));if(!I(e))throw new TypeError(wr("0hL3k",e));if(e>B)throw new RangeError(wr("0hLB7",e));if(c={},arguments.length>2&&(l=Dr(c,t)))throw l;if(c.lpad&&c.rpad)return 0===(f=(e-r.length)/2)?r:((s=S(f))!==f&&(o=!0),f<0?(i=f=S(jr(f)),n=r.length-f,o&&(c.centerRight?n-=1:i+=1),r.substring(i,n)):(i=vr(f/c.lpad.length),u=yr(c.lpad,i),n=vr(f/c.rpad.length),a=yr(c.rpad,n),i=f=s,n=f,o&&(c.centerRight?i+=1:n+=1),(u=u.substring(0,i))+r+(a=a.substring(0,n))));if(c.lpad)return(s=mr(r,e,c.lpad)).substring(s.length-e);if(c.rpad)return Er(r,e,c.rpad).substring(0,e);if(void 0===c.rpad)return Er(r,e," ").substring(0,e);throw new RangeError(wr("0hLB9",c.lpad,c.rpad))}}));
//# sourceMappingURL=browser.js.map
