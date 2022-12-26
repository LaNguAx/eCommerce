// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bxIRe":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "af599da5850bd9e5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1GgH0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _esRegexpFlagsJs = require("core-js/modules/es.regexp.flags.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _modelJs = require("./model.js");
var _viewJs = require("./views/View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _headerViewJs = require("./views/headerView.js");
var _headerViewJsDefault = parcelHelpers.interopDefault(_headerViewJs);
var _menuViewJs = require("./views/menuView.js");
var _menuViewJsDefault = parcelHelpers.interopDefault(_menuViewJs);
var _favoritesViewJs = require("./views/favoritesView.js");
var _favoritesViewJsDefault = parcelHelpers.interopDefault(_favoritesViewJs);
var _productViewJs = require("./views/productView.js");
var _productViewJsDefault = parcelHelpers.interopDefault(_productViewJs);
var _productsViewJs = require("./views/productsView.js");
var _productsViewJsDefault = parcelHelpers.interopDefault(_productsViewJs);
var _mainNavigationJs = require("./views/mainNavigation.js");
var _mainNavigationJsDefault = parcelHelpers.interopDefault(_mainNavigationJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
const productsController = async function(category) {
    try {
        // simply beautiful code is written here, just amazing to see that I've created such thing. Basically this code, loads the products when the website is opened and then you can also use this to load specifiec products from categories :) It can also be used for the search component later
        if (!category) {
            window.location.hash = "homepage";
            _modelJs.state.currentCategory = "homepage";
        }
        const productsContainer = document.querySelector(".products");
        (0, _productsViewJsDefault.default).changeGridLayout(2);
        (0, _productsViewJsDefault.default).renderSpinner(productsContainer);
        await _modelJs.loadProducts(category);
        (0, _productsViewJsDefault.default).renderHeader(_modelJs.state.currentCategory[0].toUpperCase() + _modelJs.state.currentCategory.slice(1), _modelJs.AppData.categories_subheading[_modelJs.state.currentCategory]);
        (0, _productsViewJsDefault.default).render(_modelJs.AppData.products_info.products);
    } catch (error) {
        (0, _productsViewJsDefault.default).renderError(error);
    }
};
const categoriesController = async function() {
    try {
        await _modelJs.loadCategories();
        (0, _menuViewJsDefault.default).render(_modelJs.AppData.categories, true, false);
    } catch (error) {
        (0, _menuViewJsDefault.default).renderError(error);
    }
};
const menuController = async function(href) {
    try {
        window.location.hash = href;
        _modelJs.state.currentCategory = href.slice(1);
        //wow this is beautifuly working, because the beautiful productsController function I have created.
        await productsController(_modelJs.state.currentCategory);
        window.scrollTo({
            left: 0,
            top: document.querySelector(".products-section").getBoundingClientRect().top - document.body.getBoundingClientRect().top,
            behavior: "smooth"
        });
    } catch (error) {
        console.log(error);
    }
};
const searchController = async function(searchQuery) {
    try {
        await _modelJs.loadProducts();
        const foundProducts = _modelJs.searchResults(searchQuery);
        if (!foundProducts.length) throw new Error(`No products found! <br> Search query: ${searchQuery}`);
        (0, _searchViewJsDefault.default).changeGridLayout(2);
        (0, _searchViewJsDefault.default).renderSpinner();
        (0, _searchViewJsDefault.default).renderHeader(`Search Results`, `View your search results for ' <strong>${searchQuery}</strong> '`);
        (0, _searchViewJsDefault.default).render(foundProducts);
        (0, _mainNavigationJsDefault.default).toggleMenu();
        (0, _searchViewJsDefault.default).setScrollTo(".products-section");
    } catch (error) {
        (0, _searchViewJsDefault.default).renderHeader(`Oops! Something went wrong..`, `View error below`);
        (0, _mainNavigationJsDefault.default).toggleMenu();
        (0, _searchViewJsDefault.default).renderError(undefined, error);
    }
};
const productController = async function(productID) {
    try {
        console.log(productID);
        (0, _productViewJsDefault.default).renderSpinner();
        (0, _productViewJsDefault.default).renderHeader("", "");
        const productData = [
            await _modelJs.loadProduct(productID)
        ];
        console.log(productData);
        (0, _productViewJsDefault.default).render(productData);
        (0, _productViewJsDefault.default).changeGridLayout(1);
        (0, _productViewJsDefault.default).setScrollTo(".product-container");
    } catch (error) {
        (0, _productViewJsDefault.default).renderError(error);
    }
};
const initate = async function() {
    try {
        window.location.hash = "homepage";
        await productsController();
        await categoriesController();
        (0, _menuViewJsDefault.default).addHandlerMenuItemClicked(menuController);
        (0, _mainNavigationJsDefault.default).addHandlerLogoClicked(productsController);
        (0, _searchViewJsDefault.default).addSearchHandler(searchController);
        (0, _productViewJsDefault.default).addHandlerProductClicked(productController);
    } catch (error) {
        console.log(error);
    }
}();

},{"core-js/modules/es.regexp.flags.js":"gSXXb","core-js/modules/web.immediate.js":"49tUX","./model.js":"Py0LO","./views/View.js":"iS7pi","./views/headerView.js":"79wXI","./views/menuView.js":"i6XNo","./views/favoritesView.js":"eUTdN","./views/productView.js":"iCNdF","./views/productsView.js":"c9r03","./views/mainNavigation.js":"b02rz","./views/searchView.js":"jYSxB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gSXXb":[function(require,module,exports) {
var global = require("962cc8592522751");
var DESCRIPTORS = require("c5322ba2b93eecd");
var defineBuiltInAccessor = require("89278e8349d44987");
var regExpFlags = require("8123169d82929656");
var fails = require("38f668c8537a9b5");
// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = global.RegExp;
var RegExpPrototype = RegExp.prototype;
var FORCED = DESCRIPTORS && fails(function() {
    var INDICES_SUPPORT = true;
    try {
        RegExp(".", "d");
    } catch (error) {
        INDICES_SUPPORT = false;
    }
    var O = {};
    // modern V8 bug
    var calls = "";
    var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
    var addGetter = function(key, chr) {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty(O, key, {
            get: function() {
                calls += chr;
                return true;
            }
        });
    };
    var pairs = {
        dotAll: "s",
        global: "g",
        ignoreCase: "i",
        multiline: "m",
        sticky: "y"
    };
    if (INDICES_SUPPORT) pairs.hasIndices = "d";
    for(var key in pairs)addGetter(key, pairs[key]);
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var result = Object.getOwnPropertyDescriptor(RegExpPrototype, "flags").get.call(O);
    return result !== expected || calls !== expected;
});
// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor(RegExpPrototype, "flags", {
    configurable: true,
    get: regExpFlags
});

},{"962cc8592522751":"i8HOC","c5322ba2b93eecd":"92ZIi","89278e8349d44987":"592rH","8123169d82929656":"9bz1x","38f668c8537a9b5":"hL6D2"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"92ZIi":[function(require,module,exports) {
var fails = require("32c55327a5080978");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"32c55327a5080978":"hL6D2"}],"hL6D2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"592rH":[function(require,module,exports) {
var makeBuiltIn = require("960397bce97574db");
var defineProperty = require("8863f2ea80402b57");
module.exports = function(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
        getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
        setter: true
    });
    return defineProperty.f(target, name, descriptor);
};

},{"960397bce97574db":"cTB4k","8863f2ea80402b57":"iJR4w"}],"cTB4k":[function(require,module,exports) {
var fails = require("5a4a403ea445a720");
var isCallable = require("906c597ba1ebf67e");
var hasOwn = require("259f7118aac08b77");
var DESCRIPTORS = require("cefa5ce9aa90f7");
var CONFIGURABLE_FUNCTION_NAME = require("a34c45f890b3cdb0").CONFIGURABLE;
var inspectSource = require("b84e8c71820c1957");
var InternalStateModule = require("d7216e52eacf29a4");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (String(name).slice(0, 7) === "Symbol(") name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = TEMPLATE.join(typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"5a4a403ea445a720":"hL6D2","906c597ba1ebf67e":"l3Kyn","259f7118aac08b77":"gC2Q5","cefa5ce9aa90f7":"92ZIi","a34c45f890b3cdb0":"l6Kgd","b84e8c71820c1957":"9jh7O","d7216e52eacf29a4":"7AMlF"}],"l3Kyn":[function(require,module,exports) {
var $documentAll = require("13ef1f9eef43f90a");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"13ef1f9eef43f90a":"5MHqB"}],"5MHqB":[function(require,module,exports) {
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"gC2Q5":[function(require,module,exports) {
var uncurryThis = require("ce924a1412e4429d");
var toObject = require("73fa194dfdb3e3aa");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"ce924a1412e4429d":"7GlkT","73fa194dfdb3e3aa":"5cb35"}],"7GlkT":[function(require,module,exports) {
var NATIVE_BIND = require("bfba769066a79a13");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"bfba769066a79a13":"i16Dq"}],"i16Dq":[function(require,module,exports) {
var fails = require("be90d95929ceb2ac");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"be90d95929ceb2ac":"hL6D2"}],"5cb35":[function(require,module,exports) {
var requireObjectCoercible = require("5723881cbe31d762");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"5723881cbe31d762":"fOR0B"}],"fOR0B":[function(require,module,exports) {
var isNullOrUndefined = require("644b3235cf8a9e1a");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
    return it;
};

},{"644b3235cf8a9e1a":"gM5ar"}],"gM5ar":[function(require,module,exports) {
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"l6Kgd":[function(require,module,exports) {
var DESCRIPTORS = require("ef9d6454d000f4b0");
var hasOwn = require("6788be9f7acca7ba");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"ef9d6454d000f4b0":"92ZIi","6788be9f7acca7ba":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
var uncurryThis = require("16cc737176fbcc2d");
var isCallable = require("7755b5fb45ce30f6");
var store = require("d40329f0d83cc481");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"16cc737176fbcc2d":"7GlkT","7755b5fb45ce30f6":"l3Kyn","d40329f0d83cc481":"l4ncH"}],"l4ncH":[function(require,module,exports) {
var global = require("730a82db07752b1");
var defineGlobalProperty = require("fad9dca29f506368");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"730a82db07752b1":"i8HOC","fad9dca29f506368":"ggjnO"}],"ggjnO":[function(require,module,exports) {
var global = require("ce668588378924b1");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"ce668588378924b1":"i8HOC"}],"7AMlF":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require("26b1bfe4da18bd69");
var global = require("9e7a29f7d02fbd20");
var isObject = require("a7f7b7ef63ac4df8");
var createNonEnumerableProperty = require("351ab7bcce80cd7a");
var hasOwn = require("56bd6b5806a85663");
var shared = require("4a0085301b041b44");
var sharedKey = require("e406b4b3faa38b5");
var hiddenKeys = require("dd15de9a76531fa3");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"26b1bfe4da18bd69":"2PZTl","9e7a29f7d02fbd20":"i8HOC","a7f7b7ef63ac4df8":"Z0pBo","351ab7bcce80cd7a":"8CL42","56bd6b5806a85663":"gC2Q5","4a0085301b041b44":"l4ncH","e406b4b3faa38b5":"eAjGz","dd15de9a76531fa3":"661m4"}],"2PZTl":[function(require,module,exports) {
var global = require("1db7a67ae4213361");
var isCallable = require("8e0441a13bcfc9b");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"1db7a67ae4213361":"i8HOC","8e0441a13bcfc9b":"l3Kyn"}],"Z0pBo":[function(require,module,exports) {
var isCallable = require("1193961b7faf7cd8");
var $documentAll = require("4aca90763a71231");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"1193961b7faf7cd8":"l3Kyn","4aca90763a71231":"5MHqB"}],"8CL42":[function(require,module,exports) {
var DESCRIPTORS = require("64b35f3245173aea");
var definePropertyModule = require("8f4367732ecfe626");
var createPropertyDescriptor = require("44cffdabe998fa02");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"64b35f3245173aea":"92ZIi","8f4367732ecfe626":"iJR4w","44cffdabe998fa02":"1lpav"}],"iJR4w":[function(require,module,exports) {
var DESCRIPTORS = require("d7bef6bdbcaafee6");
var IE8_DOM_DEFINE = require("2b97a65d078f881");
var V8_PROTOTYPE_DEFINE_BUG = require("43d8fb06ec4862a");
var anObject = require("bbfe6a6b62d0f0f2");
var toPropertyKey = require("a87e2a261ab95efb");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"d7bef6bdbcaafee6":"92ZIi","2b97a65d078f881":"qS9uN","43d8fb06ec4862a":"ka1Un","bbfe6a6b62d0f0f2":"4isCr","a87e2a261ab95efb":"5XWKd"}],"qS9uN":[function(require,module,exports) {
var DESCRIPTORS = require("adab3136949ad095");
var fails = require("d85499cc8d575332");
var createElement = require("2dbe7d865427c2a");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"adab3136949ad095":"92ZIi","d85499cc8d575332":"hL6D2","2dbe7d865427c2a":"4bOHl"}],"4bOHl":[function(require,module,exports) {
var global = require("1f25864d714dcbf7");
var isObject = require("a366faf94ab1b799");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"1f25864d714dcbf7":"i8HOC","a366faf94ab1b799":"Z0pBo"}],"ka1Un":[function(require,module,exports) {
var DESCRIPTORS = require("f03fb5d820be5b18");
var fails = require("6ea033738833d296");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
});

},{"f03fb5d820be5b18":"92ZIi","6ea033738833d296":"hL6D2"}],"4isCr":[function(require,module,exports) {
var isObject = require("3e3d366fab3caee8");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError($String(argument) + " is not an object");
};

},{"3e3d366fab3caee8":"Z0pBo"}],"5XWKd":[function(require,module,exports) {
var toPrimitive = require("d906ac397c9c5523");
var isSymbol = require("482108ff1a63ab09");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"d906ac397c9c5523":"a2mK1","482108ff1a63ab09":"4aV4F"}],"a2mK1":[function(require,module,exports) {
var call = require("9e273d37530f438a");
var isObject = require("2cf35d173d278b97");
var isSymbol = require("ea4d820977cd8634");
var getMethod = require("672e8e3dc80b6b75");
var ordinaryToPrimitive = require("112723b583aa8e8d");
var wellKnownSymbol = require("8dac7076241c66fe");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"9e273d37530f438a":"d7JlP","2cf35d173d278b97":"Z0pBo","ea4d820977cd8634":"4aV4F","672e8e3dc80b6b75":"9Zfiw","112723b583aa8e8d":"7MME2","8dac7076241c66fe":"gTwyA"}],"d7JlP":[function(require,module,exports) {
var NATIVE_BIND = require("798114768f51c31c");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"798114768f51c31c":"i16Dq"}],"4aV4F":[function(require,module,exports) {
var getBuiltIn = require("c663de19f303198");
var isCallable = require("b44cd81ef256a4f7");
var isPrototypeOf = require("16a578d20d455cc8");
var USE_SYMBOL_AS_UID = require("8b9f4d8c8a4746bf");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"c663de19f303198":"6ZUSY","b44cd81ef256a4f7":"l3Kyn","16a578d20d455cc8":"3jtKQ","8b9f4d8c8a4746bf":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
var global = require("8b80ed6e425f86c9");
var isCallable = require("5c18802570d0ae1e");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"8b80ed6e425f86c9":"i8HOC","5c18802570d0ae1e":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
var uncurryThis = require("ad1c82d60a46a14e");
module.exports = uncurryThis({}.isPrototypeOf);

},{"ad1c82d60a46a14e":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("3e5863e272ed4dde");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"3e5863e272ed4dde":"8KyTD"}],"8KyTD":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("65931d938c065a53");
var fails = require("bedede189d2fbee4");
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"65931d938c065a53":"bjFlO","bedede189d2fbee4":"hL6D2"}],"bjFlO":[function(require,module,exports) {
var global = require("7c30fcb9bd026ac1");
var userAgent = require("64e3561da735fec3");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"7c30fcb9bd026ac1":"i8HOC","64e3561da735fec3":"73xBt"}],"73xBt":[function(require,module,exports) {
var getBuiltIn = require("327cdc0f74867bd5");
module.exports = getBuiltIn("navigator", "userAgent") || "";

},{"327cdc0f74867bd5":"6ZUSY"}],"9Zfiw":[function(require,module,exports) {
var aCallable = require("263ba121a881ee8e");
var isNullOrUndefined = require("d1bd2c054bca10e0");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"263ba121a881ee8e":"gOMir","d1bd2c054bca10e0":"gM5ar"}],"gOMir":[function(require,module,exports) {
var isCallable = require("e1df8cccb0042112");
var tryToString = require("a836fe22d24fa50e");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError(tryToString(argument) + " is not a function");
};

},{"e1df8cccb0042112":"l3Kyn","a836fe22d24fa50e":"4O7d7"}],"4O7d7":[function(require,module,exports) {
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
var call = require("2b6724df758c89e6");
var isCallable = require("8e04ee9a07800d6e");
var isObject = require("fc097b895feb33c9");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw $TypeError("Can't convert object to primitive value");
};

},{"2b6724df758c89e6":"d7JlP","8e04ee9a07800d6e":"l3Kyn","fc097b895feb33c9":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
var global = require("89d6f9e5bf2c46ce");
var shared = require("dd50fdda346cb309");
var hasOwn = require("a89554bf220f3acc");
var uid = require("257d1fd57133450c");
var NATIVE_SYMBOL = require("201d363e4eb49252");
var USE_SYMBOL_AS_UID = require("3396b8ed3b4a9772");
var WellKnownSymbolsStore = shared("wks");
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol["for"];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if (NATIVE_SYMBOL && hasOwn(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
        else if (USE_SYMBOL_AS_UID && symbolFor) WellKnownSymbolsStore[name] = symbolFor(description);
        else WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
    return WellKnownSymbolsStore[name];
};

},{"89d6f9e5bf2c46ce":"i8HOC","dd50fdda346cb309":"i1mHK","a89554bf220f3acc":"gC2Q5","257d1fd57133450c":"a3SEE","201d363e4eb49252":"8KyTD","3396b8ed3b4a9772":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
var IS_PURE = require("1b71a8ca24fca270");
var store = require("bf7c4283d920469e");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.26.1",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"1b71a8ca24fca270":"5ZsyC","bf7c4283d920469e":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
module.exports = false;

},{}],"a3SEE":[function(require,module,exports) {
var uncurryThis = require("91c2fef9a26ec46e");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"91c2fef9a26ec46e":"7GlkT"}],"1lpav":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"eAjGz":[function(require,module,exports) {
var shared = require("2d570eb5585ee0d5");
var uid = require("8d65076b872448ec");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"2d570eb5585ee0d5":"i1mHK","8d65076b872448ec":"a3SEE"}],"661m4":[function(require,module,exports) {
module.exports = {};

},{}],"9bz1x":[function(require,module,exports) {
"use strict";
var anObject = require("5f68b5ba58626109");
// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function() {
    var that = anObject(this);
    var result = "";
    if (that.hasIndices) result += "d";
    if (that.global) result += "g";
    if (that.ignoreCase) result += "i";
    if (that.multiline) result += "m";
    if (that.dotAll) result += "s";
    if (that.unicode) result += "u";
    if (that.unicodeSets) result += "v";
    if (that.sticky) result += "y";
    return result;
};

},{"5f68b5ba58626109":"4isCr"}],"49tUX":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("3b481199889fbb00");
require("8999654a88a32010");

},{"3b481199889fbb00":"fOGFr","8999654a88a32010":"l7FDS"}],"fOGFr":[function(require,module,exports) {
var $ = require("30a1755440b96430");
var global = require("4206bb7fdc22a235");
var clearImmediate = require("dc7cff378ab4ff29").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"30a1755440b96430":"dIGt4","4206bb7fdc22a235":"i8HOC","dc7cff378ab4ff29":"7jDg7"}],"dIGt4":[function(require,module,exports) {
var global = require("cd41030c40110aa4");
var getOwnPropertyDescriptor = require("f65ead1ab2a140b7").f;
var createNonEnumerableProperty = require("29b17b29c2077ee1");
var defineBuiltIn = require("2d11186d62ab594c");
var defineGlobalProperty = require("fd298900692a7a44");
var copyConstructorProperties = require("4a5e3141756f6ba4");
var isForced = require("cea697d5b1f821f4");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"cd41030c40110aa4":"i8HOC","f65ead1ab2a140b7":"lk5NI","29b17b29c2077ee1":"8CL42","2d11186d62ab594c":"6XwEX","fd298900692a7a44":"ggjnO","4a5e3141756f6ba4":"9Z12i","cea697d5b1f821f4":"6uTCZ"}],"lk5NI":[function(require,module,exports) {
var DESCRIPTORS = require("cd37e206f84e79a0");
var call = require("d33b181efb4b685a");
var propertyIsEnumerableModule = require("af6e6eb875b0fea1");
var createPropertyDescriptor = require("f4e9ae26024de3fd");
var toIndexedObject = require("6e0e06c111228158");
var toPropertyKey = require("8b0d50db2ffa6ea");
var hasOwn = require("40967be338fc4b74");
var IE8_DOM_DEFINE = require("b2386f9e636a3d7");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"cd37e206f84e79a0":"92ZIi","d33b181efb4b685a":"d7JlP","af6e6eb875b0fea1":"7SuiS","f4e9ae26024de3fd":"1lpav","6e0e06c111228158":"jLWwQ","8b0d50db2ffa6ea":"5XWKd","40967be338fc4b74":"gC2Q5","b2386f9e636a3d7":"qS9uN"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"jLWwQ":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("f46e7d96bb3953");
var requireObjectCoercible = require("a8f3acd5d881efea");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"f46e7d96bb3953":"kPk5h","a8f3acd5d881efea":"fOR0B"}],"kPk5h":[function(require,module,exports) {
var uncurryThis = require("6e868c565d832eee");
var fails = require("3fd2826bfab4ff2e");
var classof = require("89b17294d4ba7dbb");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == "String" ? split(it, "") : $Object(it);
} : $Object;

},{"6e868c565d832eee":"7GlkT","3fd2826bfab4ff2e":"hL6D2","89b17294d4ba7dbb":"bdfmm"}],"bdfmm":[function(require,module,exports) {
var uncurryThis = require("bd59621e8c024c0a");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"bd59621e8c024c0a":"7GlkT"}],"6XwEX":[function(require,module,exports) {
var isCallable = require("2462f3f3bc592fe2");
var definePropertyModule = require("a5a87e8b1d29029c");
var makeBuiltIn = require("8752f43f66f82fe3");
var defineGlobalProperty = require("e893deea6e5003a7");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"2462f3f3bc592fe2":"l3Kyn","a5a87e8b1d29029c":"iJR4w","8752f43f66f82fe3":"cTB4k","e893deea6e5003a7":"ggjnO"}],"9Z12i":[function(require,module,exports) {
var hasOwn = require("14b27572aaa0e1d7");
var ownKeys = require("c62357eb6b816dd6");
var getOwnPropertyDescriptorModule = require("76187d86f6dde816");
var definePropertyModule = require("1b35867293a28ee");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"14b27572aaa0e1d7":"gC2Q5","c62357eb6b816dd6":"1CX1A","76187d86f6dde816":"lk5NI","1b35867293a28ee":"iJR4w"}],"1CX1A":[function(require,module,exports) {
var getBuiltIn = require("f4f4366663fef78");
var uncurryThis = require("6e3ad5cb3a35e878");
var getOwnPropertyNamesModule = require("c8a10d8eb51a6494");
var getOwnPropertySymbolsModule = require("711e2f74a88669db");
var anObject = require("38e41877dfb6d40c");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"f4f4366663fef78":"6ZUSY","6e3ad5cb3a35e878":"7GlkT","c8a10d8eb51a6494":"fjY04","711e2f74a88669db":"4DWO3","38e41877dfb6d40c":"4isCr"}],"fjY04":[function(require,module,exports) {
var internalObjectKeys = require("c4aeb17ac64b2ddb");
var enumBugKeys = require("2d4861b4712f4d52");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"c4aeb17ac64b2ddb":"hl5T1","2d4861b4712f4d52":"9RnJm"}],"hl5T1":[function(require,module,exports) {
var uncurryThis = require("963b978b5082f3e1");
var hasOwn = require("879c3d94854e14d");
var toIndexedObject = require("bf9d4b99d5c831d9");
var indexOf = require("9cf7cb1dd56e4ba8").indexOf;
var hiddenKeys = require("28a0c8dd090b7885");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"963b978b5082f3e1":"7GlkT","879c3d94854e14d":"gC2Q5","bf9d4b99d5c831d9":"jLWwQ","9cf7cb1dd56e4ba8":"n5IsC","28a0c8dd090b7885":"661m4"}],"n5IsC":[function(require,module,exports) {
var toIndexedObject = require("c174fe2ad4e01057");
var toAbsoluteIndex = require("e65a0ec6aa379e24");
var lengthOfArrayLike = require("4cf265a1302438dd");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"c174fe2ad4e01057":"jLWwQ","e65a0ec6aa379e24":"5yh27","4cf265a1302438dd":"lY4mS"}],"5yh27":[function(require,module,exports) {
var toIntegerOrInfinity = require("296a4b373a3dad54");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"296a4b373a3dad54":"kLXGe"}],"kLXGe":[function(require,module,exports) {
var trunc = require("35d65155ee0a59af");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"35d65155ee0a59af":"7O8gb"}],"7O8gb":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
var toLength = require("cc9d3fd0c58237da");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"cc9d3fd0c58237da":"fU04N"}],"fU04N":[function(require,module,exports) {
var toIntegerOrInfinity = require("5cd4a2ac386cc05b");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"5cd4a2ac386cc05b":"kLXGe"}],"9RnJm":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
var fails = require("248b72e955c193bc");
var isCallable = require("5b2e1a368a4a40e6");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"248b72e955c193bc":"hL6D2","5b2e1a368a4a40e6":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
var global = require("fb225d70fb62b3a");
var apply = require("6245f800f8d62e39");
var bind = require("ab2dc3fbf55f851e");
var isCallable = require("973b27f64f2cb58a");
var hasOwn = require("2972db9c3917665");
var fails = require("35c026f758622ade");
var html = require("adafa3dc0ef933c6");
var arraySlice = require("ef048abcc9e34630");
var createElement = require("8c7e8bf04caa758a");
var validateArgumentsLength = require("3cfad6fa29c745c2");
var IS_IOS = require("489237d51deced7e");
var IS_NODE = require("d6edbb28ecbc11e6");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
} catch (error) {}
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var listener = function(event) {
    run(event.data);
};
var post = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(post)) {
        defer = post;
        global.addEventListener("message", listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"fb225d70fb62b3a":"i8HOC","6245f800f8d62e39":"148ka","ab2dc3fbf55f851e":"7vpmS","973b27f64f2cb58a":"l3Kyn","2972db9c3917665":"gC2Q5","35c026f758622ade":"hL6D2","adafa3dc0ef933c6":"2pze4","ef048abcc9e34630":"RsFXo","8c7e8bf04caa758a":"4bOHl","3cfad6fa29c745c2":"b9O3D","489237d51deced7e":"bzGah","d6edbb28ecbc11e6":"2Jcp4"}],"148ka":[function(require,module,exports) {
var NATIVE_BIND = require("595a0ede489593cd");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"595a0ede489593cd":"i16Dq"}],"7vpmS":[function(require,module,exports) {
var uncurryThis = require("313e11684e52b3e4");
var aCallable = require("b41db49e08b46e4e");
var NATIVE_BIND = require("5f0f69f559a6a35c");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"313e11684e52b3e4":"5Hioa","b41db49e08b46e4e":"gOMir","5f0f69f559a6a35c":"i16Dq"}],"5Hioa":[function(require,module,exports) {
var classofRaw = require("171aa8f44c3a8839");
var uncurryThis = require("a5ac088ddc84a78c");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"171aa8f44c3a8839":"bdfmm","a5ac088ddc84a78c":"7GlkT"}],"2pze4":[function(require,module,exports) {
var getBuiltIn = require("68c80297319b7a88");
module.exports = getBuiltIn("document", "documentElement");

},{"68c80297319b7a88":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
var uncurryThis = require("d3ed5e91eaf07a27");
module.exports = uncurryThis([].slice);

},{"d3ed5e91eaf07a27":"7GlkT"}],"b9O3D":[function(require,module,exports) {
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw $TypeError("Not enough arguments");
    return passed;
};

},{}],"bzGah":[function(require,module,exports) {
var userAgent = require("b98f3c406d6f6cff");
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"b98f3c406d6f6cff":"73xBt"}],"2Jcp4":[function(require,module,exports) {
var classof = require("59f6778e1e746cb0");
var global = require("606df7597d174036");
module.exports = classof(global.process) == "process";

},{"59f6778e1e746cb0":"bdfmm","606df7597d174036":"i8HOC"}],"l7FDS":[function(require,module,exports) {
var $ = require("bf972fdce83d237e");
var global = require("7c26606e520cd5d5");
var setImmediate = require("9d6d6ac362873c2a").set;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"bf972fdce83d237e":"dIGt4","7c26606e520cd5d5":"i8HOC","9d6d6ac362873c2a":"7jDg7"}],"Py0LO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AppData", ()=>AppData);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadCategories", ()=>loadCategories);
parcelHelpers.export(exports, "loadProducts", ()=>loadProducts);
parcelHelpers.export(exports, "searchResults", ()=>searchResults);
parcelHelpers.export(exports, "loadProduct", ()=>loadProduct);
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const AppData = {
    categories: [],
    categories_subheading: {
        electronics: "Innovative Electronics just for you!",
        jewelery: "Beautiful Jewelery just for you!",
        "men's clothing": "Manly clothes for a gentleman!",
        "women's clothing": "The wardrobe a lady needs!"
    },
    products_info: {
        products: [],
        get product_count () {
            return this.products.length;
        }
    }
};
const state = {
    product: undefined,
    currentCategory: "homepage",
    search: {
        results: [],
        page: 1,
        resultsPerPage: (0, _configJs.RES_PER_PAGE)
    },
    cart: [],
    favorites: []
};
const loadCategories = async function() {
    try {
        const categories = [
            ...new Set(await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}/categories`))
        ];
        AppData.categories = categories;
    } catch (error) {
        throw error;
    }
};
const loadProducts = async function(category) {
    try {
        // if (!category) {
        //   const products = await AJAX(`${API_URL}`);
        //   AppData.products_info.products = products;
        //   return;
        // }
        // const products = await AJAX(`${API_URL}/category/${category}`);
        // AppData.products_info.products = products;
        const products = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}/${category ? `category/${category}` : ""}`);
        AppData.products_info.products = products;
    } catch (error) {
        throw error;
    }
};
const searchResults = function(searchQuery) {
    const foundProducts = AppData.products_info.products.filter((product)=>product.title.toLowerCase().includes(searchQuery));
    return foundProducts;
};
const loadProduct = async function(productID) {
    try {
        const product = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}/${productID}`);
        return product;
    } catch (error) {
        throw error;
    }
};

},{"./config.js":"4Wc5b","./helpers.js":"6s1be","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Wc5b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
const TIMEOUT_SEC = 10;
const RES_PER_PAGE = 10;
const API_URL = `https://fakestoreapi.com/products`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6s1be":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
var _configJs = require("./config.js");
const timeout = function(time) {
    return new Promise(function(_, reject) {
        setTimeout(()=>{
            reject(new Error("The request timed out! The request took too long!"));
        }, time * 1000);
    });
};
const AJAX = async function(url, options, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url, options);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _configJs.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (error) {
        // rethrowing the error in order to handle it in the original loadRecipe async function which is calling the getJSON.
        throw error;
    }
};

},{"./config.js":"4Wc5b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iS7pi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    parentElement = document.querySelector(".products");
    #data;
    render(data, render = true, clear = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this.#data = data;
        if (clear) this.clear();
        const markup = this.generateMarkup(this.#data);
        if (!render) return;
        this.parentElement.insertAdjacentHTML("beforeend", markup);
    }
    clear() {
        this.parentElement.innerHTML = "";
    }
    renderSpinner(specifiecElement = this.parentElement) {
        const markup = `
      <div class="loader"></div>
    `;
        this.clear();
        specifiecElement.insertAdjacentHTML("beforeend", markup);
    }
    renderHeader(heading = "Trending", subheading = "Our most trending items!") {
        const mainHeading = document.querySelector(".section-heading");
        const subHeading = document.querySelector(".section-subheading");
        mainHeading.innerHTML = heading;
        subHeading.innerHTML = subheading;
    }
    renderError(errorCode = "", error = this.errorMsg) {
        this.clear();
        const markup = `<div class="error"><p>${error}<br> ${errorCode}</p>
  </div>`;
        this.parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    changeGridLayout(columns) {
        this.parentElement.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    }
    setScrollTo(elementRelative) {
        window.scrollTo({
            left: 0,
            top: document.querySelector(elementRelative).getBoundingClientRect().top - document.body.getBoundingClientRect().top,
            behavior: "smooth"
        });
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"79wXI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class HeaderView {
    constructor(){
        this.#stickyNavigation();
    }
    #stickyNavigation() {
        const header = document.querySelector("header");
        const headerHeight = header.offsetHeight;
        const mainElement = document.querySelector("main");
        mainElement.style.marginTop = `${headerHeight}px`;
    }
}
exports.default = new HeaderView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6XNo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class menuView extends (0, _viewDefault.default) {
    parentElement = document.querySelector(".menu-container > .menu-list");
    errorMsg = "Categories failed loading.. Try reloading the page.";
    addHandlerMenuItemClicked(func) {
        this.parentElement.addEventListener("click", function(e) {
            const href = e.target.closest(".category-item")?.querySelector(".category-link").getAttribute("href");
            if (!href || e.target.closest(".search-container")) return;
            func(href);
        });
    }
    generateMarkup(data) {
        const categoryArr = data.reverse();
        const markup = categoryArr.map((category)=>{
            return `<li class="menu-item category-item"><a href="#${category}"class="link category-link">${category[0].toUpperCase() + category.slice(1)}</a></li>`;
        }).join("");
        return markup;
    }
}
exports.default = new menuView();

},{"./View":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eUTdN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class FavortiesView extends (0, _viewDefault.default) {
    constructor(){
        super();
    }
}
exports.default = new FavortiesView();

},{"./View":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iCNdF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class ProductView extends (0, _viewDefault.default) {
    errorMsg = `An error has occured loading the requested product. Please try to reload.`;
    addHandlerProductClicked(func) {
        this.parentElement.addEventListener("click", function(e) {
            e.preventDefault();
            const target = e.target.closest(".product-container.preview");
            const returnsTargets = e.target.closest(".interaction-buttons-container");
            if (!target || returnsTargets) return;
            func(target.dataset.id);
        });
    }
    generateMarkup(data) {
        const markup = data.map((product)=>{
            return `
      <div class="product-container" data-id="${product.id}">
      <img class="product-image " style="margin-bottom:2rem;" src="${product.image}" alt="${product.description}" />
      <div class="product-headings-container" style="border-top: 2px solid #4d4d4d;">
        <p class="product-heading" style="font-size: 3.2rem; white-space: initial; margin-bottom:1rem; padding-top:1rem;">${product.title}</p>
        <p class="product-description">${product.description}</p>
        <p class="product-stats "><span class="rating">Rating: ${"⭐".repeat(Math.round(product.rating.rate))}</span><span class="stock">Left in stock: ${product.rating.count}</span> </p>
        <span class="product-price" style="font-size: 2.4rem; white-space: initial; margin-bottom:2rem; width: 80%; margin-inline:auto; font-weight:bold;
        ">${product.price}$</span>
      </div>
      <div class="interaction-buttons-container" style="width: 70%; height:auto;">
        <button class="btn purchase-btn" style="font-size: 3rem; padding:1rem;">purchase</button>
        <button
          class="btn add-to-cart-btn material-symbols-outlined interaction-icon" style="font-size: 3.4rem;"
        >
          add_shopping_cart
        </button>
      </div>
      </div>
      `;
        }).join("");
        return markup;
    }
}
exports.default = new ProductView();

},{"./View":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c9r03":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class ProductsView extends (0, _viewDefault.default) {
    errorMsg = `An error has occured loading the available products for this page. Please try to reload.`;
    generateMarkup(data) {
        const markup = data.map((product)=>{
            return `
      <div class="product-container preview" data-id="${product.id}">
      <img class="product-image" src="${product.image}" alt="${product.description}" />
      <div class="product-headings-container">
        <div class="product-heading">${product.title}</div>
        <span class="product-price">${product.price}$</span>
      </div>
      <div class="interaction-buttons-container">
        <button class="btn purchase-btn">purchase</button>
        <button
          class="btn add-to-cart-btn material-symbols-outlined interaction-icon"
        >
          add_shopping_cart
        </button>
      </div>
      </div>
      `;
        }).join("");
        return markup;
    }
}
exports.default = new ProductsView();

},{"./View":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b02rz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class mainNavigation extends (0, _viewDefault.default) {
    parentElement = document.querySelector(".main-navigation");
    menuOpen = false;
    constructor(){
        super();
        this.#handleMenuButtonClick();
    }
    addHandlerLogoClicked(func) {
        document.querySelector(".main-logo").closest(".main-logo-container").addEventListener("click", function(e) {
            e.preventDefault();
            func();
            window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth"
            });
        });
    }
    #handleMenuButtonClick() {
        // bad code
        // window.addEventListener('click', e => {
        //   e.preventDefault();
        //   const menuElement = e.target.closest(`[data-btn-name="menu-btn"]`);
        //   const overlay = document.querySelector('.overlay');
        //   const menuContainer = document.querySelector('.menu-container');
        //   // disable scrolling while menu is open
        //   overlay.addEventListener('touchmove', e => e.preventDefault());
        //   menuContainer.addEventListener('touchmove', e => e.preventDefault());
        //   if (e.target.closest('.search-container')) return;
        //   if (overlay && !overlay.classList.contains('hidden'))
        //     return this.toggleMenu();
        //   if (!menuElement) return;
        //   this.toggleMenu();
        // });
        // window.addEventListener('click', e => {
        //   e.stopPropagation();
        //   if (e.target === document.querySelector('.menu-container')) return;
        //   if (e.target.closest('.search-container')) return;
        //   if (e.target.closest('[data-btn-name="menu-btn"]') || this.menuOpen)
        //     return this.toggleMenu();
        //   console.log('test');
        //   return;
        // });
        // FINALLY I FOUND THE PROBLEM FOR THE SHIT SUBMIT FORM NOT WORKING!!!
        // BECAUSE OF THE CODE ABOVE IT DOESNT WORK, THE WINDOW EVENT LISTENER WAS RETURNING ON IT SO IT DIDNT RESPOND. BECAUSE I PREVENTED DEFAULT TWICE ON THE WHOLE WINDOW!!!!! REMOVE THE e.preventDefault();
        /** SOLUTION!! EVENT PROPOGATION::
     * Why it happened?
     * Because the eventListener was attached to the window object and everytime it fired it prevented the default behavior.
     * Because the window.preventDefault() propogated down and it fired on the search form that's why the form didnt send, because it's behavior was prevented from the window.addlistenerEvent e.preventDefault();
     */ //Fixed code below:
        window.addEventListener("click", (e)=>{
            e.stopPropagation();
            if (e.target === document.querySelector(".menu-container")) return;
            if (e.target.closest(".search-container")) return;
            if (e.target.closest('[data-btn-name="menu-btn"]') || this.menuOpen) return this.toggleMenu();
            return;
        });
    }
    #changeMenuIcon() {
        const menuIcon = document.querySelector(`[data-btn-name="menu-btn"] > span`);
        menuIcon.textContent = menuIcon.textContent === "manage_search" ? "close" : "manage_search";
    }
    toggleMenu() {
        const overlay = document.querySelector(".overlay");
        const menuContainer = document.querySelector(".menu-container");
        const mainElement = document.querySelector("main");
        overlay.classList.toggle("hidden");
        menuContainer.classList.contains("hidden") ? menuContainer.style.transform = "translateX(0)" : menuContainer.style.transform = "translateX(100%)";
        menuContainer.classList.toggle("hidden");
        mainElement.classList.toggle("blur");
        this.#changeMenuIcon();
        this.menuOpen = this.menuOpen === false ? this.menuOpen = true : this.menuOpen = false;
        document.body.style.overflow = !document.body.style.overflow ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
    }
}
exports.default = new mainNavigation();

},{"./View":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jYSxB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class SearchView extends (0, _viewDefault.default) {
    #parentElement = document.querySelector(".search-form");
    #getQuery() {
        return this.#parentElement.querySelector(".search-bar").value;
    }
    generateMarkup(data) {
        const markup = data.map((product)=>{
            return `
      <div class="product-container preview" data-id="${product.id}">
      <img class="product-image" src="${product.image}" alt="${product.description}" />
      <div class="product-headings-container">
        <div class="product-heading">${product.title}</div>
        <span class="product-price">${product.price}$</span>
      </div>
      <div class="interaction-buttons-container">
        <button class="btn purchase-btn">purchase</button>
        <button
          class="btn add-to-cart-btn material-symbols-outlined interaction-icon"
        >
          add_shopping_cart
        </button>
      </div>
      </div>
      `;
        }).join("");
        return markup;
    }
    addSearchHandler(func) {
        this.#parentElement.addEventListener("submit", (function(e) {
            e.preventDefault();
            const query = this.#getQuery();
            // if (!query || query.length < 3) return;
            if (!query) return;
            func(query);
        }).bind(this));
    }
}
exports.default = new SearchView();

},{"./View":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bxIRe","1GgH0"], "1GgH0", "parcelRequire512a")

//# sourceMappingURL=index.850bd9e5.js.map
