// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function A(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function S(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,e,n,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(u(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function T(r){var t,e,n,o;for(e=[],o=0,n=x.exec(r);n;)(t=r.slice(o,x.lastIndex-n[0].length)).length&&e.push(t),e.push(F(n)),o=x.lastIndex,n=x.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function N(r){return"string"==typeof r}function k(r){var t,e,n;if(!N(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=T(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return U.apply(null,e)}var I,P=Object.prototype,V=P.toString,C=P.__defineGetter__,$=P.__defineSetter__,R=P.__lookupGetter__,B=P.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(R.call(r,t)||B.call(r,t)?(n=r.__proto__,r.__proto__=P,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,t,e.get),a&&$&&$.call(r,t,e.set),r};var G=I;function L(r,t,e){G(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var Z=Object.prototype.hasOwnProperty;function M(r,t){return null!=r&&Z.call(r,t)}var W="function"==typeof Symbol?Symbol:void 0,X="function"==typeof W&&"symbol"==typeof W("foo")&&M(W,"iterator")&&"symbol"==typeof W.iterator?Symbol.iterator:null;function Y(r){return r!=r}var q=Math.floor;function z(r){return q(r)===r}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return D&&"symbol"==typeof Symbol.toStringTag}var J,K=Object.prototype.toString,Q="function"==typeof W?W.toStringTag:"",rr=H()?function(r){var t,e,n;if(null==r)return K.call(r);e=r[Q],t=M(r,Q);try{r[Q]=void 0}catch(t){return K.call(r)}return n=K.call(r),t?r[Q]=e:delete r[Q],n}:function(r){return K.call(r)},tr="function"==typeof Uint32Array,er="function"==typeof Uint32Array?Uint32Array:null,nr="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,t,e;if("function"!=typeof er)return!1;try{t=new er(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(tr&&e instanceof Uint32Array||"[object Uint32Array]"===rr(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var or,ir=J,ar="function"==typeof Float64Array,cr="function"==typeof Float64Array?Float64Array:null,ur="function"==typeof Float64Array?Float64Array:void 0;or=function(){var r,t,e;if("function"!=typeof cr)return!1;try{t=new cr([1,3.14,-3.14,NaN]),e=t,r=(ar&&e instanceof Float64Array||"[object Float64Array]"===rr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,lr=or,sr="function"==typeof Uint8Array,pr="function"==typeof Uint8Array?Uint8Array:null,yr="function"==typeof Uint8Array?Uint8Array:void 0;fr=function(){var r,t,e;if("function"!=typeof pr)return!1;try{t=new pr(t=[1,3.14,-3.14,256,257]),e=t,r=(sr&&e instanceof Uint8Array||"[object Uint8Array]"===rr(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var dr,gr=fr,br="function"==typeof Uint16Array,hr="function"==typeof Uint16Array?Uint16Array:null,vr="function"==typeof Uint16Array?Uint16Array:void 0;dr=function(){var r,t,e;if("function"!=typeof hr)return!1;try{t=new hr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(br&&e instanceof Uint16Array||"[object Uint16Array]"===rr(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var wr,mr={uint16:dr,uint8:gr};(wr=new mr.uint16(1))[0]=4660;var jr=52===new mr.uint8(wr.buffer)[0],Ar=!0===jr?1:0,_r=new lr(1),Er=new ir(_r.buffer);function Or(r){return _r[0]=r,Er[Ar]}var Sr=!0===jr?1:0,Ur=new lr(1),xr=new ir(Ur.buffer),Fr=Number,Tr=Fr.NEGATIVE_INFINITY,Nr=.6931471803691238,kr=1.9082149292705877e-10,Ir=1048575;function Pr(r){var t,e,n,o,i,a,c,u,f,l,s,p;return 0===r?Tr:Y(r)||r<0?NaN:(i=0,(e=Or(r))<1048576&&(i-=54,e=Or(r*=0x40000000000000)),e>=2146435072?r+r:(i+=(e>>20)-1023|0,i+=(u=614244+(e&=Ir)&1048576|0)>>20|0,c=(r=function(r,t){return Ur[0]=r,xr[Sr]=t>>>0,Ur[0]}(r,e|1072693248^u))-1,(Ir&2+e)<3?0===c?0===i?0:i*Nr+i*kr:(a=c*c*(.5-.3333333333333333*c),0===i?c-a:i*Nr-(a-i*kr-c)):(u=e-398458|0,f=440401-e|0,o=(s=(p=(l=c/(2+c))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+o,(u|=f)>0?(t=.5*c*c,0===i?c-(t-l*(t+a)):i*Nr-(t-(l*(t+a)+i*kr)-c)):0===i?c-l*(c-a):i*Nr-(l*(c-a)-i*kr-c))))}var Vr=Number.POSITIVE_INFINITY,Cr=2.23606797749979,$r=Pr(1.618033988749895);function Rr(r){var t,e;return Y(r)||!1===z(r)||r<1||r===Vr?NaN:(t=Pr((r+=1)*Cr)/$r,e=Pr(Cr*(r+t)-5+3/r)/$r,q(r+e-2))}var Br=Array.isArray?Array.isArray:function(r){return"[object Array]"===rr(r)},Gr=/./;function Lr(r){return"boolean"==typeof r}var Zr=Boolean,Mr=Boolean.prototype.toString,Wr=H();function Xr(r){return"object"==typeof r&&(r instanceof Zr||(Wr?function(r){try{return Mr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===rr(r)))}function Yr(r){return Lr(r)||Xr(r)}function qr(){return new Function("return this;")()}L(Yr,"isPrimitive",Lr),L(Yr,"isObject",Xr);var zr="object"==typeof self?self:null,Dr="object"==typeof window?window:null,Hr="object"==typeof globalThis?globalThis:null,Jr=function(r){if(arguments.length){if(!Lr(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return qr()}if(Hr)return Hr;if(zr)return zr;if(Dr)return Dr;throw new Error("unexpected error. Unable to resolve global object.")}(),Kr=Jr.document&&Jr.document.childNodes,Qr=Int8Array;function rt(){return/^\s*function\s*([^(]*)/i}var tt=/^\s*function\s*([^(]*)/i;function et(r){return null!==r&&"object"==typeof r}function nt(r){var t,e,n,o;if(("Object"===(e=rr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=tt.exec(n.toString()))return t[1]}return et(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}L(rt,"REGEXP",tt),L(et,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!Br(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(et));var ot="function"==typeof Gr||"object"==typeof Qr||"function"==typeof Kr?function(r){return nt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?nt(r).toLowerCase():t};function it(r){return"function"===ot(r)}var at,ct=Object,ut=Object.getPrototypeOf;at=it(Object.getPrototypeOf)?ut:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ft=at,lt=Object.prototype;function st(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!Br(r)}(r)&&(t=function(r){return null==r?null:(r=ct(r),ft(r))}(r),!t||!M(r,"constructor")&&M(t,"constructor")&&it(t.constructor)&&"[object Function]"===rr(t.constructor)&&M(t,"isPrototypeOf")&&it(t.isPrototypeOf)&&(t===lt||function(r){var t;for(t in r)if(!M(r,t))return!1;return!0}(r)))}function pt(r){return"number"==typeof r}var yt=Fr.prototype.toString,dt=H();function gt(r){return"object"==typeof r&&(r instanceof Fr||(dt?function(r){try{return yt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===rr(r)))}function bt(r){return pt(r)||gt(r)}function ht(r){return r<Vr&&r>Tr&&z(r)}function vt(r){return pt(r)&&ht(r)}function wt(r){return gt(r)&&ht(r.valueOf())}function mt(r){return vt(r)||wt(r)}function jt(r){return vt(r)&&r>=0}function At(r){return wt(r)&&r.valueOf()>=0}function _t(r){return jt(r)||At(r)}function Et(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function Ot(r,t){return st(t)?M(t,"iter")&&(r.iter=t.iter,!jt(t.iter))?new TypeError(Et("0aN2t,G9","iter",t.iter)):null:new TypeError(Et("0aN2V,FD",t))}return L(bt,"isPrimitive",pt),L(bt,"isObject",gt),L(mt,"isPrimitive",vt),L(mt,"isObject",wt),L(_t,"isPrimitive",jt),L(_t,"isObject",At),function r(t){var e,n,o,i,a;if(e={iter:1e308},arguments.length&&(i=Ot(e,t)))throw i;return a=0,L(n={},"next",c),L(n,"return",u),X&&L(n,X,f),n;function c(){return a+=1,o||a>e.iter?{done:!0}:{value:Rr(a),done:!1}}function u(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return r(e)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterNonFibonacciSeq=t();
//# sourceMappingURL=browser.js.map
