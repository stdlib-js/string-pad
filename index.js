// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pad=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):s.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function j(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var O=String.fromCharCode,T=isNaN,_=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,o,a,l,s,f,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,f=0;f<r.length;f++)if(c(n=r[f]))l+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,T(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(R(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function k(r){return"string"==typeof r}function I(r){var e,t,n;if(!k(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var P,A=Object.prototype,N=A.toString,C=A.__defineGetter__,$=A.__defineSetter__,z=A.__lookupGetter__,G=A.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(z.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var M=P;function B(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return W&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function Y(r,e){return null!=r&&X.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,q="function"==typeof D?D.toStringTag:"";var H=Z()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[q],e=Y(r,q);try{r[q]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[q]=t:delete r[q],n}:function(r){return U.call(r)},J=Number,K=J.prototype.toString;var Q=Z();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function er(r){return L(r)||rr(r)}B(er,"isPrimitive",L),B(er,"isObject",rr);var tr=Number.POSITIVE_INFINITY,nr=J.NEGATIVE_INFINITY,ir=Math.floor;function or(r){return r<tr&&r>nr&&ir(e=r)===e;var e}function ar(r){return L(r)&&or(r)}function ur(r){return rr(r)&&or(r.valueOf())}function cr(r){return ar(r)||ur(r)}function lr(r){return ar(r)&&r>=0}function sr(r){return ur(r)&&r.valueOf()>=0}function fr(r){return lr(r)||sr(r)}function pr(r){return"string"==typeof r}B(cr,"isPrimitive",ar),B(cr,"isObject",ur),B(fr,"isPrimitive",lr),B(fr,"isObject",sr);var gr=String.prototype.valueOf;var dr=Z();function hr(r){return"object"==typeof r&&(r instanceof String||(dr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function br(r){return pr(r)||hr(r)}B(br,"isPrimitive",pr),B(br,"isObject",hr);var yr=void 0!==String.prototype.repeat;var vr=String.prototype.repeat;var wr=yr?function(r,e){return vr.call(r,e)}:function(r,e){var t,n;if(0===r.length||0===e)return"";for(t="",n=e;1==(1&n)&&(t+=r),0!=(n>>>=1);)r+=r;return t};function mr(r,e){if(!pr(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));if(!lr(e))throw new TypeError(I("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));return wr(r,e)}function Er(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var jr=Math.ceil,Or=9007199254740991;function Tr(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=jr(n),wr(t,n)+r)}function _r(r,e,t){var n;if(!pr(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));if(!lr(e))throw new TypeError(I("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!pr(n=t))throw new TypeError(I("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(e>Or)throw new RangeError(I("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return Tr(r,e,n)}function Sr(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=jr(n),r+wr(t,n))}function xr(r,e,t){var n;if(!pr(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));if(!lr(e))throw new TypeError(I("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!pr(n=t))throw new TypeError(I("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else n=" ";if(e>Or)throw new RangeError(I("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return Sr(r,e,n)}function Vr(r){return Math.abs(r)}var Rr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var Fr=/./;function kr(r){return"boolean"==typeof r}var Ir=Boolean,Pr=Boolean.prototype.toString;var Ar=Z();function Nr(r){return"object"==typeof r&&(r instanceof Ir||(Ar?function(r){try{return Pr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function Cr(r){return kr(r)||Nr(r)}function $r(){return new Function("return this;")()}B(Cr,"isPrimitive",kr),B(Cr,"isObject",Nr);var zr="object"==typeof self?self:null,Gr="object"==typeof window?window:null,Mr="object"==typeof global?global:null,Br="object"==typeof globalThis?globalThis:null;var Lr=function(r){if(arguments.length){if(!kr(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return $r()}if(Br)return Br;if(zr)return zr;if(Gr)return Gr;if(Mr)return Mr;throw new Error("unexpected error. Unable to resolve global object.")}(),Wr=Lr.document&&Lr.document.childNodes,Zr=Int8Array;function Ur(){return/^\s*function\s*([^(]*)/i}var Xr=/^\s*function\s*([^(]*)/i;function Yr(r){return null!==r&&"object"==typeof r}function Dr(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Xr.exec(n.toString()))return e[1]}return Yr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(Ur,"REGEXP",Xr),B(Yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Rr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Yr));var qr="function"==typeof Fr||"object"==typeof Zr||"function"==typeof Wr?function(r){return Dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Dr(r).toLowerCase():e};function Hr(r){return"function"===qr(r)}var Jr,Kr=Object,Qr=Object.getPrototypeOf;Jr=Hr(Object.getPrototypeOf)?Qr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var re=Jr;var ee=Object.prototype;function te(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Rr(r)}(r)&&(e=function(r){return null==r?null:(r=Kr(r),re(r))}(r),!e||!Y(r,"constructor")&&Y(e,"constructor")&&Hr(e.constructor)&&"[object Function]"===H(e.constructor)&&Y(e,"isPrototypeOf")&&Hr(e.isPrototypeOf)&&(e===ee||function(r){var e;for(e in r)if(!Y(r,e))return!1;return!0}(r)))}function ne(r,e){return te(e)?Y(e,"lpad")&&(r.lpad=e.lpad,!pr(r.lpad))?new TypeError(Er("1Oz2W,Gh","lpad",r.lpad)):Y(e,"rpad")&&(r.rpad=e.rpad,!pr(r.rpad))?new TypeError(Er("1Oz2W,Gh","rpad",r.rpad)):Y(e,"centerRight")&&(r.centerRight=e.centerRight,!kr(r.centerRight))?new TypeError(Er("1Oz2o,GE","centerRight",r.centerRight)):null:new TypeError(Er("1Oz2V,FD",e))}return function(r,e,t){var n,i,o,a,u,c,l,s,f;if(!pr(r))throw new TypeError(Er("1Oz3F,Ex",r));if(!lr(e))throw new TypeError(Er("1Oz3X,F1",e));if(e>Or)throw new RangeError(Er("1OzAP,M7",e));if(c={},arguments.length>2&&(l=ne(c,t)))throw l;if(c.lpad&&c.rpad)return 0===(f=(e-r.length)/2)?r:((s=ir(f))!==f&&(o=!0),f<0?(i=f=ir(Vr(f)),n=r.length-f,o&&(c.centerRight?n-=1:i+=1),r.substring(i,n)):(i=jr(f/c.lpad.length),u=mr(c.lpad,i),n=jr(f/c.rpad.length),a=mr(c.rpad,n),i=f=s,n=f,o&&(c.centerRight?i+=1:n+=1),(u=u.substring(0,i))+r+(a=a.substring(0,n))));if(c.lpad)return(s=_r(r,e,c.lpad)).substring(s.length-e);if(c.rpad)return xr(r,e,c.rpad).substring(0,e);if(void 0===c.rpad)return xr(r,e," ").substring(0,e);throw new RangeError(Er("1OzAR,MF",c.lpad,c.rpad))}}));
//# sourceMappingURL=index.js.map
