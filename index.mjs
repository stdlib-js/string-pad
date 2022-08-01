// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";function g(t,s){return a(s)?l(s,"lpad")&&(t.lpad=s.lpad,!r(t.lpad))?new TypeError(e("0hL2i","lpad",t.lpad)):l(s,"rpad")&&(t.rpad=s.rpad,!r(t.rpad))?new TypeError(e("0hL2i","rpad",t.rpad)):l(s,"centerRight")&&(t.centerRight=s.centerRight,!o(t.centerRight))?new TypeError(e("0hL30","centerRight",t.centerRight)):null:new TypeError(e("0hL2h",s))}function j(a,l,o){var j,c,f,b,v,u,x,w,R;if(!r(a))throw new TypeError(e("0hL3R",a));if(!t(l))throw new TypeError(e("0hL3k",l));if(l>h)throw new RangeError(e("0hLB7",l));if(u={},arguments.length>2&&(x=g(u,o)))throw x;if(u.lpad&&u.rpad)return 0===(R=(l-a.length)/2)?a:((w=i(R))!==R&&(f=!0),R<0?(c=R=i(m(R)),j=a.length-R,f&&(u.centerRight?j-=1:c+=1),a.substring(c,j)):(c=n(R/u.lpad.length),v=s(u.lpad,c),j=n(R/u.rpad.length),b=s(u.rpad,j),c=R=w,j=R,f&&(u.centerRight?c+=1:j+=1),(v=v.substring(0,c))+a+(b=b.substring(0,j))));if(u.lpad)return(w=d(a,l,u.lpad)).substring(w.length-l);if(u.rpad)return p(a,l,u.rpad).substring(0,l);if(void 0===u.rpad)return p(a,l," ").substring(0,l);throw new RangeError(e("0hLB9",u.lpad,u.rpad))}export{j as default};
//# sourceMappingURL=index.mjs.map
