"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=f(function(B,m){
var y=require('@stdlib/assert-is-plain-object/dist'),o=require('@stdlib/assert-has-own-property/dist'),h=require('@stdlib/assert-is-string/dist').isPrimitive,P=require('@stdlib/assert-is-boolean/dist').isPrimitive,v=require('@stdlib/error-tools-fmtprodmsg/dist');function x(e,r){return y(r)?o(r,"lpad")&&(e.lpad=r.lpad,!h(e.lpad))?new TypeError(v('1Oz2W',"lpad",e.lpad)):o(r,"rpad")&&(e.rpad=r.rpad,!h(e.rpad))?new TypeError(v('1Oz2W',"rpad",e.rpad)):o(r,"centerRight")&&(e.centerRight=r.centerRight,!P(e.centerRight))?new TypeError(v('1Oz2o',"centerRight",e.centerRight)):null:new TypeError(v('1Oz2V',r));}m.exports=x
});var O=f(function(G,E){
var A=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,S=require('@stdlib/assert-is-string/dist').isPrimitive,q=require('@stdlib/string-repeat/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),b=require('@stdlib/math-base-special-floor/dist'),w=require('@stdlib/math-base-special-ceil/dist'),V=require('@stdlib/string-left-pad/dist'),R=require('@stdlib/string-right-pad/dist'),F=require('@stdlib/math-base-special-abs/dist'),N=require('@stdlib/constants-float64-max-safe-integer/dist'),_=c();function j(e,r,T){var t,n,l,g,d,i,s,u,a;if(!S(e))throw new TypeError(p('1Oz3F',e));if(!A(r))throw new TypeError(p('1Oz3X',r));if(r>N)throw new RangeError(p('1OzAP',r));if(i={},arguments.length>2&&(s=_(i,T),s))throw s;if(i.lpad&&i.rpad)return a=(r-e.length)/2,a===0?e:(u=b(a),u!==a&&(l=!0),a<0?(a=b(F(a)),n=a,t=e.length-a,l&&(i.centerRight?t-=1:n+=1),e.substring(n,t)):(n=w(a/i.lpad.length),d=q(i.lpad,n),t=w(a/i.rpad.length),g=q(i.rpad,t),a=u,n=a,t=a,l&&(i.centerRight?n+=1:t+=1),d=d.substring(0,n),g=g.substring(0,t),d+e+g));if(i.lpad)return u=V(e,r,i.lpad),u.substring(u.length-r);if(i.rpad)return R(e,r,i.rpad).substring(0,r);if(i.rpad===void 0)return R(e,r," ").substring(0,r);throw new RangeError(p('1OzAR',i.lpad,i.rpad))}E.exports=j
});var I=O();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map