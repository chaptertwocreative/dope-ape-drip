"use strict";
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 9253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Dope-Ape-Circle.2b80f5b5.png","height":3000,"width":3000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAxElEQVR42k2PzQpBURSFd1FMZChkojtRRClh7AXQlZmUGJt5D3MvIUmKMkWGHkBSMvNzOfeeda2BU75aZ6++2p22GABd8H2/w2ShVV4MFAFot8XZxutagve22Jt0A86gwLmFWCwhaik9tZK1M5AoXQL3U1iEqKlUvOO4CPUY6fNq4x6GfTWTqvki5e67ae+0iLPPmbW+7iLu1rYAJIWPTdkSgudlAvXs/xZrTMVcYANowPuUOTNMk64j/1DGuFFnbPac8V+HXZP3cjeXfgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 5553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8121);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const Main = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().main)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 7.5rem;

  @media only screen and (max-width: 768px) {
    padding: 0 3rem;
  }

  @media only screen and (max-width: 430px) {
    padding: 0 2rem;
  }
`;
const Layout = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const isHome = router.pathname !== "/";
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules__WEBPACK_IMPORTED_MODULE_1__/* .NavBar */ .l2, {
                isHome: isHome
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Main, {
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules__WEBPACK_IMPORTED_MODULE_1__/* .Footer */ .$_, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 9202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);



const SocialContainer = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  height: 30px;
  width: 30px;
`;
const socialsMap = {
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
    discord: "https://discord.gg/",
    opensea: "https://opensea.io/collection/"
};
const SocialIconLink = ({ social , handles  })=>{
    const handle = handles[social] ? handles[social] : "";
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: `${socialsMap[social]}${handle}`,
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialContainer, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                src: `/${social}-logo.svg`,
                alt: `${social} logo`,
                layout: "responsive",
                height: 30,
                width: 30
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialIconLink);


/***/ }),

/***/ 8121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PJ": () => (/* reexport */ molecules_FaqLine),
  "$_": () => (/* reexport */ molecules_Footer),
  "pC": () => (/* reexport */ molecules_IconSingleColumn),
  "HS": () => (/* reexport */ molecules_MintBanner),
  "l2": () => (/* reexport */ molecules_NavBar),
  "N$": () => (/* reexport */ molecules_RoadmapLine)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/atoms/SocialIconLink.js
var SocialIconLink = __webpack_require__(9202);
// EXTERNAL MODULE: ./src/components/atoms/index.js
var atoms = __webpack_require__(9885);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/assets/Dope-Ape-Circle.png
var Dope_Ape_Circle = __webpack_require__(9253);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/molecules/Footer.js








const IFooter = (external_styled_components_default()).footer`
  position: relative;
  padding: 6rem 7.5rem 3rem 7.5rem;

  p {
    @media only screen and (max-width: 430px) {
      display: none;
    }
  }
`;
const ImageContainer = (external_styled_components_default()).div`
  height: 185px;
  width: 185px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;
const Line = (external_styled_components_default()).div`
  position: absolute;
  height: 30px;
  width: 100%;
  background-color: ${(props)=>props.theme.primary
};
  left: 0;
  bottom: 0;
`;
const Footer = ()=>{
    const router = (0,router_.useRouter)();
    const isHome = router.pathname !== "/";
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(IFooter, {
        style: {
            display: isHome ? "block" : "none"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(atoms/* FlexContainer */.Ej, {
                alignItems: "flex-end",
                style: {
                    marginBottom: "2rem"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "\xa9 Dope Ape Drip Society"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: Dope_Ape_Circle/* default */.Z,
                            alt: "DADs circle logo",
                            layout: "responsive",
                            height: 185,
                            width: 185
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(atoms/* FlexContainer */.Ej, {
                        gap: "1rem",
                        style: {
                            flexDirection: "row"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialIconLink/* default */.Z, {
                                social: "instagram",
                                handles: {
                                    instagram: "dopeapedripsociety"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialIconLink/* default */.Z, {
                                social: "twitter",
                                handles: {
                                    twitter: "dopeapedrip"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialIconLink/* default */.Z, {
                                social: "discord",
                                handles: {
                                    discord: "dopeapedrip"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialIconLink/* default */.Z, {
                                social: "opensea",
                                handles: {
                                    opensea: "dopeapedripsociety"
                                }
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Line, {})
        ]
    }));
};
/* harmony default export */ const molecules_Footer = (Footer);

;// CONCATENATED MODULE: ./src/assets/logo-word.png
/* harmony default export */ const logo_word = ({"src":"/_next/static/media/logo-word.b212ffd0.png","height":500,"width":1500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbElEQVR4nGP8fZRPjoGBwer//z8nGJl1pf7/OanNyCT26P//b4qMjEw7QAq0GBjEmv7/uHOexe7bl//fnkv8Pal8l5FH3Z7h//PpIAVcDKxOAiym65/9//kxlpGd/84rRsZTQid9Jf//PvANAKBxLddWz2y7AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/assets/Dope-Ape-Skull.png
/* harmony default export */ const Dope_Ape_Skull = ({"src":"/_next/static/media/Dope-Ape-Skull.1a9317e7.png","height":3000,"width":3000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAyElEQVR42mP4dYiB6f///wy/z8TL/T6mU/37qGIUiA8WO6rACGb82svA9WsXQ+qvAwyrfx1h+P/7qFQ1RIE4E0TlpWq5v69Ot/x9cSzt90nPu78OM9z5fdyCHyTHADVOEIhn/Pv3Nw9Ir/377tqqDwwMrHAFQAlVIF7+79+/u0D+IyC2gmpkhir4JwOk+4H4BpB94N/fP35QjSwQBd/fyfz7+mLL3/e3toGt+vVFGGoCI8O/L08ZwYq+vkz69+1NIchYqKlg7wMAE1q75cX92NgAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(420);
// EXTERNAL MODULE: external "react-burger-menu"
var external_react_burger_menu_ = __webpack_require__(6615);
;// CONCATENATED MODULE: ./src/components/molecules/NavBar.js










const Container = (external_styled_components_default()).nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 7.5rem;

  @media only screen and (max-width: 768px) {
    margin: 1rem 3rem;
  }
`;
const Links = (external_styled_components_default()).div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    margin: 0 1rem;
    color: white;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      text-decoration: underline;
    }

    &:active {
      text-weight: 700;
    }

    @media only screen and (max-width: 768px) {
      font-size: 15px;
    }
    @media only screen and (max-width: 425px) {
      text-align: center;
      display: inline-block;
    }
  }

  @media only screen and (max-width: 425px) {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .social-links {
    margin: 0 0.5rem;
  }
`;
const Logo = (external_styled_components_default()).div`
  height: 70px;
  width: 210px;

  @media only screen and (max-width: 425px) {
    height: 50px;
    width: 75px;
  }
`;
const SocialIcon = (external_styled_components_default()).div`
  height: 30px;
  width: 30px;

  @media only screen and (max-width: 768px) {
    height: 20px;
    width: 20px;
  }
  @media only screen and (max-width: 430px) {
    height: 16px;
    width: 16px;
  }
`;
const NavBar = ({ isHome  })=>{
    const { width  } = (0,useWindowSize/* useWindowSize */.i)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: width <= 768 && isHome ? Dope_Ape_Skull : logo_word,
                        alt: "Dope Ape Drip Society Logo",
                        layout: "fixed",
                        height: width <= 768 && isHome ? 50 : 70,
                        width: width <= 768 && isHome ? 75 : 210
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    isHome && width > 768 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Links, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/home#mint",
                                        children: "Buy an ape"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/home#roadmap",
                                        children: "Roadmap"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/store",
                                        children: "Store"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/home#team",
                                        children: "Team"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/home#faqs",
                                        children: "FAQs"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Links, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://instagram.com/dopeapedripsociety",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "social-links",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: "/instagram-logo-gray.svg",
                                                alt: "instagram logo",
                                                height: 30,
                                                width: 30,
                                                layout: "fixed"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://twitter.com/dopeapedrip",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "social-links",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: "/twitter-logo-gray.svg",
                                                alt: "twitter logo",
                                                height: 30,
                                                width: 30,
                                                layout: "fixed"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://discord.gg/dopeapedrip",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "social-links",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: "/discord-logo-gray.svg",
                                                alt: "discord logo",
                                                height: 30,
                                                width: 30,
                                                layout: "fixed"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://opensea.io/collection/dopeapedripsociety",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "social-links",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: "/opensea-logo-gray.svg",
                                                alt: "opensea logo",
                                                height: 30,
                                                width: 30,
                                                layout: "fixed"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    isHome && width <= 768 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_burger_menu_.slide, {
                        right: true,
                        width: "85%",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/home#mint",
                                children: "Buy an ape"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/home#roadmap",
                                children: "Roadmap"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/store",
                                children: "Store"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/home#team",
                                children: "Team"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/home#faqs",
                                children: "FAQs"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(atoms/* FlexContainer */.Ej, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://instagram.com/dopeapedripsociety",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "social-links",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            src: "/instagram-logo-gray.svg",
                                            alt: "instagram logo",
                                            height: 30,
                                            width: 30
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://twitter.com/dopeapedrip",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "social-links",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            src: "/twitter-logo-gray.svg",
                                            alt: "twitter logo",
                                            height: 30,
                                            width: 30
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://discord.gg/dopeapedrip",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "social-links",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            src: "/discord-logo-gray.svg",
                                            alt: "discord logo",
                                            height: 30,
                                            width: 30
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://opensea.io/collection/",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "social-links",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            src: "/opensea-logo-gray.svg",
                                            alt: "opensea logo",
                                            height: 30,
                                            width: 30
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const molecules_NavBar = (NavBar);

;// CONCATENATED MODULE: ./src/components/molecules/MintBanner.js




const MintBanner_Container = (external_styled_components_default()).div`
  background-color: ${(props)=>props.theme.primary
};
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  @media only screen and (max-width: 768px) {
    padding: 2.5rem 3rem;
  }
  @media only screen and (max-width: 430px) {
    padding: 2rem;
    flex-direction: column;
  }
`;
const Text = (external_styled_components_default()).div`
  color: #1c1c1c;
  text-transform: uppercase;

  h2 {
    font-weight: 700;
    font-style: italic;
    font-size: 30px;
    margin: 0 0 0.5rem 0;
    @media only screen and (max-width: 768px) {
      font-size: 24px;
    }
    @media only screen and (max-width: 430px) {
      font-size: 20px;
      text-align: center;
    }
  }

  p {
    font-size: 20px;
    margin: 0;
    @media only screen and (max-width: 768px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 430px) {
      margin-bottom: 1rem;
      text-align: center;
    }
  }
`;
const MintBanner = ()=>{
    const { width  } = (0,useWindowSize/* useWindowSize */.i)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(MintBanner_Container, {
        id: "mint",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Text, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Buy an ape"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Don't miss your chance to join the Drip"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Button */.zx, {
                italic: true,
                uppercase: true,
                color: "#1C1C1C",
                style: {
                    width: width <= 768 ? 200 : 255
                },
                children: "Coming Soon"
            })
        ]
    }));
};
/* harmony default export */ const molecules_MintBanner = (MintBanner);

;// CONCATENATED MODULE: ./src/components/molecules/IconSingleColumn.js





const IconSingleColumn_ImageContainer = (external_styled_components_default()).div`
  height: 126px;
  width: 126px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  @media only screen and (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
  @media only screen and (max-width: 430px) {
    height: 180px;
    width: 180px;
  }
`;
const IconSingleColumn_Text = (external_styled_components_default()).div`
  text-align: center;
  h3 {
    margin: 1rem 0 0.5rem 0;
    font-size: 20px;
    @media only screen and (max-width: 768px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 430px) {
      font-size: 22px;
    }
  }
  p {
    margin: 0;
    width: 200px;
    color: #dbdbdb;
    @media only screen and (max-width: 768px) {
      width: 150px;
      font-size: 14px;
    }
    @media only screen and (max-width: 430px) {
      font-size: 16px;
      width: 90%;
      margin: 0 auto;
    }
  }
`;
const IconSingleColumn = ({ imageSrc , alt , title , description  })=>{
    const { width  } = (0,useWindowSize/* useWindowSize */.i)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(atoms/* FlexContainer */.Ej, {
        direction: "column",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(IconSingleColumn_ImageContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: imageSrc,
                    alt: alt,
                    layout: "responsive",
                    width: width <= 768 ? 100 : 126,
                    height: width <= 768 ? 100 : 126
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(IconSingleColumn_Text, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: description
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const molecules_IconSingleColumn = (IconSingleColumn);

;// CONCATENATED MODULE: ./src/components/molecules/RoadmapLine.js



const RoadmapItem = (external_styled_components_default()).p`
  width: 75%;
  line-height: 170%;
  font-size: 18px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const RoadmapLine = ({ text , idx  })=>{
    let percentage;
    if (idx === 6) {
        percentage = 100;
    } else {
        percentage = (idx + 1) * 14;
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(atoms/* FlexContainer */.Ej, {
        style: {
            width: "100%"
        },
        className: "roadmapLineContainer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Line */.x1, {
                className: "roadmap-line"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(atoms/* RoadmapDot */.bb, {
                children: [
                    percentage,
                    "%"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(RoadmapItem, {
                children: text
            })
        ]
    }));
};
/* harmony default export */ const molecules_RoadmapLine = (RoadmapLine);

;// CONCATENATED MODULE: ./src/components/molecules/FaqLine.js



const FaqLine_Container = (external_styled_components_default()).div`
  border-bottom: 1px solid #d8d8d8;
  padding: 1rem 0;

  .question-section {
    background: none;
    border: none;
    cursor: pointer;
  }

  .answer {
    margin-left: 8px;
    margin-right: 8px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.6s ease;
    text-align: left;
    color: white;
    line-height: 170%;
  }

  .faq-question {
    color: ${(prop)=>prop.theme.primary
};
    font-size: 20px;
    text-align: left;
  }
`;
const FaqLine = ({ question , answer  })=>{
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(false);
    const contentRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : "0px";
    }, [
        contentRef,
        active
    ]);
    const toggleAccordion = ()=>{
        setActive(!active);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(FaqLine_Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
            onClick: toggleAccordion,
            className: `question-section ${active}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "faq-question",
                    children: question
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    ref: contentRef,
                    className: active ? `answer answer-divider` : `answer`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "faq-answer",
                        children: answer
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const molecules_FaqLine = (FaqLine);

;// CONCATENATED MODULE: ./src/components/molecules/index.js









/***/ }),

/***/ 420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const { 0: windowSize , 1: setWindowSize  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: undefined,
        height: undefined
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return ()=>window.removeEventListener("resize", handleResize)
        ;
    }, []) // Empty array ensures that effect is only run on mount
    ;
    return windowSize;
}


/***/ })

};
;