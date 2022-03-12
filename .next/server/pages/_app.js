"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,761];
exports.modules = {

/***/ 5566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: "PT Sans", san-serif;
    background-color: #0C0C0C;
    color: white;
  }

  a {
    text-decoration: none;
    color: #0c0c0c;
    cursor: pointer;
  }

  p {
    @media only screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);


/***/ }),

/***/ 4418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: ./src/pages/GlobalStyles.js
var GlobalStyles = __webpack_require__(5566);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(8054);
;// CONCATENATED MODULE: external "@ethersproject/providers"
const providers_namespaceObject = require("@ethersproject/providers");
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/context/User.js
var User = __webpack_require__(2395);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: ./src/pages/_app.js












const theme = {
    primary: "#FBC50D"
};
function App({ Component , pageProps  }) {
    function getLibrary(provider) {
        const library = new providers_namespaceObject.Web3Provider(provider);
        library.pollingInterval = 15000;
        return library;
    }
    const Web3ReactProviderDefault = (0,dynamic["default"])(null, {
        loadableGenerated: {
            modules: [
                "_app.js -> " + "../components/defaultprovider"
            ]
        },
        ssr: false
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "/images/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Dope Ape Drip Society"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyles["default"], {}),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Web3ReactProvider, {
                getLibrary: getLibrary,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Web3ReactProviderDefault, {
                    getLibrary: getLibrary,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
                        theme: theme,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(User/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            })
                        })
                    })
                })
            })
        ]
    }));
};


/***/ }),

/***/ 2792:
/***/ ((module) => {

module.exports = require("@ethersproject/contracts");

/***/ }),

/***/ 8054:
/***/ ((module) => {

module.exports = require("@web3-react/core");

/***/ }),

/***/ 6590:
/***/ ((module) => {

module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ 9795:
/***/ ((module) => {

module.exports = require("@web3-react/walletconnect-connector");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 8519:
/***/ ((module) => {

module.exports = require("web3");

/***/ }),

/***/ 2057:
/***/ ((module) => {

module.exports = require("constants");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [849,395], () => (__webpack_exec__(4418)));
module.exports = __webpack_exports__;

})();