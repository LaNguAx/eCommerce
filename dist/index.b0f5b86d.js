var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=function(t){return t&&t.Math==Math&&t};e=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")();var r,o;r=!(o=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var i,a,c,s={},u="object"==typeof document&&document.all,l=(c={all:u,IS_HTMLDDA:void 0===u&&void 0!==u}).all;s=c.IS_HTMLDDA?function(t){return"function"==typeof t||t===l}:function(t){return"function"==typeof t};var d,p={},f={};d=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var g=Function.prototype,h=g.call,m=d&&g.bind.bind(h,h);f=d?m:function(t){return function(){return h.apply(t,arguments)}};var y,v,b;b=function(t){return null==t};var w=TypeError;v=function(t){if(b(t))throw w("Can't call method on "+t);return t};var S=Object;y=function(t){return S(v(t))};var O=f({}.hasOwnProperty);p=Object.hasOwn||function(t,e){return O(y(t),e)};var E,j=Function.prototype,M=r&&Object.getOwnPropertyDescriptor,C=p(j,"name"),T={EXISTS:C,PROPER:C&&"something"===function(){}.name,CONFIGURABLE:C&&(!r||r&&M(j,"name").configurable)}.CONFIGURABLE,k={},$={},L=Object.defineProperty;E=function(t,n){try{L(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n};var P="__core-js_shared__",I=e[P]||E(P,{});$=I;var q=f(Function.toString);s($.inspectSource)||($.inspectSource=function(t){return q(t)}),k=$.inspectSource;var _,H,A=e.WeakMap;H=s(A)&&/native code/.test(String(A));var D={},x=c.all;D=c.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:s(t)||t===x}:function(t){return"object"==typeof t?null!==t:s(t)};var R,F,N,z={},B=e.document,G=D(B)&&D(B.createElement);N=function(t){return G?B.createElement(t):{}},F=!r&&!o((function(){return 7!=Object.defineProperty(N("div"),"a",{get:function(){return 7}}).a}));var U;U=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var V,W=String,X=TypeError;V=function(t){if(D(t))return t;throw X(W(t)+" is not an object")};var J,Q,K={},Y=Function.prototype.call;K=d?Y.bind(Y):function(){return Y.apply(Y,arguments)};var Z,tt={},et=function(t){return s(t)?t:void 0};Z=function(t,n){return arguments.length<2?et(e[t]):e[t]&&e[t][n]};var nt={};nt=f({}.isPrototypeOf);var rt,ot,it,at={};at=Z("navigator","userAgent")||"";var ct,st,ut=e.process,lt=e.Deno,dt=ut&&ut.versions||lt&&lt.version,pt=dt&&dt.v8;pt&&(st=(ct=pt.split("."))[0]>0&&ct[0]<4?1:+(ct[0]+ct[1])),!st&&at&&(!(ct=at.match(/Edge\/(\d+)/))||ct[1]>=74)&&(ct=at.match(/Chrome\/(\d+)/))&&(st=+ct[1]),it=st,ot=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&it&&it<41})),rt=ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ft=Object;tt=rt?function(t){return"symbol"==typeof t}:function(t){var e=Z("Symbol");return s(e)&&nt(e.prototype,ft(t))};var gt,ht,mt,yt=String;mt=function(t){try{return yt(t)}catch(t){return"Object"}};var vt=TypeError;ht=function(t){if(s(t))return t;throw vt(mt(t)+" is not a function")},gt=function(t,e){var n=t[e];return b(n)?void 0:ht(n)};var bt,wt=TypeError;bt=function(t,e){var n,r;if("string"===e&&s(n=t.toString)&&!D(r=K(n,t)))return r;if(s(n=t.valueOf)&&!D(r=K(n,t)))return r;if("string"!==e&&s(n=t.toString)&&!D(r=K(n,t)))return r;throw wt("Can't convert object to primitive value")};var St;(St=function(t,e){return $[t]||($[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.26.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Ot,Et=0,jt=Math.random(),Mt=f(1..toString);Ot=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Mt(++Et+jt,36)};var Ct=St("wks"),Tt=e.Symbol,kt=Tt&&Tt.for,$t=rt?Tt:Tt&&Tt.withoutSetter||Ot,Lt=TypeError,Pt=function(t){if(!p(Ct,t)||!ot&&"string"!=typeof Ct[t]){var e="Symbol."+t;ot&&p(Tt,t)?Ct[t]=Tt[t]:Ct[t]=rt&&kt?kt(e):$t(e)}return Ct[t]}("toPrimitive");Q=function(t,e){if(!D(t)||tt(t))return t;var n,r=gt(t,Pt);if(r){if(void 0===e&&(e="default"),n=K(r,t,e),!D(n)||tt(n))return n;throw Lt("Can't convert object to primitive value")}return void 0===e&&(e="number"),bt(t,e)},J=function(t){var e=Q(t,"string");return tt(e)?e:e+""};var It=TypeError,qt=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Ht="enumerable",At="configurable",Dt="writable";R=r?U?function(t,e,n){if(V(t),e=J(e),V(n),"function"==typeof t&&"prototype"===e&&"value"in n&&Dt in n&&!n[Dt]){var r=_t(t,e);r&&r[Dt]&&(t[e]=n.value,n={configurable:At in n?n[At]:r[At],enumerable:Ht in n?n[Ht]:r[Ht],writable:!1})}return qt(t,e,n)}:qt:function(t,e,n){if(V(t),e=J(e),V(n),F)try{return qt(t,e,n)}catch(t){}if("get"in n||"set"in n)throw It("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var xt;xt=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},z=r?function(t,e,n){return R(t,e,xt(1,n))}:function(t,e,n){return t[e]=n,t};var Rt,Ft=St("keys");Rt=function(t){return Ft[t]||(Ft[t]=Ot(t))};var Nt={};Nt={};var zt,Bt,Gt,Ut="Object already initialized",Vt=e.TypeError,Wt=e.WeakMap;if(H||$.state){var Xt=$.state||($.state=new Wt);Xt.get=Xt.get,Xt.has=Xt.has,Xt.set=Xt.set,zt=function(t,e){if(Xt.has(t))throw Vt(Ut);return e.facade=t,Xt.set(t,e),e},Bt=function(t){return Xt.get(t)||{}},Gt=function(t){return Xt.has(t)}}else{var Jt=Rt("state");Nt[Jt]=!0,zt=function(t,e){if(p(t,Jt))throw Vt(Ut);return e.facade=t,z(t,Jt,e),e},Bt=function(t){return p(t,Jt)?t[Jt]:{}},Gt=function(t){return p(t,Jt)}}var Qt=(_={set:zt,get:Bt,has:Gt,enforce:function(t){return Gt(t)?Bt(t):zt(t,{})},getterFor:function(t){return function(e){var n;if(!D(e)||(n=Bt(e)).type!==t)throw Vt("Incompatible receiver, "+t+" required");return n}}}).enforce,Kt=_.get,Yt=Object.defineProperty,Zt=r&&!o((function(){return 8!==Yt((function(){}),"length",{value:8}).length})),te=String(String).split("String"),ee=a=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!p(t,"name")||T&&t.name!==e)&&(r?Yt(t,"name",{value:e,configurable:!0}):t.name=e),Zt&&n&&p(n,"arity")&&t.length!==n.arity&&Yt(t,"length",{value:n.arity});try{n&&p(n,"constructor")&&n.constructor?r&&Yt(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var o=Qt(t);return p(o,"source")||(o.source=te.join("string"==typeof e?e:"")),t};Function.prototype.toString=ee((function(){return s(this)&&Kt(this).source||k(this)}),"toString"),i=function(t,e,n){return n.get&&a(n.get,e,{getter:!0}),n.set&&a(n.set,e,{setter:!0}),R(t,e,n)};var ne;ne=function(){var t=V(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e};var re=e.RegExp,oe=re.prototype;r&&o((function(){var t=!0;try{re(".","d")}catch(e){t=!1}var e={},n="",r=t?"dgimsy":"gimsy",o=function(t,r){Object.defineProperty(e,t,{get:function(){return n+=r,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(oe,"flags").get.call(e)!==r||n!==r}))&&i(oe,"flags",{configurable:!0,get:ne});var ie,ae,ce,se={}.propertyIsEnumerable,ue=Object.getOwnPropertyDescriptor,le=ue&&!se.call({1:2},1);ce=le?function(t){var e=ue(this,t);return!!e&&e.enumerable}:se;var de,pe,fe={},ge=f({}.toString),he=f("".slice);pe=function(t){return he(ge(t),8,-1)};var me=Object,ye=f("".split);fe=o((function(){return!me("z").propertyIsEnumerable(0)}))?function(t){return"String"==pe(t)?ye(t,""):me(t)}:me,de=function(t){return fe(v(t))};var ve,be=Object.getOwnPropertyDescriptor,we=ae=r?be:function(t,e){if(t=de(t),e=J(e),F)try{return be(t,e)}catch(t){}if(p(t,e))return xt(!K(ce,t,e),t[e])};ve=function(t,e,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:e;if(s(n)&&a(n,i,r),r.global)o?t[e]=n:E(e,n);else{try{r.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=n:R(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t};var Se,Oe,Ee,je,Me,Ce={},Te={},ke=Math.ceil,$e=Math.floor;Te=Math.trunc||function(t){var e=+t;return(e>0?$e:ke)(e)},Me=function(t){var e=+t;return e!=e||0===e?0:Te(e)};var Le=Math.max,Pe=Math.min;je=function(t,e){var n=Me(t);return n<0?Le(n+e,0):Pe(n,e)};var Ie,qe,_e=Math.min;qe=function(t){return t>0?_e(Me(t),9007199254740991):0},Ie=function(t){return qe(t.length)};var He=function(t){return function(e,n,r){var o,i=de(e),a=Ie(i),c=je(r,a);if(t&&n!=n){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},Ae={includes:He(!0),indexOf:He(!1)}.indexOf,De=f([].push);Ee=function(t,e){var n,r=de(t),o=0,i=[];for(n in r)!p(Nt,n)&&p(r,n)&&De(i,n);for(;e.length>o;)p(r,n=e[o++])&&(~Ae(i,n)||De(i,n));return i};var xe,Re=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Oe=Object.getOwnPropertyNames||function(t){return Ee(t,Re)},xe=Object.getOwnPropertySymbols;var Fe=f([].concat);Ce=Z("Reflect","ownKeys")||function(t){var e=Oe(V(t));return xe?Fe(e,xe(t)):e},Se=function(t,e,n){for(var r=Ce(e),o=R,i=ae,a=0;a<r.length;a++){var c=r[a];p(t,c)||n&&p(n,c)||o(t,c,i(e,c))}};var Ne={},ze=/#|\.prototype\./,Be=function(t,e){var n=Ue[Ge(t)];return n==We||n!=Ve&&(s(e)?o(e):!!e)},Ge=Be.normalize=function(t){return String(t).replace(ze,".").toLowerCase()},Ue=Be.data={},Ve=Be.NATIVE="N",We=Be.POLYFILL="P";Ne=Be,ie=function(t,n){var r,o,i,a,c,s=t.target,u=t.global,l=t.stat;if(r=u?e:l?e[s]||E(s,{}):(e[s]||{}).prototype)for(o in n){if(a=n[o],i=t.dontCallGetSet?(c=we(r,o))&&c.value:r[o],!Ne(u?o:s+(l?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;Se(a,i)}(t.sham||i&&i.sham)&&z(a,"sham",!0),ve(r,o,a,t)}};var Xe,Je={},Qe=Function.prototype,Ke=Qe.apply,Ye=Qe.call;Je="object"==typeof Reflect&&Reflect.apply||(d?Ye.bind(Ke):function(){return Ye.apply(Ke,arguments)});var Ze,tn,en=(tn=function(t){if("Function"===pe(t))return f(t)})(tn.bind);Ze=function(t,e){return ht(t),void 0===e?t:d?en(t,e):function(){return t.apply(e,arguments)}};var nn={};nn=Z("document","documentElement");var rn={};rn=f([].slice);var on,an=TypeError;on=function(t,e){if(t<e)throw an("Not enough arguments");return t};var cn;cn=/(?:ipad|iphone|ipod).*applewebkit/i.test(at);var sn;sn="process"==pe(e.process);var un,ln,dn,pn,fn=e.setImmediate,gn=e.clearImmediate,hn=e.process,mn=e.Dispatch,yn=e.Function,vn=e.MessageChannel,bn=e.String,wn=0,Sn={},On="onreadystatechange";try{un=e.location}catch(t){}var En=function(t){if(p(Sn,t)){var e=Sn[t];delete Sn[t],e()}},jn=function(t){return function(){En(t)}},Mn=function(t){En(t.data)},Cn=function(t){e.postMessage(bn(t),un.protocol+"//"+un.host)};fn&&gn||(fn=function(t){on(arguments.length,1);var e=s(t)?t:yn(t),n=rn(arguments,1);return Sn[++wn]=function(){Je(e,void 0,n)},ln(wn),wn},gn=function(t){delete Sn[t]},sn?ln=function(t){hn.nextTick(jn(t))}:mn&&mn.now?ln=function(t){mn.now(jn(t))}:vn&&!cn?(pn=(dn=new vn).port2,dn.port1.onmessage=Mn,ln=Ze(pn.postMessage,pn)):e.addEventListener&&s(e.postMessage)&&!e.importScripts&&un&&"file:"!==un.protocol&&!o(Cn)?(ln=Cn,e.addEventListener("message",Mn,!1)):ln=On in N("script")?function(t){nn.appendChild(N("script"))[On]=function(){nn.removeChild(this),En(t)}}:function(t){setTimeout(jn(t),0)});var Tn=(Xe={set:fn,clear:gn}).clear;ie({global:!0,bind:!0,enumerable:!0,forced:e.clearImmediate!==Tn},{clearImmediate:Tn});var kn=Xe.set;ie({global:!0,bind:!0,enumerable:!0,forced:e.setImmediate!==kn},{setImmediate:kn});const $n="https://fakestoreapi.com/products",Ln=async function(t,e,n){try{const o=n?fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}):fetch(t,e),i=await Promise.race([o,(r=10,new Promise((function(t,e){setTimeout((()=>{e(new Error("The request timed out! The request took too long!"))}),1e3*r)})))]),a=await i.json();if(!i.ok)throw new Error(`${a.message} (${i.status})`);return a}catch(t){throw t}var r},Pn={categories:[],categories_subheading:{electronics:"Innovative Electronics just for you!",jewelery:"Beautiful Jewelery just for you!","men's clothing":"Manly clothes for a gentleman!","women's clothing":"The wardrobe a lady needs!"},products_info:{products:[],get product_count(){return this.products.length}}},In={product:void 0,currentCategory:"homepage",search:{results:[],page:1,resultsPerPage:10},cart:[],favorites:[]},qn=async function(t){try{const e=await Ln(`${$n}/${t?`category/${t}`:""}`);Pn.products_info.products=e}catch(t){throw t}},_n=async function(t){try{return await Ln(`${$n}/${t}`)}catch(t){throw t}};class Hn{parentElement=document.querySelector(".products");#t;render(t,e=!0,n=!0){if(!t||Array.isArray(t)&&0===t.length)return this.renderError();this.#t=t,n&&this.clear();const r=this.generateMarkup(this.#t);e&&this.parentElement.insertAdjacentHTML("beforeend",r)}clear(){this.parentElement.innerHTML=""}renderSpinner(t=this.parentElement){this.clear(),t.insertAdjacentHTML("beforeend",'\n      <div class="loader"></div>\n    ')}renderHeader(t="Trending",e="Our most trending items!"){const n=document.querySelector(".section-heading"),r=document.querySelector(".section-subheading");n.innerHTML=t,r.innerHTML=e}renderError(t="",e=this.errorMsg){this.clear();const n=`<div class="error"><p>${e}<br> ${t}</p>\n  </div>`;this.parentElement.insertAdjacentHTML("afterbegin",n)}changeGridLayout(t){this.parentElement.style.gridTemplateColumns=`repeat(${t}, 1fr)`}setScrollTo(t){window.scrollTo({left:0,top:document.querySelector(t).getBoundingClientRect().top-document.body.getBoundingClientRect().top,behavior:"smooth"})}}new class{constructor(){this.#e()}#e(){const t=document.querySelector("header").offsetHeight;document.querySelector("main").style.marginTop=`${t}px`}};var An=new class extends Hn{parentElement=document.querySelector(".menu-container > .menu-list");errorMsg="Categories failed loading.. Try reloading the page.";addHandlerMenuItemClicked(t){this.parentElement.addEventListener("click",(function(e){const n=e.target.closest(".category-item")?.querySelector(".category-link").getAttribute("href");n&&!e.target.closest(".search-container")&&t(n)}))}generateMarkup(t){return t.reverse().map((t=>`<li class="menu-item category-item"><a href="#${t}"class="link category-link">${t[0].toUpperCase()+t.slice(1)}</a></li>`)).join("")}};new class extends Hn{constructor(){super()}};var Dn=new class extends Hn{errorMsg="An error has occured loading the requested product. Please try to reload.";addHandlerProductClicked(t){this.parentElement.addEventListener("click",(function(e){e.preventDefault();const n=e.target.closest(".product-container.preview"),r=e.target.closest(".interaction-buttons-container");n&&!r&&t(n.dataset.id)}))}generateMarkup(t){return t.map((t=>`\n      <div class="product-container" data-id="${t.id}">\n      <img class="product-image " style="margin-bottom:2rem;" src="${t.image}" alt="${t.description}" />\n      <div class="product-headings-container" style="border-top: 2px solid #4d4d4d;">\n        <p class="product-heading" style="font-size: 3.2rem; white-space: initial; margin-bottom:1rem; padding-top:1rem;">${t.title}</p>\n        <p class="product-description">${t.description}</p>\n        <p class="product-stats "><span class="rating">Rating: ${"⭐".repeat(Math.round(t.rating.rate))}</span><span class="stock">Left in stock: ${t.rating.count}</span> </p>\n        <span class="product-price" style="font-size: 2.4rem; white-space: initial; margin-bottom:2rem; width: 80%; margin-inline:auto; font-weight:bold;\n        ">${t.price}$</span>\n      </div>\n      <div class="interaction-buttons-container" style="width: 70%; height:auto;">\n        <button class="btn purchase-btn" style="font-size: 3rem; padding:1rem;">purchase</button>\n        <button\n          class="btn add-to-cart-btn material-symbols-outlined interaction-icon" style="font-size: 3.4rem;"\n        >\n          add_shopping_cart\n        </button>\n      </div>\n      </div>\n      `)).join("")}};var xn=new class extends Hn{errorMsg="An error has occured loading the available products for this page. Please try to reload.";generateMarkup(t){return t.map((t=>`\n      <div class="product-container preview" data-id="${t.id}">\n      <img class="product-image" src="${t.image}" alt="${t.description}" />\n      <div class="product-headings-container">\n        <div class="product-heading">${t.title}</div>\n        <span class="product-price">${t.price}$</span>\n      </div>\n      <div class="interaction-buttons-container">\n        <button class="btn purchase-btn">purchase</button>\n        <button\n          class="btn add-to-cart-btn material-symbols-outlined interaction-icon"\n        >\n          add_shopping_cart\n        </button>\n      </div>\n      </div>\n      `)).join("")}};var Rn=new class extends Hn{parentElement=document.querySelector(".main-navigation");menuOpen=!1;constructor(){super(),this.#n()}addHandlerLogoClicked(t){document.querySelector(".main-logo").closest(".main-logo-container").addEventListener("click",(function(e){e.preventDefault(),t(),window.scrollTo({left:0,top:0,behavior:"smooth"})}))}#n(){window.addEventListener("click",(t=>{if(t.stopPropagation(),t.target!==document.querySelector(".menu-container")&&!t.target.closest(".search-container"))return t.target.closest('[data-btn-name="menu-btn"]')||this.menuOpen?this.toggleMenu():void 0}))}#r(){const t=document.querySelector('[data-btn-name="menu-btn"] > span');t.textContent="manage_search"===t.textContent?"close":"manage_search"}toggleMenu(){const t=document.querySelector(".overlay"),e=document.querySelector(".menu-container"),n=document.querySelector("main");t.classList.toggle("hidden"),e.classList.contains("hidden")?e.style.transform="translateX(0)":e.style.transform="translateX(100%)",e.classList.toggle("hidden"),n.classList.toggle("blur"),this.#r(),this.menuOpen=!1===this.menuOpen?this.menuOpen=!0:this.menuOpen=!1,document.body.style.overflow=document.body.style.overflow?document.body.style.overflow="":document.body.style.overflow="hidden"}};var Fn=new class extends Hn{#o=document.querySelector(".search-form");#i(){return this.#o.querySelector(".search-bar").value}generateMarkup(t){return t.map((t=>`\n      <div class="product-container preview" data-id="${t.id}">\n      <img class="product-image" src="${t.image}" alt="${t.description}" />\n      <div class="product-headings-container">\n        <div class="product-heading">${t.title}</div>\n        <span class="product-price">${t.price}$</span>\n      </div>\n      <div class="interaction-buttons-container">\n        <button class="btn purchase-btn">purchase</button>\n        <button\n          class="btn add-to-cart-btn material-symbols-outlined interaction-icon"\n        >\n          add_shopping_cart\n        </button>\n      </div>\n      </div>\n      `)).join("")}addSearchHandler(t){this.#o.addEventListener("submit",function(e){e.preventDefault();const n=this.#i();n&&t(n)}.bind(this))}};const Nn=async function(t){try{t||(window.location.hash="homepage",In.currentCategory="homepage");const e=document.querySelector(".products");xn.changeGridLayout(2),xn.renderSpinner(e),await qn(t),xn.renderHeader(In.currentCategory[0].toUpperCase()+In.currentCategory.slice(1),Pn.categories_subheading[In.currentCategory]),xn.render(Pn.products_info.products)}catch(t){xn.renderError(t)}},zn=async function(){try{await async function(){try{const t=[...new Set(await Ln(`${$n}/categories`))];Pn.categories=t}catch(t){throw t}}(),An.render(Pn.categories,!0,!1)}catch(t){An.renderError(t)}},Bn=async function(t){try{window.location.hash=t,In.currentCategory=t.slice(1),await Nn(In.currentCategory),window.scrollTo({left:0,top:document.querySelector(".products-section").getBoundingClientRect().top-document.body.getBoundingClientRect().top,behavior:"smooth"})}catch(t){console.log(t)}},Gn=async function(t){try{await qn();const e=function(t){return Pn.products_info.products.filter((e=>e.title.toLowerCase().includes(t)))}(t);if(!e.length)throw new Error(`No products found! <br> Search query: ${t}`);Fn.changeGridLayout(2),Fn.renderSpinner(),Fn.renderHeader("Search Results",`View your search results for ' <strong>${t}</strong> '`),Fn.render(e),Rn.toggleMenu(),Fn.setScrollTo(".products-section")}catch(t){Fn.renderHeader("Oops! Something went wrong..","View error below"),Rn.toggleMenu(),Fn.renderError(void 0,t)}},Un=async function(t){try{Dn.renderSpinner(),Dn.renderHeader("","");const e=[await _n(t)];Dn.render(e),Dn.changeGridLayout(1),Dn.setScrollTo(".product-container")}catch(t){Dn.renderError(t)}};!async function(){try{window.location.hash="homepage",await Nn(),await zn(),An.addHandlerMenuItemClicked(Bn),Rn.addHandlerLogoClicked(Nn),Fn.addSearchHandler(Gn),Dn.addHandlerProductClicked(Un)}catch(t){console.log(t)}}();
//# sourceMappingURL=index.b0f5b86d.js.map