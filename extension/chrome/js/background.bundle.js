!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=54)}([,function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,"a",(function(){return n}))},function(e,r,t){"use strict";t.d(r,"b",(function(){return n})),t.d(r,"a",(function(){return o})),t.d(r,"d",(function(){return s})),t.d(r,"c",(function(){return i}));const n="TOGGLE_COLOR_MODE",o="SET_AUTHENTICATED",s=e=>({type:n,data:e}),i=e=>({type:o,data:e})},function(e,r,t){"use strict";t.d(r,"c",(function(){return n})),t.d(r,"a",(function(){return o})),t.d(r,"d",(function(){return s}));const n="SIGNIN_ERROR",o="RESET",s=e=>({type:o,data:e})},,,function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.DEFAULT_PORT_NAME=r.PATCH_STATE_TYPE=r.STATE_TYPE=r.DISPATCH_TYPE=void 0;r.DISPATCH_TYPE="chromex.dispatch";r.STATE_TYPE="chromex.state";r.PATCH_STATE_TYPE="chromex.patch_state";r.DEFAULT_PORT_NAME="chromex.port_name"},function(e,r,t){"use strict";function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}Object.defineProperty(r,"__esModule",{value:!0}),r.withSerializer=r.withDeserializer=r.noop=void 0;var s=function(e){return e};r.noop=s;var i=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;return n({},e,e.payload?{payload:r(e.payload)}:{})},a=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,t=arguments.length>2?arguments[2]:void 0;return t?function(n){for(var o=arguments.length,s=new Array(o>1?o-1:0),a=1;a<o;a++)s[a-1]=arguments[a];return t.apply(void 0,[n].concat(s))?e.apply(void 0,[i(n,r)].concat(s)):e.apply(void 0,[n].concat(s))}:function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return e.apply(void 0,[i(t,r)].concat(o))}};r.withDeserializer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return function(r){return function(t,n){return r(a(t,e,n))}}};r.withSerializer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];if(o.length<=t)throw new Error("Message in request could not be serialized. "+"Expected message in position ".concat(t," but only received ").concat(o.length," args."));return o[t]=i(o[t],e),r.apply(void 0,o)}}}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.DIFF_STATUS_ARRAY_UPDATED=r.DIFF_STATUS_KEYS_UPDATED=r.DIFF_STATUS_REMOVED=r.DIFF_STATUS_UPDATED=void 0;r.DIFF_STATUS_UPDATED="updated";r.DIFF_STATUS_REMOVED="removed";r.DIFF_STATUS_KEYS_UPDATED="updated_keys";r.DIFF_STATUS_ARRAY_UPDATED="updated_array"},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getBrowserAPI=function(){var e;try{e=self.chrome||self.browser||browser}catch(r){e=browser}if(!e)throw new Error("Browser API is not present");return e}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Store",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(r,"applyMiddleware",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(r,"wrapStore",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(r,"alias",{enumerable:!0,get:function(){return i.default}});var n=a(t(11)),o=a(t(14)),s=a(t(15)),i=a(t(17));function a(e){return e&&e.__esModule?e:{default:e}}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=c(t(12)),o=t(6),s=t(7),i=c(t(13)),a=t(9);function c(e){return e&&e.__esModule?e:{default:e}}function l(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function u(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var g={portName:o.DEFAULT_PORT_NAME,state:{},extensionId:null,serializer:s.noop,deserializer:s.noop,patchStrategy:i.default},m=function(){function e(){var r=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=t.portName,i=void 0===n?g.portName:n,c=t.state,u=void 0===c?g.state:c,m=t.extensionId,f=void 0===m?g.extensionId:m,d=t.serializer,A=void 0===d?g.serializer:d,p=t.deserializer,h=void 0===p?g.deserializer:p,y=t.patchStrategy,b=void 0===y?g.patchStrategy:y;if(l(this,e),!i)throw new Error("portName is required in options");if("function"!=typeof A)throw new Error("serializer must be a function");if("function"!=typeof h)throw new Error("deserializer must be a function");if("function"!=typeof b)throw new Error("patchStrategy must be one of the included patching strategies or a custom patching function");this.portName=i,this.readyResolved=!1,this.readyPromise=new Promise((function(e){return r.readyResolve=e})),this.browserAPI=(0,a.getBrowserAPI)(),this.extensionId=f,this.port=this.browserAPI.runtime.connect(this.extensionId,{name:i}),this.safetyHandler=this.safetyHandler.bind(this),this.browserAPI.runtime.onMessage&&(this.safetyMessage=this.browserAPI.runtime.onMessage.addListener(this.safetyHandler)),this.serializedPortListener=(0,s.withDeserializer)(h)((function(){var e;return(e=r.port.onMessage).addListener.apply(e,arguments)})),this.serializedMessageSender=(0,s.withSerializer)(A)((function(){var e;return(e=r.browserAPI.runtime).sendMessage.apply(e,arguments)}),1),this.listeners=[],this.state=u,this.patchStrategy=b,this.serializedPortListener((function(e){switch(e.type){case o.STATE_TYPE:r.replaceState(e.payload),r.readyResolved||(r.readyResolved=!0,r.readyResolve());break;case o.PATCH_STATE_TYPE:r.patchState(e.payload)}})),this.dispatch=this.dispatch.bind(this)}var r,t,i;return r=e,(t=[{key:"ready",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e?this.readyPromise.then(e):this.readyPromise}},{key:"subscribe",value:function(e){var r=this;return this.listeners.push(e),function(){r.listeners=r.listeners.filter((function(r){return r!==e}))}}},{key:"patchState",value:function(e){this.state=this.patchStrategy(this.state,e),this.listeners.forEach((function(e){return e()}))}},{key:"replaceState",value:function(e){this.state=e,this.listeners.forEach((function(e){return e()}))}},{key:"getState",value:function(){return this.state}},{key:"replaceReducer",value:function(){}},{key:"dispatch",value:function(e){var r=this;return new Promise((function(t,s){r.serializedMessageSender(r.extensionId,{type:o.DISPATCH_TYPE,portName:r.portName,payload:e},null,(function(e){var r=e.error,o=e.value;if(r){var i=new Error("".concat("\nLooks like there is an error in the background page. You might want to inspect your background page for more details.\n").concat(r));s((0,n.default)(i,r))}else t(o&&o.payload)}))}))}},{key:"safetyHandler",value:function(e){"storeReady"===e.action&&e.portName===this.portName&&(this.browserAPI.runtime.onMessage.removeListener(this.safetyHandler),this.readyResolved||(this.readyResolved=!0,this.readyResolve()))}}])&&u(r.prototype,t),i&&u(r,i),e}();r.default=m},function(e,r){var t=9007199254740991,n="[object Arguments]",o="[object Function]",s="[object GeneratorFunction]",i=/^(?:0|[1-9]\d*)$/;function a(e,r,t){switch(t.length){case 0:return e.call(r);case 1:return e.call(r,t[0]);case 2:return e.call(r,t[0],t[1]);case 3:return e.call(r,t[0],t[1],t[2])}return e.apply(r,t)}var c=Object.prototype,l=c.hasOwnProperty,u=c.toString,g=c.propertyIsEnumerable,m=Math.max;function f(e,r){var t=y(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&b(e)}(e)&&l.call(e,"callee")&&(!g.call(e,"callee")||u.call(e)==n)}(e)?function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}(e.length,String):[],o=t.length,s=!!o;for(var i in e)!r&&!l.call(e,i)||s&&("length"==i||p(i,o))||t.push(i);return t}function d(e,r,t){var n=e[r];l.call(e,r)&&h(n,t)&&(void 0!==t||r in e)||(e[r]=t)}function A(e){if(!v(e))return function(e){var r=[];if(null!=e)for(var t in Object(e))r.push(t);return r}(e);var r,t,n,o=(t=(r=e)&&r.constructor,n="function"==typeof t&&t.prototype||c,r===n),s=[];for(var i in e)("constructor"!=i||!o&&l.call(e,i))&&s.push(i);return s}function p(e,r){return!!(r=null==r?t:r)&&("number"==typeof e||i.test(e))&&e>-1&&e%1==0&&e<r}function h(e,r){return e===r||e!=e&&r!=r}var y=Array.isArray;function b(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=t}(e.length)&&!function(e){var r=v(e)?u.call(e):"";return r==o||r==s}(e)}function v(e){var r=typeof e;return!!e&&("object"==r||"function"==r)}var x,w,E,O=(x=function(e,r){!function(e,r,t,n){t||(t={});for(var o=-1,s=r.length;++o<s;){var i=r[o],a=n?n(t[i],e[i],i,t,e):void 0;d(t,i,void 0===a?e[i]:a)}}(r,function(e){return b(e)?f(e,!0):A(e)}(r),e)},w=function(e,r){var t=-1,n=r.length,o=n>1?r[n-1]:void 0,s=n>2?r[2]:void 0;for(o=x.length>3&&"function"==typeof o?(n--,o):void 0,s&&function(e,r,t){if(!v(t))return!1;var n=typeof r;return!!("number"==n?b(t)&&p(r,t.length):"string"==n&&r in t)&&h(t[r],e)}(r[0],r[1],s)&&(o=n<3?void 0:o,n=1),e=Object(e);++t<n;){var i=r[t];i&&x(e,i,t,o)}return e},E=m(void 0===E?w.length-1:E,0),function(){for(var e=arguments,r=-1,t=m(e.length-E,0),n=Array(t);++r<t;)n[r]=e[E+r];r=-1;for(var o=Array(E+1);++r<E;)o[r]=e[r];return o[E]=n,a(w,this,o)});e.exports=O},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){var t=Object.assign({},e);return r.forEach((function(e){var r=e.change,o=e.key,s=e.value;switch(r){case n.DIFF_STATUS_UPDATED:t[o]=s;break;case n.DIFF_STATUS_REMOVED:Reflect.deleteProperty(t,o)}})),t};var n=t(8)},function(e,r,t){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return 0===r.length?function(e){return e}:1===r.length?r[0]:r.reduce((function(e,r){return function(){return e(r.apply(void 0,arguments))}}))}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),s=1;s<r;s++)t[s-1]=arguments[s];var i=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},a={getState:e.getState.bind(e),dispatch:function(){return i.apply(void 0,arguments)}};return t=(t||[]).map((function(e){return e(a)})),i=o.apply(void 0,n(t))(e.dispatch),e.dispatch=i,e}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n,o=t(6),s=t(7),i=t(9),a=(n=t(16))&&n.__esModule?n:{default:n};var c={portName:o.DEFAULT_PORT_NAME,dispatchResponder:function(e,r){Promise.resolve(e).then((function(e){r({error:null,value:e})})).catch((function(e){console.error("error dispatching result:",e),r({error:e.message,value:null})}))},serializer:s.noop,deserializer:s.noop,diffStrategy:a.default};r.default=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,t=r.portName,n=void 0===t?c.portName:t,a=r.dispatchResponder,l=void 0===a?c.dispatchResponder:a,u=r.serializer,g=void 0===u?c.serializer:u,m=r.deserializer,f=void 0===m?c.deserializer:m,d=r.diffStrategy,A=void 0===d?c.diffStrategy:d;if(!n)throw new Error("portName is required in options");if("function"!=typeof g)throw new Error("serializer must be a function");if("function"!=typeof f)throw new Error("deserializer must be a function");if("function"!=typeof A)throw new Error("diffStrategy must be one of the included diffing strategies or a custom diff function");var p=(0,i.getBrowserAPI)(),h=function(r,t,s){if(r.type===o.DISPATCH_TYPE&&r.portName===n){var i=Object.assign({},r.payload,{_sender:t}),a=null;try{a=e.dispatch(i)}catch(e){a=Promise.reject(e.message),console.error(e)}return l(a,s),!0}},y=function(r){if(r.name===n){var t=(0,s.withSerializer)(g)((function(){return r.postMessage.apply(r,arguments)})),i=e.getState(),a=e.subscribe((function(){var r=e.getState(),n=A(i,r);n.length&&(i=r,t({type:o.PATCH_STATE_TYPE,payload:n}))}));r.onDisconnect.addListener(a),t({type:o.STATE_TYPE,payload:i})}},b=(0,s.withDeserializer)(f),v=function(e){return e.type===o.DISPATCH_TYPE&&e.portName===n};b((function(){var e;return(e=p.runtime.onMessage).addListener.apply(e,arguments)}))(h,v),p.runtime.onMessageExternal?b((function(){var e;return(e=p.runtime.onMessageExternal).addListener.apply(e,arguments)}))(h,v):console.warn("runtime.onMessageExternal is not supported"),p.runtime.onConnect.addListener(y),p.runtime.onConnectExternal?p.runtime.onConnectExternal.addListener(y):console.warn("runtime.onConnectExternal is not supported"),p.tabs.query({},(function(e){var r=!0,t=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done);r=!0){var a=s.value;p.tabs.sendMessage(a.id,{action:"storeReady",portName:n},(function(){chrome.runtime.lastError}))}}catch(e){t=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(t)throw o}}}))}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){var t=[];return Object.keys(r).forEach((function(o){e[o]!==r[o]&&t.push({key:o,value:r[o],change:n.DIFF_STATUS_UPDATED})})),Object.keys(e).forEach((function(e){r.hasOwnProperty(e)||t.push({key:e,change:n.DIFF_STATUS_REMOVED})})),t};var n=t(8)},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(e){return function(){return function(r){return function(t){var n=e[t.type];return r(n?n(t):t)}}}}},,,,,,function(e,r,t){var n,o,s;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[e],void 0===(s="function"==typeof(n=function(e){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const r="The message port closed before a response was received.",t="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",n=e=>{const n={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(n).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class o extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const s=e=>e&&"object"==typeof e&&"function"==typeof e.then,i=(r,t)=>(...n)=>{e.runtime.lastError?r.reject(new Error(e.runtime.lastError.message)):t.singleCallbackArg||n.length<=1&&!1!==t.singleCallbackArg?r.resolve(n[0]):r.resolve(n)},a=e=>1==e?"argument":"arguments",c=(e,r)=>function(t,...n){if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${a(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${a(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((o,s)=>{if(r.fallbackToNoCallback)try{t[e](...n,i({resolve:o,reject:s},r))}catch(s){console.warn(e+" API method doesn't seem to support the callback parameter, falling back to call it without a callback: ",s),t[e](...n),r.fallbackToNoCallback=!1,r.noCallback=!0,o()}else r.noCallback?(t[e](...n),o()):t[e](...n,i({resolve:o,reject:s},r))}))},l=(e,r,t)=>new Proxy(r,{apply:(r,n,o)=>t.call(n,e,...o)});let u=Function.call.bind(Object.prototype.hasOwnProperty);const g=(e,r={},t={})=>{let n=Object.create(null),o={has:(r,t)=>t in e||t in n,get(o,s,i){if(s in n)return n[s];if(!(s in e))return;let a=e[s];if("function"==typeof a)if("function"==typeof r[s])a=l(e,e[s],r[s]);else if(u(t,s)){let r=c(s,t[s]);a=l(e,e[s],r)}else a=a.bind(e);else if("object"==typeof a&&null!==a&&(u(r,s)||u(t,s)))a=g(a,r[s],t[s]);else{if(!u(t,"*"))return Object.defineProperty(n,s,{configurable:!0,enumerable:!0,get:()=>e[s],set(r){e[s]=r}}),a;a=g(a,r[s],t["*"])}return n[s]=a,a},set:(r,t,o,s)=>(t in n?n[t]=o:e[t]=o,!0),defineProperty:(e,r,t)=>Reflect.defineProperty(n,r,t),deleteProperty:(e,r)=>Reflect.deleteProperty(n,r)},s=Object.create(e);return new Proxy(s,o)},m=e=>({addListener(r,t,...n){r.addListener(e.get(t),...n)},hasListener:(r,t)=>r.hasListener(e.get(t)),removeListener(r,t){r.removeListener(e.get(t))}}),f=new o((e=>"function"!=typeof e?e:function(r){const t=g(r,{},{getContent:{minArgs:0,maxArgs:0}});e(t)}));let d=!1;const A=new o((e=>"function"!=typeof e?e:function(r,n,o){let i,a,c=!1,l=new Promise((e=>{i=function(r){d||(console.warn(t,(new Error).stack),d=!0),c=!0,e(r)}}));try{a=e(r,n,i)}catch(e){a=Promise.reject(e)}const u=!0!==a&&s(a);if(!0!==a&&!u&&!c)return!1;const g=e=>{e.then((e=>{o(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",o({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)}))};return g(u?a:l),!0})),p=({reject:t,resolve:n},o)=>{e.runtime.lastError?e.runtime.lastError.message===r?n():t(new Error(e.runtime.lastError.message)):o&&o.__mozWebExtensionPolyfillReject__?t(new Error(o.message)):n(o)},h=(e,r,t,...n)=>{if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${a(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${a(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((e,r)=>{const o=p.bind(null,{resolve:e,reject:r});n.push(o),t.sendMessage(...n)}))},y={devtools:{network:{onRequestFinished:m(f)}},runtime:{onMessage:m(A),onMessageExternal:m(A),sendMessage:h.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:h.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},b={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return n.privacy={network:{"*":b},services:{"*":b},websites:{"*":b}},g(e,y,n)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=n(chrome)}else e.exports=browser})?n.apply(r,o):n)||(e.exports=s)},,function(e,r,t){"use strict";
/**
 *  emoji-log
 *
 *  @author   abhijithvijayan <abhijithvijayan.in>
 *  @license  MIT License
 *
 *  Art by Colin J. Randall
 *
 *               \
 *                \
 *                 \\
 *                  \\
 *                   >\/7
 *               _.-(6'  \
 *              (=___._/` \
 *                   )  \ |
 *                  /   / |
 *                 /    > /
 *                j    < _\
 *            _.-' :      ``.
 *            \ r=._\        `.
 *           <`\\_  \         .`-.
 *            \ r-7  `-. ._  ' .  `\
 *             \`,      `-.`7  7)   )
 *              \/         \|  \'  / `-._
 *                         ||    .'
 *                          \\  (
 *                           >\  >
 *                       ,.-' >.'
 *                      <.'_.''
 *                        <'
 *
 */Object.defineProperty(r,"__esModule",{value:!0});var n;function o(e,r="🐶",t){const o=(s=e)&&(null==s?void 0:s.stack)&&(null==s?void 0:s.message)&&"string"==typeof s.stack&&"string"==typeof s.message;var s;const i=o?e.message:e,a=t||(null==e?void 0:e.toString().length)*n.LINE_LENGTH_VARIABLE||n.DEFAULT_LINE_LENGTH;console.log(`\n      /‾${"‾‾".repeat(a)}‾\n  ${r} < `,i,`\n      \\_${"__".repeat(a)}_\n  `),o&&("undefined"!=typeof window?(console.groupCollapsed(r+" > Stack Trace:"),console.error(e.stack),console.groupEnd()):(console.log(r+" > Stack Trace:"),console.error(e.stack)))}r.CustomConsole=class{},function(e){e[e.LINE_LENGTH_VARIABLE=.66]="LINE_LENGTH_VARIABLE",e[e.DEFAULT_LINE_LENGTH=4]="DEFAULT_LINE_LENGTH",e[e.ONE=1]="ONE",e[e.TWO=2]="TWO",e[e.THREE=3]="THREE"}(n||(n={})),console.emoji=function(...e){const r=[];return r[0]=function(){return o("Meow","🐱"),this},r[n.ONE]=function(e){return o(e),this},r[n.TWO]=function(e,r){return o(r,e),this},r[n.THREE]=function(e,r,t){return o(r,e,t),this},this.emoji=function(...e){return r[e.length](...e),this},this.emoji(...e),this}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,r,t){"use strict";t.r(r);t(25);var n=t(23),o=t.n(n),s=t(10);t(1);function i(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var a="function"==typeof Symbol&&Symbol.observable||"@@observable",c=function(){return Math.random().toString(36).substring(7).split("").join(".")},l={INIT:"@@redux/INIT"+c(),REPLACE:"@@redux/REPLACE"+c(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+c()}};function u(e){if("object"!=typeof e||null===e)return!1;for(var r=e;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(e)===r}var g=t(2);function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}null==localStorage.getItem("color_mode")&&localStorage.setItem("color_mode","dark");const A={authenticated:!0,color_mode:localStorage.getItem("color_mode")};var p=t(3);function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){b(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const v={error:!1,error_phrase:""};function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){E(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function E(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const O={site_selected:{value:"youtube",label:"YouTube"}};var P=function e(r,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(i(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(i(1));return n(e)(r,t)}if("function"!=typeof r)throw new Error(i(2));var s=r,c=t,g=[],m=g,f=!1;function d(){m===g&&(m=g.slice())}function A(){if(f)throw new Error(i(3));return c}function p(e){if("function"!=typeof e)throw new Error(i(4));if(f)throw new Error(i(5));var r=!0;return d(),m.push(e),function(){if(r){if(f)throw new Error(i(6));r=!1,d();var t=m.indexOf(e);m.splice(t,1),g=null}}}function h(e){if(!u(e))throw new Error(i(7));if(void 0===e.type)throw new Error(i(8));if(f)throw new Error(i(9));try{f=!0,c=s(c,e)}finally{f=!1}for(var r=g=m,t=0;t<r.length;t++){(0,r[t])()}return e}function y(e){if("function"!=typeof e)throw new Error(i(10));s=e,h({type:l.REPLACE})}function b(){var e,r=p;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(i(11));function t(){e.next&&e.next(A())}return t(),{unsubscribe:r(t)}}})[a]=function(){return this},e}return h({type:l.INIT}),(o={dispatch:h,subscribe:p,getState:A,replaceReducer:y})[a]=b,o}(function(e){for(var r=Object.keys(e),t={},n=0;n<r.length;n++){var o=r[n];0,"function"==typeof e[o]&&(t[o]=e[o])}var s,a=Object.keys(t);try{!function(e){Object.keys(e).forEach((function(r){var t=e[r];if(void 0===t(void 0,{type:l.INIT}))throw new Error(i(12));if(void 0===t(void 0,{type:l.PROBE_UNKNOWN_ACTION()}))throw new Error(i(13))}))}(t)}catch(e){s=e}return function(e,r){if(void 0===e&&(e={}),s)throw s;for(var n=!1,o={},c=0;c<a.length;c++){var l=a[c],u=t[l],g=e[l],m=u(g,r);if(void 0===m){r&&r.type;throw new Error(i(14))}o[l]=m,n=n||m!==g}return(n=n||a.length!==Object.keys(e).length)?o:e}}({user:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,r=arguments.length>1?arguments[1]:void 0;const t=r.type,n=r.data;switch(t){case g.b:var o="";return"dark"==e.color_mode?(o="light",localStorage.setItem("color_mode",o)):"light"==e.color_mode&&(o="dark",localStorage.setItem("color_mode",o)),f(f({},e),{},{color_mode:o});case g.a:return f(f({},e),{},{authenticated:n});default:return e}},login:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,r=arguments.length>1?arguments[1]:void 0;const t=r.type,n=r.data;switch(t){case p.c:return y(y({},e),{},{error:!0,error_phrase:n});case p.a:return v;default:return e}},data:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,r=arguments.length>1?arguments[1]:void 0;const t=r.type,n=r.data;switch(t){case p.SELECT_SITE:return w(w({},e),{},{site_selected:n});default:return e}}}));Object(s.wrapStore)(P),o.a.runtime.onInstalled.addListener((()=>{console.emoji("☕️","extension installed")}))}]);