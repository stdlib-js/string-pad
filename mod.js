// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,m=/\.0*e/,y=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,y,"$1e"),n=p.call(n,m,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):s.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function j(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var O=String.fromCharCode,T=isNaN,_=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,t,n,o,a,l,s,f,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,f=0;f<r.length;f++)if(c(n=r[f]))l+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,T(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(R(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function I(r){var e,t;if(!F(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return V.apply(null,e)}var P,A=Object.prototype,N=A.toString,$=A.__defineGetter__,C=A.__defineSetter__,B=A.__lookupGetter__,L=A.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var G=P;function M(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return W&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&Y.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var H=U()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[D],e=z(r,D);try{r[D]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[D]=t:delete r[D],n}:function(r){return X.call(r)},J=Number,K=J.prototype.toString;var Q=U();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function er(r){return Z(r)||rr(r)}M(er,"isPrimitive",Z),M(er,"isObject",rr);var tr=Number.POSITIVE_INFINITY,nr=J.NEGATIVE_INFINITY,ir=Math.floor;function or(r){return r<tr&&r>nr&&ir(e=r)===e;var e}function ar(r){return Z(r)&&or(r)}function ur(r){return rr(r)&&or(r.valueOf())}function cr(r){return ar(r)||ur(r)}function lr(r){return ar(r)&&r>=0}function sr(r){return ur(r)&&r.valueOf()>=0}function fr(r){return lr(r)||sr(r)}function pr(r){return"string"==typeof r}M(cr,"isPrimitive",ar),M(cr,"isObject",ur),M(fr,"isPrimitive",lr),M(fr,"isObject",sr);var gr=String.prototype.valueOf;var dr=U();function hr(r){return"object"==typeof r&&(r instanceof String||(dr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function br(r){return pr(r)||hr(r)}M(br,"isPrimitive",pr),M(br,"isObject",hr);var vr=void 0!==String.prototype.repeat;var mr=String.prototype.repeat;var yr=vr?function(r,e){return mr.call(r,e)}:function(r,e){var t,n;if(0===r.length||0===e)return"";for(t="",n=e;1==(1&n)&&(t+=r),0!=(n>>>=1);)r+=r;return t};function wr(r,e){if(!pr(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));if(!lr(e))throw new TypeError(I("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));return yr(r,e)}var Er=Math.ceil;function jr(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=Er(n),yr(t,n)+r)}function Or(r,e,t){var n;if(!pr(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));if(!lr(e))throw new TypeError(I("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!pr(n=t))throw new TypeError(I("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(e>9007199254740991)throw new RangeError(I("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return jr(r,e,n)}function Tr(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=Er(n),r+yr(t,n))}function _r(r,e,t){var n;if(!pr(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));if(!lr(e))throw new TypeError(I("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!pr(n=t))throw new TypeError(I("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else n=" ";if(e>9007199254740991)throw new RangeError(I("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return Tr(r,e,n)}function Sr(r){return Math.abs(r)}var Vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var xr=/./;function Rr(r){return"boolean"==typeof r}var kr=Boolean,Fr=Boolean.prototype.toString;var Ir=U();function Pr(r){return"object"==typeof r&&(r instanceof kr||(Ir?function(r){try{return Fr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function Ar(r){return Rr(r)||Pr(r)}function Nr(){return new Function("return this;")()}M(Ar,"isPrimitive",Rr),M(Ar,"isObject",Pr);var $r="object"==typeof self?self:null,Cr="object"==typeof window?window:null,Br="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Lr="object"==typeof Br?Br:null,Gr="object"==typeof globalThis?globalThis:null;var Mr=function(r){if(arguments.length){if(!Rr(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Nr()}if(Gr)return Gr;if($r)return $r;if(Cr)return Cr;if(Lr)return Lr;throw new Error("unexpected error. Unable to resolve global object.")}(),Zr=Mr.document&&Mr.document.childNodes,Wr=Int8Array;function Ur(){return/^\s*function\s*([^(]*)/i}var Xr=/^\s*function\s*([^(]*)/i;function Yr(r){return null!==r&&"object"==typeof r}function zr(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Xr.exec(n.toString()))return e[1]}return Yr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(Ur,"REGEXP",Xr),M(Yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Vr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Yr));var qr="function"==typeof xr||"object"==typeof Wr||"function"==typeof Zr?function(r){return zr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?zr(r).toLowerCase():e};function Dr(r){return"function"===qr(r)}var Hr,Jr=Object,Kr=Object.getPrototypeOf;Hr=Dr(Object.getPrototypeOf)?Kr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Qr=Hr;var re=Object.prototype;function ee(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Vr(r)}(r)&&(e=function(r){return null==r?null:(r=Jr(r),Qr(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&Dr(e.constructor)&&"[object Function]"===H(e.constructor)&&z(e,"isPrototypeOf")&&Dr(e.isPrototypeOf)&&(e===re||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}function te(r,e){return ee(e)?z(e,"lpad")&&(r.lpad=e.lpad,!pr(r.lpad))?new TypeError(I("invalid option. `%s` option must be a string. Option: `%s`.","lpad",r.lpad)):z(e,"rpad")&&(r.rpad=e.rpad,!pr(r.rpad))?new TypeError(I("invalid option. `%s` option must be a string. Option: `%s`.","rpad",r.rpad)):z(e,"centerRight")&&(r.centerRight=e.centerRight,!Rr(r.centerRight))?new TypeError(I("invalid option. `%s` option must be a boolean. Option: `%s`.","centerRight",r.centerRight)):null:new TypeError(I("invalid argument. Options argument must be an object. Value: `%s`.",e))}function ne(r,e,t){var n,i,o,a,u,c,l,s,f;if(!pr(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));if(!lr(e))throw new TypeError(I("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e>9007199254740991)throw new RangeError(I("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));if(c={},arguments.length>2&&(l=te(c,t)))throw l;if(c.lpad&&c.rpad)return 0===(f=(e-r.length)/2)?r:((s=ir(f))!==f&&(o=!0),f<0?(i=f=ir(Sr(f)),n=r.length-f,o&&(c.centerRight?n-=1:i+=1),r.substring(i,n)):(i=Er(f/c.lpad.length),u=wr(c.lpad,i),n=Er(f/c.rpad.length),a=wr(c.rpad,n),i=f=s,n=f,o&&(c.centerRight?i+=1:n+=1),(u=u.substring(0,i))+r+(a=a.substring(0,n))));if(c.lpad)return(s=Or(r,e,c.lpad)).substring(s.length-e);if(c.rpad)return _r(r,e,c.rpad).substring(0,e);if(void 0===c.rpad)return _r(r,e," ").substring(0,e);throw new RangeError(I("invalid argument. At least one padding option must have a length greater than 0. Left padding: `%s`. Right padding: `%s`.",c.lpad,c.rpad))}export{ne as default};
//# sourceMappingURL=mod.js.map
