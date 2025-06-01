function BE(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const i in o)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(o,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>o[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function gv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yv={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=Symbol.for("react.element"),VE=Symbol.for("react.portal"),OE=Symbol.for("react.fragment"),jE=Symbol.for("react.strict_mode"),WE=Symbol.for("react.profiler"),_E=Symbol.for("react.provider"),UE=Symbol.for("react.context"),HE=Symbol.for("react.forward_ref"),GE=Symbol.for("react.suspense"),YE=Symbol.for("react.memo"),QE=Symbol.for("react.lazy"),kh=Symbol.iterator;function KE(e){return e===null||typeof e!="object"?null:(e=kh&&e[kh]||e["@@iterator"],typeof e=="function"?e:null)}var vv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$v=Object.assign,xv={};function So(e,t,n){this.props=e,this.context=t,this.refs=xv,this.updater=n||vv}So.prototype.isReactComponent={};So.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};So.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ev(){}Ev.prototype=So.prototype;function Jp(e,t,n){this.props=e,this.context=t,this.refs=xv,this.updater=n||vv}var qp=Jp.prototype=new Ev;qp.constructor=Jp;$v(qp,So.prototype);qp.isPureReactComponent=!0;var Sh=Array.isArray,wv=Object.prototype.hasOwnProperty,Zp={current:null},bv={key:!0,ref:!0,__self:!0,__source:!0};function kv(e,t,n){var o,i={},a=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)wv.call(t,o)&&!bv.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var u=Array(c),d=0;d<c;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps,c)i[o]===void 0&&(i[o]=c[o]);return{$$typeof:Xi,type:e,key:a,ref:l,props:i,_owner:Zp.current}}function XE(e,t){return{$$typeof:Xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ef(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xi}function JE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Th=/\/+/g;function Vc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?JE(""+e.key):t.toString(36)}function Xl(e,t,n,o,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Xi:case VE:l=!0}}if(l)return l=e,i=i(l),e=o===""?"."+Vc(l,0):o,Sh(i)?(n="",e!=null&&(n=e.replace(Th,"$&/")+"/"),Xl(i,t,n,"",function(d){return d})):i!=null&&(ef(i)&&(i=XE(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Th,"$&/")+"/")+e)),t.push(i)),1;if(l=0,o=o===""?".":o+":",Sh(e))for(var c=0;c<e.length;c++){a=e[c];var u=o+Vc(a,c);l+=Xl(a,t,n,u,i)}else if(u=KE(e),typeof u=="function")for(e=u.call(e),c=0;!(a=e.next()).done;)a=a.value,u=o+Vc(a,c++),l+=Xl(a,t,n,u,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function sa(e,t,n){if(e==null)return e;var o=[],i=0;return Xl(e,o,"","",function(a){return t.call(n,a,i++)}),o}function qE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var tt={current:null},Jl={transition:null},ZE={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:Jl,ReactCurrentOwner:Zp};function Sv(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:sa,forEach:function(e,t,n){sa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return sa(e,function(){t++}),t},toArray:function(e){return sa(e,function(t){return t})||[]},only:function(e){if(!ef(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=So;X.Fragment=OE;X.Profiler=WE;X.PureComponent=Jp;X.StrictMode=jE;X.Suspense=GE;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZE;X.act=Sv;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=$v({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=Zp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)wv.call(t,u)&&!bv.hasOwnProperty(u)&&(o[u]=t[u]===void 0&&c!==void 0?c[u]:t[u])}var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){c=Array(u);for(var d=0;d<u;d++)c[d]=arguments[d+2];o.children=c}return{$$typeof:Xi,type:e.type,key:i,ref:a,props:o,_owner:l}};X.createContext=function(e){return e={$$typeof:UE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_E,_context:e},e.Consumer=e};X.createElement=kv;X.createFactory=function(e){var t=kv.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:HE,render:e}};X.isValidElement=ef;X.lazy=function(e){return{$$typeof:QE,_payload:{_status:-1,_result:e},_init:qE}};X.memo=function(e,t){return{$$typeof:YE,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Jl.transition;Jl.transition={};try{e()}finally{Jl.transition=t}};X.unstable_act=Sv;X.useCallback=function(e,t){return tt.current.useCallback(e,t)};X.useContext=function(e){return tt.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return tt.current.useDeferredValue(e)};X.useEffect=function(e,t){return tt.current.useEffect(e,t)};X.useId=function(){return tt.current.useId()};X.useImperativeHandle=function(e,t,n){return tt.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return tt.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return tt.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return tt.current.useMemo(e,t)};X.useReducer=function(e,t,n){return tt.current.useReducer(e,t,n)};X.useRef=function(e){return tt.current.useRef(e)};X.useState=function(e){return tt.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return tt.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return tt.current.useTransition()};X.version="18.3.1";yv.exports=X;var b=yv.exports;const r=gv(b),ew=BE({__proto__:null,default:r},[b]);var Im={},Tv={exports:{}},vt={},Cv={exports:{}},zv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,V){var _=F.length;F.push(V);e:for(;0<_;){var O=_-1>>>1,L=F[O];if(0<i(L,V))F[O]=V,F[_]=L,_=O;else break e}}function n(F){return F.length===0?null:F[0]}function o(F){if(F.length===0)return null;var V=F[0],_=F.pop();if(_!==V){F[0]=_;e:for(var O=0,L=F.length,N=L>>>1;O<N;){var T=2*(O+1)-1,j=F[T],k=T+1,Q=F[k];if(0>i(j,_))k<L&&0>i(Q,j)?(F[O]=Q,F[k]=_,O=k):(F[O]=j,F[T]=_,O=T);else if(k<L&&0>i(Q,_))F[O]=Q,F[k]=_,O=k;else break e}}return V}function i(F,V){var _=F.sortIndex-V.sortIndex;return _!==0?_:F.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var u=[],d=[],p=1,m=null,f=3,g=!1,$=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var V=n(d);V!==null;){if(V.callback===null)o(d);else if(V.startTime<=F)o(d),V.sortIndex=V.expirationTime,t(u,V);else break;V=n(d)}}function E(F){if(x=!1,y(F),!$)if(n(u)!==null)$=!0,re(S);else{var V=n(d);V!==null&&se(E,V.startTime-F)}}function S(F,V){$=!1,x&&(x=!1,v(C),C=-1),g=!0;var _=f;try{for(y(V),m=n(u);m!==null&&(!(m.expirationTime>V)||F&&!le());){var O=m.callback;if(typeof O=="function"){m.callback=null,f=m.priorityLevel;var L=O(m.expirationTime<=V);V=e.unstable_now(),typeof L=="function"?m.callback=L:m===n(u)&&o(u),y(V)}else o(u);m=n(u)}if(m!==null)var N=!0;else{var T=n(d);T!==null&&se(E,T.startTime-V),N=!1}return N}finally{m=null,f=_,g=!1}}var z=!1,P=null,C=-1,I=5,B=-1;function le(){return!(e.unstable_now()-B<I)}function G(){if(P!==null){var F=e.unstable_now();B=F;var V=!0;try{V=P(!0,F)}finally{V?ee():(z=!1,P=null)}}else z=!1}var ee;if(typeof h=="function")ee=function(){h(G)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,de=R.port2;R.port1.onmessage=G,ee=function(){de.postMessage(null)}}else ee=function(){w(G,0)};function re(F){P=F,z||(z=!0,ee())}function se(F,V){C=w(function(){F(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){$||g||($=!0,re(S))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(F){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var _=f;f=V;try{return F()}finally{f=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var _=f;f=F;try{return V()}finally{f=_}},e.unstable_scheduleCallback=function(F,V,_){var O=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?O+_:O):_=O,F){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=_+L,F={id:p++,callback:V,priorityLevel:F,startTime:_,expirationTime:L,sortIndex:-1},_>O?(F.sortIndex=_,t(d,F),n(u)===null&&F===n(d)&&(x?(v(C),C=-1):x=!0,se(E,_-O))):(F.sortIndex=L,t(u,F),$||g||($=!0,re(S))),F},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(F){var V=f;return function(){var _=f;f=V;try{return F.apply(this,arguments)}finally{f=_}}}})(zv);Cv.exports=zv;var tw=Cv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nw=b,gt=tw;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pv=new Set,Ci={};function fr(e,t){fo(e,t),fo(e+"Capture",t)}function fo(e,t){for(Ci[e]=t,e=0;e<t.length;e++)Pv.add(t[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bm=Object.prototype.hasOwnProperty,rw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ch={},zh={};function ow(e){return Bm.call(zh,e)?!0:Bm.call(Ch,e)?!1:rw.test(e)?zh[e]=!0:(Ch[e]=!0,!1)}function iw(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function aw(e,t,n,o){if(t===null||typeof t>"u"||iw(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function nt(e,t,n,o,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];We[t]=new nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var tf=/[\-:]([a-z])/g;function nf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tf,nf);We[t]=new nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tf,nf);We[t]=new nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tf,nf);We[t]=new nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new nt(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function rf(e,t,n,o){var i=We.hasOwnProperty(t)?We[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(aw(t,n,i,o)&&(n=null),o||i===null?ow(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var pn=nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),Ur=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),of=Symbol.for("react.strict_mode"),Vm=Symbol.for("react.profiler"),Av=Symbol.for("react.provider"),Fv=Symbol.for("react.context"),af=Symbol.for("react.forward_ref"),Om=Symbol.for("react.suspense"),jm=Symbol.for("react.suspense_list"),lf=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),Lv=Symbol.for("react.offscreen"),Ph=Symbol.iterator;function Fo(e){return e===null||typeof e!="object"?null:(e=Ph&&e[Ph]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Oc;function si(e){if(Oc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oc=t&&t[1]||""}return`
`+Oc+e}var jc=!1;function Wc(e,t){if(!e||jc)return"";jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=o.stack.split(`
`),l=i.length-1,c=a.length-1;1<=l&&0<=c&&i[l]!==a[c];)c--;for(;1<=l&&0<=c;l--,c--)if(i[l]!==a[c]){if(l!==1||c!==1)do if(l--,c--,0>c||i[l]!==a[c]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=c);break}}}finally{jc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?si(e):""}function lw(e){switch(e.tag){case 5:return si(e.type);case 16:return si("Lazy");case 13:return si("Suspense");case 19:return si("SuspenseList");case 0:case 2:case 15:return e=Wc(e.type,!1),e;case 11:return e=Wc(e.type.render,!1),e;case 1:return e=Wc(e.type,!0),e;default:return""}}function Wm(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hr:return"Fragment";case Ur:return"Portal";case Vm:return"Profiler";case of:return"StrictMode";case Om:return"Suspense";case jm:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fv:return(e.displayName||"Context")+".Consumer";case Av:return(e._context.displayName||"Context")+".Provider";case af:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lf:return t=e.displayName||null,t!==null?t:Wm(e.type)||"Memo";case $n:t=e._payload,e=e._init;try{return Wm(e(t))}catch{}}return null}function sw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wm(t);case 8:return t===of?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cw(e){var t=Dv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){o=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ua(e){e._valueTracker||(e._valueTracker=cw(e))}function Nv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Dv(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function ds(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _m(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ah(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mv(e,t){t=t.checked,t!=null&&rf(e,"checked",t,!1)}function Um(e,t){Mv(e,t);var n=On(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hm(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hm(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hm(e,t,n){(t!=="number"||ds(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ci=Array.isArray;function lo(e,t,n,o){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gm(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(ci(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function Rv(e,t){var n=On(t.value),o=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Dh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Iv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ym(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Iv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var da,Bv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=da.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uw=["Webkit","ms","Moz","O"];Object.keys(pi).forEach(function(e){uw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pi[t]=pi[e]})});function Vv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pi.hasOwnProperty(e)&&pi[e]?(""+t).trim():t+"px"}function Ov(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=Vv(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var dw=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qm(e,t){if(t){if(dw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Km(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xm=null;function sf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jm=null,so=null,co=null;function Nh(e){if(e=Zi(e)){if(typeof Jm!="function")throw Error(A(280));var t=e.stateNode;t&&(t=qs(t),Jm(e.stateNode,e.type,t))}}function jv(e){so?co?co.push(e):co=[e]:so=e}function Wv(){if(so){var e=so,t=co;if(co=so=null,Nh(e),t)for(e=0;e<t.length;e++)Nh(t[e])}}function _v(e,t){return e(t)}function Uv(){}var _c=!1;function Hv(e,t,n){if(_c)return e(t,n);_c=!0;try{return _v(e,t,n)}finally{_c=!1,(so!==null||co!==null)&&(Uv(),Wv())}}function Pi(e,t){var n=e.stateNode;if(n===null)return null;var o=qs(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var qm=!1;if(sn)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){qm=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{qm=!1}function mw(e,t,n,o,i,a,l,c,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(p){this.onError(p)}}var fi=!1,ms=null,ps=!1,Zm=null,pw={onError:function(e){fi=!0,ms=e}};function fw(e,t,n,o,i,a,l,c,u){fi=!1,ms=null,mw.apply(pw,arguments)}function hw(e,t,n,o,i,a,l,c,u){if(fw.apply(this,arguments),fi){if(fi){var d=ms;fi=!1,ms=null}else throw Error(A(198));ps||(ps=!0,Zm=d)}}function hr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mh(e){if(hr(e)!==e)throw Error(A(188))}function gw(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,o=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Mh(i),e;if(a===o)return Mh(i),t;a=a.sibling}throw Error(A(188))}if(n.return!==o.return)n=i,o=a;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,o=a;break}if(c===o){l=!0,o=i,n=a;break}c=c.sibling}if(!l){for(c=a.child;c;){if(c===n){l=!0,n=a,o=i;break}if(c===o){l=!0,o=a,n=i;break}c=c.sibling}if(!l)throw Error(A(189))}}if(n.alternate!==o)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Yv(e){return e=gw(e),e!==null?Qv(e):null}function Qv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qv(e);if(t!==null)return t;e=e.sibling}return null}var Kv=gt.unstable_scheduleCallback,Rh=gt.unstable_cancelCallback,yw=gt.unstable_shouldYield,vw=gt.unstable_requestPaint,ke=gt.unstable_now,$w=gt.unstable_getCurrentPriorityLevel,cf=gt.unstable_ImmediatePriority,Xv=gt.unstable_UserBlockingPriority,fs=gt.unstable_NormalPriority,xw=gt.unstable_LowPriority,Jv=gt.unstable_IdlePriority,Qs=null,Gt=null;function Ew(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Qs,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:kw,ww=Math.log,bw=Math.LN2;function kw(e){return e>>>=0,e===0?32:31-(ww(e)/bw|0)|0}var ma=64,pa=4194304;function ui(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hs(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~i;c!==0?o=ui(c):(a&=l,a!==0&&(o=ui(a)))}else l=n&~i,l!==0?o=ui(l):a!==0&&(o=ui(a));if(o===0)return 0;if(t!==0&&t!==o&&!(t&i)&&(i=o&-o,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Bt(t),i=1<<n,o|=e[n],t&=~i;return o}function Sw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tw(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-Bt(a),c=1<<l,u=i[l];u===-1?(!(c&n)||c&o)&&(i[l]=Sw(c,t)):u<=t&&(e.expiredLanes|=c),a&=~c}}function ep(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qv(){var e=ma;return ma<<=1,!(ma&4194240)&&(ma=64),e}function Uc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ji(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bt(t),e[t]=n}function Cw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Bt(n),a=1<<i;t[i]=0,o[i]=-1,e[i]=-1,n&=~a}}function uf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Bt(n),i=1<<o;i&t|e[o]&t&&(e[o]|=t),n&=~i}}var oe=0;function Zv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var e$,df,t$,n$,r$,tp=!1,fa=[],Cn=null,zn=null,Pn=null,Ai=new Map,Fi=new Map,wn=[],zw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ih(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(t.pointerId)}}function Do(e,t,n,o,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Zi(t),t!==null&&df(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Pw(e,t,n,o,i){switch(t){case"focusin":return Cn=Do(Cn,e,t,n,o,i),!0;case"dragenter":return zn=Do(zn,e,t,n,o,i),!0;case"mouseover":return Pn=Do(Pn,e,t,n,o,i),!0;case"pointerover":var a=i.pointerId;return Ai.set(a,Do(Ai.get(a)||null,e,t,n,o,i)),!0;case"gotpointercapture":return a=i.pointerId,Fi.set(a,Do(Fi.get(a)||null,e,t,n,o,i)),!0}return!1}function o$(e){var t=tr(e.target);if(t!==null){var n=hr(t);if(n!==null){if(t=n.tag,t===13){if(t=Gv(n),t!==null){e.blockedOn=t,r$(e.priority,function(){t$(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ql(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=np(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Xm=o,n.target.dispatchEvent(o),Xm=null}else return t=Zi(n),t!==null&&df(t),e.blockedOn=n,!1;t.shift()}return!0}function Bh(e,t,n){ql(e)&&n.delete(t)}function Aw(){tp=!1,Cn!==null&&ql(Cn)&&(Cn=null),zn!==null&&ql(zn)&&(zn=null),Pn!==null&&ql(Pn)&&(Pn=null),Ai.forEach(Bh),Fi.forEach(Bh)}function No(e,t){e.blockedOn===t&&(e.blockedOn=null,tp||(tp=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,Aw)))}function Li(e){function t(i){return No(i,e)}if(0<fa.length){No(fa[0],e);for(var n=1;n<fa.length;n++){var o=fa[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Cn!==null&&No(Cn,e),zn!==null&&No(zn,e),Pn!==null&&No(Pn,e),Ai.forEach(t),Fi.forEach(t),n=0;n<wn.length;n++)o=wn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<wn.length&&(n=wn[0],n.blockedOn===null);)o$(n),n.blockedOn===null&&wn.shift()}var uo=pn.ReactCurrentBatchConfig,gs=!0;function Fw(e,t,n,o){var i=oe,a=uo.transition;uo.transition=null;try{oe=1,mf(e,t,n,o)}finally{oe=i,uo.transition=a}}function Lw(e,t,n,o){var i=oe,a=uo.transition;uo.transition=null;try{oe=4,mf(e,t,n,o)}finally{oe=i,uo.transition=a}}function mf(e,t,n,o){if(gs){var i=np(e,t,n,o);if(i===null)eu(e,t,o,ys,n),Ih(e,o);else if(Pw(i,e,t,n,o))o.stopPropagation();else if(Ih(e,o),t&4&&-1<zw.indexOf(e)){for(;i!==null;){var a=Zi(i);if(a!==null&&e$(a),a=np(e,t,n,o),a===null&&eu(e,t,o,ys,n),a===i)break;i=a}i!==null&&o.stopPropagation()}else eu(e,t,o,null,n)}}var ys=null;function np(e,t,n,o){if(ys=null,e=sf(o),e=tr(e),e!==null)if(t=hr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ys=e,null}function i$(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($w()){case cf:return 1;case Xv:return 4;case fs:case xw:return 16;case Jv:return 536870912;default:return 16}default:return 16}}var kn=null,pf=null,Zl=null;function a$(){if(Zl)return Zl;var e,t=pf,n=t.length,o,i="value"in kn?kn.value:kn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(o=1;o<=l&&t[n-o]===i[a-o];o++);return Zl=i.slice(e,1<o?1-o:void 0)}function es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ha(){return!0}function Vh(){return!1}function $t(e){function t(n,o,i,a,l){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ha:Vh,this.isPropagationStopped=Vh,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),t}var To={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ff=$t(To),qi=xe({},To,{view:0,detail:0}),Dw=$t(qi),Hc,Gc,Mo,Ks=xe({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mo&&(Mo&&e.type==="mousemove"?(Hc=e.screenX-Mo.screenX,Gc=e.screenY-Mo.screenY):Gc=Hc=0,Mo=e),Hc)},movementY:function(e){return"movementY"in e?e.movementY:Gc}}),Oh=$t(Ks),Nw=xe({},Ks,{dataTransfer:0}),Mw=$t(Nw),Rw=xe({},qi,{relatedTarget:0}),Yc=$t(Rw),Iw=xe({},To,{animationName:0,elapsedTime:0,pseudoElement:0}),Bw=$t(Iw),Vw=xe({},To,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ow=$t(Vw),jw=xe({},To,{data:0}),jh=$t(jw),Ww={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_w={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uw[e])?!!t[e]:!1}function hf(){return Hw}var Gw=xe({},qi,{key:function(e){if(e.key){var t=Ww[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_w[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(e){return e.type==="keypress"?es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yw=$t(Gw),Qw=xe({},Ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wh=$t(Qw),Kw=xe({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),Xw=$t(Kw),Jw=xe({},To,{propertyName:0,elapsedTime:0,pseudoElement:0}),qw=$t(Jw),Zw=xe({},Ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eb=$t(Zw),tb=[9,13,27,32],gf=sn&&"CompositionEvent"in window,hi=null;sn&&"documentMode"in document&&(hi=document.documentMode);var nb=sn&&"TextEvent"in window&&!hi,l$=sn&&(!gf||hi&&8<hi&&11>=hi),_h=String.fromCharCode(32),Uh=!1;function s$(e,t){switch(e){case"keyup":return tb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c$(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gr=!1;function rb(e,t){switch(e){case"compositionend":return c$(t);case"keypress":return t.which!==32?null:(Uh=!0,_h);case"textInput":return e=t.data,e===_h&&Uh?null:e;default:return null}}function ob(e,t){if(Gr)return e==="compositionend"||!gf&&s$(e,t)?(e=a$(),Zl=pf=kn=null,Gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return l$&&t.locale!=="ko"?null:t.data;default:return null}}var ib={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ib[e.type]:t==="textarea"}function u$(e,t,n,o){jv(o),t=vs(t,"onChange"),0<t.length&&(n=new ff("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var gi=null,Di=null;function ab(e){E$(e,0)}function Xs(e){var t=Kr(e);if(Nv(t))return e}function lb(e,t){if(e==="change")return t}var d$=!1;if(sn){var Qc;if(sn){var Kc="oninput"in document;if(!Kc){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),Kc=typeof Gh.oninput=="function"}Qc=Kc}else Qc=!1;d$=Qc&&(!document.documentMode||9<document.documentMode)}function Yh(){gi&&(gi.detachEvent("onpropertychange",m$),Di=gi=null)}function m$(e){if(e.propertyName==="value"&&Xs(Di)){var t=[];u$(t,Di,e,sf(e)),Hv(ab,t)}}function sb(e,t,n){e==="focusin"?(Yh(),gi=t,Di=n,gi.attachEvent("onpropertychange",m$)):e==="focusout"&&Yh()}function cb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xs(Di)}function ub(e,t){if(e==="click")return Xs(t)}function db(e,t){if(e==="input"||e==="change")return Xs(t)}function mb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:mb;function Ni(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!Bm.call(t,i)||!Ot(e[i],t[i]))return!1}return!0}function Qh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kh(e,t){var n=Qh(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qh(n)}}function p$(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?p$(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function f$(){for(var e=window,t=ds();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ds(e.document)}return t}function yf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function pb(e){var t=f$(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&p$(n.ownerDocument.documentElement,n)){if(o!==null&&yf(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(o.start,i);o=o.end===void 0?a:Math.min(o.end,i),!e.extend&&a>o&&(i=o,o=a,a=i),i=Kh(n,a);var l=Kh(n,o);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fb=sn&&"documentMode"in document&&11>=document.documentMode,Yr=null,rp=null,yi=null,op=!1;function Xh(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;op||Yr==null||Yr!==ds(o)||(o=Yr,"selectionStart"in o&&yf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),yi&&Ni(yi,o)||(yi=o,o=vs(rp,"onSelect"),0<o.length&&(t=new ff("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Yr)))}function ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qr={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},Xc={},h$={};sn&&(h$=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Js(e){if(Xc[e])return Xc[e];if(!Qr[e])return e;var t=Qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in h$)return Xc[e]=t[n];return e}var g$=Js("animationend"),y$=Js("animationiteration"),v$=Js("animationstart"),$$=Js("transitionend"),x$=new Map,Jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,t){x$.set(e,t),fr(t,[e])}for(var Jc=0;Jc<Jh.length;Jc++){var qc=Jh[Jc],hb=qc.toLowerCase(),gb=qc[0].toUpperCase()+qc.slice(1);Un(hb,"on"+gb)}Un(g$,"onAnimationEnd");Un(y$,"onAnimationIteration");Un(v$,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un($$,"onTransitionEnd");fo("onMouseEnter",["mouseout","mouseover"]);fo("onMouseLeave",["mouseout","mouseover"]);fo("onPointerEnter",["pointerout","pointerover"]);fo("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yb=new Set("cancel close invalid load scroll toggle".split(" ").concat(di));function qh(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,hw(o,t,void 0,e),e.currentTarget=null}function E$(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var l=o.length-1;0<=l;l--){var c=o[l],u=c.instance,d=c.currentTarget;if(c=c.listener,u!==a&&i.isPropagationStopped())break e;qh(i,c,d),a=u}else for(l=0;l<o.length;l++){if(c=o[l],u=c.instance,d=c.currentTarget,c=c.listener,u!==a&&i.isPropagationStopped())break e;qh(i,c,d),a=u}}}if(ps)throw e=Zm,ps=!1,Zm=null,e}function me(e,t){var n=t[cp];n===void 0&&(n=t[cp]=new Set);var o=e+"__bubble";n.has(o)||(w$(t,e,2,!1),n.add(o))}function Zc(e,t,n){var o=0;t&&(o|=4),w$(n,e,o,t)}var ya="_reactListening"+Math.random().toString(36).slice(2);function Mi(e){if(!e[ya]){e[ya]=!0,Pv.forEach(function(n){n!=="selectionchange"&&(yb.has(n)||Zc(n,!1,e),Zc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ya]||(t[ya]=!0,Zc("selectionchange",!1,t))}}function w$(e,t,n,o){switch(i$(t)){case 1:var i=Fw;break;case 4:i=Lw;break;default:i=mf}n=i.bind(null,t,n,e),i=void 0,!qm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function eu(e,t,n,o,i){var a=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var c=o.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(l===4)for(l=o.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;c!==null;){if(l=tr(c),l===null)return;if(u=l.tag,u===5||u===6){o=a=l;continue e}c=c.parentNode}}o=o.return}Hv(function(){var d=a,p=sf(n),m=[];e:{var f=x$.get(e);if(f!==void 0){var g=ff,$=e;switch(e){case"keypress":if(es(n)===0)break e;case"keydown":case"keyup":g=Yw;break;case"focusin":$="focus",g=Yc;break;case"focusout":$="blur",g=Yc;break;case"beforeblur":case"afterblur":g=Yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Mw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Xw;break;case g$:case y$:case v$:g=Bw;break;case $$:g=qw;break;case"scroll":g=Dw;break;case"wheel":g=eb;break;case"copy":case"cut":case"paste":g=Ow;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Wh}var x=(t&4)!==0,w=!x&&e==="scroll",v=x?f!==null?f+"Capture":null:f;x=[];for(var h=d,y;h!==null;){y=h;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,v!==null&&(E=Pi(h,v),E!=null&&x.push(Ri(h,E,y)))),w)break;h=h.return}0<x.length&&(f=new g(f,$,null,n,p),m.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==Xm&&($=n.relatedTarget||n.fromElement)&&(tr($)||$[cn]))break e;if((g||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,g?($=n.relatedTarget||n.toElement,g=d,$=$?tr($):null,$!==null&&(w=hr($),$!==w||$.tag!==5&&$.tag!==6)&&($=null)):(g=null,$=d),g!==$)){if(x=Oh,E="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Wh,E="onPointerLeave",v="onPointerEnter",h="pointer"),w=g==null?f:Kr(g),y=$==null?f:Kr($),f=new x(E,h+"leave",g,n,p),f.target=w,f.relatedTarget=y,E=null,tr(p)===d&&(x=new x(v,h+"enter",$,n,p),x.target=y,x.relatedTarget=w,E=x),w=E,g&&$)t:{for(x=g,v=$,h=0,y=x;y;y=xr(y))h++;for(y=0,E=v;E;E=xr(E))y++;for(;0<h-y;)x=xr(x),h--;for(;0<y-h;)v=xr(v),y--;for(;h--;){if(x===v||v!==null&&x===v.alternate)break t;x=xr(x),v=xr(v)}x=null}else x=null;g!==null&&Zh(m,f,g,x,!1),$!==null&&w!==null&&Zh(m,w,$,x,!0)}}e:{if(f=d?Kr(d):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=lb;else if(Hh(f))if(d$)S=db;else{S=cb;var z=sb}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=ub);if(S&&(S=S(e,d))){u$(m,S,n,p);break e}z&&z(e,f,d),e==="focusout"&&(z=f._wrapperState)&&z.controlled&&f.type==="number"&&Hm(f,"number",f.value)}switch(z=d?Kr(d):window,e){case"focusin":(Hh(z)||z.contentEditable==="true")&&(Yr=z,rp=d,yi=null);break;case"focusout":yi=rp=Yr=null;break;case"mousedown":op=!0;break;case"contextmenu":case"mouseup":case"dragend":op=!1,Xh(m,n,p);break;case"selectionchange":if(fb)break;case"keydown":case"keyup":Xh(m,n,p)}var P;if(gf)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Gr?s$(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(l$&&n.locale!=="ko"&&(Gr||C!=="onCompositionStart"?C==="onCompositionEnd"&&Gr&&(P=a$()):(kn=p,pf="value"in kn?kn.value:kn.textContent,Gr=!0)),z=vs(d,C),0<z.length&&(C=new jh(C,e,null,n,p),m.push({event:C,listeners:z}),P?C.data=P:(P=c$(n),P!==null&&(C.data=P)))),(P=nb?rb(e,n):ob(e,n))&&(d=vs(d,"onBeforeInput"),0<d.length&&(p=new jh("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:d}),p.data=P))}E$(m,t)})}function Ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vs(e,t){for(var n=t+"Capture",o=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Pi(e,n),a!=null&&o.unshift(Ri(e,a,i)),a=Pi(e,t),a!=null&&o.push(Ri(e,a,i))),e=e.return}return o}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zh(e,t,n,o,i){for(var a=t._reactName,l=[];n!==null&&n!==o;){var c=n,u=c.alternate,d=c.stateNode;if(u!==null&&u===o)break;c.tag===5&&d!==null&&(c=d,i?(u=Pi(n,a),u!=null&&l.unshift(Ri(n,u,c))):i||(u=Pi(n,a),u!=null&&l.push(Ri(n,u,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var vb=/\r\n?/g,$b=/\u0000|\uFFFD/g;function eg(e){return(typeof e=="string"?e:""+e).replace(vb,`
`).replace($b,"")}function va(e,t,n){if(t=eg(t),eg(e)!==t&&n)throw Error(A(425))}function $s(){}var ip=null,ap=null;function lp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sp=typeof setTimeout=="function"?setTimeout:void 0,xb=typeof clearTimeout=="function"?clearTimeout:void 0,tg=typeof Promise=="function"?Promise:void 0,Eb=typeof queueMicrotask=="function"?queueMicrotask:typeof tg<"u"?function(e){return tg.resolve(null).then(e).catch(wb)}:sp;function wb(e){setTimeout(function(){throw e})}function tu(e,t){var n=t,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),Li(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);Li(t)}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ng(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Co=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Co,Ii="__reactProps$"+Co,cn="__reactContainer$"+Co,cp="__reactEvents$"+Co,bb="__reactListeners$"+Co,kb="__reactHandles$"+Co;function tr(e){var t=e[Ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cn]||n[Ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ng(e);e!==null;){if(n=e[Ht])return n;e=ng(e)}return t}e=n,n=e.parentNode}return null}function Zi(e){return e=e[Ht]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function qs(e){return e[Ii]||null}var up=[],Xr=-1;function Hn(e){return{current:e}}function pe(e){0>Xr||(e.current=up[Xr],up[Xr]=null,Xr--)}function ue(e,t){Xr++,up[Xr]=e.current,e.current=t}var jn={},Ke=Hn(jn),at=Hn(!1),lr=jn;function ho(e,t){var n=e.type.contextTypes;if(!n)return jn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function lt(e){return e=e.childContextTypes,e!=null}function xs(){pe(at),pe(Ke)}function rg(e,t,n){if(Ke.current!==jn)throw Error(A(168));ue(Ke,t),ue(at,n)}function b$(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(A(108,sw(e)||"Unknown",i));return xe({},n,o)}function Es(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,lr=Ke.current,ue(Ke,e),ue(at,at.current),!0}function og(e,t,n){var o=e.stateNode;if(!o)throw Error(A(169));n?(e=b$(e,t,lr),o.__reactInternalMemoizedMergedChildContext=e,pe(at),pe(Ke),ue(Ke,e)):pe(at),ue(at,n)}var en=null,Zs=!1,nu=!1;function k$(e){en===null?en=[e]:en.push(e)}function Sb(e){Zs=!0,k$(e)}function Gn(){if(!nu&&en!==null){nu=!0;var e=0,t=oe;try{var n=en;for(oe=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}en=null,Zs=!1}catch(i){throw en!==null&&(en=en.slice(e+1)),Kv(cf,Gn),i}finally{oe=t,nu=!1}}return null}var Jr=[],qr=0,ws=null,bs=0,kt=[],St=0,sr=null,tn=1,nn="";function Jn(e,t){Jr[qr++]=bs,Jr[qr++]=ws,ws=e,bs=t}function S$(e,t,n){kt[St++]=tn,kt[St++]=nn,kt[St++]=sr,sr=e;var o=tn;e=nn;var i=32-Bt(o)-1;o&=~(1<<i),n+=1;var a=32-Bt(t)+i;if(30<a){var l=i-i%5;a=(o&(1<<l)-1).toString(32),o>>=l,i-=l,tn=1<<32-Bt(t)+i|n<<i|o,nn=a+e}else tn=1<<a|n<<i|o,nn=e}function vf(e){e.return!==null&&(Jn(e,1),S$(e,1,0))}function $f(e){for(;e===ws;)ws=Jr[--qr],Jr[qr]=null,bs=Jr[--qr],Jr[qr]=null;for(;e===sr;)sr=kt[--St],kt[St]=null,nn=kt[--St],kt[St]=null,tn=kt[--St],kt[St]=null}var ht=null,ft=null,he=!1,Rt=null;function T$(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ig(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,ft=An(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sr!==null?{id:tn,overflow:nn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,ft=null,!0):!1;default:return!1}}function dp(e){return(e.mode&1)!==0&&(e.flags&128)===0}function mp(e){if(he){var t=ft;if(t){var n=t;if(!ig(e,t)){if(dp(e))throw Error(A(418));t=An(n.nextSibling);var o=ht;t&&ig(e,t)?T$(o,n):(e.flags=e.flags&-4097|2,he=!1,ht=e)}}else{if(dp(e))throw Error(A(418));e.flags=e.flags&-4097|2,he=!1,ht=e}}}function ag(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function $a(e){if(e!==ht)return!1;if(!he)return ag(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!lp(e.type,e.memoizedProps)),t&&(t=ft)){if(dp(e))throw C$(),Error(A(418));for(;t;)T$(e,t),t=An(t.nextSibling)}if(ag(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=An(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ht?An(e.stateNode.nextSibling):null;return!0}function C$(){for(var e=ft;e;)e=An(e.nextSibling)}function go(){ft=ht=null,he=!1}function xf(e){Rt===null?Rt=[e]:Rt.push(e)}var Tb=pn.ReactCurrentBatchConfig;function Ro(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var o=n.stateNode}if(!o)throw Error(A(147,e));var i=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var c=i.refs;l===null?delete c[a]:c[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function xa(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lg(e){var t=e._init;return t(e._payload)}function z$(e){function t(v,h){if(e){var y=v.deletions;y===null?(v.deletions=[h],v.flags|=16):y.push(h)}}function n(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function o(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=Nn(v,h),v.index=0,v.sibling=null,v}function a(v,h,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<h?(v.flags|=2,h):y):(v.flags|=2,h)):(v.flags|=1048576,h)}function l(v){return e&&v.alternate===null&&(v.flags|=2),v}function c(v,h,y,E){return h===null||h.tag!==6?(h=cu(y,v.mode,E),h.return=v,h):(h=i(h,y),h.return=v,h)}function u(v,h,y,E){var S=y.type;return S===Hr?p(v,h,y.props.children,E,y.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===$n&&lg(S)===h.type)?(E=i(h,y.props),E.ref=Ro(v,h,y),E.return=v,E):(E=ls(y.type,y.key,y.props,null,v.mode,E),E.ref=Ro(v,h,y),E.return=v,E)}function d(v,h,y,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=uu(y,v.mode,E),h.return=v,h):(h=i(h,y.children||[]),h.return=v,h)}function p(v,h,y,E,S){return h===null||h.tag!==7?(h=ar(y,v.mode,E,S),h.return=v,h):(h=i(h,y),h.return=v,h)}function m(v,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=cu(""+h,v.mode,y),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ca:return y=ls(h.type,h.key,h.props,null,v.mode,y),y.ref=Ro(v,null,h),y.return=v,y;case Ur:return h=uu(h,v.mode,y),h.return=v,h;case $n:var E=h._init;return m(v,E(h._payload),y)}if(ci(h)||Fo(h))return h=ar(h,v.mode,y,null),h.return=v,h;xa(v,h)}return null}function f(v,h,y,E){var S=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:c(v,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ca:return y.key===S?u(v,h,y,E):null;case Ur:return y.key===S?d(v,h,y,E):null;case $n:return S=y._init,f(v,h,S(y._payload),E)}if(ci(y)||Fo(y))return S!==null?null:p(v,h,y,E,null);xa(v,y)}return null}function g(v,h,y,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(y)||null,c(h,v,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ca:return v=v.get(E.key===null?y:E.key)||null,u(h,v,E,S);case Ur:return v=v.get(E.key===null?y:E.key)||null,d(h,v,E,S);case $n:var z=E._init;return g(v,h,y,z(E._payload),S)}if(ci(E)||Fo(E))return v=v.get(y)||null,p(h,v,E,S,null);xa(h,E)}return null}function $(v,h,y,E){for(var S=null,z=null,P=h,C=h=0,I=null;P!==null&&C<y.length;C++){P.index>C?(I=P,P=null):I=P.sibling;var B=f(v,P,y[C],E);if(B===null){P===null&&(P=I);break}e&&P&&B.alternate===null&&t(v,P),h=a(B,h,C),z===null?S=B:z.sibling=B,z=B,P=I}if(C===y.length)return n(v,P),he&&Jn(v,C),S;if(P===null){for(;C<y.length;C++)P=m(v,y[C],E),P!==null&&(h=a(P,h,C),z===null?S=P:z.sibling=P,z=P);return he&&Jn(v,C),S}for(P=o(v,P);C<y.length;C++)I=g(P,v,C,y[C],E),I!==null&&(e&&I.alternate!==null&&P.delete(I.key===null?C:I.key),h=a(I,h,C),z===null?S=I:z.sibling=I,z=I);return e&&P.forEach(function(le){return t(v,le)}),he&&Jn(v,C),S}function x(v,h,y,E){var S=Fo(y);if(typeof S!="function")throw Error(A(150));if(y=S.call(y),y==null)throw Error(A(151));for(var z=S=null,P=h,C=h=0,I=null,B=y.next();P!==null&&!B.done;C++,B=y.next()){P.index>C?(I=P,P=null):I=P.sibling;var le=f(v,P,B.value,E);if(le===null){P===null&&(P=I);break}e&&P&&le.alternate===null&&t(v,P),h=a(le,h,C),z===null?S=le:z.sibling=le,z=le,P=I}if(B.done)return n(v,P),he&&Jn(v,C),S;if(P===null){for(;!B.done;C++,B=y.next())B=m(v,B.value,E),B!==null&&(h=a(B,h,C),z===null?S=B:z.sibling=B,z=B);return he&&Jn(v,C),S}for(P=o(v,P);!B.done;C++,B=y.next())B=g(P,v,C,B.value,E),B!==null&&(e&&B.alternate!==null&&P.delete(B.key===null?C:B.key),h=a(B,h,C),z===null?S=B:z.sibling=B,z=B);return e&&P.forEach(function(G){return t(v,G)}),he&&Jn(v,C),S}function w(v,h,y,E){if(typeof y=="object"&&y!==null&&y.type===Hr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ca:e:{for(var S=y.key,z=h;z!==null;){if(z.key===S){if(S=y.type,S===Hr){if(z.tag===7){n(v,z.sibling),h=i(z,y.props.children),h.return=v,v=h;break e}}else if(z.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===$n&&lg(S)===z.type){n(v,z.sibling),h=i(z,y.props),h.ref=Ro(v,z,y),h.return=v,v=h;break e}n(v,z);break}else t(v,z);z=z.sibling}y.type===Hr?(h=ar(y.props.children,v.mode,E,y.key),h.return=v,v=h):(E=ls(y.type,y.key,y.props,null,v.mode,E),E.ref=Ro(v,h,y),E.return=v,v=E)}return l(v);case Ur:e:{for(z=y.key;h!==null;){if(h.key===z)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(v,h.sibling),h=i(h,y.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else t(v,h);h=h.sibling}h=uu(y,v.mode,E),h.return=v,v=h}return l(v);case $n:return z=y._init,w(v,h,z(y._payload),E)}if(ci(y))return $(v,h,y,E);if(Fo(y))return x(v,h,y,E);xa(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(v,h.sibling),h=i(h,y),h.return=v,v=h):(n(v,h),h=cu(y,v.mode,E),h.return=v,v=h),l(v)):n(v,h)}return w}var yo=z$(!0),P$=z$(!1),ks=Hn(null),Ss=null,Zr=null,Ef=null;function wf(){Ef=Zr=Ss=null}function bf(e){var t=ks.current;pe(ks),e._currentValue=t}function pp(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function mo(e,t){Ss=e,Ef=Zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(it=!0),e.firstContext=null)}function zt(e){var t=e._currentValue;if(Ef!==e)if(e={context:e,memoizedValue:t,next:null},Zr===null){if(Ss===null)throw Error(A(308));Zr=e,Ss.dependencies={lanes:0,firstContext:e}}else Zr=Zr.next=e;return t}var nr=null;function kf(e){nr===null?nr=[e]:nr.push(e)}function A$(e,t,n,o){var i=t.interleaved;return i===null?(n.next=n,kf(t)):(n.next=i.next,i.next=n),t.interleaved=n,un(e,o)}function un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xn=!1;function Sf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function F$(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function on(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,q&2){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,un(e,n)}return i=o.interleaved,i===null?(t.next=t,kf(o)):(t.next=i.next,i.next=t),o.interleaved=t,un(e,n)}function ts(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,uf(e,n)}}function sg(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ts(e,t,n,o){var i=e.updateQueue;xn=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var u=c,d=u.next;u.next=null,l===null?a=d:l.next=d,l=u;var p=e.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==l&&(c===null?p.firstBaseUpdate=d:c.next=d,p.lastBaseUpdate=u))}if(a!==null){var m=i.baseState;l=0,p=d=u=null,c=a;do{var f=c.lane,g=c.eventTime;if((o&f)===f){p!==null&&(p=p.next={eventTime:g,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var $=e,x=c;switch(f=t,g=n,x.tag){case 1:if($=x.payload,typeof $=="function"){m=$.call(g,m,f);break e}m=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=x.payload,f=typeof $=="function"?$.call(g,m,f):$,f==null)break e;m=xe({},m,f);break e;case 2:xn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[c]:f.push(c))}else g={eventTime:g,lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(d=p=g,u=m):p=p.next=g,l|=f;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;f=c,c=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);ur|=l,e.lanes=l,e.memoizedState=m}}function cg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(A(191,i));i.call(o)}}}var ea={},Yt=Hn(ea),Bi=Hn(ea),Vi=Hn(ea);function rr(e){if(e===ea)throw Error(A(174));return e}function Tf(e,t){switch(ue(Vi,t),ue(Bi,e),ue(Yt,ea),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ym(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ym(t,e)}pe(Yt),ue(Yt,t)}function vo(){pe(Yt),pe(Bi),pe(Vi)}function L$(e){rr(Vi.current);var t=rr(Yt.current),n=Ym(t,e.type);t!==n&&(ue(Bi,e),ue(Yt,n))}function Cf(e){Bi.current===e&&(pe(Yt),pe(Bi))}var ye=Hn(0);function Cs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ru=[];function zf(){for(var e=0;e<ru.length;e++)ru[e]._workInProgressVersionPrimary=null;ru.length=0}var ns=pn.ReactCurrentDispatcher,ou=pn.ReactCurrentBatchConfig,cr=0,$e=null,Fe=null,De=null,zs=!1,vi=!1,Oi=0,Cb=0;function Ue(){throw Error(A(321))}function Pf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function Af(e,t,n,o,i,a){if(cr=a,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ns.current=e===null||e.memoizedState===null?Fb:Lb,e=n(o,i),vi){a=0;do{if(vi=!1,Oi=0,25<=a)throw Error(A(301));a+=1,De=Fe=null,t.updateQueue=null,ns.current=Db,e=n(o,i)}while(vi)}if(ns.current=Ps,t=Fe!==null&&Fe.next!==null,cr=0,De=Fe=$e=null,zs=!1,t)throw Error(A(300));return e}function Ff(){var e=Oi!==0;return Oi=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?$e.memoizedState=De=e:De=De.next=e,De}function Pt(){if(Fe===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=De===null?$e.memoizedState:De.next;if(t!==null)De=t,Fe=e;else{if(e===null)throw Error(A(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},De===null?$e.memoizedState=De=e:De=De.next=e}return De}function ji(e,t){return typeof t=="function"?t(e):t}function iu(e){var t=Pt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var o=Fe,i=o.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}o.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,o=o.baseState;var c=l=null,u=null,d=a;do{var p=d.lane;if((cr&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var m={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(c=u=m,l=o):u=u.next=m,$e.lanes|=p,ur|=p}d=d.next}while(d!==null&&d!==a);u===null?l=o:u.next=c,Ot(o,t.memoizedState)||(it=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=u,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do a=i.lane,$e.lanes|=a,ur|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function au(e){var t=Pt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);Ot(a,t.memoizedState)||(it=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,o]}function D$(){}function N$(e,t){var n=$e,o=Pt(),i=t(),a=!Ot(o.memoizedState,i);if(a&&(o.memoizedState=i,it=!0),o=o.queue,Lf(I$.bind(null,n,o,e),[e]),o.getSnapshot!==t||a||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,Wi(9,R$.bind(null,n,o,i,t),void 0,null),Ne===null)throw Error(A(349));cr&30||M$(n,t,i)}return i}function M$(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function R$(e,t,n,o){t.value=n,t.getSnapshot=o,B$(t)&&V$(e)}function I$(e,t,n){return n(function(){B$(t)&&V$(e)})}function B$(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function V$(e){var t=un(e,1);t!==null&&Vt(t,e,1,-1)}function ug(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},t.queue=e,e=e.dispatch=Ab.bind(null,$e,e),[t.memoizedState,e]}function Wi(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function O$(){return Pt().memoizedState}function rs(e,t,n,o){var i=Ut();$e.flags|=e,i.memoizedState=Wi(1|t,n,void 0,o===void 0?null:o)}function ec(e,t,n,o){var i=Pt();o=o===void 0?null:o;var a=void 0;if(Fe!==null){var l=Fe.memoizedState;if(a=l.destroy,o!==null&&Pf(o,l.deps)){i.memoizedState=Wi(t,n,a,o);return}}$e.flags|=e,i.memoizedState=Wi(1|t,n,a,o)}function dg(e,t){return rs(8390656,8,e,t)}function Lf(e,t){return ec(2048,8,e,t)}function j$(e,t){return ec(4,2,e,t)}function W$(e,t){return ec(4,4,e,t)}function _$(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function U$(e,t,n){return n=n!=null?n.concat([e]):null,ec(4,4,_$.bind(null,t,e),n)}function Df(){}function H$(e,t){var n=Pt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Pf(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function G$(e,t){var n=Pt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Pf(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Y$(e,t,n){return cr&21?(Ot(n,t)||(n=qv(),$e.lanes|=n,ur|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n)}function zb(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var o=ou.transition;ou.transition={};try{e(!1),t()}finally{oe=n,ou.transition=o}}function Q$(){return Pt().memoizedState}function Pb(e,t,n){var o=Dn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},K$(e))X$(t,n);else if(n=A$(e,t,n,o),n!==null){var i=et();Vt(n,e,o,i),J$(n,t,o)}}function Ab(e,t,n){var o=Dn(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(K$(e))X$(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,c=a(l,n);if(i.hasEagerState=!0,i.eagerState=c,Ot(c,l)){var u=t.interleaved;u===null?(i.next=i,kf(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=A$(e,t,i,o),n!==null&&(i=et(),Vt(n,e,o,i),J$(n,t,o))}}function K$(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function X$(e,t){vi=zs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function J$(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,uf(e,n)}}var Ps={readContext:zt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},Fb={readContext:zt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:dg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,rs(4194308,4,_$.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rs(4194308,4,e,t)},useInsertionEffect:function(e,t){return rs(4,2,e,t)},useMemo:function(e,t){var n=Ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Ut();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Pb.bind(null,$e,e),[o.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:ug,useDebugValue:Df,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=ug(!1),t=e[0];return e=zb.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=$e,i=Ut();if(he){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Ne===null)throw Error(A(349));cr&30||M$(o,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,dg(I$.bind(null,o,a,e),[e]),o.flags|=2048,Wi(9,R$.bind(null,o,a,n,t),void 0,null),n},useId:function(){var e=Ut(),t=Ne.identifierPrefix;if(he){var n=nn,o=tn;n=(o&~(1<<32-Bt(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lb={readContext:zt,useCallback:H$,useContext:zt,useEffect:Lf,useImperativeHandle:U$,useInsertionEffect:j$,useLayoutEffect:W$,useMemo:G$,useReducer:iu,useRef:O$,useState:function(){return iu(ji)},useDebugValue:Df,useDeferredValue:function(e){var t=Pt();return Y$(t,Fe.memoizedState,e)},useTransition:function(){var e=iu(ji)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:D$,useSyncExternalStore:N$,useId:Q$,unstable_isNewReconciler:!1},Db={readContext:zt,useCallback:H$,useContext:zt,useEffect:Lf,useImperativeHandle:U$,useInsertionEffect:j$,useLayoutEffect:W$,useMemo:G$,useReducer:au,useRef:O$,useState:function(){return au(ji)},useDebugValue:Df,useDeferredValue:function(e){var t=Pt();return Fe===null?t.memoizedState=e:Y$(t,Fe.memoizedState,e)},useTransition:function(){var e=au(ji)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:D$,useSyncExternalStore:N$,useId:Q$,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fp(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tc={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=et(),i=Dn(e),a=on(o,i);a.payload=t,n!=null&&(a.callback=n),t=Fn(e,a,i),t!==null&&(Vt(t,e,i,o),ts(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=et(),i=Dn(e),a=on(o,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Fn(e,a,i),t!==null&&(Vt(t,e,i,o),ts(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),o=Dn(e),i=on(n,o);i.tag=2,t!=null&&(i.callback=t),t=Fn(e,i,o),t!==null&&(Vt(t,e,o,n),ts(t,e,o))}};function mg(e,t,n,o,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,l):t.prototype&&t.prototype.isPureReactComponent?!Ni(n,o)||!Ni(i,a):!0}function q$(e,t,n){var o=!1,i=jn,a=t.contextType;return typeof a=="object"&&a!==null?a=zt(a):(i=lt(t)?lr:Ke.current,o=t.contextTypes,a=(o=o!=null)?ho(e,i):jn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=tc,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function pg(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&tc.enqueueReplaceState(t,t.state,null)}function hp(e,t,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Sf(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=zt(a):(a=lt(t)?lr:Ke.current,i.context=ho(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(fp(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&tc.enqueueReplaceState(i,i.state,null),Ts(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $o(e,t){try{var n="",o=t;do n+=lw(o),o=o.return;while(o);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function lu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Nb=typeof WeakMap=="function"?WeakMap:Map;function Z$(e,t,n){n=on(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Fs||(Fs=!0,Tp=o),gp(e,t)},n}function ex(e,t,n){n=on(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;n.payload=function(){return o(i)},n.callback=function(){gp(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){gp(e,t),typeof o!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function fg(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Nb;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(n)||(i.add(n),e=Qb.bind(null,e,t,n),t.then(e,e))}function hg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gg(e,t,n,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=on(-1,1),t.tag=2,Fn(n,t,1))),n.lanes|=1),e)}var Mb=pn.ReactCurrentOwner,it=!1;function Ze(e,t,n,o){t.child=e===null?P$(t,null,n,o):yo(t,e.child,n,o)}function yg(e,t,n,o,i){n=n.render;var a=t.ref;return mo(t,i),o=Af(e,t,n,o,a,i),n=Ff(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dn(e,t,i)):(he&&n&&vf(t),t.flags|=1,Ze(e,t,o,i),t.child)}function vg(e,t,n,o,i){if(e===null){var a=n.type;return typeof a=="function"&&!jf(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,tx(e,t,a,o,i)):(e=ls(n.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ni,n(l,o)&&e.ref===t.ref)return dn(e,t,i)}return t.flags|=1,e=Nn(a,o),e.ref=t.ref,e.return=t,t.child=e}function tx(e,t,n,o,i){if(e!==null){var a=e.memoizedProps;if(Ni(a,o)&&e.ref===t.ref)if(it=!1,t.pendingProps=o=a,(e.lanes&i)!==0)e.flags&131072&&(it=!0);else return t.lanes=e.lanes,dn(e,t,i)}return yp(e,t,n,o,i)}function nx(e,t,n){var o=t.pendingProps,i=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(to,pt),pt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(to,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:n,ue(to,pt),pt|=o}else a!==null?(o=a.baseLanes|n,t.memoizedState=null):o=n,ue(to,pt),pt|=o;return Ze(e,t,i,n),t.child}function rx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yp(e,t,n,o,i){var a=lt(n)?lr:Ke.current;return a=ho(t,a),mo(t,i),n=Af(e,t,n,o,a,i),o=Ff(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dn(e,t,i)):(he&&o&&vf(t),t.flags|=1,Ze(e,t,n,i),t.child)}function $g(e,t,n,o,i){if(lt(n)){var a=!0;Es(t)}else a=!1;if(mo(t,i),t.stateNode===null)os(e,t),q$(t,n,o),hp(t,n,o,i),o=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var u=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=zt(d):(d=lt(n)?lr:Ke.current,d=ho(t,d));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==o||u!==d)&&pg(t,l,o,d),xn=!1;var f=t.memoizedState;l.state=f,Ts(t,o,l,i),u=t.memoizedState,c!==o||f!==u||at.current||xn?(typeof p=="function"&&(fp(t,n,p,o),u=t.memoizedState),(c=xn||mg(t,n,c,o,f,u,d))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),l.props=o,l.state=u,l.context=d,o=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,F$(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:Nt(t.type,c),l.props=d,m=t.pendingProps,f=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=zt(u):(u=lt(n)?lr:Ke.current,u=ho(t,u));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==m||f!==u)&&pg(t,l,o,u),xn=!1,f=t.memoizedState,l.state=f,Ts(t,o,l,i);var $=t.memoizedState;c!==m||f!==$||at.current||xn?(typeof g=="function"&&(fp(t,n,g,o),$=t.memoizedState),(d=xn||mg(t,n,d,o,f,$,u)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,$,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,$,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=$),l.props=o,l.state=$,l.context=u,o=d):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),o=!1)}return vp(e,t,n,o,a,i)}function vp(e,t,n,o,i,a){rx(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return i&&og(t,n,!1),dn(e,t,a);o=t.stateNode,Mb.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=yo(t,e.child,null,a),t.child=yo(t,null,c,a)):Ze(e,t,c,a),t.memoizedState=o.state,i&&og(t,n,!0),t.child}function ox(e){var t=e.stateNode;t.pendingContext?rg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rg(e,t.context,!1),Tf(e,t.containerInfo)}function xg(e,t,n,o,i){return go(),xf(i),t.flags|=256,Ze(e,t,n,o),t.child}var $p={dehydrated:null,treeContext:null,retryLane:0};function xp(e){return{baseLanes:e,cachePool:null,transitions:null}}function ix(e,t,n){var o=t.pendingProps,i=ye.current,a=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ue(ye,i&1),e===null)return mp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,a?(o=t.mode,a=t.child,l={mode:"hidden",children:l},!(o&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=oc(l,o,0,null),e=ar(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=xp(n),t.memoizedState=$p,e):Nf(t,l));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return Rb(e,t,l,o,c,i,n);if(a){a=o.fallback,l=t.mode,i=e.child,c=i.sibling;var u={mode:"hidden",children:o.children};return!(l&1)&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=u,t.deletions=null):(o=Nn(i,u),o.subtreeFlags=i.subtreeFlags&14680064),c!==null?a=Nn(c,a):(a=ar(a,l,n,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,l=e.child.memoizedState,l=l===null?xp(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=$p,o}return a=e.child,e=a.sibling,o=Nn(a,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Nf(e,t){return t=oc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ea(e,t,n,o){return o!==null&&xf(o),yo(t,e.child,null,n),e=Nf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rb(e,t,n,o,i,a,l){if(n)return t.flags&256?(t.flags&=-257,o=lu(Error(A(422))),Ea(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,i=t.mode,o=oc({mode:"visible",children:o.children},i,0,null),a=ar(a,i,l,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,t.mode&1&&yo(t,e.child,null,l),t.child.memoizedState=xp(l),t.memoizedState=$p,a);if(!(t.mode&1))return Ea(e,t,l,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var c=o.dgst;return o=c,a=Error(A(419)),o=lu(a,o,void 0),Ea(e,t,l,o)}if(c=(l&e.childLanes)!==0,it||c){if(o=Ne,o!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,un(e,i),Vt(o,e,i,-1))}return Of(),o=lu(Error(A(421))),Ea(e,t,l,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kb.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ft=An(i.nextSibling),ht=t,he=!0,Rt=null,e!==null&&(kt[St++]=tn,kt[St++]=nn,kt[St++]=sr,tn=e.id,nn=e.overflow,sr=t),t=Nf(t,o.children),t.flags|=4096,t)}function Eg(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),pp(e.return,t,n)}function su(e,t,n,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=i)}function ax(e,t,n){var o=t.pendingProps,i=o.revealOrder,a=o.tail;if(Ze(e,t,o.children,n),o=ye.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eg(e,n,t);else if(e.tag===19)Eg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ue(ye,o),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Cs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),su(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Cs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}su(t,!0,n,null,a);break;case"together":su(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function os(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ur|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ib(e,t,n){switch(t.tag){case 3:ox(t),go();break;case 5:L$(t);break;case 1:lt(t.type)&&Es(t);break;case 4:Tf(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;ue(ks,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(ue(ye,ye.current&1),t.flags|=128,null):n&t.child.childLanes?ix(e,t,n):(ue(ye,ye.current&1),e=dn(e,t,n),e!==null?e.sibling:null);ue(ye,ye.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return ax(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ye,ye.current),o)break;return null;case 22:case 23:return t.lanes=0,nx(e,t,n)}return dn(e,t,n)}var lx,Ep,sx,cx;lx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ep=function(){};sx=function(e,t,n,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,rr(Yt.current);var a=null;switch(n){case"input":i=_m(e,i),o=_m(e,o),a=[];break;case"select":i=xe({},i,{value:void 0}),o=xe({},o,{value:void 0}),a=[];break;case"textarea":i=Gm(e,i),o=Gm(e,o),a=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=$s)}Qm(n,o);var l;n=null;for(d in i)if(!o.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var c=i[d];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ci.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in o){var u=o[d];if(c=i!=null?i[d]:void 0,o.hasOwnProperty(d)&&u!==c&&(u!=null||c!=null))if(d==="style")if(c){for(l in c)!c.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&c[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(a||(a=[]),a.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(a=a||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ci.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&me("scroll",e),a||c===u||(a=[])):(a=a||[]).push(d,u))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};cx=function(e,t,n,o){n!==o&&(t.flags|=4)};function Io(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Bb(e,t,n){var o=t.pendingProps;switch($f(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return lt(t.type)&&xs(),He(t),null;case 3:return o=t.stateNode,vo(),pe(at),pe(Ke),zf(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&($a(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rt!==null&&(Pp(Rt),Rt=null))),Ep(e,t),He(t),null;case 5:Cf(t);var i=rr(Vi.current);if(n=t.type,e!==null&&t.stateNode!=null)sx(e,t,n,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(A(166));return He(t),null}if(e=rr(Yt.current),$a(t)){o=t.stateNode,n=t.type;var a=t.memoizedProps;switch(o[Ht]=t,o[Ii]=a,e=(t.mode&1)!==0,n){case"dialog":me("cancel",o),me("close",o);break;case"iframe":case"object":case"embed":me("load",o);break;case"video":case"audio":for(i=0;i<di.length;i++)me(di[i],o);break;case"source":me("error",o);break;case"img":case"image":case"link":me("error",o),me("load",o);break;case"details":me("toggle",o);break;case"input":Ah(o,a),me("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},me("invalid",o);break;case"textarea":Lh(o,a),me("invalid",o)}Qm(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="children"?typeof c=="string"?o.textContent!==c&&(a.suppressHydrationWarning!==!0&&va(o.textContent,c,e),i=["children",c]):typeof c=="number"&&o.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&va(o.textContent,c,e),i=["children",""+c]):Ci.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&me("scroll",o)}switch(n){case"input":ua(o),Fh(o,a,!0);break;case"textarea":ua(o),Dh(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=$s)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Iv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[Ht]=t,e[Ii]=o,lx(e,t,!1,!1),t.stateNode=e;e:{switch(l=Km(n,o),n){case"dialog":me("cancel",e),me("close",e),i=o;break;case"iframe":case"object":case"embed":me("load",e),i=o;break;case"video":case"audio":for(i=0;i<di.length;i++)me(di[i],e);i=o;break;case"source":me("error",e),i=o;break;case"img":case"image":case"link":me("error",e),me("load",e),i=o;break;case"details":me("toggle",e),i=o;break;case"input":Ah(e,o),i=_m(e,o),me("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=xe({},o,{value:void 0}),me("invalid",e);break;case"textarea":Lh(e,o),i=Gm(e,o),me("invalid",e);break;default:i=o}Qm(n,i),c=i;for(a in c)if(c.hasOwnProperty(a)){var u=c[a];a==="style"?Ov(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Bv(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&zi(e,u):typeof u=="number"&&zi(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ci.hasOwnProperty(a)?u!=null&&a==="onScroll"&&me("scroll",e):u!=null&&rf(e,a,u,l))}switch(n){case"input":ua(e),Fh(e,o,!1);break;case"textarea":ua(e),Dh(e);break;case"option":o.value!=null&&e.setAttribute("value",""+On(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?lo(e,!!o.multiple,a,!1):o.defaultValue!=null&&lo(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=$s)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)cx(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(A(166));if(n=rr(Vi.current),rr(Yt.current),$a(t)){if(o=t.stateNode,n=t.memoizedProps,o[Ht]=t,(a=o.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:va(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&va(o.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Ht]=t,t.stateNode=o}return He(t),null;case 13:if(pe(ye),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&ft!==null&&t.mode&1&&!(t.flags&128))C$(),go(),t.flags|=98560,a=!1;else if(a=$a(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(A(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(A(317));a[Ht]=t}else go(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),a=!1}else Rt!==null&&(Pp(Rt),Rt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?Le===0&&(Le=3):Of())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return vo(),Ep(e,t),e===null&&Mi(t.stateNode.containerInfo),He(t),null;case 10:return bf(t.type._context),He(t),null;case 17:return lt(t.type)&&xs(),He(t),null;case 19:if(pe(ye),a=t.memoizedState,a===null)return He(t),null;if(o=(t.flags&128)!==0,l=a.rendering,l===null)if(o)Io(a,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Cs(e),l!==null){for(t.flags|=128,Io(a,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)a=n,e=o,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(ye,ye.current&1|2),t.child}e=e.sibling}a.tail!==null&&ke()>xo&&(t.flags|=128,o=!0,Io(a,!1),t.lanes=4194304)}else{if(!o)if(e=Cs(l),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Io(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!he)return He(t),null}else 2*ke()-a.renderingStartTime>xo&&n!==1073741824&&(t.flags|=128,o=!0,Io(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ke(),t.sibling=null,n=ye.current,ue(ye,o?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Vf(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?pt&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Vb(e,t){switch($f(t),t.tag){case 1:return lt(t.type)&&xs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vo(),pe(at),pe(Ke),zf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cf(t),null;case 13:if(pe(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));go()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(ye),null;case 4:return vo(),null;case 10:return bf(t.type._context),null;case 22:case 23:return Vf(),null;case 24:return null;default:return null}}var wa=!1,Qe=!1,Ob=typeof WeakSet=="function"?WeakSet:Set,M=null;function eo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Ee(e,t,o)}else n.current=null}function wp(e,t,n){try{n()}catch(o){Ee(e,t,o)}}var wg=!1;function jb(e,t){if(ip=gs,e=f$(),yf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,c=-1,u=-1,d=0,p=0,m=e,f=null;t:for(;;){for(var g;m!==n||i!==0&&m.nodeType!==3||(c=l+i),m!==a||o!==0&&m.nodeType!==3||(u=l+o),m.nodeType===3&&(l+=m.nodeValue.length),(g=m.firstChild)!==null;)f=m,m=g;for(;;){if(m===e)break t;if(f===n&&++d===i&&(c=l),f===a&&++p===o&&(u=l),(g=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=g}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ap={focusedElem:e,selectionRange:n},gs=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var $=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if($!==null){var x=$.memoizedProps,w=$.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?x:Nt(t.type,x),w);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(E){Ee(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return $=wg,wg=!1,$}function $i(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&wp(t,n,a)}i=i.next}while(i!==o)}}function nc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function bp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ux(e){var t=e.alternate;t!==null&&(e.alternate=null,ux(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[Ii],delete t[cp],delete t[bb],delete t[kb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dx(e){return e.tag===5||e.tag===3||e.tag===4}function bg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kp(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$s));else if(o!==4&&(e=e.child,e!==null))for(kp(e,t,n),e=e.sibling;e!==null;)kp(e,t,n),e=e.sibling}function Sp(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Sp(e,t,n),e=e.sibling;e!==null;)Sp(e,t,n),e=e.sibling}var Oe=null,Mt=!1;function hn(e,t,n){for(n=n.child;n!==null;)mx(e,t,n),n=n.sibling}function mx(e,t,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Qs,n)}catch{}switch(n.tag){case 5:Qe||eo(n,t);case 6:var o=Oe,i=Mt;Oe=null,hn(e,t,n),Oe=o,Mt=i,Oe!==null&&(Mt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(Mt?(e=Oe,n=n.stateNode,e.nodeType===8?tu(e.parentNode,n):e.nodeType===1&&tu(e,n),Li(e)):tu(Oe,n.stateNode));break;case 4:o=Oe,i=Mt,Oe=n.stateNode.containerInfo,Mt=!0,hn(e,t,n),Oe=o,Mt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&wp(n,t,l),i=i.next}while(i!==o)}hn(e,t,n);break;case 1:if(!Qe&&(eo(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(c){Ee(n,t,c)}hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:n.mode&1?(Qe=(o=Qe)||n.memoizedState!==null,hn(e,t,n),Qe=o):hn(e,t,n);break;default:hn(e,t,n)}}function kg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ob),t.forEach(function(o){var i=Xb.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function Lt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var a=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:Oe=c.stateNode,Mt=!1;break e;case 3:Oe=c.stateNode.containerInfo,Mt=!0;break e;case 4:Oe=c.stateNode.containerInfo,Mt=!0;break e}c=c.return}if(Oe===null)throw Error(A(160));mx(a,l,i),Oe=null,Mt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Ee(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)px(t,e),t=t.sibling}function px(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),jt(e),o&4){try{$i(3,e,e.return),nc(3,e)}catch(x){Ee(e,e.return,x)}try{$i(5,e,e.return)}catch(x){Ee(e,e.return,x)}}break;case 1:Lt(t,e),jt(e),o&512&&n!==null&&eo(n,n.return);break;case 5:if(Lt(t,e),jt(e),o&512&&n!==null&&eo(n,n.return),e.flags&32){var i=e.stateNode;try{zi(i,"")}catch(x){Ee(e,e.return,x)}}if(o&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&Mv(i,a),Km(c,l);var d=Km(c,a);for(l=0;l<u.length;l+=2){var p=u[l],m=u[l+1];p==="style"?Ov(i,m):p==="dangerouslySetInnerHTML"?Bv(i,m):p==="children"?zi(i,m):rf(i,p,m,d)}switch(c){case"input":Um(i,a);break;case"textarea":Rv(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?lo(i,!!a.multiple,g,!1):f!==!!a.multiple&&(a.defaultValue!=null?lo(i,!!a.multiple,a.defaultValue,!0):lo(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ii]=a}catch(x){Ee(e,e.return,x)}}break;case 6:if(Lt(t,e),jt(e),o&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(x){Ee(e,e.return,x)}}break;case 3:if(Lt(t,e),jt(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Li(t.containerInfo)}catch(x){Ee(e,e.return,x)}break;case 4:Lt(t,e),jt(e);break;case 13:Lt(t,e),jt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(If=ke())),o&4&&kg(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(d=Qe)||p,Lt(t,e),Qe=d):Lt(t,e),jt(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(M=e,p=e.child;p!==null;){for(m=M=p;M!==null;){switch(f=M,g=f.child,f.tag){case 0:case 11:case 14:case 15:$i(4,f,f.return);break;case 1:eo(f,f.return);var $=f.stateNode;if(typeof $.componentWillUnmount=="function"){o=f,n=f.return;try{t=o,$.props=t.memoizedProps,$.state=t.memoizedState,$.componentWillUnmount()}catch(x){Ee(o,n,x)}}break;case 5:eo(f,f.return);break;case 22:if(f.memoizedState!==null){Tg(m);continue}}g!==null?(g.return=f,M=g):Tg(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=Vv("display",l))}catch(x){Ee(e,e.return,x)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(x){Ee(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Lt(t,e),jt(e),o&4&&kg(e);break;case 21:break;default:Lt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dx(n)){var o=n;break e}n=n.return}throw Error(A(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(zi(i,""),o.flags&=-33);var a=bg(e);Sp(e,a,i);break;case 3:case 4:var l=o.stateNode.containerInfo,c=bg(e);kp(e,c,l);break;default:throw Error(A(161))}}catch(u){Ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wb(e,t,n){M=e,fx(e)}function fx(e,t,n){for(var o=(e.mode&1)!==0;M!==null;){var i=M,a=i.child;if(i.tag===22&&o){var l=i.memoizedState!==null||wa;if(!l){var c=i.alternate,u=c!==null&&c.memoizedState!==null||Qe;c=wa;var d=Qe;if(wa=l,(Qe=u)&&!d)for(M=i;M!==null;)l=M,u=l.child,l.tag===22&&l.memoizedState!==null?Cg(i):u!==null?(u.return=l,M=u):Cg(i);for(;a!==null;)M=a,fx(a),a=a.sibling;M=i,wa=c,Qe=d}Sg(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,M=a):Sg(e)}}function Sg(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Qe||nc(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Qe)if(n===null)o.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&cg(t,a,o);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cg(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Li(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Qe||t.flags&512&&bp(t)}catch(f){Ee(t,t.return,f)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Tg(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Cg(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{nc(4,t)}catch(u){Ee(t,n,u)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(u){Ee(t,i,u)}}var a=t.return;try{bp(t)}catch(u){Ee(t,a,u)}break;case 5:var l=t.return;try{bp(t)}catch(u){Ee(t,l,u)}}}catch(u){Ee(t,t.return,u)}if(t===e){M=null;break}var c=t.sibling;if(c!==null){c.return=t.return,M=c;break}M=t.return}}var _b=Math.ceil,As=pn.ReactCurrentDispatcher,Mf=pn.ReactCurrentOwner,Ct=pn.ReactCurrentBatchConfig,q=0,Ne=null,ze=null,je=0,pt=0,to=Hn(0),Le=0,_i=null,ur=0,rc=0,Rf=0,xi=null,ot=null,If=0,xo=1/0,Zt=null,Fs=!1,Tp=null,Ln=null,ba=!1,Sn=null,Ls=0,Ei=0,Cp=null,is=-1,as=0;function et(){return q&6?ke():is!==-1?is:is=ke()}function Dn(e){return e.mode&1?q&2&&je!==0?je&-je:Tb.transition!==null?(as===0&&(as=qv()),as):(e=oe,e!==0||(e=window.event,e=e===void 0?16:i$(e.type)),e):1}function Vt(e,t,n,o){if(50<Ei)throw Ei=0,Cp=null,Error(A(185));Ji(e,n,o),(!(q&2)||e!==Ne)&&(e===Ne&&(!(q&2)&&(rc|=n),Le===4&&bn(e,je)),st(e,o),n===1&&q===0&&!(t.mode&1)&&(xo=ke()+500,Zs&&Gn()))}function st(e,t){var n=e.callbackNode;Tw(e,t);var o=hs(e,e===Ne?je:0);if(o===0)n!==null&&Rh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Rh(n),t===1)e.tag===0?Sb(zg.bind(null,e)):k$(zg.bind(null,e)),Eb(function(){!(q&6)&&Gn()}),n=null;else{switch(Zv(o)){case 1:n=cf;break;case 4:n=Xv;break;case 16:n=fs;break;case 536870912:n=Jv;break;default:n=fs}n=wx(n,hx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hx(e,t){if(is=-1,as=0,q&6)throw Error(A(327));var n=e.callbackNode;if(po()&&e.callbackNode!==n)return null;var o=hs(e,e===Ne?je:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Ds(e,o);else{t=o;var i=q;q|=2;var a=yx();(Ne!==e||je!==t)&&(Zt=null,xo=ke()+500,ir(e,t));do try{Gb();break}catch(c){gx(e,c)}while(1);wf(),As.current=a,q=i,ze!==null?t=0:(Ne=null,je=0,t=Le)}if(t!==0){if(t===2&&(i=ep(e),i!==0&&(o=i,t=zp(e,i))),t===1)throw n=_i,ir(e,0),bn(e,o),st(e,ke()),n;if(t===6)bn(e,o);else{if(i=e.current.alternate,!(o&30)&&!Ub(i)&&(t=Ds(e,o),t===2&&(a=ep(e),a!==0&&(o=a,t=zp(e,a))),t===1))throw n=_i,ir(e,0),bn(e,o),st(e,ke()),n;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(A(345));case 2:qn(e,ot,Zt);break;case 3:if(bn(e,o),(o&130023424)===o&&(t=If+500-ke(),10<t)){if(hs(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){et(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=sp(qn.bind(null,e,ot,Zt),t);break}qn(e,ot,Zt);break;case 4:if(bn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var l=31-Bt(o);a=1<<l,l=t[l],l>i&&(i=l),o&=~a}if(o=i,o=ke()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*_b(o/1960))-o,10<o){e.timeoutHandle=sp(qn.bind(null,e,ot,Zt),o);break}qn(e,ot,Zt);break;case 5:qn(e,ot,Zt);break;default:throw Error(A(329))}}}return st(e,ke()),e.callbackNode===n?hx.bind(null,e):null}function zp(e,t){var n=xi;return e.current.memoizedState.isDehydrated&&(ir(e,t).flags|=256),e=Ds(e,t),e!==2&&(t=ot,ot=n,t!==null&&Pp(t)),e}function Pp(e){ot===null?ot=e:ot.push.apply(ot,e)}function Ub(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],a=i.getSnapshot;i=i.value;try{if(!Ot(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bn(e,t){for(t&=~Rf,t&=~rc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Bt(t),o=1<<n;e[n]=-1,t&=~o}}function zg(e){if(q&6)throw Error(A(327));po();var t=hs(e,0);if(!(t&1))return st(e,ke()),null;var n=Ds(e,t);if(e.tag!==0&&n===2){var o=ep(e);o!==0&&(t=o,n=zp(e,o))}if(n===1)throw n=_i,ir(e,0),bn(e,t),st(e,ke()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qn(e,ot,Zt),st(e,ke()),null}function Bf(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(xo=ke()+500,Zs&&Gn())}}function dr(e){Sn!==null&&Sn.tag===0&&!(q&6)&&po();var t=q;q|=1;var n=Ct.transition,o=oe;try{if(Ct.transition=null,oe=1,e)return e()}finally{oe=o,Ct.transition=n,q=t,!(q&6)&&Gn()}}function Vf(){pt=to.current,pe(to)}function ir(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xb(n)),ze!==null)for(n=ze.return;n!==null;){var o=n;switch($f(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&xs();break;case 3:vo(),pe(at),pe(Ke),zf();break;case 5:Cf(o);break;case 4:vo();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:bf(o.type._context);break;case 22:case 23:Vf()}n=n.return}if(Ne=e,ze=e=Nn(e.current,null),je=pt=t,Le=0,_i=null,Rf=rc=ur=0,ot=xi=null,nr!==null){for(t=0;t<nr.length;t++)if(n=nr[t],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,o.next=l}n.pending=o}nr=null}return e}function gx(e,t){do{var n=ze;try{if(wf(),ns.current=Ps,zs){for(var o=$e.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}zs=!1}if(cr=0,De=Fe=$e=null,vi=!1,Oi=0,Mf.current=null,n===null||n.return===null){Le=1,_i=t,ze=null;break}e:{var a=e,l=n.return,c=n,u=t;if(t=je,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=c,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=hg(l);if(g!==null){g.flags&=-257,gg(g,l,c,a,t),g.mode&1&&fg(a,d,t),t=g,u=d;var $=t.updateQueue;if($===null){var x=new Set;x.add(u),t.updateQueue=x}else $.add(u);break e}else{if(!(t&1)){fg(a,d,t),Of();break e}u=Error(A(426))}}else if(he&&c.mode&1){var w=hg(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),gg(w,l,c,a,t),xf($o(u,c));break e}}a=u=$o(u,c),Le!==4&&(Le=2),xi===null?xi=[a]:xi.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var v=Z$(a,u,t);sg(a,v);break e;case 1:c=u;var h=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ln===null||!Ln.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var E=ex(a,c,t);sg(a,E);break e}}a=a.return}while(a!==null)}$x(n)}catch(S){t=S,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(1)}function yx(){var e=As.current;return As.current=Ps,e===null?Ps:e}function Of(){(Le===0||Le===3||Le===2)&&(Le=4),Ne===null||!(ur&268435455)&&!(rc&268435455)||bn(Ne,je)}function Ds(e,t){var n=q;q|=2;var o=yx();(Ne!==e||je!==t)&&(Zt=null,ir(e,t));do try{Hb();break}catch(i){gx(e,i)}while(1);if(wf(),q=n,As.current=o,ze!==null)throw Error(A(261));return Ne=null,je=0,Le}function Hb(){for(;ze!==null;)vx(ze)}function Gb(){for(;ze!==null&&!yw();)vx(ze)}function vx(e){var t=Ex(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?$x(e):ze=t,Mf.current=null}function $x(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vb(n,t),n!==null){n.flags&=32767,ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,ze=null;return}}else if(n=Bb(n,t,pt),n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);Le===0&&(Le=5)}function qn(e,t,n){var o=oe,i=Ct.transition;try{Ct.transition=null,oe=1,Yb(e,t,n,o)}finally{Ct.transition=i,oe=o}return null}function Yb(e,t,n,o){do po();while(Sn!==null);if(q&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Cw(e,a),e===Ne&&(ze=Ne=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,wx(fs,function(){return po(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ct.transition,Ct.transition=null;var l=oe;oe=1;var c=q;q|=4,Mf.current=null,jb(e,n),px(n,e),pb(ap),gs=!!ip,ap=ip=null,e.current=n,Wb(n),vw(),q=c,oe=l,Ct.transition=a}else e.current=n;if(ba&&(ba=!1,Sn=e,Ls=i),a=e.pendingLanes,a===0&&(Ln=null),Ew(n.stateNode),st(e,ke()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(Fs)throw Fs=!1,e=Tp,Tp=null,e;return Ls&1&&e.tag!==0&&po(),a=e.pendingLanes,a&1?e===Cp?Ei++:(Ei=0,Cp=e):Ei=0,Gn(),null}function po(){if(Sn!==null){var e=Zv(Ls),t=Ct.transition,n=oe;try{if(Ct.transition=null,oe=16>e?16:e,Sn===null)var o=!1;else{if(e=Sn,Sn=null,Ls=0,q&6)throw Error(A(331));var i=q;for(q|=4,M=e.current;M!==null;){var a=M,l=a.child;if(M.flags&16){var c=a.deletions;if(c!==null){for(var u=0;u<c.length;u++){var d=c[u];for(M=d;M!==null;){var p=M;switch(p.tag){case 0:case 11:case 15:$i(8,p,a)}var m=p.child;if(m!==null)m.return=p,M=m;else for(;M!==null;){p=M;var f=p.sibling,g=p.return;if(ux(p),p===d){M=null;break}if(f!==null){f.return=g,M=f;break}M=g}}}var $=a.alternate;if($!==null){var x=$.child;if(x!==null){$.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}M=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,M=l;else e:for(;M!==null;){if(a=M,a.flags&2048)switch(a.tag){case 0:case 11:case 15:$i(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,M=v;break e}M=a.return}}var h=e.current;for(M=h;M!==null;){l=M;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,M=y;else e:for(l=h;M!==null;){if(c=M,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:nc(9,c)}}catch(S){Ee(c,c.return,S)}if(c===l){M=null;break e}var E=c.sibling;if(E!==null){E.return=c.return,M=E;break e}M=c.return}}if(q=i,Gn(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Qs,e)}catch{}o=!0}return o}finally{oe=n,Ct.transition=t}}return!1}function Pg(e,t,n){t=$o(n,t),t=Z$(e,t,1),e=Fn(e,t,1),t=et(),e!==null&&(Ji(e,1,t),st(e,t))}function Ee(e,t,n){if(e.tag===3)Pg(e,e,n);else for(;t!==null;){if(t.tag===3){Pg(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ln===null||!Ln.has(o))){e=$o(n,e),e=ex(t,e,1),t=Fn(t,e,1),e=et(),t!==null&&(Ji(t,1,e),st(t,e));break}}t=t.return}}function Qb(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(je&n)===n&&(Le===4||Le===3&&(je&130023424)===je&&500>ke()-If?ir(e,0):Rf|=n),st(e,t)}function xx(e,t){t===0&&(e.mode&1?(t=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):t=1);var n=et();e=un(e,t),e!==null&&(Ji(e,t,n),st(e,n))}function Kb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xx(e,n)}function Xb(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(A(314))}o!==null&&o.delete(t),xx(e,n)}var Ex;Ex=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)it=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return it=!1,Ib(e,t,n);it=!!(e.flags&131072)}else it=!1,he&&t.flags&1048576&&S$(t,bs,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;os(e,t),e=t.pendingProps;var i=ho(t,Ke.current);mo(t,n),i=Af(null,t,o,e,i,n);var a=Ff();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(o)?(a=!0,Es(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sf(t),i.updater=tc,t.stateNode=i,i._reactInternals=t,hp(t,o,e,n),t=vp(null,t,o,!0,a,n)):(t.tag=0,he&&a&&vf(t),Ze(null,t,i,n),t=t.child),t;case 16:o=t.elementType;e:{switch(os(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=qb(o),e=Nt(o,e),i){case 0:t=yp(null,t,o,e,n);break e;case 1:t=$g(null,t,o,e,n);break e;case 11:t=yg(null,t,o,e,n);break e;case 14:t=vg(null,t,o,Nt(o.type,e),n);break e}throw Error(A(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Nt(o,i),yp(e,t,o,i,n);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Nt(o,i),$g(e,t,o,i,n);case 3:e:{if(ox(t),e===null)throw Error(A(387));o=t.pendingProps,a=t.memoizedState,i=a.element,F$(e,t),Ts(t,o,null,n);var l=t.memoizedState;if(o=l.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=$o(Error(A(423)),t),t=xg(e,t,o,n,i);break e}else if(o!==i){i=$o(Error(A(424)),t),t=xg(e,t,o,n,i);break e}else for(ft=An(t.stateNode.containerInfo.firstChild),ht=t,he=!0,Rt=null,n=P$(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(go(),o===i){t=dn(e,t,n);break e}Ze(e,t,o,n)}t=t.child}return t;case 5:return L$(t),e===null&&mp(t),o=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,lp(o,i)?l=null:a!==null&&lp(o,a)&&(t.flags|=32),rx(e,t),Ze(e,t,l,n),t.child;case 6:return e===null&&mp(t),null;case 13:return ix(e,t,n);case 4:return Tf(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=yo(t,null,o,n):Ze(e,t,o,n),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Nt(o,i),yg(e,t,o,i,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,ue(ks,o._currentValue),o._currentValue=l,a!==null)if(Ot(a.value,l)){if(a.children===i.children&&!at.current){t=dn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){l=a.child;for(var u=c.firstContext;u!==null;){if(u.context===o){if(a.tag===1){u=on(-1,n&-n),u.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),pp(a.return,n,t),c.lanes|=n;break}u=u.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(A(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),pp(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,mo(t,n),i=zt(i),o=o(i),t.flags|=1,Ze(e,t,o,n),t.child;case 14:return o=t.type,i=Nt(o,t.pendingProps),i=Nt(o.type,i),vg(e,t,o,i,n);case 15:return tx(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Nt(o,i),os(e,t),t.tag=1,lt(o)?(e=!0,Es(t)):e=!1,mo(t,n),q$(t,o,i),hp(t,o,i,n),vp(null,t,o,!0,e,n);case 19:return ax(e,t,n);case 22:return nx(e,t,n)}throw Error(A(156,t.tag))};function wx(e,t){return Kv(e,t)}function Jb(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,o){return new Jb(e,t,n,o)}function jf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qb(e){if(typeof e=="function")return jf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===af)return 11;if(e===lf)return 14}return 2}function Nn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ls(e,t,n,o,i,a){var l=2;if(o=e,typeof e=="function")jf(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Hr:return ar(n.children,i,a,t);case of:l=8,i|=8;break;case Vm:return e=Tt(12,n,t,i|2),e.elementType=Vm,e.lanes=a,e;case Om:return e=Tt(13,n,t,i),e.elementType=Om,e.lanes=a,e;case jm:return e=Tt(19,n,t,i),e.elementType=jm,e.lanes=a,e;case Lv:return oc(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Av:l=10;break e;case Fv:l=9;break e;case af:l=11;break e;case lf:l=14;break e;case $n:l=16,o=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Tt(l,n,t,i),t.elementType=e,t.type=o,t.lanes=a,t}function ar(e,t,n,o){return e=Tt(7,e,o,t),e.lanes=n,e}function oc(e,t,n,o){return e=Tt(22,e,o,t),e.elementType=Lv,e.lanes=n,e.stateNode={isHidden:!1},e}function cu(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function uu(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zb(e,t,n,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uc(0),this.expirationTimes=Uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wf(e,t,n,o,i,a,l,c,u){return e=new Zb(e,t,n,c,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Tt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sf(a),e}function ek(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ur,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function bx(e){if(!e)return jn;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(lt(n))return b$(e,n,t)}return t}function kx(e,t,n,o,i,a,l,c,u){return e=Wf(n,o,!0,e,i,a,l,c,u),e.context=bx(null),n=e.current,o=et(),i=Dn(n),a=on(o,i),a.callback=t??null,Fn(n,a,i),e.current.lanes=i,Ji(e,i,o),st(e,o),e}function ic(e,t,n,o){var i=t.current,a=et(),l=Dn(i);return n=bx(n),t.context===null?t.context=n:t.pendingContext=n,t=on(a,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Fn(i,t,l),e!==null&&(Vt(e,i,l,a),ts(e,i,l)),l}function Ns(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ag(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _f(e,t){Ag(e,t),(e=e.alternate)&&Ag(e,t)}function tk(){return null}var Sx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uf(e){this._internalRoot=e}ac.prototype.render=Uf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));ic(e,t,null,null)};ac.prototype.unmount=Uf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dr(function(){ic(null,e,null,null)}),t[cn]=null}};function ac(e){this._internalRoot=e}ac.prototype.unstable_scheduleHydration=function(e){if(e){var t=n$();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wn.length&&t!==0&&t<wn[n].priority;n++);wn.splice(n,0,e),n===0&&o$(e)}};function Hf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fg(){}function nk(e,t,n,o,i){if(i){if(typeof o=="function"){var a=o;o=function(){var d=Ns(l);a.call(d)}}var l=kx(t,o,e,0,null,!1,!1,"",Fg);return e._reactRootContainer=l,e[cn]=l.current,Mi(e.nodeType===8?e.parentNode:e),dr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var c=o;o=function(){var d=Ns(u);c.call(d)}}var u=Wf(e,0,!1,null,null,!1,!1,"",Fg);return e._reactRootContainer=u,e[cn]=u.current,Mi(e.nodeType===8?e.parentNode:e),dr(function(){ic(t,u,n,o)}),u}function sc(e,t,n,o,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var c=i;i=function(){var u=Ns(l);c.call(u)}}ic(t,l,e,i)}else l=nk(n,t,e,i,o);return Ns(l)}e$=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ui(t.pendingLanes);n!==0&&(uf(t,n|1),st(t,ke()),!(q&6)&&(xo=ke()+500,Gn()))}break;case 13:dr(function(){var o=un(e,1);if(o!==null){var i=et();Vt(o,e,1,i)}}),_f(e,1)}};df=function(e){if(e.tag===13){var t=un(e,134217728);if(t!==null){var n=et();Vt(t,e,134217728,n)}_f(e,134217728)}};t$=function(e){if(e.tag===13){var t=Dn(e),n=un(e,t);if(n!==null){var o=et();Vt(n,e,t,o)}_f(e,t)}};n$=function(){return oe};r$=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};Jm=function(e,t,n){switch(t){case"input":if(Um(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var i=qs(o);if(!i)throw Error(A(90));Nv(o),Um(o,i)}}}break;case"textarea":Rv(e,n);break;case"select":t=n.value,t!=null&&lo(e,!!n.multiple,t,!1)}};_v=Bf;Uv=dr;var rk={usingClientEntryPoint:!1,Events:[Zi,Kr,qs,jv,Wv,Bf]},Bo={findFiberByHostInstance:tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ok={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yv(e),e===null?null:e.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||tk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{Qs=ka.inject(ok),Gt=ka}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rk;vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hf(t))throw Error(A(200));return ek(e,t,null,n)};vt.createRoot=function(e,t){if(!Hf(e))throw Error(A(299));var n=!1,o="",i=Sx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wf(e,1,!1,null,null,n,!1,o,i),e[cn]=t.current,Mi(e.nodeType===8?e.parentNode:e),new Uf(t)};vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Yv(t),e=e===null?null:e.stateNode,e};vt.flushSync=function(e){return dr(e)};vt.hydrate=function(e,t,n){if(!lc(t))throw Error(A(200));return sc(null,e,t,!0,n)};vt.hydrateRoot=function(e,t,n){if(!Hf(e))throw Error(A(405));var o=n!=null&&n.hydratedSources||null,i=!1,a="",l=Sx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=kx(t,null,e,1,n??null,i,!1,a,l),e[cn]=t.current,Mi(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ac(t)};vt.render=function(e,t,n){if(!lc(t))throw Error(A(200));return sc(null,e,t,!1,n)};vt.unmountComponentAtNode=function(e){if(!lc(e))throw Error(A(40));return e._reactRootContainer?(dr(function(){sc(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};vt.unstable_batchedUpdates=Bf;vt.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!lc(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return sc(e,t,n,!1,o)};vt.version="18.3.1-next-f1338f8080-20240426";function Tx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tx)}catch(e){console.error(e)}}Tx(),Tv.exports=vt;var ik=Tv.exports,Lg=ik;Im.createRoot=Lg.createRoot,Im.hydrateRoot=Lg.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ui(){return Ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ui.apply(this,arguments)}var Tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tn||(Tn={}));const Dg="popstate";function ak(e){e===void 0&&(e={});function t(o,i){let{pathname:a,search:l,hash:c}=o.location;return Ap("",{pathname:a,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){return typeof i=="string"?i:Ms(i)}return sk(t,n,null,e)}function Pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Cx(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lk(){return Math.random().toString(36).substr(2,8)}function Ng(e,t){return{usr:e.state,key:e.key,idx:t}}function Ap(e,t,n,o){return n===void 0&&(n=null),Ui({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zo(t):t,{state:n,key:t&&t.key||o||lk()})}function Ms(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function zo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function sk(e,t,n,o){o===void 0&&(o={});let{window:i=document.defaultView,v5Compat:a=!1}=o,l=i.history,c=Tn.Pop,u=null,d=p();d==null&&(d=0,l.replaceState(Ui({},l.state,{idx:d}),""));function p(){return(l.state||{idx:null}).idx}function m(){c=Tn.Pop;let w=p(),v=w==null?null:w-d;d=w,u&&u({action:c,location:x.location,delta:v})}function f(w,v){c=Tn.Push;let h=Ap(x.location,w,v);n&&n(h,w),d=p()+1;let y=Ng(h,d),E=x.createHref(h);try{l.pushState(y,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}a&&u&&u({action:c,location:x.location,delta:1})}function g(w,v){c=Tn.Replace;let h=Ap(x.location,w,v);n&&n(h,w),d=p();let y=Ng(h,d),E=x.createHref(h);l.replaceState(y,"",E),a&&u&&u({action:c,location:x.location,delta:0})}function $(w){let v=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:Ms(w);return h=h.replace(/ $/,"%20"),Pe(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let x={get action(){return c},get location(){return e(i,l)},listen(w){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Dg,m),u=w,()=>{i.removeEventListener(Dg,m),u=null}},createHref(w){return t(i,w)},createURL:$,encodeLocation(w){let v=$(w);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:g,go(w){return l.go(w)}};return x}var Mg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mg||(Mg={}));function ck(e,t,n){return n===void 0&&(n="/"),uk(e,t,n,!1)}function uk(e,t,n,o){let i=typeof t=="string"?zo(t):t,a=Gf(i.pathname||"/",n);if(a==null)return null;let l=zx(e);dk(l);let c=null;for(let u=0;c==null&&u<l.length;++u){let d=wk(a);c=xk(l[u],d,o)}return c}function zx(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let i=(a,l,c)=>{let u={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};u.relativePath.startsWith("/")&&(Pe(u.relativePath.startsWith(o),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(o.length));let d=Mn([o,u.relativePath]),p=n.concat(u);a.children&&a.children.length>0&&(Pe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),zx(a.children,t,p,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:vk(d,a.index),routesMeta:p})};return e.forEach((a,l)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))i(a,l);else for(let u of Px(a.path))i(a,l,u)}),t}function Px(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(o.length===0)return i?[a,""]:[a];let l=Px(o.join("/")),c=[];return c.push(...l.map(u=>u===""?a:[a,u].join("/"))),i&&c.push(...l),c.map(u=>e.startsWith("/")&&u===""?"/":u)}function dk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$k(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const mk=/^:[\w-]+$/,pk=3,fk=2,hk=1,gk=10,yk=-2,Rg=e=>e==="*";function vk(e,t){let n=e.split("/"),o=n.length;return n.some(Rg)&&(o+=yk),t&&(o+=fk),n.filter(i=>!Rg(i)).reduce((i,a)=>i+(mk.test(a)?pk:a===""?hk:gk),o)}function $k(e,t){return e.length===t.length&&e.slice(0,-1).every((o,i)=>o===t[i])?e[e.length-1]-t[t.length-1]:0}function xk(e,t,n){n===void 0&&(n=!1);let{routesMeta:o}=e,i={},a="/",l=[];for(let c=0;c<o.length;++c){let u=o[c],d=c===o.length-1,p=a==="/"?t:t.slice(a.length)||"/",m=Ig({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},p),f=u.route;if(!m&&d&&n&&!o[o.length-1].route.index&&(m=Ig({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},p)),!m)return null;Object.assign(i,m.params),l.push({params:i,pathname:Mn([a,m.pathname]),pathnameBase:Tk(Mn([a,m.pathnameBase])),route:f}),m.pathnameBase!=="/"&&(a=Mn([a,m.pathnameBase]))}return l}function Ig(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=Ek(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:o.reduce((d,p,m)=>{let{paramName:f,isOptional:g}=p;if(f==="*"){let x=c[m]||"";l=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const $=c[m];return g&&!$?d[f]=void 0:d[f]=($||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:l,pattern:e}}function Ek(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Cx(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,u)=>(o.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),o]}function wk(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Cx(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Gf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function bk(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:i=""}=typeof e=="string"?zo(e):e;return{pathname:n?n.startsWith("/")?n:kk(n,t):t,search:Ck(o),hash:zk(i)}}function kk(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function du(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ax(e,t){let n=Sk(e);return t?n.map((o,i)=>i===n.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function Fx(e,t,n,o){o===void 0&&(o=!1);let i;typeof e=="string"?i=zo(e):(i=Ui({},e),Pe(!i.pathname||!i.pathname.includes("?"),du("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),du("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),du("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,c;if(l==null)c=n;else{let m=t.length-1;if(!o&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),m-=1;i.pathname=f.join("/")}c=m>=0?t[m]:"/"}let u=bk(i,c),d=l&&l!=="/"&&l.endsWith("/"),p=(a||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||p)&&(u.pathname+="/"),u}const Mn=e=>e.join("/").replace(/\/\/+/g,"/"),Tk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ck=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,zk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Pk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Lx=["post","put","patch","delete"];new Set(Lx);const Ak=["get",...Lx];new Set(Ak);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hi(){return Hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Hi.apply(this,arguments)}const Yf=b.createContext(null),Fk=b.createContext(null),gr=b.createContext(null),cc=b.createContext(null),Yn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Dx=b.createContext(null);function Lk(e,t){let{relative:n}=t===void 0?{}:t;ta()||Pe(!1);let{basename:o,navigator:i}=b.useContext(gr),{hash:a,pathname:l,search:c}=Rx(e,{relative:n}),u=l;return o!=="/"&&(u=l==="/"?o:Mn([o,l])),i.createHref({pathname:u,search:c,hash:a})}function ta(){return b.useContext(cc)!=null}function yr(){return ta()||Pe(!1),b.useContext(cc).location}function Nx(e){b.useContext(gr).static||b.useLayoutEffect(e)}function na(){let{isDataRoute:e}=b.useContext(Yn);return e?Hk():Dk()}function Dk(){ta()||Pe(!1);let e=b.useContext(Yf),{basename:t,future:n,navigator:o}=b.useContext(gr),{matches:i}=b.useContext(Yn),{pathname:a}=yr(),l=JSON.stringify(Ax(i,n.v7_relativeSplatPath)),c=b.useRef(!1);return Nx(()=>{c.current=!0}),b.useCallback(function(d,p){if(p===void 0&&(p={}),!c.current)return;if(typeof d=="number"){o.go(d);return}let m=Fx(d,JSON.parse(l),a,p.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Mn([t,m.pathname])),(p.replace?o.replace:o.push)(m,p.state,p)},[t,o,l,a,e])}function Mx(){let{matches:e}=b.useContext(Yn),t=e[e.length-1];return t?t.params:{}}function Rx(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=b.useContext(gr),{matches:i}=b.useContext(Yn),{pathname:a}=yr(),l=JSON.stringify(Ax(i,o.v7_relativeSplatPath));return b.useMemo(()=>Fx(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function Nk(e,t){return Mk(e,t)}function Mk(e,t,n,o){ta()||Pe(!1);let{navigator:i}=b.useContext(gr),{matches:a}=b.useContext(Yn),l=a[a.length-1],c=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let d=yr(),p;if(t){var m;let w=typeof t=="string"?zo(t):t;u==="/"||(m=w.pathname)!=null&&m.startsWith(u)||Pe(!1),p=w}else p=d;let f=p.pathname||"/",g=f;if(u!=="/"){let w=u.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let $=ck(e,{pathname:g}),x=Ok($&&$.map(w=>Object.assign({},w,{params:Object.assign({},c,w.params),pathname:Mn([u,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?u:Mn([u,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,n,o);return t&&x?b.createElement(cc.Provider,{value:{location:Hi({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Tn.Pop}},x):x}function Rk(){let e=Uk(),t=Pk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,a)}const Ik=b.createElement(Rk,null);class Bk extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Yn.Provider,{value:this.props.routeContext},b.createElement(Dx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vk(e){let{routeContext:t,match:n,children:o}=e,i=b.useContext(Yf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Yn.Provider,{value:t},o)}function Ok(e,t,n,o){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=o)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let p=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);p>=0||Pe(!1),l=l.slice(0,Math.min(l.length,p+1))}let u=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:f,errors:g}=n,$=m.route.loader&&f[m.route.id]===void 0&&(!g||g[m.route.id]===void 0);if(m.route.lazy||$){u=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((p,m,f)=>{let g,$=!1,x=null,w=null;n&&(g=c&&m.route.id?c[m.route.id]:void 0,x=m.route.errorElement||Ik,u&&(d<0&&f===0?(Gk("route-fallback",!1),$=!0,w=null):d===f&&($=!0,w=m.route.hydrateFallbackElement||null)));let v=t.concat(l.slice(0,f+1)),h=()=>{let y;return g?y=x:$?y=w:m.route.Component?y=b.createElement(m.route.Component,null):m.route.element?y=m.route.element:y=p,b.createElement(Vk,{match:m,routeContext:{outlet:p,matches:v,isDataRoute:n!=null},children:y})};return n&&(m.route.ErrorBoundary||m.route.errorElement||f===0)?b.createElement(Bk,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:h(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):h()},null)}var Ix=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ix||{}),Rs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Rs||{});function jk(e){let t=b.useContext(Yf);return t||Pe(!1),t}function Wk(e){let t=b.useContext(Fk);return t||Pe(!1),t}function _k(e){let t=b.useContext(Yn);return t||Pe(!1),t}function Bx(e){let t=_k(),n=t.matches[t.matches.length-1];return n.route.id||Pe(!1),n.route.id}function Uk(){var e;let t=b.useContext(Dx),n=Wk(Rs.UseRouteError),o=Bx(Rs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function Hk(){let{router:e}=jk(Ix.UseNavigateStable),t=Bx(Rs.UseNavigateStable),n=b.useRef(!1);return Nx(()=>{n.current=!0}),b.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Hi({fromRouteId:t},a)))},[e,t])}const Bg={};function Gk(e,t,n){!t&&!Bg[e]&&(Bg[e]=!0)}function Yk(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function Je(e){Pe(!1)}function Qk(e){let{basename:t="/",children:n=null,location:o,navigationType:i=Tn.Pop,navigator:a,static:l=!1,future:c}=e;ta()&&Pe(!1);let u=t.replace(/^\/*/,"/"),d=b.useMemo(()=>({basename:u,navigator:a,static:l,future:Hi({v7_relativeSplatPath:!1},c)}),[u,c,a,l]);typeof o=="string"&&(o=zo(o));let{pathname:p="/",search:m="",hash:f="",state:g=null,key:$="default"}=o,x=b.useMemo(()=>{let w=Gf(p,u);return w==null?null:{location:{pathname:w,search:m,hash:f,state:g,key:$},navigationType:i}},[u,p,m,f,g,$,i]);return x==null?null:b.createElement(gr.Provider,{value:d},b.createElement(cc.Provider,{children:n,value:x}))}function Kk(e){let{children:t,location:n}=e;return Nk(Fp(t),n)}new Promise(()=>{});function Fp(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(o,i)=>{if(!b.isValidElement(o))return;let a=[...t,i];if(o.type===b.Fragment){n.push.apply(n,Fp(o.props.children,a));return}o.type!==Je&&Pe(!1),!o.props.index||!o.props.children||Pe(!1);let l={id:o.props.id||a.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(l.children=Fp(o.props.children,a)),n.push(l)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lp(){return Lp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Lp.apply(this,arguments)}function Xk(e,t){if(e==null)return{};var n={},o=Object.keys(e),i,a;for(a=0;a<o.length;a++)i=o[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qk(e,t){return e.button===0&&(!t||t==="_self")&&!Jk(e)}const Zk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],eS="6";try{window.__reactRouterVersion=eS}catch{}const tS="startTransition",Vg=ew[tS];function nS(e){let{basename:t,children:n,future:o,window:i}=e,a=b.useRef();a.current==null&&(a.current=ak({window:i,v5Compat:!0}));let l=a.current,[c,u]=b.useState({action:l.action,location:l.location}),{v7_startTransition:d}=o||{},p=b.useCallback(m=>{d&&Vg?Vg(()=>u(m)):u(m)},[u,d]);return b.useLayoutEffect(()=>l.listen(p),[l,p]),b.useEffect(()=>Yk(o),[o]),b.createElement(Qk,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:o})}const rS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ne=b.forwardRef(function(t,n){let{onClick:o,relative:i,reloadDocument:a,replace:l,state:c,target:u,to:d,preventScrollReset:p,viewTransition:m}=t,f=Xk(t,Zk),{basename:g}=b.useContext(gr),$,x=!1;if(typeof d=="string"&&oS.test(d)&&($=d,rS))try{let y=new URL(window.location.href),E=d.startsWith("//")?new URL(y.protocol+d):new URL(d),S=Gf(E.pathname,g);E.origin===y.origin&&S!=null?d=S+E.search+E.hash:x=!0}catch{}let w=Lk(d,{relative:i}),v=iS(d,{replace:l,state:c,target:u,preventScrollReset:p,relative:i,viewTransition:m});function h(y){o&&o(y),y.defaultPrevented||v(y)}return b.createElement("a",Lp({},f,{href:$||w,onClick:x||a?o:h,ref:n,target:u}))});var Og;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Og||(Og={}));var jg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(jg||(jg={}));function iS(e,t){let{target:n,replace:o,state:i,preventScrollReset:a,relative:l,viewTransition:c}=t===void 0?{}:t,u=na(),d=yr(),p=Rx(e,{relative:l});return b.useCallback(m=>{if(qk(m,n)){m.preventDefault();let f=o!==void 0?o:Ms(d)===Ms(p);u(e,{replace:f,state:i,preventScrollReset:a,relative:l,viewTransition:c})}},[d,u,p,o,i,n,e,a,l,c])}var Vx={exports:{}},ie={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf=Symbol.for("react.element"),Kf=Symbol.for("react.portal"),uc=Symbol.for("react.fragment"),dc=Symbol.for("react.strict_mode"),mc=Symbol.for("react.profiler"),pc=Symbol.for("react.provider"),fc=Symbol.for("react.context"),aS=Symbol.for("react.server_context"),hc=Symbol.for("react.forward_ref"),gc=Symbol.for("react.suspense"),yc=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),$c=Symbol.for("react.lazy"),lS=Symbol.for("react.offscreen"),Ox;Ox=Symbol.for("react.module.reference");function At(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qf:switch(e=e.type,e){case uc:case mc:case dc:case gc:case yc:return e;default:switch(e=e&&e.$$typeof,e){case aS:case fc:case hc:case $c:case vc:case pc:return e;default:return t}}case Kf:return t}}}ie.ContextConsumer=fc;ie.ContextProvider=pc;ie.Element=Qf;ie.ForwardRef=hc;ie.Fragment=uc;ie.Lazy=$c;ie.Memo=vc;ie.Portal=Kf;ie.Profiler=mc;ie.StrictMode=dc;ie.Suspense=gc;ie.SuspenseList=yc;ie.isAsyncMode=function(){return!1};ie.isConcurrentMode=function(){return!1};ie.isContextConsumer=function(e){return At(e)===fc};ie.isContextProvider=function(e){return At(e)===pc};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qf};ie.isForwardRef=function(e){return At(e)===hc};ie.isFragment=function(e){return At(e)===uc};ie.isLazy=function(e){return At(e)===$c};ie.isMemo=function(e){return At(e)===vc};ie.isPortal=function(e){return At(e)===Kf};ie.isProfiler=function(e){return At(e)===mc};ie.isStrictMode=function(e){return At(e)===dc};ie.isSuspense=function(e){return At(e)===gc};ie.isSuspenseList=function(e){return At(e)===yc};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===uc||e===mc||e===dc||e===gc||e===yc||e===lS||typeof e=="object"&&e!==null&&(e.$$typeof===$c||e.$$typeof===vc||e.$$typeof===pc||e.$$typeof===fc||e.$$typeof===hc||e.$$typeof===Ox||e.getModuleId!==void 0)};ie.typeOf=At;Vx.exports=ie;var jx=Vx.exports;function sS(e){function t(L,N,T,j,k){for(var Q=0,D=0,ce=0,J=0,K,Y,Re=0,rt=0,Z,_e=Z=K=0,te=0,Ie=0,Po=0,Be=0,la=T.length,Ao=la-1,Ft,H="",be="",Ic="",Bc="",fn;te<la;){if(Y=T.charCodeAt(te),te===Ao&&D+J+ce+Q!==0&&(D!==0&&(Y=D===47?10:47),J=ce=Q=0,la++,Ao++),D+J+ce+Q===0){if(te===Ao&&(0<Ie&&(H=H.replace(f,"")),0<H.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:H+=T.charAt(te)}Y=59}switch(Y){case 123:for(H=H.trim(),K=H.charCodeAt(0),Z=1,Be=++te;te<la;){switch(Y=T.charCodeAt(te)){case 123:Z++;break;case 125:Z--;break;case 47:switch(Y=T.charCodeAt(te+1)){case 42:case 47:e:{for(_e=te+1;_e<Ao;++_e)switch(T.charCodeAt(_e)){case 47:if(Y===42&&T.charCodeAt(_e-1)===42&&te+2!==_e){te=_e+1;break e}break;case 10:if(Y===47){te=_e+1;break e}}te=_e}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;te++<Ao&&T.charCodeAt(te)!==Y;);}if(Z===0)break;te++}switch(Z=T.substring(Be,te),K===0&&(K=(H=H.replace(m,"").trim()).charCodeAt(0)),K){case 64:switch(0<Ie&&(H=H.replace(f,"")),Y=H.charCodeAt(1),Y){case 100:case 109:case 115:case 45:Ie=N;break;default:Ie=re}if(Z=t(N,Ie,Z,Y,k+1),Be=Z.length,0<F&&(Ie=n(re,H,Po),fn=c(3,Z,Ie,N,ee,G,Be,Y,k,j),H=Ie.join(""),fn!==void 0&&(Be=(Z=fn.trim()).length)===0&&(Y=0,Z="")),0<Be)switch(Y){case 115:H=H.replace(z,l);case 100:case 109:case 45:Z=H+"{"+Z+"}";break;case 107:H=H.replace(h,"$1 $2"),Z=H+"{"+Z+"}",Z=de===1||de===2&&a("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=H+Z,j===112&&(Z=(be+=Z,""))}else Z="";break;default:Z=t(N,n(N,H,Po),Z,j,k+1)}Ic+=Z,Z=Po=Ie=_e=K=0,H="",Y=T.charCodeAt(++te);break;case 125:case 59:if(H=(0<Ie?H.replace(f,""):H).trim(),1<(Be=H.length))switch(_e===0&&(K=H.charCodeAt(0),K===45||96<K&&123>K)&&(Be=(H=H.replace(" ",":")).length),0<F&&(fn=c(1,H,N,L,ee,G,be.length,j,k,j))!==void 0&&(Be=(H=fn.trim()).length)===0&&(H="\0\0"),K=H.charCodeAt(0),Y=H.charCodeAt(1),K){case 0:break;case 64:if(Y===105||Y===99){Bc+=H+T.charAt(te);break}default:H.charCodeAt(Be-1)!==58&&(be+=i(H,K,Y,H.charCodeAt(2)))}Po=Ie=_e=K=0,H="",Y=T.charCodeAt(++te)}}switch(Y){case 13:case 10:D===47?D=0:1+K===0&&j!==107&&0<H.length&&(Ie=1,H+="\0"),0<F*_&&c(0,H,N,L,ee,G,be.length,j,k,j),G=1,ee++;break;case 59:case 125:if(D+J+ce+Q===0){G++;break}default:switch(G++,Ft=T.charAt(te),Y){case 9:case 32:if(J+Q+D===0)switch(Re){case 44:case 58:case 9:case 32:Ft="";break;default:Y!==32&&(Ft=" ")}break;case 0:Ft="\\0";break;case 12:Ft="\\f";break;case 11:Ft="\\v";break;case 38:J+D+Q===0&&(Ie=Po=1,Ft="\f"+Ft);break;case 108:if(J+D+Q+R===0&&0<_e)switch(te-_e){case 2:Re===112&&T.charCodeAt(te-3)===58&&(R=Re);case 8:rt===111&&(R=rt)}break;case 58:J+D+Q===0&&(_e=te);break;case 44:D+ce+J+Q===0&&(Ie=1,Ft+="\r");break;case 34:case 39:D===0&&(J=J===Y?0:J===0?Y:J);break;case 91:J+D+ce===0&&Q++;break;case 93:J+D+ce===0&&Q--;break;case 41:J+D+Q===0&&ce--;break;case 40:if(J+D+Q===0){if(K===0)switch(2*Re+3*rt){case 533:break;default:K=1}ce++}break;case 64:D+ce+J+Q+_e+Z===0&&(Z=1);break;case 42:case 47:if(!(0<J+Q+ce))switch(D){case 0:switch(2*Y+3*T.charCodeAt(te+1)){case 235:D=47;break;case 220:Be=te,D=42}break;case 42:Y===47&&Re===42&&Be+2!==te&&(T.charCodeAt(Be+2)===33&&(be+=T.substring(Be,te+1)),Ft="",D=0)}}D===0&&(H+=Ft)}rt=Re,Re=Y,te++}if(Be=be.length,0<Be){if(Ie=N,0<F&&(fn=c(2,be,Ie,L,ee,G,Be,j,k,j),fn!==void 0&&(be=fn).length===0))return Bc+be+Ic;if(be=Ie.join(",")+"{"+be+"}",de*R!==0){switch(de!==2||a(be,2)||(R=0),R){case 111:be=be.replace(E,":-moz-$1")+be;break;case 112:be=be.replace(y,"::-webkit-input-$1")+be.replace(y,"::-moz-$1")+be.replace(y,":-ms-input-$1")+be}R=0}}return Bc+be+Ic}function n(L,N,T){var j=N.trim().split(w);N=j;var k=j.length,Q=L.length;switch(Q){case 0:case 1:var D=0;for(L=Q===0?"":L[0]+" ";D<k;++D)N[D]=o(L,N[D],T).trim();break;default:var ce=D=0;for(N=[];D<k;++D)for(var J=0;J<Q;++J)N[ce++]=o(L[J]+" ",j[D],T).trim()}return N}function o(L,N,T){var j=N.charCodeAt(0);switch(33>j&&(j=(N=N.trim()).charCodeAt(0)),j){case 38:return N.replace(v,"$1"+L.trim());case 58:return L.trim()+N.replace(v,"$1"+L.trim());default:if(0<1*T&&0<N.indexOf("\f"))return N.replace(v,(L.charCodeAt(0)===58?"":"$1")+L.trim())}return L+N}function i(L,N,T,j){var k=L+";",Q=2*N+3*T+4*j;if(Q===944){L=k.indexOf(":",9)+1;var D=k.substring(L,k.length-1).trim();return D=k.substring(0,L).trim()+D+";",de===1||de===2&&a(D,1)?"-webkit-"+D+D:D}if(de===0||de===2&&!a(k,1))return k;switch(Q){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(le,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return D=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+D+"-webkit-"+k+"-ms-flex-pack"+D+k;case 1005:return $.test(k)?k.replace(g,":-webkit-")+k.replace(g,":-moz-")+k:k;case 1e3:switch(D=k.substring(13).trim(),N=D.indexOf("-")+1,D.charCodeAt(0)+D.charCodeAt(N)){case 226:D=k.replace(S,"tb");break;case 232:D=k.replace(S,"tb-rl");break;case 220:D=k.replace(S,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+D+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(N=(k=L).length-10,D=(k.charCodeAt(N)===33?k.substring(0,N):k).substring(L.indexOf(":",7)+1).trim(),Q=D.charCodeAt(0)+(D.charCodeAt(7)|0)){case 203:if(111>D.charCodeAt(8))break;case 115:k=k.replace(D,"-webkit-"+D)+";"+k;break;case 207:case 102:k=k.replace(D,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+k.replace(D,"-webkit-"+D)+";"+k.replace(D,"-ms-"+D+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return D=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+D+"-ms-flex-"+D+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(C,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(C,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(B.test(L)===!0)return(D=L.substring(L.indexOf(":")+1)).charCodeAt(0)===115?i(L.replace("stretch","fill-available"),N,T,j).replace(":fill-available",":stretch"):k.replace(D,"-webkit-"+D)+k.replace(D,"-moz-"+D.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,T+j===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+k}return k}function a(L,N){var T=L.indexOf(N===1?":":"{"),j=L.substring(0,N!==3?T:10);return T=L.substring(T+1,L.length-1),V(N!==2?j:j.replace(I,"$1"),T,N)}function l(L,N){var T=i(N,N.charCodeAt(0),N.charCodeAt(1),N.charCodeAt(2));return T!==N+";"?T.replace(P," or ($1)").substring(4):"("+N+")"}function c(L,N,T,j,k,Q,D,ce,J,K){for(var Y=0,Re=N,rt;Y<F;++Y)switch(rt=se[Y].call(p,L,Re,T,j,k,Q,D,ce,J,K)){case void 0:case!1:case!0:case null:break;default:Re=rt}if(Re!==N)return Re}function u(L){switch(L){case void 0:case null:F=se.length=0;break;default:if(typeof L=="function")se[F++]=L;else if(typeof L=="object")for(var N=0,T=L.length;N<T;++N)u(L[N]);else _=!!L|0}return u}function d(L){return L=L.prefix,L!==void 0&&(V=null,L?typeof L!="function"?de=1:(de=2,V=L):de=0),d}function p(L,N){var T=L;if(33>T.charCodeAt(0)&&(T=T.trim()),O=T,T=[O],0<F){var j=c(-1,N,T,T,ee,G,0,0,0,0);j!==void 0&&typeof j=="string"&&(N=j)}var k=t(re,T,N,0,0);return 0<F&&(j=c(-2,k,T,T,ee,G,k.length,0,0,0),j!==void 0&&(k=j)),O="",R=0,G=ee=1,k}var m=/^\0+/g,f=/[\0\r\f]/g,g=/: */g,$=/zoo|gra/,x=/([,: ])(transform)/g,w=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,E=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,z=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,C=/-self|flex-/g,I=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,le=/([^-])(image-set\()/,G=1,ee=1,R=0,de=1,re=[],se=[],F=0,V=null,_=0,O="";return p.use=u,p.set=d,e!==void 0&&d(e),p}var cS={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function uS(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var dS=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Wg=uS(function(e){return dS.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Wx={exports:{}},ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=typeof Symbol=="function"&&Symbol.for,Xf=Me?Symbol.for("react.element"):60103,Jf=Me?Symbol.for("react.portal"):60106,xc=Me?Symbol.for("react.fragment"):60107,Ec=Me?Symbol.for("react.strict_mode"):60108,wc=Me?Symbol.for("react.profiler"):60114,bc=Me?Symbol.for("react.provider"):60109,kc=Me?Symbol.for("react.context"):60110,qf=Me?Symbol.for("react.async_mode"):60111,Sc=Me?Symbol.for("react.concurrent_mode"):60111,Tc=Me?Symbol.for("react.forward_ref"):60112,Cc=Me?Symbol.for("react.suspense"):60113,mS=Me?Symbol.for("react.suspense_list"):60120,zc=Me?Symbol.for("react.memo"):60115,Pc=Me?Symbol.for("react.lazy"):60116,pS=Me?Symbol.for("react.block"):60121,fS=Me?Symbol.for("react.fundamental"):60117,hS=Me?Symbol.for("react.responder"):60118,gS=Me?Symbol.for("react.scope"):60119;function xt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xf:switch(e=e.type,e){case qf:case Sc:case xc:case wc:case Ec:case Cc:return e;default:switch(e=e&&e.$$typeof,e){case kc:case Tc:case Pc:case zc:case bc:return e;default:return t}}case Jf:return t}}}function _x(e){return xt(e)===Sc}ae.AsyncMode=qf;ae.ConcurrentMode=Sc;ae.ContextConsumer=kc;ae.ContextProvider=bc;ae.Element=Xf;ae.ForwardRef=Tc;ae.Fragment=xc;ae.Lazy=Pc;ae.Memo=zc;ae.Portal=Jf;ae.Profiler=wc;ae.StrictMode=Ec;ae.Suspense=Cc;ae.isAsyncMode=function(e){return _x(e)||xt(e)===qf};ae.isConcurrentMode=_x;ae.isContextConsumer=function(e){return xt(e)===kc};ae.isContextProvider=function(e){return xt(e)===bc};ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xf};ae.isForwardRef=function(e){return xt(e)===Tc};ae.isFragment=function(e){return xt(e)===xc};ae.isLazy=function(e){return xt(e)===Pc};ae.isMemo=function(e){return xt(e)===zc};ae.isPortal=function(e){return xt(e)===Jf};ae.isProfiler=function(e){return xt(e)===wc};ae.isStrictMode=function(e){return xt(e)===Ec};ae.isSuspense=function(e){return xt(e)===Cc};ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xc||e===Sc||e===wc||e===Ec||e===Cc||e===mS||typeof e=="object"&&e!==null&&(e.$$typeof===Pc||e.$$typeof===zc||e.$$typeof===bc||e.$$typeof===kc||e.$$typeof===Tc||e.$$typeof===fS||e.$$typeof===hS||e.$$typeof===gS||e.$$typeof===pS)};ae.typeOf=xt;Wx.exports=ae;var yS=Wx.exports,Zf=yS,vS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$S={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ux={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eh={};eh[Zf.ForwardRef]=xS;eh[Zf.Memo]=Ux;function _g(e){return Zf.isMemo(e)?Ux:eh[e.$$typeof]||vS}var ES=Object.defineProperty,wS=Object.getOwnPropertyNames,Ug=Object.getOwnPropertySymbols,bS=Object.getOwnPropertyDescriptor,kS=Object.getPrototypeOf,Hg=Object.prototype;function Hx(e,t,n){if(typeof t!="string"){if(Hg){var o=kS(t);o&&o!==Hg&&Hx(e,o,n)}var i=wS(t);Ug&&(i=i.concat(Ug(t)));for(var a=_g(e),l=_g(t),c=0;c<i.length;++c){var u=i[c];if(!$S[u]&&!(n&&n[u])&&!(l&&l[u])&&!(a&&a[u])){var d=bS(t,u);try{ES(e,u,d)}catch{}}}}return e}var SS=Hx;const TS=gv(SS);function It(){return(It=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var Gg=function(e,t){for(var n=[e[0]],o=0,i=t.length;o<i;o+=1)n.push(t[o],e[o+1]);return n},Dp=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!jx.typeOf(e)},Is=Object.freeze([]),Rn=Object.freeze({});function Eo(e){return typeof e=="function"}function Yg(e){return e.displayName||e.name||"Component"}function th(e){return e&&typeof e.styledComponentId=="string"}var wo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",nh=typeof window<"u"&&"HTMLElement"in window,CS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),zS={};function mr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var PS=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var o=0,i=0;i<n;i++)o+=this.groupSizes[i];return o},t.insertRules=function(n,o){if(n>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;n>=l;)(l<<=1)<0&&mr(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var u=this.indexOfGroup(n+1),d=0,p=o.length;d<p;d++)this.tag.insertRule(u,o[d])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o;this.groupSizes[n]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var o="";if(n>=this.length||this.groupSizes[n]===0)return o;for(var i=this.groupSizes[n],a=this.indexOfGroup(n),l=a+i,c=a;c<l;c++)o+=this.tag.getRule(c)+`/*!sc*/
`;return o},e}(),ss=new Map,Bs=new Map,wi=1,Sa=function(e){if(ss.has(e))return ss.get(e);for(;Bs.has(wi);)wi++;var t=wi++;return ss.set(e,t),Bs.set(t,e),t},AS=function(e){return Bs.get(e)},FS=function(e,t){t>=wi&&(wi=t+1),ss.set(e,t),Bs.set(t,e)},LS="style["+wo+'][data-styled-version="5.3.11"]',DS=new RegExp("^"+wo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),NS=function(e,t,n){for(var o,i=n.split(","),a=0,l=i.length;a<l;a++)(o=i[a])&&e.registerName(t,o)},MS=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),o=[],i=0,a=n.length;i<a;i++){var l=n[i].trim();if(l){var c=l.match(DS);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(FS(d,u),NS(e,d,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}},RS=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Gx=function(e){var t=document.head,n=e||t,o=document.createElement("style"),i=function(c){for(var u=c.childNodes,d=u.length;d>=0;d--){var p=u[d];if(p&&p.nodeType===1&&p.hasAttribute(wo))return p}}(n),a=i!==void 0?i.nextSibling:null;o.setAttribute(wo,"active"),o.setAttribute("data-styled-version","5.3.11");var l=RS();return l&&o.setAttribute("nonce",l),n.insertBefore(o,a),o},IS=function(){function e(n){var o=this.element=Gx(n);o.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,l=0,c=a.length;l<c;l++){var u=a[l];if(u.ownerNode===i)return u}mr(17)}(o),this.length=0}var t=e.prototype;return t.insertRule=function(n,o){try{return this.sheet.insertRule(o,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var o=this.sheet.cssRules[n];return o!==void 0&&typeof o.cssText=="string"?o.cssText:""},e}(),BS=function(){function e(n){var o=this.element=Gx(n);this.nodes=o.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,o){if(n<=this.length&&n>=0){var i=document.createTextNode(o),a=this.nodes[n];return this.element.insertBefore(i,a||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),VS=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,o){return n<=this.length&&(this.rules.splice(n,0,o),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Qg=nh,OS={isServer:!nh,useCSSOMInjection:!CS},Vs=function(){function e(n,o,i){n===void 0&&(n=Rn),o===void 0&&(o={}),this.options=It({},OS,{},n),this.gs=o,this.names=new Map(i),this.server=!!n.isServer,!this.server&&nh&&Qg&&(Qg=!1,function(a){for(var l=document.querySelectorAll(LS),c=0,u=l.length;c<u;c++){var d=l[c];d&&d.getAttribute(wo)!=="active"&&(MS(a,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}e.registerId=function(n){return Sa(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,o){return o===void 0&&(o=!0),new e(It({},this.options,{},n),this.gs,o&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(o=this.options).isServer,a=o.useCSSOMInjection,l=o.target,n=i?new VS(l):a?new IS(l):new BS(l),new PS(n)));var n,o,i,a,l},t.hasNameForId=function(n,o){return this.names.has(n)&&this.names.get(n).has(o)},t.registerName=function(n,o){if(Sa(n),this.names.has(n))this.names.get(n).add(o);else{var i=new Set;i.add(o),this.names.set(n,i)}},t.insertRules=function(n,o,i){this.registerName(n,o),this.getTag().insertRules(Sa(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Sa(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var o=n.getTag(),i=o.length,a="",l=0;l<i;l++){var c=AS(l);if(c!==void 0){var u=n.names.get(c),d=o.getGroup(l);if(u&&d&&u.size){var p=wo+".g"+l+'[id="'+c+'"]',m="";u!==void 0&&u.forEach(function(f){f.length>0&&(m+=f+",")}),a+=""+d+p+'{content:"'+m+`"}/*!sc*/
`}}}return a}(this)},e}(),jS=/(a)(d)/gi,Kg=function(e){return String.fromCharCode(e+(e>25?39:97))};function Np(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Kg(t%52)+n;return(Kg(t%52)+n).replace(jS,"$1-$2")}var no=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Yx=function(e){return no(5381,e)};function Qx(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Eo(n)&&!th(n))return!1}return!0}var WS=Yx("5.3.11"),_S=function(){function e(t,n,o){this.rules=t,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Qx(t),this.componentId=n,this.baseHash=no(WS,n),this.baseStyle=o,Vs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,o){var i=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,n,o)),this.isStatic&&!o.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))a.push(this.staticRulesId);else{var l=pr(this.rules,t,n,o).join(""),c=Np(no(this.baseHash,l)>>>0);if(!n.hasNameForId(i,c)){var u=o(l,"."+c,void 0,i);n.insertRules(i,c,u)}a.push(c),this.staticRulesId=c}else{for(var d=this.rules.length,p=no(this.baseHash,o.hash),m="",f=0;f<d;f++){var g=this.rules[f];if(typeof g=="string")m+=g;else if(g){var $=pr(g,t,n,o),x=Array.isArray($)?$.join(""):$;p=no(p,x+f),m+=x}}if(m){var w=Np(p>>>0);if(!n.hasNameForId(i,w)){var v=o(m,"."+w,void 0,i);n.insertRules(i,w,v)}a.push(w)}}return a.join(" ")},e}(),US=/^\s*\/\/.*$/gm,HS=[":","[",".","#"];function GS(e){var t,n,o,i,a=e===void 0?Rn:e,l=a.options,c=l===void 0?Rn:l,u=a.plugins,d=u===void 0?Is:u,p=new sS(c),m=[],f=function(x){function w(v){if(v)try{x(v+"}")}catch{}}return function(v,h,y,E,S,z,P,C,I,B){switch(v){case 1:if(I===0&&h.charCodeAt(0)===64)return x(h+";"),"";break;case 2:if(C===0)return h+"/*|*/";break;case 3:switch(C){case 102:case 112:return x(y[0]+h),"";default:return h+(B===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(w)}}}(function(x){m.push(x)}),g=function(x,w,v){return w===0&&HS.indexOf(v[n.length])!==-1||v.match(i)?x:"."+t};function $(x,w,v,h){h===void 0&&(h="&");var y=x.replace(US,""),E=w&&v?v+" "+w+" { "+y+" }":y;return t=h,n=w,o=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),p(v||!w?"":w,E)}return p.use([].concat(d,[function(x,w,v){x===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(o,g))},f,function(x){if(x===-2){var w=m;return m=[],w}}])),$.hash=d.length?d.reduce(function(x,w){return w.name||mr(15),no(x,w.name)},5381).toString():"",$}var Kx=r.createContext();Kx.Consumer;var Xx=r.createContext(),YS=(Xx.Consumer,new Vs),Mp=GS();function Jx(){return b.useContext(Kx)||YS}function qx(){return b.useContext(Xx)||Mp}var QS=function(){function e(t,n){var o=this;this.inject=function(i,a){a===void 0&&(a=Mp);var l=o.name+a.hash;i.hasNameForId(o.id,l)||i.insertRules(o.id,l,a(o.rules,l,"@keyframes"))},this.toString=function(){return mr(12,String(o.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Mp),this.name+t.hash},e}(),KS=/([A-Z])/,XS=/([A-Z])/g,JS=/^ms-/,qS=function(e){return"-"+e.toLowerCase()};function Xg(e){return KS.test(e)?e.replace(XS,qS).replace(JS,"-ms-"):e}var Jg=function(e){return e==null||e===!1||e===""};function pr(e,t,n,o){if(Array.isArray(e)){for(var i,a=[],l=0,c=e.length;l<c;l+=1)(i=pr(e[l],t,n,o))!==""&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}if(Jg(e))return"";if(th(e))return"."+e.styledComponentId;if(Eo(e)){if(typeof(d=e)!="function"||d.prototype&&d.prototype.isReactComponent||!t)return e;var u=e(t);return pr(u,t,n,o)}var d;return e instanceof QS?n?(e.inject(n,o),e.getName(o)):e:Dp(e)?function p(m,f){var g,$,x=[];for(var w in m)m.hasOwnProperty(w)&&!Jg(m[w])&&(Array.isArray(m[w])&&m[w].isCss||Eo(m[w])?x.push(Xg(w)+":",m[w],";"):Dp(m[w])?x.push.apply(x,p(m[w],w)):x.push(Xg(w)+": "+(g=w,($=m[w])==null||typeof $=="boolean"||$===""?"":typeof $!="number"||$===0||g in cS||g.startsWith("--")?String($).trim():$+"px")+";"));return f?[f+" {"].concat(x,["}"]):x}(e):e.toString()}var qg=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Zx(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return Eo(e)||Dp(e)?qg(pr(Gg(Is,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:qg(pr(Gg(e,n)))}var e1=function(e,t,n){return n===void 0&&(n=Rn),e.theme!==n.theme&&e.theme||t||n.theme},ZS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,e2=/(^-|-$)/g;function mu(e){return e.replace(ZS,"-").replace(e2,"")}var t1=function(e){return Np(Yx(e)>>>0)};function Ta(e){return typeof e=="string"&&!0}var Rp=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},t2=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function n2(e,t,n){var o=e[n];Rp(t)&&Rp(o)?n1(o,t):e[n]=t}function n1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];for(var i=0,a=n;i<a.length;i++){var l=a[i];if(Rp(l))for(var c in l)t2(c)&&n2(e,l[c],c)}return e}var Gi=r.createContext();Gi.Consumer;function r1(e){var t=b.useContext(Gi),n=b.useMemo(function(){return function(o,i){if(!o)return mr(14);if(Eo(o)){var a=o(i);return a}return Array.isArray(o)||typeof o!="object"?mr(8):i?It({},i,{},o):o}(e.theme,t)},[e.theme,t]);return e.children?r.createElement(Gi.Provider,{value:n},e.children):null}var pu={};function o1(e,t,n){var o=th(e),i=!Ta(e),a=t.attrs,l=a===void 0?Is:a,c=t.componentId,u=c===void 0?function(h,y){var E=typeof h!="string"?"sc":mu(h);pu[E]=(pu[E]||0)+1;var S=E+"-"+t1("5.3.11"+E+pu[E]);return y?y+"-"+S:S}(t.displayName,t.parentComponentId):c,d=t.displayName,p=d===void 0?function(h){return Ta(h)?"styled."+h:"Styled("+Yg(h)+")"}(e):d,m=t.displayName&&t.componentId?mu(t.displayName)+"-"+t.componentId:t.componentId||u,f=o&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,g=t.shouldForwardProp;o&&e.shouldForwardProp&&(g=t.shouldForwardProp?function(h,y,E){return e.shouldForwardProp(h,y,E)&&t.shouldForwardProp(h,y,E)}:e.shouldForwardProp);var $,x=new _S(n,m,o?e.componentStyle:void 0),w=x.isStatic&&l.length===0,v=function(h,y){return function(E,S,z,P){var C=E.attrs,I=E.componentStyle,B=E.defaultProps,le=E.foldedComponentIds,G=E.shouldForwardProp,ee=E.styledComponentId,R=E.target,de=function(j,k,Q){j===void 0&&(j=Rn);var D=It({},k,{theme:j}),ce={};return Q.forEach(function(J){var K,Y,Re,rt=J;for(K in Eo(rt)&&(rt=rt(D)),rt)D[K]=ce[K]=K==="className"?(Y=ce[K],Re=rt[K],Y&&Re?Y+" "+Re:Y||Re):rt[K]}),[D,ce]}(e1(S,b.useContext(Gi),B)||Rn,S,C),re=de[0],se=de[1],F=function(j,k,Q,D){var ce=Jx(),J=qx(),K=k?j.generateAndInjectStyles(Rn,ce,J):j.generateAndInjectStyles(Q,ce,J);return K}(I,P,re),V=z,_=se.$as||S.$as||se.as||S.as||R,O=Ta(_),L=se!==S?It({},S,{},se):S,N={};for(var T in L)T[0]!=="$"&&T!=="as"&&(T==="forwardedAs"?N.as=L[T]:(G?G(T,Wg,_):!O||Wg(T))&&(N[T]=L[T]));return S.style&&se.style!==S.style&&(N.style=It({},S.style,{},se.style)),N.className=Array.prototype.concat(le,ee,F!==ee?F:null,S.className,se.className).filter(Boolean).join(" "),N.ref=V,b.createElement(_,N)}($,h,y,w)};return v.displayName=p,($=r.forwardRef(v)).attrs=f,$.componentStyle=x,$.displayName=p,$.shouldForwardProp=g,$.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Is,$.styledComponentId=m,$.target=o?e.target:e,$.withComponent=function(h){var y=t.componentId,E=function(z,P){if(z==null)return{};var C,I,B={},le=Object.keys(z);for(I=0;I<le.length;I++)C=le[I],P.indexOf(C)>=0||(B[C]=z[C]);return B}(t,["componentId"]),S=y&&y+"-"+(Ta(h)?h:mu(Yg(h)));return o1(h,It({},E,{attrs:f,componentId:S}),n)},Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=o?n1({},e.defaultProps,h):h}}),Object.defineProperty($,"toString",{value:function(){return"."+$.styledComponentId}}),i&&TS($,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),$}var Ip=function(e){return function t(n,o,i){if(i===void 0&&(i=Rn),!jx.isValidElementType(o))return mr(1,String(o));var a=function(){return n(o,i,Zx.apply(void 0,arguments))};return a.withConfig=function(l){return t(n,o,It({},i,{},l))},a.attrs=function(l){return t(n,o,It({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},a}(o1,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ip[e]=Ip(e)});var r2=function(){function e(n,o){this.rules=n,this.componentId=o,this.isStatic=Qx(n),Vs.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,o,i,a){var l=a(pr(this.rules,o,i,a).join(""),""),c=this.componentId+n;i.insertRules(c,c,l)},t.removeStyles=function(n,o){o.clearRules(this.componentId+n)},t.renderStyles=function(n,o,i,a){n>2&&Vs.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,o,i,a)},e}();function o2(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Zx.apply(void 0,[e].concat(n)),a="sc-global-"+t1(JSON.stringify(i)),l=new r2(i,a);function c(d){var p=Jx(),m=qx(),f=b.useContext(Gi),g=b.useRef(p.allocateGSInstance(a)).current;return p.server&&u(g,d,p,f,m),b.useLayoutEffect(function(){if(!p.server)return u(g,d,p,f,m),function(){return l.removeStyles(g,p)}},[g,d,p,f,m]),null}function u(d,p,m,f,g){if(l.isStatic)l.renderStyles(d,zS,m,g);else{var $=It({},p,{theme:e1(p,f,c.defaultProps)});l.renderStyles(d,$,m,g)}}return r.memo(c)}const s=Ip,i1=o2`
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
`,a1={colors:{primary:"#FFD700",primaryDark:"#E6C200",secondary:"#4A90E2",secondaryDark:"#3A7BC8",trustworthyNavy:"#1E3A8A",trustworthyNavyLight:"#2D4BA0",background:"#F9FAFB",darkText:"#1F2937",lightText:"#6B7280",lightGray:"#F3F4F6",mediumGray:"#E5E7EB",darkGray:"#4B5563",success:"#10B981",successDark:"#059669",warning:"#F59E0B",error:"#EF4444",white:"#FFFFFF",black:"#000000"},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem"},fontWeights:{light:300,normal:400,medium:500,semiBold:600,bold:700,extraBold:800},space:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem"},radii:{sm:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"},transitions:{default:"all 0.3s ease",fast:"all 0.15s ease",slow:"all 0.5s ease"},breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"}},i2=s.button`
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
`,W=({children:e,variant:t="primary",size:n="md",icon:o=null,iconPosition:i="left",...a})=>r.createElement(i2,{variant:t,size:n,iconPosition:i,...a},o&&i==="left"&&o,e,o&&i==="right"&&o),a2=()=>{const[e,t]=b.useState(!1),[n,o]=b.useState(!1),i=yr();b.useEffect(()=>{const c=()=>{window.scrollY>50?o(!0):o(!1)};return window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}},[]),b.useEffect(()=>{t(!1)},[i]);const a=()=>{t(!e)},l=()=>{t(!1)};return r.createElement(l2,{scrolled:n},r.createElement(s2,null,r.createElement(c2,null,r.createElement(u2,null,r.createElement(ne,{to:"/"},r.createElement(d2,null,"TrueFans CONNECT™"))),r.createElement(m2,{onClick:a,"aria-expanded":e,"aria-label":e?"Close menu":"Open menu"},r.createElement(p2,{open:e})),r.createElement(f2,{open:e},r.createElement(Er,{active:i.pathname==="/"},r.createElement(wr,{to:"/",onClick:l},"Home")),r.createElement(Er,{active:i.pathname==="/about"},r.createElement(wr,{to:"/about",onClick:l},"About Us")),r.createElement(Er,{active:i.pathname==="/artist-dashboard"},r.createElement(wr,{to:"/artist-dashboard",onClick:l},"Artists Directory")),r.createElement(Er,{active:i.pathname==="/venue-portal"},r.createElement(wr,{to:"/venue-portal",onClick:l},"Venue Portal")),r.createElement(Er,{active:i.pathname==="/donation-system"},r.createElement(wr,{to:"/donation-system",onClick:l},"Donation System")),r.createElement(Er,{active:i.pathname==="/affiliate-program"},r.createElement(wr,{to:"/affiliate-program",onClick:l},"Affiliate Program")),r.createElement(v2,null,r.createElement($2,{as:ne,to:"/login",onClick:l},"Log In"),r.createElement(x2,{as:ne,to:"/artist-signup",onClick:l},"Sign Up"))),r.createElement(h2,null,r.createElement(g2,{as:ne,to:"/login"},"Log In"),r.createElement(y2,{as:ne,to:"/artist-signup"},"Sign Up")))))},l2=s.header`
  background-color: ${({theme:e,scrolled:t})=>t?e.colors.trustworthyNavy:"rgba(26, 43, 76, 0.95)"};
  padding: ${({theme:e,scrolled:t})=>t?`${e.space.sm} 0`:`${e.space.md} 0`};
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: ${({theme:e,scrolled:t})=>t?e.shadows.md:"none"};
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
`,s2=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,c2=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,u2=s.div`
  flex-shrink: 0;
`,d2=s.h1`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.primary};
  margin: 0;
`,m2=s.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({theme:e})=>e.space.sm};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: block;
  }
`,p2=s.div`
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
`,f2=s.ul`
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
`,Er=s.li`
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
`,wr=s(ne)`
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
`,h2=s.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,g2=s(W)`
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
`,y2=s(W)`
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>`${e.space.sm} ${e.space.lg}`};
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
    text-decoration: none;
  }
`,v2=s.div`
  display: none;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.space.md};
    margin-top: ${({theme:e})=>e.space.xl};
  }
`,$2=s(W)`
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
`,x2=s(W)`
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
`,E2=()=>{const e=new Date().getFullYear(),t=na(),n=o=>{t(o),window.scrollTo(0,0)};return r.createElement(w2,null,r.createElement(b2,null,r.createElement(k2,null,r.createElement(S2,null,r.createElement(T2,null,"TrueFans CONNECT™"),r.createElement(C2,null,"Connecting artists with their supporters"),r.createElement(z2,null,r.createElement(hu,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter"},r.createElement(fu,null,r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}))),r.createElement("span",null,"Twitter")),r.createElement(hu,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram"},r.createElement(fu,null,r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),r.createElement("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),r.createElement("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}))),r.createElement("span",null,"Instagram")),r.createElement(hu,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook"},r.createElement(fu,null,r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}))),r.createElement("span",null,"Facebook")))),r.createElement(P2,null,r.createElement(gu,null,r.createElement(yu,null,"Platform"),r.createElement(ut,{onClick:()=>n("/")},"Home"),r.createElement(ut,{onClick:()=>n("/about")},"About Us"),r.createElement(ut,{onClick:()=>n("/artist-signup")},"Artist Signup"),r.createElement(ut,{onClick:()=>n("/venue-signup")},"Venue Signup"),r.createElement(ut,{onClick:()=>n("/donation-system")},"Donation System")),r.createElement(gu,null,r.createElement(yu,null,"Resources"),r.createElement(ut,{onClick:()=>n("/help-center")},"Help Center"),r.createElement(ut,{onClick:()=>n("/blog")},"Blog"),r.createElement(ut,{onClick:()=>n("/api-docs")},"API Documentation"),r.createElement(ut,{onClick:()=>n("/success-stories")},"Success Stories")),r.createElement(gu,null,r.createElement(yu,null,"Company"),r.createElement(ut,{onClick:()=>n("/about")},"About Us"),r.createElement(ut,{onClick:()=>n("/careers")},"Careers"),r.createElement(ut,{onClick:()=>n("/press")},"Press"),r.createElement(ut,{onClick:()=>n("/contact")},"Contact")))),r.createElement(A2,null,r.createElement(F2,null,"© ",e," TrueFans CONNECT™. All rights reserved."),r.createElement(L2,null,r.createElement(vu,{onClick:()=>n("/terms")},"Terms of Service"),r.createElement(vu,{onClick:()=>n("/privacy")},"Privacy Policy"),r.createElement(vu,{onClick:()=>n("/cookies")},"Cookie Policy")))))},w2=s.footer`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  color: white;
  padding: ${({theme:e})=>e.space.xl} 0;
`,b2=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,k2=s.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({theme:e})=>e.space.xl};
  margin-bottom: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,S2=s.div``,T2=s.h2`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,C2=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  opacity: 0.8;
  margin-bottom: ${({theme:e})=>e.space.lg};
`,z2=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.space.md};
`,fu=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({theme:e})=>e.space.xs};
`,hu=s.a`
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
`,P2=s.div`
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
`,gu=s.div`
  display: flex;
  flex-direction: column;
`,yu=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  margin-bottom: ${({theme:e})=>e.space.md};
`,ut=s.a`
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
`,A2=s.div`
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
`,F2=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  opacity: 0.6;
`,L2=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.space.md};
`,vu=s.a`
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
`,l1=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ac=b.createContext({}),rh=b.createContext(null),Fc=typeof document<"u",D2=Fc?b.useLayoutEffect:b.useEffect,s1=b.createContext({strict:!1}),oh=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),N2="framerAppearId",c1="data-"+oh(N2);function M2(e,t,n,o){const{visualElement:i}=b.useContext(Ac),a=b.useContext(s1),l=b.useContext(rh),c=b.useContext(l1).reducedMotion,u=b.useRef();o=o||a.renderer,!u.current&&o&&(u.current=o(e,{visualState:t,parent:i,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:c}));const d=u.current;b.useInsertionEffect(()=>{d&&d.update(n,l)});const p=b.useRef(!!(n[c1]&&!window.HandoffComplete));return D2(()=>{d&&(d.render(),p.current&&d.animationState&&d.animationState.animateChanges())}),b.useEffect(()=>{d&&(d.updateFeatures(),!p.current&&d.animationState&&d.animationState.animateChanges(),p.current&&(p.current=!1,window.HandoffComplete=!0))}),d}function ro(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function R2(e,t,n){return b.useCallback(o=>{o&&e.mount&&e.mount(o),t&&(o?t.mount(o):t.unmount()),n&&(typeof n=="function"?n(o):ro(n)&&(n.current=o))},[t])}function Yi(e){return typeof e=="string"||Array.isArray(e)}function Lc(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const ih=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ah=["initial",...ih];function Dc(e){return Lc(e.animate)||ah.some(t=>Yi(e[t]))}function u1(e){return!!(Dc(e)||e.variants)}function I2(e,t){if(Dc(e)){const{initial:n,animate:o}=e;return{initial:n===!1||Yi(n)?n:void 0,animate:Yi(o)?o:void 0}}return e.inherit!==!1?t:{}}function B2(e){const{initial:t,animate:n}=I2(e,b.useContext(Ac));return b.useMemo(()=>({initial:t,animate:n}),[Zg(t),Zg(n)])}function Zg(e){return Array.isArray(e)?e.join(" "):e}const ey={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Qi={};for(const e in ey)Qi[e]={isEnabled:t=>ey[e].some(n=>!!t[n])};function V2(e){for(const t in e)Qi[t]={...Qi[t],...e[t]}}const d1=b.createContext({}),m1=b.createContext({}),O2=Symbol.for("motionComponentSymbol");function j2({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:o,Component:i}){e&&V2(e);function a(c,u){let d;const p={...b.useContext(l1),...c,layoutId:W2(c)},{isStatic:m}=p,f=B2(c),g=o(c,m);if(!m&&Fc){f.visualElement=M2(i,g,p,t);const $=b.useContext(m1),x=b.useContext(s1).strict;f.visualElement&&(d=f.visualElement.loadFeatures(p,x,e,$))}return b.createElement(Ac.Provider,{value:f},d&&f.visualElement?b.createElement(d,{visualElement:f.visualElement,...p}):null,n(i,c,R2(g,f.visualElement,u),g,m,f.visualElement))}const l=b.forwardRef(a);return l[O2]=i,l}function W2({layoutId:e}){const t=b.useContext(d1).id;return t&&e!==void 0?t+"-"+e:e}function _2(e){function t(o,i={}){return j2(e(o,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(o,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const U2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function lh(e){return typeof e!="string"||e.includes("-")?!1:!!(U2.indexOf(e)>-1||/[A-Z]/.test(e))}const Os={};function H2(e){Object.assign(Os,e)}const ra=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],vr=new Set(ra);function p1(e,{layout:t,layoutId:n}){return vr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Os[e]||e==="opacity")}const ct=e=>!!(e&&e.getVelocity),G2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Y2=ra.length;function Q2(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},o,i){let a="";for(let l=0;l<Y2;l++){const c=ra[l];if(e[c]!==void 0){const u=G2[c]||c;a+=`${u}(${e[c]}) `}}return t&&!e.z&&(a+="translateZ(0)"),a=a.trim(),i?a=i(e,o?"":a):n&&o&&(a="none"),a}const f1=e=>t=>typeof t=="string"&&t.startsWith(e),h1=f1("--"),Bp=f1("var(--"),K2=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,X2=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Wn=(e,t,n)=>Math.min(Math.max(n,e),t),$r={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},bi={...$r,transform:e=>Wn(0,1,e)},Ca={...$r,default:1},ki=e=>Math.round(e*1e5)/1e5,Nc=/(-)?([\d]*\.?[\d])+/g,g1=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,J2=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function oa(e){return typeof e=="string"}const ia=e=>({test:t=>oa(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),vn=ia("deg"),Qt=ia("%"),U=ia("px"),q2=ia("vh"),Z2=ia("vw"),ty={...Qt,parse:e=>Qt.parse(e)/100,transform:e=>Qt.transform(e*100)},ny={...$r,transform:Math.round},y1={borderWidth:U,borderTopWidth:U,borderRightWidth:U,borderBottomWidth:U,borderLeftWidth:U,borderRadius:U,radius:U,borderTopLeftRadius:U,borderTopRightRadius:U,borderBottomRightRadius:U,borderBottomLeftRadius:U,width:U,maxWidth:U,height:U,maxHeight:U,size:U,top:U,right:U,bottom:U,left:U,padding:U,paddingTop:U,paddingRight:U,paddingBottom:U,paddingLeft:U,margin:U,marginTop:U,marginRight:U,marginBottom:U,marginLeft:U,rotate:vn,rotateX:vn,rotateY:vn,rotateZ:vn,scale:Ca,scaleX:Ca,scaleY:Ca,scaleZ:Ca,skew:vn,skewX:vn,skewY:vn,distance:U,translateX:U,translateY:U,translateZ:U,x:U,y:U,z:U,perspective:U,transformPerspective:U,opacity:bi,originX:ty,originY:ty,originZ:U,zIndex:ny,fillOpacity:bi,strokeOpacity:bi,numOctaves:ny};function sh(e,t,n,o){const{style:i,vars:a,transform:l,transformOrigin:c}=e;let u=!1,d=!1,p=!0;for(const m in t){const f=t[m];if(h1(m)){a[m]=f;continue}const g=y1[m],$=X2(f,g);if(vr.has(m)){if(u=!0,l[m]=$,!p)continue;f!==(g.default||0)&&(p=!1)}else m.startsWith("origin")?(d=!0,c[m]=$):i[m]=$}if(t.transform||(u||o?i.transform=Q2(e.transform,n,p,o):i.transform&&(i.transform="none")),d){const{originX:m="50%",originY:f="50%",originZ:g=0}=c;i.transformOrigin=`${m} ${f} ${g}`}}const ch=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function v1(e,t,n){for(const o in t)!ct(t[o])&&!p1(o,n)&&(e[o]=t[o])}function eT({transformTemplate:e},t,n){return b.useMemo(()=>{const o=ch();return sh(o,t,{enableHardwareAcceleration:!n},e),Object.assign({},o.vars,o.style)},[t])}function tT(e,t,n){const o=e.style||{},i={};return v1(i,o,e),Object.assign(i,eT(e,t,n)),e.transformValues?e.transformValues(i):i}function nT(e,t,n){const o={},i=tT(e,t,n);return e.drag&&e.dragListener!==!1&&(o.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(o.tabIndex=0),o.style=i,o}const rT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function js(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||rT.has(e)}let $1=e=>!js(e);function oT(e){e&&($1=t=>t.startsWith("on")?!js(t):e(t))}try{oT(require("@emotion/is-prop-valid").default)}catch{}function iT(e,t,n){const o={};for(const i in e)i==="values"&&typeof e.values=="object"||($1(i)||n===!0&&js(i)||!t&&!js(i)||e.draggable&&i.startsWith("onDrag"))&&(o[i]=e[i]);return o}function ry(e,t,n){return typeof e=="string"?e:U.transform(t+n*e)}function aT(e,t,n){const o=ry(t,e.x,e.width),i=ry(n,e.y,e.height);return`${o} ${i}`}const lT={offset:"stroke-dashoffset",array:"stroke-dasharray"},sT={offset:"strokeDashoffset",array:"strokeDasharray"};function cT(e,t,n=1,o=0,i=!0){e.pathLength=1;const a=i?lT:sT;e[a.offset]=U.transform(-o);const l=U.transform(t),c=U.transform(n);e[a.array]=`${l} ${c}`}function uh(e,{attrX:t,attrY:n,attrScale:o,originX:i,originY:a,pathLength:l,pathSpacing:c=1,pathOffset:u=0,...d},p,m,f){if(sh(e,d,p,f),m){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:$,dimensions:x}=e;g.transform&&(x&&($.transform=g.transform),delete g.transform),x&&(i!==void 0||a!==void 0||$.transform)&&($.transformOrigin=aT(x,i!==void 0?i:.5,a!==void 0?a:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),o!==void 0&&(g.scale=o),l!==void 0&&cT(g,l,c,u,!1)}const x1=()=>({...ch(),attrs:{}}),dh=e=>typeof e=="string"&&e.toLowerCase()==="svg";function uT(e,t,n,o){const i=b.useMemo(()=>{const a=x1();return uh(a,t,{enableHardwareAcceleration:!1},dh(o),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};v1(a,e.style,e),i.style={...a,...i.style}}return i}function dT(e=!1){return(n,o,i,{latestValues:a},l)=>{const u=(lh(n)?uT:nT)(o,a,l,n),p={...iT(o,typeof n=="string",e),...u,ref:i},{children:m}=o,f=b.useMemo(()=>ct(m)?m.get():m,[m]);return b.createElement(n,{...p,children:f})}}function E1(e,{style:t,vars:n},o,i){Object.assign(e.style,t,i&&i.getProjectionStyles(o));for(const a in n)e.style.setProperty(a,n[a])}const w1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function b1(e,t,n,o){E1(e,t,void 0,o);for(const i in t.attrs)e.setAttribute(w1.has(i)?i:oh(i),t.attrs[i])}function mh(e,t){const{style:n}=e,o={};for(const i in n)(ct(n[i])||t.style&&ct(t.style[i])||p1(i,e))&&(o[i]=n[i]);return o}function k1(e,t){const n=mh(e,t);for(const o in e)if(ct(e[o])||ct(t[o])){const i=ra.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;n[i]=e[o]}return n}function ph(e,t,n,o={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,o,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,o,i)),t}function mT(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const Ws=e=>Array.isArray(e),pT=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),fT=e=>Ws(e)?e[e.length-1]||0:e;function cs(e){const t=ct(e)?e.get():e;return pT(t)?t.toValue():t}function hT({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},o,i,a){const l={latestValues:gT(o,i,a,e),renderState:t()};return n&&(l.mount=c=>n(o,c,l)),l}const S1=e=>(t,n)=>{const o=b.useContext(Ac),i=b.useContext(rh),a=()=>hT(e,t,o,i);return n?a():mT(a)};function gT(e,t,n,o){const i={},a=o(e,{});for(const f in a)i[f]=cs(a[f]);let{initial:l,animate:c}=e;const u=Dc(e),d=u1(e);t&&d&&!u&&e.inherit!==!1&&(l===void 0&&(l=t.initial),c===void 0&&(c=t.animate));let p=n?n.initial===!1:!1;p=p||l===!1;const m=p?c:l;return m&&typeof m!="boolean"&&!Lc(m)&&(Array.isArray(m)?m:[m]).forEach(g=>{const $=ph(e,g);if(!$)return;const{transitionEnd:x,transition:w,...v}=$;for(const h in v){let y=v[h];if(Array.isArray(y)){const E=p?y.length-1:0;y=y[E]}y!==null&&(i[h]=y)}for(const h in x)i[h]=x[h]}),i}const we=e=>e;class oy{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function yT(e){let t=new oy,n=new oy,o=0,i=!1,a=!1;const l=new WeakSet,c={schedule:(u,d=!1,p=!1)=>{const m=p&&i,f=m?t:n;return d&&l.add(u),f.add(u)&&m&&i&&(o=t.order.length),u},cancel:u=>{n.remove(u),l.delete(u)},process:u=>{if(i){a=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),o=t.order.length,o)for(let d=0;d<o;d++){const p=t.order[d];p(u),l.has(p)&&(c.schedule(p),e())}i=!1,a&&(a=!1,c.process(u))}};return c}const za=["prepare","read","update","preRender","render","postRender"],vT=40;function $T(e,t){let n=!1,o=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=za.reduce((m,f)=>(m[f]=yT(()=>n=!0),m),{}),l=m=>a[m].process(i),c=()=>{const m=performance.now();n=!1,i.delta=o?1e3/60:Math.max(Math.min(m-i.timestamp,vT),1),i.timestamp=m,i.isProcessing=!0,za.forEach(l),i.isProcessing=!1,n&&t&&(o=!1,e(c))},u=()=>{n=!0,o=!0,i.isProcessing||e(c)};return{schedule:za.reduce((m,f)=>{const g=a[f];return m[f]=($,x=!1,w=!1)=>(n||u(),g.schedule($,x,w)),m},{}),cancel:m=>za.forEach(f=>a[f].cancel(m)),state:i,steps:a}}const{schedule:fe,cancel:mn,state:Ye,steps:$u}=$T(typeof requestAnimationFrame<"u"?requestAnimationFrame:we,!0),xT={useVisualState:S1({scrapeMotionValuesFromProps:k1,createRenderState:x1,onMount:(e,t,{renderState:n,latestValues:o})=>{fe.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),fe.render(()=>{uh(n,o,{enableHardwareAcceleration:!1},dh(t.tagName),e.transformTemplate),b1(t,n)})}})},ET={useVisualState:S1({scrapeMotionValuesFromProps:mh,createRenderState:ch})};function wT(e,{forwardMotionProps:t=!1},n,o){return{...lh(e)?xT:ET,preloadedFeatures:n,useRender:dT(t),createVisualElement:o,Component:e}}function rn(e,t,n,o={passive:!0}){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n)}const T1=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Mc(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const bT=e=>t=>T1(t)&&e(t,Mc(t));function an(e,t,n,o){return rn(e,t,bT(n),o)}const kT=(e,t)=>n=>t(e(n)),In=(...e)=>e.reduce(kT);function C1(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const iy=C1("dragHorizontal"),ay=C1("dragVertical");function z1(e){let t=!1;if(e==="y")t=ay();else if(e==="x")t=iy();else{const n=iy(),o=ay();n&&o?t=()=>{n(),o()}:(n&&n(),o&&o())}return t}function P1(){const e=z1(!0);return e?(e(),!1):!0}class Qn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function ly(e,t){const n="pointer"+(t?"enter":"leave"),o="onHover"+(t?"Start":"End"),i=(a,l)=>{if(a.pointerType==="touch"||P1())return;const c=e.getProps();e.animationState&&c.whileHover&&e.animationState.setActive("whileHover",t),c[o]&&fe.update(()=>c[o](a,l))};return an(e.current,n,i,{passive:!e.getProps()[o]})}class ST extends Qn{mount(){this.unmount=In(ly(this.node,!0),ly(this.node,!1))}unmount(){}}class TT extends Qn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=In(rn(this.node.current,"focus",()=>this.onFocus()),rn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const A1=(e,t)=>t?e===t?!0:A1(e,t.parentElement):!1;function xu(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Mc(n))}class CT extends Qn{constructor(){super(...arguments),this.removeStartListeners=we,this.removeEndListeners=we,this.removeAccessibleListeners=we,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const o=this.node.getProps(),a=an(window,"pointerup",(c,u)=>{if(!this.checkPressEnd())return;const{onTap:d,onTapCancel:p,globalTapTarget:m}=this.node.getProps();fe.update(()=>{!m&&!A1(this.node.current,c.target)?p&&p(c,u):d&&d(c,u)})},{passive:!(o.onTap||o.onPointerUp)}),l=an(window,"pointercancel",(c,u)=>this.cancelPress(c,u),{passive:!(o.onTapCancel||o.onPointerCancel)});this.removeEndListeners=In(a,l),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=a=>{if(a.key!=="Enter"||this.isPressing)return;const l=c=>{c.key!=="Enter"||!this.checkPressEnd()||xu("up",(u,d)=>{const{onTap:p}=this.node.getProps();p&&fe.update(()=>p(u,d))})};this.removeEndListeners(),this.removeEndListeners=rn(this.node.current,"keyup",l),xu("down",(c,u)=>{this.startPress(c,u)})},n=rn(this.node.current,"keydown",t),o=()=>{this.isPressing&&xu("cancel",(a,l)=>this.cancelPress(a,l))},i=rn(this.node.current,"blur",o);this.removeAccessibleListeners=In(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:o,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),o&&fe.update(()=>o(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!P1()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:o}=this.node.getProps();o&&fe.update(()=>o(t,n))}mount(){const t=this.node.getProps(),n=an(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),o=rn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=In(n,o)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Vp=new WeakMap,Eu=new WeakMap,zT=e=>{const t=Vp.get(e.target);t&&t(e)},PT=e=>{e.forEach(zT)};function AT({root:e,...t}){const n=e||document;Eu.has(n)||Eu.set(n,{});const o=Eu.get(n),i=JSON.stringify(t);return o[i]||(o[i]=new IntersectionObserver(PT,{root:e,...t})),o[i]}function FT(e,t,n){const o=AT(t);return Vp.set(e,n),o.observe(e),()=>{Vp.delete(e),o.unobserve(e)}}const LT={some:0,all:1};class DT extends Qn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:o,amount:i="some",once:a}=t,l={root:n?n.current:void 0,rootMargin:o,threshold:typeof i=="number"?i:LT[i]},c=u=>{const{isIntersecting:d}=u;if(this.isInView===d||(this.isInView=d,a&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:p,onViewportLeave:m}=this.node.getProps(),f=d?p:m;f&&f(u)};return FT(this.node.current,l,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(NT(t,n))&&this.startObserver()}unmount(){}}function NT({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const MT={inView:{Feature:DT},tap:{Feature:CT},focus:{Feature:TT},hover:{Feature:ST}};function F1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let o=0;o<n;o++)if(t[o]!==e[o])return!1;return!0}function RT(e){const t={};return e.values.forEach((n,o)=>t[o]=n.get()),t}function IT(e){const t={};return e.values.forEach((n,o)=>t[o]=n.getVelocity()),t}function Rc(e,t,n){const o=e.getProps();return ph(o,t,n!==void 0?n:o.custom,RT(e),IT(e))}let BT=we,fh=we;const Bn=e=>e*1e3,ln=e=>e/1e3,VT={current:!1},L1=e=>Array.isArray(e)&&typeof e[0]=="number";function D1(e){return!!(!e||typeof e=="string"&&N1[e]||L1(e)||Array.isArray(e)&&e.every(D1))}const mi=([e,t,n,o])=>`cubic-bezier(${e}, ${t}, ${n}, ${o})`,N1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:mi([0,.65,.55,1]),circOut:mi([.55,0,1,.45]),backIn:mi([.31,.01,.66,-.59]),backOut:mi([.33,1.53,.69,.99])};function M1(e){if(e)return L1(e)?mi(e):Array.isArray(e)?e.map(M1):N1[e]}function OT(e,t,n,{delay:o=0,duration:i,repeat:a=0,repeatType:l="loop",ease:c,times:u}={}){const d={[t]:n};u&&(d.offset=u);const p=M1(c);return Array.isArray(p)&&(d.easing=p),e.animate(d,{delay:o,duration:i,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:a+1,direction:l==="reverse"?"alternate":"normal"})}function jT(e,{repeat:t,repeatType:n="loop"}){const o=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[o]}const R1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,WT=1e-7,_T=12;function UT(e,t,n,o,i){let a,l,c=0;do l=t+(n-t)/2,a=R1(l,o,i)-e,a>0?n=l:t=l;while(Math.abs(a)>WT&&++c<_T);return l}function aa(e,t,n,o){if(e===t&&n===o)return we;const i=a=>UT(a,0,1,e,n);return a=>a===0||a===1?a:R1(i(a),t,o)}const HT=aa(.42,0,1,1),GT=aa(0,0,.58,1),I1=aa(.42,0,.58,1),YT=e=>Array.isArray(e)&&typeof e[0]!="number",B1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,V1=e=>t=>1-e(1-t),hh=e=>1-Math.sin(Math.acos(e)),O1=V1(hh),QT=B1(hh),j1=aa(.33,1.53,.69,.99),gh=V1(j1),KT=B1(gh),XT=e=>(e*=2)<1?.5*gh(e):.5*(2-Math.pow(2,-10*(e-1))),JT={linear:we,easeIn:HT,easeInOut:I1,easeOut:GT,circIn:hh,circInOut:QT,circOut:O1,backIn:gh,backInOut:KT,backOut:j1,anticipate:XT},sy=e=>{if(Array.isArray(e)){fh(e.length===4);const[t,n,o,i]=e;return aa(t,n,o,i)}else if(typeof e=="string")return JT[e];return e},yh=(e,t)=>n=>!!(oa(n)&&J2.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),W1=(e,t,n)=>o=>{if(!oa(o))return o;const[i,a,l,c]=o.match(Nc);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(l),alpha:c!==void 0?parseFloat(c):1}},qT=e=>Wn(0,255,e),wu={...$r,transform:e=>Math.round(qT(e))},or={test:yh("rgb","red"),parse:W1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:o=1})=>"rgba("+wu.transform(e)+", "+wu.transform(t)+", "+wu.transform(n)+", "+ki(bi.transform(o))+")"};function ZT(e){let t="",n="",o="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),o=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),o=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,o+=o,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:i?parseInt(i,16)/255:1}}const Op={test:yh("#"),parse:ZT,transform:or.transform},oo={test:yh("hsl","hue"),parse:W1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(e)+", "+Qt.transform(ki(t))+", "+Qt.transform(ki(n))+", "+ki(bi.transform(o))+")"},qe={test:e=>or.test(e)||Op.test(e)||oo.test(e),parse:e=>or.test(e)?or.parse(e):oo.test(e)?oo.parse(e):Op.parse(e),transform:e=>oa(e)?e:e.hasOwnProperty("red")?or.transform(e):oo.transform(e)},ve=(e,t,n)=>-n*e+n*t+e;function bu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function eC({hue:e,saturation:t,lightness:n,alpha:o}){e/=360,t/=100,n/=100;let i=0,a=0,l=0;if(!t)i=a=l=n;else{const c=n<.5?n*(1+t):n+t-n*t,u=2*n-c;i=bu(u,c,e+1/3),a=bu(u,c,e),l=bu(u,c,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(l*255),alpha:o}}const ku=(e,t,n)=>{const o=e*e;return Math.sqrt(Math.max(0,n*(t*t-o)+o))},tC=[Op,or,oo],nC=e=>tC.find(t=>t.test(e));function cy(e){const t=nC(e);let n=t.parse(e);return t===oo&&(n=eC(n)),n}const _1=(e,t)=>{const n=cy(e),o=cy(t),i={...n};return a=>(i.red=ku(n.red,o.red,a),i.green=ku(n.green,o.green,a),i.blue=ku(n.blue,o.blue,a),i.alpha=ve(n.alpha,o.alpha,a),or.transform(i))};function rC(e){var t,n;return isNaN(e)&&oa(e)&&(((t=e.match(Nc))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(g1))===null||n===void 0?void 0:n.length)||0)>0}const U1={regex:K2,countKey:"Vars",token:"${v}",parse:we},H1={regex:g1,countKey:"Colors",token:"${c}",parse:qe.parse},G1={regex:Nc,countKey:"Numbers",token:"${n}",parse:$r.parse};function Su(e,{regex:t,countKey:n,token:o,parse:i}){const a=e.tokenised.match(t);a&&(e["num"+n]=a.length,e.tokenised=e.tokenised.replace(t,o),e.values.push(...a.map(i)))}function _s(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Su(n,U1),Su(n,H1),Su(n,G1),n}function Y1(e){return _s(e).values}function Q1(e){const{values:t,numColors:n,numVars:o,tokenised:i}=_s(e),a=t.length;return l=>{let c=i;for(let u=0;u<a;u++)u<o?c=c.replace(U1.token,l[u]):u<o+n?c=c.replace(H1.token,qe.transform(l[u])):c=c.replace(G1.token,ki(l[u]));return c}}const oC=e=>typeof e=="number"?0:e;function iC(e){const t=Y1(e);return Q1(e)(t.map(oC))}const _n={test:rC,parse:Y1,createTransformer:Q1,getAnimatableNone:iC},K1=(e,t)=>n=>`${n>0?t:e}`;function X1(e,t){return typeof e=="number"?n=>ve(e,t,n):qe.test(e)?_1(e,t):e.startsWith("var(")?K1(e,t):q1(e,t)}const J1=(e,t)=>{const n=[...e],o=n.length,i=e.map((a,l)=>X1(a,t[l]));return a=>{for(let l=0;l<o;l++)n[l]=i[l](a);return n}},aC=(e,t)=>{const n={...e,...t},o={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(o[i]=X1(e[i],t[i]));return i=>{for(const a in o)n[a]=o[a](i);return n}},q1=(e,t)=>{const n=_n.createTransformer(t),o=_s(e),i=_s(t);return o.numVars===i.numVars&&o.numColors===i.numColors&&o.numNumbers>=i.numNumbers?In(J1(o.values,i.values),n):K1(e,t)},Ki=(e,t,n)=>{const o=t-e;return o===0?1:(n-e)/o},uy=(e,t)=>n=>ve(e,t,n);function lC(e){return typeof e=="number"?uy:typeof e=="string"?qe.test(e)?_1:q1:Array.isArray(e)?J1:typeof e=="object"?aC:uy}function sC(e,t,n){const o=[],i=n||lC(e[0]),a=e.length-1;for(let l=0;l<a;l++){let c=i(e[l],e[l+1]);if(t){const u=Array.isArray(t)?t[l]||we:t;c=In(u,c)}o.push(c)}return o}function Z1(e,t,{clamp:n=!0,ease:o,mixer:i}={}){const a=e.length;if(fh(a===t.length),a===1)return()=>t[0];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=sC(t,o,i),c=l.length,u=d=>{let p=0;if(c>1)for(;p<e.length-2&&!(d<e[p+1]);p++);const m=Ki(e[p],e[p+1],d);return l[p](m)};return n?d=>u(Wn(e[0],e[a-1],d)):u}function cC(e,t){const n=e[e.length-1];for(let o=1;o<=t;o++){const i=Ki(0,t,o);e.push(ve(n,1,i))}}function uC(e){const t=[0];return cC(t,e.length-1),t}function dC(e,t){return e.map(n=>n*t)}function mC(e,t){return e.map(()=>t||I1).splice(0,e.length-1)}function Us({duration:e=300,keyframes:t,times:n,ease:o="easeInOut"}){const i=YT(o)?o.map(sy):sy(o),a={done:!1,value:t[0]},l=dC(n&&n.length===t.length?n:uC(t),e),c=Z1(l,t,{ease:Array.isArray(i)?i:mC(t,i)});return{calculatedDuration:e,next:u=>(a.value=c(u),a.done=u>=e,a)}}function eE(e,t){return t?e*(1e3/t):0}const pC=5;function tE(e,t,n){const o=Math.max(t-pC,0);return eE(n-e(o),t-o)}const Tu=.001,fC=.01,dy=10,hC=.05,gC=1;function yC({duration:e=800,bounce:t=.25,velocity:n=0,mass:o=1}){let i,a;BT(e<=Bn(dy));let l=1-t;l=Wn(hC,gC,l),e=Wn(fC,dy,ln(e)),l<1?(i=d=>{const p=d*l,m=p*e,f=p-n,g=jp(d,l),$=Math.exp(-m);return Tu-f/g*$},a=d=>{const m=d*l*e,f=m*n+n,g=Math.pow(l,2)*Math.pow(d,2)*e,$=Math.exp(-m),x=jp(Math.pow(d,2),l);return(-i(d)+Tu>0?-1:1)*((f-g)*$)/x}):(i=d=>{const p=Math.exp(-d*e),m=(d-n)*e+1;return-Tu+p*m},a=d=>{const p=Math.exp(-d*e),m=(n-d)*(e*e);return p*m});const c=5/e,u=$C(i,a,c);if(e=Bn(e),isNaN(u))return{stiffness:100,damping:10,duration:e};{const d=Math.pow(u,2)*o;return{stiffness:d,damping:l*2*Math.sqrt(o*d),duration:e}}}const vC=12;function $C(e,t,n){let o=n;for(let i=1;i<vC;i++)o=o-e(o)/t(o);return o}function jp(e,t){return e*Math.sqrt(1-t*t)}const xC=["duration","bounce"],EC=["stiffness","damping","mass"];function my(e,t){return t.some(n=>e[n]!==void 0)}function wC(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!my(e,EC)&&my(e,xC)){const n=yC(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function nE({keyframes:e,restDelta:t,restSpeed:n,...o}){const i=e[0],a=e[e.length-1],l={done:!1,value:i},{stiffness:c,damping:u,mass:d,duration:p,velocity:m,isResolvedFromDuration:f}=wC({...o,velocity:-ln(o.velocity||0)}),g=m||0,$=u/(2*Math.sqrt(c*d)),x=a-i,w=ln(Math.sqrt(c/d)),v=Math.abs(x)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let h;if($<1){const y=jp(w,$);h=E=>{const S=Math.exp(-$*w*E);return a-S*((g+$*w*x)/y*Math.sin(y*E)+x*Math.cos(y*E))}}else if($===1)h=y=>a-Math.exp(-w*y)*(x+(g+w*x)*y);else{const y=w*Math.sqrt($*$-1);h=E=>{const S=Math.exp(-$*w*E),z=Math.min(y*E,300);return a-S*((g+$*w*x)*Math.sinh(z)+y*x*Math.cosh(z))/y}}return{calculatedDuration:f&&p||null,next:y=>{const E=h(y);if(f)l.done=y>=p;else{let S=g;y!==0&&($<1?S=tE(h,y,E):S=0);const z=Math.abs(S)<=n,P=Math.abs(a-E)<=t;l.done=z&&P}return l.value=l.done?a:E,l}}}function py({keyframes:e,velocity:t=0,power:n=.8,timeConstant:o=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:l,min:c,max:u,restDelta:d=.5,restSpeed:p}){const m=e[0],f={done:!1,value:m},g=C=>c!==void 0&&C<c||u!==void 0&&C>u,$=C=>c===void 0?u:u===void 0||Math.abs(c-C)<Math.abs(u-C)?c:u;let x=n*t;const w=m+x,v=l===void 0?w:l(w);v!==w&&(x=v-m);const h=C=>-x*Math.exp(-C/o),y=C=>v+h(C),E=C=>{const I=h(C),B=y(C);f.done=Math.abs(I)<=d,f.value=f.done?v:B};let S,z;const P=C=>{g(f.value)&&(S=C,z=nE({keyframes:[f.value,$(f.value)],velocity:tE(y,C,f.value),damping:i,stiffness:a,restDelta:d,restSpeed:p}))};return P(0),{calculatedDuration:null,next:C=>{let I=!1;return!z&&S===void 0&&(I=!0,E(C),P(C)),S!==void 0&&C>S?z.next(C-S):(!I&&E(C),f)}}}const bC=e=>{const t=({timestamp:n})=>e(n);return{start:()=>fe.update(t,!0),stop:()=>mn(t),now:()=>Ye.isProcessing?Ye.timestamp:performance.now()}},fy=2e4;function hy(e){let t=0;const n=50;let o=e.next(t);for(;!o.done&&t<fy;)t+=n,o=e.next(t);return t>=fy?1/0:t}const kC={decay:py,inertia:py,tween:Us,keyframes:Us,spring:nE};function Hs({autoplay:e=!0,delay:t=0,driver:n=bC,keyframes:o,type:i="keyframes",repeat:a=0,repeatDelay:l=0,repeatType:c="loop",onPlay:u,onStop:d,onComplete:p,onUpdate:m,...f}){let g=1,$=!1,x,w;const v=()=>{w=new Promise(O=>{x=O})};v();let h;const y=kC[i]||Us;let E;y!==Us&&typeof o[0]!="number"&&(E=Z1([0,100],o,{clamp:!1}),o=[0,100]);const S=y({...f,keyframes:o});let z;c==="mirror"&&(z=y({...f,keyframes:[...o].reverse(),velocity:-(f.velocity||0)}));let P="idle",C=null,I=null,B=null;S.calculatedDuration===null&&a&&(S.calculatedDuration=hy(S));const{calculatedDuration:le}=S;let G=1/0,ee=1/0;le!==null&&(G=le+l,ee=G*(a+1)-l);let R=0;const de=O=>{if(I===null)return;g>0&&(I=Math.min(I,O)),g<0&&(I=Math.min(O-ee/g,I)),C!==null?R=C:R=Math.round(O-I)*g;const L=R-t*(g>=0?1:-1),N=g>=0?L<0:L>ee;R=Math.max(L,0),P==="finished"&&C===null&&(R=ee);let T=R,j=S;if(a){const ce=Math.min(R,ee)/G;let J=Math.floor(ce),K=ce%1;!K&&ce>=1&&(K=1),K===1&&J--,J=Math.min(J,a+1),!!(J%2)&&(c==="reverse"?(K=1-K,l&&(K-=l/G)):c==="mirror"&&(j=z)),T=Wn(0,1,K)*G}const k=N?{done:!1,value:o[0]}:j.next(T);E&&(k.value=E(k.value));let{done:Q}=k;!N&&le!==null&&(Q=g>=0?R>=ee:R<=0);const D=C===null&&(P==="finished"||P==="running"&&Q);return m&&m(k.value),D&&F(),k},re=()=>{h&&h.stop(),h=void 0},se=()=>{P="idle",re(),x(),v(),I=B=null},F=()=>{P="finished",p&&p(),re(),x()},V=()=>{if($)return;h||(h=n(de));const O=h.now();u&&u(),C!==null?I=O-C:(!I||P==="finished")&&(I=O),P==="finished"&&v(),B=I,C=null,P="running",h.start()};e&&V();const _={then(O,L){return w.then(O,L)},get time(){return ln(R)},set time(O){O=Bn(O),R=O,C!==null||!h||g===0?C=O:I=h.now()-O/g},get duration(){const O=S.calculatedDuration===null?hy(S):S.calculatedDuration;return ln(O)},get speed(){return g},set speed(O){O===g||!h||(g=O,_.time=ln(R))},get state(){return P},play:V,pause:()=>{P="paused",C=R},stop:()=>{$=!0,P!=="idle"&&(P="idle",d&&d(),se())},cancel:()=>{B!==null&&de(B),se()},complete:()=>{P="finished"},sample:O=>(I=0,de(O))};return _}function SC(e){let t;return()=>(t===void 0&&(t=e()),t)}const TC=SC(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),CC=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Pa=10,zC=2e4,PC=(e,t)=>t.type==="spring"||e==="backgroundColor"||!D1(t.ease);function AC(e,t,{onUpdate:n,onComplete:o,...i}){if(!(TC()&&CC.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let l=!1,c,u,d=!1;const p=()=>{u=new Promise(y=>{c=y})};p();let{keyframes:m,duration:f=300,ease:g,times:$}=i;if(PC(t,i)){const y=Hs({...i,repeat:0,delay:0});let E={done:!1,value:m[0]};const S=[];let z=0;for(;!E.done&&z<zC;)E=y.sample(z),S.push(E.value),z+=Pa;$=void 0,m=S,f=z-Pa,g="linear"}const x=OT(e.owner.current,t,m,{...i,duration:f,ease:g,times:$}),w=()=>{d=!1,x.cancel()},v=()=>{d=!0,fe.update(w),c(),p()};return x.onfinish=()=>{d||(e.set(jT(m,i)),o&&o(),v())},{then(y,E){return u.then(y,E)},attachTimeline(y){return x.timeline=y,x.onfinish=null,we},get time(){return ln(x.currentTime||0)},set time(y){x.currentTime=Bn(y)},get speed(){return x.playbackRate},set speed(y){x.playbackRate=y},get duration(){return ln(f)},play:()=>{l||(x.play(),mn(w))},pause:()=>x.pause(),stop:()=>{if(l=!0,x.playState==="idle")return;const{currentTime:y}=x;if(y){const E=Hs({...i,autoplay:!1});e.setWithVelocity(E.sample(y-Pa).value,E.sample(y).value,Pa)}v()},complete:()=>{d||x.finish()},cancel:v}}function FC({keyframes:e,delay:t,onUpdate:n,onComplete:o}){const i=()=>(n&&n(e[e.length-1]),o&&o(),{time:0,speed:1,duration:0,play:we,pause:we,stop:we,then:a=>(a(),Promise.resolve()),cancel:we,complete:we});return t?Hs({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const LC={type:"spring",stiffness:500,damping:25,restSpeed:10},DC=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),NC={type:"keyframes",duration:.8},MC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},RC=(e,{keyframes:t})=>t.length>2?NC:vr.has(e)?e.startsWith("scale")?DC(t[1]):LC:MC,Wp=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(_n.test(t)||t==="0")&&!t.startsWith("url(")),IC=new Set(["brightness","contrast","saturate","opacity"]);function BC(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=n.match(Nc)||[];if(!o)return e;const i=n.replace(o,"");let a=IC.has(t)?1:0;return o!==n&&(a*=100),t+"("+a+i+")"}const VC=/([a-z-]*)\(.*?\)/g,_p={..._n,getAnimatableNone:e=>{const t=e.match(VC);return t?t.map(BC).join(" "):e}},OC={...y1,color:qe,backgroundColor:qe,outlineColor:qe,fill:qe,stroke:qe,borderColor:qe,borderTopColor:qe,borderRightColor:qe,borderBottomColor:qe,borderLeftColor:qe,filter:_p,WebkitFilter:_p},vh=e=>OC[e];function rE(e,t){let n=vh(e);return n!==_p&&(n=_n),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const oE=e=>/^0[^.\s]+$/.test(e);function jC(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||oE(e)}function WC(e,t,n,o){const i=Wp(t,n);let a;Array.isArray(n)?a=[...n]:a=[null,n];const l=o.from!==void 0?o.from:e.get();let c;const u=[];for(let d=0;d<a.length;d++)a[d]===null&&(a[d]=d===0?l:a[d-1]),jC(a[d])&&u.push(d),typeof a[d]=="string"&&a[d]!=="none"&&a[d]!=="0"&&(c=a[d]);if(i&&u.length&&c)for(let d=0;d<u.length;d++){const p=u[d];a[p]=rE(t,c)}return a}function _C({when:e,delay:t,delayChildren:n,staggerChildren:o,staggerDirection:i,repeat:a,repeatType:l,repeatDelay:c,from:u,elapsed:d,...p}){return!!Object.keys(p).length}function $h(e,t){return e[t]||e.default||e}const UC={skipAnimations:!1},xh=(e,t,n,o={})=>i=>{const a=$h(o,e)||{},l=a.delay||o.delay||0;let{elapsed:c=0}=o;c=c-Bn(l);const u=WC(t,e,n,a),d=u[0],p=u[u.length-1],m=Wp(e,d),f=Wp(e,p);let g={keyframes:u,velocity:t.getVelocity(),ease:"easeOut",...a,delay:-c,onUpdate:$=>{t.set($),a.onUpdate&&a.onUpdate($)},onComplete:()=>{i(),a.onComplete&&a.onComplete()}};if(_C(a)||(g={...g,...RC(e,g)}),g.duration&&(g.duration=Bn(g.duration)),g.repeatDelay&&(g.repeatDelay=Bn(g.repeatDelay)),!m||!f||VT.current||a.type===!1||UC.skipAnimations)return FC(g);if(!o.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const $=AC(t,e,g);if($)return $}return Hs(g)};function Gs(e){return!!(ct(e)&&e.add)}const iE=e=>/^\-?\d*\.?\d+$/.test(e);function Eh(e,t){e.indexOf(t)===-1&&e.push(t)}function wh(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class bh{constructor(){this.subscriptions=[]}add(t){return Eh(this.subscriptions,t),()=>wh(this.subscriptions,t)}notify(t,n,o){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,o);else for(let a=0;a<i;a++){const l=this.subscriptions[a];l&&l(t,n,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const HC=e=>!isNaN(parseFloat(e));class GC{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(o,i=!0)=>{this.prev=this.current,this.current=o;const{delta:a,timestamp:l}=Ye;this.lastUpdated!==l&&(this.timeDelta=a,this.lastUpdated=l,fe.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>fe.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{o!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=HC(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new bh);const o=this.events[t].add(n);return t==="change"?()=>{o(),fe.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,o){this.set(n),this.prev=t,this.timeDelta=o}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?eE(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function bo(e,t){return new GC(e,t)}const aE=e=>t=>t.test(e),YC={test:e=>e==="auto",parse:e=>e},lE=[$r,U,Qt,vn,Z2,q2,YC],Vo=e=>lE.find(aE(e)),QC=[...lE,qe,_n],KC=e=>QC.find(aE(e));function XC(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,bo(n))}function JC(e,t){const n=Rc(e,t);let{transitionEnd:o={},transition:i={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...o};for(const l in a){const c=fT(a[l]);XC(e,l,c)}}function qC(e,t,n){var o,i;const a=Object.keys(t).filter(c=>!e.hasValue(c)),l=a.length;if(l)for(let c=0;c<l;c++){const u=a[c],d=t[u];let p=null;Array.isArray(d)&&(p=d[0]),p===null&&(p=(i=(o=n[u])!==null&&o!==void 0?o:e.readValue(u))!==null&&i!==void 0?i:t[u]),p!=null&&(typeof p=="string"&&(iE(p)||oE(p))?p=parseFloat(p):!KC(p)&&_n.test(d)&&(p=rE(u,d)),e.addValue(u,bo(p,{owner:e})),n[u]===void 0&&(n[u]=p),p!==null&&e.setBaseTarget(u,p))}}function ZC(e,t){return t?(t[e]||t.default||t).from:void 0}function ez(e,t,n){const o={};for(const i in e){const a=ZC(i,t);if(a!==void 0)o[i]=a;else{const l=n.getValue(i);l&&(o[i]=l.get())}}return o}function tz({protectedKeys:e,needsAnimating:t},n){const o=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,o}function nz(e,t){const n=e.get();if(Array.isArray(t)){for(let o=0;o<t.length;o++)if(t[o]!==n)return!0}else return n!==t}function sE(e,t,{delay:n=0,transitionOverride:o,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:l,...c}=e.makeTargetAnimatable(t);const u=e.getValue("willChange");o&&(a=o);const d=[],p=i&&e.animationState&&e.animationState.getState()[i];for(const m in c){const f=e.getValue(m),g=c[m];if(!f||g===void 0||p&&tz(p,m))continue;const $={delay:n,elapsed:0,...$h(a||{},m)};if(window.HandoffAppearAnimations){const v=e.getProps()[c1];if(v){const h=window.HandoffAppearAnimations(v,m,f,fe);h!==null&&($.elapsed=h,$.isHandoff=!0)}}let x=!$.isHandoff&&!nz(f,g);if($.type==="spring"&&(f.getVelocity()||$.velocity)&&(x=!1),f.animation&&(x=!1),x)continue;f.start(xh(m,f,g,e.shouldReduceMotion&&vr.has(m)?{type:!1}:$));const w=f.animation;Gs(u)&&(u.add(m),w.then(()=>u.remove(m))),d.push(w)}return l&&Promise.all(d).then(()=>{l&&JC(e,l)}),d}function Up(e,t,n={}){const o=Rc(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=o||{};n.transitionOverride&&(i=n.transitionOverride);const a=o?()=>Promise.all(sE(e,o,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:m}=i;return rz(e,t,d+u,p,m,n)}:()=>Promise.resolve(),{when:c}=i;if(c){const[u,d]=c==="beforeChildren"?[a,l]:[l,a];return u().then(()=>d())}else return Promise.all([a(),l(n.delay)])}function rz(e,t,n=0,o=0,i=1,a){const l=[],c=(e.variantChildren.size-1)*o,u=i===1?(d=0)=>d*o:(d=0)=>c-d*o;return Array.from(e.variantChildren).sort(oz).forEach((d,p)=>{d.notify("AnimationStart",t),l.push(Up(d,t,{...a,delay:n+u(p)}).then(()=>d.notify("AnimationComplete",t)))}),Promise.all(l)}function oz(e,t){return e.sortNodePosition(t)}function iz(e,t,n={}){e.notify("AnimationStart",t);let o;if(Array.isArray(t)){const i=t.map(a=>Up(e,a,n));o=Promise.all(i)}else if(typeof t=="string")o=Up(e,t,n);else{const i=typeof t=="function"?Rc(e,t,n.custom):t;o=Promise.all(sE(e,i,n))}return o.then(()=>e.notify("AnimationComplete",t))}const az=[...ih].reverse(),lz=ih.length;function sz(e){return t=>Promise.all(t.map(({animation:n,options:o})=>iz(e,n,o)))}function cz(e){let t=sz(e);const n=dz();let o=!0;const i=(u,d)=>{const p=Rc(e,d);if(p){const{transition:m,transitionEnd:f,...g}=p;u={...u,...g,...f}}return u};function a(u){t=u(e)}function l(u,d){const p=e.getProps(),m=e.getVariantContext(!0)||{},f=[],g=new Set;let $={},x=1/0;for(let v=0;v<lz;v++){const h=az[v],y=n[h],E=p[h]!==void 0?p[h]:m[h],S=Yi(E),z=h===d?y.isActive:null;z===!1&&(x=v);let P=E===m[h]&&E!==p[h]&&S;if(P&&o&&e.manuallyAnimateOnMount&&(P=!1),y.protectedKeys={...$},!y.isActive&&z===null||!E&&!y.prevProp||Lc(E)||typeof E=="boolean")continue;let I=uz(y.prevProp,E)||h===d&&y.isActive&&!P&&S||v>x&&S,B=!1;const le=Array.isArray(E)?E:[E];let G=le.reduce(i,{});z===!1&&(G={});const{prevResolvedValues:ee={}}=y,R={...ee,...G},de=re=>{I=!0,g.has(re)&&(B=!0,g.delete(re)),y.needsAnimating[re]=!0};for(const re in R){const se=G[re],F=ee[re];if($.hasOwnProperty(re))continue;let V=!1;Ws(se)&&Ws(F)?V=!F1(se,F):V=se!==F,V?se!==void 0?de(re):g.add(re):se!==void 0&&g.has(re)?de(re):y.protectedKeys[re]=!0}y.prevProp=E,y.prevResolvedValues=G,y.isActive&&($={...$,...G}),o&&e.blockInitialAnimation&&(I=!1),I&&(!P||B)&&f.push(...le.map(re=>({animation:re,options:{type:h,...u}})))}if(g.size){const v={};g.forEach(h=>{const y=e.getBaseTarget(h);y!==void 0&&(v[h]=y)}),f.push({animation:v})}let w=!!f.length;return o&&(p.initial===!1||p.initial===p.animate)&&!e.manuallyAnimateOnMount&&(w=!1),o=!1,w?t(f):Promise.resolve()}function c(u,d,p){var m;if(n[u].isActive===d)return Promise.resolve();(m=e.variantChildren)===null||m===void 0||m.forEach(g=>{var $;return($=g.animationState)===null||$===void 0?void 0:$.setActive(u,d)}),n[u].isActive=d;const f=l(p,u);for(const g in n)n[g].protectedKeys={};return f}return{animateChanges:l,setActive:c,setAnimateFunction:a,getState:()=>n}}function uz(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!F1(t,e):!1}function Xn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function dz(){return{animate:Xn(!0),whileInView:Xn(),whileHover:Xn(),whileTap:Xn(),whileDrag:Xn(),whileFocus:Xn(),exit:Xn()}}class mz extends Qn{constructor(t){super(t),t.animationState||(t.animationState=cz(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Lc(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let pz=0;class fz extends Qn{constructor(){super(...arguments),this.id=pz++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:o}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const a=this.node.animationState.setActive("exit",!t,{custom:o??this.node.getProps().custom});n&&!t&&a.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const hz={animation:{Feature:mz},exit:{Feature:fz}},gy=(e,t)=>Math.abs(e-t);function gz(e,t){const n=gy(e.x,t.x),o=gy(e.y,t.y);return Math.sqrt(n**2+o**2)}class cE{constructor(t,n,{transformPagePoint:o,contextWindow:i,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=zu(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,g=gz(m.offset,{x:0,y:0})>=3;if(!f&&!g)return;const{point:$}=m,{timestamp:x}=Ye;this.history.push({...$,timestamp:x});const{onStart:w,onMove:v}=this.handlers;f||(w&&w(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,m)},this.handlePointerMove=(m,f)=>{this.lastMoveEvent=m,this.lastMoveEventInfo=Cu(f,this.transformPagePoint),fe.update(this.updatePoint,!0)},this.handlePointerUp=(m,f)=>{this.end();const{onEnd:g,onSessionEnd:$,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=zu(m.type==="pointercancel"?this.lastMoveEventInfo:Cu(f,this.transformPagePoint),this.history);this.startEvent&&g&&g(m,w),$&&$(m,w)},!T1(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=o,this.contextWindow=i||window;const l=Mc(t),c=Cu(l,this.transformPagePoint),{point:u}=c,{timestamp:d}=Ye;this.history=[{...u,timestamp:d}];const{onSessionStart:p}=n;p&&p(t,zu(c,this.history)),this.removeListeners=In(an(this.contextWindow,"pointermove",this.handlePointerMove),an(this.contextWindow,"pointerup",this.handlePointerUp),an(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),mn(this.updatePoint)}}function Cu(e,t){return t?{point:t(e.point)}:e}function yy(e,t){return{x:e.x-t.x,y:e.y-t.y}}function zu({point:e},t){return{point:e,delta:yy(e,uE(t)),offset:yy(e,yz(t)),velocity:vz(t,.1)}}function yz(e){return e[0]}function uE(e){return e[e.length-1]}function vz(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,o=null;const i=uE(e);for(;n>=0&&(o=e[n],!(i.timestamp-o.timestamp>Bn(t)));)n--;if(!o)return{x:0,y:0};const a=ln(i.timestamp-o.timestamp);if(a===0)return{x:0,y:0};const l={x:(i.x-o.x)/a,y:(i.y-o.y)/a};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function yt(e){return e.max-e.min}function Hp(e,t=0,n=.01){return Math.abs(e-t)<=n}function vy(e,t,n,o=.5){e.origin=o,e.originPoint=ve(t.min,t.max,e.origin),e.scale=yt(n)/yt(t),(Hp(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ve(n.min,n.max,e.origin)-e.originPoint,(Hp(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Si(e,t,n,o){vy(e.x,t.x,n.x,o?o.originX:void 0),vy(e.y,t.y,n.y,o?o.originY:void 0)}function $y(e,t,n){e.min=n.min+t.min,e.max=e.min+yt(t)}function $z(e,t,n){$y(e.x,t.x,n.x),$y(e.y,t.y,n.y)}function xy(e,t,n){e.min=t.min-n.min,e.max=e.min+yt(t)}function Ti(e,t,n){xy(e.x,t.x,n.x),xy(e.y,t.y,n.y)}function xz(e,{min:t,max:n},o){return t!==void 0&&e<t?e=o?ve(t,e,o.min):Math.max(e,t):n!==void 0&&e>n&&(e=o?ve(n,e,o.max):Math.min(e,n)),e}function Ey(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Ez(e,{top:t,left:n,bottom:o,right:i}){return{x:Ey(e.x,n,i),y:Ey(e.y,t,o)}}function wy(e,t){let n=t.min-e.min,o=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,o]=[o,n]),{min:n,max:o}}function wz(e,t){return{x:wy(e.x,t.x),y:wy(e.y,t.y)}}function bz(e,t){let n=.5;const o=yt(e),i=yt(t);return i>o?n=Ki(t.min,t.max-o,e.min):o>i&&(n=Ki(e.min,e.max-i,t.min)),Wn(0,1,n)}function kz(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Gp=.35;function Sz(e=Gp){return e===!1?e=0:e===!0&&(e=Gp),{x:by(e,"left","right"),y:by(e,"top","bottom")}}function by(e,t,n){return{min:ky(e,t),max:ky(e,n)}}function ky(e,t){return typeof e=="number"?e:e[t]||0}const Sy=()=>({translate:0,scale:1,origin:0,originPoint:0}),io=()=>({x:Sy(),y:Sy()}),Ty=()=>({min:0,max:0}),Ce=()=>({x:Ty(),y:Ty()});function bt(e){return[e("x"),e("y")]}function dE({top:e,left:t,right:n,bottom:o}){return{x:{min:t,max:n},y:{min:e,max:o}}}function Tz({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Cz(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),o=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:o.y,right:o.x}}function Pu(e){return e===void 0||e===1}function Yp({scale:e,scaleX:t,scaleY:n}){return!Pu(e)||!Pu(t)||!Pu(n)}function Zn(e){return Yp(e)||mE(e)||e.z||e.rotate||e.rotateX||e.rotateY}function mE(e){return Cy(e.x)||Cy(e.y)}function Cy(e){return e&&e!=="0%"}function Ys(e,t,n){const o=e-n,i=t*o;return n+i}function zy(e,t,n,o,i){return i!==void 0&&(e=Ys(e,i,o)),Ys(e,n,o)+t}function Qp(e,t=0,n=1,o,i){e.min=zy(e.min,t,n,o,i),e.max=zy(e.max,t,n,o,i)}function pE(e,{x:t,y:n}){Qp(e.x,t.translate,t.scale,t.originPoint),Qp(e.y,n.translate,n.scale,n.originPoint)}function zz(e,t,n,o=!1){const i=n.length;if(!i)return;t.x=t.y=1;let a,l;for(let c=0;c<i;c++){a=n[c],l=a.projectionDelta;const u=a.instance;u&&u.style&&u.style.display==="contents"||(o&&a.options.layoutScroll&&a.scroll&&a!==a.root&&ao(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,pE(e,l)),o&&Zn(a.latestValues)&&ao(e,a.latestValues))}t.x=Py(t.x),t.y=Py(t.y)}function Py(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function En(e,t){e.min=e.min+t,e.max=e.max+t}function Ay(e,t,[n,o,i]){const a=t[i]!==void 0?t[i]:.5,l=ve(e.min,e.max,a);Qp(e,t[n],t[o],l,t.scale)}const Pz=["x","scaleX","originX"],Az=["y","scaleY","originY"];function ao(e,t){Ay(e.x,t,Pz),Ay(e.y,t,Az)}function fE(e,t){return dE(Cz(e.getBoundingClientRect(),t))}function Fz(e,t,n){const o=fE(e,n),{scroll:i}=t;return i&&(En(o.x,i.offset.x),En(o.y,i.offset.y)),o}const hE=({current:e})=>e?e.ownerDocument.defaultView:null,Lz=new WeakMap;class Dz{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ce(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const i=p=>{const{dragSnapToOrigin:m}=this.getProps();m?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Mc(p,"page").point)},a=(p,m)=>{const{drag:f,dragPropagation:g,onDragStart:$}=this.getProps();if(f&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=z1(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),bt(w=>{let v=this.getAxisMotionValue(w).get()||0;if(Qt.test(v)){const{projection:h}=this.visualElement;if(h&&h.layout){const y=h.layout.layoutBox[w];y&&(v=yt(y)*(parseFloat(v)/100))}}this.originPoint[w]=v}),$&&fe.update(()=>$(p,m),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},l=(p,m)=>{const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:$,onDrag:x}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:w}=m;if(g&&this.currentDirection===null){this.currentDirection=Nz(w),this.currentDirection!==null&&$&&$(this.currentDirection);return}this.updateAxis("x",m.point,w),this.updateAxis("y",m.point,w),this.visualElement.render(),x&&x(p,m)},c=(p,m)=>this.stop(p,m),u=()=>bt(p=>{var m;return this.getAnimationState(p)==="paused"&&((m=this.getAxisMotionValue(p).animation)===null||m===void 0?void 0:m.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new cE(t,{onSessionStart:i,onStart:a,onMove:l,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:hE(this.visualElement)})}stop(t,n){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:a}=this.getProps();a&&fe.update(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,o){const{drag:i}=this.getProps();if(!o||!Aa(t,i,this.currentDirection))return;const a=this.getAxisMotionValue(t);let l=this.originPoint[t]+o[t];this.constraints&&this.constraints[t]&&(l=xz(l,this.constraints[t],this.elastic[t])),a.set(l)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:o}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&ro(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=Ez(i.layoutBox,n):this.constraints=!1,this.elastic=Sz(o),a!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&bt(l=>{this.getAxisMotionValue(l)&&(this.constraints[l]=kz(i.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ro(t))return!1;const o=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=Fz(o,i.root,this.visualElement.getTransformPagePoint());let l=wz(i.layout.layoutBox,a);if(n){const c=n(Tz(l));this.hasMutatedConstraints=!!c,c&&(l=dE(c))}return l}startAnimation(t){const{drag:n,dragMomentum:o,dragElastic:i,dragTransition:a,dragSnapToOrigin:l,onDragTransitionEnd:c}=this.getProps(),u=this.constraints||{},d=bt(p=>{if(!Aa(p,n,this.currentDirection))return;let m=u&&u[p]||{};l&&(m={min:0,max:0});const f=i?200:1e6,g=i?40:1e7,$={type:"inertia",velocity:o?t[p]:0,bounceStiffness:f,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...a,...m};return this.startAxisValueAnimation(p,$)});return Promise.all(d).then(c)}startAxisValueAnimation(t,n){const o=this.getAxisMotionValue(t);return o.start(xh(t,o,0,n))}stopAnimation(){bt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){bt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),o=this.visualElement.getProps(),i=o[n];return i||this.visualElement.getValue(t,(o.initial?o.initial[t]:void 0)||0)}snapToCursor(t){bt(n=>{const{drag:o}=this.getProps();if(!Aa(n,o,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:l,max:c}=i.layout.layoutBox[n];a.set(t[n]-ve(l,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:o}=this.visualElement;if(!ro(n)||!o||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};bt(l=>{const c=this.getAxisMotionValue(l);if(c){const u=c.get();i[l]=bz({min:u,max:u},this.constraints[l])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),bt(l=>{if(!Aa(l,t,null))return;const c=this.getAxisMotionValue(l),{min:u,max:d}=this.constraints[l];c.set(ve(u,d,i[l]))})}addListeners(){if(!this.visualElement.current)return;Lz.set(this.visualElement,this);const t=this.visualElement.current,n=an(t,"pointerdown",u=>{const{drag:d,dragListener:p=!0}=this.getProps();d&&p&&this.start(u)}),o=()=>{const{dragConstraints:u}=this.getProps();ro(u)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,a=i.addEventListener("measure",o);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),o();const l=rn(window,"resize",()=>this.scalePositionWithinConstraints()),c=i.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d})=>{this.isDragging&&d&&(bt(p=>{const m=this.getAxisMotionValue(p);m&&(this.originPoint[p]+=u[p].translate,m.set(m.get()+u[p].translate))}),this.visualElement.render())});return()=>{l(),n(),a(),c&&c()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:o=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:l=Gp,dragMomentum:c=!0}=t;return{...t,drag:n,dragDirectionLock:o,dragPropagation:i,dragConstraints:a,dragElastic:l,dragMomentum:c}}}function Aa(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Nz(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Mz extends Qn{constructor(t){super(t),this.removeGroupControls=we,this.removeListeners=we,this.controls=new Dz(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||we}unmount(){this.removeGroupControls(),this.removeListeners()}}const Fy=e=>(t,n)=>{e&&fe.update(()=>e(t,n))};class Rz extends Qn{constructor(){super(...arguments),this.removePointerDownListener=we}onPointerDown(t){this.session=new cE(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:hE(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:o,onPanEnd:i}=this.node.getProps();return{onSessionStart:Fy(t),onStart:Fy(n),onMove:o,onEnd:(a,l)=>{delete this.session,i&&fe.update(()=>i(a,l))}}}mount(){this.removePointerDownListener=an(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Iz(){const e=b.useContext(rh);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:o}=e,i=b.useId();return b.useEffect(()=>o(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const us={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ly(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Oo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(U.test(e))e=parseFloat(e);else return e;const n=Ly(e,t.target.x),o=Ly(e,t.target.y);return`${n}% ${o}%`}},Bz={correct:(e,{treeScale:t,projectionDelta:n})=>{const o=e,i=_n.parse(e);if(i.length>5)return o;const a=_n.createTransformer(e),l=typeof i[0]!="number"?1:0,c=n.x.scale*t.x,u=n.y.scale*t.y;i[0+l]/=c,i[1+l]/=u;const d=ve(c,u,.5);return typeof i[2+l]=="number"&&(i[2+l]/=d),typeof i[3+l]=="number"&&(i[3+l]/=d),a(i)}};class Vz extends r.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:o,layoutId:i}=this.props,{projection:a}=t;H2(Oz),a&&(n.group&&n.group.add(a),o&&o.register&&i&&o.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),us.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:o,drag:i,isPresent:a}=this.props,l=o.projection;return l&&(l.isPresent=a,i||t.layoutDependency!==n||n===void 0?l.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?l.promote():l.relegate()||fe.postRender(()=>{const c=l.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:o}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),o&&o.deregister&&o.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function gE(e){const[t,n]=Iz(),o=b.useContext(d1);return r.createElement(Vz,{...e,layoutGroup:o,switchLayoutGroup:b.useContext(m1),isPresent:t,safeToRemove:n})}const Oz={borderRadius:{...Oo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Oo,borderTopRightRadius:Oo,borderBottomLeftRadius:Oo,borderBottomRightRadius:Oo,boxShadow:Bz},yE=["TopLeft","TopRight","BottomLeft","BottomRight"],jz=yE.length,Dy=e=>typeof e=="string"?parseFloat(e):e,Ny=e=>typeof e=="number"||U.test(e);function Wz(e,t,n,o,i,a){i?(e.opacity=ve(0,n.opacity!==void 0?n.opacity:1,_z(o)),e.opacityExit=ve(t.opacity!==void 0?t.opacity:1,0,Uz(o))):a&&(e.opacity=ve(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,o));for(let l=0;l<jz;l++){const c=`border${yE[l]}Radius`;let u=My(t,c),d=My(n,c);if(u===void 0&&d===void 0)continue;u||(u=0),d||(d=0),u===0||d===0||Ny(u)===Ny(d)?(e[c]=Math.max(ve(Dy(u),Dy(d),o),0),(Qt.test(d)||Qt.test(u))&&(e[c]+="%")):e[c]=d}(t.rotate||n.rotate)&&(e.rotate=ve(t.rotate||0,n.rotate||0,o))}function My(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const _z=vE(0,.5,O1),Uz=vE(.5,.95,we);function vE(e,t,n){return o=>o<e?0:o>t?1:n(Ki(e,t,o))}function Ry(e,t){e.min=t.min,e.max=t.max}function Et(e,t){Ry(e.x,t.x),Ry(e.y,t.y)}function Iy(e,t,n,o,i){return e-=t,e=Ys(e,1/n,o),i!==void 0&&(e=Ys(e,1/i,o)),e}function Hz(e,t=0,n=1,o=.5,i,a=e,l=e){if(Qt.test(t)&&(t=parseFloat(t),t=ve(l.min,l.max,t/100)-l.min),typeof t!="number")return;let c=ve(a.min,a.max,o);e===a&&(c-=t),e.min=Iy(e.min,t,n,c,i),e.max=Iy(e.max,t,n,c,i)}function By(e,t,[n,o,i],a,l){Hz(e,t[n],t[o],t[i],t.scale,a,l)}const Gz=["x","scaleX","originX"],Yz=["y","scaleY","originY"];function Vy(e,t,n,o){By(e.x,t,Gz,n?n.x:void 0,o?o.x:void 0),By(e.y,t,Yz,n?n.y:void 0,o?o.y:void 0)}function Oy(e){return e.translate===0&&e.scale===1}function $E(e){return Oy(e.x)&&Oy(e.y)}function Qz(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function xE(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function jy(e){return yt(e.x)/yt(e.y)}class Kz{constructor(){this.members=[]}add(t){Eh(this.members,t),t.scheduleRender()}remove(t){if(wh(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let o;for(let i=n;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1){o=a;break}}return o?(this.promote(o),!0):!1}promote(t,n){const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,n&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:o}=t;n.onExitComplete&&n.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Wy(e,t,n){let o="";const i=e.x.translate/t.x,a=e.y.translate/t.y;if((i||a)&&(o=`translate3d(${i}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(o+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:u,rotateX:d,rotateY:p}=n;u&&(o+=`rotate(${u}deg) `),d&&(o+=`rotateX(${d}deg) `),p&&(o+=`rotateY(${p}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(o+=`scale(${l}, ${c})`),o||"none"}const Xz=(e,t)=>e.depth-t.depth;class Jz{constructor(){this.children=[],this.isDirty=!1}add(t){Eh(this.children,t),this.isDirty=!0}remove(t){wh(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Xz),this.isDirty=!1,this.children.forEach(t)}}function qz(e,t){const n=performance.now(),o=({timestamp:i})=>{const a=i-n;a>=t&&(mn(o),e(a-t))};return fe.read(o,!0),()=>mn(o)}function Zz(e){window.MotionDebug&&window.MotionDebug.record(e)}function e3(e){return e instanceof SVGElement&&e.tagName!=="svg"}function t3(e,t,n){const o=ct(e)?e:bo(e);return o.start(xh("",o,t,n)),o.animation}const _y=["","X","Y","Z"],n3={visibility:"hidden"},Uy=1e3;let r3=0;const er={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function EE({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:o,resetTransform:i}){return class{constructor(l={},c=t==null?void 0:t()){this.id=r3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,er.totalNodes=er.resolvedTargetDeltas=er.recalculatedProjection=0,this.nodes.forEach(a3),this.nodes.forEach(d3),this.nodes.forEach(m3),this.nodes.forEach(l3),Zz(er)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=l,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new Jz)}addEventListener(l,c){return this.eventHandlers.has(l)||this.eventHandlers.set(l,new bh),this.eventHandlers.get(l).add(c)}notifyListeners(l,...c){const u=this.eventHandlers.get(l);u&&u.notify(...c)}hasListeners(l){return this.eventHandlers.has(l)}mount(l,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=e3(l),this.instance=l;const{layoutId:u,layout:d,visualElement:p}=this.options;if(p&&!p.current&&p.mount(l),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(d||u)&&(this.isLayoutDirty=!0),e){let m;const f=()=>this.root.updateBlockedByResize=!1;e(l,()=>{this.root.updateBlockedByResize=!0,m&&m(),m=qz(f,250),us.hasAnimatedSinceResize&&(us.hasAnimatedSinceResize=!1,this.nodes.forEach(Gy))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&p&&(u||d)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:f,hasRelativeTargetChanged:g,layout:$})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||p.getDefaultTransition()||y3,{onLayoutAnimationStart:w,onLayoutAnimationComplete:v}=p.getProps(),h=!this.targetLayout||!xE(this.targetLayout,$)||g,y=!f&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(m,y);const E={...$h(x,"layout"),onPlay:w,onComplete:v};(p.shouldReduceMotion||this.options.layoutRoot)&&(E.delay=0,E.type=!1),this.startAnimation(E)}else f||Gy(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=$})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const l=this.getStack();l&&l.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,mn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(p3),this.animationId++)}getTransformTemplate(){const{visualElement:l}=this.options;return l&&l.getProps().transformTemplate}willUpdate(l=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const m=this.path[p];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:c,layout:u}=this.options;if(c===void 0&&!u)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),l&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Hy);return}this.isUpdating||this.nodes.forEach(c3),this.isUpdating=!1,this.nodes.forEach(u3),this.nodes.forEach(o3),this.nodes.forEach(i3),this.clearAllSnapshots();const c=performance.now();Ye.delta=Wn(0,1e3/60,c-Ye.timestamp),Ye.timestamp=c,Ye.isProcessing=!0,$u.update.process(Ye),$u.preRender.process(Ye),$u.render.process(Ye),Ye.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(s3),this.sharedNodes.forEach(f3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,fe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){fe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const l=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ce(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,l?l.layoutBox:void 0)}updateScroll(l="measure"){let c=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===l&&(c=!1),c&&(this.scroll={animationId:this.root.animationId,phase:l,isRoot:o(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const l=this.isLayoutDirty||this.shouldResetTransform,c=this.projectionDelta&&!$E(this.projectionDelta),u=this.getTransformTemplate(),d=u?u(this.latestValues,""):void 0,p=d!==this.prevTransformTemplateValue;l&&(c||Zn(this.latestValues)||p)&&(i(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(l=!0){const c=this.measurePageBox();let u=this.removeElementScroll(c);return l&&(u=this.removeTransform(u)),v3(u),{animationId:this.root.animationId,measuredBox:c,layoutBox:u,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:l}=this.options;if(!l)return Ce();const c=l.measureViewportBox(),{scroll:u}=this.root;return u&&(En(c.x,u.offset.x),En(c.y,u.offset.y)),c}removeElementScroll(l){const c=Ce();Et(c,l);for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:p,options:m}=d;if(d!==this.root&&p&&m.layoutScroll){if(p.isRoot){Et(c,l);const{scroll:f}=this.root;f&&(En(c.x,-f.offset.x),En(c.y,-f.offset.y))}En(c.x,p.offset.x),En(c.y,p.offset.y)}}return c}applyTransform(l,c=!1){const u=Ce();Et(u,l);for(let d=0;d<this.path.length;d++){const p=this.path[d];!c&&p.options.layoutScroll&&p.scroll&&p!==p.root&&ao(u,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Zn(p.latestValues)&&ao(u,p.latestValues)}return Zn(this.latestValues)&&ao(u,this.latestValues),u}removeTransform(l){const c=Ce();Et(c,l);for(let u=0;u<this.path.length;u++){const d=this.path[u];if(!d.instance||!Zn(d.latestValues))continue;Yp(d.latestValues)&&d.updateSnapshot();const p=Ce(),m=d.measurePageBox();Et(p,m),Vy(c,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,p)}return Zn(this.latestValues)&&Vy(c,this.latestValues),c}setTargetDelta(l){this.targetDelta=l,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(l){this.options={...this.options,...l,crossfade:l.crossfade!==void 0?l.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ye.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(l=!1){var c;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==u;if(!(l||d&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:m,layoutId:f}=this.options;if(!(!this.layout||!(m||f))){if(this.resolvedRelativeTargetAt=Ye.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ce(),this.relativeTargetOrigin=Ce(),Ti(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Et(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ce(),this.targetWithTransforms=Ce()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),$z(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Et(this.target,this.layout.layoutBox),pE(this.target,this.targetDelta)):Et(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ce(),this.relativeTargetOrigin=Ce(),Ti(this.relativeTargetOrigin,this.target,g.target),Et(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}er.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Yp(this.parent.latestValues)||mE(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var l;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty)&&(d=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Ye.timestamp&&(d=!1),d)return;const{layout:p,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||m))return;Et(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,g=this.treeScale.y;zz(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox);const{target:$}=c;if(!$){this.projectionTransform&&(this.projectionDelta=io(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=io(),this.projectionDeltaWithTransform=io());const x=this.projectionTransform;Si(this.projectionDelta,this.layoutCorrected,$,this.latestValues),this.projectionTransform=Wy(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==f||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",$)),er.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(l=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),l){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(l,c=!1){const u=this.snapshot,d=u?u.latestValues:{},p={...this.latestValues},m=io();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const f=Ce(),g=u?u.source:void 0,$=this.layout?this.layout.source:void 0,x=g!==$,w=this.getStack(),v=!w||w.members.length<=1,h=!!(x&&!v&&this.options.crossfade===!0&&!this.path.some(g3));this.animationProgress=0;let y;this.mixTargetDelta=E=>{const S=E/1e3;Yy(m.x,l.x,S),Yy(m.y,l.y,S),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ti(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),h3(this.relativeTarget,this.relativeTargetOrigin,f,S),y&&Qz(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=Ce()),Et(y,this.relativeTarget)),x&&(this.animationValues=p,Wz(p,d,this.latestValues,S,h,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(l){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(mn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=fe.update(()=>{us.hasAnimatedSinceResize=!0,this.currentAnimation=t3(0,Uy,{...l,onUpdate:c=>{this.mixTargetDelta(c),l.onUpdate&&l.onUpdate(c)},onComplete:()=>{l.onComplete&&l.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const l=this.getStack();l&&l.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Uy),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const l=this.getLead();let{targetWithTransforms:c,target:u,layout:d,latestValues:p}=l;if(!(!c||!u||!d)){if(this!==l&&this.layout&&d&&wE(this.options.animationType,this.layout.layoutBox,d.layoutBox)){u=this.target||Ce();const m=yt(this.layout.layoutBox.x);u.x.min=l.target.x.min,u.x.max=u.x.min+m;const f=yt(this.layout.layoutBox.y);u.y.min=l.target.y.min,u.y.max=u.y.min+f}Et(c,u),ao(c,p),Si(this.projectionDeltaWithTransform,this.layoutCorrected,c,p)}}registerSharedNode(l,c){this.sharedNodes.has(l)||this.sharedNodes.set(l,new Kz),this.sharedNodes.get(l).add(c);const d=c.options.initialPromotionConfig;c.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(c):void 0})}isLead(){const l=this.getStack();return l?l.lead===this:!0}getLead(){var l;const{layoutId:c}=this.options;return c?((l=this.getStack())===null||l===void 0?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:c}=this.options;return c?(l=this.getStack())===null||l===void 0?void 0:l.prevLead:void 0}getStack(){const{layoutId:l}=this.options;if(l)return this.root.sharedNodes.get(l)}promote({needsReset:l,transition:c,preserveFollowOpacity:u}={}){const d=this.getStack();d&&d.promote(this,u),l&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const l=this.getStack();return l?l.relegate(this):!1}resetRotation(){const{visualElement:l}=this.options;if(!l)return;let c=!1;const{latestValues:u}=l;if((u.rotate||u.rotateX||u.rotateY||u.rotateZ)&&(c=!0),!c)return;const d={};for(let p=0;p<_y.length;p++){const m="rotate"+_y[p];u[m]&&(d[m]=u[m],l.setStaticValue(m,0))}l.render();for(const p in d)l.setStaticValue(p,d[p]);l.scheduleRender()}getProjectionStyles(l){var c,u;if(!this.instance||this.isSVG)return;if(!this.isVisible)return n3;const d={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=cs(l==null?void 0:l.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none",d;const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=cs(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!Zn(this.latestValues)&&(x.transform=p?p({},""):"none",this.hasProjected=!1),x}const f=m.animationValues||m.latestValues;this.applyTransformsToTarget(),d.transform=Wy(this.projectionDeltaWithTransform,this.treeScale,f),p&&(d.transform=p(f,d.transform));const{x:g,y:$}=this.projectionDelta;d.transformOrigin=`${g.origin*100}% ${$.origin*100}% 0`,m.animationValues?d.opacity=m===this?(u=(c=f.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:d.opacity=m===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in Os){if(f[x]===void 0)continue;const{correct:w,applyTo:v}=Os[x],h=d.transform==="none"?f[x]:w(f[x],m);if(v){const y=v.length;for(let E=0;E<y;E++)d[v[E]]=h}else d[x]=h}return this.options.layoutId&&(d.pointerEvents=m===this?cs(l==null?void 0:l.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(l=>{var c;return(c=l.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(Hy),this.root.sharedNodes.clear()}}}function o3(e){e.updateLayout()}function i3(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:i}=e.layout,{animationType:a}=e.options,l=n.source!==e.layout.source;a==="size"?bt(m=>{const f=l?n.measuredBox[m]:n.layoutBox[m],g=yt(f);f.min=o[m].min,f.max=f.min+g}):wE(a,n.layoutBox,o)&&bt(m=>{const f=l?n.measuredBox[m]:n.layoutBox[m],g=yt(o[m]);f.max=f.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[m].max=e.relativeTarget[m].min+g)});const c=io();Si(c,o,n.layoutBox);const u=io();l?Si(u,e.applyTransform(i,!0),n.measuredBox):Si(u,o,n.layoutBox);const d=!$E(c);let p=!1;if(!e.resumeFrom){const m=e.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:f,layout:g}=m;if(f&&g){const $=Ce();Ti($,n.layoutBox,f.layoutBox);const x=Ce();Ti(x,o,g.layoutBox),xE($,x)||(p=!0),m.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=$,e.relativeParent=m)}}}e.notifyListeners("didUpdate",{layout:o,snapshot:n,delta:u,layoutDelta:c,hasLayoutChanged:d,hasRelativeTargetChanged:p})}else if(e.isLead()){const{onExitComplete:o}=e.options;o&&o()}e.options.transition=void 0}function a3(e){er.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function l3(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function s3(e){e.clearSnapshot()}function Hy(e){e.clearMeasurements()}function c3(e){e.isLayoutDirty=!1}function u3(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Gy(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function d3(e){e.resolveTargetDelta()}function m3(e){e.calcProjection()}function p3(e){e.resetRotation()}function f3(e){e.removeLeadSnapshot()}function Yy(e,t,n){e.translate=ve(t.translate,0,n),e.scale=ve(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Qy(e,t,n,o){e.min=ve(t.min,n.min,o),e.max=ve(t.max,n.max,o)}function h3(e,t,n,o){Qy(e.x,t.x,n.x,o),Qy(e.y,t.y,n.y,o)}function g3(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const y3={duration:.45,ease:[.4,0,.1,1]},Ky=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Xy=Ky("applewebkit/")&&!Ky("chrome/")?Math.round:we;function Jy(e){e.min=Xy(e.min),e.max=Xy(e.max)}function v3(e){Jy(e.x),Jy(e.y)}function wE(e,t,n){return e==="position"||e==="preserve-aspect"&&!Hp(jy(t),jy(n),.2)}const $3=EE({attachResizeListener:(e,t)=>rn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Au={current:void 0},bE=EE({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Au.current){const e=new $3({});e.mount(window),e.setOptions({layoutScroll:!0}),Au.current=e}return Au.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),x3={pan:{Feature:Rz},drag:{Feature:Mz,ProjectionNode:bE,MeasureLayout:gE}},E3=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function w3(e){const t=E3.exec(e);if(!t)return[,];const[,n,o]=t;return[n,o]}function Kp(e,t,n=1){const[o,i]=w3(e);if(!o)return;const a=window.getComputedStyle(t).getPropertyValue(o);if(a){const l=a.trim();return iE(l)?parseFloat(l):l}else return Bp(i)?Kp(i,t,n+1):i}function b3(e,{...t},n){const o=e.current;if(!(o instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const a=i.get();if(!Bp(a))return;const l=Kp(a,o);l&&i.set(l)});for(const i in t){const a=t[i];if(!Bp(a))continue;const l=Kp(a,o);l&&(t[i]=l,n||(n={}),n[i]===void 0&&(n[i]=a))}return{target:t,transitionEnd:n}}const k3=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),kE=e=>k3.has(e),S3=e=>Object.keys(e).some(kE),qy=e=>e===$r||e===U,Zy=(e,t)=>parseFloat(e.split(", ")[t]),e0=(e,t)=>(n,{transform:o})=>{if(o==="none"||!o)return 0;const i=o.match(/^matrix3d\((.+)\)$/);if(i)return Zy(i[1],t);{const a=o.match(/^matrix\((.+)\)$/);return a?Zy(a[1],e):0}},T3=new Set(["x","y","z"]),C3=ra.filter(e=>!T3.has(e));function z3(e){const t=[];return C3.forEach(n=>{const o=e.getValue(n);o!==void 0&&(t.push([n,o.get()]),o.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const ko={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:e0(4,13),y:e0(5,14)};ko.translateX=ko.x;ko.translateY=ko.y;const P3=(e,t,n)=>{const o=t.measureViewportBox(),i=t.current,a=getComputedStyle(i),{display:l}=a,c={};l==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(d=>{c[d]=ko[d](o,a)}),t.render();const u=t.measureViewportBox();return n.forEach(d=>{const p=t.getValue(d);p&&p.jump(c[d]),e[d]=ko[d](u,a)}),e},A3=(e,t,n={},o={})=>{t={...t},o={...o};const i=Object.keys(t).filter(kE);let a=[],l=!1;const c=[];if(i.forEach(u=>{const d=e.getValue(u);if(!e.hasValue(u))return;let p=n[u],m=Vo(p);const f=t[u];let g;if(Ws(f)){const $=f.length,x=f[0]===null?1:0;p=f[x],m=Vo(p);for(let w=x;w<$&&f[w]!==null;w++)g?fh(Vo(f[w])===g):g=Vo(f[w])}else g=Vo(f);if(m!==g)if(qy(m)&&qy(g)){const $=d.get();typeof $=="string"&&d.set(parseFloat($)),typeof f=="string"?t[u]=parseFloat(f):Array.isArray(f)&&g===U&&(t[u]=f.map(parseFloat))}else m!=null&&m.transform&&(g!=null&&g.transform)&&(p===0||f===0)?p===0?d.set(g.transform(p)):t[u]=m.transform(f):(l||(a=z3(e),l=!0),c.push(u),o[u]=o[u]!==void 0?o[u]:t[u],d.jump(f))}),c.length){const u=c.indexOf("height")>=0?window.pageYOffset:null,d=P3(t,e,c);return a.length&&a.forEach(([p,m])=>{e.getValue(p).set(m)}),e.render(),Fc&&u!==null&&window.scrollTo({top:u}),{target:d,transitionEnd:o}}else return{target:t,transitionEnd:o}};function F3(e,t,n,o){return S3(t)?A3(e,t,n,o):{target:t,transitionEnd:o}}const L3=(e,t,n,o)=>{const i=b3(e,t,o);return t=i.target,o=i.transitionEnd,F3(e,t,n,o)},Xp={current:null},SE={current:!1};function D3(){if(SE.current=!0,!!Fc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Xp.current=e.matches;e.addListener(t),t()}else Xp.current=!1}function N3(e,t,n){const{willChange:o}=t;for(const i in t){const a=t[i],l=n[i];if(ct(a))e.addValue(i,a),Gs(o)&&o.add(i);else if(ct(l))e.addValue(i,bo(a,{owner:e})),Gs(o)&&o.remove(i);else if(l!==a)if(e.hasValue(i)){const c=e.getValue(i);!c.hasAnimated&&c.set(a)}else{const c=e.getStaticValue(i);e.addValue(i,bo(c!==void 0?c:a,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const t0=new WeakMap,TE=Object.keys(Qi),M3=TE.length,n0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],R3=ah.length;class I3{constructor({parent:t,props:n,presenceContext:o,reducedMotionConfig:i,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>fe.render(this.render,!1,!0);const{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=o,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.isControllingVariants=Dc(n),this.isVariantNode=u1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{});for(const m in p){const f=p[m];c[m]!==void 0&&ct(f)&&(f.set(c[m],!1),Gs(d)&&d.add(m))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,t0.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,o)=>this.bindToMotionValue(o,n)),SE.current||D3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Xp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){t0.delete(this.current),this.projection&&this.projection.unmount(),mn(this.notifyUpdate),mn(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const o=vr.has(t),i=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&fe.update(this.notifyUpdate,!1,!0),o&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},o,i,a){let l,c;for(let u=0;u<M3;u++){const d=TE[u],{isEnabled:p,Feature:m,ProjectionNode:f,MeasureLayout:g}=Qi[d];f&&(l=f),p(n)&&(!this.features[d]&&m&&(this.features[d]=new m(this)),g&&(c=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&l){this.projection=new l(this.latestValues,this.parent&&this.parent.projection);const{layoutId:u,layout:d,drag:p,dragConstraints:m,layoutScroll:f,layoutRoot:g}=n;this.projection.setOptions({layoutId:u,layout:d,alwaysMeasureLayout:!!p||m&&ro(m),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof d=="string"?d:"both",initialPromotionConfig:a,layoutScroll:f,layoutRoot:g})}return c}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ce()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let o=0;o<n0.length;o++){const i=n0[o];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a=t["on"+i];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=N3(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const o=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(o.initial=this.props.initial),o}const n={};for(let o=0;o<R3;o++){const i=ah[o],a=this.props[i];(Yi(a)||a===!1)&&(n[i]=a)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let o=this.values.get(t);return o===void 0&&n!==void 0&&(o=bo(n,{owner:this}),this.addValue(t,o)),o}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:o}=this.props,i=typeof o=="string"||typeof o=="object"?(n=ph(this.props,o))===null||n===void 0?void 0:n[t]:void 0;if(o&&i!==void 0)return i;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!ct(a)?a:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new bh),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class CE extends I3{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:o}){delete n[t],delete o[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...o},{transformValues:i},a){let l=ez(o,t||{},this);if(i&&(n&&(n=i(n)),o&&(o=i(o)),l&&(l=i(l))),a){qC(this,o,l);const c=L3(this,o,l,n);n=c.transitionEnd,o=c.target}return{transition:t,transitionEnd:n,...o}}}function B3(e){return window.getComputedStyle(e)}class V3 extends CE{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(vr.has(n)){const o=vh(n);return o&&o.default||0}else{const o=B3(t),i=(h1(n)?o.getPropertyValue(n):o[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return fE(t,n)}build(t,n,o,i){sh(t,n,o,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return mh(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ct(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,o,i){E1(t,n,o,i)}}class O3 extends CE{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(vr.has(n)){const o=vh(n);return o&&o.default||0}return n=w1.has(n)?n:oh(n),t.getAttribute(n)}measureInstanceViewportBox(){return Ce()}scrapeMotionValuesFromProps(t,n){return k1(t,n)}build(t,n,o,i){uh(t,n,o,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,o,i){b1(t,n,o,i)}mount(t){this.isSVGTag=dh(t.tagName),super.mount(t)}}const j3=(e,t)=>lh(e)?new O3(t,{enableHardwareAcceleration:!1}):new V3(t,{enableHardwareAcceleration:!0}),W3={layout:{ProjectionNode:bE,MeasureLayout:gE}},_3={...hz,...MT,...x3,...W3},ge=_2((e,t)=>wT(e,t,_3,j3));var zE={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r0=r.createContext&&r.createContext(zE),Vn=globalThis&&globalThis.__assign||function(){return Vn=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Vn.apply(this,arguments)},U3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]]);return n};function PE(e){return e&&e.map(function(t,n){return r.createElement(t.tag,Vn({key:n},t.attr),PE(t.child))})}function Kn(e){return function(t){return r.createElement(H3,Vn({attr:Vn({},e.attr)},t),PE(e.child))}}function H3(e){var t=function(n){var o=e.attr,i=e.size,a=e.title,l=U3(e,["attr","size","title"]),c=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),r.createElement("svg",Vn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,l,{className:u,style:Vn(Vn({color:e.color||n.color},n.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return r0!==void 0?r.createElement(r0.Consumer,null,function(n){return t(n)}):t(zE)}function AE(e){return Kn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(e)}function G3(e){return Kn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"}}]})(e)}function Y3(e){return Kn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"}}]})(e)}function Q3(e){return Kn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"}}]})(e)}function K3(e){return Kn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function X3(e){return Kn({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z"}}]})(e)}function J3(e){return Kn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"}}]})(e)}function q3(e){return Kn({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(e)}const Z3=[{id:1,icon:r.createElement(J3,null),title:"Custom QR Codes",description:"Generate unique QR codes for shows, merch, or special offers. Fans can scan and support you instantly."},{id:2,icon:r.createElement(X3,null),title:"Next-Day Deposits",description:"Get paid quickly with deposits to your account the next business day. No more waiting for payouts."},{id:3,icon:r.createElement(q3,null),title:"Fan Relationship Tools",description:"Build lasting connections with supporters through personalized messaging and exclusive content."},{id:4,icon:r.createElement(Y3,null),title:"Performance Analytics",description:"Track support patterns, fan demographics, and engagement metrics to optimize your strategy."},{id:5,icon:r.createElement(G3,null),title:"Event Management",description:"Create and promote your shows, track attendance, and measure performance all in one place."},{id:6,icon:r.createElement(K3,null),title:"Secure Transactions",description:"Bank-level security ensures all transactions are protected, giving you and your fans peace of mind."}],e5=()=>r.createElement(t5,null,r.createElement(n5,null,r.createElement(r5,null,r.createElement(o5,null,r.createElement(i5,null,"Everything You Need to Succeed"),r.createElement(a5,null,"TrueFans CONNECT™ provides all the tools independent artists need to build sustainable careers through direct fan support.")),r.createElement(l5,null,Z3.map((e,t)=>r.createElement(FE,{key:e.id,as:ge.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.5,delay:t*.1},whileHover:{y:-5,boxShadow:"0 10px 30px rgba(0,0,0,0.1)",background:"linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)"}},r.createElement(s5,null,e.icon),r.createElement(c5,null,r.createElement(u5,null,e.title),r.createElement(d5,null,e.description)))))))),t5=s.section`
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
`,n5=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: 0 ${({theme:e})=>e.space.md};
  }
`,r5=s.div`
  padding: ${({theme:e})=>e.space["5xl"]} 0;
`,o5=s.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({theme:e})=>e.space["3xl"]};
`,i5=s.h2`
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
`,a5=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fontSizes.lg};
  }
`,l5=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`,FE=s.div`
  display: flex;
  align-items: flex-start;
  padding: ${({theme:e})=>e.space.xl};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: all 0.3s ease;
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
`,s5=s.div`
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
  
  ${FE}:hover & {
    transform: scale(1.1);
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}20, ${({theme:e})=>e.colors.primary}30);
  }
`,c5=s.div`
  flex: 1;
`,u5=s.h3`
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  margin-bottom: ${({theme:e})=>e.space.sm};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
`,d5=s.p`
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
  font-size: ${({theme:e})=>e.fontSizes.md};
`,o0=[{id:1,title:"Create Your Artist Profile",description:"Sign up and build your artist profile in minutes. Connect your payment account for same-day deposits.",image:"https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg"},{id:2,title:"Generate Your QR Codes",description:"Create custom QR codes for each show, merch item, or special offer. Each code is tracked for analytics.",image:"https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg"},{id:3,title:"Display at Shows & Online",description:"Show your QR code on stage, merch table, or share digitally. Fans scan to support you instantly.",image:"https://images.pexels.com/photos/2747448/pexels-photo-2747448.jpeg"},{id:4,title:"Build Lasting Fan Relationships",description:"Use our tools to nurture relationships with fans who've supported you. Send exclusive content and offers.",image:"https://images.pexels.com/photos/3984827/pexels-photo-3984827.jpeg"}],m5=()=>r.createElement(p5,null,r.createElement(f5,null,r.createElement(h5,null,r.createElement(g5,null,"How It Works"),r.createElement(y5,null,"Get started in minutes and start receiving direct fan support at your very next show.")),r.createElement(v5,null,o0.map((e,t)=>r.createElement($5,{key:e.id,as:ge.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,delay:t*.2}},r.createElement(x5,null,r.createElement(E5,null,e.id),t<o0.length-1&&r.createElement(w5,null)),r.createElement(b5,null,r.createElement(LE,null,r.createElement(k5,{src:e.image,alt:e.title}),r.createElement(S5,null)),r.createElement(T5,null,r.createElement(C5,null,e.title),r.createElement(z5,null,e.description)))))))),p5=s.section`
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
`,f5=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: 0 ${({theme:e})=>e.space.md};
  }
`,h5=s.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({theme:e})=>e.space["3xl"]};
`,g5=s.h2`
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
`,y5=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.warmCream||"#F5F5DC"};
  line-height: 1.6;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fontSizes.lg};
  }
`,v5=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space["4xl"]};
  max-width: 900px;
  margin: 0 auto;
`,$5=s.div`
  display: flex;
  align-items: flex-start;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,x5=s.div`
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
`,E5=s.div`
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
`,w5=s.div`
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
`,b5=s.div`
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
`,LE=s.div`
  width: 200px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
    height: 200px;
  }
`,k5=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${LE}:hover & {
    transform: scale(1.05);
  }
`,S5=s.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
  }
`,T5=s.div`
  padding: ${({theme:e})=>e.space.xl};
  flex: 1;
`,C5=s.h3`
  color: ${({theme:e})=>e.colors.revolutionaryGold||"#FFD700"};
  margin-bottom: ${({theme:e})=>e.space.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  font-size: ${({theme:e})=>e.fontSizes.xl};
`,z5=s.p`
  color: ${({theme:e})=>e.colors.warmCream||"#F5F5DC"};
  line-height: 1.6;
  font-size: ${({theme:e})=>e.fontSizes.md};
`,P5=["Get paid instantly at shows","Build direct fan relationships","Keep 80% of all donations","Access detailed fan analytics","Create custom QR codes for events","Receive next-day deposits"],A5=()=>r.createElement(F5,null,r.createElement(L5,null,r.createElement(D5,null,r.createElement(N5,null,r.createElement(M5,null,"Ready To Transform Your Music Career?"),r.createElement(R5,null,"Join thousands of independent artists who are taking control of their careers and building sustainable income streams with TrueFans CONNECT™."),r.createElement(I5,null,P5.map((e,t)=>r.createElement(B5,{key:t,as:ge.li,initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.4,delay:t*.1},viewport:{once:!0}},r.createElement(V5,null,r.createElement(Q3,null)),r.createElement(O5,null,e))))),r.createElement(j5,null,r.createElement(W5,{as:ge.div,whileHover:{scale:1.05},whileTap:{scale:.95}},r.createElement(DE,{to:"/artist-signup"},r.createElement("span",null,"Join as an Artist"),r.createElement(_5,null,r.createElement(AE,null)))),r.createElement(U5,null,"Already have an account? ",r.createElement(H5,{to:"/login"},"Log in")))))),F5=s.section`
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
`,L5=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: 0 ${({theme:e})=>e.space.md};
  }
`,D5=s.div`
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
`,N5=s.div`
  flex: 2;
`,M5=s.h2`
  font-size: clamp(1.75rem, 3vw, ${({theme:e})=>e.fontSizes["3xl"]});
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  margin-bottom: ${({theme:e})=>e.space.md};
  line-height: 1.2;
`,R5=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.xl};
  line-height: 1.6;
`,I5=s.ul`
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
`,B5=s.li`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.space.sm};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    justify-content: flex-start;
    text-align: left;
  }
`,V5=s.span`
  color: ${({theme:e})=>e.colors.successGreen};
  font-size: ${({theme:e})=>e.fontSizes.md};
  flex-shrink: 0;
`,O5=s.span`
  color: ${({theme:e})=>e.colors.darkText};
  font-size: ${({theme:e})=>e.fontSizes.md};
`,j5=s.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,W5=s.div`
  width: 100%;
  margin-bottom: ${({theme:e})=>e.space.md};
`,DE=s(ne)`
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
`,_5=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  ${DE}:hover & {
    transform: translateX(4px);
  }
`,U5=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,H5=s(ne)`
  color: ${({theme:e})=>e.colors.primary};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primaryDark};
    text-decoration: underline;
  }
`,G5=()=>{const e=()=>{window.scrollTo(0,0)};return r.createElement(Y5,null,r.createElement(Q5,null,r.createElement(K5,null,r.createElement(X5,null,r.createElement(J5,null,"Choose Your Future"),r.createElement(q5,null,"The music industry doesn't have to be a struggle. With TrueFans CONNECT™, you can build a sustainable career on your own terms. Our platform gives you the tools to connect directly with your fans, get paid what you deserve, and focus on what matters most—creating amazing music."),r.createElement(Z5,null,r.createElement(Fa,null,r.createElement(La,null),r.createElement(Da,null,"Instant payments at shows via custom QR codes")),r.createElement(Fa,null,r.createElement(La,null),r.createElement(Da,null,"Direct fan communication without algorithm interference")),r.createElement(Fa,null,r.createElement(La,null),r.createElement(Da,null,"Detailed analytics to understand your audience")),r.createElement(Fa,null,r.createElement(La,null),r.createElement(Da,null,"Next-day deposits to your bank account"))),r.createElement(e4,{as:ge.div,whileHover:{scale:1.05},whileTap:{scale:.95}},r.createElement(NE,{to:"/artist-signup",onClick:e},r.createElement("span",null,"Choose Your Future"),r.createElement(t4,null,r.createElement(AE,null))))),r.createElement(ME,null,r.createElement(n4,{src:"https://images.pexels.com/photos/7520935/pexels-photo-7520935.jpeg",alt:"Artist performing"}),r.createElement(r4,null),r.createElement(o4,null,'"TrueFans CONNECT™ helped me quit my day job and focus on music full-time."',r.createElement(i4,null,"— Jamie Chen, Indie Artist"))))))},Y5=s.section`
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
`,Q5=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: 0 ${({theme:e})=>e.space.md};
  }
`,K5=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.space["3xl"]};
  align-items: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.space.xl};
  }
`,X5=s.div`
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    order: 2;
  }
`,J5=s.h2`
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
`,q5=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.xl};
  line-height: 1.6;
`,Z5=s.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({theme:e})=>e.space.xl};
`,Fa=s.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({theme:e})=>e.space.md};
`,La=s.span`
  width: 12px;
  height: 12px;
  background-color: ${({theme:e})=>e.colors.secondary};
  border-radius: 50%;
  margin-top: 6px;
  margin-right: ${({theme:e})=>e.space.md};
  flex-shrink: 0;
`,Da=s.span`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.5;
`,e4=s.div`
  display: inline-block;
`,NE=s(ne)`
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
`,t4=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  ${NE}:hover & {
    transform: translateX(4px);
  }
`,ME=s.div`
  position: relative;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    order: 1;
    max-width: 500px;
    margin: 0 auto;
  }
`,n4=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ME}:hover & {
    transform: scale(1.05);
  }
`,r4=s.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  z-index: 2;
`,o4=s.div`
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
`,i4=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-style: normal;
  margin-top: ${({theme:e})=>e.space.xs};
  opacity: 0.8;
`,a4=()=>r.createElement(l4,{as:ge.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},r.createElement(Kt,{size:"xl"}),r.createElement(s4,null,r.createElement(qt,null,r.createElement(c4,null,r.createElement(u4,null,"Right Now Money and Fans Forever"),r.createElement(d4,null,"TrueFans CONNECT™ helps independent musicians get paid instantly at shows and build lasting relationships with their most supportive fans. Stop waiting for streaming pennies and start earning what you deserve."),r.createElement(m4,null,r.createElement(p4,{as:ne,to:"/artist-signup"},"Join as an Artist"),r.createElement(f4,{as:ne,to:"/artist-profile"},"View Demo Artist"))),r.createElement(RE,null,r.createElement(h4,{src:"https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg",alt:"Artist performing"}),r.createElement(g4,null)))),r.createElement(Kt,{size:"xxl"}),r.createElement(y4,null,r.createElement(qt,null,r.createElement(v4,null,"The Music Industry Is Broken. We're Fixing It."),r.createElement($4,null,r.createElement(Fu,null,r.createElement(Lu,null,"$0.004"),r.createElement(Du,null,"Average streaming payout per play")),r.createElement(Fu,null,r.createElement(Lu,null,"250,000"),r.createElement(Du,null,"Streams needed to earn minimum wage")),r.createElement(Fu,null,r.createElement(Lu,null,"80%"),r.createElement(Du,null,"Of your donation goes directly to artists"))),r.createElement(x4,null,"TrueFans CONNECT™ puts the power back in your hands. Get paid instantly at shows, build direct relationships with your supporters, and create a sustainable income stream that doesn't depend on algorithms or gatekeepers."))),r.createElement(Kt,{size:"xxl"}),r.createElement(qt,null,r.createElement(E4,null,r.createElement(e5,null))),r.createElement(Kt,{size:"xxl"}),r.createElement(qt,null,r.createElement(w4,null,r.createElement(m5,null))),r.createElement(Kt,{size:"xxl"}),r.createElement(qt,null,r.createElement(b4,null,r.createElement(G5,null))),r.createElement(Kt,{size:"xxl"}),r.createElement(k4,null,r.createElement(qt,null,r.createElement(S4,null,"What Artists Are Saying"),r.createElement(T4,null,r.createElement(Nu,{as:ge.div,whileHover:{y:-8,boxShadow:"0 12px 30px rgba(0,0,0,0.12)"},transition:{duration:.3}},r.createElement(Mu,null,'"TrueFans CONNECT has been a game-changer for my music career. The direct support from fans has allowed me to record my new EP without label backing. The QR codes at my merch table bring in an extra $200-300 per show!"'),r.createElement(Ru,null,r.createElement(Iu,{src:"https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg"}),r.createElement(Bu,null,r.createElement(Vu,null,"Sarah Johnson"),r.createElement(Ou,null,"Jazz Vocalist")))),r.createElement(Nu,{as:ge.div,whileHover:{y:-8,boxShadow:"0 12px 30px rgba(0,0,0,0.12)"},transition:{duration:.3}},r.createElement(Mu,null,`"The donation QR codes are perfect for live shows. I've seen a significant increase in support since I started displaying them at my merch table. The best part is getting paid the same day - no more waiting weeks for payment processing."`),r.createElement(Ru,null,r.createElement(Iu,{src:"https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"}),r.createElement(Bu,null,r.createElement(Vu,null,"Marcus Rivera"),r.createElement(Ou,null,"Indie Rock Artist")))),r.createElement(Nu,{as:ge.div,whileHover:{y:-8,boxShadow:"0 12px 30px rgba(0,0,0,0.12)"},transition:{duration:.3}},r.createElement(Mu,null,`"As a small band, we appreciate the 80/20 split. It's much more fair than other platforms, and the donation system is incredibly easy to use. The fan relationship tools have helped us build a dedicated community that supports us consistently."`),r.createElement(Ru,null,r.createElement(Iu,{src:"https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg"}),r.createElement(Bu,null,r.createElement(Vu,null,"Emily Chen"),r.createElement(Ou,null,"Folk Band Lead"))))))),r.createElement(Kt,{size:"xxl"}),r.createElement(qt,null,r.createElement(C4,null,r.createElement(z4,null,"How We Compare"),r.createElement(P4,null,r.createElement(A4,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Feature"),r.createElement("th",null,"TrueFans CONNECT™"),r.createElement("th",null,"Streaming Platforms"),r.createElement("th",null,"Traditional Tipping"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,"Artist Payout"),r.createElement("td",null,"80% of all donations"),r.createElement("td",null,"$0.003-$0.005 per stream"),r.createElement("td",null,"Variable, often shared with venue")),r.createElement("tr",null,r.createElement("td",null,"Payment Speed"),r.createElement("td",null,"Next day deposits"),r.createElement("td",null,"30-90 days"),r.createElement("td",null,"Immediate but cash only")),r.createElement("tr",null,r.createElement("td",null,"Fan Data"),r.createElement("td",null,"Detailed analytics"),r.createElement("td",null,"Limited or none"),r.createElement("td",null,"None")),r.createElement("tr",null,r.createElement("td",null,"Relationship Building"),r.createElement("td",null,"Direct communication tools"),r.createElement("td",null,"None or algorithm-dependent"),r.createElement("td",null,"In-person only")),r.createElement("tr",null,r.createElement("td",null,"Setup Difficulty"),r.createElement("td",null,"Simple, smooth and one-time"),r.createElement("td",null,"Complex distribution required"),r.createElement("td",null,"No setup, no tracking"))))))),r.createElement(Kt,{size:"xxl"}),r.createElement(qt,null,r.createElement(F4,null,r.createElement(A5,null))),r.createElement(Kt,{size:"xl"})),l4=s.main`
  width: 100%;
  overflow-x: hidden;
  background-color: ${({theme:e})=>e.colors.background};
`,qt=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: 0 ${({theme:e})=>e.space.md};
  }
`,Kt=s.div`
  height: ${({size:e,theme:t})=>e==="xxl"?"160px":e==="xl"?"120px":e==="lg"?"80px":"60px"};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    height: ${({size:e})=>e==="xxl"?"120px":e==="xl"?"100px":e==="lg"?"60px":"40px"};
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    height: ${({size:e})=>e==="xxl"?"100px":e==="xl"?"80px":e==="lg"?"40px":"30px"};
  }
`,s4=s.section`
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
  
  ${qt} {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.space.xl};
    position: relative;
    z-index: 1;
    
    @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
      flex-direction: column;
    }
  }
`,c4=s.div`
  flex: 1;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    text-align: center;
    margin-bottom: ${({theme:e})=>e.space.xl};
  }
`,u4=s.h1`
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
`,d4=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.lg};
  line-height: 1.6;
  max-width: 600px;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    margin-left: auto;
    margin-right: auto;
  }
`,m4=s.div`
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
`,p4=s(W)`
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
`,f4=s(W)`
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
`,RE=s.div`
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
`,h4=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${RE}:hover & {
    transform: scale(1.05);
  }
`,g4=s.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 50%);
  z-index: 2;
`,y4=s.section`
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
`,v4=s.h2`
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
`,$4=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.space.xl};
  margin-bottom: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.space.lg};
  }
`,Fu=s.div`
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
`,Lu=s.div`
  font-size: clamp(2rem, 4vw, ${({theme:e})=>e.fontSizes["4xl"]});
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.revolutionaryGold};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Du=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.warmCream};
  line-height: 1.4;
`,x4=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.warmCream};
`,E4=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.xl};
  box-shadow: ${({theme:e})=>e.shadows.lg};
  overflow: hidden;
  padding: ${({theme:e})=>e.space["4xl"]} 0;
`,w4=s.div`
  border-radius: ${({theme:e})=>e.radii.xl};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.lg};
  padding: ${({theme:e})=>e.space["4xl"]} 0;
`,b4=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.xl};
  box-shadow: ${({theme:e})=>e.shadows.lg};
  overflow: hidden;
  padding: ${({theme:e})=>e.space["4xl"]} 0;
`,k4=s.section`
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
`,S4=s.h2`
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
`,T4=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({theme:e})=>e.space.xl};
`,Nu=s.div`
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
`,Mu=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-style: italic;
  flex: 1;
  position: relative;
  z-index: 1;
  padding-top: ${({theme:e})=>e.space.md};
`,Ru=s.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({theme:e})=>e.colors.lightGray};
  padding-top: ${({theme:e})=>e.space.md};
`,Iu=s.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
  border: 3px solid ${({theme:e})=>e.colors.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,Bu=s.div``,Vu=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Ou=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,C4=s.section`
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
`,z4=s.h2`
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
`,P4=s.div`
  overflow-x: auto;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadows.lg};
`,A4=s.table`
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
`,F4=s.div`
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.passionateCrimson}10 0%, ${({theme:e})=>e.colors.secondary}20 100%);
  padding: ${({theme:e})=>e.space["4xl"]} 0;
  border-radius: ${({theme:e})=>e.radii.xl};
  box-shadow: ${({theme:e})=>e.shadows.lg};
  overflow: hidden;
`,L4=()=>r.createElement(D4,{as:ge.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},r.createElement(N4,null,r.createElement(i0,null,r.createElement(M4,null,r.createElement(R4,null,"About TrueFans CONNECT™"),r.createElement(I4,null,"Revolutionizing the way independent artists connect with fans and venues")))),r.createElement(B4,null,r.createElement(i0,null,r.createElement(V4,null,r.createElement(O4,null,r.createElement(Dt,null,"Our Vision"),r.createElement(j4,null,r.createElement(_4,{src:"https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:"Artist performing"}),r.createElement(W4,null,r.createElement("p",null,"At TrueFans CONNECT™, we believe that talented artists deserve to be supported directly by their fans, without intermediaries taking the majority of their earnings. Our platform is built on the principle that the relationship between artists and their supporters should be direct, transparent, and mutually beneficial."),r.createElement("p",null,"We're creating a revolutionary ecosystem where independent artists can thrive, venues can discover new talent, and fans can directly support the creators they love. Our mission is to democratize the music industry by putting the power back in the hands of those who create and appreciate art.")))),r.createElement(U4,null,r.createElement(Dt,null,"Our Story"),r.createElement(H4,null,r.createElement(Y4,{src:"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:"Team collaboration"}),r.createElement(G4,null,r.createElement("p",null,"TrueFans CONNECT™ was born from a simple observation: talented independent artists struggle to make a living from their art, while large platforms and intermediaries profit from their work. Our founders, themselves musicians and industry professionals, experienced these challenges firsthand."),r.createElement("p",null,"In 2023, we set out to create a solution that would address these inequities. We built TrueFans CONNECT™ as a platform that prioritizes fair compensation, direct connections, and sustainable growth for artists. Since then, we've been on a mission to transform how independent artists build their careers and connect with their supporters.")))),r.createElement(Q4,null,r.createElement(Dt,null,"What Makes Us Different"),r.createElement(K4,null,r.createElement(Na,null,r.createElement(Ma,null,"💰"),r.createElement(Ra,null,"Artist-First Revenue Split"),r.createElement(Ia,null,"We offer an industry-leading 80/20 revenue split in favor of artists, ensuring they keep the majority of what they earn.")),r.createElement(Na,null,r.createElement(Ma,null,"🔄"),r.createElement(Ra,null,"Two-Tier Affiliate Program"),r.createElement(Ia,null,"Artists and venues earn 2.5% from direct referrals and another 2.5% from second-level referrals, creating passive income opportunities.")),r.createElement(Na,null,r.createElement(Ma,null,"🏢"),r.createElement(Ra,null,"Venue Integration"),r.createElement(Ia,null,"We connect artists with venues through customizable submission forms, creating opportunities for live performances.")),r.createElement(Na,null,r.createElement(Ma,null,"🎯"),r.createElement(Ra,null,"Multiple Donation Methods"),r.createElement(Ia,null,"Artists can receive support through embed codes, QR codes, and direct donation links, maximizing their earning potential.")))),r.createElement(X4,null,r.createElement(Dt,null,"Our Values"),r.createElement(J4,null,r.createElement(Ba,null,r.createElement(Va,null,"⚖️"),r.createElement(Oa,null,r.createElement(ja,null,"Fairness"),r.createElement(Wa,null,"We believe in fair compensation for artists and transparent business practices."))),r.createElement(Ba,null,r.createElement(Va,null,"🤝"),r.createElement(Oa,null,r.createElement(ja,null,"Community"),r.createElement(Wa,null,"We foster meaningful connections between artists, fans, and venues."))),r.createElement(Ba,null,r.createElement(Va,null,"🚀"),r.createElement(Oa,null,r.createElement(ja,null,"Innovation"),r.createElement(Wa,null,"We continuously evolve our platform to better serve the needs of independent artists."))),r.createElement(Ba,null,r.createElement(Va,null,"🔒"),r.createElement(Oa,null,r.createElement(ja,null,"Trust"),r.createElement(Wa,null,"We build trust through reliability, security, and consistent delivery on our promises."))))),r.createElement(q4,null,r.createElement(Dt,null,"Leadership Team"),r.createElement(Z4,null,r.createElement(_a,null,r.createElement(Ua,{src:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",alt:"John Smith"}),r.createElement(Ha,null,r.createElement(Ga,null,"John Smith"),r.createElement(Ya,null,"Co-Founder & CEO"))),r.createElement(_a,null,r.createElement(Ua,{src:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",alt:"Sarah Johnson"}),r.createElement(Ha,null,r.createElement(Ga,null,"Sarah Johnson"),r.createElement(Ya,null,"Co-Founder & CTO"))),r.createElement(_a,null,r.createElement(Ua,{src:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",alt:"Michael Chen"}),r.createElement(Ha,null,r.createElement(Ga,null,"Michael Chen"),r.createElement(Ya,null,"Head of Artist Relations"))),r.createElement(_a,null,r.createElement(Ua,{src:"https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",alt:"Emily Rodriguez"}),r.createElement(Ha,null,r.createElement(Ga,null,"Emily Rodriguez"),r.createElement(Ya,null,"Head of Venue Partnerships"))))),r.createElement(eP,null,r.createElement(Dt,null,"TrueFans CONNECT™ Impact"),r.createElement(tP,null,r.createElement(Qa,null,r.createElement(Ka,null,"10,000+"),r.createElement(Xa,null,"Artists on the platform")),r.createElement(Qa,null,r.createElement(Ka,null,"500+"),r.createElement(Xa,null,"Venue partners")),r.createElement(Qa,null,r.createElement(Ka,null,"$2M+"),r.createElement(Xa,null,"Paid to artists")),r.createElement(Qa,null,r.createElement(Ka,null,"80%"),r.createElement(Xa,null,"Revenue to artists")))),r.createElement(nP,null,r.createElement(Dt,null,"What Artists Say"),r.createElement(rP,null,r.createElement(oP,null,'"TrueFans CONNECT™ has completely transformed my career as an independent artist. The direct support from fans and the venue connections have allowed me to focus on creating music full-time."'),r.createElement(iP,null,r.createElement(aP,{src:"https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg",alt:"Marcus Rivera"}),r.createElement(lP,null,r.createElement(sP,null,"Marcus Rivera"),r.createElement(cP,null,"Independent Artist"))))),r.createElement(uP,null,r.createElement(Dt,null,"Get in Touch"),r.createElement(dP,null,r.createElement(ju,null,r.createElement(Wu,null,"📧"),r.createElement(_u,null,"info@truefans.connect")),r.createElement(ju,null,r.createElement(Wu,null,"📞"),r.createElement(_u,null,"(555) 123-4567")),r.createElement(ju,null,r.createElement(Wu,null,"📍"),r.createElement(_u,null,"123 Music Avenue, Nashville, TN 37203"))),r.createElement(mP,{as:ne,to:"/contact"},"Contact Us")),r.createElement(pP,null,r.createElement(Dt,null,"Join Our Movement"),r.createElement(fP,null,r.createElement(hP,null,r.createElement("p",null,"Whether you're an artist looking to connect with fans, a venue seeking fresh talent, or a music lover wanting to support independent creators, TrueFans CONNECT™ offers a platform where everyone benefits."),r.createElement("p",null,"Join us in revolutionizing the music industry and creating a more sustainable future for independent artists.")),r.createElement(gP,null,r.createElement(a0,{as:ne,to:"/artist-signup"},"Sign Up as an Artist"),r.createElement(a0,{as:ne,to:"/venue-signup",variant:"secondary"},"Register Your Venue")))))))),D4=s.main`
  width: 100%;
`,i0=s.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,N4=s.section`
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
`,M4=s.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.space.xl} 0;
`,R4=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["4xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.md};
  letter-spacing: -0.5px;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  }
`,I4=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  opacity: 0.9;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fontSizes.lg};
  }
`,B4=s.section`
  padding: ${({theme:e})=>e.space["2xl"]} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,V4=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space["2xl"]};
`,Dt=s.h2`
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
`,O4=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,j4=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
`,W4=s.div`
  p {
    font-size: ${({theme:e})=>e.fontSizes.lg};
    color: ${({theme:e})=>e.colors.lightText};
    line-height: 1.6;
    margin-bottom: ${({theme:e})=>e.space.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,_4=s.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,U4=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,H4=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
`,G4=s.div`
  p {
    font-size: ${({theme:e})=>e.fontSizes.lg};
    color: ${({theme:e})=>e.colors.lightText};
    line-height: 1.6;
    margin-bottom: ${({theme:e})=>e.space.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,Y4=s.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,Q4=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,K4=s.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Na=s.div`
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
`,Ma=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Ra=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Ia=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,X4=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,J4=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,Ba=s.div`
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
`,Va=s.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.colors.primaryLight};
  border-radius: 50%;
`,Oa=s.div`
  flex: 1;
`,ja=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Wa=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,q4=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,Z4=s.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,_a=s.div`
  text-align: center;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
  }
`,Ua=s.img`
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
`,Ha=s.div``,Ga=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Ya=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,eP=s.section`
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.trustworthyNavy} 0%, ${({theme:e})=>e.colors.trustworthyNavyLight} 100%);
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
  color: white;
  
  ${Dt} {
    color: white;
    
    &::after {
      background-color: ${({theme:e})=>e.colors.primary};
    }
  }
`,tP=s.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Qa=s.div`
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: ${({theme:e})=>e.space.lg};
  border-radius: ${({theme:e})=>e.radii.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.15);
  }
`,Ka=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.primary};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Xa=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  opacity: 0.9;
`,nP=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,rP=s.div`
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
`,oP=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-style: italic;
  position: relative;
  z-index: 1;
  padding-top: ${({theme:e})=>e.space.md};
  text-align: center;
`,iP=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({theme:e})=>e.colors.lightGray};
  padding-top: ${({theme:e})=>e.space.md};
`,aP=s.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
  border: 2px solid ${({theme:e})=>e.colors.primary};
`,lP=s.div``,sP=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,cP=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,uP=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
  text-align: center;
`,dP=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.lg};
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`,ju=s.div`
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
`,Wu=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.colors.primaryLight};
  border-radius: 50%;
  flex-shrink: 0;
`,_u=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  text-align: left;
`,mP=s(W)`
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
`,pP=s.section`
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.trustworthyNavy} 0%, ${({theme:e})=>e.colors.trustworthyNavyLight} 100%);
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
  
  ${Dt} {
    color: white;
    
    &::after {
      background-color: ${({theme:e})=>e.colors.primary};
    }
  }
`,fP=s.div`
  text-align: center;
`,hP=s.div`
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
`,gP=s.div`
  display: flex;
  justify-content: center;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`,a0=s(W)`
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
`,yP=()=>{const[e,t]=b.useState("featured"),[n,o]=b.useState(""),[i,a]=b.useState("all"),l=na(),c=[{id:1,name:"Eliza Johnson",genre:"Folk",location:"Nashville, TN",image:"https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",supporters:87,totalDonations:"$1,245.00",featured:!0,bio:"Indie folk artist with a passion for storytelling through music."},{id:2,name:"Marcus Rivera",genre:"Hip Hop",location:"Atlanta, GA",image:"https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg",supporters:124,totalDonations:"$2,180.50",featured:!0,bio:"Urban poet and producer creating authentic hip hop with a message."},{id:3,name:"Emily Chen",genre:"Electronic",location:"Los Angeles, CA",image:"https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",supporters:56,totalDonations:"$895.25",featured:!1,bio:"Electronic music producer pushing boundaries with innovative sounds."},{id:4,name:"David Williams",genre:"Rock",location:"Chicago, IL",image:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",supporters:92,totalDonations:"$1,567.75",featured:!0,bio:"Rock guitarist and vocalist with a classic sound and modern edge."},{id:5,name:"Sophia Martinez",genre:"Jazz",location:"New Orleans, LA",image:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",supporters:43,totalDonations:"$720.00",featured:!1,bio:"Jazz vocalist and composer blending traditional and contemporary styles."},{id:6,name:"James Wilson",genre:"Country",location:"Austin, TX",image:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",supporters:78,totalDonations:"$1,120.50",featured:!1,bio:"Country singer-songwriter with authentic roots and modern appeal."},{id:7,name:"Olivia Taylor",genre:"Pop",location:"New York, NY",image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",supporters:112,totalDonations:"$1,890.25",featured:!0,bio:"Pop vocalist and songwriter crafting catchy melodies with depth."},{id:8,name:"Michael Brown",genre:"R&B",location:"Philadelphia, PA",image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",supporters:67,totalDonations:"$950.75",featured:!1,bio:"R&B artist with soulful vocals and heartfelt lyrics."}],u=c.filter(m=>{const f=m.name.toLowerCase().includes(n.toLowerCase())||m.genre.toLowerCase().includes(n.toLowerCase())||m.location.toLowerCase().includes(n.toLowerCase())||m.bio.toLowerCase().includes(n.toLowerCase()),g=i==="all"||m.genre.toLowerCase()===i.toLowerCase(),$=e==="all"||e==="featured"&&m.featured;return f&&g&&$}),d=["all",...new Set(c.map(m=>m.genre.toLowerCase()))],p=m=>{l(`/artist-profile/${m}?support=true`)};return r.createElement(vP,{as:ge.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},r.createElement($P,null,r.createElement(jo,null,r.createElement(xP,null,r.createElement(EP,null,"Discover Independent Artists"),r.createElement(wP,null,"Support talented creators directly and help them thrive"),r.createElement(bP,null,r.createElement(kP,{type:"text",placeholder:"Search by name, genre, or location...",value:n,onChange:m=>o(m.target.value)}),r.createElement(SP,{value:i,onChange:m=>a(m.target.value)},d.map(m=>r.createElement("option",{key:m,value:m},m.charAt(0).toUpperCase()+m.slice(1)))))))),r.createElement(TP,null,r.createElement(jo,null,r.createElement(CP,null,r.createElement(l0,{active:e==="featured",onClick:()=>t("featured")},"Featured Artists"),r.createElement(l0,{active:e==="all",onClick:()=>t("all")},"All Artists")),u.length>0?r.createElement(zP,null,u.map(m=>r.createElement(PP,{key:m.id},r.createElement(AP,null,r.createElement(FP,{src:m.image,alt:m.name}),m.featured&&r.createElement(LP,null,"Featured")),r.createElement(DP,null,r.createElement(NP,null,m.name),r.createElement(MP,null,r.createElement(RP,null,m.genre),r.createElement(IP,null,m.location)),r.createElement(BP,null,m.bio),r.createElement(VP,null,r.createElement(s0,null,r.createElement(c0,null,m.supporters),r.createElement(u0,null,"Supporters")),r.createElement(s0,null,r.createElement(c0,null,m.totalDonations),r.createElement(u0,null,"Total Donations"))),r.createElement(OP,null,r.createElement(jP,{onClick:()=>p(m.id)},"Support Artist"),r.createElement(WP,{as:ne,to:`/artist-profile/${m.id}`},"View Profile")))))):r.createElement(_P,null,r.createElement(UP,null,"🔍"),r.createElement(HP,null,"No artists found matching your search criteria."),r.createElement(GP,{onClick:()=>{o(""),a("all"),t("featured")}},"Clear Filters")))),r.createElement(YP,null,r.createElement(jo,null,r.createElement(QP,null,"Why Join TrueFans CONNECT™ as an Artist?"),r.createElement(KP,null,"Unlock your potential with our artist-first platform"),r.createElement(XP,null,r.createElement(br,null,r.createElement(kr,null,"💰"),r.createElement(Sr,null,"Keep 80% of Your Earnings"),r.createElement(Tr,null,"Our industry-leading 80/20 revenue split ensures you keep the majority of what you earn, putting more money in your pocket.")),r.createElement(br,null,r.createElement(kr,null,"🔄"),r.createElement(Sr,null,"Two-Tier Affiliate Program"),r.createElement(Tr,null,"Earn 2.5% of donations received by artists you refer, plus another 2.5% from artists they refer, creating passive income.")),r.createElement(br,null,r.createElement(kr,null,"🎯"),r.createElement(Sr,null,"Multiple Donation Methods"),r.createElement(Tr,null,"Receive support through embed codes, QR codes, and direct donation links, maximizing your earning potential.")),r.createElement(br,null,r.createElement(kr,null,"🏢"),r.createElement(Sr,null,"Venue Connections"),r.createElement(Tr,null,"Get discovered by venues looking for talent, creating opportunities for live performances and expanding your audience.")),r.createElement(br,null,r.createElement(kr,null,"📊"),r.createElement(Sr,null,"Detailed Analytics"),r.createElement(Tr,null,"Track your performance with comprehensive analytics, helping you understand your audience and optimize your strategy.")),r.createElement(br,null,r.createElement(kr,null,"🛠️"),r.createElement(Sr,null,"Powerful Tools"),r.createElement(Tr,null,"Access a suite of tools designed to help you manage your career, connect with fans, and grow your income."))),r.createElement(JP,null,r.createElement(qP,null,"Ready to take your music career to the next level?"),r.createElement(ZP,{as:ne,to:"/artist-signup"},"Sign Up as an Artist")))),r.createElement(eA,null,r.createElement(jo,null,r.createElement(tA,null,"Success Stories"),r.createElement(nA,null,"Hear from artists who are thriving on our platform"),r.createElement(rA,null,r.createElement(Uu,null,r.createElement(Hu,null,'"TrueFans CONNECT™ has completely transformed my career as an independent artist. The direct support from fans and the venue connections have allowed me to focus on creating music full-time."'),r.createElement(Gu,null,r.createElement(Yu,{src:"https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg",alt:"Marcus Rivera"}),r.createElement(Qu,null,r.createElement(Ku,null,"Marcus Rivera"),r.createElement(Xu,null,"Hip Hop Artist")))),r.createElement(Uu,null,r.createElement(Hu,null,`"The affiliate program has been a game-changer for me. Not only am I earning from my music, but I'm also generating passive income by referring other artists to the platform."`),r.createElement(Gu,null,r.createElement(Yu,{src:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",alt:"Sophia Martinez"}),r.createElement(Qu,null,r.createElement(Ku,null,"Sophia Martinez"),r.createElement(Xu,null,"Jazz Vocalist")))),r.createElement(Uu,null,r.createElement(Hu,null,`"The multiple donation methods have made it so easy for my fans to support me. I've seen a significant increase in my income since joining TrueFans CONNECT™."`),r.createElement(Gu,null,r.createElement(Yu,{src:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",alt:"David Williams"}),r.createElement(Qu,null,r.createElement(Ku,null,"David Williams"),r.createElement(Xu,null,"Rock Guitarist"))))))),r.createElement(oA,null,r.createElement(jo,null,r.createElement(iA,null,"Frequently Asked Questions"),r.createElement(aA,null,r.createElement(Wo,null,r.createElement(_o,null,"How does the 80/20 revenue split work?"),r.createElement(Uo,null,"When you receive donations through our platform, you keep 80% of the amount, while TrueFans CONNECT™ retains 20% to cover operating costs and platform development. This split applies to all donation methods, including direct donations, QR codes, and embed widgets.")),r.createElement(Wo,null,r.createElement(_o,null,"How do I get started as an artist?"),r.createElement(Uo,null,"Getting started is simple! Just sign up for an artist account, complete your profile with your bio, music samples, and photos, set up your donation methods, and start sharing your profile with your fans. You can also connect with venues and participate in the affiliate program to maximize your earnings.")),r.createElement(Wo,null,r.createElement(_o,null,"How does the affiliate program work?"),r.createElement(Uo,null,"Our two-tier affiliate program allows you to earn 2.5% of all donations received by artists you refer to the platform. Additionally, you earn 2.5% from artists referred by your referrals, creating a passive income stream. You'll receive a unique referral link to share, and earnings are automatically tracked and added to your account.")),r.createElement(Wo,null,r.createElement(_o,null,"When and how do I get paid?"),r.createElement(Uo,null,"Payments are processed on a weekly basis. You can choose to receive your earnings via direct deposit, PayPal, or other supported payment methods. There's a minimum payout threshold of $20, and you can track all your earnings and pending payments in your dashboard.")),r.createElement(Wo,null,r.createElement(_o,null,"How do I connect with venues?"),r.createElement(Uo,null,"Venues on our platform can discover artists through our directory and send performance opportunities directly to you. You can also proactively submit your profile to venues using our venue submission system. All communication and booking arrangements are handled securely through our platform."))))))},vP=s.main`
  width: 100%;
`,jo=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,$P=s.section`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  padding: ${({theme:e})=>e.space.xl} 0;
  color: white;
`,xP=s.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`,EP=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.md};
`,wP=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  opacity: 0.9;
  line-height: 1.5;
  margin-bottom: ${({theme:e})=>e.space.lg};
`,bP=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
  }
`,kP=s.input`
  flex: 1;
  padding: ${({theme:e})=>e.space.md};
  border-radius: ${({theme:e})=>e.radii.md};
  border: none;
  font-size: ${({theme:e})=>e.fontSizes.md};
  
  &:focus {
    outline: 2px solid ${({theme:e})=>e.colors.primary};
  }
`,SP=s.select`
  padding: ${({theme:e})=>e.space.md};
  border-radius: ${({theme:e})=>e.radii.md};
  border: none;
  font-size: ${({theme:e})=>e.fontSizes.md};
  background-color: white;
  min-width: 150px;
  
  &:focus {
    outline: 2px solid ${({theme:e})=>e.colors.primary};
  }
`,TP=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,CP=s.div`
  display: flex;
  margin-bottom: ${({theme:e})=>e.space.xl};
  border-bottom: 1px solid ${({theme:e})=>e.colors.mediumGray};
`,l0=s.button`
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
`,zP=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,PP=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,AP=s.div`
  position: relative;
  height: 200px;
`,FP=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,LP=s.div`
  position: absolute;
  top: ${({theme:e})=>e.space.md};
  right: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e})=>e.colors.primary};
  color: white;
  padding: ${({theme:e})=>`${e.space.xs} ${e.space.md}`};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,DP=s.div`
  padding: ${({theme:e})=>e.space.lg};
`,NP=s.h2`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,MP=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.md};
`,RP=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.primary};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,IP=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,BP=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.md};
  line-height: 1.5;
`,VP=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,s0=s.div``,c0=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,u0=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,OP=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.xs}) {
    flex-direction: column;
  }
`,jP=s(W)`
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
`,WP=s(W)`
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
`,_P=s.div`
  text-align: center;
  padding: ${({theme:e})=>e.space.xl} 0;
`,UP=s.div`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,HP=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,GP=s(W)`
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
`,YP=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.lightGray};
`,QP=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.md};
`,KP=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`,XP=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.xl};
`,br=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,kr=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Sr=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Tr=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,JP=s.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`,qP=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,ZP=s(W)`
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
`,eA=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: white;
`,tA=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.md};
`,nA=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`,rA=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,Uu=s.div`
  background-color: ${({theme:e})=>e.colors.lightGray};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Hu=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-style: italic;
`,Gu=s.div`
  display: flex;
  align-items: center;
`,Yu=s.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
`,Qu=s.div``,Ku=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Xu=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,oA=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,iA=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,aA=s.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,Wo=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,_o=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Uo=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
`,lA=()=>{var N;const{id:e}=Mx(),t=yr(),n=na(),o=b.useRef(null),[i,a]=b.useState(!1),[l,c]=b.useState(!1),[u,d]=b.useState(!1),[p,m]=b.useState(10),[f,g]=b.useState(""),[$,x]=b.useState(""),[w,v]=b.useState(!1),[h,y]=b.useState(!1),[E,S]=b.useState(null),[z,P]=b.useState(!1),[C,I]=b.useState(1),[B,le]=b.useState(!1),[G,ee]=b.useState(null);b.useEffect(()=>{new URLSearchParams(t.search).get("support")==="true"&&a(!0)},[t]),b.useEffect(()=>(o.current&&(z?o.current.play().catch(T=>{console.error("Audio playback failed:",T),P(!1)}):o.current.pause()),()=>{o.current&&o.current.pause()}),[z,E]);const R={id:parseInt(e),name:e==="1"?"Eliza Johnson":e==="2"?"Marcus Rivera":e==="3"?"Emily Chen":e==="4"?"David Williams":e==="5"?"Sophia Martinez":e==="6"?"James Wilson":e==="7"?"Olivia Taylor":e==="8"?"Michael Brown":"Unknown Artist",genre:e==="1"?"Folk":e==="2"?"Hip Hop":e==="3"?"Electronic":e==="4"?"Rock":e==="5"?"Jazz":e==="6"?"Country":e==="7"?"Pop":e==="8"?"R&B":"Various",location:e==="1"?"Nashville, TN":e==="2"?"Atlanta, GA":e==="3"?"Los Angeles, CA":e==="4"?"Chicago, IL":e==="5"?"New Orleans, LA":e==="6"?"Austin, TX":e==="7"?"New York, NY":e==="8"?"Philadelphia, PA":"Unknown Location",image:e==="1"?"https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg":e==="2"?"https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg":e==="3"?"https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg":e==="4"?"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg":e==="5"?"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg":e==="6"?"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg":e==="7"?"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg":e==="8"?"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg":"https://via.placeholder.com/500",coverImage:"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",bio:e==="1"?"Indie folk artist with a passion for storytelling through music. Based in Nashville, I blend traditional folk with contemporary influences to create authentic, heartfelt songs that connect with listeners on a personal level.":e==="2"?"Urban poet and producer creating authentic hip hop with a message. My music draws from personal experiences growing up in Atlanta, addressing social issues while delivering infectious beats and thoughtful lyrics.":e==="3"?"Electronic music producer pushing boundaries with innovative sounds. I experiment with synthesizers, field recordings, and digital manipulation to create immersive sonic landscapes that challenge conventional electronic music.":e==="4"?"Rock guitarist and vocalist with a classic sound and modern edge. Influenced by the golden era of rock while incorporating contemporary elements, my music delivers powerful riffs, memorable hooks, and raw energy.":e==="5"?"Jazz vocalist and composer blending traditional and contemporary styles. My approach to jazz honors the classics while exploring new harmonic territories, resulting in performances that are both familiar and surprising.":e==="6"?"Country singer-songwriter with authentic roots and modern appeal. My songs tell stories of real life experiences with honesty and heart, combining traditional country instrumentation with contemporary production.":e==="7"?"Pop vocalist and songwriter crafting catchy melodies with depth. I create accessible pop music that doesn't sacrifice substance, with lyrics that explore personal growth, relationships, and social awareness.":e==="8"?"R&B artist with soulful vocals and heartfelt lyrics. My music draws from classic soul and contemporary R&B influences, delivering smooth vocals, rich harmonies, and grooves that move both body and spirit.":"Independent artist creating original music.",supporters:e==="1"?87:e==="2"?124:e==="3"?56:e==="4"?92:e==="5"?43:e==="6"?78:e==="7"?112:e==="8"?67:50,totalDonations:e==="1"?"$1,245.00":e==="2"?"$2,180.50":e==="3"?"$895.25":e==="4"?"$1,567.75":e==="5"?"$720.00":e==="6"?"$1,120.50":e==="7"?"$1,890.25":e==="8"?"$950.75":"$500.00",featured:e==="1"||e==="2"||e==="4"||e==="7",socialLinks:{instagram:"https://instagram.com",twitter:"https://twitter.com",facebook:"https://facebook.com",youtube:"https://youtube.com",spotify:"https://spotify.com",soundcloud:"https://soundcloud.com"},music:[{id:1,title:"Summer Memories",duration:"3:42",plays:1245,image:"https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",audioUrl:"https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0c6ff1bab.mp3?filename=acoustic-guitars-ambient-uplifting-background-music-for-videos-5642.mp3"},{id:2,title:"City Lights",duration:"4:15",plays:987,image:"https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",audioUrl:"https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=inspiring-cinematic-ambient-116199.mp3"},{id:3,title:"Rainy Day",duration:"3:28",plays:1532,image:"https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",audioUrl:"https://cdn.pixabay.com/download/audio/2022/04/27/audio_c2e4e07f04.mp3?filename=relaxing-mountains-rivers-streams-running-water-18178.mp3"}],upcomingShows:[{id:1,venue:"The Sound Lounge",location:"Nashville, TN",date:"2023-11-15",time:"8:00 PM",ticketPrice:25},{id:2,venue:"Blue Note",location:"New York, NY",date:"2023-12-05",time:"9:30 PM",ticketPrice:35}]},de=T=>{T.preventDefault(),console.log("Processing donation:",{amount:f?parseFloat(f):p,message:$,artistId:R.id}),v(!0),setTimeout(()=>{v(!1),a(!1),m(10),g(""),x(""),n(`/artist-profile/${e}`,{replace:!0})},3e3)},re=()=>{y(!h),console.log(`${h?"Unfollowing":"Following"} artist:`,R.id);const T=document.createElement("div");T.className="follow-notification",T.textContent=h?`Unfollowed ${R.name}`:`Now following ${R.name}`,document.body.appendChild(T),setTimeout(()=>{document.body.removeChild(T)},3e3)},se=()=>{c(!0)},F=()=>{const T=`${window.location.origin}/artist-profile/${e}`;navigator.clipboard.writeText(T).then(()=>{const j=document.getElementById("copy-link-button");j.textContent="Copied!",setTimeout(()=>{j.textContent="Copy Link"},2e3)}).catch(j=>{console.error("Failed to copy link: ",j)})},V=T=>{E===T.id?P(!z):(S(T.id),P(!0))},_=T=>{ee(T),d(!0)},O=T=>{T.preventDefault(),console.log("Processing ticket purchase:",{showId:G.id,quantity:C,totalPrice:(G.ticketPrice*C).toFixed(2)}),le(!0),setTimeout(()=>{le(!1),d(!1),I(1),ee(null)},3e3)},L=R.music.find(T=>T.id===E);return r.createElement(sA,{as:ge.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},r.createElement(uA,{src:R.coverImage,alt:`${R.name} cover`}),r.createElement(cA,null,r.createElement(dA,null,r.createElement(mA,null,r.createElement(pA,{src:R.image,alt:R.name})),r.createElement(fA,null,r.createElement(hA,null,R.name),r.createElement(gA,null,r.createElement(yA,null,R.genre),r.createElement(vA,null,R.location)),r.createElement($A,null,r.createElement(d0,null,r.createElement(m0,null,R.supporters),r.createElement(p0,null,"Supporters")),r.createElement(d0,null,r.createElement(m0,null,R.totalDonations),r.createElement(p0,null,"Total Donations"))),r.createElement(xA,null,r.createElement(EA,{onClick:()=>a(!0)},"Support Artist"),r.createElement(wA,{isFollowing:h,onClick:re},h?"Following":"Follow"),r.createElement(bA,{onClick:se},"Share")))),r.createElement(kA,null,r.createElement(SA,null,r.createElement(Ju,null,r.createElement(qu,null,"About"),r.createElement(TA,null,R.bio)),r.createElement(Ju,null,r.createElement(qu,null,"Music"),r.createElement(CA,null,R.music.map(T=>r.createElement(zA,{key:T.id},r.createElement(PA,{src:T.image,alt:T.title}),r.createElement(AA,null,r.createElement(FA,null,T.title),r.createElement(LA,null,r.createElement(DA,null,T.duration),r.createElement(NA,null,T.plays," plays"))),r.createElement(MA,{isPlaying:z&&E===T.id,onClick:()=>V(T)},z&&E===T.id?"❚❚":"▶")))),L&&r.createElement("audio",{ref:o,src:L.audioUrl,onEnded:()=>P(!1)}),E&&r.createElement(RA,null,r.createElement(IA,null,"Now Playing: ",(N=R.music.find(T=>T.id===E))==null?void 0:N.title),r.createElement(BA,null,r.createElement(f0,{onClick:()=>P(!z)},z?"❚❚ Pause":"▶ Play"),r.createElement(f0,{onClick:()=>{S(null),P(!1)}},"■ Stop")))),r.createElement(Ju,null,r.createElement(qu,null,"Upcoming Shows"),R.upcomingShows.length>0?r.createElement(VA,null,R.upcomingShows.map(T=>r.createElement(OA,{key:T.id},r.createElement(jA,null,new Date(T.date).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})),r.createElement(WA,null,r.createElement(_A,null,T.venue),r.createElement(UA,null,T.location)),r.createElement(HA,null,T.time),r.createElement(GA,{onClick:()=>_(T)},"Get Tickets")))):r.createElement(YA,null,"No upcoming shows scheduled."))),r.createElement(QA,null,r.createElement(Zu,null,r.createElement(ed,null,"Support ",R.name),r.createElement(KA,null,"Your direct support helps me continue creating music independently."),r.createElement(XA,{onClick:()=>a(!0)},"Donate Now")),r.createElement(Zu,null,r.createElement(ed,null,"Connect"),r.createElement(JA,null,r.createElement(Cr,{href:R.socialLinks.instagram,target:"_blank",rel:"noopener noreferrer"},r.createElement(zr,null,"📷"),r.createElement(Pr,null,"Instagram")),r.createElement(Cr,{href:R.socialLinks.twitter,target:"_blank",rel:"noopener noreferrer"},r.createElement(zr,null,"🐦"),r.createElement(Pr,null,"Twitter")),r.createElement(Cr,{href:R.socialLinks.facebook,target:"_blank",rel:"noopener noreferrer"},r.createElement(zr,null,"👍"),r.createElement(Pr,null,"Facebook")),r.createElement(Cr,{href:R.socialLinks.youtube,target:"_blank",rel:"noopener noreferrer"},r.createElement(zr,null,"▶️"),r.createElement(Pr,null,"YouTube")),r.createElement(Cr,{href:R.socialLinks.spotify,target:"_blank",rel:"noopener noreferrer"},r.createElement(zr,null,"🎵"),r.createElement(Pr,null,"Spotify")),r.createElement(Cr,{href:R.socialLinks.soundcloud,target:"_blank",rel:"noopener noreferrer"},r.createElement(zr,null,"☁️"),r.createElement(Pr,null,"SoundCloud")))),r.createElement(Zu,null,r.createElement(ed,null,"Recent Supporters"),r.createElement(qA,null,r.createElement(td,null,r.createElement(nd,{src:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",alt:"John D."}),r.createElement(rd,null,r.createElement(od,null,"John D."),r.createElement(id,null,"$25.00"))),r.createElement(td,null,r.createElement(nd,{src:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",alt:"Sarah M."}),r.createElement(rd,null,r.createElement(od,null,"Sarah M."),r.createElement(id,null,"$15.00"))),r.createElement(td,null,r.createElement(nd,{src:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",alt:"David R."}),r.createElement(rd,null,r.createElement(od,null,"David R."),r.createElement(id,null,"$50.00")))))))),i&&r.createElement(ad,{onClick:()=>!w&&a(!1)},r.createElement(ld,{onClick:T=>T.stopPropagation()},w?r.createElement(h0,null,r.createElement(g0,null,"✓"),r.createElement(y0,null,"Thank You!"),r.createElement(v0,null,"Your donation to ",R.name," has been processed successfully.")):r.createElement(r.Fragment,null,r.createElement(sd,null,r.createElement(cd,null,"Support ",R.name),r.createElement(ud,{onClick:()=>a(!1)},"×")),r.createElement(ZA,{onSubmit:de},r.createElement(e6,null,"Your direct support helps me continue creating music independently."),r.createElement(t6,null,r.createElement(n6,null,"Select an amount:"),r.createElement(r6,null,r.createElement(Ja,{selected:p===5&&!f,onClick:()=>{m(5),g("")}},"$5"),r.createElement(Ja,{selected:p===10&&!f,onClick:()=>{m(10),g("")}},"$10"),r.createElement(Ja,{selected:p===25&&!f,onClick:()=>{m(25),g("")}},"$25"),r.createElement(Ja,{selected:p===50&&!f,onClick:()=>{m(50),g("")}},"$50")),r.createElement(o6,null,r.createElement(i6,null,"Or enter a custom amount:"),r.createElement(a6,{type:"number",min:"1",step:"0.01",placeholder:"Custom amount",value:f,onChange:T=>g(T.target.value)}))),r.createElement(l6,null,r.createElement(s6,null,"Add a message (optional):"),r.createElement(c6,{placeholder:"Your message to the artist...",value:$,onChange:T=>x(T.target.value)})),r.createElement(u6,{type:"submit"},"Donate $",f?parseFloat(f).toFixed(2):p.toFixed(2)),r.createElement(d6,null,"Secure payment processing. 80% goes directly to the artist."))))),l&&r.createElement(ad,{onClick:()=>c(!1)},r.createElement(ld,{onClick:T=>T.stopPropagation()},r.createElement(sd,null,r.createElement(cd,null,"Share ",R.name,"'s Profile"),r.createElement(ud,{onClick:()=>c(!1)},"×")),r.createElement(m6,null,r.createElement(p6,null,"Share this artist with your friends and help them grow their audience."),r.createElement(f6,null,r.createElement(dd,{onClick:()=>window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,"_blank")},r.createElement(md,null,"👍"),r.createElement(pd,null,"Facebook")),r.createElement(dd,{onClick:()=>window.open(`https://twitter.com/intent/tweet?text=Check out ${encodeURIComponent(R.name)} on TrueFans CONNECT™&url=${encodeURIComponent(window.location.href)}`,"_blank")},r.createElement(md,null,"🐦"),r.createElement(pd,null,"Twitter")),r.createElement(dd,{onClick:()=>window.open(`mailto:?subject=Check out ${encodeURIComponent(R.name)} on TrueFans CONNECT™&body=I thought you might like this artist: ${encodeURIComponent(window.location.href)}`,"_blank")},r.createElement(md,null,"✉️"),r.createElement(pd,null,"Email"))),r.createElement(h6,null,r.createElement(g6,null,"Or copy this link:"),r.createElement(y6,{value:window.location.href,readOnly:!0}),r.createElement(v6,{id:"copy-link-button",onClick:F},"Copy Link"))))),u&&G&&r.createElement(ad,{onClick:()=>!B&&d(!1)},r.createElement(ld,{onClick:T=>T.stopPropagation()},B?r.createElement(h0,null,r.createElement(g0,null,"✓"),r.createElement(y0,null,"Tickets Confirmed!"),r.createElement(v0,null,"Your tickets for ",R.name," at ",G.venue," have been reserved. Check your email for details.")):r.createElement(r.Fragment,null,r.createElement(sd,null,r.createElement(cd,null,"Get Tickets"),r.createElement(ud,{onClick:()=>d(!1)},"×")),r.createElement($6,{onSubmit:O},r.createElement(x6,null,r.createElement(E6,null,R.name),r.createElement(w6,null,r.createElement(b6,null,G.venue),r.createElement(k6,null,G.location)),r.createElement(S6,null,new Date(G.date).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})," at ",G.time)),r.createElement(T6,null,r.createElement(C6,null,"Ticket Price:"),r.createElement(z6,null,"$",G.ticketPrice.toFixed(2))),r.createElement(P6,null,r.createElement(A6,null,"Number of Tickets:"),r.createElement(F6,null,r.createElement($0,{type:"button",onClick:()=>I(Math.max(1,C-1))},"-"),r.createElement(L6,{type:"number",min:"1",max:"10",value:C,onChange:T=>I(Math.min(10,Math.max(1,parseInt(T.target.value)||1)))}),r.createElement($0,{type:"button",onClick:()=>I(Math.min(10,C+1))},"+"))),r.createElement(D6,null,r.createElement(N6,null,"Total:"),r.createElement(M6,null,"$",(G.ticketPrice*C).toFixed(2))),r.createElement(R6,{type:"submit"},"Purchase Tickets"),r.createElement(I6,null,"Tickets will be sent to your email. No refunds available within 24 hours of the event."))))),r.createElement("style",null,`
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
        `))},sA=s.main`
  width: 100%;
  background-color: ${({theme:e})=>e.colors.background};
`,cA=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
  position: relative;
  margin-top: -100px;
`,uA=s.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`,dA=s.div`
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
`,mA=s.div`
  margin-right: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    margin-right: 0;
    margin-bottom: ${({theme:e})=>e.space.lg};
  }
`,pA=s.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: ${({theme:e})=>e.shadows.md};
`,fA=s.div`
  flex: 1;
`,hA=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,gA=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    justify-content: center;
  }
`,yA=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.primary};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,vA=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
`,$A=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.xl};
  margin-bottom: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    justify-content: center;
  }
`,d0=s.div``,m0=s.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,p0=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,xA=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    justify-content: center;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,EA=s(W)`
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
`,wA=s(W)`
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
`,bA=s(W)`
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
`,kA=s.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,SA=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
`,Ju=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,qu=s.h2`
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
`,TA=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
`,CA=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,zA=s.div`
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
`,PA=s.img`
  width: 60px;
  height: 60px;
  border-radius: ${({theme:e})=>e.radii.sm};
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
`,AA=s.div`
  flex: 1;
`,FA=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,LA=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
`,DA=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,NA=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,MA=s.button`
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
`,RA=s.div`
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
`,IA=s.div`
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,BA=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.sm};
`,f0=s.button`
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
`,VA=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,OA=s.div`
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
`,jA=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.primary};
  width: 120px;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: auto;
  }
`,WA=s.div`
  flex: 1;
`,_A=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,UA=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,HA=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  margin-right: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    margin-right: 0;
  }
`,GA=s(W)`
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
`,YA=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  font-style: italic;
`,QA=s.aside`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
`,Zu=s.section`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,ed=s.h3`
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
`,KA=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
  margin-bottom: ${({theme:e})=>e.space.md};
`,XA=s(W)`
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
`,JA=s.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.space.md};
`,Cr=s.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.darkText};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateX(3px);
    color: ${({theme:e})=>e.colors.primary};
  }
`,zr=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  margin-right: ${({theme:e})=>e.space.sm};
`,Pr=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
`,qA=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,td=s.div`
  display: flex;
  align-items: center;
`,nd=s.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
`,rd=s.div``,od=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
`,id=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.primary};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,ad=s.div`
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
`,ld=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${({theme:e})=>e.shadows.lg};
`,sd=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.space.lg};
  border-bottom: 1px solid ${({theme:e})=>e.colors.lightGray};
`,cd=s.h2`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,ud=s.button`
  background: none;
  border: none;
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  color: ${({theme:e})=>e.colors.lightText};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    color: ${({theme:e})=>e.colors.darkText};
  }
`,ZA=s.form`
  padding: ${({theme:e})=>e.space.lg};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.lg};
`,e6=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,t6=s.div``,n6=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,r6=s.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.space.sm};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Ja=s.div`
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
`,o6=s.div`
  margin-top: ${({theme:e})=>e.space.md};
`,i6=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,a6=s.input`
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
`,l6=s.div``,s6=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,c6=s.textarea`
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
`,u6=s(W)`
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
`,d6=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
  text-align: center;
`,h0=s.div`
  padding: ${({theme:e})=>e.space.xl};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`,g0=s.div`
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
`,y0=s.h3`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,v0=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,m6=s.div`
  padding: ${({theme:e})=>e.space.lg};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.lg};
`,p6=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,f6=s.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: ${({theme:e})=>e.space.md};
`,dd=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
  }
`,md=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,pd=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkText};
`,h6=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.sm};
`,g6=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
`,y6=s.input`
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
`,v6=s(W)`
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
`,$6=s.form`
  padding: ${({theme:e})=>e.space.lg};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.lg};
`,x6=s.div`
  margin-bottom: ${({theme:e})=>e.space.md};
`,E6=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,w6=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,b6=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.primary};
`,k6=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,S6=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
`,T6=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.space.md} 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.lightGray};
`,C6=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
`,z6=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,P6=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.sm};
`,A6=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
`,F6=s.div`
  display: flex;
  align-items: center;
`,$0=s.button`
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
`,L6=s.input`
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
`,D6=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.space.md} 0;
  border-top: 1px solid ${({theme:e})=>e.colors.lightGray};
  margin-top: ${({theme:e})=>e.space.sm};
`,N6=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,M6=s.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.primary};
`,R6=s(W)`
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
`,I6=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
  text-align: center;
`,B6=()=>r.createElement(V6,{as:ge.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},r.createElement(O6,null,r.createElement(x0,null,r.createElement(j6,null,r.createElement(W6,null,"Venue Portal"),r.createElement(_6,null,"Connect with talented independent artists for your venue"),r.createElement(U6,null,r.createElement(E0,{as:ne,to:"/venue-signup"},"Register Your Venue"),r.createElement(E0,{as:ne,to:"/venue-signup",variant:"outline"},"Learn More"))))),r.createElement(H6,null,r.createElement(x0,null,r.createElement(G6,null,r.createElement(Y6,null,r.createElement(Ho,null,r.createElement(Go,null,"Featured Venues"),r.createElement(Q6,null,[1,2,3,4,5,6].map(e=>r.createElement(K6,{key:e},r.createElement(X6,{src:`https://images.pexels.com/photos/${1699159+e*100}/pexels-photo-${1699159+e*100}.jpeg?auto=compress&cs=tinysrgb&w=600`,alt:`Venue ${e}`}),r.createElement(J6,null,r.createElement(q6,null,["The Blue Note","Soundwave Lounge","Harmony Hall","Rhythm Room","Melody Mansion","Echo Chamber"][e%6]),r.createElement(Z6,null,["Jazz Club","Live Music Bar","Concert Hall","Music Venue","Performance Space","Acoustic Lounge"][e%6]),r.createElement(eF,null,["New Orleans","Austin","Nashville","New York","Los Angeles","Chicago"][e%6])),r.createElement(tF,null,r.createElement(w0,null,"View Details"),r.createElement(w0,{variant:"secondary"},"Contact")))))),r.createElement(Ho,null,r.createElement(Go,null,"Upcoming Events"),r.createElement(nF,null,[1,2,3].map(e=>r.createElement(rF,{key:e},r.createElement(oF,null,r.createElement(iF,null,"JUN"),r.createElement(aF,null,10+e)),r.createElement(lF,null,r.createElement(sF,null,"Jazz Night at Blue Note"),r.createElement(cF,null,r.createElement(uF,null,"Sarah Johnson, Marcus Rivera"),r.createElement(dF,null,"8:00 PM - 11:00 PM"))),r.createElement(mF,null,r.createElement(pF,null,"Details")))))),r.createElement(Ho,null,r.createElement(Go,null,"Success Stories"),r.createElement(fF,null,r.createElement(b0,null,r.createElement(k0,null,`"Partnering with TrueFans Connect has transformed our venue's booking process. We've discovered amazing talent and increased our attendance by 40% since featuring these independent artists."`),r.createElement(S0,null,r.createElement(T0,{src:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",alt:"John Smith"}),r.createElement(C0,null,r.createElement(z0,null,"John Smith"),r.createElement(P0,null,"Owner, The Basement Jazz Club")))),r.createElement(b0,null,r.createElement(k0,null,`"The quality of artists on this platform is exceptional. We've been able to fill our calendar with diverse performers that our audience loves, and the booking process couldn't be simpler."`),r.createElement(S0,null,r.createElement(T0,{src:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",alt:"Maria Rodriguez"}),r.createElement(C0,null,r.createElement(z0,null,"Maria Rodriguez"),r.createElement(P0,null,"Events Manager, Soundwave Lounge")))))),r.createElement(Ho,null,r.createElement(Go,null,"Venue Affiliate Program"),r.createElement(hF,null,r.createElement(gF,null,r.createElement(yF,null,"Earn While Discovering New Talent"),r.createElement(vF,null,"When you register as a venue on TrueFans CONNECT, you automatically become part of our affiliate program. Earn 2.5% of all donations received by artists you refer to the platform, plus 2.5% from artists they refer."),r.createElement($F,null,r.createElement(fd,null,r.createElement(Xt,null,"💰"),r.createElement(Jt,null,"Two-tier commission structure")),r.createElement(fd,null,r.createElement(Xt,null,"🔄"),r.createElement(Jt,null,"Passive income from artist referrals")),r.createElement(fd,null,r.createElement(Xt,null,"📊"),r.createElement(Jt,null,"Detailed performance analytics"))),r.createElement(xF,{as:ne,to:"/affiliate-program"},"Learn More About Affiliate Program")),r.createElement(EF,{src:"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:"Affiliate Program"}))),r.createElement(Ho,null,r.createElement(Go,null,"Customizable Submission Form"),r.createElement(wF,null,r.createElement(bF,{src:"https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:"Submission Form"}),r.createElement(kF,null,r.createElement(SF,null,"Branded Artist Submission Form"),r.createElement(TF,null,"When you register your venue, you'll get a customizable artist submission form that matches your venue's branding. Embed this form on your website to collect submissions from interested artists."),r.createElement(CF,null,r.createElement(qa,null,r.createElement(Za,null,"🎨"),r.createElement(el,null,"Customize colors to match your brand")),r.createElement(qa,null,r.createElement(Za,null,"🖼️"),r.createElement(el,null,"Add your venue logo and background image")),r.createElement(qa,null,r.createElement(Za,null,"📋"),r.createElement(el,null,"Collect all the information you need from artists")),r.createElement(qa,null,r.createElement(Za,null,"📱"),r.createElement(el,null,"Mobile-responsive design works on all devices"))),r.createElement(zF,{as:ne,to:"/venue-signup"},"Create Your Submission Form"))))),r.createElement(PF,null,r.createElement(AF,null,r.createElement(FF,null,"Register Your Venue"),r.createElement(LF,null,"Join our network of music venues and connect with talented independent artists."),r.createElement(DF,null,r.createElement(Ar,null,r.createElement(Fr,null,"Venue Name"),r.createElement(tl,{type:"text",placeholder:"Enter your venue name"})),r.createElement(Ar,null,r.createElement(Fr,null,"Location"),r.createElement(tl,{type:"text",placeholder:"City, State"})),r.createElement(Ar,null,r.createElement(Fr,null,"Email"),r.createElement(tl,{type:"email",placeholder:"contact@yourvenue.com"})),r.createElement(Ar,null,r.createElement(Fr,null,"Phone"),r.createElement(tl,{type:"tel",placeholder:"(123) 456-7890"})),r.createElement(Ar,null,r.createElement(Fr,null,"Venue Type"),r.createElement(A0,null,r.createElement("option",{value:""},"Select venue type"),r.createElement("option",{value:"bar"},"Bar/Club"),r.createElement("option",{value:"concert"},"Concert Hall"),r.createElement("option",{value:"theater"},"Theater"),r.createElement("option",{value:"cafe"},"Café"),r.createElement("option",{value:"restaurant"},"Restaurant"),r.createElement("option",{value:"other"},"Other"))),r.createElement(Ar,null,r.createElement(Fr,null,"Capacity"),r.createElement(A0,null,r.createElement("option",{value:""},"Select capacity"),r.createElement("option",{value:"small"},"Small (Under 100)"),r.createElement("option",{value:"medium"},"Medium (100-300)"),r.createElement("option",{value:"large"},"Large (300-1000)"),r.createElement("option",{value:"xl"},"Very Large (1000+)"))),r.createElement(NF,{as:ne,to:"/venue-signup"},"Register Venue"))),r.createElement(MF,null,r.createElement(RF,null,"Venue Benefits"),r.createElement(IF,null,r.createElement(Lr,null,r.createElement(Xt,null,"🔍"),r.createElement(Jt,null,"Discover pre-vetted independent artists")),r.createElement(Lr,null,r.createElement(Xt,null,"📅"),r.createElement(Jt,null,"Simplified booking and scheduling")),r.createElement(Lr,null,r.createElement(Xt,null,"👥"),r.createElement(Jt,null,"Access to artists' existing fan bases")),r.createElement(Lr,null,r.createElement(Xt,null,"📊"),r.createElement(Jt,null,"Performance analytics and attendance data")),r.createElement(Lr,null,r.createElement(Xt,null,"🎵"),r.createElement(Jt,null,"Diverse genre options for your audience")),r.createElement(Lr,null,r.createElement(Xt,null,"💰"),r.createElement(Jt,null,"Increased revenue through new audiences")))),r.createElement(BF,null,r.createElement(VF,null,"Questions?"),r.createElement(OF,null,"Our venue relations team is here to help you get started."),r.createElement(jF,null,"Contact Venue Support"))))))),V6=s.main`
  width: 100%;
`,x0=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,O6=s.section`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  padding: ${({theme:e})=>e.space.xl} 0;
  color: white;
`,j6=s.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`,W6=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.md};
`,_6=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  opacity: 0.9;
  margin-bottom: ${({theme:e})=>e.space.lg};
`,U6=s.div`
  display: flex;
  justify-content: center;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`,E0=s(W)`
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
`,H6=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,G6=s.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,Y6=s.div``,Ho=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`,Go=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
  padding-bottom: ${({theme:e})=>e.space.xs};
  border-bottom: 2px solid ${({theme:e})=>e.colors.primary};
`,Q6=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,K6=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,X6=s.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,J6=s.div`
  padding: ${({theme:e})=>e.space.md};
`,q6=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Z6=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,eF=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,tF=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.sm};
  padding: ${({theme:e})=>e.space.md};
  border-top: 1px solid ${({theme:e})=>e.colors.lightGray};
`,w0=s(W)`
  flex: 1;
  padding: ${({theme:e})=>e.space.sm};
  background-color: ${({theme:e,variant:t})=>t==="secondary"?"transparent":e.colors.primary};
  color: ${({theme:e,variant:t})=>t==="secondary"?e.colors.darkText:e.colors.trustworthyNavy};
  border: ${({theme:e,variant:t})=>t==="secondary"?`1px solid ${e.colors.mediumGray}`:"none"};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e,variant:t})=>t==="secondary"?e.colors.lightGray:e.colors.primaryDark};
  }
`,nF=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,rF=s.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }
`,oF=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  border-radius: ${({theme:e})=>e.radii.md};
  margin-right: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    margin-right: 0;
    margin-bottom: ${({theme:e})=>e.space.md};
  }
`,iF=s.span`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,aF=s.span`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,lF=s.div`
  flex: 1;
`,sF=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,cF=s.div``,uF=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,dF=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkGray};
`,mF=s.div`
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    margin-top: ${({theme:e})=>e.space.md};
    width: 100%;
  }
`,pF=s(W)`
  padding: ${({theme:e})=>`${e.space.sm} ${e.space.lg}`};
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
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
  }
`,fF=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,b0=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,k0=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-style: italic;
`,S0=s.div`
  display: flex;
  align-items: center;
`,T0=s.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
`,C0=s.div``,z0=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,P0=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,hF=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.space.lg};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,gF=s.div`
  padding: ${({theme:e})=>e.space.lg};
`,yF=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,vF=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
`,$F=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,fd=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.space.md};
`,Xt=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
`,Jt=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
`,xF=s(W)`
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
`,EF=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    height: 300px;
  }
`,wF=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.space.lg};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,bF=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    height: 300px;
  }
`,kF=s.div`
  padding: ${({theme:e})=>e.space.lg};
`,SF=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,TF=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
`,CF=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,qa=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.space.sm};
`,Za=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
`,el=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkText};
`,zF=s(W)`
  padding: ${({theme:e})=>`${e.space.md} ${e.space.lg}`};
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
`,PF=s.aside`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    order: -1;
  }
`,AF=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,FF=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,LF=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,DF=s.form``,Ar=s.div`
  margin-bottom: ${({theme:e})=>e.space.md};
`,Fr=s.label`
  display: block;
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,tl=s.input`
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
`,A0=s.select`
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
`,NF=s(W)`
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
`,MF=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,RF=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,IF=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,Lr=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.space.md};
`,BF=s.div`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  color: white;
  text-align: center;
`,VF=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,OF=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  opacity: 0.9;
  margin-bottom: ${({theme:e})=>e.space.lg};
`,jF=s(W)`
  padding: ${({theme:e})=>e.space.md};
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
`,WF=()=>{const[e,t]=b.useState("overview"),[n,o]=b.useState(null),i=(a,l)=>{navigator.clipboard.writeText(a).then(()=>{o(l),setTimeout(()=>o(null),2e3)}).catch(c=>{console.error("Failed to copy: ",c)})};return r.createElement(_F,{as:ge.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},r.createElement(UF,null,r.createElement(HF,null,r.createElement(GF,null,"Donation System"),r.createElement(YF,null,"Multiple ways for your fans to support your music")),r.createElement(QF,null,r.createElement(nl,{active:e==="overview",onClick:()=>t("overview")},"Overview"),r.createElement(nl,{active:e==="donation-link",onClick:()=>t("donation-link")},"Donation Link"),r.createElement(nl,{active:e==="qr-code",onClick:()=>t("qr-code")},"QR Code"),r.createElement(nl,{active:e==="embed-widget",onClick:()=>t("embed-widget")},"Embed Widget")),r.createElement(KF,null,e==="overview"&&r.createElement(XF,null,r.createElement(JF,null,r.createElement(hd,null,r.createElement(gd,null,"🔗"),r.createElement(yd,null,"Donation Link"),r.createElement(vd,null,"Share a direct link to your donation page on social media, in emails, or on your website."),r.createElement($d,{onClick:()=>t("donation-link")},"View Details")),r.createElement(hd,null,r.createElement(gd,null,"📱"),r.createElement(yd,null,"QR Code"),r.createElement(vd,null,"Display a QR code at live shows, on merch, or on physical promotional materials."),r.createElement($d,{onClick:()=>t("qr-code")},"View Details")),r.createElement(hd,null,r.createElement(gd,null,"💻"),r.createElement(yd,null,"Embed Widget"),r.createElement(vd,null,"Add a donation widget directly to your website or blog with simple embed code."),r.createElement($d,{onClick:()=>t("embed-widget")},"View Details"))),r.createElement(qF,null,r.createElement(F0,null,"How It Works"),r.createElement(ZF,null,r.createElement(rl,null,r.createElement(ol,null,"1"),r.createElement(il,null,r.createElement(al,null,"Choose Your Method"),r.createElement(ll,null,"Select from donation link, QR code, or embed widget based on your needs."))),r.createElement(rl,null,r.createElement(ol,null,"2"),r.createElement(il,null,r.createElement(al,null,"Share With Your Fans"),r.createElement(ll,null,"Distribute your chosen donation method through social media, at shows, or on your website."))),r.createElement(rl,null,r.createElement(ol,null,"3"),r.createElement(il,null,r.createElement(al,null,"Fans Make Donations"),r.createElement(ll,null,"Supporters can easily contribute any amount to help fund your music."))),r.createElement(rl,null,r.createElement(ol,null,"4"),r.createElement(il,null,r.createElement(al,null,"Receive Your Funds"),r.createElement(ll,null,"80% of donations go directly to you, with weekly transfers to your bank account."))))),r.createElement(eL,null,r.createElement(F0,null,"Frequently Asked Questions"),r.createElement(tL,null,r.createElement(Yo,null,r.createElement(Qo,null,"What percentage of donations do I receive?"),r.createElement(Ko,null,"You receive 80% of all donations. The remaining 20% helps us maintain and improve the platform.")),r.createElement(Yo,null,r.createElement(Qo,null,"How quickly will I receive my funds?"),r.createElement(Ko,null,"Funds are transferred to your connected bank account on a weekly basis, every Monday.")),r.createElement(Yo,null,r.createElement(Qo,null,"Can fans leave messages with their donations?"),r.createElement(Ko,null,"Yes! Supporters can include a personal message when they make a donation.")),r.createElement(Yo,null,r.createElement(Qo,null,"Is there a minimum donation amount?"),r.createElement(Ko,null,"The minimum donation amount is $1, but you can suggest recommended amounts.")),r.createElement(Yo,null,r.createElement(Qo,null,"Can I customize the donation page?"),r.createElement(Ko,null,"Yes, you can customize colors, images, and suggested donation amounts to match your brand."))))),e==="donation-link"&&r.createElement(nL,null,r.createElement(xd,null,r.createElement(Ed,null,"🔗"),r.createElement(wd,null,"Donation Link"),r.createElement(bd,null,"Share this link anywhere to let fans support you directly")),r.createElement(rL,null,r.createElement(oL,null,r.createElement(iL,null,"https://truefans.connect/donate/sarahjohnson"),r.createElement(L0,{onClick:()=>i("https://truefans.connect/donate/sarahjohnson","link")},n==="link"?"Copied!":"Copy")),r.createElement(aL,null,"This is your unique donation link that never expires")),r.createElement(lL,null,r.createElement(Dr,null,"Share Your Link"),r.createElement(sL,null,r.createElement(kd,null,r.createElement(Sd,null,"📱"),r.createElement(Td,null,"Social Media"),r.createElement(Cd,null,"Post your donation link on Instagram, Twitter, Facebook, or TikTok"),r.createElement(zd,null,"Share Now")),r.createElement(kd,null,r.createElement(Sd,null,"✉️"),r.createElement(Td,null,"Email Newsletter"),r.createElement(Cd,null,"Include your donation link in emails to your fan mailing list"),r.createElement(zd,null,"Copy for Email")),r.createElement(kd,null,r.createElement(Sd,null,"🌐"),r.createElement(Td,null,"Your Website"),r.createElement(Cd,null,"Add your donation link to your personal website or bio pages"),r.createElement(zd,null,"Copy HTML")))),r.createElement(cL,null,r.createElement(Dr,null,"Tips for Success"),r.createElement(uL,null,r.createElement(sl,null,r.createElement(cl,null,"💡"),r.createElement(ul,null,r.createElement(dl,null,"Be Specific"),r.createElement(ml,null,"Tell fans exactly what their donations will help fund (new album, tour, equipment)"))),r.createElement(sl,null,r.createElement(cl,null,"🎯"),r.createElement(ul,null,r.createElement(dl,null,"Set Goals"),r.createElement(ml,null,"Share specific funding goals to motivate fans to contribute"))),r.createElement(sl,null,r.createElement(cl,null,"🙏"),r.createElement(ul,null,r.createElement(dl,null,"Show Gratitude"),r.createElement(ml,null,"Publicly thank supporters to encourage more donations"))),r.createElement(sl,null,r.createElement(cl,null,"🔄"),r.createElement(ul,null,r.createElement(dl,null,"Regular Updates"),r.createElement(ml,null,"Share your link regularly with updates on your progress")))))),e==="qr-code"&&r.createElement(dL,null,r.createElement(xd,null,r.createElement(Ed,null,"📱"),r.createElement(wd,null,"QR Code"),r.createElement(bd,null,"Perfect for live shows, merch tables, and physical promotional materials")),r.createElement(mL,null,r.createElement(pL,{src:"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://truefans.connect/donate/sarahjohnson",alt:"Donation QR Code"}),r.createElement(fL,null,r.createElement(Pd,null,"Download PNG"),r.createElement(Pd,null,"Download SVG"),r.createElement(Pd,null,"Download PDF"))),r.createElement(hL,null,r.createElement(Dr,null,"Ways to Use Your QR Code"),r.createElement(gL,null,r.createElement(pl,null,r.createElement(fl,null,"🎸"),r.createElement(hl,null,"At Live Shows"),r.createElement(gl,null,"Display your QR code at your merch table, on stage screens, or on small cards handed out to fans")),r.createElement(pl,null,r.createElement(fl,null,"👕"),r.createElement(hl,null,"On Merchandise"),r.createElement(gl,null,"Print your QR code on t-shirts, stickers, album covers, or other merchandise")),r.createElement(pl,null,r.createElement(fl,null,"📃"),r.createElement(hl,null,"Promotional Materials"),r.createElement(gl,null,"Include your QR code on posters, flyers, business cards, and press kits")),r.createElement(pl,null,r.createElement(fl,null,"📺"),r.createElement(hl,null,"Video Content"),r.createElement(gl,null,"Display your QR code at the end of music videos or live stream performances")))),r.createElement(D0,null,r.createElement(Dr,null,"Customize Your QR Code"),r.createElement(yL,null,r.createElement(Ad,null,r.createElement(Fd,null,"QR Code Color"),r.createElement(Ld,null,r.createElement(Xe,{color:"#000000",selected:!0}),r.createElement(Xe,{color:"#1A2B4C"}),r.createElement(Xe,{color:"#FFD700"}),r.createElement(Xe,{color:"#FF6B6B"}),r.createElement(Xe,{color:"#4CAF50"}))),r.createElement(Ad,null,r.createElement(Fd,null,"Background Color"),r.createElement(Ld,null,r.createElement(Xe,{color:"#FFFFFF",selected:!0}),r.createElement(Xe,{color:"#F9F9F9"}),r.createElement(Xe,{color:"#F0F0F0"}),r.createElement(Xe,{color:"#FFFDF0"}),r.createElement(Xe,{color:"#F0FFF0"}))),r.createElement(Ad,null,r.createElement(Fd,null,"Add Logo"),r.createElement(vL,null,r.createElement($L,null,"Upload Logo"),r.createElement(xL,null,"Recommended: 200x200px PNG with transparency")))),r.createElement(N0,null,"Update QR Code"))),e==="embed-widget"&&r.createElement(EL,null,r.createElement(xd,null,r.createElement(Ed,null,"💻"),r.createElement(wd,null,"Embed Widget"),r.createElement(bd,null,"Add a donation widget directly to your website or blog")),r.createElement(wL,null,r.createElement(bL,null,r.createElement(kL,null,"Support Sarah Johnson"),r.createElement(SL,null,'Help fund my new album "Midnight in New Orleans"'),r.createElement(TL,null,r.createElement(Xo,null,"$5"),r.createElement(Xo,{selected:!0},"$10"),r.createElement(Xo,null,"$25"),r.createElement(Xo,null,"$50"),r.createElement(Xo,null,"Custom")),r.createElement(CL,null,"Support Now"))),r.createElement(zL,null,r.createElement(Dr,null,"Embed Code"),r.createElement(PL,null,r.createElement(AL,null,'<iframe src="https://truefans.connect/widget/sarahjohnson" width="300" height="400" frameborder="0"></iframe>'),r.createElement(L0,{onClick:()=>i('<iframe src="https://truefans.connect/widget/sarahjohnson" width="300" height="400" frameborder="0"></iframe>',"embed")},n==="embed"?"Copied!":"Copy")),r.createElement(FL,null,r.createElement(LL,null,"How to use:"),r.createElement(DL,null,r.createElement(Dd,null,"Copy the code above"),r.createElement(Dd,null,"Paste it into the HTML of your website where you want the widget to appear"),r.createElement(Dd,null,"Adjust the width and height values if needed to fit your site")))),r.createElement(D0,null,r.createElement(Dr,null,"Customize Your Widget"),r.createElement(NL,null,r.createElement(Nd,null,r.createElement(Nr,null,r.createElement(Mr,null,"Widget Title"),r.createElement(yl,{type:"text",defaultValue:"Support Sarah Johnson"})),r.createElement(Nr,null,r.createElement(Mr,null,"Description"),r.createElement(yl,{type:"text",defaultValue:"Help fund my new album"}))),r.createElement(Nd,null,r.createElement(Nr,null,r.createElement(Mr,null,"Button Text"),r.createElement(yl,{type:"text",defaultValue:"Support Now"})),r.createElement(Nr,null,r.createElement(Mr,null,"Button Color"),r.createElement(Ld,null,r.createElement(Xe,{color:"#FF6B6B",selected:!0}),r.createElement(Xe,{color:"#FFD700"}),r.createElement(Xe,{color:"#4CAF50"}),r.createElement(Xe,{color:"#1A2B4C"}),r.createElement(Xe,{color:"#9C27B0"})))),r.createElement(Nd,null,r.createElement(Nr,null,r.createElement(Mr,null,"Suggested Amounts"),r.createElement(yl,{type:"text",defaultValue:"5, 10, 25, 50"}),r.createElement(ML,null,"Comma-separated values")),r.createElement(Nr,null,r.createElement(Mr,null,"Widget Size"),r.createElement(RL,{defaultValue:"medium"},r.createElement("option",{value:"small"},"Small"),r.createElement("option",{value:"medium"},"Medium"),r.createElement("option",{value:"large"},"Large")))),r.createElement(N0,null,"Update Widget")))))))},_F=s.main`
  width: 100%;
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,UF=s.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,HF=s.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,GF=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,YF=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.lightText};
`,QF=s.div`
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.colors.mediumGray};
  margin-bottom: ${({theme:e})=>e.space.xl};
  overflow-x: auto;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`,nl=s.button`
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
`,KF=s.div`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,XF=s.div``,JF=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.xl};
`,hd=s.div`
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
`,gd=s.div`
  font-size: ${({theme:e})=>e.fontSizes["4xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,yd=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,vd=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,$d=s(W)`
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
`,qF=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,F0=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
  text-align: center;
`,ZF=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.lg};
`,rl=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.space.lg};
`,ol=s.div`
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
`,il=s.div`
  flex: 1;
`,al=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,ll=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,eL=s.section``,tL=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,Yo=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Qo=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Ko=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,nL=s.div``,xd=s.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,Ed=s.div`
  font-size: ${({theme:e})=>e.fontSizes["4xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,wd=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,bd=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
`,rL=s.div`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,oL=s.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,iL=s.div`
  flex: 1;
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  font-family: monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,L0=s(W)`
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
`,aL=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  font-style: italic;
`,lL=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,Dr=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,sL=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,kd=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  text-align: center;
`,Sd=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Td=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Cd=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,zd=s(W)`
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
`,cL=s.section``,uL=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,sl=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.space.md};
`,cl=s.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  flex-shrink: 0;
`,ul=s.div`
  flex: 1;
`,dl=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,ml=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,dL=s.div``,mL=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,pL=s.img`
  width: 200px;
  height: 200px;
  margin-bottom: ${({theme:e})=>e.space.lg};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  padding: ${({theme:e})=>e.space.md};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
`,fL=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,Pd=s(W)`
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
`,hL=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,gL=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,pl=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  text-align: center;
`,fl=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,hl=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,gl=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,D0=s.section``,yL=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,Ad=s.div``,Fd=s.label`
  display: block;
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Ld=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.sm};
  flex-wrap: wrap;
`,Xe=s.button`
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
`,vL=s.div``,$L=s(W)`
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
`,xL=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkGray};
`,N0=s(W)`
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
`,EL=s.div``,wL=s.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,bL=s.div`
  width: 300px;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,kL=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
  text-align: center;
`,SL=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.lg};
  text-align: center;
`,TL=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.space.sm};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,Xo=s.button`
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
`,CL=s(W)`
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
`,zL=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,PL=s.div`
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.md};
  overflow-x: auto;
`,AL=s.code`
  flex: 1;
  font-family: monospace;
  color: white;
  white-space: pre;
`,FL=s.div`
  background-color: ${({theme:e})=>e.colors.lightGray};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
`,LL=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,DL=s.ul`
  padding-left: ${({theme:e})=>e.space.lg};
`,Dd=s.li`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.xs};
  
  &:last-child {
    margin-bottom: 0;
  }
`,NL=s.form`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Nd=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
  
  &:last-of-type {
    margin-bottom: ${({theme:e})=>e.space.xl};
  }
`,Nr=s.div``,Mr=s.label`
  display: block;
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,yl=s.input`
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
`,ML=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  margin-top: ${({theme:e})=>e.space.xs};
`,RL=s.select`
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
`,IL=()=>{const[e,t]=b.useState("overview"),[n,o]=b.useState(null),i=(a,l)=>{navigator.clipboard.writeText(a).then(()=>{o(l),setTimeout(()=>o(null),2e3)}).catch(c=>{console.error("Failed to copy: ",c)})};return r.createElement(BL,{as:ge.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},r.createElement(VL,null,r.createElement(OL,null,r.createElement(jL,null,"Artist Affiliate Program"),r.createElement(WL,null,"Earn additional income by referring other artists to TrueFans CONNECT")),r.createElement(_L,null,r.createElement(vl,{active:e==="overview",onClick:()=>t("overview")},"Overview"),r.createElement(vl,{active:e==="how-it-works",onClick:()=>t("how-it-works")},"How It Works"),r.createElement(vl,{active:e==="referral-tools",onClick:()=>t("referral-tools")},"Referral Tools"),r.createElement(vl,{active:e==="earnings",onClick:()=>t("earnings")},"Your Earnings")),r.createElement(UL,null,e==="overview"&&r.createElement(HL,null,r.createElement(GL,null,r.createElement(Md,null,r.createElement(Rd,null,"💰"),r.createElement(Id,null,"Two-Tier Earnings"),r.createElement(Bd,null,"Earn 2.5% of all donations received by artists you refer, plus 2.5% from artists they refer.")),r.createElement(Md,null,r.createElement(Rd,null,"🔄"),r.createElement(Id,null,"Passive Income"),r.createElement(Bd,null,"Continue earning as long as your referred artists receive donations on the platform.")),r.createElement(Md,null,r.createElement(Rd,null,"🌐"),r.createElement(Id,null,"Easy Sharing"),r.createElement(Bd,null,"Share your unique referral link via email, social media, or in person at shows and events."))),r.createElement(YL,null,r.createElement(QL,null,"Why Join Our Affiliate Program?"),r.createElement(KL,null,r.createElement("p",null,"As an artist on TrueFans CONNECT, you're automatically enrolled in our affiliate program. This means you can start earning additional income by referring other artists to the platform."),r.createElement("p",null,"Our two-tier affiliate structure rewards you not only for direct referrals but also for the artists they bring on board. This creates a sustainable income stream that grows with your network."),r.createElement("p",null,"The best part? There's no cap on how many artists you can refer or how much you can earn. The more successful your referred artists become, the more you earn."))),r.createElement(XL,null,r.createElement(Vd,null,r.createElement(Od,null,"$127,500+"),r.createElement(Rr,null,"Paid to affiliates in 2023")),r.createElement(Vd,null,r.createElement(Od,null,"1,200+"),r.createElement(Rr,null,"Artists earning affiliate income")),r.createElement(Vd,null,r.createElement(Od,null,"$450"),r.createElement(Rr,null,"Average monthly affiliate earnings"))),r.createElement(JL,null,r.createElement(wt,null,"Success Stories"),r.createElement(qL,null,r.createElement(M0,null,r.createElement(R0,null,`"I've referred 15 artists to TrueFans CONNECT, and now I earn an additional $600-800 per month just from affiliate commissions. It's become a significant part of my income as an independent musician."`),r.createElement(I0,null,r.createElement(B0,{src:"https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg",alt:"Sarah Johnson"}),r.createElement(V0,null,r.createElement(O0,null,"Sarah Johnson"),r.createElement(j0,null,"Jazz Vocalist, New Orleans")))),r.createElement(M0,null,r.createElement(R0,null,`"The two-tier structure is brilliant. I referred my bandmates, who then referred other musicians in their network. Now I'm earning from both levels, creating a steady stream of passive income."`),r.createElement(I0,null,r.createElement(B0,{src:"https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",alt:"Marcus Rivera"}),r.createElement(V0,null,r.createElement(O0,null,"Marcus Rivera"),r.createElement(j0,null,"Indie Rock Guitarist, Austin")))))),r.createElement(ZL,null,r.createElement(eD,null,"Ready to Start Earning?"),r.createElement(tD,null,"Get your unique referral link and start sharing with other artists in your network."),r.createElement(W0,{onClick:()=>t("referral-tools")},"Get Your Referral Link"))),e==="how-it-works"&&r.createElement(nD,null,r.createElement(rD,null,r.createElement(wt,null,"How the Affiliate Program Works"),r.createElement(oD,null,r.createElement(Jo,null,r.createElement(qo,null,"1"),r.createElement(Zo,null,r.createElement(ei,null,"Share Your Referral Link"),r.createElement(ti,null,"Every artist on TrueFans CONNECT gets a unique referral link. Share this with other artists through social media, email, or in person."))),r.createElement(Jo,null,r.createElement(qo,null,"2"),r.createElement(Zo,null,r.createElement(ei,null,"Artists Sign Up Through Your Link"),r.createElement(ti,null,"When an artist clicks your link and creates an account, they're permanently tagged as your referral in our system."))),r.createElement(Jo,null,r.createElement(qo,null,"3"),r.createElement(Zo,null,r.createElement(ei,null,"Your Network Grows"),r.createElement(ti,null,"Your referred artists can also refer others, creating a second tier in your affiliate network."))),r.createElement(Jo,null,r.createElement(qo,null,"4"),r.createElement(Zo,null,r.createElement(ei,null,"Earn From Both Tiers"),r.createElement(ti,null,"You earn 2.5% of all donations received by your direct referrals (first tier) and 2.5% from their referrals (second tier)."))),r.createElement(Jo,null,r.createElement(qo,null,"5"),r.createElement(Zo,null,r.createElement(ei,null,"Get Paid Automatically"),r.createElement(ti,null,"Affiliate earnings are calculated daily and added to your regular payout schedule. No extra steps required!"))))),r.createElement(iD,null,r.createElement(wt,null,"Commission Structure"),r.createElement(aD,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement(Ge,null,"Tier"),r.createElement(Ge,null,"Relationship"),r.createElement(Ge,null,"Commission Rate"),r.createElement(Ge,null,"Example"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement(Se,null,"Tier 1"),r.createElement(Se,null,"Artists you directly refer"),r.createElement(Se,null,"2.5% of all donations"),r.createElement(Se,null,"If your referral receives $1,000 in donations, you earn $25")),r.createElement("tr",null,r.createElement(Se,null,"Tier 2"),r.createElement(Se,null,"Artists referred by your referrals"),r.createElement(Se,null,"2.5% of all donations"),r.createElement(Se,null,"If your referral's referral receives $1,000 in donations, you earn $25"))))),r.createElement(lD,null,r.createElement(wt,null,"Earning Potential Example"),r.createElement(sD,null,r.createElement(cD,null,r.createElement(uD,null,"Scenario: Building a Network of 10 Artists"),r.createElement(dD,null,r.createElement(jd,null,"You refer 5 artists directly (Tier 1)"),r.createElement(jd,null,"Each of those artists refers 1 more artist (5 total in Tier 2)"),r.createElement(jd,null,"On average, each artist receives $500/month in donations"))),r.createElement(mD,null,r.createElement(pD,null,"Monthly Earnings Calculation:"),r.createElement(_0,null,r.createElement(U0,null,"Tier 1 Earnings:"),r.createElement(H0,null,"5 artists × $500 × 2.5% = $62.50")),r.createElement(_0,null,r.createElement(U0,null,"Tier 2 Earnings:"),r.createElement(H0,null,"5 artists × $500 × 2.5% = $62.50")),r.createElement(fD,null,r.createElement(hD,null,"Total Monthly Affiliate Income:"),r.createElement(gD,null,"$125.00")))),r.createElement(yD,null,"This is just an example. Your actual earnings will depend on how many artists you refer, how many they refer, and how much in donations they all receive.")),r.createElement(vD,null,r.createElement(wt,null,"Frequently Asked Questions"),r.createElement($D,null,r.createElement(ni,null,r.createElement(ri,null,"Is there a limit to how many artists I can refer?"),r.createElement(oi,null,"No, there's no limit. You can refer as many artists as you want and earn from all of them.")),r.createElement(ni,null,r.createElement(ri,null,"How long do I earn commissions for?"),r.createElement(oi,null,"You'll continue to earn commissions as long as your referred artists (both Tier 1 and Tier 2) receive donations on the platform.")),r.createElement(ni,null,r.createElement(ri,null,"When and how do I get paid my affiliate earnings?"),r.createElement(oi,null,"Affiliate earnings are added to your regular artist payout and follow the same schedule and payment method.")),r.createElement(ni,null,r.createElement(ri,null,"Do I need to sign up separately for the affiliate program?"),r.createElement(oi,null,"No, all artists on TrueFans CONNECT are automatically enrolled in the affiliate program.")),r.createElement(ni,null,r.createElement(ri,null,"Can I track how my referrals are performing?"),r.createElement(oi,null,'Yes, you can see detailed statistics about your referrals and their earnings in the "Your Earnings" tab.'))))),e==="referral-tools"&&r.createElement(xD,null,r.createElement(ED,null,r.createElement(wt,null,"Your Unique Referral Link"),r.createElement(wD,null,r.createElement(bD,null,"https://truefans.connect/join/sarahjohnson"),r.createElement(Wd,{onClick:()=>i("https://truefans.connect/join/sarahjohnson","referral-link")},n==="referral-link"?"Copied!":"Copy Link")),r.createElement(kD,null,"Share this link with other artists. When they sign up through this link, they'll be permanently connected to your affiliate account.")),r.createElement(SD,null,r.createElement(wt,null,"Ways to Share Your Link"),r.createElement(TD,null,r.createElement(_d,null,r.createElement(Ud,null,"📱"),r.createElement(Hd,null,"Social Media"),r.createElement(Gd,null,"Share your referral link on Instagram, Twitter, Facebook, or TikTok"),r.createElement(CD,null,r.createElement(Yd,null,"Share on Instagram"),r.createElement(Yd,null,"Share on Twitter"),r.createElement(Yd,null,"Share on Facebook"))),r.createElement(_d,null,r.createElement(Ud,null,"✉️"),r.createElement(Hd,null,"Email"),r.createElement(Gd,null,"Send your referral link directly to other artists via email"),r.createElement(Wd,{onClick:()=>i("Hey fellow artist! I've been using TrueFans CONNECT to receive donations from my fans, and it's been amazing. If you're looking for a way to monetize your music, check it out: https://truefans.connect/join/sarahjohnson","email-template")},n==="email-template"?"Copied!":"Copy Email Template")),r.createElement(_d,null,r.createElement(Ud,null,"🎵"),r.createElement(Hd,null,"Music Platforms"),r.createElement(Gd,null,"Add your referral link to your bio on Spotify, SoundCloud, Bandcamp, etc."),r.createElement(Wd,{onClick:()=>i("Support my music and other independent artists on TrueFans CONNECT: https://truefans.connect/join/sarahjohnson","bio-template")},n==="bio-template"?"Copied!":"Copy Bio Template")))),r.createElement(zD,null,r.createElement(wt,null,"Marketing Materials"),r.createElement(PD,null,"Use these pre-designed materials to promote TrueFans CONNECT to other artists."),r.createElement(AD,null,r.createElement(Qd,null,r.createElement(Kd,{src:"https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg",alt:"Marketing Banner"}),r.createElement(Xd,null,"Social Media Banner"),r.createElement(Jd,null,"Download")),r.createElement(Qd,null,r.createElement(Kd,{src:"https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg",alt:"Instagram Post"}),r.createElement(Xd,null,"Instagram Post"),r.createElement(Jd,null,"Download")),r.createElement(Qd,null,r.createElement(Kd,{src:"https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg",alt:"Email Header"}),r.createElement(Xd,null,"Email Header"),r.createElement(Jd,null,"Download")))),r.createElement(FD,null,r.createElement(wt,null,"Tips for Successful Referrals"),r.createElement(LD,null,r.createElement($l,null,r.createElement(xl,null,"💡"),r.createElement(El,null,r.createElement(wl,null,"Be Authentic"),r.createElement(bl,null,"Share your genuine experience with TrueFans CONNECT when talking to other artists."))),r.createElement($l,null,r.createElement(xl,null,"🎯"),r.createElement(El,null,r.createElement(wl,null,"Target the Right Artists"),r.createElement(bl,null,"Focus on artists who already have an engaged fan base that might be willing to support them."))),r.createElement($l,null,r.createElement(xl,null,"📊"),r.createElement(El,null,r.createElement(wl,null,"Share Your Results"),r.createElement(bl,null,"If comfortable, share specific numbers about donations you've received to show the potential."))),r.createElement($l,null,r.createElement(xl,null,"🤝"),r.createElement(El,null,r.createElement(wl,null,"Offer Help"),r.createElement(bl,null,"Offer to help new artists set up their profile and donation systems after they sign up.")))))),e==="earnings"&&r.createElement(DD,null,r.createElement(ND,null,r.createElement(MD,null,r.createElement(RD,null,r.createElement(ID,null,"Total Affiliate Earnings"),r.createElement(BD,null,"$1,245.75")),r.createElement(VD,null,r.createElement(qd,null,r.createElement(Zd,null,"This Month:"),r.createElement(em,null,"$187.50")),r.createElement(qd,null,r.createElement(Zd,null,"Last Month:"),r.createElement(em,null,"$162.25")),r.createElement(qd,null,r.createElement(Zd,null,"Next Payout:"),r.createElement(em,null,"$87.25 (June 15)")))),r.createElement(OD,null,r.createElement(jD,null,"Earnings Breakdown"),r.createElement(WD,null,r.createElement(G0,{width:"65%",color:"#FFD700"},r.createElement(Y0,null,"Tier 1: $121.88 (65%)")),r.createElement(G0,{width:"35%",color:"#FF6B6B"},r.createElement(Y0,null,"Tier 2: $65.62 (35%)"))))),r.createElement(_D,null,r.createElement(wt,null,"Your Referral Network"),r.createElement(UD,null,r.createElement(tm,null,r.createElement(nm,null,"7"),r.createElement(Rr,null,"Direct Referrals (Tier 1)")),r.createElement(tm,null,r.createElement(nm,null,"12"),r.createElement(Rr,null,"Indirect Referrals (Tier 2)")),r.createElement(tm,null,r.createElement(nm,null,"$7,500"),r.createElement(Rr,null,"Network Donation Volume")))),r.createElement(HD,null,r.createElement(Q0,null,r.createElement(K0,null,"Tier 1 Referrals (Direct)"),r.createElement(X0,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement(Ge,null,"Artist"),r.createElement(Ge,null,"Join Date"),r.createElement(Ge,null,"Donations Received"),r.createElement(Ge,null,"Your Commission"))),r.createElement("tbody",null,[{name:"Marcus Rivera",date:"Apr 12, 2023",donations:"$1,245.00",commission:"$31.13"},{name:"Elena Chen",date:"May 3, 2023",donations:"$875.50",commission:"$21.89"},{name:"David Kim",date:"May 15, 2023",donations:"$1,050.00",commission:"$26.25"},{name:"Sophia Patel",date:"Jun 2, 2023",donations:"$725.00",commission:"$18.13"},{name:"James Wilson",date:"Jun 8, 2023",donations:"$980.00",commission:"$24.50"}].map((a,l)=>r.createElement("tr",{key:l},r.createElement(Se,null,a.name),r.createElement(Se,null,a.date),r.createElement(Se,null,a.donations),r.createElement(Se,null,a.commission)))))),r.createElement(Q0,null,r.createElement(K0,null,"Tier 2 Referrals (Indirect)"),r.createElement(X0,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement(Ge,null,"Artist"),r.createElement(Ge,null,"Referred By"),r.createElement(Ge,null,"Donations Received"),r.createElement(Ge,null,"Your Commission"))),r.createElement("tbody",null,[{name:"Michael Johnson",referrer:"Marcus Rivera",donations:"$650.00",commission:"$16.25"},{name:"Olivia Brown",referrer:"Elena Chen",donations:"$425.00",commission:"$10.63"},{name:"Noah Garcia",referrer:"David Kim",donations:"$780.00",commission:"$19.50"},{name:"Emma Martinez",referrer:"Sophia Patel",donations:"$510.00",commission:"$12.75"},{name:"Liam Taylor",referrer:"James Wilson",donations:"$260.00",commission:"$6.50"}].map((a,l)=>r.createElement("tr",{key:l},r.createElement(Se,null,a.name),r.createElement(Se,null,a.referrer),r.createElement(Se,null,a.donations),r.createElement(Se,null,a.commission))))))),r.createElement(GD,null,r.createElement(wt,null,"Earnings History"),r.createElement(YD,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement(Ge,null,"Month"),r.createElement(Ge,null,"Tier 1 Earnings"),r.createElement(Ge,null,"Tier 2 Earnings"),r.createElement(Ge,null,"Total"))),r.createElement("tbody",null,[{month:"June 2023",tier1:"$121.88",tier2:"$65.62",total:"$187.50"},{month:"May 2023",tier1:"$105.46",tier2:"$56.79",total:"$162.25"},{month:"April 2023",tier1:"$98.15",tier2:"$52.85",total:"$151.00"},{month:"March 2023",tier1:"$87.75",tier2:"$47.25",total:"$135.00"},{month:"February 2023",tier1:"$72.80",tier2:"$39.20",total:"$112.00"},{month:"January 2023",tier1:"$65.00",tier2:"$35.00",total:"$100.00"}].map((a,l)=>r.createElement("tr",{key:l},r.createElement(Se,null,a.month),r.createElement(Se,null,a.tier1),r.createElement(Se,null,a.tier2),r.createElement(Se,null,r.createElement("strong",null,a.total))))))),r.createElement(QD,null,r.createElement(wt,null,"Grow Your Earnings"),r.createElement(KD,null,r.createElement(rm,null,r.createElement(om,null,"📈"),r.createElement(im,null,r.createElement(am,null,"Refer More Artists"),r.createElement(lm,null,"The more artists you refer, the more potential earnings you can generate from both tiers."))),r.createElement(rm,null,r.createElement(om,null,"🔄"),r.createElement(im,null,r.createElement(am,null,"Encourage Your Referrals to Refer Others"),r.createElement(lm,null,"Help your direct referrals understand the affiliate program so they can refer others, expanding your Tier 2 network."))),r.createElement(rm,null,r.createElement(om,null,"🎯"),r.createElement(im,null,r.createElement(am,null,"Target Successful Artists"),r.createElement(lm,null,"Focus on referring artists who already have an engaged fan base that's likely to support them financially.")))),r.createElement(XD,null,r.createElement(W0,{onClick:()=>t("referral-tools")},"Get Referral Tools")))))))},BL=s.main`
  width: 100%;
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,VL=s.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,OL=s.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,jL=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,WL=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.lightText};
`,_L=s.div`
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.colors.mediumGray};
  margin-bottom: ${({theme:e})=>e.space.xl};
  overflow-x: auto;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`,vl=s.button`
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
`,UL=s.div`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,HL=s.div``,GL=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.xl};
`,Md=s.div`
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
`,Rd=s.div`
  font-size: ${({theme:e})=>e.fontSizes["4xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Id=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Bd=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,YL=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,QL=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
  text-align: center;
`,KL=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
  
  p {
    margin-bottom: ${({theme:e})=>e.space.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,XL=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.xl};
`,Vd=s.div`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  text-align: center;
  box-shadow: ${({theme:e})=>e.shadows.md};
`,Od=s.div`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Rr=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  opacity: 0.9;
`,JL=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,wt=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,qL=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,M0=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,R0=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-style: italic;
`,I0=s.div`
  display: flex;
  align-items: center;
`,B0=s.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
`,V0=s.div``,O0=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,j0=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,ZL=s.section`
  background-color: ${({theme:e})=>e.colors.primary};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  text-align: center;
  box-shadow: ${({theme:e})=>e.shadows.md};
`,eD=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  margin-bottom: ${({theme:e})=>e.space.md};
`,tD=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,W0=s(W)`
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
`,nD=s.div``,rD=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,oD=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.lg};
`,Jo=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.space.lg};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,qo=s.div`
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
`,Zo=s.div`
  flex: 1;
`,ei=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,ti=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,iD=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,aD=s.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.md};
`,Ge=s.th`
  padding: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  color: white;
  text-align: left;
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
`,Se=s.td`
  padding: ${({theme:e})=>e.space.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.lightGray};
  color: ${({theme:e})=>e.colors.darkText};
  
  &:last-child {
    font-weight: ${({theme:e})=>e.fontWeights.medium};
  }
`,lD=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,sD=s.div`
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
`,cD=s.div``,uD=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,dD=s.ul`
  padding-left: ${({theme:e})=>e.space.lg};
`,jd=s.li`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`,mD=s.div`
  background-color: ${({theme:e})=>e.colors.lightGray};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
`,pD=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,_0=s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.space.sm};
`,U0=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
`,H0=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,fD=s.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({theme:e})=>e.space.md};
  padding-top: ${({theme:e})=>e.space.md};
  border-top: 1px solid ${({theme:e})=>e.colors.mediumGray};
`,hD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,gD=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.secondary};
`,yD=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  font-style: italic;
  margin-top: ${({theme:e})=>e.space.md};
`,vD=s.section``,$D=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,ni=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,ri=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,oi=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,xD=s.div``,ED=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,wD=s.div`
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
`,bD=s.div`
  flex: 1;
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  font-family: monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: ${({theme:e})=>e.space.sm};
`,Wd=s(W)`
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
`,kD=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  font-style: italic;
`,SD=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,TD=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,_d=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Ud=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Hd=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,Gd=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,CD=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.sm};
`,Yd=s(W)`
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
`,zD=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,PD=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,AD=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,Qd=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Kd=s.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`,Xd=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  padding: ${({theme:e})=>`${e.space.md} ${e.space.md} 0`};
`,Jd=s(W)`
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
`,FD=s.section``,LD=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,$l=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.space.md};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,xl=s.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  flex-shrink: 0;
`,El=s.div`
  flex: 1;
`,wl=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,bl=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,DD=s.div``,ND=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,MD=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,RD=s.div`
  margin-bottom: ${({theme:e})=>e.space.lg};
`,ID=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,BD=s.div`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
`,VD=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.sm};
`,qd=s.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({theme:e})=>e.fontSizes.md};
`,Zd=s.div`
  color: ${({theme:e})=>e.colors.lightText};
`,em=s.div`
  color: ${({theme:e})=>e.colors.darkText};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,OD=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,jD=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,WD=s.div`
  display: flex;
  height: 40px;
  border-radius: ${({theme:e})=>e.radii.md};
  overflow: hidden;
  margin-bottom: ${({theme:e})=>e.space.md};
`,G0=s.div`
  width: ${({width:e})=>e};
  background-color: ${({color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,Y0=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
`,_D=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,UD=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,tm=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  text-align: center;
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,nm=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,HD=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
  margin-bottom: ${({theme:e})=>e.space.xl};
`,Q0=s.section``,K0=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,X0=s.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,GD=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
`,YD=s.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,QD=s.section``,KD=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.xl};
`,rm=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.space.md};
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,om=s.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  flex-shrink: 0;
`,im=s.div`
  flex: 1;
`,am=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,lm=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,XD=s.div`
  text-align: center;
`,JD=()=>{const[e,t]=b.useState({name:"",email:"",password:"",confirmPassword:"",genre:"",bio:"",socialLinks:{website:"",instagram:"",spotify:""},referralCode:"",acceptTerms:!1,music:[{title:"",duration:"",audioUrl:"",image:""}],upcomingShows:[{venue:"",location:"",date:"",time:"",ticketPrice:""}]}),[n,o]=b.useState(1),i=m=>{const{name:f,value:g,type:$,checked:x}=m.target;if(f.includes(".")){const[w,v]=f.split(".");t({...e,[w]:{...e[w],[v]:g}})}else t({...e,[f]:$==="checkbox"?x:g})},a=(m,f,g,$)=>{const x=[...e[m]];x[f]={...x[f],[g]:$},t({...e,[m]:x})},l=m=>{m==="music"?t({...e,music:[...e.music,{title:"",duration:"",audioUrl:"",image:""}]}):m==="upcomingShows"&&t({...e,upcomingShows:[...e.upcomingShows,{venue:"",location:"",date:"",time:"",ticketPrice:""}]})},c=(m,f)=>{const g=[...e[m]];g.splice(f,1),t({...e,[m]:g})},u=()=>{o(n+1)},d=()=>{o(n-1)},p=m=>{m.preventDefault(),console.log("Form submitted:",e),alert("Artist account created successfully!")};return r.createElement(qD,{as:ge.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},r.createElement(ZD,null,r.createElement(eN,null,r.createElement(tN,null,r.createElement(nN,null,"Create Your Artist Account"),r.createElement(rN,null,"Start receiving support from your true fans")),r.createElement(oN,null,r.createElement(kl,{active:n>=1},"1"),r.createElement(sm,{active:n>=2}),r.createElement(kl,{active:n>=2},"2"),r.createElement(sm,{active:n>=3}),r.createElement(kl,{active:n>=3},"3"),r.createElement(sm,{active:n>=4}),r.createElement(kl,{active:n>=4},"4")),r.createElement(iN,{onSubmit:p},n===1&&r.createElement(Sl,{as:ge.div,initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3}},r.createElement(Tl,null,"Basic Information"),r.createElement(Te,null,r.createElement(Ae,{htmlFor:"name"},"Artist/Band Name"),r.createElement(Ve,{type:"text",id:"name",name:"name",value:e.name,onChange:i,placeholder:"Enter your artist or band name",required:!0})),r.createElement(Te,null,r.createElement(Ae,{htmlFor:"email"},"Email Address"),r.createElement(Ve,{type:"email",id:"email",name:"email",value:e.email,onChange:i,placeholder:"Enter your email address",required:!0})),r.createElement(Te,null,r.createElement(Ae,{htmlFor:"password"},"Password"),r.createElement(Ve,{type:"password",id:"password",name:"password",value:e.password,onChange:i,placeholder:"Create a password",required:!0})),r.createElement(Te,null,r.createElement(Ae,{htmlFor:"confirmPassword"},"Confirm Password"),r.createElement(Ve,{type:"password",id:"confirmPassword",name:"confirmPassword",value:e.confirmPassword,onChange:i,placeholder:"Confirm your password",required:!0})),r.createElement(Te,null,r.createElement(Ae,{htmlFor:"referralCode"},"Referral Code (Optional)"),r.createElement(Ve,{type:"text",id:"referralCode",name:"referralCode",value:e.referralCode,onChange:i,placeholder:"Enter referral code if you have one"}),r.createElement(Cl,null,"If another artist referred you, enter their code here")),r.createElement(zl,null,r.createElement(cm,{onClick:u},"Continue"))),n===2&&r.createElement(Sl,{as:ge.div,initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3}},r.createElement(Tl,null,"Artist Profile"),r.createElement(Te,null,r.createElement(Ae,{htmlFor:"genre"},"Music Genre"),r.createElement(lN,{id:"genre",name:"genre",value:e.genre,onChange:i,required:!0},r.createElement("option",{value:""},"Select your primary genre"),r.createElement("option",{value:"rock"},"Rock"),r.createElement("option",{value:"pop"},"Pop"),r.createElement("option",{value:"hiphop"},"Hip Hop"),r.createElement("option",{value:"rnb"},"R&B"),r.createElement("option",{value:"electronic"},"Electronic"),r.createElement("option",{value:"jazz"},"Jazz"),r.createElement("option",{value:"classical"},"Classical"),r.createElement("option",{value:"folk"},"Folk"),r.createElement("option",{value:"country"},"Country"),r.createElement("option",{value:"metal"},"Metal"),r.createElement("option",{value:"other"},"Other"))),r.createElement(Te,null,r.createElement(Ae,{htmlFor:"bio"},"Artist Bio"),r.createElement(sN,{id:"bio",name:"bio",value:e.bio,onChange:i,placeholder:"Tell your fans about yourself and your music",rows:"4",required:!0})),r.createElement(Te,null,r.createElement(Ae,{htmlFor:"website"},"Website (Optional)"),r.createElement(Ve,{type:"url",id:"website",name:"socialLinks.website",value:e.socialLinks.website,onChange:i,placeholder:"https://yourwebsite.com"})),r.createElement(Te,null,r.createElement(Ae,{htmlFor:"instagram"},"Instagram (Optional)"),r.createElement(Ve,{type:"text",id:"instagram",name:"socialLinks.instagram",value:e.socialLinks.instagram,onChange:i,placeholder:"@yourusername"})),r.createElement(Te,null,r.createElement(Ae,{htmlFor:"spotify"},"Spotify (Optional)"),r.createElement(Ve,{type:"text",id:"spotify",name:"socialLinks.spotify",value:e.socialLinks.spotify,onChange:i,placeholder:"Your Spotify artist link"})),r.createElement(zl,null,r.createElement(um,{onClick:d},"Back"),r.createElement(cm,{onClick:u},"Continue"))),n===3&&r.createElement(Sl,{as:ge.div,initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3}},r.createElement(Tl,null,"Your Music (Optional)"),r.createElement(Cl,null,"Add tracks that fans can listen to on your profile. You can add more later."),e.music.map((m,f)=>r.createElement(uN,{key:f},r.createElement(dN,null,r.createElement(mN,null,"Track ",f+1),f>0&&r.createElement(J0,{type:"button",onClick:()=>c("music",f)},"Remove")),r.createElement(Te,null,r.createElement(Ae,{htmlFor:`track-title-${f}`},"Track Title"),r.createElement(Ve,{type:"text",id:`track-title-${f}`,value:m.title,onChange:g=>a("music",f,"title",g.target.value),placeholder:"Enter track title"})),r.createElement(Te,null,r.createElement(Ae,{htmlFor:`track-duration-${f}`},"Duration"),r.createElement(Ve,{type:"text",id:`track-duration-${f}`,value:m.duration,onChange:g=>a("music",f,"duration",g.target.value),placeholder:"e.g. 3:42"})),r.createElement(Te,null,r.createElement(Ae,{htmlFor:`track-audio-${f}`},"Audio URL"),r.createElement(Ve,{type:"url",id:`track-audio-${f}`,value:m.audioUrl,onChange:g=>a("music",f,"audioUrl",g.target.value),placeholder:"Link to your audio file (MP3, WAV, etc.)"}),r.createElement(Cl,null,"Provide a link to your audio file hosted on SoundCloud, Dropbox, Google Drive, etc.")),r.createElement(Te,null,r.createElement(Ae,{htmlFor:`track-image-${f}`},"Track Image URL (Optional)"),r.createElement(Ve,{type:"url",id:`track-image-${f}`,value:m.image,onChange:g=>a("music",f,"image",g.target.value),placeholder:"Link to track artwork image"})))),r.createElement(q0,{type:"button",onClick:()=>l("music")},"+ Add Another Track"),r.createElement(zl,null,r.createElement(um,{onClick:d},"Back"),r.createElement(cm,{onClick:u},"Continue"))),n===4&&r.createElement(Sl,{as:ge.div,initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3}},r.createElement(Tl,null,"Upcoming Shows (Optional)"),r.createElement(Cl,null,"Add your upcoming performances. You can add more or update these later."),e.upcomingShows.map((m,f)=>r.createElement(pN,{key:f},r.createElement(fN,null,r.createElement(hN,null,"Show ",f+1),f>0&&r.createElement(J0,{type:"button",onClick:()=>c("upcomingShows",f)},"Remove")),r.createElement(Te,null,r.createElement(Ae,{htmlFor:`show-venue-${f}`},"Venue Name"),r.createElement(Ve,{type:"text",id:`show-venue-${f}`,value:m.venue,onChange:g=>a("upcomingShows",f,"venue",g.target.value),placeholder:"Enter venue name"})),r.createElement(Te,null,r.createElement(Ae,{htmlFor:`show-location-${f}`},"Location"),r.createElement(Ve,{type:"text",id:`show-location-${f}`,value:m.location,onChange:g=>a("upcomingShows",f,"location",g.target.value),placeholder:"City, State"})),r.createElement(aN,null,r.createElement(Te,null,r.createElement(Ae,{htmlFor:`show-date-${f}`},"Date"),r.createElement(Ve,{type:"date",id:`show-date-${f}`,value:m.date,onChange:g=>a("upcomingShows",f,"date",g.target.value)})),r.createElement(Te,null,r.createElement(Ae,{htmlFor:`show-time-${f}`},"Time"),r.createElement(Ve,{type:"time",id:`show-time-${f}`,value:m.time,onChange:g=>a("upcomingShows",f,"time",g.target.value)}))),r.createElement(Te,null,r.createElement(Ae,{htmlFor:`show-price-${f}`},"Ticket Price ($)"),r.createElement(Ve,{type:"number",id:`show-price-${f}`,value:m.ticketPrice,onChange:g=>a("upcomingShows",f,"ticketPrice",g.target.value),placeholder:"0.00",min:"0",step:"0.01"})))),r.createElement(q0,{type:"button",onClick:()=>l("upcomingShows")},"+ Add Another Show"),r.createElement(gN,null,r.createElement(yN,null,"How It Works"),r.createElement(vN,null,r.createElement(Pl,null,"You'll receive 80% of all donations from your fans"),r.createElement(Pl,null,"Payments are processed securely through Stripe"),r.createElement(Pl,null,"You'll get access to your donation page, QR code, and embed widget"),r.createElement(Pl,null,"Funds are transferred to your bank account weekly"))),r.createElement($N,null,r.createElement(xN,null,"Affiliate Program"),r.createElement(EN,null,r.createElement(Al,null,"You're automatically enrolled in our affiliate program"),r.createElement(Al,null,"Earn 2.5% of all donations received by artists you refer"),r.createElement(Al,null,"Earn 2.5% of all donations from artists referred by your referrals"),r.createElement(Al,null,"Your unique referral link will be available in your dashboard"))),r.createElement(Te,null,r.createElement(wN,null,r.createElement(bN,{type:"checkbox",id:"acceptTerms",name:"acceptTerms",checked:e.acceptTerms,onChange:i,required:!0}),r.createElement(kN,{htmlFor:"acceptTerms"},"I agree to the ",r.createElement(Z0,{href:"#",target:"_blank"},"Terms of Service")," and ",r.createElement(Z0,{href:"#",target:"_blank"},"Privacy Policy")))),r.createElement(zl,null,r.createElement(um,{onClick:d},"Back"),r.createElement(cN,{type:"submit"},"Create Account")))))))},qD=s.main`
  width: 100%;
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,ZD=s.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,eN=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  padding: ${({theme:e})=>e.space.xl};
`,tN=s.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,nN=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,rN=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
`,oN=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,kl=s.div`
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
`,sm=s.div`
  height: 3px;
  width: 60px;
  background-color: ${({theme:e,active:t})=>t?e.colors.primary:e.colors.lightGray};
  transition: ${({theme:e})=>e.transitions.default};
`,iN=s.form`
  width: 100%;
`,Sl=s.div`
  width: 100%;
`,Tl=s.h2`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,Te=s.div`
  margin-bottom: ${({theme:e})=>e.space.lg};
`,aN=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Ae=s.label`
  display: block;
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Ve=s.input`
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
`,Cl=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  margin-top: ${({theme:e})=>e.space.xs};
`,lN=s.select`
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
`,sN=s.textarea`
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
`,zl=s.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({theme:e})=>e.space.xl};
`,cm=s(W)`
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
`,um=s(W)`
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
`,cN=s(W)`
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
`,uN=s.div`
  background-color: ${({theme:e})=>e.colors.background};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
  border-left: 3px solid ${({theme:e})=>e.colors.primary};
`,dN=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.space.md};
`,mN=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,pN=s.div`
  background-color: ${({theme:e})=>e.colors.background};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
  border-left: 3px solid ${({theme:e})=>e.colors.trustworthyNavy};
`,fN=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.space.md};
`,hN=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,J0=s.button`
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
`,q0=s.button`
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
`,gN=s.div`
  background-color: ${({theme:e})=>e.colors.lightGray};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,yN=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,vN=s.ul`
  padding-left: ${({theme:e})=>e.space.lg};
`,Pl=s.li`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`,$N=s.div`
  background-color: ${({theme:e})=>e.colors.primary+"15"};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.lg};
  border-left: 4px solid ${({theme:e})=>e.colors.primary};
`,xN=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,EN=s.ul`
  padding-left: ${({theme:e})=>e.space.lg};
`,Al=s.li`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`,wN=s.div`
  display: flex;
  align-items: flex-start;
`,bN=s.input`
  margin-top: 4px;
  margin-right: ${({theme:e})=>e.space.sm};
`,kN=s.label`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,Z0=s.a`
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,SN=()=>r.createElement(TN,{as:ge.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},r.createElement(CN,null,r.createElement(zN,null,r.createElement(PN,null,r.createElement(AN,null,"Welcome back, Sarah"),r.createElement(FN,null,"Here's an overview of your artist account")),r.createElement(LN,null,r.createElement(ev,null,"Edit Profile"),r.createElement(ev,{variant:"secondary",as:ne,to:"/artist-profile"},"View Public Profile"))),r.createElement(DN,null,r.createElement(NN,null,r.createElement(MN,null,r.createElement(Fl,null,r.createElement(Ll,null,"💰"),r.createElement(Dl,null,r.createElement(Nl,null,"$1,245.00"),r.createElement(Wt,null,"Total Donations"))),r.createElement(Fl,null,r.createElement(Ll,null,"👥"),r.createElement(Dl,null,r.createElement(Nl,null,"87"),r.createElement(Wt,null,"Supporters"))),r.createElement(Fl,null,r.createElement(Ll,null,"📊"),r.createElement(Dl,null,r.createElement(Nl,null,"$28.50"),r.createElement(Wt,null,"Average Donation"))),r.createElement(Fl,null,r.createElement(Ll,null,"📱"),r.createElement(Dl,null,r.createElement(Nl,null,"342"),r.createElement(Wt,null,"Profile Views")))),r.createElement(dm,null,r.createElement(mm,null,r.createElement(pm,null,"Recent Donations"),r.createElement(fm,null,"View All")),r.createElement(RN,null,[1,2,3,4,5].map(e=>r.createElement(IN,{key:e},r.createElement(BN,null,r.createElement(VN,null,"$",Math.floor(Math.random()*50)+5,".00"),r.createElement(ON,null,r.createElement(jN,null,"Fan #",Math.floor(Math.random()*1e3)+1),r.createElement(WN,null,Math.floor(Math.random()*24)+1,"h ago")),Math.random()>.5&&r.createElement(_N,null,`"Keep up the amazing music! Can't wait for your next album."`)),r.createElement(UN,null,r.createElement(HN,null,"Thank")))))),r.createElement(dm,null,r.createElement(mm,null,r.createElement(pm,null,"Donation Methods"),r.createElement(fm,{as:ne,to:"/donation-system"},"Manage")),r.createElement(GN,null,r.createElement(hm,null,r.createElement(gm,null,"🔗"),r.createElement(ym,null,r.createElement(vm,null,"Donation Link"),r.createElement($m,null,r.createElement(Ir,null,r.createElement(Br,null,"124"),r.createElement(Wt,null,"Clicks")),r.createElement(Ir,null,r.createElement(Br,null,"$685"),r.createElement(Wt,null,"Revenue")))),r.createElement(xm,null,r.createElement(Em,null,"Copy Link"))),r.createElement(hm,null,r.createElement(gm,null,"📱"),r.createElement(ym,null,r.createElement(vm,null,"QR Code"),r.createElement($m,null,r.createElement(Ir,null,r.createElement(Br,null,"56"),r.createElement(Wt,null,"Scans")),r.createElement(Ir,null,r.createElement(Br,null,"$320"),r.createElement(Wt,null,"Revenue")))),r.createElement(xm,null,r.createElement(Em,null,"Download"))),r.createElement(hm,null,r.createElement(gm,null,"💻"),r.createElement(ym,null,r.createElement(vm,null,"Embed Widget"),r.createElement($m,null,r.createElement(Ir,null,r.createElement(Br,null,"43"),r.createElement(Wt,null,"Views")),r.createElement(Ir,null,r.createElement(Br,null,"$240"),r.createElement(Wt,null,"Revenue")))),r.createElement(xm,null,r.createElement(Em,null,"Get Code"))))),r.createElement(dm,null,r.createElement(mm,null,r.createElement(pm,null,"Affiliate Program"),r.createElement(fm,{as:ne,to:"/affiliate-program"},"View Details")),r.createElement(YN,null,r.createElement(QN,null,r.createElement(KN,null,"🔄"),r.createElement(XN,null,r.createElement(JN,null,"Earn by Referring Other Artists"),r.createElement(qN,null,"Earn 2.5% of all donations received by artists you refer, plus 2.5% from artists they refer."),r.createElement(ZN,null,r.createElement(tv,null,r.createElement(nv,null,"7"),r.createElement(rv,null,"Artists Referred")),r.createElement(tv,null,r.createElement(nv,null,"$187.50"),r.createElement(rv,null,"Earnings This Month"))))),r.createElement(eM,null,r.createElement(ov,{as:ne,to:"/affiliate-program"},"Manage Referrals"),r.createElement(ov,{variant:"secondary"},"Copy Referral Link"))))),r.createElement(tM,null,r.createElement(nM,null,r.createElement(rM,null,r.createElement(oM,null,"Next Payout"),r.createElement(iM,null,"$245.60")),r.createElement(aM,null,r.createElement(lM,null,"Scheduled for Monday, June 12"),r.createElement(sM,null,"Deposit to ****4567")),r.createElement(cM,null,r.createElement(iv,null,"View History"),r.createElement(iv,{variant:"outline"},"Update Bank"))),r.createElement(uM,null,r.createElement(dM,null,r.createElement(mM,null,"Boost Your Donations")),r.createElement(pM,null,r.createElement(Ml,null,r.createElement(Rl,null,"🎯"),r.createElement(Il,null,"Share your donation link in your next social media post")),r.createElement(Ml,null,r.createElement(Rl,null,"🎤"),r.createElement(Il,null,"Display your QR code at your next live performance")),r.createElement(Ml,null,r.createElement(Rl,null,"📧"),r.createElement(Il,null,"Include your donation link in your email newsletter")),r.createElement(Ml,null,r.createElement(Rl,null,"🎵"),r.createElement(Il,null,"Add your donation widget to your music streaming profiles"))),r.createElement(fM,null,r.createElement(hM,null,"Get Marketing Kit"))),r.createElement(gM,null,r.createElement(yM,null,r.createElement(vM,null,"Need Help?")),r.createElement($M,null,r.createElement(wm,null,r.createElement(bm,null,"📚"),r.createElement(km,null,"Browse Help Center")),r.createElement(wm,null,r.createElement(bm,null,"💬"),r.createElement(km,null,"Chat with Support")),r.createElement(wm,null,r.createElement(bm,null,"📞"),r.createElement(km,null,"Schedule a Call")))))))),TN=s.main`
  width: 100%;
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,CN=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,zN=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:e})=>e.space.lg};
  }
`,PN=s.div``,AN=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,FN=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
`,LN=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`,ev=s(W)`
  padding: ${({theme:e})=>`${e.space.sm} ${e.space.lg}`};
  background-color: ${({theme:e,variant:t})=>t==="secondary"?"transparent":e.colors.primary};
  color: ${({theme:e,variant:t})=>t==="secondary"?e.colors.darkText:e.colors.trustworthyNavy};
  border: ${({theme:e,variant:t})=>t==="secondary"?`1px solid ${e.colors.mediumGray}`:"none"};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e,variant:t})=>t==="secondary"?e.colors.lightGray:e.colors.primaryDark};
  }
`,DN=s.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,NN=s.div``,MN=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  margin-bottom: ${({theme:e})=>e.space.xl};
`,Fl=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  display: flex;
  align-items: center;
`,Ll=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-right: ${({theme:e})=>e.space.md};
`,Dl=s.div``,Nl=s.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Wt=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,dm=s.section`
  margin-bottom: ${({theme:e})=>e.space.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`,mm=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.space.lg};
`,pm=s.h2`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,fm=s.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.primary};
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    text-decoration: underline;
  }
`,RN=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,IN=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:e})=>e.space.md};
  }
`,BN=s.div`
  flex: 1;
`,VN=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,ON=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.sm};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,jN=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,WN=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkGray};
`,_N=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  font-style: italic;
`,UN=s.div``,HN=s(W)`
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
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
  }
`,GN=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
`,hm=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  display: flex;
  align-items: center;
`,gm=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-right: ${({theme:e})=>e.space.md};
`,ym=s.div`
  flex: 1;
`,vm=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,$m=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
`,Ir=s.div``,Br=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,xm=s.div``,Em=s(W)`
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
`,YN=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,QN=s.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`,KN=s.div`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  margin-right: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    margin-right: 0;
    margin-bottom: ${({theme:e})=>e.space.md};
  }
`,XN=s.div`
  flex: 1;
`,JN=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,qN=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,ZN=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    justify-content: center;
  }
`,tv=s.div``,nv=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
`,rv=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,eM=s.div`
  display: flex;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,ov=s(W)`
  flex: 1;
  padding: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e,variant:t})=>t==="secondary"?"transparent":e.colors.secondary};
  color: ${({theme:e,variant:t})=>t==="secondary"?e.colors.darkText:"white"};
  border: ${({theme:e,variant:t})=>t==="secondary"?`1px solid ${e.colors.mediumGray}`:"none"};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e,variant:t})=>t==="secondary"?e.colors.lightGray:e.colors.secondaryDark};
  }
`,tM=s.aside`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
`,nM=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,rM=s.div`
  margin-bottom: ${({theme:e})=>e.space.md};
`,oM=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,iM=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
`,aM=s.div`
  margin-bottom: ${({theme:e})=>e.space.lg};
`,lM=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,sM=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,cM=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.sm};
`,iv=s(W)`
  padding: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e,variant:t})=>t==="outline"?"transparent":e.colors.primary};
  color: ${({theme:e,variant:t})=>t==="outline"?e.colors.darkText:e.colors.trustworthyNavy};
  border: ${({theme:e,variant:t})=>t==="outline"?`1px solid ${e.colors.mediumGray}`:"none"};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e,variant:t})=>t==="outline"?e.colors.lightGray:e.colors.primaryDark};
  }
`,uM=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,dM=s.div`
  margin-bottom: ${({theme:e})=>e.space.md};
`,mM=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,pM=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,Ml=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.space.sm};
`,Rl=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
`,Il=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,fM=s.div``,hM=s(W)`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
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
`,gM=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,yM=s.div`
  margin-bottom: ${({theme:e})=>e.space.md};
`,vM=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
`,$M=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,wm=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.space.md};
  padding: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e})=>e.colors.lightGray};
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.mediumGray};
  }
`,bm=s.div`
  font-size: ${({theme:e})=>e.fontSizes.lg};
`,km=s.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
`,xM=()=>{const[e,t]=b.useState(""),[n,o]=b.useState(""),[i,a]=b.useState(!1),[l,c]=b.useState(""),u=na(),d=p=>{if(p.preventDefault(),c(""),!e||!n){c("Please fill in all fields");return}e==="sarah@example.com"&&n==="password"?u("/my-dashboard"):c("Invalid email or password")};return r.createElement(EM,{as:ge.main,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},r.createElement(wM,null,r.createElement(bM,null,r.createElement(kM,null,r.createElement(SM,null,"Log in to your account"),r.createElement(TM,null,"Welcome back! Please enter your details.")),l&&r.createElement(CM,null,l),r.createElement(zM,{onSubmit:d},r.createElement(Sm,null,r.createElement(av,{htmlFor:"email"},"Email"),r.createElement(lv,{type:"email",id:"email",placeholder:"Enter your email",value:e,onChange:p=>t(p.target.value)})),r.createElement(Sm,null,r.createElement(PM,null,r.createElement(av,{htmlFor:"password"},"Password"),r.createElement(AM,{to:"/forgot-password"},"Forgot password?")),r.createElement(lv,{type:"password",id:"password",placeholder:"Enter your password",value:n,onChange:p=>o(p.target.value)})),r.createElement(Sm,null,r.createElement(FM,null,r.createElement(LM,null,r.createElement(DM,{type:"checkbox",id:"remember",checked:i,onChange:()=>a(!i)}),r.createElement(NM,{htmlFor:"remember"},"Remember me")))),r.createElement(MM,{type:"submit"},"Log in"),r.createElement(RM,null,r.createElement(IM,null,"Demo Credentials"),r.createElement(sv,null,"Email: sarah@example.com"),r.createElement(sv,null,"Password: password"))),r.createElement(BM,null,"Don't have an account? ",r.createElement(VM,{to:"/artist-signup"},"Sign up")))))},EM=s.main`
  width: 100%;
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,wM=s.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,bM=s.div`
  max-width: 450px;
  margin: 0 auto;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,kM=s.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.space.xl};
`,SM=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,TM=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,CM=s.div`
  background-color: ${({theme:e})=>e.colors.errorLight};
  color: ${({theme:e})=>e.colors.error};
  padding: ${({theme:e})=>e.space.md};
  border-radius: ${({theme:e})=>e.radii.md};
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-size: ${({theme:e})=>e.fontSizes.md};
`,zM=s.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.lg};
`,Sm=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xs};
`,av=s.label`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
`,PM=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,AM=s(ne)`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,lv=s.input`
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
`,FM=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,LM=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.space.xs};
`,DM=s.input`
  width: 18px;
  height: 18px;
  accent-color: ${({theme:e})=>e.colors.primary};
`,NM=s.label`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
`,MM=s(W)`
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
`,RM=s.div`
  background-color: ${({theme:e})=>e.colors.lightGray};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.space.md};
  margin-top: ${({theme:e})=>e.space.md};
`,IM=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,sv=s.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,BM=s.div`
  text-align: center;
  margin-top: ${({theme:e})=>e.space.xl};
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
`,VM=s(ne)`
  color: ${({theme:e})=>e.colors.primary};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,OM=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
  text-align: center;
`,jM=s.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.colors.primary};
`,WM=s.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`,_M=s(ne)`
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
`,UM=()=>r.createElement(OM,null,r.createElement(jM,null,"404 - Page Not Found"),r.createElement(WM,null,"Oops! The page you're looking for doesn't exist or has been moved. We're sorry for the inconvenience."),r.createElement(_M,{to:"/"},"Return to Home")),HM={initial:{opacity:0},in:{opacity:1},out:{opacity:0}},GM={type:"tween",ease:"easeInOut",duration:.3},IE=({children:e})=>r.createElement(YM,{initial:"initial",animate:"in",exit:"out",variants:HM,transition:GM},e),YM=s(ge.main)`
  width: 100%;
  min-height: calc(100vh - 200px); /* Adjust based on header/footer heights */
`,QM=()=>{const[e,t]=b.useState({name:"",email:"",subject:"",message:"",userType:"fan"}),[n,o]=b.useState(!1),i=l=>{const{name:c,value:u}=l.target;t(d=>({...d,[c]:u}))},a=l=>{l.preventDefault(),console.log("Form submitted:",e),o(!0),t({name:"",email:"",subject:"",message:"",userType:"fan"}),setTimeout(()=>{o(!1)},5e3)};return r.createElement(IE,null,r.createElement(KM,null,r.createElement(Tm,null,r.createElement(XM,null,r.createElement(JM,null,"Contact Us"),r.createElement(qM,null,"Get in touch with the TrueFans CONNECT™ team")))),r.createElement(ZM,null,r.createElement(Tm,null,r.createElement(eR,null,r.createElement(tR,null,r.createElement(Cm,null,"Send Us a Message"),n?r.createElement(aR,null,r.createElement(lR,null,"✓"),r.createElement(sR,null,r.createElement(cR,null,"Message Sent!"),r.createElement(uR,null,"Thank you for contacting us. We'll get back to you as soon as possible."))):r.createElement(nR,{onSubmit:a},r.createElement(ii,null,r.createElement(ai,{htmlFor:"name"},"Your Name"),r.createElement(zm,{type:"text",id:"name",name:"name",value:e.name,onChange:i,required:!0})),r.createElement(ii,null,r.createElement(ai,{htmlFor:"email"},"Email Address"),r.createElement(zm,{type:"email",id:"email",name:"email",value:e.email,onChange:i,required:!0})),r.createElement(ii,null,r.createElement(ai,{htmlFor:"userType"},"I am a:"),r.createElement(rR,{id:"userType",name:"userType",value:e.userType,onChange:i},r.createElement("option",{value:"fan"},"Fan"),r.createElement("option",{value:"artist"},"Artist"),r.createElement("option",{value:"venue"},"Venue Owner"),r.createElement("option",{value:"press"},"Press/Media"),r.createElement("option",{value:"other"},"Other"))),r.createElement(ii,null,r.createElement(ai,{htmlFor:"subject"},"Subject"),r.createElement(zm,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:i,required:!0})),r.createElement(ii,null,r.createElement(ai,{htmlFor:"message"},"Message"),r.createElement(oR,{id:"message",name:"message",value:e.message,onChange:i,rows:"6",required:!0})),r.createElement(iR,{type:"submit"},"Send Message"))),r.createElement(dR,null,r.createElement(Cm,null,"Contact Information"),r.createElement(mR,null,r.createElement(Pm,null,r.createElement(Am,null,"📧"),r.createElement(Fm,null,r.createElement(Lm,null,"Email Us"),r.createElement(Dm,null,r.createElement(cv,{href:"mailto:info@truefans.connect"},"info@truefans.connect")))),r.createElement(Pm,null,r.createElement(Am,null,"📞"),r.createElement(Fm,null,r.createElement(Lm,null,"Call Us"),r.createElement(Dm,null,r.createElement(cv,{href:"tel:+15551234567"},"(555) 123-4567")))),r.createElement(Pm,null,r.createElement(Am,null,"📍"),r.createElement(Fm,null,r.createElement(Lm,null,"Visit Us"),r.createElement(Dm,null,"123 Music Avenue",r.createElement("br",null),"Nashville, TN 37203",r.createElement("br",null),"United States")))),r.createElement(Cm,null,"Department Contacts"),r.createElement(pR,null,r.createElement(Bl,null,r.createElement(Vl,null,"Artist Support"),r.createElement(Ol,{href:"mailto:artists@truefans.connect"},"artists@truefans.connect"),r.createElement(jl,null,"For questions related to artist accounts, features, and support.")),r.createElement(Bl,null,r.createElement(Vl,null,"Venue Relations"),r.createElement(Ol,{href:"mailto:venues@truefans.connect"},"venues@truefans.connect"),r.createElement(jl,null,"For venue owners interested in joining our network or current venue partners.")),r.createElement(Bl,null,r.createElement(Vl,null,"Press & Media"),r.createElement(Ol,{href:"mailto:press@truefans.connect"},"press@truefans.connect"),r.createElement(jl,null,"For media inquiries, interview requests, and press materials.")),r.createElement(Bl,null,r.createElement(Vl,null,"Partnerships"),r.createElement(Ol,{href:"mailto:partnerships@truefans.connect"},"partnerships@truefans.connect"),r.createElement(jl,null,"For business development and strategic partnership opportunities."))),r.createElement(fR,null,r.createElement(hR,null,"Connect With Us"),r.createElement(gR,null,r.createElement(_l,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer"},r.createElement(Wl,null,r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}))),"Twitter"),r.createElement(_l,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer"},r.createElement(Wl,null,r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),r.createElement("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),r.createElement("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}))),"Instagram"),r.createElement(_l,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer"},r.createElement(Wl,null,r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}))),"Facebook"),r.createElement(_l,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer"},r.createElement(Wl,null,r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),r.createElement("rect",{x:"2",y:"9",width:"4",height:"12"}),r.createElement("circle",{cx:"4",cy:"4",r:"2"}))),"LinkedIn"))))))),r.createElement(yR,null,r.createElement(Tm,null,r.createElement(vR,null,"Frequently Asked Questions"),r.createElement($R,null,r.createElement(Ul,null,r.createElement(Hl,null,"How quickly can I expect a response?"),r.createElement(Gl,null,"We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please indicate this in your subject line.")),r.createElement(Ul,null,r.createElement(Hl,null,"I'm having technical issues with the platform. Who should I contact?"),r.createElement(Gl,null,"For technical support, please email support@truefans.connect with details of the issue you're experiencing, including screenshots if possible.")),r.createElement(Ul,null,r.createElement(Hl,null,"How can I request a feature for the platform?"),r.createElement(Gl,null,"We welcome feature suggestions! Please email features@truefans.connect with your ideas, and our product team will review them.")),r.createElement(Ul,null,r.createElement(Hl,null,"Do you offer phone support?"),r.createElement(Gl,null,"While email is our primary support channel, we can arrange phone support for complex issues that require real-time assistance."))))))},KM=s.section`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  padding: ${({theme:e})=>e.space.xl} 0;
  color: white;
`,Tm=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,XM=s.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`,JM=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.md};
`,qM=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  opacity: 0.9;
  line-height: 1.5;
`,ZM=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,eR=s.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,Cm=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,tR=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,nR=s.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,ii=s.div`
  display: flex;
  flex-direction: column;
`,ai=s.label`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,zm=s.input`
  padding: ${({theme:e})=>e.space.md};
  border: 1px solid ${({theme:e})=>e.colors.mediumGray};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>`${e.colors.primary}33`};
  }
`,rR=s.select`
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
`,oR=s.textarea`
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
`,iR=s(W)`
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.trustworthyNavy};
  padding: ${({theme:e})=>e.space.md};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  margin-top: ${({theme:e})=>e.space.md};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
    text-decoration: none;
  }
`,aR=s.div`
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>`${e.colors.primary}15`};
  border: 1px solid ${({theme:e})=>e.colors.primary};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
`,lR=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${({theme:e})=>e.colors.primary};
  color: white;
  border-radius: 50%;
  font-size: ${({theme:e})=>e.fontSizes.xl};
  margin-right: ${({theme:e})=>e.space.lg};
  flex-shrink: 0;
`,sR=s.div``,cR=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,uR=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,dR=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
`,mR=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,Pm=s.div`
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
`,Am=s.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  margin-right: ${({theme:e})=>e.space.md};
  flex-shrink: 0;
`,Fm=s.div`
  flex: 1;
`,Lm=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Dm=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,cv=s.a`
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,pR=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.space.md};
`,Bl=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.md};
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,Vl=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Ol=s.a`
  display: block;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.primary};
  margin-bottom: ${({theme:e})=>e.space.sm};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,jl=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,fR=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,hR=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,gR=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.space.md};
`,Wl=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({theme:e})=>e.space.xs};
`,_l=s.a`
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>`${e.space.sm} ${e.space.md}`};
  background-color: ${({theme:e})=>e.colors.lightGray};
  color: ${({theme:e})=>e.colors.darkText};
  border-radius: ${({theme:e})=>e.radii.md};
  text-decoration: none;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.trustworthyNavy};
    text-decoration: none;
  }
`,yR=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: white;
`,vR=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xl};
  text-align: center;
`,$R=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: ${({theme:e})=>e.space.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Ul=s.div`
  background-color: ${({theme:e})=>e.colors.background};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({theme:e})=>e.shadows.md};
  }
`,Hl=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,Gl=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
`,xR=()=>{Mx();const e=yr(),t=new URLSearchParams(e.search),[n,o]=b.useState({artistName:"",email:"",phone:"",genre:"",socialLinks:"",musicLinks:"",preferredDates:"",message:"",agreeToTerms:!1,joinTrueFans:!1}),[i,a]=b.useState({name:t.get("venueName")||"Music Venue",primaryColor:t.get("primaryColor")||"#FFD700",secondaryColor:t.get("secondaryColor")||"#1A2B4C",logo:t.get("logo")||null,backgroundImage:t.get("bgImage")||null}),[l,c]=b.useState(!1),[u,d]=b.useState(!1),[p,m]=b.useState(null),f=x=>{const{name:w,value:v,type:h,checked:y}=x.target;o({...n,[w]:h==="checkbox"?y:v})},g=x=>{x.preventDefault(),c(!0),m(null),setTimeout(()=>{try{console.log("Form submitted:",n),d(!0),c(!1)}catch{m("There was an error submitting your application. Please try again."),c(!1)}},1500)};b.useEffect(()=>{if(u){const x=setTimeout(()=>{o({artistName:"",email:"",phone:"",genre:"",socialLinks:"",musicLinks:"",preferredDates:"",message:"",agreeToTerms:!1,joinTrueFans:!1}),d(!1)},5e3);return()=>clearTimeout(x)}},[u]);const $={primaryColor:i.primaryColor,secondaryColor:i.secondaryColor,backgroundImage:i.backgroundImage?`url(${i.backgroundImage})`:"none"};return r.createElement(ER,{as:ge.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{backgroundImage:$.backgroundImage,backgroundColor:$.backgroundImage==="none"?"#f9f9f9":"transparent"}},r.createElement(wR,null,r.createElement(bR,{style:{backgroundColor:$.secondaryColor}},i.logo&&r.createElement(kR,{src:i.logo,alt:`${i.name} logo`}),r.createElement(SR,null,i.name," Live Music Submission"),r.createElement(TR,null,"Apply to perform at our venue")),u?r.createElement(DR,null,r.createElement(NR,null,"✓"),r.createElement(MR,null,"Application Submitted!"),r.createElement(RR,null,"Thank you for your submission. ",i.name," will review your application and contact you if there's a good fit.",n.joinTrueFans&&r.createElement("span",null," You'll also receive an email from TrueFans CONNECT with information about creating your artist account."))):r.createElement(CR,{onSubmit:g},r.createElement(Yl,null,r.createElement(Nm,null,"Artist Information"),r.createElement(gn,null,r.createElement(yn,{htmlFor:"artistName"},"Artist/Band Name *"),r.createElement(Mm,{type:"text",id:"artistName",name:"artistName",value:n.artistName,onChange:f,required:!0,placeholder:"Your artist or band name"})),r.createElement(zR,null,r.createElement(gn,null,r.createElement(yn,{htmlFor:"email"},"Email Address *"),r.createElement(Mm,{type:"email",id:"email",name:"email",value:n.email,onChange:f,required:!0,placeholder:"your.email@example.com"})),r.createElement(gn,null,r.createElement(yn,{htmlFor:"phone"},"Phone Number"),r.createElement(Mm,{type:"tel",id:"phone",name:"phone",value:n.phone,onChange:f,placeholder:"(123) 456-7890"}))),r.createElement(gn,null,r.createElement(yn,{htmlFor:"genre"},"Music Genre *"),r.createElement(PR,{id:"genre",name:"genre",value:n.genre,onChange:f,required:!0},r.createElement("option",{value:""},"Select your genre"),r.createElement("option",{value:"rock"},"Rock"),r.createElement("option",{value:"jazz"},"Jazz"),r.createElement("option",{value:"blues"},"Blues"),r.createElement("option",{value:"folk"},"Folk"),r.createElement("option",{value:"country"},"Country"),r.createElement("option",{value:"pop"},"Pop"),r.createElement("option",{value:"electronic"},"Electronic"),r.createElement("option",{value:"hip-hop"},"Hip Hop"),r.createElement("option",{value:"r-and-b"},"R&B"),r.createElement("option",{value:"classical"},"Classical"),r.createElement("option",{value:"world"},"World"),r.createElement("option",{value:"other"},"Other")))),r.createElement(Yl,null,r.createElement(Nm,null,"Music & Social Media"),r.createElement(gn,null,r.createElement(yn,{htmlFor:"socialLinks"},"Social Media Links"),r.createElement(Ql,{id:"socialLinks",name:"socialLinks",value:n.socialLinks,onChange:f,placeholder:"Instagram, Facebook, Twitter, etc. (one per line)",rows:"3"})),r.createElement(gn,null,r.createElement(yn,{htmlFor:"musicLinks"},"Music Links *"),r.createElement(Ql,{id:"musicLinks",name:"musicLinks",value:n.musicLinks,onChange:f,required:!0,placeholder:"Spotify, SoundCloud, Bandcamp, YouTube, etc. (one per line)",rows:"3"}))),r.createElement(Yl,null,r.createElement(Nm,null,"Performance Details"),r.createElement(gn,null,r.createElement(yn,{htmlFor:"preferredDates"},"Preferred Performance Dates"),r.createElement(Ql,{id:"preferredDates",name:"preferredDates",value:n.preferredDates,onChange:f,placeholder:"List any specific dates or time periods you're available to perform",rows:"2"})),r.createElement(gn,null,r.createElement(yn,{htmlFor:"message"},"Additional Information"),r.createElement(Ql,{id:"message",name:"message",value:n.message,onChange:f,placeholder:"Tell us more about your act, performance requirements, or anything else we should know",rows:"4"}))),r.createElement(Yl,null,r.createElement(uv,null,r.createElement(dv,{type:"checkbox",id:"agreeToTerms",name:"agreeToTerms",checked:n.agreeToTerms,onChange:f,required:!0}),r.createElement(mv,{htmlFor:"agreeToTerms"},"I agree that ",i.name," may contact me about my submission *")),r.createElement(uv,null,r.createElement(dv,{type:"checkbox",id:"joinTrueFans",name:"joinTrueFans",checked:n.joinTrueFans,onChange:f}),r.createElement(mv,{htmlFor:"joinTrueFans"},"I'm interested in learning more about TrueFans CONNECT, a platform that helps independent artists receive direct support from fans"))),p&&r.createElement(IR,null,p),r.createElement(AR,{type:"submit",disabled:l,style:{backgroundColor:$.primaryColor,color:$.secondaryColor}},l?"Submitting...":"Submit Application"),r.createElement(FR,null,"Powered by ",r.createElement(LR,{href:"https://truefans.connect",target:"_blank"},"TrueFans CONNECT")))))},ER=s.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:e})=>e.space.lg};
  background-size: cover;
  background-position: center;
`,wR=s.div`
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.lg};
`,bR=s.div`
  padding: ${({theme:e})=>e.space.lg};
  text-align: center;
  color: white;
`,kR=s.img`
  max-width: 200px;
  max-height: 80px;
  margin-bottom: ${({theme:e})=>e.space.md};
`,SR=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.sm};
`,TR=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  opacity: 0.9;
`,CR=s.form`
  padding: ${({theme:e})=>e.space.lg};
`,Yl=s.div`
  margin-bottom: ${({theme:e})=>e.space.lg};
  
  &:last-of-type {
    margin-bottom: ${({theme:e})=>e.space.xl};
  }
`,Nm=s.h2`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
  padding-bottom: ${({theme:e})=>e.space.xs};
  border-bottom: 1px solid ${({theme:e})=>e.colors.lightGray};
`,gn=s.div`
  margin-bottom: ${({theme:e})=>e.space.md};
`,zR=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.space.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,yn=s.label`
  display: block;
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,Mm=s.input`
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
`,PR=s.select`
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
`,Ql=s.textarea`
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
`,uv=s.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({theme:e})=>e.space.md};
`,dv=s.input`
  margin-top: 5px;
  margin-right: ${({theme:e})=>e.space.sm};
`,mv=s.label`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.4;
`,AR=s(W)`
  width: 100%;
  padding: ${({theme:e})=>e.space.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,FR=s.div`
  text-align: center;
  margin-top: ${({theme:e})=>e.space.md};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.darkGray};
`,LR=s.a`
  color: ${({theme:e})=>e.colors.secondary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,DR=s.div`
  padding: ${({theme:e})=>e.space.xl};
  text-align: center;
`,NR=s.div`
  width: 80px;
  height: 80px;
  background-color: ${({theme:e})=>e.colors.success};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  margin: 0 auto ${({theme:e})=>e.space.lg};
`,MR=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,RR=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
`,IR=s.div`
  padding: ${({theme:e})=>e.space.md};
  background-color: ${({theme:e})=>`${e.colors.error}15`};
  color: ${({theme:e})=>e.colors.error};
  border-radius: ${({theme:e})=>e.radii.md};
  margin-bottom: ${({theme:e})=>e.space.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  text-align: center;
`,BR=()=>{const[e,t]=b.useState({venueName:"",contactName:"",email:"",phone:"",address:"",city:"",state:"",zip:"",venueType:"bar",capacity:"",description:"",website:"",socialMedia:"",agreeToTerms:!1}),[n,o]=b.useState(!1),i=l=>{const{name:c,value:u,type:d,checked:p}=l.target;t(m=>({...m,[c]:d==="checkbox"?p:u}))},a=l=>{l.preventDefault(),console.log("Form submitted:",e),o(!0),t({venueName:"",contactName:"",email:"",phone:"",address:"",city:"",state:"",zip:"",venueType:"bar",capacity:"",description:"",website:"",socialMedia:"",agreeToTerms:!1})};return r.createElement(IE,null,r.createElement(VR,null,r.createElement(pv,null,r.createElement(OR,null,r.createElement(jR,null,"Register Your Venue"),r.createElement(WR,null,"Join our network of venues and discover talented independent artists")))),r.createElement(_R,null,r.createElement(pv,null,r.createElement(UR,null,r.createElement(HR,null,r.createElement(fv,null,"Venue Registration"),n?r.createElement(eI,null,r.createElement(tI,null,"✓"),r.createElement(nI,null,r.createElement(rI,null,"Registration Successful!"),r.createElement(oI,null,"Thank you for registering your venue with TrueFans CONNECT™. Our team will review your information and contact you shortly to complete the setup process."))):r.createElement(GR,{onSubmit:a},r.createElement(li,null,r.createElement(Kl,null,"Venue Information"),r.createElement(dt,null,r.createElement(mt,{htmlFor:"venueName"},"Venue Name *"),r.createElement(_t,{type:"text",id:"venueName",name:"venueName",value:e.venueName,onChange:i,required:!0})),r.createElement(Rm,null,r.createElement(dt,null,r.createElement(mt,{htmlFor:"venueType"},"Venue Type *"),r.createElement(YR,{id:"venueType",name:"venueType",value:e.venueType,onChange:i,required:!0},r.createElement("option",{value:"bar"},"Bar/Pub"),r.createElement("option",{value:"club"},"Club"),r.createElement("option",{value:"concert-hall"},"Concert Hall"),r.createElement("option",{value:"restaurant"},"Restaurant"),r.createElement("option",{value:"cafe"},"Café"),r.createElement("option",{value:"theater"},"Theater"),r.createElement("option",{value:"outdoor"},"Outdoor Venue"),r.createElement("option",{value:"other"},"Other"))),r.createElement(dt,null,r.createElement(mt,{htmlFor:"capacity"},"Capacity"),r.createElement(_t,{type:"number",id:"capacity",name:"capacity",value:e.capacity,onChange:i,placeholder:"Approximate"}))),r.createElement(dt,null,r.createElement(mt,{htmlFor:"description"},"Venue Description *"),r.createElement(hv,{id:"description",name:"description",value:e.description,onChange:i,rows:"4",required:!0,placeholder:"Tell us about your venue, the types of music you feature, and your audience"}))),r.createElement(li,null,r.createElement(Kl,null,"Contact Information"),r.createElement(dt,null,r.createElement(mt,{htmlFor:"contactName"},"Contact Name *"),r.createElement(_t,{type:"text",id:"contactName",name:"contactName",value:e.contactName,onChange:i,required:!0})),r.createElement(Rm,null,r.createElement(dt,null,r.createElement(mt,{htmlFor:"email"},"Email Address *"),r.createElement(_t,{type:"email",id:"email",name:"email",value:e.email,onChange:i,required:!0})),r.createElement(dt,null,r.createElement(mt,{htmlFor:"phone"},"Phone Number *"),r.createElement(_t,{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:i,required:!0})))),r.createElement(li,null,r.createElement(Kl,null,"Venue Location"),r.createElement(dt,null,r.createElement(mt,{htmlFor:"address"},"Street Address *"),r.createElement(_t,{type:"text",id:"address",name:"address",value:e.address,onChange:i,required:!0})),r.createElement(Rm,null,r.createElement(dt,null,r.createElement(mt,{htmlFor:"city"},"City *"),r.createElement(_t,{type:"text",id:"city",name:"city",value:e.city,onChange:i,required:!0})),r.createElement(dt,null,r.createElement(mt,{htmlFor:"state"},"State/Province *"),r.createElement(_t,{type:"text",id:"state",name:"state",value:e.state,onChange:i,required:!0})),r.createElement(dt,null,r.createElement(mt,{htmlFor:"zip"},"ZIP/Postal Code *"),r.createElement(_t,{type:"text",id:"zip",name:"zip",value:e.zip,onChange:i,required:!0})))),r.createElement(li,null,r.createElement(Kl,null,"Online Presence"),r.createElement(dt,null,r.createElement(mt,{htmlFor:"website"},"Website"),r.createElement(_t,{type:"url",id:"website",name:"website",value:e.website,onChange:i,placeholder:"https://"})),r.createElement(dt,null,r.createElement(mt,{htmlFor:"socialMedia"},"Social Media Links"),r.createElement(hv,{id:"socialMedia",name:"socialMedia",value:e.socialMedia,onChange:i,rows:"3",placeholder:"Instagram, Facebook, Twitter, etc. (one per line)"}))),r.createElement(li,null,r.createElement(QR,null,r.createElement(KR,{type:"checkbox",id:"agreeToTerms",name:"agreeToTerms",checked:e.agreeToTerms,onChange:i,required:!0}),r.createElement(XR,{htmlFor:"agreeToTerms"},"I agree to the ",r.createElement(JR,{to:"/terms"},"Terms of Service")," and ",r.createElement(qR,{to:"/privacy"},"Privacy Policy")," *"))),r.createElement(ZR,{type:"submit"},"Register Venue"))),r.createElement(iI,null,r.createElement(fv,null,"Venue Benefits"),r.createElement(aI,null,r.createElement(Vr,null,r.createElement(Or,null,"🎵"),r.createElement(jr,null,r.createElement(Wr,null,"Access to Talented Artists"),r.createElement(_r,null,"Connect with a diverse pool of independent artists across various genres, all vetted for quality and professionalism."))),r.createElement(Vr,null,r.createElement(Or,null,"📋"),r.createElement(jr,null,r.createElement(Wr,null,"Customizable Submission Forms"),r.createElement(_r,null,"Create branded artist submission forms tailored to your venue's specific requirements and booking process."))),r.createElement(Vr,null,r.createElement(Or,null,"💰"),r.createElement(jr,null,r.createElement(Wr,null,"Affiliate Revenue"),r.createElement(_r,null,"Earn 2.5% from artists you refer to the platform, plus an additional 2.5% from their referrals, creating a passive income stream."))),r.createElement(Vr,null,r.createElement(Or,null,"📊"),r.createElement(jr,null,r.createElement(Wr,null,"Analytics Dashboard"),r.createElement(_r,null,"Track submission metrics, audience demographics, and performance data to make informed booking decisions."))),r.createElement(Vr,null,r.createElement(Or,null,"🔍"),r.createElement(jr,null,r.createElement(Wr,null,"Artist Discovery Tools"),r.createElement(_r,null,"Search and filter artists by genre, location, audience size, and more to find the perfect fit for your venue."))),r.createElement(Vr,null,r.createElement(Or,null,"📱"),r.createElement(jr,null,r.createElement(Wr,null,"Venue Profile"),r.createElement(_r,null,"Showcase your venue to artists and music fans with a professional profile page highlighting your space and events.")))),r.createElement(lI,null,r.createElement(sI,null,r.createElement(cI,null,`"TrueFans CONNECT™ has transformed our booking process. We've discovered amazing talent we wouldn't have found otherwise, and our audiences love the fresh, diverse lineup of artists."`),r.createElement(uI,null,r.createElement(dI,{src:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",alt:"James Wilson"}),r.createElement(mI,null,r.createElement(pI,null,"James Wilson"),r.createElement(fI,null,"Booking Manager, The Sound Lounge"))))),r.createElement(hI,null,r.createElement(gI,null,"Need Help?"),r.createElement(yI,null,"Our venue support team is available to answer any questions and guide you through the registration process."),r.createElement(vI,null,r.createElement($I,{href:"mailto:venues@truefans.connect"},"venues@truefans.connect"),r.createElement(xI,{href:"tel:+15551234567"},"(555) 123-4567"))))))))},VR=s.section`
  background-color: ${({theme:e})=>e.colors.trustworthyNavy};
  padding: ${({theme:e})=>e.space.xl} 0;
  color: white;
`,pv=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.space.lg};
`,OR=s.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`,jR=s.h1`
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  margin-bottom: ${({theme:e})=>e.space.md};
`,WR=s.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  opacity: 0.9;
  line-height: 1.5;
`,_R=s.section`
  padding: ${({theme:e})=>e.space.xl} 0;
  background-color: ${({theme:e})=>e.colors.background};
`,UR=s.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: ${({theme:e})=>e.space.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,fv=s.h2`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.lg};
`,Kl=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
  padding-bottom: ${({theme:e})=>e.space.xs};
  border-bottom: 1px solid ${({theme:e})=>e.colors.lightGray};
`,HR=s.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.xl};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,GR=s.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.lg};
`,li=s.div``,dt=s.div`
  margin-bottom: ${({theme:e})=>e.space.md};
`,Rm=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.space.md};
`,mt=s.label`
  display: block;
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,_t=s.input`
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
`,YR=s.select`
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
`,hv=s.textarea`
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
`,QR=s.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({theme:e})=>e.space.md};
`,KR=s.input`
  margin-top: 5px;
  margin-right: ${({theme:e})=>e.space.sm};
`,XR=s.label`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.4;
`,JR=s(ne)`
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,qR=s(ne)`
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,ZR=s(W)`
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
`,eI=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({theme:e})=>e.space.xl} 0;
`,tI=s.div`
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
`,nI=s.div``,rI=s.h3`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,oI=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.6;
  max-width: 600px;
`,iI=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xl};
`,aI=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.md};
`,Vr=s.div`
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
`,Or=s.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  margin-right: ${({theme:e})=>e.space.md};
  flex-shrink: 0;
`,jr=s.div`
  flex: 1;
`,Wr=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,_r=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.lightText};
  line-height: 1.5;
`,lI=s.div`
  margin-top: ${({theme:e})=>e.space.md};
`,sI=s.div`
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
`,cI=s.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.space.lg};
  font-style: italic;
  position: relative;
  z-index: 1;
  padding-top: ${({theme:e})=>e.space.md};
`,uI=s.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({theme:e})=>e.colors.lightGray};
  padding-top: ${({theme:e})=>e.space.md};
`,dI=s.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.space.md};
  border: 2px solid ${({theme:e})=>e.colors.primary};
`,mI=s.div``,pI=s.h4`
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.xs};
`,fI=s.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.lightText};
`,hI=s.div`
  background-color: ${({theme:e})=>e.colors.primaryLight};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>e.space.lg};
  text-align: center;
`,gI=s.h3`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  color: ${({theme:e})=>e.colors.darkText};
  margin-bottom: ${({theme:e})=>e.space.md};
`,yI=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.darkText};
  line-height: 1.5;
  margin-bottom: ${({theme:e})=>e.space.md};
`,vI=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.sm};
`,$I=s.a`
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  
  &:hover {
    text-decoration: underline;
  }
`,xI=s.a`
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  
  &:hover {
    text-decoration: underline;
  }
`;function EI(){return r.createElement(r1,{theme:a1},r.createElement(i1,null),r.createElement(a2,null),r.createElement(Kk,null,r.createElement(Je,{path:"/",element:r.createElement(a4,null)}),r.createElement(Je,{path:"/about",element:r.createElement(L4,null)}),r.createElement(Je,{path:"/artist-dashboard",element:r.createElement(yP,null)}),r.createElement(Je,{path:"/artist-profile/:id",element:r.createElement(lA,null)}),r.createElement(Je,{path:"/venue-portal",element:r.createElement(B6,null)}),r.createElement(Je,{path:"/donation-system",element:r.createElement(WF,null)}),r.createElement(Je,{path:"/affiliate-program",element:r.createElement(IL,null)}),r.createElement(Je,{path:"/artist-signup",element:r.createElement(JD,null)}),r.createElement(Je,{path:"/venue-signup",element:r.createElement(BR,null)}),r.createElement(Je,{path:"/login",element:r.createElement(xM,null)}),r.createElement(Je,{path:"/my-dashboard",element:r.createElement(SN,null)}),r.createElement(Je,{path:"/contact",element:r.createElement(QM,null)}),r.createElement(Je,{path:"/venue-submission/:venueId",element:r.createElement(xR,null)}),r.createElement(Je,{path:"*",element:r.createElement(UM,null)})),r.createElement(E2,null))}Im.createRoot(document.getElementById("root")).render(r.createElement(r.StrictMode,null,r.createElement(nS,null,r.createElement(r1,{theme:a1},r.createElement(i1,null),r.createElement(EI,null)))));
