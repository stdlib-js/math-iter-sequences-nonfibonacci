"use strict";var o=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var f=o(function(E,s){
var x=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,v=require('@stdlib/error-tools-fmtprodmsg/dist');function h(t,r){return x(r)?y(r,"iter")&&(t.iter=r.iter,!O(r.iter))?new TypeError(v('0aN2t',"iter",r.iter)):null:new TypeError(v('0aN2V',r));}s.exports=h
});var g=o(function(F,d){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=require('@stdlib/symbol-iterator/dist'),w=require('@stdlib/math-base-special-nonfibonacci/dist'),N=f();function l(t){var r,e,u,n,i;if(r={iter:1e308},arguments.length&&(n=N(r,t),n))throw n;return i=0,e={},a(e,"next",m),a(e,"return",q),c&&a(e,c,b),e;function m(){return i+=1,u||i>r.iter?{done:!0}:{value:w(i),done:!1}}function q(p){return u=!0,arguments.length?{value:p,done:!0}:{done:!0}}function b(){return l(r)}}d.exports=l
});var P=g();module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
