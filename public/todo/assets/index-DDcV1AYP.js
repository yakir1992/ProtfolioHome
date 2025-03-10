var RI=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var cM=RI((fM,da)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ov(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mv={exports:{}},Du={},Vv={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),PI=Symbol.for("react.portal"),kI=Symbol.for("react.fragment"),NI=Symbol.for("react.strict_mode"),DI=Symbol.for("react.profiler"),xI=Symbol.for("react.provider"),bI=Symbol.for("react.context"),OI=Symbol.for("react.forward_ref"),MI=Symbol.for("react.suspense"),VI=Symbol.for("react.memo"),LI=Symbol.for("react.lazy"),bm=Symbol.iterator;function FI(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var Lv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fv=Object.assign,Uv={};function As(t,e,n){this.props=t,this.context=e,this.refs=Uv,this.updater=n||Lv}As.prototype.isReactComponent={};As.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};As.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jv(){}jv.prototype=As.prototype;function Hd(t,e,n){this.props=t,this.context=e,this.refs=Uv,this.updater=n||Lv}var qd=Hd.prototype=new jv;qd.constructor=Hd;Fv(qd,As.prototype);qd.isPureReactComponent=!0;var Om=Array.isArray,zv=Object.prototype.hasOwnProperty,Kd={current:null},$v={key:!0,ref:!0,__self:!0,__source:!0};function Bv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)zv.call(e,r)&&!$v.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:aa,type:t,key:s,ref:o,props:i,_owner:Kd.current}}function UI(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gd(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function jI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mm=/\/+/g;function Mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jI(""+t.key):e.toString(36)}function gl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case aa:case PI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Mc(o,0):r,Om(i)?(n="",t!=null&&(n=t.replace(Mm,"$&/")+"/"),gl(i,e,n,"",function(c){return c})):i!=null&&(Gd(i)&&(i=UI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Om(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Mc(s,l);o+=gl(s,e,n,u,i)}else if(u=FI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Mc(s,l++),o+=gl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wa(t,e,n){if(t==null)return t;var r=[],i=0;return gl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function zI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},yl={transition:null},$I={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:yl,ReactCurrentOwner:Kd};function Wv(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Wa,forEach:function(t,e,n){Wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wa(t,function(){e++}),e},toArray:function(t){return Wa(t,function(e){return e})||[]},only:function(t){if(!Gd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=As;ae.Fragment=kI;ae.Profiler=DI;ae.PureComponent=Hd;ae.StrictMode=NI;ae.Suspense=MI;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$I;ae.act=Wv;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Fv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)zv.call(e,u)&&!$v.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:aa,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:bI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xI,_context:t},t.Consumer=t};ae.createElement=Bv;ae.createFactory=function(t){var e=Bv.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:OI,render:t}};ae.isValidElement=Gd;ae.lazy=function(t){return{$$typeof:LI,_payload:{_status:-1,_result:t},_init:zI}};ae.memo=function(t,e){return{$$typeof:VI,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=yl.transition;yl.transition={};try{t()}finally{yl.transition=e}};ae.unstable_act=Wv;ae.useCallback=function(t,e){return _t.current.useCallback(t,e)};ae.useContext=function(t){return _t.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};ae.useEffect=function(t,e){return _t.current.useEffect(t,e)};ae.useId=function(){return _t.current.useId()};ae.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return _t.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};ae.useRef=function(t){return _t.current.useRef(t)};ae.useState=function(t){return _t.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return _t.current.useTransition()};ae.version="18.3.1";Vv.exports=ae;var ke=Vv.exports;const BI=Ov(ke);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WI=ke,HI=Symbol.for("react.element"),qI=Symbol.for("react.fragment"),KI=Object.prototype.hasOwnProperty,GI=WI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QI={key:!0,ref:!0,__self:!0,__source:!0};function Hv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)KI.call(e,r)&&!QI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:HI,type:t,key:s,ref:o,props:i,_owner:GI.current}}Du.Fragment=qI;Du.jsx=Hv;Du.jsxs=Hv;Mv.exports=Du;var U=Mv.exports,qv={exports:{}},zt={},Kv={exports:{}},Gv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,te){var D=W.length;W.push(te);e:for(;0<D;){var C=D-1>>>1,B=W[C];if(0<i(B,te))W[C]=te,W[D]=B,D=C;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var te=W[0],D=W.pop();if(D!==te){W[0]=D;e:for(var C=0,B=W.length,q=B>>>1;C<q;){var X=2*(C+1)-1,Z=W[X],ne=X+1,Q=W[ne];if(0>i(Z,D))ne<B&&0>i(Q,Z)?(W[C]=Q,W[ne]=D,C=ne):(W[C]=Z,W[X]=D,C=X);else if(ne<B&&0>i(Q,D))W[C]=Q,W[ne]=D,C=ne;else break e}}return te}function i(W,te){var D=W.sortIndex-te.sortIndex;return D!==0?D:W.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,g=3,w=!1,R=!1,N=!1,P=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(W){for(var te=n(c);te!==null;){if(te.callback===null)r(c);else if(te.startTime<=W)r(c),te.sortIndex=te.expirationTime,e(u,te);else break;te=n(c)}}function M(W){if(N=!1,A(W),!R)if(n(u)!==null)R=!0,Qn(j);else{var te=n(c);te!==null&&Zt(M,te.startTime-W)}}function j(W,te){R=!1,N&&(N=!1,_(v),v=-1),w=!0;var D=g;try{for(A(te),p=n(u);p!==null&&(!(p.expirationTime>te)||W&&!k());){var C=p.callback;if(typeof C=="function"){p.callback=null,g=p.priorityLevel;var B=C(p.expirationTime<=te);te=t.unstable_now(),typeof B=="function"?p.callback=B:p===n(u)&&r(u),A(te)}else r(u);p=n(u)}if(p!==null)var q=!0;else{var X=n(c);X!==null&&Zt(M,X.startTime-te),q=!1}return q}finally{p=null,g=D,w=!1}}var z=!1,T=null,v=-1,E=5,I=-1;function k(){return!(t.unstable_now()-I<E)}function x(){if(T!==null){var W=t.unstable_now();I=W;var te=!0;try{te=T(!0,W)}finally{te?S():(z=!1,T=null)}}else z=!1}var S;if(typeof y=="function")S=function(){y(x)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,Jt=mt.port2;mt.port1.onmessage=x,S=function(){Jt.postMessage(null)}}else S=function(){P(x,0)};function Qn(W){T=W,z||(z=!0,S())}function Zt(W,te){v=P(function(){W(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){R||w||(R=!0,Qn(j))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(g){case 1:case 2:case 3:var te=3;break;default:te=g}var D=g;g=te;try{return W()}finally{g=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,te){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var D=g;g=W;try{return te()}finally{g=D}},t.unstable_scheduleCallback=function(W,te,D){var C=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?C+D:C):D=C,W){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=D+B,W={id:f++,callback:te,priorityLevel:W,startTime:D,expirationTime:B,sortIndex:-1},D>C?(W.sortIndex=D,e(c,W),n(u)===null&&W===n(c)&&(N?(_(v),v=-1):N=!0,Zt(M,D-C))):(W.sortIndex=B,e(u,W),R||w||(R=!0,Qn(j))),W},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(W){var te=g;return function(){var D=g;g=te;try{return W.apply(this,arguments)}finally{g=D}}}})(Gv);Kv.exports=Gv;var YI=Kv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XI=ke,jt=YI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qv=new Set,xo={};function wi(t,e){cs(t,e),cs(t+"Capture",e)}function cs(t,e){for(xo[t]=e,t=0;t<e.length;t++)Qv.add(e[t])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ah=Object.prototype.hasOwnProperty,JI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vm={},Lm={};function ZI(t){return Ah.call(Lm,t)?!0:Ah.call(Vm,t)?!1:JI.test(t)?Lm[t]=!0:(Vm[t]=!0,!1)}function e1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function t1(t,e,n,r){if(e===null||typeof e>"u"||e1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qd=/[\-:]([a-z])/g;function Yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qd,Yd);rt[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qd,Yd);rt[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qd,Yd);rt[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xd(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(t1(e,n,i,r)&&(n=null),r||i===null?ZI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=XI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),ji=Symbol.for("react.portal"),zi=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),Ch=Symbol.for("react.profiler"),Yv=Symbol.for("react.provider"),Xv=Symbol.for("react.context"),Zd=Symbol.for("react.forward_ref"),Rh=Symbol.for("react.suspense"),Ph=Symbol.for("react.suspense_list"),ef=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),Jv=Symbol.for("react.offscreen"),Fm=Symbol.iterator;function Ys(t){return t===null||typeof t!="object"?null:(t=Fm&&t[Fm]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Vc;function ao(t){if(Vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vc=e&&e[1]||""}return`
`+Vc+t}var Lc=!1;function Fc(t,e){if(!t||Lc)return"";Lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ao(t):""}function n1(t){switch(t.tag){case 5:return ao(t.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function kh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zi:return"Fragment";case ji:return"Portal";case Ch:return"Profiler";case Jd:return"StrictMode";case Rh:return"Suspense";case Ph:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xv:return(t.displayName||"Context")+".Consumer";case Yv:return(t._context.displayName||"Context")+".Provider";case Zd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ef:return e=t.displayName||null,e!==null?e:kh(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return kh(t(e))}catch{}}return null}function r1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kh(e);case 8:return e===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function i1(t){var e=Zv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qa(t){t._valueTracker||(t._valueTracker=i1(t))}function e_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Zv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nh(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Um(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function t_(t,e){e=e.checked,e!=null&&Xd(t,"checked",e,!1)}function Dh(t,e){t_(t,e);var n=Rr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xh(t,e.type,n):e.hasOwnProperty("defaultValue")&&xh(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xh(t,e,n){(e!=="number"||Fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lo=Array.isArray;function Zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function bh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(lo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function n_(t,e){var n=Rr(e.value),r=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $m(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function r_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?r_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ka,i_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ka=Ka||document.createElement("div"),Ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s1=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(t){s1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yo[e]=yo[t]})});function s_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yo.hasOwnProperty(t)&&yo[t]?(""+e).trim():e+"px"}function o_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=s_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var o1=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mh(t,e){if(e){if(o1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Vh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lh=null;function tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fh=null,es=null,ts=null;function Bm(t){if(t=ca(t)){if(typeof Fh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Vu(e),Fh(t.stateNode,t.type,e))}}function a_(t){es?ts?ts.push(t):ts=[t]:es=t}function l_(){if(es){var t=es,e=ts;if(ts=es=null,Bm(t),e)for(t=0;t<e.length;t++)Bm(e[t])}}function u_(t,e){return t(e)}function c_(){}var Uc=!1;function h_(t,e,n){if(Uc)return t(e,n);Uc=!0;try{return u_(t,e,n)}finally{Uc=!1,(es!==null||ts!==null)&&(c_(),l_())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var r=Vu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Uh=!1;if(Un)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){Uh=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{Uh=!1}function a1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var vo=!1,Ul=null,jl=!1,jh=null,l1={onError:function(t){vo=!0,Ul=t}};function u1(t,e,n,r,i,s,o,l,u){vo=!1,Ul=null,a1.apply(l1,arguments)}function c1(t,e,n,r,i,s,o,l,u){if(u1.apply(this,arguments),vo){if(vo){var c=Ul;vo=!1,Ul=null}else throw Error(F(198));jl||(jl=!0,jh=c)}}function Ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wm(t){if(Ei(t)!==t)throw Error(F(188))}function h1(t){var e=t.alternate;if(!e){if(e=Ei(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wm(i),t;if(s===r)return Wm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function f_(t){return t=h1(t),t!==null?p_(t):null}function p_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=p_(t);if(e!==null)return e;t=t.sibling}return null}var m_=jt.unstable_scheduleCallback,Hm=jt.unstable_cancelCallback,d1=jt.unstable_shouldYield,f1=jt.unstable_requestPaint,Le=jt.unstable_now,p1=jt.unstable_getCurrentPriorityLevel,nf=jt.unstable_ImmediatePriority,g_=jt.unstable_UserBlockingPriority,zl=jt.unstable_NormalPriority,m1=jt.unstable_LowPriority,y_=jt.unstable_IdlePriority,xu=null,wn=null;function g1(t){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(xu,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:_1,y1=Math.log,v1=Math.LN2;function _1(t){return t>>>=0,t===0?32:31-(y1(t)/v1|0)|0}var Ga=64,Qa=4194304;function uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $l(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=uo(l):(s&=o,s!==0&&(r=uo(s)))}else o=n&~i,o!==0?r=uo(o):s!==0&&(r=uo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),i=1<<n,r|=t[n],e&=~i;return r}function w1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-an(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=w1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function zh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v_(){var t=Ga;return Ga<<=1,!(Ga&4194240)&&(Ga=64),t}function jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function T1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-an(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function __(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var w_,sf,E_,T_,I_,$h=!1,Ya=[],fr=null,pr=null,mr=null,Mo=new Map,Vo=new Map,ir=[],I1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qm(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(e.pointerId)}}function Js(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ca(e),e!==null&&sf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function S1(t,e,n,r,i){switch(e){case"focusin":return fr=Js(fr,t,e,n,r,i),!0;case"dragenter":return pr=Js(pr,t,e,n,r,i),!0;case"mouseover":return mr=Js(mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Mo.set(s,Js(Mo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vo.set(s,Js(Vo.get(s)||null,t,e,n,r,i)),!0}return!1}function S_(t){var e=Zr(t.target);if(e!==null){var n=Ei(e);if(n!==null){if(e=n.tag,e===13){if(e=d_(n),e!==null){t.blockedOn=e,I_(t.priority,function(){E_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lh=r,n.target.dispatchEvent(r),Lh=null}else return e=ca(n),e!==null&&sf(e),t.blockedOn=n,!1;e.shift()}return!0}function Km(t,e,n){vl(t)&&n.delete(e)}function A1(){$h=!1,fr!==null&&vl(fr)&&(fr=null),pr!==null&&vl(pr)&&(pr=null),mr!==null&&vl(mr)&&(mr=null),Mo.forEach(Km),Vo.forEach(Km)}function Zs(t,e){t.blockedOn===e&&(t.blockedOn=null,$h||($h=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,A1)))}function Lo(t){function e(i){return Zs(i,t)}if(0<Ya.length){Zs(Ya[0],t);for(var n=1;n<Ya.length;n++){var r=Ya[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fr!==null&&Zs(fr,t),pr!==null&&Zs(pr,t),mr!==null&&Zs(mr,t),Mo.forEach(e),Vo.forEach(e),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)S_(n),n.blockedOn===null&&ir.shift()}var ns=Kn.ReactCurrentBatchConfig,Bl=!0;function C1(t,e,n,r){var i=ye,s=ns.transition;ns.transition=null;try{ye=1,of(t,e,n,r)}finally{ye=i,ns.transition=s}}function R1(t,e,n,r){var i=ye,s=ns.transition;ns.transition=null;try{ye=4,of(t,e,n,r)}finally{ye=i,ns.transition=s}}function of(t,e,n,r){if(Bl){var i=Bh(t,e,n,r);if(i===null)Yc(t,e,r,Wl,n),qm(t,r);else if(S1(i,t,e,n,r))r.stopPropagation();else if(qm(t,r),e&4&&-1<I1.indexOf(t)){for(;i!==null;){var s=ca(i);if(s!==null&&w_(s),s=Bh(t,e,n,r),s===null&&Yc(t,e,r,Wl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yc(t,e,r,null,n)}}var Wl=null;function Bh(t,e,n,r){if(Wl=null,t=tf(r),t=Zr(t),t!==null)if(e=Ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=d_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wl=t,null}function A_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p1()){case nf:return 1;case g_:return 4;case zl:case m1:return 16;case y_:return 536870912;default:return 16}default:return 16}}var cr=null,af=null,_l=null;function C_(){if(_l)return _l;var t,e=af,n=e.length,r,i="value"in cr?cr.value:cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return _l=i.slice(t,1<r?1-r:void 0)}function wl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xa(){return!0}function Gm(){return!1}function $t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xa:Gm,this.isPropagationStopped=Gm,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xa)},persist:function(){},isPersistent:Xa}),e}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lf=$t(Cs),ua=De({},Cs,{view:0,detail:0}),P1=$t(ua),zc,$c,eo,bu=De({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(zc=t.screenX-eo.screenX,$c=t.screenY-eo.screenY):$c=zc=0,eo=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Qm=$t(bu),k1=De({},bu,{dataTransfer:0}),N1=$t(k1),D1=De({},ua,{relatedTarget:0}),Bc=$t(D1),x1=De({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),b1=$t(x1),O1=De({},Cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),M1=$t(O1),V1=De({},Cs,{data:0}),Ym=$t(V1),L1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=U1[t])?!!e[t]:!1}function uf(){return j1}var z1=De({},ua,{key:function(t){if(t.key){var e=L1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?F1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(t){return t.type==="keypress"?wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$1=$t(z1),B1=De({},bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=$t(B1),W1=De({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),H1=$t(W1),q1=De({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),K1=$t(q1),G1=De({},bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Q1=$t(G1),Y1=[9,13,27,32],cf=Un&&"CompositionEvent"in window,_o=null;Un&&"documentMode"in document&&(_o=document.documentMode);var X1=Un&&"TextEvent"in window&&!_o,R_=Un&&(!cf||_o&&8<_o&&11>=_o),Jm=" ",Zm=!1;function P_(t,e){switch(t){case"keyup":return Y1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $i=!1;function J1(t,e){switch(t){case"compositionend":return k_(e);case"keypress":return e.which!==32?null:(Zm=!0,Jm);case"textInput":return t=e.data,t===Jm&&Zm?null:t;default:return null}}function Z1(t,e){if($i)return t==="compositionend"||!cf&&P_(t,e)?(t=C_(),_l=af=cr=null,$i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return R_&&e.locale!=="ko"?null:e.data;default:return null}}var eS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eS[t.type]:e==="textarea"}function N_(t,e,n,r){a_(r),e=Hl(e,"onChange"),0<e.length&&(n=new lf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wo=null,Fo=null;function tS(t){z_(t,0)}function Ou(t){var e=Hi(t);if(e_(e))return t}function nS(t,e){if(t==="change")return e}var D_=!1;if(Un){var Wc;if(Un){var Hc="oninput"in document;if(!Hc){var tg=document.createElement("div");tg.setAttribute("oninput","return;"),Hc=typeof tg.oninput=="function"}Wc=Hc}else Wc=!1;D_=Wc&&(!document.documentMode||9<document.documentMode)}function ng(){wo&&(wo.detachEvent("onpropertychange",x_),Fo=wo=null)}function x_(t){if(t.propertyName==="value"&&Ou(Fo)){var e=[];N_(e,Fo,t,tf(t)),h_(tS,e)}}function rS(t,e,n){t==="focusin"?(ng(),wo=e,Fo=n,wo.attachEvent("onpropertychange",x_)):t==="focusout"&&ng()}function iS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ou(Fo)}function sS(t,e){if(t==="click")return Ou(e)}function oS(t,e){if(t==="input"||t==="change")return Ou(e)}function aS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:aS;function Uo(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ah.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function rg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ig(t,e){var n=rg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rg(n)}}function b_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function O_(){for(var t=window,e=Fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fl(t.document)}return e}function hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lS(t){var e=O_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b_(n.ownerDocument.documentElement,n)){if(r!==null&&hf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ig(n,s);var o=ig(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uS=Un&&"documentMode"in document&&11>=document.documentMode,Bi=null,Wh=null,Eo=null,Hh=!1;function sg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hh||Bi==null||Bi!==Fl(r)||(r=Bi,"selectionStart"in r&&hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Uo(Eo,r)||(Eo=r,r=Hl(Wh,"onSelect"),0<r.length&&(e=new lf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Bi)))}function Ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wi={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionend:Ja("Transition","TransitionEnd")},qc={},M_={};Un&&(M_=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function Mu(t){if(qc[t])return qc[t];if(!Wi[t])return t;var e=Wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in M_)return qc[t]=e[n];return t}var V_=Mu("animationend"),L_=Mu("animationiteration"),F_=Mu("animationstart"),U_=Mu("transitionend"),j_=new Map,og="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){j_.set(t,e),wi(e,[t])}for(var Kc=0;Kc<og.length;Kc++){var Gc=og[Kc],cS=Gc.toLowerCase(),hS=Gc[0].toUpperCase()+Gc.slice(1);Lr(cS,"on"+hS)}Lr(V_,"onAnimationEnd");Lr(L_,"onAnimationIteration");Lr(F_,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(U_,"onTransitionEnd");cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dS=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function ag(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,c1(r,e,void 0,t),t.currentTarget=null}function z_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;ag(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;ag(i,l,c),s=u}}}if(jl)throw t=jh,jl=!1,jh=null,t}function Se(t,e){var n=e[Yh];n===void 0&&(n=e[Yh]=new Set);var r=t+"__bubble";n.has(r)||($_(e,t,2,!1),n.add(r))}function Qc(t,e,n){var r=0;e&&(r|=4),$_(n,t,r,e)}var Za="_reactListening"+Math.random().toString(36).slice(2);function jo(t){if(!t[Za]){t[Za]=!0,Qv.forEach(function(n){n!=="selectionchange"&&(dS.has(n)||Qc(n,!1,t),Qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Za]||(e[Za]=!0,Qc("selectionchange",!1,e))}}function $_(t,e,n,r){switch(A_(e)){case 1:var i=C1;break;case 4:i=R1;break;default:i=of}n=i.bind(null,e,n,t),i=void 0,!Uh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Yc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Zr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}h_(function(){var c=s,f=tf(n),p=[];e:{var g=j_.get(t);if(g!==void 0){var w=lf,R=t;switch(t){case"keypress":if(wl(n)===0)break e;case"keydown":case"keyup":w=$1;break;case"focusin":R="focus",w=Bc;break;case"focusout":R="blur",w=Bc;break;case"beforeblur":case"afterblur":w=Bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=N1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=H1;break;case V_:case L_:case F_:w=b1;break;case U_:w=K1;break;case"scroll":w=P1;break;case"wheel":w=Q1;break;case"copy":case"cut":case"paste":w=M1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Xm}var N=(e&4)!==0,P=!N&&t==="scroll",_=N?g!==null?g+"Capture":null:g;N=[];for(var y=c,A;y!==null;){A=y;var M=A.stateNode;if(A.tag===5&&M!==null&&(A=M,_!==null&&(M=Oo(y,_),M!=null&&N.push(zo(y,M,A)))),P)break;y=y.return}0<N.length&&(g=new w(g,R,null,n,f),p.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",g&&n!==Lh&&(R=n.relatedTarget||n.fromElement)&&(Zr(R)||R[jn]))break e;if((w||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,w?(R=n.relatedTarget||n.toElement,w=c,R=R?Zr(R):null,R!==null&&(P=Ei(R),R!==P||R.tag!==5&&R.tag!==6)&&(R=null)):(w=null,R=c),w!==R)){if(N=Qm,M="onMouseLeave",_="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(N=Xm,M="onPointerLeave",_="onPointerEnter",y="pointer"),P=w==null?g:Hi(w),A=R==null?g:Hi(R),g=new N(M,y+"leave",w,n,f),g.target=P,g.relatedTarget=A,M=null,Zr(f)===c&&(N=new N(_,y+"enter",R,n,f),N.target=A,N.relatedTarget=P,M=N),P=M,w&&R)t:{for(N=w,_=R,y=0,A=N;A;A=Oi(A))y++;for(A=0,M=_;M;M=Oi(M))A++;for(;0<y-A;)N=Oi(N),y--;for(;0<A-y;)_=Oi(_),A--;for(;y--;){if(N===_||_!==null&&N===_.alternate)break t;N=Oi(N),_=Oi(_)}N=null}else N=null;w!==null&&lg(p,g,w,N,!1),R!==null&&P!==null&&lg(p,P,R,N,!0)}}e:{if(g=c?Hi(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var j=nS;else if(eg(g))if(D_)j=oS;else{j=iS;var z=rS}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=sS);if(j&&(j=j(t,c))){N_(p,j,n,f);break e}z&&z(t,g,c),t==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&xh(g,"number",g.value)}switch(z=c?Hi(c):window,t){case"focusin":(eg(z)||z.contentEditable==="true")&&(Bi=z,Wh=c,Eo=null);break;case"focusout":Eo=Wh=Bi=null;break;case"mousedown":Hh=!0;break;case"contextmenu":case"mouseup":case"dragend":Hh=!1,sg(p,n,f);break;case"selectionchange":if(uS)break;case"keydown":case"keyup":sg(p,n,f)}var T;if(cf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else $i?P_(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(R_&&n.locale!=="ko"&&($i||v!=="onCompositionStart"?v==="onCompositionEnd"&&$i&&(T=C_()):(cr=f,af="value"in cr?cr.value:cr.textContent,$i=!0)),z=Hl(c,v),0<z.length&&(v=new Ym(v,t,null,n,f),p.push({event:v,listeners:z}),T?v.data=T:(T=k_(n),T!==null&&(v.data=T)))),(T=X1?J1(t,n):Z1(t,n))&&(c=Hl(c,"onBeforeInput"),0<c.length&&(f=new Ym("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=T))}z_(p,e)})}function zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Oo(t,n),s!=null&&r.unshift(zo(t,s,i)),s=Oo(t,e),s!=null&&r.push(zo(t,s,i))),t=t.return}return r}function Oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Oo(n,s),u!=null&&o.unshift(zo(n,u,l))):i||(u=Oo(n,s),u!=null&&o.push(zo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fS=/\r\n?/g,pS=/\u0000|\uFFFD/g;function ug(t){return(typeof t=="string"?t:""+t).replace(fS,`
`).replace(pS,"")}function el(t,e,n){if(e=ug(e),ug(t)!==e&&n)throw Error(F(425))}function ql(){}var qh=null,Kh=null;function Gh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qh=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,cg=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof cg<"u"?function(t){return cg.resolve(null).then(t).catch(yS)}:Qh;function yS(t){setTimeout(function(){throw t})}function Xc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Lo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Lo(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),_n="__reactFiber$"+Rs,$o="__reactProps$"+Rs,jn="__reactContainer$"+Rs,Yh="__reactEvents$"+Rs,vS="__reactListeners$"+Rs,_S="__reactHandles$"+Rs;function Zr(t){var e=t[_n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[_n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hg(t);t!==null;){if(n=t[_n])return n;t=hg(t)}return e}t=n,n=t.parentNode}return null}function ca(t){return t=t[_n]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Vu(t){return t[$o]||null}var Xh=[],qi=-1;function Fr(t){return{current:t}}function Ce(t){0>qi||(t.current=Xh[qi],Xh[qi]=null,qi--)}function Te(t,e){qi++,Xh[qi]=t.current,t.current=e}var Pr={},ft=Fr(Pr),Rt=Fr(!1),oi=Pr;function hs(t,e){var n=t.type.contextTypes;if(!n)return Pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(t){return t=t.childContextTypes,t!=null}function Kl(){Ce(Rt),Ce(ft)}function dg(t,e,n){if(ft.current!==Pr)throw Error(F(168));Te(ft,e),Te(Rt,n)}function B_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,r1(t)||"Unknown",i));return De({},n,r)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,oi=ft.current,Te(ft,t),Te(Rt,Rt.current),!0}function fg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=B_(t,e,oi),r.__reactInternalMemoizedMergedChildContext=t,Ce(Rt),Ce(ft),Te(ft,t)):Ce(Rt),Te(Rt,n)}var Dn=null,Lu=!1,Jc=!1;function W_(t){Dn===null?Dn=[t]:Dn.push(t)}function wS(t){Lu=!0,W_(t)}function Ur(){if(!Jc&&Dn!==null){Jc=!0;var t=0,e=ye;try{var n=Dn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dn=null,Lu=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(t+1)),m_(nf,Ur),i}finally{ye=e,Jc=!1}}return null}var Ki=[],Gi=0,Ql=null,Yl=0,Bt=[],Wt=0,ai=null,xn=1,bn="";function Qr(t,e){Ki[Gi++]=Yl,Ki[Gi++]=Ql,Ql=t,Yl=e}function H_(t,e,n){Bt[Wt++]=xn,Bt[Wt++]=bn,Bt[Wt++]=ai,ai=t;var r=xn;t=bn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-an(e)+i|n<<i|r,bn=s+t}else xn=1<<s|n<<i|r,bn=t}function df(t){t.return!==null&&(Qr(t,1),H_(t,1,0))}function ff(t){for(;t===Ql;)Ql=Ki[--Gi],Ki[Gi]=null,Yl=Ki[--Gi],Ki[Gi]=null;for(;t===ai;)ai=Bt[--Wt],Bt[Wt]=null,bn=Bt[--Wt],Bt[Wt]=null,xn=Bt[--Wt],Bt[Wt]=null}var Lt=null,Ot=null,Re=!1,on=null;function q_(t,e){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,Ot=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ai!==null?{id:xn,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,Ot=null,!0):!1;default:return!1}}function Jh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zh(t){if(Re){var e=Ot;if(e){var n=e;if(!pg(t,e)){if(Jh(t))throw Error(F(418));e=gr(n.nextSibling);var r=Lt;e&&pg(t,e)?q_(r,n):(t.flags=t.flags&-4097|2,Re=!1,Lt=t)}}else{if(Jh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Re=!1,Lt=t}}}function mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function tl(t){if(t!==Lt)return!1;if(!Re)return mg(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gh(t.type,t.memoizedProps)),e&&(e=Ot)){if(Jh(t))throw K_(),Error(F(418));for(;e;)q_(t,e),e=gr(e.nextSibling)}if(mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=Lt?gr(t.stateNode.nextSibling):null;return!0}function K_(){for(var t=Ot;t;)t=gr(t.nextSibling)}function ds(){Ot=Lt=null,Re=!1}function pf(t){on===null?on=[t]:on.push(t)}var ES=Kn.ReactCurrentBatchConfig;function to(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function nl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gg(t){var e=t._init;return e(t._payload)}function G_(t){function e(_,y){if(t){var A=_.deletions;A===null?(_.deletions=[y],_.flags|=16):A.push(y)}}function n(_,y){if(!t)return null;for(;y!==null;)e(_,y),y=y.sibling;return null}function r(_,y){for(_=new Map;y!==null;)y.key!==null?_.set(y.key,y):_.set(y.index,y),y=y.sibling;return _}function i(_,y){return _=wr(_,y),_.index=0,_.sibling=null,_}function s(_,y,A){return _.index=A,t?(A=_.alternate,A!==null?(A=A.index,A<y?(_.flags|=2,y):A):(_.flags|=2,y)):(_.flags|=1048576,y)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,y,A,M){return y===null||y.tag!==6?(y=sh(A,_.mode,M),y.return=_,y):(y=i(y,A),y.return=_,y)}function u(_,y,A,M){var j=A.type;return j===zi?f(_,y,A.props.children,M,A.key):y!==null&&(y.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===nr&&gg(j)===y.type)?(M=i(y,A.props),M.ref=to(_,y,A),M.return=_,M):(M=Rl(A.type,A.key,A.props,null,_.mode,M),M.ref=to(_,y,A),M.return=_,M)}function c(_,y,A,M){return y===null||y.tag!==4||y.stateNode.containerInfo!==A.containerInfo||y.stateNode.implementation!==A.implementation?(y=oh(A,_.mode,M),y.return=_,y):(y=i(y,A.children||[]),y.return=_,y)}function f(_,y,A,M,j){return y===null||y.tag!==7?(y=si(A,_.mode,M,j),y.return=_,y):(y=i(y,A),y.return=_,y)}function p(_,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return y=sh(""+y,_.mode,A),y.return=_,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ha:return A=Rl(y.type,y.key,y.props,null,_.mode,A),A.ref=to(_,null,y),A.return=_,A;case ji:return y=oh(y,_.mode,A),y.return=_,y;case nr:var M=y._init;return p(_,M(y._payload),A)}if(lo(y)||Ys(y))return y=si(y,_.mode,A,null),y.return=_,y;nl(_,y)}return null}function g(_,y,A,M){var j=y!==null?y.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:l(_,y,""+A,M);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ha:return A.key===j?u(_,y,A,M):null;case ji:return A.key===j?c(_,y,A,M):null;case nr:return j=A._init,g(_,y,j(A._payload),M)}if(lo(A)||Ys(A))return j!==null?null:f(_,y,A,M,null);nl(_,A)}return null}function w(_,y,A,M,j){if(typeof M=="string"&&M!==""||typeof M=="number")return _=_.get(A)||null,l(y,_,""+M,j);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ha:return _=_.get(M.key===null?A:M.key)||null,u(y,_,M,j);case ji:return _=_.get(M.key===null?A:M.key)||null,c(y,_,M,j);case nr:var z=M._init;return w(_,y,A,z(M._payload),j)}if(lo(M)||Ys(M))return _=_.get(A)||null,f(y,_,M,j,null);nl(y,M)}return null}function R(_,y,A,M){for(var j=null,z=null,T=y,v=y=0,E=null;T!==null&&v<A.length;v++){T.index>v?(E=T,T=null):E=T.sibling;var I=g(_,T,A[v],M);if(I===null){T===null&&(T=E);break}t&&T&&I.alternate===null&&e(_,T),y=s(I,y,v),z===null?j=I:z.sibling=I,z=I,T=E}if(v===A.length)return n(_,T),Re&&Qr(_,v),j;if(T===null){for(;v<A.length;v++)T=p(_,A[v],M),T!==null&&(y=s(T,y,v),z===null?j=T:z.sibling=T,z=T);return Re&&Qr(_,v),j}for(T=r(_,T);v<A.length;v++)E=w(T,_,v,A[v],M),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?v:E.key),y=s(E,y,v),z===null?j=E:z.sibling=E,z=E);return t&&T.forEach(function(k){return e(_,k)}),Re&&Qr(_,v),j}function N(_,y,A,M){var j=Ys(A);if(typeof j!="function")throw Error(F(150));if(A=j.call(A),A==null)throw Error(F(151));for(var z=j=null,T=y,v=y=0,E=null,I=A.next();T!==null&&!I.done;v++,I=A.next()){T.index>v?(E=T,T=null):E=T.sibling;var k=g(_,T,I.value,M);if(k===null){T===null&&(T=E);break}t&&T&&k.alternate===null&&e(_,T),y=s(k,y,v),z===null?j=k:z.sibling=k,z=k,T=E}if(I.done)return n(_,T),Re&&Qr(_,v),j;if(T===null){for(;!I.done;v++,I=A.next())I=p(_,I.value,M),I!==null&&(y=s(I,y,v),z===null?j=I:z.sibling=I,z=I);return Re&&Qr(_,v),j}for(T=r(_,T);!I.done;v++,I=A.next())I=w(T,_,v,I.value,M),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?v:I.key),y=s(I,y,v),z===null?j=I:z.sibling=I,z=I);return t&&T.forEach(function(x){return e(_,x)}),Re&&Qr(_,v),j}function P(_,y,A,M){if(typeof A=="object"&&A!==null&&A.type===zi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ha:e:{for(var j=A.key,z=y;z!==null;){if(z.key===j){if(j=A.type,j===zi){if(z.tag===7){n(_,z.sibling),y=i(z,A.props.children),y.return=_,_=y;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===nr&&gg(j)===z.type){n(_,z.sibling),y=i(z,A.props),y.ref=to(_,z,A),y.return=_,_=y;break e}n(_,z);break}else e(_,z);z=z.sibling}A.type===zi?(y=si(A.props.children,_.mode,M,A.key),y.return=_,_=y):(M=Rl(A.type,A.key,A.props,null,_.mode,M),M.ref=to(_,y,A),M.return=_,_=M)}return o(_);case ji:e:{for(z=A.key;y!==null;){if(y.key===z)if(y.tag===4&&y.stateNode.containerInfo===A.containerInfo&&y.stateNode.implementation===A.implementation){n(_,y.sibling),y=i(y,A.children||[]),y.return=_,_=y;break e}else{n(_,y);break}else e(_,y);y=y.sibling}y=oh(A,_.mode,M),y.return=_,_=y}return o(_);case nr:return z=A._init,P(_,y,z(A._payload),M)}if(lo(A))return R(_,y,A,M);if(Ys(A))return N(_,y,A,M);nl(_,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,y!==null&&y.tag===6?(n(_,y.sibling),y=i(y,A),y.return=_,_=y):(n(_,y),y=sh(A,_.mode,M),y.return=_,_=y),o(_)):n(_,y)}return P}var fs=G_(!0),Q_=G_(!1),Xl=Fr(null),Jl=null,Qi=null,mf=null;function gf(){mf=Qi=Jl=null}function yf(t){var e=Xl.current;Ce(Xl),t._currentValue=e}function ed(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){Jl=t,mf=Qi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ct=!0),t.firstContext=null)}function Qt(t){var e=t._currentValue;if(mf!==t)if(t={context:t,memoizedValue:e,next:null},Qi===null){if(Jl===null)throw Error(F(308));Qi=t,Jl.dependencies={lanes:0,firstContext:t}}else Qi=Qi.next=t;return e}var ei=null;function vf(t){ei===null?ei=[t]:ei.push(t)}function Y_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vf(e)):(n.next=i.next,i.next=n),e.interleaved=n,zn(t,r)}function zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,zn(t,n)}return i=r.interleaved,i===null?(e.next=e,vf(r)):(e.next=i.next,i.next=e),r.interleaved=e,zn(t,n)}function El(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rf(t,n)}}function yg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zl(t,e,n,r){var i=t.updateQueue;rr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var g=l.lane,w=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,N=l;switch(g=e,w=n,N.tag){case 1:if(R=N.payload,typeof R=="function"){p=R.call(w,p,g);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,g=typeof R=="function"?R.call(w,p,g):R,g==null)break e;p=De({},p,g);break e;case 2:rr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=w,u=p):f=f.next=w,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ui|=o,t.lanes=o,t.memoizedState=p}}function vg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var ha={},En=Fr(ha),Bo=Fr(ha),Wo=Fr(ha);function ti(t){if(t===ha)throw Error(F(174));return t}function wf(t,e){switch(Te(Wo,e),Te(Bo,t),Te(En,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Oh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Oh(e,t)}Ce(En),Te(En,e)}function ps(){Ce(En),Ce(Bo),Ce(Wo)}function J_(t){ti(Wo.current);var e=ti(En.current),n=Oh(e,t.type);e!==n&&(Te(Bo,t),Te(En,n))}function Ef(t){Bo.current===t&&(Ce(En),Ce(Bo))}var Pe=Fr(0);function eu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zc=[];function Tf(){for(var t=0;t<Zc.length;t++)Zc[t]._workInProgressVersionPrimary=null;Zc.length=0}var Tl=Kn.ReactCurrentDispatcher,eh=Kn.ReactCurrentBatchConfig,li=0,Ne=null,We=null,Qe=null,tu=!1,To=!1,Ho=0,TS=0;function at(){throw Error(F(321))}function If(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function Sf(t,e,n,r,i,s){if(li=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tl.current=t===null||t.memoizedState===null?CS:RS,t=n(r,i),To){s=0;do{if(To=!1,Ho=0,25<=s)throw Error(F(301));s+=1,Qe=We=null,e.updateQueue=null,Tl.current=PS,t=n(r,i)}while(To)}if(Tl.current=nu,e=We!==null&&We.next!==null,li=0,Qe=We=Ne=null,tu=!1,e)throw Error(F(300));return t}function Af(){var t=Ho!==0;return Ho=0,t}function yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Ne.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function Yt(){if(We===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var e=Qe===null?Ne.memoizedState:Qe.next;if(e!==null)Qe=e,We=t;else{if(t===null)throw Error(F(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Qe===null?Ne.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function qo(t,e){return typeof e=="function"?e(t):e}function th(t){var e=Yt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=We,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((li&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ne.lanes|=f,ui|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,cn(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,ui|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nh(t){var e=Yt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cn(s,e.memoizedState)||(Ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Z_(){}function e0(t,e){var n=Ne,r=Yt(),i=e(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ct=!0),r=r.queue,Cf(r0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,Ko(9,n0.bind(null,n,r,i,e),void 0,null),Ye===null)throw Error(F(349));li&30||t0(n,e,i)}return i}function t0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function n0(t,e,n,r){e.value=n,e.getSnapshot=r,i0(e)&&s0(t)}function r0(t,e,n){return n(function(){i0(e)&&s0(t)})}function i0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function s0(t){var e=zn(t,1);e!==null&&ln(e,t,1,-1)}function _g(t){var e=yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},e.queue=t,t=t.dispatch=AS.bind(null,Ne,t),[e.memoizedState,t]}function Ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function o0(){return Yt().memoizedState}function Il(t,e,n,r){var i=yn();Ne.flags|=t,i.memoizedState=Ko(1|e,n,void 0,r===void 0?null:r)}function Fu(t,e,n,r){var i=Yt();r=r===void 0?null:r;var s=void 0;if(We!==null){var o=We.memoizedState;if(s=o.destroy,r!==null&&If(r,o.deps)){i.memoizedState=Ko(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=Ko(1|e,n,s,r)}function wg(t,e){return Il(8390656,8,t,e)}function Cf(t,e){return Fu(2048,8,t,e)}function a0(t,e){return Fu(4,2,t,e)}function l0(t,e){return Fu(4,4,t,e)}function u0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function c0(t,e,n){return n=n!=null?n.concat([t]):null,Fu(4,4,u0.bind(null,e,t),n)}function Rf(){}function h0(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&If(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function d0(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&If(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function f0(t,e,n){return li&21?(cn(n,e)||(n=v_(),Ne.lanes|=n,ui|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n)}function IS(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=eh.transition;eh.transition={};try{t(!1),e()}finally{ye=n,eh.transition=r}}function p0(){return Yt().memoizedState}function SS(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},m0(t))g0(e,n);else if(n=Y_(t,e,n,r),n!==null){var i=vt();ln(n,t,r,i),y0(n,e,r)}}function AS(t,e,n){var r=_r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(m0(t))g0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,cn(l,o)){var u=e.interleaved;u===null?(i.next=i,vf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Y_(t,e,i,r),n!==null&&(i=vt(),ln(n,t,r,i),y0(n,e,r))}}function m0(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function g0(t,e){To=tu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function y0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rf(t,n)}}var nu={readContext:Qt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},CS={readContext:Qt,useCallback:function(t,e){return yn().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:wg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,u0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=SS.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=yn();return t={current:t},e.memoizedState=t},useState:_g,useDebugValue:Rf,useDeferredValue:function(t){return yn().memoizedState=t},useTransition:function(){var t=_g(!1),e=t[0];return t=IS.bind(null,t[1]),yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=yn();if(Re){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ye===null)throw Error(F(349));li&30||t0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wg(r0.bind(null,r,s,t),[t]),r.flags|=2048,Ko(9,n0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yn(),e=Ye.identifierPrefix;if(Re){var n=bn,r=xn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RS={readContext:Qt,useCallback:h0,useContext:Qt,useEffect:Cf,useImperativeHandle:c0,useInsertionEffect:a0,useLayoutEffect:l0,useMemo:d0,useReducer:th,useRef:o0,useState:function(){return th(qo)},useDebugValue:Rf,useDeferredValue:function(t){var e=Yt();return f0(e,We.memoizedState,t)},useTransition:function(){var t=th(qo)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:e0,useId:p0,unstable_isNewReconciler:!1},PS={readContext:Qt,useCallback:h0,useContext:Qt,useEffect:Cf,useImperativeHandle:c0,useInsertionEffect:a0,useLayoutEffect:l0,useMemo:d0,useReducer:nh,useRef:o0,useState:function(){return nh(qo)},useDebugValue:Rf,useDeferredValue:function(t){var e=Yt();return We===null?e.memoizedState=t:f0(e,We.memoizedState,t)},useTransition:function(){var t=nh(qo)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:e0,useId:p0,unstable_isNewReconciler:!1};function rn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function td(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Uu={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vt(),i=_r(t),s=Ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,i),e!==null&&(ln(e,t,i,r),El(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vt(),i=_r(t),s=Ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,i),e!==null&&(ln(e,t,i,r),El(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vt(),r=_r(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=yr(t,i,r),e!==null&&(ln(e,t,r,n),El(e,t,r))}};function Eg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Uo(n,r)||!Uo(i,s):!0}function v0(t,e,n){var r=!1,i=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Qt(s):(i=Pt(e)?oi:ft.current,r=e.contextTypes,s=(r=r!=null)?hs(t,i):Pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Uu.enqueueReplaceState(e,e.state,null)}function nd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},_f(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qt(s):(s=Pt(e)?oi:ft.current,i.context=hs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(td(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Uu.enqueueReplaceState(i,i.state,null),Zl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e){try{var n="",r=e;do n+=n1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function rh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kS=typeof WeakMap=="function"?WeakMap:Map;function _0(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){iu||(iu=!0,fd=r),rd(t,e)},n}function w0(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){rd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rd(t,e),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ig(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=BS.bind(null,t,e,n),e.then(t,t))}function Sg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ag(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var NS=Kn.ReactCurrentOwner,Ct=!1;function yt(t,e,n,r){e.child=t===null?Q_(e,null,n,r):fs(e,t.child,n,r)}function Cg(t,e,n,r,i){n=n.render;var s=e.ref;return rs(e,i),r=Sf(t,e,n,r,s,i),n=Af(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(Re&&n&&df(e),e.flags|=1,yt(t,e,r,i),e.child)}function Rg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,E0(t,e,s,r,i)):(t=Rl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(o,r)&&t.ref===e.ref)return $n(t,e,i)}return e.flags|=1,t=wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function E0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Uo(s,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ct=!0);else return e.lanes=t.lanes,$n(t,e,i)}return id(t,e,n,r,i)}function T0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Xi,bt),bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(Xi,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(Xi,bt),bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(Xi,bt),bt|=r;return yt(t,e,i,n),e.child}function I0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function id(t,e,n,r,i){var s=Pt(n)?oi:ft.current;return s=hs(e,s),rs(e,i),n=Sf(t,e,n,r,s,i),r=Af(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(Re&&r&&df(e),e.flags|=1,yt(t,e,n,i),e.child)}function Pg(t,e,n,r,i){if(Pt(n)){var s=!0;Gl(e)}else s=!1;if(rs(e,i),e.stateNode===null)Sl(t,e),v0(e,n,r),nd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qt(c):(c=Pt(n)?oi:ft.current,c=hs(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Tg(e,o,r,c),rr=!1;var g=e.memoizedState;o.state=g,Zl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||Rt.current||rr?(typeof f=="function"&&(td(e,n,f,r),u=e.memoizedState),(l=rr||Eg(e,n,l,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,X_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:rn(e.type,l),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Qt(u):(u=Pt(n)?oi:ft.current,u=hs(e,u));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Tg(e,o,r,u),rr=!1,g=e.memoizedState,o.state=g,Zl(e,r,o,i);var R=e.memoizedState;l!==p||g!==R||Rt.current||rr?(typeof w=="function"&&(td(e,n,w,r),R=e.memoizedState),(c=rr||Eg(e,n,c,r,g,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return sd(t,e,n,r,s,i)}function sd(t,e,n,r,i,s){I0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fg(e,n,!1),$n(t,e,s);r=e.stateNode,NS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,l,s)):yt(t,e,l,s),e.memoizedState=r.state,i&&fg(e,n,!0),e.child}function S0(t){var e=t.stateNode;e.pendingContext?dg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dg(t,e.context,!1),wf(t,e.containerInfo)}function kg(t,e,n,r,i){return ds(),pf(i),e.flags|=256,yt(t,e,n,r),e.child}var od={dehydrated:null,treeContext:null,retryLane:0};function ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function A0(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(Pe,i&1),t===null)return Zh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$u(o,r,0,null),t=si(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ad(n),e.memoizedState=od,t):Pf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return DS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=wr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=wr(l,s):(s=si(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ad(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=od,r}return s=t.child,t=s.sibling,r=wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Pf(t,e){return e=$u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function rl(t,e,n,r){return r!==null&&pf(r),fs(e,t.child,null,n),t=Pf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=rh(Error(F(422))),rl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$u({mode:"visible",children:r.children},i,0,null),s=si(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&fs(e,t.child,null,o),e.child.memoizedState=ad(o),e.memoizedState=od,s);if(!(e.mode&1))return rl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=rh(s,r,void 0),rl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ct||l){if(r=Ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zn(t,i),ln(r,t,i,-1))}return Of(),r=rh(Error(F(421))),rl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=WS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ot=gr(i.nextSibling),Lt=e,Re=!0,on=null,t!==null&&(Bt[Wt++]=xn,Bt[Wt++]=bn,Bt[Wt++]=ai,xn=t.id,bn=t.overflow,ai=e),e=Pf(e,r.children),e.flags|=4096,e)}function Ng(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ed(t.return,e,n)}function ih(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function C0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ng(t,n,e);else if(t.tag===19)Ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&eu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ih(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&eu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ih(e,!0,n,null,s);break;case"together":ih(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ui|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xS(t,e,n){switch(e.tag){case 3:S0(e),ds();break;case 5:J_(e);break;case 1:Pt(e.type)&&Gl(e);break;case 4:wf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(Xl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?A0(t,e,n):(Te(Pe,Pe.current&1),t=$n(t,e,n),t!==null?t.sibling:null);Te(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return C0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,T0(t,e,n)}return $n(t,e,n)}var R0,ld,P0,k0;R0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ld=function(){};P0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ti(En.current);var s=null;switch(n){case"input":i=Nh(t,i),r=Nh(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=bh(t,i),r=bh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ql)}Mh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Se("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};k0=function(t,e,n,r){n!==r&&(e.flags|=4)};function no(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bS(t,e,n){var r=e.pendingProps;switch(ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return Pt(e.type)&&Kl(),lt(e),null;case 3:return r=e.stateNode,ps(),Ce(Rt),Ce(ft),Tf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,on!==null&&(gd(on),on=null))),ld(t,e),lt(e),null;case 5:Ef(e);var i=ti(Wo.current);if(n=e.type,t!==null&&e.stateNode!=null)P0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return lt(e),null}if(t=ti(En.current),tl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_n]=e,r[$o]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<co.length;i++)Se(co[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Um(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":zm(r,s),Se("invalid",r)}Mh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&el(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&el(r.textContent,l,t),i=["children",""+l]):xo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":qa(r),jm(r,s,!0);break;case"textarea":qa(r),$m(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ql)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=r_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_n]=e,t[$o]=r,R0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vh(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<co.length;i++)Se(co[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":Um(t,r),i=Nh(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Se("invalid",t);break;case"textarea":zm(t,r),i=bh(t,r),Se("invalid",t);break;default:i=r}Mh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?o_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&i_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&bo(t,u):typeof u=="number"&&bo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Se("scroll",t):u!=null&&Xd(t,s,u,o))}switch(n){case"input":qa(t),jm(t,r,!1);break;case"textarea":qa(t),$m(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Rr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ql)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)k0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ti(Wo.current),ti(En.current),tl(e)){if(r=e.stateNode,n=e.memoizedProps,r[_n]=e,(s=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:el(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&el(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=e,e.stateNode=r}return lt(e),null;case 13:if(Ce(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Ot!==null&&e.mode&1&&!(e.flags&128))K_(),ds(),e.flags|=98560,s=!1;else if(s=tl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[_n]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),s=!1}else on!==null&&(gd(on),on=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?He===0&&(He=3):Of())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return ps(),ld(t,e),t===null&&jo(e.stateNode.containerInfo),lt(e),null;case 10:return yf(e.type._context),lt(e),null;case 17:return Pt(e.type)&&Kl(),lt(e),null;case 19:if(Ce(Pe),s=e.memoizedState,s===null)return lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)no(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=eu(t),o!==null){for(e.flags|=128,no(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>gs&&(e.flags|=128,r=!0,no(s,!1),e.lanes=4194304)}else{if(!r)if(t=eu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),no(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return lt(e),null}else 2*Le()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,r=!0,no(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Pe.current,Te(Pe,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return bf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?bt&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function OS(t,e){switch(ff(e),e.tag){case 1:return Pt(e.type)&&Kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),Ce(Rt),Ce(ft),Tf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ef(e),null;case 13:if(Ce(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(Pe),null;case 4:return ps(),null;case 10:return yf(e.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var il=!1,ht=!1,MS=typeof WeakSet=="function"?WeakSet:Set,K=null;function Yi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function ud(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var Dg=!1;function VS(t,e){if(qh=Bl,t=O_(),hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,g=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)g=p,p=w;for(;;){if(p===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++f===r&&(u=o),(w=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kh={focusedElem:t,selectionRange:n},Bl=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,P=R.memoizedState,_=e.stateNode,y=_.getSnapshotBeforeUpdate(e.elementType===e.type?N:rn(e.type,N),P);_.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(M){Oe(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return R=Dg,Dg=!1,R}function Io(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ud(e,n,s)}i=i.next}while(i!==r)}}function ju(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function N0(t){var e=t.alternate;e!==null&&(t.alternate=null,N0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_n],delete e[$o],delete e[Yh],delete e[vS],delete e[_S])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function D0(t){return t.tag===5||t.tag===3||t.tag===4}function xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||D0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ql));else if(r!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}function dd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}var Ze=null,sn=!1;function Zn(t,e,n){for(n=n.child;n!==null;)x0(t,e,n),n=n.sibling}function x0(t,e,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(xu,n)}catch{}switch(n.tag){case 5:ht||Yi(n,e);case 6:var r=Ze,i=sn;Ze=null,Zn(t,e,n),Ze=r,sn=i,Ze!==null&&(sn?(t=Ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(sn?(t=Ze,n=n.stateNode,t.nodeType===8?Xc(t.parentNode,n):t.nodeType===1&&Xc(t,n),Lo(t)):Xc(Ze,n.stateNode));break;case 4:r=Ze,i=sn,Ze=n.stateNode.containerInfo,sn=!0,Zn(t,e,n),Ze=r,sn=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ud(n,e,o),i=i.next}while(i!==r)}Zn(t,e,n);break;case 1:if(!ht&&(Yi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,e,l)}Zn(t,e,n);break;case 21:Zn(t,e,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,Zn(t,e,n),ht=r):Zn(t,e,n);break;default:Zn(t,e,n)}}function bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new MS),e.forEach(function(r){var i=HS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ze=l.stateNode,sn=!1;break e;case 3:Ze=l.stateNode.containerInfo,sn=!0;break e;case 4:Ze=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(Ze===null)throw Error(F(160));x0(s,o,i),Ze=null,sn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)b0(e,t),e=e.sibling}function b0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nn(e,t),gn(t),r&4){try{Io(3,t,t.return),ju(3,t)}catch(N){Oe(t,t.return,N)}try{Io(5,t,t.return)}catch(N){Oe(t,t.return,N)}}break;case 1:nn(e,t),gn(t),r&512&&n!==null&&Yi(n,n.return);break;case 5:if(nn(e,t),gn(t),r&512&&n!==null&&Yi(n,n.return),t.flags&32){var i=t.stateNode;try{bo(i,"")}catch(N){Oe(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&t_(i,s),Vh(l,o);var c=Vh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?o_(i,p):f==="dangerouslySetInnerHTML"?i_(i,p):f==="children"?bo(i,p):Xd(i,f,p,c)}switch(l){case"input":Dh(i,s);break;case"textarea":n_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Zi(i,!!s.multiple,w,!1):g!==!!s.multiple&&(s.defaultValue!=null?Zi(i,!!s.multiple,s.defaultValue,!0):Zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[$o]=s}catch(N){Oe(t,t.return,N)}}break;case 6:if(nn(e,t),gn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Oe(t,t.return,N)}}break;case 3:if(nn(e,t),gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(e.containerInfo)}catch(N){Oe(t,t.return,N)}break;case 4:nn(e,t),gn(t);break;case 13:nn(e,t),gn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Df=Le())),r&4&&bg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ht=(c=ht)||f,nn(e,t),ht=c):nn(e,t),gn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(K=t,f=t.child;f!==null;){for(p=K=f;K!==null;){switch(g=K,w=g.child,g.tag){case 0:case 11:case 14:case 15:Io(4,g,g.return);break;case 1:Yi(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(N){Oe(r,n,N)}}break;case 5:Yi(g,g.return);break;case 22:if(g.memoizedState!==null){Mg(p);continue}}w!==null?(w.return=g,K=w):Mg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=s_("display",o))}catch(N){Oe(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){Oe(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nn(e,t),gn(t),r&4&&bg(t);break;case 21:break;default:nn(e,t),gn(t)}}function gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(D0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bo(i,""),r.flags&=-33);var s=xg(t);dd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=xg(t);hd(t,l,o);break;default:throw Error(F(161))}}catch(u){Oe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LS(t,e,n){K=t,O0(t)}function O0(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||il;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ht;l=il;var c=ht;if(il=o,(ht=u)&&!c)for(K=i;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?Vg(i):u!==null?(u.return=o,K=u):Vg(i);for(;s!==null;)K=s,O0(s),s=s.sibling;K=i,il=l,ht=c}Og(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):Og(t)}}function Og(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ht||ju(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Lo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ht||e.flags&512&&cd(e)}catch(g){Oe(e,e.return,g)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function Mg(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function Vg(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ju(4,e)}catch(u){Oe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Oe(e,i,u)}}var s=e.return;try{cd(e)}catch(u){Oe(e,s,u)}break;case 5:var o=e.return;try{cd(e)}catch(u){Oe(e,o,u)}}}catch(u){Oe(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var FS=Math.ceil,ru=Kn.ReactCurrentDispatcher,kf=Kn.ReactCurrentOwner,Kt=Kn.ReactCurrentBatchConfig,de=0,Ye=null,je=null,nt=0,bt=0,Xi=Fr(0),He=0,Go=null,ui=0,zu=0,Nf=0,So=null,St=null,Df=0,gs=1/0,Nn=null,iu=!1,fd=null,vr=null,sl=!1,hr=null,su=0,Ao=0,pd=null,Al=-1,Cl=0;function vt(){return de&6?Le():Al!==-1?Al:Al=Le()}function _r(t){return t.mode&1?de&2&&nt!==0?nt&-nt:ES.transition!==null?(Cl===0&&(Cl=v_()),Cl):(t=ye,t!==0||(t=window.event,t=t===void 0?16:A_(t.type)),t):1}function ln(t,e,n,r){if(50<Ao)throw Ao=0,pd=null,Error(F(185));la(t,n,r),(!(de&2)||t!==Ye)&&(t===Ye&&(!(de&2)&&(zu|=n),He===4&&sr(t,nt)),kt(t,r),n===1&&de===0&&!(e.mode&1)&&(gs=Le()+500,Lu&&Ur()))}function kt(t,e){var n=t.callbackNode;E1(t,e);var r=$l(t,t===Ye?nt:0);if(r===0)n!==null&&Hm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hm(n),e===1)t.tag===0?wS(Lg.bind(null,t)):W_(Lg.bind(null,t)),gS(function(){!(de&6)&&Ur()}),n=null;else{switch(__(r)){case 1:n=nf;break;case 4:n=g_;break;case 16:n=zl;break;case 536870912:n=y_;break;default:n=zl}n=$0(n,M0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function M0(t,e){if(Al=-1,Cl=0,de&6)throw Error(F(327));var n=t.callbackNode;if(is()&&t.callbackNode!==n)return null;var r=$l(t,t===Ye?nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ou(t,r);else{e=r;var i=de;de|=2;var s=L0();(Ye!==t||nt!==e)&&(Nn=null,gs=Le()+500,ii(t,e));do try{zS();break}catch(l){V0(t,l)}while(!0);gf(),ru.current=s,de=i,je!==null?e=0:(Ye=null,nt=0,e=He)}if(e!==0){if(e===2&&(i=zh(t),i!==0&&(r=i,e=md(t,i))),e===1)throw n=Go,ii(t,0),sr(t,r),kt(t,Le()),n;if(e===6)sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!US(i)&&(e=ou(t,r),e===2&&(s=zh(t),s!==0&&(r=s,e=md(t,s))),e===1))throw n=Go,ii(t,0),sr(t,r),kt(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Yr(t,St,Nn);break;case 3:if(sr(t,r),(r&130023424)===r&&(e=Df+500-Le(),10<e)){if($l(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Qh(Yr.bind(null,t,St,Nn),e);break}Yr(t,St,Nn);break;case 4:if(sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FS(r/1960))-r,10<r){t.timeoutHandle=Qh(Yr.bind(null,t,St,Nn),r);break}Yr(t,St,Nn);break;case 5:Yr(t,St,Nn);break;default:throw Error(F(329))}}}return kt(t,Le()),t.callbackNode===n?M0.bind(null,t):null}function md(t,e){var n=So;return t.current.memoizedState.isDehydrated&&(ii(t,e).flags|=256),t=ou(t,e),t!==2&&(e=St,St=n,e!==null&&gd(e)),t}function gd(t){St===null?St=t:St.push.apply(St,t)}function US(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~Nf,e&=~zu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function Lg(t){if(de&6)throw Error(F(327));is();var e=$l(t,0);if(!(e&1))return kt(t,Le()),null;var n=ou(t,e);if(t.tag!==0&&n===2){var r=zh(t);r!==0&&(e=r,n=md(t,r))}if(n===1)throw n=Go,ii(t,0),sr(t,e),kt(t,Le()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,St,Nn),kt(t,Le()),null}function xf(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(gs=Le()+500,Lu&&Ur())}}function ci(t){hr!==null&&hr.tag===0&&!(de&6)&&is();var e=de;de|=1;var n=Kt.transition,r=ye;try{if(Kt.transition=null,ye=1,t)return t()}finally{ye=r,Kt.transition=n,de=e,!(de&6)&&Ur()}}function bf(){bt=Xi.current,Ce(Xi)}function ii(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mS(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(ff(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kl();break;case 3:ps(),Ce(Rt),Ce(ft),Tf();break;case 5:Ef(r);break;case 4:ps();break;case 13:Ce(Pe);break;case 19:Ce(Pe);break;case 10:yf(r.type._context);break;case 22:case 23:bf()}n=n.return}if(Ye=t,je=t=wr(t.current,null),nt=bt=e,He=0,Go=null,Nf=zu=ui=0,St=So=null,ei!==null){for(e=0;e<ei.length;e++)if(n=ei[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ei=null}return t}function V0(t,e){do{var n=je;try{if(gf(),Tl.current=nu,tu){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tu=!1}if(li=0,Qe=We=Ne=null,To=!1,Ho=0,kf.current=null,n===null||n.return===null){He=1,Go=e,je=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=nt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=Sg(o);if(w!==null){w.flags&=-257,Ag(w,o,l,s,e),w.mode&1&&Ig(s,c,e),e=w,u=c;var R=e.updateQueue;if(R===null){var N=new Set;N.add(u),e.updateQueue=N}else R.add(u);break e}else{if(!(e&1)){Ig(s,c,e),Of();break e}u=Error(F(426))}}else if(Re&&l.mode&1){var P=Sg(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Ag(P,o,l,s,e),pf(ms(u,l));break e}}s=u=ms(u,l),He!==4&&(He=2),So===null?So=[s]:So.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=_0(s,u,e);yg(s,_);break e;case 1:l=u;var y=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(vr===null||!vr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=w0(s,l,e);yg(s,M);break e}}s=s.return}while(s!==null)}U0(n)}catch(j){e=j,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function L0(){var t=ru.current;return ru.current=nu,t===null?nu:t}function Of(){(He===0||He===3||He===2)&&(He=4),Ye===null||!(ui&268435455)&&!(zu&268435455)||sr(Ye,nt)}function ou(t,e){var n=de;de|=2;var r=L0();(Ye!==t||nt!==e)&&(Nn=null,ii(t,e));do try{jS();break}catch(i){V0(t,i)}while(!0);if(gf(),de=n,ru.current=r,je!==null)throw Error(F(261));return Ye=null,nt=0,He}function jS(){for(;je!==null;)F0(je)}function zS(){for(;je!==null&&!d1();)F0(je)}function F0(t){var e=z0(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?U0(t):je=e,kf.current=null}function U0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=OS(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,je=null;return}}else if(n=bS(n,e,bt),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);He===0&&(He=5)}function Yr(t,e,n){var r=ye,i=Kt.transition;try{Kt.transition=null,ye=1,$S(t,e,n,r)}finally{Kt.transition=i,ye=r}return null}function $S(t,e,n,r){do is();while(hr!==null);if(de&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(T1(t,s),t===Ye&&(je=Ye=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,$0(zl,function(){return is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kt.transition,Kt.transition=null;var o=ye;ye=1;var l=de;de|=4,kf.current=null,VS(t,n),b0(n,t),lS(Kh),Bl=!!qh,Kh=qh=null,t.current=n,LS(n),f1(),de=l,ye=o,Kt.transition=s}else t.current=n;if(sl&&(sl=!1,hr=t,su=i),s=t.pendingLanes,s===0&&(vr=null),g1(n.stateNode),kt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(iu)throw iu=!1,t=fd,fd=null,t;return su&1&&t.tag!==0&&is(),s=t.pendingLanes,s&1?t===pd?Ao++:(Ao=0,pd=t):Ao=0,Ur(),null}function is(){if(hr!==null){var t=__(su),e=Kt.transition,n=ye;try{if(Kt.transition=null,ye=16>t?16:t,hr===null)var r=!1;else{if(t=hr,hr=null,su=0,de&6)throw Error(F(331));var i=de;for(de|=4,K=t.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(K=c;K!==null;){var f=K;switch(f.tag){case 0:case 11:case 15:Io(8,f,s)}var p=f.child;if(p!==null)p.return=f,K=p;else for(;K!==null;){f=K;var g=f.sibling,w=f.return;if(N0(f),f===c){K=null;break}if(g!==null){g.return=w,K=g;break}K=w}}}var R=s.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var P=N.sibling;N.sibling=null,N=P}while(N!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Io(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,K=_;break e}K=s.return}}var y=t.current;for(K=y;K!==null;){o=K;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,K=A;else e:for(o=y;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ju(9,l)}}catch(j){Oe(l,l.return,j)}if(l===o){K=null;break e}var M=l.sibling;if(M!==null){M.return=l.return,K=M;break e}K=l.return}}if(de=i,Ur(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(xu,t)}catch{}r=!0}return r}finally{ye=n,Kt.transition=e}}return!1}function Fg(t,e,n){e=ms(n,e),e=_0(t,e,1),t=yr(t,e,1),e=vt(),t!==null&&(la(t,1,e),kt(t,e))}function Oe(t,e,n){if(t.tag===3)Fg(t,t,n);else for(;e!==null;){if(e.tag===3){Fg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){t=ms(n,t),t=w0(e,t,1),e=yr(e,t,1),t=vt(),e!==null&&(la(e,1,t),kt(e,t));break}}e=e.return}}function BS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vt(),t.pingedLanes|=t.suspendedLanes&n,Ye===t&&(nt&n)===n&&(He===4||He===3&&(nt&130023424)===nt&&500>Le()-Df?ii(t,0):Nf|=n),kt(t,e)}function j0(t,e){e===0&&(t.mode&1?(e=Qa,Qa<<=1,!(Qa&130023424)&&(Qa=4194304)):e=1);var n=vt();t=zn(t,e),t!==null&&(la(t,e,n),kt(t,n))}function WS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),j0(t,n)}function HS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),j0(t,n)}var z0;z0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)Ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ct=!1,xS(t,e,n);Ct=!!(t.flags&131072)}else Ct=!1,Re&&e.flags&1048576&&H_(e,Yl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Sl(t,e),t=e.pendingProps;var i=hs(e,ft.current);rs(e,n),i=Sf(null,e,r,t,i,n);var s=Af();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(s=!0,Gl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_f(e),i.updater=Uu,e.stateNode=i,i._reactInternals=e,nd(e,r,t,n),e=sd(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&df(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=KS(r),t=rn(r,t),i){case 0:e=id(null,e,r,t,n);break e;case 1:e=Pg(null,e,r,t,n);break e;case 11:e=Cg(null,e,r,t,n);break e;case 14:e=Rg(null,e,r,rn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),id(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Pg(t,e,r,i,n);case 3:e:{if(S0(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,X_(t,e),Zl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ms(Error(F(423)),e),e=kg(t,e,r,n,i);break e}else if(r!==i){i=ms(Error(F(424)),e),e=kg(t,e,r,n,i);break e}else for(Ot=gr(e.stateNode.containerInfo.firstChild),Lt=e,Re=!0,on=null,n=Q_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ds(),r===i){e=$n(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return J_(e),t===null&&Zh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Gh(r,i)?o=null:s!==null&&Gh(r,s)&&(e.flags|=32),I0(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&Zh(e),null;case 13:return A0(t,e,n);case 4:return wf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fs(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Cg(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(Xl,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!Rt.current){e=$n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ln(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ed(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ed(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rs(e,n),i=Qt(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=rn(r,e.pendingProps),i=rn(r.type,i),Rg(t,e,r,i,n);case 15:return E0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Sl(t,e),e.tag=1,Pt(r)?(t=!0,Gl(e)):t=!1,rs(e,n),v0(e,r,i),nd(e,r,i,n),sd(null,e,r,!0,t,n);case 19:return C0(t,e,n);case 22:return T0(t,e,n)}throw Error(F(156,e.tag))};function $0(t,e){return m_(t,e)}function qS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(t,e,n,r){return new qS(t,e,n,r)}function Mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function KS(t){if(typeof t=="function")return Mf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zd)return 11;if(t===ef)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zi:return si(n.children,i,s,e);case Jd:o=8,i|=8;break;case Ch:return t=qt(12,n,e,i|2),t.elementType=Ch,t.lanes=s,t;case Rh:return t=qt(13,n,e,i),t.elementType=Rh,t.lanes=s,t;case Ph:return t=qt(19,n,e,i),t.elementType=Ph,t.lanes=s,t;case Jv:return $u(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yv:o=10;break e;case Xv:o=9;break e;case Zd:o=11;break e;case ef:o=14;break e;case nr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function si(t,e,n,r){return t=qt(7,t,r,e),t.lanes=n,t}function $u(t,e,n,r){return t=qt(22,t,r,e),t.elementType=Jv,t.lanes=n,t.stateNode={isHidden:!1},t}function sh(t,e,n){return t=qt(6,t,null,e),t.lanes=n,t}function oh(t,e,n){return e=qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jc(0),this.expirationTimes=jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vf(t,e,n,r,i,s,o,l,u){return t=new GS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_f(s),t}function QS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function B0(t){if(!t)return Pr;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Pt(n))return B_(t,n,e)}return e}function W0(t,e,n,r,i,s,o,l,u){return t=Vf(n,r,!0,t,i,s,o,l,u),t.context=B0(null),n=t.current,r=vt(),i=_r(n),s=Ln(r,i),s.callback=e??null,yr(n,s,i),t.current.lanes=i,la(t,i,r),kt(t,r),t}function Bu(t,e,n,r){var i=e.current,s=vt(),o=_r(i);return n=B0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yr(i,e,o),t!==null&&(ln(t,i,o,s),El(t,i,o)),o}function au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ug(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lf(t,e){Ug(t,e),(t=t.alternate)&&Ug(t,e)}function YS(){return null}var H0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ff(t){this._internalRoot=t}Wu.prototype.render=Ff.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Bu(t,e,null,null)};Wu.prototype.unmount=Ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ci(function(){Bu(null,t,null,null)}),e[jn]=null}};function Wu(t){this._internalRoot=t}Wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=T_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ir.length&&e!==0&&e<ir[n].priority;n++);ir.splice(n,0,t),n===0&&S_(t)}};function Uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jg(){}function XS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=au(o);s.call(c)}}var o=W0(e,r,t,0,null,!1,!1,"",jg);return t._reactRootContainer=o,t[jn]=o.current,jo(t.nodeType===8?t.parentNode:t),ci(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=au(u);l.call(c)}}var u=Vf(t,0,!1,null,null,!1,!1,"",jg);return t._reactRootContainer=u,t[jn]=u.current,jo(t.nodeType===8?t.parentNode:t),ci(function(){Bu(e,u,n,r)}),u}function qu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=au(o);l.call(u)}}Bu(e,o,t,i)}else o=XS(n,e,t,i,r);return au(o)}w_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=uo(e.pendingLanes);n!==0&&(rf(e,n|1),kt(e,Le()),!(de&6)&&(gs=Le()+500,Ur()))}break;case 13:ci(function(){var r=zn(t,1);if(r!==null){var i=vt();ln(r,t,1,i)}}),Lf(t,1)}};sf=function(t){if(t.tag===13){var e=zn(t,134217728);if(e!==null){var n=vt();ln(e,t,134217728,n)}Lf(t,134217728)}};E_=function(t){if(t.tag===13){var e=_r(t),n=zn(t,e);if(n!==null){var r=vt();ln(n,t,e,r)}Lf(t,e)}};T_=function(){return ye};I_=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Fh=function(t,e,n){switch(e){case"input":if(Dh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vu(r);if(!i)throw Error(F(90));e_(r),Dh(r,i)}}}break;case"textarea":n_(t,n);break;case"select":e=n.value,e!=null&&Zi(t,!!n.multiple,e,!1)}};u_=xf;c_=ci;var JS={usingClientEntryPoint:!1,Events:[ca,Hi,Vu,a_,l_,xf]},ro={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZS={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=f_(t),t===null?null:t.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||YS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{xu=ol.inject(ZS),wn=ol}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JS;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uf(e))throw Error(F(200));return QS(t,e,null,n)};zt.createRoot=function(t,e){if(!Uf(t))throw Error(F(299));var n=!1,r="",i=H0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vf(t,1,!1,null,null,n,!1,r,i),t[jn]=e.current,jo(t.nodeType===8?t.parentNode:t),new Ff(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=f_(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return ci(t)};zt.hydrate=function(t,e,n){if(!Hu(e))throw Error(F(200));return qu(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!Uf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=H0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=W0(e,null,t,1,n??null,i,!1,s,o),t[jn]=e.current,jo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wu(e)};zt.render=function(t,e,n){if(!Hu(e))throw Error(F(200));return qu(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!Hu(t))throw Error(F(40));return t._reactRootContainer?(ci(function(){qu(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};zt.unstable_batchedUpdates=xf;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return qu(t,e,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function q0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q0)}catch(t){console.error(t)}}q0(),qv.exports=zt;var eA=qv.exports,K0,zg=eA;K0=zg.createRoot,zg.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Gn=(t,e)=>{const n=ke.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>ke.createElement("svg",{ref:f,...tA,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${nA(t)}`,l].join(" "),...c},[...e.map(([p,g])=>ke.createElement(p,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=Gn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=Gn("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=Gn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=Gn("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=Gn("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=Gn("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=Gn("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=Gn("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=Gn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Xt(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function kr(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function jf(t,e){const n=Xt(t);return isNaN(e)?kr(t,NaN):(e&&n.setDate(n.getDate()+e),n)}const G0=6048e5,dA=864e5,Q0=6e4,Y0=36e5;let fA={};function Ku(){return fA}function Qo(t,e){var l,u,c,f;const n=Ku(),r=(e==null?void 0:e.weekStartsOn)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((f=(c=n.locale)==null?void 0:c.options)==null?void 0:f.weekStartsOn)??0,i=Xt(t),s=i.getDay(),o=(s<r?7:0)+s-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function lu(t){return Qo(t,{weekStartsOn:1})}function X0(t){const e=Xt(t),n=e.getFullYear(),r=kr(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=lu(r),s=kr(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const o=lu(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function ss(t){const e=Xt(t);return e.setHours(0,0,0,0),e}function $g(t){const e=Xt(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function pA(t,e){const n=ss(t),r=ss(e),i=+n-$g(n),s=+r-$g(r);return Math.round((i-s)/dA)}function mA(t){const e=X0(t),n=kr(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),lu(n)}function gA(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function yA(t){if(!gA(t)&&typeof t!="number")return!1;const e=Xt(t);return!isNaN(Number(e))}function vA(t){const e=Xt(t),n=kr(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const _A={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},wA=(t,e,n)=>{let r;const i=_A[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function ah(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const EA={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},TA={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},IA={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},SA={date:ah({formats:EA,defaultWidth:"full"}),time:ah({formats:TA,defaultWidth:"full"}),dateTime:ah({formats:IA,defaultWidth:"full"})},AA={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},CA=(t,e,n,r)=>AA[t];function io(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,l=n!=null&&n.width?String(n.width):o;i=t.formattingValues[l]||t.formattingValues[o]}else{const o=t.defaultWidth,l=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[l]||t.values[o]}const s=t.argumentCallback?t.argumentCallback(e):e;return i[s]}}const RA={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},PA={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},kA={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},NA={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},DA={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},xA={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},bA=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},OA={ordinalNumber:bA,era:io({values:RA,defaultWidth:"wide"}),quarter:io({values:PA,defaultWidth:"wide",argumentCallback:t=>t-1}),month:io({values:kA,defaultWidth:"wide"}),day:io({values:NA,defaultWidth:"wide"}),dayPeriod:io({values:DA,defaultWidth:"wide",formattingValues:xA,defaultFormattingWidth:"wide"})};function so(t){return(e,n={})=>{const r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;const o=s[0],l=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(l)?VA(l,p=>p.test(o)):MA(l,p=>p.test(o));let c;c=t.valueCallback?t.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c;const f=e.slice(o.length);return{value:c,rest:f}}}function MA(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function VA(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function LA(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const i=r[0],s=e.match(t.parsePattern);if(!s)return null;let o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;const l=e.slice(i.length);return{value:o,rest:l}}}const FA=/^(\d+)(th|st|nd|rd)?/i,UA=/\d+/i,jA={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},zA={any:[/^b/i,/^(a|c)/i]},$A={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},BA={any:[/1/i,/2/i,/3/i,/4/i]},WA={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},HA={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},qA={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},KA={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},GA={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},QA={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},YA={ordinalNumber:LA({matchPattern:FA,parsePattern:UA,valueCallback:t=>parseInt(t,10)}),era:so({matchPatterns:jA,defaultMatchWidth:"wide",parsePatterns:zA,defaultParseWidth:"any"}),quarter:so({matchPatterns:$A,defaultMatchWidth:"wide",parsePatterns:BA,defaultParseWidth:"any",valueCallback:t=>t+1}),month:so({matchPatterns:WA,defaultMatchWidth:"wide",parsePatterns:HA,defaultParseWidth:"any"}),day:so({matchPatterns:qA,defaultMatchWidth:"wide",parsePatterns:KA,defaultParseWidth:"any"}),dayPeriod:so({matchPatterns:GA,defaultMatchWidth:"any",parsePatterns:QA,defaultParseWidth:"any"})},XA={code:"en-US",formatDistance:wA,formatLong:SA,formatRelative:CA,localize:OA,match:YA,options:{weekStartsOn:0,firstWeekContainsDate:1}};function JA(t){const e=Xt(t);return pA(e,vA(e))+1}function ZA(t){const e=Xt(t),n=+lu(e)-+mA(e);return Math.round(n/G0)+1}function J0(t,e){var f,p,g,w;const n=Xt(t),r=n.getFullYear(),i=Ku(),s=(e==null?void 0:e.firstWeekContainsDate)??((p=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??i.firstWeekContainsDate??((w=(g=i.locale)==null?void 0:g.options)==null?void 0:w.firstWeekContainsDate)??1,o=kr(t,0);o.setFullYear(r+1,0,s),o.setHours(0,0,0,0);const l=Qo(o,e),u=kr(t,0);u.setFullYear(r,0,s),u.setHours(0,0,0,0);const c=Qo(u,e);return n.getTime()>=l.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function eC(t,e){var l,u,c,f;const n=Ku(),r=(e==null?void 0:e.firstWeekContainsDate)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(c=n.locale)==null?void 0:c.options)==null?void 0:f.firstWeekContainsDate)??1,i=J0(t,e),s=kr(t,0);return s.setFullYear(i,0,r),s.setHours(0,0,0,0),Qo(s,e)}function tC(t,e){const n=Xt(t),r=+Qo(n,e)-+eC(n,e);return Math.round(r/G0)+1}function ge(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const er={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return ge(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):ge(n+1,2)},d(t,e){return ge(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return ge(t.getHours()%12||12,e.length)},H(t,e){return ge(t.getHours(),e.length)},m(t,e){return ge(t.getMinutes(),e.length)},s(t,e){return ge(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return ge(i,e.length)}},Mi={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Bg={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return er.y(t,e)},Y:function(t,e,n,r){const i=J0(t,r),s=i>0?i:1-i;if(e==="YY"){const o=s%100;return ge(o,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):ge(s,e.length)},R:function(t,e){const n=X0(t);return ge(n,e.length)},u:function(t,e){const n=t.getFullYear();return ge(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return ge(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return ge(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return er.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return ge(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const i=tC(t,r);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):ge(i,e.length)},I:function(t,e,n){const r=ZA(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):ge(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):er.d(t,e)},D:function(t,e,n){const r=JA(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):ge(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return ge(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return ge(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return ge(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let i;switch(r===12?i=Mi.noon:r===0?i=Mi.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let i;switch(r>=17?i=Mi.evening:r>=12?i=Mi.afternoon:r>=4?i=Mi.morning:i=Mi.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return er.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):er.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):ge(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):ge(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):er.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):er.s(t,e)},S:function(t,e){return er.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return Hg(r);case"XXXX":case"XX":return Xr(r);case"XXXXX":case"XXX":default:return Xr(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return Hg(r);case"xxxx":case"xx":return Xr(r);case"xxxxx":case"xxx":default:return Xr(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Wg(r,":");case"OOOO":default:return"GMT"+Xr(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Wg(r,":");case"zzzz":default:return"GMT"+Xr(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return ge(r,e.length)},T:function(t,e,n){const r=t.getTime();return ge(r,e.length)}};function Wg(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=Math.trunc(r/60),s=r%60;return s===0?n+String(i):n+String(i)+e+ge(s,2)}function Hg(t,e){return t%60===0?(t>0?"-":"+")+ge(Math.abs(t)/60,2):Xr(t,e)}function Xr(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=ge(Math.trunc(r/60),2),s=ge(r%60,2);return n+i+e+s}const qg=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Z0=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},nC=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return qg(t,e);let s;switch(r){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",qg(r,e)).replace("{{time}}",Z0(i,e))},rC={p:Z0,P:nC},iC=/^D+$/,sC=/^Y+$/,oC=["D","DD","YY","YYYY"];function aC(t){return iC.test(t)}function lC(t){return sC.test(t)}function uC(t,e,n){const r=cC(t,e,n);if(console.warn(r),oC.includes(t))throw new RangeError(r)}function cC(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const hC=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,dC=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,fC=/^'([^]*?)'?$/,pC=/''/g,mC=/[a-zA-Z]/;function Mt(t,e,n){var f,p,g,w;const r=Ku(),i=r.locale??XA,s=r.firstWeekContainsDate??((p=(f=r.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??1,o=r.weekStartsOn??((w=(g=r.locale)==null?void 0:g.options)==null?void 0:w.weekStartsOn)??0,l=Xt(t);if(!yA(l))throw new RangeError("Invalid time value");let u=e.match(dC).map(R=>{const N=R[0];if(N==="p"||N==="P"){const P=rC[N];return P(R,i.formatLong)}return R}).join("").match(hC).map(R=>{if(R==="''")return{isToken:!1,value:"'"};const N=R[0];if(N==="'")return{isToken:!1,value:gC(R)};if(Bg[N])return{isToken:!0,value:R};if(N.match(mC))throw new RangeError("Format string contains an unescaped latin alphabet character `"+N+"`");return{isToken:!1,value:R}});i.localize.preprocessor&&(u=i.localize.preprocessor(l,u));const c={firstWeekContainsDate:s,weekStartsOn:o,locale:i};return u.map(R=>{if(!R.isToken)return R.value;const N=R.value;(lC(N)||aC(N))&&uC(N,e,String(t));const P=Bg[N[0]];return P(l,N,i.localize,c)}).join("")}function gC(t){const e=t.match(fC);return e?e[1].replace(pC,"'"):t}function yC(t,e){return jf(t,-e)}function hi(t,e){const r=EC(t);let i;if(r.date){const u=TC(r.date,2);i=IC(u.restDateString,u.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);const s=i.getTime();let o=0,l;if(r.time&&(o=SC(r.time),isNaN(o)))return new Date(NaN);if(r.timezone){if(l=AC(r.timezone),isNaN(l))return new Date(NaN)}else{const u=new Date(s+o),c=new Date(0);return c.setFullYear(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()),c.setHours(u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds()),c}return new Date(s+o+l)}const al={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},vC=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,_C=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,wC=/^([+-])(\d{2})(?::?(\d{2}))?$/;function EC(t){const e={},n=t.split(al.dateTimeDelimiter);let r;if(n.length>2)return e;if(/:/.test(n[0])?r=n[0]:(e.date=n[0],r=n[1],al.timeZoneDelimiter.test(e.date)&&(e.date=t.split(al.timeZoneDelimiter)[0],r=t.substr(e.date.length,t.length))),r){const i=al.timezone.exec(r);i?(e.time=r.replace(i[1],""),e.timezone=i[1]):e.time=r}return e}function TC(t,e){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};const i=r[1]?parseInt(r[1]):null,s=r[2]?parseInt(r[2]):null;return{year:s===null?i:s*100,restDateString:t.slice((r[1]||r[2]).length)}}function IC(t,e){if(e===null)return new Date(NaN);const n=t.match(vC);if(!n)return new Date(NaN);const r=!!n[4],i=oo(n[1]),s=oo(n[2])-1,o=oo(n[3]),l=oo(n[4]),u=oo(n[5])-1;if(r)return NC(e,l,u)?CC(e,l,u):new Date(NaN);{const c=new Date(0);return!PC(e,s,o)||!kC(e,i)?new Date(NaN):(c.setUTCFullYear(e,s,Math.max(i,o)),c)}}function oo(t){return t?parseInt(t):1}function SC(t){const e=t.match(_C);if(!e)return NaN;const n=lh(e[1]),r=lh(e[2]),i=lh(e[3]);return DC(n,r,i)?n*Y0+r*Q0+i*1e3:NaN}function lh(t){return t&&parseFloat(t.replace(",","."))||0}function AC(t){if(t==="Z")return 0;const e=t.match(wC);if(!e)return 0;const n=e[1]==="+"?-1:1,r=parseInt(e[2]),i=e[3]&&parseInt(e[3])||0;return xC(r,i)?n*(r*Y0+i*Q0):NaN}function CC(t,e,n){const r=new Date(0);r.setUTCFullYear(t,0,4);const i=r.getUTCDay()||7,s=(e-1)*7+n+1-i;return r.setUTCDate(r.getUTCDate()+s),r}const RC=[31,null,31,30,31,30,31,31,30,31,30,31];function ew(t){return t%400===0||t%4===0&&t%100!==0}function PC(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(RC[e]||(ew(t)?29:28))}function kC(t,e){return e>=1&&e<=(ew(t)?366:365)}function NC(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}function DC(t,e,n){return t===24?e===0&&n===0:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}function xC(t,e){return e>=0&&e<=59}const bC=[{name:"Tu BiShvat",date:"2024-01-25",color:"bg-green-500"},{name:"Purim",date:"2024-03-23",color:"bg-purple-500"},{name:"Passover",date:"2024-04-22",color:"bg-blue-500"},{name:"Yom HaShoah",date:"2024-05-06",color:"bg-gray-500"},{name:"Yom HaZikaron",date:"2024-05-13",color:"bg-blue-900"},{name:"Yom HaAtzmaut",date:"2024-05-14",color:"bg-blue-500"},{name:"Lag BaOmer",date:"2024-05-26",color:"bg-orange-500"},{name:"Shavuot",date:"2024-06-11",color:"bg-yellow-500"},{name:"Tisha B'Av",date:"2024-08-13",color:"bg-red-900"},{name:"Rosh Hashanah",date:"2024-10-02",color:"bg-yellow-600"},{name:"Yom Kippur",date:"2024-10-11",color:"bg-white"},{name:"Sukkot",date:"2024-10-16",color:"bg-green-600"},{name:"Simchat Torah",date:"2024-10-23",color:"bg-blue-600"},{name:"Hanukkah",date:"2024-12-25",color:"bg-blue-400"}],OC=t=>{const e=Mt(hi(t),"yyyy-MM-dd");return bC.filter(n=>n.date===e)};var da={};(function t(e,n,r,i){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",l=function(){if(!e.OffscreenCanvas)return!1;var D=new OffscreenCanvas(1,1),C=D.getContext("2d");C.fillRect(0,0,1,1);var B=D.transferToImageBitmap();try{C.createPattern(B,"no-repeat")}catch{return!1}return!0}();function u(){}function c(D){var C=n.exports.Promise,B=C!==void 0?C:e.Promise;return typeof B=="function"?new B(D):(D(u,u),null)}var f=function(D,C){return{transform:function(B){if(D)return B;if(C.has(B))return C.get(B);var q=new OffscreenCanvas(B.width,B.height),X=q.getContext("2d");return X.drawImage(B,0,0),C.set(B,q),q},clear:function(){C.clear()}}}(l,new Map),p=function(){var D=Math.floor(16.666666666666668),C,B,q={},X=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(Z){var ne=Math.random();return q[ne]=requestAnimationFrame(function Q(se){X===se||X+D-1<se?(X=se,delete q[ne],Z()):q[ne]=requestAnimationFrame(Q)}),ne},B=function(Z){q[Z]&&cancelAnimationFrame(q[Z])}):(C=function(Z){return setTimeout(Z,D)},B=function(Z){return clearTimeout(Z)}),{frame:C,cancel:B}}(),g=function(){var D,C,B={};function q(X){function Z(ne,Q){X.postMessage({options:ne||{},callback:Q})}X.init=function(Q){var se=Q.transferControlToOffscreen();X.postMessage({canvas:se},[se])},X.fire=function(Q,se,ve){if(C)return Z(Q,null),C;var _e=Math.random().toString(36).slice(2);return C=c(function(pe){function Ee(Me){Me.data.callback===_e&&(delete B[_e],X.removeEventListener("message",Ee),C=null,f.clear(),ve(),pe())}X.addEventListener("message",Ee),Z(Q,_e),B[_e]=Ee.bind(null,{data:{callback:_e}})}),C},X.reset=function(){X.postMessage({reset:!0});for(var Q in B)B[Q](),delete B[Q]}}return function(){if(D)return D;if(!r&&s){var X=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{D=new Worker(URL.createObjectURL(new Blob([X])))}catch(Z){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Z),null}q(D)}return D}}(),w={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function R(D,C){return C?C(D):D}function N(D){return D!=null}function P(D,C,B){return R(D&&N(D[C])?D[C]:w[C],B)}function _(D){return D<0?0:Math.floor(D)}function y(D,C){return Math.floor(Math.random()*(C-D))+D}function A(D){return parseInt(D,16)}function M(D){return D.map(j)}function j(D){var C=String(D).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:A(C.substring(0,2)),g:A(C.substring(2,4)),b:A(C.substring(4,6))}}function z(D){var C=P(D,"origin",Object);return C.x=P(C,"x",Number),C.y=P(C,"y",Number),C}function T(D){D.width=document.documentElement.clientWidth,D.height=document.documentElement.clientHeight}function v(D){var C=D.getBoundingClientRect();D.width=C.width,D.height=C.height}function E(D){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=D,C}function I(D,C,B,q,X,Z,ne,Q,se){D.save(),D.translate(C,B),D.rotate(Z),D.scale(q,X),D.arc(0,0,1,ne,Q,se),D.restore()}function k(D){var C=D.angle*(Math.PI/180),B=D.spread*(Math.PI/180);return{x:D.x,y:D.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:D.startVelocity*.5+Math.random()*D.startVelocity,angle2D:-C+(.5*B-Math.random()*B),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:D.color,shape:D.shape,tick:0,totalTicks:D.ticks,decay:D.decay,drift:D.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:D.gravity*3,ovalScalar:.6,scalar:D.scalar,flat:D.flat}}function x(D,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var B=C.tick++/C.totalTicks,q=C.x+C.random*C.tiltCos,X=C.y+C.random*C.tiltSin,Z=C.wobbleX+C.random*C.tiltCos,ne=C.wobbleY+C.random*C.tiltSin;if(D.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-B)+")",D.beginPath(),o&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))D.fill(Zt(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(Z-q)*.1,Math.abs(ne-X)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var Q=Math.PI/10*C.wobble,se=Math.abs(Z-q)*.1,ve=Math.abs(ne-X)*.1,_e=C.shape.bitmap.width*C.scalar,pe=C.shape.bitmap.height*C.scalar,Ee=new DOMMatrix([Math.cos(Q)*se,Math.sin(Q)*se,-Math.sin(Q)*ve,Math.cos(Q)*ve,C.x,C.y]);Ee.multiplySelf(new DOMMatrix(C.shape.matrix));var Me=D.createPattern(f.transform(C.shape.bitmap),"no-repeat");Me.setTransform(Ee),D.globalAlpha=1-B,D.fillStyle=Me,D.fillRect(C.x-_e/2,C.y-pe/2,_e,pe),D.globalAlpha=1}else if(C.shape==="circle")D.ellipse?D.ellipse(C.x,C.y,Math.abs(Z-q)*C.ovalScalar,Math.abs(ne-X)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):I(D,C.x,C.y,Math.abs(Z-q)*C.ovalScalar,Math.abs(ne-X)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var oe=Math.PI/2*3,Ke=4*C.scalar,Et=8*C.scalar,Dt=C.x,en=C.y,mn=5,Tt=Math.PI/mn;mn--;)Dt=C.x+Math.cos(oe)*Et,en=C.y+Math.sin(oe)*Et,D.lineTo(Dt,en),oe+=Tt,Dt=C.x+Math.cos(oe)*Ke,en=C.y+Math.sin(oe)*Ke,D.lineTo(Dt,en),oe+=Tt;else D.moveTo(Math.floor(C.x),Math.floor(C.y)),D.lineTo(Math.floor(C.wobbleX),Math.floor(X)),D.lineTo(Math.floor(Z),Math.floor(ne)),D.lineTo(Math.floor(q),Math.floor(C.wobbleY));return D.closePath(),D.fill(),C.tick<C.totalTicks}function S(D,C,B,q,X){var Z=C.slice(),ne=D.getContext("2d"),Q,se,ve=c(function(_e){function pe(){Q=se=null,ne.clearRect(0,0,q.width,q.height),f.clear(),X(),_e()}function Ee(){r&&!(q.width===i.width&&q.height===i.height)&&(q.width=D.width=i.width,q.height=D.height=i.height),!q.width&&!q.height&&(B(D),q.width=D.width,q.height=D.height),ne.clearRect(0,0,q.width,q.height),Z=Z.filter(function(Me){return x(ne,Me)}),Z.length?Q=p.frame(Ee):pe()}Q=p.frame(Ee),se=pe});return{addFettis:function(_e){return Z=Z.concat(_e),ve},canvas:D,promise:ve,reset:function(){Q&&p.cancel(Q),se&&se()}}}function mt(D,C){var B=!D,q=!!P(C||{},"resize"),X=!1,Z=P(C,"disableForReducedMotion",Boolean),ne=s&&!!P(C||{},"useWorker"),Q=ne?g():null,se=B?T:v,ve=D&&Q?!!D.__confetti_initialized:!1,_e=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,pe;function Ee(oe,Ke,Et){for(var Dt=P(oe,"particleCount",_),en=P(oe,"angle",Number),mn=P(oe,"spread",Number),Tt=P(oe,"startVelocity",Number),Ca=P(oe,"decay",Number),vc=P(oe,"gravity",Number),Os=P(oe,"drift",Number),Pi=P(oe,"colors",M),Ra=P(oe,"ticks",Number),Be=P(oe,"shapes"),Xe=P(oe,"scalar"),ki=!!P(oe,"flat"),Ms=z(oe),Vs=Dt,Ls=[],Wr=D.width*Ms.x,Pa=D.height*Ms.y;Vs--;)Ls.push(k({x:Wr,y:Pa,angle:en,spread:mn,startVelocity:Tt,color:Pi[Vs%Pi.length],shape:Be[y(0,Be.length)],ticks:Ra,decay:Ca,gravity:vc,drift:Os,scalar:Xe,flat:ki}));return pe?pe.addFettis(Ls):(pe=S(D,Ls,se,Ke,Et),pe.promise)}function Me(oe){var Ke=Z||P(oe,"disableForReducedMotion",Boolean),Et=P(oe,"zIndex",Number);if(Ke&&_e)return c(function(Tt){Tt()});B&&pe?D=pe.canvas:B&&!D&&(D=E(Et),document.body.appendChild(D)),q&&!ve&&se(D);var Dt={width:D.width,height:D.height};Q&&!ve&&Q.init(D),ve=!0,Q&&(D.__confetti_initialized=!0);function en(){if(Q){var Tt={getBoundingClientRect:function(){if(!B)return D.getBoundingClientRect()}};se(Tt),Q.postMessage({resize:{width:Tt.width,height:Tt.height}});return}Dt.width=Dt.height=null}function mn(){pe=null,q&&(X=!1,e.removeEventListener("resize",en)),B&&D&&(document.body.contains(D)&&document.body.removeChild(D),D=null,ve=!1)}return q&&!X&&(X=!0,e.addEventListener("resize",en,!1)),Q?Q.fire(oe,Dt,mn):Ee(oe,Dt,mn)}return Me.reset=function(){Q&&Q.reset(),pe&&pe.reset()},Me}var Jt;function Qn(){return Jt||(Jt=mt(null,{useWorker:!0,resize:!0})),Jt}function Zt(D,C,B,q,X,Z,ne){var Q=new Path2D(D),se=new Path2D;se.addPath(Q,new DOMMatrix(C));var ve=new Path2D;return ve.addPath(se,new DOMMatrix([Math.cos(ne)*X,Math.sin(ne)*X,-Math.sin(ne)*Z,Math.cos(ne)*Z,B,q])),ve}function W(D){if(!o)throw new Error("path confetti are not supported in this browser");var C,B;typeof D=="string"?C=D:(C=D.path,B=D.matrix);var q=new Path2D(C),X=document.createElement("canvas"),Z=X.getContext("2d");if(!B){for(var ne=1e3,Q=ne,se=ne,ve=0,_e=0,pe,Ee,Me=0;Me<ne;Me+=2)for(var oe=0;oe<ne;oe+=2)Z.isPointInPath(q,Me,oe,"nonzero")&&(Q=Math.min(Q,Me),se=Math.min(se,oe),ve=Math.max(ve,Me),_e=Math.max(_e,oe));pe=ve-Q,Ee=_e-se;var Ke=10,Et=Math.min(Ke/pe,Ke/Ee);B=[Et,0,0,Et,-Math.round(pe/2+Q)*Et,-Math.round(Ee/2+se)*Et]}return{type:"path",path:C,matrix:B}}function te(D){var C,B=1,q="#000000",X='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof D=="string"?C=D:(C=D.text,B="scalar"in D?D.scalar:B,X="fontFamily"in D?D.fontFamily:X,q="color"in D?D.color:q);var Z=10*B,ne=""+Z+"px "+X,Q=new OffscreenCanvas(Z,Z),se=Q.getContext("2d");se.font=ne;var ve=se.measureText(C),_e=Math.ceil(ve.actualBoundingBoxRight+ve.actualBoundingBoxLeft),pe=Math.ceil(ve.actualBoundingBoxAscent+ve.actualBoundingBoxDescent),Ee=2,Me=ve.actualBoundingBoxLeft+Ee,oe=ve.actualBoundingBoxAscent+Ee;_e+=Ee+Ee,pe+=Ee+Ee,Q=new OffscreenCanvas(_e,pe),se=Q.getContext("2d"),se.font=ne,se.fillStyle=q,se.fillText(C,Me,oe);var Ke=1/B;return{type:"bitmap",bitmap:Q.transferToImageBitmap(),matrix:[Ke,0,0,Ke,-_e*Ke/2,-pe*Ke/2]}}n.exports=function(){return Qn().apply(this,arguments)},n.exports.reset=function(){Qn().reset()},n.exports.create=mt,n.exports.shapeFromPath=W,n.exports.shapeFromText=te})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),da,!1);const MC=da.exports;da.exports.create;const VC=()=>{const e={origin:{y:.7},spread:360,ticks:50,gravity:0,decay:.94,startVelocity:30};function n(r,i){MC({...e,...i,particleCount:Math.floor(200*r)})}n(.25,{spread:26,startVelocity:55,colors:["#FFD700","#87CEEB","#98FB98"]}),n(.2,{spread:60,colors:["#FF69B4","#BA55D3","#4169E1"]}),n(.35,{spread:100,decay:.91,scalar:.8,colors:["#FFB6C1","#DDA0DD","#87CEFA"]}),n(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2,colors:["#FF69B4","#DA70D6","#1E90FF"]})},LC={BASE_URL:"/todo/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},Kg=t=>{let e;const n=new Set,r=(f,p)=>{const g=typeof f=="function"?f(e):f;if(!Object.is(g,e)){const w=e;e=p??(typeof g!="object"||g===null)?g:Object.assign({},e,g),n.forEach(R=>R(e,w))}},i=()=>e,u={setState:r,getState:i,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(LC?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,i,u);return u},FC=t=>t?Kg(t):Kg;var tw={exports:{}},nw={},rw={exports:{}},iw={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ys=ke;function UC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jC=typeof Object.is=="function"?Object.is:UC,zC=ys.useState,$C=ys.useEffect,BC=ys.useLayoutEffect,WC=ys.useDebugValue;function HC(t,e){var n=e(),r=zC({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return BC(function(){i.value=n,i.getSnapshot=e,uh(i)&&s({inst:i})},[t,n,e]),$C(function(){return uh(i)&&s({inst:i}),t(function(){uh(i)&&s({inst:i})})},[t]),WC(n),n}function uh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jC(t,n)}catch{return!0}}function qC(t,e){return e()}var KC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?qC:HC;iw.useSyncExternalStore=ys.useSyncExternalStore!==void 0?ys.useSyncExternalStore:KC;rw.exports=iw;var GC=rw.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gu=ke,QC=GC;function YC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var XC=typeof Object.is=="function"?Object.is:YC,JC=QC.useSyncExternalStore,ZC=Gu.useRef,eR=Gu.useEffect,tR=Gu.useMemo,nR=Gu.useDebugValue;nw.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=ZC(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=tR(function(){function u(w){if(!c){if(c=!0,f=w,w=r(w),i!==void 0&&o.hasValue){var R=o.value;if(i(R,w))return p=R}return p=w}if(R=p,XC(f,w))return R;var N=r(w);return i!==void 0&&i(R,N)?(f=w,R):(f=w,p=N)}var c=!1,f,p,g=n===void 0?null:n;return[function(){return u(e())},g===null?void 0:function(){return u(g())}]},[e,n,r,i]);var l=JC(t,s[0],s[1]);return eR(function(){o.hasValue=!0,o.value=l},[l]),nR(l),l};tw.exports=nw;var rR=tw.exports;const iR=Ov(rR),sw={BASE_URL:"/todo/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},{useDebugValue:sR}=BI,{useSyncExternalStoreWithSelector:oR}=iR;let Gg=!1;const aR=t=>t;function lR(t,e=aR,n){(sw?"production":void 0)!=="production"&&n&&!Gg&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Gg=!0);const r=oR(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return sR(r),r}const uR=t=>{(sw?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?FC(t):t,n=(r,i)=>lR(e,r,i);return Object.assign(n,e),n},cR=t=>uR,hR={BASE_URL:"/todo/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};function dR(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var s;const o=u=>u===null?null:JSON.parse(u,void 0),l=(s=n.getItem(i))!=null?s:null;return l instanceof Promise?l.then(o):o(l)},setItem:(i,s)=>n.setItem(i,JSON.stringify(s,void 0)),removeItem:i=>n.removeItem(i)}}const Yo=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return Yo(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Yo(r)(n)}}}},fR=(t,e)=>(n,r,i)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:P=>P,version:0,merge:(P,_)=>({..._,...P}),...e},o=!1;const l=new Set,u=new Set;let c;try{c=s.getStorage()}catch{}if(!c)return t((...P)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...P)},r,i);const f=Yo(s.serialize),p=()=>{const P=s.partialize({...r()});let _;const y=f({state:P,version:s.version}).then(A=>c.setItem(s.name,A)).catch(A=>{_=A});if(_)throw _;return y},g=i.setState;i.setState=(P,_)=>{g(P,_),p()};const w=t((...P)=>{n(...P),p()},r,i);let R;const N=()=>{var P;if(!c)return;o=!1,l.forEach(y=>y(r()));const _=((P=s.onRehydrateStorage)==null?void 0:P.call(s,r()))||void 0;return Yo(c.getItem.bind(c))(s.name).then(y=>{if(y)return s.deserialize(y)}).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==s.version){if(s.migrate)return s.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var A;return R=s.merge(y,(A=r())!=null?A:w),n(R,!0),p()}).then(()=>{_==null||_(R,void 0),o=!0,u.forEach(y=>y(R))}).catch(y=>{_==null||_(void 0,y)})};return i.persist={setOptions:P=>{s={...s,...P},P.getStorage&&(c=P.getStorage())},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>N(),hasHydrated:()=>o,onHydrate:P=>(l.add(P),()=>{l.delete(P)}),onFinishHydration:P=>(u.add(P),()=>{u.delete(P)})},N(),R||w},pR=(t,e)=>(n,r,i)=>{let s={storage:dR(()=>localStorage),partialize:N=>N,version:0,merge:(N,P)=>({...P,...N}),...e},o=!1;const l=new Set,u=new Set;let c=s.storage;if(!c)return t((...N)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...N)},r,i);const f=()=>{const N=s.partialize({...r()});return c.setItem(s.name,{state:N,version:s.version})},p=i.setState;i.setState=(N,P)=>{p(N,P),f()};const g=t((...N)=>{n(...N),f()},r,i);i.getInitialState=()=>g;let w;const R=()=>{var N,P;if(!c)return;o=!1,l.forEach(y=>{var A;return y((A=r())!=null?A:g)});const _=((P=s.onRehydrateStorage)==null?void 0:P.call(s,(N=r())!=null?N:g))||void 0;return Yo(c.getItem.bind(c))(s.name).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==s.version){if(s.migrate)return[!0,s.migrate(y.state,y.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,y.state];return[!1,void 0]}).then(y=>{var A;const[M,j]=y;if(w=s.merge(j,(A=r())!=null?A:g),n(w,!0),M)return f()}).then(()=>{_==null||_(w,void 0),w=r(),o=!0,u.forEach(y=>y(w))}).catch(y=>{_==null||_(void 0,y)})};return i.persist={setOptions:N=>{s={...s,...N},N.storage&&(c=N.storage)},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>R(),hasHydrated:()=>o,onHydrate:N=>(l.add(N),()=>{l.delete(N)}),onFinishHydration:N=>(u.add(N),()=>{u.delete(N)})},s.skipHydration||R(),w||g},mR=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((hR?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),fR(t,e)):pR(t,e),gR=mR,yR=()=>{};var Qg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},aw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(g=64)),r.push(n[f],n[p],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ow(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new _R;const g=s<<2|l>>4;if(r.push(g),c!==64){const w=l<<4&240|c>>2;if(r.push(w),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _R extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wR=function(t){const e=ow(t);return aw.encodeByteArray(e,!0)},uu=function(t){return wR(t).replace(/\./g,"")},lw=function(t){try{return aw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=()=>ER().__FIREBASE_DEFAULTS__,IR=()=>{if(typeof process>"u"||typeof Qg>"u")return;const t=Qg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lw(t[1]);return e&&JSON.parse(e)},Qu=()=>{try{return yR()||TR()||IR()||SR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uw=t=>{var e,n;return(n=(e=Qu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AR=t=>{const e=uw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cw=()=>{var t;return(t=Qu())===null||t===void 0?void 0:t.config},hw=t=>{var e;return(e=Qu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[uu(JSON.stringify(n)),uu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function kR(){var t;const e=(t=Qu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function DR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xR(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bR(){return!kR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fw(){try{return typeof indexedDB=="object"}catch{return!1}}function pw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function OR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=MR,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?VR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new pn(i,l,r)}}function VR(t,e){return t.replace(LR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LR=/\{\$([^}]+)}/g;function FR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yg(s)&&Yg(o)){if(!Nr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ho(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function fo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function UR(t,e){const n=new jR(t,e);return n.subscribe.bind(n)}class jR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ch),i.error===void 0&&(i.error=ch),i.complete===void 0&&(i.complete=ch);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ch(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=1e3,BR=2,WR=4*60*60*1e3,HR=.5;function Xg(t,e=$R,n=BR){const r=e*Math.pow(n,t),i=Math.round(HR*r*(Math.random()-.5)*2);return Math.min(WR,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new CR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GR(e))try{this.getOrInitializeService({instanceIdentifier:Jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jr){return this.instances.has(e)}getOptions(e=Jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jr){return this.component?this.component.multipleInstances?e:Jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KR(t){return t===Jr?void 0:t}function GR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const YR={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},XR=le.INFO,JR={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},ZR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yu{constructor(e){this.name=e,this._logLevel=XR,this._logHandler=ZR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const eP=(t,e)=>e.some(n=>t instanceof n);let Jg,Zg;function tP(){return Jg||(Jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nP(){return Zg||(Zg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mw=new WeakMap,yd=new WeakMap,gw=new WeakMap,hh=new WeakMap,zf=new WeakMap;function rP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mw.set(n,t)}).catch(()=>{}),zf.set(e,t),e}function iP(t){if(yd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yd.set(t,e)}let vd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sP(t){vd=t(vd)}function oP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dh(this),e,...n);return gw.set(r,e.sort?e.sort():[e]),Er(r)}:nP().includes(t)?function(...e){return t.apply(dh(this),e),Er(mw.get(this))}:function(...e){return Er(t.apply(dh(this),e))}}function aP(t){return typeof t=="function"?oP(t):(t instanceof IDBTransaction&&iP(t),eP(t,tP())?new Proxy(t,vd):t)}function Er(t){if(t instanceof IDBRequest)return rP(t);if(hh.has(t))return hh.get(t);const e=aP(t);return e!==t&&(hh.set(t,e),zf.set(e,t)),e}const dh=t=>zf.get(t);function yw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Er(o.result),u.oldVersion,u.newVersion,Er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const lP=["get","getKey","getAll","getAllKeys","count"],uP=["put","add","delete","clear"],fh=new Map;function ey(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fh.get(e))return fh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=uP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return fh.set(e,s),s}sP(t=>({...t,get:(e,n,r)=>ey(e,n)||t.get(e,n,r),has:(e,n)=>!!ey(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _d="@firebase/app",ty="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Yu("@firebase/app"),dP="@firebase/app-compat",fP="@firebase/analytics-compat",pP="@firebase/analytics",mP="@firebase/app-check-compat",gP="@firebase/app-check",yP="@firebase/auth",vP="@firebase/auth-compat",_P="@firebase/database",wP="@firebase/data-connect",EP="@firebase/database-compat",TP="@firebase/functions",IP="@firebase/functions-compat",SP="@firebase/installations",AP="@firebase/installations-compat",CP="@firebase/messaging",RP="@firebase/messaging-compat",PP="@firebase/performance",kP="@firebase/performance-compat",NP="@firebase/remote-config",DP="@firebase/remote-config-compat",xP="@firebase/storage",bP="@firebase/storage-compat",OP="@firebase/firestore",MP="@firebase/vertexai",VP="@firebase/firestore-compat",LP="firebase",FP="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="[DEFAULT]",UP={[_d]:"fire-core",[dP]:"fire-core-compat",[pP]:"fire-analytics",[fP]:"fire-analytics-compat",[gP]:"fire-app-check",[mP]:"fire-app-check-compat",[yP]:"fire-auth",[vP]:"fire-auth-compat",[_P]:"fire-rtdb",[wP]:"fire-data-connect",[EP]:"fire-rtdb-compat",[TP]:"fire-fn",[IP]:"fire-fn-compat",[SP]:"fire-iid",[AP]:"fire-iid-compat",[CP]:"fire-fcm",[RP]:"fire-fcm-compat",[PP]:"fire-perf",[kP]:"fire-perf-compat",[NP]:"fire-rc",[DP]:"fire-rc-compat",[xP]:"fire-gcs",[bP]:"fire-gcs-compat",[OP]:"fire-fst",[VP]:"fire-fst-compat",[MP]:"fire-vertex","fire-js":"fire-js",[LP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new Map,jP=new Map,Ed=new Map;function ny(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cn(t){const e=t.name;if(Ed.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;Ed.set(e,t);for(const n of cu.values())ny(n,t);for(const n of jP.values())ny(n,t);return!0}function Ii(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ht(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Ti("app","Firebase",zP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=FP;function vw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Tr.create("bad-app-name",{appName:String(i)});if(n||(n=cw()),!n)throw Tr.create("no-options");const s=cu.get(i);if(s){if(Nr(n,s.options)&&Nr(r,s.config))return s;throw Tr.create("duplicate-app",{appName:i})}const o=new QR(i);for(const u of Ed.values())o.addComponent(u);const l=new $P(n,r,o);return cu.set(i,l),l}function $f(t=wd){const e=cu.get(t);if(!e&&t===wd&&cw())return vw();if(!e)throw Tr.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let i=(r=UP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(l.join(" "));return}Cn(new hn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP="firebase-heartbeat-database",WP=1,Xo="firebase-heartbeat-store";let ph=null;function _w(){return ph||(ph=yw(BP,WP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tr.create("idb-open",{originalErrorMessage:t.message})})),ph}async function HP(t){try{const n=(await _w()).transaction(Xo),r=await n.objectStore(Xo).get(ww(t));return await n.done,r}catch(e){if(e instanceof pn)Bn.warn(e.message);else{const n=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function ry(t,e){try{const r=(await _w()).transaction(Xo,"readwrite");await r.objectStore(Xo).put(e,ww(t)),await r.done}catch(n){if(n instanceof pn)Bn.warn(n.message);else{const r=Tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function ww(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=1024,KP=30;class GP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=iy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>KP){const o=XP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=iy(),{heartbeatsToSend:r,unsentEntries:i}=QP(this._heartbeatsCache.heartbeats),s=uu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Bn.warn(n),""}}}function iy(){return new Date().toISOString().substring(0,10)}function QP(t,e=qP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fw()?pw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sy(t){return uu(JSON.stringify({version:2,heartbeats:t})).length}function XP(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t){Cn(new hn("platform-logger",e=>new cP(e),"PRIVATE")),Cn(new hn("heartbeat",e=>new GP(e),"PRIVATE")),Gt(_d,ty,t),Gt(_d,ty,"esm2017"),Gt("fire-js","")}JP("");var oy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ir,Ew;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function E(){}E.prototype=v.prototype,T.D=v.prototype,T.prototype=new E,T.prototype.constructor=T,T.C=function(I,k,x){for(var S=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)S[mt-2]=arguments[mt];return v.prototype[k].apply(I,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,v,E){E||(E=0);var I=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)I[k]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(k=0;16>k;++k)I[k]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=T.g[0],E=T.g[1],k=T.g[2];var x=T.g[3],S=v+(x^E&(k^x))+I[0]+3614090360&4294967295;v=E+(S<<7&4294967295|S>>>25),S=x+(k^v&(E^k))+I[1]+3905402710&4294967295,x=v+(S<<12&4294967295|S>>>20),S=k+(E^x&(v^E))+I[2]+606105819&4294967295,k=x+(S<<17&4294967295|S>>>15),S=E+(v^k&(x^v))+I[3]+3250441966&4294967295,E=k+(S<<22&4294967295|S>>>10),S=v+(x^E&(k^x))+I[4]+4118548399&4294967295,v=E+(S<<7&4294967295|S>>>25),S=x+(k^v&(E^k))+I[5]+1200080426&4294967295,x=v+(S<<12&4294967295|S>>>20),S=k+(E^x&(v^E))+I[6]+2821735955&4294967295,k=x+(S<<17&4294967295|S>>>15),S=E+(v^k&(x^v))+I[7]+4249261313&4294967295,E=k+(S<<22&4294967295|S>>>10),S=v+(x^E&(k^x))+I[8]+1770035416&4294967295,v=E+(S<<7&4294967295|S>>>25),S=x+(k^v&(E^k))+I[9]+2336552879&4294967295,x=v+(S<<12&4294967295|S>>>20),S=k+(E^x&(v^E))+I[10]+4294925233&4294967295,k=x+(S<<17&4294967295|S>>>15),S=E+(v^k&(x^v))+I[11]+2304563134&4294967295,E=k+(S<<22&4294967295|S>>>10),S=v+(x^E&(k^x))+I[12]+1804603682&4294967295,v=E+(S<<7&4294967295|S>>>25),S=x+(k^v&(E^k))+I[13]+4254626195&4294967295,x=v+(S<<12&4294967295|S>>>20),S=k+(E^x&(v^E))+I[14]+2792965006&4294967295,k=x+(S<<17&4294967295|S>>>15),S=E+(v^k&(x^v))+I[15]+1236535329&4294967295,E=k+(S<<22&4294967295|S>>>10),S=v+(k^x&(E^k))+I[1]+4129170786&4294967295,v=E+(S<<5&4294967295|S>>>27),S=x+(E^k&(v^E))+I[6]+3225465664&4294967295,x=v+(S<<9&4294967295|S>>>23),S=k+(v^E&(x^v))+I[11]+643717713&4294967295,k=x+(S<<14&4294967295|S>>>18),S=E+(x^v&(k^x))+I[0]+3921069994&4294967295,E=k+(S<<20&4294967295|S>>>12),S=v+(k^x&(E^k))+I[5]+3593408605&4294967295,v=E+(S<<5&4294967295|S>>>27),S=x+(E^k&(v^E))+I[10]+38016083&4294967295,x=v+(S<<9&4294967295|S>>>23),S=k+(v^E&(x^v))+I[15]+3634488961&4294967295,k=x+(S<<14&4294967295|S>>>18),S=E+(x^v&(k^x))+I[4]+3889429448&4294967295,E=k+(S<<20&4294967295|S>>>12),S=v+(k^x&(E^k))+I[9]+568446438&4294967295,v=E+(S<<5&4294967295|S>>>27),S=x+(E^k&(v^E))+I[14]+3275163606&4294967295,x=v+(S<<9&4294967295|S>>>23),S=k+(v^E&(x^v))+I[3]+4107603335&4294967295,k=x+(S<<14&4294967295|S>>>18),S=E+(x^v&(k^x))+I[8]+1163531501&4294967295,E=k+(S<<20&4294967295|S>>>12),S=v+(k^x&(E^k))+I[13]+2850285829&4294967295,v=E+(S<<5&4294967295|S>>>27),S=x+(E^k&(v^E))+I[2]+4243563512&4294967295,x=v+(S<<9&4294967295|S>>>23),S=k+(v^E&(x^v))+I[7]+1735328473&4294967295,k=x+(S<<14&4294967295|S>>>18),S=E+(x^v&(k^x))+I[12]+2368359562&4294967295,E=k+(S<<20&4294967295|S>>>12),S=v+(E^k^x)+I[5]+4294588738&4294967295,v=E+(S<<4&4294967295|S>>>28),S=x+(v^E^k)+I[8]+2272392833&4294967295,x=v+(S<<11&4294967295|S>>>21),S=k+(x^v^E)+I[11]+1839030562&4294967295,k=x+(S<<16&4294967295|S>>>16),S=E+(k^x^v)+I[14]+4259657740&4294967295,E=k+(S<<23&4294967295|S>>>9),S=v+(E^k^x)+I[1]+2763975236&4294967295,v=E+(S<<4&4294967295|S>>>28),S=x+(v^E^k)+I[4]+1272893353&4294967295,x=v+(S<<11&4294967295|S>>>21),S=k+(x^v^E)+I[7]+4139469664&4294967295,k=x+(S<<16&4294967295|S>>>16),S=E+(k^x^v)+I[10]+3200236656&4294967295,E=k+(S<<23&4294967295|S>>>9),S=v+(E^k^x)+I[13]+681279174&4294967295,v=E+(S<<4&4294967295|S>>>28),S=x+(v^E^k)+I[0]+3936430074&4294967295,x=v+(S<<11&4294967295|S>>>21),S=k+(x^v^E)+I[3]+3572445317&4294967295,k=x+(S<<16&4294967295|S>>>16),S=E+(k^x^v)+I[6]+76029189&4294967295,E=k+(S<<23&4294967295|S>>>9),S=v+(E^k^x)+I[9]+3654602809&4294967295,v=E+(S<<4&4294967295|S>>>28),S=x+(v^E^k)+I[12]+3873151461&4294967295,x=v+(S<<11&4294967295|S>>>21),S=k+(x^v^E)+I[15]+530742520&4294967295,k=x+(S<<16&4294967295|S>>>16),S=E+(k^x^v)+I[2]+3299628645&4294967295,E=k+(S<<23&4294967295|S>>>9),S=v+(k^(E|~x))+I[0]+4096336452&4294967295,v=E+(S<<6&4294967295|S>>>26),S=x+(E^(v|~k))+I[7]+1126891415&4294967295,x=v+(S<<10&4294967295|S>>>22),S=k+(v^(x|~E))+I[14]+2878612391&4294967295,k=x+(S<<15&4294967295|S>>>17),S=E+(x^(k|~v))+I[5]+4237533241&4294967295,E=k+(S<<21&4294967295|S>>>11),S=v+(k^(E|~x))+I[12]+1700485571&4294967295,v=E+(S<<6&4294967295|S>>>26),S=x+(E^(v|~k))+I[3]+2399980690&4294967295,x=v+(S<<10&4294967295|S>>>22),S=k+(v^(x|~E))+I[10]+4293915773&4294967295,k=x+(S<<15&4294967295|S>>>17),S=E+(x^(k|~v))+I[1]+2240044497&4294967295,E=k+(S<<21&4294967295|S>>>11),S=v+(k^(E|~x))+I[8]+1873313359&4294967295,v=E+(S<<6&4294967295|S>>>26),S=x+(E^(v|~k))+I[15]+4264355552&4294967295,x=v+(S<<10&4294967295|S>>>22),S=k+(v^(x|~E))+I[6]+2734768916&4294967295,k=x+(S<<15&4294967295|S>>>17),S=E+(x^(k|~v))+I[13]+1309151649&4294967295,E=k+(S<<21&4294967295|S>>>11),S=v+(k^(E|~x))+I[4]+4149444226&4294967295,v=E+(S<<6&4294967295|S>>>26),S=x+(E^(v|~k))+I[11]+3174756917&4294967295,x=v+(S<<10&4294967295|S>>>22),S=k+(v^(x|~E))+I[2]+718787259&4294967295,k=x+(S<<15&4294967295|S>>>17),S=E+(x^(k|~v))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(k+(S<<21&4294967295|S>>>11))&4294967295,T.g[2]=T.g[2]+k&4294967295,T.g[3]=T.g[3]+x&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var E=v-this.blockSize,I=this.B,k=this.h,x=0;x<v;){if(k==0)for(;x<=E;)i(this,T,x),x+=this.blockSize;if(typeof T=="string"){for(;x<v;)if(I[k++]=T.charCodeAt(x++),k==this.blockSize){i(this,I),k=0;break}}else for(;x<v;)if(I[k++]=T[x++],k==this.blockSize){i(this,I),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var E=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=E&255,E/=256;for(this.u(T),T=Array(16),v=E=0;4>v;++v)for(var I=0;32>I;I+=8)T[E++]=this.g[v]>>>I&255;return T};function s(T,v){var E=l;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=v(T)}function o(T,v){this.h=v;for(var E=[],I=!0,k=T.length-1;0<=k;k--){var x=T[k]|0;I&&x==v||(E[k]=x,I=!1)}this.g=E}var l={};function u(T){return-128<=T&&128>T?s(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return P(c(-T));for(var v=[],E=1,I=0;T>=E;I++)v[I]=T/E|0,E*=4294967296;return new o(v,0)}function f(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return P(f(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(v,8)),I=p,k=0;k<T.length;k+=8){var x=Math.min(8,T.length-k),S=parseInt(T.substring(k,k+x),v);8>x?(x=c(Math.pow(v,x)),I=I.j(x).add(c(S))):(I=I.j(E),I=I.add(c(S)))}return I}var p=u(0),g=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-P(this).m();for(var T=0,v=1,E=0;E<this.g.length;E++){var I=this.i(E);T+=(0<=I?I:4294967296+I)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if(N(this))return"-"+P(this).toString(T);for(var v=c(Math.pow(T,6)),E=this,I="";;){var k=M(E,v).g;E=_(E,k.j(v));var x=((0<E.g.length?E.g[0]:E.h)>>>0).toString(T);if(E=k,R(E))return x+I;for(;6>x.length;)x="0"+x;I=x+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function N(T){return T.h==-1}t.l=function(T){return T=_(this,T),N(T)?-1:R(T)?0:1};function P(T){for(var v=T.g.length,E=[],I=0;I<v;I++)E[I]=~T.g[I];return new o(E,~T.h).add(g)}t.abs=function(){return N(this)?P(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),E=[],I=0,k=0;k<=v;k++){var x=I+(this.i(k)&65535)+(T.i(k)&65535),S=(x>>>16)+(this.i(k)>>>16)+(T.i(k)>>>16);I=S>>>16,x&=65535,S&=65535,E[k]=S<<16|x}return new o(E,E[E.length-1]&-2147483648?-1:0)};function _(T,v){return T.add(P(v))}t.j=function(T){if(R(this)||R(T))return p;if(N(this))return N(T)?P(this).j(P(T)):P(P(this).j(T));if(N(T))return P(this.j(P(T)));if(0>this.l(w)&&0>T.l(w))return c(this.m()*T.m());for(var v=this.g.length+T.g.length,E=[],I=0;I<2*v;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var k=0;k<T.g.length;k++){var x=this.i(I)>>>16,S=this.i(I)&65535,mt=T.i(k)>>>16,Jt=T.i(k)&65535;E[2*I+2*k]+=S*Jt,y(E,2*I+2*k),E[2*I+2*k+1]+=x*Jt,y(E,2*I+2*k+1),E[2*I+2*k+1]+=S*mt,y(E,2*I+2*k+1),E[2*I+2*k+2]+=x*mt,y(E,2*I+2*k+2)}for(I=0;I<v;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=v;I<2*v;I++)E[I]=0;return new o(E,0)};function y(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function A(T,v){this.g=T,this.h=v}function M(T,v){if(R(v))throw Error("division by zero");if(R(T))return new A(p,p);if(N(T))return v=M(P(T),v),new A(P(v.g),P(v.h));if(N(v))return v=M(T,P(v)),new A(P(v.g),v.h);if(30<T.g.length){if(N(T)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var E=g,I=v;0>=I.l(T);)E=j(E),I=j(I);var k=z(E,1),x=z(I,1);for(I=z(I,2),E=z(E,2);!R(I);){var S=x.add(I);0>=S.l(T)&&(k=k.add(E),x=S),I=z(I,1),E=z(E,1)}return v=_(T,k.j(v)),new A(k,v)}for(k=p;0<=T.l(v);){for(E=Math.max(1,Math.floor(T.m()/v.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),x=c(E),S=x.j(v);N(S)||0<S.l(T);)E-=I,x=c(E),S=x.j(v);R(x)&&(x=g),k=k.add(x),T=_(T,S)}return new A(k,T)}t.A=function(T){return M(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)&T.i(I);return new o(E,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)|T.i(I);return new o(E,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)^T.i(I);return new o(E,this.h^T.h)};function j(T){for(var v=T.g.length+1,E=[],I=0;I<v;I++)E[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(E,T.h)}function z(T,v){var E=v>>5;v%=32;for(var I=T.g.length-E,k=[],x=0;x<I;x++)k[x]=0<v?T.i(x+E)>>>v|T.i(x+E+1)<<32-v:T.i(x+E);return new o(k,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ew=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Ir=o}).apply(typeof oy<"u"?oy:typeof self<"u"?self:typeof window<"u"?window:{});var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tw,po,Iw,Pl,Td,Sw,Aw,Cw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ll=="object"&&ll];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var b=a[m];if(!(b in d))break e;d=d[b]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,m=!1,b={next:function(){if(!m&&d<a.length){var O=d++;return{value:h(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,m),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function w(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function R(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,b,O){for(var $=Array(arguments.length-2),we=2;we<arguments.length;we++)$[we-2]=arguments[we];return h.prototype[b].apply(m,$)}}function N(a){const h=a.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function P(a,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const b=a.length||0,O=m.length||0;a.length=b+O;for(let $=0;$<O;$++)a[b+$]=m[$]}else a.push(m)}}class _{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function M(a){return M[" "](a),a}M[" "]=function(){};var j=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function z(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function T(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let d,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(d in m)a[d]=m[d];for(let O=0;O<E.length;O++)d=E[O],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function k(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function x(a){l.setTimeout(()=>{throw a},0)}function S(){var a=te;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class mt{constructor(){this.h=this.g=null}add(h,d){const m=Jt.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Jt=new _(()=>new Qn,a=>a.reset());class Qn{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Zt,W=!1,te=new mt,D=()=>{const a=l.Promise.resolve(void 0);Zt=()=>{a.then(C)}};var C=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(d){x(d)}var h=Jt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}W=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function q(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}q.prototype.h=function(){this.defaultPrevented=!0};var X=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function Z(a,h){if(q.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(j){e:{try{M(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ne[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Z.aa.h.call(this)}}R(Z,q);var ne={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),se=0;function ve(a,h,d,m,b){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=b,this.key=++se,this.da=this.fa=!1}function _e(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function pe(a){this.src=a,this.g={},this.h=0}pe.prototype.add=function(a,h,d,m,b){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var $=Me(a,h,m,b);return-1<$?(h=a[$],d||(h.fa=!1)):(h=new ve(h,this.src,O,!!m,b),h.fa=d,a.push(h)),h};function Ee(a,h){var d=h.type;if(d in a.g){var m=a.g[d],b=Array.prototype.indexOf.call(m,h,void 0),O;(O=0<=b)&&Array.prototype.splice.call(m,b,1),O&&(_e(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Me(a,h,d,m){for(var b=0;b<a.length;++b){var O=a[b];if(!O.da&&O.listener==h&&O.capture==!!d&&O.ha==m)return b}return-1}var oe="closure_lm_"+(1e6*Math.random()|0),Ke={};function Et(a,h,d,m,b){if(Array.isArray(h)){for(var O=0;O<h.length;O++)Et(a,h[O],d,m,b);return null}return d=Ra(d),a&&a[Q]?a.K(h,d,c(m)?!!m.capture:!!m,b):Dt(a,h,d,!1,m,b)}function Dt(a,h,d,m,b,O){if(!h)throw Error("Invalid event type");var $=c(b)?!!b.capture:!!b,we=Os(a);if(we||(a[oe]=we=new pe(a)),d=we.add(h,d,m,$,O),d.proxy)return d;if(m=en(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)X||(b=$),b===void 0&&(b=!1),a.addEventListener(h.toString(),m,b);else if(a.attachEvent)a.attachEvent(Ca(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function en(){function a(d){return h.call(a.src,a.listener,d)}const h=vc;return a}function mn(a,h,d,m,b){if(Array.isArray(h))for(var O=0;O<h.length;O++)mn(a,h[O],d,m,b);else m=c(m)?!!m.capture:!!m,d=Ra(d),a&&a[Q]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],d=Me(O,d,m,b),-1<d&&(_e(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=Os(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Me(h,d,m,b)),(d=-1<a?h[a]:null)&&Tt(d))}function Tt(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Q])Ee(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(Ca(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=Os(h))?(Ee(d,a),d.h==0&&(d.src=null,h[oe]=null)):_e(a)}}}function Ca(a){return a in Ke?Ke[a]:Ke[a]="on"+a}function vc(a,h){if(a.da)a=!0;else{h=new Z(h,this);var d=a.listener,m=a.ha||a.src;a.fa&&Tt(a),a=d.call(m,h)}return a}function Os(a){return a=a[oe],a instanceof pe?a:null}var Pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ra(a){return typeof a=="function"?a:(a[Pi]||(a[Pi]=function(h){return a.handleEvent(h)}),a[Pi])}function Be(){B.call(this),this.i=new pe(this),this.M=this,this.F=null}R(Be,B),Be.prototype[Q]=!0,Be.prototype.removeEventListener=function(a,h,d,m){mn(this,a,h,d,m)};function Xe(a,h){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new q(h,a);else if(h instanceof q)h.target=h.target||a;else{var b=h;h=new q(m,a),I(h,b)}if(b=!0,d)for(var O=d.length-1;0<=O;O--){var $=h.g=d[O];b=ki($,m,!0,h)&&b}if($=h.g=a,b=ki($,m,!0,h)&&b,b=ki($,m,!1,h)&&b,d)for(O=0;O<d.length;O++)$=h.g=d[O],b=ki($,m,!1,h)&&b}Be.prototype.N=function(){if(Be.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],m=0;m<d.length;m++)_e(d[m]);delete a.g[h],a.h--}}this.F=null},Be.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},Be.prototype.L=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function ki(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,O=0;O<h.length;++O){var $=h[O];if($&&!$.da&&$.capture==d){var we=$.listener,Je=$.ha||$.src;$.fa&&Ee(a.i,$),b=we.call(Je,m)!==!1&&b}}return b&&!m.defaultPrevented}function Ms(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Vs(a){a.g=Ms(()=>{a.g=null,a.i&&(a.i=!1,Vs(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ls extends B{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Vs(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(a){B.call(this),this.h=a,this.g={}}R(Wr,B);var Pa=[];function zp(a){z(a.g,function(h,d){this.g.hasOwnProperty(d)&&Tt(h)},a),a.g={}}Wr.prototype.N=function(){Wr.aa.N.call(this),zp(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _c=l.JSON.stringify,nI=l.JSON.parse,rI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function wc(){}wc.prototype.h=null;function $p(a){return a.h||(a.h=a.i())}function Bp(){}var Fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ec(){q.call(this,"d")}R(Ec,q);function Tc(){q.call(this,"c")}R(Tc,q);var Hr={},Wp=null;function ka(){return Wp=Wp||new Be}Hr.La="serverreachability";function Hp(a){q.call(this,Hr.La,a)}R(Hp,q);function Us(a){const h=ka();Xe(h,new Hp(h))}Hr.STAT_EVENT="statevent";function qp(a,h){q.call(this,Hr.STAT_EVENT,a),this.stat=h}R(qp,q);function gt(a){const h=ka();Xe(h,new qp(h,a))}Hr.Ma="timingevent";function Kp(a,h){q.call(this,Hr.Ma,a),this.size=h}R(Kp,q);function js(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function zs(){this.g=!0}zs.prototype.xa=function(){this.g=!1};function iI(a,h,d,m,b,O){a.info(function(){if(a.g)if(O)for(var $="",we=O.split("&"),Je=0;Je<we.length;Je++){var fe=we[Je].split("=");if(1<fe.length){var st=fe[0];fe=fe[1];var ot=st.split("_");$=2<=ot.length&&ot[1]=="type"?$+(st+"="+fe+"&"):$+(st+"=redacted&")}}else $=null;else $=O;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+h+`
`+d+`
`+$})}function sI(a,h,d,m,b,O,$){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+h+`
`+d+`
`+O+" "+$})}function Ni(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+aI(a,d)+(m?" "+m:"")})}function oI(a,h){a.info(function(){return"TIMEOUT: "+h})}zs.prototype.info=function(){};function aI(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var b=m[1];if(Array.isArray(b)&&!(1>b.length)){var O=b[0];if(O!="noop"&&O!="stop"&&O!="close")for(var $=1;$<b.length;$++)b[$]=""}}}}return _c(d)}catch{return h}}var Na={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ic;function Da(){}R(Da,wc),Da.prototype.g=function(){return new XMLHttpRequest},Da.prototype.i=function(){return{}},Ic=new Da;function Yn(a,h,d,m){this.j=a,this.i=h,this.l=d,this.R=m||1,this.U=new Wr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qp}function Qp(){this.i=null,this.g="",this.h=!1}var Yp={},Sc={};function Ac(a,h,d){a.L=1,a.v=Ma(Pn(h)),a.m=d,a.P=!0,Xp(a,null)}function Xp(a,h){a.F=Date.now(),xa(a),a.A=Pn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),hm(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Qp,a.g=km(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Ls(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,m=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Pa[0]=b.toString()),b=Pa);for(var O=0;O<b.length;O++){var $=Et(d,b[O],m||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Us(),iI(a.i,a.u,a.A,a.l,a.R,a.m)}Yn.prototype.ca=function(a){a=a.target;const h=this.M;h&&kn(a)==3?h.j():this.Y(a)},Yn.prototype.Y=function(a){try{if(a==this.g)e:{const ot=kn(this.g);var h=this.g.Ba();const bi=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||vm(this.g)))){this.J||ot!=4||h==7||(h==8||0>=bi?Us(3):Us(2)),Cc(this);var d=this.g.Z();this.X=d;t:if(Jp(this)){var m=vm(this.g);a="";var b=m.length,O=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qr(this),$s(this);var $="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(O&&h==b-1)});m.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=d==200,sI(this.i,this.u,this.A,this.l,this.R,ot,d),this.o){if(this.T&&!this.K){t:{if(this.g){var we,Je=this.g;if((we=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(we)){var fe=we;break t}}fe=null}if(d=fe)Ni(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rc(this,d);else{this.o=!1,this.s=3,gt(12),qr(this),$s(this);break e}}if(this.P){d=!0;let tn;for(;!this.J&&this.C<$.length;)if(tn=lI(this,$),tn==Sc){ot==4&&(this.s=4,gt(14),d=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Yp){this.s=4,gt(15),Ni(this.i,this.l,$,"[Invalid Chunk]"),d=!1;break}else Ni(this.i,this.l,tn,null),Rc(this,tn);if(Jp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||$.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)Ni(this.i,this.l,$,"[Invalid Chunked Response]"),qr(this),$s(this);else if(0<$.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),bc(st),st.M=!0,gt(11))}}else Ni(this.i,this.l,$,null),Rc(this,$);ot==4&&qr(this),this.o&&!this.J&&(ot==4?Am(this.j,this):(this.o=!1,xa(this)))}else AI(this.g),d==400&&0<$.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),qr(this),$s(this)}}}catch{}finally{}};function Jp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function lI(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?Sc:(d=Number(h.substring(d,m)),isNaN(d)?Yp:(m+=1,m+d>h.length?Sc:(h=h.slice(m,m+d),a.C=m+d,h)))}Yn.prototype.cancel=function(){this.J=!0,qr(this)};function xa(a){a.S=Date.now()+a.I,Zp(a,a.I)}function Zp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=js(g(a.ba,a),h)}function Cc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Yn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(oI(this.i,this.A),this.L!=2&&(Us(),gt(17)),qr(this),this.s=2,$s(this)):Zp(this,this.S-a)};function $s(a){a.j.G==0||a.J||Am(a.j,a)}function qr(a){Cc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,zp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Rc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Pc(d.h,a))){if(!a.K&&Pc(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)za(d),Ua(d);else break e;xc(d),gt(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=js(g(d.Za,d),6e3));if(1>=nm(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Gr(d,11)}else if((a.K||d.g==a)&&za(d),!y(h))for(b=d.Da.g.parse(h),h=0;h<b.length;h++){let fe=b[h];if(d.T=fe[0],fe=fe[1],d.G==2)if(fe[0]=="c"){d.K=fe[1],d.ia=fe[2];const st=fe[3];st!=null&&(d.la=st,d.j.info("VER="+d.la));const ot=fe[4];ot!=null&&(d.Aa=ot,d.j.info("SVER="+d.Aa));const bi=fe[5];bi!=null&&typeof bi=="number"&&0<bi&&(m=1.5*bi,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const tn=a.g;if(tn){const Ba=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ba){var O=m.h;O.g||Ba.indexOf("spdy")==-1&&Ba.indexOf("quic")==-1&&Ba.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(kc(O,O.h),O.h=null))}if(m.D){const Oc=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Oc&&(m.ya=Oc,Ie(m.I,m.D,Oc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var $=a;if(m.qa=Pm(m,m.J?m.ia:null,m.W),$.K){rm(m.h,$);var we=$,Je=m.L;Je&&(we.I=Je),we.B&&(Cc(we),xa(we)),m.g=$}else Im(m);0<d.i.length&&ja(d)}else fe[0]!="stop"&&fe[0]!="close"||Gr(d,7);else d.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?Gr(d,7):Dc(d):fe[0]!="noop"&&d.l&&d.l.ta(fe),d.v=0)}}Us(4)}catch{}}var uI=class{constructor(a,h){this.g=a,this.map=h}};function em(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nm(a){return a.h?1:a.g?a.g.size:0}function Pc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function kc(a,h){a.g?a.g.add(h):a.h=h}function rm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}em.prototype.cancel=function(){if(this.i=im(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function im(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return N(a.i)}function cI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,m=0;m<d;m++)h.push(a[m]);return h}h=[],d=0;for(m in a)h[d++]=a[m];return h}function hI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const m in a)h[d++]=m;return h}}}function sm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=hI(a),m=cI(a),b=m.length,O=0;O<b;O++)h.call(void 0,m[O],d&&d[O],a)}var om=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dI(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),b=null;if(0<=m){var O=a[d].substring(0,m);b=a[d].substring(m+1)}else O=a[d];h(O,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Kr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Kr){this.h=a.h,ba(this,a.j),this.o=a.o,this.g=a.g,Oa(this,a.s),this.l=a.l;var h=a.i,d=new Hs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),am(this,d),this.m=a.m}else a&&(h=String(a).match(om))?(this.h=!1,ba(this,h[1]||"",!0),this.o=Bs(h[2]||""),this.g=Bs(h[3]||"",!0),Oa(this,h[4]),this.l=Bs(h[5]||"",!0),am(this,h[6]||"",!0),this.m=Bs(h[7]||"")):(this.h=!1,this.i=new Hs(null,this.h))}Kr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ws(h,lm,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ws(h,lm,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ws(d,d.charAt(0)=="/"?mI:pI,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ws(d,yI)),a.join("")};function Pn(a){return new Kr(a)}function ba(a,h,d){a.j=d?Bs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Oa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function am(a,h,d){h instanceof Hs?(a.i=h,vI(a.i,a.h)):(d||(h=Ws(h,gI)),a.i=new Hs(h,a.h))}function Ie(a,h,d){a.i.set(h,d)}function Ma(a){return Ie(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Bs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ws(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,fI),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lm=/[#\/\?@]/g,pI=/[#\?:]/g,mI=/[#\?]/g,gI=/[#\?@]/g,yI=/#/g;function Hs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&dI(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Hs.prototype,t.add=function(a,h){Xn(this),this.i=null,a=Di(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function um(a,h){Xn(a),h=Di(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function cm(a,h){return Xn(a),h=Di(a,h),a.g.has(h)}t.forEach=function(a,h){Xn(this),this.g.forEach(function(d,m){d.forEach(function(b){a.call(h,b,m,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const b=a[m];for(let O=0;O<b.length;O++)d.push(h[m])}return d},t.V=function(a){Xn(this);let h=[];if(typeof a=="string")cm(this,a)&&(h=h.concat(this.g.get(Di(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Xn(this),this.i=null,a=Di(this,a),cm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function hm(a,h,d){um(a,h),0<d.length&&(a.i=null,a.g.set(Di(a,h),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const O=encodeURIComponent(String(m)),$=this.V(m);for(m=0;m<$.length;m++){var b=O;$[m]!==""&&(b+="="+encodeURIComponent(String($[m]))),a.push(b)}}return this.i=a.join("&")};function Di(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function vI(a,h){h&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(d,m){var b=m.toLowerCase();m!=b&&(um(this,m),hm(this,b,d))},a)),a.j=h}function _I(a,h){const d=new zs;if(l.Image){const m=new Image;m.onload=w(Jn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=w(Jn,d,"TestLoadImage: error",!1,h,m),m.onabort=w(Jn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=w(Jn,d,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function wI(a,h){const d=new zs,m=new AbortController,b=setTimeout(()=>{m.abort(),Jn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(b),O.ok?Jn(d,"TestPingServer: ok",!0,h):Jn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Jn(d,"TestPingServer: error",!1,h)})}function Jn(a,h,d,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(d)}catch{}}function EI(){this.g=new rI}function TI(a,h,d){const m=d||"";try{sm(a,function(b,O){let $=b;c(b)&&($=_c(b)),h.push(m+O+"="+encodeURIComponent($))})}catch(b){throw h.push(m+"type="+encodeURIComponent("_badmap")),b}}function Va(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Va,wc),Va.prototype.g=function(){return new La(this.l,this.j)},Va.prototype.i=function(a){return function(){return a}}({});function La(a,h){Be.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(La,Be),t=La.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ks(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ks(this)),this.g&&(this.readyState=3,Ks(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function dm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?qs(this):Ks(this),this.readyState==3&&dm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,qs(this))},t.Qa=function(a){this.g&&(this.response=a,qs(this))},t.ga=function(){this.g&&qs(this)};function qs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ks(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ks(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(La.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fm(a){let h="";return z(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function Nc(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=fm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ie(a,h,d))}function be(a){Be.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(be,Be);var II=/^https?$/i,SI=["POST","PUT"];t=be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ic.g(),this.v=this.o?$p(this.o):$p(Ic),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){pm(this,O);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)d.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())d.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(SI,h,void 0))||m||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of d)this.g.setRequestHeader(O,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ym(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){pm(this,O)}};function pm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,mm(a),Fa(a)}function mm(a){a.A||(a.A=!0,Xe(a,"complete"),Xe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Xe(this,"complete"),Xe(this,"abort"),Fa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fa(this,!0)),be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?gm(this):this.bb())},t.bb=function(){gm(this)};function gm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||kn(a)!=4||a.Z()!=2)){if(a.u&&kn(a)==4)Ms(a.Ea,0,a);else if(Xe(a,"readystatechange"),kn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=$===0){var b=String(a.D).match(om)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),m=!II.test(b?b.toLowerCase():"")}d=m}if(d)Xe(a,"complete"),Xe(a,"success");else{a.m=6;try{var O=2<kn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",mm(a)}}finally{Fa(a)}}}}function Fa(a,h){if(a.g){ym(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Xe(a,"ready");try{d.onreadystatechange=m}catch{}}}function ym(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function kn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),nI(h)}};function vm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function AI(a){const h={};a=(a.g&&2<=kn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(y(a[m]))continue;var d=k(a[m]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=h[b]||[];h[b]=O,O.push(d)}T(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function _m(a){this.Aa=0,this.i=[],this.j=new zs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gs("baseRetryDelayMs",5e3,a),this.cb=Gs("retryDelaySeedMs",1e4,a),this.Wa=Gs("forwardChannelMaxRetries",2,a),this.wa=Gs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new em(a&&a.concurrentRequestLimit),this.Da=new EI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=_m.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,m){gt(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Pm(this,null,this.W),ja(this)};function Dc(a){if(wm(a),a.G==3){var h=a.U++,d=Pn(a.I);if(Ie(d,"SID",a.K),Ie(d,"RID",h),Ie(d,"TYPE","terminate"),Qs(a,d),h=new Yn(a,a.j,h),h.L=2,h.v=Ma(Pn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=km(h.j,null),h.g.ea(h.v)),h.F=Date.now(),xa(h)}Rm(a)}function Ua(a){a.g&&(bc(a),a.g.cancel(),a.g=null)}function wm(a){Ua(a),a.u&&(l.clearTimeout(a.u),a.u=null),za(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ja(a){if(!tm(a.h)&&!a.s){a.s=!0;var h=a.Ga;Zt||D(),W||(Zt(),W=!0),te.add(h,a),a.B=0}}function CI(a,h){return nm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=js(g(a.Ga,a,h),Cm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Yn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(b.H=O,O=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Tm(this,b,h),d=Pn(this.I),Ie(d,"RID",a),Ie(d,"CVER",22),this.D&&Ie(d,"X-HTTP-Session-Id",this.D),Qs(this,d),O&&(this.O?h="headers="+encodeURIComponent(String(fm(O)))+"&"+h:this.m&&Nc(d,this.m,O)),kc(this.h,b),this.Ua&&Ie(d,"TYPE","init"),this.P?(Ie(d,"$req",h),Ie(d,"SID","null"),b.T=!0,Ac(b,d,null)):Ac(b,d,h),this.G=2}}else this.G==3&&(a?Em(this,a):this.i.length==0||tm(this.h)||Em(this))};function Em(a,h){var d;h?d=h.l:d=a.U++;const m=Pn(a.I);Ie(m,"SID",a.K),Ie(m,"RID",d),Ie(m,"AID",a.T),Qs(a,m),a.m&&a.o&&Nc(m,a.m,a.o),d=new Yn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Tm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),kc(a.h,d),Ac(d,m,h)}function Qs(a,h){a.H&&z(a.H,function(d,m){Ie(h,m,d)}),a.l&&sm({},function(d,m){Ie(h,m,d)})}function Tm(a,h,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var b=a.i;let O=-1;for(;;){const $=["count="+d];O==-1?0<d?(O=b[0].g,$.push("ofs="+O)):O=0:$.push("ofs="+O);let we=!0;for(let Je=0;Je<d;Je++){let fe=b[Je].g;const st=b[Je].map;if(fe-=O,0>fe)O=Math.max(0,b[Je].g-100),we=!1;else try{TI(st,$,"req"+fe+"_")}catch{m&&m(st)}}if(we){m=$.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,m}function Im(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Zt||D(),W||(Zt(),W=!0),te.add(h,a),a.v=0}}function xc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=js(g(a.Fa,a),Cm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Sm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=js(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Ua(this),Sm(this))};function bc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Sm(a){a.g=new Yn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Pn(a.qa);Ie(h,"RID","rpc"),Ie(h,"SID",a.K),Ie(h,"AID",a.T),Ie(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ie(h,"TO",a.ja),Ie(h,"TYPE","xmlhttp"),Qs(a,h),a.m&&a.o&&Nc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ma(Pn(h)),d.m=null,d.P=!0,Xp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ua(this),xc(this),gt(19))};function za(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Am(a,h){var d=null;if(a.g==h){za(a),bc(a),a.g=null;var m=2}else if(Pc(a.h,h))d=h.D,rm(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;m=ka(),Xe(m,new Kp(m,d)),ja(a)}else Im(a);else if(b=h.s,b==3||b==0&&0<h.X||!(m==1&&CI(a,h)||m==2&&xc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),b){case 1:Gr(a,5);break;case 4:Gr(a,10);break;case 3:Gr(a,6);break;default:Gr(a,2)}}}function Cm(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Gr(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),m=a.Xa;const b=!m;m=new Kr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ba(m,"https"),Ma(m),b?_I(m.toString(),d):wI(m.toString(),d)}else gt(2);a.G=0,a.l&&a.l.sa(h),Rm(a),wm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Rm(a){if(a.G=0,a.ka=[],a.l){const h=im(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Pm(a,h,d){var m=d instanceof Kr?Pn(d):new Kr(d);if(m.g!="")h&&(m.g=h+"."+m.g),Oa(m,m.s);else{var b=l.location;m=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var O=new Kr(null);m&&ba(O,m),h&&(O.g=h),b&&Oa(O,b),d&&(O.l=d),m=O}return d=a.D,h=a.ya,d&&h&&Ie(m,d,h),Ie(m,"VER",a.la),Qs(a,m),m}function km(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new be(new Va({eb:d})):new be(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nm(){}t=Nm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $a(){}$a.prototype.g=function(a,h){return new xt(a,h)};function xt(a,h){Be.call(this),this.g=new _m(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!y(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new xi(this)}R(xt,Be),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Dc(this.g)},xt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=_c(a),a=d);h.i.push(new uI(h.Ya++,a)),h.G==3&&ja(h)},xt.prototype.N=function(){this.g.l=null,delete this.j,Dc(this.g),delete this.g,xt.aa.N.call(this)};function Dm(a){Ec.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Dm,Ec);function xm(){Tc.call(this),this.status=1}R(xm,Tc);function xi(a){this.g=a}R(xi,Nm),xi.prototype.ua=function(){Xe(this.g,"a")},xi.prototype.ta=function(a){Xe(this.g,new Dm(a))},xi.prototype.sa=function(a){Xe(this.g,new xm)},xi.prototype.ra=function(){Xe(this.g,"b")},$a.prototype.createWebChannel=$a.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Cw=function(){return new $a},Aw=function(){return ka()},Sw=Hr,Td={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Na.NO_ERROR=0,Na.TIMEOUT=8,Na.HTTP_ERROR=6,Pl=Na,Gp.COMPLETE="complete",Iw=Gp,Bp.EventType=Fs,Fs.OPEN="a",Fs.CLOSE="b",Fs.ERROR="c",Fs.MESSAGE="d",Be.prototype.listen=Be.prototype.K,po=Bp,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,Tw=be}).apply(typeof ll<"u"?ll:typeof self<"u"?self:typeof window<"u"?window:{});const ay="@firebase/firestore",ly="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new Yu("@firebase/firestore");function Vi(){return di.logLevel}function H(t,...e){if(di.logLevel<=le.DEBUG){const n=e.map(Bf);di.debug(`Firestore (${ks}): ${t}`,...n)}}function Wn(t,...e){if(di.logLevel<=le.ERROR){const n=e.map(Bf);di.error(`Firestore (${ks}): ${t}`,...n)}}function vs(t,...e){if(di.logLevel<=le.WARN){const n=e.map(Bf);di.warn(`Firestore (${ks}): ${t}`,...n)}}function Bf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+t;throw Wn(e),new Error(e)}function me(t,e){t||ee()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class ek{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tk{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Sr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Sr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new Rw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new ct(e)}}class nk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class rk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new nk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ik{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ht(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){me(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new uy(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new uy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=sk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function _s(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=-62135596800,hy=1e6;class Fe{static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*hy);return new Fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<cy)throw new G(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hy}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-cy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new Fe(0,0))}static max(){return new re(new Fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="__name__";class vn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=vn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=vn.isNumericId(e),i=vn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?vn.extractNumericId(e).compare(vn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ir.fromString(e.substring(4,e.length-2))}}class Ae extends vn{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const ok=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends vn{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return ok.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dy}static keyField(){return new tt([dy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ae.fromString(e))}static fromName(e){return new Y(Ae.fromString(e).popFirst(5))}static empty(){return new Y(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ae(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=-1;function ak(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Dr(i,Y.empty(),e)}function lk(t){return new Dr(t.readTime,t.key,Jo)}class Dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dr(re.min(),Y.empty(),Jo)}static max(){return new Dr(re.max(),Y.empty(),Jo)}}function uk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==ck)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function dk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ds(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Xu.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=-1;function Ju(t){return t==null}function hu(t){return t===0&&1/t==-1/0}function fk(t){return typeof t=="number"&&Number.isInteger(t)&&!hu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="";function pk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=fy(e)),e=mk(t.get(n),e);return fy(e)}function mk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case kw:n+="";break;default:n+=s}}return n}function fy(t){return t+kw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Nw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ul(this.root,e,this.comparator,!0)}}class ul{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??et.RED,this.left=i??et.EMPTY,this.right=s??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new my(this.data.getIterator())}getIteratorFrom(e){return new my(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class my{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new qe(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Dw("Invalid base64 string: "+s):s}}(e);return new it(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const gk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(t){if(me(!!t),typeof t=="string"){let e=0;const n=gk.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="server_timestamp",bw="__type__",Ow="__previous_value__",Mw="__local_write_time__";function Hf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[bw])===null||n===void 0?void 0:n.stringValue)===xw}function Zu(t){const e=t.mapValue.fields[Ow];return Hf(e)?Zu(e):e}function Zo(t){const e=xr(t.mapValue.fields[Mw].timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}const du="(default)";class ea{constructor(e,n){this.projectId=e,this.database=n||du}static empty(){return new ea("","")}get isDefaultDatabase(){return this.database===du}isEqual(e){return e instanceof ea&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="__type__",Lw="__max__",cl={mapValue:{fields:{__type__:{stringValue:Lw}}}},Fw="__vector__",fu="value";function Or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hf(t)?4:_k(t)?9007199254740991:vk(t)?10:11:ee()}function Rn(t,e){if(t===e)return!0;const n=Or(t);if(n!==Or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zo(t).isEqual(Zo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=xr(i.timestampValue),l=xr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return br(i.bytesValue).isEqual(br(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),l=Ve(s.doubleValue);return o===l?hu(o)===hu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(py(o)!==py(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Rn(o[u],l[u])))return!1;return!0}(t,e);default:return ee()}}function ta(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function ws(t,e){if(t===e)return 0;const n=Or(t),r=Or(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ve(s.integerValue||s.doubleValue),u=Ve(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return gy(t.timestampValue,e.timestampValue);case 4:return gy(Zo(t),Zo(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const l=br(s),u=br(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ce(l[c],u[c]);if(f!==0)return f}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ce(Ve(s.latitude),Ve(o.latitude));return l!==0?l:ce(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const p=s.fields||{},g=o.fields||{},w=(l=p[fu])===null||l===void 0?void 0:l.arrayValue,R=(u=g[fu])===null||u===void 0?void 0:u.arrayValue,N=ce(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:yy(w,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===cl.mapValue&&o===cl.mapValue)return 0;if(s===cl.mapValue)return 1;if(o===cl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=ce(u[p],f[p]);if(g!==0)return g;const w=ws(l[u[p]],c[f[p]]);if(w!==0)return w}return ce(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ee()}}function gy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=xr(t),r=xr(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function yy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ws(n[i],r[i]);if(s)return s}return ce(n.length,r.length)}function Es(t){return Id(t)}function Id(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Id(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Id(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function kl(t){switch(Or(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zu(t);return e?16+kl(e):16;case 5:return 2*t.stringValue.length;case 6:return br(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+kl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return jr(r.fields,(s,o)=>{i+=s.length+kl(o)}),i}(t.mapValue);default:throw ee()}}function vy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sd(t){return!!t&&"integerValue"in t}function qf(t){return!!t&&"arrayValue"in t}function _y(t){return!!t&&"nullValue"in t}function wy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nl(t){return!!t&&"mapValue"in t}function vk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Vw])===null||n===void 0?void 0:n.stringValue)===Fw}function Co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function _k(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Lw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Nl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Co(n)}setAll(e){let n=tt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Co(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Nl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){jr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(Co(this.value))}}function Uw(t){const e=[];return jr(t.fields,(n,r)=>{const i=new tt([n]);if(Nl(r)){const s=Uw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,re.min(),re.min(),re.min(),At.empty(),0)}static newFoundDocument(e,n,r,i){return new dt(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new dt(e,2,n,re.min(),re.min(),At.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,re.min(),re.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.position=e,this.inclusive=n}}function Ey(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=ws(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ty(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n="asc"){this.field=e,this.dir=n}}function wk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{}class ze extends jw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Tk(e,n,r):n==="array-contains"?new Ak(e,r):n==="in"?new Ck(e,r):n==="not-in"?new Rk(e,r):n==="array-contains-any"?new Pk(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ik(e,r):new Sk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ws(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends jw{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new dn(e,n)}matches(e){return zw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function zw(t){return t.op==="and"}function $w(t){return Ek(t)&&zw(t)}function Ek(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function Ad(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+Es(t.value);if($w(t))return t.filters.map(e=>Ad(e)).join(",");{const e=t.filters.map(n=>Ad(n)).join(",");return`${t.op}(${e})`}}function Bw(t,e){return t instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.field.isEqual(i.field)&&Rn(r.value,i.value)}(t,e):t instanceof dn?function(r,i){return i instanceof dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Bw(o,i.filters[l]),!0):!1}(t,e):void ee()}function Ww(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Es(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(Ww).join(" ,")+"}"}(t):"Filter"}class Tk extends ze{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ik extends ze{constructor(e,n){super(e,"in",n),this.keys=Hw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Sk extends ze{constructor(e,n){super(e,"not-in",n),this.keys=Hw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Hw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class Ak extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qf(n)&&ta(n.arrayValue,this.value)}}class Ck extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ta(this.value.arrayValue,n)}}class Rk extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ta(this.value.arrayValue,n)}}class Pk extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ta(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.le=null}}function Iy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new kk(t,e,n,r,i,s,o)}function Kf(t){const e=ie(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ad(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ju(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Es(r)).join(",")),e.le=n}return e.le}function Gf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ty(t.startAt,e.startAt)&&Ty(t.endAt,e.endAt)}function Cd(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Nk(t,e,n,r,i,s,o,l){return new pa(t,e,n,r,i,s,o,l)}function qw(t){return new pa(t)}function Sy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Kw(t){return t.collectionGroup!==null}function Ro(t){const e=ie(t);if(e.he===null){e.he=[];const n=new Set;for(const s of e.explicitOrderBy)e.he.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new qe(tt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.he.push(new mu(s,r))}),n.has(tt.keyField().canonicalString())||e.he.push(new mu(tt.keyField(),r))}return e.he}function Tn(t){const e=ie(t);return e.Pe||(e.Pe=Dk(e,Ro(t))),e.Pe}function Dk(t,e){if(t.limitType==="F")return Iy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new mu(i.field,s)});const n=t.endAt?new pu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pu(t.startAt.position,t.startAt.inclusive):null;return Iy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rd(t,e){const n=t.filters.concat([e]);return new pa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gu(t,e,n){return new pa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ec(t,e){return Gf(Tn(t),Tn(e))&&t.limitType===e.limitType}function Gw(t){return`${Kf(Tn(t))}|lt:${t.limitType}`}function Li(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Ww(i)).join(", ")}]`),Ju(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Es(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Es(i)).join(",")),`Target(${r})`}(Tn(t))}; limitType=${t.limitType})`}function tc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ro(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Ey(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ro(r),i)||r.endAt&&!function(o,l,u){const c=Ey(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ro(r),i))}(t,e)}function xk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qw(t){return(e,n)=>{let r=!1;for(const i of Ro(t)){const s=bk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bk(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ws(u,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){jr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Nw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=new xe(Y.comparator);function Hn(){return Ok}const Yw=new xe(Y.comparator);function mo(...t){let e=Yw;for(const n of t)e=e.insert(n.key,n);return e}function Xw(t){let e=Yw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ni(){return Po()}function Jw(){return Po()}function Po(){return new Si(t=>t.toString(),(t,e)=>t.isEqual(e))}const Mk=new xe(Y.comparator),Vk=new qe(Y.comparator);function ue(...t){let e=Vk;for(const n of t)e=e.add(n);return e}const Lk=new qe(ce);function Fk(){return Lk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hu(e)?"-0":e}}function Zw(t){return{integerValue:""+t}}function Uk(t,e){return fk(e)?Zw(e):Qf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this._=void 0}}function jk(t,e,n){return t instanceof yu?function(i,s){const o={fields:{[bw]:{stringValue:xw},[Mw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Hf(s)&&(s=Zu(s)),s&&(o.fields[Ow]=s),{mapValue:o}}(n,e):t instanceof na?tE(t,e):t instanceof ra?nE(t,e):function(i,s){const o=eE(i,s),l=Ay(o)+Ay(i.Ie);return Sd(o)&&Sd(i.Ie)?Zw(l):Qf(i.serializer,l)}(t,e)}function zk(t,e,n){return t instanceof na?tE(t,e):t instanceof ra?nE(t,e):n}function eE(t,e){return t instanceof vu?function(r){return Sd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class yu extends nc{}class na extends nc{constructor(e){super(),this.elements=e}}function tE(t,e){const n=rE(e);for(const r of t.elements)n.some(i=>Rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ra extends nc{constructor(e){super(),this.elements=e}}function nE(t,e){let n=rE(e);for(const r of t.elements)n=n.filter(i=>!Rn(i,r));return{arrayValue:{values:n}}}class vu extends nc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Ay(t){return Ve(t.integerValue||t.doubleValue)}function rE(t){return qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $k(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof na&&i instanceof na||r instanceof ra&&i instanceof ra?_s(r.elements,i.elements,Rn):r instanceof vu&&i instanceof vu?Rn(r.Ie,i.Ie):r instanceof yu&&i instanceof yu}(t.transform,e.transform)}class Bk{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rc{}function iE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yf(t.key,un.none()):new ma(t.key,t.data,un.none());{const n=t.data,r=At.empty();let i=new qe(tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zr(t.key,r,new Vt(i.toArray()),un.none())}}function Wk(t,e,n){t instanceof ma?function(i,s,o){const l=i.value.clone(),u=Ry(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(i,s,o){if(!Dl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Ry(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(sE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ko(t,e,n,r){return t instanceof ma?function(s,o,l,u){if(!Dl(s.precondition,o))return l;const c=s.value.clone(),f=Py(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(s,o,l,u){if(!Dl(s.precondition,o))return l;const c=Py(s.fieldTransforms,u,o),f=o.data;return f.setAll(sE(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Dl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Hk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=eE(r.transform,i||null);s!=null&&(n===null&&(n=At.empty()),n.set(r.field,s))}return n||null}function Cy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_s(r,i,(s,o)=>$k(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ma extends rc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zr extends rc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ry(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,zk(o,l,n[i]))}return r}function Py(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,jk(s,o,e))}return r}class Yf extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qk extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Wk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Jw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=iE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,r)=>Cy(n,r))&&_s(this.baseMutations,e.baseMutations,(n,r)=>Cy(n,r))}}class Xf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return Mk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Xf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,he;function Yk(t){switch(t){case L.OK:return ee();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return ee()}}function oE(t){if(t===void 0)return Wn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ue.OK:return L.OK;case Ue.CANCELLED:return L.CANCELLED;case Ue.UNKNOWN:return L.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return L.INTERNAL;case Ue.UNAVAILABLE:return L.UNAVAILABLE;case Ue.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ue.NOT_FOUND:return L.NOT_FOUND;case Ue.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ue.ABORTED:return L.ABORTED;case Ue.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ue.DATA_LOSS:return L.DATA_LOSS;default:return ee()}}(he=Ue||(Ue={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=new Ir([4294967295,4294967295],0);function ky(t){const e=Xk().encode(t),n=new Ew;return n.update(e),new Uint8Array(n.digest())}function Ny(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ir([n,r],0),new Ir([i,s],0)]}class Jf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new go(`Invalid padding: ${n}`);if(r<0)throw new go(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new go(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new go(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Ir.fromNumber(this.Ee)}Ae(e,n,r){let i=e.add(n.multiply(Ir.fromNumber(r)));return i.compare(Jk)===1&&(i=new Ir([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=ky(e),[r,i]=Ny(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Jf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ee===0)return;const n=ky(e),[r,i]=Ny(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ga.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ic(re.min(),i,new xe(ce),Hn(),ue())}}class ga{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ga(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n,r,i){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=i}}class aE{constructor(e,n){this.targetId=e,this.ge=n}}class lE{constructor(e,n,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Dy{constructor(){this.pe=0,this.ye=xy(),this.we=it.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=ue(),n=ue(),r=ue();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new ga(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=xy()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,me(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class Zk{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Hn(),this.$e=hl(),this.Ke=hl(),this.Ue=new xe(ce)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){const n=e.targetId,r=e.ge.count,i=this.Xe(n);if(i){const s=i.target;if(Cd(s))if(r===0){const o=new Y(s.path);this.ze(n,o,dt.newNoDocument(o,re.min()))}else me(r===1);else{const o=this.et(n);if(o!==r){const l=this.tt(e),u=l?this.nt(l,e,o):1;if(u!==0){this.Ye(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,c)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=br(r).toUint8Array()}catch(u){if(u instanceof Dw)return vs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Jf(o,i,s)}catch(u){return vs(u instanceof go?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ee===0?null:l}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.it(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.ze(n,s,null),i++)}),i}ot(e){const n=new Map;this.qe.forEach((s,o)=>{const l=this.Xe(o);if(l){if(s.current&&Cd(l.target)){const u=new Y(l.target.path);this._t(u).has(o)||this.ut(o,u)||this.ze(o,u,dt.newNoDocument(u,e))}s.ve&&(n.set(o,s.Fe()),s.Me())}});let r=ue();this.Ke.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Xe(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new ic(e,n,this.Ue,this.Qe,r);return this.Qe=Hn(),this.$e=hl(),this.Ke=hl(),this.Ue=new xe(ce),i}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,n)?i.xe(n,1):i.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new Dy,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new qe(ce),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new qe(ce),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Dy),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function hl(){return new xe(Y.comparator)}function xy(){return new xe(Y.comparator)}const eN={asc:"ASCENDING",desc:"DESCENDING"},tN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nN={and:"AND",or:"OR"};class rN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pd(t,e){return t.useProto3Json||Ju(e)?e:{value:e}}function _u(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iN(t,e){return _u(t,e.toTimestamp())}function In(t){return me(!!t),re.fromTimestamp(function(n){const r=xr(n);return new Fe(r.seconds,r.nanos)}(t))}function Zf(t,e){return kd(t,e).canonicalString()}function kd(t,e){const n=function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function cE(t){const e=Ae.fromString(t);return me(mE(e)),e}function Nd(t,e){return Zf(t.databaseId,e.path)}function mh(t,e){const n=cE(e);if(n.get(1)!==t.databaseId.projectId)throw new G(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(dE(n))}function hE(t,e){return Zf(t.databaseId,e)}function sN(t){const e=cE(t);return e.length===4?Ae.emptyPath():dE(e)}function Dd(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dE(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function by(t,e,n){return{name:Nd(t,e),fields:n.value.mapValue.fields}}function oN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(me(f===void 0||typeof f=="string"),it.fromBase64String(f||"")):(me(f===void 0||f instanceof Buffer||f instanceof Uint8Array),it.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?L.UNKNOWN:oE(c.code);return new G(f,c.message||"")}(o);n=new lE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=mh(t,r.document.name),s=In(r.document.updateTime),o=r.document.createTime?In(r.document.createTime):re.min(),l=new At({mapValue:{fields:r.document.fields}}),u=dt.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new xl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=mh(t,r.document),s=r.readTime?In(r.readTime):re.min(),o=dt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new xl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=mh(t,r.document),s=r.removedTargetIds||[];n=new xl([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Qk(i,s),l=r.targetId;n=new aE(l,o)}}return n}function aN(t,e){let n;if(e instanceof ma)n={update:by(t,e.key,e.value)};else if(e instanceof Yf)n={delete:Nd(t,e.key)};else if(e instanceof zr)n={update:by(t,e.key,e.data),updateMask:gN(e.fieldMask)};else{if(!(e instanceof qk))return ee();n={verify:Nd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof yu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof na)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof vu)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:iN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function lN(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?In(i.updateTime):In(s);return o.isEqual(re.min())&&(o=In(s)),new Bk(o,i.transformResults||[])}(n,e))):[]}function uN(t,e){return{documents:[hE(t,e.path)]}}function cN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=hE(t,i);const s=function(c){if(c.length!==0)return pE(dn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Fi(g.field),direction:fN(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Pd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ht:n,parent:i}}function hN(t){let e=sN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=fE(p);return g instanceof dn&&$w(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(R){return new mu(Ui(R.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Ju(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,w=p.values||[];return new pu(w,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,w=p.values||[];return new pu(w,g)}(n.endAt)),Nk(e,i,o,s,l,"F",u,c)}function dN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ui(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ui(n.unaryFilter.field);return ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ui(n.unaryFilter.field);return ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ui(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Ui(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>fE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function fN(t){return eN[t]}function pN(t){return tN[t]}function mN(t){return nN[t]}function Fi(t){return{fieldPath:t.canonicalString()}}function Ui(t){return tt.fromServerFormat(t.fieldPath)}function pE(t){return t instanceof ze?function(n){if(n.op==="=="){if(wy(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NAN"}};if(_y(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wy(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NAN"}};if(_y(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fi(n.field),op:pN(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(i=>pE(i));return r.length===1?r[0]:{compositeFilter:{op:mN(n.op),filters:r}}}(t):ee()}function gN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r,i,s=re.min(),o=re.min(),l=it.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.Tt=e}}function vN(t){const e=hN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(){this.Tn=new wN}addToCollectionParentIndex(e,n){return this.Tn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Dr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Dr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class wN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gE=41943040;class It{static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(gE,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Ts(0)}static Un(){return new Ts(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="LruGarbageCollector",EN=1048576;function Vy([t,e],[n,r]){const i=ce(t,n);return i===0?ce(e,r):i}class TN{constructor(e){this.Hn=e,this.buffer=new qe(Vy),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Vy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class IN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){H(My,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ds(n)?H(My,"Ignoring IndexedDB error during garbage collection: ",n):await Ns(n)}await this.er(3e5)})}}class SN{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Xu.ae);const r=new TN(n);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Oy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Oy):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Vi()<=le.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function AN(t,e){return new SN(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(){this.changes=new Si(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ko(r.mutation,i,Vt.empty(),Fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=ni();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=mo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ni();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Hn();const o=Po(),l=function(){return Po()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof zr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),ko(f.mutation,c,f.mutation.getFieldMask(),Fe.now())):o.set(c.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new RN(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Po();let i=new xe((o,l)=>o-l),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Vt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||ue()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=Jw();f.forEach(g=>{if(!s.has(g)){const w=iE(n.get(g),r.get(g));w!==null&&p.set(g,w),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Kw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(ni());let l=Jo,u=s;return o.next(c=>V.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ue())).next(f=>({batchId:l,changes:Xw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=mo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=mo();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const c=function(p,g){return new pa(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,dt.newInvalidDocument(f)))});let l=mo();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&ko(f.mutation,c,Vt.empty(),Fe.now()),tc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return V.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:In(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(i){return{name:i.name,query:vN(i.bundledQuery),readTime:In(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.overlays=new xe(Y.comparator),this.Rr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ni();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Et(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=ni(),s=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=ni(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=ni(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return V.resolve(l)}Et(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Gk(n,r));let s=this.Rr.get(n);s===void 0&&(s=ue(),this.Rr.set(n,s)),this.Rr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.Vr=new qe(Ge.mr),this.gr=new qe(Ge.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Ge(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new Y(new Ae([])),r=new Ge(n,e),i=new Ge(n,e+1),s=[];return this.gr.forEachInRange([r,i],o=>{this.wr(o),s.push(o.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new Y(new Ae([])),r=new Ge(n,e),i=new Ge(n,e+1);let s=ue();return this.gr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ge(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return Y.comparator(e.key,n.key)||ce(e.Cr,n.Cr)}static pr(e,n){return ce(e.Cr,n.Cr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new qe(Ge.mr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Kk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Mr=this.Mr.add(new Ge(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Nr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Wf:this.Fr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),i=new Ge(n,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],o=>{const l=this.Or(o.Cr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(ce);return n.forEach(i=>{const s=new Ge(i,0),o=new Ge(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,o],l=>{r=r.add(l.Cr)})}),V.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new Ge(new Y(s),0);let l=new qe(ce);return this.Mr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Cr)),!0)},o),V.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return V.forEach(n.mutations,i=>{const s=new Ge(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Ge(n,0),i=this.Mr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.kr=e,this.docs=function(){return new xe(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=Hn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():dt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Hn();const o=n.path,l=new Y(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||uk(lk(f),r)<=0||(i.has(f.key)||tc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}qr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ON(this)}getSize(e){return V.resolve(this.size)}}class ON extends CN{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e){this.persistence=e,this.Qr=new Si(n=>Kf(n),Gf),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.$r=0,this.Kr=new ep,this.targetCount=0,this.Ur=Ts.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),V.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.zn(n),V.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Xu(0),this.zr=!1,this.zr=!0,this.jr=new DN,this.referenceDelegate=e(this),this.Hr=new MN(this),this.indexManager=new _N,this.remoteDocumentCache=function(i){return new bN(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new yN(n),this.Yr=new kN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new xN(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new VN(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,n){return V.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class VN extends hk{constructor(e){super(),this.currentSequenceNumber=e}}class tp{constructor(e){this.persistence=e,this.ti=new ep,this.ni=null}static ri(e){return new tp(e)}get ii(){if(this.ni)return this.ni;throw ee()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),V.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ii,r=>{const i=Y.fromPath(r);return this.si(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return V.or([()=>V.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class wu{constructor(e,n){this.persistence=e,this.oi=new Si(r=>pk(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=AN(this,n)}static ri(e,n){return new wu(e,n)}Zr(){}Xr(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return V.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?V.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,n).next(l=>{l||(r++,s.removeEntry(o,re.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),V.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=kl(e.data.value)),n}ar(e,n,r){return V.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.oi.get(n);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=i}static Yi(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new np(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return bR()?8:dk(pt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.rs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ss(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new LN;return this._s(e,n,o).next(l=>{if(s.result=l,this.Xi)return this.us(e,n,o,l.size)})}).next(()=>s.result)}us(e,n,r,i){return r.documentReadCount<this.es?(Vi()<=le.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),V.resolve()):(Vi()<=le.DEBUG&&H("QueryEngine","Query:",Li(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(Vi()<=le.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tn(n))):V.resolve())}rs(e,n){if(Sy(n))return V.resolve(null);let r=Tn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gu(n,null,"F"),r=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.cs(n,l);return this.ls(n,c,o,u.readTime)?this.rs(e,gu(n,null,"F")):this.hs(e,c,n,u)}))})))}ss(e,n,r,i){return Sy(n)||i.isEqual(re.min())?V.resolve(null):this.ns.getDocuments(e,r).next(s=>{const o=this.cs(n,s);return this.ls(n,o,r,i)?V.resolve(null):(Vi()<=le.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Li(n)),this.hs(e,o,n,ak(i,Jo)).next(l=>l))})}cs(e,n){let r=new qe(Qw(e));return n.forEach((i,s)=>{tc(e,s)&&(r=r.add(s))}),r}ls(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,n,r){return Vi()<=le.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Li(n)),this.ns.getDocumentsMatchingQuery(e,n,Dr.min(),r)}hs(e,n,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="LocalStore",UN=3e8;class jN{constructor(e,n,r,i){this.persistence=e,this.Ps=n,this.serializer=i,this.Ts=new xe(ce),this.Is=new Si(s=>Kf(s),Gf),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PN(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function zN(t,e,n,r){return new jN(t,e,n,r)}async function vE(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ue();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Rs:c,removedBatchIds:o,addedBatchIds:l}))})})}function $N(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,g=p.keys();let w=V.resolve();return g.forEach(R=>{w=w.next(()=>f.getEntry(u,R)).next(N=>{const P=c.docVersions.get(R);me(P!==null),N.version.compareTo(P)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ue();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function _E(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function BN(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Hr.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(s,f.addedDocuments,p)));let w=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(it.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),i=i.insert(p,w),function(N,P,_){return N.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=UN?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(g,w,f)&&l.push(n.Hr.updateTargetData(s,w))});let u=Hn(),c=ue();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(WN(s,o,e.documentUpdates).next(f=>{u=f.Vs,c=f.fs})),!r.isEqual(re.min())){const f=n.Hr.getLastRemoteSnapshotVersion(s).next(p=>n.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ts=i,s))}function WN(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Hn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(re.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(rp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Vs:o,fs:i}})}function HN(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Wf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qN(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Hr.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Hr.allocateTargetId(r).next(o=>(i=new dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function xd(t,e,n){const r=ie(t),i=r.Ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ds(o))throw o;H(rp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function Ly(t,e,n){const r=ie(t);let i=re.min(),s=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=ie(u),g=p.Is.get(f);return g!==void 0?V.resolve(p.Ts.get(g)):p.Hr.getTargetData(c,f)}(r,o,Tn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:ue())).next(l=>(KN(r,xk(e),l),{documents:l,gs:s})))}function KN(t,e,n){let r=t.Es.get(e)||re.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Es.set(e,r)}class Fy{constructor(){this.activeTargetIds=Fk()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GN{constructor(){this.ho=new Fy,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Fy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="ConnectivityMonitor";class jy{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){H(Uy,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){H(Uy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl=null;function bd(){return dl===null?dl=function(){return 268435456+Math.round(2147483648*Math.random())}():dl++,"0x"+dl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="RestConnection",YN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class XN{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===du?`project_id=${r}`:`project_id=${r}&database_id=${i}`}bo(e,n,r,i,s){const o=bd(),l=this.So(e,n.toUriEncodedString());H(gh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,i,s),this.vo(e,l,u,r).then(c=>(H(gh,`Received RPC '${e}' ${o}: `,c),c),c=>{throw vs(gh,`RPC '${e}' ${o} failed with error: `,c,"url: ",l,"request:",r),c})}Co(e,n,r,i,s,o){return this.bo(e,n,r,i,s)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ks}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}So(e,n){const r=YN[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class ZN extends XN{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=bd();return new Promise((o,l)=>{const u=new Tw;u.setWithCredentials(!0),u.listenOnce(Iw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Pl.NO_ERROR:const f=u.getResponseJson();H(ut,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Pl.TIMEOUT:H(ut,`RPC '${e}' ${s} timed out`),l(new G(L.DEADLINE_EXCEEDED,"Request time out"));break;case Pl.HTTP_ERROR:const p=u.getStatus();if(H(ut,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const R=function(P){const _=P.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(_)>=0?_:L.UNKNOWN}(w.status);l(new G(R,w.message))}else l(new G(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(L.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{H(ut,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(ut,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Wo(e,n,r){const i=bd(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Cw(),l=Aw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(ut,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let g=!1,w=!1;const R=new JN({Fo:P=>{w?H(ut,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(g||(H(ut,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),H(ut,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},Mo:()=>p.close()}),N=(P,_,y)=>{P.listen(_,A=>{try{y(A)}catch(M){setTimeout(()=>{throw M},0)}})};return N(p,po.EventType.OPEN,()=>{w||(H(ut,`RPC '${e}' stream ${i} transport opened.`),R.Qo())}),N(p,po.EventType.CLOSE,()=>{w||(w=!0,H(ut,`RPC '${e}' stream ${i} transport closed`),R.Ko())}),N(p,po.EventType.ERROR,P=>{w||(w=!0,vs(ut,`RPC '${e}' stream ${i} transport errored:`,P),R.Ko(new G(L.UNAVAILABLE,"The operation could not be completed")))}),N(p,po.EventType.MESSAGE,P=>{var _;if(!w){const y=P.data[0];me(!!y);const A=y,M=(A==null?void 0:A.error)||((_=A[0])===null||_===void 0?void 0:_.error);if(M){H(ut,`RPC '${e}' stream ${i} received error:`,M);const j=M.status;let z=function(E){const I=Ue[E];if(I!==void 0)return oE(I)}(j),T=M.message;z===void 0&&(z=L.INTERNAL,T="Unknown error status: "+j+" with message "+M.message),w=!0,R.Ko(new G(z,T)),p.close()}else H(ut,`RPC '${e}' stream ${i} received:`,y),R.Uo(y)}}),N(l,Sw.STAT_EVENT,P=>{P.stat===Td.PROXY?H(ut,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Td.NOPROXY&&H(ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.$o()},0),R}}function yh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t){return new rN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="PersistentStream";class EE{constructor(e,n,r,i,s,o,l,u){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new wE(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===n&&this.V_(r,i)},r=>{e(()=>{const i=new G(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return H(zy,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(H(zy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eD extends EE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=oN(this.serializer,e),r=function(s){if(!("targetChange"in s))return re.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?In(o.readTime):re.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Dd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Cd(u)?{documents:uN(s,u)}:{query:cN(s,u).ht},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=uE(s,o.resumeToken);const c=Pd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(re.min())>0){l.readTime=_u(s,o.snapshotVersion.toTimestamp());const c=Pd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=dN(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Dd(this.serializer),n.removeTarget=e,this.I_(n)}}class tD extends EE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=lN(e.writeResults,e.commitTime),r=In(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Dd(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>aN(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{}class rD extends nD{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new G(L.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.bo(e,kd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(L.UNKNOWN,s.toString())})}Co(e,n,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,kd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(L.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class iD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Wn(n),this.N_=!1):H("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="RemoteStore";class sD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(o=>{r.enqueueAndForget(async()=>{Ai(this)&&(H(fi,"Restarting streams for network reachability change."),await async function(u){const c=ie(u);c.W_.add(4),await ya(c),c.j_.set("Unknown"),c.W_.delete(4),await oc(c)}(this))})}),this.j_=new iD(r,i)}}async function oc(t){if(Ai(t))for(const e of t.G_)await e(!0)}async function ya(t){for(const e of t.G_)await e(!1)}function TE(t,e){const n=ie(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),ap(n)?op(n):xs(n).c_()&&sp(n,e))}function ip(t,e){const n=ie(t),r=xs(n);n.U_.delete(e),r.c_()&&IE(n,e),n.U_.size===0&&(r.c_()?r.P_():Ai(n)&&n.j_.set("Unknown"))}function sp(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xs(t).y_(e)}function IE(t,e){t.H_.Ne(e),xs(t).w_(e)}function op(t){t.H_=new Zk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),xs(t).start(),t.j_.B_()}function ap(t){return Ai(t)&&!xs(t).u_()&&t.U_.size>0}function Ai(t){return ie(t).W_.size===0}function SE(t){t.H_=void 0}async function oD(t){t.j_.set("Online")}async function aD(t){t.U_.forEach((e,n)=>{sp(t,e)})}async function lD(t,e){SE(t),ap(t)?(t.j_.q_(e),op(t)):t.j_.set("Unknown")}async function uD(t,e,n){if(t.j_.set("Online"),e instanceof lE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.U_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.U_.delete(l),i.H_.removeTarget(l))}(t,e)}catch(r){H(fi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Eu(t,r)}else if(e instanceof xl?t.H_.We(e):e instanceof aE?t.H_.Ze(e):t.H_.je(e),!n.isEqual(re.min()))try{const r=await _E(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.H_.ot(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.U_.get(c);f&&s.U_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.U_.get(u);if(!f)return;s.U_.set(u,f.withResumeToken(it.EMPTY_BYTE_STRING,f.snapshotVersion)),IE(s,u);const p=new dr(f.target,u,c,f.sequenceNumber);sp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(fi,"Failed to raise snapshot:",r),await Eu(t,r)}}async function Eu(t,e,n){if(!Ds(e))throw e;t.W_.add(1),await ya(t),t.j_.set("Offline"),n||(n=()=>_E(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(fi,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await oc(t)})}function AE(t,e){return e().catch(n=>Eu(t,n,e))}async function ac(t){const e=ie(t),n=Mr(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:Wf;for(;cD(e);)try{const i=await HN(e.localStore,r);if(i===null){e.K_.length===0&&n.P_();break}r=i.batchId,hD(e,i)}catch(i){await Eu(e,i)}CE(e)&&RE(e)}function cD(t){return Ai(t)&&t.K_.length<10}function hD(t,e){t.K_.push(e);const n=Mr(t);n.c_()&&n.b_&&n.S_(e.mutations)}function CE(t){return Ai(t)&&!Mr(t).u_()&&t.K_.length>0}function RE(t){Mr(t).start()}async function dD(t){Mr(t).C_()}async function fD(t){const e=Mr(t);for(const n of t.K_)e.S_(n.mutations)}async function pD(t,e,n){const r=t.K_.shift(),i=Xf.from(r,e,n);await AE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ac(t)}async function mD(t,e){e&&Mr(t).b_&&await async function(r,i){if(function(o){return Yk(o)&&o!==L.ABORTED}(i.code)){const s=r.K_.shift();Mr(r).h_(),await AE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ac(r)}}(t,e),CE(t)&&RE(t)}async function $y(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),H(fi,"RemoteStore received new credentials");const r=Ai(n);n.W_.add(3),await ya(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await oc(n)}async function gD(t,e){const n=ie(t);e?(n.W_.delete(2),await oc(n)):e||(n.W_.add(2),await ya(n),n.j_.set("Unknown"))}function xs(t){return t.J_||(t.J_=function(n,r,i){const s=ie(n);return s.M_(),new eD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:oD.bind(null,t),No:aD.bind(null,t),Lo:lD.bind(null,t),p_:uD.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),ap(t)?op(t):t.j_.set("Unknown")):(await t.J_.stop(),SE(t))})),t.J_}function Mr(t){return t.Y_||(t.Y_=function(n,r,i){const s=ie(n);return s.M_(),new tD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:dD.bind(null,t),Lo:mD.bind(null,t),D_:fD.bind(null,t),v_:pD.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await ac(t)):(await t.Y_.stop(),t.K_.length>0&&(H(fi,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new lp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function up(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),Ds(t))return new G(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{static emptySet(e){return new os(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=mo(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.Z_=new xe(Y.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):ee():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Is{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Is(e,n,os.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class vD{constructor(){this.queries=Wy(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const i=ie(n),s=i.queries;i.queries=Wy(),s.forEach((o,l)=>{for(const u of l.ta)u.onError(r)})})(this,new G(L.ABORTED,"Firestore shutting down"))}}function Wy(){return new Si(t=>Gw(t),ec)}async function _D(t,e){const n=ie(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new yD,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=up(o,`Initialization of query '${Li(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ta.push(e),e.sa(n.onlineState),s.ea&&e.oa(s.ea)&&cp(n)}async function wD(t,e){const n=ie(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ta.indexOf(e);o>=0&&(s.ta.splice(o,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ED(t,e){const n=ie(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ta)l.oa(i)&&(r=!0);o.ea=i}}r&&cp(n)}function TD(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(e)}function cp(t){t.ia.forEach(e=>{e.next()})}var Od,Hy;(Hy=Od||(Od={}))._a="default",Hy.Cache="cache";class ID{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Od.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.key=e}}class kE{constructor(e){this.key=e}}class SD{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ue(),this.mutatedKeys=ue(),this.ya=Qw(e),this.wa=new os(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new By,i=n?n.wa:this.wa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),w=tc(this.query,p)?p:null,R=!!g&&this.mutatedKeys.has(g.key),N=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let P=!1;g&&w?g.data.isEqual(w.data)?R!==N&&(r.track({type:3,doc:w}),P=!0):this.va(g,w)||(r.track({type:2,doc:w}),P=!0,(u&&this.ya(w,u)>0||c&&this.ya(w,c)<0)&&(l=!0)):!g&&w?(r.track({type:0,doc:w}),P=!0):g&&!w&&(r.track({type:1,doc:g}),P=!0,(u||c)&&(l=!0)),P&&(w?(o=o.add(w),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{wa:o,Da:r,ls:l,mutatedKeys:s}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((f,p)=>function(w,R){const N=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return N(w)-N(R)}(f.type,p.type)||this.ya(f.doc,p.doc)),this.Ca(r),i=i!=null&&i;const l=n&&!i?this.Fa():[],u=this.pa.size===0&&this.current&&!i?1:0,c=u!==this.ga;return this.ga=u,o.length!==0||c?{snapshot:new Is(this.query,e.wa,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new By,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ue(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new kE(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new PE(r))}),n}Oa(e){this.fa=e.gs,this.pa=ue();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return Is.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const hp="SyncEngine";class AD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CD{constructor(e){this.key=e,this.Ba=!1}}class RD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Si(l=>Gw(l),ec),this.qa=new Map,this.Qa=new Set,this.$a=new xe(Y.comparator),this.Ka=new Map,this.Ua=new ep,this.Wa={},this.Ga=new Map,this.za=Ts.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function PD(t,e,n=!0){const r=ME(t);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await NE(r,e,n,!0),i}async function kD(t,e){const n=ME(t);await NE(n,e,!0,!1)}async function NE(t,e,n,r){const i=await qN(t.localStore,Tn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await ND(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&TE(t.remoteStore,i),l}async function ND(t,e,n,r,i){t.Ha=(p,g,w)=>async function(N,P,_,y){let A=P.view.Sa(_);A.ls&&(A=await Ly(N.localStore,P.query,!1).then(({documents:T})=>P.view.Sa(T,A)));const M=y&&y.targetChanges.get(P.targetId),j=y&&y.targetMismatches.get(P.targetId)!=null,z=P.view.applyChanges(A,N.isPrimaryClient,M,j);return Ky(N,P.targetId,z.Ma),z.snapshot}(t,p,g,w);const s=await Ly(t.localStore,e,!0),o=new SD(e,s.gs),l=o.Sa(s.documents),u=ga.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Ky(t,n,c.Ma);const f=new AD(e,n,o);return t.ka.set(e,f),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),c.snapshot}async function DD(t,e,n){const r=ie(t),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(o=>!ec(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await xd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ip(r.remoteStore,i.targetId),Md(r,i.targetId)}).catch(Ns)):(Md(r,i.targetId),await xd(r.localStore,i.targetId,!0))}async function xD(t,e){const n=ie(t),r=n.ka.get(e),i=n.qa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ip(n.remoteStore,r.targetId))}async function bD(t,e,n){const r=jD(t);try{const i=await function(o,l){const u=ie(o),c=Fe.now(),f=l.reduce((w,R)=>w.add(R.key),ue());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let R=Hn(),N=ue();return u.ds.getEntries(w,f).next(P=>{R=P,R.forEach((_,y)=>{y.isValidDocument()||(N=N.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,R)).next(P=>{p=P;const _=[];for(const y of l){const A=Hk(y,p.get(y.key).overlayedDocument);A!=null&&_.push(new zr(y.key,A,Uw(A.value.mapValue),un.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,_,l)}).next(P=>{g=P;const _=P.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(w,P.batchId,_)})}).then(()=>({batchId:g.batchId,changes:Xw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Wa[o.currentUser.toKey()];c||(c=new xe(ce)),c=c.insert(l,u),o.Wa[o.currentUser.toKey()]=c}(r,i.batchId,n),await va(r,i.changes),await ac(r.remoteStore)}catch(i){const s=up(i,"Failed to persist write");n.reject(s)}}async function DE(t,e){const n=ie(t);try{const r=await BN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ka.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?me(o.Ba):i.removedDocuments.size>0&&(me(o.Ba),o.Ba=!1))}),await va(n,r,e)}catch(r){await Ns(r)}}function qy(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ka.forEach((s,o)=>{const l=o.view.sa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ie(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const g of p.ta)g.sa(l)&&(c=!0)}),c&&cp(u)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OD(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ka.get(e),s=i&&i.key;if(s){let o=new xe(Y.comparator);o=o.insert(s,dt.newNoDocument(s,re.min()));const l=ue().add(s),u=new ic(re.min(),new Map,new xe(ce),o,l);await DE(r,u),r.$a=r.$a.remove(s),r.Ka.delete(e),dp(r)}else await xd(r.localStore,e,!1).then(()=>Md(r,e,n)).catch(Ns)}async function MD(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await $N(n.localStore,e);bE(n,r,null),xE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await va(n,i)}catch(i){await Ns(i)}}async function VD(t,e,n){const r=ie(t);try{const i=await function(o,l){const u=ie(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(me(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);bE(r,e,n),xE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await va(r,i)}catch(i){await Ns(i)}}function xE(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function bE(t,e,n){const r=ie(t);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function Md(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||OE(t,r)})}function OE(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(ip(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),dp(t))}function Ky(t,e,n){for(const r of n)r instanceof PE?(t.Ua.addReference(r.key,e),LD(t,r)):r instanceof kE?(H(hp,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||OE(t,r.key)):ee()}function LD(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(H(hp,"New document in limbo: "+n),t.Qa.add(r),dp(t))}function dp(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new Y(Ae.fromString(e)),r=t.za.next();t.Ka.set(r,new CD(n)),t.$a=t.$a.insert(n,r),TE(t.remoteStore,new dr(Tn(qw(n.path)),r,"TargetPurposeLimboResolution",Xu.ae))}}async function va(t,e,n){const r=ie(t),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach((l,u)=>{o.push(r.Ha(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=np.Yi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.La.p_(i),await async function(u,c){const f=ie(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(c,g=>V.forEach(g.Hi,w=>f.persistence.referenceDelegate.addReference(p,g.targetId,w)).next(()=>V.forEach(g.Ji,w=>f.persistence.referenceDelegate.removeReference(p,g.targetId,w)))))}catch(p){if(!Ds(p))throw p;H(rp,"Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const w=f.Ts.get(g),R=w.snapshotVersion,N=w.withLastLimboFreeSnapshotVersion(R);f.Ts=f.Ts.insert(g,N)}}}(r.localStore,s))}async function FD(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){H(hp,"User change. New user:",e.toKey());const r=await vE(n.localStore,e);n.currentUser=e,function(s,o){s.Ga.forEach(l=>{l.forEach(u=>{u.reject(new G(L.CANCELLED,o))})}),s.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await va(n,r.Rs)}}function UD(t,e){const n=ie(t),r=n.Ka.get(e);if(r&&r.Ba)return ue().add(r.key);{let i=ue();const s=n.qa.get(e);if(!s)return i;for(const o of s){const l=n.ka.get(o);i=i.unionWith(l.view.ba)}return i}}function ME(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=DE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OD.bind(null,e),e.La.p_=ED.bind(null,e.eventManager),e.La.Ja=TD.bind(null,e.eventManager),e}function jD(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VD.bind(null,e),e}class Tu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return zN(this.persistence,new FN,e.initialUser,this.serializer)}Xa(e){return new yE(tp.ri,this.serializer)}Za(e){return new GN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tu.provider={build:()=>new Tu};class zD extends Tu{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){me(this.persistence.referenceDelegate instanceof wu);const r=this.persistence.referenceDelegate.garbageCollector;return new IN(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new yE(r=>wu.ri(r,n),this.serializer)}}class Vd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FD.bind(null,this.syncEngine),await gD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vD}()}createDatastore(e){const n=sc(e.databaseInfo.databaseId),r=function(s){return new ZN(s)}(e.databaseInfo);return function(s,o,l,u){return new rD(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new sD(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>qy(this.syncEngine,n,0),function(){return jy.D()?new jy:new QN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new RD(i,s,o,l,u,c);return f&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ie(i);H(fi,"RemoteStore shutting down."),s.W_.add(5),await ya(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Vd.provider={build:()=>new Vd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="FirestoreClient";class BD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=Pw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(Vr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Vr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=up(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vh(t,e){t.asyncQueue.verifyOperationInProgress(),H(Vr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WD(t);H(Vr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$y(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>$y(e.remoteStore,i)),t._onlineComponents=e}async function WD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Vr,"Using user provided OfflineComponentProvider");try{await vh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;vs("Error using user provided cache. Falling back to memory cache: "+n),await vh(t,new Tu)}}else H(Vr,"Using default OfflineComponentProvider"),await vh(t,new zD(void 0));return t._offlineComponents}async function VE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Vr,"Using user provided OnlineComponentProvider"),await Gy(t,t._uninitializedComponentsProvider._online)):(H(Vr,"Using default OnlineComponentProvider"),await Gy(t,new Vd))),t._onlineComponents}function HD(t){return VE(t).then(e=>e.syncEngine)}async function qD(t){const e=await VE(t),n=e.eventManager;return n.onListen=PD.bind(null,e.syncEngine),n.onUnlisten=DD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=kD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=xD.bind(null,e.syncEngine),n}function KD(t,e,n={}){const r=new Sr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new $D({next:g=>{f.su(),o.enqueueAndForget(()=>wD(s,p)),g.fromCache&&u.source==="server"?c.reject(new G(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new ID(l,f,{includeMetadataChanges:!0,Ta:!0});return _D(s,p)}(await qD(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t,e,n){if(!n)throw new G(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function GD(t,e,n,r){if(e===!0&&r===!0)throw new G(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yy(t){if(!Y.isDocumentKey(t))throw new G(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xy(t){if(Y.isDocumentKey(t))throw new G(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function pi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lc(t);throw new G(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="firestore.googleapis.com",Jy=!0;class Zy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=UE,this.ssl=Jy}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Jy;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<EN)throw new G(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=LE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ZP;switch(r.type){case"firstParty":return new rk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Qy.get(n);r&&(H("ComponentProvider","Removing Datastore"),Qy.delete(n),r.terminate())}(this),Promise.resolve()}}function QD(t,e,n,r={}){var i;const s=(t=pi(t,uc))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;s.host!==UE&&s.host!==l&&vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},s),{host:l,ssl:!1,emulatorOptions:r});if(!Nr(u,o)&&(t._setSettings(u),r.mockUserToken)){let c,f;if(typeof r.mockUserToken=="string")c=r.mockUserToken,f=ct.MOCK_USER;else{c=RR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new G(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ct(p)}t._authCredentials=new ek(new Rw(c,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class Ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ft(this.firestore,e,this._key)}}class Ar extends Ci{constructor(e,n,r){super(e,n,qw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ft(this.firestore,null,new Y(e))}withConverter(e){return new Ar(this.firestore,e,this._path)}}function ia(t,e,...n){if(t=$e(t),FE("collection","path",e),t instanceof uc){const r=Ae.fromString(e,...n);return Xy(r),new Ar(t,null,r)}{if(!(t instanceof Ft||t instanceof Ar))throw new G(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return Xy(r),new Ar(t.firestore,null,r)}}function fp(t,e,...n){if(t=$e(t),arguments.length===1&&(e=Pw.newId()),FE("doc","path",e),t instanceof uc){const r=Ae.fromString(e,...n);return Yy(r),new Ft(t,null,new Y(r))}{if(!(t instanceof Ft||t instanceof Ar))throw new G(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return Yy(r),new Ft(t.firestore,t instanceof Ar?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="AsyncQueue";class tv{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new wE(this,"async_queue_retry"),this.bu=()=>{const r=yh();r&&H(ev,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=yh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=yh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Sr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ds(e))throw e;H(ev,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const i=lp.createAndSchedule(this,e,n,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&ee()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class _a extends uc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new tv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tv(e),this._firestoreClient=void 0,await e}}}function YD(t,e){const n=typeof t=="object"?t:$f(),r=typeof t=="string"?t:du,i=Ii(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=AR("firestore");s&&QD(i,...s)}return i}function jE(t){if(t._terminated)throw new G(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||XD(t),t._firestoreClient}function XD(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new yk(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,LE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new BD(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ss(it.fromBase64String(e))}catch(n){throw new G(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ss(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=/^__.*__$/;class ZD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ma(e,this.data,n,this.fieldTransforms)}}class zE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $E(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class yp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new yp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Iu(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if($E(this.Lu)&&JD.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class ex{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||sc(e)}ju(e,n,r,i=!1){return new yp({Lu:e,methodName:n,zu:r,path:tt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vp(t){const e=t._freezeSettings(),n=sc(t._databaseId);return new ex(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tx(t,e,n,r,i,s={}){const o=t.ju(s.merge||s.mergeFields?2:0,e,n,i);_p("Data must be an object, but it was:",o,r);const l=BE(r,o);let u,c;if(s.merge)u=new Vt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=Ld(e,p,n);if(!o.contains(g))throw new G(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);HE(f,g)||f.push(g)}u=new Vt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new ZD(new At(l),u,c)}class hc extends pp{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hc}}function nx(t,e,n,r){const i=t.ju(1,e,n);_p("Data must be an object, but it was:",i,r);const s=[],o=At.empty();jr(r,(u,c)=>{const f=wp(e,u,n);c=$e(c);const p=i.Ku(f);if(c instanceof hc)s.push(f);else{const g=wa(c,p);g!=null&&(s.push(f),o.set(f,g))}});const l=new Vt(s);return new zE(o,l,i.fieldTransforms)}function rx(t,e,n,r,i,s){const o=t.ju(1,e,n),l=[Ld(e,r,n)],u=[i];if(s.length%2!=0)throw new G(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Ld(e,s[g])),u.push(s[g+1]);const c=[],f=At.empty();for(let g=l.length-1;g>=0;--g)if(!HE(c,l[g])){const w=l[g];let R=u[g];R=$e(R);const N=o.Ku(w);if(R instanceof hc)c.push(w);else{const P=wa(R,N);P!=null&&(c.push(w),f.set(w,P))}}const p=new Vt(c);return new zE(f,p,o.fieldTransforms)}function ix(t,e,n,r=!1){return wa(n,t.ju(r?4:3,e))}function wa(t,e){if(WE(t=$e(t)))return _p("Unsupported field value:",e,t),BE(t,e);if(t instanceof pp)return function(r,i){if(!$E(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=wa(l,i.Uu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Uk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:_u(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_u(i.serializer,s)}}if(r instanceof mp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ss)return{bytesValue:uE(i.serializer,r._byteString)};if(r instanceof Ft){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Zf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof gp)return function(o,l){return{mapValue:{fields:{[Vw]:{stringValue:Fw},[fu]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Wu("VectorValues must only contain numeric values.");return Qf(l.serializer,c)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${lc(r)}`)}(t,e)}function BE(t,e){const n={};return Nw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jr(t,(r,i)=>{const s=wa(i,e.qu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function WE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof mp||t instanceof Ss||t instanceof Ft||t instanceof pp||t instanceof gp)}function _p(t,e,n){if(!WE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=lc(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function Ld(t,e,n){if((e=$e(e))instanceof cc)return e._internalPath;if(typeof e=="string")return wp(t,e);throw Iu("Field path arguments must be of type string or ",t,!1,void 0,n)}const sx=new RegExp("[~\\*/\\[\\]]");function wp(t,e,n){if(e.search(sx)>=0)throw Iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cc(...e.split("."))._internalPath}catch{throw Iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Iu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(L.INVALID_ARGUMENT,l+t+u)}function HE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ox(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ep("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ox extends qE{data(){return super.data()}}function Ep(t,e){return typeof e=="string"?wp(t,e):e instanceof cc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tp{}class KE extends Tp{}function Fd(t,e,...n){let r=[];e instanceof Tp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Ip).length,l=s.filter(u=>u instanceof dc).length;if(o>1||o>0&&l>0)throw new G(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class dc extends KE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new dc(e,n,r)}_apply(e){const n=this._parse(e);return GE(e._query,n),new Ci(e.firestore,e.converter,Rd(e._query,n))}_parse(e){const n=vp(e.firestore);return function(s,o,l,u,c,f,p){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new G(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){rv(p,f);const R=[];for(const N of p)R.push(nv(u,s,N));g={arrayValue:{values:R}}}else g=nv(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||rv(p,f),g=ix(l,o,p,f==="in"||f==="not-in");return ze.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fl(t,e,n){const r=e,i=Ep("where",t);return dc._create(i,r,n)}class Ip extends Tp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ip(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)GE(o,u),o=Rd(o,u)}(e._query,n),new Ci(e.firestore,e.converter,Rd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sp extends KE{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Sp(e,n,r)}_apply(e){return new Ci(e.firestore,e.converter,gu(e._query,this._limit,this._limitType))}}function lx(t){return Sp._create("limit",t,"F")}function nv(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new G(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kw(e)&&n.indexOf("/")!==-1)throw new G(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ae.fromString(n));if(!Y.isDocumentKey(r))throw new G(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vy(t,new Y(r))}if(n instanceof Ft)return vy(t,n._key);throw new G(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lc(n)}.`)}function rv(t,e){if(!Array.isArray(t)||t.length===0)throw new G(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function GE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ux{convertValue(e,n="none"){switch(Or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return jr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[fu].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ve(o.doubleValue));return new gp(s)}convertGeoPoint(e){return new mp(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zo(e));default:return null}}convertTimestamp(e){const n=xr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);me(mE(r));const i=new ea(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||Wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hx extends qE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ep("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bl extends hx{data(e={}){return super.data(e)}}class dx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new pl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bl(this._firestore,this._userDataWriter,r.key,r,new pl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new bl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new pl(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new bl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new pl(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:fx(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class px extends ux{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ss(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ft(this.firestore,null,n)}}function Ud(t){t=pi(t,Ci);const e=pi(t.firestore,_a),n=jE(e),r=new px(e);return ax(t._query),KD(n,t._query).then(i=>new dx(e,r,t,i))}function mx(t,e,n,...r){t=pi(t,Ft);const i=pi(t.firestore,_a),s=vp(i);let o;return o=typeof(e=$e(e))=="string"||e instanceof cc?rx(s,"updateDoc",t._key,e,n,r):nx(s,"updateDoc",t._key,e),Ap(i,[o.toMutation(t._key,un.exists(!0))])}function QE(t){return Ap(pi(t.firestore,_a),[new Yf(t._key,un.none())])}function YE(t,e){const n=pi(t.firestore,_a),r=fp(t),i=cx(t.converter,e);return Ap(n,[tx(vp(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,un.exists(!1))]).then(()=>r)}function Ap(t,e){return function(r,i){const s=new Sr;return r.asyncQueue.enqueueAndForget(async()=>bD(await HD(r),i,s)),s.promise}(jE(t),e)}(function(e,n=!0){(function(i){ks=i})(Ps),Cn(new hn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new _a(new tk(r.getProvider("auth-internal")),new ik(o,r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Gt(ay,ly,e),Gt(ay,ly,"esm2017")})();var gx="firebase",yx="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(gx,yx,"app");const XE="@firebase/installations",Cp="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=1e4,ZE=`w:${Cp}`,eT="FIS_v2",vx="https://firebaseinstallations.googleapis.com/v1",_x=60*60*1e3,wx="installations",Ex="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},mi=new Ti(wx,Ex,Tx);function tT(t){return t instanceof pn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT({projectId:t}){return`${vx}/projects/${t}/installations`}function rT(t){return{token:t.token,requestStatus:2,expiresIn:Sx(t.expiresIn),creationTime:Date.now()}}async function iT(t,e){const r=(await e.json()).error;return mi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function sT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ix(t,{refreshToken:e}){const n=sT(t);return n.append("Authorization",Ax(e)),n}async function oT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Sx(t){return Number(t.replace("s","000"))}function Ax(t){return`${eT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cx({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=nT(t),i=sT(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:eT,appId:t.appId,sdkVersion:ZE},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await oT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:rT(c.authToken)}}else throw await iT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=/^[cdef][\w-]{21}$/,jd="";function kx(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Nx(t);return Px.test(n)?n:jd}catch{return jd}}function Nx(t){return Rx(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=new Map;function uT(t,e){const n=fc(t);cT(n,e),Dx(n,e)}function cT(t,e){const n=lT.get(t);if(n)for(const r of n)r(e)}function Dx(t,e){const n=xx();n&&n.postMessage({key:t,fid:e}),bx()}let ri=null;function xx(){return!ri&&"BroadcastChannel"in self&&(ri=new BroadcastChannel("[Firebase] FID Change"),ri.onmessage=t=>{cT(t.data.key,t.data.fid)}),ri}function bx(){lT.size===0&&ri&&(ri.close(),ri=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox="firebase-installations-database",Mx=1,gi="firebase-installations-store";let _h=null;function Rp(){return _h||(_h=yw(Ox,Mx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gi)}}})),_h}async function Su(t,e){const n=fc(t),i=(await Rp()).transaction(gi,"readwrite"),s=i.objectStore(gi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&uT(t,e.fid),e}async function hT(t){const e=fc(t),r=(await Rp()).transaction(gi,"readwrite");await r.objectStore(gi).delete(e),await r.done}async function pc(t,e){const n=fc(t),i=(await Rp()).transaction(gi,"readwrite"),s=i.objectStore(gi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&uT(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pp(t){let e;const n=await pc(t.appConfig,r=>{const i=Vx(r),s=Lx(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===jd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Vx(t){const e=t||{fid:kx(),registrationStatus:0};return dT(e)}function Lx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(mi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Fx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ux(t)}:{installationEntry:e}}async function Fx(t,e){try{const n=await Cx(t,e);return Su(t.appConfig,n)}catch(n){throw tT(n)&&n.customData.serverCode===409?await hT(t.appConfig):await Su(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Ux(t){let e=await iv(t.appConfig);for(;e.registrationStatus===1;)await aT(100),e=await iv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Pp(t);return r||n}return e}function iv(t){return pc(t,e=>{if(!e)throw mi.create("installation-not-found");return dT(e)})}function dT(t){return jx(t)?{fid:t.fid,registrationStatus:0}:t}function jx(t){return t.registrationStatus===1&&t.registrationTime+JE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zx({appConfig:t,heartbeatServiceProvider:e},n){const r=$x(t,n),i=Ix(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:ZE,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await oT(()=>fetch(r,l));if(u.ok){const c=await u.json();return rT(c)}else throw await iT("Generate Auth Token",u)}function $x(t,{fid:e}){return`${nT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(t,e=!1){let n;const r=await pc(t.appConfig,s=>{if(!fT(s))throw mi.create("not-registered");const o=s.authToken;if(!e&&Hx(o))return s;if(o.requestStatus===1)return n=Bx(t,e),s;{if(!navigator.onLine)throw mi.create("app-offline");const l=Kx(s);return n=Wx(t,l),l}});return n?await n:r.authToken}async function Bx(t,e){let n=await sv(t.appConfig);for(;n.authToken.requestStatus===1;)await aT(100),n=await sv(t.appConfig);const r=n.authToken;return r.requestStatus===0?kp(t,e):r}function sv(t){return pc(t,e=>{if(!fT(e))throw mi.create("not-registered");const n=e.authToken;return Gx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Wx(t,e){try{const n=await zx(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Su(t.appConfig,r),n}catch(n){if(tT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Su(t.appConfig,r)}throw n}}function fT(t){return t!==void 0&&t.registrationStatus===2}function Hx(t){return t.requestStatus===2&&!qx(t)}function qx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+_x}function Kx(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Gx(t){return t.requestStatus===1&&t.requestTime+JE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qx(t){const e=t,{installationEntry:n,registrationPromise:r}=await Pp(e);return r?r.catch(console.error):kp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(t,e=!1){const n=t;return await Xx(n),(await kp(n,e)).token}async function Xx(t){const{registrationPromise:e}=await Pp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t){if(!t||!t.options)throw wh("App Configuration");if(!t.name)throw wh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wh(t){return mi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="installations",Zx="installations-internal",eb=t=>{const e=t.getProvider("app").getImmediate(),n=Jx(e),r=Ii(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tb=t=>{const e=t.getProvider("app").getImmediate(),n=Ii(e,pT).getImmediate();return{getId:()=>Qx(n),getToken:i=>Yx(n,i)}};function nb(){Cn(new hn(pT,eb,"PUBLIC")),Cn(new hn(Zx,tb,"PRIVATE"))}nb();Gt(XE,Cp);Gt(XE,Cp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="analytics",rb="firebase_id",ib="origin",sb=60*1e3,ob="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Np="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new Yu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ut=new Ti("analytics","Analytics",ab);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){if(!t.startsWith(Np)){const e=Ut.create("invalid-gtag-resource",{gtagURL:t});return Nt.warn(e.message),""}return t}function mT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ub(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function cb(t,e){const n=ub("firebase-js-sdk-policy",{createScriptURL:lb}),r=document.createElement("script"),i=`${Np}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function hb(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function db(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await mT(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){Nt.error(l)}t("config",i,s)}async function fb(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await mT(n);for(const u of o){const c=l.find(p=>p.measurementId===u),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Nt.error(s)}}function pb(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await fb(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await db(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Nt.error(l)}}return i}function mb(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=pb(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function gb(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Np)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=30,vb=1e3;class _b{constructor(e={},n=vb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gT=new _b;function wb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Eb(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:wb(r)},s=ob.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Ut.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function Tb(t,e=gT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ut.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ut.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Ab;return setTimeout(async()=>{l.abort()},sb),yT({appId:r,apiKey:i,measurementId:s},o,l,e)}async function yT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=gT){var s;const{appId:o,measurementId:l}=t;try{await Ib(r,e)}catch(u){if(l)return Nt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await Eb(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!Sb(c)){if(i.deleteThrottleMetadata(o),l)return Nt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Xg(n,i.intervalMillis,yb):Xg(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,p),Nt.debug(`Calling attemptFetch again in ${f} millis`),yT(t,p,r,i)}}function Ib(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Sb(t){if(!(t instanceof pn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ab{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Cb(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(){if(fw())try{await pw()}catch(t){return Nt.warn(Ut.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Nt.warn(Ut.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Pb(t,e,n,r,i,s,o){var l;const u=Tb(t);u.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&Nt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Nt.error(w)),e.push(u);const c=Rb().then(w=>{if(w)return r.getId()}),[f,p]=await Promise.all([u,c]);gb(s)||cb(s,f.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[ib]="firebase",g.update=!0,p!=null&&(g[rb]=p),i("config",f.measurementId,g),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.app=e}_delete(){return delete No[this.app.options.appId],Promise.resolve()}}let No={},ov=[];const av={};let Eh="dataLayer",Nb="gtag",lv,vT,uv=!1;function Db(){const t=[];if(dw()&&t.push("This is a browser extension environment."),OR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ut.create("invalid-analytics-context",{errorInfo:e});Nt.warn(n.message)}}function xb(t,e,n){Db();const r=t.options.appId;if(!r)throw Ut.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Nt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ut.create("no-api-key");if(No[r]!=null)throw Ut.create("already-exists",{id:r});if(!uv){hb(Eh);const{wrappedGtag:s,gtagCore:o}=mb(No,ov,av,Eh,Nb);vT=s,lv=o,uv=!0}return No[r]=Pb(t,ov,av,e,lv,Eh,n),new kb(t)}function bb(t=$f()){t=$e(t);const e=Ii(t,Au);return e.isInitialized()?e.getImmediate():Ob(t)}function Ob(t,e={}){const n=Ii(t,Au);if(n.isInitialized()){const i=n.getImmediate();if(Nr(e,n.getOptions()))return i;throw Ut.create("already-initialized")}return n.initialize({options:e})}function Mb(t,e,n,r){t=$e(t),Cb(vT,No[t.app.options.appId],e,n,r).catch(i=>Nt.error(i))}const cv="@firebase/analytics",hv="0.10.12";function Vb(){Cn(new hn(Au,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return xb(r,i,n)},"PUBLIC")),Cn(new hn("analytics-internal",t,"PRIVATE")),Gt(cv,hv),Gt(cv,hv,"esm2017");function t(e){try{const n=e.getProvider(Au).getImmediate();return{logEvent:(r,i,s)=>Mb(n,r,i,s)}}catch(n){throw Ut.create("interop-component-reg-failed",{reason:n})}}}Vb();function Dp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function _T(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lb=_T,wT=new Ti("auth","Firebase",_T());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=new Yu("@firebase/auth");function Fb(t,...e){Cu.logLevel<=le.WARN&&Cu.warn(`Auth (${Ps}): ${t}`,...e)}function Ol(t,...e){Cu.logLevel<=le.ERROR&&Cu.error(`Auth (${Ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw xp(t,...e)}function Sn(t,...e){return xp(t,...e)}function ET(t,e,n){const r=Object.assign(Object.assign({},Lb()),{[e]:n});return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function Fn(t){return ET(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wT.create(t,...e)}function J(t,e,...n){if(!t)throw xp(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ol(e),new Error(e)}function qn(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ub(){return dv()==="http:"||dv()==="https:"}function dv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ub()||dw()||"connection"in navigator)?navigator.onLine:!0}function zb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=PR()||DR()}get(){return jb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=new Ea(3e4,6e4);function $r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Br(t,e,n,r,i={}){return IT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=fa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return NR()||(c.referrerPolicy="no-referrer"),TT.fetch()(ST(t,t.config.apiHost,n,l),c)})}async function IT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$b),e);try{const i=new Hb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ml(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ml(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ml(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ml(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ET(t,f,c);fn(t,f)}}catch(i){if(i instanceof pn)throw i;fn(t,"network-request-failed",{message:String(i)})}}async function Ta(t,e,n,r,i={}){const s=await Br(t,e,n,r,i);return"mfaPendingCredential"in s&&fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ST(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bp(t.config,i):`${t.config.apiScheme}://${i}`}function Wb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),Bb.get())})}}function ml(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Sn(t,e,r);return i.customData._tokenResponse=n,i}function fv(t){return t!==void 0&&t.enterprise!==void 0}class qb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Wb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Kb(t,e){return Br(t,"GET","/v2/recaptchaConfig",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(t,e){return Br(t,"POST","/v1/accounts:delete",e)}async function AT(t,e){return Br(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qb(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=Op(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Do(Th(i.auth_time)),issuedAtTime:Do(Th(i.iat)),expirationTime:Do(Th(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Th(t){return Number(t)*1e3}function Op(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ol("JWT malformed, contained fewer than 3 sections"),null;try{const i=lw(n);return i?JSON.parse(i):(Ol("Failed to decode base64 JWT payload"),null)}catch(i){return Ol("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pv(t){const e=Op(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&Yb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Yb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Do(this.lastLoginAt),this.creationTime=Do(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(t){var e;const n=t.auth,r=await t.getIdToken(),i=await sa(t,AT(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?CT(s.providerUserInfo):[],l=Zb(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new $d(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Jb(t){const e=$e(t);await Ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function CT(t){return t.map(e=>{var{providerId:n}=e,r=Dp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e2(t,e){const n=await IT(t,{},async()=>{const r=fa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ST(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",TT.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function t2(t,e){return Br(t,"POST","/v2/accounts:revokeToken",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=pv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await e2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new as;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new as,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Dp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $d(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await sa(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qb(this,e)}reload(){return Jb(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ru(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(Fn(this.auth));const e=await this.getIdToken();return await sa(this,Gb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:M,isAnonymous:j,providerData:z,stsTokenManager:T}=n;J(A&&T,e,"internal-error");const v=as.fromJSON(this.name,T);J(typeof A=="string",e,"internal-error"),tr(p,e.name),tr(g,e.name),J(typeof M=="boolean",e,"internal-error"),J(typeof j=="boolean",e,"internal-error"),tr(w,e.name),tr(R,e.name),tr(N,e.name),tr(P,e.name),tr(_,e.name),tr(y,e.name);const E=new Mn({uid:A,auth:e,email:g,emailVerified:M,displayName:p,isAnonymous:j,photoURL:R,phoneNumber:w,tenantId:N,stsTokenManager:v,createdAt:_,lastLoginAt:y});return z&&Array.isArray(z)&&(E.providerData=z.map(I=>Object.assign({},I))),P&&(E._redirectEventId=P),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new as;i.updateFromServerResponse(n);const s=new Mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ru(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?CT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new as;l.updateFromIdToken(r);const u=new Mn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $d(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=new Map;function Vn(t){qn(t instanceof Function,"Expected a class definition");let e=mv.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}RT.type="NONE";const gv=RT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t,e,n){return`firebase:${t}:${e}:${n}`}class ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ml(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ml("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ls(Vn(gv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Vn(gv);const o=Ml(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const p=Mn._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ls(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ls(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(DT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(PT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bT(e))return"Blackberry";if(OT(e))return"Webos";if(kT(e))return"Safari";if((e.includes("chrome/")||NT(e))&&!e.includes("edge/"))return"Chrome";if(xT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function PT(t=pt()){return/firefox\//i.test(t)}function kT(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function NT(t=pt()){return/crios\//i.test(t)}function DT(t=pt()){return/iemobile/i.test(t)}function xT(t=pt()){return/android/i.test(t)}function bT(t=pt()){return/blackberry/i.test(t)}function OT(t=pt()){return/webos/i.test(t)}function Mp(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function n2(t=pt()){var e;return Mp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function r2(){return xR()&&document.documentMode===10}function MT(t=pt()){return Mp(t)||xT(t)||OT(t)||bT(t)||/windows phone/i.test(t)||DT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t,e=[]){let n;switch(t){case"Browser":n=yv(pt());break;case"Worker":n=`${yv(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s2(t,e={}){return Br(t,"GET","/v2/passwordPolicy",$r(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=6;class a2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:o2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vv(this),this.idTokenSubscription=new vv(this),this.beforeStateQueue=new i2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ls.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await AT(this,{idToken:e}),r=await Mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ru(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(Fn(this));const n=e?$e(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await s2(this),n=new a2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await t2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await ls.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Fb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ri(t){return $e(t)}class vv{constructor(e){this.auth=e,this.observer=null,this.addObserver=UR(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function u2(t){mc=t}function LT(t){return mc.loadJS(t)}function c2(){return mc.recaptchaEnterpriseScript}function h2(){return mc.gapiScript}function d2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class f2{constructor(){this.enterprise=new p2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class p2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const m2="recaptcha-enterprise",FT="NO_RECAPTCHA";class g2{constructor(e){this.type=m2,this.auth=Ri(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Kb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new qb(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;fv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(FT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new f2().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&fv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=c2();u.length!==0&&(u+=l),LT(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function _v(t,e,n,r=!1,i=!1){const s=new g2(t);let o;if(i)o=FT;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Bd(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await _v(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await _v(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(t,e){const n=Ii(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Nr(s,e??{}))return i;fn(i,"already-initialized")}return n.initialize({options:e})}function v2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _2(t,e,n){const r=Ri(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=UT(e),{host:o,port:l}=w2(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(Nr(c,r.config.emulator)&&Nr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,E2()}function UT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function w2(t){const e=UT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:wv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:wv(o)}}}function wv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function E2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function T2(t,e){return Br(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I2(t,e){return Ta(t,"POST","/v1/accounts:signInWithPassword",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S2(t,e){return Ta(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}async function A2(t,e){return Ta(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends Vp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new oa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bd(e,n,"signInWithPassword",I2);case"emailLink":return S2(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bd(e,r,"signUpPassword",T2);case"emailLink":return A2(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t,e){return Ta(t,"POST","/v1/accounts:signInWithIdp",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2="http://localhost";class yi extends Vp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Dp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:C2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function P2(t){const e=ho(fo(t)).link,n=e?ho(fo(e)).deep_link_id:null,r=ho(fo(t)).deep_link_id;return(r?ho(fo(r)).link:null)||r||n||e||t}class Lp{constructor(e){var n,r,i,s,o,l;const u=ho(fo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=R2((i=u.mode)!==null&&i!==void 0?i:null);J(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=P2(e);try{return new Lp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.providerId=bs.PROVIDER_ID}static credential(e,n){return oa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Lp.parseLink(n);return J(r,"argument-error"),oa._fromEmailAndCode(e,r.code,r.tenantId)}}bs.PROVIDER_ID="password";bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends jT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Ia{constructor(){super("facebook.com")}static credential(e){return yi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com";ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Ia{constructor(){super("github.com")}static credential(e){return yi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Ia{constructor(){super("twitter.com")}static credential(e,n){return yi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(t,e){return Ta(t,"POST","/v1/accounts:signUp",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mn._fromIdTokenResponse(e,r,i),o=Ev(r);return new vi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ev(r);return new vi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ev(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu extends pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Pu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Pu(e,n,r,i)}}function zT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pu._fromErrorAndOperation(t,s,e,r):s})}async function N2(t,e,n=!1){const r=await sa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D2(t,e,n=!1){const{auth:r}=t;if(Ht(r.app))return Promise.reject(Fn(r));const i="reauthenticate";try{const s=await sa(t,zT(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=Op(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),vi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $T(t,e,n=!1){if(Ht(t.app))return Promise.reject(Fn(t));const r="signIn",i=await zT(t,r,e),s=await vi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function x2(t,e){return $T(Ri(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BT(t){const e=Ri(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function b2(t,e,n){if(Ht(t.app))return Promise.reject(Fn(t));const r=Ri(t),o=await Bd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",k2).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&BT(t),u}),l=await vi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function O2(t,e,n){return Ht(t.app)?Promise.reject(Fn(t)):x2($e(t),bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&BT(t),r})}function M2(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function V2(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function L2(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function F2(t){return $e(t).signOut()}const ku="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ku,"1"),this.storage.removeItem(ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=1e3,j2=10;class HT extends WT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=MT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);r2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,j2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},U2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}HT.type="LOCAL";const z2=HT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT extends WT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qT.type="SESSION";const KT=qT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new gc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await $2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Fp("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function W2(t){An().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function H2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function q2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function K2(){return GT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="firebaseLocalStorageDb",G2=1,Nu="firebaseLocalStorage",YT="fbase_key";class Sa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yc(t,e){return t.transaction([Nu],e?"readwrite":"readonly").objectStore(Nu)}function Q2(){const t=indexedDB.deleteDatabase(QT);return new Sa(t).toPromise()}function Wd(){const t=indexedDB.open(QT,G2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nu,{keyPath:YT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nu)?e(r):(r.close(),await Q2(),e(await Wd()))})})}async function Tv(t,e,n){const r=yc(t,!0).put({[YT]:e,value:n});return new Sa(r).toPromise()}async function Y2(t,e){const n=yc(t,!1).get(e),r=await new Sa(n).toPromise();return r===void 0?null:r.value}function Iv(t,e){const n=yc(t,!0).delete(e);return new Sa(n).toPromise()}const X2=800,J2=3;class XT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>J2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gc._getInstance(K2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await H2(),!this.activeServiceWorker)return;this.sender=new B2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||q2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wd();return await Tv(e,ku,"1"),await Iv(e,ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Y2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Iv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=yc(i,!1).getAll();return new Sa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XT.type="LOCAL";const Z2=XT;new Ea(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(t,e){return e?Vn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up extends Vp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tO(t){return $T(t.auth,new Up(t),t.bypassAuthState)}function nO(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),D2(n,new Up(t),t.bypassAuthState)}async function rO(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),N2(n,new Up(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tO;case"linkViaPopup":case"linkViaRedirect":return rO;case"reauthViaPopup":case"reauthViaRedirect":return nO;default:fn(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=new Ea(2e3,1e4);class Ji extends JT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ji.currentPopupAction&&Ji.currentPopupAction.cancel(),Ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=Fp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iO.get())};e()}}Ji.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO="pendingRedirect",Vl=new Map;class oO extends JT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vl.get(this.auth._key());if(!e){try{const r=await aO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vl.set(this.auth._key(),e)}return this.bypassAuthState||Vl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aO(t,e){const n=cO(e),r=uO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function lO(t,e){Vl.set(t._key(),e)}function uO(t){return Vn(t._redirectPersistence)}function cO(t){return Ml(sO,t.config.apiKey,t.name)}async function hO(t,e,n=!1){if(Ht(t.app))return Promise.reject(Fn(t));const r=Ri(t),i=eO(r,e),o=await new oO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=10*60*1e3;class fO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ZT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sv(e))}saveEventToCache(e){this.cachedEventUids.add(Sv(e)),this.lastProcessedEventTime=Date.now()}}function Sv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ZT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mO(t,e={}){return Br(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yO=/^https?/;async function vO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mO(t);for(const n of e)try{if(_O(n))return}catch{}fn(t,"unauthorized-domain")}function _O(t){const e=zd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yO.test(n))return!1;if(gO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO=new Ea(3e4,6e4);function Av(){const t=An().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EO(t){return new Promise((e,n)=>{var r,i,s;function o(){Av(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Av(),n(Sn(t,"network-request-failed"))},timeout:wO.get()})}if(!((i=(r=An().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=An().gapi)===null||s===void 0)&&s.load)o();else{const l=d2("iframefcb");return An()[l]=()=>{gapi.load?o():n(Sn(t,"network-request-failed"))},LT(`${h2()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ll=null,e})}let Ll=null;function TO(t){return Ll=Ll||EO(t),Ll}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=new Ea(5e3,15e3),SO="__/auth/iframe",AO="emulator/auth/iframe",CO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PO(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bp(e,AO):`https://${t.config.authDomain}/${SO}`,r={apiKey:e.apiKey,appName:t.name,v:Ps},i=RO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${fa(r).slice(1)}`}async function kO(t){const e=await TO(t),n=An().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:PO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),l=An().setTimeout(()=>{s(o)},IO.get());function u(){An().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DO=500,xO=600,bO="_blank",OO="http://localhost";class Cv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MO(t,e,n,r=DO,i=xO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},NO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=pt().toLowerCase();n&&(l=NT(c)?bO:n),PT(c)&&(e=e||OO,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[w,R])=>`${g}${w}=${R},`,"");if(n2(c)&&l!=="_self")return VO(e||"",l),new Cv(null);const p=window.open(e||"",l,f);J(p,t,"popup-blocked");try{p.focus()}catch{}return new Cv(p)}function VO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO="__/auth/handler",FO="emulator/auth/handler",UO=encodeURIComponent("fac");async function Rv(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ps,eventId:i};if(e instanceof jT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",FR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ia){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${UO}=${encodeURIComponent(u)}`:"";return`${jO(t)}?${fa(l).slice(1)}${c}`}function jO({config:t}){return t.emulator?bp(t,FO):`https://${t.authDomain}/${LO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="webStorageSupport";class zO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KT,this._completeRedirectFn=hO,this._overrideRedirectResult=lO}async _openPopup(e,n,r,i){var s;qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Rv(e,n,r,zd(),i);return MO(e,o,Fp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Rv(e,n,r,zd(),i);return W2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kO(e),r=new fO(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ih,{type:Ih},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ih];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return MT()||kT()||Mp()}}const $O=zO;var Pv="@firebase/auth",kv="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HO(t){Cn(new hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VT(t)},c=new l2(r,i,s,u);return v2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cn(new hn("auth-internal",e=>{const n=Ri(e.getProvider("auth").getImmediate());return(r=>new BO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Pv,kv,WO(t)),Gt(Pv,kv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=5*60,KO=hw("authIdTokenMaxAge")||qO;let Nv=null;const GO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KO)return;const i=n==null?void 0:n.token;Nv!==i&&(Nv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function QO(t=$f()){const e=Ii(t,"auth");if(e.isInitialized())return e.getImmediate();const n=y2(t,{popupRedirectResolver:$O,persistence:[Z2,z2,KT]}),r=hw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=GO(s.toString());V2(n,o,()=>o(n.currentUser)),M2(n,l=>o(l))}}const i=uw("auth");return i&&_2(n,`http://${i}`),n}function YO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}u2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",YO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HO("Browser");const XO={apiKey:"AIzaSyCWw4DcU0CKPGItJycrP3DWovodDWt3jm8",authDomain:"less-is-more-25873.firebaseapp.com",projectId:"less-is-more-25873",storageBucket:"less-is-more-25873.appspot.com",messagingSenderId:"933997070836",appId:"1:933997070836:web:7d0f20ecdad430b44951a1",measurementId:"G-H25QFY6PX2"},jp=vw(XO);bb(jp);const _i=YD(jp),Aa=QO(jp),Cr="todos",eI=()=>{const t=Aa.currentUser;return t?(console.log(`Authenticated as user: ${t.email} (${t.uid})`),t.uid):(console.log("No authenticated user found"),null)},Dv=async t=>{try{const e=eI();if(!e)throw console.error("Error adding todo: User not logged in"),new Error("User not logged in");const n={...t,userId:e,createdAt:Fe.now()};console.log("Adding todo to Firestore:",n);const r=await YE(ia(_i,Cr),n);return console.log("Todo added with ID:",r.id),r.id}catch(e){throw console.error("Error adding todo:",e),e}},JO=async(t,e)=>{try{const n=eI();if(!n)return console.log("User not authenticated, returning empty todos array"),[];console.log(`Fetching todos from ${t} to ${e} for user ${n}`);try{const r=Fd(ia(_i,Cr),fl("userId","==",n),fl("date",">=",t),fl("date","<=",e)),i=await Ud(r);return console.log(`Found ${i.size} todos in date range`),i.docs.map(s=>{const o=s.data();return{id:s.id,text:o.text||"No text",completed:o.completed||!1,date:o.date,color:o.color,recurring:o.recurring}})}catch(r){if(r.message&&r.message.includes("index")){console.log("Index error detected, trying simple query as fallback");const i=Fd(ia(_i,Cr),fl("userId","==",n)),s=await Ud(i);return console.log(`Found ${s.size} total todos for user`),s.docs.map(o=>{const l=o.data();return{id:o.id,text:l.text||"No text",completed:l.completed||!1,date:l.date,color:l.color,recurring:l.recurring}}).filter(o=>o.date>=t&&o.date<=e)}throw r}}catch(n){if(console.error("Error getting todos:",n),n.message&&n.message.includes("index")){console.log("This is a Firestore index error. You need to create an index."),console.log("Click the URL in the error message to create the required index.");const r=n.message.match(/https:\/\/console\.firebase\.google\.com\/[^\s]+/);r&&console.log("Create the index here:",r[0])}throw n}},xv=async(t,e)=>{try{const n=fp(_i,Cr,t);await mx(n,e)}catch(n){throw console.error("Error updating todo:",n),n}},ZO=async t=>{try{const e=fp(_i,Cr,t);await QE(e)}catch(e){throw console.error("Error deleting todo:",e),e}},eM=async()=>{try{console.log("Testing database connection...");const t=Fd(ia(_i,Cr),lx(1)),e=await Ud(t);console.log(`Test query on "${Cr}" returned:`,e.docs.length?"✅ Success":"⚠️ Empty collection");const n=await YE(ia(_i,Cr),{text:"Test connection",completed:!1,date:new Date().toISOString().split("T")[0],createdAt:Fe.now(),_isTestDoc:!0});return await QE(n),console.log("✅ Database connection successful!"),!0}catch(t){return console.error("❌ Database connection failed:",t),!1}},Sh=(t,e=7)=>{const n=[],r=ss(t);for(let i=0;i<e;i++){const s=jf(r,i),o=Mt(s,"yyyy-MM-dd");n.push({date:o,todos:[]})}return console.log(`Generated ${n.length} days from ${Mt(r,"yyyy-MM-dd")}`),n},tM=(t,e,n)=>{if(!t.recurring)return[];const r=[],i=hi(e);return n.forEach(s=>{const o=hi(s.date);if(o<=i)return;let l=!1;switch(t.recurring.frequency){case"daily":l=!0;break;case"weekly":l=Mt(o,"E")===Mt(i,"E");break;case"monthly":l=Mt(o,"d")===Mt(i,"d");break}l&&r.push({date:s.date,todo:{...t,id:crypto.randomUUID(),date:s.date,recurring:{...t.recurring}}})}),r},tI=cR()(gR((t,e)=>({days:Sh(ss(new Date)),currentStartDate:ss(new Date),isLoading:!1,error:null,fetchTodos:async()=>{t({isLoading:!0,error:null});try{console.log("Fetching todos...");const n=Sh(e().currentStartDate),r=n[0].date,i=n[n.length-1].date;console.log(`Date range: ${r} to ${i}`);const s=await JO(r,i);console.log(`Received ${s.length} todos from Firestore`);const o=n.map(l=>({...l,todos:s.filter(u=>u.date===l.date)}));t({days:o,isLoading:!1})}catch(n){console.error("Failed to fetch todos:",n);let r="Failed to fetch todos";n.message&&n.message.includes("index")?r="Firebase needs an index created. See console for details and the URL to create it.":n.message&&n.message.includes("auth")?r="Authentication error. Please log in again.":n.message&&(r=`Error: ${n.message}`),t({error:r,isLoading:!1})}},addTodo:async(n,r)=>{try{t({isLoading:!0,error:null});const i={text:r,completed:!1,date:n},s=await Dv(i);t(o=>({days:o.days.map(l=>l.date===n?{...l,todos:[...l.todos,{id:s,...i}]}:l),isLoading:!1}))}catch(i){console.error("Error adding todo:",i),t({error:"Failed to add todo",isLoading:!1})}},toggleTodo:async(n,r)=>{var i;try{const s=(i=e().days.find(o=>o.date===n))==null?void 0:i.todos.find(o=>o.id===r);if(!s)return;await xv(r,{completed:!s.completed}),t(o=>({days:o.days.map(l=>l.date===n?{...l,todos:l.todos.map(u=>u.id===r?{...u,completed:!u.completed}:u)}:l)}))}catch(s){console.error("Error toggling todo:",s),t({error:"Failed to update todo"})}},deleteTodo:async(n,r)=>{try{await ZO(r),t(i=>({days:i.days.map(s=>s.date===n?{...s,todos:s.todos.filter(o=>o.id!==r)}:s)}))}catch(i){console.error("Error deleting todo:",i),t({error:"Failed to delete todo"})}},moveTodo:(n,r,i)=>t(s=>{var l;const o=(l=s.days.find(u=>u.date===n))==null?void 0:l.todos.find(u=>u.id===i);return o?{days:s.days.map(u=>u.date===n?{...u,todos:u.todos.filter(c=>c.id!==i)}:u.date===r?{...u,todos:[...u.todos,{...o,date:r}]}:u)}:s}),updateTodoSettings:async(n,r,i)=>{var s;try{t({isLoading:!0});const o=(s=e().days.find(f=>f.date===n))==null?void 0:s.todos.find(f=>f.id===r);if(!o){t({isLoading:!1});return}const l={...o,...i};await xv(r,i);const u=tM(l,n,e().days),c=u.map(async({date:f,todo:p})=>{const g={text:p.text,completed:p.completed,date:p.date,color:p.color,recurring:p.recurring},w=await Dv(g);return p.id=w,p});await Promise.all(c),t(f=>({isLoading:!1,days:f.days.map(p=>{const g=u.filter(w=>w.date===p.date);return p.date===n?{...p,todos:p.todos.map(w=>w.id===r?l:w)}:g.length>0?{...p,todos:[...p.todos,...g.map(w=>w.todo)]}:p})}))}catch(o){console.error("Error updating todo settings:",o),t({error:"Failed to update todo settings",isLoading:!1})}},navigateWeek:n=>{t(r=>{const i=n==="prev"?yC(r.currentStartDate,7):jf(r.currentStartDate,7);return{currentStartDate:i,days:Sh(i)}}),e().fetchTodos()}}),{name:"todo-storage",partialize:t=>({currentStartDate:t.currentStartDate.toISOString()}),onRehydrateStorage:()=>t=>{t&&(typeof t.currentStartDate=="string"?t.currentStartDate=hi(t.currentStartDate):t.currentStartDate instanceof Date||(t.currentStartDate=ss(new Date)))}})),nM=t=>{const e=hi(t);return Mt(e,"EEEE").toUpperCase()},bv=t=>{const e=hi(t);return`${Mt(e,"MMM").toUpperCase()} ${Mt(e,"d")}`},rM=({date:t,todos:e,onAddTodo:n,onToggleTodo:r,onDeleteTodo:i})=>{const[s,o]=ke.useState(""),[l,u]=ke.useState(null),c=tI(P=>P.updateTodoSettings);ke.useEffect(()=>{console.log(`DayColumn for ${t} received todos:`,e)},[e,t]);const f=[{name:"default",value:""},{name:"red",value:"bg-red-600/20"},{name:"green",value:"bg-green-600/20"},{name:"blue",value:"bg-blue-600/20"},{name:"purple",value:"bg-purple-600/20"},{name:"yellow",value:"bg-yellow-600/20"}],p=P=>{P.preventDefault(),s.trim()&&(n(s.trim()),o(""))},g=P=>{r(P);const _=e.find(y=>y.id===P);_&&!_.completed&&VC()},w=(P,_)=>{c(t,P,_)},R=(P,_)=>{_.target.tagName.toLowerCase()!=="input"&&!_.target.closest("button")&&u(l===P?null:P)},N=hi(t);return Mt(N,"EEEE").toUpperCase(),Mt(N,"d"),Mt(N,"MMM").toUpperCase(),OC(t),U.jsxs("div",{className:"bg-gray-900 rounded-lg p-4 min-w-[250px] h-[calc(100vh-150px)] flex flex-col",children:[U.jsxs("div",{className:"mb-4",children:[U.jsx("h2",{className:"text-xl font-semibold",children:nM(t)}),U.jsx("p",{className:"text-sm text-gray-400",children:bv(t)}),U.jsx("p",{className:"text-xs text-blue-400 mt-1",children:e.length>0?`${e.length} todos`:"No todos"}),U.jsx("form",{onSubmit:p,className:"mt-3 mb-2",children:U.jsx("input",{type:"text",value:s,onChange:P=>o(P.target.value),placeholder:"Add a todo...",className:"w-full p-2 bg-transparent border-b border-gray-700 focus:border-blue-500 text-gray-100 placeholder-gray-500 focus:outline-none transition-colors duration-200"})})]}),U.jsxs("div",{className:"flex-grow overflow-y-auto",children:[e.length===0&&U.jsxs("div",{className:"flex flex-col items-center justify-center h-full",children:[U.jsx("p",{className:"text-gray-500 text-center italic text-sm mb-4",children:"No tasks"}),U.jsxs("button",{onClick:()=>{n(`Task for ${bv(t)}`)},className:"flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 px-3 py-1.5 rounded-full text-sm",children:[U.jsx(aA,{size:14}),"Create First Todo"]})]}),e.map(P=>{var _;return U.jsxs("div",{className:"relative",children:[U.jsxs("div",{className:`group flex items-center gap-3 hover:bg-gray-800/50 p-3 rounded-lg transition-all duration-200 cursor-pointer ${P.color||""}`,onClick:y=>R(P.id,y),children:[U.jsx("input",{type:"checkbox",checked:P.completed,onChange:y=>{y.stopPropagation(),g(P.id)},className:"form-checkbox h-4 w-4 rounded-sm border-gray-600 bg-transparent checked:bg-blue-500 checked:border-blue-500 focus:ring-0 focus:ring-offset-0 transition-colors duration-200"}),U.jsxs("span",{className:`flex-1 font-light ${P.completed?"line-through text-gray-500":""} transition-all duration-200`,children:[P.text,P.recurring&&U.jsx(lA,{size:14,className:"inline ml-2 text-blue-400"})]}),U.jsx("button",{onClick:y=>{y.stopPropagation(),i(P.id)},className:"opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-all duration-200",children:U.jsx(cA,{size:16})})]}),U.jsx("button",{className:"absolute right-10 top-3 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-blue-400",onClick:y=>{y.stopPropagation(),u(l===P.id?null:P.id)},children:U.jsx(uA,{size:16})}),l===P.id&&U.jsxs("div",{className:"absolute left-0 right-0 mt-2 p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-20",children:[U.jsxs("div",{className:"flex justify-between items-center mb-4",children:[U.jsx("h3",{className:"text-sm font-medium",children:"Task Settings"}),U.jsx("button",{onClick:()=>u(null),className:"text-gray-400 hover:text-gray-300",children:U.jsx(hA,{size:16})})]}),U.jsxs("div",{className:"space-y-4",children:[U.jsxs("div",{children:[U.jsx("label",{className:"text-sm text-gray-400 mb-2 block",children:"Color"}),U.jsx("div",{className:"flex gap-2",children:f.map(y=>U.jsx("button",{onClick:A=>{A.stopPropagation(),w(P.id,{color:y.value})},className:`w-6 h-6 rounded-full ${y.value||"bg-gray-700"} ${P.color===y.value?"ring-2 ring-white":""}`},y.name))})]}),U.jsxs("div",{children:[U.jsx("label",{className:"text-sm text-gray-400 mb-2 block",children:"Recurring"}),U.jsxs("select",{value:((_=P.recurring)==null?void 0:_.frequency)||"none",onChange:y=>{const A=y.target.value;w(P.id,{recurring:A==="none"?void 0:{frequency:A}})},className:"w-full p-2 bg-gray-700 rounded border border-gray-600 text-gray-100",children:[U.jsx("option",{value:"none",children:"Not recurring"}),U.jsx("option",{value:"daily",children:"Daily"}),U.jsx("option",{value:"weekly",children:"Weekly"}),U.jsx("option",{value:"monthly",children:"Monthly"})]})]})]})]})]},P.id)})]})]})},iM=async(t,e)=>{try{return(await b2(Aa,t,e)).user}catch(n){throw console.error("Error registering user:",n),n}},sM=async(t,e)=>{try{return(await O2(Aa,t,e)).user}catch(n){throw console.error("Error logging in:",n),n}},oM=async()=>{try{await F2(Aa)}catch(t){throw console.error("Error logging out:",t),t}},aM=t=>L2(Aa,t),lM=({onLogin:t})=>{const[e,n]=ke.useState("login"),[r,i]=ke.useState(""),[s,o]=ke.useState(""),[l,u]=ke.useState(""),[c,f]=ke.useState(!1),p=async g=>{g.preventDefault(),u(""),f(!0);try{const w=e==="login"?await sM(r,s):await iM(r,s);t(w)}catch(w){let R="Authentication failed";w.code==="auth/user-not-found"||w.code==="auth/wrong-password"?R="Invalid email or password":w.code==="auth/email-already-in-use"?R="Email is already registered":w.code==="auth/weak-password"?R="Password should be at least 6 characters":w.code==="auth/invalid-email"?R="Invalid email format":w.message&&(R=w.message),u(R)}finally{f(!1)}};return U.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-950 text-gray-100 p-4",children:U.jsxs("div",{className:"bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md",children:[U.jsxs("div",{className:"text-center mb-8",children:[U.jsx("h1",{className:"text-3xl font-semibold mb-2",children:"less is more"}),U.jsx("p",{className:"text-gray-400",children:"build, ship, learn, repeat 🚀"})]}),l&&U.jsx("div",{className:"bg-red-900/30 border border-red-800 text-red-300 px-4 py-3 rounded-lg mb-6",children:l}),U.jsxs("form",{onSubmit:p,className:"space-y-6",children:[U.jsxs("div",{children:[U.jsx("label",{className:"block text-gray-400 mb-2",htmlFor:"email",children:"Email"}),U.jsx("input",{id:"email",type:"email",value:r,onChange:g=>i(g.target.value),className:"w-full p-3 bg-gray-800 rounded border border-gray-700 text-gray-100 focus:border-blue-500 focus:outline-none transition-colors",required:!0})]}),U.jsxs("div",{children:[U.jsx("label",{className:"block text-gray-400 mb-2",htmlFor:"password",children:"Password"}),U.jsx("input",{id:"password",type:"password",value:s,onChange:g=>o(g.target.value),className:"w-full p-3 bg-gray-800 rounded border border-gray-700 text-gray-100 focus:border-blue-500 focus:outline-none transition-colors",required:!0})]}),U.jsx("button",{type:"submit",disabled:c,className:`w-full py-3 rounded-lg text-white font-medium ${c?"bg-blue-800 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"} transition-colors`,children:c?"Please wait...":e==="login"?"Log In":"Register"})]}),U.jsx("div",{className:"mt-6 text-center",children:U.jsx("button",{onClick:()=>n(e==="login"?"register":"login"),className:"text-blue-400 hover:text-blue-300 transition-colors",children:e==="login"?"Need an account? Register":"Already have an account? Log in"})})]})})};function uM(){const{days:t,addTodo:e,toggleTodo:n,deleteTodo:r,navigateWeek:i,fetchTodos:s,isLoading:o,error:l}=tI(),[u,c]=ke.useState(7),[f,p]=ke.useState({tested:!1,connected:!1}),[g,w]=ke.useState(null),[R,N]=ke.useState(!1);ke.useEffect(()=>{const _=aM(y=>{console.log("Auth state changed:",y?"Logged in":"Logged out"),w(y),y&&s()});return()=>_()},[s]),ke.useEffect(()=>{(async()=>{try{const y=await eM();p({tested:!0,connected:y})}catch(y){console.error("Error testing database connection:",y),p({tested:!0,connected:!1})}})()},[]);const P=async()=>{try{await oM()}catch(_){console.error("Error logging out:",_)}};return g?U.jsxs("div",{className:"min-h-screen bg-gray-950 text-gray-100 font-['Playfair_Display']",children:[U.jsxs("div",{className:"fixed top-16 right-4 z-50 bg-black/90 rounded-lg text-xs overflow-hidden",children:[U.jsxs("button",{onClick:()=>N(!R),className:"w-full flex items-center justify-between p-2 text-xs bg-gray-800 hover:bg-gray-700",children:[U.jsxs("span",{children:["Debug ",f.connected?"✅":"❌"]}),U.jsx("span",{children:g?"Logged in":"Not logged in"}),R?U.jsx(oA,{size:12}):U.jsx(rA,{size:12})]}),R&&U.jsxs("div",{className:"p-4 max-w-xs overflow-auto max-h-[500px]",children:[U.jsx("h3",{className:"font-bold mb-2",children:"Debug Info:"}),U.jsxs("p",{className:"mb-2",children:["Connection:"," ",f.tested?f.connected?"✅":"❌":"Testing..."]}),U.jsxs("p",{className:"mb-2",children:["Auth:"," ",g?`✅ ${g.email}`:"❌ Not logged in"]}),U.jsx("button",{onClick:P,className:"mt-2 w-full text-center bg-red-600/20 hover:bg-red-600/30 text-red-400 px-3 py-2 rounded",children:"Log Out"})]})]}),U.jsxs("header",{className:"bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 p-4 flex justify-between items-center fixed top-0 w-full z-10",children:[U.jsxs("div",{className:"flex items-center gap-4",children:[U.jsx("button",{onClick:()=>i("prev"),className:"bg-gray-800 hover:bg-gray-700 p-2 rounded",children:U.jsx(iA,{size:20})}),U.jsx("button",{onClick:()=>i("next"),className:"bg-gray-800 hover:bg-gray-700 p-2 rounded",children:U.jsx(sA,{size:20})})]}),U.jsxs("h1",{className:"text-xl font-bold flex items-center",children:["DAILY TODO",U.jsx("span",{className:"text-lg font-serif text-gray-300 ml-4",children:"build, ship, learn, repeat 🚀"})]}),U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx("span",{className:"text-sm text-gray-400",children:g==null?void 0:g.email}),U.jsx("button",{onClick:P,className:"text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded",children:"Logout"})]})]}),U.jsxs("main",{className:"container mx-auto p-4 pt-24",children:[U.jsx("div",{className:"flex justify-between mb-4",children:U.jsx("div",{className:"flex space-x-2",children:[1,3,5,7].map(_=>U.jsx("button",{onClick:()=>c(_),className:`px-3 py-1 rounded text-sm ${u===_?"bg-blue-600 text-white":"bg-gray-800 text-gray-300 hover:bg-gray-700"}`,children:_},_))})}),U.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4",children:t.slice(0,u).map(_=>U.jsx(rM,{date:_.date,todos:_.todos,onAddTodo:y=>e(_.date,y),onToggleTodo:y=>n(_.date,y),onDeleteTodo:y=>r(_.date,y)},_.date))})]})]}):U.jsx(lM,{onLogin:_=>w(_)})}K0(document.getElementById("root")).render(U.jsx(ke.StrictMode,{children:U.jsx(uM,{})}))});export default cM();
