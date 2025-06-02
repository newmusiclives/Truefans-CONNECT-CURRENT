function oE(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function V0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var j0={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),iE=Symbol.for("react.portal"),aE=Symbol.for("react.fragment"),lE=Symbol.for("react.strict_mode"),sE=Symbol.for("react.profiler"),cE=Symbol.for("react.provider"),uE=Symbol.for("react.context"),dE=Symbol.for("react.forward_ref"),mE=Symbol.for("react.suspense"),pE=Symbol.for("react.memo"),fE=Symbol.for("react.lazy"),dh=Symbol.iterator;function hE(e){return e===null||typeof e!="object"?null:(e=dh&&e[dh]||e["@@iterator"],typeof e=="function"?e:null)}var W0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_0=Object.assign,U0={};function Oo(e,t,n){this.props=e,this.context=t,this.refs=U0,this.updater=n||W0}Oo.prototype.isReactComponent={};Oo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Oo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function H0(){}H0.prototype=Oo.prototype;function Rp(e,t,n){this.props=e,this.context=t,this.refs=U0,this.updater=n||W0}var Ip=Rp.prototype=new H0;Ip.constructor=Rp;_0(Ip,Oo.prototype);Ip.isPureReactComponent=!0;var mh=Array.isArray,G0=Object.prototype.hasOwnProperty,Mp={current:null},Y0={key:!0,ref:!0,__self:!0,__source:!0};function Q0(e,t,n){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)G0.call(t,r)&&!Y0.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var u=Array(c),d=0;d<c;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:sa,type:e,key:a,ref:l,props:i,_owner:Mp.current}}function gE(e,t){return{$$typeof:sa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bp(e){return typeof e=="object"&&e!==null&&e.$$typeof===sa}function yE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ph=/\/+/g;function Lc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yE(""+e.key):t.toString(36)}function Ul(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case sa:case iE:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Lc(l,0):r,mh(i)?(n="",e!=null&&(n=e.replace(ph,"$&/")+"/"),Ul(i,t,n,"",function(d){return d})):i!=null&&(Bp(i)&&(i=gE(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ph,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",mh(e))for(var c=0;c<e.length;c++){a=e[c];var u=r+Lc(a,c);l+=Ul(a,t,n,u,i)}else if(u=hE(e),typeof u=="function")for(e=u.call(e),c=0;!(a=e.next()).done;)a=a.value,u=r+Lc(a,c++),l+=Ul(a,t,n,u,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function va(e,t,n){if(e==null)return e;var r=[],i=0;return Ul(e,r,"","",function(a){return t.call(n,a,i++)}),r}function vE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ot={current:null},Hl={transition:null},$E={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:Mp};function K0(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:va,forEach:function(e,t,n){va(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return va(e,function(){t++}),t},toArray:function(e){return va(e,function(t){return t})||[]},only:function(e){if(!Bp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Oo;X.Fragment=aE;X.Profiler=sE;X.PureComponent=Rp;X.StrictMode=lE;X.Suspense=mE;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$E;X.act=K0;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_0({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=Mp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)G0.call(t,u)&&!Y0.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&c!==void 0?c[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var d=0;d<u;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:sa,type:e.type,key:i,ref:a,props:r,_owner:l}};X.createContext=function(e){return e={$$typeof:uE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cE,_context:e},e.Consumer=e};X.createElement=Q0;X.createFactory=function(e){var t=Q0.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:dE,render:e}};X.isValidElement=Bp;X.lazy=function(e){return{$$typeof:fE,_payload:{_status:-1,_result:e},_init:vE}};X.memo=function(e,t){return{$$typeof:pE,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Hl.transition;Hl.transition={};try{e()}finally{Hl.transition=t}};X.unstable_act=K0;X.useCallback=function(e,t){return ot.current.useCallback(e,t)};X.useContext=function(e){return ot.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return ot.current.useDeferredValue(e)};X.useEffect=function(e,t){return ot.current.useEffect(e,t)};X.useId=function(){return ot.current.useId()};X.useImperativeHandle=function(e,t,n){return ot.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return ot.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return ot.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return ot.current.useMemo(e,t)};X.useReducer=function(e,t,n){return ot.current.useReducer(e,t,n)};X.useRef=function(e){return ot.current.useRef(e)};X.useState=function(e){return ot.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return ot.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return ot.current.useTransition()};X.version="18.3.1";j0.exports=X;var b=j0.exports;const o=V0(b),xE=oE({__proto__:null,default:o},[b]);var Em={},X0={exports:{}},Et={},J0={exports:{}},q0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,O){var W=F.length;F.push(O);e:for(;0<W;){var V=W-1>>>1,N=F[V];if(0<i(N,O))F[V]=O,F[W]=N,W=V;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var O=F[0],W=F.pop();if(W!==O){F[0]=W;e:for(var V=0,N=F.length,D=N>>>1;V<D;){var T=2*(V+1)-1,j=F[T],S=T+1,Q=F[S];if(0>i(j,W))S<N&&0>i(Q,j)?(F[V]=Q,F[S]=W,V=S):(F[V]=j,F[T]=W,V=T);else if(S<N&&0>i(Q,W))F[V]=Q,F[S]=W,V=S;else break e}}return O}function i(F,O){var W=F.sortIndex-O.sortIndex;return W!==0?W:F.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var u=[],d=[],p=1,m=null,f=3,g=!1,$=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var O=n(d);O!==null;){if(O.callback===null)r(d);else if(O.startTime<=F)r(d),O.sortIndex=O.expirationTime,t(u,O);else break;O=n(d)}}function E(F){if(x=!1,y(F),!$)if(n(u)!==null)$=!0,ne(k);else{var O=n(d);O!==null&&le(E,O.startTime-F)}}function k(F,O){$=!1,x&&(x=!1,v(C),C=-1),g=!0;var W=f;try{for(y(O),m=n(u);m!==null&&(!(m.expirationTime>O)||F&&!ae());){var V=m.callback;if(typeof V=="function"){m.callback=null,f=m.priorityLevel;var N=V(m.expirationTime<=O);O=e.unstable_now(),typeof N=="function"?m.callback=N:m===n(u)&&r(u),y(O)}else r(u);m=n(u)}if(m!==null)var D=!0;else{var T=n(d);T!==null&&le(E,T.startTime-O),D=!1}return D}finally{m=null,f=W,g=!1}}var z=!1,P=null,C=-1,M=5,B=-1;function ae(){return!(e.unstable_now()-B<M)}function H(){if(P!==null){var F=e.unstable_now();B=F;var O=!0;try{O=P(!0,F)}finally{O?ee():(z=!1,P=null)}}else z=!1}var ee;if(typeof h=="function")ee=function(){h(H)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,de=I.port2;I.port1.onmessage=H,ee=function(){de.postMessage(null)}}else ee=function(){w(H,0)};function ne(F){P=F,z||(z=!0,ee())}function le(F,O){C=w(function(){F(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){$||g||($=!0,ne(k))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(F){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var W=f;f=O;try{return F()}finally{f=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,O){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=f;f=F;try{return O()}finally{f=W}},e.unstable_scheduleCallback=function(F,O,W){var V=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?V+W:V):W=V,F){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=W+N,F={id:p++,callback:O,priorityLevel:F,startTime:W,expirationTime:N,sortIndex:-1},W>V?(F.sortIndex=W,t(d,F),n(u)===null&&F===n(d)&&(x?(v(C),C=-1):x=!0,le(E,W-V))):(F.sortIndex=N,t(u,F),$||g||($=!0,ne(k))),F},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(F){var O=f;return function(){var W=f;f=O;try{return F.apply(this,arguments)}finally{f=W}}}})(q0);J0.exports=q0;var EE=J0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wE=b,$t=EE;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z0=new Set,Oi={};function yr(e,t){zo(e,t),zo(e+"Capture",t)}function zo(e,t){for(Oi[e]=t,e=0;e<t.length;e++)Z0.add(t[e])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wm=Object.prototype.hasOwnProperty,bE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fh={},hh={};function SE(e){return wm.call(hh,e)?!0:wm.call(fh,e)?!1:bE.test(e)?hh[e]=!0:(fh[e]=!0,!1)}function kE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function TE(e,t,n,r){if(t===null||typeof t>"u"||kE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var Op=/[\-:]([a-z])/g;function Vp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Op,Vp);Ue[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Op,Vp);Ue[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Op,Vp);Ue[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function jp(e,t,n,r){var i=Ue.hasOwnProperty(t)?Ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(TE(t,n,i,r)&&(n=null),r||i===null?SE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yn=wE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),oo=Symbol.for("react.portal"),io=Symbol.for("react.fragment"),Wp=Symbol.for("react.strict_mode"),bm=Symbol.for("react.profiler"),ev=Symbol.for("react.provider"),tv=Symbol.for("react.context"),_p=Symbol.for("react.forward_ref"),Sm=Symbol.for("react.suspense"),km=Symbol.for("react.suspense_list"),Up=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),nv=Symbol.for("react.offscreen"),gh=Symbol.iterator;function Yo(e){return e===null||typeof e!="object"?null:(e=gh&&e[gh]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Dc;function xi(e){if(Dc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Dc=t&&t[1]||""}return`
`+Dc+e}var Rc=!1;function Ic(e,t){if(!e||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,c=a.length-1;1<=l&&0<=c&&i[l]!==a[c];)c--;for(;1<=l&&0<=c;l--,c--)if(i[l]!==a[c]){if(l!==1||c!==1)do if(l--,c--,0>c||i[l]!==a[c]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=c);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xi(e):""}function CE(e){switch(e.tag){case 5:return xi(e.type);case 16:return xi("Lazy");case 13:return xi("Suspense");case 19:return xi("SuspenseList");case 0:case 2:case 15:return e=Ic(e.type,!1),e;case 11:return e=Ic(e.type.render,!1),e;case 1:return e=Ic(e.type,!0),e;default:return""}}function Tm(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case io:return"Fragment";case oo:return"Portal";case bm:return"Profiler";case Wp:return"StrictMode";case Sm:return"Suspense";case km:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tv:return(e.displayName||"Context")+".Consumer";case ev:return(e._context.displayName||"Context")+".Provider";case _p:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Up:return t=e.displayName||null,t!==null?t:Tm(e.type)||"Memo";case wn:t=e._payload,e=e._init;try{return Tm(e(t))}catch{}}return null}function zE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tm(t);case 8:return t===Wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function PE(e){var t=rv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xa(e){e._valueTracker||(e._valueTracker=PE(e))}function ov(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function is(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cm(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_n(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function iv(e,t){t=t.checked,t!=null&&jp(e,"checked",t,!1)}function zm(e,t){iv(e,t);var n=_n(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pm(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pm(e,t.type,_n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pm(e,t,n){(t!=="number"||is(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ei=Array.isArray;function wo(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_n(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Am(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $h(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Ei(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_n(n)}}function av(e,t){var n=_n(t.value),r=_n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function lv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fm(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?lv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ea,sv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ea=Ea||document.createElement("div"),Ea.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ea.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},AE=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(e){AE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ki[t]=ki[e]})});function cv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ki.hasOwnProperty(e)&&ki[e]?(""+t).trim():t+"px"}function uv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var FE=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nm(e,t){if(t){if(FE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Lm(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dm=null;function Hp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rm=null,bo=null,So=null;function Eh(e){if(e=da(e)){if(typeof Rm!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Gs(t),Rm(e.stateNode,e.type,t))}}function dv(e){bo?So?So.push(e):So=[e]:bo=e}function mv(){if(bo){var e=bo,t=So;if(So=bo=null,Eh(e),t)for(e=0;e<t.length;e++)Eh(t[e])}}function pv(e,t){return e(t)}function fv(){}var Mc=!1;function hv(e,t,n){if(Mc)return e(t,n);Mc=!0;try{return pv(e,t,n)}finally{Mc=!1,(bo!==null||So!==null)&&(fv(),mv())}}function ji(e,t){var n=e.stateNode;if(n===null)return null;var r=Gs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Im=!1;if(mn)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){Im=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{Im=!1}function NE(e,t,n,r,i,a,l,c,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(p){this.onError(p)}}var Ti=!1,as=null,ls=!1,Mm=null,LE={onError:function(e){Ti=!0,as=e}};function DE(e,t,n,r,i,a,l,c,u){Ti=!1,as=null,NE.apply(LE,arguments)}function RE(e,t,n,r,i,a,l,c,u){if(DE.apply(this,arguments),Ti){if(Ti){var d=as;Ti=!1,as=null}else throw Error(A(198));ls||(ls=!0,Mm=d)}}function vr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wh(e){if(vr(e)!==e)throw Error(A(188))}function IE(e){var t=e.alternate;if(!t){if(t=vr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return wh(i),e;if(a===r)return wh(i),t;a=a.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,r=a;break}if(c===r){l=!0,r=i,n=a;break}c=c.sibling}if(!l){for(c=a.child;c;){if(c===n){l=!0,n=a,r=i;break}if(c===r){l=!0,r=a,n=i;break}c=c.sibling}if(!l)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function yv(e){return e=IE(e),e!==null?vv(e):null}function vv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vv(e);if(t!==null)return t;e=e.sibling}return null}var $v=$t.unstable_scheduleCallback,bh=$t.unstable_cancelCallback,ME=$t.unstable_shouldYield,BE=$t.unstable_requestPaint,ke=$t.unstable_now,OE=$t.unstable_getCurrentPriorityLevel,Gp=$t.unstable_ImmediatePriority,xv=$t.unstable_UserBlockingPriority,ss=$t.unstable_NormalPriority,VE=$t.unstable_LowPriority,Ev=$t.unstable_IdlePriority,Ws=null,Xt=null;function jE(e){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Ws,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:UE,WE=Math.log,_E=Math.LN2;function UE(e){return e>>>=0,e===0?32:31-(WE(e)/_E|0)|0}var wa=64,ba=4194304;function wi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~i;c!==0?r=wi(c):(a&=l,a!==0&&(r=wi(a)))}else l=n&~i,l!==0?r=wi(l):a!==0&&(r=wi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-jt(t),i=1<<n,r|=e[n],t&=~i;return r}function HE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-jt(a),c=1<<l,u=i[l];u===-1?(!(c&n)||c&r)&&(i[l]=HE(c,t)):u<=t&&(e.expiredLanes|=c),a&=~c}}function Bm(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wv(){var e=wa;return wa<<=1,!(wa&4194240)&&(wa=64),e}function Bc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ca(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=n}function YE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-jt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Yp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-jt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var re=0;function bv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sv,Qp,kv,Tv,Cv,Om=!1,Sa=[],An=null,Fn=null,Nn=null,Wi=new Map,_i=new Map,kn=[],QE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sh(e,t){switch(e){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(t.pointerId)}}function Ko(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=da(t),t!==null&&Qp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function KE(e,t,n,r,i){switch(t){case"focusin":return An=Ko(An,e,t,n,r,i),!0;case"dragenter":return Fn=Ko(Fn,e,t,n,r,i),!0;case"mouseover":return Nn=Ko(Nn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Wi.set(a,Ko(Wi.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,_i.set(a,Ko(_i.get(a)||null,e,t,n,r,i)),!0}return!1}function zv(e){var t=or(e.target);if(t!==null){var n=vr(t);if(n!==null){if(t=n.tag,t===13){if(t=gv(n),t!==null){e.blockedOn=t,Cv(e.priority,function(){kv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vm(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Dm=r,n.target.dispatchEvent(r),Dm=null}else return t=da(n),t!==null&&Qp(t),e.blockedOn=n,!1;t.shift()}return!0}function kh(e,t,n){Gl(e)&&n.delete(t)}function XE(){Om=!1,An!==null&&Gl(An)&&(An=null),Fn!==null&&Gl(Fn)&&(Fn=null),Nn!==null&&Gl(Nn)&&(Nn=null),Wi.forEach(kh),_i.forEach(kh)}function Xo(e,t){e.blockedOn===t&&(e.blockedOn=null,Om||(Om=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,XE)))}function Ui(e){function t(i){return Xo(i,e)}if(0<Sa.length){Xo(Sa[0],e);for(var n=1;n<Sa.length;n++){var r=Sa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(An!==null&&Xo(An,e),Fn!==null&&Xo(Fn,e),Nn!==null&&Xo(Nn,e),Wi.forEach(t),_i.forEach(t),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)zv(n),n.blockedOn===null&&kn.shift()}var ko=yn.ReactCurrentBatchConfig,us=!0;function JE(e,t,n,r){var i=re,a=ko.transition;ko.transition=null;try{re=1,Kp(e,t,n,r)}finally{re=i,ko.transition=a}}function qE(e,t,n,r){var i=re,a=ko.transition;ko.transition=null;try{re=4,Kp(e,t,n,r)}finally{re=i,ko.transition=a}}function Kp(e,t,n,r){if(us){var i=Vm(e,t,n,r);if(i===null)Qc(e,t,r,ds,n),Sh(e,r);else if(KE(i,e,t,n,r))r.stopPropagation();else if(Sh(e,r),t&4&&-1<QE.indexOf(e)){for(;i!==null;){var a=da(i);if(a!==null&&Sv(a),a=Vm(e,t,n,r),a===null&&Qc(e,t,r,ds,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Qc(e,t,r,null,n)}}var ds=null;function Vm(e,t,n,r){if(ds=null,e=Hp(r),e=or(e),e!==null)if(t=vr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ds=e,null}function Pv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OE()){case Gp:return 1;case xv:return 4;case ss:case VE:return 16;case Ev:return 536870912;default:return 16}default:return 16}}var Cn=null,Xp=null,Yl=null;function Av(){if(Yl)return Yl;var e,t=Xp,n=t.length,r,i="value"in Cn?Cn.value:Cn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[a-r];r++);return Yl=i.slice(e,1<r?1-r:void 0)}function Ql(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ka(){return!0}function Th(){return!1}function wt(e){function t(n,r,i,a,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ka:Th,this.isPropagationStopped=Th,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),t}var Vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jp=wt(Vo),ua=xe({},Vo,{view:0,detail:0}),ZE=wt(ua),Oc,Vc,Jo,_s=xe({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jo&&(Jo&&e.type==="mousemove"?(Oc=e.screenX-Jo.screenX,Vc=e.screenY-Jo.screenY):Vc=Oc=0,Jo=e),Oc)},movementY:function(e){return"movementY"in e?e.movementY:Vc}}),Ch=wt(_s),ew=xe({},_s,{dataTransfer:0}),tw=wt(ew),nw=xe({},ua,{relatedTarget:0}),jc=wt(nw),rw=xe({},Vo,{animationName:0,elapsedTime:0,pseudoElement:0}),ow=wt(rw),iw=xe({},Vo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),aw=wt(iw),lw=xe({},Vo,{data:0}),zh=wt(lw),sw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uw[e])?!!t[e]:!1}function qp(){return dw}var mw=xe({},ua,{key:function(e){if(e.key){var t=sw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qp,charCode:function(e){return e.type==="keypress"?Ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pw=wt(mw),fw=xe({},_s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ph=wt(fw),hw=xe({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qp}),gw=wt(hw),yw=xe({},Vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),vw=wt(yw),$w=xe({},_s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xw=wt($w),Ew=[9,13,27,32],Zp=mn&&"CompositionEvent"in window,Ci=null;mn&&"documentMode"in document&&(Ci=document.documentMode);var ww=mn&&"TextEvent"in window&&!Ci,Fv=mn&&(!Zp||Ci&&8<Ci&&11>=Ci),Ah=String.fromCharCode(32),Fh=!1;function Nv(e,t){switch(e){case"keyup":return Ew.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ao=!1;function bw(e,t){switch(e){case"compositionend":return Lv(t);case"keypress":return t.which!==32?null:(Fh=!0,Ah);case"textInput":return e=t.data,e===Ah&&Fh?null:e;default:return null}}function Sw(e,t){if(ao)return e==="compositionend"||!Zp&&Nv(e,t)?(e=Av(),Yl=Xp=Cn=null,ao=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fv&&t.locale!=="ko"?null:t.data;default:return null}}var kw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kw[e.type]:t==="textarea"}function Dv(e,t,n,r){dv(r),t=ms(t,"onChange"),0<t.length&&(n=new Jp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zi=null,Hi=null;function Tw(e){Hv(e,0)}function Us(e){var t=co(e);if(ov(t))return e}function Cw(e,t){if(e==="change")return t}var Rv=!1;if(mn){var Wc;if(mn){var _c="oninput"in document;if(!_c){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),_c=typeof Lh.oninput=="function"}Wc=_c}else Wc=!1;Rv=Wc&&(!document.documentMode||9<document.documentMode)}function Dh(){zi&&(zi.detachEvent("onpropertychange",Iv),Hi=zi=null)}function Iv(e){if(e.propertyName==="value"&&Us(Hi)){var t=[];Dv(t,Hi,e,Hp(e)),hv(Tw,t)}}function zw(e,t,n){e==="focusin"?(Dh(),zi=t,Hi=n,zi.attachEvent("onpropertychange",Iv)):e==="focusout"&&Dh()}function Pw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Us(Hi)}function Aw(e,t){if(e==="click")return Us(t)}function Fw(e,t){if(e==="input"||e==="change")return Us(t)}function Nw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:Nw;function Gi(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wm.call(t,i)||!_t(e[i],t[i]))return!1}return!0}function Rh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ih(e,t){var n=Rh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rh(n)}}function Mv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bv(){for(var e=window,t=is();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=is(e.document)}return t}function ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lw(e){var t=Bv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mv(n.ownerDocument.documentElement,n)){if(r!==null&&ef(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Ih(n,a);var l=Ih(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dw=mn&&"documentMode"in document&&11>=document.documentMode,lo=null,jm=null,Pi=null,Wm=!1;function Mh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wm||lo==null||lo!==is(r)||(r=lo,"selectionStart"in r&&ef(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pi&&Gi(Pi,r)||(Pi=r,r=ms(jm,"onSelect"),0<r.length&&(t=new Jp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lo)))}function Ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var so={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},Uc={},Ov={};mn&&(Ov=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function Hs(e){if(Uc[e])return Uc[e];if(!so[e])return e;var t=so[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ov)return Uc[e]=t[n];return e}var Vv=Hs("animationend"),jv=Hs("animationiteration"),Wv=Hs("animationstart"),_v=Hs("transitionend"),Uv=new Map,Bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,t){Uv.set(e,t),yr(t,[e])}for(var Hc=0;Hc<Bh.length;Hc++){var Gc=Bh[Hc],Rw=Gc.toLowerCase(),Iw=Gc[0].toUpperCase()+Gc.slice(1);Yn(Rw,"on"+Iw)}Yn(Vv,"onAnimationEnd");Yn(jv,"onAnimationIteration");Yn(Wv,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(_v,"onTransitionEnd");zo("onMouseEnter",["mouseout","mouseover"]);zo("onMouseLeave",["mouseout","mouseover"]);zo("onPointerEnter",["pointerout","pointerover"]);zo("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mw=new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));function Oh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,RE(r,t,void 0,e),e.currentTarget=null}function Hv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],u=c.instance,d=c.currentTarget;if(c=c.listener,u!==a&&i.isPropagationStopped())break e;Oh(i,c,d),a=u}else for(l=0;l<r.length;l++){if(c=r[l],u=c.instance,d=c.currentTarget,c=c.listener,u!==a&&i.isPropagationStopped())break e;Oh(i,c,d),a=u}}}if(ls)throw e=Mm,ls=!1,Mm=null,e}function me(e,t){var n=t[Ym];n===void 0&&(n=t[Ym]=new Set);var r=e+"__bubble";n.has(r)||(Gv(t,e,2,!1),n.add(r))}function Yc(e,t,n){var r=0;t&&(r|=4),Gv(n,e,r,t)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function Yi(e){if(!e[Ca]){e[Ca]=!0,Z0.forEach(function(n){n!=="selectionchange"&&(Mw.has(n)||Yc(n,!1,e),Yc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ca]||(t[Ca]=!0,Yc("selectionchange",!1,t))}}function Gv(e,t,n,r){switch(Pv(t)){case 1:var i=JE;break;case 4:i=qE;break;default:i=Kp}n=i.bind(null,t,n,e),i=void 0,!Im||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Qc(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;c!==null;){if(l=or(c),l===null)return;if(u=l.tag,u===5||u===6){r=a=l;continue e}c=c.parentNode}}r=r.return}hv(function(){var d=a,p=Hp(n),m=[];e:{var f=Uv.get(e);if(f!==void 0){var g=Jp,$=e;switch(e){case"keypress":if(Ql(n)===0)break e;case"keydown":case"keyup":g=pw;break;case"focusin":$="focus",g=jc;break;case"focusout":$="blur",g=jc;break;case"beforeblur":case"afterblur":g=jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gw;break;case Vv:case jv:case Wv:g=ow;break;case _v:g=vw;break;case"scroll":g=ZE;break;case"wheel":g=xw;break;case"copy":case"cut":case"paste":g=aw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ph}var x=(t&4)!==0,w=!x&&e==="scroll",v=x?f!==null?f+"Capture":null:f;x=[];for(var h=d,y;h!==null;){y=h;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,v!==null&&(E=ji(h,v),E!=null&&x.push(Qi(h,E,y)))),w)break;h=h.return}0<x.length&&(f=new g(f,$,null,n,p),m.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==Dm&&($=n.relatedTarget||n.fromElement)&&(or($)||$[pn]))break e;if((g||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,g?($=n.relatedTarget||n.toElement,g=d,$=$?or($):null,$!==null&&(w=vr($),$!==w||$.tag!==5&&$.tag!==6)&&($=null)):(g=null,$=d),g!==$)){if(x=Ch,E="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ph,E="onPointerLeave",v="onPointerEnter",h="pointer"),w=g==null?f:co(g),y=$==null?f:co($),f=new x(E,h+"leave",g,n,p),f.target=w,f.relatedTarget=y,E=null,or(p)===d&&(x=new x(v,h+"enter",$,n,p),x.target=y,x.relatedTarget=w,E=x),w=E,g&&$)t:{for(x=g,v=$,h=0,y=x;y;y=wr(y))h++;for(y=0,E=v;E;E=wr(E))y++;for(;0<h-y;)x=wr(x),h--;for(;0<y-h;)v=wr(v),y--;for(;h--;){if(x===v||v!==null&&x===v.alternate)break t;x=wr(x),v=wr(v)}x=null}else x=null;g!==null&&Vh(m,f,g,x,!1),$!==null&&w!==null&&Vh(m,w,$,x,!0)}}e:{if(f=d?co(d):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var k=Cw;else if(Nh(f))if(Rv)k=Fw;else{k=Pw;var z=zw}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=Aw);if(k&&(k=k(e,d))){Dv(m,k,n,p);break e}z&&z(e,f,d),e==="focusout"&&(z=f._wrapperState)&&z.controlled&&f.type==="number"&&Pm(f,"number",f.value)}switch(z=d?co(d):window,e){case"focusin":(Nh(z)||z.contentEditable==="true")&&(lo=z,jm=d,Pi=null);break;case"focusout":Pi=jm=lo=null;break;case"mousedown":Wm=!0;break;case"contextmenu":case"mouseup":case"dragend":Wm=!1,Mh(m,n,p);break;case"selectionchange":if(Dw)break;case"keydown":case"keyup":Mh(m,n,p)}var P;if(Zp)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ao?Nv(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Fv&&n.locale!=="ko"&&(ao||C!=="onCompositionStart"?C==="onCompositionEnd"&&ao&&(P=Av()):(Cn=p,Xp="value"in Cn?Cn.value:Cn.textContent,ao=!0)),z=ms(d,C),0<z.length&&(C=new zh(C,e,null,n,p),m.push({event:C,listeners:z}),P?C.data=P:(P=Lv(n),P!==null&&(C.data=P)))),(P=ww?bw(e,n):Sw(e,n))&&(d=ms(d,"onBeforeInput"),0<d.length&&(p=new zh("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:d}),p.data=P))}Hv(m,t)})}function Qi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ms(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ji(e,n),a!=null&&r.unshift(Qi(e,a,i)),a=ji(e,t),a!=null&&r.push(Qi(e,a,i))),e=e.return}return r}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vh(e,t,n,r,i){for(var a=t._reactName,l=[];n!==null&&n!==r;){var c=n,u=c.alternate,d=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&d!==null&&(c=d,i?(u=ji(n,a),u!=null&&l.unshift(Qi(n,u,c))):i||(u=ji(n,a),u!=null&&l.push(Qi(n,u,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Bw=/\r\n?/g,Ow=/\u0000|\uFFFD/g;function jh(e){return(typeof e=="string"?e:""+e).replace(Bw,`
`).replace(Ow,"")}function za(e,t,n){if(t=jh(t),jh(e)!==t&&n)throw Error(A(425))}function ps(){}var _m=null,Um=null;function Hm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gm=typeof setTimeout=="function"?setTimeout:void 0,Vw=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,jw=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(e){return Wh.resolve(null).then(e).catch(Ww)}:Gm;function Ww(e){setTimeout(function(){throw e})}function Kc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ui(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ui(t)}function Ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _h(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jo=Math.random().toString(36).slice(2),Kt="__reactFiber$"+jo,Ki="__reactProps$"+jo,pn="__reactContainer$"+jo,Ym="__reactEvents$"+jo,_w="__reactListeners$"+jo,Uw="__reactHandles$"+jo;function or(e){var t=e[Kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pn]||n[Kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_h(e);e!==null;){if(n=e[Kt])return n;e=_h(e)}return t}e=n,n=e.parentNode}return null}function da(e){return e=e[Kt]||e[pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function co(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Gs(e){return e[Ki]||null}var Qm=[],uo=-1;function Qn(e){return{current:e}}function pe(e){0>uo||(e.current=Qm[uo],Qm[uo]=null,uo--)}function ue(e,t){uo++,Qm[uo]=e.current,e.current=t}var Un={},qe=Qn(Un),ct=Qn(!1),ur=Un;function Po(e,t){var n=e.type.contextTypes;if(!n)return Un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ut(e){return e=e.childContextTypes,e!=null}function fs(){pe(ct),pe(qe)}function Uh(e,t,n){if(qe.current!==Un)throw Error(A(168));ue(qe,t),ue(ct,n)}function Yv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,zE(e)||"Unknown",i));return xe({},n,r)}function hs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Un,ur=qe.current,ue(qe,e),ue(ct,ct.current),!0}function Hh(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Yv(e,t,ur),r.__reactInternalMemoizedMergedChildContext=e,pe(ct),pe(qe),ue(qe,e)):pe(ct),ue(ct,n)}var on=null,Ys=!1,Xc=!1;function Qv(e){on===null?on=[e]:on.push(e)}function Hw(e){Ys=!0,Qv(e)}function Kn(){if(!Xc&&on!==null){Xc=!0;var e=0,t=re;try{var n=on;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}on=null,Ys=!1}catch(i){throw on!==null&&(on=on.slice(e+1)),$v(Gp,Kn),i}finally{re=t,Xc=!1}}return null}var mo=[],po=0,gs=null,ys=0,Ct=[],zt=0,dr=null,an=1,ln="";function er(e,t){mo[po++]=ys,mo[po++]=gs,gs=e,ys=t}function Kv(e,t,n){Ct[zt++]=an,Ct[zt++]=ln,Ct[zt++]=dr,dr=e;var r=an;e=ln;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var a=32-jt(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,an=1<<32-jt(t)+i|n<<i|r,ln=a+e}else an=1<<a|n<<i|r,ln=e}function tf(e){e.return!==null&&(er(e,1),Kv(e,1,0))}function nf(e){for(;e===gs;)gs=mo[--po],mo[po]=null,ys=mo[--po],mo[po]=null;for(;e===dr;)dr=Ct[--zt],Ct[zt]=null,ln=Ct[--zt],Ct[zt]=null,an=Ct[--zt],Ct[zt]=null}var vt=null,yt=null,he=!1,Ot=null;function Xv(e,t){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,yt=Ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dr!==null?{id:an,overflow:ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,yt=null,!0):!1;default:return!1}}function Km(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xm(e){if(he){var t=yt;if(t){var n=t;if(!Gh(e,t)){if(Km(e))throw Error(A(418));t=Ln(n.nextSibling);var r=vt;t&&Gh(e,t)?Xv(r,n):(e.flags=e.flags&-4097|2,he=!1,vt=e)}}else{if(Km(e))throw Error(A(418));e.flags=e.flags&-4097|2,he=!1,vt=e}}}function Yh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function Pa(e){if(e!==vt)return!1;if(!he)return Yh(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hm(e.type,e.memoizedProps)),t&&(t=yt)){if(Km(e))throw Jv(),Error(A(418));for(;t;)Xv(e,t),t=Ln(t.nextSibling)}if(Yh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=Ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=vt?Ln(e.stateNode.nextSibling):null;return!0}function Jv(){for(var e=yt;e;)e=Ln(e.nextSibling)}function Ao(){yt=vt=null,he=!1}function rf(e){Ot===null?Ot=[e]:Ot.push(e)}var Gw=yn.ReactCurrentBatchConfig;function qo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var c=i.refs;l===null?delete c[a]:c[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Aa(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qh(e){var t=e._init;return t(e._payload)}function qv(e){function t(v,h){if(e){var y=v.deletions;y===null?(v.deletions=[h],v.flags|=16):y.push(h)}}function n(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=Mn(v,h),v.index=0,v.sibling=null,v}function a(v,h,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<h?(v.flags|=2,h):y):(v.flags|=2,h)):(v.flags|=1048576,h)}function l(v){return e&&v.alternate===null&&(v.flags|=2),v}function c(v,h,y,E){return h===null||h.tag!==6?(h=ru(y,v.mode,E),h.return=v,h):(h=i(h,y),h.return=v,h)}function u(v,h,y,E){var k=y.type;return k===io?p(v,h,y.props.children,E,y.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===wn&&Qh(k)===h.type)?(E=i(h,y.props),E.ref=qo(v,h,y),E.return=v,E):(E=ts(y.type,y.key,y.props,null,v.mode,E),E.ref=qo(v,h,y),E.return=v,E)}function d(v,h,y,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=ou(y,v.mode,E),h.return=v,h):(h=i(h,y.children||[]),h.return=v,h)}function p(v,h,y,E,k){return h===null||h.tag!==7?(h=cr(y,v.mode,E,k),h.return=v,h):(h=i(h,y),h.return=v,h)}function m(v,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ru(""+h,v.mode,y),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case $a:return y=ts(h.type,h.key,h.props,null,v.mode,y),y.ref=qo(v,null,h),y.return=v,y;case oo:return h=ou(h,v.mode,y),h.return=v,h;case wn:var E=h._init;return m(v,E(h._payload),y)}if(Ei(h)||Yo(h))return h=cr(h,v.mode,y,null),h.return=v,h;Aa(v,h)}return null}function f(v,h,y,E){var k=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:c(v,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $a:return y.key===k?u(v,h,y,E):null;case oo:return y.key===k?d(v,h,y,E):null;case wn:return k=y._init,f(v,h,k(y._payload),E)}if(Ei(y)||Yo(y))return k!==null?null:p(v,h,y,E,null);Aa(v,y)}return null}function g(v,h,y,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(y)||null,c(h,v,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case $a:return v=v.get(E.key===null?y:E.key)||null,u(h,v,E,k);case oo:return v=v.get(E.key===null?y:E.key)||null,d(h,v,E,k);case wn:var z=E._init;return g(v,h,y,z(E._payload),k)}if(Ei(E)||Yo(E))return v=v.get(y)||null,p(h,v,E,k,null);Aa(h,E)}return null}function $(v,h,y,E){for(var k=null,z=null,P=h,C=h=0,M=null;P!==null&&C<y.length;C++){P.index>C?(M=P,P=null):M=P.sibling;var B=f(v,P,y[C],E);if(B===null){P===null&&(P=M);break}e&&P&&B.alternate===null&&t(v,P),h=a(B,h,C),z===null?k=B:z.sibling=B,z=B,P=M}if(C===y.length)return n(v,P),he&&er(v,C),k;if(P===null){for(;C<y.length;C++)P=m(v,y[C],E),P!==null&&(h=a(P,h,C),z===null?k=P:z.sibling=P,z=P);return he&&er(v,C),k}for(P=r(v,P);C<y.length;C++)M=g(P,v,C,y[C],E),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?C:M.key),h=a(M,h,C),z===null?k=M:z.sibling=M,z=M);return e&&P.forEach(function(ae){return t(v,ae)}),he&&er(v,C),k}function x(v,h,y,E){var k=Yo(y);if(typeof k!="function")throw Error(A(150));if(y=k.call(y),y==null)throw Error(A(151));for(var z=k=null,P=h,C=h=0,M=null,B=y.next();P!==null&&!B.done;C++,B=y.next()){P.index>C?(M=P,P=null):M=P.sibling;var ae=f(v,P,B.value,E);if(ae===null){P===null&&(P=M);break}e&&P&&ae.alternate===null&&t(v,P),h=a(ae,h,C),z===null?k=ae:z.sibling=ae,z=ae,P=M}if(B.done)return n(v,P),he&&er(v,C),k;if(P===null){for(;!B.done;C++,B=y.next())B=m(v,B.value,E),B!==null&&(h=a(B,h,C),z===null?k=B:z.sibling=B,z=B);return he&&er(v,C),k}for(P=r(v,P);!B.done;C++,B=y.next())B=g(P,v,C,B.value,E),B!==null&&(e&&B.alternate!==null&&P.delete(B.key===null?C:B.key),h=a(B,h,C),z===null?k=B:z.sibling=B,z=B);return e&&P.forEach(function(H){return t(v,H)}),he&&er(v,C),k}function w(v,h,y,E){if(typeof y=="object"&&y!==null&&y.type===io&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case $a:e:{for(var k=y.key,z=h;z!==null;){if(z.key===k){if(k=y.type,k===io){if(z.tag===7){n(v,z.sibling),h=i(z,y.props.children),h.return=v,v=h;break e}}else if(z.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===wn&&Qh(k)===z.type){n(v,z.sibling),h=i(z,y.props),h.ref=qo(v,z,y),h.return=v,v=h;break e}n(v,z);break}else t(v,z);z=z.sibling}y.type===io?(h=cr(y.props.children,v.mode,E,y.key),h.return=v,v=h):(E=ts(y.type,y.key,y.props,null,v.mode,E),E.ref=qo(v,h,y),E.return=v,v=E)}return l(v);case oo:e:{for(z=y.key;h!==null;){if(h.key===z)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(v,h.sibling),h=i(h,y.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else t(v,h);h=h.sibling}h=ou(y,v.mode,E),h.return=v,v=h}return l(v);case wn:return z=y._init,w(v,h,z(y._payload),E)}if(Ei(y))return $(v,h,y,E);if(Yo(y))return x(v,h,y,E);Aa(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(v,h.sibling),h=i(h,y),h.return=v,v=h):(n(v,h),h=ru(y,v.mode,E),h.return=v,v=h),l(v)):n(v,h)}return w}var Fo=qv(!0),Zv=qv(!1),vs=Qn(null),$s=null,fo=null,of=null;function af(){of=fo=$s=null}function lf(e){var t=vs.current;pe(vs),e._currentValue=t}function Jm(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function To(e,t){$s=e,of=fo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(st=!0),e.firstContext=null)}function Ft(e){var t=e._currentValue;if(of!==e)if(e={context:e,memoizedValue:t,next:null},fo===null){if($s===null)throw Error(A(308));fo=e,$s.dependencies={lanes:0,firstContext:e}}else fo=fo.next=e;return t}var ir=null;function sf(e){ir===null?ir=[e]:ir.push(e)}function e$(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,sf(t)):(n.next=i.next,i.next=n),t.interleaved=n,fn(e,r)}function fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bn=!1;function cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t$(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function cn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,fn(e,n)}return i=r.interleaved,i===null?(t.next=t,sf(r)):(t.next=i.next,i.next=t),r.interleaved=t,fn(e,n)}function Kl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yp(e,n)}}function Kh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xs(e,t,n,r){var i=e.updateQueue;bn=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var u=c,d=u.next;u.next=null,l===null?a=d:l.next=d,l=u;var p=e.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==l&&(c===null?p.firstBaseUpdate=d:c.next=d,p.lastBaseUpdate=u))}if(a!==null){var m=i.baseState;l=0,p=d=u=null,c=a;do{var f=c.lane,g=c.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:g,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var $=e,x=c;switch(f=t,g=n,x.tag){case 1:if($=x.payload,typeof $=="function"){m=$.call(g,m,f);break e}m=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=x.payload,f=typeof $=="function"?$.call(g,m,f):$,f==null)break e;m=xe({},m,f);break e;case 2:bn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[c]:f.push(c))}else g={eventTime:g,lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(d=p=g,u=m):p=p.next=g,l|=f;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;f=c,c=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);pr|=l,e.lanes=l,e.memoizedState=m}}function Xh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var ma={},Jt=Qn(ma),Xi=Qn(ma),Ji=Qn(ma);function ar(e){if(e===ma)throw Error(A(174));return e}function uf(e,t){switch(ue(Ji,t),ue(Xi,e),ue(Jt,ma),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fm(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fm(t,e)}pe(Jt),ue(Jt,t)}function No(){pe(Jt),pe(Xi),pe(Ji)}function n$(e){ar(Ji.current);var t=ar(Jt.current),n=Fm(t,e.type);t!==n&&(ue(Xi,e),ue(Jt,n))}function df(e){Xi.current===e&&(pe(Jt),pe(Xi))}var ye=Qn(0);function Es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jc=[];function mf(){for(var e=0;e<Jc.length;e++)Jc[e]._workInProgressVersionPrimary=null;Jc.length=0}var Xl=yn.ReactCurrentDispatcher,qc=yn.ReactCurrentBatchConfig,mr=0,$e=null,Le=null,Re=null,ws=!1,Ai=!1,qi=0,Yw=0;function Ge(){throw Error(A(321))}function pf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function ff(e,t,n,r,i,a){if(mr=a,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xl.current=e===null||e.memoizedState===null?Jw:qw,e=n(r,i),Ai){a=0;do{if(Ai=!1,qi=0,25<=a)throw Error(A(301));a+=1,Re=Le=null,t.updateQueue=null,Xl.current=Zw,e=n(r,i)}while(Ai)}if(Xl.current=bs,t=Le!==null&&Le.next!==null,mr=0,Re=Le=$e=null,ws=!1,t)throw Error(A(300));return e}function hf(){var e=qi!==0;return qi=0,e}function Qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?$e.memoizedState=Re=e:Re=Re.next=e,Re}function Nt(){if(Le===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Re===null?$e.memoizedState:Re.next;if(t!==null)Re=t,Le=e;else{if(e===null)throw Error(A(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Re===null?$e.memoizedState=Re=e:Re=Re.next=e}return Re}function Zi(e,t){return typeof t=="function"?t(e):t}function Zc(e){var t=Nt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var c=l=null,u=null,d=a;do{var p=d.lane;if((mr&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(c=u=m,l=r):u=u.next=m,$e.lanes|=p,pr|=p}d=d.next}while(d!==null&&d!==a);u===null?l=r:u.next=c,_t(r,t.memoizedState)||(st=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,$e.lanes|=a,pr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function eu(e){var t=Nt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);_t(a,t.memoizedState)||(st=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function r$(){}function o$(e,t){var n=$e,r=Nt(),i=t(),a=!_t(r.memoizedState,i);if(a&&(r.memoizedState=i,st=!0),r=r.queue,gf(l$.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,ea(9,a$.bind(null,n,r,i,t),void 0,null),Ie===null)throw Error(A(349));mr&30||i$(n,t,i)}return i}function i$(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function a$(e,t,n,r){t.value=n,t.getSnapshot=r,s$(t)&&c$(e)}function l$(e,t,n){return n(function(){s$(t)&&c$(e)})}function s$(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function c$(e){var t=fn(e,1);t!==null&&Wt(t,e,1,-1)}function Jh(e){var t=Qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},t.queue=e,e=e.dispatch=Xw.bind(null,$e,e),[t.memoizedState,e]}function ea(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function u$(){return Nt().memoizedState}function Jl(e,t,n,r){var i=Qt();$e.flags|=e,i.memoizedState=ea(1|t,n,void 0,r===void 0?null:r)}function Qs(e,t,n,r){var i=Nt();r=r===void 0?null:r;var a=void 0;if(Le!==null){var l=Le.memoizedState;if(a=l.destroy,r!==null&&pf(r,l.deps)){i.memoizedState=ea(t,n,a,r);return}}$e.flags|=e,i.memoizedState=ea(1|t,n,a,r)}function qh(e,t){return Jl(8390656,8,e,t)}function gf(e,t){return Qs(2048,8,e,t)}function d$(e,t){return Qs(4,2,e,t)}function m$(e,t){return Qs(4,4,e,t)}function p$(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function f$(e,t,n){return n=n!=null?n.concat([e]):null,Qs(4,4,p$.bind(null,t,e),n)}function yf(){}function h$(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function g$(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function y$(e,t,n){return mr&21?(_t(n,t)||(n=wv(),$e.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n)}function Qw(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=qc.transition;qc.transition={};try{e(!1),t()}finally{re=n,qc.transition=r}}function v$(){return Nt().memoizedState}function Kw(e,t,n){var r=In(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$$(e))x$(t,n);else if(n=e$(e,t,n,r),n!==null){var i=rt();Wt(n,e,r,i),E$(n,t,r)}}function Xw(e,t,n){var r=In(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($$(e))x$(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,c=a(l,n);if(i.hasEagerState=!0,i.eagerState=c,_t(c,l)){var u=t.interleaved;u===null?(i.next=i,sf(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=e$(e,t,i,r),n!==null&&(i=rt(),Wt(n,e,r,i),E$(n,t,r))}}function $$(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function x$(e,t){Ai=ws=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function E$(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yp(e,n)}}var bs={readContext:Ft,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Jw={readContext:Ft,useCallback:function(e,t){return Qt().memoizedState=[e,t===void 0?null:t],e},useContext:Ft,useEffect:qh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jl(4194308,4,p$.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jl(4,2,e,t)},useMemo:function(e,t){var n=Qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Kw.bind(null,$e,e),[r.memoizedState,e]},useRef:function(e){var t=Qt();return e={current:e},t.memoizedState=e},useState:Jh,useDebugValue:yf,useDeferredValue:function(e){return Qt().memoizedState=e},useTransition:function(){var e=Jh(!1),t=e[0];return e=Qw.bind(null,e[1]),Qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$e,i=Qt();if(he){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Ie===null)throw Error(A(349));mr&30||i$(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,qh(l$.bind(null,r,a,e),[e]),r.flags|=2048,ea(9,a$.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Qt(),t=Ie.identifierPrefix;if(he){var n=ln,r=an;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qw={readContext:Ft,useCallback:h$,useContext:Ft,useEffect:gf,useImperativeHandle:f$,useInsertionEffect:d$,useLayoutEffect:m$,useMemo:g$,useReducer:Zc,useRef:u$,useState:function(){return Zc(Zi)},useDebugValue:yf,useDeferredValue:function(e){var t=Nt();return y$(t,Le.memoizedState,e)},useTransition:function(){var e=Zc(Zi)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:r$,useSyncExternalStore:o$,useId:v$,unstable_isNewReconciler:!1},Zw={readContext:Ft,useCallback:h$,useContext:Ft,useEffect:gf,useImperativeHandle:f$,useInsertionEffect:d$,useLayoutEffect:m$,useMemo:g$,useReducer:eu,useRef:u$,useState:function(){return eu(Zi)},useDebugValue:yf,useDeferredValue:function(e){var t=Nt();return Le===null?t.memoizedState=e:y$(t,Le.memoizedState,e)},useTransition:function(){var e=eu(Zi)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:r$,useSyncExternalStore:o$,useId:v$,unstable_isNewReconciler:!1};function Mt(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function qm(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={isMounted:function(e){return(e=e._reactInternals)?vr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=rt(),i=In(e),a=cn(r,i);a.payload=t,n!=null&&(a.callback=n),t=Dn(e,a,i),t!==null&&(Wt(t,e,i,r),Kl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=rt(),i=In(e),a=cn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Dn(e,a,i),t!==null&&(Wt(t,e,i,r),Kl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),r=In(e),i=cn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Dn(e,i,r),t!==null&&(Wt(t,e,r,n),Kl(t,e,r))}};function Zh(e,t,n,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!Gi(n,r)||!Gi(i,a):!0}function w$(e,t,n){var r=!1,i=Un,a=t.contextType;return typeof a=="object"&&a!==null?a=Ft(a):(i=ut(t)?ur:qe.current,r=t.contextTypes,a=(r=r!=null)?Po(e,i):Un),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ks,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function eg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Zm(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},cf(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Ft(a):(a=ut(t)?ur:qe.current,i.context=Po(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(qm(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ks.enqueueReplaceState(i,i.state,null),xs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Lo(e,t){try{var n="",r=t;do n+=CE(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function tu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ep(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var eb=typeof WeakMap=="function"?WeakMap:Map;function b$(e,t,n){n=cn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ks||(ks=!0,up=r),ep(e,t)},n}function S$(e,t,n){n=cn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ep(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ep(e,t),typeof r!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function tg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new eb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=fb.bind(null,e,t,n),t.then(e,e))}function ng(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=cn(-1,1),t.tag=2,Dn(n,t,1))),n.lanes|=1),e)}var tb=yn.ReactCurrentOwner,st=!1;function nt(e,t,n,r){t.child=e===null?Zv(t,null,n,r):Fo(t,e.child,n,r)}function og(e,t,n,r,i){n=n.render;var a=t.ref;return To(t,i),r=ff(e,t,n,r,a,i),n=hf(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hn(e,t,i)):(he&&n&&tf(t),t.flags|=1,nt(e,t,r,i),t.child)}function ig(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!kf(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,k$(e,t,a,r,i)):(e=ts(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:Gi,n(l,r)&&e.ref===t.ref)return hn(e,t,i)}return t.flags|=1,e=Mn(a,r),e.ref=t.ref,e.return=t,t.child=e}function k$(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Gi(a,r)&&e.ref===t.ref)if(st=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(st=!0);else return t.lanes=e.lanes,hn(e,t,i)}return tp(e,t,n,r,i)}function T$(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(go,gt),gt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(go,gt),gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ue(go,gt),gt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ue(go,gt),gt|=r;return nt(e,t,i,n),t.child}function C$(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function tp(e,t,n,r,i){var a=ut(n)?ur:qe.current;return a=Po(t,a),To(t,i),n=ff(e,t,n,r,a,i),r=hf(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hn(e,t,i)):(he&&r&&tf(t),t.flags|=1,nt(e,t,n,i),t.child)}function ag(e,t,n,r,i){if(ut(n)){var a=!0;hs(t)}else a=!1;if(To(t,i),t.stateNode===null)ql(e,t),w$(t,n,r),Zm(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var u=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ft(d):(d=ut(n)?ur:qe.current,d=Po(t,d));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||u!==d)&&eg(t,l,r,d),bn=!1;var f=t.memoizedState;l.state=f,xs(t,r,l,i),u=t.memoizedState,c!==r||f!==u||ct.current||bn?(typeof p=="function"&&(qm(t,n,p,r),u=t.memoizedState),(c=bn||Zh(t,n,c,r,f,u,d))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=d,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,t$(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:Mt(t.type,c),l.props=d,m=t.pendingProps,f=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ft(u):(u=ut(n)?ur:qe.current,u=Po(t,u));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==m||f!==u)&&eg(t,l,r,u),bn=!1,f=t.memoizedState,l.state=f,xs(t,r,l,i);var $=t.memoizedState;c!==m||f!==$||ct.current||bn?(typeof g=="function"&&(qm(t,n,g,r),$=t.memoizedState),(d=bn||Zh(t,n,d,r,f,$,u)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,$,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,$,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=$),l.props=r,l.state=$,l.context=u,r=d):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return np(e,t,n,r,a,i)}function np(e,t,n,r,i,a){C$(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Hh(t,n,!1),hn(e,t,a);r=t.stateNode,tb.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Fo(t,e.child,null,a),t.child=Fo(t,null,c,a)):nt(e,t,c,a),t.memoizedState=r.state,i&&Hh(t,n,!0),t.child}function z$(e){var t=e.stateNode;t.pendingContext?Uh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Uh(e,t.context,!1),uf(e,t.containerInfo)}function lg(e,t,n,r,i){return Ao(),rf(i),t.flags|=256,nt(e,t,n,r),t.child}var rp={dehydrated:null,treeContext:null,retryLane:0};function op(e){return{baseLanes:e,cachePool:null,transitions:null}}function P$(e,t,n){var r=t.pendingProps,i=ye.current,a=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ue(ye,i&1),e===null)return Xm(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=qs(l,r,0,null),e=cr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=op(n),t.memoizedState=rp,e):vf(t,l));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return nb(e,t,l,r,c,i,n);if(a){a=r.fallback,l=t.mode,i=e.child,c=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Mn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?a=Mn(c,a):(a=cr(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?op(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=rp,r}return a=e.child,e=a.sibling,r=Mn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vf(e,t){return t=qs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fa(e,t,n,r){return r!==null&&rf(r),Fo(t,e.child,null,n),e=vf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nb(e,t,n,r,i,a,l){if(n)return t.flags&256?(t.flags&=-257,r=tu(Error(A(422))),Fa(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=qs({mode:"visible",children:r.children},i,0,null),a=cr(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Fo(t,e.child,null,l),t.child.memoizedState=op(l),t.memoizedState=rp,a);if(!(t.mode&1))return Fa(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,a=Error(A(419)),r=tu(a,r,void 0),Fa(e,t,l,r)}if(c=(l&e.childLanes)!==0,st||c){if(r=Ie,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,fn(e,i),Wt(r,e,i,-1))}return Sf(),r=tu(Error(A(421))),Fa(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hb.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,yt=Ln(i.nextSibling),vt=t,he=!0,Ot=null,e!==null&&(Ct[zt++]=an,Ct[zt++]=ln,Ct[zt++]=dr,an=e.id,ln=e.overflow,dr=t),t=vf(t,r.children),t.flags|=4096,t)}function sg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Jm(e.return,t,n)}function nu(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function A$(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(nt(e,t,r.children,n),r=ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sg(e,n,t);else if(e.tag===19)sg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(ye,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Es(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nu(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Es(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nu(t,!0,n,null,a);break;case"together":nu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ql(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rb(e,t,n){switch(t.tag){case 3:z$(t),Ao();break;case 5:n$(t);break;case 1:ut(t.type)&&hs(t);break;case 4:uf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ue(vs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(ye,ye.current&1),t.flags|=128,null):n&t.child.childLanes?P$(e,t,n):(ue(ye,ye.current&1),e=hn(e,t,n),e!==null?e.sibling:null);ue(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return A$(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,T$(e,t,n)}return hn(e,t,n)}var F$,ip,N$,L$;F$=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ip=function(){};N$=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ar(Jt.current);var a=null;switch(n){case"input":i=Cm(e,i),r=Cm(e,r),a=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),a=[];break;case"textarea":i=Am(e,i),r=Am(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ps)}Nm(n,r);var l;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var c=i[d];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Oi.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var u=r[d];if(c=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==c&&(u!=null||c!=null))if(d==="style")if(c){for(l in c)!c.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&c[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(a||(a=[]),a.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(a=a||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Oi.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&me("scroll",e),a||c===u||(a=[])):(a=a||[]).push(d,u))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};L$=function(e,t,n,r){n!==r&&(t.flags|=4)};function Zo(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ob(e,t,n){var r=t.pendingProps;switch(nf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return ut(t.type)&&fs(),Ye(t),null;case 3:return r=t.stateNode,No(),pe(ct),pe(qe),mf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ot!==null&&(pp(Ot),Ot=null))),ip(e,t),Ye(t),null;case 5:df(t);var i=ar(Ji.current);if(n=t.type,e!==null&&t.stateNode!=null)N$(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Ye(t),null}if(e=ar(Jt.current),Pa(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Kt]=t,r[Ki]=a,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<bi.length;i++)me(bi[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":yh(r,a),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},me("invalid",r);break;case"textarea":$h(r,a),me("invalid",r)}Nm(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="children"?typeof c=="string"?r.textContent!==c&&(a.suppressHydrationWarning!==!0&&za(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&za(r.textContent,c,e),i=["children",""+c]):Oi.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&me("scroll",r)}switch(n){case"input":xa(r),vh(r,a,!0);break;case"textarea":xa(r),xh(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ps)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Kt]=t,e[Ki]=r,F$(e,t,!1,!1),t.stateNode=e;e:{switch(l=Lm(n,r),n){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<bi.length;i++)me(bi[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":yh(e,r),i=Cm(e,r),me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),me("invalid",e);break;case"textarea":$h(e,r),i=Am(e,r),me("invalid",e);break;default:i=r}Nm(n,i),c=i;for(a in c)if(c.hasOwnProperty(a)){var u=c[a];a==="style"?uv(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&sv(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vi(e,u):typeof u=="number"&&Vi(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Oi.hasOwnProperty(a)?u!=null&&a==="onScroll"&&me("scroll",e):u!=null&&jp(e,a,u,l))}switch(n){case"input":xa(e),vh(e,r,!1);break;case"textarea":xa(e),xh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_n(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?wo(e,!!r.multiple,a,!1):r.defaultValue!=null&&wo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ps)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)L$(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=ar(Ji.current),ar(Jt.current),Pa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Kt]=t,(a=r.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:za(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&za(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=t,t.stateNode=r}return Ye(t),null;case 13:if(pe(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&yt!==null&&t.mode&1&&!(t.flags&128))Jv(),Ao(),t.flags|=98560,a=!1;else if(a=Pa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(A(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(A(317));a[Kt]=t}else Ao(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ye(t),a=!1}else Ot!==null&&(pp(Ot),Ot=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?De===0&&(De=3):Sf())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return No(),ip(e,t),e===null&&Yi(t.stateNode.containerInfo),Ye(t),null;case 10:return lf(t.type._context),Ye(t),null;case 17:return ut(t.type)&&fs(),Ye(t),null;case 19:if(pe(ye),a=t.memoizedState,a===null)return Ye(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)Zo(a,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Es(e),l!==null){for(t.flags|=128,Zo(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(ye,ye.current&1|2),t.child}e=e.sibling}a.tail!==null&&ke()>Do&&(t.flags|=128,r=!0,Zo(a,!1),t.lanes=4194304)}else{if(!r)if(e=Es(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!he)return Ye(t),null}else 2*ke()-a.renderingStartTime>Do&&n!==1073741824&&(t.flags|=128,r=!0,Zo(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ke(),t.sibling=null,n=ye.current,ue(ye,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return bf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?gt&1073741824&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function ib(e,t){switch(nf(t),t.tag){case 1:return ut(t.type)&&fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return No(),pe(ct),pe(qe),mf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return df(t),null;case 13:if(pe(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Ao()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(ye),null;case 4:return No(),null;case 10:return lf(t.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var Na=!1,Je=!1,ab=typeof WeakSet=="function"?WeakSet:Set,R=null;function ho(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function ap(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var cg=!1;function lb(e,t){if(_m=us,e=Bv(),ef(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,c=-1,u=-1,d=0,p=0,m=e,f=null;t:for(;;){for(var g;m!==n||i!==0&&m.nodeType!==3||(c=l+i),m!==a||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(g=m.firstChild)!==null;)f=m,m=g;for(;;){if(m===e)break t;if(f===n&&++d===i&&(c=l),f===a&&++p===r&&(u=l),(g=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=g}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Um={focusedElem:e,selectionRange:n},us=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var $=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if($!==null){var x=$.memoizedProps,w=$.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?x:Mt(t.type,x),w);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(E){Ee(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return $=cg,cg=!1,$}function Fi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&ap(t,n,a)}i=i.next}while(i!==r)}}function Xs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function lp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function D$(e){var t=e.alternate;t!==null&&(e.alternate=null,D$(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kt],delete t[Ki],delete t[Ym],delete t[_w],delete t[Uw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function R$(e){return e.tag===5||e.tag===3||e.tag===4}function ug(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||R$(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ps));else if(r!==4&&(e=e.child,e!==null))for(sp(e,t,n),e=e.sibling;e!==null;)sp(e,t,n),e=e.sibling}function cp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(cp(e,t,n),e=e.sibling;e!==null;)cp(e,t,n),e=e.sibling}var We=null,Bt=!1;function xn(e,t,n){for(n=n.child;n!==null;)I$(e,t,n),n=n.sibling}function I$(e,t,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Ws,n)}catch{}switch(n.tag){case 5:Je||ho(n,t);case 6:var r=We,i=Bt;We=null,xn(e,t,n),We=r,Bt=i,We!==null&&(Bt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Bt?(e=We,n=n.stateNode,e.nodeType===8?Kc(e.parentNode,n):e.nodeType===1&&Kc(e,n),Ui(e)):Kc(We,n.stateNode));break;case 4:r=We,i=Bt,We=n.stateNode.containerInfo,Bt=!0,xn(e,t,n),We=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&ap(n,t,l),i=i.next}while(i!==r)}xn(e,t,n);break;case 1:if(!Je&&(ho(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Ee(n,t,c)}xn(e,t,n);break;case 21:xn(e,t,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,xn(e,t,n),Je=r):xn(e,t,n);break;default:xn(e,t,n)}}function dg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ab),t.forEach(function(r){var i=gb.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:We=c.stateNode,Bt=!1;break e;case 3:We=c.stateNode.containerInfo,Bt=!0;break e;case 4:We=c.stateNode.containerInfo,Bt=!0;break e}c=c.return}if(We===null)throw Error(A(160));I$(a,l,i),We=null,Bt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Ee(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)M$(t,e),t=t.sibling}function M$(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rt(t,e),Ut(e),r&4){try{Fi(3,e,e.return),Xs(3,e)}catch(x){Ee(e,e.return,x)}try{Fi(5,e,e.return)}catch(x){Ee(e,e.return,x)}}break;case 1:Rt(t,e),Ut(e),r&512&&n!==null&&ho(n,n.return);break;case 5:if(Rt(t,e),Ut(e),r&512&&n!==null&&ho(n,n.return),e.flags&32){var i=e.stateNode;try{Vi(i,"")}catch(x){Ee(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&iv(i,a),Lm(c,l);var d=Lm(c,a);for(l=0;l<u.length;l+=2){var p=u[l],m=u[l+1];p==="style"?uv(i,m):p==="dangerouslySetInnerHTML"?sv(i,m):p==="children"?Vi(i,m):jp(i,p,m,d)}switch(c){case"input":zm(i,a);break;case"textarea":av(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?wo(i,!!a.multiple,g,!1):f!==!!a.multiple&&(a.defaultValue!=null?wo(i,!!a.multiple,a.defaultValue,!0):wo(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ki]=a}catch(x){Ee(e,e.return,x)}}break;case 6:if(Rt(t,e),Ut(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(x){Ee(e,e.return,x)}}break;case 3:if(Rt(t,e),Ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ui(t.containerInfo)}catch(x){Ee(e,e.return,x)}break;case 4:Rt(t,e),Ut(e);break;case 13:Rt(t,e),Ut(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Ef=ke())),r&4&&dg(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(d=Je)||p,Rt(t,e),Je=d):Rt(t,e),Ut(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(R=e,p=e.child;p!==null;){for(m=R=p;R!==null;){switch(f=R,g=f.child,f.tag){case 0:case 11:case 14:case 15:Fi(4,f,f.return);break;case 1:ho(f,f.return);var $=f.stateNode;if(typeof $.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,$.props=t.memoizedProps,$.state=t.memoizedState,$.componentWillUnmount()}catch(x){Ee(r,n,x)}}break;case 5:ho(f,f.return);break;case 22:if(f.memoizedState!==null){pg(m);continue}}g!==null?(g.return=f,R=g):pg(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=cv("display",l))}catch(x){Ee(e,e.return,x)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(x){Ee(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Rt(t,e),Ut(e),r&4&&dg(e);break;case 21:break;default:Rt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(R$(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vi(i,""),r.flags&=-33);var a=ug(e);cp(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,c=ug(e);sp(e,c,l);break;default:throw Error(A(161))}}catch(u){Ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sb(e,t,n){R=e,B$(e)}function B$(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Na;if(!l){var c=i.alternate,u=c!==null&&c.memoizedState!==null||Je;c=Na;var d=Je;if(Na=l,(Je=u)&&!d)for(R=i;R!==null;)l=R,u=l.child,l.tag===22&&l.memoizedState!==null?fg(i):u!==null?(u.return=l,R=u):fg(i);for(;a!==null;)R=a,B$(a),a=a.sibling;R=i,Na=c,Je=d}mg(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,R=a):mg(e)}}function mg(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Je||Xs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Xh(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xh(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Ui(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Je||t.flags&512&&lp(t)}catch(f){Ee(t,t.return,f)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function pg(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function fg(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xs(4,t)}catch(u){Ee(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Ee(t,i,u)}}var a=t.return;try{lp(t)}catch(u){Ee(t,a,u)}break;case 5:var l=t.return;try{lp(t)}catch(u){Ee(t,l,u)}}}catch(u){Ee(t,t.return,u)}if(t===e){R=null;break}var c=t.sibling;if(c!==null){c.return=t.return,R=c;break}R=t.return}}var cb=Math.ceil,Ss=yn.ReactCurrentDispatcher,$f=yn.ReactCurrentOwner,At=yn.ReactCurrentBatchConfig,q=0,Ie=null,Fe=null,_e=0,gt=0,go=Qn(0),De=0,ta=null,pr=0,Js=0,xf=0,Ni=null,lt=null,Ef=0,Do=1/0,rn=null,ks=!1,up=null,Rn=null,La=!1,zn=null,Ts=0,Li=0,dp=null,Zl=-1,es=0;function rt(){return q&6?ke():Zl!==-1?Zl:Zl=ke()}function In(e){return e.mode&1?q&2&&_e!==0?_e&-_e:Gw.transition!==null?(es===0&&(es=wv()),es):(e=re,e!==0||(e=window.event,e=e===void 0?16:Pv(e.type)),e):1}function Wt(e,t,n,r){if(50<Li)throw Li=0,dp=null,Error(A(185));ca(e,n,r),(!(q&2)||e!==Ie)&&(e===Ie&&(!(q&2)&&(Js|=n),De===4&&Tn(e,_e)),dt(e,r),n===1&&q===0&&!(t.mode&1)&&(Do=ke()+500,Ys&&Kn()))}function dt(e,t){var n=e.callbackNode;GE(e,t);var r=cs(e,e===Ie?_e:0);if(r===0)n!==null&&bh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bh(n),t===1)e.tag===0?Hw(hg.bind(null,e)):Qv(hg.bind(null,e)),jw(function(){!(q&6)&&Kn()}),n=null;else{switch(bv(r)){case 1:n=Gp;break;case 4:n=xv;break;case 16:n=ss;break;case 536870912:n=Ev;break;default:n=ss}n=G$(n,O$.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function O$(e,t){if(Zl=-1,es=0,q&6)throw Error(A(327));var n=e.callbackNode;if(Co()&&e.callbackNode!==n)return null;var r=cs(e,e===Ie?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Cs(e,r);else{t=r;var i=q;q|=2;var a=j$();(Ie!==e||_e!==t)&&(rn=null,Do=ke()+500,sr(e,t));do try{mb();break}catch(c){V$(e,c)}while(1);af(),Ss.current=a,q=i,Fe!==null?t=0:(Ie=null,_e=0,t=De)}if(t!==0){if(t===2&&(i=Bm(e),i!==0&&(r=i,t=mp(e,i))),t===1)throw n=ta,sr(e,0),Tn(e,r),dt(e,ke()),n;if(t===6)Tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!ub(i)&&(t=Cs(e,r),t===2&&(a=Bm(e),a!==0&&(r=a,t=mp(e,a))),t===1))throw n=ta,sr(e,0),Tn(e,r),dt(e,ke()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:tr(e,lt,rn);break;case 3:if(Tn(e,r),(r&130023424)===r&&(t=Ef+500-ke(),10<t)){if(cs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){rt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Gm(tr.bind(null,e,lt,rn),t);break}tr(e,lt,rn);break;case 4:if(Tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-jt(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cb(r/1960))-r,10<r){e.timeoutHandle=Gm(tr.bind(null,e,lt,rn),r);break}tr(e,lt,rn);break;case 5:tr(e,lt,rn);break;default:throw Error(A(329))}}}return dt(e,ke()),e.callbackNode===n?O$.bind(null,e):null}function mp(e,t){var n=Ni;return e.current.memoizedState.isDehydrated&&(sr(e,t).flags|=256),e=Cs(e,t),e!==2&&(t=lt,lt=n,t!==null&&pp(t)),e}function pp(e){lt===null?lt=e:lt.push.apply(lt,e)}function ub(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!_t(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tn(e,t){for(t&=~xf,t&=~Js,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jt(t),r=1<<n;e[n]=-1,t&=~r}}function hg(e){if(q&6)throw Error(A(327));Co();var t=cs(e,0);if(!(t&1))return dt(e,ke()),null;var n=Cs(e,t);if(e.tag!==0&&n===2){var r=Bm(e);r!==0&&(t=r,n=mp(e,r))}if(n===1)throw n=ta,sr(e,0),Tn(e,t),dt(e,ke()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tr(e,lt,rn),dt(e,ke()),null}function wf(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Do=ke()+500,Ys&&Kn())}}function fr(e){zn!==null&&zn.tag===0&&!(q&6)&&Co();var t=q;q|=1;var n=At.transition,r=re;try{if(At.transition=null,re=1,e)return e()}finally{re=r,At.transition=n,q=t,!(q&6)&&Kn()}}function bf(){gt=go.current,pe(go)}function sr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vw(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(nf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fs();break;case 3:No(),pe(ct),pe(qe),mf();break;case 5:df(r);break;case 4:No();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:lf(r.type._context);break;case 22:case 23:bf()}n=n.return}if(Ie=e,Fe=e=Mn(e.current,null),_e=gt=t,De=0,ta=null,xf=Js=pr=0,lt=Ni=null,ir!==null){for(t=0;t<ir.length;t++)if(n=ir[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}n.pending=r}ir=null}return e}function V$(e,t){do{var n=Fe;try{if(af(),Xl.current=bs,ws){for(var r=$e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ws=!1}if(mr=0,Re=Le=$e=null,Ai=!1,qi=0,$f.current=null,n===null||n.return===null){De=1,ta=t,Fe=null;break}e:{var a=e,l=n.return,c=n,u=t;if(t=_e,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=c,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=ng(l);if(g!==null){g.flags&=-257,rg(g,l,c,a,t),g.mode&1&&tg(a,d,t),t=g,u=d;var $=t.updateQueue;if($===null){var x=new Set;x.add(u),t.updateQueue=x}else $.add(u);break e}else{if(!(t&1)){tg(a,d,t),Sf();break e}u=Error(A(426))}}else if(he&&c.mode&1){var w=ng(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),rg(w,l,c,a,t),rf(Lo(u,c));break e}}a=u=Lo(u,c),De!==4&&(De=2),Ni===null?Ni=[a]:Ni.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var v=b$(a,u,t);Kh(a,v);break e;case 1:c=u;var h=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Rn===null||!Rn.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var E=S$(a,c,t);Kh(a,E);break e}}a=a.return}while(a!==null)}_$(n)}catch(k){t=k,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function j$(){var e=Ss.current;return Ss.current=bs,e===null?bs:e}function Sf(){(De===0||De===3||De===2)&&(De=4),Ie===null||!(pr&268435455)&&!(Js&268435455)||Tn(Ie,_e)}function Cs(e,t){var n=q;q|=2;var r=j$();(Ie!==e||_e!==t)&&(rn=null,sr(e,t));do try{db();break}catch(i){V$(e,i)}while(1);if(af(),q=n,Ss.current=r,Fe!==null)throw Error(A(261));return Ie=null,_e=0,De}function db(){for(;Fe!==null;)W$(Fe)}function mb(){for(;Fe!==null&&!ME();)W$(Fe)}function W$(e){var t=H$(e.alternate,e,gt);e.memoizedProps=e.pendingProps,t===null?_$(e):Fe=t,$f.current=null}function _$(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ib(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Fe=null;return}}else if(n=ob(n,t,gt),n!==null){Fe=n;return}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);De===0&&(De=5)}function tr(e,t,n){var r=re,i=At.transition;try{At.transition=null,re=1,pb(e,t,n,r)}finally{At.transition=i,re=r}return null}function pb(e,t,n,r){do Co();while(zn!==null);if(q&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(YE(e,a),e===Ie&&(Fe=Ie=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||La||(La=!0,G$(ss,function(){return Co(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=At.transition,At.transition=null;var l=re;re=1;var c=q;q|=4,$f.current=null,lb(e,n),M$(n,e),Lw(Um),us=!!_m,Um=_m=null,e.current=n,sb(n),BE(),q=c,re=l,At.transition=a}else e.current=n;if(La&&(La=!1,zn=e,Ts=i),a=e.pendingLanes,a===0&&(Rn=null),jE(n.stateNode),dt(e,ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ks)throw ks=!1,e=up,up=null,e;return Ts&1&&e.tag!==0&&Co(),a=e.pendingLanes,a&1?e===dp?Li++:(Li=0,dp=e):Li=0,Kn(),null}function Co(){if(zn!==null){var e=bv(Ts),t=At.transition,n=re;try{if(At.transition=null,re=16>e?16:e,zn===null)var r=!1;else{if(e=zn,zn=null,Ts=0,q&6)throw Error(A(331));var i=q;for(q|=4,R=e.current;R!==null;){var a=R,l=a.child;if(R.flags&16){var c=a.deletions;if(c!==null){for(var u=0;u<c.length;u++){var d=c[u];for(R=d;R!==null;){var p=R;switch(p.tag){case 0:case 11:case 15:Fi(8,p,a)}var m=p.child;if(m!==null)m.return=p,R=m;else for(;R!==null;){p=R;var f=p.sibling,g=p.return;if(D$(p),p===d){R=null;break}if(f!==null){f.return=g,R=f;break}R=g}}}var $=a.alternate;if($!==null){var x=$.child;if(x!==null){$.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}R=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,R=l;else e:for(;R!==null;){if(a=R,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Fi(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,R=v;break e}R=a.return}}var h=e.current;for(R=h;R!==null;){l=R;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,R=y;else e:for(l=h;R!==null;){if(c=R,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Xs(9,c)}}catch(k){Ee(c,c.return,k)}if(c===l){R=null;break e}var E=c.sibling;if(E!==null){E.return=c.return,R=E;break e}R=c.return}}if(q=i,Kn(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Ws,e)}catch{}r=!0}return r}finally{re=n,At.transition=t}}return!1}function gg(e,t,n){t=Lo(n,t),t=b$(e,t,1),e=Dn(e,t,1),t=rt(),e!==null&&(ca(e,1,t),dt(e,t))}function Ee(e,t,n){if(e.tag===3)gg(e,e,n);else for(;t!==null;){if(t.tag===3){gg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r))){e=Lo(n,e),e=S$(t,e,1),t=Dn(t,e,1),e=rt(),t!==null&&(ca(t,1,e),dt(t,e));break}}t=t.return}}function fb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(_e&n)===n&&(De===4||De===3&&(_e&130023424)===_e&&500>ke()-Ef?sr(e,0):xf|=n),dt(e,t)}function U$(e,t){t===0&&(e.mode&1?(t=ba,ba<<=1,!(ba&130023424)&&(ba=4194304)):t=1);var n=rt();e=fn(e,t),e!==null&&(ca(e,t,n),dt(e,n))}function hb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),U$(e,n)}function gb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),U$(e,n)}var H$;H$=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)st=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return st=!1,rb(e,t,n);st=!!(e.flags&131072)}else st=!1,he&&t.flags&1048576&&Kv(t,ys,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ql(e,t),e=t.pendingProps;var i=Po(t,qe.current);To(t,n),i=ff(null,t,r,e,i,n);var a=hf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(r)?(a=!0,hs(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cf(t),i.updater=Ks,t.stateNode=i,i._reactInternals=t,Zm(t,r,e,n),t=np(null,t,r,!0,a,n)):(t.tag=0,he&&a&&tf(t),nt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ql(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=vb(r),e=Mt(r,e),i){case 0:t=tp(null,t,r,e,n);break e;case 1:t=ag(null,t,r,e,n);break e;case 11:t=og(null,t,r,e,n);break e;case 14:t=ig(null,t,r,Mt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),tp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),ag(e,t,r,i,n);case 3:e:{if(z$(t),e===null)throw Error(A(387));r=t.pendingProps,a=t.memoizedState,i=a.element,t$(e,t),xs(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Lo(Error(A(423)),t),t=lg(e,t,r,n,i);break e}else if(r!==i){i=Lo(Error(A(424)),t),t=lg(e,t,r,n,i);break e}else for(yt=Ln(t.stateNode.containerInfo.firstChild),vt=t,he=!0,Ot=null,n=Zv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ao(),r===i){t=hn(e,t,n);break e}nt(e,t,r,n)}t=t.child}return t;case 5:return n$(t),e===null&&Xm(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,Hm(r,i)?l=null:a!==null&&Hm(r,a)&&(t.flags|=32),C$(e,t),nt(e,t,l,n),t.child;case 6:return e===null&&Xm(t),null;case 13:return P$(e,t,n);case 4:return uf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fo(t,null,r,n):nt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),og(e,t,r,i,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,ue(vs,r._currentValue),r._currentValue=l,a!==null)if(_t(a.value,l)){if(a.children===i.children&&!ct.current){t=hn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){l=a.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=cn(-1,n&-n),u.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Jm(a.return,n,t),c.lanes|=n;break}u=u.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(A(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Jm(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}nt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,To(t,n),i=Ft(i),r=r(i),t.flags|=1,nt(e,t,r,n),t.child;case 14:return r=t.type,i=Mt(r,t.pendingProps),i=Mt(r.type,i),ig(e,t,r,i,n);case 15:return k$(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),ql(e,t),t.tag=1,ut(r)?(e=!0,hs(t)):e=!1,To(t,n),w$(t,r,i),Zm(t,r,i,n),np(null,t,r,!0,e,n);case 19:return A$(e,t,n);case 22:return T$(e,t,n)}throw Error(A(156,t.tag))};function G$(e,t){return $v(e,t)}function yb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,n,r){return new yb(e,t,n,r)}function kf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vb(e){if(typeof e=="function")return kf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_p)return 11;if(e===Up)return 14}return 2}function Mn(e,t){var n=e.alternate;return n===null?(n=Pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ts(e,t,n,r,i,a){var l=2;if(r=e,typeof e=="function")kf(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case io:return cr(n.children,i,a,t);case Wp:l=8,i|=8;break;case bm:return e=Pt(12,n,t,i|2),e.elementType=bm,e.lanes=a,e;case Sm:return e=Pt(13,n,t,i),e.elementType=Sm,e.lanes=a,e;case km:return e=Pt(19,n,t,i),e.elementType=km,e.lanes=a,e;case nv:return qs(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ev:l=10;break e;case tv:l=9;break e;case _p:l=11;break e;case Up:l=14;break e;case wn:l=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Pt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function cr(e,t,n,r){return e=Pt(7,e,r,t),e.lanes=n,e}function qs(e,t,n,r){return e=Pt(22,e,r,t),e.elementType=nv,e.lanes=n,e.stateNode={isHidden:!1},e}function ru(e,t,n){return e=Pt(6,e,null,t),e.lanes=n,e}function ou(e,t,n){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $b(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tf(e,t,n,r,i,a,l,c,u){return e=new $b(e,t,n,c,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Pt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cf(a),e}function xb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Y$(e){if(!e)return Un;e=e._reactInternals;e:{if(vr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(ut(n))return Yv(e,n,t)}return t}function Q$(e,t,n,r,i,a,l,c,u){return e=Tf(n,r,!0,e,i,a,l,c,u),e.context=Y$(null),n=e.current,r=rt(),i=In(n),a=cn(r,i),a.callback=t??null,Dn(n,a,i),e.current.lanes=i,ca(e,i,r),dt(e,r),e}function Zs(e,t,n,r){var i=t.current,a=rt(),l=In(i);return n=Y$(n),t.context===null?t.context=n:t.pendingContext=n,t=cn(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dn(i,t,l),e!==null&&(Wt(e,i,l,a),Kl(e,i,l)),l}function zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cf(e,t){yg(e,t),(e=e.alternate)&&yg(e,t)}function Eb(){return null}var K$=typeof reportError=="function"?reportError:function(e){console.error(e)};function zf(e){this._internalRoot=e}ec.prototype.render=zf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Zs(e,t,null,null)};ec.prototype.unmount=zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fr(function(){Zs(null,e,null,null)}),t[pn]=null}};function ec(e){this._internalRoot=e}ec.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kn.length&&t!==0&&t<kn[n].priority;n++);kn.splice(n,0,e),n===0&&zv(e)}};function Pf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vg(){}function wb(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var d=zs(l);a.call(d)}}var l=Q$(t,r,e,0,null,!1,!1,"",vg);return e._reactRootContainer=l,e[pn]=l.current,Yi(e.nodeType===8?e.parentNode:e),fr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var d=zs(u);c.call(d)}}var u=Tf(e,0,!1,null,null,!1,!1,"",vg);return e._reactRootContainer=u,e[pn]=u.current,Yi(e.nodeType===8?e.parentNode:e),fr(function(){Zs(t,u,n,r)}),u}function nc(e,t,n,r,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var c=i;i=function(){var u=zs(l);c.call(u)}}Zs(t,l,e,i)}else l=wb(n,t,e,i,r);return zs(l)}Sv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wi(t.pendingLanes);n!==0&&(Yp(t,n|1),dt(t,ke()),!(q&6)&&(Do=ke()+500,Kn()))}break;case 13:fr(function(){var r=fn(e,1);if(r!==null){var i=rt();Wt(r,e,1,i)}}),Cf(e,1)}};Qp=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var n=rt();Wt(t,e,134217728,n)}Cf(e,134217728)}};kv=function(e){if(e.tag===13){var t=In(e),n=fn(e,t);if(n!==null){var r=rt();Wt(n,e,t,r)}Cf(e,t)}};Tv=function(){return re};Cv=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};Rm=function(e,t,n){switch(t){case"input":if(zm(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Gs(r);if(!i)throw Error(A(90));ov(r),zm(r,i)}}}break;case"textarea":av(e,n);break;case"select":t=n.value,t!=null&&wo(e,!!n.multiple,t,!1)}};pv=wf;fv=fr;var bb={usingClientEntryPoint:!1,Events:[da,co,Gs,dv,mv,wf]},ei={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sb={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yv(e),e===null?null:e.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||Eb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{Ws=Da.inject(Sb),Xt=Da}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bb;Et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(t))throw Error(A(200));return xb(e,t,null,n)};Et.createRoot=function(e,t){if(!Pf(e))throw Error(A(299));var n=!1,r="",i=K$;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Tf(e,1,!1,null,null,n,!1,r,i),e[pn]=t.current,Yi(e.nodeType===8?e.parentNode:e),new zf(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=yv(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return fr(e)};Et.hydrate=function(e,t,n){if(!tc(t))throw Error(A(200));return nc(null,e,t,!0,n)};Et.hydrateRoot=function(e,t,n){if(!Pf(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",l=K$;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Q$(t,null,e,1,n??null,i,!1,a,l),e[pn]=t.current,Yi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ec(t)};Et.render=function(e,t,n){if(!tc(t))throw Error(A(200));return nc(null,e,t,!1,n)};Et.unmountComponentAtNode=function(e){if(!tc(e))throw Error(A(40));return e._reactRootContainer?(fr(function(){nc(null,null,e,!1,function(){e._reactRootContainer=null,e[pn]=null})}),!0):!1};Et.unstable_batchedUpdates=wf;Et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!tc(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return nc(e,t,n,!1,r)};Et.version="18.3.1-next-f1338f8080-20240426";function X$(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X$)}catch(e){console.error(e)}}X$(),X0.exports=Et;var kb=X0.exports,$g=kb;Em.createRoot=$g.createRoot,Em.hydrateRoot=$g.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function na(){return na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},na.apply(this,arguments)}var Pn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pn||(Pn={}));const xg="popstate";function Tb(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:l,hash:c}=r.location;return fp("",{pathname:a,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ps(i)}return zb(t,n,null,e)}function Te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function J$(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Cb(){return Math.random().toString(36).substr(2,8)}function Eg(e,t){return{usr:e.state,key:e.key,idx:t}}function fp(e,t,n,r){return n===void 0&&(n=null),na({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wo(t):t,{state:n,key:t&&t.key||r||Cb()})}function Ps(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Wo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function zb(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,c=Pn.Pop,u=null,d=p();d==null&&(d=0,l.replaceState(na({},l.state,{idx:d}),""));function p(){return(l.state||{idx:null}).idx}function m(){c=Pn.Pop;let w=p(),v=w==null?null:w-d;d=w,u&&u({action:c,location:x.location,delta:v})}function f(w,v){c=Pn.Push;let h=fp(x.location,w,v);n&&n(h,w),d=p()+1;let y=Eg(h,d),E=x.createHref(h);try{l.pushState(y,"",E)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(E)}a&&u&&u({action:c,location:x.location,delta:1})}function g(w,v){c=Pn.Replace;let h=fp(x.location,w,v);n&&n(h,w),d=p();let y=Eg(h,d),E=x.createHref(h);l.replaceState(y,"",E),a&&u&&u({action:c,location:x.location,delta:0})}function $(w){let v=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:Ps(w);return h=h.replace(/ $/,"%20"),Te(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let x={get action(){return c},get location(){return e(i,l)},listen(w){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(xg,m),u=w,()=>{i.removeEventListener(xg,m),u=null}},createHref(w){return t(i,w)},createURL:$,encodeLocation(w){let v=$(w);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:g,go(w){return l.go(w)}};return x}var wg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wg||(wg={}));function Pb(e,t,n){return n===void 0&&(n="/"),Ab(e,t,n,!1)}function Ab(e,t,n,r){let i=typeof t=="string"?Wo(t):t,a=Af(i.pathname||"/",n);if(a==null)return null;let l=q$(e);Fb(l);let c=null;for(let u=0;c==null&&u<l.length;++u){let d=Wb(a);c=Vb(l[u],d,r)}return c}function q$(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,l,c)=>{let u={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};u.relativePath.startsWith("/")&&(Te(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=Bn([r,u.relativePath]),p=n.concat(u);a.children&&a.children.length>0&&(Te(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),q$(a.children,t,p,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:Bb(d,a.index),routesMeta:p})};return e.forEach((a,l)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))i(a,l);else for(let u of Z$(a.path))i(a,l,u)}),t}function Z$(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=Z$(r.join("/")),c=[];return c.push(...l.map(u=>u===""?a:[a,u].join("/"))),i&&c.push(...l),c.map(u=>e.startsWith("/")&&u===""?"/":u)}function Fb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ob(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Nb=/^:[\w-]+$/,Lb=3,Db=2,Rb=1,Ib=10,Mb=-2,bg=e=>e==="*";function Bb(e,t){let n=e.split("/"),r=n.length;return n.some(bg)&&(r+=Mb),t&&(r+=Db),n.filter(i=>!bg(i)).reduce((i,a)=>i+(Nb.test(a)?Lb:a===""?Rb:Ib),r)}function Ob(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Vb(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a="/",l=[];for(let c=0;c<r.length;++c){let u=r[c],d=c===r.length-1,p=a==="/"?t:t.slice(a.length)||"/",m=Sg({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},p),f=u.route;if(!m&&d&&n&&!r[r.length-1].route.index&&(m=Sg({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},p)),!m)return null;Object.assign(i,m.params),l.push({params:i,pathname:Bn([a,m.pathname]),pathnameBase:Gb(Bn([a,m.pathnameBase])),route:f}),m.pathnameBase!=="/"&&(a=Bn([a,m.pathnameBase]))}return l}function Sg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=jb(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((d,p,m)=>{let{paramName:f,isOptional:g}=p;if(f==="*"){let x=c[m]||"";l=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const $=c[m];return g&&!$?d[f]=void 0:d[f]=($||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:l,pattern:e}}function jb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),J$(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Wb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return J$(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Af(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function _b(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Wo(e):e;return{pathname:n?n.startsWith("/")?n:Ub(n,t):t,search:Yb(r),hash:Qb(i)}}function Ub(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function iu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ff(e,t){let n=Hb(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Nf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Wo(e):(i=na({},e),Te(!i.pathname||!i.pathname.includes("?"),iu("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),iu("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),iu("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,c;if(l==null)c=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),m-=1;i.pathname=f.join("/")}c=m>=0?t[m]:"/"}let u=_b(i,c),d=l&&l!=="/"&&l.endsWith("/"),p=(a||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||p)&&(u.pathname+="/"),u}const Bn=e=>e.join("/").replace(/\/\/+/g,"/"),Gb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Kb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ex=["post","put","patch","delete"];new Set(ex);const Xb=["get",...ex];new Set(Xb);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ra(){return ra=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ra.apply(this,arguments)}const Lf=b.createContext(null),Jb=b.createContext(null),Xn=b.createContext(null),rc=b.createContext(null),vn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),tx=b.createContext(null);function qb(e,t){let{relative:n}=t===void 0?{}:t;_o()||Te(!1);let{basename:r,navigator:i}=b.useContext(Xn),{hash:a,pathname:l,search:c}=rx(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Bn([r,l])),i.createHref({pathname:u,search:c,hash:a})}function _o(){return b.useContext(rc)!=null}function $r(){return _o()||Te(!1),b.useContext(rc).location}function nx(e){b.useContext(Xn).static||b.useLayoutEffect(e)}function Uo(){let{isDataRoute:e}=b.useContext(vn);return e?mS():Zb()}function Zb(){_o()||Te(!1);let e=b.useContext(Lf),{basename:t,future:n,navigator:r}=b.useContext(Xn),{matches:i}=b.useContext(vn),{pathname:a}=$r(),l=JSON.stringify(Ff(i,n.v7_relativeSplatPath)),c=b.useRef(!1);return nx(()=>{c.current=!0}),b.useCallback(function(d,p){if(p===void 0&&(p={}),!c.current)return;if(typeof d=="number"){r.go(d);return}let m=Nf(d,JSON.parse(l),a,p.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Bn([t,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[t,r,l,a,e])}function eS(){let{matches:e}=b.useContext(vn),t=e[e.length-1];return t?t.params:{}}function rx(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Xn),{matches:i}=b.useContext(vn),{pathname:a}=$r(),l=JSON.stringify(Ff(i,r.v7_relativeSplatPath));return b.useMemo(()=>Nf(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function tS(e,t){return nS(e,t)}function nS(e,t,n,r){_o()||Te(!1);let{navigator:i}=b.useContext(Xn),{matches:a}=b.useContext(vn),l=a[a.length-1],c=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let d=$r(),p;if(t){var m;let w=typeof t=="string"?Wo(t):t;u==="/"||(m=w.pathname)!=null&&m.startsWith(u)||Te(!1),p=w}else p=d;let f=p.pathname||"/",g=f;if(u!=="/"){let w=u.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let $=Pb(e,{pathname:g}),x=lS($&&$.map(w=>Object.assign({},w,{params:Object.assign({},c,w.params),pathname:Bn([u,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?u:Bn([u,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,n,r);return t&&x?b.createElement(rc.Provider,{value:{location:ra({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Pn.Pop}},x):x}function rS(){let e=dS(),t=Kb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,a)}const oS=b.createElement(rS,null);class iS extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(vn.Provider,{value:this.props.routeContext},b.createElement(tx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function aS(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Lf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(vn.Provider,{value:t},r)}function lS(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let p=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);p>=0||Te(!1),l=l.slice(0,Math.min(l.length,p+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:f,errors:g}=n,$=m.route.loader&&f[m.route.id]===void 0&&(!g||g[m.route.id]===void 0);if(m.route.lazy||$){u=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((p,m,f)=>{let g,$=!1,x=null,w=null;n&&(g=c&&m.route.id?c[m.route.id]:void 0,x=m.route.errorElement||oS,u&&(d<0&&f===0?(pS("route-fallback",!1),$=!0,w=null):d===f&&($=!0,w=m.route.hydrateFallbackElement||null)));let v=t.concat(l.slice(0,f+1)),h=()=>{let y;return g?y=x:$?y=w:m.route.Component?y=b.createElement(m.route.Component,null):m.route.element?y=m.route.element:y=p,b.createElement(aS,{match:m,routeContext:{outlet:p,matches:v,isDataRoute:n!=null},children:y})};return n&&(m.route.ErrorBoundary||m.route.errorElement||f===0)?b.createElement(iS,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:h(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):h()},null)}var ox=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ox||{}),As=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(As||{});function sS(e){let t=b.useContext(Lf);return t||Te(!1),t}function cS(e){let t=b.useContext(Jb);return t||Te(!1),t}function uS(e){let t=b.useContext(vn);return t||Te(!1),t}function ix(e){let t=uS(),n=t.matches[t.matches.length-1];return n.route.id||Te(!1),n.route.id}function dS(){var e;let t=b.useContext(tx),n=cS(As.UseRouteError),r=ix(As.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function mS(){let{router:e}=sS(ox.UseNavigateStable),t=ix(As.UseNavigateStable),n=b.useRef(!1);return nx(()=>{n.current=!0}),b.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ra({fromRouteId:t},a)))},[e,t])}const kg={};function pS(e,t,n){!t&&!kg[e]&&(kg[e]=!0)}function fS(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function hS(e){let{to:t,replace:n,state:r,relative:i}=e;_o()||Te(!1);let{future:a,static:l}=b.useContext(Xn),{matches:c}=b.useContext(vn),{pathname:u}=$r(),d=Uo(),p=Nf(t,Ff(c,a.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(p);return b.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function et(e){Te(!1)}function gS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Pn.Pop,navigator:a,static:l=!1,future:c}=e;_o()&&Te(!1);let u=t.replace(/^\/*/,"/"),d=b.useMemo(()=>({basename:u,navigator:a,static:l,future:ra({v7_relativeSplatPath:!1},c)}),[u,c,a,l]);typeof r=="string"&&(r=Wo(r));let{pathname:p="/",search:m="",hash:f="",state:g=null,key:$="default"}=r,x=b.useMemo(()=>{let w=Af(p,u);return w==null?null:{location:{pathname:w,search:m,hash:f,state:g,key:$},navigationType:i}},[u,p,m,f,g,$,i]);return x==null?null:b.createElement(Xn.Provider,{value:d},b.createElement(rc.Provider,{children:n,value:x}))}function yS(e){let{children:t,location:n}=e;return tS(hp(t),n)}new Promise(()=>{});function hp(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let a=[...t,i];if(r.type===b.Fragment){n.push.apply(n,hp(r.props.children,a));return}r.type!==et&&Te(!1),!r.props.index||!r.props.children||Te(!1);let l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=hp(r.props.children,a)),n.push(l)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gp(){return gp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gp.apply(this,arguments)}function vS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function $S(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xS(e,t){return e.button===0&&(!t||t==="_self")&&!$S(e)}const ES=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wS="6";try{window.__reactRouterVersion=wS}catch{}const bS="startTransition",Tg=xE[bS];function SS(e){let{basename:t,children:n,future:r,window:i}=e,a=b.useRef();a.current==null&&(a.current=Tb({window:i,v5Compat:!0}));let l=a.current,[c,u]=b.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},p=b.useCallback(m=>{d&&Tg?Tg(()=>u(m)):u(m)},[u,d]);return b.useLayoutEffect(()=>l.listen(p),[l,p]),b.useEffect(()=>fS(r),[r]),b.createElement(gS,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}const kS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ce=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:l,state:c,target:u,to:d,preventScrollReset:p,viewTransition:m}=t,f=vS(t,ES),{basename:g}=b.useContext(Xn),$,x=!1;if(typeof d=="string"&&TS.test(d)&&($=d,kS))try{let y=new URL(window.location.href),E=d.startsWith("//")?new URL(y.protocol+d):new URL(d),k=Af(E.pathname,g);E.origin===y.origin&&k!=null?d=k+E.search+E.hash:x=!0}catch{}let w=qb(d,{relative:i}),v=CS(d,{replace:l,state:c,target:u,preventScrollReset:p,relative:i,viewTransition:m});function h(y){r&&r(y),y.defaultPrevented||v(y)}return b.createElement("a",gp({},f,{href:$||w,onClick:x||a?r:h,ref:n,target:u}))});var Cg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Cg||(Cg={}));var zg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zg||(zg={}));function CS(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:l,viewTransition:c}=t===void 0?{}:t,u=Uo(),d=$r(),p=rx(e,{relative:l});return b.useCallback(m=>{if(xS(m,n)){m.preventDefault();let f=r!==void 0?r:Ps(d)===Ps(p);u(e,{replace:f,state:i,preventScrollReset:a,relative:l,viewTransition:c})}},[d,u,p,r,i,n,e,a,l,c])}var ax={exports:{}},oe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df=Symbol.for("react.element"),Rf=Symbol.for("react.portal"),oc=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),ac=Symbol.for("react.profiler"),lc=Symbol.for("react.provider"),sc=Symbol.for("react.context"),zS=Symbol.for("react.server_context"),cc=Symbol.for("react.forward_ref"),uc=Symbol.for("react.suspense"),dc=Symbol.for("react.suspense_list"),mc=Symbol.for("react.memo"),pc=Symbol.for("react.lazy"),PS=Symbol.for("react.offscreen"),lx;lx=Symbol.for("react.module.reference");function Lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Df:switch(e=e.type,e){case oc:case ac:case ic:case uc:case dc:return e;default:switch(e=e&&e.$$typeof,e){case zS:case sc:case cc:case pc:case mc:case lc:return e;default:return t}}case Rf:return t}}}oe.ContextConsumer=sc;oe.ContextProvider=lc;oe.Element=Df;oe.ForwardRef=cc;oe.Fragment=oc;oe.Lazy=pc;oe.Memo=mc;oe.Portal=Rf;oe.Profiler=ac;oe.StrictMode=ic;oe.Suspense=uc;oe.SuspenseList=dc;oe.isAsyncMode=function(){return!1};oe.isConcurrentMode=function(){return!1};oe.isContextConsumer=function(e){return Lt(e)===sc};oe.isContextProvider=function(e){return Lt(e)===lc};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Df};oe.isForwardRef=function(e){return Lt(e)===cc};oe.isFragment=function(e){return Lt(e)===oc};oe.isLazy=function(e){return Lt(e)===pc};oe.isMemo=function(e){return Lt(e)===mc};oe.isPortal=function(e){return Lt(e)===Rf};oe.isProfiler=function(e){return Lt(e)===ac};oe.isStrictMode=function(e){return Lt(e)===ic};oe.isSuspense=function(e){return Lt(e)===uc};oe.isSuspenseList=function(e){return Lt(e)===dc};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===oc||e===ac||e===ic||e===uc||e===dc||e===PS||typeof e=="object"&&e!==null&&(e.$$typeof===pc||e.$$typeof===mc||e.$$typeof===lc||e.$$typeof===sc||e.$$typeof===cc||e.$$typeof===lx||e.getModuleId!==void 0)};oe.typeOf=Lt;ax.exports=oe;var sx=ax.exports;function AS(e){function t(N,D,T,j,S){for(var Q=0,L=0,se=0,J=0,K,G,Be=0,at=0,Z,He=Z=K=0,te=0,Oe=0,Ho=0,Ve=0,ya=T.length,Go=ya-1,Dt,U="",Se="",Fc="",Nc="",$n;te<ya;){if(G=T.charCodeAt(te),te===Go&&L+J+se+Q!==0&&(L!==0&&(G=L===47?10:47),J=se=Q=0,ya++,Go++),L+J+se+Q===0){if(te===Go&&(0<Oe&&(U=U.replace(f,"")),0<U.trim().length)){switch(G){case 32:case 9:case 59:case 13:case 10:break;default:U+=T.charAt(te)}G=59}switch(G){case 123:for(U=U.trim(),K=U.charCodeAt(0),Z=1,Ve=++te;te<ya;){switch(G=T.charCodeAt(te)){case 123:Z++;break;case 125:Z--;break;case 47:switch(G=T.charCodeAt(te+1)){case 42:case 47:e:{for(He=te+1;He<Go;++He)switch(T.charCodeAt(He)){case 47:if(G===42&&T.charCodeAt(He-1)===42&&te+2!==He){te=He+1;break e}break;case 10:if(G===47){te=He+1;break e}}te=He}}break;case 91:G++;case 40:G++;case 34:case 39:for(;te++<Go&&T.charCodeAt(te)!==G;);}if(Z===0)break;te++}switch(Z=T.substring(Ve,te),K===0&&(K=(U=U.replace(m,"").trim()).charCodeAt(0)),K){case 64:switch(0<Oe&&(U=U.replace(f,"")),G=U.charCodeAt(1),G){case 100:case 109:case 115:case 45:Oe=D;break;default:Oe=ne}if(Z=t(D,Oe,Z,G,S+1),Ve=Z.length,0<F&&(Oe=n(ne,U,Ho),$n=c(3,Z,Oe,D,ee,H,Ve,G,S,j),U=Oe.join(""),$n!==void 0&&(Ve=(Z=$n.trim()).length)===0&&(G=0,Z="")),0<Ve)switch(G){case 115:U=U.replace(z,l);case 100:case 109:case 45:Z=U+"{"+Z+"}";break;case 107:U=U.replace(h,"$1 $2"),Z=U+"{"+Z+"}",Z=de===1||de===2&&a("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=U+Z,j===112&&(Z=(Se+=Z,""))}else Z="";break;default:Z=t(D,n(D,U,Ho),Z,j,S+1)}Fc+=Z,Z=Ho=Oe=He=K=0,U="",G=T.charCodeAt(++te);break;case 125:case 59:if(U=(0<Oe?U.replace(f,""):U).trim(),1<(Ve=U.length))switch(He===0&&(K=U.charCodeAt(0),K===45||96<K&&123>K)&&(Ve=(U=U.replace(" ",":")).length),0<F&&($n=c(1,U,D,N,ee,H,Se.length,j,S,j))!==void 0&&(Ve=(U=$n.trim()).length)===0&&(U="\0\0"),K=U.charCodeAt(0),G=U.charCodeAt(1),K){case 0:break;case 64:if(G===105||G===99){Nc+=U+T.charAt(te);break}default:U.charCodeAt(Ve-1)!==58&&(Se+=i(U,K,G,U.charCodeAt(2)))}Ho=Oe=He=K=0,U="",G=T.charCodeAt(++te)}}switch(G){case 13:case 10:L===47?L=0:1+K===0&&j!==107&&0<U.length&&(Oe=1,U+="\0"),0<F*W&&c(0,U,D,N,ee,H,Se.length,j,S,j),H=1,ee++;break;case 59:case 125:if(L+J+se+Q===0){H++;break}default:switch(H++,Dt=T.charAt(te),G){case 9:case 32:if(J+Q+L===0)switch(Be){case 44:case 58:case 9:case 32:Dt="";break;default:G!==32&&(Dt=" ")}break;case 0:Dt="\\0";break;case 12:Dt="\\f";break;case 11:Dt="\\v";break;case 38:J+L+Q===0&&(Oe=Ho=1,Dt="\f"+Dt);break;case 108:if(J+L+Q+I===0&&0<He)switch(te-He){case 2:Be===112&&T.charCodeAt(te-3)===58&&(I=Be);case 8:at===111&&(I=at)}break;case 58:J+L+Q===0&&(He=te);break;case 44:L+se+J+Q===0&&(Oe=1,Dt+="\r");break;case 34:case 39:L===0&&(J=J===G?0:J===0?G:J);break;case 91:J+L+se===0&&Q++;break;case 93:J+L+se===0&&Q--;break;case 41:J+L+Q===0&&se--;break;case 40:if(J+L+Q===0){if(K===0)switch(2*Be+3*at){case 533:break;default:K=1}se++}break;case 64:L+se+J+Q+He+Z===0&&(Z=1);break;case 42:case 47:if(!(0<J+Q+se))switch(L){case 0:switch(2*G+3*T.charCodeAt(te+1)){case 235:L=47;break;case 220:Ve=te,L=42}break;case 42:G===47&&Be===42&&Ve+2!==te&&(T.charCodeAt(Ve+2)===33&&(Se+=T.substring(Ve,te+1)),Dt="",L=0)}}L===0&&(U+=Dt)}at=Be,Be=G,te++}if(Ve=Se.length,0<Ve){if(Oe=D,0<F&&($n=c(2,Se,Oe,N,ee,H,Ve,j,S,j),$n!==void 0&&(Se=$n).length===0))return Nc+Se+Fc;if(Se=Oe.join(",")+"{"+Se+"}",de*I!==0){switch(de!==2||a(Se,2)||(I=0),I){case 111:Se=Se.replace(E,":-moz-$1")+Se;break;case 112:Se=Se.replace(y,"::-webkit-input-$1")+Se.replace(y,"::-moz-$1")+Se.replace(y,":-ms-input-$1")+Se}I=0}}return Nc+Se+Fc}function n(N,D,T){var j=D.trim().split(w);D=j;var S=j.length,Q=N.length;switch(Q){case 0:case 1:var L=0;for(N=Q===0?"":N[0]+" ";L<S;++L)D[L]=r(N,D[L],T).trim();break;default:var se=L=0;for(D=[];L<S;++L)for(var J=0;J<Q;++J)D[se++]=r(N[J]+" ",j[L],T).trim()}return D}function r(N,D,T){var j=D.charCodeAt(0);switch(33>j&&(j=(D=D.trim()).charCodeAt(0)),j){case 38:return D.replace(v,"$1"+N.trim());case 58:return N.trim()+D.replace(v,"$1"+N.trim());default:if(0<1*T&&0<D.indexOf("\f"))return D.replace(v,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+D}function i(N,D,T,j){var S=N+";",Q=2*D+3*T+4*j;if(Q===944){N=S.indexOf(":",9)+1;var L=S.substring(N,S.length-1).trim();return L=S.substring(0,N).trim()+L+";",de===1||de===2&&a(L,1)?"-webkit-"+L+L:L}if(de===0||de===2&&!a(S,1))return S;switch(Q){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(ae,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return L=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+L+"-webkit-"+S+"-ms-flex-pack"+L+S;case 1005:return $.test(S)?S.replace(g,":-webkit-")+S.replace(g,":-moz-")+S:S;case 1e3:switch(L=S.substring(13).trim(),D=L.indexOf("-")+1,L.charCodeAt(0)+L.charCodeAt(D)){case 226:L=S.replace(k,"tb");break;case 232:L=S.replace(k,"tb-rl");break;case 220:L=S.replace(k,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+L+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(D=(S=N).length-10,L=(S.charCodeAt(D)===33?S.substring(0,D):S).substring(N.indexOf(":",7)+1).trim(),Q=L.charCodeAt(0)+(L.charCodeAt(7)|0)){case 203:if(111>L.charCodeAt(8))break;case 115:S=S.replace(L,"-webkit-"+L)+";"+S;break;case 207:case 102:S=S.replace(L,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+S.replace(L,"-webkit-"+L)+";"+S.replace(L,"-ms-"+L+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return L=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+L+"-ms-flex-"+L+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(C,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(C,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(B.test(N)===!0)return(L=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),D,T,j).replace(":fill-available",":stretch"):S.replace(L,"-webkit-"+L)+S.replace(L,"-moz-"+L.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,T+j===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+S}return S}function a(N,D){var T=N.indexOf(D===1?":":"{"),j=N.substring(0,D!==3?T:10);return T=N.substring(T+1,N.length-1),O(D!==2?j:j.replace(M,"$1"),T,D)}function l(N,D){var T=i(D,D.charCodeAt(0),D.charCodeAt(1),D.charCodeAt(2));return T!==D+";"?T.replace(P," or ($1)").substring(4):"("+D+")"}function c(N,D,T,j,S,Q,L,se,J,K){for(var G=0,Be=D,at;G<F;++G)switch(at=le[G].call(p,N,Be,T,j,S,Q,L,se,J,K)){case void 0:case!1:case!0:case null:break;default:Be=at}if(Be!==D)return Be}function u(N){switch(N){case void 0:case null:F=le.length=0;break;default:if(typeof N=="function")le[F++]=N;else if(typeof N=="object")for(var D=0,T=N.length;D<T;++D)u(N[D]);else W=!!N|0}return u}function d(N){return N=N.prefix,N!==void 0&&(O=null,N?typeof N!="function"?de=1:(de=2,O=N):de=0),d}function p(N,D){var T=N;if(33>T.charCodeAt(0)&&(T=T.trim()),V=T,T=[V],0<F){var j=c(-1,D,T,T,ee,H,0,0,0,0);j!==void 0&&typeof j=="string"&&(D=j)}var S=t(ne,T,D,0,0);return 0<F&&(j=c(-2,S,T,T,ee,H,S.length,0,0,0),j!==void 0&&(S=j)),V="",I=0,H=ee=1,S}var m=/^\0+/g,f=/[\0\r\f]/g,g=/: */g,$=/zoo|gra/,x=/([,: ])(transform)/g,w=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,E=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,z=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,C=/-self|flex-/g,M=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,ae=/([^-])(image-set\()/,H=1,ee=1,I=0,de=1,ne=[],le=[],F=0,O=null,W=0,V="";return p.use=u,p.set=d,e!==void 0&&d(e),p}var FS={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function NS(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var LS=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Pg=NS(function(e){return LS.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),cx={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=typeof Symbol=="function"&&Symbol.for,If=Me?Symbol.for("react.element"):60103,Mf=Me?Symbol.for("react.portal"):60106,fc=Me?Symbol.for("react.fragment"):60107,hc=Me?Symbol.for("react.strict_mode"):60108,gc=Me?Symbol.for("react.profiler"):60114,yc=Me?Symbol.for("react.provider"):60109,vc=Me?Symbol.for("react.context"):60110,Bf=Me?Symbol.for("react.async_mode"):60111,$c=Me?Symbol.for("react.concurrent_mode"):60111,xc=Me?Symbol.for("react.forward_ref"):60112,Ec=Me?Symbol.for("react.suspense"):60113,DS=Me?Symbol.for("react.suspense_list"):60120,wc=Me?Symbol.for("react.memo"):60115,bc=Me?Symbol.for("react.lazy"):60116,RS=Me?Symbol.for("react.block"):60121,IS=Me?Symbol.for("react.fundamental"):60117,MS=Me?Symbol.for("react.responder"):60118,BS=Me?Symbol.for("react.scope"):60119;function bt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case If:switch(e=e.type,e){case Bf:case $c:case fc:case gc:case hc:case Ec:return e;default:switch(e=e&&e.$$typeof,e){case vc:case xc:case bc:case wc:case yc:return e;default:return t}}case Mf:return t}}}function ux(e){return bt(e)===$c}ie.AsyncMode=Bf;ie.ConcurrentMode=$c;ie.ContextConsumer=vc;ie.ContextProvider=yc;ie.Element=If;ie.ForwardRef=xc;ie.Fragment=fc;ie.Lazy=bc;ie.Memo=wc;ie.Portal=Mf;ie.Profiler=gc;ie.StrictMode=hc;ie.Suspense=Ec;ie.isAsyncMode=function(e){return ux(e)||bt(e)===Bf};ie.isConcurrentMode=ux;ie.isContextConsumer=function(e){return bt(e)===vc};ie.isContextProvider=function(e){return bt(e)===yc};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===If};ie.isForwardRef=function(e){return bt(e)===xc};ie.isFragment=function(e){return bt(e)===fc};ie.isLazy=function(e){return bt(e)===bc};ie.isMemo=function(e){return bt(e)===wc};ie.isPortal=function(e){return bt(e)===Mf};ie.isProfiler=function(e){return bt(e)===gc};ie.isStrictMode=function(e){return bt(e)===hc};ie.isSuspense=function(e){return bt(e)===Ec};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fc||e===$c||e===gc||e===hc||e===Ec||e===DS||typeof e=="object"&&e!==null&&(e.$$typeof===bc||e.$$typeof===wc||e.$$typeof===yc||e.$$typeof===vc||e.$$typeof===xc||e.$$typeof===IS||e.$$typeof===MS||e.$$typeof===BS||e.$$typeof===RS)};ie.typeOf=bt;cx.exports=ie;var OS=cx.exports,Of=OS,VS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},WS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vf={};Vf[Of.ForwardRef]=WS;Vf[Of.Memo]=dx;function Ag(e){return Of.isMemo(e)?dx:Vf[e.$$typeof]||VS}var _S=Object.defineProperty,US=Object.getOwnPropertyNames,Fg=Object.getOwnPropertySymbols,HS=Object.getOwnPropertyDescriptor,GS=Object.getPrototypeOf,Ng=Object.prototype;function mx(e,t,n){if(typeof t!="string"){if(Ng){var r=GS(t);r&&r!==Ng&&mx(e,r,n)}var i=US(t);Fg&&(i=i.concat(Fg(t)));for(var a=Ag(e),l=Ag(t),c=0;c<i.length;++c){var u=i[c];if(!jS[u]&&!(n&&n[u])&&!(l&&l[u])&&!(a&&a[u])){var d=HS(t,u);try{_S(e,u,d)}catch{}}}}return e}var YS=mx;const QS=V0(YS);function Vt(){return(Vt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Lg=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},yp=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!sx.typeOf(e)},Fs=Object.freeze([]),On=Object.freeze({});function Ro(e){return typeof e=="function"}function Dg(e){return e.displayName||e.name||"Component"}function jf(e){return e&&typeof e.styledComponentId=="string"}var Io=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Wf=typeof window<"u"&&"HTMLElement"in window,KS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),XS={};function hr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var JS=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;n>=l;)(l<<=1)<0&&hr(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var u=this.indexOfGroup(n+1),d=0,p=r.length;d<p;d++)this.tag.insertRule(u,r[d])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),a=i+r;this.groupSizes[n]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],a=this.indexOfGroup(n),l=a+i,c=a;c<l;c++)r+=this.tag.getRule(c)+`/*!sc*/
`;return r},e}(),ns=new Map,Ns=new Map,Di=1,Ra=function(e){if(ns.has(e))return ns.get(e);for(;Ns.has(Di);)Di++;var t=Di++;return ns.set(e,t),Ns.set(t,e),t},qS=function(e){return Ns.get(e)},ZS=function(e,t){t>=Di&&(Di=t+1),ns.set(e,t),Ns.set(t,e)},ek="style["+Io+'][data-styled-version="5.3.11"]',tk=new RegExp("^"+Io+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),nk=function(e,t,n){for(var r,i=n.split(","),a=0,l=i.length;a<l;a++)(r=i[a])&&e.registerName(t,r)},rk=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,a=n.length;i<a;i++){var l=n[i].trim();if(l){var c=l.match(tk);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(ZS(d,u),nk(e,d,c[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},ok=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},px=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(c){for(var u=c.childNodes,d=u.length;d>=0;d--){var p=u[d];if(p&&p.nodeType===1&&p.hasAttribute(Io))return p}}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Io,"active"),r.setAttribute("data-styled-version","5.3.11");var l=ok();return l&&r.setAttribute("nonce",l),n.insertBefore(r,a),r},ik=function(){function e(n){var r=this.element=px(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,l=0,c=a.length;l<c;l++){var u=a[l];if(u.ownerNode===i)return u}hr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),ak=function(){function e(n){var r=this.element=px(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),a=this.nodes[n];return this.element.insertBefore(i,a||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),lk=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Rg=Wf,sk={isServer:!Wf,useCSSOMInjection:!KS},Ls=function(){function e(n,r,i){n===void 0&&(n=On),r===void 0&&(r={}),this.options=Vt({},sk,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Wf&&Rg&&(Rg=!1,function(a){for(var l=document.querySelectorAll(ek),c=0,u=l.length;c<u;c++){var d=l[c];d&&d.getAttribute(Io)!=="active"&&(rk(a,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}e.registerId=function(n){return Ra(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Vt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,a=r.useCSSOMInjection,l=r.target,n=i?new lk(l):a?new ik(l):new ak(l),new JS(n)));var n,r,i,a,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ra(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ra(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ra(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,a="",l=0;l<i;l++){var c=qS(l);if(c!==void 0){var u=n.names.get(c),d=r.getGroup(l);if(u&&d&&u.size){var p=Io+".g"+l+'[id="'+c+'"]',m="";u!==void 0&&u.forEach(function(f){f.length>0&&(m+=f+",")}),a+=""+d+p+'{content:"'+m+`"}/*!sc*/
`}}}return a}(this)},e}(),ck=/(a)(d)/gi,Ig=function(e){return String.fromCharCode(e+(e>25?39:97))};function vp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ig(t%52)+n;return(Ig(t%52)+n).replace(ck,"$1-$2")}var yo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},fx=function(e){return yo(5381,e)};function hx(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ro(n)&&!jf(n))return!1}return!0}var uk=fx("5.3.11"),dk=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&hx(t),this.componentId=n,this.baseHash=yo(uk,n),this.baseStyle=r,Ls.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))a.push(this.staticRulesId);else{var l=gr(this.rules,t,n,r).join(""),c=vp(yo(this.baseHash,l)>>>0);if(!n.hasNameForId(i,c)){var u=r(l,"."+c,void 0,i);n.insertRules(i,c,u)}a.push(c),this.staticRulesId=c}else{for(var d=this.rules.length,p=yo(this.baseHash,r.hash),m="",f=0;f<d;f++){var g=this.rules[f];if(typeof g=="string")m+=g;else if(g){var $=gr(g,t,n,r),x=Array.isArray($)?$.join(""):$;p=yo(p,x+f),m+=x}}if(m){var w=vp(p>>>0);if(!n.hasNameForId(i,w)){var v=r(m,"."+w,void 0,i);n.insertRules(i,w,v)}a.push(w)}}return a.join(" ")},e}(),mk=/^\s*\/\/.*$/gm,pk=[":","[",".","#"];function fk(e){var t,n,r,i,a=e===void 0?On:e,l=a.options,c=l===void 0?On:l,u=a.plugins,d=u===void 0?Fs:u,p=new AS(c),m=[],f=function(x){function w(v){if(v)try{x(v+"}")}catch{}}return function(v,h,y,E,k,z,P,C,M,B){switch(v){case 1:if(M===0&&h.charCodeAt(0)===64)return x(h+";"),"";break;case 2:if(C===0)return h+"/*|*/";break;case 3:switch(C){case 102:case 112:return x(y[0]+h),"";default:return h+(B===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(w)}}}(function(x){m.push(x)}),g=function(x,w,v){return w===0&&pk.indexOf(v[n.length])!==-1||v.match(i)?x:"."+t};function $(x,w,v,h){h===void 0&&(h="&");var y=x.replace(mk,""),E=w&&v?v+" "+w+" { "+y+" }":y;return t=h,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),p(v||!w?"":w,E)}return p.use([].concat(d,[function(x,w,v){x===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(r,g))},f,function(x){if(x===-2){var w=m;return m=[],w}}])),$.hash=d.length?d.reduce(function(x,w){return w.name||hr(15),yo(x,w.name)},5381).toString():"",$}var gx=o.createContext();gx.Consumer;var yx=o.createContext(),hk=(yx.Consumer,new Ls),$p=fk();function vx(){return b.useContext(gx)||hk}function $x(){return b.useContext(yx)||$p}var gk=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=$p);var l=r.name+a.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,a(r.rules,l,"@keyframes"))},this.toString=function(){return hr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=$p),this.name+t.hash},e}(),yk=/([A-Z])/,vk=/([A-Z])/g,$k=/^ms-/,xk=function(e){return"-"+e.toLowerCase()};function Mg(e){return yk.test(e)?e.replace(vk,xk).replace($k,"-ms-"):e}var Bg=function(e){return e==null||e===!1||e===""};function gr(e,t,n,r){if(Array.isArray(e)){for(var i,a=[],l=0,c=e.length;l<c;l+=1)(i=gr(e[l],t,n,r))!==""&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}if(Bg(e))return"";if(jf(e))return"."+e.styledComponentId;if(Ro(e)){if(typeof(d=e)!="function"||d.prototype&&d.prototype.isReactComponent||!t)return e;var u=e(t);return gr(u,t,n,r)}var d;return e instanceof gk?n?(e.inject(n,r),e.getName(r)):e:yp(e)?function p(m,f){var g,$,x=[];for(var w in m)m.hasOwnProperty(w)&&!Bg(m[w])&&(Array.isArray(m[w])&&m[w].isCss||Ro(m[w])?x.push(Mg(w)+":",m[w],";"):yp(m[w])?x.push.apply(x,p(m[w],w)):x.push(Mg(w)+": "+(g=w,($=m[w])==null||typeof $=="boolean"||$===""?"":typeof $!="number"||$===0||g in FS||g.startsWith("--")?String($).trim():$+"px")+";"));return f?[f+" {"].concat(x,["}"]):x}(e):e.toString()}var Og=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function xx(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ro(e)||yp(e)?Og(gr(Lg(Fs,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Og(gr(Lg(e,n)))}var Ex=function(e,t,n){return n===void 0&&(n=On),e.theme!==n.theme&&e.theme||t||n.theme},Ek=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wk=/(^-|-$)/g;function au(e){return e.replace(Ek,"-").replace(wk,"")}var wx=function(e){return vp(fx(e)>>>0)};function Ia(e){return typeof e=="string"&&!0}var xp=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},bk=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Sk(e,t,n){var r=e[n];xp(t)&&xp(r)?bx(r,t):e[n]=t}function bx(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,a=n;i<a.length;i++){var l=a[i];if(xp(l))for(var c in l)bk(c)&&Sk(e,l[c],c)}return e}var oa=o.createContext();oa.Consumer;function Sx(e){var t=b.useContext(oa),n=b.useMemo(function(){return function(r,i){if(!r)return hr(14);if(Ro(r)){var a=r(i);return a}return Array.isArray(r)||typeof r!="object"?hr(8):i?Vt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?o.createElement(oa.Provider,{value:n},e.children):null}var lu={};function kx(e,t,n){var r=jf(e),i=!Ia(e),a=t.attrs,l=a===void 0?Fs:a,c=t.componentId,u=c===void 0?function(h,y){var E=typeof h!="string"?"sc":au(h);lu[E]=(lu[E]||0)+1;var k=E+"-"+wx("5.3.11"+E+lu[E]);return y?y+"-"+k:k}(t.displayName,t.parentComponentId):c,d=t.displayName,p=d===void 0?function(h){return Ia(h)?"styled."+h:"Styled("+Dg(h)+")"}(e):d,m=t.displayName&&t.componentId?au(t.displayName)+"-"+t.componentId:t.componentId||u,f=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,g=t.shouldForwardProp;r&&e.shouldForwardProp&&(g=t.shouldForwardProp?function(h,y,E){return e.shouldForwardProp(h,y,E)&&t.shouldForwardProp(h,y,E)}:e.shouldForwardProp);var $,x=new dk(n,m,r?e.componentStyle:void 0),w=x.isStatic&&l.length===0,v=function(h,y){return function(E,k,z,P){var C=E.attrs,M=E.componentStyle,B=E.defaultProps,ae=E.foldedComponentIds,H=E.shouldForwardProp,ee=E.styledComponentId,I=E.target,de=function(j,S,Q){j===void 0&&(j=On);var L=Vt({},S,{theme:j}),se={};return Q.forEach(function(J){var K,G,Be,at=J;for(K in Ro(at)&&(at=at(L)),at)L[K]=se[K]=K==="className"?(G=se[K],Be=at[K],G&&Be?G+" "+Be:G||Be):at[K]}),[L,se]}(Ex(k,b.useContext(oa),B)||On,k,C),ne=de[0],le=de[1],F=function(j,S,Q,L){var se=vx(),J=$x(),K=S?j.generateAndInjectStyles(On,se,J):j.generateAndInjectStyles(Q,se,J);return K}(M,P,ne),O=z,W=le.$as||k.$as||le.as||k.as||I,V=Ia(W),N=le!==k?Vt({},k,{},le):k,D={};for(var T in N)T[0]!=="$"&&T!=="as"&&(T==="forwardedAs"?D.as=N[T]:(H?H(T,Pg,W):!V||Pg(T))&&(D[T]=N[T]));return k.style&&le.style!==k.style&&(D.style=Vt({},k.style,{},le.style)),D.className=Array.prototype.concat(ae,ee,F!==ee?F:null,k.className,le.className).filter(Boolean).join(" "),D.ref=O,b.createElement(W,D)}($,h,y,w)};return v.displayName=p,($=o.forwardRef(v)).attrs=f,$.componentStyle=x,$.displayName=p,$.shouldForwardProp=g,$.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Fs,$.styledComponentId=m,$.target=r?e.target:e,$.withComponent=function(h){var y=t.componentId,E=function(z,P){if(z==null)return{};var C,M,B={},ae=Object.keys(z);for(M=0;M<ae.length;M++)C=ae[M],P.indexOf(C)>=0||(B[C]=z[C]);return B}(t,["componentId"]),k=y&&y+"-"+(Ia(h)?h:au(Dg(h)));return kx(h,Vt({},E,{attrs:f,componentId:k}),n)},Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?bx({},e.defaultProps,h):h}}),Object.defineProperty($,"toString",{value:function(){return"."+$.styledComponentId}}),i&&QS($,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),$}var Ep=function(e){return function t(n,r,i){if(i===void 0&&(i=On),!sx.isValidElementType(r))return hr(1,String(r));var a=function(){return n(r,i,xx.apply(void 0,arguments))};return a.withConfig=function(l){return t(n,r,Vt({},i,{},l))},a.attrs=function(l){return t(n,r,Vt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},a}(kx,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ep[e]=Ep(e)});var kk=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=hx(n),Ls.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,a){var l=a(gr(this.rules,r,i,a).join(""),""),c=this.componentId+n;i.insertRules(c,c,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,a){n>2&&Ls.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,a)},e}();function Tk(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=xx.apply(void 0,[e].concat(n)),a="sc-global-"+wx(JSON.stringify(i)),l=new kk(i,a);function c(d){var p=vx(),m=$x(),f=b.useContext(oa),g=b.useRef(p.allocateGSInstance(a)).current;return p.server&&u(g,d,p,f,m),b.useLayoutEffect(function(){if(!p.server)return u(g,d,p,f,m),function(){return l.removeStyles(g,p)}},[g,d,p,f,m]),null}function u(d,p,m,f,g){if(l.isStatic)l.renderStyles(d,XS,m,g);else{var $=Vt({},p,{theme:Ex(p,f,c.defaultProps)});l.renderStyles(d,$,m,g)}}return o.memo(c)}const s=Ep,Tx=Tk`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${({theme:e})=>e.colors.darkText};
    background-color: ${({theme:e})=>e.colors.background};
    line-height: 1.5;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    color: ${({theme:e})=>e.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
  }
  
  input, textarea, select {
    font-family: inherit;
  }
  
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Utility classes */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  /* Ensure main content area takes up at least the full viewport height minus header and footer */
  main {
    min-height: calc(100vh - 200px); /* Adjust based on your header/footer heights */
  }
  
  /* Improve focus styles for accessibility */
  :focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary};
    outline-offset: 2px;
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.lightGray};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.darkGray};
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.colors.primary};
  }
`,Cx={colors:{primary:"#FFD700",primaryDark:"#E6C200",secondary:"#4A90E2",secondaryDark:"#3A7BC8",trustworthyNavy:"#1E3A8A",trustworthyNavyLight:"#2D4BA0",background:"#F9FAFB",darkText:"#1F2937",lightText:"#6B7280",lightGray:"#F3F4F6",mediumGray:"#E5E7EB",darkGray:"#4B5563",success:"#10B981",successDark:"#059669",warning:"#F59E0B",error:"#EF4444",white:"#FFFFFF",black:"#000000"},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem"},fontWeights:{light:300,normal:400,medium:500,semiBold:600,bold:700,extraBold:800},space:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem"},radii:{sm:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"},transitions:{default:"all 0.3s ease",fast:"all 0.15s ease",slow:"all 0.5s ease"},breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"}},Ck=s.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e,size:t})=>t==="sm"?`${e.space.xs} ${e.space.md}`:t==="lg"?`${e.space.md} ${e.space.xl}`:`${e.space.sm} ${e.space.lg}`};
  font-size: ${({theme:e,size:t})=>t==="sm"?e.fontSizes.sm:t==="lg"?e.fontSizes.lg:e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  text-decoration: none;
  border: none;
  
  /* Variant styles */
  background-color: ${({theme:e,variant:t})=>t==="secondary"||t==="outline"||t==="text"?"transparent":e.colors.primary};
  
  color: ${({theme:e,variant:t})=>t==="secondary"?e.colors.darkText:t==="outline"||t==="text"?e.colors.primary:e.colors.trustworthyNavy};
  
  border: ${({theme:e,variant:t})=>t==="outline"?`1px solid ${e.colors.primary}`:t==="secondary"?`1px solid ${e.colors.mediumGray}`:"none"};
  
  &:hover {
    background-color: ${({theme:e,variant:t})=>t==="secondary"?e.colors.lightGray:t==="outline"?`${e.colors.primary}15`:t==="text"?`${e.colors.primary}15`:e.colors.primaryDark};
    text-decoration: none;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>`${e.colors.primary}33`};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  /* Icon spacing */
  svg {
    margin-right: ${({theme:e,iconPosition:t})=>t==="right"?"0":e.space.sm};
    margin-left: ${({theme:e,iconPosition:t})=>t==="right"?e.space.sm:"0"};
  }
`,Y=({children:e,variant:t="primary",size:n="md",icon:r=null,iconPosition:i="left",...a})=>o.createElement(Ck,{variant:t,size:n,iconPosition:i,...a},r&&i==="left"&&r,e,r&&i==="right"&&r),zk=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(!1),i=$r();b.useEffect(()=>{const c=()=>{window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}},[]),b.useEffect(()=>{t(!1)},[i]);const a=()=>{t(!e)},l=()=>{t(!1)};return o.createElement(Pk,{scrolled:n},o.createElement(Ak,null,o.createElement(Fk,null,o.createElement(Nk,null,o.createElement(ce,{to:"/"},o.createElement(Lk,null,"TrueFans CONNECT™"))),o.createElement(Dk,null,o.createElement(Mk,{open:e},o.createElement(br,{active:i.pathname==="/"},o.createElement(Sr,{to:"/",onClick:l},"Home")),o.createElement(br,{active:i.pathname==="/about"},o.createElement(Sr,{to:"/about",onClick:l},"About Us")),o.createElement(br,{active:i.pathname==="/artists-directory"},o.createElement(Sr,{to:"/artists-directory",onClick:l},"Artists Directory")),o.createElement(br,{active:i.pathname==="/venue-portal"},o.createElement(Sr,{to:"/venue-portal",onClick:l},"Venue Portal")),o.createElement(br,{active:i.pathname==="/donation-system"},o.createElement(Sr,{to:"/donation-system",onClick:l},"Donation System")),o.createElement(br,{active:i.pathname==="/affiliate-program"},o.createElement(Sr,{to:"/affiliate-program",onClick:l},"Affiliate Program")),o.createElement(Wk,null,o.createElement(_k,{as:ce,to:"/login",onClick:l},"Log In"),o.createElement(Uk,{as:ce,to:"/artist-signup",onClick:l},"Artist SignUp"),o.createElement(Hk,{as:ce,to:"/venue-signup",onClick:l},"Venue SignUp")))),o.createElement(Rk,{onClick:a,"aria-expanded":e,"aria-label":e?"Close menu":"Open menu"},o.createElement(Ik,{open:e})),o.createElement(Bk,null,o.createElement(Ok,{as:ce,to:"/login"},"Log In"),o.createElement(Vk,{as:ce,to:"/artist-signup"},"Artist SignUp"),o.createElement(jk,{as:ce,to:"/venue-signup"},"Venue SignUp")))))},Pk=s.header`
  background-color: ${({theme:e,scrolled:t})=>t?e.colors.trustworthyNavy:"rgba(26, 43, 76, 0.95)"};
  padding: ${({theme:e,scrolled:t})=>t?`${e.space.sm} 0`:`${e.space.md} 0`};
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: ${({theme:e,scrolled:t})=>t?e.shadows.md:"none"};
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
`,Ak=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,Fk=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Nk=s.div`
  flex-shrink: 0;
`,Lk=s.h1`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.primary};
  margin: 0;
`,Dk=s.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    justify-content: flex-end;
  }
`,Rk=s.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({theme:e})=>e.space.sm};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: block;
  }
`,Ik=s.div`
  width: 24px;
  height: 3px;
  background-color: ${({open:e,theme:t})=>e?"transparent":t.colors.primary};
  position: relative;
  transition: all 0.3s ease;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 3px;
    background-color: ${({theme:e})=>e.colors.primary};
    transition: all 0.3s ease;
  }
  
  &::before {
    transform: ${({open:e})=>e?"rotate(45deg)":"translateY(-8px)"};
  }
  
  &::after {
    transform: ${({open:e})=>e?"rotate(-45deg)":"translateY(8px)"};
  }
`,Mk=s.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    position: fixed;
    top: 70px; /* Adjust based on header height */
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    background-color: ${({theme:e})=>e.colors.trustworthyNavy};
    padding: ${({theme:e})=>e.space.lg};
    transform: ${({open:e})=>e?"translateX(0)":"translateX(100%)"};
    opacity: ${({open:e})=>e?1:0};
    visibility: ${({open:e})=>e?"visible":"hidden"};
    transition: all 0.3s ease;
    overflow-y: auto;
    z-index: 999;
  }
`,br=s.li`
  margin: 0 ${({theme:e})=>e.space.md};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({theme:e})=>e.colors.primary};
    transform: ${({active:e})=>e?"scaleX(1)":"scaleX(0)"};
    transform-origin: center;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    margin: ${({theme:e})=>`${e.space.md} 0`};
    
    &::after {
      bottom: -2px;
    }
  }
`,Sr=s(ce)`
  color: white;
  text-decoration: none;
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
    text-decoration: none;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fontSizes.lg};
    display: block;
    padding: ${({theme:e})=>e.space.sm} 0;
  }
`,Bk=s.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,Ok=s(Y)`
  background: transparent;
  color: white;
  border: none;
  padding: ${({theme:e})=>`${e.space.sm} ${e.space.md}`};
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
    text-decoration: none;
  }
`,Vk=s(Y)`
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>`${e.space.sm} ${e.space.md}`};
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: ${({theme:e})=>e.space.sm};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
    text-decoration: none;
  }
`,jk=s(Y)`
  background-color: ${({theme:e})=>e.colors.secondary};
  color: white;
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>`${e.space.sm} ${e.space.md}`};
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.secondaryDark};
    text-decoration: none;
  }
`,Wk=s.div`
  display: none;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.space.md};
    margin-top: ${({theme:e})=>e.space.xl};
  }
`,_k=s(Y)`
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: ${({theme:e})=>e.space.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border-radius: ${({theme:e})=>e.radii.md};
  text-align: center;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    text-decoration: none;
  }
`,Uk=s(Y)`
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  border: none;
  padding: ${({theme:e})=>e.space.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border-radius: ${({theme:e})=>e.radii.md};
  text-align: center;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
    text-decoration: none;
  }
`,Hk=s(Y)`
  background-color: ${({theme:e})=>e.colors.secondary};
  color: white;
  border: none;
  padding: ${({theme:e})=>e.space.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border-radius: ${({theme:e})=>e.radii.md};
  text-align: center;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.secondaryDark};
    text-decoration: none;
  }
`,Gk=()=>{const e=new Date().getFullYear(),t=Uo(),n=r=>{t(r),window.scrollTo(0,0)};return o.createElement(Yk,null,o.createElement(Qk,null,o.createElement(Kk,null,o.createElement(Xk,null,o.createElement(Jk,null,"TrueFans CONNECT™"),o.createElement(qk,null,"Connecting artists with their supporters"),o.createElement(Zk,null,o.createElement(cu,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter"},o.createElement(su,null,o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}))),o.createElement("span",null,"Twitter")),o.createElement(cu,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram"},o.createElement(su,null,o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),o.createElement("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),o.createElement("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}))),o.createElement("span",null,"Instagram")),o.createElement(cu,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook"},o.createElement(su,null,o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}))),o.createElement("span",null,"Facebook")))),o.createElement(e2,null,o.createElement(uu,null,o.createElement(du,null,"Platform"),o.createElement(pt,{onClick:()=>n("/")},"Home"),o.createElement(pt,{onClick:()=>n("/about")},"About Us"),o.createElement(pt,{onClick:()=>n("/artist-signup")},"Artist Signup"),o.createElement(pt,{onClick:()=>n("/venue-signup")},"Venue Signup"),o.createElement(pt,{onClick:()=>n("/donation-system")},"Donation System")),o.createElement(uu,null,o.createElement(du,null,"Resources"),o.createElement(pt,{onClick:()=>n("/help-center")},"Help Center"),o.createElement(pt,{onClick:()=>n("/blog")},"Blog"),o.createElement(pt,{onClick:()=>n("/api-docs")},"API Documentation"),o.createElement(pt,{onClick:()=>n("/success-stories")},"Success Stories")),o.createElement(uu,null,o.createElement(du,null,"Company"),o.createElement(pt,{onClick:()=>n("/about")},"About Us"),o.createElement(pt,{onClick:()=>n("/careers")},"Careers"),o.createElement(pt,{onClick:()=>n("/press")},"Press"),o.createElement(pt,{onClick:()=>n("/contact")},"Contact")))),o.createElement(t2,null,o.createElement(n2,null,"© ",e," TrueFans CONNECT™. All rights reserved."),o.createElement(r2,null,o.createElement(mu,{onClick:()=>n("/terms")},"Terms of Service"),o.createElement(mu,{onClick:()=>n("/privacy")},"Privacy Policy"),o.createElement(mu,{onClick:()=>n("/cookies")},"Cookie Policy")))))},Yk=s.footer`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  color: white;
  padding: ${({theme:e})=>e.space.xl} 0;
`,Qk=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,Kk=s.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({theme:e})=>e.space.xl};
  margin-bottom: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Xk=s.div``,Jk=s.h2`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,qk=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  opacity: 0.8;
  margin-bottom: ${({theme:e})=>e.space.lg};
`,Zk=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.space.md};
`,su=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({theme:e})=>e.space.xs};
`,cu=s.a`
  display: inline-flex;
  align-items: center;
  color: white;
  opacity: 0.8;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    opacity: 1;
    text-decoration: none;
    color: ${({theme:e})=>e.colors.primary};
  }
`,e2=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({theme:e})=>e.space.lg};
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.xs}) {
    grid-template-columns: 1fr;
  }
`,uu=s.div`
  display: flex;
  flex-direction: column;
`,du=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  margin-bottom: ${({theme:e})=>e.space.md};
`,pt=s.a`
  color: white;
  opacity: 0.8;
  margin-bottom: ${({theme:e})=>e.space.sm};
  transition: ${({theme:e})=>e.transitions.default};
  cursor: pointer;
  
  &:hover {
    opacity: 1;
    text-decoration: none;
    color: ${({theme:e})=>e.colors.primary};
  }
`,t2=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({theme:e})=>e.space.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
    gap: ${({theme:e})=>e.space.md};
    align-items: flex-start;
  }
`,n2=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  opacity: 0.6;
`,r2=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.space.md};
`,mu=s.a`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: white;
  opacity: 0.6;
  transition: ${({theme:e})=>e.transitions.default};
  cursor: pointer;
  
  &:hover {
    opacity: 1;
    text-decoration: none;
    color: ${({theme:e})=>e.colors.primary};
  }
`,zx=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Sc=b.createContext({}),_f=b.createContext(null),kc=typeof document<"u",o2=kc?b.useLayoutEffect:b.useEffect,Px=b.createContext({strict:!1}),Uf=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i2="framerAppearId",Ax="data-"+Uf(i2);function a2(e,t,n,r){const{visualElement:i}=b.useContext(Sc),a=b.useContext(Px),l=b.useContext(_f),c=b.useContext(zx).reducedMotion,u=b.useRef();r=r||a.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:i,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:c}));const d=u.current;b.useInsertionEffect(()=>{d&&d.update(n,l)});const p=b.useRef(!!(n[Ax]&&!window.HandoffComplete));return o2(()=>{d&&(d.render(),p.current&&d.animationState&&d.animationState.animateChanges())}),b.useEffect(()=>{d&&(d.updateFeatures(),!p.current&&d.animationState&&d.animationState.animateChanges(),p.current&&(p.current=!1,window.HandoffComplete=!0))}),d}function vo(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function l2(e,t,n){return b.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):vo(n)&&(n.current=r))},[t])}function ia(e){return typeof e=="string"||Array.isArray(e)}function Tc(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Hf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Gf=["initial",...Hf];function Cc(e){return Tc(e.animate)||Gf.some(t=>ia(e[t]))}function Fx(e){return!!(Cc(e)||e.variants)}function s2(e,t){if(Cc(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ia(n)?n:void 0,animate:ia(r)?r:void 0}}return e.inherit!==!1?t:{}}function c2(e){const{initial:t,animate:n}=s2(e,b.useContext(Sc));return b.useMemo(()=>({initial:t,animate:n}),[Vg(t),Vg(n)])}function Vg(e){return Array.isArray(e)?e.join(" "):e}const jg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},aa={};for(const e in jg)aa[e]={isEnabled:t=>jg[e].some(n=>!!t[n])};function u2(e){for(const t in e)aa[t]={...aa[t],...e[t]}}const Nx=b.createContext({}),Lx=b.createContext({}),d2=Symbol.for("motionComponentSymbol");function m2({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&u2(e);function a(c,u){let d;const p={...b.useContext(zx),...c,layoutId:p2(c)},{isStatic:m}=p,f=c2(c),g=r(c,m);if(!m&&kc){f.visualElement=a2(i,g,p,t);const $=b.useContext(Lx),x=b.useContext(Px).strict;f.visualElement&&(d=f.visualElement.loadFeatures(p,x,e,$))}return b.createElement(Sc.Provider,{value:f},d&&f.visualElement?b.createElement(d,{visualElement:f.visualElement,...p}):null,n(i,c,l2(g,f.visualElement,u),g,m,f.visualElement))}const l=b.forwardRef(a);return l[d2]=i,l}function p2({layoutId:e}){const t=b.useContext(Nx).id;return t&&e!==void 0?t+"-"+e:e}function f2(e){function t(r,i={}){return m2(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const h2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Yf(e){return typeof e!="string"||e.includes("-")?!1:!!(h2.indexOf(e)>-1||/[A-Z]/.test(e))}const Ds={};function g2(e){Object.assign(Ds,e)}const pa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],xr=new Set(pa);function Dx(e,{layout:t,layoutId:n}){return xr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ds[e]||e==="opacity")}const mt=e=>!!(e&&e.getVelocity),y2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},v2=pa.length;function $2(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let a="";for(let l=0;l<v2;l++){const c=pa[l];if(e[c]!==void 0){const u=y2[c]||c;a+=`${u}(${e[c]}) `}}return t&&!e.z&&(a+="translateZ(0)"),a=a.trim(),i?a=i(e,r?"":a):n&&r&&(a="none"),a}const Rx=e=>t=>typeof t=="string"&&t.startsWith(e),Ix=Rx("--"),wp=Rx("var(--"),x2=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,E2=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Hn=(e,t,n)=>Math.min(Math.max(n,e),t),Er={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ri={...Er,transform:e=>Hn(0,1,e)},Ma={...Er,default:1},Ii=e=>Math.round(e*1e5)/1e5,zc=/(-)?([\d]*\.?[\d])+/g,Mx=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,w2=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function fa(e){return typeof e=="string"}const ha=e=>({test:t=>fa(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),En=ha("deg"),qt=ha("%"),_=ha("px"),b2=ha("vh"),S2=ha("vw"),Wg={...qt,parse:e=>qt.parse(e)/100,transform:e=>qt.transform(e*100)},_g={...Er,transform:Math.round},Bx={borderWidth:_,borderTopWidth:_,borderRightWidth:_,borderBottomWidth:_,borderLeftWidth:_,borderRadius:_,radius:_,borderTopLeftRadius:_,borderTopRightRadius:_,borderBottomRightRadius:_,borderBottomLeftRadius:_,width:_,maxWidth:_,height:_,maxHeight:_,size:_,top:_,right:_,bottom:_,left:_,padding:_,paddingTop:_,paddingRight:_,paddingBottom:_,paddingLeft:_,margin:_,marginTop:_,marginRight:_,marginBottom:_,marginLeft:_,rotate:En,rotateX:En,rotateY:En,rotateZ:En,scale:Ma,scaleX:Ma,scaleY:Ma,scaleZ:Ma,skew:En,skewX:En,skewY:En,distance:_,translateX:_,translateY:_,translateZ:_,x:_,y:_,z:_,perspective:_,transformPerspective:_,opacity:Ri,originX:Wg,originY:Wg,originZ:_,zIndex:_g,fillOpacity:Ri,strokeOpacity:Ri,numOctaves:_g};function Qf(e,t,n,r){const{style:i,vars:a,transform:l,transformOrigin:c}=e;let u=!1,d=!1,p=!0;for(const m in t){const f=t[m];if(Ix(m)){a[m]=f;continue}const g=Bx[m],$=E2(f,g);if(xr.has(m)){if(u=!0,l[m]=$,!p)continue;f!==(g.default||0)&&(p=!1)}else m.startsWith("origin")?(d=!0,c[m]=$):i[m]=$}if(t.transform||(u||r?i.transform=$2(e.transform,n,p,r):i.transform&&(i.transform="none")),d){const{originX:m="50%",originY:f="50%",originZ:g=0}=c;i.transformOrigin=`${m} ${f} ${g}`}}const Kf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ox(e,t,n){for(const r in t)!mt(t[r])&&!Dx(r,n)&&(e[r]=t[r])}function k2({transformTemplate:e},t,n){return b.useMemo(()=>{const r=Kf();return Qf(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function T2(e,t,n){const r=e.style||{},i={};return Ox(i,r,e),Object.assign(i,k2(e,t,n)),e.transformValues?e.transformValues(i):i}function C2(e,t,n){const r={},i=T2(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const z2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Rs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||z2.has(e)}let Vx=e=>!Rs(e);function P2(e){e&&(Vx=t=>t.startsWith("on")?!Rs(t):e(t))}try{P2(require("@emotion/is-prop-valid").default)}catch{}function A2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Vx(i)||n===!0&&Rs(i)||!t&&!Rs(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Ug(e,t,n){return typeof e=="string"?e:_.transform(t+n*e)}function F2(e,t,n){const r=Ug(t,e.x,e.width),i=Ug(n,e.y,e.height);return`${r} ${i}`}const N2={offset:"stroke-dashoffset",array:"stroke-dasharray"},L2={offset:"strokeDashoffset",array:"strokeDasharray"};function D2(e,t,n=1,r=0,i=!0){e.pathLength=1;const a=i?N2:L2;e[a.offset]=_.transform(-r);const l=_.transform(t),c=_.transform(n);e[a.array]=`${l} ${c}`}function Xf(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:a,pathLength:l,pathSpacing:c=1,pathOffset:u=0,...d},p,m,f){if(Qf(e,d,p,f),m){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:$,dimensions:x}=e;g.transform&&(x&&($.transform=g.transform),delete g.transform),x&&(i!==void 0||a!==void 0||$.transform)&&($.transformOrigin=F2(x,i!==void 0?i:.5,a!==void 0?a:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),l!==void 0&&D2(g,l,c,u,!1)}const jx=()=>({...Kf(),attrs:{}}),Jf=e=>typeof e=="string"&&e.toLowerCase()==="svg";function R2(e,t,n,r){const i=b.useMemo(()=>{const a=jx();return Xf(a,t,{enableHardwareAcceleration:!1},Jf(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};Ox(a,e.style,e),i.style={...a,...i.style}}return i}function I2(e=!1){return(n,r,i,{latestValues:a},l)=>{const u=(Yf(n)?R2:C2)(r,a,l,n),p={...A2(r,typeof n=="string",e),...u,ref:i},{children:m}=r,f=b.useMemo(()=>mt(m)?m.get():m,[m]);return b.createElement(n,{...p,children:f})}}function Wx(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const _x=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ux(e,t,n,r){Wx(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(_x.has(i)?i:Uf(i),t.attrs[i])}function qf(e,t){const{style:n}=e,r={};for(const i in n)(mt(n[i])||t.style&&mt(t.style[i])||Dx(i,e))&&(r[i]=n[i]);return r}function Hx(e,t){const n=qf(e,t);for(const r in e)if(mt(e[r])||mt(t[r])){const i=pa.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function Zf(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function M2(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const Is=e=>Array.isArray(e),B2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),O2=e=>Is(e)?e[e.length-1]||0:e;function rs(e){const t=mt(e)?e.get():e;return B2(t)?t.toValue():t}function V2({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,a){const l={latestValues:j2(r,i,a,e),renderState:t()};return n&&(l.mount=c=>n(r,c,l)),l}const Gx=e=>(t,n)=>{const r=b.useContext(Sc),i=b.useContext(_f),a=()=>V2(e,t,r,i);return n?a():M2(a)};function j2(e,t,n,r){const i={},a=r(e,{});for(const f in a)i[f]=rs(a[f]);let{initial:l,animate:c}=e;const u=Cc(e),d=Fx(e);t&&d&&!u&&e.inherit!==!1&&(l===void 0&&(l=t.initial),c===void 0&&(c=t.animate));let p=n?n.initial===!1:!1;p=p||l===!1;const m=p?c:l;return m&&typeof m!="boolean"&&!Tc(m)&&(Array.isArray(m)?m:[m]).forEach(g=>{const $=Zf(e,g);if(!$)return;const{transitionEnd:x,transition:w,...v}=$;for(const h in v){let y=v[h];if(Array.isArray(y)){const E=p?y.length-1:0;y=y[E]}y!==null&&(i[h]=y)}for(const h in x)i[h]=x[h]}),i}const we=e=>e;class Hg{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function W2(e){let t=new Hg,n=new Hg,r=0,i=!1,a=!1;const l=new WeakSet,c={schedule:(u,d=!1,p=!1)=>{const m=p&&i,f=m?t:n;return d&&l.add(u),f.add(u)&&m&&i&&(r=t.order.length),u},cancel:u=>{n.remove(u),l.delete(u)},process:u=>{if(i){a=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let d=0;d<r;d++){const p=t.order[d];p(u),l.has(p)&&(c.schedule(p),e())}i=!1,a&&(a=!1,c.process(u))}};return c}const Ba=["prepare","read","update","preRender","render","postRender"],_2=40;function U2(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=Ba.reduce((m,f)=>(m[f]=W2(()=>n=!0),m),{}),l=m=>a[m].process(i),c=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,_2),1),i.timestamp=m,i.isProcessing=!0,Ba.forEach(l),i.isProcessing=!1,n&&t&&(r=!1,e(c))},u=()=>{n=!0,r=!0,i.isProcessing||e(c)};return{schedule:Ba.reduce((m,f)=>{const g=a[f];return m[f]=($,x=!1,w=!1)=>(n||u(),g.schedule($,x,w)),m},{}),cancel:m=>Ba.forEach(f=>a[f].cancel(m)),state:i,steps:a}}const{schedule:fe,cancel:gn,state:Xe,steps:pu}=U2(typeof requestAnimationFrame<"u"?requestAnimationFrame:we,!0),H2={useVisualState:Gx({scrapeMotionValuesFromProps:Hx,createRenderState:jx,onMount:(e,t,{renderState:n,latestValues:r})=>{fe.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),fe.render(()=>{Xf(n,r,{enableHardwareAcceleration:!1},Jf(t.tagName),e.transformTemplate),Ux(t,n)})}})},G2={useVisualState:Gx({scrapeMotionValuesFromProps:qf,createRenderState:Kf})};function Y2(e,{forwardMotionProps:t=!1},n,r){return{...Yf(e)?H2:G2,preloadedFeatures:n,useRender:I2(t),createVisualElement:r,Component:e}}function sn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Yx=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Pc(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const Q2=e=>t=>Yx(t)&&e(t,Pc(t));function un(e,t,n,r){return sn(e,t,Q2(n),r)}const K2=(e,t)=>n=>t(e(n)),Vn=(...e)=>e.reduce(K2);function Qx(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Gg=Qx("dragHorizontal"),Yg=Qx("dragVertical");function Kx(e){let t=!1;if(e==="y")t=Yg();else if(e==="x")t=Gg();else{const n=Gg(),r=Yg();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Xx(){const e=Kx(!0);return e?(e(),!1):!0}class Jn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Qg(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(a,l)=>{if(a.pointerType==="touch"||Xx())return;const c=e.getProps();e.animationState&&c.whileHover&&e.animationState.setActive("whileHover",t),c[r]&&fe.update(()=>c[r](a,l))};return un(e.current,n,i,{passive:!e.getProps()[r]})}class X2 extends Jn{mount(){this.unmount=Vn(Qg(this.node,!0),Qg(this.node,!1))}unmount(){}}class J2 extends Jn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Vn(sn(this.node.current,"focus",()=>this.onFocus()),sn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Jx=(e,t)=>t?e===t?!0:Jx(e,t.parentElement):!1;function fu(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Pc(n))}class q2 extends Jn{constructor(){super(...arguments),this.removeStartListeners=we,this.removeEndListeners=we,this.removeAccessibleListeners=we,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),a=un(window,"pointerup",(c,u)=>{if(!this.checkPressEnd())return;const{onTap:d,onTapCancel:p,globalTapTarget:m}=this.node.getProps();fe.update(()=>{!m&&!Jx(this.node.current,c.target)?p&&p(c,u):d&&d(c,u)})},{passive:!(r.onTap||r.onPointerUp)}),l=un(window,"pointercancel",(c,u)=>this.cancelPress(c,u),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Vn(a,l),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=a=>{if(a.key!=="Enter"||this.isPressing)return;const l=c=>{c.key!=="Enter"||!this.checkPressEnd()||fu("up",(u,d)=>{const{onTap:p}=this.node.getProps();p&&fe.update(()=>p(u,d))})};this.removeEndListeners(),this.removeEndListeners=sn(this.node.current,"keyup",l),fu("down",(c,u)=>{this.startPress(c,u)})},n=sn(this.node.current,"keydown",t),r=()=>{this.isPressing&&fu("cancel",(a,l)=>this.cancelPress(a,l))},i=sn(this.node.current,"blur",r);this.removeAccessibleListeners=Vn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&fe.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Xx()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&fe.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=un(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=sn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Vn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const bp=new WeakMap,hu=new WeakMap,Z2=e=>{const t=bp.get(e.target);t&&t(e)},eT=e=>{e.forEach(Z2)};function tT({root:e,...t}){const n=e||document;hu.has(n)||hu.set(n,{});const r=hu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(eT,{root:e,...t})),r[i]}function nT(e,t,n){const r=tT(t);return bp.set(e,n),r.observe(e),()=>{bp.delete(e),r.unobserve(e)}}const rT={some:0,all:1};class oT extends Jn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=t,l={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:rT[i]},c=u=>{const{isIntersecting:d}=u;if(this.isInView===d||(this.isInView=d,a&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:p,onViewportLeave:m}=this.node.getProps(),f=d?p:m;f&&f(u)};return nT(this.node.current,l,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(iT(t,n))&&this.startObserver()}unmount(){}}function iT({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const aT={inView:{Feature:oT},tap:{Feature:q2},focus:{Feature:J2},hover:{Feature:X2}};function qx(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function lT(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function sT(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Ac(e,t,n){const r=e.getProps();return Zf(r,t,n!==void 0?n:r.custom,lT(e),sT(e))}let cT=we,eh=we;const jn=e=>e*1e3,dn=e=>e/1e3,uT={current:!1},Zx=e=>Array.isArray(e)&&typeof e[0]=="number";function e1(e){return!!(!e||typeof e=="string"&&t1[e]||Zx(e)||Array.isArray(e)&&e.every(e1))}const Si=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,t1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Si([0,.65,.55,1]),circOut:Si([.55,0,1,.45]),backIn:Si([.31,.01,.66,-.59]),backOut:Si([.33,1.53,.69,.99])};function n1(e){if(e)return Zx(e)?Si(e):Array.isArray(e)?e.map(n1):t1[e]}function dT(e,t,n,{delay:r=0,duration:i,repeat:a=0,repeatType:l="loop",ease:c,times:u}={}){const d={[t]:n};u&&(d.offset=u);const p=n1(c);return Array.isArray(p)&&(d.easing=p),e.animate(d,{delay:r,duration:i,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:a+1,direction:l==="reverse"?"alternate":"normal"})}function mT(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const r1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,pT=1e-7,fT=12;function hT(e,t,n,r,i){let a,l,c=0;do l=t+(n-t)/2,a=r1(l,r,i)-e,a>0?n=l:t=l;while(Math.abs(a)>pT&&++c<fT);return l}function ga(e,t,n,r){if(e===t&&n===r)return we;const i=a=>hT(a,0,1,e,n);return a=>a===0||a===1?a:r1(i(a),t,r)}const gT=ga(.42,0,1,1),yT=ga(0,0,.58,1),o1=ga(.42,0,.58,1),vT=e=>Array.isArray(e)&&typeof e[0]!="number",i1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,a1=e=>t=>1-e(1-t),th=e=>1-Math.sin(Math.acos(e)),l1=a1(th),$T=i1(th),s1=ga(.33,1.53,.69,.99),nh=a1(s1),xT=i1(nh),ET=e=>(e*=2)<1?.5*nh(e):.5*(2-Math.pow(2,-10*(e-1))),wT={linear:we,easeIn:gT,easeInOut:o1,easeOut:yT,circIn:th,circInOut:$T,circOut:l1,backIn:nh,backInOut:xT,backOut:s1,anticipate:ET},Kg=e=>{if(Array.isArray(e)){eh(e.length===4);const[t,n,r,i]=e;return ga(t,n,r,i)}else if(typeof e=="string")return wT[e];return e},rh=(e,t)=>n=>!!(fa(n)&&w2.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),c1=(e,t,n)=>r=>{if(!fa(r))return r;const[i,a,l,c]=r.match(zc);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(l),alpha:c!==void 0?parseFloat(c):1}},bT=e=>Hn(0,255,e),gu={...Er,transform:e=>Math.round(bT(e))},lr={test:rh("rgb","red"),parse:c1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+gu.transform(e)+", "+gu.transform(t)+", "+gu.transform(n)+", "+Ii(Ri.transform(r))+")"};function ST(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Sp={test:rh("#"),parse:ST,transform:lr.transform},$o={test:rh("hsl","hue"),parse:c1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+qt.transform(Ii(t))+", "+qt.transform(Ii(n))+", "+Ii(Ri.transform(r))+")"},tt={test:e=>lr.test(e)||Sp.test(e)||$o.test(e),parse:e=>lr.test(e)?lr.parse(e):$o.test(e)?$o.parse(e):Sp.parse(e),transform:e=>fa(e)?e:e.hasOwnProperty("red")?lr.transform(e):$o.transform(e)},ve=(e,t,n)=>-n*e+n*t+e;function yu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function kT({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,l=0;if(!t)i=a=l=n;else{const c=n<.5?n*(1+t):n+t-n*t,u=2*n-c;i=yu(u,c,e+1/3),a=yu(u,c,e),l=yu(u,c,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(l*255),alpha:r}}const vu=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},TT=[Sp,lr,$o],CT=e=>TT.find(t=>t.test(e));function Xg(e){const t=CT(e);let n=t.parse(e);return t===$o&&(n=kT(n)),n}const u1=(e,t)=>{const n=Xg(e),r=Xg(t),i={...n};return a=>(i.red=vu(n.red,r.red,a),i.green=vu(n.green,r.green,a),i.blue=vu(n.blue,r.blue,a),i.alpha=ve(n.alpha,r.alpha,a),lr.transform(i))};function zT(e){var t,n;return isNaN(e)&&fa(e)&&(((t=e.match(zc))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Mx))===null||n===void 0?void 0:n.length)||0)>0}const d1={regex:x2,countKey:"Vars",token:"${v}",parse:we},m1={regex:Mx,countKey:"Colors",token:"${c}",parse:tt.parse},p1={regex:zc,countKey:"Numbers",token:"${n}",parse:Er.parse};function $u(e,{regex:t,countKey:n,token:r,parse:i}){const a=e.tokenised.match(t);a&&(e["num"+n]=a.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...a.map(i)))}function Ms(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&$u(n,d1),$u(n,m1),$u(n,p1),n}function f1(e){return Ms(e).values}function h1(e){const{values:t,numColors:n,numVars:r,tokenised:i}=Ms(e),a=t.length;return l=>{let c=i;for(let u=0;u<a;u++)u<r?c=c.replace(d1.token,l[u]):u<r+n?c=c.replace(m1.token,tt.transform(l[u])):c=c.replace(p1.token,Ii(l[u]));return c}}const PT=e=>typeof e=="number"?0:e;function AT(e){const t=f1(e);return h1(e)(t.map(PT))}const Gn={test:zT,parse:f1,createTransformer:h1,getAnimatableNone:AT},g1=(e,t)=>n=>`${n>0?t:e}`;function y1(e,t){return typeof e=="number"?n=>ve(e,t,n):tt.test(e)?u1(e,t):e.startsWith("var(")?g1(e,t):$1(e,t)}const v1=(e,t)=>{const n=[...e],r=n.length,i=e.map((a,l)=>y1(a,t[l]));return a=>{for(let l=0;l<r;l++)n[l]=i[l](a);return n}},FT=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=y1(e[i],t[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}},$1=(e,t)=>{const n=Gn.createTransformer(t),r=Ms(e),i=Ms(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Vn(v1(r.values,i.values),n):g1(e,t)},la=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Jg=(e,t)=>n=>ve(e,t,n);function NT(e){return typeof e=="number"?Jg:typeof e=="string"?tt.test(e)?u1:$1:Array.isArray(e)?v1:typeof e=="object"?FT:Jg}function LT(e,t,n){const r=[],i=n||NT(e[0]),a=e.length-1;for(let l=0;l<a;l++){let c=i(e[l],e[l+1]);if(t){const u=Array.isArray(t)?t[l]||we:t;c=Vn(u,c)}r.push(c)}return r}function x1(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const a=e.length;if(eh(a===t.length),a===1)return()=>t[0];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=LT(t,r,i),c=l.length,u=d=>{let p=0;if(c>1)for(;p<e.length-2&&!(d<e[p+1]);p++);const m=la(e[p],e[p+1],d);return l[p](m)};return n?d=>u(Hn(e[0],e[a-1],d)):u}function DT(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=la(0,t,r);e.push(ve(n,1,i))}}function RT(e){const t=[0];return DT(t,e.length-1),t}function IT(e,t){return e.map(n=>n*t)}function MT(e,t){return e.map(()=>t||o1).splice(0,e.length-1)}function Bs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=vT(r)?r.map(Kg):Kg(r),a={done:!1,value:t[0]},l=IT(n&&n.length===t.length?n:RT(t),e),c=x1(l,t,{ease:Array.isArray(i)?i:MT(t,i)});return{calculatedDuration:e,next:u=>(a.value=c(u),a.done=u>=e,a)}}function E1(e,t){return t?e*(1e3/t):0}const BT=5;function w1(e,t,n){const r=Math.max(t-BT,0);return E1(n-e(r),t-r)}const xu=.001,OT=.01,qg=10,VT=.05,jT=1;function WT({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,a;cT(e<=jn(qg));let l=1-t;l=Hn(VT,jT,l),e=Hn(OT,qg,dn(e)),l<1?(i=d=>{const p=d*l,m=p*e,f=p-n,g=kp(d,l),$=Math.exp(-m);return xu-f/g*$},a=d=>{const m=d*l*e,f=m*n+n,g=Math.pow(l,2)*Math.pow(d,2)*e,$=Math.exp(-m),x=kp(Math.pow(d,2),l);return(-i(d)+xu>0?-1:1)*((f-g)*$)/x}):(i=d=>{const p=Math.exp(-d*e),m=(d-n)*e+1;return-xu+p*m},a=d=>{const p=Math.exp(-d*e),m=(n-d)*(e*e);return p*m});const c=5/e,u=UT(i,a,c);if(e=jn(e),isNaN(u))return{stiffness:100,damping:10,duration:e};{const d=Math.pow(u,2)*r;return{stiffness:d,damping:l*2*Math.sqrt(r*d),duration:e}}}const _T=12;function UT(e,t,n){let r=n;for(let i=1;i<_T;i++)r=r-e(r)/t(r);return r}function kp(e,t){return e*Math.sqrt(1-t*t)}const HT=["duration","bounce"],GT=["stiffness","damping","mass"];function Zg(e,t){return t.some(n=>e[n]!==void 0)}function YT(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Zg(e,GT)&&Zg(e,HT)){const n=WT(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function b1({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],a=e[e.length-1],l={done:!1,value:i},{stiffness:c,damping:u,mass:d,duration:p,velocity:m,isResolvedFromDuration:f}=YT({...r,velocity:-dn(r.velocity||0)}),g=m||0,$=u/(2*Math.sqrt(c*d)),x=a-i,w=dn(Math.sqrt(c/d)),v=Math.abs(x)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let h;if($<1){const y=kp(w,$);h=E=>{const k=Math.exp(-$*w*E);return a-k*((g+$*w*x)/y*Math.sin(y*E)+x*Math.cos(y*E))}}else if($===1)h=y=>a-Math.exp(-w*y)*(x+(g+w*x)*y);else{const y=w*Math.sqrt($*$-1);h=E=>{const k=Math.exp(-$*w*E),z=Math.min(y*E,300);return a-k*((g+$*w*x)*Math.sinh(z)+y*x*Math.cosh(z))/y}}return{calculatedDuration:f&&p||null,next:y=>{const E=h(y);if(f)l.done=y>=p;else{let k=g;y!==0&&($<1?k=w1(h,y,E):k=0);const z=Math.abs(k)<=n,P=Math.abs(a-E)<=t;l.done=z&&P}return l.value=l.done?a:E,l}}}function ey({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:l,min:c,max:u,restDelta:d=.5,restSpeed:p}){const m=e[0],f={done:!1,value:m},g=C=>c!==void 0&&C<c||u!==void 0&&C>u,$=C=>c===void 0?u:u===void 0||Math.abs(c-C)<Math.abs(u-C)?c:u;let x=n*t;const w=m+x,v=l===void 0?w:l(w);v!==w&&(x=v-m);const h=C=>-x*Math.exp(-C/r),y=C=>v+h(C),E=C=>{const M=h(C),B=y(C);f.done=Math.abs(M)<=d,f.value=f.done?v:B};let k,z;const P=C=>{g(f.value)&&(k=C,z=b1({keyframes:[f.value,$(f.value)],velocity:w1(y,C,f.value),damping:i,stiffness:a,restDelta:d,restSpeed:p}))};return P(0),{calculatedDuration:null,next:C=>{let M=!1;return!z&&k===void 0&&(M=!0,E(C),P(C)),k!==void 0&&C>k?z.next(C-k):(!M&&E(C),f)}}}const QT=e=>{const t=({timestamp:n})=>e(n);return{start:()=>fe.update(t,!0),stop:()=>gn(t),now:()=>Xe.isProcessing?Xe.timestamp:performance.now()}},ty=2e4;function ny(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<ty;)t+=n,r=e.next(t);return t>=ty?1/0:t}const KT={decay:ey,inertia:ey,tween:Bs,keyframes:Bs,spring:b1};function Os({autoplay:e=!0,delay:t=0,driver:n=QT,keyframes:r,type:i="keyframes",repeat:a=0,repeatDelay:l=0,repeatType:c="loop",onPlay:u,onStop:d,onComplete:p,onUpdate:m,...f}){let g=1,$=!1,x,w;const v=()=>{w=new Promise(V=>{x=V})};v();let h;const y=KT[i]||Bs;let E;y!==Bs&&typeof r[0]!="number"&&(E=x1([0,100],r,{clamp:!1}),r=[0,100]);const k=y({...f,keyframes:r});let z;c==="mirror"&&(z=y({...f,keyframes:[...r].reverse(),velocity:-(f.velocity||0)}));let P="idle",C=null,M=null,B=null;k.calculatedDuration===null&&a&&(k.calculatedDuration=ny(k));const{calculatedDuration:ae}=k;let H=1/0,ee=1/0;ae!==null&&(H=ae+l,ee=H*(a+1)-l);let I=0;const de=V=>{if(M===null)return;g>0&&(M=Math.min(M,V)),g<0&&(M=Math.min(V-ee/g,M)),C!==null?I=C:I=Math.round(V-M)*g;const N=I-t*(g>=0?1:-1),D=g>=0?N<0:N>ee;I=Math.max(N,0),P==="finished"&&C===null&&(I=ee);let T=I,j=k;if(a){const se=Math.min(I,ee)/H;let J=Math.floor(se),K=se%1;!K&&se>=1&&(K=1),K===1&&J--,J=Math.min(J,a+1),!!(J%2)&&(c==="reverse"?(K=1-K,l&&(K-=l/H)):c==="mirror"&&(j=z)),T=Hn(0,1,K)*H}const S=D?{done:!1,value:r[0]}:j.next(T);E&&(S.value=E(S.value));let{done:Q}=S;!D&&ae!==null&&(Q=g>=0?I>=ee:I<=0);const L=C===null&&(P==="finished"||P==="running"&&Q);return m&&m(S.value),L&&F(),S},ne=()=>{h&&h.stop(),h=void 0},le=()=>{P="idle",ne(),x(),v(),M=B=null},F=()=>{P="finished",p&&p(),ne(),x()},O=()=>{if($)return;h||(h=n(de));const V=h.now();u&&u(),C!==null?M=V-C:(!M||P==="finished")&&(M=V),P==="finished"&&v(),B=M,C=null,P="running",h.start()};e&&O();const W={then(V,N){return w.then(V,N)},get time(){return dn(I)},set time(V){V=jn(V),I=V,C!==null||!h||g===0?C=V:M=h.now()-V/g},get duration(){const V=k.calculatedDuration===null?ny(k):k.calculatedDuration;return dn(V)},get speed(){return g},set speed(V){V===g||!h||(g=V,W.time=dn(I))},get state(){return P},play:O,pause:()=>{P="paused",C=I},stop:()=>{$=!0,P!=="idle"&&(P="idle",d&&d(),le())},cancel:()=>{B!==null&&de(B),le()},complete:()=>{P="finished"},sample:V=>(M=0,de(V))};return W}function XT(e){let t;return()=>(t===void 0&&(t=e()),t)}const JT=XT(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),qT=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Oa=10,ZT=2e4,eC=(e,t)=>t.type==="spring"||e==="backgroundColor"||!e1(t.ease);function tC(e,t,{onUpdate:n,onComplete:r,...i}){if(!(JT()&&qT.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let l=!1,c,u,d=!1;const p=()=>{u=new Promise(y=>{c=y})};p();let{keyframes:m,duration:f=300,ease:g,times:$}=i;if(eC(t,i)){const y=Os({...i,repeat:0,delay:0});let E={done:!1,value:m[0]};const k=[];let z=0;for(;!E.done&&z<ZT;)E=y.sample(z),k.push(E.value),z+=Oa;$=void 0,m=k,f=z-Oa,g="linear"}const x=dT(e.owner.current,t,m,{...i,duration:f,ease:g,times:$}),w=()=>{d=!1,x.cancel()},v=()=>{d=!0,fe.update(w),c(),p()};return x.onfinish=()=>{d||(e.set(mT(m,i)),r&&r(),v())},{then(y,E){return u.then(y,E)},attachTimeline(y){return x.timeline=y,x.onfinish=null,we},get time(){return dn(x.currentTime||0)},set time(y){x.currentTime=jn(y)},get speed(){return x.playbackRate},set speed(y){x.playbackRate=y},get duration(){return dn(f)},play:()=>{l||(x.play(),gn(w))},pause:()=>x.pause(),stop:()=>{if(l=!0,x.playState==="idle")return;const{currentTime:y}=x;if(y){const E=Os({...i,autoplay:!1});e.setWithVelocity(E.sample(y-Oa).value,E.sample(y).value,Oa)}v()},complete:()=>{d||x.finish()},cancel:v}}function nC({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:we,pause:we,stop:we,then:a=>(a(),Promise.resolve()),cancel:we,complete:we});return t?Os({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const rC={type:"spring",stiffness:500,damping:25,restSpeed:10},oC=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),iC={type:"keyframes",duration:.8},aC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},lC=(e,{keyframes:t})=>t.length>2?iC:xr.has(e)?e.startsWith("scale")?oC(t[1]):rC:aC,Tp=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Gn.test(t)||t==="0")&&!t.startsWith("url(")),sC=new Set(["brightness","contrast","saturate","opacity"]);function cC(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(zc)||[];if(!r)return e;const i=n.replace(r,"");let a=sC.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const uC=/([a-z-]*)\(.*?\)/g,Cp={...Gn,getAnimatableNone:e=>{const t=e.match(uC);return t?t.map(cC).join(" "):e}},dC={...Bx,color:tt,backgroundColor:tt,outlineColor:tt,fill:tt,stroke:tt,borderColor:tt,borderTopColor:tt,borderRightColor:tt,borderBottomColor:tt,borderLeftColor:tt,filter:Cp,WebkitFilter:Cp},oh=e=>dC[e];function S1(e,t){let n=oh(e);return n!==Cp&&(n=Gn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const k1=e=>/^0[^.\s]+$/.test(e);function mC(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||k1(e)}function pC(e,t,n,r){const i=Tp(t,n);let a;Array.isArray(n)?a=[...n]:a=[null,n];const l=r.from!==void 0?r.from:e.get();let c;const u=[];for(let d=0;d<a.length;d++)a[d]===null&&(a[d]=d===0?l:a[d-1]),mC(a[d])&&u.push(d),typeof a[d]=="string"&&a[d]!=="none"&&a[d]!=="0"&&(c=a[d]);if(i&&u.length&&c)for(let d=0;d<u.length;d++){const p=u[d];a[p]=S1(t,c)}return a}function fC({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:l,repeatDelay:c,from:u,elapsed:d,...p}){return!!Object.keys(p).length}function ih(e,t){return e[t]||e.default||e}const hC={skipAnimations:!1},ah=(e,t,n,r={})=>i=>{const a=ih(r,e)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-jn(l);const u=pC(t,e,n,a),d=u[0],p=u[u.length-1],m=Tp(e,d),f=Tp(e,p);let g={keyframes:u,velocity:t.getVelocity(),ease:"easeOut",...a,delay:-c,onUpdate:$=>{t.set($),a.onUpdate&&a.onUpdate($)},onComplete:()=>{i(),a.onComplete&&a.onComplete()}};if(fC(a)||(g={...g,...lC(e,g)}),g.duration&&(g.duration=jn(g.duration)),g.repeatDelay&&(g.repeatDelay=jn(g.repeatDelay)),!m||!f||uT.current||a.type===!1||hC.skipAnimations)return nC(g);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const $=tC(t,e,g);if($)return $}return Os(g)};function Vs(e){return!!(mt(e)&&e.add)}const T1=e=>/^\-?\d*\.?\d+$/.test(e);function lh(e,t){e.indexOf(t)===-1&&e.push(t)}function sh(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class ch{constructor(){this.subscriptions=[]}add(t){return lh(this.subscriptions,t),()=>sh(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let a=0;a<i;a++){const l=this.subscriptions[a];l&&l(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const gC=e=>!isNaN(parseFloat(e));class yC{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:a,timestamp:l}=Xe;this.lastUpdated!==l&&(this.timeDelta=a,this.lastUpdated=l,fe.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>fe.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=gC(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new ch);const r=this.events[t].add(n);return t==="change"?()=>{r(),fe.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?E1(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Mo(e,t){return new yC(e,t)}const C1=e=>t=>t.test(e),vC={test:e=>e==="auto",parse:e=>e},z1=[Er,_,qt,En,S2,b2,vC],ti=e=>z1.find(C1(e)),$C=[...z1,tt,Gn],xC=e=>$C.find(C1(e));function EC(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Mo(n))}function wC(e,t){const n=Ac(e,t);let{transitionEnd:r={},transition:i={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const l in a){const c=O2(a[l]);EC(e,l,c)}}function bC(e,t,n){var r,i;const a=Object.keys(t).filter(c=>!e.hasValue(c)),l=a.length;if(l)for(let c=0;c<l;c++){const u=a[c],d=t[u];let p=null;Array.isArray(d)&&(p=d[0]),p===null&&(p=(i=(r=n[u])!==null&&r!==void 0?r:e.readValue(u))!==null&&i!==void 0?i:t[u]),p!=null&&(typeof p=="string"&&(T1(p)||k1(p))?p=parseFloat(p):!xC(p)&&Gn.test(d)&&(p=S1(u,d)),e.addValue(u,Mo(p,{owner:e})),n[u]===void 0&&(n[u]=p),p!==null&&e.setBaseTarget(u,p))}}function SC(e,t){return t?(t[e]||t.default||t).from:void 0}function kC(e,t,n){const r={};for(const i in e){const a=SC(i,t);if(a!==void 0)r[i]=a;else{const l=n.getValue(i);l&&(r[i]=l.get())}}return r}function TC({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function CC(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function P1(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:l,...c}=e.makeTargetAnimatable(t);const u=e.getValue("willChange");r&&(a=r);const d=[],p=i&&e.animationState&&e.animationState.getState()[i];for(const m in c){const f=e.getValue(m),g=c[m];if(!f||g===void 0||p&&TC(p,m))continue;const $={delay:n,elapsed:0,...ih(a||{},m)};if(window.HandoffAppearAnimations){const v=e.getProps()[Ax];if(v){const h=window.HandoffAppearAnimations(v,m,f,fe);h!==null&&($.elapsed=h,$.isHandoff=!0)}}let x=!$.isHandoff&&!CC(f,g);if($.type==="spring"&&(f.getVelocity()||$.velocity)&&(x=!1),f.animation&&(x=!1),x)continue;f.start(ah(m,f,g,e.shouldReduceMotion&&xr.has(m)?{type:!1}:$));const w=f.animation;Vs(u)&&(u.add(m),w.then(()=>u.remove(m))),d.push(w)}return l&&Promise.all(d).then(()=>{l&&wC(e,l)}),d}function zp(e,t,n={}){const r=Ac(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(P1(e,r,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:m}=i;return zC(e,t,d+u,p,m,n)}:()=>Promise.resolve(),{when:c}=i;if(c){const[u,d]=c==="beforeChildren"?[a,l]:[l,a];return u().then(()=>d())}else return Promise.all([a(),l(n.delay)])}function zC(e,t,n=0,r=0,i=1,a){const l=[],c=(e.variantChildren.size-1)*r,u=i===1?(d=0)=>d*r:(d=0)=>c-d*r;return Array.from(e.variantChildren).sort(PC).forEach((d,p)=>{d.notify("AnimationStart",t),l.push(zp(d,t,{...a,delay:n+u(p)}).then(()=>d.notify("AnimationComplete",t)))}),Promise.all(l)}function PC(e,t){return e.sortNodePosition(t)}function AC(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(a=>zp(e,a,n));r=Promise.all(i)}else if(typeof t=="string")r=zp(e,t,n);else{const i=typeof t=="function"?Ac(e,t,n.custom):t;r=Promise.all(P1(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const FC=[...Hf].reverse(),NC=Hf.length;function LC(e){return t=>Promise.all(t.map(({animation:n,options:r})=>AC(e,n,r)))}function DC(e){let t=LC(e);const n=IC();let r=!0;const i=(u,d)=>{const p=Ac(e,d);if(p){const{transition:m,transitionEnd:f,...g}=p;u={...u,...g,...f}}return u};function a(u){t=u(e)}function l(u,d){const p=e.getProps(),m=e.getVariantContext(!0)||{},f=[],g=new Set;let $={},x=1/0;for(let v=0;v<NC;v++){const h=FC[v],y=n[h],E=p[h]!==void 0?p[h]:m[h],k=ia(E),z=h===d?y.isActive:null;z===!1&&(x=v);let P=E===m[h]&&E!==p[h]&&k;if(P&&r&&e.manuallyAnimateOnMount&&(P=!1),y.protectedKeys={...$},!y.isActive&&z===null||!E&&!y.prevProp||Tc(E)||typeof E=="boolean")continue;let M=RC(y.prevProp,E)||h===d&&y.isActive&&!P&&k||v>x&&k,B=!1;const ae=Array.isArray(E)?E:[E];let H=ae.reduce(i,{});z===!1&&(H={});const{prevResolvedValues:ee={}}=y,I={...ee,...H},de=ne=>{M=!0,g.has(ne)&&(B=!0,g.delete(ne)),y.needsAnimating[ne]=!0};for(const ne in I){const le=H[ne],F=ee[ne];if($.hasOwnProperty(ne))continue;let O=!1;Is(le)&&Is(F)?O=!qx(le,F):O=le!==F,O?le!==void 0?de(ne):g.add(ne):le!==void 0&&g.has(ne)?de(ne):y.protectedKeys[ne]=!0}y.prevProp=E,y.prevResolvedValues=H,y.isActive&&($={...$,...H}),r&&e.blockInitialAnimation&&(M=!1),M&&(!P||B)&&f.push(...ae.map(ne=>({animation:ne,options:{type:h,...u}})))}if(g.size){const v={};g.forEach(h=>{const y=e.getBaseTarget(h);y!==void 0&&(v[h]=y)}),f.push({animation:v})}let w=!!f.length;return r&&(p.initial===!1||p.initial===p.animate)&&!e.manuallyAnimateOnMount&&(w=!1),r=!1,w?t(f):Promise.resolve()}function c(u,d,p){var m;if(n[u].isActive===d)return Promise.resolve();(m=e.variantChildren)===null||m===void 0||m.forEach(g=>{var $;return($=g.animationState)===null||$===void 0?void 0:$.setActive(u,d)}),n[u].isActive=d;const f=l(p,u);for(const g in n)n[g].protectedKeys={};return f}return{animateChanges:l,setActive:c,setAnimateFunction:a,getState:()=>n}}function RC(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!qx(t,e):!1}function Zn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function IC(){return{animate:Zn(!0),whileInView:Zn(),whileHover:Zn(),whileTap:Zn(),whileDrag:Zn(),whileFocus:Zn(),exit:Zn()}}class MC extends Jn{constructor(t){super(t),t.animationState||(t.animationState=DC(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Tc(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let BC=0;class OC extends Jn{constructor(){super(...arguments),this.id=BC++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const a=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&a.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const VC={animation:{Feature:MC},exit:{Feature:OC}},ry=(e,t)=>Math.abs(e-t);function jC(e,t){const n=ry(e.x,t.x),r=ry(e.y,t.y);return Math.sqrt(n**2+r**2)}class A1{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=wu(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,g=jC(m.offset,{x:0,y:0})>=3;if(!f&&!g)return;const{point:$}=m,{timestamp:x}=Xe;this.history.push({...$,timestamp:x});const{onStart:w,onMove:v}=this.handlers;f||(w&&w(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,m)},this.handlePointerMove=(m,f)=>{this.lastMoveEvent=m,this.lastMoveEventInfo=Eu(f,this.transformPagePoint),fe.update(this.updatePoint,!0)},this.handlePointerUp=(m,f)=>{this.end();const{onEnd:g,onSessionEnd:$,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=wu(m.type==="pointercancel"?this.lastMoveEventInfo:Eu(f,this.transformPagePoint),this.history);this.startEvent&&g&&g(m,w),$&&$(m,w)},!Yx(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const l=Pc(t),c=Eu(l,this.transformPagePoint),{point:u}=c,{timestamp:d}=Xe;this.history=[{...u,timestamp:d}];const{onSessionStart:p}=n;p&&p(t,wu(c,this.history)),this.removeListeners=Vn(un(this.contextWindow,"pointermove",this.handlePointerMove),un(this.contextWindow,"pointerup",this.handlePointerUp),un(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),gn(this.updatePoint)}}function Eu(e,t){return t?{point:t(e.point)}:e}function oy(e,t){return{x:e.x-t.x,y:e.y-t.y}}function wu({point:e},t){return{point:e,delta:oy(e,F1(t)),offset:oy(e,WC(t)),velocity:_C(t,.1)}}function WC(e){return e[0]}function F1(e){return e[e.length-1]}function _C(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=F1(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>jn(t)));)n--;if(!r)return{x:0,y:0};const a=dn(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const l={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function xt(e){return e.max-e.min}function Pp(e,t=0,n=.01){return Math.abs(e-t)<=n}function iy(e,t,n,r=.5){e.origin=r,e.originPoint=ve(t.min,t.max,e.origin),e.scale=xt(n)/xt(t),(Pp(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ve(n.min,n.max,e.origin)-e.originPoint,(Pp(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Mi(e,t,n,r){iy(e.x,t.x,n.x,r?r.originX:void 0),iy(e.y,t.y,n.y,r?r.originY:void 0)}function ay(e,t,n){e.min=n.min+t.min,e.max=e.min+xt(t)}function UC(e,t,n){ay(e.x,t.x,n.x),ay(e.y,t.y,n.y)}function ly(e,t,n){e.min=t.min-n.min,e.max=e.min+xt(t)}function Bi(e,t,n){ly(e.x,t.x,n.x),ly(e.y,t.y,n.y)}function HC(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ve(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ve(n,e,r.max):Math.min(e,n)),e}function sy(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function GC(e,{top:t,left:n,bottom:r,right:i}){return{x:sy(e.x,n,i),y:sy(e.y,t,r)}}function cy(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function YC(e,t){return{x:cy(e.x,t.x),y:cy(e.y,t.y)}}function QC(e,t){let n=.5;const r=xt(e),i=xt(t);return i>r?n=la(t.min,t.max-r,e.min):r>i&&(n=la(e.min,e.max-i,t.min)),Hn(0,1,n)}function KC(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Ap=.35;function XC(e=Ap){return e===!1?e=0:e===!0&&(e=Ap),{x:uy(e,"left","right"),y:uy(e,"top","bottom")}}function uy(e,t,n){return{min:dy(e,t),max:dy(e,n)}}function dy(e,t){return typeof e=="number"?e:e[t]||0}const my=()=>({translate:0,scale:1,origin:0,originPoint:0}),xo=()=>({x:my(),y:my()}),py=()=>({min:0,max:0}),Ae=()=>({x:py(),y:py()});function Tt(e){return[e("x"),e("y")]}function N1({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function JC({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function qC(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function bu(e){return e===void 0||e===1}function Fp({scale:e,scaleX:t,scaleY:n}){return!bu(e)||!bu(t)||!bu(n)}function nr(e){return Fp(e)||L1(e)||e.z||e.rotate||e.rotateX||e.rotateY}function L1(e){return fy(e.x)||fy(e.y)}function fy(e){return e&&e!=="0%"}function js(e,t,n){const r=e-n,i=t*r;return n+i}function hy(e,t,n,r,i){return i!==void 0&&(e=js(e,i,r)),js(e,n,r)+t}function Np(e,t=0,n=1,r,i){e.min=hy(e.min,t,n,r,i),e.max=hy(e.max,t,n,r,i)}function D1(e,{x:t,y:n}){Np(e.x,t.translate,t.scale,t.originPoint),Np(e.y,n.translate,n.scale,n.originPoint)}function ZC(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let a,l;for(let c=0;c<i;c++){a=n[c],l=a.projectionDelta;const u=a.instance;u&&u.style&&u.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Eo(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,D1(e,l)),r&&nr(a.latestValues)&&Eo(e,a.latestValues))}t.x=gy(t.x),t.y=gy(t.y)}function gy(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Sn(e,t){e.min=e.min+t,e.max=e.max+t}function yy(e,t,[n,r,i]){const a=t[i]!==void 0?t[i]:.5,l=ve(e.min,e.max,a);Np(e,t[n],t[r],l,t.scale)}const ez=["x","scaleX","originX"],tz=["y","scaleY","originY"];function Eo(e,t){yy(e.x,t,ez),yy(e.y,t,tz)}function R1(e,t){return N1(qC(e.getBoundingClientRect(),t))}function nz(e,t,n){const r=R1(e,n),{scroll:i}=t;return i&&(Sn(r.x,i.offset.x),Sn(r.y,i.offset.y)),r}const I1=({current:e})=>e?e.ownerDocument.defaultView:null,rz=new WeakMap;class oz{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ae(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=p=>{const{dragSnapToOrigin:m}=this.getProps();m?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Pc(p,"page").point)},a=(p,m)=>{const{drag:f,dragPropagation:g,onDragStart:$}=this.getProps();if(f&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Kx(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Tt(w=>{let v=this.getAxisMotionValue(w).get()||0;if(qt.test(v)){const{projection:h}=this.visualElement;if(h&&h.layout){const y=h.layout.layoutBox[w];y&&(v=xt(y)*(parseFloat(v)/100))}}this.originPoint[w]=v}),$&&fe.update(()=>$(p,m),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},l=(p,m)=>{const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:$,onDrag:x}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:w}=m;if(g&&this.currentDirection===null){this.currentDirection=iz(w),this.currentDirection!==null&&$&&$(this.currentDirection);return}this.updateAxis("x",m.point,w),this.updateAxis("y",m.point,w),this.visualElement.render(),x&&x(p,m)},c=(p,m)=>this.stop(p,m),u=()=>Tt(p=>{var m;return this.getAnimationState(p)==="paused"&&((m=this.getAxisMotionValue(p).animation)===null||m===void 0?void 0:m.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new A1(t,{onSessionStart:i,onStart:a,onMove:l,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:I1(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:a}=this.getProps();a&&fe.update(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Va(t,i,this.currentDirection))return;const a=this.getAxisMotionValue(t);let l=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(l=HC(l,this.constraints[t],this.elastic[t])),a.set(l)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&vo(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=GC(i.layoutBox,n):this.constraints=!1,this.elastic=XC(r),a!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Tt(l=>{this.getAxisMotionValue(l)&&(this.constraints[l]=KC(i.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!vo(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=nz(r,i.root,this.visualElement.getTransformPagePoint());let l=YC(i.layout.layoutBox,a);if(n){const c=n(JC(l));this.hasMutatedConstraints=!!c,c&&(l=N1(c))}return l}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:l,onDragTransitionEnd:c}=this.getProps(),u=this.constraints||{},d=Tt(p=>{if(!Va(p,n,this.currentDirection))return;let m=u&&u[p]||{};l&&(m={min:0,max:0});const f=i?200:1e6,g=i?40:1e7,$={type:"inertia",velocity:r?t[p]:0,bounceStiffness:f,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...a,...m};return this.startAxisValueAnimation(p,$)});return Promise.all(d).then(c)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(ah(t,r,0,n))}stopAnimation(){Tt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Tt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Tt(n=>{const{drag:r}=this.getProps();if(!Va(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:l,max:c}=i.layout.layoutBox[n];a.set(t[n]-ve(l,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!vo(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Tt(l=>{const c=this.getAxisMotionValue(l);if(c){const u=c.get();i[l]=QC({min:u,max:u},this.constraints[l])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Tt(l=>{if(!Va(l,t,null))return;const c=this.getAxisMotionValue(l),{min:u,max:d}=this.constraints[l];c.set(ve(u,d,i[l]))})}addListeners(){if(!this.visualElement.current)return;rz.set(this.visualElement,this);const t=this.visualElement.current,n=un(t,"pointerdown",u=>{const{drag:d,dragListener:p=!0}=this.getProps();d&&p&&this.start(u)}),r=()=>{const{dragConstraints:u}=this.getProps();vo(u)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,a=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const l=sn(window,"resize",()=>this.scalePositionWithinConstraints()),c=i.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d})=>{this.isDragging&&d&&(Tt(p=>{const m=this.getAxisMotionValue(p);m&&(this.originPoint[p]+=u[p].translate,m.set(m.get()+u[p].translate))}),this.visualElement.render())});return()=>{l(),n(),a(),c&&c()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:l=Ap,dragMomentum:c=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:l,dragMomentum:c}}}function Va(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function iz(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class az extends Jn{constructor(t){super(t),this.removeGroupControls=we,this.removeListeners=we,this.controls=new oz(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||we}unmount(){this.removeGroupControls(),this.removeListeners()}}const vy=e=>(t,n)=>{e&&fe.update(()=>e(t,n))};class lz extends Jn{constructor(){super(...arguments),this.removePointerDownListener=we}onPointerDown(t){this.session=new A1(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:I1(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:vy(t),onStart:vy(n),onMove:r,onEnd:(a,l)=>{delete this.session,i&&fe.update(()=>i(a,l))}}}mount(){this.removePointerDownListener=un(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function sz(){const e=b.useContext(_f);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=b.useId();return b.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const os={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function $y(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ni={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(_.test(e))e=parseFloat(e);else return e;const n=$y(e,t.target.x),r=$y(e,t.target.y);return`${n}% ${r}%`}},cz={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Gn.parse(e);if(i.length>5)return r;const a=Gn.createTransformer(e),l=typeof i[0]!="number"?1:0,c=n.x.scale*t.x,u=n.y.scale*t.y;i[0+l]/=c,i[1+l]/=u;const d=ve(c,u,.5);return typeof i[2+l]=="number"&&(i[2+l]/=d),typeof i[3+l]=="number"&&(i[3+l]/=d),a(i)}};class uz extends o.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=t;g2(dz),a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),os.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,l=r.projection;return l&&(l.isPresent=a,i||t.layoutDependency!==n||n===void 0?l.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?l.promote():l.relegate()||fe.postRender(()=>{const c=l.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function M1(e){const[t,n]=sz(),r=b.useContext(Nx);return o.createElement(uz,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(Lx),isPresent:t,safeToRemove:n})}const dz={borderRadius:{...ni,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ni,borderTopRightRadius:ni,borderBottomLeftRadius:ni,borderBottomRightRadius:ni,boxShadow:cz},B1=["TopLeft","TopRight","BottomLeft","BottomRight"],mz=B1.length,xy=e=>typeof e=="string"?parseFloat(e):e,Ey=e=>typeof e=="number"||_.test(e);function pz(e,t,n,r,i,a){i?(e.opacity=ve(0,n.opacity!==void 0?n.opacity:1,fz(r)),e.opacityExit=ve(t.opacity!==void 0?t.opacity:1,0,hz(r))):a&&(e.opacity=ve(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let l=0;l<mz;l++){const c=`border${B1[l]}Radius`;let u=wy(t,c),d=wy(n,c);if(u===void 0&&d===void 0)continue;u||(u=0),d||(d=0),u===0||d===0||Ey(u)===Ey(d)?(e[c]=Math.max(ve(xy(u),xy(d),r),0),(qt.test(d)||qt.test(u))&&(e[c]+="%")):e[c]=d}(t.rotate||n.rotate)&&(e.rotate=ve(t.rotate||0,n.rotate||0,r))}function wy(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const fz=O1(0,.5,l1),hz=O1(.5,.95,we);function O1(e,t,n){return r=>r<e?0:r>t?1:n(la(e,t,r))}function by(e,t){e.min=t.min,e.max=t.max}function St(e,t){by(e.x,t.x),by(e.y,t.y)}function Sy(e,t,n,r,i){return e-=t,e=js(e,1/n,r),i!==void 0&&(e=js(e,1/i,r)),e}function gz(e,t=0,n=1,r=.5,i,a=e,l=e){if(qt.test(t)&&(t=parseFloat(t),t=ve(l.min,l.max,t/100)-l.min),typeof t!="number")return;let c=ve(a.min,a.max,r);e===a&&(c-=t),e.min=Sy(e.min,t,n,c,i),e.max=Sy(e.max,t,n,c,i)}function ky(e,t,[n,r,i],a,l){gz(e,t[n],t[r],t[i],t.scale,a,l)}const yz=["x","scaleX","originX"],vz=["y","scaleY","originY"];function Ty(e,t,n,r){ky(e.x,t,yz,n?n.x:void 0,r?r.x:void 0),ky(e.y,t,vz,n?n.y:void 0,r?r.y:void 0)}function Cy(e){return e.translate===0&&e.scale===1}function V1(e){return Cy(e.x)&&Cy(e.y)}function $z(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function j1(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function zy(e){return xt(e.x)/xt(e.y)}class xz{constructor(){this.members=[]}add(t){lh(this.members,t),t.scheduleRender()}remove(t){if(sh(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Py(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y;if((i||a)&&(r=`translate3d(${i}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:u,rotateX:d,rotateY:p}=n;u&&(r+=`rotate(${u}deg) `),d&&(r+=`rotateX(${d}deg) `),p&&(r+=`rotateY(${p}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const Ez=(e,t)=>e.depth-t.depth;class wz{constructor(){this.children=[],this.isDirty=!1}add(t){lh(this.children,t),this.isDirty=!0}remove(t){sh(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Ez),this.isDirty=!1,this.children.forEach(t)}}function bz(e,t){const n=performance.now(),r=({timestamp:i})=>{const a=i-n;a>=t&&(gn(r),e(a-t))};return fe.read(r,!0),()=>gn(r)}function Sz(e){window.MotionDebug&&window.MotionDebug.record(e)}function kz(e){return e instanceof SVGElement&&e.tagName!=="svg"}function Tz(e,t,n){const r=mt(e)?e:Mo(e);return r.start(ah("",r,t,n)),r.animation}const Ay=["","X","Y","Z"],Cz={visibility:"hidden"},Fy=1e3;let zz=0;const rr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function W1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(l={},c=t==null?void 0:t()){this.id=zz++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,rr.totalNodes=rr.resolvedTargetDeltas=rr.recalculatedProjection=0,this.nodes.forEach(Fz),this.nodes.forEach(Iz),this.nodes.forEach(Mz),this.nodes.forEach(Nz),Sz(rr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=l,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new wz)}addEventListener(l,c){return this.eventHandlers.has(l)||this.eventHandlers.set(l,new ch),this.eventHandlers.get(l).add(c)}notifyListeners(l,...c){const u=this.eventHandlers.get(l);u&&u.notify(...c)}hasListeners(l){return this.eventHandlers.has(l)}mount(l,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=kz(l),this.instance=l;const{layoutId:u,layout:d,visualElement:p}=this.options;if(p&&!p.current&&p.mount(l),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(d||u)&&(this.isLayoutDirty=!0),e){let m;const f=()=>this.root.updateBlockedByResize=!1;e(l,()=>{this.root.updateBlockedByResize=!0,m&&m(),m=bz(f,250),os.hasAnimatedSinceResize&&(os.hasAnimatedSinceResize=!1,this.nodes.forEach(Ly))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&p&&(u||d)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:f,hasRelativeTargetChanged:g,layout:$})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||p.getDefaultTransition()||Wz,{onLayoutAnimationStart:w,onLayoutAnimationComplete:v}=p.getProps(),h=!this.targetLayout||!j1(this.targetLayout,$)||g,y=!f&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(m,y);const E={...ih(x,"layout"),onPlay:w,onComplete:v};(p.shouldReduceMotion||this.options.layoutRoot)&&(E.delay=0,E.type=!1),this.startAnimation(E)}else f||Ly(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=$})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const l=this.getStack();l&&l.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,gn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Bz),this.animationId++)}getTransformTemplate(){const{visualElement:l}=this.options;return l&&l.getProps().transformTemplate}willUpdate(l=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const m=this.path[p];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:c,layout:u}=this.options;if(c===void 0&&!u)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),l&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ny);return}this.isUpdating||this.nodes.forEach(Dz),this.isUpdating=!1,this.nodes.forEach(Rz),this.nodes.forEach(Pz),this.nodes.forEach(Az),this.clearAllSnapshots();const c=performance.now();Xe.delta=Hn(0,1e3/60,c-Xe.timestamp),Xe.timestamp=c,Xe.isProcessing=!0,pu.update.process(Xe),pu.preRender.process(Xe),pu.render.process(Xe),Xe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(Lz),this.sharedNodes.forEach(Oz)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,fe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){fe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const l=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ae(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,l?l.layoutBox:void 0)}updateScroll(l="measure"){let c=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===l&&(c=!1),c&&(this.scroll={animationId:this.root.animationId,phase:l,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const l=this.isLayoutDirty||this.shouldResetTransform,c=this.projectionDelta&&!V1(this.projectionDelta),u=this.getTransformTemplate(),d=u?u(this.latestValues,""):void 0,p=d!==this.prevTransformTemplateValue;l&&(c||nr(this.latestValues)||p)&&(i(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(l=!0){const c=this.measurePageBox();let u=this.removeElementScroll(c);return l&&(u=this.removeTransform(u)),_z(u),{animationId:this.root.animationId,measuredBox:c,layoutBox:u,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:l}=this.options;if(!l)return Ae();const c=l.measureViewportBox(),{scroll:u}=this.root;return u&&(Sn(c.x,u.offset.x),Sn(c.y,u.offset.y)),c}removeElementScroll(l){const c=Ae();St(c,l);for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:p,options:m}=d;if(d!==this.root&&p&&m.layoutScroll){if(p.isRoot){St(c,l);const{scroll:f}=this.root;f&&(Sn(c.x,-f.offset.x),Sn(c.y,-f.offset.y))}Sn(c.x,p.offset.x),Sn(c.y,p.offset.y)}}return c}applyTransform(l,c=!1){const u=Ae();St(u,l);for(let d=0;d<this.path.length;d++){const p=this.path[d];!c&&p.options.layoutScroll&&p.scroll&&p!==p.root&&Eo(u,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),nr(p.latestValues)&&Eo(u,p.latestValues)}return nr(this.latestValues)&&Eo(u,this.latestValues),u}removeTransform(l){const c=Ae();St(c,l);for(let u=0;u<this.path.length;u++){const d=this.path[u];if(!d.instance||!nr(d.latestValues))continue;Fp(d.latestValues)&&d.updateSnapshot();const p=Ae(),m=d.measurePageBox();St(p,m),Ty(c,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,p)}return nr(this.latestValues)&&Ty(c,this.latestValues),c}setTargetDelta(l){this.targetDelta=l,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(l){this.options={...this.options,...l,crossfade:l.crossfade!==void 0?l.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Xe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(l=!1){var c;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==u;if(!(l||d&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:m,layoutId:f}=this.options;if(!(!this.layout||!(m||f))){if(this.resolvedRelativeTargetAt=Xe.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ae(),this.relativeTargetOrigin=Ae(),Bi(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ae(),this.targetWithTransforms=Ae()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),UC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):St(this.target,this.layout.layoutBox),D1(this.target,this.targetDelta)):St(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ae(),this.relativeTargetOrigin=Ae(),Bi(this.relativeTargetOrigin,this.target,g.target),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}rr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Fp(this.parent.latestValues)||L1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var l;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty)&&(d=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Xe.timestamp&&(d=!1),d)return;const{layout:p,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||m))return;St(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,g=this.treeScale.y;ZC(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox);const{target:$}=c;if(!$){this.projectionTransform&&(this.projectionDelta=xo(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=xo(),this.projectionDeltaWithTransform=xo());const x=this.projectionTransform;Mi(this.projectionDelta,this.layoutCorrected,$,this.latestValues),this.projectionTransform=Py(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==f||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",$)),rr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(l=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),l){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(l,c=!1){const u=this.snapshot,d=u?u.latestValues:{},p={...this.latestValues},m=xo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const f=Ae(),g=u?u.source:void 0,$=this.layout?this.layout.source:void 0,x=g!==$,w=this.getStack(),v=!w||w.members.length<=1,h=!!(x&&!v&&this.options.crossfade===!0&&!this.path.some(jz));this.animationProgress=0;let y;this.mixTargetDelta=E=>{const k=E/1e3;Dy(m.x,l.x,k),Dy(m.y,l.y,k),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bi(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Vz(this.relativeTarget,this.relativeTargetOrigin,f,k),y&&$z(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=Ae()),St(y,this.relativeTarget)),x&&(this.animationValues=p,pz(p,d,this.latestValues,k,h,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(l){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(gn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=fe.update(()=>{os.hasAnimatedSinceResize=!0,this.currentAnimation=Tz(0,Fy,{...l,onUpdate:c=>{this.mixTargetDelta(c),l.onUpdate&&l.onUpdate(c)},onComplete:()=>{l.onComplete&&l.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const l=this.getStack();l&&l.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Fy),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const l=this.getLead();let{targetWithTransforms:c,target:u,layout:d,latestValues:p}=l;if(!(!c||!u||!d)){if(this!==l&&this.layout&&d&&_1(this.options.animationType,this.layout.layoutBox,d.layoutBox)){u=this.target||Ae();const m=xt(this.layout.layoutBox.x);u.x.min=l.target.x.min,u.x.max=u.x.min+m;const f=xt(this.layout.layoutBox.y);u.y.min=l.target.y.min,u.y.max=u.y.min+f}St(c,u),Eo(c,p),Mi(this.projectionDeltaWithTransform,this.layoutCorrected,c,p)}}registerSharedNode(l,c){this.sharedNodes.has(l)||this.sharedNodes.set(l,new xz),this.sharedNodes.get(l).add(c);const d=c.options.initialPromotionConfig;c.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(c):void 0})}isLead(){const l=this.getStack();return l?l.lead===this:!0}getLead(){var l;const{layoutId:c}=this.options;return c?((l=this.getStack())===null||l===void 0?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:c}=this.options;return c?(l=this.getStack())===null||l===void 0?void 0:l.prevLead:void 0}getStack(){const{layoutId:l}=this.options;if(l)return this.root.sharedNodes.get(l)}promote({needsReset:l,transition:c,preserveFollowOpacity:u}={}){const d=this.getStack();d&&d.promote(this,u),l&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const l=this.getStack();return l?l.relegate(this):!1}resetRotation(){const{visualElement:l}=this.options;if(!l)return;let c=!1;const{latestValues:u}=l;if((u.rotate||u.rotateX||u.rotateY||u.rotateZ)&&(c=!0),!c)return;const d={};for(let p=0;p<Ay.length;p++){const m="rotate"+Ay[p];u[m]&&(d[m]=u[m],l.setStaticValue(m,0))}l.render();for(const p in d)l.setStaticValue(p,d[p]);l.scheduleRender()}getProjectionStyles(l){var c,u;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Cz;const d={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=rs(l==null?void 0:l.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none",d;const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=rs(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!nr(this.latestValues)&&(x.transform=p?p({},""):"none",this.hasProjected=!1),x}const f=m.animationValues||m.latestValues;this.applyTransformsToTarget(),d.transform=Py(this.projectionDeltaWithTransform,this.treeScale,f),p&&(d.transform=p(f,d.transform));const{x:g,y:$}=this.projectionDelta;d.transformOrigin=`${g.origin*100}% ${$.origin*100}% 0`,m.animationValues?d.opacity=m===this?(u=(c=f.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:d.opacity=m===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in Ds){if(f[x]===void 0)continue;const{correct:w,applyTo:v}=Ds[x],h=d.transform==="none"?f[x]:w(f[x],m);if(v){const y=v.length;for(let E=0;E<y;E++)d[v[E]]=h}else d[x]=h}return this.options.layoutId&&(d.pointerEvents=m===this?rs(l==null?void 0:l.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(l=>{var c;return(c=l.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(Ny),this.root.sharedNodes.clear()}}}function Pz(e){e.updateLayout()}function Az(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:a}=e.options,l=n.source!==e.layout.source;a==="size"?Tt(m=>{const f=l?n.measuredBox[m]:n.layoutBox[m],g=xt(f);f.min=r[m].min,f.max=f.min+g}):_1(a,n.layoutBox,r)&&Tt(m=>{const f=l?n.measuredBox[m]:n.layoutBox[m],g=xt(r[m]);f.max=f.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[m].max=e.relativeTarget[m].min+g)});const c=xo();Mi(c,r,n.layoutBox);const u=xo();l?Mi(u,e.applyTransform(i,!0),n.measuredBox):Mi(u,r,n.layoutBox);const d=!V1(c);let p=!1;if(!e.resumeFrom){const m=e.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:f,layout:g}=m;if(f&&g){const $=Ae();Bi($,n.layoutBox,f.layoutBox);const x=Ae();Bi(x,r,g.layoutBox),j1($,x)||(p=!0),m.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=$,e.relativeParent=m)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:u,layoutDelta:c,hasLayoutChanged:d,hasRelativeTargetChanged:p})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Fz(e){rr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Nz(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Lz(e){e.clearSnapshot()}function Ny(e){e.clearMeasurements()}function Dz(e){e.isLayoutDirty=!1}function Rz(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Ly(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Iz(e){e.resolveTargetDelta()}function Mz(e){e.calcProjection()}function Bz(e){e.resetRotation()}function Oz(e){e.removeLeadSnapshot()}function Dy(e,t,n){e.translate=ve(t.translate,0,n),e.scale=ve(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Ry(e,t,n,r){e.min=ve(t.min,n.min,r),e.max=ve(t.max,n.max,r)}function Vz(e,t,n,r){Ry(e.x,t.x,n.x,r),Ry(e.y,t.y,n.y,r)}function jz(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Wz={duration:.45,ease:[.4,0,.1,1]},Iy=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),My=Iy("applewebkit/")&&!Iy("chrome/")?Math.round:we;function By(e){e.min=My(e.min),e.max=My(e.max)}function _z(e){By(e.x),By(e.y)}function _1(e,t,n){return e==="position"||e==="preserve-aspect"&&!Pp(zy(t),zy(n),.2)}const Uz=W1({attachResizeListener:(e,t)=>sn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Su={current:void 0},U1=W1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Su.current){const e=new Uz({});e.mount(window),e.setOptions({layoutScroll:!0}),Su.current=e}return Su.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Hz={pan:{Feature:lz},drag:{Feature:az,ProjectionNode:U1,MeasureLayout:M1}},Gz=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Yz(e){const t=Gz.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Lp(e,t,n=1){const[r,i]=Yz(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const l=a.trim();return T1(l)?parseFloat(l):l}else return wp(i)?Lp(i,t,n+1):i}function Qz(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const a=i.get();if(!wp(a))return;const l=Lp(a,r);l&&i.set(l)});for(const i in t){const a=t[i];if(!wp(a))continue;const l=Lp(a,r);l&&(t[i]=l,n||(n={}),n[i]===void 0&&(n[i]=a))}return{target:t,transitionEnd:n}}const Kz=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),H1=e=>Kz.has(e),Xz=e=>Object.keys(e).some(H1),Oy=e=>e===Er||e===_,Vy=(e,t)=>parseFloat(e.split(", ")[t]),jy=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return Vy(i[1],t);{const a=r.match(/^matrix\((.+)\)$/);return a?Vy(a[1],e):0}},Jz=new Set(["x","y","z"]),qz=pa.filter(e=>!Jz.has(e));function Zz(e){const t=[];return qz.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Bo={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:jy(4,13),y:jy(5,14)};Bo.translateX=Bo.x;Bo.translateY=Bo.y;const e3=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,a=getComputedStyle(i),{display:l}=a,c={};l==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(d=>{c[d]=Bo[d](r,a)}),t.render();const u=t.measureViewportBox();return n.forEach(d=>{const p=t.getValue(d);p&&p.jump(c[d]),e[d]=Bo[d](u,a)}),e},t3=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(H1);let a=[],l=!1;const c=[];if(i.forEach(u=>{const d=e.getValue(u);if(!e.hasValue(u))return;let p=n[u],m=ti(p);const f=t[u];let g;if(Is(f)){const $=f.length,x=f[0]===null?1:0;p=f[x],m=ti(p);for(let w=x;w<$&&f[w]!==null;w++)g?eh(ti(f[w])===g):g=ti(f[w])}else g=ti(f);if(m!==g)if(Oy(m)&&Oy(g)){const $=d.get();typeof $=="string"&&d.set(parseFloat($)),typeof f=="string"?t[u]=parseFloat(f):Array.isArray(f)&&g===_&&(t[u]=f.map(parseFloat))}else m!=null&&m.transform&&(g!=null&&g.transform)&&(p===0||f===0)?p===0?d.set(g.transform(p)):t[u]=m.transform(f):(l||(a=Zz(e),l=!0),c.push(u),r[u]=r[u]!==void 0?r[u]:t[u],d.jump(f))}),c.length){const u=c.indexOf("height")>=0?window.pageYOffset:null,d=e3(t,e,c);return a.length&&a.forEach(([p,m])=>{e.getValue(p).set(m)}),e.render(),kc&&u!==null&&window.scrollTo({top:u}),{target:d,transitionEnd:r}}else return{target:t,transitionEnd:r}};function n3(e,t,n,r){return Xz(t)?t3(e,t,n,r):{target:t,transitionEnd:r}}const r3=(e,t,n,r)=>{const i=Qz(e,t,r);return t=i.target,r=i.transitionEnd,n3(e,t,n,r)},Dp={current:null},G1={current:!1};function o3(){if(G1.current=!0,!!kc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Dp.current=e.matches;e.addListener(t),t()}else Dp.current=!1}function i3(e,t,n){const{willChange:r}=t;for(const i in t){const a=t[i],l=n[i];if(mt(a))e.addValue(i,a),Vs(r)&&r.add(i);else if(mt(l))e.addValue(i,Mo(a,{owner:e})),Vs(r)&&r.remove(i);else if(l!==a)if(e.hasValue(i)){const c=e.getValue(i);!c.hasAnimated&&c.set(a)}else{const c=e.getStaticValue(i);e.addValue(i,Mo(c!==void 0?c:a,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const Wy=new WeakMap,Y1=Object.keys(aa),a3=Y1.length,_y=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],l3=Gf.length;class s3{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>fe.render(this.render,!1,!0);const{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.isControllingVariants=Cc(n),this.isVariantNode=Fx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{});for(const m in p){const f=p[m];c[m]!==void 0&&mt(f)&&(f.set(c[m],!1),Vs(d)&&d.add(m))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Wy.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),G1.current||o3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Dp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Wy.delete(this.current),this.projection&&this.projection.unmount(),gn(this.notifyUpdate),gn(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=xr.has(t),i=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&fe.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,a){let l,c;for(let u=0;u<a3;u++){const d=Y1[u],{isEnabled:p,Feature:m,ProjectionNode:f,MeasureLayout:g}=aa[d];f&&(l=f),p(n)&&(!this.features[d]&&m&&(this.features[d]=new m(this)),g&&(c=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&l){this.projection=new l(this.latestValues,this.parent&&this.parent.projection);const{layoutId:u,layout:d,drag:p,dragConstraints:m,layoutScroll:f,layoutRoot:g}=n;this.projection.setOptions({layoutId:u,layout:d,alwaysMeasureLayout:!!p||m&&vo(m),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof d=="string"?d:"both",initialPromotionConfig:a,layoutScroll:f,layoutRoot:g})}return c}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ae()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<_y.length;r++){const i=_y[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a=t["on"+i];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=i3(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<l3;r++){const i=Gf[r],a=this.props[i];(ia(a)||a===!1)&&(n[i]=a)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Mo(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Zf(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!mt(a)?a:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new ch),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Q1 extends s3{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},a){let l=kC(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),l&&(l=i(l))),a){bC(this,r,l);const c=r3(this,r,l,n);n=c.transitionEnd,r=c.target}return{transition:t,transitionEnd:n,...r}}}function c3(e){return window.getComputedStyle(e)}class u3 extends Q1{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(xr.has(n)){const r=oh(n);return r&&r.default||0}else{const r=c3(t),i=(Ix(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return R1(t,n)}build(t,n,r,i){Qf(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return qf(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;mt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){Wx(t,n,r,i)}}class d3 extends Q1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(xr.has(n)){const r=oh(n);return r&&r.default||0}return n=_x.has(n)?n:Uf(n),t.getAttribute(n)}measureInstanceViewportBox(){return Ae()}scrapeMotionValuesFromProps(t,n){return Hx(t,n)}build(t,n,r,i){Xf(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){Ux(t,n,r,i)}mount(t){this.isSVGTag=Jf(t.tagName),super.mount(t)}}const m3=(e,t)=>Yf(e)?new d3(t,{enableHardwareAcceleration:!1}):new u3(t,{enableHardwareAcceleration:!0}),p3={layout:{ProjectionNode:U1,MeasureLayout:M1}},f3={...VC,...aT,...Hz,...p3},be=f2((e,t)=>Y2(e,t,f3,m3));var K1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Uy=o.createContext&&o.createContext(K1),Wn=globalThis&&globalThis.__assign||function(){return Wn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Wn.apply(this,arguments)},h3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function X1(e){return e&&e.map(function(t,n){return o.createElement(t.tag,Wn({key:n},t.attr),X1(t.child))})}function qn(e){return function(t){return o.createElement(g3,Wn({attr:Wn({},e.attr)},t),X1(e.child))}}function g3(e){var t=function(n){var r=e.attr,i=e.size,a=e.title,l=h3(e,["attr","size","title"]),c=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),o.createElement("svg",Wn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:Wn(Wn({color:e.color||n.color},n.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&o.createElement("title",null,a),e.children)};return Uy!==void 0?o.createElement(Uy.Consumer,null,function(n){return t(n)}):t(K1)}function J1(e){return qn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(e)}function y3(e){return qn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"}}]})(e)}function v3(e){return qn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"}}]})(e)}function $3(e){return qn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"}}]})(e)}function x3(e){return qn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function E3(e){return qn({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z"}}]})(e)}function w3(e){return qn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"}}]})(e)}function b3(e){return qn({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(e)}const S3=[{id:1,icon:o.createElement(w3,null),title:"Custom QR Codes",description:"Generate unique QR codes for shows, merch, or special offers. Fans can scan and support you instantly."},{id:2,icon:o.createElement(E3,null),title:"Next-Day Deposits",description:"Get paid quickly with deposits to your account the next business day. No more waiting for payouts."},{id:3,icon:o.createElement(b3,null),title:"Fan Relationship Tools",description:"Build lasting connections with supporters through personalized messaging and exclusive content."},{id:4,icon:o.createElement(v3,null),title:"Performance Analytics",description:"Track support patterns, fan demographics, and engagement metrics to optimize your strategy."},{id:5,icon:o.createElement(y3,null),title:"Event Management",description:"Create and promote your shows, track attendance, and measure performance all in one place."},{id:6,icon:o.createElement(x3,null),title:"Secure Transactions",description:"Bank-level security ensures all transactions are protected, giving you and your fans peace of mind."}],k3=()=>o.createElement(T3,null,o.createElement(C3,null,o.createElement(z3,null,o.createElement(P3,null,o.createElement(A3,null,"Everything You Need to Succeed"),o.createElement(F3,null,"TrueFans CONNECT™ provides all the tools independent artists need to build sustainable careers through direct fan support.")),o.createElement(N3,null,S3.map((e,t)=>o.createElement(q1,{key:e.id,as:be.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.5,delay:t*.1},whileHover:{y:-5,boxShadow:"0 10px 30px rgba(0,0,0,0.1)",background:"linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)"}},o.createElement(L3,null,e.icon),o.createElement(D3,null,o.createElement(R3,null,e.title),o.createElement(I3,null,e.description)))))))),T3=s.section`
  background-color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 70% 30%, rgba(26, 115, 232, 0.03) 0%, transparent 50%);
    z-index: 0;
  }
`,C3=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: 0 ${({theme:e})=>e.space.md};
  }
`,z3=s.div`
  padding: ${({theme:e})=>e.space["5xl"]} 0;
`,P3=s.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({theme:e})=>e.space["3xl"]};
`,A3=s.h2`
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-size: clamp(2rem, 4vw, ${({theme:e})=>e.fontSizes["3xl"]});
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${({theme:e})=>e.colors.revolutionaryGold};
  }
`,F3=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fontSizes.lg};
  }
`,N3=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`,q1=s.div`
  display: flex;
  align-items: flex-start;
  padding: ${({theme:e})=>e.space.xl};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: all 0.3s ease;
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
`,L3=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}10, ${({theme:e})=>e.colors.primary}20);
  margin-right: ${({theme:e})=>e.space.lg};
  color: ${({theme:e})=>e.colors.primary};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  flex-shrink: 0;
  transition: all 0.3s ease;
  
  ${q1}:hover & {
    transform: scale(1.1);
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}20, ${({theme:e})=>e.colors.primary}30);
  }
`,D3=s.div`
  flex: 1;
`,R3=s.h3`
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  margin-bottom: ${({theme:e})=>e.space.sm};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
`,I3=s.p`
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
  font-size: ${({theme:e})=>e.fontSizes.md};
`,Hy=[{id:1,title:"Create Your Artist Profile",description:"Sign up and build your artist profile in minutes. Connect your payment account for same-day deposits.",image:"https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg"},{id:2,title:"Generate Your QR Codes",description:"Create custom QR codes for each show, merch item, or special offer. Each code is tracked for analytics.",image:"https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg"},{id:3,title:"Display at Shows & Online",description:"Show your QR code on stage, merch table, or share digitally. Fans scan to support you instantly.",image:"https://images.pexels.com/photos/2747448/pexels-photo-2747448.jpeg"},{id:4,title:"Build Lasting Fan Relationships",description:"Use our tools to nurture relationships with fans who've supported you. Send exclusive content and offers.",image:"https://images.pexels.com/photos/3984827/pexels-photo-3984827.jpeg"}],M3=()=>o.createElement(B3,null,o.createElement(O3,null,o.createElement(V3,null,o.createElement(j3,null,"How It Works"),o.createElement(W3,null,"Get started in minutes and start receiving direct fan support at your very next show.")),o.createElement(_3,null,Hy.map((e,t)=>o.createElement(U3,{key:e.id,as:be.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,delay:t*.2}},o.createElement(H3,null,o.createElement(G3,null,e.id),t<Hy.length-1&&o.createElement(Y3,null)),o.createElement(Q3,null,o.createElement(Z1,null,o.createElement(K3,{src:e.image,alt:e.title}),o.createElement(X3,null)),o.createElement(J3,null,o.createElement(q3,null,e.title),o.createElement(Z3,null,e.description)))))))),B3=s.section`
  padding: ${({theme:e})=>e.space["6xl"]} 0;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.trustworthyNavy||"#1E3A8A"} 0%, #0A1A2F 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }
`,O3=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: 0 ${({theme:e})=>e.space.md};
  }
`,V3=s.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({theme:e})=>e.space["3xl"]};
`,j3=s.h2`
  color: white;
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-size: clamp(2rem, 4vw, ${({theme:e})=>e.fontSizes["3xl"]});
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${({theme:e})=>e.colors.revolutionaryGold||"#FFD700"};
  }
`,W3=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.warmCream||"#F5F5DC"};
  line-height: 1.6;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fontSizes.lg};
  }
`,_3=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space["4xl"]};
  max-width: 900px;
  margin: 0 auto;
`,U3=s.div`
  display: flex;
  align-items: flex-start;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,H3=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${({theme:e})=>e.space.lg};
  position: relative;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    margin-bottom: ${({theme:e})=>e.space.md};
    margin-right: 0;
    flex-direction: row;
    width: 100%;
  }
`,G3=s.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.revolutionaryGold||"#FFD700"};
  color: ${({theme:e})=>e.colors.trustworthyNavy||"#1E3A8A"};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.revolutionaryGold||"#FFD700"};
    opacity: 0.3;
    z-index: -1;
  }
`,Y3=s.div`
  width: 3px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 10px;
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    display: none;
  }
`,Q3=s.div`
  flex: 1;
  display: flex;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
  }
`,Z1=s.div`
  width: 200px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
    height: 200px;
  }
`,K3=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${Z1}:hover & {
    transform: scale(1.05);
  }
`,X3=s.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
  }
`,J3=s.div`
  padding: ${({theme:e})=>e.space.xl};
  flex: 1;
`,q3=s.h3`
  color: ${({theme:e})=>e.colors.revolutionaryGold||"#FFD700"};
  margin-bottom: ${({theme:e})=>e.space.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  font-size: ${({theme:e})=>e.fontSizes.xl};
`,Z3=s.p`
  color: ${({theme:e})=>e.colors.warmCream||"#F5F5DC"};
  line-height: 1.6;
  font-size: ${({theme:e})=>e.fontSizes.md};
`,e5=["Get paid instantly at shows","Build direct fan relationships","Keep 80% of all donations","Access detailed fan analytics","Create custom QR codes for events","Receive next-day deposits"],t5=()=>o.createElement(n5,null,o.createElement(r5,null,o.createElement(o5,null,o.createElement(i5,null,o.createElement(a5,null,"Ready To Transform Your Music Career?"),o.createElement(l5,null,"Join thousands of independent artists who are taking control of their careers and building sustainable income streams with TrueFans CONNECT™."),o.createElement(s5,null,e5.map((e,t)=>o.createElement(c5,{key:t,as:be.li,initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.4,delay:t*.1},viewport:{once:!0}},o.createElement(u5,null,o.createElement($3,null)),o.createElement(d5,null,e))))),o.createElement(m5,null,o.createElement(p5,{as:be.div,whileHover:{scale:1.05},whileTap:{scale:.95}},o.createElement(eE,{to:"/artist-signup"},o.createElement("span",null,"Join as an Artist"),o.createElement(f5,null,o.createElement(J1,null)))),o.createElement(h5,null,"Already have an account? ",o.createElement(g5,{to:"/login"},"Log in")))))),n5=s.section`
  padding: ${({theme:e})=>e.space["4xl"]} 0;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.passionateCrimson}15 0%, ${({theme:e})=>e.colors.secondary}25 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    background-color: ${({theme:e})=>e.colors.revolutionaryGold};
    border-radius: 50%;
    opacity: 0.05;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
    background-color: ${({theme:e})=>e.colors.passionateCrimson};
    border-radius: 50%;
    opacity: 0.05;
  }
`,r5=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: 0 ${({theme:e})=>e.space.md};
  }
`,o5=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.space["3xl"]};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.xl};
  padding: ${({theme:e})=>e.space["3xl"]};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
    gap: ${({theme:e})=>e.space.xl};
  }
`,i5=s.div`
  flex: 2;
`,a5=s.h2`
  font-size: clamp(1.75rem, 3vw, ${({theme:e})=>e.fontSizes["3xl"]});
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  margin-bottom: ${({theme:e})=>e.space.md};
  line-height: 1.2;
`,l5=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.xl};
  line-height: 1.6;
`,s5=s.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    max-width: 500px;
    margin: 0 auto;
  }
`,c5=s.li`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.space.sm};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    justify-content: flex-start;
    text-align: left;
  }
`,u5=s.span`
  color: ${({theme:e})=>e.colors.successGreen};
  font-size: ${({theme:e})=>e.fontSizes.md};
  flex-shrink: 0;
`,d5=s.span`
  color: ${({theme:e})=>e.colors.darkText};
  font-size: ${({theme:e})=>e.fontSizes.md};
`,m5=s.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,p5=s.div`
  width: 100%;
  margin-bottom: ${({theme:e})=>e.space.md};
`,eE=s(ce)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.space.sm};
  background-color: ${({theme:e})=>e.colors.secondary};
  color: white;
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  padding: ${({theme:e})=>e.space.lg} ${({theme:e})=>e.space.xl};
  border-radius: ${({theme:e})=>e.radii.md};
  text-decoration: none;
  transition: ${({theme:e})=>e.transitions.default};
  box-shadow: ${({theme:e})=>e.shadows.md};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.secondaryDark};
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,f5=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  ${eE}:hover & {
    transform: translateX(4px);
  }
`,h5=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,g5=s(ce)`
  color: ${({theme:e})=>e.colors.primary};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primaryDark};
    text-decoration: underline;
  }
`,y5=()=>{const e=()=>{window.scrollTo(0,0)};return o.createElement(v5,null,o.createElement($5,null,o.createElement(x5,null,o.createElement(E5,null,o.createElement(w5,null,"Choose Your Future"),o.createElement(b5,null,"The music industry doesn't have to be a struggle. With TrueFans CONNECT™, you can build a sustainable career on your own terms. Our platform gives you the tools to connect directly with your fans, get paid what you deserve, and focus on what matters most—creating amazing music."),o.createElement(S5,null,o.createElement(ja,null,o.createElement(Wa,null),o.createElement(_a,null,"Instant payments at shows via custom QR codes")),o.createElement(ja,null,o.createElement(Wa,null),o.createElement(_a,null,"Direct fan communication without algorithm interference")),o.createElement(ja,null,o.createElement(Wa,null),o.createElement(_a,null,"Detailed analytics to understand your audience")),o.createElement(ja,null,o.createElement(Wa,null),o.createElement(_a,null,"Next-day deposits to your bank account"))),o.createElement(k5,{as:be.div,whileHover:{scale:1.05},whileTap:{scale:.95}},o.createElement(tE,{to:"/artist-signup",onClick:e},o.createElement("span",null,"Choose Your Future"),o.createElement(T5,null,o.createElement(J1,null))))),o.createElement(nE,null,o.createElement(C5,{src:"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",alt:"Artist performing on stage"}),o.createElement(z5,null),o.createElement(P5,null,'"TrueFans CONNECT™ helped me quit my day job and focus on music full-time."',o.createElement(A5,null,"— Jamie Chen, Indie Artist"))))))},v5=s.section`
  padding: ${({theme:e})=>e.space["5xl"]} 0;
  background-color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 80% 20%, rgba(26, 115, 232, 0.03) 0%, transparent 50%);
    z-index: 0;
  }
`,$5=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: 0 ${({theme:e})=>e.space.md};
  }
`,x5=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.space["3xl"]};
  align-items: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.space.xl};
  }
`,E5=s.div`
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    order: 2;
  }
`,w5=s.h2`
  font-size: clamp(2rem, 4vw, ${({theme:e})=>e.fontSizes["3xl"]});
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  margin-bottom: ${({theme:e})=>e.space.md};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: ${({theme:e})=>e.colors.revolutionaryGold};
  }
`,b5=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.xl};
  line-height: 1.6;
`,S5=s.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({theme:e})=>e.space.xl};
`,ja=s.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({theme:e})=>e.space.md};
`,Wa=s.span`
  width: 12px;
  height: 12px;
  background-color: ${({theme:e})=>e.colors.secondary};
  border-radius: 50%;
  margin-top: 6px;
  margin-right: ${({theme:e})=>e.space.md};
  flex-shrink: 0;
`,_a=s.span`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.5;
`,k5=s.div`
  display: inline-block;
`,tE=s(ce)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.space.sm};
  background-color: ${({theme:e})=>e.colors.secondary};
  color: white;
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  padding: ${({theme:e})=>e.space.md} ${({theme:e})=>e.space.xl};
  border-radius: ${({theme:e})=>e.radii.md};
  text-decoration: none;
  transition: ${({theme:e})=>e.transitions.default};
  box-shadow: ${({theme:e})=>e.shadows.md};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.secondaryDark};
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,T5=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  ${tE}:hover & {
    transform: translateX(4px);
  }
`,nE=s.div`
  position: relative;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    order: 1;
    max-width: 500px;
    margin: 0 auto;
  }
`,C5=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${nE}:hover & {
    transform: scale(1.05);
  }
`,z5=s.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  z-index: 2;
`,P5=s.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${({theme:e})=>e.space.xl};
  color: white;
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-style: italic;
  line-height: 1.4;
  z-index: 3;
`,A5=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-style: normal;
  margin-top: ${({theme:e})=>e.space.xs};
  opacity: 0.8;
`,F5=()=>o.createElement(N5,{as:be.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},o.createElement(Zt,{size:"xl"}),o.createElement(L5,null,o.createElement(nn,null,o.createElement(D5,null,o.createElement(R5,null,"Right Now Money and Fans Forever"),o.createElement(I5,null,"TrueFans CONNECT™ helps independent musicians get paid instantly at shows and build lasting relationships with their most supportive fans. Stop waiting for streaming pennies and start earning what you deserve."),o.createElement(M5,null,o.createElement(B5,{as:ce,to:"/artist-signup"},"Join as an Artist"),o.createElement(O5,{as:ce,to:"/artist-profile"},"View Demo Artist"))),o.createElement(rE,null,o.createElement(V5,{src:"https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg",alt:"Artist performing"}),o.createElement(j5,null)))),o.createElement(Zt,{size:"xxl"}),o.createElement(W5,null,o.createElement(nn,null,o.createElement(_5,null,"The Music Industry Is Broken. We're Fixing It."),o.createElement(U5,null,o.createElement(ku,null,o.createElement(Tu,null,"$0.004"),o.createElement(Cu,null,"Average streaming payout per play")),o.createElement(ku,null,o.createElement(Tu,null,"250,000"),o.createElement(Cu,null,"Streams needed to earn minimum wage")),o.createElement(ku,null,o.createElement(Tu,null,"80%"),o.createElement(Cu,null,"Of your donation goes directly to artists"))),o.createElement(H5,null,"TrueFans CONNECT™ puts the power back in your hands. Get paid instantly at shows, build direct relationships with your supporters, and create a sustainable income stream that doesn't depend on algorithms or gatekeepers."))),o.createElement(Zt,{size:"xxl"}),o.createElement(nn,null,o.createElement(G5,null,o.createElement(k3,null))),o.createElement(Zt,{size:"xxl"}),o.createElement(nn,null,o.createElement(Y5,null,o.createElement(M3,null))),o.createElement(Zt,{size:"xxl"}),o.createElement(nn,null,o.createElement(Q5,null,o.createElement(y5,null))),o.createElement(Zt,{size:"xxl"}),o.createElement(K5,null,o.createElement(nn,null,o.createElement(X5,null,"What Artists Are Saying"),o.createElement(J5,null,o.createElement(zu,{as:be.div,whileHover:{y:-8,boxShadow:"0 12px 30px rgba(0,0,0,0.12)"},transition:{duration:.3}},o.createElement(Pu,null,'"TrueFans CONNECT has been a game-changer for my music career. The direct support from fans has allowed me to record my new EP without label backing. The QR codes at my merch table bring in an extra $200-300 per show!"'),o.createElement(Au,null,o.createElement(Fu,{src:"https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg"}),o.createElement(Nu,null,o.createElement(Lu,null,"Sarah Johnson"),o.createElement(Du,null,"Jazz Vocalist")))),o.createElement(zu,{as:be.div,whileHover:{y:-8,boxShadow:"0 12px 30px rgba(0,0,0,0.12)"},transition:{duration:.3}},o.createElement(Pu,null,`"The donation QR codes are perfect for live shows. I've seen a significant increase in support since I started displaying them at my merch table. The best part is getting paid the same day - no more waiting weeks for payment processing."`),o.createElement(Au,null,o.createElement(Fu,{src:"https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"}),o.createElement(Nu,null,o.createElement(Lu,null,"Marcus Rivera"),o.createElement(Du,null,"Indie Rock Artist")))),o.createElement(zu,{as:be.div,whileHover:{y:-8,boxShadow:"0 12px 30px rgba(0,0,0,0.12)"},transition:{duration:.3}},o.createElement(Pu,null,`"As a small band, we appreciate the 80/20 split. It's much more fair than other platforms, and the donation system is incredibly easy to use. The fan relationship tools have helped us build a dedicated community that supports us consistently."`),o.createElement(Au,null,o.createElement(Fu,{src:"https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg"}),o.createElement(Nu,null,o.createElement(Lu,null,"Emily Chen"),o.createElement(Du,null,"Folk Band Lead"))))))),o.createElement(Zt,{size:"xxl"}),o.createElement(nn,null,o.createElement(q5,null,o.createElement(Z5,null,"How We Compare"),o.createElement(eP,null,o.createElement(tP,null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Feature"),o.createElement("th",null,"TrueFans CONNECT™"),o.createElement("th",null,"Streaming Platforms"),o.createElement("th",null,"Traditional Tipping"))),o.createElement("tbody",null,o.createElement("tr",null,o.createElement("td",null,"Artist Payout"),o.createElement("td",null,"80% of all donations"),o.createElement("td",null,"$0.003-$0.005 per stream"),o.createElement("td",null,"Variable, often shared with venue")),o.createElement("tr",null,o.createElement("td",null,"Payment Speed"),o.createElement("td",null,"Next day deposits"),o.createElement("td",null,"30-90 days"),o.createElement("td",null,"Immediate but cash only")),o.createElement("tr",null,o.createElement("td",null,"Fan Data"),o.createElement("td",null,"Detailed analytics"),o.createElement("td",null,"Limited or none"),o.createElement("td",null,"None")),o.createElement("tr",null,o.createElement("td",null,"Relationship Building"),o.createElement("td",null,"Direct communication tools"),o.createElement("td",null,"None or algorithm-dependent"),o.createElement("td",null,"In-person only")),o.createElement("tr",null,o.createElement("td",null,"Setup Difficulty"),o.createElement("td",null,"Simple, smooth and one-time"),o.createElement("td",null,"Complex distribution required"),o.createElement("td",null,"No setup, no tracking"))))))),o.createElement(Zt,{size:"xxl"}),o.createElement(nn,null,o.createElement(nP,null,o.createElement(t5,null))),o.createElement(Zt,{size:"xl"})),N5=s.main`
  width: 100%;
  overflow-x: hidden;
  background-color: ${({theme:e})=>e.colors.background};
`,nn=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: 0 ${({theme:e})=>e.space.md};
  }
`,Zt=s.div`
  height: ${({size:e,theme:t})=>e==="xxl"?"160px":e==="xl"?"120px":e==="lg"?"80px":"60px"};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    height: ${({size:e})=>e==="xxl"?"120px":e==="xl"?"100px":e==="lg"?"60px":"40px"};
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    height: ${({size:e})=>e==="xxl"?"100px":e==="xl"?"80px":e==="lg"?"40px":"30px"};
  }
`,L5=s.section`
  padding: ${({theme:e})=>e.space["5xl"]} 0;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.background} 0%, ${({theme:e})=>e.colors.lightBackground} 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 20% 30%, rgba(26, 115, 232, 0.05) 0%, transparent 40%);
    z-index: 0;
  }
  
  ${nn} {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.space.xl};
    position: relative;
    z-index: 1;
    
    @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
      flex-direction: column;
    }
  }
`,D5=s.div`
  flex: 1;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    text-align: center;
    margin-bottom: ${({theme:e})=>e.space.xl};
  }
`,R5=s.h1`
  font-size: clamp(2.5rem, 5vw, ${({theme:e})=>e.fontSizes["5xl"]});
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  margin-bottom: ${({theme:e})=>e.space.md};
  line-height: 1.2;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: ${({theme:e})=>e.colors.revolutionaryGold};
    
    @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,I5=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.lg};
  line-height: 1.6;
  max-width: 600px;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    margin-left: auto;
    margin-right: auto;
  }
`,M5=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  flex-wrap: wrap;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    justify-content: center;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({theme:e})=>e.space.sm};
  }
`,B5=s(Y)`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.xl}`};
  background-color: ${({theme:e})=>e.colors.secondary};
  color: white;
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.secondaryDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
  }
`,O5=s(Y)`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.xl}`};
  background-color: transparent;
  color: ${({theme:e})=>e.colors.darkText};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  border: 2px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.lightGray};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
  }
`,rE=s.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.xl};
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    width: 100px;
    height: 100px;
    background-color: ${({theme:e})=>e.colors.revolutionaryGold};
    border-radius: 50%;
    opacity: 0.1;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: -20px;
    width: 150px;
    height: 150px;
    background-color: ${({theme:e})=>e.colors.passionateCrimson};
    border-radius: 50%;
    opacity: 0.1;
    z-index: 1;
  }
`,V5=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${rE}:hover & {
    transform: scale(1.05);
  }
`,j5=s.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 50%);
  z-index: 2;
`,W5=s.section`
  padding: ${({theme:e})=>e.space["6xl"]} 0;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.trustworthyNavy} 0%, #0A1A2F 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.03);
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.02);
    border-radius: 50%;
  }
`,_5=s.h2`
  font-size: clamp(2rem, 4vw, ${({theme:e})=>e.fontSizes["3xl"]});
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
  color: white;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${({theme:e})=>e.colors.revolutionaryGold};
  }
`,U5=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.space.xl};
  margin-bottom: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.space.lg};
  }
`,ku=s.div`
  text-align: center;
  padding: ${({theme:e})=>e.space.xl};
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`,Tu=s.div`
  font-size: clamp(2rem, 4vw, ${({theme:e})=>e.fontSizes["4xl"]});
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.revolutionaryGold};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Cu=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.warmCream};
  line-height: 1.4;
`,H5=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.warmCream};
`,G5=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.xl};
  box-shadow: ${({theme:e})=>e.shadows.lg};
  overflow: hidden;
  padding: ${({theme:e})=>e.space["4xl"]} 0;
`,Y5=s.div`
  border-radius: ${({theme:e})=>e.radii.xl};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.lg};
  padding: ${({theme:e})=>e.space["4xl"]} 0;
`,Q5=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.xl};
  box-shadow: ${({theme:e})=>e.shadows.lg};
  overflow: hidden;
  padding: ${({theme:e})=>e.space["4xl"]} 0;
`,K5=s.section`
  padding: ${({theme:e})=>e.space["6xl"]} 0;
  background-color: ${({theme:e})=>e.colors.background};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 80% 20%, rgba(26, 115, 232, 0.03) 0%, transparent 50%);
    z-index: 0;
  }
`,X5=s.h2`
  font-size: clamp(2rem, 4vw, ${({theme:e})=>e.fontSizes["3xl"]});
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${({theme:e})=>e.colors.revolutionaryGold};
  }
`,J5=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({theme:e})=>e.space.xl};
`,zu=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &::before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 80px;
    color: ${({theme:e})=>e.colors.lightGray};
    font-family: Georgia, serif;
    line-height: 0;
    opacity: 0.3;
  }
`,Pu=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-style: italic;
  flex: 1;
  position: relative;
  z-index: 1;
  padding-top: ${({theme:e})=>e.space.md};
`,Au=s.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({theme:e})=>e.colors.lightGray};
  padding-top: ${({theme:e})=>e.space.md};
`,Fu=s.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
  border: 3px solid ${({theme:e})=>e.colors.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,Nu=s.div``,Lu=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Du=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,q5=s.section`
  padding: ${({theme:e})=>e.space["6xl"]} 0;
  background-color: white;
  position: relative;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.radii.xl};
  box-shadow: ${({theme:e})=>e.shadows.lg};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 20% 80%, rgba(26, 115, 232, 0.03) 0%, transparent 50%);
    z-index: 0;
  }
`,Z5=s.h2`
  font-size: clamp(2rem, 4vw, ${({theme:e})=>e.fontSizes["3xl"]});
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${({theme:e})=>e.colors.revolutionaryGold};
  }
`,eP=s.div`
  overflow-x: auto;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadows.lg};
`,tP=s.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: ${({theme:e})=>e.space.lg};
    text-align: left;
    border-bottom: 1px solid ${({theme:e})=>e.colors.lightGray};
  }
  
  th {
    background-color: ${({theme:e})=>e.colors.trustworthyNavy};
    color: white;
    font-weight: ${({theme:e})=>e.fontWeights.semiBold};
    position: relative;
    
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: 0;
      top: 25%;
      height: 50%;
      width: 1px;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
  
  tr:nth-child(even) {
    background-color: ${({theme:e})=>e.colors.background};
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  td:first-child {
    font-weight: ${({theme:e})=>e.fontWeights.semiBold};
    color: ${({theme:e})=>e.colors.trustworthyNavy};
  }
  
  td:nth-child(2) {
    color: ${({theme:e})=>e.colors.successGreen};
    font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  }
  
  tr:hover {
    background-color: rgba(26, 115, 232, 0.05);
  }
`,nP=s.div`
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.passionateCrimson}10 0%, ${({theme:e})=>e.colors.secondary}20 100%);
  padding: ${({theme:e})=>e.space["4xl"]} 0;
  border-radius: ${({theme:e})=>e.radii.xl};
  box-shadow: ${({theme:e})=>e.shadows.lg};
  overflow: hidden;
`,rP=()=>o.createElement(oP,{as:be.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},o.createElement(iP,null,o.createElement(Gy,null,o.createElement(aP,null,o.createElement(lP,null,"About TrueFans CONNECT™"),o.createElement(sP,null,"Revolutionizing the way independent artists connect with fans and venues")))),o.createElement(cP,null,o.createElement(Gy,null,o.createElement(uP,null,o.createElement(dP,null,o.createElement(It,null,"Our Vision"),o.createElement(mP,null,o.createElement(fP,{src:"https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:"Artist performing"}),o.createElement(pP,null,o.createElement("p",null,"At TrueFans CONNECT™, we believe that talented artists deserve to be supported directly by their fans, without intermediaries taking the majority of their earnings. Our platform is built on the principle that the relationship between artists and their supporters should be direct, transparent, and mutually beneficial."),o.createElement("p",null,"We're creating a revolutionary ecosystem where independent artists can thrive, venues can discover new talent, and fans can directly support the creators they love. Our mission is to democratize the music industry by putting the power back in the hands of those who create and appreciate art.")))),o.createElement(hP,null,o.createElement(It,null,"Our Story"),o.createElement(gP,null,o.createElement(vP,{src:"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:"Team collaboration"}),o.createElement(yP,null,o.createElement("p",null,"TrueFans CONNECT™ was born from a simple observation: talented independent artists struggle to make a living from their art, while large platforms and intermediaries profit from their work. Our founders, themselves musicians and industry professionals, experienced these challenges firsthand."),o.createElement("p",null,"In 2023, we set out to create a solution that would address these inequities. We built TrueFans CONNECT™ as a platform that prioritizes fair compensation, direct connections, and sustainable growth for artists. Since then, we've been on a mission to transform how independent artists build their careers and connect with their supporters.")))),o.createElement($P,null,o.createElement(It,null,"What Makes Us Different"),o.createElement(xP,null,o.createElement(Ua,null,o.createElement(Ha,null,"💰"),o.createElement(Ga,null,"Artist-First Revenue Split"),o.createElement(Ya,null,"We offer an industry-leading 80/20 revenue split in favor of artists, ensuring they keep the majority of what they earn.")),o.createElement(Ua,null,o.createElement(Ha,null,"🔄"),o.createElement(Ga,null,"Two-Tier Affiliate Program"),o.createElement(Ya,null,"Artists and venues earn 2.5% from direct referrals and another 2.5% from second-level referrals, creating passive income opportunities.")),o.createElement(Ua,null,o.createElement(Ha,null,"🏢"),o.createElement(Ga,null,"Venue Integration"),o.createElement(Ya,null,"We connect artists with venues through customizable submission forms, creating opportunities for live performances.")),o.createElement(Ua,null,o.createElement(Ha,null,"🎯"),o.createElement(Ga,null,"Multiple Donation Methods"),o.createElement(Ya,null,"Artists can receive support through embed codes, QR codes, and direct donation links, maximizing their earning potential.")))),o.createElement(EP,null,o.createElement(It,null,"Our Values"),o.createElement(wP,null,o.createElement(Qa,null,o.createElement(Ka,null,"⚖️"),o.createElement(Xa,null,o.createElement(Ja,null,"Fairness"),o.createElement(qa,null,"We believe in fair compensation for artists and transparent business practices."))),o.createElement(Qa,null,o.createElement(Ka,null,"🤝"),o.createElement(Xa,null,o.createElement(Ja,null,"Community"),o.createElement(qa,null,"We foster meaningful connections between artists, fans, and venues."))),o.createElement(Qa,null,o.createElement(Ka,null,"🚀"),o.createElement(Xa,null,o.createElement(Ja,null,"Innovation"),o.createElement(qa,null,"We continuously evolve our platform to better serve the needs of independent artists."))),o.createElement(Qa,null,o.createElement(Ka,null,"🔒"),o.createElement(Xa,null,o.createElement(Ja,null,"Trust"),o.createElement(qa,null,"We build trust through reliability, security, and consistent delivery on our promises."))))),o.createElement(bP,null,o.createElement(It,null,"Leadership Team"),o.createElement(SP,null,o.createElement(Za,null,o.createElement(el,{src:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",alt:"John Smith"}),o.createElement(tl,null,o.createElement(nl,null,"John Smith"),o.createElement(rl,null,"Co-Founder & CEO"))),o.createElement(Za,null,o.createElement(el,{src:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",alt:"Sarah Johnson"}),o.createElement(tl,null,o.createElement(nl,null,"Sarah Johnson"),o.createElement(rl,null,"Co-Founder & CTO"))),o.createElement(Za,null,o.createElement(el,{src:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",alt:"Michael Chen"}),o.createElement(tl,null,o.createElement(nl,null,"Michael Chen"),o.createElement(rl,null,"Head of Artist Relations"))),o.createElement(Za,null,o.createElement(el,{src:"https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",alt:"Emily Rodriguez"}),o.createElement(tl,null,o.createElement(nl,null,"Emily Rodriguez"),o.createElement(rl,null,"Head of Venue Partnerships"))))),o.createElement(kP,null,o.createElement(It,null,"TrueFans CONNECT™ Impact"),o.createElement(TP,null,o.createElement(ol,null,o.createElement(il,null,"10,000+"),o.createElement(al,null,"Artists on the platform")),o.createElement(ol,null,o.createElement(il,null,"500+"),o.createElement(al,null,"Venue partners")),o.createElement(ol,null,o.createElement(il,null,"$2M+"),o.createElement(al,null,"Paid to artists")),o.createElement(ol,null,o.createElement(il,null,"80%"),o.createElement(al,null,"Revenue to artists")))),o.createElement(CP,null,o.createElement(It,null,"What Artists Say"),o.createElement(zP,null,o.createElement(PP,null,'"TrueFans CONNECT™ has completely transformed my career as an independent artist. The direct support from fans and the venue connections have allowed me to focus on creating music full-time."'),o.createElement(AP,null,o.createElement(FP,{src:"https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg",alt:"Marcus Rivera"}),o.createElement(NP,null,o.createElement(LP,null,"Marcus Rivera"),o.createElement(DP,null,"Independent Artist"))))),o.createElement(RP,null,o.createElement(It,null,"Get in Touch"),o.createElement(IP,null,o.createElement(Ru,null,o.createElement(Iu,null,"📧"),o.createElement(Mu,null,"info@truefans.connect")),o.createElement(Ru,null,o.createElement(Iu,null,"📞"),o.createElement(Mu,null,"(555) 123-4567")),o.createElement(Ru,null,o.createElement(Iu,null,"📍"),o.createElement(Mu,null,"123 Music Avenue, Nashville, TN 37203"))),o.createElement(MP,{as:ce,to:"/contact"},"Contact Us")),o.createElement(BP,null,o.createElement(It,null,"Join Our Movement"),o.createElement(OP,null,o.createElement(VP,null,o.createElement("p",null,"Whether you're an artist looking to connect with fans, a venue seeking fresh talent, or a music lover wanting to support independent creators, TrueFans CONNECT™ offers a platform where everyone benefits."),o.createElement("p",null,"Join us in revolutionizing the music industry and creating a more sustainable future for independent artists.")),o.createElement(jP,null,o.createElement(Yy,{as:ce,to:"/artist-signup"},"Sign Up as an Artist"),o.createElement(Yy,{as:ce,to:"/venue-signup",variant:"secondary"},"Register Your Venue")))))))),oP=s.main`
  width: 100%;
`,Gy=s.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,iP=s.section`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  padding: ${({theme:e})=>e.space["2xl"]} 0;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${({theme:e})=>e.colors.primary};
  }
`,aP=s.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.space.xl} 0;
`,lP=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["4xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.md};
  letter-spacing: -0.5px;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  }
`,sP=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  opacity: 0.9;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fontSizes.lg};
  }
`,cP=s.section`
  padding: ${({theme:e})=>e.space["2xl"]} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,uP=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space["2xl"]};
`,It=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
  position: relative;
  padding-bottom: ${({theme:e})=>e.space.sm};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${({theme:e})=>e.colors.primary};
  }
`,dP=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,mP=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
`,pP=s.div`
  p {
    font-size: ${({theme:e})=>e.fontSizes.lg};
    color: ${({theme:e})=>e.colors.lightText};
    line-height: 1.6;
    margin-bottom: ${({theme:e})=>e.space.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,fP=s.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,hP=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,gP=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
`,yP=s.div`
  p {
    font-size: ${({theme:e})=>e.fontSizes.lg};
    color: ${({theme:e})=>e.colors.lightText};
    line-height: 1.6;
    margin-bottom: ${({theme:e})=>e.space.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,vP=s.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,$P=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,xP=s.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Ua=s.div`
  background-color: ${({theme:e})=>e.colors.background};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  transition: ${({theme:e})=>e.transitions.default};
  border-left: 4px solid ${({theme:e})=>e.colors.primary};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,Ha=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Ga=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Ya=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,EP=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,wP=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,Qa=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e})=>e.colors.background};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateX(5px);
    box-shadow: ${({theme:e})=>e.shadows.md};
  }
`,Ka=s.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.colors.primaryLight};
  border-radius: 50%;
`,Xa=s.div`
  flex: 1;
`,Ja=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,qa=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,bP=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,SP=s.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Za=s.div`
  text-align: center;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
  }
`,el=s.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({theme:e})=>e.colors.primary};
  margin: 0 auto ${({theme:e})=>e.space.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${({theme:e})=>e.shadows.md};
  }
`,tl=s.div``,nl=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,rl=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,kP=s.section`
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.trustworthyNavy} 0%, ${({theme:e})=>e.colors.trustworthyNavyLight} 100%);
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
  color: white;
  
  ${It} {
    color: white;
    
    &::after {
      background-color: ${({theme:e})=>e.colors.primary};
    }
  }
`,TP=s.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,ol=s.div`
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: ${({theme:e})=>e.space.lg};
  border-radius: ${({theme:e})=>e.radii.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.15);
  }
`,il=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.primary};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,al=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  opacity: 0.9;
`,CP=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,zP=s.div`
  background-color: ${({theme:e})=>e.colors.background};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 60px;
    color: ${({theme:e})=>e.colors.primaryLight};
    font-family: Georgia, serif;
    opacity: 0.5;
  }
`,PP=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-style: italic;
  position: relative;
  z-index: 1;
  padding-top: ${({theme:e})=>e.space.md};
  text-align: center;
`,AP=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({theme:e})=>e.colors.lightGray};
  padding-top: ${({theme:e})=>e.space.md};
`,FP=s.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
  border: 2px solid ${({theme:e})=>e.colors.primary};
`,NP=s.div``,LP=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,DP=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,RP=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
  text-align: center;
`,IP=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.lg};
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`,Ru=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.space.md};
  padding: ${({theme:e})=>e.space.sm};
  border-radius: ${({theme:e})=>e.radii.md};
  transition: ${({theme:e})=>e.transitions.default};
  background-color: ${({theme:e})=>e.colors.background};
  
  &:hover {
    transform: translateX(5px);
    background-color: ${({theme:e})=>e.colors.primaryLight};
  }
`,Iu=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.colors.primaryLight};
  border-radius: 50%;
  flex-shrink: 0;
`,Mu=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  text-align: left;
`,MP=s(Y)`
  padding: ${({theme:e})=>e.space.md} ${({theme:e})=>e.space.xl};
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  color: white;
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.trustworthyNavyLight};
  }
`,BP=s.section`
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.trustworthyNavy} 0%, ${({theme:e})=>e.colors.trustworthyNavyLight} 100%);
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
  
  ${It} {
    color: white;
    
    &::after {
      background-color: ${({theme:e})=>e.colors.primary};
    }
  }
`,OP=s.div`
  text-align: center;
`,VP=s.div`
  margin-bottom: ${({theme:e})=>e.space.lg};
  
  p {
    font-size: ${({theme:e})=>e.fontSizes.lg};
    color: white;
    line-height: 1.6;
    margin-bottom: ${({theme:e})=>e.space.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,jP=s.div`
  display: flex;
  justify-content: center;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`,Yy=s(Y)`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.xl}`};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  
  &:first-child {
    background-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.trustworthyNavy};
    
    &:hover {
      background-color: ${({theme:e})=>e.colors.primaryDark};
    }
  }
  
  &:last-child {
    background-color: transparent;
    color: white;
    border: 2px solid white;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`,WP=()=>{const[e,t]=b.useState({name:"",email:"",password:"",confirmPassword:"",genre:"",bio:"",socialLinks:{website:"",instagram:"",spotify:""},referralCode:"",acceptTerms:!1,music:[{title:"",duration:"",audioUrl:"",image:""}],upcomingShows:[{venue:"",location:"",date:"",time:"",ticketPrice:""}]}),[n,r]=b.useState(1),i=m=>{const{name:f,value:g,type:$,checked:x}=m.target;if(f.includes(".")){const[w,v]=f.split(".");t({...e,[w]:{...e[w],[v]:g}})}else t({...e,[f]:$==="checkbox"?x:g})},a=(m,f,g,$)=>{const x=[...e[m]];x[f]={...x[f],[g]:$},t({...e,[m]:x})},l=m=>{m==="music"?t({...e,music:[...e.music,{title:"",duration:"",audioUrl:"",image:""}]}):m==="upcomingShows"&&t({...e,upcomingShows:[...e.upcomingShows,{venue:"",location:"",date:"",time:"",ticketPrice:""}]})},c=(m,f)=>{const g=[...e[m]];g.splice(f,1),t({...e,[m]:g})},u=()=>{r(n+1)},d=()=>{r(n-1)},p=m=>{m.preventDefault(),console.log("Form submitted:",e),alert("Artist account created successfully!")};return o.createElement(_P,{as:be.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},o.createElement(UP,null,o.createElement(HP,null,o.createElement(GP,null,o.createElement(YP,null,o.createElement(QP,null,"Create Your Artist Account"),o.createElement(KP,null,"Start receiving support from your true fans")),o.createElement(XP,null,o.createElement(ll,{active:n>=1},"1"),o.createElement(Bu,{active:n>=2}),o.createElement(ll,{active:n>=2},"2"),o.createElement(Bu,{active:n>=3}),o.createElement(ll,{active:n>=3},"3"),o.createElement(Bu,{active:n>=4}),o.createElement(ll,{active:n>=4},"4")),o.createElement(JP,{onSubmit:p},n===1&&o.createElement(sl,{as:be.div,initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3}},o.createElement(cl,null,"Basic Information"),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:"name"},"Artist/Band Name"),o.createElement(je,{type:"text",id:"name",name:"name",value:e.name,onChange:i,placeholder:"Enter your artist or band name",required:!0})),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:"email"},"Email Address"),o.createElement(je,{type:"email",id:"email",name:"email",value:e.email,onChange:i,placeholder:"Enter your email address",required:!0})),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:"password"},"Password"),o.createElement(je,{type:"password",id:"password",name:"password",value:e.password,onChange:i,placeholder:"Create a password",required:!0})),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:"confirmPassword"},"Confirm Password"),o.createElement(je,{type:"password",id:"confirmPassword",name:"confirmPassword",value:e.confirmPassword,onChange:i,placeholder:"Confirm your password",required:!0})),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:"referralCode"},"Referral Code (Optional)"),o.createElement(je,{type:"text",id:"referralCode",name:"referralCode",value:e.referralCode,onChange:i,placeholder:"Enter referral code if you have one"}),o.createElement(ul,null,"If another artist referred you, enter their code here")),o.createElement(dl,null,o.createElement(Ou,{onClick:u},"Continue"))),n===2&&o.createElement(sl,{as:be.div,initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3}},o.createElement(cl,null,"Artist Profile"),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:"genre"},"Music Genre"),o.createElement(ZP,{id:"genre",name:"genre",value:e.genre,onChange:i,required:!0},o.createElement("option",{value:""},"Select your primary genre"),o.createElement("option",{value:"rock"},"Rock"),o.createElement("option",{value:"pop"},"Pop"),o.createElement("option",{value:"hiphop"},"Hip Hop"),o.createElement("option",{value:"rnb"},"R&B"),o.createElement("option",{value:"electronic"},"Electronic"),o.createElement("option",{value:"jazz"},"Jazz"),o.createElement("option",{value:"classical"},"Classical"),o.createElement("option",{value:"folk"},"Folk"),o.createElement("option",{value:"country"},"Country"),o.createElement("option",{value:"metal"},"Metal"),o.createElement("option",{value:"other"},"Other"))),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:"bio"},"Artist Bio"),o.createElement(e4,{id:"bio",name:"bio",value:e.bio,onChange:i,placeholder:"Tell your fans about yourself and your music",rows:"4",required:!0})),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:"website"},"Website (Optional)"),o.createElement(je,{type:"url",id:"website",name:"socialLinks.website",value:e.socialLinks.website,onChange:i,placeholder:"https://yourwebsite.com"})),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:"instagram"},"Instagram (Optional)"),o.createElement(je,{type:"text",id:"instagram",name:"socialLinks.instagram",value:e.socialLinks.instagram,onChange:i,placeholder:"@yourusername"})),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:"spotify"},"Spotify (Optional)"),o.createElement(je,{type:"text",id:"spotify",name:"socialLinks.spotify",value:e.socialLinks.spotify,onChange:i,placeholder:"Your Spotify artist link"})),o.createElement(dl,null,o.createElement(Vu,{onClick:d},"Back"),o.createElement(Ou,{onClick:u},"Continue"))),n===3&&o.createElement(sl,{as:be.div,initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3}},o.createElement(cl,null,"Your Music (Optional)"),o.createElement(ul,null,"Add tracks that fans can listen to on your profile. You can add more later."),e.music.map((m,f)=>o.createElement(n4,{key:f},o.createElement(r4,null,o.createElement(o4,null,"Track ",f+1),f>0&&o.createElement(Qy,{type:"button",onClick:()=>c("music",f)},"Remove")),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:`track-title-${f}`},"Track Title"),o.createElement(je,{type:"text",id:`track-title-${f}`,value:m.title,onChange:g=>a("music",f,"title",g.target.value),placeholder:"Enter track title"})),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:`track-duration-${f}`},"Duration"),o.createElement(je,{type:"text",id:`track-duration-${f}`,value:m.duration,onChange:g=>a("music",f,"duration",g.target.value),placeholder:"e.g. 3:42"})),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:`track-audio-${f}`},"Audio URL"),o.createElement(je,{type:"url",id:`track-audio-${f}`,value:m.audioUrl,onChange:g=>a("music",f,"audioUrl",g.target.value),placeholder:"Link to your audio file (MP3, WAV, etc.)"}),o.createElement(ul,null,"Provide a link to your audio file hosted on SoundCloud, Dropbox, Google Drive, etc.")),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:`track-image-${f}`},"Track Image URL (Optional)"),o.createElement(je,{type:"url",id:`track-image-${f}`,value:m.image,onChange:g=>a("music",f,"image",g.target.value),placeholder:"Link to track artwork image"})))),o.createElement(Ky,{type:"button",onClick:()=>l("music")},"+ Add Another Track"),o.createElement(dl,null,o.createElement(Vu,{onClick:d},"Back"),o.createElement(Ou,{onClick:u},"Continue"))),n===4&&o.createElement(sl,{as:be.div,initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3}},o.createElement(cl,null,"Upcoming Shows (Optional)"),o.createElement(ul,null,"Add your upcoming performances. You can add more or update these later."),e.upcomingShows.map((m,f)=>o.createElement(i4,{key:f},o.createElement(a4,null,o.createElement(l4,null,"Show ",f+1),f>0&&o.createElement(Qy,{type:"button",onClick:()=>c("upcomingShows",f)},"Remove")),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:`show-venue-${f}`},"Venue Name"),o.createElement(je,{type:"text",id:`show-venue-${f}`,value:m.venue,onChange:g=>a("upcomingShows",f,"venue",g.target.value),placeholder:"Enter venue name"})),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:`show-location-${f}`},"Location"),o.createElement(je,{type:"text",id:`show-location-${f}`,value:m.location,onChange:g=>a("upcomingShows",f,"location",g.target.value),placeholder:"City, State"})),o.createElement(qP,null,o.createElement(Ce,null,o.createElement(Ne,{htmlFor:`show-date-${f}`},"Date"),o.createElement(je,{type:"date",id:`show-date-${f}`,value:m.date,onChange:g=>a("upcomingShows",f,"date",g.target.value)})),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:`show-time-${f}`},"Time"),o.createElement(je,{type:"time",id:`show-time-${f}`,value:m.time,onChange:g=>a("upcomingShows",f,"time",g.target.value)}))),o.createElement(Ce,null,o.createElement(Ne,{htmlFor:`show-price-${f}`},"Ticket Price ($)"),o.createElement(je,{type:"number",id:`show-price-${f}`,value:m.ticketPrice,onChange:g=>a("upcomingShows",f,"ticketPrice",g.target.value),placeholder:"0.00",min:"0",step:"0.01"})))),o.createElement(Ky,{type:"button",onClick:()=>l("upcomingShows")},"+ Add Another Show"),o.createElement(s4,null,o.createElement(c4,null,"How It Works"),o.createElement(u4,null,o.createElement(ml,null,"You'll receive 80% of all donations from your fans"),o.createElement(ml,null,"Payments are processed securely through Stripe"),o.createElement(ml,null,"You'll get access to your donation page, QR code, and embed widget"),o.createElement(ml,null,"Funds are transferred to your bank account weekly"))),o.createElement(d4,null,o.createElement(m4,null,"Affiliate Program"),o.createElement(p4,null,o.createElement(pl,null,"You're automatically enrolled in our affiliate program"),o.createElement(pl,null,"Earn 2.5% of all donations received by artists you refer"),o.createElement(pl,null,"Earn 2.5% of all donations from artists referred by your referrals"),o.createElement(pl,null,"Your unique referral link will be available in your dashboard"))),o.createElement(Ce,null,o.createElement(f4,null,o.createElement(h4,{type:"checkbox",id:"acceptTerms",name:"acceptTerms",checked:e.acceptTerms,onChange:i,required:!0}),o.createElement(g4,{htmlFor:"acceptTerms"},"I agree to the ",o.createElement(Xy,{href:"#",target:"_blank"},"Terms of Service")," and ",o.createElement(Xy,{href:"#",target:"_blank"},"Privacy Policy")))),o.createElement(dl,null,o.createElement(Vu,{onClick:d},"Back"),o.createElement(t4,{type:"submit"},"Create Account"))))),o.createElement(y4,null,o.createElement(v4,null,"Artist Benefits"),o.createElement($4,null,o.createElement(kr,null,o.createElement(Tr,null,"💰"),o.createElement(Cr,null,o.createElement(zr,null,"Direct Fan Support"),o.createElement(Pr,null,"Receive direct financial support from your fans without a record label taking a cut. Keep 80% of all donations."))),o.createElement(kr,null,o.createElement(Tr,null,"🎵"),o.createElement(Cr,null,o.createElement(zr,null,"Music Showcase"),o.createElement(Pr,null,"Share your music directly with fans through your personalized artist profile. Upload tracks, videos, and promote upcoming shows."))),o.createElement(kr,null,o.createElement(Tr,null,"🔗"),o.createElement(Cr,null,o.createElement(zr,null,"Venue Connections"),o.createElement(Pr,null,"Get discovered by venues looking for talent. Our platform connects artists with venues seeking performers for their spaces."))),o.createElement(kr,null,o.createElement(Tr,null,"📊"),o.createElement(Cr,null,o.createElement(zr,null,"Fan Analytics"),o.createElement(Pr,null,"Gain insights into your audience with detailed analytics. Track listener demographics, popular tracks, and donation patterns."))),o.createElement(kr,null,o.createElement(Tr,null,"🌐"),o.createElement(Cr,null,o.createElement(zr,null,"Promotional Tools"),o.createElement(Pr,null,"Access customizable widgets, QR codes, and social media integration to promote your music and collect support across platforms."))),o.createElement(kr,null,o.createElement(Tr,null,"👥"),o.createElement(Cr,null,o.createElement(zr,null,"Artist Community"),o.createElement(Pr,null,"Connect with other independent artists, collaborate on projects, and share resources within our growing community.")))),o.createElement(x4,null,o.createElement(E4,null,o.createElement(w4,null,`"TrueFans has completely changed how I connect with my audience. I've been able to fund my latest EP entirely through fan donations, and the venue connections helped me book my first mini-tour!"`),o.createElement(b4,null,o.createElement(S4,{src:"https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",alt:"Sarah Martinez"}),o.createElement(k4,null,o.createElement(T4,null,"Sarah Martinez"),o.createElement(C4,null,"Independent Singer-Songwriter")))))))))},_P=s.main`
  width: 100%;
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,UP=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,HP=s.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,GP=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  padding: ${({theme:e})=>e.space.xl};
`,YP=s.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,QP=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,KP=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
`,XP=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,ll=s.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({theme:e,active:t})=>t?e.colors.primary:e.colors.lightGray};
  color: ${({theme:e,active:t})=>t?e.colors.trustworthyNavy:e.colors.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  transition: ${({theme:e})=>e.transitions.default};
`,Bu=s.div`
  height: 3px;
  width: 60px;
  background-color: ${({theme:e,active:t})=>t?e.colors.primary:e.colors.lightGray};
  transition: ${({theme:e})=>e.transitions.default};
`,JP=s.form`
  width: 100%;
`,sl=s.div`
  width: 100%;
`,cl=s.h2`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,Ce=s.div`
  margin-bottom: ${({theme:e})=>e.space.lg};
`,qP=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Ne=s.label`
  display: block;
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,je=s.input`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>`${e.colors.primary}33`};
  }
`,ul=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  margin-top: ${({theme:e})=>e.space.xs};
`,ZP=s.select`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>`${e.colors.primary}33`};
  }
`,e4=s.textarea`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  resize: vertical;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>`${e.colors.primary}33`};
  }
`,dl=s.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({theme:e})=>e.space.xl};
`,Ou=s(Y)`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.xl}`};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,Vu=s(Y)`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.xl}`};
  background-color: transparent;
  color: ${({theme:e})=>e.colors.darkText};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.lightGray};
  }
`,t4=s(Y)`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.xl}`};
  background-color: ${({theme:e})=>e.colors.secondary};
  color: white;
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.secondaryDark};
  }
`,n4=s.div`
  background-color: ${({theme:e})=>e.colors.background};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
  border-left: 3px solid ${({theme:e})=>e.colors.primary};
`,r4=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.space.md};
`,o4=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,i4=s.div`
  background-color: ${({theme:e})=>e.colors.background};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
  border-left: 3px solid ${({theme:e})=>e.colors.trustworthyNavy};
`,a4=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.space.md};
`,l4=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,Qy=s.button`
  background-color: transparent;
  color: ${({theme:e})=>e.colors.danger};
  border: none;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    text-decoration: underline;
  }
`,Ky=s.button`
  background-color: transparent;
  color: ${({theme:e})=>e.colors.primary};
  border: 1px dashed ${({theme:e})=>e.colors.primary};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
  width: 100%;
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  margin-bottom: ${({theme:e})=>e.space.xl};
  
  &:hover {
    background-color: ${({theme:e})=>`${e.colors.primary}10`};
  }
`,s4=s.div`
  background-color: ${({theme:e})=>e.colors.lightGray};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,c4=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,u4=s.ul`
  padding-left: ${({theme:e})=>e.space.lg};
`,ml=s.li`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`,d4=s.div`
  background-color: ${({theme:e})=>e.colors.primary+"15"};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
  border-left: 4px solid ${({theme:e})=>e.colors.primary};
`,m4=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,p4=s.ul`
  padding-left: ${({theme:e})=>e.space.lg};
`,pl=s.li`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`,f4=s.div`
  display: flex;
  align-items: flex-start;
`,h4=s.input`
  margin-top: 4px;
  margin-right: ${({theme:e})=>e.space.sm};
`,g4=s.label`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,Xy=s.a`
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,y4=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    margin-top: ${({theme:e})=>e.space.xl};
  }
`,v4=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,$4=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,kr=s.div`
  display: flex;
  align-items: flex-start;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,Tr=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-right: ${({theme:e})=>e.space.md};
  flex-shrink: 0;
`,Cr=s.div`
  flex: 1;
`,zr=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Pr=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,x4=s.div`
  margin-top: ${({theme:e})=>e.space.md};
`,E4=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 60px;
    color: ${({theme:e})=>e.colors.primaryLight};
    font-family: Georgia, serif;
    opacity: 0.5;
  }
`,w4=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-style: italic;
  position: relative;
  z-index: 1;
  padding-top: ${({theme:e})=>e.space.md};
`,b4=s.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({theme:e})=>e.colors.lightGray};
  padding-top: ${({theme:e})=>e.space.md};
`,S4=s.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
  border: 2px solid ${({theme:e})=>e.colors.primary};
`,k4=s.div``,T4=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,C4=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,z4={initial:{opacity:0},in:{opacity:1},out:{opacity:0}},P4={type:"tween",ease:"easeInOut",duration:.3},uh=({children:e})=>o.createElement(A4,{initial:"initial",animate:"in",exit:"out",variants:z4,transition:P4},e),A4=s(be.main)`
  width: 100%;
  min-height: calc(100vh - 200px); /* Adjust based on header/footer heights */
`,F4=()=>{const[e,t]=b.useState({venueName:"",contactName:"",email:"",phone:"",address:"",city:"",state:"",zip:"",venueType:"bar",capacity:"",description:"",website:"",socialMedia:"",agreeToTerms:!1}),[n,r]=b.useState(!1),i=l=>{const{name:c,value:u,type:d,checked:p}=l.target;t(m=>({...m,[c]:d==="checkbox"?p:u}))},a=l=>{l.preventDefault(),console.log("Form submitted:",e),r(!0),t({venueName:"",contactName:"",email:"",phone:"",address:"",city:"",state:"",zip:"",venueType:"bar",capacity:"",description:"",website:"",socialMedia:"",agreeToTerms:!1})};return o.createElement(uh,null,o.createElement(N4,null,o.createElement(Jy,null,o.createElement(L4,null,o.createElement(D4,null,"Register Your Venue"),o.createElement(R4,null,"Join our network of venues and discover talented independent artists")))),o.createElement(I4,null,o.createElement(Jy,null,o.createElement(M4,null,o.createElement(B4,null,o.createElement(qy,null,"Venue Registration"),n?o.createElement(Y4,null,o.createElement(Q4,null,"✓"),o.createElement(K4,null,o.createElement(X4,null,"Registration Successful!"),o.createElement(J4,null,"Thank you for registering your venue with TrueFans CONNECT™. Our team will review your information and contact you shortly to complete the setup process."))):o.createElement(O4,{onSubmit:a},o.createElement(ri,null,o.createElement(fl,null,"Venue Information"),o.createElement(ft,null,o.createElement(ht,{htmlFor:"venueName"},"Venue Name *"),o.createElement(Ht,{type:"text",id:"venueName",name:"venueName",value:e.venueName,onChange:i,required:!0})),o.createElement(ju,null,o.createElement(ft,null,o.createElement(ht,{htmlFor:"venueType"},"Venue Type *"),o.createElement(V4,{id:"venueType",name:"venueType",value:e.venueType,onChange:i,required:!0},o.createElement("option",{value:"bar"},"Bar/Pub"),o.createElement("option",{value:"club"},"Club"),o.createElement("option",{value:"concert-hall"},"Concert Hall"),o.createElement("option",{value:"restaurant"},"Restaurant"),o.createElement("option",{value:"cafe"},"Café"),o.createElement("option",{value:"theater"},"Theater"),o.createElement("option",{value:"outdoor"},"Outdoor Venue"),o.createElement("option",{value:"other"},"Other"))),o.createElement(ft,null,o.createElement(ht,{htmlFor:"capacity"},"Capacity"),o.createElement(Ht,{type:"number",id:"capacity",name:"capacity",value:e.capacity,onChange:i,placeholder:"Approximate"}))),o.createElement(ft,null,o.createElement(ht,{htmlFor:"description"},"Venue Description *"),o.createElement(Zy,{id:"description",name:"description",value:e.description,onChange:i,rows:"4",required:!0,placeholder:"Tell us about your venue, the types of music you feature, and your audience"}))),o.createElement(ri,null,o.createElement(fl,null,"Contact Information"),o.createElement(ft,null,o.createElement(ht,{htmlFor:"contactName"},"Contact Name *"),o.createElement(Ht,{type:"text",id:"contactName",name:"contactName",value:e.contactName,onChange:i,required:!0})),o.createElement(ju,null,o.createElement(ft,null,o.createElement(ht,{htmlFor:"email"},"Email Address *"),o.createElement(Ht,{type:"email",id:"email",name:"email",value:e.email,onChange:i,required:!0})),o.createElement(ft,null,o.createElement(ht,{htmlFor:"phone"},"Phone Number *"),o.createElement(Ht,{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:i,required:!0})))),o.createElement(ri,null,o.createElement(fl,null,"Venue Location"),o.createElement(ft,null,o.createElement(ht,{htmlFor:"address"},"Street Address *"),o.createElement(Ht,{type:"text",id:"address",name:"address",value:e.address,onChange:i,required:!0})),o.createElement(ju,null,o.createElement(ft,null,o.createElement(ht,{htmlFor:"city"},"City *"),o.createElement(Ht,{type:"text",id:"city",name:"city",value:e.city,onChange:i,required:!0})),o.createElement(ft,null,o.createElement(ht,{htmlFor:"state"},"State/Province *"),o.createElement(Ht,{type:"text",id:"state",name:"state",value:e.state,onChange:i,required:!0})),o.createElement(ft,null,o.createElement(ht,{htmlFor:"zip"},"ZIP/Postal Code *"),o.createElement(Ht,{type:"text",id:"zip",name:"zip",value:e.zip,onChange:i,required:!0})))),o.createElement(ri,null,o.createElement(fl,null,"Online Presence"),o.createElement(ft,null,o.createElement(ht,{htmlFor:"website"},"Website"),o.createElement(Ht,{type:"url",id:"website",name:"website",value:e.website,onChange:i,placeholder:"https://"})),o.createElement(ft,null,o.createElement(ht,{htmlFor:"socialMedia"},"Social Media Links"),o.createElement(Zy,{id:"socialMedia",name:"socialMedia",value:e.socialMedia,onChange:i,rows:"3",placeholder:"Instagram, Facebook, Twitter, etc. (one per line)"}))),o.createElement(ri,null,o.createElement(j4,null,o.createElement(W4,{type:"checkbox",id:"agreeToTerms",name:"agreeToTerms",checked:e.agreeToTerms,onChange:i,required:!0}),o.createElement(_4,{htmlFor:"agreeToTerms"},"I agree to the ",o.createElement(U4,{to:"/terms"},"Terms of Service")," and ",o.createElement(H4,{to:"/privacy"},"Privacy Policy")," *"))),o.createElement(G4,{type:"submit"},"Register Venue"))),o.createElement(q4,null,o.createElement(qy,null,"Venue Benefits"),o.createElement(Z4,null,o.createElement(Ar,null,o.createElement(Fr,null,"🎵"),o.createElement(Nr,null,o.createElement(Lr,null,"Access to Talented Artists"),o.createElement(Dr,null,"Connect with a diverse pool of independent artists across various genres, all vetted for quality and professionalism."))),o.createElement(Ar,null,o.createElement(Fr,null,"📋"),o.createElement(Nr,null,o.createElement(Lr,null,"Customizable Submission Forms"),o.createElement(Dr,null,"Create branded artist submission forms tailored to your venue's specific requirements and booking process."))),o.createElement(Ar,null,o.createElement(Fr,null,"💰"),o.createElement(Nr,null,o.createElement(Lr,null,"Affiliate Revenue"),o.createElement(Dr,null,"Earn 2.5% from artists you refer to the platform, plus an additional 2.5% from their referrals, creating a passive income stream."))),o.createElement(Ar,null,o.createElement(Fr,null,"📊"),o.createElement(Nr,null,o.createElement(Lr,null,"Analytics Dashboard"),o.createElement(Dr,null,"Track submission metrics, audience demographics, and performance data to make informed booking decisions."))),o.createElement(Ar,null,o.createElement(Fr,null,"🔍"),o.createElement(Nr,null,o.createElement(Lr,null,"Artist Discovery Tools"),o.createElement(Dr,null,"Search and filter artists by genre, location, audience size, and more to find the perfect fit for your venue."))),o.createElement(Ar,null,o.createElement(Fr,null,"📱"),o.createElement(Nr,null,o.createElement(Lr,null,"Venue Profile"),o.createElement(Dr,null,"Showcase your venue to artists and music fans with a professional profile page highlighting your space and events.")))),o.createElement(e6,null,o.createElement(t6,null,o.createElement(n6,null,`"TrueFans CONNECT™ has transformed our booking process. We've discovered amazing talent we wouldn't have found otherwise, and our audiences love the fresh, diverse lineup of artists."`),o.createElement(r6,null,o.createElement(o6,{src:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",alt:"James Wilson"}),o.createElement(i6,null,o.createElement(a6,null,"James Wilson"),o.createElement(l6,null,"Booking Manager, The Sound Lounge"))))),o.createElement(s6,null,o.createElement(c6,null,"Need Help?"),o.createElement(u6,null,"Our venue support team is available to answer any questions and guide you through the registration process."),o.createElement(d6,null,o.createElement(m6,{href:"mailto:venues@truefans.connect"},"venues@truefans.connect"),o.createElement(p6,{href:"tel:+15551234567"},"(555) 123-4567"))))))))},N4=s.section`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  padding: ${({theme:e})=>e.space.xl} 0;
  color: white;
`,Jy=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,L4=s.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`,D4=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.md};
`,R4=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  opacity: 0.9;
  line-height: 1.5;
`,I4=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,M4=s.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,qy=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,fl=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
  padding-bottom: ${({theme:e})=>e.space.xs};
  border-bottom: 1px solid ${({theme:e})=>e.colors.lightGray};
`,B4=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,O4=s.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.lg};
`,ri=s.div``,ft=s.div`
  margin-bottom: ${({theme:e})=>e.space.md};
`,ju=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.space.md};
`,ht=s.label`
  display: block;
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Ht=s.input`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>`${e.colors.primary}33`};
  }
`,V4=s.select`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>`${e.colors.primary}33`};
  }
`,Zy=s.textarea`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>`${e.colors.primary}33`};
  }
`,j4=s.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({theme:e})=>e.space.md};
`,W4=s.input`
  margin-top: 5px;
  margin-right: ${({theme:e})=>e.space.sm};
`,_4=s.label`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.4;
`,U4=s(ce)`
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,H4=s(ce)`
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,G4=s(Y)`
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  padding: ${({theme:e})=>e.space.md};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
    text-decoration: none;
  }
`,Y4=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({theme:e})=>e.space.xl} 0;
`,Q4=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: ${({theme:e})=>e.colors.success};
  color: white;
  border-radius: 50%;
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,K4=s.div``,X4=s.h3`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,J4=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
  max-width: 600px;
`,q4=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
`,Z4=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,Ar=s.div`
  display: flex;
  align-items: flex-start;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,Fr=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-right: ${({theme:e})=>e.space.md};
  flex-shrink: 0;
`,Nr=s.div`
  flex: 1;
`,Lr=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Dr=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,e6=s.div`
  margin-top: ${({theme:e})=>e.space.md};
`,t6=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 60px;
    color: ${({theme:e})=>e.colors.primaryLight};
    font-family: Georgia, serif;
    opacity: 0.5;
  }
`,n6=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-style: italic;
  position: relative;
  z-index: 1;
  padding-top: ${({theme:e})=>e.space.md};
`,r6=s.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({theme:e})=>e.colors.lightGray};
  padding-top: ${({theme:e})=>e.space.md};
`,o6=s.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
  border: 2px solid ${({theme:e})=>e.colors.primary};
`,i6=s.div``,a6=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,l6=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,s6=s.div`
  background-color: ${({theme:e})=>e.colors.primaryLight};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  text-align: center;
`,c6=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,u6=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.5;
  margin-bottom: ${({theme:e})=>e.space.md};
`,d6=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.sm};
`,m6=s.a`
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  
  &:hover {
    text-decoration: underline;
  }
`,p6=s.a`
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  
  &:hover {
    text-decoration: underline;
  }
`,f6=()=>{const[e,t]=b.useState("overview"),[n,r]=b.useState(null),i=(a,l)=>{navigator.clipboard.writeText(a).then(()=>{r(l),setTimeout(()=>r(null),2e3)}).catch(c=>{console.error("Failed to copy: ",c)})};return o.createElement(h6,{as:be.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},o.createElement(g6,null,o.createElement(y6,null,o.createElement(v6,null,"Donation System"),o.createElement($6,null,"Multiple ways for your fans to support your music")),o.createElement(x6,null,o.createElement(hl,{active:e==="overview",onClick:()=>t("overview")},"Overview"),o.createElement(hl,{active:e==="donation-link",onClick:()=>t("donation-link")},"Donation Link"),o.createElement(hl,{active:e==="qr-code",onClick:()=>t("qr-code")},"QR Code"),o.createElement(hl,{active:e==="embed-widget",onClick:()=>t("embed-widget")},"Embed Widget")),o.createElement(E6,null,e==="overview"&&o.createElement(w6,null,o.createElement(b6,null,o.createElement(Wu,null,o.createElement(_u,null,"🔗"),o.createElement(Uu,null,"Donation Link"),o.createElement(Hu,null,"Share a direct link to your donation page on social media, in emails, or on your website."),o.createElement(Gu,{onClick:()=>t("donation-link")},"View Details")),o.createElement(Wu,null,o.createElement(_u,null,"📱"),o.createElement(Uu,null,"QR Code"),o.createElement(Hu,null,"Display a QR code at live shows, on merch, or on physical promotional materials."),o.createElement(Gu,{onClick:()=>t("qr-code")},"View Details")),o.createElement(Wu,null,o.createElement(_u,null,"💻"),o.createElement(Uu,null,"Embed Widget"),o.createElement(Hu,null,"Add a donation widget directly to your website or blog with simple embed code."),o.createElement(Gu,{onClick:()=>t("embed-widget")},"View Details"))),o.createElement(S6,null,o.createElement(e0,null,"How It Works"),o.createElement(k6,null,o.createElement(gl,null,o.createElement(yl,null,"1"),o.createElement(vl,null,o.createElement($l,null,"Choose Your Method"),o.createElement(xl,null,"Select from donation link, QR code, or embed widget based on your needs."))),o.createElement(gl,null,o.createElement(yl,null,"2"),o.createElement(vl,null,o.createElement($l,null,"Share With Your Fans"),o.createElement(xl,null,"Distribute your chosen donation method through social media, at shows, or on your website."))),o.createElement(gl,null,o.createElement(yl,null,"3"),o.createElement(vl,null,o.createElement($l,null,"Fans Make Donations"),o.createElement(xl,null,"Supporters can easily contribute any amount to help fund your music."))),o.createElement(gl,null,o.createElement(yl,null,"4"),o.createElement(vl,null,o.createElement($l,null,"Receive Your Funds"),o.createElement(xl,null,"80% of donations go directly to you, with weekly transfers to your bank account."))))),o.createElement(T6,null,o.createElement(e0,null,"Frequently Asked Questions"),o.createElement(C6,null,o.createElement(oi,null,o.createElement(ii,null,"What percentage of donations do I receive?"),o.createElement(ai,null,"You receive 80% of all donations. The remaining 20% helps us maintain and improve the platform.")),o.createElement(oi,null,o.createElement(ii,null,"How quickly will I receive my funds?"),o.createElement(ai,null,"Funds are transferred to your connected bank account on a weekly basis, every Monday.")),o.createElement(oi,null,o.createElement(ii,null,"Can fans leave messages with their donations?"),o.createElement(ai,null,"Yes! Supporters can include a personal message when they make a donation.")),o.createElement(oi,null,o.createElement(ii,null,"Is there a minimum donation amount?"),o.createElement(ai,null,"The minimum donation amount is $1, but you can suggest recommended amounts.")),o.createElement(oi,null,o.createElement(ii,null,"Can I customize the donation page?"),o.createElement(ai,null,"Yes, you can customize colors, images, and suggested donation amounts to match your brand."))))),e==="donation-link"&&o.createElement(z6,null,o.createElement(Yu,null,o.createElement(Qu,null,"🔗"),o.createElement(Ku,null,"Donation Link"),o.createElement(Xu,null,"Share this link anywhere to let fans support you directly")),o.createElement(P6,null,o.createElement(A6,null,o.createElement(F6,null,"https://truefans.connect/donate/sarahjohnson"),o.createElement(t0,{onClick:()=>i("https://truefans.connect/donate/sarahjohnson","link")},n==="link"?"Copied!":"Copy")),o.createElement(N6,null,"This is your unique donation link that never expires")),o.createElement(L6,null,o.createElement(Rr,null,"Share Your Link"),o.createElement(D6,null,o.createElement(Ju,null,o.createElement(qu,null,"📱"),o.createElement(Zu,null,"Social Media"),o.createElement(ed,null,"Post your donation link on Instagram, Twitter, Facebook, or TikTok"),o.createElement(td,null,"Share Now")),o.createElement(Ju,null,o.createElement(qu,null,"✉️"),o.createElement(Zu,null,"Email Newsletter"),o.createElement(ed,null,"Include your donation link in emails to your fan mailing list"),o.createElement(td,null,"Copy for Email")),o.createElement(Ju,null,o.createElement(qu,null,"🌐"),o.createElement(Zu,null,"Your Website"),o.createElement(ed,null,"Add your donation link to your personal website or bio pages"),o.createElement(td,null,"Copy HTML")))),o.createElement(R6,null,o.createElement(Rr,null,"Tips for Success"),o.createElement(I6,null,o.createElement(El,null,o.createElement(wl,null,"💡"),o.createElement(bl,null,o.createElement(Sl,null,"Be Specific"),o.createElement(kl,null,"Tell fans exactly what their donations will help fund (new album, tour, equipment)"))),o.createElement(El,null,o.createElement(wl,null,"🎯"),o.createElement(bl,null,o.createElement(Sl,null,"Set Goals"),o.createElement(kl,null,"Share specific funding goals to motivate fans to contribute"))),o.createElement(El,null,o.createElement(wl,null,"🙏"),o.createElement(bl,null,o.createElement(Sl,null,"Show Gratitude"),o.createElement(kl,null,"Publicly thank supporters to encourage more donations"))),o.createElement(El,null,o.createElement(wl,null,"🔄"),o.createElement(bl,null,o.createElement(Sl,null,"Regular Updates"),o.createElement(kl,null,"Share your link regularly with updates on your progress")))))),e==="qr-code"&&o.createElement(M6,null,o.createElement(Yu,null,o.createElement(Qu,null,"📱"),o.createElement(Ku,null,"QR Code"),o.createElement(Xu,null,"Perfect for live shows, merch tables, and physical promotional materials")),o.createElement(B6,null,o.createElement(O6,{src:"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://truefans.connect/donate/sarahjohnson",alt:"Donation QR Code"}),o.createElement(V6,null,o.createElement(nd,null,"Download PNG"),o.createElement(nd,null,"Download SVG"),o.createElement(nd,null,"Download PDF"))),o.createElement(j6,null,o.createElement(Rr,null,"Ways to Use Your QR Code"),o.createElement(W6,null,o.createElement(Tl,null,o.createElement(Cl,null,"🎸"),o.createElement(zl,null,"At Live Shows"),o.createElement(Pl,null,"Display your QR code at your merch table, on stage screens, or on small cards handed out to fans")),o.createElement(Tl,null,o.createElement(Cl,null,"👕"),o.createElement(zl,null,"On Merchandise"),o.createElement(Pl,null,"Print your QR code on t-shirts, stickers, album covers, or other merchandise")),o.createElement(Tl,null,o.createElement(Cl,null,"📃"),o.createElement(zl,null,"Promotional Materials"),o.createElement(Pl,null,"Include your QR code on posters, flyers, business cards, and press kits")),o.createElement(Tl,null,o.createElement(Cl,null,"📺"),o.createElement(zl,null,"Video Content"),o.createElement(Pl,null,"Display your QR code at the end of music videos or live stream performances")))),o.createElement(n0,null,o.createElement(Rr,null,"Customize Your QR Code"),o.createElement(_6,null,o.createElement(rd,null,o.createElement(od,null,"QR Code Color"),o.createElement(id,null,o.createElement(Ze,{color:"#000000",selected:!0}),o.createElement(Ze,{color:"#1A2B4C"}),o.createElement(Ze,{color:"#FFD700"}),o.createElement(Ze,{color:"#FF6B6B"}),o.createElement(Ze,{color:"#4CAF50"}))),o.createElement(rd,null,o.createElement(od,null,"Background Color"),o.createElement(id,null,o.createElement(Ze,{color:"#FFFFFF",selected:!0}),o.createElement(Ze,{color:"#F9F9F9"}),o.createElement(Ze,{color:"#F0F0F0"}),o.createElement(Ze,{color:"#FFFDF0"}),o.createElement(Ze,{color:"#F0FFF0"}))),o.createElement(rd,null,o.createElement(od,null,"Add Logo"),o.createElement(U6,null,o.createElement(H6,null,"Upload Logo"),o.createElement(G6,null,"Recommended: 200x200px PNG with transparency")))),o.createElement(r0,null,"Update QR Code"))),e==="embed-widget"&&o.createElement(Y6,null,o.createElement(Yu,null,o.createElement(Qu,null,"💻"),o.createElement(Ku,null,"Embed Widget"),o.createElement(Xu,null,"Add a donation widget directly to your website or blog")),o.createElement(Q6,null,o.createElement(K6,null,o.createElement(X6,null,"Support Sarah Johnson"),o.createElement(J6,null,'Help fund my new album "Midnight in New Orleans"'),o.createElement(q6,null,o.createElement(li,null,"$5"),o.createElement(li,{selected:!0},"$10"),o.createElement(li,null,"$25"),o.createElement(li,null,"$50"),o.createElement(li,null,"Custom")),o.createElement(Z6,null,"Support Now"))),o.createElement(eA,null,o.createElement(Rr,null,"Embed Code"),o.createElement(tA,null,o.createElement(nA,null,'<iframe src="https://truefans.connect/widget/sarahjohnson" width="300" height="400" frameborder="0"></iframe>'),o.createElement(t0,{onClick:()=>i('<iframe src="https://truefans.connect/widget/sarahjohnson" width="300" height="400" frameborder="0"></iframe>',"embed")},n==="embed"?"Copied!":"Copy")),o.createElement(rA,null,o.createElement(oA,null,"How to use:"),o.createElement(iA,null,o.createElement(ad,null,"Copy the code above"),o.createElement(ad,null,"Paste it into the HTML of your website where you want the widget to appear"),o.createElement(ad,null,"Adjust the width and height values if needed to fit your site")))),o.createElement(n0,null,o.createElement(Rr,null,"Customize Your Widget"),o.createElement(aA,null,o.createElement(ld,null,o.createElement(Ir,null,o.createElement(Mr,null,"Widget Title"),o.createElement(Al,{type:"text",defaultValue:"Support Sarah Johnson"})),o.createElement(Ir,null,o.createElement(Mr,null,"Description"),o.createElement(Al,{type:"text",defaultValue:"Help fund my new album"}))),o.createElement(ld,null,o.createElement(Ir,null,o.createElement(Mr,null,"Button Text"),o.createElement(Al,{type:"text",defaultValue:"Support Now"})),o.createElement(Ir,null,o.createElement(Mr,null,"Button Color"),o.createElement(id,null,o.createElement(Ze,{color:"#FF6B6B",selected:!0}),o.createElement(Ze,{color:"#FFD700"}),o.createElement(Ze,{color:"#4CAF50"}),o.createElement(Ze,{color:"#1A2B4C"}),o.createElement(Ze,{color:"#9C27B0"})))),o.createElement(ld,null,o.createElement(Ir,null,o.createElement(Mr,null,"Suggested Amounts"),o.createElement(Al,{type:"text",defaultValue:"5, 10, 25, 50"}),o.createElement(lA,null,"Comma-separated values")),o.createElement(Ir,null,o.createElement(Mr,null,"Widget Size"),o.createElement(sA,{defaultValue:"medium"},o.createElement("option",{value:"small"},"Small"),o.createElement("option",{value:"medium"},"Medium"),o.createElement("option",{value:"large"},"Large")))),o.createElement(r0,null,"Update Widget")))))))},h6=s.main`
  width: 100%;
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,g6=s.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,y6=s.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,v6=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,$6=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.lightText};
`,x6=s.div`
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.colors.mediumGray};
  margin-bottom: ${({theme:e})=>e.space.xl};
  overflow-x: auto;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`,hl=s.button`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.lg}`};
  background-color: transparent;
  border: none;
  border-bottom: 3px solid ${({theme:e,active:t})=>t?e.colors.primary:"transparent"};
  color: ${({theme:e,active:t})=>t?e.colors.darkText:e.colors.lightText};
  font-weight: ${({theme:e,active:t})=>t?e.fontWeights.semiBold:e.fontWeights.medium};
  font-size: ${({theme:e})=>e.fontSizes.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  white-space: nowrap;
  
  &:hover {
    color: ${({theme:e})=>e.colors.darkText};
  }
`,E6=s.div`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,w6=s.div``,b6=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.xl};
`,Wu=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  text-align: center;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,_u=s.div`
  font-size: ${({theme:e})=>e.fontSizes["4xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Uu=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Hu=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,Gu=s(Y)`
  padding: ${({theme:e})=>`${e.space.sm} ${e.space.lg}`};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,S6=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,e0=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
  text-align: center;
`,k6=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.lg};
`,gl=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.space.lg};
`,yl=s.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  flex-shrink: 0;
`,vl=s.div`
  flex: 1;
`,$l=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,xl=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,T6=s.section``,C6=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,oi=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,ii=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,ai=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,z6=s.div``,Yu=s.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,Qu=s.div`
  font-size: ${({theme:e})=>e.fontSizes["4xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Ku=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Xu=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
`,P6=s.div`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,A6=s.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,F6=s.div`
  flex: 1;
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  font-family: monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,t0=s(Y)`
  padding: ${({theme:e})=>`${e.space.xs} ${e.space.md}`};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,N6=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  font-style: italic;
`,L6=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,Rr=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,D6=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,Ju=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  text-align: center;
`,qu=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Zu=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,ed=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,td=s(Y)`
  padding: ${({theme:e})=>`${e.space.sm} ${e.space.lg}`};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,R6=s.section``,I6=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,El=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.space.md};
`,wl=s.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  flex-shrink: 0;
`,bl=s.div`
  flex: 1;
`,Sl=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,kl=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,M6=s.div``,B6=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,O6=s.img`
  width: 200px;
  height: 200px;
  margin-bottom: ${({theme:e})=>e.space.lg};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  padding: ${({theme:e})=>e.space.md};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
`,V6=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,nd=s(Y)`
  padding: ${({theme:e})=>`${e.space.sm} ${e.space.lg}`};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,j6=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,W6=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,Tl=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  text-align: center;
`,Cl=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,zl=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Pl=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,n0=s.section``,_6=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,rd=s.div``,od=s.label`
  display: block;
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,id=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.sm};
  flex-wrap: wrap;
`,Ze=s.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({color:e})=>e};
  border: 2px solid ${({theme:e,selected:t})=>t?e.colors.darkText:"transparent"};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: scale(1.1);
  }
`,U6=s.div``,H6=s(Y)`
  padding: ${({theme:e})=>`${e.space.sm} ${e.space.lg}`};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  margin-bottom: ${({theme:e})=>e.space.sm};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,G6=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkGray};
`,r0=s(Y)`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.xl}`};
  background-color: ${({theme:e})=>e.colors.secondary};
  color: white;
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  display: block;
  margin: 0 auto;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.secondaryDark};
  }
`,Y6=s.div``,Q6=s.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,K6=s.div`
  width: 300px;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,X6=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
  text-align: center;
`,J6=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.lg};
  text-align: center;
`,q6=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.space.sm};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,li=s.button`
  padding: ${({theme:e})=>e.space.sm};
  background-color: ${({theme:e,selected:t})=>t?e.colors.primary:e.colors.lightGray};
  color: ${({theme:e,selected:t})=>t?e.colors.trustworthyNavy:e.colors.darkText};
  border: none;
  border-radius: ${({theme:e})=>e.radii.sm};
  font-weight: ${({theme:e,selected:t})=>t?e.fontWeights.semiBold:e.fontWeights.medium};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.trustworthyNavy};
  }
`,Z6=s(Y)`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e})=>e.colors.secondary};
  color: white;
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.secondaryDark};
  }
`,eA=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,tA=s.div`
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.md};
  overflow-x: auto;
`,nA=s.code`
  flex: 1;
  font-family: monospace;
  color: white;
  white-space: pre;
`,rA=s.div`
  background-color: ${({theme:e})=>e.colors.lightGray};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
`,oA=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,iA=s.ul`
  padding-left: ${({theme:e})=>e.space.lg};
`,ad=s.li`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.xs};
  
  &:last-child {
    margin-bottom: 0;
  }
`,aA=s.form`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,ld=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
  
  &:last-of-type {
    margin-bottom: ${({theme:e})=>e.space.xl};
  }
`,Ir=s.div``,Mr=s.label`
  display: block;
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Al=s.input`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>`${e.colors.primary}33`};
  }
`,lA=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  margin-top: ${({theme:e})=>e.space.xs};
`,sA=s.select`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>`${e.colors.primary}33`};
  }
`,cA=()=>{const[e,t]=b.useState("overview"),[n,r]=b.useState(null),i=(a,l)=>{navigator.clipboard.writeText(a).then(()=>{r(l),setTimeout(()=>r(null),2e3)}).catch(c=>{console.error("Failed to copy: ",c)})};return o.createElement(uA,{as:be.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},o.createElement(dA,null,o.createElement(mA,null,o.createElement(pA,null,"Artist Affiliate Program"),o.createElement(fA,null,"Earn additional income by referring other artists to TrueFans CONNECT")),o.createElement(hA,null,o.createElement(Fl,{active:e==="overview",onClick:()=>t("overview")},"Overview"),o.createElement(Fl,{active:e==="how-it-works",onClick:()=>t("how-it-works")},"How It Works"),o.createElement(Fl,{active:e==="referral-tools",onClick:()=>t("referral-tools")},"Referral Tools"),o.createElement(Fl,{active:e==="earnings",onClick:()=>t("earnings")},"Your Earnings")),o.createElement(gA,null,e==="overview"&&o.createElement(yA,null,o.createElement(vA,null,o.createElement(sd,null,o.createElement(cd,null,"💰"),o.createElement(ud,null,"Two-Tier Earnings"),o.createElement(dd,null,"Earn 2.5% of all donations received by artists you refer, plus 2.5% from artists they refer.")),o.createElement(sd,null,o.createElement(cd,null,"🔄"),o.createElement(ud,null,"Passive Income"),o.createElement(dd,null,"Continue earning as long as your referred artists receive donations on the platform.")),o.createElement(sd,null,o.createElement(cd,null,"🌐"),o.createElement(ud,null,"Easy Sharing"),o.createElement(dd,null,"Share your unique referral link via email, social media, or in person at shows and events."))),o.createElement($A,null,o.createElement(xA,null,"Why Join Our Affiliate Program?"),o.createElement(EA,null,o.createElement("p",null,"As an artist on TrueFans CONNECT, you're automatically enrolled in our affiliate program. This means you can start earning additional income by referring other artists to the platform."),o.createElement("p",null,"Our two-tier affiliate structure rewards you not only for direct referrals but also for the artists they bring on board. This creates a sustainable income stream that grows with your network."),o.createElement("p",null,"The best part? There's no cap on how many artists you can refer or how much you can earn. The more successful your referred artists become, the more you earn."))),o.createElement(wA,null,o.createElement(md,null,o.createElement(pd,null,"$127,500+"),o.createElement(Br,null,"Paid to affiliates in 2023")),o.createElement(md,null,o.createElement(pd,null,"1,200+"),o.createElement(Br,null,"Artists earning affiliate income")),o.createElement(md,null,o.createElement(pd,null,"$450"),o.createElement(Br,null,"Average monthly affiliate earnings"))),o.createElement(bA,null,o.createElement(kt,null,"Success Stories"),o.createElement(SA,null,o.createElement(o0,null,o.createElement(i0,null,`"I've referred 15 artists to TrueFans CONNECT, and now I earn an additional $600-800 per month just from affiliate commissions. It's become a significant part of my income as an independent musician."`),o.createElement(a0,null,o.createElement(l0,{src:"https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg",alt:"Sarah Johnson"}),o.createElement(s0,null,o.createElement(c0,null,"Sarah Johnson"),o.createElement(u0,null,"Jazz Vocalist, New Orleans")))),o.createElement(o0,null,o.createElement(i0,null,`"The two-tier structure is brilliant. I referred my bandmates, who then referred other musicians in their network. Now I'm earning from both levels, creating a steady stream of passive income."`),o.createElement(a0,null,o.createElement(l0,{src:"https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",alt:"Marcus Rivera"}),o.createElement(s0,null,o.createElement(c0,null,"Marcus Rivera"),o.createElement(u0,null,"Indie Rock Guitarist, Austin")))))),o.createElement(kA,null,o.createElement(TA,null,"Ready to Start Earning?"),o.createElement(CA,null,"Get your unique referral link and start sharing with other artists in your network."),o.createElement(d0,{onClick:()=>t("referral-tools")},"Get Your Referral Link"))),e==="how-it-works"&&o.createElement(zA,null,o.createElement(PA,null,o.createElement(kt,null,"How the Affiliate Program Works"),o.createElement(AA,null,o.createElement(si,null,o.createElement(ci,null,"1"),o.createElement(ui,null,o.createElement(di,null,"Share Your Referral Link"),o.createElement(mi,null,"Every artist on TrueFans CONNECT gets a unique referral link. Share this with other artists through social media, email, or in person."))),o.createElement(si,null,o.createElement(ci,null,"2"),o.createElement(ui,null,o.createElement(di,null,"Artists Sign Up Through Your Link"),o.createElement(mi,null,"When an artist clicks your link and creates an account, they're permanently tagged as your referral in our system."))),o.createElement(si,null,o.createElement(ci,null,"3"),o.createElement(ui,null,o.createElement(di,null,"Your Network Grows"),o.createElement(mi,null,"Your referred artists can also refer others, creating a second tier in your affiliate network."))),o.createElement(si,null,o.createElement(ci,null,"4"),o.createElement(ui,null,o.createElement(di,null,"Earn From Both Tiers"),o.createElement(mi,null,"You earn 2.5% of all donations received by your direct referrals (first tier) and 2.5% from their referrals (second tier)."))),o.createElement(si,null,o.createElement(ci,null,"5"),o.createElement(ui,null,o.createElement(di,null,"Get Paid Automatically"),o.createElement(mi,null,"Affiliate earnings are calculated daily and added to your regular payout schedule. No extra steps required!"))))),o.createElement(FA,null,o.createElement(kt,null,"Commission Structure"),o.createElement(NA,null,o.createElement("thead",null,o.createElement("tr",null,o.createElement(Qe,null,"Tier"),o.createElement(Qe,null,"Relationship"),o.createElement(Qe,null,"Commission Rate"),o.createElement(Qe,null,"Example"))),o.createElement("tbody",null,o.createElement("tr",null,o.createElement(ze,null,"Tier 1"),o.createElement(ze,null,"Artists you directly refer"),o.createElement(ze,null,"2.5% of all donations"),o.createElement(ze,null,"If your referral receives $1,000 in donations, you earn $25")),o.createElement("tr",null,o.createElement(ze,null,"Tier 2"),o.createElement(ze,null,"Artists referred by your referrals"),o.createElement(ze,null,"2.5% of all donations"),o.createElement(ze,null,"If your referral's referral receives $1,000 in donations, you earn $25"))))),o.createElement(LA,null,o.createElement(kt,null,"Earning Potential Example"),o.createElement(DA,null,o.createElement(RA,null,o.createElement(IA,null,"Scenario: Building a Network of 10 Artists"),o.createElement(MA,null,o.createElement(fd,null,"You refer 5 artists directly (Tier 1)"),o.createElement(fd,null,"Each of those artists refers 1 more artist (5 total in Tier 2)"),o.createElement(fd,null,"On average, each artist receives $500/month in donations"))),o.createElement(BA,null,o.createElement(OA,null,"Monthly Earnings Calculation:"),o.createElement(m0,null,o.createElement(p0,null,"Tier 1 Earnings:"),o.createElement(f0,null,"5 artists × $500 × 2.5% = $62.50")),o.createElement(m0,null,o.createElement(p0,null,"Tier 2 Earnings:"),o.createElement(f0,null,"5 artists × $500 × 2.5% = $62.50")),o.createElement(VA,null,o.createElement(jA,null,"Total Monthly Affiliate Income:"),o.createElement(WA,null,"$125.00")))),o.createElement(_A,null,"This is just an example. Your actual earnings will depend on how many artists you refer, how many they refer, and how much in donations they all receive.")),o.createElement(UA,null,o.createElement(kt,null,"Frequently Asked Questions"),o.createElement(HA,null,o.createElement(pi,null,o.createElement(fi,null,"Is there a limit to how many artists I can refer?"),o.createElement(hi,null,"No, there's no limit. You can refer as many artists as you want and earn from all of them.")),o.createElement(pi,null,o.createElement(fi,null,"How long do I earn commissions for?"),o.createElement(hi,null,"You'll continue to earn commissions as long as your referred artists (both Tier 1 and Tier 2) receive donations on the platform.")),o.createElement(pi,null,o.createElement(fi,null,"When and how do I get paid my affiliate earnings?"),o.createElement(hi,null,"Affiliate earnings are added to your regular artist payout and follow the same schedule and payment method.")),o.createElement(pi,null,o.createElement(fi,null,"Do I need to sign up separately for the affiliate program?"),o.createElement(hi,null,"No, all artists on TrueFans CONNECT are automatically enrolled in the affiliate program.")),o.createElement(pi,null,o.createElement(fi,null,"Can I track how my referrals are performing?"),o.createElement(hi,null,'Yes, you can see detailed statistics about your referrals and their earnings in the "Your Earnings" tab.'))))),e==="referral-tools"&&o.createElement(GA,null,o.createElement(YA,null,o.createElement(kt,null,"Your Unique Referral Link"),o.createElement(QA,null,o.createElement(KA,null,"https://truefans.connect/join/sarahjohnson"),o.createElement(hd,{onClick:()=>i("https://truefans.connect/join/sarahjohnson","referral-link")},n==="referral-link"?"Copied!":"Copy Link")),o.createElement(XA,null,"Share this link with other artists. When they sign up through this link, they'll be permanently connected to your affiliate account.")),o.createElement(JA,null,o.createElement(kt,null,"Ways to Share Your Link"),o.createElement(qA,null,o.createElement(gd,null,o.createElement(yd,null,"📱"),o.createElement(vd,null,"Social Media"),o.createElement($d,null,"Share your referral link on Instagram, Twitter, Facebook, or TikTok"),o.createElement(ZA,null,o.createElement(xd,null,"Share on Instagram"),o.createElement(xd,null,"Share on Twitter"),o.createElement(xd,null,"Share on Facebook"))),o.createElement(gd,null,o.createElement(yd,null,"✉️"),o.createElement(vd,null,"Email"),o.createElement($d,null,"Send your referral link directly to other artists via email"),o.createElement(hd,{onClick:()=>i("Hey fellow artist! I've been using TrueFans CONNECT to receive donations from my fans, and it's been amazing. If you're looking for a way to monetize your music, check it out: https://truefans.connect/join/sarahjohnson","email-template")},n==="email-template"?"Copied!":"Copy Email Template")),o.createElement(gd,null,o.createElement(yd,null,"🎵"),o.createElement(vd,null,"Music Platforms"),o.createElement($d,null,"Add your referral link to your bio on Spotify, SoundCloud, Bandcamp, etc."),o.createElement(hd,{onClick:()=>i("Support my music and other independent artists on TrueFans CONNECT: https://truefans.connect/join/sarahjohnson","bio-template")},n==="bio-template"?"Copied!":"Copy Bio Template")))),o.createElement(eF,null,o.createElement(kt,null,"Marketing Materials"),o.createElement(tF,null,"Use these pre-designed materials to promote TrueFans CONNECT to other artists."),o.createElement(nF,null,o.createElement(Ed,null,o.createElement(wd,{src:"https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg",alt:"Marketing Banner"}),o.createElement(bd,null,"Social Media Banner"),o.createElement(Sd,null,"Download")),o.createElement(Ed,null,o.createElement(wd,{src:"https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg",alt:"Instagram Post"}),o.createElement(bd,null,"Instagram Post"),o.createElement(Sd,null,"Download")),o.createElement(Ed,null,o.createElement(wd,{src:"https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg",alt:"Email Header"}),o.createElement(bd,null,"Email Header"),o.createElement(Sd,null,"Download")))),o.createElement(rF,null,o.createElement(kt,null,"Tips for Successful Referrals"),o.createElement(oF,null,o.createElement(Nl,null,o.createElement(Ll,null,"💡"),o.createElement(Dl,null,o.createElement(Rl,null,"Be Authentic"),o.createElement(Il,null,"Share your genuine experience with TrueFans CONNECT when talking to other artists."))),o.createElement(Nl,null,o.createElement(Ll,null,"🎯"),o.createElement(Dl,null,o.createElement(Rl,null,"Target the Right Artists"),o.createElement(Il,null,"Focus on artists who already have an engaged fan base that might be willing to support them."))),o.createElement(Nl,null,o.createElement(Ll,null,"📊"),o.createElement(Dl,null,o.createElement(Rl,null,"Share Your Results"),o.createElement(Il,null,"If comfortable, share specific numbers about donations you've received to show the potential."))),o.createElement(Nl,null,o.createElement(Ll,null,"🤝"),o.createElement(Dl,null,o.createElement(Rl,null,"Offer Help"),o.createElement(Il,null,"Offer to help new artists set up their profile and donation systems after they sign up.")))))),e==="earnings"&&o.createElement(iF,null,o.createElement(aF,null,o.createElement(lF,null,o.createElement(sF,null,o.createElement(cF,null,"Total Affiliate Earnings"),o.createElement(uF,null,"$1,245.75")),o.createElement(dF,null,o.createElement(kd,null,o.createElement(Td,null,"This Month:"),o.createElement(Cd,null,"$187.50")),o.createElement(kd,null,o.createElement(Td,null,"Last Month:"),o.createElement(Cd,null,"$162.25")),o.createElement(kd,null,o.createElement(Td,null,"Next Payout:"),o.createElement(Cd,null,"$87.25 (June 15)")))),o.createElement(mF,null,o.createElement(pF,null,"Earnings Breakdown"),o.createElement(fF,null,o.createElement(h0,{width:"65%",color:"#FFD700"},o.createElement(g0,null,"Tier 1: $121.88 (65%)")),o.createElement(h0,{width:"35%",color:"#FF6B6B"},o.createElement(g0,null,"Tier 2: $65.62 (35%)"))))),o.createElement(hF,null,o.createElement(kt,null,"Your Referral Network"),o.createElement(gF,null,o.createElement(zd,null,o.createElement(Pd,null,"7"),o.createElement(Br,null,"Direct Referrals (Tier 1)")),o.createElement(zd,null,o.createElement(Pd,null,"12"),o.createElement(Br,null,"Indirect Referrals (Tier 2)")),o.createElement(zd,null,o.createElement(Pd,null,"$7,500"),o.createElement(Br,null,"Network Donation Volume")))),o.createElement(yF,null,o.createElement(y0,null,o.createElement(v0,null,"Tier 1 Referrals (Direct)"),o.createElement($0,null,o.createElement("thead",null,o.createElement("tr",null,o.createElement(Qe,null,"Artist"),o.createElement(Qe,null,"Join Date"),o.createElement(Qe,null,"Donations Received"),o.createElement(Qe,null,"Your Commission"))),o.createElement("tbody",null,[{name:"Marcus Rivera",date:"Apr 12, 2023",donations:"$1,245.00",commission:"$31.13"},{name:"Elena Chen",date:"May 3, 2023",donations:"$875.50",commission:"$21.89"},{name:"David Kim",date:"May 15, 2023",donations:"$1,050.00",commission:"$26.25"},{name:"Sophia Patel",date:"Jun 2, 2023",donations:"$725.00",commission:"$18.13"},{name:"James Wilson",date:"Jun 8, 2023",donations:"$980.00",commission:"$24.50"}].map((a,l)=>o.createElement("tr",{key:l},o.createElement(ze,null,a.name),o.createElement(ze,null,a.date),o.createElement(ze,null,a.donations),o.createElement(ze,null,a.commission)))))),o.createElement(y0,null,o.createElement(v0,null,"Tier 2 Referrals (Indirect)"),o.createElement($0,null,o.createElement("thead",null,o.createElement("tr",null,o.createElement(Qe,null,"Artist"),o.createElement(Qe,null,"Referred By"),o.createElement(Qe,null,"Donations Received"),o.createElement(Qe,null,"Your Commission"))),o.createElement("tbody",null,[{name:"Michael Johnson",referrer:"Marcus Rivera",donations:"$650.00",commission:"$16.25"},{name:"Olivia Brown",referrer:"Elena Chen",donations:"$425.00",commission:"$10.63"},{name:"Noah Garcia",referrer:"David Kim",donations:"$780.00",commission:"$19.50"},{name:"Emma Martinez",referrer:"Sophia Patel",donations:"$510.00",commission:"$12.75"},{name:"Liam Taylor",referrer:"James Wilson",donations:"$260.00",commission:"$6.50"}].map((a,l)=>o.createElement("tr",{key:l},o.createElement(ze,null,a.name),o.createElement(ze,null,a.referrer),o.createElement(ze,null,a.donations),o.createElement(ze,null,a.commission))))))),o.createElement(vF,null,o.createElement(kt,null,"Earnings History"),o.createElement($F,null,o.createElement("thead",null,o.createElement("tr",null,o.createElement(Qe,null,"Month"),o.createElement(Qe,null,"Tier 1 Earnings"),o.createElement(Qe,null,"Tier 2 Earnings"),o.createElement(Qe,null,"Total"))),o.createElement("tbody",null,[{month:"June 2023",tier1:"$121.88",tier2:"$65.62",total:"$187.50"},{month:"May 2023",tier1:"$105.46",tier2:"$56.79",total:"$162.25"},{month:"April 2023",tier1:"$98.15",tier2:"$52.85",total:"$151.00"},{month:"March 2023",tier1:"$87.75",tier2:"$47.25",total:"$135.00"},{month:"February 2023",tier1:"$72.80",tier2:"$39.20",total:"$112.00"},{month:"January 2023",tier1:"$65.00",tier2:"$35.00",total:"$100.00"}].map((a,l)=>o.createElement("tr",{key:l},o.createElement(ze,null,a.month),o.createElement(ze,null,a.tier1),o.createElement(ze,null,a.tier2),o.createElement(ze,null,o.createElement("strong",null,a.total))))))),o.createElement(xF,null,o.createElement(kt,null,"Grow Your Earnings"),o.createElement(EF,null,o.createElement(Ad,null,o.createElement(Fd,null,"📈"),o.createElement(Nd,null,o.createElement(Ld,null,"Refer More Artists"),o.createElement(Dd,null,"The more artists you refer, the more potential earnings you can generate from both tiers."))),o.createElement(Ad,null,o.createElement(Fd,null,"🔄"),o.createElement(Nd,null,o.createElement(Ld,null,"Encourage Your Referrals to Refer Others"),o.createElement(Dd,null,"Help your direct referrals understand the affiliate program so they can refer others, expanding your Tier 2 network."))),o.createElement(Ad,null,o.createElement(Fd,null,"🎯"),o.createElement(Nd,null,o.createElement(Ld,null,"Target Successful Artists"),o.createElement(Dd,null,"Focus on referring artists who already have an engaged fan base that's likely to support them financially.")))),o.createElement(wF,null,o.createElement(d0,{onClick:()=>t("referral-tools")},"Get Referral Tools")))))))},uA=s.main`
  width: 100%;
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,dA=s.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,mA=s.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,pA=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,fA=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.lightText};
`,hA=s.div`
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.colors.mediumGray};
  margin-bottom: ${({theme:e})=>e.space.xl};
  overflow-x: auto;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`,Fl=s.button`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.lg}`};
  background-color: transparent;
  border: none;
  border-bottom: 3px solid ${({theme:e,active:t})=>t?e.colors.primary:"transparent"};
  color: ${({theme:e,active:t})=>t?e.colors.darkText:e.colors.lightText};
  font-weight: ${({theme:e,active:t})=>t?e.fontWeights.semiBold:e.fontWeights.medium};
  font-size: ${({theme:e})=>e.fontSizes.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  white-space: nowrap;
  
  &:hover {
    color: ${({theme:e})=>e.colors.darkText};
  }
`,gA=s.div`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,yA=s.div``,vA=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.xl};
`,sd=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  text-align: center;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,cd=s.div`
  font-size: ${({theme:e})=>e.fontSizes["4xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,ud=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,dd=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,$A=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,xA=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
  text-align: center;
`,EA=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
  
  p {
    margin-bottom: ${({theme:e})=>e.space.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,wA=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.xl};
`,md=s.div`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  text-align: center;
  box-shadow: ${({theme:e})=>e.shadows.md};
`,pd=s.div`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Br=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  opacity: 0.9;
`,bA=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,kt=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,SA=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,o0=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,i0=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-style: italic;
`,a0=s.div`
  display: flex;
  align-items: center;
`,l0=s.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
`,s0=s.div``,c0=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,u0=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,kA=s.section`
  background-color: ${({theme:e})=>e.colors.primary};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  text-align: center;
  box-shadow: ${({theme:e})=>e.shadows.md};
`,TA=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  margin-bottom: ${({theme:e})=>e.space.md};
`,CA=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,d0=s(Y)`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.xl}`};
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  color: white;
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.secondary};
  }
`,zA=s.div``,PA=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,AA=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.lg};
`,si=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.space.lg};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,ci=s.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  flex-shrink: 0;
`,ui=s.div`
  flex: 1;
`,di=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,mi=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,FA=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,NA=s.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.md};
`,Qe=s.th`
  padding: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  color: white;
  text-align: left;
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
`,ze=s.td`
  padding: ${({theme:e})=>e.space.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.lightGray};
  color: ${({theme:e})=>e.colors.darkText};
  
  &:last-child {
    font-weight: ${({theme:e})=>e.fontWeights.medium};
  }
`,LA=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,DA=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,RA=s.div``,IA=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,MA=s.ul`
  padding-left: ${({theme:e})=>e.space.lg};
`,fd=s.li`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`,BA=s.div`
  background-color: ${({theme:e})=>e.colors.lightGray};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
`,OA=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,m0=s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.space.sm};
`,p0=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
`,f0=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,VA=s.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({theme:e})=>e.space.md};
  padding-top: ${({theme:e})=>e.space.md};
  border-top: 1px solid ${({theme:e})=>e.colors.mediumGray};
`,jA=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,WA=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.secondary};
`,_A=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  font-style: italic;
  margin-top: ${({theme:e})=>e.space.md};
`,UA=s.section``,HA=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,pi=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,fi=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,hi=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,GA=s.div``,YA=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,QA=s.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.sm};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:e})=>e.space.sm};
  }
`,KA=s.div`
  flex: 1;
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  font-family: monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: ${({theme:e})=>e.space.sm};
`,hd=s(Y)`
  padding: ${({theme:e})=>`${e.space.sm} ${e.space.lg}`};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,XA=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  font-style: italic;
`,JA=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,qA=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,gd=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,yd=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,vd=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,$d=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,ZA=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.sm};
`,xd=s(Y)`
  padding: ${({theme:e})=>e.space.sm};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,eF=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,tF=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,nF=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,Ed=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,wd=s.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`,bd=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  padding: ${({theme:e})=>`${e.space.md} ${e.space.md} 0`};
`,Sd=s(Y)`
  width: calc(100% - ${({theme:e})=>e.space.md} * 2);
  margin: ${({theme:e})=>e.space.md};
  padding: ${({theme:e})=>e.space.sm};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,rF=s.section``,oF=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Nl=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.space.md};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Ll=s.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  flex-shrink: 0;
`,Dl=s.div`
  flex: 1;
`,Rl=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Il=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,iF=s.div``,aF=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,lF=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,sF=s.div`
  margin-bottom: ${({theme:e})=>e.space.lg};
`,cF=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,uF=s.div`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
`,dF=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.sm};
`,kd=s.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({theme:e})=>e.fontSizes.md};
`,Td=s.div`
  color: ${({theme:e})=>e.colors.lightText};
`,Cd=s.div`
  color: ${({theme:e})=>e.colors.darkText};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,mF=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,pF=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,fF=s.div`
  display: flex;
  height: 40px;
  border-radius: ${({theme:e})=>e.radii.md};
  overflow: hidden;
  margin-bottom: ${({theme:e})=>e.space.md};
`,h0=s.div`
  width: ${({width:e})=>e};
  background-color: ${({color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,g0=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
`,hF=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,gF=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,zd=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  text-align: center;
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Pd=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,yF=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
  margin-bottom: ${({theme:e})=>e.space.xl};
`,y0=s.section``,v0=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,$0=s.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,vF=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,$F=s.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,xF=s.section``,EF=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.xl};
`,Ad=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.space.md};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Fd=s.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  flex-shrink: 0;
`,Nd=s.div`
  flex: 1;
`,Ld=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Dd=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,wF=s.div`
  text-align: center;
`,bF=()=>{const[e,t]=b.useState(""),[n,r]=b.useState(""),[i,a]=b.useState(!1),[l,c]=b.useState(""),u=Uo(),d=p=>{if(p.preventDefault(),c(""),!e||!n){c("Please fill in all fields");return}e==="sarah@example.com"&&n==="password"?u("/my-dashboard"):c("Invalid email or password")};return o.createElement(SF,{as:be.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},o.createElement(kF,null,o.createElement(TF,null,o.createElement(CF,null,o.createElement(zF,null,"Log in to your account"),o.createElement(PF,null,"Welcome back! Please enter your details.")),l&&o.createElement(AF,null,l),o.createElement(FF,{onSubmit:d},o.createElement(Rd,null,o.createElement(x0,{htmlFor:"email"},"Email"),o.createElement(E0,{type:"email",id:"email",placeholder:"Enter your email",value:e,onChange:p=>t(p.target.value)})),o.createElement(Rd,null,o.createElement(NF,null,o.createElement(x0,{htmlFor:"password"},"Password"),o.createElement(LF,{to:"/forgot-password"},"Forgot password?")),o.createElement(E0,{type:"password",id:"password",placeholder:"Enter your password",value:n,onChange:p=>r(p.target.value)})),o.createElement(Rd,null,o.createElement(DF,null,o.createElement(RF,null,o.createElement(IF,{type:"checkbox",id:"remember",checked:i,onChange:()=>a(!i)}),o.createElement(MF,{htmlFor:"remember"},"Remember me")))),o.createElement(BF,{type:"submit"},"Log in"),o.createElement(OF,null,o.createElement(VF,null,"Demo Credentials"),o.createElement(w0,null,"Email: sarah@example.com"),o.createElement(w0,null,"Password: password"))),o.createElement(jF,null,"Don't have an account? ",o.createElement(WF,{to:"/artist-signup"},"Sign up")))))},SF=s.main`
  width: 100%;
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,kF=s.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,TF=s.div`
  max-width: 450px;
  margin: 0 auto;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,CF=s.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,zF=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,PF=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,AF=s.div`
  background-color: ${({theme:e})=>e.colors.errorLight};
  color: ${({theme:e})=>e.colors.error};
  padding: ${({theme:e})=>e.space.md};
  border-radius: ${({theme:e})=>e.radii.md};
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-size: ${({theme:e})=>e.fontSizes.md};
`,FF=s.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.lg};
`,Rd=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xs};
`,x0=s.label`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
`,NF=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,LF=s(ce)`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,E0=s.input`
  padding: ${({theme:e})=>e.space.md};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
  }
`,DF=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,RF=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.space.xs};
`,IF=s.input`
  width: 18px;
  height: 18px;
  accent-color: ${({theme:e})=>e.colors.primary};
`,MF=s.label`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
`,BF=s(Y)`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  font-size: ${({theme:e})=>e.fontSizes.md};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,OF=s.div`
  background-color: ${({theme:e})=>e.colors.lightGray};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
  margin-top: ${({theme:e})=>e.space.md};
`,VF=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,w0=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,jF=s.div`
  text-align: center;
  margin-top: ${({theme:e})=>e.space.xl};
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,WF=s(ce)`
  color: ${({theme:e})=>e.colors.primary};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,_F=()=>o.createElement(uh,null,o.createElement(UF,null,o.createElement(b0,null,o.createElement(HF,null,o.createElement(GF,null,"Terms of Service"),o.createElement(YF,null,"Last Updated: ",new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}))))),o.createElement(QF,null,o.createElement(b0,null,o.createElement(KF,null,o.createElement(en,null,o.createElement(tn,null,"1. Introduction"),o.createElement(Ke,null,'Welcome to TrueFans CONNECT™. These Terms of Service ("Terms") govern your use of our website, services, and platform (collectively, the "Service") operated by TrueFans CONNECT™ ("us", "we", or "our").'),o.createElement(Ke,null,"By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.")),o.createElement(en,null,o.createElement(tn,null,"2. Accounts"),o.createElement(Ke,null,"When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service."),o.createElement(Ke,null,"You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service."),o.createElement(Ke,null,"You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.")),o.createElement(en,null,o.createElement(tn,null,"3. Content"),o.createElement(Ke,null,'Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.'),o.createElement(Ke,null,"By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.")),o.createElement(en,null,o.createElement(tn,null,"4. Intellectual Property"),o.createElement(Ke,null,"The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of TrueFans CONNECT™ and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of TrueFans CONNECT™.")),o.createElement(en,null,o.createElement(tn,null,"5. Links To Other Web Sites"),o.createElement(Ke,null,"Our Service may contain links to third-party web sites or services that are not owned or controlled by TrueFans CONNECT™."),o.createElement(Ke,null,"TrueFans CONNECT™ has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that TrueFans CONNECT™ shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.")),o.createElement(en,null,o.createElement(tn,null,"6. Termination"),o.createElement(Ke,null,"We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."),o.createElement(Ke,null,"Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.")),o.createElement(en,null,o.createElement(tn,null,"7. Limitation Of Liability"),o.createElement(Ke,null,"In no event shall TrueFans CONNECT™, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.")),o.createElement(en,null,o.createElement(tn,null,"8. Changes"),o.createElement(Ke,null,"We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."),o.createElement(Ke,null,"By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.")),o.createElement(en,null,o.createElement(tn,null,"9. Contact Us"),o.createElement(Ke,null,"If you have any questions about these Terms, please contact us at:"),o.createElement(XF,null,o.createElement(Id,null,"Email: legal@truefans.connect"),o.createElement(Id,null,"Phone: (555) 123-4567"),o.createElement(Id,null,"Address: 123 Music Avenue, Nashville, TN 37203"))))))),UF=s.section`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  padding: ${({theme:e})=>e.space.xl} 0;
  color: white;
`,b0=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,HF=s.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`,GF=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.md};
`,YF=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  opacity: 0.9;
`,QF=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,KF=s.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,en=s.div`
  margin-bottom: ${({theme:e})=>e.space.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`,tn=s.h2`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Ke=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`,XF=s.div`
  margin-top: ${({theme:e})=>e.space.md};
  padding: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e})=>e.colors.background};
  border-radius: ${({theme:e})=>e.radii.md};
`,Id=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  margin-bottom: ${({theme:e})=>e.space.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`,JF=()=>o.createElement(uh,null,o.createElement(qF,null,o.createElement(S0,null,o.createElement(ZF,null,o.createElement(eN,null,"Privacy Policy"),o.createElement(tN,null,"Last Updated: ",new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}))))),o.createElement(nN,null,o.createElement(S0,null,o.createElement(rN,null,o.createElement(Gt,null,o.createElement(Yt,null,"1. Introduction"),o.createElement(Pe,null,"At TrueFans CONNECT™, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you."),o.createElement(Pe,null,'This privacy policy applies to personal data we collect when you use our website, platform, and services (collectively, the "Service").')),o.createElement(Gt,null,o.createElement(Yt,null,"2. Information We Collect"),o.createElement(Pe,null,"We collect several different types of information for various purposes to provide and improve our Service to you."),o.createElement(Md,null,"Personal Data"),o.createElement(Pe,null,'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:'),o.createElement(Ml,null,o.createElement(ge,null,"Email address"),o.createElement(ge,null,"First name and last name"),o.createElement(ge,null,"Phone number"),o.createElement(ge,null,"Address, State, Province, ZIP/Postal code, City"),o.createElement(ge,null,"Cookies and Usage Data")),o.createElement(Md,null,"Usage Data"),o.createElement(Pe,null,`We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.`)),o.createElement(Gt,null,o.createElement(Yt,null,"3. How We Use Your Information"),o.createElement(Pe,null,"TrueFans CONNECT™ uses the collected data for various purposes:"),o.createElement(Ml,null,o.createElement(ge,null,"To provide and maintain our Service"),o.createElement(ge,null,"To notify you about changes to our Service"),o.createElement(ge,null,"To allow you to participate in interactive features of our Service when you choose to do so"),o.createElement(ge,null,"To provide customer support"),o.createElement(ge,null,"To gather analysis or valuable information so that we can improve our Service"),o.createElement(ge,null,"To monitor the usage of our Service"),o.createElement(ge,null,"To detect, prevent and address technical issues"))),o.createElement(Gt,null,o.createElement(Yt,null,"4. Data Retention"),o.createElement(Pe,null,"TrueFans CONNECT™ will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies."),o.createElement(Pe,null,"TrueFans CONNECT™ will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.")),o.createElement(Gt,null,o.createElement(Yt,null,"5. Data Transfer"),o.createElement(Pe,null,"Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction."),o.createElement(Pe,null,"If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there."),o.createElement(Pe,null,"Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.")),o.createElement(Gt,null,o.createElement(Yt,null,"6. Disclosure of Data"),o.createElement(Md,null,"Legal Requirements"),o.createElement(Pe,null,"TrueFans CONNECT™ may disclose your Personal Data in the good faith belief that such action is necessary to:"),o.createElement(Ml,null,o.createElement(ge,null,"To comply with a legal obligation"),o.createElement(ge,null,"To protect and defend the rights or property of TrueFans CONNECT™"),o.createElement(ge,null,"To prevent or investigate possible wrongdoing in connection with the Service"),o.createElement(ge,null,"To protect the personal safety of users of the Service or the public"),o.createElement(ge,null,"To protect against legal liability"))),o.createElement(Gt,null,o.createElement(Yt,null,"7. Security of Data"),o.createElement(Pe,null,"The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.")),o.createElement(Gt,null,o.createElement(Yt,null,"8. Your Data Protection Rights"),o.createElement(Pe,null,"You have certain data protection rights. TrueFans CONNECT™ aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data."),o.createElement(Pe,null,"If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us."),o.createElement(Pe,null,"In certain circumstances, you have the following data protection rights:"),o.createElement(Ml,null,o.createElement(ge,null,"The right to access, update or to delete the information we have on you"),o.createElement(ge,null,"The right of rectification - You have the right to have your information rectified if that information is inaccurate or incomplete"),o.createElement(ge,null,"The right to object - You have the right to object to our processing of your Personal Data"),o.createElement(ge,null,"The right of restriction - You have the right to request that we restrict the processing of your personal information"),o.createElement(ge,null,"The right to data portability - You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format"),o.createElement(ge,null,"The right to withdraw consent - You also have the right to withdraw your consent at any time where TrueFans CONNECT™ relied on your consent to process your personal information"))),o.createElement(Gt,null,o.createElement(Yt,null,"9. Changes to This Privacy Policy"),o.createElement(Pe,null,"We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."),o.createElement(Pe,null,'We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.'),o.createElement(Pe,null,"You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.")),o.createElement(Gt,null,o.createElement(Yt,null,"10. Contact Us"),o.createElement(Pe,null,"If you have any questions about this Privacy Policy, please contact us:"),o.createElement(oN,null,o.createElement(Bd,null,"Email: privacy@truefans.connect"),o.createElement(Bd,null,"Phone: (555) 123-4567"),o.createElement(Bd,null,"Address: 123 Music Avenue, Nashville, TN 37203"))))))),qF=s.section`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  padding: ${({theme:e})=>e.space.xl} 0;
  color: white;
`,S0=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,ZF=s.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`,eN=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.md};
`,tN=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  opacity: 0.9;
`,nN=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,rN=s.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,Gt=s.div`
  margin-bottom: ${({theme:e})=>e.space.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`,Yt=s.h2`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Md=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-top: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Pe=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ml=s.ul`
  margin-bottom: ${({theme:e})=>e.space.md};
  padding-left: ${({theme:e})=>e.space.xl};
`,ge=s.li`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.xs};
`,oN=s.div`
  margin-top: ${({theme:e})=>e.space.md};
  padding: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e})=>e.colors.background};
  border-radius: ${({theme:e})=>e.radii.md};
`,Bd=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  margin-bottom: ${({theme:e})=>e.space.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`,iN=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
  text-align: center;
`,aN=s.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.colors.primary};
`,lN=s.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`,sN=s(ce)`
  padding: 0.8rem 1.5rem;
  background-color: ${({theme:e})=>e.colors.primary};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
    transform: translateY(-2px);
  }
`,cN=()=>o.createElement(iN,null,o.createElement(aN,null,"404 - Page Not Found"),o.createElement(lN,null,"Oops! The page you're looking for doesn't exist or has been moved. We're sorry for the inconvenience."),o.createElement(sN,{to:"/"},"Return to Home")),uN=()=>{const[e,t]=b.useState("featured"),[n,r]=b.useState(""),[i,a]=b.useState("all"),l=Uo(),c=[{id:1,name:"Eliza Johnson",genre:"Folk",location:"Nashville, TN",image:"https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",supporters:87,totalDonations:"$1,245.00",featured:!0,bio:"Indie folk artist with a passion for storytelling through music."},{id:2,name:"Marcus Rivera",genre:"Hip Hop",location:"Atlanta, GA",image:"https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg",supporters:124,totalDonations:"$2,180.50",featured:!0,bio:"Urban poet and producer creating authentic hip hop with a message."},{id:3,name:"Emily Chen",genre:"Electronic",location:"Los Angeles, CA",image:"https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",supporters:56,totalDonations:"$895.25",featured:!1,bio:"Electronic music producer pushing boundaries with innovative sounds."},{id:4,name:"David Williams",genre:"Rock",location:"Chicago, IL",image:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",supporters:92,totalDonations:"$1,567.75",featured:!0,bio:"Rock guitarist and vocalist with a classic sound and modern edge."},{id:5,name:"Sophia Martinez",genre:"Jazz",location:"New Orleans, LA",image:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",supporters:43,totalDonations:"$720.00",featured:!1,bio:"Jazz vocalist and composer blending traditional and contemporary styles."},{id:6,name:"James Wilson",genre:"Country",location:"Austin, TX",image:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",supporters:78,totalDonations:"$1,120.50",featured:!1,bio:"Country singer-songwriter with authentic roots and modern appeal."},{id:7,name:"Olivia Taylor",genre:"Pop",location:"New York, NY",image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",supporters:112,totalDonations:"$1,890.25",featured:!0,bio:"Pop vocalist and songwriter crafting catchy melodies with depth."},{id:8,name:"Michael Brown",genre:"R&B",location:"Philadelphia, PA",image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",supporters:67,totalDonations:"$950.75",featured:!1,bio:"R&B artist with soulful vocals and heartfelt lyrics."}],u=c.filter(m=>{const f=m.name.toLowerCase().includes(n.toLowerCase())||m.genre.toLowerCase().includes(n.toLowerCase())||m.location.toLowerCase().includes(n.toLowerCase())||m.bio.toLowerCase().includes(n.toLowerCase()),g=i==="all"||m.genre.toLowerCase()===i.toLowerCase(),$=e==="all"||e==="featured"&&m.featured;return f&&g&&$}),d=["all",...new Set(c.map(m=>m.genre.toLowerCase()))],p=m=>{l(`/artist-profile/${m}?support=true`)};return o.createElement(dN,{as:be.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},o.createElement(mN,null,o.createElement(gi,null,o.createElement(pN,null,o.createElement(fN,null,"Discover Independent Artists"),o.createElement(hN,null,"Support talented creators directly and help them thrive"),o.createElement(gN,null,o.createElement(yN,{type:"text",placeholder:"Search by name, genre, or location...",value:n,onChange:m=>r(m.target.value)}),o.createElement(vN,{value:i,onChange:m=>a(m.target.value)},d.map(m=>o.createElement("option",{key:m,value:m},m.charAt(0).toUpperCase()+m.slice(1)))))))),o.createElement($N,null,o.createElement(gi,null,o.createElement(xN,null,o.createElement(k0,{active:e==="featured",onClick:()=>t("featured")},"Featured Artists"),o.createElement(k0,{active:e==="all",onClick:()=>t("all")},"All Artists")),u.length>0?o.createElement(EN,null,u.map(m=>o.createElement(wN,{key:m.id},o.createElement(bN,null,o.createElement(SN,{src:m.image,alt:m.name}),m.featured&&o.createElement(kN,null,"Featured")),o.createElement(TN,null,o.createElement(CN,null,m.name),o.createElement(zN,null,o.createElement(PN,null,m.genre),o.createElement(AN,null,m.location)),o.createElement(FN,null,m.bio),o.createElement(NN,null,o.createElement(T0,null,o.createElement(C0,null,m.supporters),o.createElement(z0,null,"Supporters")),o.createElement(T0,null,o.createElement(C0,null,m.totalDonations),o.createElement(z0,null,"Total Donations"))),o.createElement(LN,null,o.createElement(DN,{onClick:()=>p(m.id)},"Support Artist"),o.createElement(RN,{as:ce,to:`/artist-profile/${m.id}`},"View Profile")))))):o.createElement(IN,null,o.createElement(MN,null,"🔍"),o.createElement(BN,null,"No artists found matching your search criteria."),o.createElement(ON,{onClick:()=>{r(""),a("all"),t("featured")}},"Clear Filters")))),o.createElement(VN,null,o.createElement(gi,null,o.createElement(jN,null,"Why Join TrueFans CONNECT™ as an Artist?"),o.createElement(WN,null,"Unlock your potential with our artist-first platform"),o.createElement(_N,null,o.createElement(Or,null,o.createElement(Vr,null,"💰"),o.createElement(jr,null,"Keep 80% of Your Earnings"),o.createElement(Wr,null,"Our industry-leading 80/20 revenue split ensures you keep the majority of what you earn, putting more money in your pocket.")),o.createElement(Or,null,o.createElement(Vr,null,"🔄"),o.createElement(jr,null,"Two-Tier Affiliate Program"),o.createElement(Wr,null,"Earn 2.5% of donations received by artists you refer, plus another 2.5% from artists they refer, creating passive income.")),o.createElement(Or,null,o.createElement(Vr,null,"🎯"),o.createElement(jr,null,"Multiple Donation Methods"),o.createElement(Wr,null,"Receive support through embed codes, QR codes, and direct donation links, maximizing your earning potential.")),o.createElement(Or,null,o.createElement(Vr,null,"🏢"),o.createElement(jr,null,"Venue Connections"),o.createElement(Wr,null,"Get discovered by venues looking for talent, creating opportunities for live performances and expanding your audience.")),o.createElement(Or,null,o.createElement(Vr,null,"📊"),o.createElement(jr,null,"Detailed Analytics"),o.createElement(Wr,null,"Track your performance with comprehensive analytics, helping you understand your audience and optimize your strategy.")),o.createElement(Or,null,o.createElement(Vr,null,"🛠️"),o.createElement(jr,null,"Powerful Tools"),o.createElement(Wr,null,"Access a suite of tools designed to help you manage your career, connect with fans, and grow your income."))),o.createElement(UN,null,o.createElement(HN,null,"Ready to take your music career to the next level?"),o.createElement(GN,{as:ce,to:"/artist-signup"},"Sign Up as an Artist")))),o.createElement(YN,null,o.createElement(gi,null,o.createElement(QN,null,"Success Stories"),o.createElement(KN,null,"Hear from artists who are thriving on our platform"),o.createElement(XN,null,o.createElement(Od,null,o.createElement(Vd,null,'"TrueFans CONNECT™ has completely transformed my career as an independent artist. The direct support from fans and the venue connections have allowed me to focus on creating music full-time."'),o.createElement(jd,null,o.createElement(Wd,{src:"https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg",alt:"Marcus Rivera"}),o.createElement(_d,null,o.createElement(Ud,null,"Marcus Rivera"),o.createElement(Hd,null,"Hip Hop Artist")))),o.createElement(Od,null,o.createElement(Vd,null,`"The affiliate program has been a game-changer for me. Not only am I earning from my music, but I'm also generating passive income by referring other artists to the platform."`),o.createElement(jd,null,o.createElement(Wd,{src:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",alt:"Sophia Martinez"}),o.createElement(_d,null,o.createElement(Ud,null,"Sophia Martinez"),o.createElement(Hd,null,"Jazz Vocalist")))),o.createElement(Od,null,o.createElement(Vd,null,`"The multiple donation methods have made it so easy for my fans to support me. I've seen a significant increase in my income since joining TrueFans CONNECT™."`),o.createElement(jd,null,o.createElement(Wd,{src:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",alt:"David Williams"}),o.createElement(_d,null,o.createElement(Ud,null,"David Williams"),o.createElement(Hd,null,"Rock Guitarist"))))))),o.createElement(JN,null,o.createElement(gi,null,o.createElement(qN,null,"Frequently Asked Questions"),o.createElement(ZN,null,o.createElement(yi,null,o.createElement(vi,null,"How does the 80/20 revenue split work?"),o.createElement($i,null,"When you receive donations through our platform, you keep 80% of the amount, while TrueFans CONNECT™ retains 20% to cover operating costs and platform development. This split applies to all donation methods, including direct donations, QR codes, and embed widgets.")),o.createElement(yi,null,o.createElement(vi,null,"How do I get started as an artist?"),o.createElement($i,null,"Getting started is simple! Just sign up for an artist account, complete your profile with your bio, music samples, and photos, set up your donation methods, and start sharing your profile with your fans. You can also connect with venues and participate in the affiliate program to maximize your earnings.")),o.createElement(yi,null,o.createElement(vi,null,"How does the affiliate program work?"),o.createElement($i,null,"Our two-tier affiliate program allows you to earn 2.5% of all donations received by artists you refer to the platform. Additionally, you earn 2.5% from artists referred by your referrals, creating a passive income stream. You'll receive a unique referral link to share, and earnings are automatically tracked and added to your account.")),o.createElement(yi,null,o.createElement(vi,null,"When and how do I get paid?"),o.createElement($i,null,"Payments are processed on a weekly basis. You can choose to receive your earnings via direct deposit, PayPal, or other supported payment methods. There's a minimum payout threshold of $20, and you can track all your earnings and pending payments in your dashboard.")),o.createElement(yi,null,o.createElement(vi,null,"How do I connect with venues?"),o.createElement($i,null,"Venues on our platform can discover artists through our directory and send performance opportunities directly to you. You can also proactively submit your profile to venues using our venue submission system. All communication and booking arrangements are handled securely through our platform."))))))},dN=s.main`
  width: 100%;
`,gi=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,mN=s.section`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  padding: ${({theme:e})=>e.space.xl} 0;
  color: white;
`,pN=s.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`,fN=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.md};
`,hN=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  opacity: 0.9;
  line-height: 1.5;
  margin-bottom: ${({theme:e})=>e.space.lg};
`,gN=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
  }
`,yN=s.input`
  flex: 1;
  padding: ${({theme:e})=>e.space.md};
  border-radius: ${({theme:e})=>e.radii.md};
  border: none;
  font-size: ${({theme:e})=>e.fontSizes.md};
  
  &:focus {
    outline: 2px solid ${({theme:e})=>e.colors.primary};
  }
`,vN=s.select`
  padding: ${({theme:e})=>e.space.md};
  border-radius: ${({theme:e})=>e.radii.md};
  border: none;
  font-size: ${({theme:e})=>e.fontSizes.md};
  background-color: white;
  min-width: 150px;
  
  &:focus {
    outline: 2px solid ${({theme:e})=>e.colors.primary};
  }
`,$N=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,xN=s.div`
  display: flex;
  margin-bottom: ${({theme:e})=>e.space.xl};
  border-bottom: 1px solid ${({theme:e})=>e.colors.mediumGray};
`,k0=s.button`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.lg}`};
  background: none;
  border: none;
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e,active:t})=>t?e.colors.primary:e.colors.lightText};
  position: relative;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({theme:e})=>e.colors.primary};
    transform: ${({active:e})=>e?"scaleX(1)":"scaleX(0)"};
    transform-origin: center;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
`,EN=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,wN=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,bN=s.div`
  position: relative;
  height: 200px;
`,SN=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,kN=s.div`
  position: absolute;
  top: ${({theme:e})=>e.space.md};
  right: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e})=>e.colors.primary};
  color: white;
  padding: ${({theme:e})=>`${e.space.xs} ${e.space.md}`};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,TN=s.div`
  padding: ${({theme:e})=>e.space.lg};
`,CN=s.h2`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,zN=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.md};
`,PN=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.primary};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,AN=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,FN=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.md};
  line-height: 1.5;
`,NN=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,T0=s.div``,C0=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,z0=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,LN=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.xs}) {
    flex-direction: column;
  }
`,DN=s(Y)`
  flex: 1;
  padding: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,RN=s(Y)`
  flex: 1;
  padding: ${({theme:e})=>e.space.md};
  background-color: transparent;
  color: ${({theme:e})=>e.colors.darkText};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.lightGray};
  }
`,IN=s.div`
  text-align: center;
  padding: ${({theme:e})=>e.space.xl} 0;
`,MN=s.div`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,BN=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,ON=s(Y)`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.xl}`};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,VN=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.lightGray};
`,jN=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.md};
`,WN=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`,_N=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.xl};
`,Or=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,Vr=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,jr=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Wr=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,UN=s.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`,HN=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,GN=s(Y)`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.xl}`};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,YN=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: white;
`,QN=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.md};
`,KN=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`,XN=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,Od=s.div`
  background-color: ${({theme:e})=>e.colors.lightGray};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Vd=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-style: italic;
`,jd=s.div`
  display: flex;
  align-items: center;
`,Wd=s.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
`,_d=s.div``,Ud=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Hd=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,JN=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,qN=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,ZN=s.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,yi=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,vi=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,$i=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
`,eL=()=>o.createElement(tL,{as:be.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},o.createElement(nL,null,o.createElement(P0,null,o.createElement(rL,null,o.createElement(oL,null,"Venue Portal"),o.createElement(iL,null,"Connect with talented independent artists for your venue"),o.createElement(aL,null,o.createElement(lL,{as:ce,to:"/venue-signup"},"Register Your Venue"))))),o.createElement(sL,null,o.createElement(P0,null,o.createElement(cL,null,o.createElement(_r,null,o.createElement(Bl,null,"Benefits for Venue Owners"),o.createElement(uL,null,o.createElement(Ol,null,o.createElement(Vl,null,"👥"),o.createElement(jl,null,"Built-In Audience"),o.createElement(Wl,null,"Our artists bring their existing fan bases to your venue. When you book through TrueFans CONNECT, you're not just getting a performer—you're getting their entire community of dedicated supporters.")),o.createElement(Ol,null,o.createElement(Vl,null,"📊"),o.createElement(jl,null,"Performance Analytics"),o.createElement(Wl,null,"Gain valuable insights into attendance, audience demographics, and revenue for each performance. Use data to make informed decisions about which artists to book again and which genres resonate with your audience.")),o.createElement(Ol,null,o.createElement(Vl,null,"🎵"),o.createElement(jl,null,"Genre Diversity"),o.createElement(Wl,null,"Easily discover artists across multiple genres to create a diverse calendar that appeals to different audience segments. Expand your venue's appeal beyond your typical programming.")),o.createElement(Ol,null,o.createElement(Vl,null,"💰"),o.createElement(jl,null,"Revenue Growth"),o.createElement(Wl,null,"Venues using our platform report an average 35% increase in attendance and 28% increase in bar/food sales when booking our independent artists compared to traditional booking methods.")))),o.createElement(_r,null,o.createElement(Bl,null,"How It Works"),o.createElement(dL,null,o.createElement(Ur,null,o.createElement(Hr,null,"1"),o.createElement(Gr,null,o.createElement(Yr,null,"Register Your Venue"),o.createElement(Qr,null,"Create your venue profile with details about your space, capacity, available equipment, and booking preferences. This helps us match you with compatible artists."))),o.createElement(Ur,null,o.createElement(Hr,null,"2"),o.createElement(Gr,null,o.createElement(Yr,null,"Browse Artist Profiles"),o.createElement(Qr,null,"Explore our database of independent artists filtered by genre, location, draw capacity, and availability. Review their media, past performances, and fan engagement metrics."))),o.createElement(Ur,null,o.createElement(Hr,null,"3"),o.createElement(Gr,null,o.createElement(Yr,null,"Send Booking Requests"),o.createElement(Qr,null,"When you find artists that match your needs, send them booking requests with your proposed dates, compensation, and other details. Artists can accept, decline, or propose alternatives."))),o.createElement(Ur,null,o.createElement(Hr,null,"4"),o.createElement(Gr,null,o.createElement(Yr,null,"Confirm and Promote"),o.createElement(Qr,null,"Once an artist accepts, the booking is confirmed in our system. Both you and the artist can promote the event to your respective audiences through our integrated marketing tools."))),o.createElement(Ur,null,o.createElement(Hr,null,"5"),o.createElement(Gr,null,o.createElement(Yr,null,"Host the Event"),o.createElement(Qr,null,"Welcome the artist and their fans to your venue. Our system can help with check-ins, ticket scanning, and attendance tracking if needed."))),o.createElement(Ur,null,o.createElement(Hr,null,"6"),o.createElement(Gr,null,o.createElement(Yr,null,"Review and Analyze"),o.createElement(Qr,null,"After the event, both parties can leave reviews. You'll receive detailed analytics about attendance, revenue, and audience engagement to help inform future booking decisions."))))),o.createElement(_r,null,o.createElement(Bl,null,"Exclusive Venue Features"),o.createElement(mL,null,o.createElement(Gd,null,o.createElement(Xd,{src:"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:"Affiliate Program"}),o.createElement(Yd,null,o.createElement(Qd,null,"Two-Tier Affiliate Program"),o.createElement(Kd,null,"Earn 2.5% of all donations received by artists you refer to the platform, plus 2.5% from artists they refer. Create a passive income stream while supporting independent music."),o.createElement(pL,{as:ce,to:"/affiliate-program"},"Find Out About The Affiliate Program"))),o.createElement(Gd,{reversed:!0},o.createElement(Yd,null,o.createElement(Qd,null,"Customizable Submission Form"),o.createElement(Kd,null,"Get a branded artist submission form that matches your venue's aesthetic. Embed it on your website to collect submissions from interested artists and funnel them directly into your TrueFans CONNECT dashboard."),o.createElement(A0,null,o.createElement(Kr,null,o.createElement(Xr,null,"🎨"),o.createElement(Jr,null,"Customize colors and branding")),o.createElement(Kr,null,o.createElement(Xr,null,"📱"),o.createElement(Jr,null,"Mobile-responsive design")),o.createElement(Kr,null,o.createElement(Xr,null,"📋"),o.createElement(Jr,null,"Collect exactly the information you need")))),o.createElement(Xd,{src:"https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:"Submission Form"})),o.createElement(Gd,null,o.createElement(Xd,{src:"https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:"Marketing Tools"}),o.createElement(Yd,null,o.createElement(Qd,null,"Integrated Marketing Tools"),o.createElement(Kd,null,"Promote your events with our suite of marketing tools designed specifically for music venues. Create professional event pages, social media graphics, and email campaigns with just a few clicks."),o.createElement(A0,null,o.createElement(Kr,null,o.createElement(Xr,null,"🎟️"),o.createElement(Jr,null,"Ticketing integration")),o.createElement(Kr,null,o.createElement(Xr,null,"📱"),o.createElement(Jr,null,"Social media campaign templates")),o.createElement(Kr,null,o.createElement(Xr,null,"📧"),o.createElement(Jr,null,"Automated email marketing"))))))),o.createElement(_r,null,o.createElement(Bl,null,"Venue Success Stories"),o.createElement(fL,null,o.createElement(Jd,null,o.createElement(qd,null,`"Since joining TrueFans CONNECT, we've filled our calendar with diverse, high-quality acts that have brought in new audiences. Our bar sales have increased by 45% on nights featuring platform artists, and we've built relationships with performers who now make our venue a regular stop on their tours."`),o.createElement(Zd,null,o.createElement(em,{src:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",alt:"John Smith"}),o.createElement(tm,null,o.createElement(nm,null,"John Smith"),o.createElement(rm,null,"Owner, The Basement Jazz Club")))),o.createElement(Jd,null,o.createElement(qd,null,`"As a small venue in a competitive market, finding reliable talent was always a challenge. TrueFans CONNECT has connected us with artists who not only deliver amazing performances but also bring their dedicated fans with them. The platform's analytics have helped us understand which genres work best for our space."`),o.createElement(Zd,null,o.createElement(em,{src:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",alt:"Maria Rodriguez"}),o.createElement(tm,null,o.createElement(nm,null,"Maria Rodriguez"),o.createElement(rm,null,"Events Manager, Soundwave Lounge")))),o.createElement(Jd,null,o.createElement(qd,null,`"The affiliate program has been an unexpected revenue stream for us. We've earned over $5,000 in passive income just by referring artists to the platform. It's a win-win: we help musicians find more opportunities, and we get rewarded for growing the community."`),o.createElement(Zd,null,o.createElement(em,{src:"https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",alt:"David Johnson"}),o.createElement(tm,null,o.createElement(nm,null,"David Johnson"),o.createElement(rm,null,"Booking Agent, Harmony Hall")))))),o.createElement(_r,null,o.createElement(hL,null,o.createElement(gL,null,o.createElement(yL,null,"Ready to Transform Your Venue?"),o.createElement(vL,null,"Join hundreds of successful venues that have increased their bookings, attendance, and revenue with TrueFans CONNECT."),o.createElement($L,null,o.createElement(xL,{as:ce,to:"/venue-signup"},"Register Your Venue"))))),o.createElement(_r,null,o.createElement(EL,null,o.createElement(wL,null,"Frequently Asked Questions"),o.createElement(bL,null,o.createElement(qr,null,o.createElement(Zr,null,"How much does it cost to register my venue?"),o.createElement(eo,null,"Basic registration is completely free. You can create a venue profile, receive up to 5 booking requests per month, and access our community of independent artists without any cost. For more features and unlimited bookings, we offer affordable Professional and Enterprise plans.")),o.createElement(qr,null,o.createElement(Zr,null,"What types of venues can join?"),o.createElement(eo,null,"We welcome all types of music venues including bars, clubs, concert halls, theaters, cafés, restaurants with performance spaces, and non-traditional venues. If you host live music performances, we'd love to have you in our network.")),o.createElement(qr,null,o.createElement(Zr,null,"How do you vet the artists on your platform?"),o.createElement(eo,null,"All artists go through a multi-step verification process that includes reviewing their performance history, media quality, professionalism, and fan engagement metrics. We also collect feedback from venues after each performance to ensure ongoing quality.")),o.createElement(qr,null,o.createElement(Zr,null,"Can I cancel my subscription at any time?"),o.createElement(eo,null,"Yes, you can cancel your paid subscription at any time. There are no long-term contracts or cancellation fees. If you cancel, you'll maintain access to your paid features until the end of your current billing cycle, after which you'll be downgraded to the Basic plan.")),o.createElement(qr,null,o.createElement(Zr,null,"How does the affiliate program work?"),o.createElement(eo,null,"When you refer an artist to our platform using your unique referral link, you earn 2.5% of all donations they receive through TrueFans CONNECT. Additionally, you earn 2.5% from any artists they refer (second-tier). There's no cap on your earnings, and payments are made monthly.")),o.createElement(qr,null,o.createElement(Zr,null,"Do you handle ticketing and payments?"),o.createElement(eo,null,"Our Professional and Enterprise plans include integration with popular ticketing platforms. We can also process direct payments between venues and artists if desired, with a small processing fee. Many venues prefer to handle their own ticketing and payments, which is also perfectly fine."))))))))),tL=s.main`
  width: 100%;
`,P0=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,nL=s.section`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  padding: ${({theme:e})=>e.space.xl} 0;
  color: white;
`,rL=s.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`,oL=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.md};
`,iL=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  opacity: 0.9;
  margin-bottom: ${({theme:e})=>e.space.lg};
`,aL=s.div`
  display: flex;
  justify-content: center;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`,lL=s(Y)`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.xl}`};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,sL=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,cL=s.div``,_r=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`,Bl=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
  padding-bottom: ${({theme:e})=>e.space.xs};
  border-bottom: 2px solid ${({theme:e})=>e.colors.primary};
`,uL=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Ol=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,Vl=s.div`
  font-size: 2.5rem;
  margin-bottom: ${({theme:e})=>e.space.md};
`,jl=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Wl=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
`,dL=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.lg};
`,Ur=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,Hr=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  border-radius: 50%;
  flex-shrink: 0;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    margin-bottom: ${({theme:e})=>e.space.md};
  }
`,Gr=s.div`
  flex: 1;
`,Yr=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Qr=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
`,mL=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
`,Gd=s.div`
  display: grid;
  grid-template-columns: ${({reversed:e})=>"1fr 1fr"};
  gap: ${({theme:e})=>e.space.lg};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
  
  ${({reversed:e})=>e&&`
    @media (min-width: 769px) {
      direction: rtl;
      
      > * {
        direction: ltr;
      }
    }
  `}
`,Yd=s.div`
  padding: ${({theme:e})=>e.space.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Qd=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Kd=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
`,Xd=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    height: 300px;
  }
`,pL=s(Y)`
  align-self: flex-start;
  padding: ${({theme:e})=>`${e.space.md} ${e.space.lg}`};
  background-color: ${({theme:e})=>e.colors.secondary};
  color: white;
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.secondaryDark};
  }
`,A0=s.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({theme:e})=>e.space.lg} 0;
`,Kr=s.li`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`,Xr=s.span`
  font-size: ${({theme:e})=>e.fontSizes.lg};
`,Jr=s.span`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
`,fL=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,Jd=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,qd=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-style: italic;
`,Zd=s.div`
  display: flex;
  align-items: center;
`,em=s.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
`,tm=s.div``,nm=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,rm=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,hL=s.div`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  color: white;
  text-align: center;
`,gL=s.div`
  max-width: 800px;
  margin: 0 auto;
`,yL=s.h3`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.md};
`,vL=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  opacity: 0.9;
  margin-bottom: ${({theme:e})=>e.space.lg};
`,$L=s.div`
  display: flex;
  justify-content: center;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`,xL=s(Y)`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.xl}`};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,EL=s.div``,wL=s.h3`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
  text-align: center;
`,bL=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,qr=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,Zr=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,eo=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
`,SL=()=>{var D;const{id:e}=eS(),t=$r(),n=Uo(),r=b.useRef(null),[i,a]=b.useState(!1),[l,c]=b.useState(!1),[u,d]=b.useState(!1),[p,m]=b.useState(10),[f,g]=b.useState(""),[$,x]=b.useState(""),[w,v]=b.useState(!1),[h,y]=b.useState(!1),[E,k]=b.useState(null),[z,P]=b.useState(!1),[C,M]=b.useState(1),[B,ae]=b.useState(!1),[H,ee]=b.useState(null);b.useEffect(()=>{new URLSearchParams(t.search).get("support")==="true"&&a(!0)},[t]),b.useEffect(()=>(r.current&&(z?r.current.play().catch(T=>{console.error("Audio playback failed:",T),P(!1)}):r.current.pause()),()=>{r.current&&r.current.pause()}),[z,E]);const I={id:parseInt(e),name:e==="1"?"Eliza Johnson":e==="2"?"Marcus Rivera":e==="3"?"Emily Chen":e==="4"?"David Williams":e==="5"?"Sophia Martinez":e==="6"?"James Wilson":e==="7"?"Olivia Taylor":e==="8"?"Michael Brown":"Unknown Artist",genre:e==="1"?"Folk":e==="2"?"Hip Hop":e==="3"?"Electronic":e==="4"?"Rock":e==="5"?"Jazz":e==="6"?"Country":e==="7"?"Pop":e==="8"?"R&B":"Various",location:e==="1"?"Nashville, TN":e==="2"?"Atlanta, GA":e==="3"?"Los Angeles, CA":e==="4"?"Chicago, IL":e==="5"?"New Orleans, LA":e==="6"?"Austin, TX":e==="7"?"New York, NY":e==="8"?"Philadelphia, PA":"Unknown Location",image:e==="1"?"https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg":e==="2"?"https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg":e==="3"?"https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg":e==="4"?"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg":e==="5"?"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg":e==="6"?"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg":e==="7"?"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg":e==="8"?"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg":"https://via.placeholder.com/500",coverImage:"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",bio:e==="1"?"Indie folk artist with a passion for storytelling through music. Based in Nashville, I blend traditional folk with contemporary influences to create authentic, heartfelt songs that connect with listeners on a personal level.":e==="2"?"Urban poet and producer creating authentic hip hop with a message. My music draws from personal experiences growing up in Atlanta, addressing social issues while delivering infectious beats and thoughtful lyrics.":e==="3"?"Electronic music producer pushing boundaries with innovative sounds. I experiment with synthesizers, field recordings, and digital manipulation to create immersive sonic landscapes that challenge conventional electronic music.":e==="4"?"Rock guitarist and vocalist with a classic sound and modern edge. Influenced by the golden era of rock while incorporating contemporary elements, my music delivers powerful riffs, memorable hooks, and raw energy.":e==="5"?"Jazz vocalist and composer blending traditional and contemporary styles. My approach to jazz honors the classics while exploring new harmonic territories, resulting in performances that are both familiar and surprising.":e==="6"?"Country singer-songwriter with authentic roots and modern appeal. My songs tell stories of real life experiences with honesty and heart, combining traditional country instrumentation with contemporary production.":e==="7"?"Pop vocalist and songwriter crafting catchy melodies with depth. I create accessible pop music that doesn't sacrifice substance, with lyrics that explore personal growth, relationships, and social awareness.":e==="8"?"R&B artist with soulful vocals and heartfelt lyrics. My music draws from classic soul and contemporary R&B influences, delivering smooth vocals, rich harmonies, and grooves that move both body and spirit.":"Independent artist creating original music.",supporters:e==="1"?87:e==="2"?124:e==="3"?56:e==="4"?92:e==="5"?43:e==="6"?78:e==="7"?112:e==="8"?67:50,totalDonations:e==="1"?"$1,245.00":e==="2"?"$2,180.50":e==="3"?"$895.25":e==="4"?"$1,567.75":e==="5"?"$720.00":e==="6"?"$1,120.50":e==="7"?"$1,890.25":e==="8"?"$950.75":"$500.00",featured:e==="1"||e==="2"||e==="4"||e==="7",socialLinks:{instagram:"https://instagram.com",twitter:"https://twitter.com",facebook:"https://facebook.com",youtube:"https://youtube.com",spotify:"https://spotify.com",soundcloud:"https://soundcloud.com"},music:[{id:1,title:"Summer Memories",duration:"3:42",plays:1245,image:"https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",audioUrl:"https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0c6ff1bab.mp3?filename=acoustic-guitars-ambient-uplifting-background-music-for-videos-5642.mp3"},{id:2,title:"City Lights",duration:"4:15",plays:987,image:"https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",audioUrl:"https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=inspiring-cinematic-ambient-116199.mp3"},{id:3,title:"Rainy Day",duration:"3:28",plays:1532,image:"https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",audioUrl:"https://cdn.pixabay.com/download/audio/2022/04/27/audio_c2e4e07f04.mp3?filename=relaxing-mountains-rivers-streams-running-water-18178.mp3"}],upcomingShows:[{id:1,venue:"The Sound Lounge",location:"Nashville, TN",date:"2023-11-15",time:"8:00 PM",ticketPrice:25},{id:2,venue:"Blue Note",location:"New York, NY",date:"2023-12-05",time:"9:30 PM",ticketPrice:35}]},de=T=>{T.preventDefault(),console.log("Processing donation:",{amount:f?parseFloat(f):p,message:$,artistId:I.id}),v(!0),setTimeout(()=>{v(!1),a(!1),m(10),g(""),x(""),n(`/artist-profile/${e}`,{replace:!0})},3e3)},ne=()=>{y(!h),console.log(`${h?"Unfollowing":"Following"} artist:`,I.id);const T=document.createElement("div");T.className="follow-notification",T.textContent=h?`Unfollowed ${I.name}`:`Now following ${I.name}`,document.body.appendChild(T),setTimeout(()=>{document.body.removeChild(T)},3e3)},le=()=>{c(!0)},F=()=>{const T=`${window.location.origin}/artist-profile/${e}`;navigator.clipboard.writeText(T).then(()=>{const j=document.getElementById("copy-link-button");j.textContent="Copied!",setTimeout(()=>{j.textContent="Copy Link"},2e3)}).catch(j=>{console.error("Failed to copy link: ",j)})},O=T=>{E===T.id?P(!z):(k(T.id),P(!0))},W=T=>{ee(T),d(!0)},V=T=>{T.preventDefault(),console.log("Processing ticket purchase:",{showId:H.id,quantity:C,totalPrice:(H.ticketPrice*C).toFixed(2)}),ae(!0),setTimeout(()=>{ae(!1),d(!1),M(1),ee(null)},3e3)},N=I.music.find(T=>T.id===E);return o.createElement(kL,{as:be.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},o.createElement(CL,{src:I.coverImage,alt:`${I.name} cover`}),o.createElement(TL,null,o.createElement(zL,null,o.createElement(PL,null,o.createElement(AL,{src:I.image,alt:I.name})),o.createElement(FL,null,o.createElement(NL,null,I.name),o.createElement(LL,null,o.createElement(DL,null,I.genre),o.createElement(RL,null,I.location)),o.createElement(IL,null,o.createElement(F0,null,o.createElement(N0,null,I.supporters),o.createElement(L0,null,"Supporters")),o.createElement(F0,null,o.createElement(N0,null,I.totalDonations),o.createElement(L0,null,"Total Donations"))),o.createElement(ML,null,o.createElement(BL,{onClick:()=>a(!0)},"Support Artist"),o.createElement(OL,{isFollowing:h,onClick:ne},h?"Following":"Follow"),o.createElement(VL,{onClick:le},"Share")))),o.createElement(jL,null,o.createElement(WL,null,o.createElement(om,null,o.createElement(im,null,"About"),o.createElement(_L,null,I.bio)),o.createElement(om,null,o.createElement(im,null,"Music"),o.createElement(UL,null,I.music.map(T=>o.createElement(HL,{key:T.id},o.createElement(GL,{src:T.image,alt:T.title}),o.createElement(YL,null,o.createElement(QL,null,T.title),o.createElement(KL,null,o.createElement(XL,null,T.duration),o.createElement(JL,null,T.plays," plays"))),o.createElement(qL,{isPlaying:z&&E===T.id,onClick:()=>O(T)},z&&E===T.id?"❚❚":"▶")))),N&&o.createElement("audio",{ref:r,src:N.audioUrl,onEnded:()=>P(!1)}),E&&o.createElement(ZL,null,o.createElement(eD,null,"Now Playing: ",(D=I.music.find(T=>T.id===E))==null?void 0:D.title),o.createElement(tD,null,o.createElement(D0,{onClick:()=>P(!z)},z?"❚❚ Pause":"▶ Play"),o.createElement(D0,{onClick:()=>{k(null),P(!1)}},"■ Stop")))),o.createElement(om,null,o.createElement(im,null,"Upcoming Shows"),I.upcomingShows.length>0?o.createElement(nD,null,I.upcomingShows.map(T=>o.createElement(rD,{key:T.id},o.createElement(oD,null,new Date(T.date).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})),o.createElement(iD,null,o.createElement(aD,null,T.venue),o.createElement(lD,null,T.location)),o.createElement(sD,null,T.time),o.createElement(cD,{onClick:()=>W(T)},"Get Tickets")))):o.createElement(uD,null,"No upcoming shows scheduled."))),o.createElement(dD,null,o.createElement(am,null,o.createElement(lm,null,"Support ",I.name),o.createElement(mD,null,"Your direct support helps me continue creating music independently."),o.createElement(pD,{onClick:()=>a(!0)},"Donate Now")),o.createElement(am,null,o.createElement(lm,null,"Connect"),o.createElement(fD,null,o.createElement(to,{href:I.socialLinks.instagram,target:"_blank",rel:"noopener noreferrer"},o.createElement(no,null,"📷"),o.createElement(ro,null,"Instagram")),o.createElement(to,{href:I.socialLinks.twitter,target:"_blank",rel:"noopener noreferrer"},o.createElement(no,null,"🐦"),o.createElement(ro,null,"Twitter")),o.createElement(to,{href:I.socialLinks.facebook,target:"_blank",rel:"noopener noreferrer"},o.createElement(no,null,"👍"),o.createElement(ro,null,"Facebook")),o.createElement(to,{href:I.socialLinks.youtube,target:"_blank",rel:"noopener noreferrer"},o.createElement(no,null,"▶️"),o.createElement(ro,null,"YouTube")),o.createElement(to,{href:I.socialLinks.spotify,target:"_blank",rel:"noopener noreferrer"},o.createElement(no,null,"🎵"),o.createElement(ro,null,"Spotify")),o.createElement(to,{href:I.socialLinks.soundcloud,target:"_blank",rel:"noopener noreferrer"},o.createElement(no,null,"☁️"),o.createElement(ro,null,"SoundCloud")))),o.createElement(am,null,o.createElement(lm,null,"Recent Supporters"),o.createElement(hD,null,o.createElement(sm,null,o.createElement(cm,{src:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",alt:"John D."}),o.createElement(um,null,o.createElement(dm,null,"John D."),o.createElement(mm,null,"$25.00"))),o.createElement(sm,null,o.createElement(cm,{src:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",alt:"Sarah M."}),o.createElement(um,null,o.createElement(dm,null,"Sarah M."),o.createElement(mm,null,"$15.00"))),o.createElement(sm,null,o.createElement(cm,{src:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",alt:"David R."}),o.createElement(um,null,o.createElement(dm,null,"David R."),o.createElement(mm,null,"$50.00")))))))),i&&o.createElement(pm,{onClick:()=>!w&&a(!1)},o.createElement(fm,{onClick:T=>T.stopPropagation()},w?o.createElement(R0,null,o.createElement(I0,null,"✓"),o.createElement(M0,null,"Thank You!"),o.createElement(B0,null,"Your donation to ",I.name," has been processed successfully.")):o.createElement(o.Fragment,null,o.createElement(hm,null,o.createElement(gm,null,"Support ",I.name),o.createElement(ym,{onClick:()=>a(!1)},"×")),o.createElement(gD,{onSubmit:de},o.createElement(yD,null,"Your direct support helps me continue creating music independently."),o.createElement(vD,null,o.createElement($D,null,"Select an amount:"),o.createElement(xD,null,o.createElement(_l,{selected:p===5&&!f,onClick:()=>{m(5),g("")}},"$5"),o.createElement(_l,{selected:p===10&&!f,onClick:()=>{m(10),g("")}},"$10"),o.createElement(_l,{selected:p===25&&!f,onClick:()=>{m(25),g("")}},"$25"),o.createElement(_l,{selected:p===50&&!f,onClick:()=>{m(50),g("")}},"$50")),o.createElement(ED,null,o.createElement(wD,null,"Or enter a custom amount:"),o.createElement(bD,{type:"number",min:"1",step:"0.01",placeholder:"Custom amount",value:f,onChange:T=>g(T.target.value)}))),o.createElement(SD,null,o.createElement(kD,null,"Add a message (optional):"),o.createElement(TD,{placeholder:"Your message to the artist...",value:$,onChange:T=>x(T.target.value)})),o.createElement(CD,{type:"submit"},"Donate $",f?parseFloat(f).toFixed(2):p.toFixed(2)),o.createElement(zD,null,"Secure payment processing. 80% goes directly to the artist."))))),l&&o.createElement(pm,{onClick:()=>c(!1)},o.createElement(fm,{onClick:T=>T.stopPropagation()},o.createElement(hm,null,o.createElement(gm,null,"Share ",I.name,"'s Profile"),o.createElement(ym,{onClick:()=>c(!1)},"×")),o.createElement(PD,null,o.createElement(AD,null,"Share this artist with your friends and help them grow their audience."),o.createElement(FD,null,o.createElement(vm,{onClick:()=>window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,"_blank")},o.createElement($m,null,"👍"),o.createElement(xm,null,"Facebook")),o.createElement(vm,{onClick:()=>window.open(`https://twitter.com/intent/tweet?text=Check out ${encodeURIComponent(I.name)} on TrueFans CONNECT™&url=${encodeURIComponent(window.location.href)}`,"_blank")},o.createElement($m,null,"🐦"),o.createElement(xm,null,"Twitter")),o.createElement(vm,{onClick:()=>window.open(`mailto:?subject=Check out ${encodeURIComponent(I.name)} on TrueFans CONNECT™&body=I thought you might like this artist: ${encodeURIComponent(window.location.href)}`,"_blank")},o.createElement($m,null,"✉️"),o.createElement(xm,null,"Email"))),o.createElement(ND,null,o.createElement(LD,null,"Or copy this link:"),o.createElement(DD,{value:window.location.href,readOnly:!0}),o.createElement(RD,{id:"copy-link-button",onClick:F},"Copy Link"))))),u&&H&&o.createElement(pm,{onClick:()=>!B&&d(!1)},o.createElement(fm,{onClick:T=>T.stopPropagation()},B?o.createElement(R0,null,o.createElement(I0,null,"✓"),o.createElement(M0,null,"Tickets Confirmed!"),o.createElement(B0,null,"Your tickets for ",I.name," at ",H.venue," have been reserved. Check your email for details.")):o.createElement(o.Fragment,null,o.createElement(hm,null,o.createElement(gm,null,"Get Tickets"),o.createElement(ym,{onClick:()=>d(!1)},"×")),o.createElement(ID,{onSubmit:V},o.createElement(MD,null,o.createElement(BD,null,I.name),o.createElement(OD,null,o.createElement(VD,null,H.venue),o.createElement(jD,null,H.location)),o.createElement(WD,null,new Date(H.date).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})," at ",H.time)),o.createElement(_D,null,o.createElement(UD,null,"Ticket Price:"),o.createElement(HD,null,"$",H.ticketPrice.toFixed(2))),o.createElement(GD,null,o.createElement(YD,null,"Number of Tickets:"),o.createElement(QD,null,o.createElement(O0,{type:"button",onClick:()=>M(Math.max(1,C-1))},"-"),o.createElement(KD,{type:"number",min:"1",max:"10",value:C,onChange:T=>M(Math.min(10,Math.max(1,parseInt(T.target.value)||1)))}),o.createElement(O0,{type:"button",onClick:()=>M(Math.min(10,C+1))},"+"))),o.createElement(XD,null,o.createElement(JD,null,"Total:"),o.createElement(qD,null,"$",(H.ticketPrice*C).toFixed(2))),o.createElement(ZD,{type:"submit"},"Purchase Tickets"),o.createElement(eR,null,"Tickets will be sent to your email. No refunds available within 24 hours of the event."))))),o.createElement("style",null,`
          .follow-notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 12px 20px;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            animation: fadeInOut 3s ease;
          }
          
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(20px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
        `))},kL=s.main`
  width: 100%;
  background-color: ${({theme:e})=>e.colors.background};
`,TL=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
  position: relative;
  margin-top: -100px;
`,CL=s.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`,zL=s.div`
  display: flex;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
  margin-bottom: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`,PL=s.div`
  margin-right: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    margin-right: 0;
    margin-bottom: ${({theme:e})=>e.space.lg};
  }
`,AL=s.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: ${({theme:e})=>e.shadows.md};
`,FL=s.div`
  flex: 1;
`,NL=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,LL=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    justify-content: center;
  }
`,DL=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.primary};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,RL=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
`,IL=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.xl};
  margin-bottom: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    justify-content: center;
  }
`,F0=s.div``,N0=s.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,L0=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,ML=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    justify-content: center;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,BL=s(Y)`
  padding: ${({theme:e})=>e.space.md} ${({theme:e})=>e.space.xl};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,OL=s(Y)`
  padding: ${({theme:e})=>e.space.md} ${({theme:e})=>e.space.xl};
  background-color: ${({theme:e,isFollowing:t})=>t?e.colors.success:e.colors.trustworthyNavy};
  color: white;
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e,isFollowing:t})=>t?e.colors.successDark:e.colors.trustworthyNavyLight};
  }
`,VL=s(Y)`
  padding: ${({theme:e})=>e.space.md} ${({theme:e})=>e.space.xl};
  background-color: transparent;
  color: ${({theme:e})=>e.colors.darkText};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.lightGray};
  }
`,jL=s.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,WL=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
`,om=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,im=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
  position: relative;
  padding-bottom: ${({theme:e})=>e.space.sm};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: ${({theme:e})=>e.colors.primary};
  }
`,_L=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
`,UL=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,HL=s.div`
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.background};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({theme:e})=>e.shadows.md};
  }
`,GL=s.img`
  width: 60px;
  height: 60px;
  border-radius: ${({theme:e})=>e.radii.sm};
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
`,YL=s.div`
  flex: 1;
`,QL=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,KL=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
`,XL=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,JL=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,qL=s.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({theme:e,isPlaying:t})=>t?e.colors.success:e.colors.primary};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e,isPlaying:t})=>t?e.colors.successDark:e.colors.primaryDark};
    transform: scale(1.1);
  }
`,ZL=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  color: white;
  padding: ${({theme:e})=>e.space.md};
  border-radius: ${({theme:e})=>e.radii.md};
  margin-top: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({theme:e})=>e.space.sm};
  }
`,eD=s.div`
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,tD=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.sm};
`,D0=s.button`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: ${({theme:e})=>`${e.space.xs} ${e.space.sm}`};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`,nD=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,rD=s.div`
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.background};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({theme:e})=>e.shadows.md};
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:e})=>e.space.sm};
  }
`,oD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.primary};
  width: 120px;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: auto;
  }
`,iD=s.div`
  flex: 1;
`,aD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,lD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,sD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  margin-right: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    margin-right: 0;
  }
`,cD=s(Y)`
  padding: ${({theme:e})=>`${e.space.sm} ${e.space.md}`};
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  color: white;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.trustworthyNavyLight};
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    align-self: flex-end;
  }
`,uD=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  font-style: italic;
`,dD=s.aside`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
`,am=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,lm=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
  position: relative;
  padding-bottom: ${({theme:e})=>e.space.sm};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${({theme:e})=>e.colors.primary};
  }
`,mD=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
  margin-bottom: ${({theme:e})=>e.space.md};
`,pD=s(Y)`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,fD=s.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.space.md};
`,to=s.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.darkText};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateX(3px);
    color: ${({theme:e})=>e.colors.primary};
  }
`,no=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  margin-right: ${({theme:e})=>e.space.sm};
`,ro=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
`,hD=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,sm=s.div`
  display: flex;
  align-items: center;
`,cm=s.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
`,um=s.div``,dm=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
`,mm=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.primary};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,pm=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${({theme:e})=>e.space.md};
`,fm=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${({theme:e})=>e.shadows.lg};
`,hm=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.space.lg};
  border-bottom: 1px solid ${({theme:e})=>e.colors.lightGray};
`,gm=s.h2`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,ym=s.button`
  background: none;
  border: none;
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  color: ${({theme:e})=>e.colors.lightText};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    color: ${({theme:e})=>e.colors.darkText};
  }
`,gD=s.form`
  padding: ${({theme:e})=>e.space.lg};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.lg};
`,yD=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,vD=s.div``,$D=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,xD=s.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.space.sm};
  margin-bottom: ${({theme:e})=>e.space.md};
`,_l=s.div`
  padding: ${({theme:e})=>e.space.md};
  text-align: center;
  border-radius: ${({theme:e})=>e.radii.md};
  border: 1px solid ${({theme:e,selected:t})=>t?e.colors.primary:e.colors.mediumGray};
  background-color: ${({theme:e,selected:t})=>t?`${e.colors.primary}15`:"white"};
  color: ${({theme:e,selected:t})=>t?e.colors.primary:e.colors.darkText};
  font-weight: ${({theme:e,selected:t})=>t?e.fontWeights.semiBold:e.fontWeights.medium};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    background-color: ${({theme:e})=>`${e.colors.primary}10`};
  }
`,ED=s.div`
  margin-top: ${({theme:e})=>e.space.md};
`,wD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,bD=s.input`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>`${e.colors.primary}33`};
  }
`,SD=s.div``,kD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,TD=s.textarea`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>`${e.colors.primary}33`};
  }
`,CD=s(Y)`
  padding: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,zD=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
  text-align: center;
`,R0=s.div`
  padding: ${({theme:e})=>e.space.xl};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`,I0=s.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.success};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,M0=s.h3`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,B0=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,PD=s.div`
  padding: ${({theme:e})=>e.space.lg};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.lg};
`,AD=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,FD=s.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: ${({theme:e})=>e.space.md};
`,vm=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
  }
`,$m=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,xm=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkText};
`,ND=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.sm};
`,LD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
`,DD=s.input`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  margin-bottom: ${({theme:e})=>e.space.sm};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>`${e.colors.primary}33`};
  }
`,RD=s(Y)`
  align-self: flex-end;
  padding: ${({theme:e})=>`${e.space.sm} ${e.space.md}`};
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  color: white;
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.trustworthyNavyLight};
  }
`,ID=s.form`
  padding: ${({theme:e})=>e.space.lg};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.lg};
`,MD=s.div`
  margin-bottom: ${({theme:e})=>e.space.md};
`,BD=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,OD=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,VD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.primary};
`,jD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,WD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
`,_D=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.space.md} 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.lightGray};
`,UD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
`,HD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,GD=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.sm};
`,YD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
`,QD=s.div`
  display: flex;
  align-items: center;
`,O0=s.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.colors.lightGray};
  border: none;
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:first-child {
    border-radius: ${({theme:e})=>`${e.radii.md} 0 0 ${e.radii.md}`};
  }
  
  &:last-child {
    border-radius: ${({theme:e})=>`0 ${e.radii.md} ${e.radii.md} 0`};
  }
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.mediumGray};
  }
`,KD=s.input`
  width: 60px;
  height: 40px;
  text-align: center;
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  font-size: ${({theme:e})=>e.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
  
  /* Hide spinner buttons */
  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    margin: 0;
  }
`,XD=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.space.md} 0;
  border-top: 1px solid ${({theme:e})=>e.colors.lightGray};
  margin-top: ${({theme:e})=>e.space.sm};
`,JD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,qD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.primary};
`,ZD=s(Y)`
  padding: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,eR=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
  text-align: center;
`;function tR(){return o.createElement(Sx,{theme:Cx},o.createElement(Tx,null),o.createElement(zk,null),o.createElement(yS,null,o.createElement(et,{path:"/",element:o.createElement(F5,null)}),o.createElement(et,{path:"/about",element:o.createElement(rP,null)}),o.createElement(et,{path:"/artist-signup",element:o.createElement(WP,null)}),o.createElement(et,{path:"/venue-signup",element:o.createElement(F4,null)}),o.createElement(et,{path:"/donation-system",element:o.createElement(f6,null)}),o.createElement(et,{path:"/affiliate-program",element:o.createElement(cA,null)}),o.createElement(et,{path:"/login",element:o.createElement(bF,null)}),o.createElement(et,{path:"/terms",element:o.createElement(_F,null)}),o.createElement(et,{path:"/privacy",element:o.createElement(JF,null)}),o.createElement(et,{path:"/artists-directory",element:o.createElement(uN,null)}),o.createElement(et,{path:"/venue-portal",element:o.createElement(eL,null)}),o.createElement(et,{path:"/venue-portal-info",element:o.createElement(hS,{to:"/venue-portal",replace:!0})}),o.createElement(et,{path:"/artist-profile/:id",element:o.createElement(SL,null)}),o.createElement(et,{path:"*",element:o.createElement(cN,null)})),o.createElement(Gk,null))}Em.createRoot(document.getElementById("root")).render(o.createElement(o.StrictMode,null,o.createElement(SS,null,o.createElement(Sx,{theme:Cx},o.createElement(Tx,null),o.createElement(tR,null)))));
