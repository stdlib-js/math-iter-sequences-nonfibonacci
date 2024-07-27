// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-nonfibonacci@v0.3.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function d(m){var l,p,j,a,f;if(l={iter:1e308},arguments.length&&(a=function(e,t){return n(t)?s(t,"iter")&&(e.iter=t.iter,!i(t.iter))?new TypeError(o("0aN2t","iter",t.iter)):null:new TypeError(o("0aN2V",t))}(l,m),a))throw a;return f=0,e(p={},"next",(function(){if(f+=1,j||f>l.iter)return{done:!0};return{value:r(f),done:!1}})),e(p,"return",(function(e){if(j=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),t&&e(p,t,(function(){return d(l)})),p}export{d as default};
//# sourceMappingURL=index.mjs.map
