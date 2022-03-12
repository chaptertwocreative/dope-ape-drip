"use strict";
exports.id = 885;
exports.ids = [885];
exports.modules = {

/***/ 9885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zx": () => (/* binding */ Button),
/* harmony export */   "Ej": () => (/* binding */ FlexContainer),
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "bb": () => (/* binding */ RoadmapDot),
/* harmony export */   "x1": () => (/* binding */ Line)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Button = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  border: 0;
  background: none;
  background-color: ${(props)=>props.color || props.theme.primary
};
  border-radius: 6px;
  font-style: ${(props)=>props.italic && "italic"
};
  text-transform: ${(props)=>props.uppercase && "uppercase"
};
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  font-size: 28px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;
const FlexContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: ${(props)=>props.direction || "row"
};
  justify-content: ${(props)=>props.justify || "space-between"
};
  align-items: ${(props)=>props.alignItems || "center"
};
  align-content: ${(props)=>props.alignContent || "center"
};
  flex-wrap: ${(props)=>props.wrap ? "wrap" : "no-wrap"
};
  gap: ${(props)=>props.gap
};

  @media only screen and (max-width: 600px) {
    flex-direction: ${(props)=>props.direction || "column"
};
  }
`;
const Title = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2)`
  font-size: 64px;
  margin: 0;
  text-transform: uppercase;
  margin-bottom: 1rem;
  @media only screen and (max-width: 768px) {
    font-size: 50px;
    margin-bottom: 2rem;
  }
`;
const RoadmapDot = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  background-color: #0c0c0c;
  border: 8px solid #fbc50d;
  font-style: italic;
  font-size: 14px;

  @media only screen and (max-width: 768px) {
    height: 45px;
    width: 45px;
  }
  @media only screen and (max-width: 430px) {
    height: 40px;
    width: 40px;
    border-width: 6px;
  }
`;
const Line = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: absolute;
  height: 180px;
  width: 8px;
  background-color: #fbc50d;
  transform: translate(34px, 50%);
  z-index: -1;

  @media only screen and (max-width: 768px) {
    transform: translate(26px, 50%);
    height: 175px;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;


/***/ })

};
;