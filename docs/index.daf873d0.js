let e,t,n,i,r,s,o,a,l,h,c,u,d,p,f;function m(e){return e&&e.__esModule?e.default:e}var _,g,v,y,b,C,w,I=globalThis;function T(e){let t=new Date(e);return{date:t.toLocaleDateString("en-GB"),time:t.toLocaleTimeString("en-GB")}}function E(e,t){let n=document.querySelector(t);e?n.style.display="block":n.style.display="none"}function S(e,t=3e3){let n=document.querySelector("#toastContainer")||function(){let e=document.createElement("div");return e.id="toastContainer",document.body.appendChild(e),e}(),i=n.getElementsByClassName("toastMessage");i.length>=3&&i[0].parentNode?.removeChild(i[0]);let r=document.createElement("div");r.classList.add("toastMessage"),r.innerText=e,n.appendChild(r),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>{r.parentNode?.removeChild(r)},500)},t)}function k(e,t){document.querySelectorAll(e).forEach(e=>{e.addEventListener("change",function(){document.querySelectorAll(t).forEach(e=>{e.classList.remove("active")});let e=this.parentElement;e&&e.classList.contains(t.replace(".",""))&&e.classList.add("active")})})}function x(){return Math.floor(1e7*Math.random())}function P(e){return e.charAt(0).toUpperCase()+e.slice(1)}/**
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
 */var N={},R=N={};function L(){throw Error("setTimeout has not been defined")}function D(){throw Error("clearTimeout has not been defined")}function A(e){if(v===setTimeout)return setTimeout(e,0);if((v===L||!v)&&setTimeout)return v=setTimeout,setTimeout(e,0);try{return v(e,0)}catch(t){try{return v.call(null,e,0)}catch(t){return v.call(this,e,0)}}}!function(){try{v="function"==typeof setTimeout?setTimeout:L}catch(e){v=L}try{y="function"==typeof clearTimeout?clearTimeout:D}catch(e){y=D}}();var O=[],M=!1,q=-1;function F(){M&&b&&(M=!1,b.length?O=b.concat(O):q=-1,O.length&&H())}function H(){if(!M){var e=A(F);M=!0;for(var t=O.length;t;){for(b=O,O=[];++q<t;)b&&b[q].run();q=-1,t=O.length}b=null,M=!1,function(e){if(y===clearTimeout)return clearTimeout(e);if((y===D||!y)&&clearTimeout)return y=clearTimeout,clearTimeout(e);try{y(e)}catch(t){try{return y.call(null,e)}catch(t){return y.call(this,e)}}}(e)}}function U(e,t){this.fun=e,this.array=t}function $(){}R.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];O.push(new U(e,t)),1!==O.length||M||A(H)},U.prototype.run=function(){this.fun.apply(null,this.array)},R.title="browser",R.browser=!0,R.env={},R.argv=[],R.version="",R.versions={},R.on=$,R.addListener=$,R.once=$,R.off=$,R.removeListener=$,R.removeAllListeners=$,R.emit=$,R.prependListener=$,R.prependOnceListener=$,R.listeners=function(e){return[]},R.binding=function(e){throw Error("process.binding is not supported")},R.cwd=function(){return"/"},R.chdir=function(e){throw Error("process.chdir is not supported")},R.umask=function(){return 0};const B={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},j=function(e,t){if(!e)throw W(t)},W=function(e){return Error("Firebase Database ("+B.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},z=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:((64512&r)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128):t[n++]=r>>12|224,t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},V=function(e){let t=[],n=0,i=0;for(;n<e.length;){let r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},K={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=r>>2,c=(3&r)<<4|o>>4,u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[h],n[c],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(z(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):V(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){let r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,a=++t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new Y;let l=r<<2|s>>4;if(i.push(l),64!==o){let e=s<<4&240|o>>2;if(i.push(e),64!==a){let e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Y extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const G=function(e){let t=z(e);return K.encodeByteArray(t,!0)},Q=function(e){return G(e).replace(/\./g,"")},J=function(e){try{return K.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},X=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==I)return I;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,Z=()=>{if(void 0===N||void 0===N.env)return;let e=void 0;if(e)return JSON.parse(e)},ee=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&J(e[1]);return t&&JSON.parse(t)},et=()=>{try{return X()||Z()||ee()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},en=e=>{var t,n;return null===(n=null===(t=et())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ei=e=>{let t=en(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},er=()=>{var e;return null===(e=et())||void 0===e?void 0:e.config};/**
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
 */class es{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function eo(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function ea(){return!0===B.NODE_CLIENT||!0===B.NODE_ADMIN}class el extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,el.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eh.prototype.create)}}class eh{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(ec,(e,t)=>{let i=n[t];return null!=i?String(i):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new el(i,o,n)}}const ec=/\{\$([^}]+)}/g;/**
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
 */function eu(e){return JSON.parse(e)}function ed(e){return JSON.stringify(e)}/**
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
 */const ep=function(e){let t={},n={},i={},r="";try{let s=e.split(".");t=eu(J(s[0])||""),n=eu(J(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},ef=function(e){let t=ep(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},em=function(e){let t=ep(e).claims;return"object"==typeof t&&!0===t.admin};/**
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
 */function e_(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function eg(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ev(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ey(e,t,n){let i={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function eb(e,t){if(e===t)return!0;let n=Object.keys(e),i=Object.keys(t);for(let r of n){if(!i.includes(r))return!1;let n=e[r],s=t[r];if(eC(n)&&eC(s)){if(!eb(n,s))return!1}else if(n!==s)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}function eC(e){return null!==e&&"object"==typeof e}/**
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
 */class ew{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){let n,i;t||(t=0);let r=this.W_;if("string"==typeof e)for(let n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=r[e-3]^r[e-8]^r[e-14]^r[e-16];r[e]=(t<<1|t>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(n=l^o&(a^l),i=1518500249):(n=o^a^l,i=1859775393):e<60?(n=o&a|l&(o|a),i=2400959708):(n=o^a^l,i=3395469782);let t=(s<<5|s>>>27)+n+h+i+r[e]&4294967295;h=l,l=a,a=(o<<30|o>>>2)&4294967295,o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let n=t-this.blockSize,i=0,r=this.buf_,s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function eI(e,t){return`${e} failed: ${t} argument `}/**
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
 */const eT=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){let t=r-55296;j(++i<e.length,"Surrogate pair missing trail surrogate."),r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:(r<65536?t[n++]=r>>12|224:(t[n++]=r>>18|240,t[n++]=r>>12&63|128),t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},eE=function(e){let t=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function eS(e){return e&&e._delegate?e._delegate:e}class ek{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ex="[DEFAULT]";/**
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
 */class eP{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new es;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:ex})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=ex){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=ex){return this.instances.has(e)}getOptions(e=ex){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(i);return i}onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===ex?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=ex){return this.component?this.component.multipleInstances?e:ex:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class eN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new eP(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const eR=[];(_=C||(C={}))[_.DEBUG=0]="DEBUG",_[_.VERBOSE=1]="VERBOSE",_[_.INFO=2]="INFO",_[_.WARN=3]="WARN",_[_.ERROR=4]="ERROR",_[_.SILENT=5]="SILENT";const eL={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},eD=C.INFO,eA={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},eO=(e,t,...n)=>{if(t<e.logLevel)return;let i=new Date().toISOString(),r=eA[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eM{constructor(e){this.name=e,this._logLevel=eD,this._logHandler=eO,this._userLogHandler=null,eR.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?eL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}const eq=(e,t)=>t.some(t=>e instanceof t),eF=new WeakMap,eH=new WeakMap,eU=new WeakMap,e$=new WeakMap,eB=new WeakMap;let ej={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return eH.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eU.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return eW(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eW(n){var i;if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(eW(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eF.set(t,e)}).catch(()=>{}),eB.set(t,e),t}(n);if(e$.has(n))return e$.get(n);let r="function"==typeof(i=n)?i!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(i)?function(...e){return i.apply(ez(this),e),eW(eF.get(this))}:function(...e){return eW(i.apply(ez(this),e))}:function(e,...t){let n=i.call(ez(this),e,...t);return eU.set(n,e.sort?e.sort():[e]),eW(n)}:(i instanceof IDBTransaction&&function(e){if(eH.has(e))return;let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});eH.set(e,t)}(i),eq(i,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(i,ej):i;return r!==n&&(e$.set(n,r),eB.set(r,n)),r}const ez=e=>eB.get(e),eV=["get","getKey","getAll","getAllKeys","count"],eK=["put","add","delete","clear"],eY=new Map;function eG(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eY.get(t))return eY.get(t);let n=t.replace(/FromIndex$/,""),i=t!==n,r=eK.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||eV.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return eY.set(t,s),s}ej={...f=ej,get:(e,t,n)=>eG(e,t)||f.get(e,t,n),has:(e,t)=>!!eG(e,t)||f.has(e,t)};/**
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
 */class eQ{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const eJ="@firebase/app",eX="0.9.29",eZ=new eM("@firebase/app"),e0="[DEFAULT]",e1={[eJ]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},e2=new Map,e3=new Map;function e5(e){let t=e.name;if(e3.has(t))return eZ.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(e3.set(t,e),e2.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){eZ.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}const e4=new eh("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class e6{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ek("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw e4.create("app-deleted",{appName:this._name})}}function e9(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:e0,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw e4.create("bad-app-name",{appName:String(r)});if(n||(n=er()),!n)throw e4.create("no-options");let s=e2.get(r);if(s){if(eb(n,s.options)&&eb(i,s.config))return s;throw e4.create("duplicate-app",{appName:r})}let o=new eN(r);for(let e of e3.values())o.addComponent(e);let a=new e6(n,i,o);return e2.set(r,a),a}function e8(e,t,n){var i;let r=null!==(i=e1[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);let s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eZ.warn(e.join(" "));return}e5(new ek(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const e7="firebase-heartbeat-store";let te=null;function tt(){return te||(te=(function(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let o=indexedDB.open(e,1),a=eW(o);return i&&o.addEventListener("upgradeneeded",e=>{i(eW(o.result),e.oldVersion,e.newVersion,eW(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(e7)}catch(e){console.warn(e)}}}).catch(e=>{throw e4.create("idb-open",{originalErrorMessage:e.message})})),te}async function tn(e){try{let t=(await tt()).transaction(e7),n=await t.objectStore(e7).get(tr(e));return await t.done,n}catch(e){if(e instanceof el)eZ.warn(e.message);else{let t=e4.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eZ.warn(t.message)}}}async function ti(e,t){try{let n=(await tt()).transaction(e7,"readwrite"),i=n.objectStore(e7);await i.put(t,tr(e)),await n.done}catch(e){if(e instanceof el)eZ.warn(e.message);else{let t=e4.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eZ.warn(t.message)}}}function tr(e){return`${e.name}!${e.options.appId}`}class ts{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ta(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=to();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=to(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){let n=[],i=e.slice();for(let r of e){let e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),tl(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),tl(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=Q(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function to(){return new Date().toISOString().substring(0,10)}class ta{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await tn(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return ti(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return ti(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function tl(e){return Q(JSON.stringify({version:2,heartbeats:e})).length}e5(new ek("platform-logger",e=>new eQ(e),"PRIVATE")),e5(new ek("heartbeat",e=>new ts(e),"PRIVATE")),e8(eJ,eX,""),e8(eJ,eX,"esm2017"),e8("fire-js",""),e8("firebase","10.9.0","app");const th="@firebase/database",tc="1.0.3";/**
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
 */let tu="";/**
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
 */class td{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ed(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:eu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return e_(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const tf=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new td(t)}}catch(e){}return new tp},tm=tf("localStorage"),t_=tf("sessionStorage"),tg=new eM("@firebase/database"),tv=(p=1,function(){return p++}),ty=function(e){let t=eT(e),n=new ew;n.update(t);let i=n.digest();return K.encodeByteArray(i)},tb=function(...e){let t="";for(let n=0;n<e.length;n++){let i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=tb.apply(null,i):"object"==typeof i?t+=ed(i):t+=i,t+=" "}return t};let tC=null,tw=!0;const tI=function(e,t){j(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(tg.logLevel=C.VERBOSE,tC=tg.log.bind(tg),t&&t_.set("logging_enabled",!0)):"function"==typeof e?tC=e:(tC=null,t_.remove("logging_enabled"))},tT=function(...e){if(!0===tw&&(tw=!1,null===tC&&!0===t_.get("logging_enabled")&&tI(!0)),tC){let t=tb.apply(null,e);tC(t)}},tE=function(e){return function(...t){tT(e,...t)}},tS=function(...e){let t="FIREBASE INTERNAL ERROR: "+tb(...e);tg.error(t)},tk=function(...e){let t=`FIREBASE FATAL ERROR: ${tb(...e)}`;throw tg.error(t),Error(t)},tx=function(...e){let t="FIREBASE WARNING: "+tb(...e);tg.warn(t)},tP=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&tx("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tN=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},tR=function(e){if(ea()||"complete"===document.readyState)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},tL="[MIN_NAME]",tD="[MAX_NAME]",tA=function(e,t){if(e===t)return 0;{if(e===tL||t===tD)return -1;if(t===tL||e===tD)return 1;let n=tB(e),i=tB(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},tO=function(e,t){return e===t?0:e<t?-1:1},tM=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+ed(t))},tq=function(e){if("object"!=typeof e||null===e)return ed(e);let t=[];for(let n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=ed(t[i])+":"+tq(e[t[i]]);return n+"}"},tF=function(e,t){let n=e.length;if(n<=t)return[e];let i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function tH(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}const tU=function(e){let t,n,i,r,s;j(!tN(e),"Invalid JSON number"),0===e?(n=0,i=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(n=(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,i=Math.round(e*Math.pow(2,52-r)-4503599627370496)):(n=0,i=Math.round(e/5e-324)));let o=[];for(s=52;s;s-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(s=11;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);o.push(t?1:0),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let e=parseInt(a.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},t$=RegExp("^-?(0*)\\d{1,10}$"),tB=function(e){if(t$.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},tj=function(e){try{e()}catch(e){setTimeout(()=>{throw tx("Exception was thrown by user callback.",e.stack||""),e},Math.floor(0))}},tW=function(e,t){let n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};/**
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
 */class tz{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){tx(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class tV{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(tT("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tx(e)}}class tK{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tK.OWNER="owner";const tY=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,tG="websocket",tQ="long_polling";/**
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
 */class tJ{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tm.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tm.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function tX(e,t,n){let i;if(j("string"==typeof t,"typeof type must == string"),j("object"==typeof n,"typeof params must == object"),t===tG)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===tQ)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(n.ns=e.namespace);let r=[];return tH(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}/**
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
 */class tZ{constructor(){this.counters_={}}incrementCounter(e,t=1){e_(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(let i in n)n.hasOwnProperty(i)&&"__proto__"!==i&&(t[i]=e(t[i],n[i]));return t}(void 0,this.counters_)}}/**
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
 */const t0={},t1={};function t2(e){let t=e.toString();return t0[t]||(t0[t]=new tZ),t0[t]}/**
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
 */class t3{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&tj(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const t5="start";class t4{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tE(e),this.stats_=t2(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),tX(t,tQ,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new t3(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),tR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new t6((...e)=>{let[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===t5)this.id=n,this.password=i;else if("close"===t)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[t5]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&tY.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){t4.forceAllow_=!0}static forceDisallow(){t4.forceDisallow_=!0}static isAvailable(){return!ea()&&(!!t4.forceAllow_||!t4.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=ed(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=tF(G(t),1840);for(let e=0;e<n.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(ea())return;this.myDisconnFrame=document.createElement("iframe");let n={};n.dframe="t",n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=ed(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class t6{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,ea())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=tv(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=t6.createIFrame_();let n="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(n='<script>document.domain="'+document.domain+'";</script>');let i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){tT("frame writing exception"),e.stack&&tT(e.stack),tT(e)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||tT("No IE domain setting required")}catch(n){let t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;)if(this.pendingSegs[0].d.length+30+n.length<=1870){let e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}else break;return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(i),n()})}addTag(e,t){ea()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{tT("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}},Math.floor(1))}}let t9=null;"undefined"!=typeof MozWebSocket?t9=MozWebSocket:"undefined"!=typeof WebSocket&&(t9=WebSocket);class t8{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tE(this.connId),this.stats_=t2(t),this.connURL=t8.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){let s={};return s.v="5",!ea()&&"undefined"!=typeof location&&location.hostname&&tY.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),tX(e,tG,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tm.set("previous_websocket_failure",!0);try{let e;if(ea()){let t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${tu}/${N.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);let n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new t9(this.connURL,[],e)}catch(t){this.log_("Error instantiating WebSocket.");let e=t.message||t.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){t8.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==t9&&!t8.forceDisallow_}static previouslyFailed(){return tm.isInMemoryStorage||!0===tm.get("previous_websocket_failure")}markConnectionHealthy(){tm.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let t=eu(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=ed(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=tF(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}t8.responsesRequiredToBeHealthy=2,t8.healthyTimeout=3e4;/**
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
 */class t7{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[t4,t8]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=t8&&t8.isAvailable(),n=t&&!t8.previouslyFailed();if(e.webSocketOnly&&(t||tx("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[t8];else{let e=this.transports_=[];for(let t of t7.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);t7.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}t7.globalTransportInitialized_=!1;class ne{constructor(e,t,n,i,r,s,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tE("c:"+this.id+":"),this.transportManager_=new t7(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));let i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=tW(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=tM("t",e),n=tM("d",e);if("c"===t)this.onSecondaryControl_(n);else if("d"===t)this.pendingDataMessages.push(n);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=tM("t",e),n=tM("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=tM("t",e);if("d"in e){let n=e.d;if("h"===t){let e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?tS("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tS("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&tx("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),tW(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):tW(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tm.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class nt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class nn{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);let i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context)){i.splice(e,1);return}}validateEventType_(e){j(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ni extends nn{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||eo()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ni}getInitialEvent(e){return j("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class nr{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ns(){return new nr("")}function no(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function na(e){return e.pieces_.length-e.pieceNum_}function nl(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new nr(e.pieces_,t)}function nh(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function nc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function nu(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new nr(t,0)}function nd(e,t){let n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof nr)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{let e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new nr(n,0)}function np(e){return e.pieceNum_>=e.pieces_.length}function nf(e,t){let n=no(e),i=no(t);if(null===n)return t;if(n===i)return nf(nl(e),nl(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function nm(e,t){if(na(e)!==na(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function n_(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(na(e)>na(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class ng{constructor(e,t){this.errorPrefix_=t,this.parts_=nc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=eE(this.parts_[e]);nv(this)}}function nv(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+ny(e))}function ny(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class nb extends nn{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new nb}getInitialEvent(e){return j("visible"===e,"Unknown event type: "+e),[this.visible_]}}class nC extends nt{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=nC.nextPersistentConnectionId_++,this.log_=tE("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ea())throw Error("Auth override specified in options, but not supported on non Node.js platforms");nb.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ni.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){let i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ed(r)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();let t=new es,n={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:n,onComplete:e=>{let n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}}),this.outstandingGetCount_++;let i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();let r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");let o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){let t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);let r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,r=>{let s=r.d,o=r.s;nC.warnOnListenWarnings_(s,t),(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&e_(e,"w")){let n=eg(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){let e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();tx(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||em(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=ef(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);let r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){let r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e.s,e.d)},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();let s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){let t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ed(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):tS("Unrecognized action received from server: "+ed(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=new Date().getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nC.nextConnectionId_++,r=this.lastSessionId,s=!1,o=null,a=function(){o?o.close():(s=!0,n())};this.realtime_={close:a,sendRequest:function(e){j(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[a,h]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?tT("getToken() completed but was canceled"):(tT("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=h&&h.token,o=new ne(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{tx(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&tx(e),a())}}}interrupt(e){tT("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){tT("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ev(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>tq(e)).join("$"):"default";let i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){let n;let i=new nr(e).toString();if(this.listens.has(i)){let e=this.listens.get(i);n=e.get(t),e.delete(t),0===e.size&&this.listens.delete(i)}else n=void 0;return n}onAuthRevoked_(e,t){tT("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){tT("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";ea()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+tu.replace(/\./g,"-")]=1,eo()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=ni.getInstance().currentlyOnline();return ev(this.interruptReasons_)&&e}}nC.nextPersistentConnectionId_=0,nC.nextConnectionId_=0;/**
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
 */class nw{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new nw(e,t)}}/**
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
 */class nI{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new nw(tL,e),i=new nw(tL,t);return 0!==this.compare(n,i)}minPost(){return nw.MIN}}class nT extends nI{static get __EMPTY_NODE(){return n}static set __EMPTY_NODE(e){n=e}compare(e,t){return tA(e.name,t.name)}isDefinedOn(e){throw W("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return nw.MIN}maxPost(){return new nw(tD,n)}makePost(e,t){return j("string"==typeof e,"KeyIndex indexValue must always be a string."),new nw(e,n)}toString(){return".key"}}const nE=new nT;/**
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
 */class nS{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class nk{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:nk.RED,this.left=null!=i?i:nx.EMPTY_NODE,this.right=null!=r?r:nx.EMPTY_NODE}copy(e,t,n,i,r){return new nk(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return nx.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,i;if(n=this,0>t(e,n.key))n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return nx.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,nk.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,nk.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){return Math.pow(2,this.check_())<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}nk.RED=!0,nk.BLACK=!1;class nx{constructor(e,t=nx.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new nx(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,nk.BLACK,null,null))}remove(e){return new nx(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,nk.BLACK,null,null))}get(e){let t;let n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty()){if(i)return i.key;return null}for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new nS(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new nS(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new nS(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new nS(this.root_,null,this.comparator_,!0,e)}}/**
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
 */function nP(e,t){return tA(e.name,t.name)}function nN(e,t){return tA(e,t)}nx.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new nk(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const nR=function(e){return"number"==typeof e?"number:"+tU(e):"string:"+e},nL=function(e){if(e.isLeafNode()){let t=e.val();j("string"==typeof t||"number"==typeof t||"object"==typeof t&&e_(t,".sv"),"Priority must be a string or number.")}else j(e===i||e.isEmpty(),"priority of unexpected type.");j(e===i||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};class nD{constructor(e,t=nD.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,j(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),nL(this.priorityNode_)}static set __childrenNodeConstructor(e){r=e}static get __childrenNodeConstructor(){return r}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nD(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nD.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return np(e)?this:".priority"===no(e)?this.priorityNode_:nD.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nD.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let n=no(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(j(".priority"!==n||1===na(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nD.__childrenNodeConstructor.EMPTY_NODE.updateChild(nl(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nR(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=tU(this.value_):e+=this.value_,this.lazyHash_=ty(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nD.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nD.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,n=typeof this.value_,i=nD.VALUE_TYPE_ORDER.indexOf(t),r=nD.VALUE_TYPE_ORDER.indexOf(n);return(j(i>=0,"Unknown leaf type: "+t),j(r>=0,"Unknown leaf type: "+n),i!==r)?r-i:"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}nD.VALUE_TYPE_ORDER=["object","boolean","number","string"];const nA=new class extends nI{compare(e,t){let n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?tA(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return nw.MIN}maxPost(){return new nw(tD,new nD("[PRIORITY-POST]",o))}makePost(e,t){return new nw(t,new nD("[PRIORITY-POST]",s(e)))}toString(){return".priority"}},nO=Math.log(2);class nM{constructor(e){this.count=parseInt(Math.log(e+1)/nO,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nq=function(e,t,n,i){e.sort(t);let r=function(t,i){let s;let o=i-t;if(0===o)return null;if(1===o)return s=e[t],new nk(n?n(s):s,s.node,nk.BLACK,null,null);{let a=parseInt(o/2,10)+t,l=r(t,a),h=r(a+1,i);return s=e[a],new nk(n?n(s):s,s.node,nk.BLACK,l,h)}};return new nx(i||t,function(t){let i=null,s=null,o=e.length,a=function(t,i){let s=o-t,a=o;o-=t;let h=r(s+1,a),c=e[s];l(new nk(n?n(c):c,c.node,i,null,h))},l=function(e){i?i.left=e:s=e,i=e};for(let e=0;e<t.count;++e){let n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,nk.BLACK):(a(i,nk.BLACK),a(i,nk.RED))}return s}(new nM(e.length)))},nF={};class nH{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return j(nF&&nA,"ChildrenNode.ts has not been loaded"),a=a||new nH({".priority":nF},{".priority":nA})}get(e){let t=eg(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof nx?t:null}hasIndex(e){return e_(this.indexSet_,e.toString())}addIndex(e,t){let n;j(e!==nE,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],r=!1,s=t.getIterator(nw.Wrap),o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();n=r?nq(i,e.getCompare()):nF;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let h=Object.assign({},this.indexes_);return h[a]=n,new nH(h,l)}addToIndexes(e,t){return new nH(ey(this.indexes_,(n,i)=>{let r=eg(this.indexSet_,i);if(j(r,"Missing index implementation for "+i),n===nF){if(!r.isDefinedOn(e.node))return nF;{let n=[],i=t.getIterator(nw.Wrap),s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),nq(n,r.getCompare())}}{let i=t.get(e.name),r=n;return i&&(r=r.remove(new nw(e.name,i))),r.insert(e,e.node)}}),this.indexSet_)}removeFromIndexes(e,t){return new nH(ey(this.indexes_,n=>{if(n===nF)return n;{let i=t.get(e.name);return i?n.remove(new nw(e.name,i)):n}}),this.indexSet_)}}class nU{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&nL(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return l||(l=new nU(new nx(nN),null,nH.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||l}updatePriority(e){return this.children_.isEmpty()?this:new nU(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?l:t}}getChild(e){let t=no(e);return null===t?this:this.getImmediateChild(t).getChild(nl(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(j(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let n,i;let r=new nw(e,t);t.isEmpty()?(n=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(n=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));let s=n.isEmpty()?l:this.priorityNode_;return new nU(n,s,i)}}updateChild(e,t){let n=no(e);if(null===n)return t;{j(".priority"!==no(e)||1===na(e),".priority must be the last token in a path");let i=this.getImmediateChild(n).updateChild(nl(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},n=0,i=0,r=!0;if(this.forEachChild(nA,(s,o)=>{t[s]=o.val(e),n++,r&&nU.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),e||!r||!(i<2*n))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let e=[];for(let n in t)e[n]=t[n];return e}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+nR(this.getPriority().val())+":"),this.forEachChild(nA,(t,n)=>{let i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":ty(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let i=this.resolveIndex_(n);if(!i)return this.children_.getPredecessorKey(e);{let n=i.getPredecessorKey(new nw(e,t));return n?n.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let e=t.minKey();return e&&e.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new nw(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let e=t.maxKey();return e&&e.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new nw(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let n=this.children_.getIteratorFrom(e.name,nw.Wrap),i=n.peek();for(;null!=i&&0>t.compare(i,e);)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let n=this.children_.getReverseIteratorFrom(e.name,nw.Wrap),i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===n$?-1:0}withIndex(e){if(e===nE||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new nU(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===nE||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(nA),n=e.getIterator(nA),i=t.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=n.getNext()}return null===i&&null===r}}resolveIndex_(e){return e===nE?null:this.indexMap_.get(e.toString())}}nU.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const n$=new class extends nU{constructor(){super(new nx(nN),nU.EMPTY_NODE,nH.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return nU.EMPTY_NODE}isEmpty(){return!1}};function nB(e,t=null){if(null===e)return nU.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),j(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new nD(e,nB(t));if(e instanceof Array){let n=nU.EMPTY_NODE;return tH(e,(t,i)=>{if(e_(e,t)&&"."!==t.substring(0,1)){let e=nB(i);(e.isLeafNode()||!e.isEmpty())&&(n=n.updateImmediateChild(t,e))}}),n.updatePriority(nB(t))}{let n=[],i=!1;if(tH(e,(e,t)=>{if("."!==e.substring(0,1)){let r=nB(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new nw(e,r)))}}),0===n.length)return nU.EMPTY_NODE;let r=nq(n,nP,e=>e.name,nN);if(!i)return new nU(r,nB(t),nH.Default);{let e=nq(n,nA.getCompare());return new nU(r,nB(t),new nH({".priority":e},{".priority":nA}))}}}Object.defineProperties(nw,{MIN:{value:new nw(tL,nU.EMPTY_NODE)},MAX:{value:new nw(tD,n$)}}),nT.__EMPTY_NODE=nU.EMPTY_NODE,nD.__childrenNodeConstructor=nU,i=n$,o=n$,s=nB;/**
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
 */class nj extends nI{constructor(e){super(),this.indexPath_=e,j(!np(e)&&".priority"!==no(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?tA(e.name,t.name):r}makePost(e,t){let n=nB(e);return new nw(t,nU.EMPTY_NODE.updateChild(this.indexPath_,n))}maxPost(){return new nw(tD,nU.EMPTY_NODE.updateChild(this.indexPath_,n$))}toString(){return nc(this.indexPath_,0).join("/")}}const nW=new /**
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
 */class extends nI{compare(e,t){let n=e.node.compareTo(t.node);return 0===n?tA(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return nw.MIN}maxPost(){return nw.MAX}makePost(e,t){return new nw(t,nB(e))}toString(){return".value"}};/**
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
 */function nz(e){return{type:"value",snapshotNode:e}}function nV(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function nK(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function nY(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}/**
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
 */class nG{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(nK(t,o)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(nV(t,n)):s.trackChildChange(nY(t,n,o))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return null==n||(e.isLeafNode()||e.forEachChild(nA,(e,i)=>{t.hasChild(e)||n.trackChildChange(nK(e,i))}),t.isLeafNode()||t.forEachChild(nA,(t,i)=>{if(e.hasChild(t)){let r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(nY(t,i,r))}else n.trackChildChange(nV(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?nU.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class nQ{constructor(e){this.indexedFilter_=new nG(e.getIndex()),this.index_=e.getIndex(),this.startPost_=nQ.getStartPost_(e),this.endPost_=nQ.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?0>=this.index_.compare(this.getStartPost(),e):0>this.index_.compare(this.getStartPost(),e),n=this.endIsInclusive_?0>=this.index_.compare(e,this.getEndPost()):0>this.index_.compare(e,this.getEndPost());return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new nw(t,n))||(n=nU.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=nU.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(nU.EMPTY_NODE);let r=this;return t.forEachChild(nA,(e,t)=>{r.matches(new nw(e,t))||(i=i.updateImmediateChild(e,nU.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(!e.hasStart())return e.getIndex().minPost();{let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}}static getEndPost_(e){if(!e.hasEnd())return e.getIndex().maxPost();{let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}}}/**
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
 */class nJ{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{let t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{let t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new nQ(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return(this.rangedFilter_.matches(new nw(t,n))||(n=nU.EMPTY_NODE),e.getImmediateChild(t).equals(n))?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=nU.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=nU.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){let t=e.getNext();if(this.withinDirectionalStart(t)){if(this.withinDirectionalEnd(t))i=i.updateImmediateChild(t.name,t.node),n++;else break}}}else{let e;i=(i=t.withIndex(this.index_)).updatePriority(nU.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){let t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,nU.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){let e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();j(e.numChildren()===this.limit_,"");let o=new nw(t,n),a=this.reverse_?e.getFirstChild(this.index_):e.getLastChild(this.index_),l=this.rangedFilter_.matches(o);if(e.hasChild(t)){let h=e.getImmediateChild(t),c=i.getChildAfterChild(this.index_,a,this.reverse_);for(;null!=c&&(c.name===t||e.hasChild(c.name));)c=i.getChildAfterChild(this.index_,c,this.reverse_);let u=null==c?1:s(c,o);if(l&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(nY(t,n,h)),e.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(nK(t,h));let n=e.updateImmediateChild(t,nU.EMPTY_NODE);return null!=c&&this.rangedFilter_.matches(c)?(null!=r&&r.trackChildChange(nV(c.name,c.node)),n.updateImmediateChild(c.name,c.node)):n}}return n.isEmpty()?e:l&&s(a,o)>=0?(null!=r&&(r.trackChildChange(nK(a.name,a.node)),r.trackChildChange(nV(t,n))),e.updateImmediateChild(t,n).updateImmediateChild(a.name,nU.EMPTY_NODE)):e}}/**
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
 */class nX{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=nA}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(j(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:tL}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(j(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:tD}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===nA}copy(){let e=new nX;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function nZ(e){let t;let n={};if(e.isDefault())return n;if(e.index_===nA?t="$priority":e.index_===nW?t="$value":e.index_===nE?t="$key":(j(e.index_ instanceof nj,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=ed(t),e.startSet_){let t=e.startAfterSet_?"startAfter":"startAt";n[t]=ed(e.indexStartValue_),e.startNameSet_&&(n[t]+=","+ed(e.indexStartName_))}if(e.endSet_){let t=e.endBeforeSet_?"endBefore":"endAt";n[t]=ed(e.indexEndValue_),e.endNameSet_&&(n[t]+=","+ed(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function n0(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==nA&&(t.i=e.index_.toString()),t}/**
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
 */class n1 extends nt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=tE("p:rest:"),this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let s=n1.getListenId_(e,n),o={};this.listens_[s]=o;let a=nZ(e._queryParams);this.restRequest_(r+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),eg(this.listens_,s)===o&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let n=n1.getListenId_(e,t);delete this.listens_[n]}get(e){let t=nZ(e._queryParams),n=e._path.toString(),i=new es;return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+/**
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
 */function(e){let t=[];for(let[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=eu(o.responseText)}catch(e){tx("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&tx("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()})}}/**
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
 */class n2{constructor(){this.rootNode_=nU.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function n3(){return{value:null,children:new Map}}function n5(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}(e,(e,i)=>{n5(i,new nr(t.toString()+"/"+e),n)})}/**
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
 */class n4{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&tH(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}class n6{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new n4(e),tW(this.reportStats_.bind(this),Math.floor(1e4+2e4*Math.random()))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;tH(e,(e,i)=>{i>0&&e_(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),tW(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function n9(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function n8(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function n7(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(g=w||(w={}))[g.OVERWRITE=0]="OVERWRITE",g[g.MERGE=1]="MERGE",g[g.ACK_USER_WRITE=2]="ACK_USER_WRITE",g[g.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
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
 */class ie{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=w.ACK_USER_WRITE,this.source=n9()}operationForChild(e){if(!np(this.path))return j(no(this.path)===e,"operationForChild called for unrelated child."),new ie(nl(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new nr(e));return new ie(ns(),t,this.revert)}}}/**
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
 */class it{constructor(e,t){this.source=e,this.path=t,this.type=w.LISTEN_COMPLETE}operationForChild(e){return np(this.path)?new it(this.source,ns()):new it(this.source,nl(this.path))}}/**
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
 */class ii{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=w.OVERWRITE}operationForChild(e){return np(this.path)?new ii(this.source,ns(),this.snap.getImmediateChild(e)):new ii(this.source,nl(this.path),this.snap)}}/**
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
 */class ir{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=w.MERGE}operationForChild(e){if(!np(this.path))return j(no(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ir(this.source,nl(this.path),this.children);{let t=this.children.subtree(new nr(e));return t.isEmpty()?null:t.value?new ii(this.source,ns(),t.value):new ir(this.source,ns(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class is{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(np(e))return this.isFullyInitialized()&&!this.filtered_;let t=no(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class io{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ia(e,t,n,i,r,s){let o=i.filter(e=>e.type===n);o.sort((t,n)=>(function(e,t,n){if(null==t.childName||null==n.childName)throw W("Should only compare child_ events.");let i=new nw(t.childName,t.snapshotNode),r=new nw(n.childName,n.snapshotNode);return e.index_.compare(i,r)})(e,t,n)),o.forEach(n=>{let i=("value"===n.type||"child_removed"===n.type||(n.prevName=s.getPredecessorChildName(n.childName,n.snapshotNode,e.index_)),n);r.forEach(r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))})})}/**
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
 */function il(e,t){return{eventCache:e,serverCache:t}}function ih(e,t,n,i){return il(new is(t,n,i),e.serverCache)}function ic(e,t,n,i){return il(e.eventCache,new is(t,n,i))}function iu(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function id(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}const ip=()=>(h||(h=new nx(tO)),h);class im{constructor(e,t=ip()){this.value=e,this.children=t}static fromObject(e){let t=new im(null);return tH(e,(e,n)=>{t=t.set(new nr(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ns(),value:this.value};if(np(e))return null;{let n=no(e),i=this.children.get(n);if(null===i)return null;{let r=i.findRootMostMatchingPathAndValue(nl(e),t);return null!=r?{path:nd(new nr(n),r.path),value:r.value}:null}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(np(e))return this;{let t=no(e),n=this.children.get(t);return null!==n?n.subtree(nl(e)):new im(null)}}set(e,t){if(np(e))return new im(t,this.children);{let n=no(e),i=(this.children.get(n)||new im(null)).set(nl(e),t),r=this.children.insert(n,i);return new im(this.value,r)}}remove(e){if(np(e))return this.children.isEmpty()?new im(null):new im(null,this.children);{let t=no(e),n=this.children.get(t);if(!n)return this;{let i;let r=n.remove(nl(e));return(i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty())?new im(null):new im(this.value,i)}}}get(e){if(np(e))return this.value;{let t=no(e),n=this.children.get(t);return n?n.get(nl(e)):null}}setTree(e,t){if(np(e))return t;{let n;let i=no(e),r=(this.children.get(i)||new im(null)).setTree(nl(e),t);return n=r.isEmpty()?this.children.remove(i):this.children.insert(i,r),new im(this.value,n)}}fold(e){return this.fold_(ns(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(nd(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ns(),t)}findOnPath_(e,t,n){let i=!!this.value&&n(t,this.value);if(i)return i;if(np(e))return null;{let i=no(e),r=this.children.get(i);return r?r.findOnPath_(nl(e),nd(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ns(),t)}foreachOnPath_(e,t,n){if(np(e))return this;{this.value&&n(t,this.value);let i=no(e),r=this.children.get(i);return r?r.foreachOnPath_(nl(e),nd(t,i),n):new im(null)}}foreach(e){this.foreach_(ns(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(nd(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
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
 */class i_{constructor(e){this.writeTree_=e}static empty(){return new i_(new im(null))}}function ig(e,t,n){if(np(t))return new i_(new im(n));{let i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){let r=i.path,s=i.value,o=nf(r,t);return s=s.updateChild(o,n),new i_(e.writeTree_.set(r,s))}{let i=new im(n);return new i_(e.writeTree_.setTree(t,i))}}}function iv(e,t,n){let i=e;return tH(n,(e,n)=>{i=ig(i,nd(t,e),n)}),i}function iy(e,t){return np(t)?i_.empty():new i_(e.writeTree_.setTree(t,new im(null)))}function ib(e,t){return null!=iC(e,t)}function iC(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(nf(n.path,t)):null}function iw(e){let t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(nA,(e,n)=>{t.push(new nw(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new nw(e,n.value))}),t}function iI(e,t){if(np(t))return e;{let n=iC(e,t);return new i_(null!=n?new im(n):e.writeTree_.subtree(t))}}function iT(e){return e.writeTree_.isEmpty()}function iE(e,t){return function e(t,n,i){if(null!=n.value)return i.updateChild(t,n.value);{let r=null;return n.children.inorderTraversal((n,s)=>{".priority"===n?(j(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):i=e(nd(t,n),s,i)}),i.getChild(t).isEmpty()||null===r||(i=i.updateChild(nd(t,".priority"),r)),i}}(ns(),e.writeTree_,t)}function iS(e){return e.visible}function ik(e,t,n){let i=i_.empty();for(let r=0;r<e.length;++r){let s=e[r];if(t(s)){let e;let t=s.path;if(s.snap)n_(n,t)?i=ig(i,e=nf(n,t),s.snap):n_(t,n)&&(e=nf(t,n),i=ig(i,ns(),s.snap.getChild(e)));else if(s.children){if(n_(n,t))i=iv(i,e=nf(n,t),s.children);else if(n_(t,n)){if(np(e=nf(t,n)))i=iv(i,ns(),s.children);else{let t=eg(s.children,no(e));if(t){let n=t.getChild(nl(e));i=ig(i,ns(),n)}}}}else throw W("WriteRecord should have .snap or .children")}}return i}function ix(e,t,n,i,r){if(i||r){let s=iI(e.visibleWrites,t);return!r&&iT(s)?n:r||null!=n||ib(s,ns())?iE(ik(e.allWrites,function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(n_(e.path,t)||n_(t,e.path))},t),n||nU.EMPTY_NODE):null}{let i=iC(e.visibleWrites,t);if(null!=i)return i;{let i=iI(e.visibleWrites,t);return iT(i)?n:null!=n||ib(i,ns())?iE(i,n||nU.EMPTY_NODE):null}}}function iP(e,t,n,i){return ix(e.writeTree,e.treePath,t,n,i)}function iN(e,t){return function(e,t,n){let i=nU.EMPTY_NODE,r=iC(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(nA,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(!n)return iw(iI(e.visibleWrites,t)).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i;{let r=iI(e.visibleWrites,t);return n.forEachChild(nA,(e,t)=>{let n=iE(iI(r,new nr(e)),t);i=i.updateImmediateChild(e,n)}),iw(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}(e.writeTree,e.treePath,t)}function iR(e,t,n,i){return function(e,t,n,i,r){j(i||r,"Either existingEventSnap or existingServerSnap must exist");let s=nd(t,n);if(ib(e.visibleWrites,s))return null;{let t=iI(e.visibleWrites,s);return iT(t)?r.getChild(n):iE(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function iL(e,t){var n,i;return n=e.writeTree,i=nd(e.treePath,t),iC(n.visibleWrites,i)}function iD(e,t,n){return function(e,t,n,i){let r=nd(t,n),s=iC(e.visibleWrites,r);return null!=s?s:i.isCompleteForChild(n)?iE(iI(e.visibleWrites,r),i.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function iA(e,t){return iO(nd(e.treePath,t),e.writeTree)}function iO(e,t){return{treePath:e,writeTree:t}}/**
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
 */class iM{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;j("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),j(".priority"!==n,"Only non-priority child changes can be tracked.");let i=this.changeMap.get(n);if(i){let r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,nY(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,nK(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,nV(n,e.snapshotNode));else if("child_changed"===t&&"child_changed"===r)this.changeMap.set(n,nY(n,e.snapshotNode,i.oldSnap));else throw W("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}const iq=new /**
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
 */class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class iF{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=null!=this.optCompleteServerCache_?new is(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return iD(this.writes_,e,t)}}getChildAfterChild(e,t,n){var i;let r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:id(this.viewCache_),s=function(e,t,n,i,r,s,o){let a;let l=iI(e.visibleWrites,t),h=iC(l,ns());if(null!=h)a=h;else{if(null==n)return[];a=iE(l,n)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),r=n.getNext();for(;r&&e.length<1;)0!==t(r,i)&&e.push(r),r=n.getNext();return e}}((i=this.writes_).writeTree,i.treePath,r,t,0,n,e);return 0===s.length?null:s[0]}}function iH(e,t,n,i,r,s){let o=t.eventCache;if(null!=iL(i,n))return t;{let a,l;if(np(n)){if(j(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let n=id(t),r=iN(i,n instanceof nU?n:nU.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{let n=iP(i,id(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}}else{let h=no(n);if(".priority"===h){j(1===na(n),"Can't have a priority with additional path components");let r=o.getNode(),s=iR(i,n,r,l=t.serverCache.getNode());a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{let c;let u=nl(n);if(o.isCompleteForChild(h)){l=t.serverCache.getNode();let e=iR(i,n,o.getNode(),l);c=null!=e?o.getNode().getImmediateChild(h).updateChild(u,e):o.getNode().getImmediateChild(h)}else c=iD(i,h,t.serverCache);a=null!=c?e.filter.updateChild(o.getNode(),h,c,u,r,s):o.getNode()}}return ih(t,a,o.isFullyInitialized()||np(n),e.filter.filtersNodes())}}function iU(e,t,n,i,r,s,o,a){let l;let h=t.serverCache,c=o?e.filter:e.filter.getIndexedFilter();if(np(n))l=c.updateFullNode(h.getNode(),i,null);else if(c.filtersNodes()&&!h.isFiltered()){let e=h.getNode().updateChild(n,i);l=c.updateFullNode(h.getNode(),e,null)}else{let e=no(n);if(!h.isCompleteForPath(n)&&na(n)>1)return t;let r=nl(n),s=h.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?c.updatePriority(h.getNode(),s):c.updateChild(h.getNode(),e,s,r,iq,null)}let u=ic(t,l,h.isFullyInitialized()||np(n),c.filtersNodes()),d=new iF(r,u,s);return iH(e,u,n,r,d,a)}function i$(e,t,n,i,r,s,o){let a,l;let h=t.eventCache,c=new iF(r,t,s);if(np(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),a=ih(t,l,!0,e.filter.filtersNodes());else{let r=no(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),a=ih(t,l,h.isFullyInitialized(),h.isFiltered());else{let s;let l=nl(n),u=h.getNode().getImmediateChild(r);if(np(l))s=i;else{let e=c.getCompleteChild(r);s=null!=e?".priority"===nh(l)&&e.getChild(nu(l)).isEmpty()?e:e.updateChild(l,i):nU.EMPTY_NODE}a=u.equals(s)?t:ih(t,e.filter.updateChild(h.getNode(),r,s,l,c,o),h.isFullyInitialized(),e.filter.filtersNodes())}}return a}function iB(e,t){return e.eventCache.isCompleteForChild(t)}function ij(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function iW(e,t,n,i,r,s,o,a){let l;if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t;l=np(n)?i:new im(null).setTree(n,i);let c=t.serverCache.getNode();return l.children.inorderTraversal((n,i)=>{if(c.hasChild(n)){let l=ij(e,t.serverCache.getNode().getImmediateChild(n),i);h=iU(e,h,new nr(n),l,r,s,o,a)}}),l.children.inorderTraversal((n,i)=>{let l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!c.hasChild(n)&&!l){let l=ij(e,t.serverCache.getNode().getImmediateChild(n),i);h=iU(e,h,new nr(n),l,r,s,o,a)}}),h}/**
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
 */class iz{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let n=this.query_._queryParams,i=new nG(n.getIndex()),r=n.loadsAllData()?new nG(n.getIndex()):n.hasLimit()?new nJ(n):new nQ(n);this.processor_={filter:r};let s=t.serverCache,o=t.eventCache,a=i.updateFullNode(nU.EMPTY_NODE,s.getNode(),null),l=r.updateFullNode(nU.EMPTY_NODE,o.getNode(),null),h=new is(a,s.isFullyInitialized(),i.filtersNodes()),c=new is(l,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=il(c,h),this.eventGenerator_=new io(this.query_)}get query(){return this.query_}}function iV(e){return 0===e.eventRegistrations_.length}function iK(e,t,n){let i=[];if(n){j(null==t,"A cancel should cancel all event registrations.");let r=e.query._path;e.eventRegistrations_.forEach(e=>{let t=e.createCancelEvent(n,r);t&&i.push(t)})}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){let r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function iY(e,t,n,i){var r,s;t.type===w.MERGE&&null!==t.source.queryId&&(j(id(e.viewCache_),"We should always have a full cache before handling merges"),j(iu(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,n,i,r){let s,o;let a=new iM;if(n.type===w.OVERWRITE)n.source.fromUser?s=i$(e,t,n.path,n.snap,i,r,a):(j(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered()&&!np(n.path),s=iU(e,t,n.path,n.snap,i,r,o,a));else if(n.type===w.MERGE){var l,h;let c;n.source.fromUser?(l=n.path,h=n.children,c=t,h.foreach((n,s)=>{let o=nd(l,n);iB(t,no(o))&&(c=i$(e,c,o,s,i,r,a))}),h.foreach((n,s)=>{let o=nd(l,n);iB(t,no(o))||(c=i$(e,c,o,s,i,r,a))}),s=c):(j(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered(),s=iW(e,t,n.path,n.children,i,r,o,a))}else if(n.type===w.ACK_USER_WRITE)s=n.revert?function(e,t,n,i,r,s){let o;if(null!=iL(i,n))return t;{let a;let l=new iF(i,t,r),h=t.eventCache.getNode();if(np(n)||".priority"===no(n)){let n;if(t.serverCache.isFullyInitialized())n=iP(i,id(t));else{let e=t.serverCache.getNode();j(e instanceof nU,"serverChildren would be complete if leaf node"),n=iN(i,e)}a=e.filter.updateFullNode(h,n,s)}else{let r=no(n),c=iD(i,r,t.serverCache);null==c&&t.serverCache.isCompleteForChild(r)&&(c=h.getImmediateChild(r)),(a=null!=c?e.filter.updateChild(h,r,c,nl(n),l,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(h,r,nU.EMPTY_NODE,nl(n),l,s):h).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=iP(i,id(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,s))}return o=t.serverCache.isFullyInitialized()||null!=iL(i,ns()),ih(t,a,o,e.filter.filtersNodes())}}(e,t,n.path,i,r,a):function(e,t,n,i,r,s,o){if(null!=iL(r,n))return t;let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(np(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return iU(e,t,n,l.getNode().getChild(n),r,s,a,o);if(!np(n))return t;{let i=new im(null);return l.getNode().forEachChild(nE,(e,t)=>{i=i.set(new nr(e),t)}),iW(e,t,n,i,r,s,a,o)}}{let h=new im(null);return i.foreach((e,t)=>{let i=nd(n,e);l.isCompleteForPath(i)&&(h=h.set(e,l.getNode().getChild(i)))}),iW(e,t,n,h,r,s,a,o)}}(e,t,n.path,n.affectedTree,i,r,a);else if(n.type===w.LISTEN_COMPLETE)s=function(e,t,n,i,r){let s=t.serverCache;return iH(e,ic(t,s.getNode(),s.isFullyInitialized()||np(n),s.isFiltered()),n,i,iq,r)}(e,t,n.path,i,a);else throw W("Unknown operation type: "+n.type);let c=a.getChanges();return function(e,t,n){let i=t.eventCache;if(i.isFullyInitialized()){let r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=iu(e);!(n.length>0)&&e.eventCache.isFullyInitialized()&&(!r||i.getNode().equals(s))&&i.getNode().getPriority().equals(s.getPriority())||n.push(nz(iu(t)))}}(t,s,c),{viewCache:s,changes:c}}(e.processor_,o,t,n,i);return r=e.processor_,j((s=a.viewCache).eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),j(s.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),j(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,iG(e,a.changes,a.viewCache.eventCache.getNode(),null)}function iG(e,t,n,i){let r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){let r=[],s=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var n;s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))}}),ia(e,r,"child_removed",t,i,n),ia(e,r,"child_added",t,i,n),ia(e,r,"child_moved",s,i,n),ia(e,r,"child_changed",t,i,n),ia(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}class iQ{constructor(){this.views=new Map}}function iJ(e,t,n,i){let r=t.source.queryId;if(null!==r){let s=e.views.get(r);return j(null!=s,"SyncTree gave us an op for an invalid query."),iY(s,t,n,i)}{let r=[];for(let s of e.views.values())r=r.concat(iY(s,t,n,i));return r}}function iX(e,t,n,i,r){let s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=iP(n,r?i:null),s=!1;return e?s=!0:(e=i instanceof nU?iN(n,i):nU.EMPTY_NODE,s=!1),new iz(t,il(new is(e,s,!1),new is(i,r,!1)))}return o}function iZ(e){let t=[];for(let n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function i0(e,t){let n=null;for(let i of e.views.values())n=n||function(e,t){let n=id(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!np(t)&&!n.getImmediateChild(no(t)).isEmpty())?n.getChild(t):null}(i,t);return n}function i1(e,t){if(t._queryParams.loadsAllData())return i3(e);{let n=t._queryIdentifier;return e.views.get(n)}}function i2(e){return null!=i3(e)}function i3(e){for(let t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}let i5=1;class i4{constructor(e){this.listenProvider_=e,this.syncPointTree_=new im(null),this.pendingWriteTree_={visibleWrites:i_.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function i6(e,t,n,i,r){var s,o;return(s=e.pendingWriteTree_,o=r,j(i>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),s.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(s.visibleWrites=ig(s.visibleWrites,t,n)),s.lastWriteId=i,r)?rn(e,new ii(n9(),t,n)):[]}function i9(e,t,n=!1){let i=function(e,t){for(let n=0;n<e.allWrites.length;n++){let i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(!function(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);j(n>=0,"removeWrite called with nonexistent writeId.");let i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=n&&function(e,t){if(e.snap)return n_(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&n_(nd(e.path,n),t))return!0;return!1}(t,i.path)?r=!1:n_(i.path,t.path)&&(s=!0)),o--}return!!r&&(s?(e.visibleWrites=ik(e.allWrites,iS,ns()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1):i.snap?e.visibleWrites=iy(e.visibleWrites,i.path):tH(i.children,t=>{e.visibleWrites=iy(e.visibleWrites,nd(i.path,t))}),!0)}(e.pendingWriteTree_,t))return[];{let t=new im(null);return null!=i.snap?t=t.set(ns(),!0):tH(i.children,e=>{t=t.set(new nr(e),!0)}),rn(e,new ie(i.path,t,n))}}function i8(e,t,n){return rn(e,new ii(n8(),t,n))}function i7(e,t,n,i,r=!1){let s=t._path,o=e.syncPointTree_.get(s),a=[];if(o&&("default"===t._queryIdentifier||null!=i1(o,t))){let l=function(e,t,n,i){let r=t._queryIdentifier,s=[],o=[],a=i2(e);if("default"===r)for(let[t,r]of e.views.entries())o=o.concat(iK(r,n,i)),iV(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{let t=e.views.get(r);t&&(o=o.concat(iK(t,n,i)),iV(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!i2(e)&&s.push(new(j(c,"Reference.ts has not been loaded"),c)(t._repo,t._path)),{removed:s,events:o}}(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));let h=l.removed;if(a=l.events,!r){let n=-1!==h.findIndex(e=>e._queryParams.loadsAllData()),r=e.syncPointTree_.findOnPath(s,(e,t)=>i2(t));if(n&&!r){let t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){let n=t.fold((e,t,n)=>{if(t&&i2(t))return[i3(t)];{let e=[];return t&&(e=iZ(t)),tH(n,(t,n)=>{e=e.concat(n)}),e}});for(let t=0;t<n.length;++t){let i=n[t],r=i.query,s=ri(e,i);e.listenProvider_.startListening(rh(r),rr(e,r),s.hashFn,s.onComplete)}}}r||!(h.length>0)||i||(n?e.listenProvider_.stopListening(rh(t),null):h.forEach(t=>{let n=e.queryToTagMap.get(rs(t));e.listenProvider_.stopListening(rh(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){let i=t[n];if(!i._queryParams.loadsAllData()){let t=rs(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,h)}return a}function re(e,t,n,i){let r=ro(e,i);if(null==r)return[];{let i=ra(r),s=i.path,o=i.queryId,a=nf(s,t);return rl(e,s,new ii(n7(o),a,n))}}function rt(e,t,n){let i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,n)=>{let i=i0(n,nf(e,t));if(i)return i});return ix(i,t,r,n,!0)}function rn(e,t){var n;return function e(t,n,i,r){if(np(t.path))return function e(t,n,i,r){let s=n.get(ns());null==i&&null!=s&&(i=i0(s,ns()));let o=[];return n.children.inorderTraversal((n,s)=>{let a=i?i.getImmediateChild(n):null,l=iA(r,n),h=t.operationForChild(n);h&&(o=o.concat(e(h,s,a,l)))}),s&&(o=o.concat(iJ(s,t,r,i))),o}(t,n,i,r);{let s=n.get(ns());null==i&&null!=s&&(i=i0(s,ns()));let o=[],a=no(t.path),l=t.operationForChild(a),h=n.children.get(a);if(h&&l){let t=i?i.getImmediateChild(a):null,n=iA(r,a);o=o.concat(e(l,h,t,n))}return s&&(o=o.concat(iJ(s,t,r,i))),o}}(t,e.syncPointTree_,null,(n=e.pendingWriteTree_,iO(ns(),n)))}function ri(e,t){let n=t.query,i=rr(e,n);return{hashFn:()=>(t.viewCache_.serverCache.getNode()||nU.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t){var r;return i?function(e,t,n){let i=ro(e,n);if(!i)return[];{let n=ra(i),r=n.path,s=n.queryId,o=nf(r,t);return rl(e,r,new it(n7(s),o))}}(e,n._path,i):(r=n._path,rn(e,new it(n8(),r)))}{let i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");let i=Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return i7(e,n,null,i)}}}}function rr(e,t){let n=rs(t);return e.queryToTagMap.get(n)}function rs(e){return e._path.toString()+"$"+e._queryIdentifier}function ro(e,t){return e.tagToQueryMap.get(t)}function ra(e){let t=e.indexOf("$");return j(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new nr(e.substr(0,t))}}function rl(e,t,n){let i=e.syncPointTree_.get(t);return j(i,"Missing sync point for query tag that we're tracking"),iJ(i,n,iO(t,e.pendingWriteTree_),null)}function rh(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(j(u,"Reference.ts has not been loaded"),u)(e._repo,e._path):e}/**
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
 */class rc{constructor(e){this.node_=e}getImmediateChild(e){return new rc(this.node_.getImmediateChild(e))}node(){return this.node_}}class ru{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=nd(this.path_,e);return new ru(this.syncTree_,t)}node(){return rt(this.syncTree_,this.path_)}}const rd=function(e,t,n){return e&&"object"==typeof e?(j(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?rp(e[".sv"],t,n):"object"==typeof e[".sv"]?rf(e[".sv"],t):void j(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},rp=function(e,t,n){if("timestamp"===e)return n.timestamp;j(!1,"Unexpected server value: "+e)},rf=function(e,t,n){e.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let i=e.increment;"number"!=typeof i&&j(!1,"Unexpected increment value: "+i);let r=t.node();if(j(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;let s=r.getValue();return"number"!=typeof s?i:s+i},rm=function(e,t,n){return r_(e,new rc(t),n)};function r_(e,t,n){let i;let r=rd(e.getPriority().val(),t.getImmediateChild(".priority"),n);if(!e.isLeafNode())return i=e,r!==e.getPriority().val()&&(i=i.updatePriority(new nD(r))),e.forEachChild(nA,(e,r)=>{let s=r_(r,t.getImmediateChild(e),n);s!==r&&(i=i.updateImmediateChild(e,s))}),i;{let i=rd(e.getValue(),t,n);return i!==e.getValue()||r!==e.getPriority().val()?new nD(i,nB(r)):e}}/**
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
 */class rg{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function rv(e,t){let n=t instanceof nr?t:new nr(t),i=e,r=no(n);for(;null!==r;){let e=eg(i.node.children,r)||{children:{},childCount:0};i=new rg(r,i,e),r=no(n=nl(n))}return i}function ry(e){return e.node.value}function rb(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,n,i){let r=void 0===ry(i)&&!rC(i),s=e_(t.node.children,n);r&&s?(delete t.node.children[n],t.node.childCount--,e(t)):r||s||(t.node.children[n]=i.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function rC(e){return e.node.childCount>0}function rw(e,t){tH(e.node.children,(n,i)=>{t(new rg(n,e,i))})}function rI(e){return new nr(null===e.parent?e.name:rI(e.parent)+"/"+e.name)}/**
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
 */const rT=/[\[\].#$\/\u0000-\u001F\u007F]/,rE=/[\[\].#$\u0000-\u001F\u007F]/,rS=function(e){return"string"==typeof e&&0!==e.length&&!rT.test(e)},rk=function(e){return"string"==typeof e&&0!==e.length&&!rE.test(e)},rx=function(e,t,n,i){i&&void 0===t||rP(eI(e,"value"),t,n)},rP=function(e,t,n){let i=n instanceof nr?new ng(n,e):n;if(void 0===t)throw Error(e+"contains undefined "+ny(i));if("function"==typeof t)throw Error(e+"contains a function "+ny(i)+" with contents = "+t.toString());if(tN(t))throw Error(e+"contains "+t.toString()+" "+ny(i));if("string"==typeof t&&t.length>10485760/3&&eE(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+ny(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(tH(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!rS(t)))throw Error(e+" contains an invalid key ("+t+") "+ny(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(t),i.byteLength_+=eE(t),nv(i),rP(e,s,i),function(e){let t=e.parts_.pop();e.byteLength_-=eE(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)}),n&&r)throw Error(e+' contains ".value" child '+ny(i)+" in addition to actual children.")}},rN=function(e,t,n,i){if((!i||void 0!==n)&&!rk(n))throw Error(eI(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},rR=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rN(e,t,n,i)},rL=function(e,t){if(".info"===no(t))throw Error(e+" failed = Can't modify data under /.info/")},rD=function(e,t){var n;let i=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!rS(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==i.length&&((n=i)&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),!rk(n)))throw Error(eI(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
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
 */class rA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rO(e,t){let n=null;for(let i=0;i<t.length;i++){let r=t[i],s=r.getPath();null===n||nm(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function rM(e,t,n){rO(e,n),function(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){let r=e.eventLists_[i];r&&(t(r.path)?(function(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(null!==n){e.events[t]=null;let i=n.getEventRunner();tC&&tT("event: "+n.toString()),tj(i)}}}(e.eventLists_[i]),e.eventLists_[i]=null):n=!1)}n&&(e.eventLists_=[]),e.recursionDepth_--}(e,e=>n_(e,t)||n_(t,e))}class rq{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=n3(),this.transactionQueueTree_=new rg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rF(e){let t=e.infoData_.getNode(new nr(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function rH(e){var t;return(t=t={timestamp:rF(e)}).timestamp=t.timestamp||new Date().getTime(),t}function rU(e,t,n,i,r){e.dataUpdateCount++;let s=new nr(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r){if(i){let t=ey(n,e=>nB(e));o=function(e,t,n,i){let r=ro(e,i);if(!r)return[];{let i=ra(r),s=i.path,o=i.queryId,a=nf(s,t),l=im.fromObject(n);return rl(e,s,new ir(n7(o),a,l))}}(e.serverSyncTree_,s,t,r)}else{let t=nB(n);o=re(e.serverSyncTree_,s,t,r)}}else if(i){let t=ey(n,e=>nB(e));o=function(e,t,n){let i=im.fromObject(n);return rn(e,new ir(n8(),t,i))}(e.serverSyncTree_,s,t)}else{let t=nB(n);o=i8(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=rV(e,s)),rM(e.eventQueue_,a,o)}function r$(e,t){rB(e,"connected",t),!1===t&&function(e){rW(e,"onDisconnectEvents");let t=rH(e),n=n3();n5(e.onDisconnect_,ns(),(i,r)=>{let s=r_(r,new ru(e.serverSyncTree_,i),t);!function e(t,n,i){if(np(n))t.value=i,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(n,i);else{let r=no(n);t.children.has(r)||t.children.set(r,n3()),e(t.children.get(r),n=nl(n),i)}}(n,i,s)});let i=[];n5(n,ns(),(t,n)=>{i=i.concat(i8(e.serverSyncTree_,t,n));let r=rQ(e,t);rV(e,r)}),e.onDisconnect_=n3(),rM(e.eventQueue_,ns(),i)}(e)}function rB(e,t,n){let i=new nr("/.info/"+t),r=nB(n);e.infoData_.updateSnapshot(i,r);let s=i8(e.infoSyncTree_,i,r);rM(e.eventQueue_,i,s)}function rj(e){return e.nextWriteId_++}function rW(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),tT(n,...t)}function rz(e,t,n){return rt(e.serverSyncTree_,t,n)||nU.EMPTY_NODE}function rV(e,t){let n=rK(e,t),i=rI(n),r=rY(e,n);return function(e,t,n){if(0===t.length)return;let i=[],r=[],s=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let o=0;o<t.length;o++){let a=t[o],l=nf(n,a.path),h=!1,c;if(j(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===a.status)h=!0,c=a.abortReason,r=r.concat(i9(e.serverSyncTree_,a.currentWriteId,!0));else if(0===a.status){if(a.retryCount>=25)h=!0,c="maxretry",r=r.concat(i9(e.serverSyncTree_,a.currentWriteId,!0));else{let n=rz(e,a.path,s);a.currentInputSnapshot=n;let i=t[o].update(n.val());if(void 0!==i){rP("transaction failed: Data returned ",i,a.path);let t=nB(i);"object"==typeof i&&null!=i&&e_(i,".priority")||(t=t.updatePriority(n.getPriority()));let o=a.currentWriteId,l=rm(t,n,rH(e));a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=l,a.currentWriteId=rj(e),s.splice(s.indexOf(o),1),r=(r=r.concat(i6(e.serverSyncTree_,a.path,l,a.currentWriteId,a.applyLocally))).concat(i9(e.serverSyncTree_,o,!0))}else h=!0,c="nodata",r=r.concat(i9(e.serverSyncTree_,a.currentWriteId,!0))}}rM(e.eventQueue_,n,r),r=[],h&&(t[o].status=2,setTimeout(t[o].unwatcher,Math.floor(0)),t[o].onComplete&&("nodata"===c?i.push(()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot)):i.push(()=>t[o].onComplete(Error(c),!1,null))))}rG(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)tj(i[e]);(function e(t,n=t.transactionQueueTree_){if(n||rG(t,n),ry(n)){let i=rY(t,n);j(i.length>0,"Sending zero length transaction queue"),i.every(e=>0===e.status)&&function(t,n,i){let r=rz(t,n,i.map(e=>e.currentWriteId)),s=r,o=r.hash();for(let e=0;e<i.length;e++){let t=i[e];j(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;let r=nf(n,t.path);s=s.updateChild(r,t.currentOutputSnapshotRaw)}let a=s.val(!0);t.server_.put(n.toString(),a,r=>{rW(t,"transaction put response",{path:n.toString(),status:r});let s=[];if("ok"===r){let r=[];for(let e=0;e<i.length;e++)i[e].status=2,s=s.concat(i9(t.serverSyncTree_,i[e].currentWriteId)),i[e].onComplete&&r.push(()=>i[e].onComplete(null,!0,i[e].currentOutputSnapshotResolved)),i[e].unwatcher();rG(t,rv(t.transactionQueueTree_,n)),e(t,t.transactionQueueTree_),rM(t.eventQueue_,n,s);for(let e=0;e<r.length;e++)tj(r[e])}else{if("datastale"===r)for(let e=0;e<i.length;e++)3===i[e].status?i[e].status=4:i[e].status=0;else{tx("transaction at "+n.toString()+" failed: "+r);for(let e=0;e<i.length;e++)i[e].status=4,i[e].abortReason=r}rV(t,n)}},o)}(t,rI(n),i)}else rC(n)&&rw(n,n=>{e(t,n)})})(e,e.transactionQueueTree_)}(e,r,i),i}function rK(e,t){let n;let i=e.transactionQueueTree_;for(n=no(t);null!==n&&void 0===ry(i);)i=rv(i,n),n=no(t=nl(t));return i}function rY(e,t){let n=[];return function e(t,n,i){let r=ry(n);if(r)for(let e=0;e<r.length;e++)i.push(r[e]);rw(n,n=>{e(t,n,i)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function rG(e,t){let n=ry(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,rb(t,n.length>0?n:void 0)}rw(t,t=>{rG(e,t)})}function rQ(e,t){let n=rI(rK(e,t)),i=rv(e.transactionQueueTree_,t);return!function(e,t,n){let i=e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,t=>{rJ(e,t)}),rJ(e,i),!function e(t,n,i,r){i&&!r&&n(t),rw(t,t=>{e(t,n,!0,r)}),i&&r&&n(t)}(i,t=>{rJ(e,t)}),n}function rJ(e,t){let n=ry(t);if(n){let i=[],r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(j(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(j(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(i9(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,Error("set"),!1,null))));-1===s?rb(t,void 0):n.length=s+1,rM(e.eventQueue_,rI(t),r);for(let e=0;e<i.length;e++)tj(i[e])}}const rX=function(e,t){let n=rZ(e),i=n.namespace;"firebase.com"===n.domain&&tk(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||tk("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tP();let r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new tJ(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new nr(n.pathString)}},rZ=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(r=/**
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
 */function(e){let t="",n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(c,u)));let d=function(e){let t={};for(let n of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===n.length)continue;let i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):tx(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));(h=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;let p=t.slice(0,h);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{let e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},r0="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",r1=function(){let e=0,t=[];return function(n){let i;let r=n===e;e=n;let s=Array(8);for(i=7;i>=0;i--)s[i]=r0.charAt(n%64),n=Math.floor(n/64);j(0===n,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)o+=r0.charAt(t[i]);return j(20===o.length,"nextPushId: Length should be 20."),o}}();/**
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
 */class r2{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){let e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ed(this.snapshot.exportVal())}}class r3{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class r5{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class r4{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return np(this._path)?null:nh(this._path)}get ref(){return new r6(this._repo,this._path)}get _queryIdentifier(){let e=tq(n0(this._queryParams));return"{}"===e?"default":e}get _queryObject(){return n0(this._queryParams)}isEqual(e){if(!((e=eS(e))instanceof r4))return!1;let t=this._repo===e._repo,n=nm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class r6 extends r4{constructor(e,t){super(e,t,new nX,!1)}get parent(){let e=nu(this._path);return null===e?null:new r6(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class r9{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new nr(e),n=r7(this.ref,e);return new r9(this._node.getChild(t),n,nA)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(t,n)=>e(new r9(n,r7(this.ref,t),nA)))}hasChild(e){let t=new nr(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function r8(e,t){return(e=eS(e))._checkNotDeleted("ref"),void 0!==t?r7(e._root,t):e._root}function r7(e,t){return null===no((e=eS(e))._path)?rR("child","path",t,!1):rN("child","path",t,!1),new r6(e._repo,nd(e._path,t))}function se(e,t){let n;rL("push",(e=eS(e))._path),rx("push",t,e._path,!0);let i=r1(rF(e._repo)),r=r7(e,i),s=r7(e,i);return n=null!=t?sn(s,t).then(()=>s):Promise.resolve(s),r.then=n.then.bind(n),r.catch=n.then.bind(n,void 0),r}function st(e){return rL("remove",e._path),sn(e,null)}function sn(e,t){rL("set",(e=eS(e))._path),rx("set",t,e._path,!1);let n=new es;return!function(e,t,n,i,r){rW(e,"set",{path:t.toString(),value:n,priority:null});let s=rH(e),o=nB(n,null),a=rm(o,rt(e.serverSyncTree_,t),s),l=rj(e),h=i6(e.serverSyncTree_,t,a,l,!0);rO(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),(n,i)=>{let s="ok"===n;s||tx("set at "+t+" failed: "+n);let o=i9(e.serverSyncTree_,l,!s);rM(e.eventQueue_,t,o),r&&tj(()=>{if("ok"===n)r(null);else{let e=(n||"error").toUpperCase(),t=e;i&&(t+=": "+i);let s=Error(t);s.code=e,r(s)}})});let c=rQ(e,t);rV(e,c),rM(e.eventQueue_,c,[])}(e._repo,e._path,t,0,n.wrapCallback(()=>{})),n.promise}function si(e){e=eS(e);let t=new sr(new r5(()=>{}));return(function(e,t,n){let i=function(e,t){var n;let i=t._path,r=null;e.syncPointTree_.foreachOnPath(i,(e,t)=>{let n=nf(e,i);r=r||i0(t,n)});let s=e.syncPointTree_.get(i);s?r=r||i0(s,ns()):(s=new iQ,e.syncPointTree_=e.syncPointTree_.set(i,s));let o=null!=r,a=o?new is(r,!0,!1):null,l=(n=e.pendingWriteTree_,iO(t._path,n));return iu(iX(s,t,l,o?a.getNode():nU.EMPTY_NODE,o).viewCache_)}(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then(i=>{let r;let s=nB(i).withIndex(t._queryParams.getIndex());if(!function(e,t,n,i=!1){let r;let s=t._path,o=null,a=!1;e.syncPointTree_.foreachOnPath(s,(e,t)=>{let n=nf(e,s);o=o||i0(t,n),a=a||i2(t)});let l=e.syncPointTree_.get(s);l?(a=a||i2(l),o=o||i0(l,ns())):(l=new iQ,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=o?r=!0:(r=!1,o=nU.EMPTY_NODE,e.syncPointTree_.subtree(s).foreachChild((e,t)=>{let n=i0(t,ns());n&&(o=o.updateImmediateChild(e,n))}));let h=null!=i1(l,t);if(!h&&!t._queryParams.loadsAllData()){let n=rs(t);j(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");let i=i5++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let c=function(e,t,n,i,r,s){let o=iX(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){let n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(nA,(e,t)=>{i.push(nV(e,t))}),n.isFullyInitialized()&&i.push(nz(n.getNode())),iG(e,i,n.getNode(),t)}(o,n)}(l,t,n,iO(s,e.pendingWriteTree_),o,r);if(!h&&!a&&!i){let n=i1(l,t);c=c.concat(function(e,t,n){let i=t._path,r=rr(e,t),s=ri(e,n),o=e.listenProvider_.startListening(rh(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)j(!i2(a.value),"If we're adding a query, it shouldn't be shadowed");else{let t=a.fold((e,t,n)=>{if(!np(e)&&t&&i2(t))return[i3(t).query];{let e=[];return t&&(e=e.concat(iZ(t).map(e=>e.query))),tH(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){let i=t[n];e.listenProvider_.stopListening(rh(i),rr(e,i))}}return o}(e,t,n))}}(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())r=i8(e.serverSyncTree_,t._path,s);else{let n=rr(e.serverSyncTree_,t);r=re(e.serverSyncTree_,t._path,s,n)}return rM(e.eventQueue_,t._path,r),i7(e.serverSyncTree_,t,n,null,!0),s},n=>(rW(e,"get for query "+ed(t)+" failed: "+n),Promise.reject(Error(n))))})(e._repo,e,t).then(t=>new r9(t,new r6(e._repo,e._path),e._queryParams.getIndex()))}class sr{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){let n=t._queryParams.getIndex();return new r2("value",this,new r9(e.snapshotNode,new r6(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new r3(this,e,t):null}matches(e){return e instanceof sr&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}j(!c,"__referenceConstructor has already been defined"),c=r6,j(!u,"__referenceConstructor has already been defined"),u=r6;const ss={};class so{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=t2(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new n1(e.repoInfo_,(t,n,i,r)=>{rU(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>r$(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{ed(n)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new nC(e.repoInfo_,t,(t,n,i,r)=>{rU(e,t,n,i,r)},t=>{r$(e,t)},t=>{tH(t,(t,n)=>{rB(e,t,n)})},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let n=e.toString();return t1[n]||(t1[n]=t()),t1[n]}(e.repoInfo_,()=>new n6(e.stats_,e.server_)),e.infoData_=new n2,e.infoSyncTree_=new i4({startListening:(t,n,i,r)=>{let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=i8(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),rB(e,"connected",!1),e.serverSyncTree_=new i4({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{let s=r(n,i);rM(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new r6(this._repo,ns())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){let n=ss[t];n&&n[e.key]===e||tk(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&tk("Cannot call "+e+" on a deleted database.")}}nC.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},nC.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},tu="10.9.0",e5(new ek("database",(e,{instanceIdentifier:t})=>(function(e,t,n,i,r){var s,o;let a,l,h,c,u=i||e.options.databaseURL;void 0===u&&(e.options.projectId||tk("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),tT("Using default host for project ",e.options.projectId),u=`${e.options.projectId}-default-rtdb.firebaseio.com`);let d=rX(u,void 0),p=d.repoInfo;void 0!==N&&N.env&&(h=N.env.FIREBASE_DATABASE_EMULATOR_HOST),h?(c=!0,p=(d=rX(u=`http://${h}?ns=${p.namespace}`,void 0)).repoInfo):c=!d.repoInfo.secure;let f=new tV(e.name,e.options,t);return rD("Invalid Firebase Database URL",d),np(d.path)||tk("Database URL must point to the root of a Firebase Database (not including a child path)."),new so((s=p,o=new tz(e.name,n),(a=ss[e.name])||(a={},ss[e.name]=a),(l=a[s.toURLString()])&&tk("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new rq(s,!1,f,o),a[s.toURLString()]=l,l),e)})(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),e8(th,tc,void 0),e8(th,tc,"esm2017");const sa=function(e=function(e=e0){let t=e2.get(e);if(!t&&e===e0&&er())return e9();if(!t)throw e4.create("no-app",{appName:e});return t}(),t){let n=(function(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)})(e,"database").getImmediate({identifier:void 0});if(!n._instanceStarted){let e=ei("database");e&&function(e,t,n,i={}){var r;let s;(e=eS(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&tk("Cannot call useEmulator() after instance has already been initialized.");let o=e._repoInternal;o.repoInfo_.nodeAdmin?(i.mockUserToken&&tk('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new tK(tK.OWNER)):i.mockUserToken&&(s=new tK("string"==typeof i.mockUserToken?i.mockUserToken:/**
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
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Q(JSON.stringify({alg:"none",type:"JWT"})),Q(JSON.stringify(s)),""].join(".")}(i.mockUserToken,e.app.options.projectId))),r=s,o.repoInfo_=new tJ(`${t}:${n}`,!1,o.repoInfo_.namespace,o.repoInfo_.webSocketOnly,o.repoInfo_.nodeAdmin,o.repoInfo_.persistenceKey,o.repoInfo_.includeNamespaceInQueryParams,!0),r&&(o.authTokenProvider_=r)}(n,...e)}return n}(e9({apiKey:"AIzaSyDpPuITTDAXymL2UCcisK-nGdAAU0",authDomain:"fe23-slutprojekt-userdb.firebaseapp.com",projectId:"fe23-slutprojekt-userdb",databaseURL:"https://fe23-slutprojekt-userdb-default-rtdb.europe-west1.firebasedatabase.app",storageBucket:"fe23-slutprojekt-userdb.appspot.com",messagingSenderId:"1056096098177",appId:"1:1056096098177:web:716d9daa8907b6bb1d7a80",measurementId:"G-SJNLBSDKQ7"})),sl="usersv2";async function sh(){let e=r8(sa,sl);try{let t=await si(e);if(!t.exists())return[];{let e=[];return t.forEach(t=>{let n=t.val();e.push(n)}),e}}catch(e){return S("Kunde inte hämta användare, testa igen",5e3),[]}}async function sc(e){let t=r8(sa,sl);try{if(await sf(e.name)){S("Användarnamnet finns redan",5e3);return}await se(t,e)}catch(e){S("Kunde inte skapa användare, testa igen",5e3),console.log(e)}}async function su(e){let t=await sm(e.name);if(console.log(t),t){let n=r8(sa,`${sl}/${t}`);try{await sn(n,e)}catch(e){S("Kunde inte uppdatera användare, testa igen",5e3),console.log(e)}}else S("Användare hittades inte",5e3)}async function sd(e){let t=await sm(e),n=r8(sa,`${sl}/${t}`);try{await st(n)}catch(e){S("Kunde inte ta bort användare, testa igen",5e3),console.log(e)}}async function sp(e,t){let n=r8(sa,sl),i=await si(n);if(!i.exists())return!1;{let n=!1;return i.forEach(i=>{let r=i.val();r.name===e&&r.password===t&&(n=!0)}),n}}async function sf(e){let t=r8(sa,sl),n=await si(t);if(!n.exists())return!1;{let t=!1;return n.forEach(n=>{n.val().userName===e&&(t=!0)}),t}}async function sm(e){let t=r8(sa,sl),n=await si(t);if(!n.exists())return S("Kunde inte hitta användare, testa igen",5e3),null;let i=null;return n.forEach(t=>{if(t.val().name===e)return i=t.key,!0}),i}const s_={isInputEmpty:e=>!e.trim(),isUserNameValid:e=>/^[A-Za-z0-9_]+$/.test(e),isPasswordValid:e=>e.length>=6,isPasswordMatch:(e,t)=>e===t,isUserNameTaken:async e=>!!(await sh()).find(t=>t.name===e)},sg=document.querySelector("#topic"),sv=document.querySelector("#topicHeader"),sy=document.querySelector("#posts");async function sb(e){let t=document.querySelector("#userName"),n=document.querySelector("#password");if(!t||!n)return;let i=t.value,r=n.value;if(s_.isInputEmpty(i)||s_.isInputEmpty(r)){S("Alla fälten måste vara ifyllda",5e3);return}await sp(i,r)?(localStorage.setItem("login",i),e.navigate(`/user/${i}`),console.log("router",e)):S("Fel användarnamn eller lösenord",5e3)}function sC(e){localStorage.removeItem("login"),e.navigate("/login"),function(){let e=document.querySelector("#topic"),t=document.querySelector("#posts"),n=document.querySelector(".subjects");e.classList.add("hide"),t.classList.add("hide"),t.innerHTML="",n.innerHTML="",sv.innerHTML="";let i=document.querySelector(".userContainer"),r=document.querySelector(".userProfileComments");i&&(i.innerHTML="",r&&(r.innerHTML=""))}()}function sw(){return!!localStorage.getItem("login")}function sI(){return localStorage.getItem("login")}var sT={};sT=new URL("black-panther.5ebfe666.png",import.meta.url).toString();var sE={};sE=new URL("red-panda.2102a999.png",import.meta.url).toString();var sS={};sS=new URL("babirusa.78f33283.png",import.meta.url).toString();const sk=e=>{let t;let n=document.querySelector(".mainMenu"),i=document.querySelector("#topMenuUser");if(!n||!i)return;let r=sw(),s=sI();t=r&&s?`<a href=/user/${s} data-navigo>Se profilsida</a>`:'<a href="/login" data-navigo>Logga in</a>',i.innerHTML=`${t}`,e.updatePageLinks()};function sx(e){switch(e){case"black-panther":default:return m(sT);case"red-panda":return m(sE);case"babirusa":return m(sS)}}const sP=e=>(e.image=sx(e.image),`
    <nav class="userMenu">
      <h3>Anv\xe4ndarmeny</h3>
        <h4>${P(e.name)}</h4>
        <img src="${e.image}" alt="userImage">
        <div class="menu userMenu">
            <li><a href="/user/${e.name}/edit" data-navigo>Redigera profil</a></li>
            <button type="button" id="logout">Logga ut</button>
        </div>
    </nav>
    <nav class="allUsers"></nav>
  `),sN=async(e,t)=>{let n=document.querySelector(".mainAside");if(!n){S("Kunde ej hitta mainAside",5e3);return}n.innerHTML="";try{if(!sw()){S("Du måste vara inloggad för att se dina uppgifter",5e3),e.navigate("/login");return}let i=(await sh()).find(e=>e.name===t);if(!i){S("Användaren finns inte",5e3);return}n.innerHTML=sP(i),sR(e),e.updatePageLinks()}catch(e){S("Kunde inte hämta användaren",5e3)}},sR=e=>{let t=document.querySelector("#logout");t&&t.addEventListener("click",()=>{sC(e),sL()})},sL=()=>{let e=document.querySelector(".mainAside");e&&(e.innerHTML="")},sD=async e=>{if(!document.querySelector(".mainAside"))return;let t=sI();null!==t&&(await sN(e,t),await sA(e),e.updatePageLinks())},sA=async e=>{if(!sw())return;let t=document.querySelector(".allUsers");if(!t){S("Det blev fel, försök igen",5e3);return}try{let n=await sh();t.innerHTML="<h3>Alla användare</h3><ul class='userList'></ul>";let i=t.querySelector(".userList");if(!i)return;n.forEach(e=>{let t=document.createElement("li"),n=document.createElement("a");n.href=`/user/${e.name}`,n.setAttribute("data-navigo",""),n.innerText=e.name,i.appendChild(t),t.appendChild(n)}),e.updatePageLinks(),function(e){let t=document.querySelector(".userList");t&&t.addEventListener("click",t=>{t.preventDefault();let n=t.target.innerText;e.navigate(`/user/${n}`)})}(e)}catch(e){console.error(e),S("Kunde inte hämta användare",5e3)}};async function sO(e){var t;let n=document.querySelector("#regUserName").value,i=document.querySelector("#regPassword").value,r=document.querySelector("#confirmPassword").value,s=document.querySelector('input[name="profileImage"]:checked');await sM(n,i,r)&&sc((t=s.value,{name:n,password:i,id:x(),image:t||"babirusa"})).then(()=>localStorage.setItem("login",n)).then(()=>e.navigate(`/user/${n}`)).then(()=>S("Användare skapad",5e3)).then(()=>sk(e)).then(()=>sD(e)).catch(e=>{console.error("Registration error:",e),S("Ett fel uppstod under registreringen",5e3)})}async function sM(e,t,n){return s_.isUserNameValid(e)?s_.isInputEmpty(e)||s_.isInputEmpty(t)||s_.isInputEmpty(n)?(S("Alla fälten måste vara ifyllda",5e3),!1):s_.isPasswordValid(t)?s_.isPasswordMatch(t,n)?!await s_.isUserNameTaken(e)||(S("Användarnamnet är redan taget",5e3),!1):(S("Lösenorden matchar inte",5e3),!1):(S("Lösenordet måste vara minst 6 tecken långt",5e3),!1):(S("Användarnamnet får bara innehålla bokstäver,siffror och understräck",5e3),!1)}async function sq(e,t){let n=document.querySelector(".mainContent");if(n){n.innerHTML="";try{let i=(await sh()).find(e=>e.name===t),r=sI();if(i?.name!==r){S("Du kan bara redigera din egen profil",5e3),e.navigate(`/user/${r}`);return}if(!i){S("Användaren finns inte",5e3);return}n.innerHTML=`
        <div class="editUser">
            <h1>Redigera profil f\xf6r ${i.name}</h1>
            <form>
            <h2>\xc4ndra l\xf6senord</h2>
            <input type="password" id="editPassword" placeholder="L\xf6senord">
            <input type="password" id="confirmEditPassword" placeholder="Bekr\xe4fta l\xf6senord">
            <h2>\xc4ndra profilbild</h2>
            <div class="imageOptions">
            <label for="image1" class="editImageLabel active">
              <input class="editImageRadio" type="radio" id="image1" name="profileImage" value="black-panther" checked>
              <img src="${m(sT)}" alt="Profile Image 1">
            </label>
            <label for="image2" class="editImageLabel">
              <input class="editImageRadio" type="radio" id="image2" name="profileImage" value="red-panda">
              <img src="${m(sE)}" alt="Profile Image 2">
            </label>
            <label for="image3" class="editImageLabel">
              <input class="editImageRadio" type="radio" id="image3" name="profileImage" value="babirusa">
              <img src="${m(sS)}" alt="Profile Image 3">
            </label>
          </div class="editButtonContainer">
            <button type="submit" id="editUpdate">Uppdatera</button>
            <button type="button" id="editDelete">Ta bort Konto</button>
            </form>
        </div>
        `,sF(e,i),e.updatePageLinks()}catch(e){S("Kunde inte hämta användaren",5e3)}}}const sF=(e,t)=>{let n=document.querySelector("#editUpdate"),i=document.querySelector("#editDelete");n&&i&&(n.addEventListener("click",async n=>{n.preventDefault();let i=document.querySelector('input[name="profileImage"]:checked'),r=document.querySelector("#editPassword").value;if(r!==document.querySelector("#confirmEditPassword").value){S("Lösenorden matchar inte",5e3);return}let s={id:t.id,name:t.name,image:i?i.value:"black-panther",password:r||t.password};await su(s),e.navigate(`/user/${s.name}`),S("Profilen uppdaterad",5e3),E(!1,"#editUserContainer")}),i.addEventListener("click",async n=>{n.preventDefault(),await sd(t.name),sC(e),e.navigate("/login"),S("Användaren borttagen",5e3),E(!1,"#editUserContainer")}),k(".editImageRadio",".editImageLabel"))},sH="threadsv2";async function sU(){let e=r8(sa,sH);try{let t=await si(e);if(!t.exists())return S("Inga trådar hittades",5e3),[];{let e=[];return t.forEach(t=>{let n=t.val();e.push(n)}),e}}catch(e){return S("Kunde inte hämta trådar, testa igen",5e3),[]}}async function s$(e){let t=r8(sa,sH);try{await sn(se(t),e)}catch(e){S("Kunde inte skapa tråd, testa igen",5e3),console.log(e)}}async function sB(e){let t=r8(sa,sH),n=await si(t);if(!n.exists())return null;let i=null;return n.forEach(t=>{let n=t.val();if(n.id===e)return i=n,!0}),i}const sj="commentsv2";async function sW(){let e=r8(sa,sj);try{let t=await si(e);if(!t.exists())return[];{let e=[];return t.forEach(t=>{let n=t.val();e.push(n)}),e}}catch(e){return S("Kunde inte hämta kommentarer, testa igen",5e3),[]}}async function sz(e){let t=r8(sa,sj);try{await se(t,e)}catch(e){S("Kunde inte skapa kommentar, testa igen",5e3),console.log(e)}}async function sV(e){let t=await sK(e);if(!t){S("Kunde inte hitta kommentar, testa igen",5e3);return}let n=r8(sa,`${sj}/${t}`);try{await st(n)}catch(e){S("Kunde inte ta bort kommentar, testa igen",5e3),console.log(e)}}async function sK(e){let t=r8(sa,sj),n=await si(t);if(!n.exists())return null;let i=null;return n.forEach(t=>{t.val().id===e&&(i=t.key)}),i}async function sY(){let e=r8(sa,"forumv2");try{let t=await si(e);if(!t.exists())return S("Inga forum hittades",5e3),[];{let e=[];return t.forEach(t=>{let n=t.val();e.push(n)}),e}}catch(e){return S("Kunde inte hämta data",5e3),[]}}async function sG(e,t){let n=document.querySelector(".userProfileComments");if(n){n.innerHTML="";try{if(!sw()){S("Du måste vara inloggad för att se profiler",5e3);return}for(let i of(await sW()).filter(t=>t.userId===e.id).sort((e,t)=>t.timeStamp-e.timeStamp).slice(0,3)){let r=await sB(i.threadId),s=(await sY()).find(e=>e.id===r?.forumId);if(!r||!s)return;n.innerHTML+=function(e,t,n,i){let r=T(e.timeStamp),s=t.name===sI();return`
      <article class="post" data-comment-id="${e.id}"> 
        <div class="postHeader">
          <div class="postDate">${r.date} | ${r.time}</div>
          <div class="postSubject"><a href="/thread/${e.threadId}" data-navigo>${n.title}</a></div>
        </div>
        <div class="postBody">
          <div class="postUserInfo">
            <div><a href="/user/${t.name}" data-navigo>${t.name}</a></div>
            <div><img class="postUserImg" src="${t.image}" alt="userImage"></div>
          </div>
          <div class="postText">
            <p>${e.comment}</p>
          </div>
        </div>
        <div class="postFooter">
          <div>
            <a id="${n.forumId}" href="/topic/${n.forumId}" data-navigo>${i}</a>
          </div>
          <div>
            <button class="editUserComment" data-comment-id="${e.id}" ${s?"":'style="display:none;"'}>Redigera</button>  
            <button class="deleteUserComment" data-comment-id="${e.id}" ${s?"":'style="display:none;"'}>Radera</button>
          </div>
        </div>
      </article>
    `}(i,e,r,s.title),sQ(e,t)}t.updatePageLinks()}catch(e){S("Kunde inte hämta kommentarer",5e3),console.log(e)}}}async function sQ(e,t){let n=document.querySelectorAll(".deleteUserComment");if(!n)return;let i=document.querySelectorAll(".editUserComment");n.forEach(n=>{n.addEventListener("click",async i=>{let r=n.getAttribute("data-comment-id");r&&function(e,t,n){let i=document.querySelector(`.comment[data-comment-id="${e}"]`);if(!i)return;let r=i.querySelector(".commentButtonContainer");if(!r)return;r.innerHTML=`
        <p>\xc4r du s\xe4ker p\xe5 att du vill radera inl\xe4gget?</p>
        <button class="deleteUserComment" data-comment-id="${e}">Ja</button>
        <button class="cancelDeleteComment">Nej</button>
    `;let s=i.querySelector(".deleteUserComment"),o=i.querySelector(".cancelDeleteComment");s&&o&&(s.addEventListener("click",async()=>{try{await sV(e),i.remove()}catch(e){S("Kunde inte radera inlägget",5e3),console.log(e)}}),o.addEventListener("click",()=>{console.log("cancel"),r.innerHTML=`
        <button class="editUserComment" data-comment-id="${e}">Redigera</button>  
        <button class="deleteUserComment" data-comment-id="${e}">Radera</button>
    `,sQ(t,n)}))}(parseInt(r),e,t)})}),i.forEach(e=>{e.addEventListener("click",async t=>{let n=e.getAttribute("data-comment-id");n&&(parseInt(n),function(){let e=document.querySelector(".editUserComment");e&&e.addEventListener("click",async t=>{e.getAttribute("data-comment-id")&&S("Funktionen är inte implementerad",5e3)})}())})})}async function sJ(e,t){let n=document.querySelector(".userProfileThreads");if(n){n.innerHTML="";try{let i=(await sU()).filter(t=>t.userId===e.id).sort((e,t)=>t.timeStamp-e.timeStamp).slice(0,3);if(0===i.length)return;for(let e of(n.innerHTML="<h2>Trådar</h2>",i))n.innerHTML+=`
    <div class="thread">
            <a href="/threads/${e.id}" data-navigo>${e.title}</a>
    </div>
    `;t.updatePageLinks()}catch(e){console.error(e),S("Något gick fel, försök igen senare",5e3)}}}async function sX(e,t){let n=document.querySelector(".mainContent");if(n){n.innerHTML="";try{sw()||S("Du måste vara inloggad för att se profiler",5e3);let i=(await sh()).find(t=>t.name===e);if(!i){S("Användaren finns inte",5e3);return}n.innerHTML=(i.image=sx(i.image),`
    <h1> Profil </h1>
    <div class="userContainer">
        <div class="userProfile">
          <div><img src="${i.image}" alt="${i.name}'s image"></div>
          <div><h2>${P(i.name)}</h2>
          <p>Senast aktiv: <br />
            04/04/2024</p>
          </div>
        </div>
      <div class="userProfileThreads"></div>
    </div>  
    <div class="userProfileComments"></div>
`),sJ(i,t),sG(i,t),t.updatePageLinks()}catch(e){S("Något gick fel, försök igen",5e3)}}}const sZ=()=>{let e=document.querySelector(".mainFooter");if(!e)return;let t=`
  <ul class="footerMenu">
    <li><a href="#">Om Omnitalk</a></li>
    <li><a href="#">Cookies</a></li>
    <li><a href="#">Integritet</a></li>
  </ul>
    &copy; Omnitalk
  `;e.innerHTML=t},s0=document.querySelector("#posts");function s1(e,t,n){let i=document.querySelector("#formContainer");for(let r of e){if(!i)return;sh().then(e=>e.find(e=>e.id===r.userId)).then(e=>{!function(e,t,n,i){s0.classList.remove("hide");let r=s2("article","post"),s=s2("div","postHeader"),o=s2("div","postSubject"),a=document.createElement("span");a.setAttribute("data-navigo","");let l=s2("div","postDate"),h=s2("div","postBody"),c=s2("div","postUserInfo"),u=s2("a","postUserName");u.setAttribute("href",`/user/${i.name}`),u.setAttribute("data-navigo","");let d=document.createElement("div"),p=s2("img","postUserImg"),f=s2("div","postText"),m=document.createElement("p"),_=s2("div","postFooter"),g=document.createElement("div"),v=s2("a","postTopic");v.setAttribute("href",`/topic/${t}`),v.setAttribute("data-navigo","");let y=document.createElement("div"),b=s2("a","postFooterLink"),C=s2("a","postFooterLink");b.setAttribute("href","#"),b.setAttribute("data-navigo",""),C.setAttribute("href","#"),C.setAttribute("data-navigo",""),a.innerText=n;let w=T(e.timeStamp);l.innerText=`${w.time} | ${w.date}`,u.innerText=i.name,p.src=sx(i.image),m.innerText=e.comment,v.innerText=t;let I=i.name===sI();b.innerHTML=`<button class="editUserComment" data-comment-id="${e.id}" ${I?"":'style="display:none;"'}>Redigera</button>`,C.innerHTML=`<button class="deleteUserComment" data-comment-id="${e.id}" ${I?"":'style="display:none;"'}>Radera</button>`,s0.append(r),r.append(s,h,_),s.append(l,o),o.append(a),h.append(c,f),c.append(u,d),d.append(p),f.append(m),_.append(g,y),g.append(v),y.append(b,C)}(r,t,n,e)});let e=r.threadId;console.log(e),function(e){console.log("threadId i form"),console.log(e);let t=document.querySelector("#formContainer"),n=document.createElement("h3"),i=document.createElement("form");i.setAttribute("id","commentsForm"),n.innerHTML=`Skriv en kommentar i <br/> "${e}"`,i.innerHTML=`
    <div>
      <label for="postText">Inl\xe4gg:</label>
      <textarea id="postTextInput" name="Meddelande" placeholder="Din kommentar i tr\xe5den h\xe4r" rows="5" cols="33" required minlength="4" maxlength="600"></textarea>
    </div>
    <div><button type="submit" id="postSendButton">Skicka</button></div>
  `,t.append(n,i),i.addEventListener("submit",e=>{e.preventDefault(),i.querySelector("#postTextInput"),console.log(sI()),i.reset()})}(e)}}function s2(e,t){let n=document.createElement(e);return void 0!==t&&n.classList.add(t),n}function s3(e){return 1===e.length?e:e.sort((e,t)=>t.timeStamp-e.timeStamp)}function s5(e,t,n){if(sw())for(let i of e.slice(0,5))sW().then(s3).then(e=>e.find(e=>e.threadId===i.id)).then(e=>{(function(e,t,n){d=e.title,n.id;let i=document.createElement("div"),r=document.createElement("h4"),s=document.createElement("a");s.setAttribute("id",e.id.toString()),s.setAttribute("href",`/thread/${e.id}`),s.setAttribute("data-navigo",""),s.setAttribute("title",n.title);let o=document.createElement("p");document.createElement("p"),s.innerText=e.title,void 0!==t&&(o.innerText=t.comment.slice(0,50).trim()+"..."),s4.append(i),i.append(r,o),r.append(s)})(i,e,t)}),n.updatePageLinks();else{S("Du måste vara inloggad för att se forumet!");return}}const s4=document.querySelector(".subjects");async function s6(e,t){let n=parseInt(e),i=document.querySelector(".mainContent");if(i){i.innerHTML="";try{let e=(await sU()).filter(e=>e.forumId===n),i=(await sY()).find(e=>e.id===n);if(!i)return;s5(e,i,t)}catch(e){S("Kunde inte hämta trådar",5e3)}}}async function s9(e,t){let n=parseInt(e),i=document.querySelector(".mainContent");if(i){i.innerHTML="";try{let e=(await sW()).filter(e=>e.threadId===n),t=(await sU()).find(t=>t.id===e[0].threadId);if(!t)return;let i=t.title,r=await sY(),s=t.forumId,o=r.find(e=>e.id===s)?.title;if(!o)return;s1(e,o,i)}catch(e){S("Kunde inte hämta kommentarer",5e3)}}}s4.addEventListener("click",e=>{let t=document.querySelector("#formContainer");e.preventDefault(),sy.innerHTML="",t.innerHTML="";let n=parseInt(e.target.id),i=e.target.title;sW().then(e=>e.filter(e=>e.threadId===n)).then(s3).then(e=>s1(e,i,d))});const s8=document.querySelector("#topicHeader");async function s7(e){let t=await sY();document.querySelector(".topicsMenuWrapper").innerHTML="",function(e,t){for(let n of e)(function(e,t){let n=document.querySelector(".topicsMenuWrapper"),i=document.createElement("div");i.classList.add("topicMenubox");let r=document.createElement("a");r.setAttribute("id",e.id.toString()),r.setAttribute("href",`/topic/${e.id}`),r.setAttribute("data-navigo",""),r.innerText=e.title,n.append(i),i.append(r),r.addEventListener("click",n=>{if(n.preventDefault(),sw()){n.target.id;let i=document.createElement("h2"),r=document.createElement("p");r.classList.add("topicDesc"),i.innerText=e.title,r.innerText=e.description,function(){sg.classList.remove("hide"),sg.classList.add("flex"),document.querySelector(".startWrapper");let e=document.querySelector("#posts"),t=document.querySelector(".subjects");e.innerHTML="",t.innerHTML="",sv.innerHTML="";let n=document.querySelector(".userContainer"),i=document.querySelector(".userProfileComments");n&&(n.innerHTML="",i&&(i.innerHTML=""))}(),s8.append(i,r),sU().then(t=>t.filter(t=>t.forumId===e.id)).then(n=>s5(n,e,t))}else{S("Du måste vara inloggad för att se inlägg!");return}t.updatePageLinks()})})(n,t)}(t,e)}async function oe(e,t){let n=document.querySelector("#postSendButton");n&&n.addEventListener("click",async n=>{n.preventDefault();let i=await ot(e);if(!i)return;let r=await on(i);r&&(s$(i),sz(r),t.navigate(`/thread/${i.id}`))})}async function ot(e){let t=sI();if(!t){S("Du måste vara inloggad för att skapa en tråd");return}try{let n=await sh(),i=n.find(e=>e.name===t)?.id;if(!i||!document.querySelector("#createThreadForm"))return;let r=document.querySelector("#subjectHeaderInput").value,s=parseInt(e);if(!r){S("Du måste ange ett ämne");return}return function(e,t,n){let i=Date.now();return{title:e,id:x(),userId:t,forumId:n,timeStamp:i}}(r,i,s)}catch(e){S("Något gick fel, testa igen",5e3)}}async function on(e){let t=e.userId,n=e.id,i=document.querySelector("#postText").value;if(!i){S("Du måste skriva något i inlägget");return}return function(e,t,n){let i=Date.now();return{id:x(),comment:e,timeStamp:i,threadId:t,userId:n}}(i,n,t)}async function oi(e){sk(e),await sD(e),sZ(),await s7(e)}async function or(e){sw()?(await oi(e),function(){let e=document.querySelector("#mainContent");e&&(e.innerHTML="",e.innerHTML=`
    <div class="startWrapper">
        <h1>V\xe4lkommen till Omnitalk</h1>
        <p>V\xe4lkommen till v\xe5rt diskussionsforum! H\xe4r samlas en m\xe5ngfald av tankar, \xe5sikter och id\xe9er f\xf6r att skapa en berikande och givande dialog. Oavsett om du \xe4r h\xe4r f\xf6r att dela din expertis, l\xe4ra dig n\xe5got nytt eller bara utforska olika perspektiv, s\xe5 \xe4r detta platsen f\xf6r dig. Vi uppmuntrar respektfullt utbyte och \xf6ppenhet f\xf6r att fr\xe4mja en atmosf\xe4r av l\xe4rande och f\xf6rst\xe5else. S\xe5 dyk in, engagera dig och l\xe5t oss tillsammans utforska v\xe4rlden genom diskussion och delat kunnande!</p>
    </div>
`)}()):e.navigate("/login")}async function os(e){sw()?e.navigate("/"):(!function(e){let t=document.querySelector(".mainContent");t&&(t.innerHTML="",t.innerHTML=`
    <div class="login">
        <h1>Login</h1>
        <form>
          <input type="text" id="userName" placeholder="Anv\xe4ndarnamn">
          <input type="password" id="password" placeholder="L\xf6senord">
          
          <button type="submit" id="login">Logga in</button>
          <button type="button" id="register">Registrera</button>
        </form>
    </div>
    `,function(e){let t=document.querySelector("#login"),n=document.querySelector("#register");t&&!t.getAttribute("data-listener")&&(t.setAttribute("data-listener","true"),t.addEventListener("click",t=>{t.preventDefault(),sb(e)})),n&&!n.getAttribute("data-listener")&&(n.setAttribute("data-listener","true"),n.addEventListener("click",t=>{t.preventDefault(),e.navigate("/register")}))}(e),e.updatePageLinks())}(e),await oi(e))}async function oo(e){sw()?e.navigate("/"):(!function(e){let t=document.querySelector(".mainContent");t&&(t.innerHTML="",t.innerHTML=`
  <div class="register">
  <h1>Registrera dig</h1>
  <form>
    <input type="text" id="regUserName" placeholder="Anv\xe4ndarnamn" autocomplete="off">
    <input type="password" id="regPassword" placeholder="L\xf6senord">
    <input type="password" id="confirmPassword" placeholder="Bekr\xe4fta l\xf6senord">
    <h3 id="regImage">V\xe4lj profilbild</h3>
    <div class="imageOptions">
      <label for="image1" class="regImageLabel active">
        <input class="regImageRadio" type="radio" id="image1" name="profileImage" value="black-panther" checked>
        <img src="${m(sT)}" alt="Profile Image 1">
      </label>
      <label for="image2" class="regImageLabel">
        <input class="regImageRadio" type="radio" id="image2" name="profileImage" value="red-panda">
        <img src="${m(sE)}" alt="Profile Image 2">
      </label>
      <label for="image3" class="regImageLabel">
        <input class="regImageRadio" type="radio" id="image3" name="profileImage" value="babirusa">
        <img src="${m(sS)}" alt="Profile Image 3">
      </label>
    </div>

    <button type="button" id="registerBtn">Registrera</button>
    <button type="button" id="backBtn">Tillbaka</button>
  </form>
</div>

    `,function(e){let t=document.querySelector("#registerBtn"),n=document.querySelector("#backBtn");function i(t){t.preventDefault(),sO(e)}function r(t){t.preventDefault(),e.navigate("/login")}t?(t.removeEventListener("click",i),t.addEventListener("click",i)):console.error("Register button not found"),n?(n.removeEventListener("click",r),n.addEventListener("click",r)):console.error("Back button not found"),k(".regImageRadio",".regImageLabel")}(e),e.updatePageLinks())}(e),await oi(e))}async function oa(e,t){sw()?(await sX(t.data.id,e),await oi(e),function(){let e=document.querySelector("#topic"),t=document.querySelector("#posts");e&&t&&(e.classList.remove("flex"),e.classList.add("hide"),t.classList.remove("flex"),t.classList.add("hide"))}()):e.navigate("/login")}async function ol(e,t){sw()?(await sq(e,t.data.id),await oi(e)):e.navigate("/login")}async function oh(e,t){sw()?(await s6(t.data.id,e),await function(e,t){let n=document.querySelector("#formContainer");n&&(n.innerHTML=`
    <h3>G\xf6r ett inl\xe4gg i ${e}</h3>
    <form id="createThreadForm">
      <div>
        <label for="subjectHeaderInput">\xc4mne:</label>
        <input class="" type="text" name="subjectHeaderInput" placeholder="Vad handlar ditt inl\xe4gg om" id="subjectHeaderInput">
      </div>
      <div>
        <label for="postText">Inl\xe4gg:</label>
        <textarea id="postText" name="Meddelande" placeholder="Ditt inl\xe4gg h\xe4r" rows="5" cols="33" required minlength="4" maxlength="600"></textarea>
      </div>
      <div><button type="submit" id="postSendButton" class="threadButton">Skicka</button></div>
    </form>
  `,oe(e,t),t.updatePageLinks())}(t.data.id,e),await oi(e),function(e){let t=document.querySelector("#topic");t&&(e?(t.classList.remove("hide"),t.classList.add("flex")):(t.classList.remove("flex"),t.classList.add("hide")))}(!0)):e.navigate("/login")}async function oc(e,t){sw()?(await s9(t.data.id,e),await oi(e),function(e){let t=document.querySelector("#posts");t&&(e?t.classList.remove("hide"):t.classList.add("hide"))}(!0)):e.navigate("/login")}"undefined"!=typeof self&&self,function(e){e.on({"/":()=>{or(e)},"/login":()=>{os(e)},"/register":()=>{oo(e)},"/user/:id":t=>{oa(e,t)},"/user/:id/edit":t=>{ol(e,t)},"/faq":()=>{!function(){let e=document.querySelector(".mainContent");e&&(e.innerHTML="",e.innerHTML=`
    <div class="faqContainer">
        <h1>FAQ</h1>
        <div class="faq">
            <div class="faqQuestion">
                <h2>Fr\xe5ga 1</h2>
                <p>Svar 1</p>
            </div>
            <div class="faqQuestion">
                <h2>Fr\xe5ga 2</h2>
                <p>Svar 2</p>
            </div>
            <div class="faqQuestion">
                <h2>Fr\xe5ga 3</h2>
                <p>Svar 3</p>
            </div>
            </div>
        </div>
    </div>`)}()},"/kontakt":()=>{!function(){let e=document.querySelector(".mainContent");e&&(e.innerHTML="",e.innerHTML=`
      <form id="contactForm">
        <div class="form-group">
          <label for="name">Namn:</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message">Meddelande:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    `,function(){let e=document.querySelector("#contactForm");e&&e.addEventListener("submit",e=>{e.preventDefault(),S("Inte implementerat ännu",5e3)})}())}()},"/topic/:id":t=>{oh(e,t)},"/thread/:id":t=>{oc(e,t)}}).notFound(()=>{e.navigate("/")}).resolve()}(new(m(function(){var e={407:function(e,t,n){n.d(t,{default:function(){return D}});var i=/([:*])(\w+)/g,r=/\*/g,s=/\/\?/g;function o(e){return void 0===e&&(e="/"),m()?location.pathname+location.search+location.hash:e}function a(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function l(e){return"string"==typeof e}function h(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function c(e){var t=a(e).split(/\?(.*)?$/);return[a(t[0]),t.slice(1).join("")]}function u(e){for(var t={},n=e.split("&"),i=0;i<n.length;i++){var r=n[i].split("=");if(""!==r[0]){var s=decodeURIComponent(r[0]);t[s]?(Array.isArray(t[s])||(t[s]=[t[s]]),t[s].push(decodeURIComponent(r[1]||""))):t[s]=decodeURIComponent(r[1]||"")}}return t}function d(e,t){var n,o=c(a(e.currentLocationPath)),d=o[0],p=o[1],f=""===p?null:u(p),m=[];if(l(t.path)){if(n="(?:/^|^)"+a(t.path).replace(i,function(e,t,n){return m.push(n),"([^/]+)"}).replace(r,"?(?:.*)").replace(s,"/?([^/]+|)")+"$",""===a(t.path)&&""===a(d))return{url:d,queryString:p,hashString:h(e.to),route:t,data:null,params:f}}else n=t.path;var _=RegExp(n,""),g=d.match(_);if(g){var v=l(t.path)?0===m.length?null:g?g.slice(1,g.length).reduce(function(e,t,n){return null===e&&(e={}),e[m[n]]=decodeURIComponent(t),e},null):null:g.groups?g.groups:g.slice(1);return{url:a(d.replace(RegExp("^"+e.instance.root),"")),queryString:p,hashString:h(e.to),route:t,data:v,params:f}}return!1}function p(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function f(e,t){return void 0===e[t]||!0===e[t]}function m(){return"undefined"!=typeof window}function _(e,t,n){var i=t||{},r=0;!function t(){e[r]?Array.isArray(e[r])?(e.splice.apply(e,[r,1].concat(e[r][0](i)?e[r][1]:e[r][2])),t()):e[r](i,function(e){void 0===e||!0===e?(r+=1,t()):n&&n(i)}):n&&n(i)}()}function g(e,t){void 0===e.currentLocationPath&&(e.currentLocationPath=e.to=o(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function v(e,t){for(var n=0;n<e.instance.routes.length;n++){var i=d(e,e.instance.routes[n]);if(i&&(e.matches||(e.matches=[]),e.matches.push(i),"ONE"===e.resolveOptions.strategy))return void t()}t()}function y(e,t){e.navigateOptions&&(void 0!==e.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==e.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function b(e,t){!0===e.navigateOptions.force?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}_.if=function(e,t,n){return Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),[e,t,n]};var C=m(),w=p();function I(e,t){if(f(e.navigateOptions,"updateBrowserURL")){var n=("/"+e.to).replace(/\/\//g,"/"),i=C&&e.resolveOptions&&!0===e.resolveOptions.hash;w?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",i?"#"+n:n),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!i){var t=location.hash;location.hash="",location.hash=t}e.instance.__freezeListening=!1},1))):C&&(window.location.href=e.to)}t()}function T(e,t){var n=e.instance;n.lastResolved()?_(n.lastResolved().map(function(t){return function(n,i){if(t.route.hooks&&t.route.hooks.leave){var r=!1,s=e.instance.matchLocation(t.route.path,e.currentLocationPath,!1);r="*"!==t.route.path?!s:!(e.matches&&e.matches.find(function(e){return t.route.path===e.route.path})),f(e.navigateOptions,"callHooks")&&r?_(t.route.hooks.leave.map(function(t){return function(n,i){return t(function(t){!1===t?e.instance.__markAsClean(e):i()},e.matches&&e.matches.length>0?1===e.matches.length?e.matches[0]:e.matches:void 0)}}).concat([function(){return i()}])):i()}else i()}}),{},function(){return t()}):t()}function E(e,t){f(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var S=[function(e,t){var n=e.instance.lastResolved();if(n&&n[0]&&n[0].route===e.match.route&&n[0].url===e.match.url&&n[0].queryString===e.match.queryString)return n.forEach(function(t){t.route.hooks&&t.route.hooks.already&&f(e.navigateOptions,"callHooks")&&t.route.hooks.already.forEach(function(t){return t(e.match)})}),void t(!1);t()},function(e,t){e.match.route.hooks&&e.match.route.hooks.before&&f(e.navigateOptions,"callHooks")?_(e.match.route.hooks.before.map(function(t){return function(n,i){return t(function(t){!1===t?e.instance.__markAsClean(e):i()},e.match)}}).concat([function(){return t()}])):t()},function(e,t){f(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()},function(e,t){e.match.route.hooks&&e.match.route.hooks.after&&f(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(t){return t(e.match)}),t()}],k=[T,function(e,t){var n=e.instance._notFoundRoute;if(n){e.notFoundHandled=!0;var i=c(e.currentLocationPath),r=i[0],s=i[1],o=h(e.to);n.path=a(r);var l={url:n.path,queryString:s,hashString:o,data:null,route:n,params:""!==s?u(s):null};e.matches=[l],e.match=l}t()},_.if(function(e){return e.notFoundHandled},S.concat([E]),[function(e,t){e.resolveOptions&&!1!==e.resolveOptions.noMatchWarning&&void 0!==e.resolveOptions.noMatchWarning||console.warn('Navigo: "'+e.currentLocationPath+"\" didn't match any of the registered routes."),t()},function(e,t){e.instance._setCurrent(null),t()}])];function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function P(e,t){var n=0;T(e,function i(){n!==e.matches.length?_(S,x({},e,{match:e.matches[n]}),function(){n+=1,i()}):E(e,t)})}function N(e){e.instance.__markAsClean(e)}function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var L="[data-navigo]";function D(e,t){var n,i=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:L},r=this,s="/",f=null,C=[],w=!1,T=p(),E=m();function S(e){return e.indexOf("#")>=0&&(e=!0===i.hash?e.split("#")[1]||"/":e.split("#")[0]),e}function x(e){return a(s+"/"+a(e))}function D(e,t,n,i){var r,s;return e=l(e)?x(e):e,{name:i||a(String(e)),path:e,handler:t,hooks:(void 0===(r=n)&&(r=[]),void 0===s&&(s={}),r.filter(function(e){return e}).forEach(function(e){["before","after","already","leave"].forEach(function(t){e[t]&&(s[t]||(s[t]=[]),s[t].push(e[t]))})}),s)}}function A(e,t){if(!r.__dirty){r.__dirty=!0;var n={instance:r,to:e=e?a(s)+"/"+a(e):void 0,currentLocationPath:e,navigateOptions:{},resolveOptions:R({},i,t)};return _([g,v,_.if(function(e){var t=e.matches;return t&&t.length>0},P,k)],n,N),!!n.matches&&n.matches}r.__waiting.push(function(){return r.resolve(e,t)})}function O(e,t){if(r.__dirty)r.__waiting.push(function(){return r.navigate(e,t)});else{r.__dirty=!0;var n={instance:r,to:e=a(s)+"/"+a(e),navigateOptions:t||{},resolveOptions:t&&t.resolveOptions?t.resolveOptions:i,currentLocationPath:S(e)};_([y,b,v,_.if(function(e){var t=e.matches;return t&&t.length>0},P,k),I,N],n,N)}}function M(){if(E)return(E?[].slice.call(document.querySelectorAll(i.linksSelector||L)):[]).forEach(function(e){"false"!==e.getAttribute("data-navigo")&&"_blank"!==e.getAttribute("target")?e.hasListenerAttached||(e.hasListenerAttached=!0,e.navigoHandler=function(t){if((t.ctrlKey||t.metaKey)&&"a"===t.target.tagName.toLowerCase())return!1;var n=e.getAttribute("href");if(null==n)return!1;if(n.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var i=new URL(n);n=i.pathname+i.search}catch(e){}var s=function(e){if(!e)return{};var t,n=e.split(","),i={};return n.forEach(function(e){var n=e.split(":").map(function(e){return e.replace(/(^ +| +$)/g,"")});switch(n[0]){case"historyAPIMethod":i.historyAPIMethod=n[1];break;case"resolveOptionsStrategy":t||(t={}),t.strategy=n[1];break;case"resolveOptionsHash":t||(t={}),t.hash="true"===n[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":i[n[0]]="true"===n[1]}}),t&&(i.resolveOptions=t),i}(e.getAttribute("data-navigo-options"));w||(t.preventDefault(),t.stopPropagation(),r.navigate(a(n),s))},e.addEventListener("click",e.navigoHandler)):e.hasListenerAttached&&e.removeEventListener("click",e.navigoHandler)}),r}function q(e,t,n){var i=C.find(function(t){return t.name===e}),r=null;if(i){if(r=i.path,t)for(var o in t)r=r.replace(":"+o,t[o]);r=r.match(/^\//)?r:"/"+r}return r&&n&&!n.includeRoot&&(r=r.replace(RegExp("^/"+s),"")),r}function F(e){var t=c(a(e)),i=t[0],r=t[1],s=""===r?null:u(r);return{url:i,queryString:r,hashString:h(e),route:D(i,function(){},[n],i),data:null,params:s}}function H(e,t,n){return"string"==typeof t&&(t=U(t)),t?(t.hooks[e]||(t.hooks[e]=[]),t.hooks[e].push(n),function(){t.hooks[e]=t.hooks[e].filter(function(e){return e!==n})}):(console.warn("Route doesn't exists: "+t),function(){})}function U(e){return"string"==typeof e?C.find(function(t){return t.name===x(e)}):C.find(function(t){return t.handler===e})}e?s=a(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=s,this.routes=C,this.destroyed=w,this.current=f,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(e){e.instance.__dirty=!1,e.instance.__waiting.length>0&&e.instance.__waiting.shift()()},this.on=function(e,t,i){var r=this;return"object"!=typeof e||e instanceof RegExp?("function"==typeof e&&(i=t,t=e,e=s),C.push(D(e,t,[n,i]))):Object.keys(e).forEach(function(t){if("function"==typeof e[t])r.on(t,e[t]);else{var i=e[t],s=i.uses,o=i.as,a=i.hooks;C.push(D(t,s,[n,a],o))}}),this},this.off=function(e){return this.routes=C=C.filter(function(t){return l(e)?a(t.path)!==a(e):"function"==typeof e?e!==t.handler:String(t.path)!==String(e)}),this},this.resolve=A,this.navigate=O,this.navigateByName=function(e,t,n){var i=q(e,t);return null!==i&&(O(i.replace(RegExp("^/?"+s),""),n),!0)},this.destroy=function(){this.routes=C=[],T&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=w=!0},this.notFound=function(e,t){return r._notFoundRoute=D("*",e,[n,t],"__NOT_FOUND__"),this},this.updatePageLinks=M,this.link=function(e){return"/"+s+"/"+a(e)},this.hooks=function(e){return n=e,this},this.extractGETParameters=function(e){return c(S(e))},this.lastResolved=function(){return f},this.generate=q,this.getLinkPath=function(e){return e.getAttribute("href")},this.match=function(e){var t={instance:r,currentLocationPath:e,to:e,navigateOptions:{},resolveOptions:i};return v(t,function(){}),!!t.matches&&t.matches},this.matchLocation=function(e,t,n){void 0!==t&&(void 0===n||n)&&(t=x(t));var i={instance:r,to:t,currentLocationPath:t};return g(i,function(){}),"string"==typeof e&&(e=void 0===n||n?x(e):e),d(i,{name:String(e),path:e,handler:function(){},hooks:{}})||!1},this.getCurrentLocation=function(){return F(a(o(s)).replace(RegExp("^"+s),""))},this.addBeforeHook=H.bind(this,"before"),this.addAfterHook=H.bind(this,"after"),this.addAlreadyHook=H.bind(this,"already"),this.addLeaveHook=H.bind(this,"leave"),this.getRoute=U,this._pathToMatchObject=F,this._clean=a,this._checkForAHash=S,this._setCurrent=function(e){return f=r.current=e},(function(){T&&(this.__popstateListener=function(){r.__freezeListening||A()},window.addEventListener("popstate",this.__popstateListener))}).call(this),M.call(this)}}},t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}return n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(407)}().default))("/",{hash:!1}));
//# sourceMappingURL=index.daf873d0.js.map
