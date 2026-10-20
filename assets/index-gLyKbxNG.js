import {formatDateTime,nowDateTime,recordProcessTime,processTimeLabel} from "./process-time.mjs";
(function(){const j=document.createElement("link").relList;if(j&&j.supports&&j.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))o(w);new MutationObserver(w=>{for(const O of w)if(O.type==="childList")for(const F of O.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&o(F)}).observe(document,{childList:!0,subtree:!0});function M(w){const O={};return w.integrity&&(O.integrity=w.integrity),w.referrerPolicy&&(O.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?O.credentials="include":w.crossOrigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function o(w){if(w.ep)return;w.ep=!0;const O=M(w);fetch(w.href,O)}})();function Tm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zr={exports:{}},cu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function Ab(){if(mm)return cu;mm=1;var r=Symbol.for("react.transitional.element"),j=Symbol.for("react.fragment");function M(o,w,O){var F=null;if(O!==void 0&&(F=""+O),w.key!==void 0&&(F=""+w.key),"key"in w){O={};for(var W in w)W!=="key"&&(O[W]=w[W])}else O=w;return w=O.ref,{$$typeof:r,type:o,key:F,ref:w!==void 0?w:null,props:O}}return cu.Fragment=j,cu.jsx=M,cu.jsxs=M,cu}var xm;function Ob(){return xm||(xm=1,zr.exports=Ab()),zr.exports}var s=Ob(),Er={exports:{}},P={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function Cb(){if(hm)return P;hm=1;var r=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),F=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),te=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),A=Symbol.for("react.view_transition"),ee=Symbol.iterator;function Q(m){return m===null||typeof m!="object"?null:(m=ee&&m[ee]||m["@@iterator"],typeof m=="function"?m:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,ye={};function re(m,_,G){this.props=m,this.context=_,this.refs=ye,this.updater=G||$}re.prototype.isReactComponent={},re.prototype.setState=function(m,_){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,_,"setState")},re.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Re(){}Re.prototype=re.prototype;function Te(m,_,G){this.props=m,this.context=_,this.refs=ye,this.updater=G||$}var qe=Te.prototype=new Re;qe.constructor=Te,Z(qe,re.prototype),qe.isPureReactComponent=!0;var Oe=Array.isArray;function K(){}var le={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function He(m,_,G){var X=G.ref;return{$$typeof:r,type:m,key:_,ref:X!==void 0?X:null,props:G}}function Qe(m,_){return He(m.type,_,m.props)}function Ge(m){return typeof m=="object"&&m!==null&&m.$$typeof===r}function Fe(m){var _={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(G){return _[G]})}var Ve=/\/+/g;function Ee(m,_){return typeof m=="object"&&m!==null&&m.key!=null?Fe(""+m.key):_.toString(36)}function C(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(K,K):(m.status="pending",m.then(function(_){m.status==="pending"&&(m.status="fulfilled",m.value=_)},function(_){m.status==="pending"&&(m.status="rejected",m.reason=_)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function Y(m,_,G,X,me){var xe=typeof m;(xe==="undefined"||xe==="boolean")&&(m=null);var be=!1;if(m===null)be=!0;else switch(xe){case"bigint":case"string":case"number":be=!0;break;case"object":switch(m.$$typeof){case r:case j:be=!0;break;case E:return be=m._init,Y(be(m._payload),_,G,X,me)}}if(be)return me=me(m),be=X===""?"."+Ee(m,0):X,Oe(me)?(G="",be!=null&&(G=be.replace(Ve,"$&/")+"/"),Y(me,_,G,"",function(ul){return ul})):me!=null&&(Ge(me)&&(me=Qe(me,G+(me.key==null||m&&m.key===me.key?"":(""+me.key).replace(Ve,"$&/")+"/")+be)),_.push(me)),1;be=0;var q=X===""?".":X+":";if(Oe(m))for(var I=0;I<m.length;I++)X=m[I],xe=q+Ee(X,I),be+=Y(X,_,G,xe,me);else if(I=Q(m),typeof I=="function")for(m=I.call(m),I=0;!(X=m.next()).done;)X=X.value,xe=q+Ee(X,I++),be+=Y(X,_,G,xe,me);else if(xe==="object"){if(typeof m.then=="function")return Y(C(m),_,G,X,me);throw _=String(m),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return be}function v(m,_,G){if(m==null)return m;var X=[],me=0;return Y(m,X,"","",function(xe){return _.call(G,xe,me++)}),X}function z(m){if(m._status===-1){var _=m._result,G=_();G.then(function(X){(m._status===0||m._status===-1)&&(m._status=1,m._result=X,G.status===void 0&&(G.status="fulfilled",G.value=X))},function(X){(m._status===0||m._status===-1)&&(m._status=2,m._result=X,G.status===void 0&&(G.status="rejected",G.reason=X))}),m._status===-1&&(m._status=0,m._result=G)}if(m._status===1)return m._result.default;throw m._result}var H=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function ge(m){var _=le.T,G={};G.types=_!==null?_.types:null,le.T=G;try{var X=m(),me=le.S;me!==null&&me(G,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(K,H)}catch(xe){H(xe)}finally{_!==null&&G.types!==null&&(_.types=G.types),le.T=_}}function _e(m){var _=le.T;if(_!==null){var G=_.types;G===null?_.types=[m]:G.indexOf(m)===-1&&G.push(m)}else ge(_e.bind(null,m))}var Ce={map:v,forEach:function(m,_,G){v(m,function(){_.apply(this,arguments)},G)},count:function(m){var _=0;return v(m,function(){_++}),_},toArray:function(m){return v(m,function(_){return _})||[]},only:function(m){if(!Ge(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return P.Activity=N,P.Children=Ce,P.Component=re,P.Fragment=M,P.Profiler=w,P.PureComponent=Te,P.StrictMode=o,P.Suspense=k,P.ViewTransition=A,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,P.__COMPILER_RUNTIME={__proto__:null,c:function(m){return le.H.useMemoCache(m)}},P.addTransitionType=_e,P.cache=function(m){return function(){return m.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(m,_,G){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var X=Z({},m.props),me=m.key;if(_!=null)for(xe in _.key!==void 0&&(me=""+_.key),_)!R.call(_,xe)||xe==="key"||xe==="__self"||xe==="__source"||xe==="ref"&&_.ref===void 0||(X[xe]=_[xe]);var xe=arguments.length-2;if(xe===1)X.children=G;else if(1<xe){for(var be=Array(xe),q=0;q<xe;q++)be[q]=arguments[q+2];X.children=be}return He(m.type,me,X)},P.createContext=function(m){return m={$$typeof:F,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:O,_context:m},m},P.createElement=function(m,_,G){var X,me={},xe=null;if(_!=null)for(X in _.key!==void 0&&(xe=""+_.key),_)R.call(_,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(me[X]=_[X]);var be=arguments.length-2;if(be===1)me.children=G;else if(1<be){for(var q=Array(be),I=0;I<be;I++)q[I]=arguments[I+2];me.children=q}if(m&&m.defaultProps)for(X in be=m.defaultProps,be)me[X]===void 0&&(me[X]=be[X]);return He(m,xe,me)},P.createRef=function(){return{current:null}},P.forwardRef=function(m){return{$$typeof:W,render:m}},P.isValidElement=Ge,P.lazy=function(m){return{$$typeof:E,_payload:{_status:-1,_result:m},_init:z}},P.memo=function(m,_){return{$$typeof:te,type:m,compare:_===void 0?null:_}},P.startTransition=ge,P.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},P.use=function(m){return le.H.use(m)},P.useActionState=function(m,_,G){return le.H.useActionState(m,_,G)},P.useCallback=function(m,_){return le.H.useCallback(m,_)},P.useContext=function(m){return le.H.useContext(m)},P.useDebugValue=function(){},P.useDeferredValue=function(m,_){return le.H.useDeferredValue(m,_)},P.useEffect=function(m,_){return le.H.useEffect(m,_)},P.useEffectEvent=function(m){return le.H.useEffectEvent(m)},P.useId=function(){return le.H.useId()},P.useImperativeHandle=function(m,_,G){return le.H.useImperativeHandle(m,_,G)},P.useInsertionEffect=function(m,_){return le.H.useInsertionEffect(m,_)},P.useLayoutEffect=function(m,_){return le.H.useLayoutEffect(m,_)},P.useMemo=function(m,_){return le.H.useMemo(m,_)},P.useOptimistic=function(m,_){return le.H.useOptimistic(m,_)},P.useReducer=function(m,_,G){return le.H.useReducer(m,_,G)},P.useRef=function(m){return le.H.useRef(m)},P.useState=function(m){return le.H.useState(m)},P.useSyncExternalStore=function(m,_,G){return le.H.useSyncExternalStore(m,_,G)},P.useTransition=function(){return le.H.useTransition()},P.version="19.3.1",P}var bm;function qr(){return bm||(bm=1,Er.exports=Cb()),Er.exports}var V=qr();const zm=Tm(V);var _r={exports:{}},iu={},Ar={exports:{}},Or={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function Db(){return vm||(vm=1,(function(r){function j(C,Y){var v=C.length;C.push(Y);e:for(;0<v;){var z=v-1>>>1,H=C[z];if(0<w(H,Y))C[z]=Y,C[v]=H,v=z;else break e}}function M(C){return C.length===0?null:C[0]}function o(C){if(C.length===0)return null;var Y=C[0],v=C.pop();if(v!==Y){C[0]=v;e:for(var z=0,H=C.length,ge=H>>>1;z<ge;){var _e=2*(z+1)-1,Ce=C[_e],m=_e+1,_=C[m];if(0>w(Ce,v))m<H&&0>w(_,Ce)?(C[z]=_,C[m]=v,z=m):(C[z]=Ce,C[_e]=v,z=_e);else if(m<H&&0>w(_,v))C[z]=_,C[m]=v,z=m;else break e}}return Y}function w(C,Y){var v=C.sortIndex-Y.sortIndex;return v!==0?v:C.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var O=performance;r.unstable_now=function(){return O.now()}}else{var F=Date,W=F.now();r.unstable_now=function(){return F.now()-W}}var k=[],te=[],E=1,N=null,A=3,ee=!1,Q=!1,$=!1,Z=!1,ye=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,Re=typeof setImmediate<"u"?setImmediate:null;function Te(C){for(var Y=M(te);Y!==null;){if(Y.callback===null)o(te);else if(Y.startTime<=C)o(te),Y.sortIndex=Y.expirationTime,j(k,Y);else break;Y=M(te)}}function qe(C){if($=!1,Te(C),!Q)if(M(k)!==null)Q=!0,Oe||(Oe=!0,Ge());else{var Y=M(te);Y!==null&&Ee(qe,Y.startTime-C)}}var Oe=!1,K=-1,le=5,R=-1;function He(){return Z?!0:!(r.unstable_now()-R<le)}function Qe(){if(Z=!1,Oe){var C=r.unstable_now();R=C;var Y=!0;try{e:{Q=!1,$&&($=!1,re(K),K=-1),ee=!0;var v=A;try{t:{for(Te(C),N=M(k);N!==null&&!(N.expirationTime>C&&He());){var z=N.callback;if(typeof z=="function"){N.callback=null,A=N.priorityLevel;var H=z(N.expirationTime<=C);if(C=r.unstable_now(),typeof H=="function"){N.callback=H,Te(C),Y=!0;break t}N===M(k)&&o(k),Te(C)}else o(k);N=M(k)}if(N!==null)Y=!0;else{var ge=M(te);ge!==null&&Ee(qe,ge.startTime-C),Y=!1}}break e}finally{N=null,A=v,ee=!1}Y=void 0}}finally{Y?Ge():Oe=!1}}}var Ge;if(typeof Re=="function")Ge=function(){Re(Qe)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,Ve=Fe.port2;Fe.port1.onmessage=Qe,Ge=function(){Ve.postMessage(null)}}else Ge=function(){ye(Qe,0)};function Ee(C,Y){K=ye(function(){C(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(C){C.callback=null},r.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<C?Math.floor(1e3/C):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_next=function(C){switch(A){case 1:case 2:case 3:var Y=3;break;default:Y=A}var v=A;A=Y;try{return C()}finally{A=v}},r.unstable_requestPaint=function(){Z=!0},r.unstable_runWithPriority=function(C,Y){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var v=A;A=C;try{return Y()}finally{A=v}},r.unstable_scheduleCallback=function(C,Y,v){var z=r.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?z+v:z):v=z,C){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=v+H,C={id:E++,callback:Y,priorityLevel:C,startTime:v,expirationTime:H,sortIndex:-1},v>z?(C.sortIndex=v,j(te,C),M(k)===null&&C===M(te)&&($?(re(K),K=-1):$=!0,Ee(qe,v-z))):(C.sortIndex=H,j(k,C),Q||ee||(Q=!0,Oe||(Oe=!0,Ge()))),C},r.unstable_shouldYield=He,r.unstable_wrapCallback=function(C){var Y=A;return function(){var v=A;A=Y;try{return C.apply(this,arguments)}finally{A=v}}}})(Or)),Or}var ym;function Mb(){return ym||(ym=1,Ar.exports=Db()),Ar.exports}var Cr={exports:{}},it={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function wb(){if(pm)return it;pm=1;var r=qr();function j(E){var N="https://react.dev/errors/"+E;if(1<arguments.length){N+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)N+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+E+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(){}var o={d:{f:M,r:function(){throw Error(j(522))},D:M,C:M,L:M,m:M,X:M,S:M,M},p:0,findDOMNode:null},w=Symbol.for("react.portal"),O=Symbol.for("react.recoverable"),F=Symbol.for("react.optimistic_key");function W(E,N,A){var ee=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:ee==null?null:ee===F?F:""+ee,children:E,containerInfo:N,implementation:A}}var k=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function te(E,N){if(E==="font")return"";if(typeof N=="string")return N==="use-credentials"?N:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,it.browser=function(E){return{$$typeof:O,_reason:E}},it.createPortal=function(E,N){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!N||N.nodeType!==1&&N.nodeType!==9&&N.nodeType!==11)throw Error(j(299));return W(E,N,null,A)},it.flushSync=function(E){var N=k.T,A=o.p;try{if(k.T=null,o.p=2,E)return E()}finally{k.T=N,o.p=A,o.d.f()}},it.preconnect=function(E,N){typeof E=="string"&&(N?(N=N.crossOrigin,N=typeof N=="string"?N==="use-credentials"?N:"":void 0):N=null,o.d.C(E,N))},it.prefetchDNS=function(E){typeof E=="string"&&o.d.D(E)},it.preinit=function(E,N){if(typeof E=="string"&&N&&typeof N.as=="string"){var A=N.as,ee=te(A,N.crossOrigin),Q=typeof N.integrity=="string"?N.integrity:void 0,$=typeof N.fetchPriority=="string"?N.fetchPriority:void 0;A==="style"?o.d.S(E,typeof N.precedence=="string"?N.precedence:void 0,{crossOrigin:ee,integrity:Q,fetchPriority:$}):A==="script"&&o.d.X(E,{crossOrigin:ee,integrity:Q,fetchPriority:$,nonce:typeof N.nonce=="string"?N.nonce:void 0})}},it.preinitModule=function(E,N){if(typeof E=="string")if(typeof N=="object"&&N!==null){if(N.as==null||N.as==="script"){var A=te(N.as,N.crossOrigin);o.d.M(E,{crossOrigin:A,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0,fetchPriority:typeof N.fetchPriority=="string"?N.fetchPriority:void 0})}}else N==null&&o.d.M(E)},it.preload=function(E,N){if(typeof E=="string"&&typeof N=="object"&&N!==null&&typeof N.as=="string"){var A=N.as,ee=te(A,N.crossOrigin);o.d.L(E,A,{crossOrigin:ee,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0,type:typeof N.type=="string"?N.type:void 0,fetchPriority:typeof N.fetchPriority=="string"?N.fetchPriority:void 0,referrerPolicy:typeof N.referrerPolicy=="string"?N.referrerPolicy:void 0,imageSrcSet:typeof N.imageSrcSet=="string"?N.imageSrcSet:void 0,imageSizes:typeof N.imageSizes=="string"?N.imageSizes:void 0,media:typeof N.media=="string"?N.media:void 0})}},it.preloadModule=function(E,N){if(typeof E=="string")if(N){var A=te(N.as,N.crossOrigin);o.d.m(E,{as:typeof N.as=="string"&&N.as!=="script"?N.as:void 0,crossOrigin:A,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0,fetchPriority:typeof N.fetchPriority=="string"?N.fetchPriority:void 0})}else o.d.m(E)},it.requestFormReset=function(E){o.d.r(E)},it.unstable_batchedUpdates=function(E,N){return E(N)},it.useFormState=function(E,N,A){return k.H.useFormState(E,N,A)},it.useFormStatus=function(){return k.H.useHostTransitionStatus()},it.version="19.3.1",it}var gm;function Ub(){if(gm)return Cr.exports;gm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(j){console.error(j)}}return r(),Cr.exports=wb(),Cr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function Rb(){if(Nm)return iu;Nm=1;var r=Mb(),j=qr(),M=Ub();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function O(e){for(var t=e,l=t;l&&!l.alternate;)t=l,(t.flags&4098)!==0&&(e=t.return),l=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function F(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function W(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(O(e)!==e)throw Error(o(188))}function te(e){var t=e.alternate;if(!t){if(t=O(e),t===null)throw Error(o(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return k(n),e;if(u===a)return k(n),t;u=u.sibling}throw Error(o(188))}if(l.return!==a.return)l=n,a=u;else{for(var c=!1,i=n.child;i;){if(i===l){c=!0,l=n,a=u;break}if(i===a){c=!0,a=n,l=u;break}i=i.sibling}if(!c){for(i=u.child;i;){if(i===l){c=!0,l=u,a=n;break}if(i===a){c=!0,a=u,l=n;break}i=i.sibling}if(!c)throw Error(o(189))}}if(l.alternate!==a)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?e:t}function E(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=E(e),t!==null)return t;e=e.sibling}return null}function N(e,t,l,a,n,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&l(e,a,n,u)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&N(e.child,t,l,a,n,u))return!0;e=e.sibling}return!1}function A(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function ee(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Q(e){var t=[null,null],l=A(e);return l===null||$(t,e,l.child,{foundSelf:!1}),t}function $(e,t,l,a){for(;l!==null;){if(l===t)a.foundSelf=!0;else if(l.tag===5||l.tag===27||l.tag===6){if(a.foundSelf)return e[1]=l,!0;e[0]=l}else if((l.tag!==22||l.memoizedState===null)&&$(e,t,l.child,a))return!0;l=l.sibling}return!1}function Z(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(o(559))}}var ye=null,re=null;function Re(e,t,l){return e===l?!0:e===t?(ye=e,!0):!1}function Te(e,t,l){return e===l?(re=e,!1):e===t?(re!==null&&(ye=e),!0):!1}function qe(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Oe(e,t,l){for(var a=0,n=e;n;n=l(n))a++;n=0;for(var u=t;u;u=l(u))n++;for(;0<a-n;)e=l(e),a--;for(;0<n-a;)t=l(t),n--;for(;a--;){if(e===t||t!==null&&e===t.alternate)return e;e=l(e),t=l(t)}return null}var K=Object.assign,le=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),He=Symbol.for("react.portal"),Qe=Symbol.for("react.fragment"),Ge=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),Ve=Symbol.for("react.consumer"),Ee=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),ge=Symbol.for("react.activity"),_e=Symbol.for("react.legacy_hidden"),Ce=Symbol.for("react.memo_cache_sentinel"),m=Symbol.for("react.view_transition"),_=Symbol.for("react.recoverable"),G=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var me=Symbol.for("react.client.reference");function xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===me?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qe:return"Fragment";case Fe:return"Profiler";case Ge:return"StrictMode";case Y:return"Suspense";case v:return"SuspenseList";case ge:return"Activity";case m:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case He:return"Portal";case Ee:return e.displayName||"Context";case Ve:return(e._context.displayName||"Context")+".Consumer";case C:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return t=e.displayName||null,t!==null?t:xe(e.type)||"Memo";case H:t=e._payload,e=e._init;try{return xe(e(t))}catch{}}return null}var be=Array.isArray,q=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ul={pending:!1,data:null,method:null,action:null},Vs=[],ga=-1;function Kt(e){return{current:e}}function tt(e){0>ga||(e.current=Vs[ga],Vs[ga]=null,ga--)}function De(e,t){ga++,Vs[ga]=e.current,e.current=t}var Jt=Kt(null),mn=Kt(null),Nl=Kt(null),fu=Kt(null);function ou(e,t){switch(De(Nl,t),De(mn,e),De(Jt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?j0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=j0(t),e=S0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(Jt),De(Jt,e)}function Na(){tt(Jt),tt(mn),tt(Nl)}function Zs(e){var t=e.memoizedState;t!==null&&(rn._currentValue=t.memoizedState,De(fu,e)),t=Jt.current;var l=S0(t,e.type);t!==l&&(De(mn,e),De(Jt,l))}function du(e){mn.current===e&&(tt(Jt),tt(mn)),fu.current===e&&(tt(fu),rn._currentValue=ul)}var Ks,Qr;function jl(e){if(Ks===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Ks=t&&t[1]||"",Qr=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ks+e+Qr}var Js=!1;function ks(e,t){if(!e||Js)return"";Js=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(D){var x=D}Reflect.construct(e,[],T)}else{try{T.call()}catch(D){x=D}T=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),T=!0,new e}finally{T&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(D){x=D}(T=e())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(D){if(D&&x&&typeof D.stack=="string")return[D.stack,x.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),c=u[0],i=u[1];if(c&&i){var f=c.split(`
`),b=i.split(`
`);for(n=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;if(a===f.length||n===b.length)for(a=f.length-1,n=b.length-1;1<=a&&0<=n&&f[a]!==b[n];)n--;for(;1<=a&&0<=n;a--,n--)if(f[a]!==b[n]){if(a!==1||n!==1)do if(a--,n--,0>n||f[a]!==b[n]){var g=`
`+f[a].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=a&&0<=n);break}}}finally{Js=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?jl(l):""}function Mx(e,t){switch(e.tag){case 26:case 27:case 5:return jl(e.type);case 16:return jl("Lazy");case 13:return e.child!==t&&t!==null?jl("Suspense Fallback"):jl("Suspense");case 19:return jl("SuspenseList");case 0:case 15:return ks(e.type,!1);case 11:return ks(e.type.render,!1);case 1:return ks(e.type,!0);case 31:return jl("Activity");case 30:return jl("ViewTransition");default:return""}}function Gr(e){try{var t="",l=null;do t+=Mx(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var $s=Object.prototype.hasOwnProperty,Fs=r.unstable_scheduleCallback,Ws=r.unstable_cancelCallback,wx=r.unstable_shouldYield,Ux=r.unstable_requestPaint,gt=r.unstable_now,Rx=r.unstable_getCurrentPriorityLevel,Xr=r.unstable_ImmediatePriority,Vr=r.unstable_UserBlockingPriority,mu=r.unstable_NormalPriority,Hx=r.unstable_LowPriority,Zr=r.unstable_IdlePriority,Bx=r.log,qx=r.unstable_setDisableYieldValue,xn=null,Nt=null;function Sl(e){if(typeof Bx=="function"&&qx(e),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(xn,e)}catch{}}var jt=Math.clz32?Math.clz32:Qx,Yx=Math.log,Lx=Math.LN2;function Qx(e){return e>>>=0,e===0?32:31-(Yx(e)/Lx|0)|0}var xu=256,hu=262144,bu=4194304;function Fl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vu(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,u=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var i=a&134217727;return i!==0?(a=i&~u,a!==0?n=Fl(a):(c&=i,c!==0?n=Fl(c):l||(l=i&~e,l!==0&&(n=Fl(l))))):(i=a&~u,i!==0?n=Fl(i):c!==0?n=Fl(c):l||(l=a&~e,l!==0&&(n=Fl(l)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,l=t&-t,u>=l||u===32&&(l&4194048)!==0)?t:n}function hn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Kr(e,t){(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-jt(l),n=1<<a;t|=e[a],l&=~n}return t}function Gx(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jr(){var e=bu;return bu<<=1,(bu&62914560)===0&&(bu=4194304),e}function Is(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function bn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xx(e,t,l,a,n,u){var c=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var i=e.entanglements,f=e.expirationTimes,b=e.hiddenUpdates;for(l=c&~l;0<l;){var g=31-jt(l),T=1<<g;i[g]=0,f[g]=-1;var x=b[g];if(x!==null)for(b[g]=null,g=0;g<x.length;g++){var p=x[g];p!==null&&(p.lane&=-536870913)}l&=~T}a!==0&&kr(e,a,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(c&~t))}function kr(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-jt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function $r(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-jt(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Fr(e,t){var l=t&-t;return l=(l&42)!==0?1:Ps(l),(l&(e.suspendedLanes|t))!==0?0:l}function Ps(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ec(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wr(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:sm(e.type))}function Ir(e,t){var l=I.p;try{return I.p=e,t()}finally{I.p=l}}var sl=Math.random().toString(36).slice(2),lt="__reactFiber$"+sl,xt="__reactProps$"+sl,ja="__reactContainer$"+sl,Pr="__reactEvents$"+sl,Vx="__reactListeners$"+sl,Zx="__reactHandles$"+sl,ef="__reactResources$"+sl,vn="__reactMarker$"+sl,yu="__reactLoad$"+sl;function pu(e){delete e[lt],delete e[xt],delete e[Vx],delete e[Zx]}function Wl(e){var t;if(t=e[lt])return t;for(var l=e.parentNode;l;){if(t=l[ja]||l[lt]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=L0(e);e!==null;){if(l=e[lt])return l;e=L0(e)}return t}e=l,l=e.parentNode}return null}function Sa(e){if(e=e[lt]||e[ja]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ta(e){var t=e[ef];return t||(t=e[ef]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[vn]=!0}function tf(e){e[yu]=void 0}var lf=new Set,af={};function Il(e,t){za(e,t),za(e+"Capture",t)}function za(e,t){for(af[e]=t,e=0;e<t.length;e++)lf.add(t[e])}var Kx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nf={},uf={};function Jx(e){return $s.call(uf,e)?!0:$s.call(nf,e)?!1:Kx.test(e)?uf[e]=!0:(nf[e]=!0,!1)}var he=!1;function sf(){var e=he;return he=!1,e}function gu(e,t,l){if(Jx(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,l)}}function Nu(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,l)}}function cl(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,a)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kx(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,u.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tc(e){if(!e._valueTracker){var t=cf(e)?"checked":"value";e._valueTracker=kx(e,t,""+e[t])}}function rf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=cf(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}var $x=/[\n"\\]/g;function Dt(e){return e.replace($x,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function lc(e,t,l,a,n,u,c,i){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?c==="number"&&e.value==t?ac(e,St(e.value)):ac(e,St(t)):l!=null?ac(e,St(l)):a!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.name=""+St(i):e.removeAttribute("name")}function ff(e,t,l,a,n,u,c,i){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){tc(e);return}l=l!=null?""+St(l):"",t=t!=null?""+St(t):l,i||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=i?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),tc(e)}function ac(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Ea(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+St(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function of(e,t,l){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+St(l):""}function df(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(o(92));if(be(a)){if(1<a.length)throw Error(o(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=St(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),tc(e)}function _a(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Fx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mf(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Fx.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function xf(e,t,l){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="",he=!0);for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&(mf(e,n,a),he=!0)}else for(var u in t)t.hasOwnProperty(u)&&mf(e,u,t[u])}function nc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ix=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ju(e){return Ix.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function kt(){}var uc=null;function sc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Aa=null,Oa=null;function hf(e){var t=Sa(e);if(t&&(e=t.stateNode)){var l=e[xt]||null;e:switch(e=t.stateNode,t.type){case"input":if(lc(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Dt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[xt]||null;if(!n)throw Error(o(90));lc(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&rf(a)}break e;case"textarea":of(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Ea(e,!!l.multiple,t,!1)}}}var cc=!1;function bf(e,t,l){if(cc)return e(t,l);cc=!0;try{var a=e(t);return a}finally{if(cc=!1,(Aa!==null||Oa!==null)&&(js(),Aa&&(t=Aa,e=Oa,Oa=Aa=null,hf(t),e)))for(t=0;t<e.length;t++)hf(e[t])}}function pn(e,t){var l=e.stateNode;if(l===null)return null;var a=l[xt]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(o(231,t,typeof l));return l}var il=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ic=!1;if(il)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){ic=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{ic=!1}var Tl=null,rc=null,Su=null;function vf(){if(Su)return Su;var e,t=rc,l=t.length,a,n="value"in Tl?Tl.value:Tl.textContent,u=n.length;for(e=0;e<l&&t[e]===n[e];e++);var c=l-e;for(a=1;a<=c&&t[l-a]===n[u-a];a++);return Su=n.slice(e,1<a?1-a:void 0)}function Tu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zu(){return!0}function yf(){return!1}function ft(e){function t(l,a,n,u,c){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=c,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(l=e[i],this[i]=l?l(u):u[i]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?zu:yf,this.isPropagationStopped=yf,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=zu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=zu)},persist:function(){},isPersistent:zu}),t}var zl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eu=ft(zl),Nn=K({},zl,{view:0,detail:0}),Px=ft(Nn),fc,oc,jn,_u=K({},Nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jn&&(jn&&e.type==="mousemove"?(fc=e.screenX-jn.screenX,oc=e.screenY-jn.screenY):oc=fc=0,jn=e),fc)},movementY:function(e){return"movementY"in e?e.movementY:oc}}),pf=ft(_u),eh=K({},_u,{dataTransfer:0}),th=ft(eh),lh=K({},Nn,{relatedTarget:0}),dc=ft(lh),ah=K({},zl,{animationName:0,elapsedTime:0,pseudoElement:0}),nh=ft(ah),uh=K({},zl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sh=ft(uh),ch=K({},zl,{data:0}),gf=ft(ch),ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fh[e])?!!t[e]:!1}function mc(){return oh}var dh=K({},Nn,{key:function(e){if(e.key){var t=ih[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(e){return e.type==="keypress"?Tu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mh=ft(dh),xh=K({},_u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=ft(xh),hh=K({},zl,{submitter:0}),bh=ft(hh),vh=K({},Nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),yh=ft(vh),ph=K({},zl,{propertyName:0,elapsedTime:0,pseudoElement:0}),gh=ft(ph),Nh=K({},_u,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jh=ft(Nh),Sh=K({},zl,{newState:0,oldState:0,source:0}),Th=ft(Sh),zh=[9,13,27,32],xc=il&&"CompositionEvent"in window,Sn=null;il&&"documentMode"in document&&(Sn=document.documentMode);var Eh=il&&"TextEvent"in window&&!Sn,jf=il&&(!xc||Sn&&8<Sn&&11>=Sn),Sf=" ",Tf=!1;function zf(e,t){switch(e){case"keyup":return zh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ca=!1;function _h(e,t){switch(e){case"compositionend":return Ef(t);case"keypress":return t.which!==32?null:(Tf=!0,Sf);case"textInput":return e=t.data,e===Sf&&Tf?null:e;default:return null}}function Ah(e,t){if(Ca)return e==="compositionend"||!xc&&zf(e,t)?(e=vf(),Su=rc=Tl=null,Ca=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jf&&t.locale!=="ko"?null:t.data;default:return null}}var Oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _f(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Oh[e.type]:t==="textarea"}function Af(e,t,l,a){Aa?Oa?Oa.push(a):Oa=[a]:Aa=a,t=As(t,"onChange"),0<t.length&&(l=new Eu("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Tn=null,zn=null;function Ch(e){b0(e,0)}function Au(e){var t=yn(e);if(rf(t))return e}function Of(e,t){if(e==="change")return t}var Cf=!1;if(il){var hc;if(il){var bc="oninput"in document;if(!bc){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),bc=typeof Df.oninput=="function"}hc=bc}else hc=!1;Cf=hc&&(!document.documentMode||9<document.documentMode)}function Mf(){Tn&&(Tn.detachEvent("onpropertychange",wf),zn=Tn=null)}function wf(e){if(e.propertyName==="value"&&Au(zn)){var t=[];Af(t,zn,e,sc(e)),bf(Ch,t)}}function Dh(e,t,l){e==="focusin"?(Mf(),Tn=t,zn=l,Tn.attachEvent("onpropertychange",wf)):e==="focusout"&&Mf()}function Mh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Au(zn)}function wh(e,t){if(e==="click")return Au(t)}function Uh(e,t){if(e==="input"||e==="change")return Au(t)}function Rh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:Rh;function En(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!$s.call(t,n)||!Tt(e[n],t[n]))return!1}return!0}function vc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rf(e,t){var l=Uf(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Uf(l)}}function Hf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=vc(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=vc(e.document)}return t}function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Hh=il&&"documentMode"in document&&11>=document.documentMode,Da=null,pc=null,_n=null,gc=!1;function qf(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;gc||Da==null||Da!==vc(a)||(a=Da,"selectionStart"in a&&yc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),_n&&En(_n,a)||(_n=a,a=As(pc,"onSelect"),0<a.length&&(t=new Eu("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Da)))}function Pl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Ma={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionrun:Pl("Transition","TransitionRun"),transitionstart:Pl("Transition","TransitionStart"),transitioncancel:Pl("Transition","TransitionCancel"),transitionend:Pl("Transition","TransitionEnd")},Nc={},Yf={};il&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete Ma.animationend.animation,delete Ma.animationiteration.animation,delete Ma.animationstart.animation),"TransitionEvent"in window||delete Ma.transitionend.transition);function ea(e){if(Nc[e])return Nc[e];if(!Ma[e])return e;var t=Ma[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Yf)return Nc[e]=t[l];return e}var Lf=ea("animationend"),Qf=ea("animationiteration"),Gf=ea("animationstart"),Bh=ea("transitionrun"),qh=ea("transitionstart"),Yh=ea("transitioncancel"),Xf=ea("transitionend"),Vf=new Map,jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jc.push("scrollEnd");function Lt(e,t){Vf.set(e,t),Il(t,[e])}var Lh=0;function rl(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Vt.identifierPrefix;var l=Lh++;return e="_"+e+"t_"+l.toString(32)+"_",t.autoName=e}function Zf(e){if(e==null||typeof e=="string")return e;var t=null,l=Ia;if(l!==null)for(var a=0;a<l.length;a++){var n=e[l[a]];if(n!=null){if(n==="none")return"none";t=t==null?n:t+(" "+n)}}return t??e.default}function fl(e,t){return e=Zf(e),t=Zf(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Ou=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mt=[],wa=0,Sc=0;function Cu(){for(var e=wa,t=Sc=wa=0;t<e;){var l=Mt[t];Mt[t++]=null;var a=Mt[t];Mt[t++]=null;var n=Mt[t];Mt[t++]=null;var u=Mt[t];if(Mt[t++]=null,a!==null&&n!==null){var c=a.pending;c===null?n.next=n:(n.next=c.next,c.next=n),a.pending=n}u!==0&&Kf(l,n,u)}}function Du(e,t,l,a){Mt[wa++]=e,Mt[wa++]=t,Mt[wa++]=l,Mt[wa++]=a,Sc|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Tc(e,t,l,a){return Du(e,t,l,a),Mu(e)}function ta(e,t){return Du(e,null,null,t),Mu(e)}function Kf(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=e.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&t!==null&&(n=31-jt(l),e=u.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),u):null}function Mu(e){if(50<$n)throw $n=0,Ns=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ua={};function Qh(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,l,a){return new Qh(e,t,l,a)}function zc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ol(e,t){var l=e.alternate;return l===null?(l=ht(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&1206910976,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Jf(e,t){e.flags&=1206910978;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function wu(e,t,l,a,n,u){var c=0;if(a=e,typeof a=="function")zc(a)&&(c=1);else if(typeof a=="string")c=hb(e,l,Jt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(a){case ge:return e=ht(31,l,t,n),e.elementType=ge,e.lanes=u,e;case Qe:return la(l.children,n,u,t);case Ge:c=8,n|=24;break;case Fe:return e=ht(12,l,t,n|2),e.elementType=Fe,e.lanes=u,e;case Y:return e=ht(13,l,t,n),e.elementType=Y,e.lanes=u,e;case v:return e=ht(19,l,t,n),e.elementType=v,e.lanes=u,e;case _e:case m:return e=n|32,e=ht(30,l,t,e),e.elementType=m,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Ee:c=10;break e;case Ve:c=9;break e;case C:c=11;break e;case z:c=14;break e;case H:c=16,a=null;break e}c=29,l=Error(o(130,e===null?"null":typeof e,"")),a=null}return t=ht(c,l,t,n),t.elementType=e,t.type=a,t.lanes=u,t}function la(e,t,l,a){return e=ht(7,e,a,t),e.lanes=l,e}function Ec(e,t,l){return e=ht(6,e,null,t),e.lanes=l,e}function kf(e){var t=ht(18,null,null,0);return t.stateNode=e,t}function _c(e,t,l){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var $f=new WeakMap;function wt(e,t){if(typeof e=="object"&&e!==null){var l=$f.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Gr(t)},$f.set(e,t),t)}return{value:e,source:t,stack:Gr(t)}}var Ra=[],Ha=0,Uu=null,An=0,Ut=[],Rt=0,El=null,$t=1,Ft="";function dl(e,t){Ra[Ha++]=An,Ra[Ha++]=Uu,Uu=e,An=t}function Ff(e,t,l){Ut[Rt++]=$t,Ut[Rt++]=Ft,Ut[Rt++]=El,El=e;var a=$t;e=Ft;var n=32-jt(a)-1;a&=~(1<<n),l+=1;var u=32-jt(t)+n;if(30<u){var c=n-n%5;u=(a&(1<<c)-1).toString(32),a>>=c,n-=c,$t=1<<32-jt(t)+n|l<<n|a,Ft=u+e}else $t=1<<u|l<<n|a,Ft=e}function Ru(e){e.return!==null&&(dl(e,1),Ff(e,1,0))}function Ac(e){for(;e===Uu;)Uu=Ra[--Ha],Ra[Ha]=null,An=Ra[--Ha],Ra[Ha]=null;for(;e===El;)El=Ut[--Rt],Ut[Rt]=null,Ft=Ut[--Rt],Ut[Rt]=null,$t=Ut[--Rt],Ut[Rt]=null}function Wf(e,t){Ut[Rt++]=$t,Ut[Rt++]=Ft,Ut[Rt++]=El,$t=t.id,Ft=t.overflow,El=e}var Ie=null,Me=null,se=!1,_l=null,Ht=!1,Oc=Error(o(519));function Al(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw On(wt(t,e)),Oc}function If(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[lt]=e,t[xt]=a,l){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(l=0;l<Wn.length;l++)ie(Wn[l],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),ff(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),df(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||g0(t.textContent,l)?(a.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),a.onScroll!=null&&ie("scroll",t),a.onScrollEnd!=null&&ie("scrollend",t),a.onClick!=null&&(t.onclick=kt),t=!0):t=!1,t||Al(e,!0)}function Hu(e){for(Ie=e.return;Ie;)switch(Ie.tag){case 5:case 31:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:Ie=Ie.return}}function Ba(e){if(e!==Ie)return!1;if(!se)return Hu(e),se=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||ur(e.type,e.memoizedProps)),l=!l),l&&Me&&Al(e),Hu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Me=Y0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Me=Y0(e)}else t===27?(t=Me,Vl(e.type)?(e=xr,xr=null,Me=e):Me=t):Me=Ie?qt(e.stateNode.nextSibling):null;return!0}function aa(){Me=Ie=null,se=!1}function Cc(){var e=_l;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),_l=null),e}function On(e){_l===null?_l=[e]:_l.push(e)}var Dc=Kt(null),na=null,ml=null;function Ol(e,t,l){De(Dc,t._currentValue),t._currentValue=l}function xl(e){e._currentValue=Dc.current,tt(Dc)}function Bu(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Mc(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var c=n.child;u=u.firstContext;e:for(;u!==null;){var i=u;u=n;for(var f=0;f<t.length;f++)if(i.context===t[f]){u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Bu(u.return,l,e),a||(c=null);break e}u=i.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(o(341));c.lanes|=l,u=c.alternate,u!==null&&(u.lanes|=l),Bu(c,l,e),c=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=l,c=n.alternate,c!==null&&(c.lanes|=l),Bu(n.return,l,e),c=n.child,c=c!==null?c.sibling:null):c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function ua(e,t,l,a){e=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var i=n.type;Tt(n.pendingProps.value,c.value)||(e!==null?e.push(i):e=[i])}}else if(n===fu.current){if(c=n.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(rn):e=[rn])}n=n.return}return e!==null&&Mc(t,e,l,a),t.flags|=262144,e!==null}function qu(e){for(e=e.firstContext;e!==null;){if(!Tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){na=e,ml=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return Pf(na,e)}function Yu(e,t){return na===null&&sa(e),Pf(e,t)}function Pf(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},ml===null){if(e===null)throw Error(o(308));ml=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ml=ml.next=t;return l}var Gh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Xh=r.unstable_scheduleCallback,Vh=r.unstable_NormalPriority,Ze={$$typeof:Ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wc(){return{controller:new Gh,data:new Map,refCount:0}}function Cn(e){e.refCount--,e.refCount===0&&Xh(Vh,function(){e.controller.abort()})}function eo(e,t){if((e.pendingLanes&4194048)!==0){var l=e.transitionTypes;for(l===null&&(l=e.transitionTypes=[]),e=0;e<t.length;e++){var a=t[e];l.indexOf(a)===-1&&l.push(a)}}}var Dn=null;function Zh(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Mn=null,Uc=0,ca=0,qa=null;function Kh(e,t){if(Mn===null){var l=Mn=[];Uc=0,ca=Fi(),qa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Uc++,t.then(to,to),t}function to(){if(--Uc===0&&(Dn=null,Mn!==null)){qa!==null&&(qa.status="fulfilled");var e=Mn;Mn=null,ca=0,qa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Jh(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var lo=q.S;q.S=function(e,t){if($d=gt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Kh(e,t),Dn!==null)for(var l=ln;l!==null;)eo(l,Dn),l=l.next;if(l=e.types,l!==null){for(var a=ln;a!==null;)eo(a,l),a=a.next;if(ca!==0){a=Dn,a===null&&(a=Dn=[]);for(var n=0;n<l.length;n++){var u=l[n];a.indexOf(u)===-1&&a.push(u)}}}lo!==null&&lo(e,t)};var ia=Kt(null);function Rc(){var e=ia.current;return e!==null?e:Ae.pooledCache}function Lu(e,t){t===null?De(ia,ia.current):De(ia,t.pool)}function ao(){var e=Rc();return e===null?null:{parent:Ze._currentValue,pool:e}}var Ya=Error(o(460)),Hc=Error(o(474)),Qu=Error(o(542)),Gu={then:function(){}};function no(e){return e=e.status,e==="fulfilled"||e==="rejected"}function uo(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(kt,kt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,co(e),e===void 0&&!("reason"in t)?Error(o(600)):e;default:if(typeof t.status=="string")t.then(kt,kt);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,co(e),e}throw fa=t,Ya}}function ra(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(fa=l,Ya):l}}var fa=null;function so(){if(fa===null)throw Error(o(459));var e=fa;return fa=null,e}function co(e){if(e===Ya||e===Qu)throw Error(o(483))}var La=null,wn=0;function Xu(e){var t=wn;return wn+=1,La===null&&(La=[]),uo(La,e,t)}function Cl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vu(e,t){throw t.$$typeof===le?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function io(e){function t(h,d){if(e){var y=h.deletions;y===null?(h.deletions=[d],h.flags|=16):y.push(d)}}function l(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function a(h){for(var d=new Map;h!==null;)h.key===null?d.set(h.index,h):d.set(h.key,h),h=h.sibling;return d}function n(h,d){return h=ol(h,d),h.index=0,h.sibling=null,h}function u(h,d,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<d?(h.flags|=2,d):y):(h.flags|=134217730,d)):(h.flags|=1048576,d)}function c(h){return e&&h.alternate===null&&(h.flags|=134217730),h}function i(h,d,y,S){return d===null||d.tag!==6?(d=Ec(y,h.mode,S),d.return=h,d):(d=n(d,y),d.return=h,d)}function f(h,d,y,S){var U=y.type;return U===Qe?(h=g(h,d,y.props.children,S,y.key),Cl(h,y),h):d!==null&&(d.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===H&&ra(U)===d.type)?(d=n(d,y.props),Cl(d,y),d.return=h,d):(d=wu(y.type,y.key,y.props,null,h.mode,S),Cl(d,y),d.return=h,d)}function b(h,d,y,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=_c(y,h.mode,S),d.return=h,d):(d=n(d,y.children||[]),d.return=h,d)}function g(h,d,y,S,U){return d===null||d.tag!==7?(d=la(y,h.mode,S,U),d.return=h,d):(d=n(d,y),d.return=h,d)}function T(h,d,y){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Ec(""+d,h.mode,y),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case R:return y=wu(d.type,d.key,d.props,null,h.mode,y),Cl(y,d),y.return=h,y;case He:return d=_c(d,h.mode,y),d.return=h,d;case H:return d=ra(d),T(h,d,y)}if(be(d)||X(d))return d=la(d,h.mode,y,null),d.return=h,d;if(typeof d.then=="function")return T(h,Xu(d),y);if(d.$$typeof===Ee)return T(h,Yu(h,d),y);Vu(h,d)}return null}function x(h,d,y,S){var U=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return U!==null?null:i(h,d,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case R:return y.key===U?f(h,d,y,S):null;case He:return y.key===U?b(h,d,y,S):null;case H:return y=ra(y),x(h,d,y,S)}if(be(y)||X(y))return U!==null?null:g(h,d,y,S,null);if(typeof y.then=="function")return x(h,d,Xu(y),S);if(y.$$typeof===Ee)return x(h,d,Yu(h,y),S);Vu(h,y)}return null}function p(h,d,y,S,U){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return h=h.get(y)||null,i(d,h,""+S,U);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case R:return h=h.get(S.key===null?y:S.key)||null,f(d,h,S,U);case He:return h=h.get(S.key===null?y:S.key)||null,b(d,h,S,U);case H:return S=ra(S),p(h,d,y,S,U)}if(be(S)||X(S))return h=h.get(y)||null,g(d,h,S,U,null);if(typeof S.then=="function")return p(h,d,y,Xu(S),U);if(S.$$typeof===Ee)return p(h,d,y,Yu(d,S),U);Vu(d,S)}return null}function D(h,d,y,S){for(var U=null,oe=null,L=d,J=d=0,ke=null;L!==null&&J<y.length;J++){L.index>J?(ke=L,L=null):ke=L.sibling;var de=x(h,L,y[J],S);if(de===null){L===null&&(L=ke);break}e&&L&&de.alternate===null&&t(h,L),d=u(de,d,J),oe===null?U=de:oe.sibling=de,oe=de,L=ke}if(J===y.length)return l(h,L),se&&dl(h,J),U;if(L===null){for(;J<y.length;J++)L=T(h,y[J],S),L!==null&&(d=u(L,d,J),oe===null?U=L:oe.sibling=L,oe=L);return se&&dl(h,J),U}for(L=a(L);J<y.length;J++)ke=p(L,h,J,y[J],S),ke!==null&&(e&&(de=ke.alternate,de!==null&&L.delete(de.key===null?J:de.key)),d=u(ke,d,J),oe===null?U=ke:oe.sibling=ke,oe=ke);return e&&L.forEach(function($l){return t(h,$l)}),se&&dl(h,J),U}function B(h,d,y,S){if(y==null)throw Error(o(151));for(var U=null,oe=null,L=d,J=d=0,ke=null,de=y.next();L!==null&&!de.done;J++,de=y.next()){L.index>J?(ke=L,L=null):ke=L.sibling;var $l=x(h,L,de.value,S);if($l===null){L===null&&(L=ke);break}e&&L&&$l.alternate===null&&t(h,L),d=u($l,d,J),oe===null?U=$l:oe.sibling=$l,oe=$l,L=ke}if(de.done)return l(h,L),se&&dl(h,J),U;if(L===null){for(;!de.done;J++,de=y.next())de=T(h,de.value,S),de!==null&&(d=u(de,d,J),oe===null?U=de:oe.sibling=de,oe=de);return se&&dl(h,J),U}for(L=a(L);!de.done;J++,de=y.next())de=p(L,h,J,de.value,S),de!==null&&(e&&(ke=de.alternate,ke!==null&&L.delete(ke.key===null?J:ke.key)),d=u(de,d,J),oe===null?U=de:oe.sibling=de,oe=de);return e&&L.forEach(function(_b){return t(h,_b)}),se&&dl(h,J),U}function ue(h,d,y,S){if(typeof y=="object"&&y!==null&&y.type===Qe&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case R:e:{for(var U=y.key;d!==null;){if(d.key===U){if(U=y.type,U===Qe){if(d.tag===7){l(h,d.sibling),S=n(d,y.props.children),Cl(S,y),S.return=h,h=S;break e}}else if(d.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===H&&ra(U)===d.type){l(h,d.sibling),S=n(d,y.props),Cl(S,y),S.return=h,h=S;break e}l(h,d);break}else t(h,d);d=d.sibling}y.type===Qe?(S=la(y.props.children,h.mode,S,y.key),Cl(S,y),S.return=h,h=S):(S=wu(y.type,y.key,y.props,null,h.mode,S),Cl(S,y),S.return=h,h=S)}return c(h);case He:e:{for(U=y.key;d!==null;){if(d.key===U)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){l(h,d.sibling),S=n(d,y.children||[]),S.return=h,h=S;break e}else{l(h,d);break}else t(h,d);d=d.sibling}S=_c(y,h.mode,S),S.return=h,h=S}return c(h);case H:return y=ra(y),ue(h,d,y,S)}if(be(y))return D(h,d,y,S);if(X(y)){if(U=X(y),typeof U!="function")throw Error(o(150));return y=U.call(y),B(h,d,y,S)}if(typeof y.then=="function")return ue(h,d,Xu(y),S);if(y.$$typeof===Ee)return ue(h,d,Yu(h,y),S);Vu(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,d!==null&&d.tag===6?(l(h,d.sibling),S=n(d,y),S.return=h,h=S):(l(h,d),S=Ec(y,h.mode,S),S.return=h,h=S),c(h)):l(h,d)}return function(h,d,y,S){try{wn=0;var U=ue(h,d,y,S);return La=null,U}catch(L){if(L===Ya||L===Qu)throw L;var oe=ht(29,L,null,h.mode);return oe.lanes=S,oe.return=h,oe}finally{}}}var oa=io(!0),ro=io(!1),Dl=!1;function Bc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ml(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ve&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Mu(e),Kf(e,null,l),t}return Du(e,a,t,l),Mu(e)}function Un(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,$r(e,l)}}function Yc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=c:u=u.next=c,l=l.next}while(l!==null);u===null?n=u=t:u=u.next=t}else n=u=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Lc=!1;function Rn(){if(Lc){var e=qa;if(e!==null)throw e}}function Hn(e,t,l,a){Lc=!1;var n=e.updateQueue;Dl=!1;var u=n.firstBaseUpdate,c=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var f=i,b=f.next;f.next=null,c===null?u=b:c.next=b,c=f;var g=e.alternate;g!==null&&(g=g.updateQueue,i=g.lastBaseUpdate,i!==c&&(i===null?g.firstBaseUpdate=b:i.next=b,g.lastBaseUpdate=f))}if(u!==null){var T=n.baseState;c=0,g=b=f=null,i=u;do{var x=i.lane&-536870913,p=x!==i.lane;if(p?(fe&x)===x:(a&x)===x){x!==0&&x===ca&&(Lc=!0),g!==null&&(g=g.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var D=e,B=i;x=t;var ue=l;switch(B.tag){case 1:if(D=B.payload,typeof D=="function"){T=D.call(ue,T,x);break e}T=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=B.payload,x=typeof D=="function"?D.call(ue,T,x):D,x==null)break e;T=K({},T,x);break e;case 2:Dl=!0}}x=i.callback,x!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[x]:p.push(x))}else p={lane:x,tag:i.tag,payload:i.payload,callback:i.callback,next:null},g===null?(b=g=p,f=T):g=g.next=p,c|=x;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;p=i,i=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);g===null&&(f=T),n.baseState=f,n.firstBaseUpdate=b,n.lastBaseUpdate=g,u===null&&(n.shared.lanes=0),Ll|=c,e.lanes=c,e.memoizedState=T}}function fo(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function oo(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)fo(l[e],t)}var Ul=Kt(null),Zu=Kt(0);function mo(e,t){e=pl,De(Zu,e),De(Ul,t),pl=e|t.baseLanes}function Qc(){De(Zu,pl),De(Ul,Ul.current)}function Gc(){pl=Zu.current,tt(Ul),tt(Zu)}var nt=Kt(null),rt=null;function Rl(e){var t=e.alternate;De(ut,ut.current&1),De(nt,e),rt===null&&(t===null||Ul.current!==null||t.memoizedState!==null)&&(rt=e)}function Xc(e){De(ut,ut.current),De(nt,e),rt===null&&(rt=e)}function xo(e){e.tag===22?(De(ut,ut.current),De(nt,e),rt===null&&(rt=e)):Hl()}function Hl(){De(ut,ut.current),De(nt,nt.current)}function zt(e){tt(nt),rt===e&&(rt=null),tt(ut)}var ut=Kt(0);function Bn(e,t){De(nt,nt.current),De(ut,t)}function Vc(e){tt(ut),tt(nt),rt===e&&(rt=null)}function Ku(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||dr(l)||mr(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hl=0,ne=null,ze=null,Ke=null,Ju=!1,Qa=!1,da=!1,ku=0,qn=0,Ga=null,kh=0;function Ye(){throw Error(o(321))}function Zc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Tt(e[l],t[l]))return!1;return!0}function Kc(e,t,l,a,n,u){return hl=u,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,q.H=e===null||e.memoizedState===null?Wo:Io,da=!1,u=l(a,n),da=!1,Qa&&(u=bo(t,l,a,n)),ho(e),u}function ho(e){q.H=ts;var t=ze!==null&&ze.next!==null;if(hl=0,Ke=ze=ne=null,Ju=!1,qn=0,Ga=null,t)throw Error(o(300));e===null||Je||(e=e.dependencies,e!==null&&qu(e)&&(Je=!0))}function bo(e,t,l,a){ne=e;var n=0;do{if(Qa&&(Ga=null),qn=0,Qa=!1,25<=n)throw Error(o(301));if(n+=1,Ke=ze=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}q.H=l1,u=t(l,a)}while(Qa);return u}function $h(){var e=q.H,t=e.useState()[0];return t=typeof t.then=="function"?Yn(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(ne.flags|=1024),t}function Jc(){var e=ku!==0;return ku=0,e}function kc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function $c(e){if(Ju){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ju=!1}hl=0,Ke=ze=ne=null,Qa=!1,qn=ku=0,Ga=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?ne.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Xe(){if(ze===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Ke===null?ne.memoizedState:Ke.next;if(t!==null)Ke=t,ze=e;else{if(e===null)throw ne.alternate===null?Error(o(467)):Error(o(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ke===null?ne.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function $u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yn(e){var t=qn;return qn+=1,Ga===null&&(Ga=[]),e=uo(Ga,e,t),t=ne,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,q.H=t===null||t.memoizedState===null?Wo:Io),e}function Fu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yn(e);if(e.$$typeof===_)return;if(e.$$typeof===Ee)return at(e)}throw Error(o(438,String(e)))}function Fc(e){var t=null,l=ne.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=ne.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=$u(),ne.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Ce;return t.index++,l}function bl(e,t){return typeof t=="function"?t(e):t}function Wu(e){var t=Xe();return Wc(t,ze,e)}function Wc(e,t,l){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=l;var n=e.baseQueue,u=a.pending;if(u!==null){if(n!==null){var c=n.next;n.next=u.next,u.next=c}t.baseQueue=n=u,a.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{t=n.next;var i=c=null,f=null,b=t,g=!1;do{var T=b.lane&-536870913;if(T!==b.lane?(fe&T)===T:(hl&T)===T){var x=b.revertLane;if(x===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),T===ca&&(g=!0);else if((hl&x)===x){b=b.next,x===ca&&(g=!0);continue}else T={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},f===null?(i=f=T,c=u):f=f.next=T,ne.lanes|=x,Ll|=x;T=b.action,da&&l(u,T),u=b.hasEagerState?b.eagerState:l(u,T)}else x={lane:T,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},f===null?(i=f=x,c=u):f=f.next=x,ne.lanes|=T,Ll|=T;b=b.next}while(b!==null&&b!==t);if(f===null?c=u:f.next=i,!Tt(u,e.memoizedState)&&(Je=!0,g&&(l=qa,l!==null)))throw l;e.memoizedState=u,e.baseState=c,e.baseQueue=f,a.lastRenderedState=u}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ic(e){var t=Xe(),l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,u=t.memoizedState;if(n!==null){l.pending=null;var c=n=n.next;do u=e(u,c.action),c=c.next;while(c!==n);Tt(u,t.memoizedState)||(Je=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),l.lastRenderedState=u}return[u,a]}function vo(e,t,l){var a=ne,n=Xe(),u=se;if(u){if(l===void 0)throw Error(o(407));l=l()}else l=t();var c=!Tt((ze||n).memoizedState,l);if(c&&(n.memoizedState=l,Je=!0),n=n.queue,ti(go.bind(null,a,n,e),[e]),e=n.getSnapshot!==t||c||Ke!==null&&(Ke.memoizedState.tag&1)!==0,Xa(e?9:8,{destroy:void 0},po.bind(null,a,n,l,t),null),e){if(a.flags|=2048,Ae===null)throw Error(o(349));u||(hl&127)!==0||yo(a,t,l)}return l}function yo(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ne.updateQueue,t===null?(t=$u(),ne.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function po(e,t,l,a){t.value=l,t.getSnapshot=a,No(t)&&jo(e)}function go(e,t,l){return l(function(){No(t)&&jo(e)})}function No(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Tt(e,l)}catch{return!0}}function jo(e){var t=ta(e,2);t!==null&&pt(t,e,2)}function Pc(e){var t=ot();if(typeof e=="function"){var l=e;if(e=l(),da){Sl(!0);try{l()}finally{Sl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:e},t}function So(e,t,l,a){return e.baseState=l,Wc(e,ze,typeof a=="function"?a:bl)}function Fh(e,t,l,a,n){if(es(e))throw Error(o(485));if(e=t.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){u.listeners.push(c)}};q.T!==null?l(!0):u.isTransition=!1,a(u),l=t.pending,l===null?(u.next=t.pending=u,To(t,u)):(u.next=l.next,t.pending=l.next=u)}}function To(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var u=q.T,c={};c.types=u!==null?u.types:null,q.T=c;try{var i=l(n,a),f=q.S;f!==null&&f(c,i),zo(e,t,i)}catch(b){ei(e,t,b)}finally{u!==null&&c.types!==null&&(u.types=c.types),q.T=u}}else try{u=l(n,a),zo(e,t,u)}catch(b){ei(e,t,b)}}function zo(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Eo(e,t,a)},function(a){return ei(e,t,a)}):Eo(e,t,l)}function Eo(e,t,l){t.status="fulfilled",t.value=l,_o(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,To(e,l)))}function ei(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,_o(t),t=t.next;while(t!==a)}e.action=null}function _o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ao(e,t){return t}function Oo(e,t){if(se){var l=Ae.formState;if(l!==null){e:{var a=ne;if(se){if(Me){t:{for(var n=Me,u=Ht;n.nodeType!==8;){if(!u){n=null;break t}if(n=qt(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){Me=qt(n.nextSibling),a=n.data==="F!";break e}}Al(a)}a=!1}a&&(t=l[0])}}return l=ot(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},l.queue=a,l=ko.bind(null,ne,a),a.dispatch=l,a=Pc(!1),u=si.bind(null,ne,!1,a.queue),a=ot(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Fh.bind(null,ne,n,u,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Co(e){var t=Xe();return Do(t,ze,e)}function Do(e,t,l){if(t=Wc(e,t,Ao)[0],e=Wu(bl)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Yn(t)}catch(c){throw c===Ya?Qu:c}else a=t;t=Xe();var n=t.queue,u=n.dispatch;return l!==t.memoizedState&&(ne.flags|=2048,Xa(9,{destroy:void 0},Wh.bind(null,n,l),null)),[a,u,e]}function Wh(e,t){e.action=t}function Mo(e){var t=Xe(),l=ze;if(l!==null)return Do(t,l,e);Xe(),t=t.memoizedState,l=Xe();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Xa(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=ne.updateQueue,t===null&&(t=$u(),ne.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function wo(){return Xe().memoizedState}function Iu(e,t,l,a){var n=ot();ne.flags|=e,n.memoizedState=Xa(1|t,{destroy:void 0},l,a===void 0?null:a)}function Pu(e,t,l,a){var n=Xe();a=a===void 0?null:a;var u=n.memoizedState.inst;ze!==null&&a!==null&&Zc(a,ze.memoizedState.deps)?n.memoizedState=Xa(t,u,l,a):(ne.flags|=e,n.memoizedState=Xa(1|t,u,l,a))}function Uo(e,t){Iu(8390656,8,e,t)}function ti(e,t){Pu(2048,8,e,t)}function Ih(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=$u(),ne.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Ro(e){var t=Xe().memoizedState;return Ih({ref:t,nextImpl:e}),function(){if((ve&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Ho(e,t){return Pu(4,2,e,t)}function Bo(e,t){return Pu(4,4,e,t)}function qo(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yo(e,t,l){l=l!=null?l.concat([e]):null,Pu(4,4,qo.bind(null,t,e),l)}function li(){}function Lo(e,t){var l=Xe();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Zc(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Qo(e,t){var l=Xe();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Zc(t,a[1]))return a[0];if(a=e(),da){Sl(!0);try{e()}finally{Sl(!1)}}return l.memoizedState=[a,t],a}function ai(e,t,l){return l===void 0||(hl&1073741824)!==0&&(fe&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Wd(),ne.lanes|=e,Ll|=e,l)}function Go(e,t,l,a){return Tt(l,t)?l:Ul.current!==null?(e=ai(e,l,a),Tt(e,t)||(Je=!0),e):(hl&106)===0||(hl&1073741824)!==0&&(fe&261930)===0?(Je=!0,e.memoizedState=l):(e=Wd(),ne.lanes|=e,Ll|=e,t)}function Xo(e,t,l,a,n){var u=I.p;I.p=u!==0&&8>u?u:8;var c=q.T,i={};i.types=c!==null?c.types:null,q.T=i,si(e,!1,t,l);try{var f=n(),b=q.S;if(b!==null&&b(i,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var g=Jh(f,a);Ln(e,t,g,Ot(e))}else Ln(e,t,a,Ot(e))}catch(T){Ln(e,t,{then:function(){},status:"rejected",reason:T},Ot())}finally{I.p=u,c!==null&&i.types!==null&&(c.types=i.types),q.T=c}}function Ph(){}function ni(e,t,l,a){if(e.tag!==5)throw Error(o(476));var n=Vo(e).queue;Xo(e,n,t,ul,l===null?Ph:function(){return Zo(e),l(a)})}function Vo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ul,baseState:ul,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:ul},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Zo(e){var t=Vo(e);t.next===null&&(t=e.alternate.memoizedState),Ln(e,t.next.queue,{},Ot())}function ui(){return at(rn)}function Ko(){return Xe().memoizedState}function Jo(){return Xe().memoizedState}function e1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Ot();e=Ml(l);var a=wl(t,e,l);a!==null&&(pt(a,t,l),Un(a,t,l)),t={cache:wc()},e.payload=t;return}t=t.return}}function t1(e,t,l){var a=Ot();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},es(e)?$o(t,l):(l=Tc(e,t,l,a),l!==null&&(pt(l,e,a),Fo(l,t,a)))}function ko(e,t,l){var a=Ot();Ln(e,t,l,a)}function Ln(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(es(e))$o(t,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var c=t.lastRenderedState,i=u(c,l);if(n.hasEagerState=!0,n.eagerState=i,Tt(i,c))return Du(e,t,n,0),Ae===null&&Cu(),!1}catch{}finally{}if(l=Tc(e,t,n,a),l!==null)return pt(l,e,a),Fo(l,t,a),!0}return!1}function si(e,t,l,a){if(a={lane:2,revertLane:Fi(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},es(e)){if(t)throw Error(o(479))}else t=Tc(e,l,a,2),t!==null&&pt(t,e,2)}function es(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function $o(e,t){Qa=Ju=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Fo(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,$r(e,l)}}var ts={readContext:at,use:Fu,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye,useEffectEvent:Ye},Wo={readContext:at,use:Fu,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Uo,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Iu(4194308,4,qo.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Iu(4194308,4,e,t)},useInsertionEffect:function(e,t){Iu(4,2,e,t)},useMemo:function(e,t){var l=ot();t=t===void 0?null:t;var a=e();if(da){Sl(!0);try{e()}finally{Sl(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=ot();if(l!==void 0){var n=l(t);if(da){Sl(!0);try{l(t)}finally{Sl(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=t1.bind(null,ne,e),[a.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=Pc(e);var t=e.queue,l=ko.bind(null,ne,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:li,useDeferredValue:function(e,t){var l=ot();return ai(l,e,t)},useTransition:function(){var e=Pc(!1);return e=Xo.bind(null,ne,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=ne,n=ot();if(se){if(l===void 0)throw Error(o(407));l=l()}else{if(l=t(),Ae===null)throw Error(o(349));(fe&127)!==0||yo(a,t,l)}n.memoizedState=l;var u={value:l,getSnapshot:t};return n.queue=u,Uo(go.bind(null,a,u,e),[e]),a.flags|=2048,Xa(9,{destroy:void 0},po.bind(null,a,u,l,t),null),l},useId:function(){var e=ot(),t=Ae.identifierPrefix;if(se){var l=Ft,a=$t;l=(a&~(1<<32-jt(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=ku++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=kh++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ui,useFormState:Oo,useActionState:Oo,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=si.bind(null,ne,!0,l),l.dispatch=t,[e,t]},useMemoCache:Fc,useCacheRefresh:function(){return ot().memoizedState=e1.bind(null,ne)},useEffectEvent:function(e){var t=ot(),l={impl:e};return t.memoizedState=l,function(){if((ve&2)!==0)throw Error(o(440));return l.impl.apply(void 0,arguments)}}},Io={readContext:at,use:Fu,useCallback:Lo,useContext:at,useEffect:ti,useImperativeHandle:Yo,useInsertionEffect:Ho,useLayoutEffect:Bo,useMemo:Qo,useReducer:Wu,useRef:wo,useState:function(){return Wu(bl)},useDebugValue:li,useDeferredValue:function(e,t){var l=Xe();return Go(l,ze.memoizedState,e,t)},useTransition:function(){var e=Wu(bl)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:Yn(e),t]},useSyncExternalStore:vo,useId:Ko,useHostTransitionStatus:ui,useFormState:Co,useActionState:Co,useOptimistic:function(e,t){var l=Xe();return So(l,ze,e,t)},useMemoCache:Fc,useCacheRefresh:Jo,useEffectEvent:Ro},l1={readContext:at,use:Fu,useCallback:Lo,useContext:at,useEffect:ti,useImperativeHandle:Yo,useInsertionEffect:Ho,useLayoutEffect:Bo,useMemo:Qo,useReducer:Ic,useRef:wo,useState:function(){return Ic(bl)},useDebugValue:li,useDeferredValue:function(e,t){var l=Xe();return ze===null?ai(l,e,t):Go(l,ze.memoizedState,e,t)},useTransition:function(){var e=Ic(bl)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:Yn(e),t]},useSyncExternalStore:vo,useId:Ko,useHostTransitionStatus:ui,useFormState:Mo,useActionState:Mo,useOptimistic:function(e,t){var l=Xe();return ze!==null?So(l,ze,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Fc,useCacheRefresh:Jo,useEffectEvent:Ro};function ci(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:K({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var ii={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=Ot(),n=Ml(a);n.payload=t,l!=null&&(n.callback=l),t=wl(e,n,a),t!==null&&(pt(t,e,a),Un(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=Ot(),n=Ml(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=wl(e,n,a),t!==null&&(pt(t,e,a),Un(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Ot(),a=Ml(l);a.tag=2,t!=null&&(a.callback=t),t=wl(e,a,l),t!==null&&(pt(t,e,l),Un(t,e,l))}};function Po(e,t,l,a,n,u,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,c):t.prototype&&t.prototype.isPureReactComponent?!En(l,a)||!En(n,u):!0}function ed(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&ii.enqueueReplaceState(t,t.state,null)}function ma(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=K({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function td(e){Ou(e)}function ld(e){console.error(e)}function ad(e){Ou(e)}function ls(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function nd(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ri(e,t,l){return l=Ml(l),l.tag=3,l.payload={element:null},l.callback=function(){ls(e,t)},l}function ud(e){return e=Ml(e),e.tag=3,e}function sd(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;e.payload=function(){return n(u)},e.callback=function(){nd(t,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){nd(t,l,a),typeof n!="function"&&(Ql===null?Ql=new Set([this]):Ql.add(this));var i=a.stack;this.componentDidCatch(a.value,{componentStack:i!==null?i:""})})}function a1(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ua(t,l,n,!0),l=nt.current,l!==null){switch(l.tag){case 31:case 13:case 19:return rt===null?Ss():l.alternate===null&&Le===0&&(Le=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Gu?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Ji(e,a,n)),!1;case 22:return l.flags|=65536,a===Gu?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Ji(e,a,n)),!1}throw Error(o(435,l.tag))}return Ji(e,a,n),Ss(),!1}if(se)return t=nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Oc&&(e=Error(o(422),{cause:a}),On(wt(e,l)))):(a!==Oc&&(t=Error(o(423),{cause:a}),On(wt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=wt(a,l),n=ri(e.stateNode,a,n),Yc(e,n),Le!==4&&(Le=2)),!1;var u=Error(o(520),{cause:a});if(u=wt(u,l),kn===null?kn=[u]:kn.push(u),Le!==4&&(Le=2),t===null)return!0;a=wt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=ri(l.stateNode,a,e),Yc(l,e),!1;case 1:if(t=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ql===null||!Ql.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=ud(n),sd(n,e,l,a),Yc(l,n),!1;break;case 22:if(l.memoizedState!==null)return l.flags|=65536,!1}l=l.return}while(l!==null);return!1}var fi=Error(o(461)),Je=!1;function $e(e,t,l,a){t.child=e===null?ro(t,null,l,a):oa(t,e.child,l,a)}function cd(e,t,l,a,n){l=l.render;var u=t.ref;if("ref"in a){var c={};for(var i in a)i!=="ref"&&(c[i]=a[i])}else c=a;return sa(t),a=Kc(e,t,l,c,u,n),i=Jc(),e!==null&&!Je?(kc(e,t,n),vl(e,t,n)):(se&&i&&Ru(t),t.flags|=1,$e(e,t,a,n),t.child)}function id(e,t,l,a,n){if(e===null){var u=l.type;return typeof u=="function"&&!zc(u)&&u.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=u,rd(e,t,u,a,n)):(e=wu(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!yi(e,n)){var c=u.memoizedProps;if(l=l.compare,l=l!==null?l:En,l(c,a)&&e.ref===t.ref)return vl(e,t,n)}return t.flags|=1,e=ol(u,a),e.ref=t.ref,e.return=t,t.child=e}function rd(e,t,l,a,n){if(e!==null){var u=e.memoizedProps;if(En(u,a)&&e.ref===t.ref)if(Je=!1,t.pendingProps=a=u,yi(e,n))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,vl(e,t,n)}return oi(e,t,l,a,n)}function fd(e,t,l,a){var n=a.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,t.child=null;return od(e,t,u,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Lu(t,u!==null?u.cachePool:null),u!==null?mo(t,u):Qc(),xo(t);else return a=t.lanes=536870912,od(e,t,u!==null?u.baseLanes|l:l,l,a)}else u!==null?(Lu(t,u.cachePool),mo(t,u),Hl(),t.memoizedState=null):(e!==null&&Lu(t,null),Qc(),Hl());return $e(e,t,n,l),t.child}function Qn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function od(e,t,l,a,n){var u=Rc();return u=u===null?null:{parent:Ze._currentValue,pool:u},t.memoizedState={baseLanes:l,cachePool:u},e!==null&&Lu(t,null),Qc(),xo(t),e!==null&&ua(e,t,a,!0),t.childLanes=n,null}function as(e,t){return t=ns({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function dd(e,t,l){return oa(t,e.child,null,l),e=as(t,t.pendingProps),e.flags|=2,zt(t),t.memoizedState=null,e}function n1(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(se){if(a.mode==="hidden")return e=as(t,a),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Qn(null,e);if(Xc(t),(e=Me)?(e=q0(e,Ht),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:El!==null?{id:$t,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},l=kf(e),l.return=t,t.child=l,Ie=t,Me=null)):e=null,e===null)throw Al(t);return t.lanes=536870912,null}return as(t,a)}var u=e.memoizedState;if(u!==null){var c=u.dehydrated;if(Xc(t),n)if(t.flags&256)t.flags&=-257,t=dd(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Je||ua(e,t,l,!1),n=(l&e.childLanes)!==0,Je||n){if(Ul.current===null){if(a=Ae,a!==null&&(c=Fr(a,l),c!==0&&c!==u.retryLane))throw u.retryLane=c,ta(e,c),pt(a,e,c),fi;Ss()}t=dd(e,t,l)}else e=u.treeContext,Me=qt(c.nextSibling),Ie=t,se=!0,_l=null,Ht=!1,e!==null&&Wf(t,e),t=as(t,a),t.flags|=134221824;return t}return e=ol(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Va(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function oi(e,t,l,a,n){return sa(t),l=Kc(e,t,l,a,void 0,n),a=Jc(),e!==null&&!Je?(kc(e,t,n),vl(e,t,n)):(se&&a&&Ru(t),t.flags|=1,$e(e,t,l,n),t.child)}function md(e,t,l,a,n,u){return sa(t),t.updateQueue=null,l=bo(t,a,l,n),ho(e),a=Jc(),e!==null&&!Je?(kc(e,t,u),vl(e,t,u)):(se&&a&&Ru(t),t.flags|=1,$e(e,t,l,u),t.child)}function xd(e,t,l,a,n){if(sa(t),t.stateNode===null){var u=Ua,c=l.contextType;typeof c=="object"&&c!==null&&(u=at(c)),u=new l(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=ii,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},Bc(t),c=l.contextType,u.context=typeof c=="object"&&c!==null?at(c):Ua,u.state=t.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(ci(t,l,c,a),u.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(c=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),c!==u.state&&ii.enqueueReplaceState(u,u.state,null),Hn(t,a,u,n),Rn(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var i=t.memoizedProps,f=ma(l,i);u.props=f;var b=u.context,g=l.contextType;c=Ua,typeof g=="object"&&g!==null&&(c=at(g));var T=l.getDerivedStateFromProps;g=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function",i=t.pendingProps!==i,g||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i||b!==c)&&ed(t,u,a,c),Dl=!1;var x=t.memoizedState;u.state=x,Hn(t,a,u,n),Rn(),b=t.memoizedState,i||x!==b||Dl?(typeof T=="function"&&(ci(t,l,T,a),b=t.memoizedState),(f=Dl||Po(t,l,f,a,x,b,c))?(g||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=b),u.props=a,u.state=b,u.context=c,a=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,qc(e,t),c=t.memoizedProps,g=ma(l,c),u.props=g,T=t.pendingProps,x=u.context,b=l.contextType,f=Ua,typeof b=="object"&&b!==null&&(f=at(b)),i=l.getDerivedStateFromProps,(b=typeof i=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c!==T||x!==f)&&ed(t,u,a,f),Dl=!1,x=t.memoizedState,u.state=x,Hn(t,a,u,n),Rn();var p=t.memoizedState;c!==T||x!==p||Dl||e!==null&&e.dependencies!==null&&qu(e.dependencies)?(typeof i=="function"&&(ci(t,l,i,a),p=t.memoizedState),(g=Dl||Po(t,l,g,a,x,p,f)||e!==null&&e.dependencies!==null&&qu(e.dependencies))?(b||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,p,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,p,f)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=p),u.props=a,u.state=p,u.context=f,a=g):(typeof u.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,Va(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=oa(t,e.child,null,n),t.child=oa(t,null,l,n)):$e(e,t,l,n),t.memoizedState=u.state,e=t.child):e=vl(e,t,n),e}function hd(e,t,l,a){return aa(),t.flags|=256,$e(e,t,l,a),t.child}var di={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mi(e){return{baseLanes:e,cachePool:ao()}}function xi(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=At),e}function bd(e,t,l){var a=t.pendingProps,n=!1,u=(t.flags&128)!==0,c;if((c=u)||(c=e!==null&&e.memoizedState===null?!1:(ut.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(n?Rl(t):Hl(),(e=Me)?(e=q0(e,Ht),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:El!==null?{id:$t,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},l=kf(e),l.return=t,t.child=l,Ie=t,Me=null)):e=null,e===null)throw Al(t);return mr(e)?t.lanes=32:t.lanes=536870912,null}return u=a.children,a=a.fallback,n?(Hl(),n=t.mode,u=ns({mode:"hidden",children:u},n),a=la(a,n,l,null),u.return=t,a.return=t,u.sibling=a,t.child=u,a=t.child,a.memoizedState=mi(l),a.childLanes=xi(e,c,l),t.memoizedState=di,Qn(null,a)):(Rl(t),hi(t,u))}var i=e.memoizedState;if(i!==null){var f=i.dehydrated;if(f!==null)return u1(e,t,u,c,a,f,i,l)}return n?(Hl(),n=a.fallback,u=t.mode,i=e.child,f=i.sibling,a=ol(i,{mode:"hidden",children:a.children}),a.subtreeFlags=i.subtreeFlags&1206910976,f!==null?n=ol(f,n):(n=la(n,u,l,null),n.flags|=2),n.return=t,a.return=t,a.sibling=n,t.child=a,Qn(null,a),a=t.child,n=e.child.memoizedState,n===null?n=mi(l):(u=n.cachePool,u!==null?(i=Ze._currentValue,u=u.parent!==i?{parent:i,pool:i}:u):u=ao(),n={baseLanes:n.baseLanes|l,cachePool:u}),a.memoizedState=n,a.childLanes=xi(e,c,l),t.memoizedState=di,Qn(e.child,a)):(Rl(t),l=e.child,e=l.sibling,l=ol(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=l,t.memoizedState=null,l)}function hi(e,t){return t=ns({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ns(e,t){return e=ht(22,e,null,t),e.lanes=0,e}function us(e,t,l){return oa(t,e.child,null,l),e=hi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function u1(e,t,l,a,n,u,c,i){if(l)return t.flags&256?(Rl(t),t.flags&=-257,us(e,t,i)):t.memoizedState!==null?(Hl(),t.child=e.child,t.flags|=128,null):(Hl(),u=n.fallback,c=t.mode,n=ns({mode:"visible",children:n.children},c),u=la(u,c,i,null),u.flags|=2,n.return=t,u.return=t,n.sibling=u,t.child=n,oa(t,e.child,null,i),n=t.child,n.memoizedState=mi(i),n.childLanes=xi(e,a,i),t.memoizedState=di,Qn(null,n));if(Rl(t),mr(u)){if(a=u.nextSibling&&u.nextSibling.dataset,a)var f=a.dgst;return a=f,a!==""&&(n=Error(o(419)),n.stack="",n.digest=a,On({value:n,source:null,stack:null})),us(e,t,i)}if(Je||ua(e,t,i,!1),a=(i&e.childLanes)!==0,Je||a){if(Ul.current!==null)return us(e,t,i);if(a=Ae,a!==null&&(n=Fr(a,i),n!==0&&n!==c.retryLane))throw c.retryLane=n,ta(e,n),pt(a,e,n),fi;return dr(u)||Ss(),us(e,t,i)}return dr(u)?(t.flags|=192,t.child=e.child,null):(e=c.treeContext,Me=qt(u.nextSibling),Ie=t,se=!0,_l=null,Ht=!1,e!==null&&Wf(t,e),t=hi(t,n.children),t.flags|=134221824,t)}function vd(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Bu(e.return,t,l)}function yd(e){for(var t=null;e!==null;){var l=e.alternate;l!==null&&Ku(l)===null&&(t=e),e=e.sibling}return t}function ss(e,t,l,a,n,u){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:u}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=l,c.tailMode=n,c.treeForkCount=u)}function bi(e){var t=e.child;for(e.child=null;t!==null;){var l=t.sibling;t.sibling=e.child,e.child=t,t=l}}function vi(e,t,l){var a=t.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var c=ut.current;if(t.flags&128)return Bn(t,c),null;var i=(c&2)!==0;if(i?(c=c&1|2,t.flags|=128):c&=1,Bn(t,c),n==="backwards"&&e!==null?(bi(e),$e(e,t,a,l),bi(e)):$e(e,t,a,l),a=se?An:0,!i&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vd(e,l,t);else if(e.tag===19)vd(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"backwards":l=yd(t.child),l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null,bi(t)),ss(t,!0,n,null,u,a);break;case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ku(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}ss(t,!0,l,null,u,a);break;case"together":ss(t,!1,null,null,void 0,a);break;case"independent":t.memoizedState=null;break;default:l=yd(t.child),l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),ss(t,!1,n,l,u,a)}return t.child}function pd(e,t,l){var a=t.pendingProps;return Ol(t,t.type,a.value),$e(e,t,a.children,l),t.child}function vl(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Ll|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ua(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,l=ol(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=ol(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function yi(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&qu(e)))}function s1(e,t,l){switch(t.tag){case 3:ou(t,t.stateNode.containerInfo),Ol(t,Ze,e.memoizedState.cache),aa();break;case 27:case 5:Zs(t);break;case 4:ou(t,t.stateNode.containerInfo);break;case 10:Ol(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Xc(t),null;break;case 13:var a=t.memoizedState;if(a!==null){if(a.dehydrated!==null)return Rl(t),t.flags|=128,null;a=ua(e,t,l,!1);var n=t.child.childLanes;return a||(l&n)!==0?bd(e,t,l):(Rl(t),e=vl(e,t,l),e!==null?e.sibling:null)}Rl(t);break;case 19:if(t.flags&128)return vi(e,t,l);if(n=(e.flags&128)!==0,a=(l&t.childLanes)!==0,a||(ua(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return vi(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Bn(t,ut.current),a)break;return null;case 22:return t.lanes=0,fd(e,t,l,t.pendingProps);case 24:Ol(t,Ze,e.memoizedState.cache)}return vl(e,t,l)}function gd(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!yi(e,l)&&(t.flags&128)===0)return Je=!1,s1(e,t,l);Je=(e.flags&131072)!==0}else Je=!1,se&&(t.flags&1048576)!==0&&Ff(t,An,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ra(t.elementType),t.type=e,typeof e=="function")zc(e)?(a=ma(e,a),t.tag=1,t=xd(null,t,e,a,l)):(t.tag=0,t=oi(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===C){t.tag=11,t=cd(null,t,e,a,l);break e}else if(n===z){t.tag=14,t=id(null,t,e,a,l);break e}else if(n===Ee){t.tag=10,t.type=e,t=pd(null,t,l);break e}}throw t=xe(e)||e,Error(o(306,t,""))}}return t;case 0:return oi(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=ma(a,t.pendingProps),xd(e,t,a,n,l);case 3:e:{if(ou(t,t.stateNode.containerInfo),e===null)throw Error(o(387));a=t.pendingProps;var u=t.memoizedState;n=u.element,qc(e,t),Hn(t,a,null,l);var c=t.memoizedState;if(a=c.cache,Ol(t,Ze,a),a!==u.cache&&Mc(t,[Ze],l,!0),Rn(),a=c.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=hd(e,t,a,l);break e}else if(a!==n){n=wt(Error(o(424)),t),On(n),t=hd(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=qt(e.firstChild),Ie=t,se=!0,_l=null,Ht=!0,l=ro(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|134221824,l=l.sibling}else{if(aa(),a===n){t=vl(e,t,l);break e}$e(e,t,a,l)}t=t.child}return t;case 26:return Va(e,t),e===null?(l=Z0(t.type,null,t.pendingProps,null))?t.memoizedState=l:se||(t.stateNode=T0(t.type,t.pendingProps,Nl.current,t)):t.memoizedState=Z0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Zs(t),e===null&&se&&(a=t.stateNode=Q0(t.type,t.pendingProps,Nl.current),Ie=t,Ht=!0,n=Me,Vl(t.type)?(xr=n,Me=qt(a.firstChild)):Me=n),$e(e,t,t.pendingProps.children,l),Va(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((n=a=Me)&&(a=eb(a,t.type,t.pendingProps,Ht),a!==null?(t.stateNode=a,Ie=t,Me=qt(a.firstChild),Ht=!1,n=!0):n=!1),n||Al(t)),Zs(t),n=t.type,u=t.pendingProps,c=e!==null?e.memoizedProps:null,a=u.children,ur(n,u)?a=null:c!==null&&ur(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=Kc(e,t,$h,null,null,l),rn._currentValue=n),Va(e,t),$e(e,t,a,l),t.child;case 6:return e===null&&se&&((e=l=Me)&&(l=tb(l,t.pendingProps,Ht),l!==null?(t.stateNode=l,Ie=t,Me=null,e=!0):e=!1),e||Al(t)),null;case 13:return bd(e,t,l);case 4:return ou(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=oa(t,null,a,l):$e(e,t,a,l),t.child;case 11:return cd(e,t,t.type,t.pendingProps,l);case 7:return a=t.pendingProps,Va(e,t),$e(e,t,a,l),t.child;case 8:return $e(e,t,t.pendingProps.children,l),t.child;case 12:return $e(e,t,t.pendingProps.children,l),t.child;case 10:return pd(e,t,l);case 9:return n=t.type._context,a=t.pendingProps.children,sa(t),n=at(n),a=a(n),t.flags|=1,$e(e,t,a,l),t.child;case 14:return id(e,t,t.type,t.pendingProps,l);case 15:return rd(e,t,t.type,t.pendingProps,l);case 19:return vi(e,t,l);case 31:return n1(e,t,l);case 22:return fd(e,t,l,t.pendingProps);case 24:return sa(t),a=at(Ze),e===null?(n=Rc(),n===null&&(n=Ae,u=wc(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),t.memoizedState={parent:a,cache:n},Bc(t),Ol(t,Ze,n)):((e.lanes&l)!==0&&(qc(e,t),Hn(t,null,null,l),Rn()),n=e.memoizedState,u=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Ol(t,Ze,a)):(a=u.cache,Ol(t,Ze,a),a!==n.cache&&Mc(t,[Ze],l,!0))),$e(e,t,t.pendingProps.children,l),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=t.pendingProps,a.name!=null&&a.name!=="auto"?t.flags|=e===null?18882560:18874368:se&&Ru(t),e!==null&&e.memoizedProps.name!==a.name?t.flags|=4194816:Va(e,t),$e(e,t,a.children,l),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function yl(e){e.flags|=4}function pi(e,t,l,a,n){var u;if((u=(e.mode&32)!==0)&&(u=l===null?$0(t,a):$0(t,a)&&(a.src!==l.src||a.srcSet!==l.srcSet)),u){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(t0())e.flags|=8192;else throw fa=Gu,Hc}else e.flags&=-16777217}function Nd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!F0(t))if(t0())e.flags|=8192;else throw fa=Gu,Hc}function cs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Jr():536870912,e.lanes|=t,$a|=t)}function Gn(e,t){if(!se)switch(e.tailMode){case"visible":break;case"collapsed":for(var l=e.tail,a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(t=e.tail,l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&1206910976,a|=n.flags&1206910976,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function c1(e,t,l){var a=t.pendingProps;switch(Ac(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return we(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),xl(Ze),Na(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ba(t)?yl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Cc())),we(t),null;case 26:var n=t.type,u=t.memoizedState;return e===null?(yl(t),u!==null?(we(t),Nd(t,u)):(we(t),pi(t,n,null,a,l))):u?u!==e.memoizedState?(yl(t),we(t),Nd(t,u)):(we(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&yl(t),we(t),pi(t,n,e,a,l)),null;case 27:if(du(t),l=Nl.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&yl(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return we(t),t.subtreeFlags&=-33554433,null}e=Jt.current,Ba(t)?If(t):(e=Q0(n,a,l),t.stateNode=e,yl(t))}return we(t),t.subtreeFlags&=-33554433,null;case 5:if(du(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&yl(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return we(t),t.subtreeFlags&=-33554433,null}if(u=Jt.current,Ba(t))If(t);else{var c=Pn(Nl.current);switch(u){case 1:u=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=c.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?c.createElement(n,{is:a.is}):c.createElement(n)}}u[lt]=t,u[xt]=a;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)u.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=u;e:switch(ct(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&yl(t)}}return we(t),t.subtreeFlags&=-33554433,pi(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&yl(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(e=Nl.current,Ba(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Ie,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[lt]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||g0(e.nodeValue,l)),e||Al(t,!0)}else e=Pn(e).createTextNode(a),e[lt]=t,t.stateNode=e}return we(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ba(t),l!==null){if(e===null){if(!a)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[lt]=t}else aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),e=!1}else l=Cc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(zt(t),t):(zt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return we(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ba(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[lt]=t}else aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),n=!1}else n=Cc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(zt(t),t):(zt(t),null)}return zt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),cs(t,t.updateQueue),we(t),null);case 4:return Na(),e===null&&er(t.stateNode.containerInfo),t.flags|=67108864,we(t),null;case 10:return xl(t.type),we(t),null;case 19:if(Vc(t),a=t.memoizedState,a===null)return we(t),null;if(n=(t.flags&128)!==0,u=a.rendering,u===null)if(n)Gn(a,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Ku(e),u!==null){for(t.flags|=128,Gn(a,!1),e=u.updateQueue,t.updateQueue=e,cs(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Jf(l,e),l=l.sibling;return Bn(t,ut.current&1|2),se&&dl(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&gt()>ps&&(t.flags|=128,n=!0,Gn(a,!1),t.lanes=4194304)}else{if(!n)if(e=Ku(u),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,cs(t,e),Gn(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!u.alternate&&!se)return we(t),null}else 2*gt()-a.renderingStartTime>ps&&l!==536870912&&(t.flags|=128,n=!0,Gn(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(e=a.last,e!==null?e.sibling=u:t.child=u,a.last=u)}if(a.tail!==null){e=a.tail;e:{for(l=e;l!==null;){if(l.alternate!==null){l=!1;break e}l=l.sibling}l=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=gt(),e.sibling=null,u=ut.current,u=n?u&1|2:u&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!l||se?Bn(t,u):(l=u,De(nt,t),De(ut,l),rt===null&&(rt=t)),se&&dl(t,a.treeForkCount),e}return we(t),null;case 22:case 23:return zt(t),Gc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),l=t.updateQueue,l!==null&&cs(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&tt(ia),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),xl(Ze),we(t),null;case 25:return null;case 30:return t.flags|=33554432,we(t),null}throw Error(o(156,t.tag))}function i1(e,t){switch(Ac(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xl(Ze),Na(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return du(t),null;case 31:if(t.memoizedState!==null){if(zt(t),t.alternate===null)throw Error(o(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Vc(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Na(),null;case 10:return xl(t.type),null;case 22:case 23:return zt(t),Gc(),e!==null&&tt(ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xl(Ze),null;case 25:return null;default:return null}}function jd(e,t){switch(Ac(t),t.tag){case 3:xl(Ze),Na();break;case 26:case 27:case 5:du(t);break;case 4:Na();break;case 31:t.memoizedState!==null&&zt(t);break;case 13:zt(t);break;case 19:Vc(t);break;case 10:xl(t.type);break;case 22:case 23:zt(t),Gc(),e!==null&&tt(ia);break;case 24:xl(Ze)}}function Xn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var u=l.create,c=l.inst;a=u(),c.destroy=a}l=l.next}while(l!==n)}}catch(i){je(t,t.return,i)}}function Bl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&e)===e){var c=a.inst,i=c.destroy;if(i!==void 0){c.destroy=void 0,n=t;var f=l,b=i;try{b()}catch(g){je(n,f,g)}}}a=a.next}while(a!==u)}}catch(g){je(t,t.return,g)}}function Sd(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{oo(t,l)}catch(a){je(e,e.return,a)}}}function Td(e,t,l){l.props=ma(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){je(e,t,a)}}function Wt(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:var n=e.stateNode,u=rl(e.memoizedProps,n);(n.ref===null||n.ref.name!==u)&&(n.ref=D0(u)),a=n.ref;break;case 7:if(e.stateNode===null){var c=new Ct(e);N(e.child,!1,I1,c,void 0,void 0),e.stateNode=c}a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(i){je(e,t,i)}}function st(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){je(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){je(e,t,n)}else l.current=null}function is(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var l=0;l<t.length;l++)B0(e.stateNode,t[l])}function zd(e){for(var t=e.return;t!==null&&(Ni(t)&&B0(e.stateNode,t.stateNode),!gi(t));)t=t.return}function Vn(e){for(var t=e.return;t!==null&&(Ni(t)&&P1(e.stateNode,t.stateNode),!gi(t));)t=t.return}function gi(e){return e.tag===5||e.tag===3||e.tag===27}function Ni(e){return e&&e.tag===7&&e.stateNode!==null}function ji(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){je(e,e.return,n)}}function Si(e,t,l){try{var a=e.stateNode;U1(a,e.type,l,t),a[xt]=t}catch(n){je(e,e.return,n)}}function Ed(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Vl(e.type)||e.tag===4}function Ti(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Vl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zi(e,t,l,a){var n=e.tag;if(n===5||n===6)n=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(n,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(n),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=kt)),is(e,a),he=!0;else if(n!==4&&(n===27&&(is(e,a),a=null,Vl(e.type)&&(l=e.stateNode,t=null)),e=e.child,e!==null))for(zi(e,t,l,a),e=e.sibling;e!==null;)zi(e,t,l,a),e=e.sibling}function rs(e,t,l,a){var n=e.tag;if(n===5||n===6)n=e.stateNode,t?l.insertBefore(n,t):l.appendChild(n),is(e,a),he=!0;else if(n!==4&&(n===27&&(is(e,a),a=null,Vl(e.type)&&(l=e.stateNode)),e=e.child,e!==null))for(rs(e,t,l,a),e=e.sibling;e!==null;)rs(e,t,l,a),e=e.sibling}function _d(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ct(t,a,l),t[lt]=e,t[xt]=l}catch(u){je(e,e.return,u)}}var fs=!1,Et=null;function Ad(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(fs=!0)}var It=null;function Od(){var e=It;return It=null,e}var bt=0;function Za(e,t,l,a,n){return bt=0,Cd(e.child,t,l,a,n)}function Cd(e,t,l,a,n){for(var u=!1;e!==null;){if(e.tag===5){var c=e.stateNode;if(a!==null){var i=ir(c);a.push(i),i.view&&(u=!0)}else u||ir(c).view&&(u=!0);fs=!0,O0(c,bt===0?t:t+"_"+bt,l),bt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Cd(e.child,t,l,a,n)&&(u=!0));e=e.sibling}return u}function Pt(e,t){for(;e!==null;)e.tag===5?C0(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Pt(e.child,t)),e=e.sibling}function os(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(os(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(o(544));var l=t.name;t=fl(t.default,t.share),t!=="none"&&(Za(e,l,t,null,!1)||Pt(e.child,!1))}e=e.sibling}}function Ei(e,t){if(e.tag===30){var l=e.stateNode,a=e.memoizedProps,n=rl(a,l),u=fl(a.default,l.paired?a.share:a.enter);u!=="none"?Za(e,n,u,null,!1)?(os(e),l.paired||t||Pa(e,a.onEnter)):Pt(e.child,!1):os(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ei(e,t),e=e.sibling;else os(e)}function _i(e){if(Et!==null&&Et.size!==0){var t=Et;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var l=e.memoizedProps,a=l.name;if(a!=null&&a!=="auto"){var n=t.get(a);if(n!==void 0){var u=fl(l.default,l.share);if(u!=="none"&&(Za(e,a,u,null,!1)?(u=e.stateNode,n.paired=u,u.paired=n,Pa(e,l.onShare)):Pt(e.child,!1)),t.delete(a),t.size===0)break}}}_i(e)}e=e.sibling}}}function Ai(e){if(e.tag===30){var t=e.memoizedProps,l=rl(t,e.stateNode),a=Et!==null?Et.get(l):void 0,n=fl(t.default,a!==void 0?t.share:t.exit);n!=="none"&&(Za(e,l,n,null,!1)?a!==void 0?(n=e.stateNode,a.paired=n,n.paired=a,Et.delete(l),Pa(e,t.onShare)):Pa(e,t.onExit):Pt(e.child,!1)),Et!==null&&_i(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ai(e),e=e.sibling;else Et!==null&&_i(e)}function Dd(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,l=rl(t,e.stateNode);t=fl(t.default,t.update),e.flags&=-5,t!=="none"&&Za(e,l,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Dd(e);e=e.sibling}}function Oi(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Pt(e.child,!1))}Oi(e)}e=e.sibling}}function ds(e){if(e.tag===30)e.stateNode.paired=null,Pt(e.child,!1),Oi(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ds(e),e=e.sibling;else Oi(e)}function Md(e){for(e=e.child;e!==null;)e.tag===30?Pt(e.child,!1):(e.subtreeFlags&33554432)!==0&&Md(e),e=e.sibling}function Ci(e,t,l,a,n,u,c){for(var i=!1;t!==null;){if(t.tag===5){var f=t.stateNode;if(u!==null&&bt<u.length){var b=u[bt],g=ir(f);(b.view||g.view)&&(i=!0);var T;if(T=(e.flags&4)===0)if(g.clip)T=!0;else{T=b.rect;var x=g.rect;T=T.y!==x.y||T.x!==x.x||T.height!==x.height||T.width!==x.width}T&&(e.flags|=4),g.abs?g=!b.abs:(b=b.rect,g=g.rect,g=b.height!==g.height||b.width!==g.width),g&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&O0(f,bt===0?l:l+"_"+bt,n),i&&(e.flags&4)!==0||(It===null&&(It=[]),It.push(f,bt===0?a:a+"_"+bt,t.memoizedProps)),bt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c?e.flags|=t.flags&32:Ci(e,t.child,l,a,n,u,c)&&(i=!0));t=t.sibling}return i}function wd(e,t){for(e=e.child;e!==null;){if(e.tag===30){var l=e.memoizedProps,a=e.stateNode,n=rl(l,a),u=fl(l.default,l.update),c;c=e.memoizedState,e.memoizedState=null,a=e;var i=e.child;bt=0,n=Ci(a,i,n,n,u,c,!1),(e.flags&4)!==0&&n&&Pa(e,l.onUpdate)}else(e.subtreeFlags&33554432)!==0&&wd(e);e=e.sibling}}var Pe=!1,pe=!1,el=!1,Di=!1,Ud=typeof WeakSet=="function"?WeakSet:Set,et=null,tl=!1,Zn=!1,ms=!1,Mi=!1;function r1(e,t,l){if(e=e.containerInfo,ar=fn,e=Bf(e),yc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var u=n.anchorOffset,c=n.focusNode;n=n.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var i=0,f=-1,b=-1,g=0,T=0,x=e,p=null;t:for(;;){for(var D;x!==a||u!==0&&x.nodeType!==3||(f=i+u),x!==c||n!==0&&x.nodeType!==3||(b=i+n),x.nodeType===3&&(i+=x.nodeValue.length),(D=x.firstChild)!==null;)p=x,x=D;for(;;){if(x===e)break t;if(p===a&&++g===u&&(f=i),p===c&&++T===n&&(b=i),(D=x.nextSibling)!==null)break;x=p,p=x.parentNode}x=D}a=f===-1||b===-1?null:{start:f,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(nr={focusedElem:e,selectionRange:a},fn=!1,l=(l&335544064)===l,et=t,t=l?9270:1024;et!==null;){if(e=et,l&&(a=e.deletions,a!==null))for(u=0;u<a.length;u++)l&&Ai(a[u]);if(e.alternate===null&&(e.flags&2)!==0)l&&Ad(e),xs(l);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&l&&Ai(a),xs(l);continue}else if(a!==null&&a.memoizedState!==null){l&&Ad(e),xs(l);continue}}a=e.child,(e.subtreeFlags&t)!==0&&a!==null?(a.return=e,et=a):(l&&Dd(e),xs(l))}}Et=null}function xs(e){for(;et!==null;){var t=et,l=e,a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((n&1024)!==0&&a!==null){l=void 0,n=a.memoizedProps,a=a.memoizedState;var u=t.stateNode;try{var c=ma(t.type,n);l=u.getSnapshotBeforeUpdate(c,a),u.__reactInternalSnapshotBeforeUpdate=l}catch(i){je(t,t.return,i)}}break;case 3:if((n&1024)!==0){if(a=t.stateNode.containerInfo,l=a.nodeType,l===9)or(a);else if(l===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":or(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:l&&a!==null&&(l=rl(a.memoizedProps,a.stateNode),n=t.memoizedProps,n=fl(n.default,n.update),n!=="none"&&Za(a,l,n,a.memoizedState=[],!0));break;default:if((n&1024)!==0)throw Error(o(163))}if(a=t.sibling,a!==null){a.return=t.return,et=a;break}et=t.return}}function Rd(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ll(e,l),a&4&&Xn(5,l);break;case 1:if(ll(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(c){je(l,l.return,c)}else{var n=ma(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){je(l,l.return,c)}}a&64&&Sd(l),a&512&&Wt(l,l.return);break;case 3:if(ll(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{oo(e,t)}catch(c){je(l,l.return,c)}}break;case 27:t===null&&a&4&&_d(l);case 26:case 5:ll(e,l),t===null&&a&4&&ji(l),a&512&&Wt(l,l.return);break;case 12:ll(e,l);break;case 31:ll(e,l),a&4&&Yd(e,l);break;case 13:ll(e,l),a&4&&Ld(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=N1.bind(null,l),lb(e,l))));break;case 22:if(a=l.memoizedState!==null||Pe,!a){var u=t!==null&&t.memoizedState!==null||pe;t=Pe,n=pe,Pe=a,(pe=u)&&!n?(a=2,(l.subtreeFlags&8772)!==0&&(a|=1),Xt(e,l,a)):ll(e,l),Pe=t,pe=n}break;case 30:ll(e,l),a&512&&Wt(l,l.return);break;case 7:a&512&&Wt(l,l.return);default:ll(e,l)}}function wi(e,t){for(e=e.child;e!==null;)Hd(e,t),e=e.sibling}function Hd(e,t){switch(e.tag){case 5:case 26:try{var l=e.stateNode;if(t){var a=l.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var n=e.stateNode,u=e.memoizedProps.style,c=u!=null&&u.hasOwnProperty("display")?u.display:null;n.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(f){je(e,e.return,f)}Ui(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,he=!0}catch(f){je(e,e.return,f)}break;case 18:try{var i=e.stateNode;t?A0(i,!0):A0(e.stateNode,!1)}catch(f){je(e,e.return,f)}break;case 22:case 23:e.memoizedState===null&&wi(e,t);break;default:wi(e,t)}}function Ui(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var l=e,a=t;switch(l.tag){case 4:Hd(l,a);break e;case 22:l.memoizedState===null&&Ui(l,a);break e;default:Ui(l,a)}}e=e.sibling}}function Bd(e){var t=e.alternate;t!==null&&(e.alternate=null,Bd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&pu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,vt=!1;function Qt(e,t,l){for(l=l.child;l!==null;)qd(e,t,l),l=l.sibling}function qd(e,t,l){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(xn,l)}catch{}switch(l.tag){case 26:pe||st(l,t),Qt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&!pe&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:pe||st(l,t),Vn(l);var a=Ue,n=vt;Vl(l.type)&&(Ue=l.stateNode,vt=!1),Qt(e,t,l),G0(l.stateNode,l.type,l.memoizedProps),Ue=a,vt=n;break;case 5:pe||st(l,t),Vn(l);case 6:if(l.tag===6&&Vn(l),a=Ue,n=vt,Ue=null,Qt(e,t,l),Ue=a,vt=n,Ue!==null)if(vt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(l.stateNode),he=!0}catch(u){je(l,t,u)}else try{Ue.removeChild(l.stateNode),he=!0}catch(u){je(l,t,u)}break;case 18:Ue!==null&&(vt?(e=Ue,_0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),on(e)):_0(Ue,l.stateNode));break;case 4:a=Ue,n=vt,Ue=l.stateNode.containerInfo,vt=!0,Qt(e,t,l),Ue=a,vt=n;break;case 0:case 11:case 14:case 15:Bl(2,l,t),pe||Bl(4,l,t),Qt(e,t,l);break;case 1:pe||(st(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Td(l,t,a)),Qt(e,t,l);break;case 21:Qt(e,t,l);break;case 22:pe=(a=pe)||l.memoizedState!==null,Qt(e,t,l),pe=a;break;case 30:st(l,t),Qt(e,t,l);break;case 7:pe||st(l,t),Qt(e,t,l);break;default:Qt(e,t,l)}}function Yd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{on(e)}catch(l){je(t,t.return,l)}}}function Ld(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{on(e)}catch(l){je(t,t.return,l)}}function f1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ud),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ud),t;default:throw Error(o(435,e.tag))}}function hs(e,t){var l=f1(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=j1.bind(null,e,a);a.then(n,n)}})}function dt(e,t,l){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var u=a[n],c=e,i=t,f=i;e:for(;f!==null;){switch(f.tag){case 27:if(Vl(f.type)){Ue=f.stateNode,vt=!1;break e}break;case 5:Ue=f.stateNode,vt=!1;break e;case 3:case 4:Ue=f.stateNode.containerInfo,vt=!0;break e}f=f.return}if(Ue===null)throw Error(o(160));qd(c,i,u),Ue=null,vt=!1,c=u.alternate,c!==null&&(c.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Qd(t,e,l),t=t.sibling}var Gt=null;function Qd(e,t,l){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(n&4&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(var u=0;u<a.length;u++){var c=a[u];c.ref.impl=c.nextImpl}dt(t,e,l),mt(e),n&4&&(Bl(3,e,e.return),Xn(3,e),Bl(5,e,e.return));break;case 1:dt(t,e,l),mt(e),n&512&&(pe||a===null||st(a,a.return)),n&64&&Pe&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?t:l.concat(t))));break;case 26:if(u=Gt,dt(t,e,l),mt(e),n&512&&(pe||a===null||st(a,a.return)),n&4)if(n=a!==null?a.memoizedState:null,l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null)if(Pe)e.stateNode=T0(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,l=e.memoizedProps,n=u.ownerDocument||u;t:switch(t){case"title":a=n.getElementsByTagName("title")[0],(!a||a[vn]||a[lt]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=n.createElement(t),n.head.insertBefore(a,n.querySelector("head > title"))),ct(a,t,l),a[lt]=e,We(a),t=a;break e;case"link":if(u=k0("link","href",n).get(t+(l.href||""))){for(c=0;c<u.length;c++)if(a=u[c],a.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&a.getAttribute("rel")===(l.rel==null?null:l.rel)&&a.getAttribute("title")===(l.title==null?null:l.title)&&a.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break t}}a=n.createElement(t),ct(a,t,l),n.head.appendChild(a);break;case"meta":if(u=k0("meta","content",n).get(t+(l.content||""))){for(c=0;c<u.length;c++)if(a=u[c],a.getAttribute("content")===(l.content==null?null:""+l.content)&&a.getAttribute("name")===(l.name==null?null:l.name)&&a.getAttribute("property")===(l.property==null?null:l.property)&&a.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&a.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break t}}a=n.createElement(t),ct(a,t,l),n.head.appendChild(a);break;default:throw Error(o(468,t))}a[lt]=e,We(a),t=a}e.stateNode=t}else Pe||yr(u,e.type,e.stateNode);else e.stateNode=J0(u,l,e.memoizedProps);else n!==l?(n===null?(t=a.stateNode,t===null||pe||t.parentNode.removeChild(t)):n.count--,l===null?Pe||yr(u,e.type,e.stateNode):J0(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Si(e,e.memoizedProps,a.memoizedProps);break;case 27:dt(t,e,l),mt(e),n&512&&(pe||a===null||st(a,a.return)),a!==null&&n&4&&Si(e,e.memoizedProps,a.memoizedProps);break;case 5:if(u=el,el=!1,dt(t,e,l),el=u,mt(e),n&512&&(pe||a===null||st(a,a.return)),e.flags&32){t=e.stateNode;try{_a(t,""),he=!0}catch(g){je(e,e.return,g)}}n&4&&e.stateNode!=null&&(t=e.memoizedProps,Si(e,t,a!==null?a.memoizedProps:t)),n&1024&&(Di=!0);break;case 6:if(dt(t,e,l),mt(e),n&4){if(e.stateNode===null)throw Error(o(162));t=e.memoizedProps,l=e.stateNode;try{l.nodeValue=t,he=!0}catch(g){je(e,e.return,g)}}break;case 3:if(he=!1,Cs=null,u=Gt,Gt=eu(t.containerInfo),dt(t,e,l),Gt=u,mt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{on(t.containerInfo)}catch(g){je(e,e.return,g)}Di&&(Di=!1,Gd(e)),he=!1;break;case 4:n=el,el=Pe,a=sf(),u=Gt,Gt=eu(e.stateNode.containerInfo),dt(t,e,l),mt(e),Gt=u,he&&Zn&&(ms=!0),he=a,el=n;break;case 12:dt(t,e,l),mt(e);break;case 31:dt(t,e,l),mt(e),n&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,hs(e,t)));break;case 13:dt(t,e,l),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ys=gt()),n&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,hs(e,t)));break;case 22:u=e.memoizedState!==null,c=a!==null&&a.memoizedState!==null;var i=Pe,f=pe,b=el;Pe=i||u,el=b||u,pe=f||c,dt(t,e,l),pe=f,el=b,Pe=i,mt(e),n&8192&&(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,!u||a===null||c||Pe||pe||(t=c||pe,l=Pe,a=pe,Pe=u||Pe,pe=t,ql(e,2),Pe=l,pe=a),!u&&el||wi(e,u)),n&4&&(t=e.updateQueue,t!==null&&(l=t.retryQueue,l!==null&&(t.retryQueue=null,hs(e,l))));break;case 19:dt(t,e,l),mt(e),n&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,hs(e,t)));break;case 30:n&512&&(pe||a===null||st(a,a.return)),n=sf(),u=Zn,c=(l&335544064)===l,i=e.memoizedProps,Zn=c&&fl(i.default,i.update)!=="none",dt(t,e,l),mt(e),c&&a!==null&&he&&(e.flags|=4),Zn=u,he=n;break;case 21:break;case 7:n&512&&(pe||a===null||st(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=e);default:dt(t,e,l),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Ed(a)){l=a;break}a=a.return}a=null;for(var n=e.return;n!==null;){if(Ni(n)){var u=n.stateNode;a===null?a=[u]:a.push(u)}if(gi(n))break;n=n.return}var c=a;if(l==null)throw Error(o(160));switch(l.tag){case 27:var i=l.stateNode,f=Ti(e);rs(e,f,i,c);break;case 5:var b=l.stateNode;l.flags&32&&(_a(b,""),l.flags&=-33);var g=Ti(e);rs(e,g,b,c);break;case 3:case 4:var T=l.stateNode.containerInfo,x=Ti(e);zi(e,x,T,c);break;default:throw Error(o(161))}}catch(p){je(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Gd(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,fn=!0,t.reset(),fn=!1),e=e.sibling}}function Ka(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Xd(t,e),t=t.sibling;else wd(t)}function Xd(e,t){var l=e.alternate;if(l===null)Ei(e,!1);else switch(e.tag){case 3:if(Mi=tl=!1,Od(),Ka(t,e),!tl&&!ms){if(e=It,e!==null)for(var a=0;a<e.length;a+=3){l=e[a];var n=e[a+1];C0(l,e[a+2]),l=l.ownerDocument.documentElement,l!==null&&l.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Mi=!0}It=null;break;case 5:Ka(t,e);break;case 4:a=tl,tl=!1,Ka(t,e),tl&&(ms=!0),tl=a;break;case 22:e.memoizedState===null&&(l.memoizedState!==null?Ei(e,!1):Ka(t,e));break;case 30:a=tl,n=Od(),tl=!1,Ka(t,e),tl&&(e.flags|=4);var u=e.memoizedProps,c=e.stateNode;t=rl(u,c),c=rl(l.memoizedProps,c);var i=fl(u.default,u.update);i==="none"?t=!1:(u=l.memoizedState,l.memoizedState=null,l=e.child,bt=0,t=Ci(e,l,t,c,i,u,!0),bt!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Pa(e,e.memoizedProps.onUpdate),It=n):n!==null&&(n.push.apply(n,It),It=n),tl=(e.flags&32)!==0?!0:a;break;default:Ka(t,e)}}function ll(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rd(e,t.alternate,t),t=t.sibling}function ql(e,t){for(e=e.child;e!==null;){var l=e,a=t;switch(l.tag){case 0:case 11:case 14:case 15:Bl(4,l,l.return),ql(l,a);break;case 1:st(l,l.return);var n=l.stateNode;typeof n.componentWillUnmount=="function"&&Td(l,l.return,n),ql(l,a);break;case 27:(a&2)!==0&&G0(l.stateNode,l.type,l.memoizedProps);case 5:st(l,l.return),l.tag!==5&&l.tag!==27||Vn(l),ql(l,a);break;case 6:Vn(l);break;case 26:st(l,l.return),n=l.stateNode,l.memoizedState!==null||n===null||pe||n.parentNode.removeChild(n),ql(l,a);break;case 22:l.memoizedState===null&&ql(l,a);break;case 30:st(l,l.return),ql(l,a);break;case 7:st(l,l.return);default:ql(l,a)}e=e.sibling}}function Xt(e,t,l){for(l=(t.subtreeFlags&8772)!==0?l:l&-2,t=t.child;t!==null;){var a=t.alternate,n=e,u=t,c=u.flags,i=(l&1)!==0;switch(u.tag){case 0:case 11:case 15:Xt(n,u,l),Xn(4,u);break;case 1:if(Xt(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){je(a,a.return,g)}if(a=u,n=a.updateQueue,n!==null){var f=a.stateNode;try{var b=n.shared.hiddenCallbacks;if(b!==null)for(n.shared.hiddenCallbacks=null,n=0;n<b.length;n++)fo(b[n],f)}catch(g){je(a,a.return,g)}}i&&c&64&&Sd(u),Wt(u,u.return);break;case 27:(l&2)!==0&&_d(u);case 5:u.tag!==5&&u.tag!==27||zd(u),Xt(n,u,l),i&&a===null&&c&4&&ji(u),Wt(u,u.return);break;case 6:zd(u);break;case 26:f=u.stateNode,u.memoizedState!==null||f===null||Pe||yr(eu(f.ownerDocument),u.type,f),Xt(n,u,l),i&&a===null&&c&4&&ji(u),Wt(u,u.return);break;case 12:Xt(n,u,l);break;case 31:Xt(n,u,l),i&&c&4&&Yd(n,u);break;case 13:Xt(n,u,l),i&&c&4&&Ld(n,u);break;case 22:u.memoizedState===null&&Xt(n,u,l),Wt(u,u.return);break;case 30:Xt(n,u,l),Wt(u,u.return);break;case 7:Wt(u,u.return);default:Xt(n,u,l)}t=t.sibling}}function Ri(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Cn(l))}function Hi(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cn(e))}function Bt(e,t,l,a){var n=(l&335544064)===l;if(t.subtreeFlags&(n?10262:10256))for(t=t.child;t!==null;)Vd(e,t,l,a),t=t.sibling;else n&&Md(t)}function Vd(e,t,l,a){var n=(l&335544064)===l;n&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ds(t);var u=t.flags;switch(t.tag){case 0:case 11:case 15:Bt(e,t,l,a),u&2048&&Xn(9,t);break;case 1:Bt(e,t,l,a);break;case 3:Bt(e,t,l,a),n&&Mi&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,t.alternate!==null&&(u=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==u&&(t.refCount++,u!=null&&Cn(u)));break;case 12:if(u&2048){Bt(e,t,l,a),u=t.stateNode;try{var c=t.memoizedProps,i=c.id,f=c.onPostCommit;typeof f=="function"&&f(i,t.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(b){je(t,t.return,b)}}else Bt(e,t,l,a);break;case 31:Bt(e,t,l,a);break;case 13:Bt(e,t,l,a);break;case 23:break;case 22:c=t.stateNode,i=t.alternate,t.memoizedState!==null?(n&&i!==null&&i.memoizedState===null&&ds(i),c._visibility&2?Bt(e,t,l,a):Kn(e,t)):(n&&i!==null&&i.memoizedState!==null&&ds(t),c._visibility&2?Bt(e,t,l,a):(c._visibility|=2,Ja(e,t,l,a,(t.subtreeFlags&10256)!==0||!1))),u&2048&&Ri(i,t);break;case 24:Bt(e,t,l,a),u&2048&&Hi(t.alternate,t);break;case 30:n&&(u=t.alternate,u!==null&&(Pt(u.child,!0),Pt(t.child,!0))),Bt(e,t,l,a);break;default:Bt(e,t,l,a)}}function Ja(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,c=t,i=l,f=a,b=c.flags;switch(c.tag){case 0:case 11:case 15:Ja(u,c,i,f,n),Xn(8,c);break;case 23:break;case 22:var g=c.stateNode;c.memoizedState!==null?g._visibility&2?Ja(u,c,i,f,n):Kn(u,c):(g._visibility|=2,Ja(u,c,i,f,n)),n&&b&2048&&Ri(c.alternate,c);break;case 24:Ja(u,c,i,f,n),n&&b&2048&&Hi(c.alternate,c);break;default:Ja(u,c,i,f,n)}t=t.sibling}}function Kn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:Kn(l,a),n&2048&&Ri(a.alternate,a);break;case 24:Kn(l,a),n&2048&&Hi(a.alternate,a);break;default:Kn(l,a)}t=t.sibling}}var xa=8192;function ha(e,t,l){if(e.subtreeFlags&xa)for(e=e.child;e!==null;)Zd(e,t,l),e=e.sibling}function Zd(e,t,l){switch(e.tag){case 26:ha(e,t,l),e.flags&xa&&(e.memoizedState!==null?bb(l,Gt,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&I0(l,e)));break;case 5:ha(e,t,l),e.flags&xa&&(e=e.stateNode,(t&335544128)===t&&I0(l,e));break;case 3:case 4:var a=Gt;Gt=eu(e.stateNode.containerInfo),ha(e,t,l),Gt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=xa,xa=16777216,ha(e,t,l),xa=a):ha(e,t,l));break;case 30:if((e.flags&xa)!==0&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var n=e.stateNode;n.paired=null,Et===null&&(Et=new Map),Et.set(a,n)}ha(e,t,l);break;default:ha(e,t,l)}}function Kd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Jn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];et=a,kd(a,e)}Kd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Jd(e),e=e.sibling}function Jd(e){switch(e.tag){case 0:case 11:case 15:Jn(e),e.flags&2048&&Bl(9,e,e.return);break;case 3:Jn(e);break;case 12:Jn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,bs(e)):Jn(e);break;default:Jn(e)}}function bs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];et=a,kd(a,e)}Kd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bl(8,t,t.return),bs(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,bs(t));break;default:bs(t)}e=e.sibling}}function kd(e,t){for(;et!==null;){var l=et;switch(l.tag){case 0:case 11:case 15:Bl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Cn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,et=a;else e:for(l=e;et!==null;){a=et;var n=a.sibling,u=a.return;if(Bd(a),a===l){et=null;break e}if(n!==null){n.return=u,et=n;break e}et=u}}}var o1={getCacheForType:function(e){var t=at(Ze),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return at(Ze).controller.signal}},d1=typeof WeakMap=="function"?WeakMap:Map,ve=0,Ae=null,ce=null,fe=0,Ne=0,_t=null,Yl=!1,ka=!1,Bi=!1,pl=0,Le=0,Ll=0,ba=0,vs=0,At=0,$a=0,kn=null,yt=null,qi=!1,ys=0,$d=0,ps=1/0,gs=null,Ql=null,Be=0,Vt=null,va=null,al=0,Yi=0,Li=null,Fd=null,Fa=null,Wa=null,Ia=null,$n=0,Ns=null;function Ot(){return(ve&2)!==0&&fe!==0?fe&-fe:q.T!==null?Fi():Wr()}function Wd(){if(At===0)if((fe&536870912)===0||se){var e=hu;hu<<=1,(hu&3932160)===0&&(hu=262144),At=e}else At=536870912;return e=nt.current,e!==null&&(e.flags|=32),At}function Pa(e,t){if(t!=null){var l=e.stateNode,a=l.ref;a===null&&(a=l.ref=D0(rl(e.memoizedProps,l))),Wa===null&&(Wa=[]),Wa.push(t.bind(null,a))}}function pt(e,t,l){(e===Ae&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(en(e,0),Gl(e,fe,At,!1)),bn(e,l),((ve&2)===0||e!==Ae)&&(e===Ae&&((ve&2)===0&&(ba|=l),Le===4&&Gl(e,fe,At,!1)),nl(e))}function Id(e,t,l){if((ve&6)!==0)throw Error(o(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||hn(e,t),n=a?h1(e,t):Gi(e,t,!0),u=a;do{if(n===0){ka&&!a&&Gl(e,t,0,!1);break}else{if(l=e.current.alternate,u&&!m1(l)){n=Gi(e,t,!1),u=!1;continue}if(n===2){if(u=t,e.errorRecoveryDisabledLanes&u)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var i=e;n=kn;var f=i.current.memoizedState.isDehydrated;if(f&&(en(i,c).flags|=256),c=Gi(i,c,!1),c!==2&&c!==6){if(Bi&&!f){i.errorRecoveryDisabledLanes|=u,ba|=u,n=4;break e}u=yt,yt=n,u!==null&&(yt===null?yt=u:yt.push.apply(yt,u))}n=c}if(u=!1,n!==2)continue}}if(n===1){en(e,0),Gl(e,t,0,!0);break}e:{switch(a=e,u=n,u){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Gl(a,t,At,!Yl);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=ys+300-gt(),10<n)){if(Gl(a,t,At,!Yl),vu(a,0,!0)!==0)break e;al=t,a.timeoutHandle=cr(Pd.bind(null,a,l,yt,gs,qi,t,At,ba,$a,Yl,u,"Throttled",-0,0),n);break e}Pd(a,l,yt,gs,qi,t,At,ba,$a,Yl,u,null,-0,0)}}break}while(!0);nl(e)}function Pd(e,t,l,a,n,u,c,i,f,b,g,T,x,p){e.timeoutHandle=-1;var D=t.subtreeFlags,B=(u&335544064)===u;if(T=null,(B||D&8192||(D&16785408)===16785408)&&(T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:kt},Et=null,Zd(t,u,T),B&&(D=T,B=e.containerInfo,B=(B.nodeType===9?B:B.ownerDocument).__reactViewTransition,B!=null&&(D.count++,D.waitingForViewTransition=!0,D=au.bind(D),B.finished.then(D,D))),D=(u&62914560)===u?ys-gt():(u&4194048)===u?$d-gt():0,D=vb(T,D),D!==null)){al=u,e.cancelPendingCommit=D(c0.bind(null,e,t,u,l,a,n,c,i,f,b,g,T,null,x,p)),Gl(e,u,c,!b);return}c0(e,t,u,l,a,n,c,i,f,b,g,T)}function m1(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!Tt(u(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gl(e,t,l,a){t=Kr(e,t),t&=~vs,t&=~ba,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var u=31-jt(n),c=1<<u;a[u]=-1,n&=~c}l!==0&&kr(e,l,t)}function js(){return(ve&6)===0?(Fn(0),!1):!0}function Qi(){if(ce!==null){if(Ne===0)var e=ce.return;else e=ce,ml=na=null,$c(e),La=null,wn=0,e=ce;for(;e!==null;)jd(e.alternate,e),e=e.return;ce=null}}function en(e,t){var l=e.timeoutHandle;return l!==-1&&(e.timeoutHandle=-1,B1(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),al=0,Qi(),Ae=e,ce=l=ol(e.current,null),fe=t,Ne=0,_t=null,Yl=!1,ka=hn(e,t),Bi=!1,$a=At=vs=ba=Ll=Le=0,yt=kn=null,qi=!1,pl=Kr(e,t),Cu(),l}function e0(e,t){ne=null,q.H=ts,t===Ya||t===Qu?(t=so(),Ne=3):t===Hc?(t=so(),Ne=4):Ne=t===fi?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,ce===null&&(Le=1,ls(e,wt(t,e.current)))}function t0(){var e=nt.current;return e===null?!0:(fe&4194048)===fe?rt===null:(fe&62914560)===fe||(fe&536870912)!==0?e===rt:!1}function l0(){var e=q.H;return q.H=ts,e===null?ts:e}function a0(){var e=q.A;return q.A=o1,e}function Ss(){Le=4,Yl||(fe&4194048)!==fe&&nt.current!==null||(ka=!0),(Ll&134217727)===0&&(ba&134217727)===0||Ae===null||Gl(Ae,fe,At,!1)}function Gi(e,t,l){var a=ve;ve|=2;var n=l0(),u=a0();(Ae!==e||fe!==t)&&(gs=null,en(e,t)),t=!1;var c=Le;e:do try{if(Ne!==0&&ce!==null){var i=ce,f=_t;switch(Ne){case 8:Qi(),c=6;break e;case 3:case 2:case 9:case 6:nt.current===null&&(t=!0);var b=Ne;if(Ne=0,_t=null,tn(e,i,f,b),l&&ka){c=0;break e}break;default:b=Ne,Ne=0,_t=null,tn(e,i,f,b)}}x1(),c=Le;break}catch(g){e0(e,g)}while(!0);return t&&e.shellSuspendCounter++,ml=na=null,ve=a,q.H=n,q.A=u,ce===null&&(Ae=null,fe=0,Cu()),c}function x1(){for(;ce!==null;)n0(ce)}function h1(e,t){var l=ve;ve|=2;var a=l0(),n=a0();Ae!==e||fe!==t?(gs=null,ps=gt()+500,en(e,t)):ka=hn(e,t);e:do try{if(Ne!==0&&ce!==null){t=ce;var u=_t;t:switch(Ne){case 1:Ne=0,_t=null,tn(e,t,u,1);break;case 2:case 9:if(no(u)){Ne=0,_t=null,u0(t);break}t=function(){Ne!==2&&Ne!==9||Ae!==e||(Ne=7),nl(e)},u.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:no(u)?(Ne=0,_t=null,u0(t)):(Ne=0,_t=null,tn(e,t,u,7));break;case 5:var c=null;switch(ce.tag){case 26:c=ce.memoizedState;case 5:case 27:var i=ce;if(c?F0(c):i.stateNode.complete){Ne=0,_t=null;var f=i.sibling;if(f!==null)ce=f;else{var b=i.return;b!==null?(ce=b,Ts(b)):ce=null}break t}}Ne=0,_t=null,tn(e,t,u,5);break;case 6:Ne=0,_t=null,tn(e,t,u,6);break;case 8:Qi(),Le=6;break e;default:throw Error(o(462))}}b1();break}catch(g){e0(e,g)}while(!0);return ml=na=null,q.H=a,q.A=n,ve=l,ce!==null?0:(Ae=null,fe=0,Cu(),Le)}function b1(){for(;ce!==null&&!wx();)n0(ce)}function n0(e){var t=gd(e.alternate,e,pl);e.memoizedProps=e.pendingProps,t===null?Ts(e):ce=t}function u0(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=md(l,t,t.pendingProps,t.type,void 0,fe);break;case 11:t=md(l,t,t.pendingProps,t.type.render,t.ref,fe);break;case 5:$c(t);var a=t;a===Ie&&(se?(Hu(a),a.tag===5&&a.stateNode!=null&&(Me=a.stateNode)):(Hu(a),se=!0));default:jd(l,t),t=ce=Jf(t,pl),t=gd(l,t,pl)}e.memoizedProps=e.pendingProps,t===null?Ts(e):ce=t}function tn(e,t,l,a){ml=na=null,$c(t),La=null,wn=0;var n=t.return;try{if(a1(e,n,t,l,fe)){Le=1,ls(e,wt(l,e.current)),ce=null;return}}catch(u){if(n!==null)throw ce=n,u;Le=1,ls(e,wt(l,e.current)),ce=null;return}t.flags&32768?(se||a===1?e=!0:ka||(fe&536870912)!==0?e=!1:(Yl=e=!0,(a===2||a===9||a===3||a===6)&&(a=nt.current,a!==null&&a.tag===13&&(a.flags|=16384))),s0(t,e)):Ts(t)}function Ts(e){var t=e;do{if((t.flags&32768)!==0){s0(t,Yl);return}e=t.return;var l=c1(t.alternate,t,pl);if(l!==null){ce=l;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);Le===0&&(Le=5)}function s0(e,t){do{var l=i1(e.alternate,e);if(l!==null){l.flags&=32767,ce=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ce=e;return}ce=e=l}while(e!==null);Le=6,ce=null}function c0(e,t,l,a,n,u,c,i,f,b,g,T){e.cancelPendingCommit=null;do zs();while(Be!==0);if((ve&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));e===Ae&&(ce=Ae=null,fe=0),va=t,Vt=e,al=l,Li=n,Fd=a,v1(e,t,l,c,i,f,T)}}function v1(e,t,l,a,n,u,c){var i=t.lanes|t.childLanes;if(Yi=i,i|=Sc,Xx(e,l,i,a,n,u),Wa=null,(l&335544064)===l?(Ia=Zh(e),a=10262):(Ia=null,a=10256),(t.subtreeFlags&a)!==0||(t.flags&a)!==0?(e.callbackNode=null,e.callbackPriority=0,S1(mu,function(){return Ki(),null})):(e.callbackNode=null,e.callbackPriority=0),fs=!1,a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=q.T,q.T=null,n=I.p,I.p=2,u=ve,ve|=4;try{r1(e,t,l)}finally{ve=u,I.p=n,q.T=a}}Be=1,fs?Fa=X1(c,e.containerInfo,Ia,Xi,Vi,p1,Zi,Ki,y1):(Xi(),Vi(),Zi())}function y1(e){if(Be!==0){var t=Vt.onRecoverableError;t(e,{componentStack:null})}}function p1(){Be===3&&(Be=0,Xd(va,Vt),Be=4)}function Xi(){if(Be===1){Be=0;var e=Vt,t=va,l=al,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=q.T,q.T=null;var n=I.p;I.p=2;var u=ve;ve|=4;try{Zn=ms=!1,Qd(t,e,l),l=nr;var c=Bf(e.containerInfo),i=l.focusedElem,f=l.selectionRange;if(c!==i&&i&&i.ownerDocument&&Hf(i.ownerDocument.documentElement,i)){if(f!==null&&yc(i)){var b=f.start,g=f.end;if(g===void 0&&(g=b),"selectionStart"in i)i.selectionStart=b,i.selectionEnd=Math.min(g,i.value.length);else{var T=i.ownerDocument||document,x=T&&T.defaultView||window;if(x.getSelection){var p=x.getSelection(),D=i.textContent.length,B=Math.min(f.start,D),ue=f.end===void 0?B:Math.min(f.end,D);!p.extend&&B>ue&&(c=ue,ue=B,B=c);var h=Rf(i,B),d=Rf(i,ue);if(h&&d&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==d.node||p.focusOffset!==d.offset)){var y=T.createRange();y.setStart(h.node,h.offset),p.removeAllRanges(),B>ue?(p.addRange(y),p.extend(d.node,d.offset)):(y.setEnd(d.node,d.offset),p.addRange(y))}}}}for(T=[],p=i;p=p.parentNode;)p.nodeType===1&&T.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<T.length;i++){var S=T[i];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}fn=!!ar,nr=ar=null}finally{ve=u,I.p=n,q.T=a}}e.current=t,Be=2}}function Vi(){if(Be===2){Be=0;var e=Vt,t=va,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=q.T,q.T=null;var a=I.p;I.p=2;var n=ve;ve|=4;try{Rd(e,t.alternate,t)}finally{ve=n,I.p=a,q.T=l}}Be=3}}function Zi(){if(Be===4||Be===3){Be=0;var e=Fa;Fa=null,Ux();var t=Vt,l=va,a=al,n=Fd,u=(a&335544064)===a?10262:10256;if((l.subtreeFlags&u)!==0||(l.flags&u)!==0?Be=5:(Be=0,va=Vt=null,i0(t,t.pendingLanes)),u=t.pendingLanes,u===0&&(Ql=null),ec(a),l=l.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(xn,l,void 0,(l.current.flags&128)===128)}catch{}if(n!==null){l=q.T,u=I.p,I.p=2,q.T=null;try{for(var c=t.onRecoverableError,i=0;i<n.length;i++){var f=n[i];c(f.value,{componentStack:f.stack})}}finally{q.T=l,I.p=u}}if(n=Wa,c=Ia,Ia=null,n!==null&&(Wa=null,c===null&&(c=[]),e!==null))for(f=0;f<n.length;f++)l=(0,n[f])(c),l!==void 0&&e.finished.finally(l);(al&3)!==0&&zs(),nl(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Ns?$n++:($n=0,Ns=t):($n=0,Ns=null),Fn(0)}}function i0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Cn(t)))}function zs(){return Fa!==null&&(Fa.skipTransition(),Fa=null),Xi(),Vi(),Zi(),Ki()}function Ki(){if(Be!==5)return!1;var e=Vt,t=Yi;Yi=0;var l=ec(al),a=q.T,n=I.p;try{I.p=32>l?32:l,q.T=null,l=Li,Li=null;var u=Vt,c=al;if(Be=0,va=Vt=null,al=0,(ve&6)!==0)throw Error(o(331));var i=ve;if(ve|=4,Jd(u.current),Vd(u,u.current,c,l),ve=i,Fn(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(xn,u)}catch{}return!0}finally{I.p=n,q.T=a,i0(e,t)}}function r0(e,t,l){t=wt(l,t),t=ri(e.stateNode,t,2),e=wl(e,t,2),e!==null&&(bn(e,2),nl(e))}function je(e,t,l){if(e.tag===3)r0(e,e,l);else for(;t!==null;){if(t.tag===3){r0(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ql===null||!Ql.has(a))){e=wt(l,e),l=ud(2),a=wl(t,l,2),a!==null&&(sd(l,a,t,e),bn(a,2),nl(a));break}}t=t.return}}function Ji(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new d1;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Bi=!0,n.add(l),e=g1.bind(null,e,t,l),t.then(e,e))}function g1(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ae===e&&(fe&l)===l&&((Le===4||Le===3&&(fe&62914560)===fe&&300>gt()-ys)&&(ve&2)===0?en(e,0):vs|=l,$a===fe&&($a=0)),nl(e)}function f0(e,t){t===0&&(t=Jr()),e=ta(e,t),e!==null&&(bn(e,t),nl(e))}function N1(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),f0(e,l)}function j1(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(t),f0(e,l)}function S1(e,t){return Fs(e,t)}var ln=null,an=null,ki=!1,Es=!1,$i=!1,Xl=0;function nl(e){e!==an&&e.next===null&&(an===null?ln=an=e:an=an.next=e),Es=!0,ki||(ki=!0,z1())}function Fn(e,t){if(!$i&&Es){$i=!0;do for(var l=!1,a=ln;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var c=a.suspendedLanes,i=a.pingedLanes;u=(1<<31-jt(42|e)+1)-1,u&=n&~(c&~i),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,x0(a,u))}else u=fe,u=vu(a,a===Ae?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||hn(a,u)||(l=!0,x0(a,u));a=a.next}while(l);$i=!1}}function T1(){o0()}function o0(){Es=ki=!1;var e=0;Xl!==0&&H1()&&(e=Xl);for(var t=gt(),l=null,a=ln;a!==null;){var n=a.next,u=d0(a,t);u===0?(a.next=null,l===null?ln=n:l.next=n,n===null&&(an=l)):(l=a,(e!==0||(u&3)!==0)&&(Es=!0)),a=n}Be!==0&&Be!==5||Fn(e),Xl!==0&&(Xl=0)}function d0(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var c=31-jt(u),i=1<<c,f=n[c];f===-1?((i&l)===0||(i&a)!==0)&&(n[c]=Gx(i,t)):f<=t&&(e.expiredLanes|=i),u&=~i}if(t=Ae,l=fe,l=vu(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ws(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||hn(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Ws(a),ec(l)){case 2:case 8:l=Vr;break;case 32:l=mu;break;case 268435456:l=Zr;break;default:l=mu}return a=m0.bind(null,e),l=Fs(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Ws(a),e.callbackPriority=2,e.callbackNode=null,2}function m0(e,t){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(zs()&&e.callbackNode!==l)return null;var a=fe;return a=vu(e,e===Ae?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Id(e,a,t),d0(e,gt()),e.callbackNode!=null&&e.callbackNode===l?m0.bind(null,e):null)}function x0(e,t){if(zs())return null;Id(e,t,!0)}function z1(){q1(function(){(ve&6)!==0?Fs(Xr,T1):o0()})}function Fi(){if(Xl===0){var e=ca;e===0&&(e=xu,xu<<=1,(xu&261888)===0&&(xu=256)),Xl=e}return Xl}function h0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ju(e)}function E1(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var u=h0((n[xt]||null).action),c=a.submitter;c&&(t=(t=c[xt]||null)?h0(t.formAction):c.getAttribute("formAction"),t!==null&&(u=t,c=null));var i=new Eu("action","action",null,a,n);e.push({event:i,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Xl!==0){var f=new FormData(n,c);ni(l,{pending:!0,data:f,method:n.method,action:u},null,f)}}else typeof u=="function"&&(i.preventDefault(),f=new FormData(n,c),ni(l,{pending:!0,data:f,method:n.method,action:u},u,f))},currentTarget:n}]})}}for(var Wi=0;Wi<jc.length;Wi++){var Ii=jc[Wi],_1=Ii.toLowerCase(),A1=Ii[0].toUpperCase()+Ii.slice(1);Lt(_1,"on"+A1)}Lt(Lf,"onAnimationEnd"),Lt(Qf,"onAnimationIteration"),Lt(Gf,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(Bh,"onTransitionRun"),Lt(qh,"onTransitionStart"),Lt(Yh,"onTransitionCancel"),Lt(Xf,"onTransitionEnd"),za("onMouseEnter",["mouseout","mouseover"]),za("onMouseLeave",["mouseout","mouseover"]),za("onPointerEnter",["pointerout","pointerover"]),za("onPointerLeave",["pointerout","pointerover"]),Il("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Il("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Il("onBeforeInput",["compositionend","keypress","textInput","paste"]),Il("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Il("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Il("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wn));function b0(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var c=a.length-1;0<=c;c--){var i=a[c],f=i.instance,b=i.currentTarget;if(i=i.listener,f!==u&&n.isPropagationStopped())break e;u=i,n.currentTarget=b;try{u(n)}catch(g){Ou(g)}n.currentTarget=null,u=f}else for(c=0;c<a.length;c++){if(i=a[c],f=i.instance,b=i.currentTarget,i=i.listener,f!==u&&n.isPropagationStopped())break e;u=i,n.currentTarget=b;try{u(n)}catch(g){Ou(g)}n.currentTarget=null,u=f}}}}function ie(e,t){var l=t[Pr];l===void 0&&(l=t[Pr]=new Set);var a=e+"__bubble";l.has(a)||(v0(t,e,2,!1),l.add(a))}function Pi(e,t,l){var a=0;t&&(a|=4),v0(l,e,a,t)}var _s="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[_s]){e[_s]=!0,lf.forEach(function(l){l!=="selectionchange"&&(O1.has(l)||Pi(l,!1,e),Pi(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_s]||(t[_s]=!0,Pi("selectionchange",!1,t))}}function v0(e,t,l,a){switch(sm(t)){case 2:var n=Nb;break;case 8:n=jb;break;default:n=gr}l=n.bind(null,t,l,e),n=void 0,!ic||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function tr(e,t,l,a,n){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var i=a.stateNode.containerInfo;if(i===n)break;if(c===4)for(c=a.return;c!==null;){var f=c.tag;if((f===3||f===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;i!==null;){if(c=Wl(i),c===null)return;if(f=c.tag,f===5||f===6||f===26||f===27){a=u=c;continue e}i=i.parentNode}}a=a.return}bf(function(){var b=u,g=sc(l),T=[];e:{var x=Vf.get(e);if(x!==void 0){var p=Eu,D=e;switch(e){case"keypress":if(Tu(l)===0)break e;case"keydown":case"keyup":p=mh;break;case"focusin":D="focus",p=dc;break;case"focusout":D="blur",p=dc;break;case"beforeblur":case"afterblur":p=dc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=yh;break;case Lf:case Qf:case Gf:p=nh;break;case Xf:p=gh;break;case"scroll":case"scrollend":p=Px;break;case"wheel":p=jh;break;case"copy":case"cut":case"paste":p=sh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Nf;break;case"submit":p=bh;break;case"toggle":case"beforetoggle":p=Th}var B=(t&4)!==0,ue=!B&&(e==="scroll"||e==="scrollend"),h=B?x!==null?x+"Capture":null:x;B=[];for(var d=b,y;d!==null;){var S=d;if(y=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||y===null||h===null||(S=pn(d,h),S!=null&&B.push(In(d,S,y))),ue)break;d=d.return}0<B.length&&(x=new p(x,D,null,l,g),T.push({event:x,listeners:B}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&l!==uc&&(D=l.relatedTarget||l.fromElement)&&(Wl(D)||D[ja]))break e;(x||p)&&(D=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,x?(p=l.relatedTarget||l.toElement,x=b,p=p?Wl(p):null,p!==null&&(ue=O(p),B=p.tag,p!==ue||B!==5&&B!==27&&B!==6)&&(p=null)):(x=null,p=b),x!==p&&(B=pf,S="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(B=Nf,S="onPointerLeave",h="onPointerEnter",d="pointer"),ue=x==null?D:yn(x),y=p==null?D:yn(p),D=new B(S,d+"leave",x,l,g),D.target=ue,D.relatedTarget=y,S=null,Wl(g)===b&&(B=new B(h,d+"enter",p,l,g),B.target=y,B.relatedTarget=ue,S=B),ue=S,B=x&&p?Oe(x,p,C1):null,x!==null&&y0(T,D,x,B,!1),p!==null&&ue!==null&&y0(T,ue,p,B,!0)))}e:{if(x=b?yn(b):window,p=x.nodeName&&x.nodeName.toLowerCase(),p==="select"||p==="input"&&x.type==="file")var U=Of;else if(_f(x))if(Cf)U=Uh;else{U=Mh;var oe=Dh}else p=x.nodeName,!p||p.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?b&&nc(b.elementType)&&(U=Of):U=wh;if(U&&(U=U(e,b))){Af(T,U,l,g);break e}oe&&oe(e,x,b)}switch(oe=b?yn(b):window,e){case"focusin":(_f(oe)||oe.contentEditable==="true")&&(Da=oe,pc=b,_n=null);break;case"focusout":_n=pc=Da=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,qf(T,l,g);break;case"selectionchange":if(Hh)break;case"keydown":case"keyup":qf(T,l,g)}var L;if(xc)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else Ca?zf(e,l)&&(J="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(J="onCompositionStart");J&&(jf&&l.locale!=="ko"&&(Ca||J!=="onCompositionStart"?J==="onCompositionEnd"&&Ca&&(L=vf()):(Tl=g,rc="value"in Tl?Tl.value:Tl.textContent,Ca=!0)),oe=As(b,J),0<oe.length&&(J=new gf(J,e,null,l,g),T.push({event:J,listeners:oe}),L?J.data=L:(L=Ef(l),L!==null&&(J.data=L)))),(L=Eh?_h(e,l):Ah(e,l))&&(J=As(b,"onBeforeInput"),0<J.length&&(oe=new gf("onBeforeInput","beforeinput",null,l,g),T.push({event:oe,listeners:J}),oe.data=L)),E1(T,e,b,l,g)}b0(T,t)})}function In(e,t,l){return{instance:e,listener:t,currentTarget:l}}function As(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=pn(e,l),n!=null&&a.unshift(In(e,n,u)),n=pn(e,t),n!=null&&a.push(In(e,n,u))),e.tag===3)return a;e=e.return}return[]}function C1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function y0(e,t,l,a,n){for(var u=t._reactName,c=[];l!==null&&l!==a;){var i=l,f=i.alternate,b=i.stateNode;if(i=i.tag,f!==null&&f===a)break;i!==5&&i!==26&&i!==27||b===null||(f=b,n?(b=pn(l,u),b!=null&&c.unshift(In(l,b,f))):n||(b=pn(l,u),b!=null&&c.push(In(l,b,f)))),l=l.return}c.length!==0&&e.push({event:t,listeners:c})}var D1=/\r\n?/g,M1=/\u0000|\uFFFD/g;function p0(e){return(typeof e=="string"?e:""+e).replace(D1,`
`).replace(M1,"")}function g0(e,t){return t=p0(t),p0(e)===t}function Se(e,t,l,a,n,u){switch(l){case"children":if(typeof a=="string")t==="body"||t==="textarea"&&a===""||_a(e,a);else if(typeof a=="number"||typeof a=="bigint")t!=="body"&&_a(e,""+a);else return;break;case"className":Nu(e,"class",a);break;case"tabIndex":Nu(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Nu(e,l,a);break;case"style":xf(e,a,u);return;case"data":if(t!=="object"){Nu(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ju(a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(t!=="input"&&Se(e,t,"name",n.name,n,null),Se(e,t,"formEncType",n.formEncType,n,null),Se(e,t,"formMethod",n.formMethod,n,null),Se(e,t,"formTarget",n.formTarget,n,null)):(Se(e,t,"encType",n.encType,n,null),Se(e,t,"method",n.method,n,null),Se(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ju(a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=kt);return;case"onScroll":a!=null&&ie("scroll",e);return;case"onScrollEnd":a!=null&&ie("scrollend",e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));(u!=null?u.__html:void 0)!==l&&(e.innerHTML=l)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=ju(a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":ie("beforetoggle",e),ie("toggle",e),gu(e,"popover",a);break;case"xlinkActuate":cl(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":cl(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":cl(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":cl(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":cl(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":cl(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":cl(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":cl(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":cl(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":gu(e,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")l=Wx.get(l)||l,gu(e,l,a);else return}he=!0}function lr(e,t,l,a,n,u){switch(l){case"style":xf(e,a,u);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));(u!=null?u.__html:void 0)!==l&&(e.innerHTML=l)}}break;case"children":if(typeof a=="string")_a(e,a);else if(typeof a=="number"||typeof a=="bigint")_a(e,""+a);else return;break;case"onScroll":a!=null&&ie("scroll",e);return;case"onScrollEnd":a!=null&&ie("scrollend",e);return;case"onClick":a!=null&&(e.onclick=kt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!af.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),u=l.slice(2,n?l.length-7:void 0),t=e[xt]||null,t=t!=null?t[l]:null,typeof t=="function"&&e.removeEventListener(u,t,n),typeof a=="function")){typeof t!="function"&&t!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(u,a,n);break e}he=!0,l in e?e[l]=a:a===!0?e.setAttribute(l,""):gu(e,l,a)}return}he=!0}function ct(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var c=l[u];if(c!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Se(e,t,u,c,l,null)}}n&&Se(e,t,"srcSet",l.srcSet,l,null),a&&Se(e,t,"src",l.src,l,null);return;case"input":ie("invalid",e);var i=u=c=n=null,f=null,b=null;for(a in l)if(l.hasOwnProperty(a)){var g=l[a];if(g!=null)switch(a){case"name":n=g;break;case"type":c=g;break;case"checked":f=g;break;case"defaultChecked":b=g;break;case"value":u=g;break;case"defaultValue":i=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(137,t));break;default:Se(e,t,a,g,l,null)}}ff(e,u,i,f,b,c,n,!1);return;case"select":ie("invalid",e),a=c=u=null;for(n in l)if(l.hasOwnProperty(n)&&(i=l[n],i!=null))switch(n){case"value":u=i;break;case"defaultValue":c=i;break;case"multiple":a=i;default:Se(e,t,n,i,l,null)}t=u,l=c,e.multiple=!!a,t!=null?Ea(e,!!a,t,!1):l!=null&&Ea(e,!!a,l,!0);return;case"textarea":ie("invalid",e),u=n=a=null;for(c in l)if(l.hasOwnProperty(c)&&(i=l[c],i!=null))switch(c){case"value":a=i;break;case"defaultValue":n=i;break;case"children":u=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:Se(e,t,c,i,l,null)}df(e,a,n,u);return;case"option":for(f in l)if(l.hasOwnProperty(f)&&(a=l[f],a!=null))switch(f){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(e,t,f,a,l,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(a=0;a<Wn.length;a++)ie(Wn[a],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in l)if(l.hasOwnProperty(b)&&(a=l[b],a!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Se(e,t,b,a,l,null)}return;default:if(nc(t)){for(g in l)l.hasOwnProperty(g)&&(a=l[g],a!==void 0&&lr(e,t,g,a,l,void 0));return}}for(i in l)l.hasOwnProperty(i)&&(a=l[i],a!=null&&Se(e,t,i,a,l,null))}var w1={};function U1(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,c=null,i=null,f=null,b=null,g=null;for(p in l){var T=l[p];if(l.hasOwnProperty(p)&&T!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":f=T;default:a.hasOwnProperty(p)||Se(e,t,p,null,a,T)}}for(var x in a){var p=a[x];if(T=l[x],a.hasOwnProperty(x)&&(p!=null||T!=null))switch(x){case"type":p!==T&&(he=!0),u=p;break;case"name":p!==T&&(he=!0),n=p;break;case"checked":p!==T&&(he=!0),b=p;break;case"defaultChecked":p!==T&&(he=!0),g=p;break;case"value":p!==T&&(he=!0),c=p;break;case"defaultValue":p!==T&&(he=!0),i=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(o(137,t));break;default:p!==T&&Se(e,t,x,p,a,T)}}lc(e,c,i,f,b,g,u,n);return;case"select":p=c=i=x=null;for(u in l)if(f=l[u],l.hasOwnProperty(u)&&f!=null)switch(u){case"value":break;case"multiple":p=f;default:a.hasOwnProperty(u)||Se(e,t,u,null,a,f)}for(n in a)if(u=a[n],f=l[n],a.hasOwnProperty(n)&&(u!=null||f!=null))switch(n){case"value":u!==f&&(he=!0),x=u;break;case"defaultValue":u!==f&&(he=!0),i=u;break;case"multiple":u!==f&&(he=!0),c=u;default:u!==f&&Se(e,t,n,u,a,f)}t=i,l=c,a=p,x!=null?Ea(e,!!l,x,!1):!!a!=!!l&&(t!=null?Ea(e,!!l,t,!0):Ea(e,!!l,l?[]:"",!1));return;case"textarea":p=x=null;for(i in l)if(n=l[i],l.hasOwnProperty(i)&&n!=null&&!a.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:Se(e,t,i,null,a,n)}for(c in a)if(n=a[c],u=l[c],a.hasOwnProperty(c)&&(n!=null||u!=null))switch(c){case"value":n!==u&&(he=!0),x=n;break;case"defaultValue":n!==u&&(he=!0),p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==u&&Se(e,t,c,n,a,u)}of(e,x,p);return;case"option":for(var D in l)if(x=l[D],l.hasOwnProperty(D)&&x!=null&&!a.hasOwnProperty(D))switch(D){case"selected":e.selected=!1;break;default:Se(e,t,D,null,a,x)}for(f in a)if(x=a[f],p=l[f],a.hasOwnProperty(f)&&x!==p&&(x!=null||p!=null))switch(f){case"selected":x!==p&&(he=!0),e.selected=x&&typeof x!="function"&&typeof x!="symbol";break;default:Se(e,t,f,x,a,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var B in l)x=l[B],l.hasOwnProperty(B)&&x!=null&&!a.hasOwnProperty(B)&&Se(e,t,B,null,a,x);for(b in a)if(x=a[b],p=l[b],a.hasOwnProperty(b)&&x!==p&&(x!=null||p!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(o(137,t));break;default:Se(e,t,b,x,a,p)}return;default:if(nc(t)){for(var ue in l)x=l[ue],l.hasOwnProperty(ue)&&x!==void 0&&!a.hasOwnProperty(ue)&&lr(e,t,ue,void 0,a,x);for(g in a)x=a[g],p=l[g],!a.hasOwnProperty(g)||x===p||x===void 0&&p===void 0||lr(e,t,g,x,a,p);return}}for(var h in l)x=l[h],l.hasOwnProperty(h)&&x!=null&&!a.hasOwnProperty(h)&&Se(e,t,h,null,a,x);for(T in a)x=a[T],p=l[T],!a.hasOwnProperty(T)||x===p||x==null&&p==null||Se(e,t,T,x,a,p)}function N0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function R1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],u=n.transferSize,c=n.initiatorType,i=n.duration;if(u&&i&&N0(c)){for(c=0,i=n.responseEnd,a+=1;a<l.length;a++){var f=l[a],b=f.startTime;if(b>i)break;var g=f.transferSize,T=f.initiatorType;g&&N0(T)&&(f=f.responseEnd,c+=g*(f<i?1:(i-b)/(f-b)))}if(--a,t+=8*(u+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ar=null,nr=null;function Pn(e){return e.nodeType===9?e:e.ownerDocument}function j0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function T0(e,t,l,a){return l=Pn(l).createElement(e),l[lt]=a,l[xt]=t,ct(l,e,t),We(l),l}function ur(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sr=null;function H1(){var e=window.event;return e&&e.type==="popstate"?e===sr?!1:(sr=e,!0):(sr=null,!1)}var cr=typeof setTimeout=="function"?setTimeout:void 0,B1=typeof clearTimeout=="function"?clearTimeout:void 0,z0=typeof Promise=="function"?Promise:void 0,E0=typeof requestAnimationFrame=="function"?requestAnimationFrame:cr,q1=typeof queueMicrotask=="function"?queueMicrotask:typeof z0<"u"?function(e){return z0.resolve(null).then(e).catch(Y1)}:cr;function Y1(e){setTimeout(function(){throw e})}function Vl(e){return e==="head"}function _0(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),on(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")hr(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,hr(l);for(var u=l.firstChild;u;){var c=u.nextSibling,i=u.nodeName;u[vn]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=c}}else l==="body"&&hr(e.ownerDocument.body);l=n}while(l);on(t)}function A0(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function O0(e,t,l){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,l!=null&&(e.style.viewTransitionClass=l),l=getComputedStyle(e),l.display==="inline"){if(t=e.getClientRects(),t.length===1)var a=1;else for(var n=a=0;n<t.length;n++){var u=t[n];0<u.width&&0<u.height&&a++}a===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+l.paddingTop,e.marginBottom="-"+l.paddingBottom)}}function C0(e,t){e=e.style,t=t.style;var l=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=l==null||typeof l=="boolean"?"":(""+l).trim(),l=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=l==null||typeof l=="boolean"?"":(""+l).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(l=t.display,e.display=l==null||typeof l=="boolean"?"":l,l=t.margin,l!=null?e.margin=l:(l=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=l==null||typeof l=="boolean"?"":l,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function L1(e,t,l){return l=l.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=l.innerHeight&&e.left<=l.innerWidth}}function ir(e){var t=e.getBoundingClientRect(),l=getComputedStyle(e);return L1(t,l,e)}function Q1(e){return e.documentElement.clientHeight}function G1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function X1(e,t,l,a,n,u,c,i,f){var b=t.nodeType===9?t:t.ownerDocument;try{var g=b.startViewTransition({update:function(){var x=b.defaultView,p=x.navigation&&x.navigation.transition,D=b.fonts.status;a();var B=[];if(D==="loaded"&&(Q1(b),b.fonts.status==="loading"&&B.push(b.fonts.ready)),D=B.length,e!==null)for(var ue=e.suspenseyImages,h=0,d=0;d<ue.length;d++){var y=ue[d];if(!y.complete){var S=y.getBoundingClientRect();if(0<S.bottom&&0<S.right&&S.top<x.innerHeight&&S.left<x.innerWidth){if(h+=W0(y),h>Ds){B.length=D;break}y=new Promise(G1.bind(y)),B.push(y)}}}if(0<B.length)return x=Promise.race([Promise.all(B),new Promise(function(U){return setTimeout(U,500)})]).then(n,n),(p?Promise.allSettled([p.finished,x]):x).then(u,u);if(n(),p)return p.finished.then(u,u);u()},types:l});b.__reactViewTransition=g;var T=[];return g.ready.then(function(){for(var x=b.documentElement.getAnimations({subtree:!0}),p=0;p<x.length;p++){var D=x[p],B=D.effect,ue=B.pseudoElement;if(ue!=null&&ue.startsWith("::view-transition")){T.push(D),D=B.getKeyframes();for(var h=ue=void 0,d=!0,y=0;y<D.length;y++){var S=D[y],U=S.width;if(ue===void 0)ue=U;else if(ue!==U){d=!1;break}if(U=S.height,h===void 0)h=U;else if(h!==U){d=!1;break}delete S.width,delete S.height,S.transform==="none"&&delete S.transform}d&&ue!==void 0&&h!==void 0&&(B.setKeyframes(D),d=getComputedStyle(B.target,B.pseudoElement),d.width!==ue||d.height!==h)&&(d=D[0],d.width=ue,d.height=h,d=D[D.length-1],d.width=ue,d.height=h,B.setKeyframes(D))}}c()},function(x){b.__reactViewTransition===g&&(b.__reactViewTransition=null);try{if(typeof x=="object"&&x!==null)switch(x.name){case"InvalidStateError":(x.message==="View transition was skipped because document visibility state is hidden."||x.message==="Skipping view transition because document visibility state has become hidden."||x.message==="Skipping view transition because viewport size changed."||x.message==="Transition was aborted because of invalid state")&&(x=null)}x!==null&&f(x)}finally{a(),n(),c()}}),g.finished.finally(function(){for(var x=0;x<T.length;x++)T[x].cancel();b.__reactViewTransition===g&&(b.__reactViewTransition=null),i()}),g}catch{return a(),n(),c(),null}}function ya(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}ya.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:K({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},ya.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,l=e.getAnimations({subtree:!0}),a=[],n=0;n<l.length;n++){var u=l[n].effect;u!==null&&u.target===e&&u.pseudoElement===t&&a.push(l[n])}return a},ya.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function D0(e){return{name:e,group:new ya("group",e),imagePair:new ya("image-pair",e),old:new ya("old",e),new:new ya("new",e)}}function Ct(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Ct.prototype.addEventListener=function(e,t,l){var a=null,n=null;if(!(l!=null&&typeof l!="boolean"&&(a=l.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(w0(u,e,t,l)===-1){var c=this,i=t;l!=null&&typeof l!="boolean"&&l.once===!0&&(i=function(f){c.removeEventListener(e,t,l),typeof t=="function"?t.call(this,f):t.handleEvent(f)}),a!==null&&(n=c.removeEventListener.bind(c,e,t,l),a.addEventListener("abort",n,{once:!0}),n=a.removeEventListener.bind(a,"abort",n)),a=nn(l),u.push({type:e,listener:t,optionsOrUseCapture:l,attachedListener:i,cleanup:n}),N(this._fragmentFiber.child,!1,V1,e,i,a)}this._eventListeners=u}};function V1(e,t,l,a){return Z(e).addEventListener(t,l,a),!1}Ct.prototype.removeEventListener=function(e,t,l){var a=this._eventListeners;if(a!==null&&(t=w0(a,e,t,l),t!==-1)){var n=a[t];l=n.attachedListener;var u=n.cleanup;n=nn(n.optionsOrUseCapture),N(this._fragmentFiber.child,!1,Z1,e,l,n),a.splice(t,1),u!==null&&u()}};function Z1(e,t,l,a){return Z(e).removeEventListener(t,l,a),!1}function nn(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function M0(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function w0(e,t,l,a){if(e.length===0)return-1;a=M0(a);for(var n=0;n<e.length;n++){var u=e[n];if(u.type===t&&u.listener===l&&M0(u.optionsOrUseCapture)===a)return n}return-1}Ct.prototype.dispatchEvent=function(e){var t=A(this._fragmentFiber);if(t===null)return!0;t=Z(t);var l=this._eventListeners;if(l!==null&&0<l.length||!e.bubbles){var a=t.nodeType===9?t.createComment(""):document.createTextNode("");if(l)for(var n=0;n<l.length;n++){var u=l[n];a.addEventListener(u.type,u.attachedListener,nn(u.optionsOrUseCapture))}if(t.appendChild(a),e=a.dispatchEvent(e),l)for(n=0;n<l.length;n++)u=l[n],a.removeEventListener(u.type,u.attachedListener,nn(u.optionsOrUseCapture));return t.removeChild(a),e}return t.dispatchEvent(e)},Ct.prototype.focus=function(e){N(this._fragmentFiber.child,!0,U0,e,void 0,void 0)};function U0(e,t){return e.tag===6?!1:(e=Z(e),ab(e,t))}Ct.prototype.focusLast=function(e){var t=[];N(this._fragmentFiber.child,!0,rr,t,void 0,void 0);for(var l=t.length-1;0<=l&&!U0(t[l],e);l--);};function rr(e,t){return t.push(e),!1}Ct.prototype.blur=function(){var e=A(this._fragmentFiber);e!==null&&(e=Z(e),e=Pn(e).activeElement,e!==null&&N(this._fragmentFiber.child,!1,K1,e,void 0,void 0))};function K1(e,t){return e.tag===6?!1:(e=Z(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Ct.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),N(this._fragmentFiber.child,!1,J1,e,void 0,void 0)};function J1(e,t){return e.tag===6||(e=Z(e),t.observe(e)),!1}Ct.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),N(this._fragmentFiber.child,!1,k1,e,void 0,void 0);for(var l=t=0;l<Zt.length;l++){var a=Zt[l];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):Zt[t++]=a}Zt.length=t}};function k1(e,t){return e.tag===6||(e=Z(e),t.unobserve(e)),!1}var Zt=[],fr=!1;function $1(e,t,l){Zt.push({fragmentInstance:e,observer:t,instance:l}),fr||(fr=!0,nb(function(){fr=!1;var a=Zt;Zt=[];for(var n=0;n<a.length;n++){var u=a[n];u.observer.unobserve(u.instance)}}))}Ct.prototype.getClientRects=function(){var e=[];return N(this._fragmentFiber.child,!1,F1,e,void 0,void 0),e};function F1(e,t){if(e.tag===6){e=e.stateNode;var l=e.ownerDocument.createRange();l.selectNodeContents(e),t.push.apply(t,l.getClientRects())}else e=Z(e),t.push.apply(t,e.getClientRects());return!1}Ct.prototype.getRootNode=function(e){var t=A(this._fragmentFiber);return t===null?this:Z(t).getRootNode(e)},Ct.prototype.compareDocumentPosition=function(e){var t=A(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var l=[];N(this._fragmentFiber.child,!1,rr,l,void 0,void 0);var a=Z(t);if(l.length===0){if(l=a,ee(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(l=t)}t=this._fragmentFiber;var n=a=l.compareDocumentPosition(e);return l===e?n=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(l=Q(t)[1],l===null?n=Node.DOCUMENT_POSITION_PRECEDING:(e=Z(l).compareDocumentPosition(e),n=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Z(l[0]),n=Z(l[l.length-1]);var u=ee(this._fragmentFiber)?t.parentElement:a;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=u.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var c=t.compareDocumentPosition(e),i=n.compareDocumentPosition(e),f=c&Node.DOCUMENT_POSITION_CONTAINED_BY||i&Node.DOCUMENT_POSITION_CONTAINED_BY;return i=a&&u&&c&Node.DOCUMENT_POSITION_FOLLOWING&&i&Node.DOCUMENT_POSITION_PRECEDING,t=a&&t===e||u&&n===e||f||i?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&t===e||!u&&n===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:c,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||W1(t,this._fragmentFiber,l[0],l[l.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function W1(e,t,l,a,n){var u=Wl(n);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(l=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===t||u.alternate===t)){l=!0;break e}u=u.return}l=!1}return l}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=n.ownerDocument,n===u||n===u.documentElement||n===u.body;e:{for(u=t,t=A(t);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==t&&u.alternate!==t)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!u)&&!(t=u===l)&&(t=Oe(l,u,qe),t===null?t=!1:(N(t,!0,Re,u,l),u=ye,ye=null,t=u!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!u)&&!(t=u===a)&&(t=Oe(a,u,qe),t===null?t=!1:(N(t,!0,Te,u,a),u=ye,re=ye=null,t=u!==null)),t):!1}function R0(e,t){var l=e.ownerDocument.createRange();l.selectNodeContents(e),e=l.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Ct.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(o(566));var t=[];N(this._fragmentFiber.child,!1,rr,t,void 0,void 0);var l=e!==!1;if(t.length===0){var a=Q(this._fragmentFiber);if(a=l?a[1]||a[0]||A(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=Z(a),R0(e,l);return}if(a=Z(a),a.nodeType!==9){if(a.nodeType===11){l="host"in a?a.host:null,l!==null&&l.scrollIntoView(e);return}a.scrollIntoView(e)}}for(a=l?t.length-1:0;a!==(l?-1:t.length);){var n=t[a];n.tag===6?(n=Z(n),R0(n,l)):Z(n).scrollIntoView(e),a+=l?-1:1}};function I1(e,t){return e=Z(e),H0(e,t),!1}function H0(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function B0(e,t){var l=t._eventListeners;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a];e.addEventListener(n.type,n.attachedListener,nn(n.optionsOrUseCapture))}e.nodeType!==3&&(l=t._observers,l!==null&&l.forEach(function(u){for(var c=0,i=0;i<Zt.length;i++){var f=Zt[i];(f.fragmentInstance!==t||f.observer!==u||f.instance!==e)&&(Zt[c++]=f)}Zt.length=c,u.observe(e)}),H0(e,t))}function P1(e,t){var l=t._eventListeners;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a];e.removeEventListener(n.type,n.attachedListener,nn(n.optionsOrUseCapture))}e.nodeType!==3&&(l=t._observers,l!==null&&l.forEach(function(u){typeof u.rootMargin=="string"?$1(t,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function or(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":or(l),pu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function eb(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[vn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=qt(e.nextSibling),e===null)break}return null}function tb(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=qt(e.nextSibling),e===null))return null;return e}function q0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=qt(e.nextSibling),e===null))return null;return e}function dr(e){return e.data==="$?"||e.data==="$~"}function mr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function lb(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xr=null;function Y0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return qt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function L0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function ab(e,t){function l(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",l,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",l,!0)}return a}function nb(e){E0(function(){E0(function(t){return e(t)})})}function Q0(e,t,l){switch(t=Pn(l),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function G0(e,t,l){for(var a in l){var n=l[a];l.hasOwnProperty(a)&&n!=null&&Se(e,t,a,null,w1,n)}l.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===kt&&(e.onclick=null),pu(e)}function hr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);pu(e)}var Yt=new Map,X0=new Set;function eu(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var gl=I.d;I.d={f:ub,r:sb,D:cb,C:ib,L:rb,m:fb,X:db,S:ob,M:mb};function ub(){var e=gl.f(),t=js();return e||t}function sb(e){var t=Sa(e);t!==null&&t.tag===5&&t.type==="form"?Zo(t):gl.r(e)}var un=typeof document>"u"?null:document;function V0(e,t,l){var a=un;if(a&&typeof t=="string"&&t){var n=Dt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),X0.has(n)||(X0.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),ct(t,"link",e),We(t),a.head.appendChild(t)))}}function cb(e){gl.D(e),V0("dns-prefetch",e,null)}function ib(e,t){gl.C(e,t),V0("preconnect",e,t)}function rb(e,t,l){gl.L(e,t,l);var a=un;if(a&&e&&t){var n='link[rel="preload"][as="'+Dt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+Dt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+Dt(l.imageSizes)+'"]')):n+='[href="'+Dt(e)+'"]';var u=n;switch(t){case"style":u=sn(e);break;case"script":u=cn(e)}if(!(Yt.has(u)||(e=K({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Yt.set(u,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(tu(u))||t==="script"&&a.querySelector(lu(u))))){var c=a.createElement("link");ct(c,"link",e),t==="style"&&(c[yu]=!0,c.onload=c.onerror=function(){tf(c)}),We(c),a.head.appendChild(c)}}}function fb(e,t){gl.m(e,t);var l=un;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Dt(a)+'"][href="'+Dt(e)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=cn(e)}if(!Yt.has(u)&&(e=K({rel:"modulepreload",href:e},t),Yt.set(u,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(lu(u)))return}a=l.createElement("link"),ct(a,"link",e),We(a),l.head.appendChild(a)}}}function ob(e,t,l){gl.S(e,t,l);var a=un;if(a&&e){var n=Ta(a).hoistableStyles,u=sn(e);t=t||"default";var c=n.get(u);if(!c){var i={loading:0,preload:null};if(c=a.querySelector(tu(u)))i.loading=5;else{e=K({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Yt.get(u))&&br(e,l);var f=c=a.createElement("link");We(f),ct(f,"link",e),f._p=new Promise(function(b,g){f.onload=b,f.onerror=g}),f.addEventListener("load",function(){i.loading|=1}),f.addEventListener("error",function(){i.loading|=2}),i.loading|=4,Os(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:i},n.set(u,c)}}}function db(e,t){gl.X(e,t);var l=un;if(l&&e){var a=Ta(l).hoistableScripts,n=cn(e),u=a.get(n);u||(u=l.querySelector(lu(n)),u||(e=K({src:e,async:!0},t),(t=Yt.get(n))&&vr(e,t),u=l.createElement("script"),We(u),ct(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function mb(e,t){gl.M(e,t);var l=un;if(l&&e){var a=Ta(l).hoistableScripts,n=cn(e),u=a.get(n);u||(u=l.querySelector(lu(n)),u||(e=K({src:e,async:!0,type:"module"},t),(t=Yt.get(n))&&vr(e,t),u=l.createElement("script"),We(u),ct(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Z0(e,t,l,a){var n=(n=Nl.current)?eu(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(l=sn(l.href),t=Ta(n).hoistableStyles,a=t.get(l),a||(a={type:"style",instance:null,count:0,state:null},t.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=sn(l.href);var u=Ta(n).hoistableStyles,c=u.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,c),(u=n.querySelector(tu(e)))?u._p||(c.instance=u,c.state.loading=5):(u=Yt.get(e),u||(u={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Yt.set(e,u)),xb(n,e,u,c.state))),t&&a===null)throw Error(o(528,""));return c}if(t&&a!==null)throw Error(o(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(l=cn(l),t=Ta(n).hoistableScripts,a=t.get(l),a||(a={type:"script",instance:null,count:0,state:null},t.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function sn(e){return'href="'+Dt(e)+'"'}function tu(e){return'link[rel="stylesheet"]['+e+"]"}function K0(e){return K({},e,{"data-precedence":e.precedence,precedence:null})}function xb(e,t,l,a){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[yu]!==!0){a.loading=1;return}}else t=e.createElement("link"),t[yu]=!0,t.onload=t.onerror=tf.bind(null,t),ct(t,"link",l),We(t),e.head.appendChild(t);a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2})}function cn(e){return'[src="'+Dt(e)+'"]'}function lu(e){return"script[async]"+e}function J0(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Dt(l.href)+'"]');if(a)return t.instance=a,We(a),a;var n=K({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),We(a),ct(a,"style",n),Os(a,l.precedence,e),t.instance=a;case"stylesheet":n=sn(l.href);var u=e.querySelector(tu(n));if(u)return t.state.loading|=4,t.instance=u,We(u),u;a=K0(l),(n=Yt.get(n))&&br(a,n),u=(e.ownerDocument||e).createElement("link"),We(u);var c=u;return c._p=new Promise(function(i,f){c.onload=i,c.onerror=f}),ct(u,"link",a),t.state.loading|=4,Os(u,l.precedence,e),t.instance=u;case"script":return u=cn(l.src),(n=e.querySelector(lu(u)))?(t.instance=n,We(n),n):(a=l,(n=Yt.get(u))&&(a=K({},l),vr(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),We(n),ct(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Os(a,l.precedence,e));return t.instance}function Os(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,c=0;c<a.length;c++){var i=a[c];if(i.dataset.precedence===t)u=i;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function br(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function vr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Cs=null;function k0(e,t,l){if(Cs===null){var a=new Map,n=Cs=new Map;n.set(l,a)}else n=Cs,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var u=l[n];if(!(u[vn]||u[lt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var c=u.getAttribute(t)||"";c=e+c;var i=a.get(c);i?i.push(u):a.set(c,[u])}}return a}function yr(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function hb(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $0(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function F0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function W0(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function I0(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=W0(t),e.suspenseyImages.push(t)),e=yb.bind(e),t.decode().then(e,e))}function bb(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=sn(a.href),u=t.querySelector(tu(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=au.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=u,We(u);return}u=t.ownerDocument||t,a=K0(a),(n=Yt.get(n))&&br(a,n),u=u.createElement("link"),We(u);var c=u;c._p=new Promise(function(i,f){c.onload=i,c.onerror=f}),ct(u,"link",a),l.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=au.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Ds=0;function vb(e,t){return e.stylesheets&&e.count===0&&ws(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&ws(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Ds===0&&(Ds=62500*R1());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ws(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Ds?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function P0(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ws(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function au(){this.count--,P0(this)}function yb(){this.imgCount--,P0(this)}var Ms=null;function ws(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ms=new Map,t.forEach(pb,e),Ms=null,au.call(e))}function pb(e,t){if(!(t.state.loading&4)){var l=Ms.get(e);if(l)var a=l.get(null);else{l=new Map,Ms.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var c=n[u];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}n=t.instance,c=n.getAttribute("data-precedence"),u=l.get(c)||a,u===a&&l.set(null,n),l.set(c,n),this.count++,a=au.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var rn={$$typeof:Ee,Provider:null,Consumer:null,_currentValue:ul,_currentValue2:ul,_threadCount:0};function gb(e,t,l,a,n,u,c,i,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Is(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Is(0),this.hiddenUpdates=Is(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.transitionTypes=null,this.incompleteTransitions=new Map}function em(e,t,l,a,n,u,c,i,f,b,g,T){return e=new gb(e,t,l,c,f,b,g,T,i),t=1,u===!0&&(t|=24),u=ht(3,null,null,t),e.current=u,u.stateNode=e,t=wc(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:t},Bc(u),e}function tm(e){return e?(e=Ua,e):Ua}function lm(e,t,l,a,n,u){n=tm(n),a.context===null?a.context=n:a.pendingContext=n,a=Ml(t),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=wl(e,a,t),l!==null&&(pt(l,e,t),Un(l,e,t))}function am(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function pr(e,t){am(e,t),(e=e.alternate)&&am(e,t)}function nm(e){if(e.tag===13||e.tag===31){var t=ta(e,67108864);t!==null&&pt(t,e,67108864),pr(e,67108864)}}function um(e){if(e.tag===13||e.tag===31){var t=Ot();t=Ps(t);var l=ta(e,t);l!==null&&pt(l,e,t),pr(e,t)}}var fn=!0;function Nb(e,t,l,a){var n=q.T;q.T=null;var u=I.p;try{I.p=2,gr(e,t,l,a)}finally{I.p=u,q.T=n}}function jb(e,t,l,a){var n=q.T;q.T=null;var u=I.p;try{I.p=8,gr(e,t,l,a)}finally{I.p=u,q.T=n}}function gr(e,t,l,a){if(fn){var n=Nr(a);if(n===null)tr(e,t,a,Us,l),cm(e,a);else if(Tb(n,e,t,l,a))a.stopPropagation();else if(cm(e,a),t&4&&-1<Sb.indexOf(e)){for(;n!==null;){var u=Sa(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var c=Fl(u.pendingLanes);if(c!==0){var i=u;for(i.pendingLanes|=2,i.entangledLanes|=2;c;){var f=1<<31-jt(c);i.entanglements[1]|=f,c&=~f}nl(u),(ve&6)===0&&(ps=gt()+500,Fn(0))}}break;case 31:case 13:i=ta(u,2),i!==null&&pt(i,u,2),js(),pr(u,2)}if(u=Nr(a),u===null&&tr(e,t,a,Us,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else tr(e,t,a,null,l)}}function Nr(e){return e=sc(e),jr(e)}var Us=null;function jr(e){if(Us=null,e=Wl(e),e!==null){var t=O(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=F(t),e!==null)return e;e=null}else if(l===31){if(e=W(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Us=e,null}function sm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rx()){case Xr:return 2;case Vr:return 8;case mu:case Hx:return 32;case Zr:return 268435456;default:return 32}default:return 32}}var Sr=!1,Zl=null,Kl=null,Jl=null,nu=new Map,uu=new Map,kl=[],Sb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cm(e,t){switch(e){case"focusin":case"focusout":Zl=null;break;case"dragenter":case"dragleave":Kl=null;break;case"mouseover":case"mouseout":Jl=null;break;case"pointerover":case"pointerout":nu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":uu.delete(t.pointerId)}}function su(e,t,l,a,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},t!==null&&(t=Sa(t),t!==null&&nm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Tb(e,t,l,a,n){switch(t){case"focusin":return Zl=su(Zl,e,t,l,a,n),!0;case"dragenter":return Kl=su(Kl,e,t,l,a,n),!0;case"mouseover":return Jl=su(Jl,e,t,l,a,n),!0;case"pointerover":var u=n.pointerId;return nu.set(u,su(nu.get(u)||null,e,t,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,uu.set(u,su(uu.get(u)||null,e,t,l,a,n)),!0}return!1}function im(e){var t=Wl(e.target);if(t!==null){var l=O(t);if(l!==null){if(t=l.tag,t===13){if(t=F(l),t!==null){e.blockedOn=t,Ir(e.priority,function(){um(l)});return}}else if(t===31){if(t=W(l),t!==null){e.blockedOn=t,Ir(e.priority,function(){um(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Nr(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);uc=a,l.target.dispatchEvent(a),uc=null}else return t=Sa(l),t!==null&&nm(t),e.blockedOn=l,!1;t.shift()}return!0}function rm(e,t,l){Rs(e)&&l.delete(t)}function zb(){Sr=!1,Zl!==null&&Rs(Zl)&&(Zl=null),Kl!==null&&Rs(Kl)&&(Kl=null),Jl!==null&&Rs(Jl)&&(Jl=null),nu.forEach(rm),uu.forEach(rm)}function Hs(e,t){e.blockedOn===t&&(e.blockedOn=null,Sr||(Sr=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,zb)))}var Bs=null;function fm(e){Bs!==e&&(Bs=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Bs===e&&(Bs=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(jr(a||l)===null)continue;break}var u=Sa(l);u!==null&&(e.splice(t,3),t-=3,ni(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function on(e){function t(f){return Hs(f,e)}Zl!==null&&Hs(Zl,e),Kl!==null&&Hs(Kl,e),Jl!==null&&Hs(Jl,e),nu.forEach(t),uu.forEach(t);for(var l=0;l<kl.length;l++){var a=kl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<kl.length&&(l=kl[0],l.blockedOn===null);)im(l),l.blockedOn===null&&kl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],c=n[xt]||null;if(typeof u=="function")c||fm(l);else if(c){var i=null;if(u&&u.hasAttribute("formAction")){if(n=u,c=u[xt]||null)i=c.formAction;else if(jr(n)!==null)continue}else i=c.action;typeof i=="function"?l[a+1]=i:(l.splice(a,3),a-=3),fm(l)}}}function om(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Tr(e){this._internalRoot=e}qs.prototype.render=Tr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var l=t.current,a=Ot();lm(l,a,e,t,null,null)},qs.prototype.unmount=Tr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lm(e.current,2,null,e,null,null),js(),t[ja]=null}};function qs(e){this._internalRoot=e}qs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wr();e={blockedOn:null,target:e,priority:t};for(var l=0;l<kl.length&&t!==0&&t<kl[l].priority;l++);kl.splice(l,0,e),l===0&&im(e)}};var dm=j.version;if(dm!=="19.3.1")throw Error(o(527,dm,"19.3.1"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=te(t),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var Eb={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ys.isDisabled&&Ys.supportsFiber)try{xn=Ys.inject(Eb),Nt=Ys}catch{}}return iu.createRoot=function(e,t){if(!w(e))throw Error(o(299));var l=!1,a="",n=td,u=ld,c=ad;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=em(e,1,!1,null,null,l,a,null,n,u,c,om),e[ja]=t.current,er(e),new Tr(t)},iu.hydrateRoot=function(e,t,l){if(!w(e))throw Error(o(299));var a=!1,n="",u=td,c=ld,i=ad,f=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(i=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),t=em(e,1,!0,t,l??null,a,n,f,u,c,i,om),t.context=tm(null),l=t.current,a=Ot(),a=Ps(a),n=Ml(a),n.callback=null,wl(l,n,a),l=a,t.current.lanes=l,bn(t,l),nl(t),e[ja]=t.current,er(e),new qs(t)},iu.version="19.3.1",iu}var jm;function Hb(){if(jm)return _r.exports;jm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(j){console.error(j)}}return r(),_r.exports=Rb(),_r.exports}var Bb=Hb();const qb=Tm(Bb),Yb=[
  {
    id:"REQ-2026-001",
    companyName:"청담 루미에르 피부과의원",
    applicantName:"김서연 총괄실장",
    phone:"010-8234-9102",
    email:"contact@lumiereclinic.kr",
    businessNumber:"214-87-19283",
    category:"스크럽/상의(여성) 15벌, 의사가운(남성) 5벌, 스크럽/하의(여성) 10벌",
    quantity:30,
    requestedItems:[
      {id:"r1",industry:"메디컬",gender:"여성",product:"스크럽/상의",qty:15,note:"원내 로고 자수 및 네이비 색상 희망"},
      {id:"r2",industry:"메디컬",gender:"남성",product:"의사가운",qty:5,note:"왼쪽 가슴 영문 필기체 원장 자수"},
      {id:"r3",industry:"메디컬",gender:"여성",product:"스크럽/하의",qty:10,note:"통기성 우수한 쿨에어 스트레치 원단"}
    ],
    expectedDeliveryDate:"2026-11-15",
    budgetRange:"150만원 ~ 300만원",
    embroiderySpec:{
      embroideryType:"로고자수, 이름자수",
      placement:"좌측 가슴 (기본 로고)",
      sizeEstimate:"가로 8.0cm x 세로 3.0cm",
      textOrContent:"청담 루미에르 피부과의원 (로고자수, 이름자수)",
      threadColors:["#1E293B (다크 네이비)","#2563EB (로얄 블루)"]
    },
    uploadedFileName:"lumiere_clinic_logo.ai",
    detailedRequest:"[상담제목] 개원 오픈 일정에 맞춘 긴급 납기 견적을 희망합니다.\n[업종: 메디컬/의료 | 기업규모: 중형 | 컨설팅포인트: 디자인, 기능/원단]\n\n[상담내용]\n개원 오픈 일정에 맞춘 긴급 납기 견적을 희망합니다.\n• 희망 품목 구성: [메디컬/여성] 스크럽/상의 15벌, [메디컬/남성] 의사가운 5벌, [메디컬/여성] 스크럽/하의 10벌 (총 30벌)",
    status:"접수완료",
    createdAt:"2026-10-18 10:24",
    updatedAt:"2026-10-18 10:24",
    consultantName:"박세영 수석 디자이너",
    adminInternalMemo:"신규 개원 피부과. 30벌 이상으로 로고 제판비 55,000원 면제 대상."
  },
  {
    id:"REQ-2026-002",
    companyName:"(주)넥스트바이오 연구소",
    applicantName:"이서연 팀장",
    phone:"010-3490-1288",
    email:"sy.lee@nextbio.com",
    businessNumber:"110-86-45920",
    category:"의사가운(남여공용) 30벌, 자켓(남여공용) 20벌",
    quantity:50,
    requestedItems:[
      {id:"r1",industry:"기타연구소",gender:"남여공용",product:"의사가운",qty:30,note:"연구소 영문 CI 좌측 가슴 로고 자수"},
      {id:"r2",industry:"기타연구소",gender:"남여공용",product:"자켓",qty:20,note:"항균/제전 기능성 스트레치 원단 희망"}
    ],
    expectedDeliveryDate:"2026-11-20",
    budgetRange:"300만원 ~ 500만원",
    embroiderySpec:{
      embroideryType:"로고자수",
      placement:"좌측 가슴 (기본 로고)",
      sizeEstimate:"가로 8.0cm x 세로 2.5cm",
      textOrContent:"(주)넥스트바이오 연구소 (로고자수)",
      threadColors:["#0284C7 (시안 블루)","#475569 (슬레이트 그레이)"]
    },
    uploadedFileName:"NEXTBIO_CI_Guide_2026.pdf",
    detailedRequest:"[상담제목] 직군/부서별 세부 디자인 차별화 컨설팅 요청합니다.\n• 희망 품목 구성: [기타연구소/남여공용] 의사가운 30벌, [기타연구소/남여공용] 자켓 20벌 (총 50벌)",
    status:"견적 발송",
    createdAt:"2026-10-16 14:10",
    updatedAt:"2026-10-17 09:30",
    consultantName:"최진우 총괄 실장",
    quotation:{
      quoteNumber:"QT-2026-1017-02",
      createdAt:"2026-10-17",
      validUntil:"2026-10-31",
      items:[
        {id:"item-1",category:"의사가운",name:"[기타연구소/남여공용] 메디린 프리미엄 의사가운",color:"화이트",spec:"연구소 영문 CI 좌측 가슴 로고 자수",sizes:{XS:0,S:8,M:12,L:8,XL:2,"2XL":0},quantity:30,unitPrice:45e3,embroideryFee:4e3,amount:147e4},
        {id:"item-2",category:"자켓",name:"[기타연구소/남여공용] 메디린 프리미엄 자켓",color:"네이비",spec:"항균/제전 기능성 스트레치 원단 희망",sizes:{XS:0,S:5,M:8,L:5,XL:2,"2XL":0},quantity:20,unitPrice:48e3,embroideryFee:4e3,amount:104e4}
      ],
      subtotal:251e4,
      logoPlateFee:55e3,
      isPlateFeeWaived:!0,
      punchingFee:2e4,
      embroiderySetupFee:2e4,
      discountRate:15,
      discountAmount:376500,
      vatAmount:215350,
      totalAmount:2368850,
      bankName:"국민은행",
      accountNumber:"469301-01-202005",
      accountHolder:"주식회사 라린느",
      notes:[],
      status:"발송됨"
    },
    adminInternalMemo:"발주 견적서 발송 완료. 고객 모드에서 [발주 견적서 동의 및 승인하기] 테스트 가능."
  },
  {
    id:"REQ-2026-003",
    companyName:"메종 드 에스테틱 청담",
    applicantName:"박지민 대표원장",
    phone:"010-9102-5541",
    email:"director@maison-aesthetic.kr",
    businessNumber:"107-28-99412",
    category:"자켓(여성) 15벌, 팬츠(여성) 15벌, 가운(여성) 10벌",
    quantity:40,
    requestedItems:[
      {id:"r1",industry:"에스테틱",gender:"여성",product:"자켓",qty:15,note:"베이지 톤온톤 로고 자수 희망"},
      {id:"r2",industry:"에스테틱",gender:"여성",product:"팬츠",qty:15,note:"신축성 좋은 스판 원단 요청"},
      {id:"r3",industry:"에스테틱",gender:"여성",product:"가운",qty:10,note:"고객 케어용 프리미엄 가운"}
    ],
    expectedDeliveryDate:"2026-11-10",
    budgetRange:"150만원 ~ 300만원",
    embroiderySpec:{
      embroideryType:"로고자수",
      placement:"좌측 가슴 (기본 로고)",
      sizeEstimate:"가로 8.0cm x 세로 3.0cm",
      textOrContent:"메종 드 에스테틱 청담 (로고자수)",
      threadColors:["#D4AF37 (샴페인 골드)","#1E293B (딥 차콜)"]
    },
    uploadedFileName:"maison_aesthetic_symbol.ai",
    detailedRequest:"[상담제목] 원단 스와치북 및 사이즈별 실물 샘플 킷 대여 신청합니다.\n• 희망 품목 구성: [에스테틱/여성] 자켓 15벌, [에스테틱/여성] 팬츠 15벌, [에스테틱/여성] 가운 10벌 (총 40벌)",
    status:"견적 승인완료",
    createdAt:"2026-10-15 11:20",
    updatedAt:"2026-10-17 16:45",
    consultantName:"박세영 수석 디자이너",
    quotation:{
      quoteNumber:"QT-2026-1016-01",
      createdAt:"2026-10-16",
      validUntil:"2026-10-30",
      items:[
        {id:"item-1",category:"자켓",name:"[에스테틱/여성] 메디린 프리미엄 자켓",color:"베이지",spec:"베이지 톤온톤 로고 자수 희망",sizes:{XS:2,S:6,M:5,L:2,XL:0,"2XL":0},quantity:15,unitPrice:46e3,embroideryFee:4e3,amount:75e4},
        {id:"item-2",category:"팬츠",name:"[에스테틱/여성] 메디린 프리미엄 팬츠",color:"베이지",spec:"신축성 좋은 스판 원단 요청",sizes:{XS:2,S:6,M:5,L:2,XL:0,"2XL":0},quantity:15,unitPrice:36e3,embroideryFee:0,amount:54e4},
        {id:"item-3",category:"가운",name:"[에스테틱/여성] 메디린 프리미엄 가운",color:"아이보리",spec:"고객 케어용 프리미엄 가운",sizes:{XS:0,S:3,M:5,L:2,XL:0,"2XL":0},quantity:10,unitPrice:52e3,embroideryFee:4e3,amount:56e4}
      ],
      subtotal:185e4,
      logoPlateFee:55e3,
      isPlateFeeWaived:!0,
      punchingFee:0,
      embroiderySetupFee:0,
      discountRate:10,
      discountAmount:185e3,
      vatAmount:166500,
      totalAmount:1831500,
      bankName:"국민은행",
      accountNumber:"469301-01-202005",
      accountHolder:"주식회사 라린느",
      notes:["고객 승인 완료 건: 6개 필수 약관 동의 및 승인 완료됨.","입금 확인 즉시 맞춤 제작 및 자수 공정이 시작됩니다."],
      status:"고객승인",
      approvedAt:"2026-10-17 16:45",
      approvedBy:"박지민 대표원장",
      agreedTermsCount:6
    },
    adminInternalMemo:"고객 포털에서 박지민 대표원장 직접 동의 및 승인 완료함."
  },
  {
    id:"REQ-2026-004",
    companyName:"그랜드 스파 & 호텔 서울",
    applicantName:"정우철 구매팀장",
    phone:"010-4491-7720",
    email:"wc.jung@grandspahotel.co.kr",
    businessNumber:"101-81-29401",
    category:"자켓(여성) 25벌, 자켓(남성) 15벌, 팬츠(여성) 25벌",
    quantity:65,
    requestedItems:[
      {id:"r1",industry:"호텔/스파",gender:"여성",product:"자켓",qty:25,note:"프론트/컨시어지 시그니처 자켓"},
      {id:"r2",industry:"호텔/스파",gender:"남성",product:"자켓",qty:15,note:"좌측 가슴 호텔 엠블럼 로고자수"},
      {id:"r3",industry:"호텔/스파",gender:"여성",product:"팬츠",qty:25,note:"구김 방지 스트레치 팬츠"}
    ],
    expectedDeliveryDate:"2026-11-25",
    budgetRange:"300만원 ~ 500만원",
    embroiderySpec:{
      embroideryType:"로고자수",
      placement:"좌측 가슴 (기본 로고)",
      sizeEstimate:"가로 7.5cm x 세로 3.0cm",
      textOrContent:"그랜드 스파 & 호텔 서울 (로고자수)",
      threadColors:["#EAB308 (프리미엄 골드)","#1E293B (네이비)"]
    },
    uploadedFileName:"GrandSpa_Hotel_Logo.ai",
    detailedRequest:"[상담제목] 기존 로고(AI 파일) 자수 제판 및 배치 시안 문의합니다.\n• 희망 품목 구성: [호텔/스파/여성] 자켓 25벌, [호텔/스파/남성] 자켓 15벌, [호텔/스파/여성] 팬츠 25벌 (총 65벌)",
    status:"결제완료/작업진행",
    createdAt:"2026-10-12 09:15",
    updatedAt:"2026-10-16 11:00",
    consultantName:"최진우 총괄 실장",
    depositConfirmed:!0,
    quotation:{
      quoteNumber:"QT-2026-1013-05",
      createdAt:"2026-10-13",
      validUntil:"2026-10-27",
      items:[
        {id:"item-1",category:"자켓",name:"[호텔/스파/여성] 메디린 프리미엄 자켓",color:"차콜블랙",spec:"프론트/컨시어지 시그니처 자켓",sizes:{XS:3,S:10,M:8,L:4,XL:0,"2XL":0},quantity:25,unitPrice:52e3,embroideryFee:4e3,amount:140e4},
        {id:"item-2",category:"자켓",name:"[호텔/스파/남성] 메디린 프리미엄 자켓",color:"차콜블랙",spec:"좌측 가슴 호텔 엠블럼 로고자수",sizes:{XS:0,S:2,M:6,L:5,XL:2,"2XL":0},quantity:15,unitPrice:52e3,embroideryFee:4e3,amount:84e4},
        {id:"item-3",category:"팬츠",name:"[호텔/스파/여성] 메디린 프리미엄 팬츠",color:"차콜블랙",spec:"구김 방지 스트레치 팬츠",sizes:{XS:3,S:10,M:8,L:4,XL:0,"2XL":0},quantity:25,unitPrice:38e3,embroideryFee:0,amount:95e4}
      ],
      subtotal:319e4,
      logoPlateFee:55e3,
      isPlateFeeWaived:!0,
      punchingFee:0,
      embroiderySetupFee:0,
      discountRate:15,
      discountAmount:478500,
      vatAmount:271150,
      totalAmount:2982650,
      bankName:"국민은행",
      accountNumber:"469301-01-202005",
      accountHolder:"주식회사 라린느",
      notes:["고객 승인 및 결제 확인 완료 — 현재 컴퓨터 자수 및 봉제 라인 제작 진행중"],
      status:"입금확인",
      approvedAt:"2026-10-14 15:30",
      approvedBy:"정우철 구매팀장",
      agreedTermsCount:6
    },
    adminInternalMemo:"결제 확인 완료되어 제작 진행 중."
  },
  {
    id:"REQ-2026-005",
    companyName:"파인다이닝 라메르 서울",
    applicantName:"한상우 총괄셰프",
    phone:"010-7711-3049",
    email:"chef@lamerseoul.com",
    businessNumber:"204-86-55190",
    category:"자켓(남여공용) 15벌, 에이프런(남여공용) 15벌",
    quantity:30,
    requestedItems:[
      {id:"r1",industry:"식음료/F&B",gender:"남여공용",product:"자켓",qty:15,note:"화이트 셰프 자켓 좌측 가슴 로고자수"},
      {id:"r2",industry:"식음료/F&B",gender:"남여공용",product:"에이프런",qty:15,note:"발수 코팅 네이비 에이프런"}
    ],
    expectedDeliveryDate:"2026-10-18",
    budgetRange:"150만원 ~ 300만원",
    embroiderySpec:{
      embroideryType:"로고자수, 이름자수",
      placement:"좌측 가슴 (기본 로고)",
      sizeEstimate:"가로 7.0cm x 세로 3.0cm",
      textOrContent:"파인다이닝 라메르 서울 (로고자수, 이름자수)",
      threadColors:["#1E3A8A (인디고 블루)","#F59E0B (골드)"]
    },
    uploadedFileName:"lamer_seoul_logo.ai",
    detailedRequest:"[상담제목] 개원 오픈 일정에 맞춘 긴급 납기 견적을 희망합니다.\n• 희망 품목 구성: [식음료/F&B/남여공용] 자켓 15벌, [식음료/F&B/남여공용] 에이프런 15벌 (총 30벌)",
    status:"상담 완료",
    createdAt:"2026-10-05 14:00",
    updatedAt:"2026-10-18 16:30",
    consultantName:"박세영 수석 디자이너",
    depositConfirmed:!0,
    courierName:"CJ대한통운",
    trackingNumber:"6829-1029-4401",
    quotation:{
      quoteNumber:"QT-2026-1006-03",
      createdAt:"2026-10-06",
      validUntil:"2026-10-20",
      items:[
        {id:"item-1",category:"자켓",name:"[식음료/F&B/남여공용] 메디린 프리미엄 자켓",color:"화이트",spec:"화이트 셰프 자켓 좌측 가슴 로고자수",sizes:{XS:0,S:3,M:6,L:4,XL:2,"2XL":0},quantity:15,unitPrice:46e3,embroideryFee:4e3,amount:75e4},
        {id:"item-2",category:"에이프런",name:"[식음료/F&B/남여공용] 메디린 프리미엄 에이프런",color:"네이비",spec:"발수 코팅 네이비 에이프런",sizes:{XS:0,S:0,M:15,L:0,XL:0,"2XL":0},quantity:15,unitPrice:30e3,embroideryFee:4e3,amount:51e4}
      ],
      subtotal:126e4,
      logoPlateFee:55e3,
      isPlateFeeWaived:!0,
      punchingFee:0,
      embroiderySetupFee:0,
      discountRate:10,
      discountAmount:126e3,
      vatAmount:113400,
      totalAmount:1247400,
      bankName:"국민은행",
      accountNumber:"469301-01-202005",
      accountHolder:"주식회사 라린느",
      notes:["출고 배송 완료: 송장번호 CJ대한통운 6829-1029-4401"],
      status:"출고완료",
      approvedAt:"2026-10-08 11:20",
      approvedBy:"한상우 총괄셰프",
      agreedTermsCount:6
    },
    adminInternalMemo:"최종 검품 통과 후 출고 완료."
  }
];/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=r=>r==null?void 0:r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Qb(r,j,M=[]){if(j==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Lb(r),size:24,node:j,...M.length>0?{aliases:M}:{}}}/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=r=>{let j="",M=!1;for(const o of r){if(o==="-"||o==="_"||o<=" "){M=j.length>0;continue}j.length===0?j+=o.toLowerCase():j+=M?o.toUpperCase():o,M=!1}return j};/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=r=>{const j=Gb(r);return j.charAt(0).toUpperCase()+j.slice(1)};/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=(...r)=>r.filter((j,M,o)=>!!j&&j.trim()!==""&&o.indexOf(j)===M).join(" ").trim();/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Dr(r){return r!=null}function Vb(r,j={}){var A,ee;const M=j.attributeNames??{},o=Q=>M[Q]??Q,w=r.size??r.width??pa.width,O=r.size??r.height??pa.height,F=((A=r.aliases)==null?void 0:A.filter(Q=>typeof Q=="string"&&Q.trim()!=="").map(Q=>`lucide-${Q}`))??[],W=[...r.name?[`lucide-${r.name}`]:[],...F],k=((ee=j.className)==null?void 0:ee.split(" ").filter(Boolean))??[],te=j.includeDefaultClasses===!1?Mr(...k):Mr("lucide",...W,...k),E=j.absoluteStrokeWidth?Number(j.strokeWidth??pa["stroke-width"])*Number(r.size??r.width??pa.width)/Number(j.size??j.width??pa.width):j.strokeWidth??pa["stroke-width"];return["svg",{...Object.entries(pa).reduce((Q,[$,Z])=>(Q[o($)]=Z,Q),{}),..."color"in j&&j.color&&{[o("stroke")]:j.color},..."size"in j&&Dr(j.size)&&{[o("width")]:j.size,[o("height")]:j.size},..."width"in j&&Dr(j.width)&&{[o("width")]:j.width},..."height"in j&&Dr(j.height)&&{[o("height")]:j.height},[o("stroke-width")]:E,...te&&{[o("class")]:te},[o("viewBox")]:`0 0 ${w} ${O}`,...j.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in j&&j.attributes},r.node.map(Q=>{const[$,Z,ye]=Q,re=j.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...Z}:Z;return ye?[$,re,ye]:[$,re]})]}/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Zb(r,j={}){return Vb(r,{...j,attributeNames:{...j.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=r=>{for(const j in r)if(j.startsWith("aria-")||j==="role"||j==="title")return!0;return!1},Jb=V.createContext({}),kb=()=>V.useContext(Jb),$b=V.forwardRef(({color:r,size:j,width:M,height:o,strokeWidth:w,absoluteStrokeWidth:O,nonScalingStroke:F,className:W="",children:k,iconNode:te=[],icon:E={node:te,aliases:[],size:24},...N},A)=>{const{size:ee=24,strokeWidth:Q=2,absoluteStrokeWidth:$=!1,nonScalingStroke:Z=!1,color:ye="currentColor",className:re=""}=kb()??{},Re=!!k||Kb(N),[Te,qe,Oe=[]]=Zb(E,{color:r??ye,width:M??j??ee,height:o??j??ee,strokeWidth:w??Q,absoluteStrokeWidth:O??$,nonScalingStroke:F??Z,className:Mr(re,W),hasA11yProp:Re,attributes:N});return V.createElement(Te,{ref:A,...qe},[...Oe.map(([K,le])=>V.createElement(K,le)),...Array.isArray(k)?k:[k]])});/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ae(r,j=[],M=[]){const o=typeof r=="string"?Qb(r,j,M):r,w=V.forwardRef(({className:O,...F},W)=>V.createElement($b,{ref:W,icon:o,className:O,...F}));return o.name&&(w.displayName=Xb(o.name)),w}/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Em.node;const Fb=ae(Em);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};_m.node;const Wb=ae(_m);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am={name:"building-complex",size:24,node:[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],aliases:["building-2"]};Am.node;const Ib=ae(Am);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om={name:"building",size:24,node:[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]]};Om.node;const Cm=ae(Om);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm={name:"calculator",size:24,node:[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]};Dm.node;const Pb=ae(Dm);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};Mm.node;const e2=ae(Mm);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};wm.node;const Um=ae(wm);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};Rm.node;const t2=ae(Rm);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};Hm.node;const l2=ae(Hm);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};Bm.node;const qm=ae(Bm);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Ym.node;const Lm=ae(Ym);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};Qm.node;const wr=ae(Qm);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Gm.node;const Xm=ae(Gm);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm={name:"columns-2",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],aliases:["columns"]};Vm.node;const a2=ae(Vm);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};Zm.node;const n2=ae(Zm);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Km.node;const Jm=ae(Km);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km={name:"credit-card",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}],["path",{d:"M6 14h2",key:"mk7k0u"}]]};km.node;const Sm=ae(km);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m={name:"file-check",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]};$m.node;const Ur=ae($m);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm={name:"file-pen",size:24,node:[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],aliases:["file-edit"]};Fm.node;const u2=ae(Fm);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm={name:"file-plus",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]};Wm.node;const Im=ae(Wm);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};Pm.node;const Qs=ae(Pm);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};ex.node;const s2=ae(ex);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};tx.node;const Yr=ae(tx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx={name:"layout-list",size:24,node:[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]};lx.node;const c2=ae(lx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax={name:"list-ordered",size:24,node:[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]]};ax.node;const i2=ae(ax);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};nx.node;const ux=ae(nx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};sx.node;const Gs=ae(sx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx={name:"pen-line",size:24,node:[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],aliases:["edit-3"]};cx.node;const ix=ae(cx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx={name:"percent",size:24,node:[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]};rx.node;const r2=ae(rx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};fx.node;const ox=ae(fx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};dx.node;const f2=ae(dx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx={name:"printer",size:24,node:[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]};mx.node;const o2=ae(mx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};xx.node;const d2=ae(xx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};hx.node;const m2=ae(hx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};bx.node;const vx=ae(bx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx={name:"shield-alert",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]};yx.node;const x2=ae(yx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};px.node;const h2=ae(px);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};gx.node;const b2=ae(gx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Nx.node;const Lr=ae(Nx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};jx.node;const v2=ae(jx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx={name:"truck",size:24,node:[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]};Sx.node;const Tx=ae(Sx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};zx.node;const y2=ae(zx);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};Ex.node;const p2=ae(Ex);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};_x.node;const Xs=ae(_x),g2=({activeTab:r,setActiveTab:j,isAdmin:M,setIsAdmin:o,consultingCount:w,sessionUser:sessionUser,onLogin:onLogin,onLogout:onLogout})=>s.jsx("header",{className:"sticky top-0 z-30 bg-white border-b border-slate-200/80 shadow-2xs",children:s.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"flex items-center justify-between h-20",children:[
  s.jsxs("div",{onClick:()=>j("guide"),className:"flex items-center gap-3.5 cursor-pointer select-none",children:[
    s.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center font-serif text-xl font-bold tracking-tight shadow-xs",children:"M"}),
    s.jsxs("div",{className:"flex flex-col",children:[
      s.jsx("span",{className:"font-serif font-bold text-xl tracking-[0.16em] text-slate-950 leading-none",children:"MEDILYN"}),
      s.jsx("span",{className:"text-[11px] text-slate-500 font-normal mt-1",children:"메디컬 & 뷰티 유니폼 아틀리에"})
    ]})
  ]}),
  s.jsxs("div",{className:"flex items-center gap-3",children:[
    s.jsxs("nav",{className:"b2b-header-nav-pill flex items-center gap-1.5",children:[
      s.jsxs("button",{onClick:()=>j("guide"),className:`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${r==="guide"?"bg-blue-600 text-white shadow-xs":"text-slate-700 hover:text-slate-950 hover:bg-slate-100/60"}`,children:[
        s.jsxs("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[
          s.jsx("circle",{cx:"12",cy:"12",r:"10",strokeWidth:"2"}),
          s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01"})
        ]}),
        "B2B 이용 가이드"
      ]}),
      s.jsxs("button",{onClick:()=>j("form"),className:`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${r==="form"?"bg-blue-600 text-white shadow-xs":"text-slate-700 hover:text-slate-950 hover:bg-slate-100/60"}`,children:[
        s.jsxs("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[
          s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})
        ]}),
        "B2B 컨설팅 신청"
      ]}),
      s.jsxs("button",{onClick:()=>j("history"),className:`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${r==="history"?"bg-blue-600 text-white shadow-xs":"text-slate-700 hover:text-slate-950 hover:bg-slate-100/60"}`,children:[
        s.jsxs("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[
          s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})
        ]}),
        "신청 내역 조회",
        s.jsx("span",{className:`w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 ${r==="history"?"bg-white text-blue-600":"bg-blue-600 text-white"}`,children:w??0})
      ]})
    ]}),
    s.jsx("button",{type:"button",onClick:sessionUser?onLogout:onLogin,style:{whiteSpace:"nowrap",minHeight:44,padding:"8px 12px",fontSize:12,fontWeight:700,color:"#292b29"},children:sessionUser?"로그아웃":"로그인"}),
    s.jsx("button",{type:"button",onClick:()=>o(!M),className:`ml-2 px-2.5 py-1 rounded-lg text-[10px] font-semibold border transition-all ${M?"bg-slate-900 text-white border-slate-900":"bg-slate-900 text-white border-slate-900 hover:bg-slate-800"}`,style:{minHeight:44,padding:"10px 18px",fontSize:13,fontWeight:700,backgroundColor:"#292b29",color:"#ffffff",border:"1px solid #292b29",whiteSpace:"nowrap"},children:M?"관리자 모드ON":"관리자 로그인"})
  ]})
]})})}),Ls=[{step:1,id:"step1",customerLabel:"1. 신청 접수완료",customerDesc:"맞춤 상담 접수 (1영업일 내 견적 준비)",adminLabel:"1. 접수완료 (견적작성 대기)",adminDesc:"신규 접수 건 견적서 작성 필요"},{step:2,id:"step2",customerLabel:"2. 견적서확인",customerDesc:"상세 단가 및 자수 스펙 검토",adminLabel:"2. 견적 발송 (고객승인 대기)",adminDesc:"견적서 전달 완료 (고객 승인 대기)"},{step:3,id:"step3",customerLabel:"3. 고객 승인완료",customerDesc:"견적 수락 및 결제/입금 진행",adminLabel:"3. 고객 승인완료 (입금 대기)",adminDesc:"고객 승인 접수됨 (입금/결제 확인 대기)"},{step:4,id:"step4",customerLabel:"4. 결제 및 제작 출고",customerDesc:"컴퓨터 자수 제작 및 배송 완료",adminLabel:"4. 작업지시",adminDesc:"자수 제작 및 출고 작업 지시"}];function Rr(r){switch(r){case"접수완료":case"컨설턴트 배정":case"시안 제작중":return 1;case"견적 발송":return 2;case"견적 승인완료":case"입금확인요청":return 3;case"결제완료/작업진행":case"상담 완료":return 4;case"취소/보류":default:return 0}}function Hr(r,j){return r===0?{active:!1,done:!1}:{active:r===j,done:r>j}}function dn(r,j){if(j)switch(r){case"접수완료":case"컨설턴트 배정":case"시안 제작중":return"1. 신청 접수완료 (견적 준비중)";case"견적 발송":return"2. 견적서 도착 (승인 대기)";case"견적 승인완료":return"3. 견적 승인완료 (입금 대기)";case"입금확인요청":return"3. 입금 확인 요청중";case"결제완료/작업진행":return"4. 제작중";case"상담 완료":return"4. 제작 및 출고 배송완료";case"취소/보류":return"신청 취소 / 보류";default:return r}else switch(r){case"접수완료":return"1. 신규 접수완료 (견적작성 필요)";case"컨설턴트 배정":case"시안 제작중":return"1. 시안 검토중 (견적작성 대기)";case"견적 발송":return"2. 견적 발송완료 (고객승인 대기)";case"견적 승인완료":return"3. 고객 승인완료 (입금 대기)";case"입금확인요청":return"3. 입금확인 요청접수 (입금확인 필요)";case"결제완료/작업진행":return"4. 제작중";case"상담 완료":return"4. 출고 완료 (배송/종료)";case"취소/보류":return"상담 취소 / 보류";default:return r}}function ru(r,j){switch(r){case"접수완료":case"컨설턴트 배정":case"시안 제작중":return"b2b-badge-urgent-blue";case"견적 발송":return j?"bg-blue-50 text-blue-700 border border-blue-300":"bg-blue-50 text-blue-700 border border-blue-200";case"견적 승인완료":case"입금확인요청":return"bg-purple-50 text-purple-700 border border-purple-200";case"결제완료/작업진행":return"bg-emerald-50 text-emerald-700 border border-emerald-200";case"상담 완료":return"bg-slate-100 text-slate-700 border border-slate-300";case"취소/보류":return"bg-rose-50 text-rose-700 border border-rose-200";default:return"bg-slate-100 text-slate-700 border border-slate-200"}}function Br(r){return!(r.quotation||r.status==="상담 완료"||r.status==="취소/보류"||r.status==="결제완료/작업진행"||r.status==="견적 승인완료")}function Ax(r){return r.quotation?r.status==="견적 발송":!1}const N2=({onStartRequest:r})=>{
  const[j,M]=V.useState(null);
  const o=[
    {q:"최소 주문 수량(MOQ)과 대량 할인 혜택이 어떻게 되나요?",a:"기본 10벌 이상부터 접수 가능하며, 30SET 이상 시 10% 할인 및 로고 제판비 전액 무료, 50SET 이상 시 15% 최고 할인 혜택이 제공됩니다."},
    {q:"자수 로고 AI 파일(일러스트레이터)이 없는 경우에도 제작이 가능한가요?",a:"고해상도 PNG, JPG, PDF 이미지를 첨부해주시면 메디린 전문 그래픽 디자이너가 컴퓨터 자수 전산화(Punching) 작업을 무료로 대행 지원해 드립니다."},
    {q:"견적서 발송 후 실제 제품을 받아보기까지 기간이 얼마나 걸리나요?",a:"견적 승인 및 결제 확인 후 일반 자수 작업은 평균 영업일 기준 3~5일, 대량 맞춤 제작은 7~10일 소요되며 급행 일정 협의도 가능합니다."},
    {q:"세금계산서 발행과 법인카드 결제는 어떻게 진행되나요?",a:"신청서 작성 시 사업자등록번호를 기재해주시면 입금 확인 즉시 홈택스 전자세금계산서가 자동 발행됩니다. 법인카드 무이자 결제 링크 발행도 지원합니다."}
  ];
  return s.jsxs("div",{className:"b2b-page-wrap",children:[
    /* 1. Hero Section */
    s.jsxs("div",{className:"b2b-hero-section",children:[
      s.jsxs("h1",{className:"b2b-hero-h1",children:[
        "브랜드에 최적화된 ",
        s.jsx("span",{className:"b2b-accent-blue",children:"컨설팅과 견적"}),
        "이 필요하신가요?"
      ]}),
      s.jsxs("p",{className:"b2b-hero-p",children:[
        "남들과 다른 유니크한 프리미엄 브랜드와 직군별 통일된 기업 이미지,",
        s.jsx("br",{}),
        "대량주문 파격 할인 및 제판비 전액 무료 혜택까지!",
        s.jsx("br",{}),
        "지금 바로 확인하세요."
      ]})
    ]}),
    /* 2. Main White Container (Image 1) */
    s.jsxs("div",{className:"b2b-main-container",children:[
      /* Section 1: Discount & Special Benefits */
      s.jsxs("div",{className:"b2b-section-block",children:[
        s.jsxs("div",{className:"b2b-section-title-wrap",children:[
          s.jsx("svg",{className:"b2b-title-icon",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[
            s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 8v13m0-13V4.5a2.5 2.5 0 115 0V8m-5 0H4.5a2.5 2.5 0 000 5H12m0-5h7.5a2.5 2.5 0 010 5H12m0 5H4a1 1 0 01-1-1v-4a1 1 0 011-1h16a1 1 0 011 1v4a1 1 0 01-1 1h-8z"})
          ]}),
          "B2B 디자인컨설팅 & 대량 주문 특별 혜택"
        ]}),
        /* Top 3 Discount Cards in 3-column Grid */
        s.jsxs("div",{className:"b2b-grid-3",children:[
          /* Card 1: 10벌 이상 */
          s.jsxs("div",{className:"b2b-card-discount",children:[
            s.jsxs("div",{children:[
              s.jsx("div",{className:"b2b-card-label",children:"30벌 이상 60벌 미만 주문"}),
              s.jsx("div",{className:"b2b-card-value-heading",children:"5% 기본 할인"})
            ]}),
            s.jsxs("ul",{className:"b2b-bullet-list",children:[
              s.jsxs("li",{className:"b2b-bullet-item",children:[
                s.jsx("svg",{className:"b2b-bullet-icon",fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:[s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})]}),
                s.jsx("span",{children:"전담 디자이너 자수 시안 검토"})
              ]}),
              s.jsxs("li",{className:"b2b-bullet-item",children:[
                s.jsx("svg",{className:"b2b-bullet-icon",fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:[s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})]}),
                s.jsx("span",{children:"세금계산서 발행"})
              ]})
            ]})
          ]}),
          /* Card 2: 30SET 이상 (추천) */
          s.jsxs("div",{className:"b2b-card-discount-rec",children:[
            s.jsx("span",{className:"b2b-card-rec-badge",children:"추천 혜택"}),
            s.jsxs("div",{children:[
              s.jsx("div",{className:"b2b-card-label-rec",children:"60SET 이상 100SET 미만 주문"}),
              s.jsx("div",{className:"b2b-card-value-heading",children:"10% 할인 + 제판비 전액 무료"})
            ]}),
            s.jsxs("ul",{className:"b2b-bullet-list",children:[
              s.jsxs("li",{className:"b2b-bullet-item",children:[
                s.jsx("svg",{className:"b2b-bullet-icon",fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:[s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})]}),
                s.jsx("strong",{className:"b2b-strong-dark",children:"로고 제판비 55,000원 100% 면제"})
              ]}),
              s.jsxs("li",{className:"b2b-bullet-item",children:[
                s.jsx("svg",{className:"b2b-bullet-icon",fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:[s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})]}),
                s.jsx("span",{children:"무료 샘플킷 대여"})
              ]}),
              s.jsxs("li",{className:"b2b-bullet-item",children:[
                s.jsx("svg",{className:"b2b-bullet-icon",fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:[s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})]}),
                s.jsx("span",{children:"전담 담당자 배정"})
              ]})
            ]})
          ]}),
          /* Card 3: 50SET 이상 대량주문 */
          s.jsxs("div",{className:"b2b-card-discount",children:[
            s.jsxs("div",{children:[
              s.jsx("div",{className:"b2b-card-label",children:"100SET 이상 대량주문"}),
              s.jsx("div",{className:"b2b-card-value-heading",children:"15% 최고 할인"})
            ]}),
            s.jsxs("ul",{className:"b2b-bullet-list",children:[
              s.jsxs("li",{className:"b2b-bullet-item",children:[
                s.jsx("svg",{className:"b2b-bullet-icon",fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:[s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})]}),
                s.jsx("span",{children:"커스텀 디자인/원단칼라 변경 제작 가능"})
              ]}),
              s.jsxs("li",{className:"b2b-bullet-item",children:[
                s.jsx("svg",{className:"b2b-bullet-icon",fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:[s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})]}),
                s.jsx("span",{children:"개별 포장 및 분할 배송 서비스"})
              ]})
            ]})
          ]})
        ]}),
        /* Bottom 3 Quick Value Cards */
        s.jsxs("div",{className:"b2b-grid-3 b2b-quick-cards-wrap",children:[
          s.jsxs("div",{className:"b2b-card-value",children:[
            s.jsx("div",{className:"b2b-quick-label",children:"원클릭 간편 입력"}),
            s.jsx("div",{className:"b2b-quick-val",children:"쉬운 견적 신청"})
          ]}),
          s.jsxs("div",{className:"b2b-card-value",children:[
            s.jsx("div",{className:"b2b-quick-label",children:"익일 견적서 발송"}),
            s.jsx("div",{className:"b2b-quick-val",children:"신속한 견적 처리"})
          ]}),
          s.jsxs("div",{className:"b2b-card-value",children:[
            s.jsx("div",{className:"b2b-quick-label",children:"100% 매입 세액공제"}),
            s.jsx("div",{className:"b2b-quick-val",children:"세금계산서 발행"})
          ]})
        ]})
      ]}),
      /* Section 2: Process Steps (4-column Grid) */
      s.jsxs("div",{className:"b2b-process-section",children:[
        s.jsx("div",{className:"b2b-process-title",children:"메디린 B2B 견적 발송 · 고객 승인 · 결제 및 제작 프로세스"}),
        s.jsxs("div",{className:"b2b-grid-4",children:[
          /* Step 1 */
          s.jsxs("div",{className:"b2b-step-item",children:[
            s.jsx("span",{className:"b2b-step-tag b2b-step-tag-blue",children:"1"}),
            s.jsx("div",{className:"b2b-step-heading",children:"컨설팅 신청서 작성"}),
            s.jsx("p",{className:"b2b-step-desc",children:"병원명, 희망 제품군, 예상 수량 및 로고 자수 요청사항을 온라인으로 접수합니다."})
          ]}),
          /* Step 2 */
          s.jsxs("div",{className:"b2b-step-item",children:[
            s.jsx("span",{className:"b2b-step-tag b2b-step-tag-blue",children:"2"}),
            s.jsx("div",{className:"b2b-step-heading",children:"견적서 발송"}),
            s.jsx("p",{className:"b2b-step-desc",children:"전담 디자이너가 세부 단가, 단체 할인율 및 납기를 반영한 정식 견적서를 고객에게 발송합니다."})
          ]}),
          /* Step 3 (Highlighted) */
          s.jsxs("div",{className:"b2b-step-item b2b-step-item-active",children:[
            s.jsx("span",{className:"b2b-step-tag b2b-step-tag-active",children:"3"}),
            s.jsx("div",{className:"b2b-step-heading",children:"고객 승인 및 결제"}),
            s.jsxs("p",{className:"b2b-step-desc",children:[
              "고객이 견적서를 검토 후 ",
              s.jsx("strong",{className:"b2b-strong-blue",children:"[공식 승인]"}),
              " 후 결제진행"
            ]})
          ]}),
          /* Step 4 (Production) */
          s.jsxs("div",{className:"b2b-step-item b2b-step-item-final",children:[
            s.jsx("span",{className:"b2b-step-tag b2b-step-tag-final",children:"4"}),
            s.jsx("div",{className:"b2b-step-heading",children:"제작 진행 후 출고"}),
            s.jsx("p",{className:"b2b-step-desc",children:"승인 후 결제 확인 즉시 작업에 착수하며 출고까지 진행과정이 대시보드에 기록됩니다."})
          ]})
        ]})
      ]})
    ]}),
    /* Section 3: High-precision embroidery & services (2x2 Grid) */
    s.jsxs("div",{className:"b2b-embroidery-section",children:[
      s.jsxs("div",{className:"b2b-section-title-wrap",children:[
        s.jsx("svg",{className:"b2b-title-icon",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[
          s.jsx("circle",{cx:"6",cy:"6",r:"3"}),
          s.jsx("circle",{cx:"6",cy:"18",r:"3"}),
          s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"})
        ]}),
        "컴퓨터 고정밀 자수 & 서비스 안내"
      ]}),
      s.jsxs("div",{className:"b2b-grid-2",children:[
        /* Feature 1 */
        s.jsxs("div",{className:"b2b-service-card",children:[
          s.jsxs("div",{className:"b2b-service-header",children:[
            s.jsx("svg",{className:"b2b-service-icon",style:{color:"#292b29"},fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[
              s.jsx("circle",{cx:"12",cy:"8",r:"6"}),
              s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"})
            ]}),
            "최고급 고광택 자수사 사용"
          ]}),
          s.jsx("p",{className:"b2b-service-desc",children:"잦은 고온 세탁과 오토클레이브(멸균) 환경에서도 광택과 형태가 변하지 않는 최고 등급 폴리에스터실을 사용합니다."})
        ]}),
        /* Feature 2 */
        s.jsxs("div",{className:"b2b-service-card",children:[
          s.jsxs("div",{className:"b2b-service-header",children:[
            s.jsx("svg",{className:"b2b-service-icon",style:{color:"#292b29"},fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[
              s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})
            ]}),
            "정밀 펀칭(Digitizing) 프로세스"
          ]}),
          s.jsx("p",{className:"b2b-service-desc",children:"복잡한 병원 엠블럼과 얇은 한글 서체도 왜곡 없이 원단에 일체감 있게 각인되도록 전문 디지타이저가 수작업으로 스티치 경로를 설계합니다."})
        ]}),
        /* Feature 3 */
        s.jsxs("div",{className:"b2b-service-card",children:[
          s.jsxs("div",{className:"b2b-service-header",children:[
            s.jsx("svg",{className:"b2b-service-icon",style:{color:"#292b29"},fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[
              s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})
            ]}),
            "서류 없는 1분 온라인 접수 & 세금계산서 즉시 처리"
          ]}),
          s.jsx("p",{className:"b2b-service-desc",children:"별도의 팩스나 복잡한 서류 제출 없이 온라인에서 1분 만에 신청서 작성이 완료되며, 기재해주신 사업자등록번호로 100% 매입 세액공제가 가능한 국세청 전자세금계산서를 지체 없이 당일 발행해 드립니다."})
        ]}),
        /* Feature 4 */
        s.jsxs("div",{className:"b2b-service-card",children:[
          s.jsxs("div",{className:"b2b-service-header",children:[
            s.jsx("svg",{className:"b2b-service-icon",style:{color:"#292b29"},fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[
              s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"})
            ]}),
            "24시간 내 견적 회신 & 자수시안 제공"
          ]}),
          s.jsx("p",{className:"b2b-service-desc",children:"신청 접수 즉시 메디린 전담 디자이너가 배정되어 24시간 이내 1:1 맞춤 자수 시안 및 견적서를 회신해 드립니다."})
        ]})
      ]})
    ]}),
    /* Section 4: FAQ (Dedicated b2b-faq-card with generous margins) */
    s.jsxs("div",{className:"b2b-faq-section",children:[
      s.jsx("h2",{className:"b2b-section-title-wrap b2b-faq-heading",children:"자주 묻는 질문 (FAQ)"}),
      s.jsx("div",{className:"b2b-faq-list",children:o.map((item,idx)=>{
        const isOpen=j===idx;
        return s.jsxs("div",{className:"b2b-faq-card",children:[
          s.jsxs("button",{type:"button",onClick:()=>M(isOpen?null:idx),className:"b2b-faq-btn",children:[
            s.jsxs("span",{className:"b2b-faq-q-wrap",children:[
              s.jsx("span",{className:"b2b-faq-q-badge",children:"Q ."}),
              s.jsx("span",{className:"b2b-faq-q-text",children:item.q})
            ]}),
            s.jsx("svg",{className:`b2b-faq-arrow ${isOpen?"b2b-faq-arrow-open":""}`,fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})]})
          ]}),
          isOpen&&s.jsx("div",{className:"b2b-faq-body",children:item.a})
        ]},idx);
      })})
    ]}),
    /* Section 5: CTA Button - BELOW FAQ! */
    s.jsx("div",{className:"b2b-cta-wrap",children:
      s.jsxs("button",{onClick:r,className:"b2b-cta-btn",children:[
        s.jsxs("svg",{className:"b2b-cta-icon",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[
          s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})
        ]}),
        "B2B 견적 및 디자인 컨설팅 신청 바로가기"
      ]})
    })
  ]});
},j2=({onSubmitSuccess:r})=>{
  const PRODUCT_CATEGORY_MAP={
    "메디컬":{
      "여성":["스크럽/상의","스크럽/하의","의사가운","가디건/자켓","임부복","팬츠","스커트","기타"],
      "남성":["스크럽/상의","스크럽/하의","의사가운","가디건/자켓","팬츠","기타"],
      "남여공용":["스크럽/상의","스크럽/하의","의사가운","가디건/자켓","팬츠","기타"]
    },
    "에스테틱":{
      "여성":["자켓","가디건","팬츠","스커트","가운","기타"],
      "남성":["자켓","가디건","팬츠","가운","기타"],
      "남여공용":["자켓","가디건","팬츠","스커트","가운","기타"]
    },
    "호텔/스파":{
      "여성":["자켓","가디건","팬츠","스커트","가운","기타"],
      "남성":["자켓","가디건","팬츠","가운","기타"],
      "남여공용":["자켓","가디건","팬츠","스커트","가운","기타"]
    },
    "식음료/F&B":{
      "남여공용":["블라우스","티셔츠","에이프런","모자","자켓","팬츠","스커트","기타"],
      "여성":["블라우스","티셔츠","에이프런","모자","자켓","팬츠","스커트","기타"],
      "남성":["블라우스","티셔츠","에이프런","모자","자켓","팬츠","기타"]
    },
    "기업":{
      "남여공용":["자켓","블라우스","가디건","팬츠","스커트","기타"],
      "여성":["자켓","블라우스","가디건","팬츠","스커트","기타"],
      "남성":["자켓","블라우스","가디건","팬츠","기타"]
    },
    "기타연구소":{
      "남여공용":["자켓","블라우스","가디건","팬츠","스커트","의사가운","기타"],
      "여성":["자켓","블라우스","가디건","팬츠","스커트","의사가운","기타"],
      "남성":["자켓","블라우스","가디건","팬츠","의사가운","기타"]
    }
  };

  const getProductList=(ind,gen)=>{
    const group=PRODUCT_CATEGORY_MAP[ind]||PRODUCT_CATEGORY_MAP["메디컬"];
    return group[gen]||group["여성"]||group["남여공용"]||["기타"];
  };

  const mapStep1ToRowIndustry=ind=>{
    if(ind.startsWith("메디컬"))return"메디컬";
    if(ind.startsWith("에스테틱"))return"에스테틱";
    if(ind.startsWith("호텔"))return"호텔/스파";
    if(ind.startsWith("식음료"))return"식음료/F&B";
    if(ind.startsWith("기업"))return"기업";
    return"기타연구소";
  };

  const getRecommendedItemsByIndustry=ind=>{
    const rowInd=mapStep1ToRowIndustry(ind);
    if(rowInd==="메디컬"){
      return[
        {id:"row-1",industry:"메디컬",gender:"여성",product:"스크럽/상의",qty:15,note:"원내 로고 자수 및 네이비 색상 희망"},
        {id:"row-2",industry:"메디컬",gender:"남성",product:"의사가운",qty:5,note:"왼쪽 가슴 영문 필기체 원장 자수"},
        {id:"row-3",industry:"메디컬",gender:"여성",product:"스크럽/하의",qty:10,note:"통기성 우수한 쿨에어 스트레치 원단"}
      ];
    }else if(rowInd==="에스테틱"){
      return[
        {id:"row-1",industry:"에스테틱",gender:"여성",product:"자켓",qty:12,note:"베이지 톤온톤 로고 자수 희망"},
        {id:"row-2",industry:"에스테틱",gender:"여성",product:"팬츠",qty:12,note:"신축성 좋은 스판 원단 요청"},
        {id:"row-3",industry:"에스테틱",gender:"여성",product:"가운",qty:6,note:"고객 케어용 프리미엄 가운"}
      ];
    }else if(rowInd==="호텔/스파"){
      return[
        {id:"row-1",industry:"호텔/스파",gender:"여성",product:"자켓",qty:15,note:"프론트/컨시어지 시그니처 컬러 배색"},
        {id:"row-2",industry:"호텔/스파",gender:"남성",product:"자켓",qty:10,note:"좌측 가슴 호텔 엠블럼 자수"},
        {id:"row-3",industry:"호텔/스파",gender:"여성",product:"팬츠",qty:15,note:"구김 방지 스트레치 원단"}
      ];
    }else if(rowInd==="식음료/F&B"){
      return[
        {id:"row-1",industry:"식음료/F&B",gender:"남여공용",product:"자켓",qty:15,note:"좌측 가슴 브랜드 엠블럼 자수"},
        {id:"row-2",industry:"식음료/F&B",gender:"남여공용",product:"에이프런",qty:15,note:"발수 코팅 워싱 캔버스 원단"},
        {id:"row-3",industry:"식음료/F&B",gender:"남여공용",product:"모자",qty:15,note:"홀/키친 스태프용 맞춤 자수"}
      ];
    }else if(rowInd==="기업"){
      return[
        {id:"row-1",industry:"기업",gender:"남여공용",product:"자켓",qty:20,note:"기업 CI 로고 좌측 가슴 자수"},
        {id:"row-2",industry:"기업",gender:"남여공용",product:"가디건",qty:15,note:"사내 근무용 고급 니트 가디건"},
        {id:"row-3",industry:"기업",gender:"남여공용",product:"팬츠",qty:15,note:"사계절 스판 슬랙스"}
      ];
    }else{
      return[
        {id:"row-1",industry:"기타연구소",gender:"남여공용",product:"의사가운",qty:20,note:"연구소 영문 로고 및 부서명 자수"},
        {id:"row-2",industry:"기타연구소",gender:"남여공용",product:"자켓",qty:10,note:"제전/항균 기능성 원단 희망"}
      ];
    }
  };

  const[step,setStep]=V.useState(1);
  const[preset,setPreset]=V.useState("");
  const[industry,setIndustry]=V.useState("메디컬/의료");
  const[scale,setScale]=V.useState("중형");
  const[items,setItems]=V.useState([
    {id:"row-1",industry:"메디컬",gender:"여성",product:"스크럽/상의",qty:15,note:"원내 로고 자수 및 네이비 색상 희망"},
    {id:"row-2",industry:"메디컬",gender:"남성",product:"의사가운",qty:5,note:"왼쪽 가슴 영문 필기체 원장 자수"},
    {id:"row-3",industry:"메디컬",gender:"여성",product:"스크럽/하의",qty:10,note:"통기성 우수한 쿨에어 스트레치 원단"}
  ]);
  const[points,setPoints]=V.useState(["디자인","기능/원단"]);

  /* Step 2 Customer Info States */
  const[companyName,setCompanyName]=V.useState("");
  const[applicantName,setApplicantName]=V.useState("");
  const[phone,setPhone]=V.useState("");
  const[email,setEmail]=V.useState("");
  const[businessNumber,setBusinessNumber]=V.useState("");
  const[deliveryDate,setDeliveryDate]=V.useState(new Date(Date.now()+336*60*60*1e3).toISOString().slice(0,10));
  const[budgetRange,setBudgetRange]=V.useState("150만원 ~ 300만원");
  const[embroideryOptions,setEmbroideryOptions]=V.useState(["로고자수"]);
  const[placement,setPlacement]=V.useState("좌측 가슴 (기본 로고)");
  const toggleEmbroideryOpt=opt=>{
    if(embroideryOptions.includes(opt)){
      if(embroideryOptions.length>1)setEmbroideryOptions(embroideryOptions.filter(o=>o!==opt));
    }else{
      setEmbroideryOptions([...embroideryOptions,opt]);
    }
  };
  const[uploadedFileName,setUploadedFileName]=V.useState("");
  const[consultTitle,setConsultTitle]=V.useState("개원 오픈 일정에 맞춘 긴급 납기 견적을 희망합니다.");
  const[extraNote,setExtraNote]=V.useState("");
  const[customBody,setCustomBody]=V.useState(null);

  const totalQty=items.reduce((acc,it)=>acc+(Number(it.qty)||0),0);

  const buildItemCompositionLine=(itemList,tot)=>{
    const parts=itemList.map(it=>`[${it.industry}/${it.gender}] ${it.product} ${it.qty}벌`).join(", ");
    return `• 희망 품목 구성: ${parts} (총 ${tot}벌)`;
  };

  const compositionLine=buildItemCompositionLine(items,totalQty);
  const computedConsultBody=customBody!==null?customBody:`${consultTitle}
${compositionLine}${extraNote?`
• 추가 요청사항: ${extraNote}`:""}`;

  const[selectedTpl,setSelectedTpl]=V.useState("개원 오픈 일정에 맞춘 긴급 납기 견적을 희망합니다.");
  const consultTemplates=[
    {id:"tpl-1",icon:"🏥",text:"개원 오픈 일정에 맞춘 긴급 납기 견적을 희망합니다."},
    {id:"tpl-2",icon:"🧵",text:"원단 스와치북 및 사이즈별 실물 샘플 킷 대여 신청합니다."},
    {id:"tpl-3",icon:"🎨",text:"기존 병원 로고(AI 파일) 자수 제판 및 배치 시안 문의합니다."},
    {id:"tpl-4",icon:"👔",text:"직군/부서별 세부 디자인 차별화 컨설팅 요청합니다."},
    {id:"tpl-5",icon:"📋",text:"개원준비 중 유니폼 구매관련 컨설팅을 신청합니다."},
    {id:"direct",icon:"✏️",text:"직접입력"}
  ];

  const handleSelectTemplate=val=>{
    setSelectedTpl(val);
    if(val==="직접입력"){
      setConsultTitle("");
      setCustomBody(`
${compositionLine}${extraNote?`
• 추가 요청사항: ${extraNote}`:""}`);
    }else{
      setConsultTitle(val);
      setCustomBody(`${val}
${compositionLine}${extraNote?`
• 추가 요청사항: ${extraNote}`:""}`);
    }
  };

  const handleSelectIndustryStep1=opt=>{
    setIndustry(opt);
    setItems(getRecommendedItemsByIndustry(opt));
    setCustomBody(null);
  };

  const applyPreset=type=>{
    setPreset(type);
    if(type==="derma"){
      setIndustry("메디컬/의료");
      setScale("중형");
      setItems(getRecommendedItemsByIndustry("메디컬/의료"));
      setPoints(["디자인","기능/원단"]);
      setCompanyName("청담 루미에르 피부과의원");
      setApplicantName("김서연 총괄실장");
      setPhone("010-8421-3092");
      setEmail("lumiere.clinic@medilyn.kr");
      setBusinessNumber("211-88-49201");
      setCustomBody(null);
    }else if(type==="aesthetic"){
      setIndustry("에스테틱/뷰티");
      setScale("소형");
      setItems(getRecommendedItemsByIndustry("에스테틱/뷰티"));
      setPoints(["디자인","로고/자수 커스텀"]);
      setCompanyName("메종 드 에스테틱 청담");
      setApplicantName("박지민 원장");
      setPhone("010-5920-1184");
      setEmail("maison@aesthetic.co.kr");
      setBusinessNumber("105-86-99281");
      setCustomBody(null);
    }else if(type==="hotel"){
      setIndustry("호텔/스파");
      setScale("중형");
      setItems(getRecommendedItemsByIndustry("호텔/스파"));
      setPoints(["디자인","기능/원단","로고/자수 커스텀"]);
      setCompanyName("그랜드 스파 & 호텔 서울");
      setApplicantName("호텔/스파 구매담당자");
      setPhone("010-0000-0000");
      setEmail("hotel@example.com");
      setBusinessNumber("");
      setCustomBody(null);
    }else if(type==="fnb"){
      setIndustry("식음료/F&B");
      setScale("대형");
      setItems(getRecommendedItemsByIndustry("식음료/F&B"));
      setPoints(["기능/원단","빠른 납기","로고/자수 커스텀"]);
      setCompanyName("파인다이닝 라메르 서울");
      setApplicantName("최현우 총괄셰프");
      setPhone("010-9912-3847");
      setEmail("chef.choi@lamer.co.kr");
      setBusinessNumber("109-81-22940");
      setCustomBody(null);
    }
  };

  const resetDefaultItems=()=>{
    setItems(getRecommendedItemsByIndustry(industry));
    setCustomBody(null);
  };

  const addItemRow=()=>{
    const defaultInd=mapStep1ToRowIndustry(industry);
    const defaultGen=(defaultInd==="식음료/F&B"||defaultInd==="기업"||defaultInd==="기타연구소")?"남여공용":"여성";
    const prodList=getProductList(defaultInd,defaultGen);
    setItems([...items,{
      id:`row-${Date.now()}`,
      industry:defaultInd,
      gender:defaultGen,
      product:prodList[0],
      qty:10,
      note:""
    }]);
    setCustomBody(null);
  };

  const updateItem=(idx,field,val)=>{
    const next=[...items];
    const curr={...next[idx],[field]:val};
    if(field==="industry"){
      if(val==="식음료/F&B"||val==="기업"||val==="기타연구소"){
        curr.gender="남여공용";
      }else if(curr.gender==="남여공용"){
        curr.gender="여성";
      }
      const allowed=getProductList(curr.industry,curr.gender);
      if(!allowed.includes(curr.product)){
        curr.product=allowed[0];
      }
    }else if(field==="gender"){
      const allowed=getProductList(curr.industry,curr.gender);
      if(!allowed.includes(curr.product)){
        curr.product=allowed[0];
      }
    }
    next[idx]=curr;
    setItems(next);
    setCustomBody(null);
  };

  const removeItem=idx=>{
    if(items.length<=1)return;
    setItems(items.filter((_,i)=>i!==idx));
    setCustomBody(null);
  };

  const togglePoint=pt=>{
    if(points.includes(pt)){
      setPoints(points.filter(p=>p!==pt));
    }else{
      setPoints([...points,pt]);
    }
  };

  const handleSubmit=e=>{
    e.preventDefault();
    const finalCompany=companyName.trim()||"신규 B2B 고객사";
    const finalApplicant=applicantName.trim()||"담당자";
    const finalPhone=phone.trim()||"010-0000-0000";
    const reqId=`REQ-2026-${Math.floor(100+Math.random()*900)}`;
    const mainProduct=items.length>0?items.map(it=>`${it.product}(${it.gender}) ${it.qty}벌`).join(", "):"맞춤 유니폼";
    const fullDetail=`[상담제목] ${consultTitle}
[업종: ${industry} | 기업규모: ${scale} | 컨설팅포인트: ${points.join(", ")}]

[상담내용]
${computedConsultBody}${extraNote&&!computedConsultBody.includes(extraNote)?`

[추가 상담요청내용]
${extraNote}`:""}`;

    const newReq={
      id:reqId,
      companyName:finalCompany,
      applicantName:finalApplicant,
      phone:finalPhone,
      email:email.trim()||"contact@b2b.client.com",
      businessNumber:businessNumber.trim()||"211-88-00000",
      category:mainProduct,
      requestedItems:items.map(it=>({...it})),
      quantity:totalQty||10,
      expectedDeliveryDate:deliveryDate,
      budgetRange:budgetRange,
      embroiderySpec:{
        embroideryType:embroideryOptions.join(", ")||"로고자수",
        placement:placement,
        sizeEstimate:"가로 8cm x 세로 3cm",
        textOrContent:`${finalCompany} (${embroideryOptions.join(", ")||"로고자수"})`,
        threadColors:["#1E293B (다크 네이비)","#2563EB (로얄 블루)"]
      },
      uploadedFileName:uploadedFileName||"hospital_logo_draft.ai",
      detailedRequest:fullDetail,
      status:"접수완료",
      createdAt:nowDateTime(),
      updatedAt:nowDateTime()
    };
    r(newReq);
  };

  const industryOptions=["메디컬/의료","에스테틱/뷰티","식음료/F&B","호텔/스파","기업","기타/연구소"];
  const rowIndustryOptions=["메디컬","에스테틱","호텔/스파","식음료/F&B","기업","기타연구소"];
  const scaleOptions=[
    {id:"소형",title:"소형",desc:"30인 이상 60인 미만"},
    {id:"중형",title:"중형",desc:"60인 이상 100인 미만"},
    {id:"대형",title:"대형",desc:"100인 이상"}
  ];
  const pointOptions=["디자인","기능/원단","가격","빠른 납기","로고/자수 커스텀"];

  return s.jsxs("div",{className:"b2b-apply-page-wrap",children:[
    /* Top Stepper & Autosave Bar */
    s.jsxs("div",{className:"b2b-stepper-bar",children:[
      s.jsxs("div",{className:"b2b-stepper-left",children:[
        s.jsxs("button",{type:"button",onClick:()=>setStep(1),className:"b2b-stepper-btn",children:[
          s.jsx("span",{className:step===1?"b2b-stepper-circle-active":"b2b-stepper-circle-done",children:step>1?"✓":"1"}),
          s.jsx("span",{className:step===1?"b2b-stepper-text-active":"b2b-stepper-text-done",children:"옵션 선택"})
        ]}),
        s.jsx("div",{className:"b2b-stepper-line"}),
        s.jsxs("button",{type:"button",onClick:()=>setStep(2),className:"b2b-stepper-btn",children:[
          s.jsx("span",{className:step===2?"b2b-stepper-circle-active":"b2b-stepper-circle-inactive",children:"2"}),
          s.jsx("span",{className:step===2?"b2b-stepper-text-active":"b2b-stepper-text-inactive",children:"고객 정보 입력"})
        ]})
      ]}),
      s.jsxs("div",{className:"b2b-autosave-info",children:[
        s.jsx("svg",{className:"b2b-autosave-icon",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[
          s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})
        ]}),
        "입력 내용 실시간 보관"
      ]})
    ]}),

    /* Main Blue-Bordered Card */
    s.jsx("div",{className:"b2b-apply-card",children:
      step===1?s.jsxs("div",{children:[
        /* Step 1 Header */
        s.jsxs("div",{className:"b2b-apply-header",children:[
          s.jsxs("div",{className:"b2b-apply-title-row",children:[
            s.jsx("span",{className:"b2b-apply-step-badge",children:"1"}),
            s.jsx("h1",{className:"b2b-apply-main-title",children:"B2B 컨설팅/견적 신청"})
          ]}),
          s.jsxs("p",{className:"b2b-apply-subtitle",children:[
            "귀사의 사업형태와 규모에 따른",
            s.jsx("br",{}),
            "최적의 디자인컨설팅을 위해 아래 옵션을 선택해주세요"
          ]})
        ]}),

        /* Quick Preset Box */
        s.jsxs("div",{className:"b2b-preset-box",children:[
          s.jsxs("div",{className:"b2b-preset-label",children:[
            s.jsx("svg",{className:"b2b-preset-bolt",fill:"none",stroke:"currentColor",strokeWidth:"2.2",viewBox:"0 0 24 24",children:[
              s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})
            ]}),
            "빠른 추천 조합 (원클릭 자동선택)"
          ]}),
          s.jsxs("div",{className:"b2b-preset-list",children:[
            s.jsxs("button",{type:"button",onClick:()=>applyPreset("derma"),className:`b2b-preset-pill ${preset==="derma"?"b2b-preset-pill-active":""}`,children:[
              s.jsx("span",{children:"🏥"}),
              "피부과/성형외과 개원"
            ]}),
            s.jsxs("button",{type:"button",onClick:()=>applyPreset("aesthetic"),className:`b2b-preset-pill ${preset==="aesthetic"?"b2b-preset-pill-active":""}`,children:[
              s.jsx("span",{children:"🌿"}),
              "프리미엄 에스테틱"
            ]}),
            s.jsxs("button",{type:"button",onClick:()=>applyPreset("fnb"),className:`b2b-preset-pill ${preset==="fnb"?"b2b-preset-pill-active":""}`,children:[
              s.jsx("span",{children:"🍽️"}),
              "프리미엄 F&B 셰프"
            ]}),
            s.jsxs("button",{type:"button",onClick:()=>applyPreset("hotel"),className:`b2b-preset-pill ${preset==="hotel"?"b2b-preset-pill-active":""}`,children:[
              s.jsx(Ib,{className:"w-4 h-4","aria-hidden":true}),
              "호텔/스파"
            ]})
          ]})
        ]}),

        /* 1단계 : 업종선택 */
        s.jsxs("div",{className:"b2b-form-section",children:[
          s.jsxs("div",{className:"b2b-form-sec-header",children:[
            s.jsxs("div",{className:"b2b-form-sec-title-wrap",children:[
              s.jsx("span",{className:"b2b-form-sec-title",children:"1단계 : 업종선택"}),
              s.jsx("span",{className:"b2b-form-sec-sub",children:"(택1)"})
            ]}),
            s.jsxs("span",{className:"b2b-form-sec-selected",children:["선택: ",industry]})
          ]}),
          s.jsx("div",{className:"b2b-pill-grid-3",children:industryOptions.map(opt=>{
            const active=industry===opt;
            return s.jsx("button",{
              type:"button",
              onClick:()=>handleSelectIndustryStep1(opt),
              className:active?"b2b-choice-pill b2b-choice-pill-active":"b2b-choice-pill",
              children:opt
            },opt);
          })})
        ]}),

        /* 2단계 : 기업 규모 선택 */
        s.jsxs("div",{className:"b2b-form-section",children:[
          s.jsxs("div",{className:"b2b-form-sec-header",children:[
            s.jsxs("div",{className:"b2b-form-sec-title-wrap",children:[
              s.jsx("span",{className:"b2b-form-sec-title",children:"2단계 : 기업 규모 선택"}),
              s.jsx("span",{className:"b2b-form-sec-sub",children:"(택1)"})
            ]}),
            s.jsxs("span",{className:"b2b-form-sec-selected",children:["선택: ",scale]})
          ]}),
          s.jsx("div",{className:"b2b-pill-grid-3",children:scaleOptions.map(opt=>{
            const active=scale===opt.id;
            return s.jsxs("button",{
              type:"button",
              onClick:()=>setScale(opt.id),
              className:active?"b2b-scale-pill b2b-scale-pill-active":"b2b-scale-pill",
              children:[
                s.jsx("span",{className:active?"b2b-scale-title-active":"b2b-scale-title",children:opt.title}),
                s.jsx("span",{className:active?"b2b-scale-desc-active":"b2b-scale-desc",children:opt.desc})
              ]
            },opt.id);
          })}),
          /* Scale Benefit Callout Bar */
          s.jsxs("div",{className:"b2b-scale-benefit-bar",children:[
            s.jsx(Lr,{className:"b2b-scale-benefit-icon"}),
            scale==="중형"?s.jsxs("span",{children:[
              s.jsx("strong",{children:"중형 고객 특별 혜택: "}),
              "30SET 이상 주문 시 로고 제판비(55,000원) 전액 무료 + 무료 샘플킷 대여 및 전담 담당자 배정"
            ]}):scale==="소형"?s.jsxs("span",{children:[
              s.jsx("strong",{children:"소형 고객 특별 혜택: "}),
              "10벌 이상 주문 시 5% 기본 할인 + 전담 디자이너 1:1 자수 시안 검토 및 전자세금계산서 즉시 발행"
            ]}):s.jsxs("span",{children:[
              s.jsx("strong",{children:"대형 고객 특별 혜택: "}),
              "50SET 이상 대량주문 시 15% 최고 할인 + 커스텀 디자인/원단칼라 변경 제작 및 지점별 분할 배송 지원"
            ]})
          ]})
        ]}),

        /* 3단계 : 견적 희망 제품군 및 수량 양식 */
        s.jsxs("div",{className:"b2b-step3-container",children:[
          s.jsxs("div",{className:"b2b-step3-top",children:[
            s.jsxs("div",{children:[
              s.jsxs("div",{className:"b2b-step3-title-row",children:[
                s.jsx("span",{className:"b2b-form-sec-title",children:"3단계 : 견적 희망 제품군 및 수량 양식"}),
                s.jsxs("span",{className:"b2b-step3-count-pill",children:["총 ",items.length,"종 / ",totalQty,"벌"]})
              ]}),
              s.jsx("p",{className:"b2b-step3-desc",children:"원하시는 업종과 성별을 선택하시면 맞춤형 제품군이 제공됩니다. 수량과 세부 요청사항을 작성해주세요."})
            ]}),
            s.jsxs("div",{className:"b2b-step3-btn-group",children:[
              s.jsxs("button",{type:"button",onClick:resetDefaultItems,className:"b2b-btn-outline-sm",children:[
                s.jsx(d2,{className:"b2b-icon-xs"}),
                "추천 기본구성"
              ]}),
              s.jsxs("button",{type:"button",onClick:addItemRow,className:"b2b-btn-primary-sm",children:[
                s.jsx(f2,{className:"b2b-icon-xs"}),
                "품목 추가"
              ]})
            ]})
          ]}),

          /* Table */
          s.jsx("div",{className:"b2b-table-scroll",children:
            s.jsxs("table",{className:"b2b-items-table",children:[
              s.jsx("thead",{children:
                s.jsxs("tr",{children:[
                  s.jsx("th",{className:"b2b-th-no",children:"No."}),
                  s.jsx("th",{className:"b2b-th-ind",children:"업종"}),
                  s.jsx("th",{className:"b2b-th-gen",children:"성별"}),
                  s.jsx("th",{className:"b2b-th-prod",children:"제품군"}),
                  s.jsx("th",{className:"b2b-th-qty",children:"수량"}),
                  s.jsx("th",{className:"b2b-th-note",children:"상품 요청사항"}),
                  s.jsx("th",{className:"b2b-th-del",children:"삭제"})
                ]})
              }),
              s.jsx("tbody",{children:items.map((row,idx)=>{
                const rowProducts=getProductList(row.industry,row.gender);
                const isUnisexOnly=row.industry==="식음료/F&B"||row.industry==="기업"||row.industry==="기타연구소";
                return s.jsxs("tr",{className:"b2b-tr-item",children:[
                  s.jsx("td",{className:"b2b-td-no",children:idx+1}),
                  s.jsx("td",{className:"b2b-td-cell",children:
                    s.jsx("select",{
                      value:row.industry,
                      onChange:e=>updateItem(idx,"industry",e.target.value),
                      className:"b2b-select-white",
                      children:rowIndustryOptions.map(indOpt=>s.jsx("option",{value:indOpt,children:indOpt},indOpt))
                    })
                  }),
                  s.jsx("td",{className:"b2b-td-cell",children:
                    s.jsx("select",{
                      value:row.gender,
                      onChange:e=>updateItem(idx,"gender",e.target.value),
                      className:"b2b-select-white",
                      children:isUnisexOnly?[
                        s.jsx("option",{value:"남여공용",children:"남여공용"},"남여공용"),
                        s.jsx("option",{value:"여성",children:"여성"},"여성"),
                        s.jsx("option",{value:"남성",children:"남성"},"남성")
                      ]:[
                        s.jsx("option",{value:"여성",children:"여성"},"여성"),
                        s.jsx("option",{value:"남성",children:"남성"},"남성"),
                        s.jsx("option",{value:"남여공용",children:"남여공용"},"남여공용")
                      ]
                    })
                  }),
                  s.jsx("td",{className:"b2b-td-cell",children:
                    s.jsx("select",{
                      value:row.product,
                      onChange:e=>updateItem(idx,"product",e.target.value),
                      className:"b2b-select-blue",
                      children:rowProducts.map(p=>s.jsx("option",{value:p,children:p},p))
                    })
                  }),
                  s.jsx("td",{className:"b2b-td-qty",children:
                    s.jsxs("div",{className:"b2b-qty-control",children:[
                      s.jsx("button",{
                        type:"button",
                        onClick:()=>updateItem(idx,"qty",Math.max(1,(Number(row.qty)||1)-1)),
                        className:"b2b-qty-btn-minus",
                        children:"-"
                      }),
                      s.jsx("input",{
                        type:"number",
                        min:"1",
                        value:row.qty,
                        onChange:e=>updateItem(idx,"qty",Math.max(1,parseInt(e.target.value)||1)),
                        className:"b2b-qty-input"
                      }),
                      s.jsx("button",{
                        type:"button",
                        onClick:()=>updateItem(idx,"qty",(Number(row.qty)||0)+1),
                        className:"b2b-qty-btn-plus",
                        children:"+"
                      }),
                      s.jsx("span",{className:"b2b-qty-unit",children:"벌"})
                    ]})
                  }),
                  s.jsx("td",{className:"b2b-td-cell",children:
                    s.jsx("input",{
                      type:"text",
                      value:row.note,
                      onChange:e=>updateItem(idx,"note",e.target.value),
                      placeholder:"색상, 자수 위치, 원단 등 세부 요청사항",
                      className:"b2b-input-note"
                    })
                  }),
                  s.jsx("td",{className:"b2b-td-del",children:
                    s.jsx("button",{
                      type:"button",
                      onClick:()=>removeItem(idx),
                      disabled:items.length<=1,
                      className:"b2b-del-btn",
                      children:s.jsx(v2,{className:"b2b-del-icon"})
                    })
                  })
                ]},row.id);
              })}),
              s.jsx("tfoot",{children:s.jsxs("tr",{children:[
                s.jsx("td",{colSpan:3}),
                s.jsxs("td",{style:{padding:"18px 12px",textAlign:"left",whiteSpace:"nowrap"},children:[
                  "선택 품목: ",s.jsxs("strong",{className:"b2b-summary-highlight",children:[items.length,"종"]})
                ]}),
                s.jsxs("td",{style:{padding:"18px 12px",textAlign:"left",whiteSpace:"nowrap"},children:[
                  "총 수량 합계: ",s.jsx("strong",{className:"b2b-summary-total",children:totalQty}),"벌"
                ]}),
                s.jsx("td",{colSpan:2})
              ]})})
            ]})
          }),


        ]}),

        /* 4단계 : 컨설팅 포인트 */
        s.jsxs("div",{className:"b2b-form-section",children:[
          s.jsxs("div",{className:"b2b-form-sec-header",children:[
            s.jsxs("div",{className:"b2b-form-sec-title-wrap",children:[
              s.jsx("span",{className:"b2b-form-sec-title",children:"4단계 : 컨설팅 포인트"}),
              s.jsx("span",{className:"b2b-form-sec-sub",children:"(복수선택가능)"})
            ]}),
            s.jsxs("span",{className:"b2b-form-sec-selected",children:[points.length,"개 선택됨"]})
          ]}),
          s.jsx("div",{className:"b2b-pill-grid-3",children:pointOptions.map(pt=>{
            const active=points.includes(pt);
            return s.jsxs("button",{
              type:"button",
              onClick:()=>togglePoint(pt),
              className:active?"b2b-choice-pill b2b-choice-pill-active":"b2b-choice-pill",
              children:[
                active&&s.jsx("svg",{className:"b2b-pill-check-icon",fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:[
                  s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})
                ]}),
                pt
              ]
            },pt);
          })})
        ]}),

        /* Bottom Primary CTA Button & Trust Footer */
        s.jsxs("div",{className:"b2b-step1-cta-area",children:[
          s.jsxs("button",{
            type:"button",
            onClick:()=>{setStep(2);window.scrollTo({top:0,behavior:"smooth"});},
            className:"b2b-next-cta-btn",
            children:[
              "다음 단계로 (고객 및 담당자 정보 입력)",
              s.jsx("svg",{className:"b2b-next-arrow",fill:"none",stroke:"currentColor",strokeWidth:"2.2",viewBox:"0 0 24 24",children:[
                s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 12h14m-6-6l6 6-6 6"})
              ]})
            ]
          }),
          s.jsxs("div",{className:"b2b-trust-footer",children:[
            s.jsxs("span",{className:"b2b-trust-item",children:[
              s.jsx(h2,{className:"b2b-trust-icon"}),
              "1:1 전담 디자이너 매칭"
            ]}),
            s.jsx("span",{className:"b2b-trust-dot",children:"·"}),
            s.jsx("span",{className:"b2b-trust-item",children:"영업일 24시간 내 유선 피드백"}),
            s.jsx("span",{className:"b2b-trust-dot",children:"·"}),
            s.jsx("span",{className:"b2b-trust-item",children:"무료 원단 스와치북 발송 지원"})
          ]})
        ]})
      ]}):s.jsxs("form",{onSubmit:handleSubmit,children:[
        /* Step 2: Customer & Contact Information */
        s.jsxs("div",{className:"b2b-apply-header",children:[
          s.jsxs("div",{className:"b2b-apply-title-row",children:[
            s.jsx("span",{className:"b2b-apply-step-badge",children:"2"}),
            s.jsx("h1",{className:"b2b-apply-main-title",children:"고객 및 담당자 정보 입력"})
          ]}),
          s.jsxs("p",{className:"b2b-apply-subtitle",children:[
            "선택하신 옵션과 수량에 맞춘 공식 전자견적서 발송을 위해",
            s.jsx("br",{}),
            "병원/기업명 및 담당자 연락처를 입력해주세요."
          ]})
        ]}),

        /* Selected Step 1 Summary Box */
        s.jsxs("div",{className:"b2b-step2-summary-box",children:[
          s.jsxs("div",{className:"b2b-step2-summary-info",children:[
            s.jsx("span",{className:"b2b-step2-summary-tag",children:"1단계 선택 요약"}),
            s.jsxs("span",{className:"b2b-step2-summary-text",children:[
              `${industry} · ${scale} 규모 · 총 ${items.length}종 (${totalQty}벌) · 포인트: ${points.join(", ")||"기본"}`
            ]})
          ]}),
          s.jsx("button",{type:"button",onClick:()=>setStep(1),className:"b2b-step2-edit-btn",children:"옵션 다시 수정"})
        ]}),

        /* Customer Input Fields */
        s.jsxs("div",{className:"b2b-step2-grid",children:[
          s.jsxs("div",{className:"b2b-field-group",children:[
            s.jsxs("label",{className:"b2b-field-label",children:["병원명 / 기업·브랜드명 ",s.jsx("span",{className:"b2b-req-star",children:"*"})]}),
            s.jsx("input",{type:"text",required:!0,value:companyName,onChange:e=>setCompanyName(e.target.value),placeholder:"예: 메디린 피부과의원 / (주)메디린",className:"b2b-field-input"})
          ]}),
          s.jsxs("div",{className:"b2b-field-group",children:[
            s.jsxs("label",{className:"b2b-field-label",children:["담당자 성함 및 직함 ",s.jsx("span",{className:"b2b-req-star",children:"*"})]}),
            s.jsx("input",{type:"text",required:!0,value:applicantName,onChange:e=>setApplicantName(e.target.value),placeholder:"예: 김서연 총괄실장 / 이도현 대표원장",className:"b2b-field-input"})
          ]}),
          s.jsxs("div",{className:"b2b-field-group",children:[
            s.jsxs("label",{className:"b2b-field-label",children:["휴대전화 / 직통번호 ",s.jsx("span",{className:"b2b-req-star",children:"*"})]}),
            s.jsx("input",{type:"text",required:!0,value:phone,onChange:e=>setPhone(e.target.value),placeholder:"010-0000-0000 (견적 발행 알림 문자 수신)",className:"b2b-field-input"})
          ]}),
          s.jsxs("div",{className:"b2b-field-group",children:[
            s.jsxs("label",{className:"b2b-field-label",children:["이메일 주소 (전자견적서 수신) ",s.jsx("span",{className:"b2b-req-star",children:"*"})]}),
            s.jsx("input",{type:"email",required:!0,value:email,onChange:e=>setEmail(e.target.value),placeholder:"clinic@medilyn.co.kr",className:"b2b-field-input"})
          ]}),
          s.jsxs("div",{className:"b2b-field-group",children:[
            s.jsx("label",{className:"b2b-field-label",children:"사업자등록번호 (세금계산서 발행용)"}),
            s.jsx("input",{type:"text",value:businessNumber,onChange:e=>setBusinessNumber(e.target.value),placeholder:"000-00-00000",className:"b2b-field-input"})
          ]}),
          s.jsxs("div",{className:"b2b-field-group",children:[
            s.jsx("label",{className:"b2b-field-label",children:"희망 납기일"}),
            s.jsx("input",{type:"date",value:deliveryDate,onChange:e=>setDeliveryDate(e.target.value),className:"b2b-field-input"})
          ]}),
          s.jsxs("div",{className:"b2b-field-group b2b-col-span-2",children:[
            s.jsxs("div",{className:"b2b-form-sec-header",style:{marginBottom:"8px"},children:[
              s.jsxs("div",{className:"b2b-form-sec-title-wrap",children:[
                s.jsx("label",{className:"b2b-field-label",style:{marginBottom:0},children:"로고 및 자수신청옵션"}),
                s.jsx("span",{className:"b2b-form-sec-sub",children:"(이름자수 / 로고자수 선택)"})
              ]}),
              s.jsxs("span",{className:"b2b-form-sec-selected",children:["선택: ",embroideryOptions.join(", ")]})
            ]}),
            s.jsx("div",{className:"b2b-pill-grid-2",children:["이름자수","로고자수"].map(opt=>{
              const active=embroideryOptions.includes(opt);
              return s.jsxs("button",{
                type:"button",
                onClick:()=>toggleEmbroideryOpt(opt),
                className:active?"b2b-choice-pill b2b-choice-pill-active":"b2b-choice-pill",
                children:[
                  active&&s.jsx("svg",{className:"b2b-pill-check-icon",fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:[
                    s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})
                  ]}),
                  opt
                ]
              },opt);
            })})
          ]}),
          s.jsxs("div",{className:"b2b-field-group b2b-col-span-2",children:[
            s.jsx("label",{className:"b2b-field-label",children:"로고 파일 첨부 (AI, PDF, PNG, JPG)"}),
            s.jsxs("div",{className:"b2b-upload-box",children:[
              s.jsx(y2,{className:"b2b-upload-icon"}),
              s.jsx("span",{className:"b2b-upload-title",children:uploadedFileName?`첨부된 파일: ${uploadedFileName}`:"로고 파일을 업로드해주세요 (AI 일러스트 파일 또는 고해상도 이미지)"}),
              s.jsx("input",{type:"file",id:"logo-file-step2",className:"hidden",onChange:e=>{e.target.files&&e.target.files[0]&&setUploadedFileName(e.target.files[0].name)}}),
              s.jsx("label",{htmlFor:"logo-file-step2",className:"b2b-upload-btn",children:"파일 선택"})
            ]})
          ]})
        ]}),

        /* Consultation Templates Dropdown & 상담내용 Section */
        s.jsxs("div",{className:"b2b-consult-tpl-section",children:[
          /* Row 1: 상담제목 (자주 요청하는 상담 템플릿 드롭다운) */
          s.jsxs("div",{className:"b2b-consult-body-row b2b-consult-tpl-row-mb",children:[
            s.jsx("label",{className:"b2b-consult-side-label",children:"상담제목"}),
            s.jsxs("div",{className:"b2b-consult-dropdown-col",children:[
              s.jsxs("div",{className:"b2b-consult-tpl-header",children:[
                s.jsx("svg",{className:"b2b-consult-tpl-icon",fill:"none",stroke:"currentColor",strokeWidth:"2.2",viewBox:"0 0 24 24",children:[
                  s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"})
                ]}),
                "자주 요청하는 상담 템플릿 (선택 시 상담제목 자동 입력)"
              ]}),
              s.jsx("div",{className:"b2b-tpl-select-wrap",children:
                s.jsx("select",{
                  value:selectedTpl,
                  onChange:e=>handleSelectTemplate(e.target.value),
                  className:"b2b-tpl-dropdown",
                  children:consultTemplates.map(tpl=>
                    s.jsx("option",{
                      value:tpl.id==="direct"?"직접입력":tpl.text,
                      children:tpl.id==="direct"?"✏️ 직접입력 (상담제목 직접 작성)":`${tpl.icon} ${tpl.text}`
                    },tpl.id)
                  )
                })
              }),
              selectedTpl==="직접입력"&&s.jsx("input",{
                type:"text",
                autoFocus:!0,
                value:consultTitle,
                onChange:e=>{
                  const nextTitle=e.target.value;
                  setConsultTitle(nextTitle);
                  setCustomBody(`${nextTitle}
${compositionLine}${extraNote?`
• 추가 요청사항: ${extraNote}`:""}`);
                },
                placeholder:"상담제목을 직접 입력해주세요 (예: 신규 개원 유니폼 30벌 맞춤 자수 견적 요청)",
                className:"b2b-tpl-direct-input"
              })
            ]})
          ]}),

          /* Row 2: 상담내용 (Left Label + Right Box with Title, Item Summary, and Extra Request Input) */
          s.jsxs("div",{className:"b2b-consult-body-row",children:[
            s.jsx("label",{className:"b2b-consult-side-label",children:"상담내용"}),
            s.jsxs("div",{className:"b2b-consult-editor-card",children:[
              /* Selected Consultation Title Line */
              s.jsx("input",{
                type:"text",
                value:consultTitle,
                onChange:e=>{
                  const nextTitle=e.target.value;
                  setSelectedTpl("직접입력");
                  setConsultTitle(nextTitle);
                  setCustomBody(`${nextTitle}
${compositionLine}${extraNote?`
• 추가 요청사항: ${extraNote}`:""}`);
                },
                placeholder:"상담제목을 입력해주세요.",
                className:"b2b-consult-title-input"
              }),
              /* Auto-generated Item Composition Line */
              s.jsx("div",{className:"b2b-consult-composition-line",children:compositionLine}),
              /* Additional Consultation Request Field */
              s.jsx("textarea",{
                rows:3,
                value:extraNote,
                onChange:e=>{
                  const val=e.target.value;
                  setExtraNote(val);
                  setCustomBody(`${consultTitle}
${compositionLine}${val?`
• 추가 요청사항: ${val}`:""}`);
                },
                placeholder:"추가 상담요청내용 (원단 스와치북 수령 주소, 희망 컬러 배색, 자수 세부 요청사항 등)을 입력해주세요.",
                className:"b2b-consult-extra-textarea"
              })
            ]})
          ]})
        ]}),

        /* Step 2 Action Buttons */
        s.jsxs("div",{className:"b2b-step1-cta-area",children:[
          s.jsxs("div",{className:"b2b-step2-btn-row",children:[
            s.jsx("button",{
              type:"button",
              onClick:()=>setStep(1),
              className:"b2b-prev-step-btn",
              children:"← 이전 단계 (옵션 선택)"
            }),
            s.jsxs("button",{
              type:"submit",
              className:"b2b-submit-final-btn",
              children:[
                s.jsx(vx,{className:"b2b-icon-sm"}),
                "B2B 컨설팅 및 견적 신청 완료하기"
              ]
            })
          ]}),
          s.jsxs("div",{className:"b2b-trust-footer",children:[
            s.jsxs("span",{className:"b2b-trust-item",children:[
              s.jsx(h2,{className:"b2b-trust-icon"}),
              "1:1 전담 디자이너 매칭"
            ]}),
            s.jsx("span",{className:"b2b-trust-dot",children:"·"}),
            s.jsx("span",{className:"b2b-trust-item",children:"영업일 24시간 내 유선 피드백"}),
            s.jsx("span",{className:"b2b-trust-dot",children:"·"}),
            s.jsx("span",{className:"b2b-trust-item",children:"무료 원단 스와치북 발송 지원"})
          ]})
        ]})
      ]})
    })
  ]});
};function extractItemsFromConsulting(r){
  if(r&&Array.isArray(r.requestedItems)&&r.requestedItems.length>0)return r.requestedItems;
  const text=(r&&r.detailedRequest)||"";
  const m=text.match(/희망 품목 구성:\s*([^\n]+)/);
  if(m){
    const raw=m[1].replace(/\(총\s*\d+벌\)/,"").trim();
    const parts=raw.split(", ");
    const parsed=[];
    parts.forEach((p,idx)=>{
      const pm=p.match(/^\[([^/]+)\/([^\]]+)\]\s*(.+)\s+(\d+)벌$/);
      if(pm){
        parsed.push({id:`parsed-${idx+1}`,industry:pm[1],gender:pm[2],product:pm[3].trim(),qty:parseInt(pm[4])||1,note:""});
      }
    });
    if(parsed.length>0)return parsed;
  }
  return[
    {id:"fb-1",industry:"메디컬",gender:"여성",product:"스크럽/상의",qty:15,note:"원내 로고 자수 및 네이비 색상 희망"},
    {id:"fb-2",industry:"메디컬",gender:"남성",product:"의사가운",qty:5,note:"왼쪽 가슴 영문 필기체 원장 자수"},
    {id:"fb-3",industry:"메디컬",gender:"여성",product:"스크럽/하의",qty:10,note:"통기성 우수한 쿨에어 스트레치 원단"}
  ];
}
function renderRequestedItemsTable(r){
  const list=extractItemsFromConsulting(r);
  const tot=list.reduce((a,b)=>a+(Number(b.qty)||0),0);
  const genderBadgeClass=g=>g==="여성"?"b2b-gender-badge b2b-gender-female":g==="남성"?"b2b-gender-badge b2b-gender-male":"b2b-gender-badge b2b-gender-unisex";
  return s.jsx("div",{className:"b2b-unified-table-wrap",children:
    s.jsxs("table",{className:"b2b-unified-table",children:[
      s.jsx("thead",{children:
        s.jsxs("tr",{children:[
          s.jsx("th",{style:{width:"54px",textAlign:"center"},children:"No."}),
          s.jsx("th",{style:{width:"110px"},children:"업종"}),
          s.jsx("th",{style:{width:"100px",textAlign:"center"},children:"성별"}),
          s.jsx("th",{style:{width:"180px"},children:"제품군"}),
          s.jsx("th",{style:{width:"100px",textAlign:"center"},children:"수량"}),
          s.jsx("th",{children:"상품 요청사항"})
        ]})
      }),
      s.jsx("tbody",{children:list.map((it,idx)=>
        s.jsxs("tr",{children:[
          s.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"#74776d"},children:idx+1}),
          s.jsx("td",{style:{fontWeight:600,color:"#1e293b"},children:it.industry||"메디컬"}),
          s.jsx("td",{style:{textAlign:"center"},children:
            s.jsx("span",{className:genderBadgeClass(it.gender),children:it.gender||"여성"})
          }),
          s.jsx("td",{style:{fontWeight:800,color:"#1e3a8a"},children:it.product}),
          s.jsxs("td",{style:{textAlign:"center",fontWeight:800,color:"#292b29",fontSize:"13.5px"},children:[it.qty,"벌"]}),
          s.jsx("td",{style:{color:"#5b5e55",fontWeight:500},children:it.note||"-"})
        ]},it.id||idx)
      )}),
      s.jsx("tfoot",{children:
        s.jsxs("tr",{children:[
          s.jsx("td",{colSpan:4,style:{textAlign:"right",fontWeight:800,color:"#1e293b"},children:"총 주문 수량 합계:"}),
          s.jsxs("td",{style:{textAlign:"center",fontWeight:900,color:"#292b29",fontSize:"15px"},children:[tot,"벌"]}),
          s.jsxs("td",{style:{color:"#74776d",fontWeight:600},children:["총 ",list.length,"개 품목 구성"]})
        ]})
      })
    ]})
  });
}
function renderApprovalAuditBanner(r){
  if(!r||!r.quotation||!r.quotation.approvedAt)return null;
  const q=r.quotation;
  return s.jsxs("div",{className:"bg-emerald-50/90 border border-emerald-300 rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs",children:[
    s.jsxs("div",{className:"flex items-center gap-2.5",children:[
      s.jsx("div",{className:"w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold",children:"✓"}),
      s.jsxs("div",{children:[
        s.jsxs("div",{className:"font-extrabold text-emerald-950 flex items-center gap-2",children:[
          "고객 발주 견적서 공식 승인 및 약관 동의 완료",
          s.jsx("span",{className:"text-[11px] font-bold bg-white text-emerald-700 px-2 py-0.5 rounded border border-emerald-200",children:`필수 약관 ${q.agreedTermsCount||6}개 항목 전체 동의`})
        ]}),
        s.jsxs("div",{className:"text-[11px] text-emerald-800 mt-0.5",children:[
          "승인 일시: ",
          s.jsx("strong",{className:"font-mono font-bold",children:formatDateTime(q.approvedAt)}),
          " · 승인자: ",
          s.jsx("strong",{children:q.approvedBy||r.applicantName}),
          " · 문서번호: ",
          s.jsx("span",{className:"font-mono",children:q.quoteNumber})
        ]})
      ]})
    ]}),
    s.jsx("span",{className:"text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-lg self-start sm:self-center shrink-0",children:"계약 효력 발생 · 대시보드 영구 기록됨"})
  ]});
}
const Ox=({consulting:r,isOpen:j,onClose:M,isAdmin:o=!1})=>j?s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs",children:s.jsxs("div",{className:"b2b-group-card shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:[s.jsxs("div",{className:"sticky top-0 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10",children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-bold",children:s.jsx(Qs,{className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-base font-bold text-slate-900",children:"신청서 원본 전산 양식 (Order Sheet)"}),s.jsxs("p",{className:"text-xs text-slate-500",children:["신청번호 ",r.id," · 접수일시 ",formatDateTime(r.createdAt)]})]})]}),s.jsx("button",{onClick:M,className:"w-8 h-8 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors",children:s.jsx(Xs,{className:"w-5 h-5"})})]}),s.jsxs("div",{className:"p-6 space-y-6 text-sm",children:[s.jsxs("div",{className:"bg-slate-50 rounded-xl p-4 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"현재 진행 상태"}),s.jsx("div",{className:"text-base font-bold text-slate-800 mt-0.5",children:dn(r.status,!o)})]}),s.jsxs("div",{className:"text-xs text-slate-500 sm:text-right",children:[r.consultantName&&s.jsxs("div",{children:["담당 컨설턴트: ",s.jsx("span",{className:"font-semibold text-slate-800",children:r.consultantName})]}),r.trackingNumber&&s.jsxs("div",{className:"text-emerald-700 font-medium mt-0.5",children:["운송장: ",r.courierName," ",r.trackingNumber]})]})]}),s.jsxs("div",{children:[s.jsxs("h3",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5",children:[s.jsx(Cm,{className:"w-3.5 h-3.5"})," 신청 고객 및 사업자 정보"]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 b2b-group-card-sub p-4",children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-xs text-slate-400",children:"기업/브랜드명"}),s.jsx("p",{className:"font-semibold text-slate-900 mt-0.5",children:r.companyName})]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-xs text-slate-400",children:"담당자 성함/직함"}),s.jsx("p",{className:"font-semibold text-slate-900 mt-0.5",children:r.applicantName})]}),s.jsxs("div",{children:[s.jsxs("span",{className:"text-xs text-slate-400 flex items-center gap-1",children:[s.jsx(ox,{className:"w-3 h-3"})," 연락처"]}),s.jsx("p",{className:"font-medium text-slate-800 mt-0.5",children:r.phone})]}),s.jsxs("div",{children:[s.jsxs("span",{className:"text-xs text-slate-400 flex items-center gap-1",children:[s.jsx(ux,{className:"w-3 h-3"})," 이메일"]}),s.jsx("p",{className:"font-medium text-slate-800 mt-0.5",children:r.email})]}),r.businessNumber&&s.jsxs("div",{className:"sm:col-span-2 pt-2 border-t border-slate-50",children:[s.jsx("span",{className:"text-xs text-slate-400",children:"사업자등록번호 (세금계산서용)"}),s.jsx("p",{className:"font-medium text-slate-800 mt-0.5",children:r.businessNumber})]})]})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("h3",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[s.jsx(Yr,{className:"w-3.5 h-3.5"})," 제작 품목 및 대량 발주 수량"]}),s.jsxs("span",{className:"text-xs text-slate-500",children:["희망 납기일: ",s.jsx("strong",{className:"text-slate-800",children:r.expectedDeliveryDate})]})]}),renderRequestedItemsTable(r)]}),s.jsxs("div",{children:[s.jsxs("h3",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5",children:[s.jsx(Gs,{className:"w-3.5 h-3.5"})," 맞춤 컴퓨터 자수 세부 스펙"]}),s.jsxs("div",{className:"b2b-sub-group-box p-4 space-y-3",children:[s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-xs text-slate-500 font-medium",children:"자수 기법"}),s.jsx("p",{className:"font-semibold text-slate-900 mt-0.5",children:r.embroiderySpec.embroideryType})]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-xs text-slate-500 font-medium",children:"자수 부착 위치"}),s.jsx("p",{className:"font-semibold text-slate-900 mt-0.5",children:r.embroiderySpec.placement})]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-xs text-slate-500 font-medium",children:"자수 크기(실측 규격)"}),s.jsx("p",{className:"font-semibold text-slate-900 mt-0.5",children:r.embroiderySpec.sizeEstimate})]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-xs text-slate-500 font-medium",children:"문구 또는 디자인 내용"}),s.jsx("p",{className:"font-semibold text-slate-900 mt-0.5",children:r.embroiderySpec.textOrContent})]})]}),r.embroiderySpec.threadColors&&r.embroiderySpec.threadColors.length>0&&s.jsxs("div",{className:"pt-2 border-t border-slate-200",children:[s.jsx("span",{className:"text-xs text-slate-500 font-medium",children:"지정 자수사 색상:"}),s.jsx("div",{className:"flex flex-wrap gap-2 mt-1",children:r.embroiderySpec.threadColors.map((w,O)=>s.jsxs("span",{className:"inline-flex items-center gap-1 text-xs bg-white px-2.5 py-1 rounded-md border border-blue-200 shadow-2xs font-medium text-slate-800",children:[s.jsx("span",{className:"w-2.5 h-2.5 rounded-full border border-slate-300",style:{backgroundColor:w.split(" ")[0]}}),w]},O))})]}),r.uploadedFileName&&s.jsxs("div",{className:"pt-2 border-t border-slate-200 flex items-center justify-between",children:[s.jsx("span",{className:"text-xs text-slate-500 font-medium",children:"첨부 디자인 파일:"}),s.jsxs("span",{className:"text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200",children:["📎 ",r.uploadedFileName]})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mb-2",children:"상담 문의 상세 내용 및 특이사항"}),s.jsx("div",{className:"p-3.5 b2b-sub-group-box text-slate-700 leading-relaxed whitespace-pre-line text-xs",children:r.detailedRequest})]})]}),s.jsx("div",{className:"sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end gap-3 rounded-b-2xl",children:s.jsx("button",{onClick:M,className:"px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-colors text-xs",children:"닫기"})})]})}):null,Cx=({consulting:r,isOpen:j,onClose:M,isAdmin:o,onCustomerApprove:w,onOpenEditor:O})=>{
  const[copied,setCopied]=V.useState(!1);
  const[approveModalOpen,setApproveModalOpen]=V.useState(!1);
  const[approveStep,setApproveStep]=V.useState("terms");
  const[agreedList,setAgreedList]=V.useState([!1,!1,!1,!1,!1,!1]);
  const[approverName,setApproverName]=V.useState("");
  const[approverError,setApproverError]=V.useState(!1);
  const[approvedTimeStr,setApprovedTimeStr]=V.useState("");

  if(!j||!r.quotation)return null;
  const E=r.quotation;
  const isApproved=r.status==="견적 승인완료"||r.status==="입금확인요청"||r.status==="결제완료/작업진행"||r.status==="상담 완료";
  const bi=E.buyerInfo||{
    companyName:r.companyName||"",
    applicantName:r.applicantName||"",
    tel:r.phone||"",
    mobile:r.phone||"",
    fax:"",
    address:r.address||"",
    zipCode:r.zipCode||"",
    orderDate:E.createdAt||new Date().toISOString().slice(0,10),
    taxInvoiceType:"세금계산서",
    email:r.email||"",
    businessNumber:r.businessNumber||"",
    businessCategory:(r.requestedItems&&r.requestedItems[0]&&r.requestedItems[0].industry)||"메디컬",
    businessType:"보건업/서비스",
    businessOwnerName:r.companyName||"",
    ceoName:r.applicantName||"",
    depositorName:r.companyName||""
  };

  const termsList=[
    {id:1,text:"1. 사이즈는 정확히 확인하여 작성해주세요.",highlight:!1},
    {id:2,text:"2. 주문 제작 상품의 경우 디자인 및 수량에 따라 소요기간이 달라집니다.",highlight:!1},
    {id:3,text:"3. 승인 진행 이후 디자인/색상/ 수량의 수정은 불가능 합니다.",highlight:!0},
    {id:4,text:"4. 승인 및 입금확인 후 제작이 시작됩니다. (입금자명이 주문자명과 동일해야하며 다를 경우 미리 안내 부탁드립니다.)",highlight:!0},
    {id:5,text:"5. 승인서는 계약서와 동일한 효력이 발생합니다.",highlight:!1},
    {id:6,text:"6. 위 모든 사항은 라린느 / 메디린 유니폼으로 주문하신 내용임을 확인 합니다.",highlight:!1}
  ];

  const allAgreed=agreedList.every(Boolean);
  const isApproverValid=approverName.trim().length>0;
  const canSubmitTerms=allAgreed&&isApproverValid;

  const toggleAgree=idx=>{
    const next=[...agreedList];
    next[idx]=!next[idx];
    setAgreedList(next);
  };
  const toggleAgreeAll=()=>{
    if(allAgreed)setAgreedList([!1,!1,!1,!1,!1,!1]);
    else setAgreedList([!0,!0,!0,!0,!0,!0]);
  };

  const copyAccount=()=>{
    navigator.clipboard.writeText(`${E.bankName} ${E.accountNumber} ${E.accountHolder}`);
    setCopied(!0);
    setTimeout(()=>setCopied(!1),2e3);
  };

  const handleDownloadPdf=()=>{
    window.print();
  };

  const handleProceedToDeposit=()=>{
    if(!allAgreed)return;
    if(!approverName.trim()){
      setApproverError(!0);
      return;
    }
    setApproverError(!1);
    setApproveStep("deposit");
  };

  const handleConfirmApprove=()=>{
    if(!allAgreed||!approverName.trim())return;
    const now=new Date(),pad=n=>String(n).padStart(2,"0"),ts=`${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    setApprovedTimeStr(ts);
    w&&w(r.id,{
      approverName:approverName.trim(),
      agreedTermsCount:6
    });
    setApproveStep("done");
  };

  const handleCloseApproveModal=()=>{
    setApproveModalOpen(!1);
    setApproveStep("terms");
  };

  const totalItemQty=(E.items||[]).reduce((a,b)=>a+(Number(b.quantity)||0),0);
  const logoPlateFee=E.logoPlateFee??55e3;
  const isPlateFeeWaived=E.isPlateFeeWaived??(totalItemQty>=30);
  const effectivePlateFee=isPlateFeeWaived?0:logoPlateFee;
  const punchingFee=E.punchingFee??0;
  const discountRate=E.discountRate??0;

  return s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-xs print:p-0 print:bg-white",children:
    s.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto border border-slate-200 flex flex-col print:max-w-none print:max-h-none print:shadow-none print:border-none",children:[
      /* Top Bar */
      s.jsxs("div",{className:"bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between print:hidden rounded-t-2xl shrink-0",children:[
        s.jsxs("div",{className:"flex items-center gap-2.5",children:[
          s.jsx("span",{className:"w-6 h-6 rounded-full bg-blue-600 text-white font-serif font-bold text-xs flex items-center justify-center",children:"M"}),
          s.jsx("span",{className:"text-xs font-serif tracking-widest text-white font-bold",children:"MEDILYN"}),
          s.jsx("span",{className:"text-slate-500 text-xs",children:"|"}),
          s.jsxs("span",{className:"text-xs font-semibold text-slate-200",children:["공식 발주 견적서 (",E.quoteNumber,")"]})
        ]}),
        s.jsxs("div",{className:"flex items-center gap-2",children:[
          s.jsxs("button",{type:"button",onClick:handleDownloadPdf,className:"px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer",children:[
            s.jsx(o2,{className:"w-3.5 h-3.5"}),
            "견적서 PDF 다운로드 / 인쇄"
          ]}),
          s.jsx("button",{onClick:M,className:"w-8 h-8 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors",children:s.jsx(Xs,{className:"w-5 h-5"})})
        ]})
      ]}),

      /* Admin Banner */
      o&&s.jsxs("div",{className:"bg-blue-50 border-b border-blue-200 px-6 py-2.5 flex items-center justify-between text-xs text-blue-900 print:hidden shrink-0",children:[
        s.jsxs("div",{className:"flex items-center gap-2",children:[
          s.jsx(x2,{className:"w-4 h-4 text-blue-600 shrink-0"}),
          s.jsxs("span",{children:[
            s.jsx("strong",{children:"관리자 열람 모드:"}),
            " 메디린에서 제시한 제작 가능 상품 및 사이즈별 발주 견적서입니다. 고객 모드 전환 시 [고객 승인 동의 절차]를 테스트하실 수 있습니다."
          ]})
        ]}),
        r.status==="견적 발송"&&O&&s.jsxs("button",{onClick:()=>{M();O();},className:"text-blue-700 font-bold underline hover:text-blue-950 text-xs flex items-center gap-1 shrink-0 ml-3 cursor-pointer",children:[
          s.jsx(u2,{className:"w-3.5 h-3.5"}),
          "발주 견적서 수정하기"
        ]})
      ]}),

      /* Main Order Quotation Body (Image 2 Layout + Current Modern Theme) */
      s.jsxs("div",{className:"p-6 sm:p-8 space-y-6 flex-1 bg-white text-slate-900",children:[
        /* Document Header */
        s.jsxs("div",{className:"text-center border-b-2 border-slate-900 pb-5 relative",children:[
          s.jsx("div",{className:"text-[11px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-1",children:"MEDILYN · LA LUNE B2B ORDER & QUOTATION"}),
          s.jsx("h1",{className:"text-2xl sm:text-3xl font-black text-slate-900 tracking-[0.25em]",children:"발 주 견 적 서"}),
          s.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500",children:[
            s.jsxs("span",{children:["문서번호: ",s.jsx("strong",{className:"text-slate-800 font-mono",children:E.quoteNumber})]}),
            s.jsx("span",{children:"|"}),
            s.jsxs("span",{children:["발행일: ",s.jsx("strong",{className:"text-slate-800",children:E.createdAt})]}),
            s.jsx("span",{children:"|"}),
            s.jsxs("span",{children:["유효기간: ",s.jsxs("strong",{className:"text-slate-800",children:[E.validUntil,"까지"]})]}),
            s.jsx("span",{children:"|"}),
            s.jsxs("span",{children:["담당 컨설턴트: ",s.jsx("strong",{className:"text-slate-800",children:r.consultantName||"메디린 B2B 전담팀"})]})
          ]}),
          isApproved&&s.jsxs("div",{className:"mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold",children:[
            s.jsx(wr,{className:"w-4 h-4 text-emerald-600"}),
            `고객 공식 승인 완료 (승인일시: ${formatDateTime(E.approvedAt||r.updatedAt)} · 승인자: ${E.approvedBy||r.applicantName})`
          ]})
        ]}),

        /* Notice Line */
        s.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center text-xs font-semibold text-slate-700",children:[
          s.jsx("span",{className:"b2b-req-mark",children:"*"}),
          "세금계산서 / 현금영수증 발행을 원하실 경우, 오른쪽의 계산서 발행 정보란을 반드시 기입해 주세요."
        ]}),

        /* Top Info Grid Table (Image 3 Exact Layout, Radio Buttons, Only * Red) */
        s.jsx("div",{className:"b2b-order-info-wrap",children:
          s.jsx("div",{className:"overflow-x-auto",children:
            s.jsxs("table",{className:"b2b-order-info-table",style:{minWidth:"780px"},children:[
              s.jsxs("colgroup",{children:[
                s.jsx("col",{style:{width:"10%"}}),
                s.jsx("col",{style:{width:"14%"}}),
                s.jsx("col",{style:{width:"10%"}}),
                s.jsx("col",{style:{width:"16%"}}),
                s.jsx("col",{style:{width:"15%"}}),
                s.jsx("col",{style:{width:"13%"}}),
                s.jsx("col",{style:{width:"7%"}}),
                s.jsx("col",{style:{width:"8%"}}),
                s.jsx("col",{style:{width:"7%"}})
              ]}),
              s.jsxs("tbody",{children:[
                s.jsxs("tr",{children:[
                  s.jsx("th",{className:"b2b-order-info-th",children:"업체명"}),
                  s.jsx("td",{colSpan:3,className:"b2b-order-info-td font-bold text-slate-900",children:bi.companyName}),
                  s.jsx("th",{className:"b2b-order-info-th",children:"주문일"}),
                  s.jsx("td",{colSpan:4,className:"b2b-order-info-td font-semibold text-slate-800",children:bi.orderDate||E.createdAt})
                ]}),
                s.jsxs("tr",{children:[
                  s.jsx("th",{className:"b2b-order-info-th",children:"담당자명"}),
                  s.jsx("td",{colSpan:3,className:"b2b-order-info-td font-semibold text-slate-800",children:bi.applicantName}),
                  s.jsxs("th",{rowSpan:2,className:"b2b-order-info-th",children:[
                    s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                    "계산서발행 신청 선택"
                  ]}),
                  s.jsx("td",{colSpan:4,className:"b2b-order-info-td",children:
                    s.jsxs("div",{className:"b2b-radio-group",children:[
                      s.jsxs("label",{className:"b2b-radio-label",children:[
                        s.jsx("input",{type:"radio",readOnly:!0,checked:bi.taxInvoiceType==="세금계산서",className:"b2b-radio-input"}),
                        "세금계산서"
                      ]}),
                      s.jsxs("label",{className:"b2b-radio-label",children:[
                        s.jsx("input",{type:"radio",readOnly:!0,checked:bi.taxInvoiceType==="현금영수증",className:"b2b-radio-input"}),
                        "현금영수증"
                      ]})
                    ]})
                  })
                ]}),
                s.jsxs("tr",{children:[
                  s.jsx("th",{className:"b2b-order-info-th",children:"전화번호"}),
                  s.jsx("td",{className:"b2b-order-info-td text-slate-700",children:bi.tel||"-"}),
                  s.jsxs("th",{className:"b2b-order-info-th",children:[
                    s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                    "핸드폰"
                  ]}),
                  s.jsx("td",{className:"b2b-order-info-td font-semibold text-slate-900",children:bi.mobile||r.phone}),
                  s.jsxs("th",{colSpan:2,className:"b2b-order-info-th",style:{fontSize:"11px"},children:[
                    s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                    "E-mail (전자세금계산서 발급용)"
                  ]}),
                  s.jsx("td",{colSpan:2,className:"b2b-order-info-td font-medium text-slate-800",children:bi.email||r.email})
                ]}),
                s.jsxs("tr",{children:[
                  s.jsx("th",{className:"b2b-order-info-th",children:"팩스번호"}),
                  s.jsx("td",{colSpan:3,className:"b2b-order-info-td text-slate-600",children:bi.fax||"-"}),
                  s.jsxs("th",{className:"b2b-order-info-th",children:[
                    s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                    "사업자등록번호"
                  ]}),
                  s.jsx("td",{className:"b2b-order-info-td font-mono font-bold text-slate-900",children:bi.businessNumber||r.businessNumber||"-"}),
                  s.jsx("th",{className:"b2b-order-info-th",children:"업종"}),
                  s.jsx("td",{className:"b2b-order-info-td text-slate-800",children:bi.businessCategory||"-"}),
                  s.jsxs("td",{className:"b2b-order-info-td text-slate-800",children:["업태: ",bi.businessType||"-"]})
                ]}),
                s.jsxs("tr",{children:[
                  s.jsx("th",{rowSpan:2,className:"b2b-order-info-th",children:"배송주소"}),
                  s.jsx("td",{colSpan:3,className:"b2b-order-info-td text-slate-800",children:bi.address||"-"}),
                  s.jsxs("th",{className:"b2b-order-info-th",children:[
                    s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                    "사업자명"
                  ]}),
                  s.jsx("td",{className:"b2b-order-info-td font-semibold text-slate-900",children:bi.businessOwnerName||bi.companyName}),
                  s.jsxs("th",{className:"b2b-order-info-th",children:[
                    s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                    "대표자명"
                  ]}),
                  s.jsx("td",{colSpan:2,className:"b2b-order-info-td font-semibold text-slate-900",children:bi.ceoName||bi.applicantName})
                ]}),
                s.jsxs("tr",{children:[
                  s.jsxs("th",{className:"b2b-order-info-th",children:[
                    s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                    "우편번호"
                  ]}),
                  s.jsx("td",{colSpan:2,className:"b2b-order-info-td font-mono text-slate-700",children:bi.zipCode||"-"}),
                  s.jsxs("th",{className:"b2b-order-info-th",children:[
                    s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                    "입금자명"
                  ]}),
                  s.jsx("td",{colSpan:4,className:"b2b-order-info-td font-bold text-slate-900",children:bi.depositorName||bi.companyName})
                ]})
              ]})
            ]})
          })
        }),

        /* [구성정보 및 사이즈] Table (Image 2 Structure) */
        s.jsxs("div",{className:"space-y-2",children:[
          s.jsxs("div",{className:"flex items-center justify-between",children:[
            s.jsx("h3",{className:"text-sm font-extrabold text-slate-900 tracking-tight",children:"[구성정보 및 사이즈] — 메디린 제작 가능 제안 품목 내역"}),
            s.jsxs("span",{className:"text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200",children:[
              "총 ",E.items.length,"종 / 총 ",totalItemQty,"벌"
            ]})
          ]}),
          s.jsx("div",{className:"b2b-unified-table-wrap",children:
            s.jsxs("table",{className:"w-full text-xs text-center border-collapse",children:[
              s.jsxs("thead",{className:"bg-slate-50 text-slate-700 font-bold border-b border-slate-200",children:[
                s.jsxs("tr",{className:"divide-x divide-slate-300",children:[
                  s.jsx("th",{rowSpan:2,className:"py-2.5 px-3 w-28",children:"제품군"}),
                  s.jsx("th",{rowSpan:2,className:"py-2.5 px-4 text-left",children:"제품명 (메디린 제안 상품 및 스펙)"}),
                  s.jsx("th",{rowSpan:2,className:"py-2.5 px-2.5 w-20",children:"색상"}),
                  s.jsx("th",{rowSpan:2,className:"py-2.5 px-3 w-24 text-right",children:"가격(단가)"}),
                  s.jsx("th",{colSpan:6,className:"py-1.5 px-2 border-b border-slate-300 bg-blue-50/60 text-blue-950",children:"사이즈"}),
                  s.jsx("th",{rowSpan:2,className:"py-2.5 px-2.5 w-20 bg-slate-50",children:"토탈수량"}),
                  s.jsx("th",{rowSpan:2,className:"py-2.5 px-3.5 w-28 text-right bg-slate-50",children:"토탈가격"})
                ]}),
                s.jsxs("tr",{className:"divide-x divide-slate-300 bg-blue-50/30 text-[11px]",children:[
                  s.jsx("th",{className:"py-1.5 px-2 w-11",children:"XS"}),
                  s.jsx("th",{className:"py-1.5 px-2 w-11",children:"S"}),
                  s.jsx("th",{className:"py-1.5 px-2 w-11",children:"M"}),
                  s.jsx("th",{className:"py-1.5 px-2 w-11",children:"L"}),
                  s.jsx("th",{className:"py-1.5 px-2 w-11",children:"XL"}),
                  s.jsx("th",{className:"py-1.5 px-2 w-11",children:"2XL"})
                ]})
              ]}),
              s.jsx("tbody",{className:"divide-y divide-slate-200 text-slate-800",children:E.items.map(($,Z)=>{
                const sz=$.sizes||{XS:0,S:0,M:0,L:0,XL:0,"2XL":0};
                const unitFull=(Number($.unitPrice)||0)+(Number($.embroideryFee)||0);
                return s.jsxs("tr",{className:"divide-x divide-slate-200 hover:bg-slate-50/60",children:[
                  s.jsx("td",{className:"py-3 px-2.5 font-bold text-slate-700",children:$.category||($.name.includes("]")?$.name.split("]")[1].trim():$.name)}),
                  s.jsxs("td",{className:"py-3 px-3.5 text-left",children:[
                    s.jsx("div",{className:"font-extrabold text-slate-900",children:$.name}),
                    $.spec&&s.jsx("div",{className:"text-[11px] text-slate-500 mt-0.5",children:$.spec})
                  ]}),
                  s.jsx("td",{className:"py-3 px-2 font-semibold text-slate-700",children:$.color||"네이비/기본"}),
                  s.jsxs("td",{className:"py-3 px-3 text-right font-semibold text-slate-800",children:[unitFull.toLocaleString(),"원"]}),
                  s.jsx("td",{className:"py-3 px-1.5 font-mono text-slate-600",children:sz.XS||"-"}),
                  s.jsx("td",{className:"py-3 px-1.5 font-mono text-slate-600",children:sz.S||"-"}),
                  s.jsx("td",{className:"py-3 px-1.5 font-mono text-slate-600",children:sz.M||"-"}),
                  s.jsx("td",{className:"py-3 px-1.5 font-mono text-slate-600",children:sz.L||"-"}),
                  s.jsx("td",{className:"py-3 px-1.5 font-mono text-slate-600",children:sz.XL||"-"}),
                  s.jsx("td",{className:"py-3 px-1.5 font-mono text-slate-600",children:sz["2XL"]||"-"}),
                  s.jsxs("td",{className:"py-3 px-2.5 font-extrabold text-blue-600 bg-slate-50/50",children:[$.quantity.toLocaleString(),"벌"]}),
                  s.jsxs("td",{className:"py-3 px-3.5 text-right font-extrabold text-slate-900 bg-slate-50/50",children:[$.amount.toLocaleString(),"원"]})
                ]},$.id||Z);
              })})
            ]})
          })
        ]}),

        /* Pricing Summary & Final Quotation Amount Box (Vertical Stack with Final Total at Bottom) */
        s.jsxs("div",{className:"b2b-sub-group-box p-5 space-y-3 text-xs",children:[
          s.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2",children:[
            s.jsx("span",{className:"font-extrabold text-slate-800 text-sm",children:"견적 산출 세부 내역 (제판비 · 자수펀칭 · 할인율 반영)"}),
            s.jsx("span",{className:"text-[11px] text-slate-500",children:"모든 주문은 [기본정보]와 [구성정보 및 사이즈]에 의거하여 제작됩니다."})
          ]}),

          /* Vertical Breakdown List */
          s.jsxs("div",{className:"bg-white rounded-xl border border-blue-100 divide-y divide-slate-100 overflow-hidden",children:[
            s.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5",children:[
              s.jsx("span",{className:"font-semibold text-slate-700",children:"품목 합계(공급가)"}),
              s.jsxs("span",{className:"font-bold text-slate-900 text-sm",children:[E.subtotal.toLocaleString(),"원"]})
            ]}),
            s.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5",children:[
              s.jsx("span",{className:"font-semibold text-slate-700",children:"로고 제판비 (55,000원)"}),
              isPlateFeeWaived?s.jsx("span",{className:"font-bold text-emerald-600 text-sm",children:"면제 (0원)"}):s.jsxs("span",{className:"font-bold text-slate-900 text-sm",children:["+",effectivePlateFee.toLocaleString(),"원"]})
            ]}),
            s.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5",children:[
              s.jsx("span",{className:"font-semibold text-slate-700",children:"자수펀칭 추가비용"}),
              s.jsxs("span",{className:"font-bold text-slate-900 text-sm",children:["+",(punchingFee||E.embroiderySetupFee||0).toLocaleString(),"원"]})
            ]}),
            s.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-rose-50/30",children:[
              s.jsxs("span",{className:"font-bold text-rose-600",children:["B2B 특별 할인 ",discountRate>0?`(${discountRate}%)`:""]}),
              s.jsxs("span",{className:"font-extrabold text-rose-600 text-sm",children:["-",(E.discountAmount||0).toLocaleString(),"원"]})
            ]}),
            s.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5",children:[
              s.jsx("span",{className:"font-semibold text-slate-600",children:"부가가치세(VAT 10%):"}),
              s.jsxs("span",{className:"font-bold text-slate-700 text-sm",children:["+",E.vatAmount.toLocaleString(),"원"]})
            ]}),
            /* Final Quotation Amount at the Very Bottom */
            s.jsxs("div",{className:"b2b-final-total flex items-baseline justify-between px-4 py-4",style:{borderTop:"1px solid #d8d6ce",backgroundColor:"#f7f6f1"},children:[
              s.jsx("span",{className:"text-sm sm:text-base font-black text-slate-900",children:"최종 견적 금액 :"}),
              s.jsxs("span",{className:"font-bold text-blue-700 tracking-tight",style:{fontSize:"clamp(20px, 2.2vw, 24px)",lineHeight:1.3},children:[
                s.jsx("span",{className:"text-sm font-bold text-slate-700",style:{marginRight:8},children:"(VAT포함)"}),
                E.totalAmount.toLocaleString(),
                "원"
              ]})
            ]})
          ]}),

          /* Bank Account Notice Footer */
          s.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 px-1 text-xs",children:[
            s.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-slate-800",children:[
              s.jsx("span",{className:"font-semibold text-slate-500",children:"*입금계좌 안내 |"}),
              s.jsxs("span",{className:"font-bold text-slate-900",children:[
                "세금계산서 발행 : ",E.bankName," ",E.accountNumber," ",E.accountHolder
              ]})
            ]}),
            s.jsxs("button",{type:"button",onClick:copyAccount,className:"self-start sm:self-auto text-[11px] font-bold text-blue-700 bg-white px-3 py-1 rounded-lg border border-blue-200 hover:bg-blue-50 cursor-pointer shrink-0",children:[
              copied?"✓ 복사완료":"계좌번호 복사"
            ]})
          ]})
        ]}),

        /* [확인해주세요] 6 Mandatory Terms & Supplier Info (Image 2 Bottom Section) */
        s.jsxs("div",{className:"b2b-sub-group-box p-5 space-y-3",children:[
          s.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 pb-2.5",children:[
            s.jsx("h4",{className:"text-xs font-black text-slate-900",children:"[확인해주세요] — 발주 및 제작 필수 유의사항"}),
            isApproved&&s.jsxs("span",{className:"text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200",children:[
              "✓ 전 항목 고객 동의 완료 (",formatDateTime(E.approvedAt||r.updatedAt),")"
            ]})
          ]}),
          s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs",children:[
            s.jsx("div",{className:"lg:col-span-8 space-y-1.5",children:
              termsList.map(t=>s.jsxs("div",{className:`flex items-start gap-2 leading-relaxed ${t.highlight?"text-rose-600 font-extrabold":"text-slate-700 font-medium"}`,children:[
                isApproved&&s.jsx("span",{className:"text-emerald-600 font-bold",children:"✓"}),
                s.jsx("span",{children:t.text})
              ]},t.id))
            }),
            s.jsxs("div",{className:"lg:col-span-4 lg:border-l border-slate-200 lg:pl-4 flex flex-col justify-between text-right text-xs text-slate-600 space-y-1",children:[
              s.jsxs("div",{className:"space-y-1",children:[
                s.jsx("div",{className:"font-extrabold text-slate-900 text-sm",children:"주식회사 라린느 / 메디린 유니폼"}),
                s.jsx("div",{className:"font-semibold text-slate-800",children:"TEL. 1577.6923"}),
                s.jsx("div",{className:"text-slate-600",children:"FAX. 02.542.6262"}),
                s.jsx("div",{className:"text-slate-600",children:"서울시 강남구 논현로 154길 18, 린빌딩, 2층"}),
                s.jsx("div",{className:"text-blue-600 font-semibold",children:"www.lalunestyle.com / www.medilyn.co.kr"})
              ]}),
              E.notes&&E.notes.length>0&&s.jsxs("div",{className:"pt-2 border-t border-slate-200 text-left text-[11px] text-slate-500",children:[
                E.notes.map((n,i)=>s.jsx("div",{children:`• ${n}`},i))
              ]})
            ]})
          ]})
        ]})
      ]}),

      /* Sticky Footer Action Bar */
      s.jsxs("div",{className:"sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-b-2xl print:hidden shrink-0",children:[
        s.jsx("div",{className:"text-xs",children:
          isApproved?s.jsxs("span",{className:"inline-flex items-center gap-1.5 font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-300",children:[
            s.jsx(Lm,{className:"w-4 h-4 text-emerald-600"}),
            `고객 승인 및 계약 동의 완료 (${formatDateTime(E.approvedAt||r.updatedAt)})`
          ]}):s.jsxs("span",{className:"inline-flex items-center gap-1.5 font-semibold text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200",children:[
            s.jsx(Xm,{className:"w-4 h-4 text-blue-600"}),
            `고객 승인 대기중 (유효기간: ${E.validUntil})`
          ]})
        }),
        s.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end",children:[
          s.jsxs("button",{type:"button",onClick:handleDownloadPdf,className:"px-4 py-2.5 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 font-bold hover:bg-blue-100 text-xs flex items-center gap-1.5 transition-colors cursor-pointer",children:[
            s.jsx(o2,{className:"w-4 h-4"}),
            "견적서 PDF 다운로드"
          ]}),
          s.jsx("button",{type:"button",onClick:M,className:"px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 text-xs transition-colors cursor-pointer",children:"닫기"}),
          !o&&r.status==="견적 발송"&&s.jsxs("button",{type:"button",onClick:()=>{setApproveStep("terms");setApproveModalOpen(!0);},className:"px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-blue-600/20 transition-all hover:scale-[1.01] cursor-pointer",children:[
            s.jsx(wr,{className:"w-4 h-4"}),
            "발주 견적서 동의 및 승인하기"
          ]})
        ]})
      ]}),

      /* Customer Consent & Approval Modal (동의 절차 -> 입금계좌 안내 -> 승인완료 확인 팝업) */
      approveModalOpen&&s.jsx("div",{className:"fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs print:hidden",children:
        approveStep==="terms"?s.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4",children:[
          s.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-100 pb-3",children:[
            s.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0",children:s.jsx(h2,{className:"w-6 h-6"})}),
            s.jsxs("div",{children:[
              s.jsx("h3",{className:"text-base font-extrabold text-slate-900",children:"발주 견적서 최종 승인 및 필수 동의 절차"}),
              s.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:"아래 [확인해주세요] 필수 약관에 동의하시면 승인 일시가 대시보드에 공식 기록됩니다."})
            ]})
          ]}),

          /* Summary of Quote */
          s.jsxs("div",{className:"bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1.5",children:[
            s.jsxs("div",{className:"flex justify-between",children:[
              s.jsx("span",{className:"text-slate-500",children:"발주 고객사 / 문서번호"}),
              s.jsxs("span",{className:"font-bold text-slate-900",children:[r.companyName," (",E.quoteNumber,")"]})
            ]}),
            s.jsxs("div",{className:"flex justify-between",children:[
              s.jsx("span",{className:"text-slate-500",children:"총 발주 수량 / 최종 견적 금액"}),
              s.jsxs("span",{className:"font-extrabold text-blue-600",children:["총 ",totalItemQty,"벌 / ₩",E.totalAmount.toLocaleString(),"원 (VAT포함)"]})
            ]})
          ]}),

          /* Agree All Button */
          s.jsxs("button",{
            type:"button",
            onClick:toggleAgreeAll,
            className:`w-full p-3 rounded-xl border text-xs font-extrabold flex items-center justify-between transition-all cursor-pointer ${allAgreed?"bg-blue-600 text-white border-blue-600":"bg-slate-50 text-slate-800 border-slate-300 hover:border-blue-400"}`,
            children:[
              s.jsx("span",{children:"[필수] 발주 견적서 제작 및 계약 효력 안내 6개 항목 전체 동의"}),
              s.jsx("span",{className:"text-sm",children:allAgreed?"✓ 전체 동의됨":"전체 동의하기"})
            ]
          }),

          /* Individual 6 Checkboxes */
          s.jsx("div",{className:"space-y-2 max-h-52 overflow-y-auto pr-1",children:
            termsList.map((t,idx)=>s.jsxs("label",{
              onClick:()=>toggleAgree(idx),
              className:`flex items-start gap-2.5 p-2.5 rounded-xl border text-xs cursor-pointer transition-colors ${agreedList[idx]?"bg-blue-50/50 border-blue-300":"bg-white border-slate-200 hover:bg-slate-50"}`,
              children:[
                s.jsx("input",{
                  type:"checkbox",
                  checked:agreedList[idx],
                  onChange:()=>{},
                  className:"mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                }),
                s.jsx("span",{className:t.highlight?"font-bold text-rose-600":"text-slate-700",children:t.text})
              ]
            },t.id))
          }),

          /* Approver Name Input (Mandatory with *) */
          s.jsxs("div",{className:"space-y-1.5 pt-1",children:[
            s.jsxs("label",{className:"text-xs font-bold text-slate-700 flex items-center gap-1",children:[
              "승인자 성함 / 직함 (전자서명 기록용)",
              s.jsx("span",{className:"b2b-req-mark",children:"*"})
            ]}),
            s.jsx("input",{
              type:"text",
              required:!0,
              value:approverName,
              onChange:e=>{
                setApproverName(e.target.value);
                if(e.target.value.trim())setApproverError(!1);
              },
              placeholder:`필수 입력 (예: ${r.applicantName||"김서연 총괄실장"})`,
              className:`w-full px-3.5 py-2 border rounded-xl text-xs font-semibold focus:outline-none ${(!isApproverValid&&(allAgreed||approverError))?"border-rose-400 bg-rose-50/20 focus:border-rose-600":"border-slate-300 focus:border-blue-600"}`
            }),
            (!isApproverValid&&(allAgreed||approverError))&&s.jsx("p",{className:"text-[11px] font-semibold text-rose-600",children:"* 승인자 성함 및 직함을 입력하셔야 다음 단계로 넘어갈 수 있습니다."})
          ]}),

          /* Buttons */
          s.jsxs("div",{className:"flex gap-2.5 pt-2",children:[
            s.jsx("button",{type:"button",onClick:handleCloseApproveModal,className:"flex-1 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors cursor-pointer",children:"취소"}),
            s.jsx("button",{
              type:"button",
              disabled:!canSubmitTerms,
              onClick:handleProceedToDeposit,
              className:`flex-1 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all ${canSubmitTerms?"bg-blue-600 hover:bg-blue-700 text-white cursor-pointer":"bg-slate-200 text-slate-400 cursor-not-allowed"}`,
              children:"동의 및 공식 승인 완료"
            })
          ]})
        ]}):approveStep==="deposit"?s.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 space-y-5",children:[
          s.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-100 pb-3.5",children:[
            s.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0",children:s.jsx(h2,{className:"w-6 h-6"})}),
            s.jsxs("div",{children:[
              s.jsx("h3",{className:"text-base font-extrabold text-slate-900",children:"입금계좌 안내 및 제작 착수 확인"}),
              s.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:"필수 약관 동의가 확인되었습니다. 아래 입금계좌를 확인 후 [확인]을 눌러주세요."})
            ]})
          ]}),

          /* Prominent Red Notice */
          s.jsxs("div",{className:"p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-1",children:[
            s.jsx("div",{className:"text-xs font-extrabold text-rose-700",children:"※ 제작 착수 및 입금자명 필수 안내"}),
            s.jsx("p",{className:"text-xs sm:text-[13px] font-bold text-rose-600 leading-relaxed",children:"승인 및 입금확인 후 제작이 시작됩니다. (입금자명이 주문자명과 동일해야하며 다를 경우 미리 안내 부탁드립니다.)"})
          ]}),

          /* Deposit Bank Account Details */
          s.jsxs("div",{className:"b2b-sub-group-box p-4 space-y-3 text-xs",children:[
            s.jsxs("div",{className:"flex items-center justify-between border-b border-blue-100 pb-2.5",children:[
              s.jsx("span",{className:"font-extrabold text-slate-800",children:"전용 입금계좌 정보"}),
              s.jsx("button",{
                type:"button",
                onClick:copyAccount,
                className:"px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-blue-700 font-bold text-[11px] hover:bg-blue-50 cursor-pointer",
                children:copied?"✓ 계좌번호 복사완료":"계좌번호 복사"
              })
            ]}),
            s.jsxs("div",{className:"space-y-2",children:[
              s.jsxs("div",{className:"flex items-center justify-between",children:[
                s.jsx("span",{className:"text-slate-500",children:"입금 은행"}),
                s.jsx("span",{className:"font-bold text-slate-900 text-sm",children:E.bankName})
              ]}),
              s.jsxs("div",{className:"flex items-center justify-between",children:[
                s.jsx("span",{className:"text-slate-500",children:"입금 계좌번호"}),
                s.jsx("span",{className:"font-mono font-black text-blue-700 text-base tracking-tight",children:E.accountNumber})
              ]}),
              s.jsxs("div",{className:"flex items-center justify-between",children:[
                s.jsx("span",{className:"text-slate-500",children:"예금주"}),
                s.jsx("span",{className:"font-bold text-slate-900",children:E.accountHolder})
              ]}),
              s.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-blue-100",children:[
                s.jsx("span",{className:"font-bold text-slate-700",children:"총 입금 금액 (VAT포함)"}),
                s.jsxs("span",{className:"font-black text-blue-600 text-base",children:["₩",E.totalAmount.toLocaleString(),"원"]})
              ]}),
              s.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-600",children:[
                s.jsx("span",{children:"주문자명(입금자명) / 승인자"}),
                s.jsxs("span",{className:"font-bold text-slate-900",children:[bi.depositorName||bi.companyName," / ",approverName.trim()]})
              ]})
            ]})
          ]}),

          /* Buttons */
          s.jsxs("div",{className:"flex gap-2.5 pt-1",children:[
            s.jsx("button",{type:"button",onClick:()=>setApproveStep("terms"),className:"px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors cursor-pointer",children:"이전"}),
            s.jsx("button",{
              type:"button",
              onClick:handleConfirmApprove,
              className:"flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer",
              children:"입금계좌 확인 및 승인 완료"
            })
          ]})
        ]}):s.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-5 text-center",children:[
          s.jsx("div",{className:"w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-600/25",children:s.jsx(wr,{className:"w-8 h-8"})}),
          s.jsxs("div",{className:"space-y-1.5",children:[
            s.jsx("h3",{className:"text-lg font-extrabold text-slate-900",children:"승인절차가 완료되었습니다."}),
            s.jsx("p",{className:"text-xs text-slate-500 leading-relaxed",children:"발주 견적서 공식 승인 및 약관 동의 내역이 대시보드에 기록되었습니다."})
          ]}),
          s.jsxs("div",{className:"bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-2",children:[
            s.jsxs("div",{className:"flex justify-between",children:[
              s.jsx("span",{className:"text-slate-500",children:"문서번호 / 고객사"}),
              s.jsxs("span",{className:"font-bold text-slate-900",children:[r.companyName," (",E.quoteNumber,")"]})
            ]}),
            s.jsxs("div",{className:"flex justify-between",children:[
              s.jsx("span",{className:"text-slate-500",children:"전자서명 승인자"}),
              s.jsx("span",{className:"font-bold text-blue-700",children:approverName.trim()})
            ]}),
            s.jsxs("div",{className:"flex justify-between",children:[
              s.jsx("span",{className:"text-slate-500",children:"공식 승인 일시"}),
              s.jsx("span",{className:"font-mono font-bold text-slate-800",children:formatDateTime(approvedTimeStr||E.approvedAt||r.updatedAt)})
            ]}),
            s.jsxs("div",{className:"flex justify-between pt-2 border-t border-slate-200",children:[
              s.jsx("span",{className:"text-slate-500",children:"입금계좌 안내"}),
              s.jsxs("span",{className:"font-bold text-slate-900",children:[E.bankName," ",E.accountNumber," (",E.accountHolder,")"]})
            ]})
          ]}),
          s.jsx("p",{className:"text-[11px] font-bold text-rose-600 bg-rose-50 px-3 py-2 rounded-xl border border-rose-200 leading-relaxed",children:"승인 및 입금확인 후 제작이 시작됩니다. (입금자명이 주문자명과 동일해야하며 다를 경우 미리 안내 부탁드립니다.)"}),
          s.jsx("button",{
            type:"button",
            onClick:handleCloseApproveModal,
            className:"w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer",
            children:"확인"
          })
        ]})
      })
    ]})
  });
},Dx=({consulting:r,isOpen:j,onClose:M,onSaveQuotation:o})=>{
  if(!j)return null;
  const extractedList=extractItemsFromConsulting(r);
  const existingQ=r.quotation;

  /* Initialize Line Items with Size Breakdown (XS ~ 2XL) */
  const initItems=(existingQ&&existingQ.items&&existingQ.items.length>0&&!existingQ.items[0].name.includes("외 "))?existingQ.items.map(it=>{
    const q=Number(it.quantity)||10;
    const defaultSizes=it.sizes||{XS:0,S:Math.floor(q*0.3),M:Math.floor(q*0.4),L:q-Math.floor(q*0.3)-Math.floor(q*0.4),XL:0,"2XL":0};
    return{
      ...it,
      category:it.category||(it.name.includes("]")?it.name.split("]")[1].trim():it.name),
      color:it.color||"네이비",
      sizes:defaultSizes
    };
  }):extractedList.map((it,idx)=>{
    const q=Number(it.qty)||10;
    const sCount=Math.floor(q*0.3);
    const mCount=Math.floor(q*0.4);
    const lCount=Math.max(0,q-sCount-mCount);
    return{
      id:`item-${idx+1}`,
      industry:it.industry||"메디컬",
      gender:it.gender||"여성",
      category:it.product,
      name:`[${it.industry||"메디컬"}/${it.gender||"여성"}] 메디린 프리미엄 ${it.product}`,
      color:it.note&&it.note.includes("베이지")?"베이지":it.note&&it.note.includes("블랙")?"블랙":"네이비",
      spec:it.note||`맞춤 자수 제작 (${r.embroiderySpec.embroideryType})`,
      sizes:{XS:0,S:sCount,M:mCount,L:lCount,XL:0,"2XL":0},
      quantity:q,
      unitPrice:38e3,
      embroideryFee:4e3,
      amount:42e3*q
    };
  });

  const[O,F]=V.useState(initItems);
  const totalQty=O.reduce((acc,it)=>acc+(Number(it.quantity)||0),0);

  /* 1. 로고 제판비 55,000원 (30벌 이상 시 자동 반영 및 면제 버튼 제공) */
  const[logoPlateFee,setLogoPlateFee]=V.useState(existingQ?.logoPlateFee??55e3);
  const[isPlateFeeWaived,setIsPlateFeeWaived]=V.useState(existingQ?.isPlateFeeWaived??(totalQty>=30));

  /* 2. 자수펀칭 추가 비용 세팅 */
  const[punchingFee,setPunchingFee]=V.useState(existingQ?.punchingFee??existingQ?.embroiderySetupFee??3e4);

  /* 3. 할인금액이 아닌 할인율(%) 설정 (30벌 이상 10%, 50벌 이상 15% 기본 추천) */
  const defaultDiscRate=existingQ?.discountRate!==void 0?existingQ.discountRate:(totalQty>=50?15:totalQty>=30?10:totalQty>=10?5:0);
  const[discountRate,setDiscountRate]=V.useState(defaultDiscRate);

  /* 4. 발주 견적서 상단 고객/세금계산서 정보 (고객 신청 기본정보 자동 연동) */
  const[buyerInfo,setBuyerInfo]=V.useState(existingQ?.buyerInfo||{
    companyName:r.companyName||"",
    applicantName:r.applicantName||"",
    tel:r.phone||"",
    mobile:r.phone||"",
    fax:"",
    address:r.address||"",
    zipCode:r.zipCode||"",
    orderDate:(r.createdAt?r.createdAt.slice(0,10):new Date().toISOString().slice(0,10)),
    taxInvoiceType:"세금계산서",
    email:r.email||"",
    businessNumber:r.businessNumber||"",
    businessCategory:(r.requestedItems&&r.requestedItems[0]&&r.requestedItems[0].industry)||"메디컬",
    businessType:"보건업/서비스",
    businessOwnerName:r.companyName||"",
    ceoName:r.applicantName||"",
    depositorName:r.companyName||""
  });

  const[bankName,setBankName]=V.useState(existingQ?.bankName||"국민은행");
  const[accountNumber,setAccountNumber]=V.useState(existingQ?.accountNumber||"469301-01-202005");
  const[accountHolder,setAccountHolder]=V.useState(existingQ?.accountHolder||"주식회사 라린느");
  const[notesText,setNotesText]=V.useState((existingQ?.notes||[
    "본 발주 견적서는 발행일로부터 14일간 유효합니다.",
    "승인 및 입금 확인 후 영업일 기준 7~10일 이내 맞춤 제작 및 출고됩니다."
  ]).join("\n"));

  const updateBuyer=(field,val)=>setBuyerInfo({...buyerInfo,[field]:val});

  /* Calculations */
  const subtotal=O.reduce((acc,it)=>acc+it.amount,0);
  const activePlateFee=isPlateFeeWaived?0:logoPlateFee;
  const discountAmount=Math.round(subtotal*(Number(discountRate)||0)/100);
  const supplyValue=Math.max(0,subtotal+activePlateFee+(Number(punchingFee)||0)-discountAmount);
  const vatAmount=Math.round(supplyValue*0.1);
  const totalAmount=supplyValue+vatAmount;

  const updateItemField=(idx,field,val)=>{
    const next=[...O];
    const curr={...next[idx],[field]:val};
    if(field==="quantity"||field==="unitPrice"||field==="embroideryFee"){
      const q=Number(field==="quantity"?val:curr.quantity)||0;
      const u=Number(field==="unitPrice"?val:curr.unitPrice)||0;
      const e=Number(field==="embroideryFee"?val:curr.embroideryFee)||0;
      curr.amount=(u+e)*q;
    }
    next[idx]=curr;
    F(next);
  };

  const updateItemSize=(idx,sizeKey,val)=>{
    const next=[...O];
    const curr={...next[idx]};
    const nextSizes={...(curr.sizes||{XS:0,S:0,M:0,L:0,XL:0,"2XL":0}),[sizeKey]:Math.max(0,parseInt(val)||0)};
    curr.sizes=nextSizes;
    const sumQty=Object.values(nextSizes).reduce((a,b)=>a+(Number(b)||0),0);
    if(sumQty>0){
      curr.quantity=sumQty;
      curr.amount=((Number(curr.unitPrice)||0)+(Number(curr.embroideryFee)||0))*sumQty;
    }
    next[idx]=curr;
    F(next);
  };

  const addProposalItem=()=>{
    F([...O,{
      id:`item-${Date.now()}`,
      category:"추가품목",
      name:"메디린 제안 추가 유니폼 품목",
      color:"네이비",
      spec:"세부 원단 및 자수 스펙 입력",
      sizes:{XS:0,S:2,M:5,L:3,XL:0,"2XL":0},
      quantity:10,
      unitPrice:38e3,
      embroideryFee:4e3,
      amount:42e4
    }]);
  };

  const removeProposalItem=idx=>{
    if(O.length<=1)return;
    F(O.filter((_,i)=>i!==idx));
  };

  const handleSaveAndSend=sendToCustomer=>{
    const quoteObj={
      quoteNumber:existingQ?.quoteNumber||`QT-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${Math.floor(10+Math.random()*90)}`,
      createdAt:existingQ?.createdAt||new Date().toISOString().slice(0,10),
      validUntil:existingQ?.validUntil||new Date(Date.now()+336*60*60*1e3).toISOString().slice(0,10),
      buyerInfo,
      items:O,
      subtotal,
      logoPlateFee,
      isPlateFeeWaived,
      punchingFee:Number(punchingFee)||0,
      embroiderySetupFee:activePlateFee+(Number(punchingFee)||0),
      discountRate:Number(discountRate)||0,
      discountAmount,
      vatAmount,
      totalAmount,
      bankName,
      accountNumber,
      accountHolder,
      notes:notesText.split("\n").filter(n=>n.trim().length>0),
      status:"발송됨"
    };
    o(r.id,quoteObj,sendToCustomer);
    M();
  };

  return s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/65 backdrop-blur-xs",children:
    s.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[94vh] overflow-y-auto border border-slate-200 flex flex-col",children:[
      /* Modal Header */
      s.jsxs("div",{className:"sticky top-0 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10",children:[
        s.jsxs("div",{children:[
          s.jsxs("div",{className:"flex items-center gap-2",children:[
            s.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200",children:"메디린 관리자 전용"}),
            s.jsx("h2",{className:"text-base font-extrabold text-slate-900",children:r.quotation?"발주 견적서 수정 및 재발송":"메디린 제작 제안 · 발주 견적서 작성"})
          ]}),
          s.jsxs("p",{className:"text-xs text-slate-500 mt-0.5",children:[
            "고객 신청서를 바탕으로 메디린 제작 가능 품목·사이즈·할인율을 구성하여 발송합니다. (고객사: ",
            s.jsx("strong",{className:"text-slate-800",children:r.companyName}),
            " · 총 ",totalQty,"벌)"
          ]})
        ]}),
        s.jsx("button",{onClick:M,className:"w-8 h-8 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors",children:s.jsx(Xs,{className:"w-5 h-5"})})
      ]}),

      /* Modal Body */
      s.jsxs("div",{className:"p-6 space-y-6 text-xs flex-1",children:[
        /* 1. Customer Original Consulting Request Table */
        s.jsxs("div",{className:"space-y-2",children:[
          s.jsxs("div",{className:"flex items-center justify-between",children:[
            s.jsxs("span",{className:"font-extrabold text-slate-800 flex items-center gap-1.5 text-xs",children:[
              s.jsx(Yr,{className:"w-4 h-4 text-blue-600"}),
              "1. 고객 컨설팅 신청 품목 내역 (기준 데이터)"
            ]}),
            s.jsxs("span",{className:"text-slate-500",children:[
              "로고/자수신청옵션: ",
              s.jsx("strong",{className:"text-blue-700",children:r.embroiderySpec.embroideryType}),
              " · 희망 납기일: ",
              s.jsx("strong",{className:"text-slate-800",children:r.expectedDeliveryDate})
            ]})
          ]}),
          renderRequestedItemsTable(r)
        ]}),

        /* 2. 발주 견적서 기본정보 & 세금계산서 발행 정보 (Image 3 Table Form) */
        s.jsxs("div",{className:"space-y-2.5",children:[
          s.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-1",children:[
            s.jsxs("span",{className:"font-extrabold text-slate-800 flex items-center gap-1.5 text-xs",children:[
              s.jsx(Cm,{className:"w-4 h-4 text-blue-600"}),
              "2. 발주 견적서 주문처 및 세금계산서 발행 정보 (고객 신청 기본정보 자동 연동)"
            ]}),
            s.jsxs("span",{className:"text-[11px] font-semibold text-slate-600",children:[
              s.jsx("span",{className:"b2b-req-mark",children:"*"}),
              "세금계산서 / 현금영수증 발행을 원하실 경우, 오른쪽의 계산서 발행 정보란을 반드시 기입해 주세요."
            ]})
          ]}),
          s.jsx("div",{className:"b2b-order-info-wrap",children:
            s.jsx("div",{className:"overflow-x-auto",children:
              s.jsxs("table",{className:"b2b-order-info-table",style:{minWidth:"820px"},children:[
                s.jsxs("colgroup",{children:[
                  s.jsx("col",{style:{width:"10%"}}),
                  s.jsx("col",{style:{width:"14%"}}),
                  s.jsx("col",{style:{width:"10%"}}),
                  s.jsx("col",{style:{width:"16%"}}),
                  s.jsx("col",{style:{width:"15%"}}),
                  s.jsx("col",{style:{width:"12%"}}),
                  s.jsx("col",{style:{width:"8%"}}),
                  s.jsx("col",{style:{width:"7%"}}),
                  s.jsx("col",{style:{width:"8%"}})
                ]}),
                s.jsxs("tbody",{children:[
                  /* Row 1: 업체명 | 주문일 */
                  s.jsxs("tr",{children:[
                    s.jsx("th",{className:"b2b-order-info-th",children:"업체명"}),
                    s.jsx("td",{colSpan:3,className:"b2b-order-info-td",children:
                      s.jsx("input",{type:"text",value:buyerInfo.companyName,onChange:e=>updateBuyer("companyName",e.target.value),className:"b2b-order-info-input",placeholder:"업체명 입력"})
                    }),
                    s.jsx("th",{className:"b2b-order-info-th",children:"주문일"}),
                    s.jsx("td",{colSpan:4,className:"b2b-order-info-td",children:
                      s.jsx("input",{type:"date",value:buyerInfo.orderDate,onChange:e=>updateBuyer("orderDate",e.target.value),className:"b2b-order-info-input"})
                    })
                  ]}),
                  /* Row 2: 담당자명 | 계산서발행 신청 선택 (rowSpan 2) | 라디오버튼 (세금계산서 / 현금영수증) */
                  s.jsxs("tr",{children:[
                    s.jsx("th",{className:"b2b-order-info-th",children:"담당자명"}),
                    s.jsx("td",{colSpan:3,className:"b2b-order-info-td",children:
                      s.jsx("input",{type:"text",value:buyerInfo.applicantName,onChange:e=>updateBuyer("applicantName",e.target.value),className:"b2b-order-info-input",placeholder:"담당자 성함/직함"})
                    }),
                    s.jsxs("th",{rowSpan:2,className:"b2b-order-info-th",children:[
                      s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                      "계산서발행 신청 선택"
                    ]}),
                    s.jsx("td",{colSpan:4,className:"b2b-order-info-td",children:
                      s.jsxs("div",{className:"b2b-radio-group",children:[
                        s.jsxs("label",{className:"b2b-radio-label",children:[
                          s.jsx("input",{
                            type:"radio",
                            name:"taxInvoiceTypeRadio",
                            checked:buyerInfo.taxInvoiceType==="세금계산서",
                            onChange:()=>updateBuyer("taxInvoiceType","세금계산서"),
                            className:"b2b-radio-input"
                          }),
                          "세금계산서"
                        ]}),
                        s.jsxs("label",{className:"b2b-radio-label",children:[
                          s.jsx("input",{
                            type:"radio",
                            name:"taxInvoiceTypeRadio",
                            checked:buyerInfo.taxInvoiceType==="현금영수증",
                            onChange:()=>updateBuyer("taxInvoiceType","현금영수증"),
                            className:"b2b-radio-input"
                          }),
                          "현금영수증"
                        ]}),
                        s.jsxs("label",{className:"b2b-radio-label",style:{color:"#74776d",fontWeight:600},children:[
                          s.jsx("input",{
                            type:"radio",
                            name:"taxInvoiceTypeRadio",
                            checked:buyerInfo.taxInvoiceType==="미발행",
                            onChange:()=>updateBuyer("taxInvoiceType","미발행"),
                            className:"b2b-radio-input"
                          }),
                          "미신청"
                        ]})
                      ]})
                    })
                  ]}),
                  /* Row 3: 전화번호 | *핸드폰 | (계산서발행 rowSpan) | E-mail (전자세금계산서 발급용) */
                  s.jsxs("tr",{children:[
                    s.jsx("th",{className:"b2b-order-info-th",children:"전화번호"}),
                    s.jsx("td",{className:"b2b-order-info-td",children:
                      s.jsx("input",{type:"text",value:buyerInfo.tel,onChange:e=>updateBuyer("tel",e.target.value),className:"b2b-order-info-input",placeholder:"일반전화"})
                    }),
                    s.jsxs("th",{className:"b2b-order-info-th",children:[
                      s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                      "핸드폰"
                    ]}),
                    s.jsx("td",{className:"b2b-order-info-td",children:
                      s.jsx("input",{type:"text",value:buyerInfo.mobile,onChange:e=>updateBuyer("mobile",e.target.value),className:"b2b-order-info-input",placeholder:"010-0000-0000"})
                    }),
                    s.jsxs("th",{colSpan:2,className:"b2b-order-info-th",style:{fontSize:"11px"},children:[
                      s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                      "E-mail (전자세금계산서 발급용)"
                    ]}),
                    s.jsx("td",{colSpan:2,className:"b2b-order-info-td",children:
                      s.jsx("input",{type:"email",value:buyerInfo.email,onChange:e=>updateBuyer("email",e.target.value),className:"b2b-order-info-input",placeholder:"email@domain.com"})
                    })
                  ]}),
                  /* Row 4: 팩스번호 | *사업자등록번호 | 업종 | 업태 */
                  s.jsxs("tr",{children:[
                    s.jsx("th",{className:"b2b-order-info-th",children:"팩스번호"}),
                    s.jsx("td",{colSpan:3,className:"b2b-order-info-td",children:
                      s.jsx("input",{type:"text",value:buyerInfo.fax,onChange:e=>updateBuyer("fax",e.target.value),className:"b2b-order-info-input",placeholder:"팩스번호 (선택)"})
                    }),
                    s.jsxs("th",{className:"b2b-order-info-th",children:[
                      s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                      "사업자등록번호"
                    ]}),
                    s.jsx("td",{className:"b2b-order-info-td",children:
                      s.jsx("input",{type:"text",value:buyerInfo.businessNumber,onChange:e=>updateBuyer("businessNumber",e.target.value),className:"b2b-order-info-input",placeholder:"000-00-00000"})
                    }),
                    s.jsx("th",{className:"b2b-order-info-th",children:"업종"}),
                    s.jsx("td",{colSpan:2,className:"b2b-order-info-td",children:
                      s.jsxs("div",{className:"flex items-center gap-1.5",children:[
                        s.jsx("input",{type:"text",value:buyerInfo.businessCategory,onChange:e=>updateBuyer("businessCategory",e.target.value),className:"b2b-order-info-input",placeholder:"업종"}),
                        s.jsx("span",{className:"text-slate-400 font-bold",children:"/"}),
                        s.jsx("input",{type:"text",value:buyerInfo.businessType,onChange:e=>updateBuyer("businessType",e.target.value),className:"b2b-order-info-input",placeholder:"업태"})
                      ]})
                    })
                  ]}),
                  /* Row 5: 배송주소 (rowSpan 2) | 주소 입력 | *사업자명 | *대표자명 */
                  s.jsxs("tr",{children:[
                    s.jsx("th",{rowSpan:2,className:"b2b-order-info-th",children:"배송주소"}),
                    s.jsx("td",{colSpan:3,className:"b2b-order-info-td",children:
                      s.jsx("input",{type:"text",value:buyerInfo.address,onChange:e=>updateBuyer("address",e.target.value),className:"b2b-order-info-input",placeholder:"물품 수령 배송주소 입력"})
                    }),
                    s.jsxs("th",{className:"b2b-order-info-th",children:[
                      s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                      "사업자명"
                    ]}),
                    s.jsx("td",{className:"b2b-order-info-td",children:
                      s.jsx("input",{type:"text",value:buyerInfo.businessOwnerName,onChange:e=>updateBuyer("businessOwnerName",e.target.value),className:"b2b-order-info-input",placeholder:"사업자명"})
                    }),
                    s.jsxs("th",{className:"b2b-order-info-th",children:[
                      s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                      "대표자명"
                    ]}),
                    s.jsx("td",{colSpan:2,className:"b2b-order-info-td",children:
                      s.jsx("input",{type:"text",value:buyerInfo.ceoName,onChange:e=>updateBuyer("ceoName",e.target.value),className:"b2b-order-info-input",placeholder:"대표자 성함"})
                    })
                  ]}),
                  /* Row 6: (배송주소 rowSpan) | *우편번호 | 우편번호 입력 | *입금자명 | 입금자명 입력 */
                  s.jsxs("tr",{children:[
                    s.jsxs("th",{className:"b2b-order-info-th",children:[
                      s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                      "우편번호"
                    ]}),
                    s.jsx("td",{colSpan:2,className:"b2b-order-info-td",children:
                      s.jsx("input",{type:"text",value:buyerInfo.zipCode,onChange:e=>updateBuyer("zipCode",e.target.value),className:"b2b-order-info-input",placeholder:"우편번호 입력"})
                    }),
                    s.jsxs("th",{className:"b2b-order-info-th",children:[
                      s.jsx("span",{className:"b2b-req-mark",children:"*"}),
                      "입금자명"
                    ]}),
                    s.jsx("td",{colSpan:4,className:"b2b-order-info-td",children:
                      s.jsx("input",{type:"text",value:buyerInfo.depositorName,onChange:e=>updateBuyer("depositorName",e.target.value),className:"b2b-order-info-input",placeholder:"입금자명 (주문자명과 다를 경우 기재)"})
                    })
                  ]})
                ]})
              ]})
            })
          })
        ]}),

        /* 3. [구성정보 및 사이즈] — 메디린 제작 가능 상품 제시 테이블 (Image 2 Columns) */
        s.jsxs("div",{className:"space-y-2.5",children:[
          s.jsxs("div",{className:"flex items-center justify-between",children:[
            s.jsxs("h3",{className:"text-xs font-extrabold text-slate-800 flex items-center gap-1.5",children:[
              s.jsx(Pb,{className:"w-4 h-4 text-blue-600"}),
              "3. [구성정보 및 사이즈] — 메디린 제작 가능 상품 제시 및 사이즈별 수량 산출"
            ]}),
            s.jsxs("button",{type:"button",onClick:addProposalItem,className:"text-xs font-bold text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-xl border border-blue-200 flex items-center gap-1 transition-colors cursor-pointer",children:[
              s.jsx(f2,{className:"w-3.5 h-3.5"}),
              "+ 제안 상품 행 추가"
            ]})
          ]}),
          s.jsx("div",{className:"b2b-unified-table-wrap",children:
            s.jsxs("table",{className:"b2b-unified-table",style:{textAlign:"center"},children:[
              s.jsxs("thead",{children:[
                s.jsxs("tr",{children:[
                  s.jsx("th",{rowSpan:2,style:{width:"115px",textAlign:"center"},children:"제품군"}),
                  s.jsx("th",{rowSpan:2,style:{minWidth:"250px",textAlign:"left"},children:"제안 제품명 / 스펙"}),
                  s.jsx("th",{rowSpan:2,style:{width:"86px",textAlign:"center"},children:"색상"}),
                  s.jsx("th",{rowSpan:2,style:{width:"100px",textAlign:"right"},children:"기본단가"}),
                  s.jsx("th",{rowSpan:2,style:{width:"88px",textAlign:"right"},children:"자수공임"}),
                  s.jsx("th",{colSpan:6,style:{padding:"7px 8px",borderBottom:"1px solid #e2e8f0",backgroundColor:"#eff6ff",color:"#1e3a8a",textAlign:"center"},children:"사이즈별 수량 입력 (입력 시 토탈수량 자동합산)"}),
                  s.jsx("th",{rowSpan:2,style:{width:"84px",textAlign:"center",backgroundColor:"#f8fafc"},children:"토탈수량"}),
                  s.jsx("th",{rowSpan:2,style:{width:"110px",textAlign:"right",backgroundColor:"#f8fafc"},children:"토탈가격"}),
                  s.jsx("th",{rowSpan:2,style:{width:"42px",textAlign:"center"},children:"삭제"})
                ]}),
                s.jsxs("tr",{children:[
                  ["XS","S","M","L","XL","2XL"].map(sz=>s.jsx("th",{style:{padding:"5px 4px",width:"44px",fontSize:"11px",backgroundColor:"#f8fafc",color:"#334155",textAlign:"center"},children:sz},sz))
                ]})
              ]}),
              s.jsx("tbody",{children:O.map((v,z)=>{
                const sz=v.sizes||{XS:0,S:0,M:0,L:0,XL:0,"2XL":0};
                return s.jsxs("tr",{children:[
                  s.jsx("td",{style:{padding:"10px 8px"},children:
                    s.jsx("input",{type:"text",value:v.category||"",onChange:H=>updateItemField(z,"category",H.target.value),className:"w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-center bg-white"})
                  }),
                  s.jsxs("td",{style:{padding:"10px 10px",textAlign:"left"},className:"space-y-1.5",children:[
                    s.jsx("input",{type:"text",value:v.name,onChange:H=>updateItemField(z,"name",H.target.value),className:"w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-900 bg-white",placeholder:"제안 제품명"}),
                    s.jsx("input",{type:"text",value:v.spec,onChange:H=>updateItemField(z,"spec",H.target.value),className:"w-full px-2.5 py-1 border border-slate-200 rounded-lg text-[11px] text-slate-500 bg-slate-50",placeholder:"원단/자수 스펙"})
                  ]}),
                  s.jsx("td",{style:{padding:"10px 6px"},children:
                    s.jsx("input",{type:"text",value:v.color||"네이비",onChange:H=>updateItemField(z,"color",H.target.value),className:"w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs text-center font-semibold bg-white"})
                  }),
                  s.jsx("td",{style:{padding:"10px 6px"},children:
                    s.jsx("input",{type:"number",step:"500",value:v.unitPrice,onChange:H=>updateItemField(z,"unitPrice",parseInt(H.target.value)||0),className:"w-full px-2 py-1.5 border border-slate-200 rounded-lg text-right text-xs font-semibold bg-white"})
                  }),
                  s.jsx("td",{style:{padding:"10px 6px"},children:
                    s.jsx("input",{type:"number",step:"500",value:v.embroideryFee,onChange:H=>updateItemField(z,"embroideryFee",parseInt(H.target.value)||0),className:"w-full px-2 py-1.5 border border-slate-200 rounded-lg text-right text-xs font-semibold text-blue-700 bg-white"})
                  }),
                  ["XS","S","M","L","XL","2XL"].map(sizeKey=>
                    s.jsx("td",{style:{padding:"8px 4px",backgroundColor:"rgba(239,246,255,0.25)"},children:
                      s.jsx("input",{
                        type:"number",
                        min:"0",
                        value:sz[sizeKey]||0,
                        onChange:H=>updateItemSize(z,sizeKey,H.target.value),
                        className:"w-10 px-1 py-1.5 border border-slate-200 rounded-lg text-center text-xs font-semibold bg-white"
                      })
                    },sizeKey)
                  ),
                  s.jsx("td",{style:{padding:"10px 6px",backgroundColor:"#f8fafc"},children:
                    s.jsx("input",{type:"number",min:"1",value:v.quantity,onChange:H=>updateItemField(z,"quantity",parseInt(H.target.value)||0),className:"w-16 px-2 py-1.5 border border-blue-300 bg-white rounded-lg text-center text-xs font-extrabold text-blue-600"})
                  }),
                  s.jsxs("td",{style:{padding:"10px 12px",textAlign:"right",fontWeight:800,color:"#0f172a",backgroundColor:"#f8fafc"},children:[v.amount.toLocaleString(),"원"]}),
                  s.jsx("td",{style:{padding:"10px 6px",textAlign:"center"},children:
                    s.jsx("button",{type:"button",onClick:()=>removeProposalItem(z),disabled:O.length<=1,className:"text-slate-400 hover:text-rose-600 disabled:opacity-30 p-1 rounded cursor-pointer",children:s.jsx(v2,{className:"w-4 h-4"})})
                  })
                ]},v.id);
              })})
            ]})
          })
        ]}),

        /* 4. 제판비(55,000원 자동반영 + 면제버튼) · 자수펀칭 추가비용 · 할인율(%) 설정 & 최종 견적 금액 */
        s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-200",children:[
          /* Left Controls */
          s.jsxs("div",{className:"space-y-4",children:[
            /* 로고 제판비 55,000원 & 면제 버튼 */
            s.jsxs("div",{className:"bg-white p-3.5 rounded-xl border border-slate-200 space-y-2",children:[
              s.jsxs("div",{className:"flex items-center justify-between",children:[
                s.jsxs("div",{children:[
                  s.jsx("label",{className:"text-xs font-extrabold text-slate-800",children:"로고 제판비 (기본 55,000원)"}),
                  s.jsx("p",{className:"text-[11px] text-slate-500 mt-0.5",children:totalQty>=30?"✓ 30벌 이상 견적으로 로고 제판비 55,000원 100% 면제 대상입니다.":"30벌 미만 주문 시 기본 제판비 55,000원이 부과됩니다."})
                ]}),
                s.jsx("button",{
                  type:"button",
                  onClick:()=>setIsPlateFeeWaived(!isPlateFeeWaived),
                  className:`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer ${isPlateFeeWaived?"bg-emerald-600 text-white border-emerald-600 shadow-2xs":"bg-white text-slate-700 border-slate-300 hover:border-blue-500"}`,
                  children:isPlateFeeWaived?"✓ 제판비 100% 면제 적용중":"제판비 면제 적용하기"
                })
              ]}),
              !isPlateFeeWaived&&s.jsxs("div",{className:"flex items-center gap-2 pt-1",children:[
                s.jsx("span",{className:"text-xs text-slate-500",children:"제판비 청구액(원):"}),
                s.jsx("input",{type:"number",step:"5000",value:logoPlateFee,onChange:e=>setLogoPlateFee(parseInt(e.target.value)||0),className:"w-36 px-2.5 py-1 border border-slate-200 rounded-lg text-xs font-bold text-right"})
              ]})
            ]}),

            /* 자수펀칭 추가 비용 세팅 */
            s.jsxs("div",{className:"bg-white p-3.5 rounded-xl border border-slate-200 space-y-1.5",children:[
              s.jsxs("div",{className:"flex items-center justify-between",children:[
                s.jsx("label",{className:"text-xs font-extrabold text-slate-800",children:"자수펀칭 추가 비용 세팅 (원)"}),
                s.jsxs("div",{className:"flex gap-1.5",children:[
                  [0,2e4,3e4,5e4].map(val=>s.jsx("button",{
                    type:"button",
                    onClick:()=>setPunchingFee(val),
                    className:Number(punchingFee)===val?"b2b-punch-pill-active":"b2b-punch-pill",
                    children:val===0?"없음(0원)":`+${(val/1e4)}만`
                  },val))
                ]})
              ]}),
              s.jsx("input",{
                type:"number",
                step:"5000",
                value:punchingFee,
                onChange:e=>setPunchingFee(parseInt(e.target.value)||0),
                className:"w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-bold bg-slate-50 focus:bg-white"
              }),
              s.jsx("p",{className:"text-[11px] text-slate-400",children:"※ 특수 로고 디지타이징(펀칭) 난이도 및 추가 위치 자수에 따른 비용을 세팅합니다."})
            ]}),

            /* B2B 할인율(%) 설정 */
            s.jsxs("div",{className:"bg-white p-3.5 rounded-xl border border-slate-200 space-y-2",children:[
              s.jsxs("div",{className:"flex items-center justify-between",children:[
                s.jsx("label",{className:"text-xs font-extrabold text-slate-800",children:"B2B 대량 발주 할인율 (%) 설정"}),
                s.jsxs("div",{className:"flex gap-1.5",children:[
                  [0,5,10,15,20].map(rate=>s.jsx("button",{
                    type:"button",
                    onClick:()=>setDiscountRate(rate),
                    className:Number(discountRate)===rate?"b2b-rate-pill-active":"b2b-rate-pill",
                    children:Number(discountRate)===rate?`✓ ${rate}%`:`${rate}%`
                  },rate))
                ]})
              ]}),
              s.jsxs("div",{className:"flex items-center gap-2",children:[
                s.jsx("input",{
                  type:"number",
                  min:"0",
                  max:"100",
                  step:"1",
                  value:discountRate,
                  onChange:e=>setDiscountRate(Math.min(100,Math.max(0,parseFloat(e.target.value)||0))),
                  className:"w-28 px-3 py-1.5 border border-rose-200 rounded-lg text-xs font-extrabold text-rose-600 text-right bg-rose-50/30"
                }),
                s.jsx("span",{className:"font-bold text-slate-700",children:"% 할인 적용"}),
                s.jsxs("span",{className:"ml-auto text-xs font-extrabold text-rose-600",children:[
                  "할인액: -",discountAmount.toLocaleString(),"원"
                ]})
              ]})
            ]}),

            /* 입금계좌 정보 */
            s.jsxs("div",{className:"grid grid-cols-3 gap-2 pt-1",children:[
              s.jsxs("div",{children:[
                s.jsx("label",{className:"text-[11px] font-bold text-slate-500",children:"입금은행"}),
                s.jsx("input",{type:"text",value:bankName,onChange:e=>setBankName(e.target.value),className:"w-full mt-1 px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs bg-white font-semibold"})
              ]}),
              s.jsxs("div",{children:[
                s.jsx("label",{className:"text-[11px] font-bold text-slate-500",children:"계좌번호"}),
                s.jsx("input",{type:"text",value:accountNumber,onChange:e=>setAccountNumber(e.target.value),className:"w-full mt-1 px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs bg-white font-mono"})
              ]}),
              s.jsxs("div",{children:[
                s.jsx("label",{className:"text-[11px] font-bold text-slate-500",children:"예금주"}),
                s.jsx("input",{type:"text",value:accountHolder,onChange:e=>setAccountHolder(e.target.value),className:"w-full mt-1 px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs bg-white font-semibold"})
              ]})
            ]})
          ]}),

          /* Right Live Summary Card */
          s.jsxs("div",{className:"b2b-group-card-sub p-5 flex flex-col justify-between space-y-4",children:[
            s.jsxs("div",{className:"space-y-2.5 text-xs",children:[
              s.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 pb-2",children:[
                s.jsx("span",{className:"font-extrabold text-slate-800 text-sm",children:"견적 금액 산출 요약"}),
                s.jsxs("span",{className:"font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full",children:["총 ",totalQty,"벌"]})
              ]}),
              s.jsxs("div",{className:"flex justify-between text-slate-600",children:[
                s.jsx("span",{children:"품목 소계 (단가+자수공임)"}),
                s.jsxs("span",{className:"font-bold text-slate-900",children:[subtotal.toLocaleString(),"원"]})
              ]}),
              s.jsxs("div",{className:"flex justify-between items-center text-slate-600",children:[
                s.jsxs("span",{className:"flex items-center gap-1.5",children:[
                  "로고 제판비 (55,000원)",
                  totalQty>=30&&s.jsx("span",{className:"text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded",children:"30벌 이상 혜택"})
                ]}),
                isPlateFeeWaived?s.jsxs("span",{className:"font-extrabold text-emerald-600",children:[
                  s.jsx("span",{className:"line-through text-slate-400 mr-1 font-normal",children:"55,000원"}),
                  "0원 (100% 면제)"
                ]}):s.jsxs("span",{className:"font-bold text-slate-900",children:["+",logoPlateFee.toLocaleString(),"원"]})
              ]}),
              s.jsxs("div",{className:"flex justify-between text-slate-600",children:[
                s.jsx("span",{children:"자수펀칭 추가 비용"}),
                s.jsxs("span",{className:"font-bold text-slate-900",children:["+",(Number(punchingFee)||0).toLocaleString(),"원"]})
              ]}),
              s.jsxs("div",{className:"flex justify-between text-rose-600 font-bold",children:[
                s.jsxs("span",{children:["B2B 특별 할인율 적용 (",discountRate,"%)"]}),
                s.jsxs("span",{children:["-",discountAmount.toLocaleString(),"원"]})
              ]}),
              s.jsxs("div",{className:"flex justify-between text-slate-700 pt-2 border-t border-slate-200 font-semibold",children:[
                s.jsx("span",{children:"공급가액 합계"}),
                s.jsxs("span",{children:[supplyValue.toLocaleString(),"원"]})
              ]}),
              s.jsxs("div",{className:"flex justify-between text-slate-600",children:[
                s.jsx("span",{children:"부가가치세 (VAT 10%)"}),
                s.jsxs("span",{className:"font-semibold",children:["+",vatAmount.toLocaleString(),"원"]})
              ]})
            ]}),
            s.jsxs("div",{className:"pt-4 border-t-2 border-slate-900 space-y-2",children:[
              s.jsxs("div",{className:"flex justify-between items-baseline",children:[
                s.jsx("span",{className:"text-sm font-black text-slate-900",children:"최종 견적 금액 (VAT포함)"}),
                s.jsxs("span",{className:"text-2xl font-black text-blue-600",children:[totalAmount.toLocaleString(),"원"]})
              ]}),
              s.jsx("div",{className:"text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200",children:
                "✓ 고객에게 발송 시 [발주 견적서] 공식 양식으로 전달되며, 고객이 6개 필수 약관 동의 후 [승인]하면 대시보드에 승인 일시가 영구 기록됩니다."
              })
            ]})
          ]})
        ]}),

        /* 특약사항 메모 */
        s.jsxs("div",{children:[
          s.jsx("label",{className:"text-xs font-extrabold text-slate-700 block mb-1.5",children:"추가 특약사항 및 전달 메모"}),
          s.jsx("textarea",{rows:2,value:notesText,onChange:e=>setNotesText(e.target.value),className:"w-full p-3 border border-slate-200 rounded-xl text-xs text-slate-700 bg-slate-50 focus:bg-white"})
        ]})
      ]}),

      /* Modal Footer */
      s.jsxs("div",{className:"sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between gap-3 rounded-b-2xl z-10",children:[
        s.jsxs("div",{className:"text-[11px] text-slate-500 flex items-center gap-1.5",children:[
          s.jsx(qm,{className:"w-4 h-4 text-blue-600 shrink-0"}),
          "발주 견적서를 발송하면 고객 포털에서 PDF 다운로드 및 [고객 승인 동의 절차]를 진행할 수 있습니다."
        ]}),
        s.jsxs("div",{className:"flex gap-2.5",children:[
          s.jsx("button",{type:"button",onClick:M,className:"px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 text-xs transition-colors cursor-pointer",children:"취소"}),
          s.jsxs("button",{type:"button",onClick:()=>handleSaveAndSend(!0),className:"px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-blue-600/20 transition-all cursor-pointer",children:[
            s.jsx(vx,{className:"w-3.5 h-3.5"}),
            "고객에게 견적서 보내기"
          ]})
        ]})
      ]})
    ]})
  });
},S2=({consulting:r,isOpen:j,onClose:M,isAdmin:o,onCustomerApprove:w,onSaveQuotation:O,onAdminStatusChange:F})=>{var Z,ye;const[W,k]=V.useState(!1),[te,E]=V.useState(!1),[N,A]=V.useState(!1);if(!j||!r)return null;const ee=Rr(r.status),Q=!!r.quotation,$=r.status==="상담 완료";return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"fixed inset-0 z-40 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs",children:s.jsxs("div",{className:"b2b-group-card shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto flex flex-col",children:[s.jsxs("div",{className:"sticky top-0 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:`text-xs font-bold px-3.5 py-1 rounded-full ${ru(r.status,!o)}`,children:dn(r.status,!o)}),s.jsxs("div",{children:[s.jsxs("h2",{className:"text-base font-bold text-slate-900 flex items-center gap-2",children:[s.jsx("span",{children:r.companyName}),s.jsxs("span",{className:"text-slate-400 font-normal text-xs",children:["(",r.id,")"]})]}),s.jsxs("p",{className:"text-xs text-slate-500",children:["신청일자: ",formatDateTime(r.createdAt)," · 처리일시: ",formatDateTime(r.updatedAt)," · 담당: ",r.consultantName||"지정 대기"]})]})]}),s.jsx("button",{onClick:M,className:"w-8 h-8 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors",children:s.jsx(Xs,{className:"w-5 h-5"})})]}),s.jsxs("div",{className:"bg-slate-50/80 px-6 py-4 border-b border-slate-200",children:[s.jsxs("div",{className:"text-xs font-bold text-slate-500 mb-3 flex items-center justify-between",children:[s.jsx("span",{children:"B2B 4단계 진행 프로세스 현황"}),$&&s.jsx("span",{className:"text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200",children:"✓ 최종 출고 종료"})]}),s.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:Ls.map(re=>{const{active:Re,done:Te}=Hr(ee,re.step);return s.jsxs("div",{className:`p-2.5 rounded-xl border text-xs transition-all ${Re?"bg-blue-50/70 border-blue-300 text-slate-900 font-bold shadow-2xs":Te?"bg-emerald-50/60 border-emerald-200 text-emerald-900 font-semibold":"bg-white border-slate-200/80 text-slate-400"}`,children:[s.jsxs("div",{className:"flex items-center gap-1.5 mb-1",children:[s.jsx("span",{className:`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${Re?"bg-blue-600 text-white":Te?"bg-emerald-600 text-white":"bg-slate-200 text-slate-500"}`,children:Te?"✓":re.step}),s.jsx("span",{className:"truncate",children:processStageTitle(re,r,o)})]}),s.jsx("div",{className:"text-[10px] text-slate-600 font-mono mb-1",children:processTimeLabel(r,re.step)})]},re.id)})})]}),s.jsxs("div",{className:"p-6 space-y-6 text-sm flex-1",children:[o&&renderWorkflowAction(r,F,()=>A(!0)),r.trackingNumber&&s.jsxs("div",{className:"bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center",children:s.jsx(Tx,{className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsx("span",{className:"text-xs font-semibold text-emerald-800",children:"택배 배송 및 출고 정보"}),s.jsxs("div",{className:"text-sm font-bold text-emerald-950",children:[r.courierName||"CJ대한통운"," ",r.trackingNumber]})]})]}),s.jsx("span",{className:"text-xs font-bold text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-emerald-200",children:"배송중 / 출고완료"})]}),s.jsxs("div",{className:"space-y-4",children:[renderApprovalAuditBanner(r),s.jsxs("div",{className:"p-4 b2b-sub-group-box flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",children:[s.jsxs("div",{className:"space-y-1",children:[s.jsxs("h3",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[s.jsx(Ib,{className:"w-3.5 h-3.5"})," 신청 고객 정보"]}),s.jsxs("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-1 pt-0.5",children:[s.jsxs("span",{children:["회사명: ",s.jsx("strong",{className:"text-slate-900",children:r.companyName})]}),s.jsxs("span",{children:["담당자: ",s.jsx("strong",{className:"text-slate-800",children:r.applicantName})]}),s.jsxs("span",{children:["연락처: ",s.jsx("span",{className:"text-slate-800",children:r.phone})]}),s.jsxs("span",{children:["이메일: ",s.jsx("span",{className:"text-slate-800",children:r.email})]}),r.businessNumber&&s.jsxs("span",{children:["사업자번호: ",s.jsx("span",{className:"text-slate-600",children:r.businessNumber})]})]})]}),s.jsxs("div",{className:"sm:text-right shrink-0 space-y-0.5 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100",children:[s.jsxs("div",{children:["희망 납기일: ",s.jsx("strong",{className:"text-slate-900",children:r.expectedDeliveryDate})]}),r.budgetRange&&s.jsxs("div",{className:"text-slate-500",children:["희망 예산: ",r.budgetRange]})]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsxs("h3",{className:"text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5",children:[s.jsx(Yr,{className:"w-3.5 h-3.5 text-blue-600"})," 신청 품목 및 카테고리별 수량 내역"]}),renderRequestedItemsTable(r)]})]}),s.jsxs("div",{className:"p-4 b2b-sub-group-box space-y-3",children:[s.jsxs("h3",{className:"text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5",children:[s.jsx(Gs,{className:"w-3.5 h-3.5 text-blue-600"})," 컴퓨터 자수 맞춤 스펙"]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-slate-500",children:"자수 기법:"}),s.jsx("p",{className:"font-semibold text-slate-900 mt-0.5",children:r.embroiderySpec.embroideryType})]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-slate-500",children:"부착 위치:"}),s.jsx("p",{className:"font-semibold text-slate-900 mt-0.5",children:r.embroiderySpec.placement})]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-slate-500",children:"자수 크기:"}),s.jsx("p",{className:"font-semibold text-slate-900 mt-0.5",children:r.embroiderySpec.sizeEstimate})]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-slate-500",children:"자수 내용/로고:"}),s.jsx("p",{className:"font-semibold text-slate-900 mt-0.5",children:r.embroiderySpec.textOrContent})]})]}),r.uploadedFileName&&s.jsxs("div",{className:"pt-2 border-t border-slate-200 flex items-center justify-between text-xs",children:[s.jsx("span",{className:"text-slate-600",children:"첨부 디자인 파일:"}),s.jsxs("span",{className:"font-semibold text-blue-700 bg-white px-2.5 py-0.5 rounded border border-blue-200",children:["📎 ",r.uploadedFileName]})]})]}),s.jsxs("div",{className:"p-4 b2b-sub-group-box space-y-1.5 text-xs",children:[s.jsx("span",{className:"font-bold text-slate-600",children:"고객 상세 요청사항:"}),s.jsx("p",{className:"text-slate-700 whitespace-pre-line leading-relaxed",children:r.detailedRequest})]}),Q&&s.jsxs("div",{className:"p-4 b2b-sub-group-box flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded",children:"전자 견적서 발행됨"}),s.jsx("span",{className:"text-xs font-mono text-slate-500",children:(Z=r.quotation)==null?void 0:Z.quoteNumber})]}),s.jsxs("div",{className:"text-base font-bold text-slate-900 mt-1",children:["총 견적액: ₩",(ye=r.quotation)==null?void 0:ye.totalAmount.toLocaleString(),"원",s.jsx("span",{className:"text-xs font-normal text-slate-500 ml-1.5",children:"(VAT 포함)"})]})]}),s.jsxs("button",{type:"button",onClick:()=>E(!0),className:"px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors",children:[s.jsx(Ur,{className:"w-4 h-4"})," 견적서 전문 열람"]})]})]}),s.jsxs("div",{className:"sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 rounded-b-2xl",children:[s.jsxs("button",{type:"button",onClick:()=>k(!0),className:"px-3.5 py-2 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 text-xs flex items-center gap-1.5 transition-colors",children:[s.jsx(Qs,{className:"w-3.5 h-3.5 text-slate-500"})," 신청서 원본 전산 양식"]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{type:"button",onClick:M,className:"px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 text-xs transition-colors",children:"닫기"}),o&&Br(r)&&s.jsxs("button",{type:"button",onClick:()=>A(!0),className:"px-4 py-2 rounded-full b2b-badge-urgent-blue font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer",children:[s.jsx(Im,{className:"w-3.5 h-3.5"})," 견적서 작성하기"]}),o&&Ax(r)&&s.jsxs("button",{type:"button",onClick:()=>A(!0),className:"px-4 py-2 rounded-xl border border-blue-300 bg-blue-50 text-blue-700 font-semibold hover:bg-blue-50 text-xs flex items-center gap-1.5 transition-colors",children:[s.jsx(ix,{className:"w-3.5 h-3.5"})," 견적서 수정"]}),!o&&r.status==="견적 발송"&&Q&&s.jsxs("button",{type:"button",onClick:()=>E(!0),className:"px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]",children:[s.jsx(Lm,{className:"w-4 h-4"})," 견적 확인 및 승인하기"]})]})]})]})}),s.jsx(Ox,{consulting:r,isOpen:W,onClose:()=>k(!1),isAdmin:o}),s.jsx(Cx,{consulting:r,isOpen:te,onClose:()=>E(!1),isAdmin:o,onCustomerApprove:w,onOpenEditor:()=>A(!0)}),o&&O&&Rr(r.status)<=2&&s.jsx(Dx,{consulting:r,isOpen:N,onClose:()=>A(!1),onSaveQuotation:O})]})},T2=({consultingRequests:r,isAdmin:j,onUpdateConsultingStatus:M,onSaveQuotation:o,onCustomerApprove:w})=>{var Y;const[O,F]=V.useState(""),[W,k]=V.useState("전체"),[te,E]=V.useState("split"),[N,A]=V.useState(((Y=r[0])==null?void 0:Y.id)||""),[ee,Q]=V.useState(null),[$,Z]=V.useState(null),[ye,re]=V.useState(null),[Re,Te]=V.useState(null),[qe,Oe]=V.useState(!1),[K,le]=V.useState(null),R=V.useMemo(()=>r.find(v=>v.id===N)||r[0],[r,N]),[He,Qe]=V.useState((R==null?void 0:R.status)||"접수완료");zm.useEffect(()=>{R&&(Qe(R.status),le(null))},[R==null?void 0:R.id,R==null?void 0:R.status]);const Ge=V.useMemo(()=>r.filter(v=>{if(!O.trim())return!0;const z=O.toLowerCase().trim();return v.companyName.toLowerCase().includes(z)||v.applicantName.toLowerCase().includes(z)||v.phone.replace(/[^0-9]/g,"").includes(z.replace(/[^0-9]/g,""))||v.id.toLowerCase().includes(z)}),[r,O]),Fe=V.useMemo(()=>r.filter(v=>{if(W!=="전체"){if(W==="1단계_접수완료"){if(!["접수완료","컨설턴트 배정","시안 제작중"].includes(v.status))return!1}else if(W==="2단계_견적발송"){if(v.status!=="견적 발송")return!1}else if(W==="3단계_고객승인"){if(!["견적 승인완료","입금확인요청"].includes(v.status))return!1}else if(W==="4단계_제작출고"){if(!["결제완료/작업진행","상담 완료"].includes(v.status))return!1}else if(W==="취소보류"){if(v.status!=="취소/보류")return!1}else if(v.status!==W)return!1}if(O.trim()){const z=O.toLowerCase().trim();return v.companyName.toLowerCase().includes(z)||v.applicantName.toLowerCase().includes(z)||v.id.toLowerCase().includes(z)||v.phone.includes(z)}return!0}),[r,W,O]),Ve=V.useMemo(()=>{const v=r.length,z=r.filter(Ce=>["접수완료","컨설턴트 배정","시안 제작중"].includes(Ce.status)&&!Ce.quotation).length,H=r.filter(Ce=>Ce.status==="견적 발송").length,ge=r.filter(Ce=>["견적 승인완료","입금확인요청"].includes(Ce.status)).length,_e=r.filter(Ce=>Ce.status==="상담 완료").length;return{total:v,step1WaitingQuote:z,step2CustomerApprovalWait:H,step3PaymentWait:ge,step4Shipped:_e}},[r]),Ee=v=>{const z=`${window.location.origin}?track=${v.id}&phone=${encodeURIComponent(v.phone)}`;navigator.clipboard.writeText(z),Oe(!0),setTimeout(()=>Oe(!1),2e3)},C=()=>{R&&(M(R.id,He),le(`상태가 [${He}]로 성공적으로 변경되었습니다.`),setTimeout(()=>le(null),3e3))};return s.jsxs("div",{className:"py-2 space-y-6",children:[s.jsxs("div",{className:"b2b-group-card p-5 sm:p-6 space-y-4",children:[s.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`text-xs font-bold px-2.5 py-0.5 rounded-full ${j?"bg-blue-50 text-blue-700 border border-blue-300":"bg-blue-100 text-blue-900 border border-blue-300"}`,children:j?"관리자 통합 데스크":"고객 주문/견적 조회"}),s.jsx("h2",{className:"text-xl font-extrabold text-slate-900 tracking-tight",children:j?"B2B 디자인컨설팅 신청 및 견적 전산 관리":"내 신청서 및 전자 견적서 진행 현황"})]}),s.jsx("p",{className:"text-xs text-slate-500 mt-1",children:j?"신청서 접수 확인, 견적서 발행, 입금확인 및 컴퓨터 자수 제작/출고 파이프라인 관리":"신청하신 맞춤 자수 컨설팅의 진행 상황을 실시간 확인하고 견적서를 승인하실 수 있습니다."})]}),j&&s.jsxs("div",{className:"flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start sm:self-auto",children:[s.jsxs("button",{type:"button",onClick:()=>E("split"),className:`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${te==="split"?"bg-white text-slate-900 shadow-2xs":"text-slate-500 hover:text-slate-900"}`,children:[s.jsx(a2,{className:"w-3.5 h-3.5"})," 스플릿 데스크"]}),s.jsxs("button",{type:"button",onClick:()=>E("table"),className:`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${te==="table"?"bg-white text-slate-900 shadow-2xs":"text-slate-500 hover:text-slate-900"}`,children:[s.jsx(c2,{className:"w-3.5 h-3.5"})," 테이블 뷰"]})]})]}),j&&s.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-100",children:[s.jsxs("div",{onClick:()=>k("전체"),className:"p-3 b2b-sub-group-box cursor-pointer transition-colors",children:[s.jsx("span",{className:"text-[11px] font-semibold text-slate-500",children:"전체 신청 접수"}),s.jsxs("div",{className:"text-xl font-extrabold text-slate-900 mt-0.5",children:[Ve.total,"건"]})]}),s.jsxs("div",{onClick:()=>k("1단계_접수완료"),className:"p-3 b2b-sub-group-box cursor-pointer transition-colors",children:[s.jsx("span",{className:"text-[11px] font-bold px-2.5 py-0.5 rounded-full b2b-badge-urgent-blue inline-block",children:"1단계 견적작성 필요"}),s.jsxs("div",{className:"text-xl font-extrabold text-blue-700 mt-1",children:[Ve.step1WaitingQuote,"건"]})]}),s.jsxs("div",{onClick:()=>k("2단계_견적발송"),className:"p-3 b2b-sub-group-box cursor-pointer transition-colors",children:[s.jsx("span",{className:"text-[11px] font-semibold text-blue-600",children:"2단계 고객승인 대기"}),s.jsxs("div",{className:"text-xl font-extrabold text-slate-900 mt-0.5",children:[Ve.step2CustomerApprovalWait,"건"]})]}),s.jsxs("div",{onClick:()=>k("4단계_제작출고"),className:"p-3 b2b-sub-group-box cursor-pointer transition-colors",children:[s.jsx("span",{className:"text-[11px] font-semibold text-emerald-800",children:"4단계 출고완료 건"}),s.jsxs("div",{className:"text-xl font-extrabold text-emerald-950 mt-0.5",children:[Ve.step4Shipped,"건"]})]})]}),s.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3 pt-2",children:[s.jsxs("div",{className:"relative flex-1 w-full",children:[s.jsx(m2,{className:"w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),s.jsx("input",{type:"text",value:O,onChange:v=>F(v.target.value),placeholder:j?"신청번호, 회사명, 담당자명, 전화번호로 빠른 검색...":"신청자 성함, 기업명, 또는 연락처 뒷자리 검색...",className:"w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:ring-1 focus:ring-blue-500 font-medium"})]}),j&&s.jsxs("div",{className:"w-full sm:w-auto flex items-center gap-2",children:[s.jsxs("span",{className:"text-xs font-semibold text-slate-500 shrink-0 flex items-center gap-1",children:[s.jsx(s2,{className:"w-3.5 h-3.5"})," 상태 필터:"]}),s.jsxs("select",{value:W,onChange:v=>k(v.target.value),className:"w-full sm:w-48 px-3 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:ring-1 focus:ring-blue-500 font-medium",children:[s.jsxs("option",{value:"전체",children:["전체 보기 (",r.length,"건)"]}),s.jsx("option",{value:"1단계_접수완료",children:"1단계. 신규 접수 / 견적작성 필요"}),s.jsx("option",{value:"2단계_견적발송",children:"2단계. 견적 발송 (고객승인 대기)"}),s.jsx("option",{value:"3단계_고객승인",children:"3단계. 고객 승인완료 (입금 대기)"}),s.jsx("option",{value:"4단계_제작출고",children:"4단계. 제작 진행 및 출고 완료"}),s.jsx("option",{value:"취소보류",children:"상담 취소 / 보류 건"})]})]})]})]}),!j&&s.jsx("div",{className:"space-y-4",children:Ge.length===0?s.jsxs("div",{className:"p-12 text-center b2b-group-card text-slate-400 space-y-2",children:[s.jsx("p",{className:"font-semibold text-slate-600",children:"조회된 신청서가 없습니다."}),s.jsx("p",{className:"text-xs",children:"신청하신 회사명 또는 연락처를 다시 확인해 주세요."})]}):Ge.map(v=>{var ge;const z=Rr(v.status),H=!!v.quotation;return v.status,s.jsxs("div",{className:"b2b-group-card p-5 sm:p-6 transition-all space-y-5",children:[s.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100",children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx("span",{className:`text-xs font-bold px-3.5 py-1 rounded-full ${ru(v.status,!0)}`,children:dn(v.status,!0)}),s.jsx("h3",{className:"font-bold text-slate-900 text-base",children:v.companyName}),s.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["(",v.id,")"]})]}),s.jsxs("div",{className:"text-xs text-slate-500 flex items-center gap-3",children:[s.jsxs("span",{children:["접수일: ",formatDateTime(v.createdAt)]})]})]}),s.jsx("div",{className:"b2b-sub-group-box p-3.5",children:s.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:Ls.map(_e=>{const{active:Ce,done:m}=Hr(z,_e.step);return s.jsx("div",{className:`p-2 rounded-lg text-xs transition-colors ${Ce?"bg-blue-50 border border-blue-300 font-bold text-slate-900":m?"bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium":"text-slate-400"}`,children:s.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[s.jsx("span",{className:`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${m?"bg-emerald-600 text-white":Ce?"bg-blue-600 text-white":"bg-slate-200 text-slate-500"}`,children:m?"✓":_e.step}),s.jsx("span",{className:"truncate",children:processStageTitle(_e,v,false)}),s.jsx("span",{className:"block text-[10px] font-mono text-slate-600",style:{flexBasis:"100%"},children:processTimeLabel(v,_e.step)})]})},_e.id)})})}),s.jsxs("div",{className:"space-y-3 text-xs",children:[renderApprovalAuditBanner(v),renderRequestedItemsTable(v),s.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 b2b-sub-group-box px-4 py-3",children:[s.jsxs("span",{className:"text-slate-600",children:["로고 및 자수 옵션: ",s.jsx("strong",{className:"text-slate-900",children:v.embroiderySpec.embroideryType})]}),s.jsxs("span",{className:"text-slate-600",children:["희망 납기일: ",s.jsx("strong",{className:"text-slate-900",children:v.expectedDeliveryDate})]})]})]}),s.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100",children:[s.jsx("div",{className:"text-xs text-slate-500",children:v.trackingNumber?s.jsxs("span",{className:"text-emerald-700 font-semibold flex items-center gap-1.5",children:[s.jsx(Tx,{className:"w-4 h-4"})," 배송 운송장: ",v.courierName," ",v.trackingNumber]}):H?s.jsxs("span",{className:"text-blue-700 font-semibold",children:["발행된 전자 견적 총액: ₩",(ge=v.quotation)==null?void 0:ge.totalAmount.toLocaleString(),"원 (VAT 포함)"]}):s.jsx("span",{children:"전담 디자이너가 견적서 및 자수 시뮬레이션을 작성 중입니다."})}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{type:"button",onClick:()=>Q(v),className:"px-3.5 py-1.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-100 text-xs transition-colors",children:"상세 내역 보기"}),H&&s.jsxs("button",{type:"button",onClick:()=>Z(v),className:"px-3.5 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-semibold hover:bg-blue-50 text-xs flex items-center gap-1.5 transition-colors",children:[s.jsx(Ur,{className:"w-3.5 h-3.5 text-blue-600"})," 전자 견적서 열람"]}),v.status==="견적 발송"&&H&&s.jsxs("button",{type:"button",onClick:()=>Z(v),className:"px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]",children:[s.jsx(wr,{className:"w-4 h-4"})," 견적 확인 및 승인하기"]})]})]})]},v.id)})}),j&&te==="split"&&s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",children:[s.jsx("div",{className:"lg:col-span-5 space-y-2.5 max-h-[750px] overflow-y-auto pr-1",children:Fe.length===0?s.jsx("div",{className:"p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-400 text-xs",children:"필터 조건에 맞는 신청서가 없습니다."}):Fe.map(v=>{var ge;const z=(R==null?void 0:R.id)===v.id,H=!!v.quotation;return v.status,s.jsxs("div",{onClick:()=>A(v.id),className:`p-4 transition-all cursor-pointer text-xs space-y-2.5 ${z?"b2b-group-card-active":"b2b-group-card-sub"}`,children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:`text-[11px] font-bold px-3 py-1 rounded-full ${ru(v.status,!1)}`,children:dn(v.status,!1)}),s.jsx("span",{className:"text-slate-400 font-mono text-[11px]",children:v.id})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"font-bold text-slate-900 text-sm flex items-center justify-between",children:[s.jsx("span",{children:v.companyName}),s.jsxs("span",{className:"text-blue-700 font-semibold text-xs",children:[v.quantity,"벌"]})]}),s.jsxs("div",{className:"text-slate-500 text-[11px] mt-0.5 flex items-center justify-between",children:[s.jsx("span",{children:v.category}),s.jsxs("span",{children:["납기: ",v.expectedDeliveryDate]})]})]}),s.jsxs("div",{className:"pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]",children:[s.jsxs("span",{className:"text-slate-400",children:["신청자: ",v.applicantName]}),H?s.jsxs("span",{className:"text-blue-600 font-semibold",children:["견적: ₩",(ge=v.quotation)==null?void 0:ge.totalAmount.toLocaleString()]}):s.jsx("span",{className:"text-blue-600 font-bold",children:"견적서 미발행"})]})]},v.id)})}),s.jsx("div",{className:"lg:col-span-7 b2b-group-card p-6 space-y-6",children:R?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100",children:[s.jsxs("div",{className:"space-y-1",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`text-xs font-bold px-3.5 py-1 rounded-full ${ru(R.status,!1)}`,children:dn(R.status,!1)}),s.jsx("span",{className:"font-mono text-xs text-slate-400",children:R.id})]}),s.jsx("h3",{className:"text-lg font-extrabold text-slate-900",children:R.companyName})]}),s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsxs("button",{type:"button",onClick:()=>Te(R),className:"px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-medium text-xs flex items-center gap-1.5 transition-colors",children:[s.jsx(Qs,{className:"w-3.5 h-3.5 text-slate-500"})," 신청서 원본"]}),Br(R)&&s.jsxs("button",{type:"button",onClick:()=>re(R),className:"px-4 py-1.5 rounded-full b2b-badge-urgent-blue font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer",children:[s.jsx(Im,{className:"w-3.5 h-3.5"})," 견적서 작성하기"]}),R.quotation&&s.jsxs("button",{type:"button",onClick:()=>Z(R),className:"px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-semibold hover:bg-blue-50 text-xs flex items-center gap-1.5 transition-colors",children:[s.jsx(Ur,{className:"w-3.5 h-3.5 text-blue-600"})," 견적서 열람"]}),Ax(R)&&s.jsxs("button",{type:"button",onClick:()=>re(R),className:"px-3 py-1.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 text-xs flex items-center gap-1 transition-colors",children:[s.jsx(ix,{className:"w-3.5 h-3.5 text-slate-500"})," 견적 수정"]})]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"text-xs font-bold text-slate-500",children:"진행 프로세스 단계"}),s.jsx("div",{className:"grid grid-cols-4 gap-2",children:Ls.map(v=>{const{active:z,done:H}=Hr(Rr(R.status),v.step);return s.jsx("div",{className:`p-2 rounded-xl border text-xs ${z?"bg-blue-50/70 border-blue-300 text-slate-900 font-bold":H?"bg-emerald-50 border-emerald-200 text-emerald-800 font-medium":"bg-slate-50 border-slate-200 text-slate-400"}`,children:s.jsxs("div",{className:"flex flex-wrap items-center gap-1",children:[s.jsx("span",{className:`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${H?"bg-emerald-600 text-white":z?"bg-blue-600 text-white":"bg-slate-200 text-slate-500"}`,children:H?"✓":v.step}),s.jsx("span",{className:"truncate",children:processStageTitle(v,R,true)}),s.jsx("span",{className:"block text-[10px] font-mono text-slate-600",style:{flexBasis:"100%"},children:processTimeLabel(R,v.step)})]})},v.id)})})]}),s.jsxs("div",{className:"space-y-4 text-xs",children:[renderApprovalAuditBanner(R),s.jsxs("div",{className:"p-4 b2b-sub-group-box flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[s.jsxs("div",{className:"space-y-0.5",children:[s.jsx("span",{className:"text-slate-400 font-medium",children:"고객 및 연락처"}),s.jsxs("p",{className:"font-bold text-slate-900 text-sm",children:[R.applicantName," (",R.companyName,")"]}),s.jsxs("p",{className:"text-slate-600",children:[R.phone," · ",R.email,R.businessNumber?` · 사업자: ${R.businessNumber}`:""]})]}),s.jsxs("div",{className:"sm:text-right space-y-0.5",children:[s.jsxs("div",{className:"text-slate-600",children:["희망 납기일: ",s.jsx("strong",{className:"text-slate-900",children:R.expectedDeliveryDate})]}),R.budgetRange&&s.jsxs("div",{className:"text-slate-500 text-[11px]",children:["예산: ",R.budgetRange]})]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:"font-bold text-slate-700 flex items-center gap-1.5",children:[s.jsx(Yr,{className:"w-3.5 h-3.5 text-blue-600"})," 신청 카테고리별 품목 및 수량 내역"]}),renderRequestedItemsTable(R)]})]}),s.jsxs("div",{className:"p-4 b2b-sub-group-box text-xs space-y-2",children:[s.jsxs("div",{className:"font-bold text-slate-900 flex items-center justify-between",children:[s.jsx("span",{children:"컴퓨터 자수 세부 사양"}),s.jsxs("span",{className:"text-slate-500 font-normal",children:["위치: ",R.embroiderySpec.placement]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-2 text-slate-700",children:[s.jsxs("div",{children:["기법: ",s.jsx("strong",{children:R.embroiderySpec.embroideryType})]}),s.jsxs("div",{children:["크기: ",s.jsx("strong",{children:R.embroiderySpec.sizeEstimate})]}),s.jsxs("div",{className:"col-span-2",children:["문구/내용: ",s.jsx("strong",{children:R.embroiderySpec.textOrContent})]})]})]}),renderWorkflowAction(R,M,()=>re(R))]}):s.jsx("div",{className:"p-12 text-center text-slate-400 text-xs",children:"목록에서 신청서를 선택해 주세요."})})]}),j&&te==="table"&&s.jsx("div",{className:"b2b-group-card overflow-hidden",children:s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-xs text-left",children:[s.jsx("thead",{className:"bg-slate-50 text-slate-600 border-b border-slate-200 font-semibold",children:s.jsxs("tr",{children:[s.jsx("th",{className:"py-3 px-4",children:"신청번호"}),s.jsx("th",{className:"py-3 px-4",children:"고객사 / 담당자"}),s.jsx("th",{className:"py-3 px-3",children:"품목 / 수량"}),s.jsx("th",{className:"py-3 px-3",children:"진행 상태"}),s.jsx("th",{className:"py-3 px-3",children:"견적 금액"}),s.jsx("th",{className:"py-3 px-4 text-right",children:"관리 액션"})]})}),s.jsx("tbody",{className:"divide-y divide-slate-100",children:Fe.map(v=>{var H;const z=!!v.quotation;return s.jsxs("tr",{className:"hover:bg-slate-50/70 transition-colors",children:[s.jsx("td",{className:"py-3 px-4 font-mono font-medium text-slate-500",children:v.id}),s.jsxs("td",{className:"py-3 px-4",children:[s.jsx("div",{className:"font-bold text-slate-900",children:v.companyName}),s.jsxs("div",{className:"text-slate-400 text-[11px]",children:[v.applicantName," (",v.phone,")"]})]}),s.jsxs("td",{className:"py-3 px-3",children:[s.jsx("div",{className:"font-medium text-slate-800",children:v.category}),s.jsxs("div",{className:"text-blue-600 font-semibold",children:[v.quantity,"벌"]})]}),s.jsx("td",{className:"py-3 px-3",children:s.jsx("span",{className:`inline-flex whitespace-nowrap text-[11px] font-bold px-3 py-1 rounded-full ${ru(v.status,!1)}`,style:{whiteSpace:"nowrap",display:"inline-flex",flexShrink:0},children:dn(v.status,!1).replace(/\s*\([^)]*\)/g,"")})}),s.jsx("td",{className:"py-3 px-3",children:z?s.jsxs("span",{className:"font-bold text-slate-800",children:["₩",(H=v.quotation)==null?void 0:H.totalAmount.toLocaleString(),"원"]}):s.jsx("span",{className:"text-slate-400",children:"미발행"})}),s.jsxs("td",{className:"py-3 px-4 text-right space-x-1.5",children:[s.jsx("button",{type:"button",onClick:()=>Q(v),className:"px-2.5 py-1 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 text-[11px] font-medium",children:"상세"}),Br(v)&&s.jsx("button",{type:"button",onClick:()=>re(v),className:"px-3 py-1 rounded-full b2b-badge-urgent-blue font-bold text-[11px]",children:"견적 작성"}),z&&s.jsx("button",{type:"button",onClick:()=>Z(v),className:"px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-50 font-medium text-[11px]",children:"견적 열람"})]})]},v.id)})})]})})}),ee&&s.jsx(S2,{consulting:r.find(v=>v.id===ee.id)||ee,isOpen:!!ee,onClose:()=>Q(null),isAdmin:j,onCustomerApprove:w,onSaveQuotation:o,onAdminStatusChange:M}),$&&s.jsx(Cx,{consulting:$,isOpen:!!$,onClose:()=>Z(null),isAdmin:j,onCustomerApprove:w,onOpenEditor:()=>{const v=$;Z(null),re(v)}}),j&&ye&&Rr(ye.status)<=2&&s.jsx(Dx,{consulting:ye,isOpen:!!ye,onClose:()=>re(null),onSaveQuotation:o}),Re&&s.jsx(Ox,{consulting:Re,isOpen:!!Re,onClose:()=>Te(null),isAdmin:j})]})};function processStageTitle(step,request,admin){
 if(step.step===4) return request.status==="상담 완료"?"출고완료":"제작중";
 return (admin?step.adminLabel:step.customerLabel).replace(/^\d+\.\s*/,"");
}
function renderWorkflowAction(request,onWorkOrder,onCreateQuotation){
 const stage=Rr(request.status);
 if(stage===1) return onCreateQuotation?s.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:8,width:"100%"},children:s.jsxs("button",{type:"button",onClick:onCreateQuotation,className:"b2b-next-cta-btn",style:{width:"100%",borderRadius:9999,display:"flex",alignItems:"center",justifyContent:"center",gap:12},children:["견적서 작성하기",s.jsx("svg",{className:"b2b-next-arrow",fill:"none",stroke:"currentColor",strokeWidth:2.5,viewBox:"0 0 24 24","aria-hidden":true,children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 12h14m-6-6 6 6-6 6"})})]})}):null;
 if(request.status==="결제완료/작업진행") return s.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:8},children:s.jsx("button",{type:"button",onClick:()=>onWorkOrder(request.id,"상담 완료"),className:"b2b-next-cta-btn",style:{width:"100%",borderRadius:9999},children:"출고완료"})});
 const messages={1:"견적서를 작성한 뒤 고객에게 발송해 주세요.",2:"고객의 견적 승인을 기다리고 있습니다.",3:"고객 승인이 완료되었습니다. 입금 내역을 확인한 뒤 작업을 지시해 주세요.",4:request.status==="상담 완료"?"출고가 완료되었습니다.":"입금 확인 및 작업지시가 완료되었습니다."};
 return s.jsxs("div",{className:"p-4 b2b-sub-group-box space-y-3",children:[
 s.jsx("div",{className:"font-bold text-slate-800 text-xs",children:"다음 진행 작업"}),
 s.jsx("p",{className:"text-xs text-slate-600",children:messages[stage]||"진행이 중단된 신청입니다."}),
 stage===3&&request.quotation?.approvedAt&&s.jsx("button",{type:"button",onClick:()=>onWorkOrder(request.id,"결제완료/작업진행"),className:"px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs",children:"입금 확인 및 작업지시"})
 ]});
}
function PrototypeLogin({onLogin,initialEmail="",adminMode=false,applicationMode=false}) {
  const [email,setEmail]=V.useState(initialEmail),[error,setError]=V.useState("");
  return s.jsxs("form",{onSubmit:e=>{e.preventDefault();const value=email.trim().toLowerCase();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){setError("이메일 주소를 확인해 주세요.");return;}if(adminMode&&value!=="admin@medilyn.co.kr"){setError("테스트 관리자 이메일 admin@medilyn.co.kr을 입력해 주세요.");return;}onLogin({email:value,role:adminMode?"admin":"customer"});},style:{maxWidth:440,margin:"48px auto",padding:32,background:"white",border:"1px solid #e0ded6",borderRadius:24},children:[
    s.jsx("h1",{style:{fontSize:24,fontWeight:800,marginBottom:12},children:adminMode?"관리자 로그인":applicationMode?"견적신청 로그인":"신청 내역 로그인"}),
    s.jsx("p",{style:{fontSize:14,color:"#5b5e55",lineHeight:1.7,marginBottom:24},children:adminMode?"관리자 테스트 계정으로 로그인하면 신청 및 견적 관리 화면을 확인할 수 있습니다.":applicationMode?"로그인 후 견적 및 디자인 컨설팅을 신청할 수 있습니다.":"신청할 때 입력한 이메일로 로그인하면 해당 업체의 신청 내역을 확인할 수 있습니다."}),
    s.jsx("label",{htmlFor:"prototype-login-email",style:{display:"block",fontSize:14,fontWeight:700,marginBottom:8},children:"이메일"}),
    s.jsx("input",{id:"prototype-login-email",type:"email",autoComplete:"email",required:true,value:email,onChange:e=>{setEmail(e.target.value);setError("");},placeholder:adminMode?"admin@medilyn.co.kr":"테스트이메일을 입력하세요",style:{width:"100%",padding:12,border:"1px solid #cbd5e1",borderRadius:12,fontSize:16}}),
    error&&s.jsx("p",{role:"alert",style:{color:"#be123c",fontSize:13,marginTop:8},children:error}),
    s.jsx("button",{type:"submit",style:{width:"100%",marginTop:20,minHeight:48,borderRadius:12,background:"#292b29",color:"white",fontWeight:700},children:"로그인"}),
    s.jsx("p",{style:{fontSize:12,color:"#74776d",lineHeight:1.7,marginTop:16},children:adminMode?"프로토타입용 로그인으로 비밀번호는 필요하지 않습니다. 테스트 관리자: admin@medilyn.co.kr":"프로토타입용 로그인으로 비밀번호는 필요하지 않습니다. 테스트 이메일: contact@lumiereclinic.kr"})
  ]});
}
function z2(){const[sessionUser,setSessionUser]=V.useState(null),[loginEmail,setLoginEmail]=V.useState("");const[r,j]=V.useState(Yb),[M,o]=V.useState("guide"),[w,O]=V.useState(!1),requestAdmin=()=>{setSessionUser(null);O(!1);o(w?"guide":"admin-login")},F=E=>{if(!sessionUser){o("form");return;}j([{...E,ownerEmail:sessionUser.email},...r]);setLoginEmail(E.email||"");o("history")},W=(E,meta)=>{j(N=>N.map(A=>{if(A.id===E&&!w&&A.status==="견적 발송"&&A.quotation&&sessionUser&&String(A.ownerEmail||A.email).trim().toLowerCase()===sessionUser.email){const now=new Date(),pad=n=>String(n).padStart(2,"0"),ee=`${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;return{...A,status:"견적 승인완료",updatedAt:ee,processTimes:recordProcessTime(A,3,ee),quotation:A.quotation?{...A.quotation,status:"고객승인",approvedAt:ee,approvedBy:(meta&&meta.approverName)||A.applicantName,agreedTermsCount:6}:void 0}}return A}))},k=(E,N,A)=>{j(ee=>ee.map(Q=>{if(Q.id===E&&w&&Rr(Q.status)>=1&&Rr(Q.status)<=2){const $=nowDateTime();return{...Q,quotation:A?{...N,sentAt:N.sentAt||$}:N,status:A?"견적 발송":Q.status,updatedAt:$,processTimes:recordProcessTime(Q,A?2:0,$)}}return Q}))},te=(E,N,A)=>{j(ee=>ee.map(Q=>{if(Q.id===E&&w&&((N==="결제완료/작업진행"&&["견적 승인완료","입금확인요청"].includes(Q.status)&&Q.quotation?.approvedAt)||(N==="상담 완료"&&Q.status==="결제완료/작업진행"))){const $=nowDateTime();return{...Q,status:N,updatedAt:$,shippedAt:N==="상담 완료"?$:Q.shippedAt,processTimes:recordProcessTime(Q,Rr(N),$),courierName:(A==null?void 0:A.courier)||Q.courierName,trackingNumber:(A==null?void 0:A.number)||Q.trackingNumber,depositConfirmed:N==="결제완료/작업진행"||N==="상담 완료"?!0:Q.depositConfirmed}}return Q}))};return s.jsxs("div",{className:"min-h-screen bg-slate-50 flex flex-col text-slate-900",children:[s.jsx(g2,{activeTab:M,setActiveTab:o,isAdmin:w,setIsAdmin:requestAdmin,sessionUser:sessionUser,onLogin:()=>{setSessionUser(null);O(!1);o("history")},onLogout:()=>{setSessionUser(null);O(!1);o("guide")},consultingCount:w?r.length:sessionUser?r.filter(x=>String(x.ownerEmail||x.email).trim().toLowerCase()===sessionUser.email).length:0}),s.jsxs("main",{className:"flex-1 max-w-[1040px] w-full mx-auto px-4 sm:px-6 py-8",children:[M==="guide"&&s.jsx(N2,{onStartRequest:()=>{o("form");window.scrollTo({top:0,behavior:"instant"});}}),M==="form"&&(sessionUser?s.jsx(j2,{onSubmitSuccess:F}):s.jsx(PrototypeLogin,{applicationMode:true,initialEmail:loginEmail,onLogin:user=>{setSessionUser(user);O(!1);o("form")}},"application-login")),M==="admin-login"&&s.jsx(PrototypeLogin,{adminMode:true,onLogin:user=>{setSessionUser(user);O(!0);o("history")}},"admin-login"),M==="history"&&(w||sessionUser?s.jsx(T2,{consultingRequests:w?r:r.filter(x=>String(x.ownerEmail||x.email).trim().toLowerCase()===sessionUser.email),isAdmin:w,onUpdateConsultingStatus:te,onSaveQuotation:k,onCustomerApprove:W},w?"admin":sessionUser.email):s.jsx(PrototypeLogin,{initialEmail:loginEmail,onLogin:user=>{setSessionUser(user);O(!1);o("history")}},"customer-login"))]}),s.jsxs("footer",{className:"bg-white border-t border-slate-200 mt-12 py-10 text-xs text-slate-500",children:[s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8",children:[s.jsxs("div",{className:"space-y-2 md:col-span-2",children:[s.jsx("div",{className:"font-serif-brand font-bold text-slate-900 text-base",children:"MEDILIN · B2B ATELIER"}),s.jsx("p",{className:"text-slate-500 text-xs leading-relaxed max-w-md",children:"(주)메디린 코리아는 하이엔드 맞춤 컴퓨터 자수와 고품질 유니폼/패브릭을 제작하는 B2B 대량 주문 전문 디자인 아틀리에입니다."}),s.jsxs("div",{className:"text-[11px] text-slate-400 pt-1 space-y-0.5",children:[s.jsx("p",{children:"사업자등록번호: 211-88-90412 | 통신판매업신고: 제2026-서울성동-0419호"}),s.jsx("p",{children:"본사 및 아틀리에: 서울특별시 성동구 연무장길 45, 메디린 빌딩 3-4F"})]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"font-bold text-slate-900",children:"B2B 전담 상담 센터"}),s.jsxs("div",{className:"space-y-1 text-slate-600",children:[s.jsxs("p",{className:"flex items-center gap-1.5",children:[s.jsx(ox,{className:"w-3.5 h-3.5 text-blue-600"})," 02-540-1016 (직통)"]}),s.jsxs("p",{className:"flex items-center gap-1.5",children:[s.jsx(ux,{className:"w-3.5 h-3.5 text-blue-600"})," b2b@laligne.co.kr"]}),s.jsx("p",{className:"text-[11px] text-slate-400",children:"평일 09:30 ~ 18:30 (점심 12:30~13:30)"})]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"font-bold text-slate-900",children:"품질 및 보증 안내"}),s.jsx("p",{className:"text-slate-500 text-[11px] leading-relaxed",children:"메디린은 산업용 최고급 일본 다지마(Tajima) 전산 자수기를 도입하여 100% 균일한 땀수와 세탁 내구성을 보장합니다."})]})]}),s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400",children:[s.jsx("div",{children:"© 2026 MEDILIN KOREA CO., LTD. ALL RIGHTS RESERVED."}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx("button",{onClick:()=>o("guide"),className:"hover:underline",children:"이용약관"}),s.jsx("button",{onClick:()=>o("guide"),className:"hover:underline",children:"개인정보처리방침"}),s.jsx("button",{onClick:requestAdmin,className:"text-blue-600 font-semibold hover:underline",children:w?"고객 모드로 전환":"관리자 모드로 전환"})]})]})]})]})}qb.createRoot(document.getElementById("root")).render(s.jsx(zm.StrictMode,{children:s.jsx(z2,{})}));
