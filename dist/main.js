/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/Fonts/Roboto-Light.ttf */ "./src/Fonts/Roboto-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/Fonts/Roboto-Medium.ttf */ "./src/Fonts/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../dist/Images/radarGif.gif */ "./dist/Images/radarGif.gif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: 'RobotoMedium';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-weight: bold;
}

:root {
    --ship: rgb(0, 0, 216);
    --hit: rgb(196, 0, 0);
    --sunk: rgb(128, 0, 0);
    --miss: grey;
    --background: rgb(0, 0, 91);
}

* {
    font-family: 'Roboto';
}

body {
    display: grid;
    justify-content: center;
    justify-items: center;
    background-color: var(--background);
    color: rgb(189, 191, 193);
}

h3 {
    margin: 0;
}

.heading {
    font-family: 'RobotoMedium';
}

.title {
    margin: 20px;
    height: 100px;
    width: 400px;
    object-fit: cover;
    object-position: bottom;
}

.playerBoard,
.computerBoard {
    display: grid;
    grid-template-columns: repeat(10, 25px);
    gap: 3px;
    background-color: rgba(0, 0, 91, 0.713);
}

.playerBoardWrap,
.computerBoardWrap {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-position: center;
}

.cell {
    border-style: solid;
    width: 20px;
    height: 20px;
    border-color: rgb(189, 191, 193);
}

.content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    column-gap: 8vw;
    justify-items: center;
    align-self: center;
    margin-top: 30px;
}

.button {
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    color: var(--background);
    font-weight: 1000;
    border-style: none;
}

.miss {
    background-color: var(--miss);
}

.hit {
    background-color: var(--hit);
}

.ship {
    background-color: var(--ship);
}

.shipSunk {
    background-color: var(--sunk);
}

.computerShot {
    background-color: var(--miss);
}

.computerShot.ship {
    background-color: var(--hit);
}

.computerShot.ship.shipSunk {
    background-color: var(--sunk);
}

.winning-message {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: blue;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 5rem;
    font-family: 'Courier New', Courier, monospace;
    flex-direction: column;
}

.winning-message.show {
    display: flex;
}

.playerCellVertical:hover {
    background-color: var(--ship);
    height: 523%;

}

.playerCellHorizontal:hover {
    background-color: var(--ship);
    width: 523%;
}

.playerCellVertical.four:hover {
    background-color: var(--ship);
    height: 410%;
}

.playerCellHorizontal.four:hover {
    background-color: var(--ship);
    width: 410%;
}

.playerCellVertical.three:hover {
    background-color: var(--ship);
    height: 300%;
}

.playerCellHorizontal.three:hover {
    background-color: var(--ship);
    width: 300%;
}

.playerCellVertical.two:hover {
    background-color: var(--ship);
    height: 190%;
}

.playerCellHorizontal.two:hover {
    background-color: var(--ship);
    width: 190%;
}

.instruction {
    display: grid;
    justify-content: center;
    align-content: center;
    margin-top: 30px;
    border-style: solid;
    border-radius: 20px;
    height: 60px;
    width: 300px;
}`, "",{"version":3,"sources":["webpack://./src/CSS/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAAqC;AACzC;;AAEA;IACI,2BAA2B;IAC3B,4CAAsC;IACtC,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;IACrB,sBAAsB;IACtB,YAAY;IACZ,2BAA2B;AAC/B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,mCAAmC;IACnC,yBAAyB;AAC7B;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;;IAEI,aAAa;IACb,uCAAuC;IACvC,QAAQ;IACR,uCAAuC;AAC3C;;AAEA;;IAEI,yDAAgD;IAChD,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,SAAS;IACT,eAAe;IACf,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,8CAA8C;IAC9C,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;;AAEhB;;AAEA;IACI,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,YAAY;AAChB","sourcesContent":["@font-face {\n    font-family: 'Roboto';\n    src: url(/src/Fonts/Roboto-Light.ttf);\n}\n\n@font-face {\n    font-family: 'RobotoMedium';\n    src: url(/src/Fonts/Roboto-Medium.ttf);\n    font-weight: bold;\n}\n\n:root {\n    --ship: rgb(0, 0, 216);\n    --hit: rgb(196, 0, 0);\n    --sunk: rgb(128, 0, 0);\n    --miss: grey;\n    --background: rgb(0, 0, 91);\n}\n\n* {\n    font-family: 'Roboto';\n}\n\nbody {\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    background-color: var(--background);\n    color: rgb(189, 191, 193);\n}\n\nh3 {\n    margin: 0;\n}\n\n.heading {\n    font-family: 'RobotoMedium';\n}\n\n.title {\n    margin: 20px;\n    height: 100px;\n    width: 400px;\n    object-fit: cover;\n    object-position: bottom;\n}\n\n.playerBoard,\n.computerBoard {\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    gap: 3px;\n    background-color: rgba(0, 0, 91, 0.713);\n}\n\n.playerBoardWrap,\n.computerBoardWrap {\n    background-image: url(/dist/Images/radarGif.gif);\n    background-position: center;\n}\n\n.cell {\n    border-style: solid;\n    width: 20px;\n    height: 20px;\n    border-color: rgb(189, 191, 193);\n}\n\n.content {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 20px;\n    column-gap: 8vw;\n    justify-items: center;\n    align-self: center;\n    margin-top: 30px;\n}\n\n.button {\n    padding: 10px;\n    border-radius: 10px;\n    background-color: white;\n    color: var(--background);\n    font-weight: 1000;\n    border-style: none;\n}\n\n.miss {\n    background-color: var(--miss);\n}\n\n.hit {\n    background-color: var(--hit);\n}\n\n.ship {\n    background-color: var(--ship);\n}\n\n.shipSunk {\n    background-color: var(--sunk);\n}\n\n.computerShot {\n    background-color: var(--miss);\n}\n\n.computerShot.ship {\n    background-color: var(--hit);\n}\n\n.computerShot.ship.shipSunk {\n    background-color: var(--sunk);\n}\n\n.winning-message {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: blue;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-size: 5rem;\n    font-family: 'Courier New', Courier, monospace;\n    flex-direction: column;\n}\n\n.winning-message.show {\n    display: flex;\n}\n\n.playerCellVertical:hover {\n    background-color: var(--ship);\n    height: 523%;\n\n}\n\n.playerCellHorizontal:hover {\n    background-color: var(--ship);\n    width: 523%;\n}\n\n.playerCellVertical.four:hover {\n    background-color: var(--ship);\n    height: 410%;\n}\n\n.playerCellHorizontal.four:hover {\n    background-color: var(--ship);\n    width: 410%;\n}\n\n.playerCellVertical.three:hover {\n    background-color: var(--ship);\n    height: 300%;\n}\n\n.playerCellHorizontal.three:hover {\n    background-color: var(--ship);\n    width: 300%;\n}\n\n.playerCellVertical.two:hover {\n    background-color: var(--ship);\n    height: 190%;\n}\n\n.playerCellHorizontal.two:hover {\n    background-color: var(--ship);\n    width: 190%;\n}\n\n.instruction {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    margin-top: 30px;\n    border-style: solid;\n    border-radius: 20px;\n    height: 60px;\n    width: 300px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/CSS/style.css":
/*!***************************!*\
  !*** ./src/CSS/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factories/computerPlayerFactory.js":
/*!************************************************!*\
  !*** ./src/factories/computerPlayerFactory.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComputerPlayer)
/* harmony export */ });
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ "./src/factories/gameboardFactory.js");


function ComputerPlayer() {
  return {
    name: 'Computer',
    computerGameBoard: null,
    createGameBoard() {
      this.computerGameBoard = new _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
    },
    pastAttacks: [],
    lastAttackHit: 0,
    cellHit: null,
    fireShot(gameboard) {
      // computer makes random attacks
      let x = null;
      let y = null;
      if (this.lastAttackHit === 0) {
        while (this.pastAttacks.indexOf(`${[x, y]}`) !== -1 || x === null) {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
        }
      } else if (this.lastAttackHit === 1 || this.lastAttackHit === 2) {
        if (this.lastAttackHit === 1) {
          // the cell that was hit
          this.cellHit = this.pastAttacks[this.pastAttacks.length - 1];
        }
        // hit an ajacent square
        const bothXY = this.cellHit.split(',');
        [x, y] = bothXY;
        // try hitting above
        if (this.pastAttacks.indexOf(`${[x, y - 1]}`) === -1 && y - 1 >= 0) {
          y -= 1;
          this.lastAttackHit = 2;
        } else if (this.pastAttacks.indexOf(`${[x, (+y) + 1]}`) === -1 && (+y) + 1 <= 9) {
        // try hitting below
          y = (+y) + 1;
          this.lastAttackHit = 2;
        } else if (this.pastAttacks.indexOf(`${[(+x) + 1, y]}`) === -1 && (+x) + 1 <= 9) {
          // try hitting to the right
          x = (+x) + 1;
          this.lastAttackHit = 2;
        } else if (this.pastAttacks.indexOf(`${[x - 1, y]}`) === -1 && x - 1 >= 0) {
          // try hitting to the left
          x -= 1;
          this.lastAttackHit = 2;
        } else {
          // if all ajacent squares tried
          while (this.pastAttacks.indexOf(`${[x, y]}`) !== -1) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
          }
          this.lastAttackHit = 0;
        }
      }

      this.pastAttacks.push(`${[x, y]}`);
      gameboard.receiveAttack(x, y);
    },
  };
}


/***/ }),

/***/ "./src/factories/gameboardFactory.js":
/*!*******************************************!*\
  !*** ./src/factories/gameboardFactory.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ "./src/factories/shipFactory.js");


function Gameboard() {
  return {
    board: [],
    shipsLocation: [],
    ships: [],
    missedAttacks: [],
    createBoard(size = 10) {
      for (let i = 0; i < size; i += 1) {
        for (let j = 0; j < size; j += 1) {
          this.board.push(`${[i, j]}`);
        }
      }
    },
    placeShip5(x, y, isVertical) {
      // for vertical
      if (isVertical === true) {
        if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                    && this.shipsLocation.indexOf(`${[x, (+y) + 1]}`) === -1
                    && this.shipsLocation.indexOf(`${[x, (+y) + 2]}`) === -1
                    && this.shipsLocation.indexOf(`${[x, (+y) + 3]}`) === -1
                    && this.shipsLocation.indexOf(`${[x, (+y) + 4]}`) === -1
                    && y < 6) {
          const ship = new _shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](5);
          this.ships.push(ship);
          this.ships.push(ship);
          this.ships.push(ship);
          this.ships.push(ship);
          this.ships.push(ship);

          this.shipsLocation.push(`${[x, y]}`);
          this.shipsLocation.push(`${[x, y + 1]}`);
          this.shipsLocation.push(`${[x, y + 2]}`);
          this.shipsLocation.push(`${[x, y + 3]}`);
          this.shipsLocation.push(`${[x, y + 4]}`);
        }
      } else if (isVertical === false) {
        // for horizontal
        if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                    && this.shipsLocation.indexOf(`${[(+x) + 1, y]}`) === -1
                    && this.shipsLocation.indexOf(`${[(+x) + 2, y]}`) === -1
                    && this.shipsLocation.indexOf(`${[(+x) + 3, y]}`) === -1
                    && this.shipsLocation.indexOf(`${[(+x) + 4, y]}`) === -1
                    && x < 6) {
          const ship = new _shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](5);
          this.ships.push(ship);
          this.ships.push(ship);
          this.ships.push(ship);
          this.ships.push(ship);
          this.ships.push(ship);

          this.shipsLocation.push(`${[x, y]}`);
          this.shipsLocation.push(`${[x + 1, y]}`);
          this.shipsLocation.push(`${[x + 2, y]}`);
          this.shipsLocation.push(`${[x + 3, y]}`);
          this.shipsLocation.push(`${[x + 4, y]}`);
        }
      }
    },
    placeShip4(x, y, isVertical) {
      // for vertical
      if (isVertical === true) {
        if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                    && this.shipsLocation.indexOf(`${[x, (+y) + 1]}`) === -1
                    && this.shipsLocation.indexOf(`${[x, (+y) + 2]}`) === -1
                    && this.shipsLocation.indexOf(`${[x, (+y) + 3]}`) === -1
                    && y < 7) {
          const ship = new _shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](4);
          this.ships.push(ship);
          this.ships.push(ship);
          this.ships.push(ship);
          this.ships.push(ship);

          this.shipsLocation.push(`${[x, y]}`);
          this.shipsLocation.push(`${[x, y + 1]}`);
          this.shipsLocation.push(`${[x, y + 2]}`);
          this.shipsLocation.push(`${[x, y + 3]}`);
        }
      } else if (isVertical === false) {
        // for horizontal
        if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                    && this.shipsLocation.indexOf(`${[(+x) + 1, y]}`) === -1
                    && this.shipsLocation.indexOf(`${[(+x) + 2, y]}`) === -1
                    && this.shipsLocation.indexOf(`${[(+x) + 3, y]}`) === -1
                    && x < 7) {
          const ship = new _shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](4);
          this.ships.push(ship);
          this.ships.push(ship);
          this.ships.push(ship);
          this.ships.push(ship);

          this.shipsLocation.push(`${[x, y]}`);
          this.shipsLocation.push(`${[x + 1, y]}`);
          this.shipsLocation.push(`${[x + 2, y]}`);
          this.shipsLocation.push(`${[x + 3, y]}`);
        }
      }
    },
    placeShip3(x, y, isVertical) {
      // for vertical
      if (isVertical === true) {
        if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                    && this.shipsLocation.indexOf(`${[x, (+y) + 1]}`) === -1
                    && this.shipsLocation.indexOf(`${[x, (+y) + 2]}`) === -1
                    && y < 8) {
          const ship = new _shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](3);
          this.ships.push(ship);
          this.ships.push(ship);
          this.ships.push(ship);

          this.shipsLocation.push(`${[x, y]}`);
          this.shipsLocation.push(`${[x, y + 1]}`);
          this.shipsLocation.push(`${[x, y + 2]}`);
        }
      } else if (isVertical === false) {
        // for horizontal
        if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                    && this.shipsLocation.indexOf(`${[(+x) + 1, y]}`) === -1
                    && this.shipsLocation.indexOf(`${[(+x) + 2, y]}`) === -1
                    && x < 8) {
          const ship = new _shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](3);
          this.ships.push(ship);
          this.ships.push(ship);
          this.ships.push(ship);

          this.shipsLocation.push(`${[x, y]}`);
          this.shipsLocation.push(`${[x + 1, y]}`);
          this.shipsLocation.push(`${[x + 2, y]}`);
        }
      }
    },
    placeShip2(x, y, isVertical) {
      // for vertical
      if (isVertical === true) {
        if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                    && this.shipsLocation.indexOf(`${[x, (+y) + 1]}`) === -1
                    && y < 9) {
          const ship = new _shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](2);
          this.ships.push(ship);
          this.ships.push(ship);

          this.shipsLocation.push(`${[x, y]}`);
          this.shipsLocation.push(`${[x, y + 1]}`);
        }
      } else if (isVertical === false) {
      // for horizontal
        if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                    && this.shipsLocation.indexOf(`${[(+x) + 1, y]}`) === -1
                    && x < 9) {
          const ship = new _shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](2);
          this.ships.push(ship);
          this.ships.push(ship);

          this.shipsLocation.push(`${[x, y]}`);
          this.shipsLocation.push(`${[x + 1, y]}`);
        }
      }
    },
    receiveAttack(x, y) {
      if (this.shipsLocation.indexOf(`${[x, y]}`) === -1) {
        this.missedAttacks.push(`${[x, y]}`);
      } else {
        const locationIndex = this.shipsLocation.indexOf(`${[x, y]}`);
        this.ships[locationIndex].hit();
      }
    },
    allShipsSunk() {
      for (let i = 0; i < this.ships.length; i += 1) {
        this.ships[i].isSunk();
        if (this.ships[i].sunk === false) {
          return false;
        }
      }
      return true;
    },
  };
}


/***/ }),

/***/ "./src/factories/playerFactory.js":
/*!****************************************!*\
  !*** ./src/factories/playerFactory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ "./src/factories/gameboardFactory.js");


function Player(name) {
  return {
    name,
    playerGameBoard: null,
    pastAttacks: [],
    createGameBoard() {
      this.playerGameBoard = new _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
    },
    fireShot(x, y, gameboard) {
      this.pastAttacks.push(`${[x, y]}`);
      gameboard.receiveAttack(x, y);
    },
  };
}


/***/ }),

/***/ "./src/factories/shipFactory.js":
/*!**************************************!*\
  !*** ./src/factories/shipFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length) {
  return {
    length,
    hitNum: 0,
    sunk: false,
    hit() {
      this.hitNum += 1;
    },
    isSunk() {
      if (this.hitNum === this.length) {
        this.sunk = true;
      }
    },
  };
}


/***/ }),

/***/ "./dist/Images/radarGif.gif":
/*!**********************************!*\
  !*** ./dist/Images/radarGif.gif ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbc9350502668b333cd4.gif";

/***/ }),

/***/ "./src/Fonts/Roboto-Light.ttf":
/*!************************************!*\
  !*** ./src/Fonts/Roboto-Light.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "333da16a3f3cc391d087.ttf";

/***/ }),

/***/ "./src/Fonts/Roboto-Medium.ttf":
/*!*************************************!*\
  !*** ./src/Fonts/Roboto-Medium.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c8d04cd831df3033c8a.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factories_computerPlayerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/computerPlayerFactory */ "./src/factories/computerPlayerFactory.js");
/* harmony import */ var _factories_playerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/playerFactory */ "./src/factories/playerFactory.js");
/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSS/style.css */ "./src/CSS/style.css");




let player = new _factories_playerFactory__WEBPACK_IMPORTED_MODULE_1__["default"]('Hugo');
let computerPlayer = new _factories_computerPlayerFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
let isVertical = true;
let computerTurn = false;
const instruction = document.createElement('h3');

player.createGameBoard();
computerPlayer.createGameBoard();

function computerPlaceShip5() {
  let x = null;
  let y = null;
  const z = Math.floor(Math.random() * 2);

  if (z === 0) {
    while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, y]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, (+y) + 1]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, (+y) + 2]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, (+y) + 3]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, (+y) + 4]}`) !== -1
    ) || x === null) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 6);
    }
    computerPlayer.computerGameBoard.placeShip5(x, y, true);
  } else if (z === 1) {
    while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, y]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x) + 1, y]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x) + 2, y]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x) + 3, y]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x) + 4, y]}`) !== -1
    ) || x === null) {
      x = Math.floor(Math.random() * 6);
      y = Math.floor(Math.random() * 10);
    }
    computerPlayer.computerGameBoard.placeShip5(x, y, false);
  }
}

function computerPlaceShip4() {
  let x = null;
  let y = null;
  const z = Math.floor(Math.random() * 2);

  if (z === 0) {
    while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, y]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, (+y) + 1]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, (+y) + 2]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, (+y) + 3]}`) !== -1
    ) || x === null) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 7);
    }
    computerPlayer.computerGameBoard.placeShip4(x, y, true);
  } else if (z === 1) {
    while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, y]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x) + 1, y]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x) + 2, y]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x) + 3, y]}`) !== -1
    ) || x === null) {
      x = Math.floor(Math.random() * 7);
      y = Math.floor(Math.random() * 10);
    }
    computerPlayer.computerGameBoard.placeShip4(x, y, false);
  }
}

function computerPlaceShip3() {
  let x = null;
  let y = null;
  const z = Math.floor(Math.random() * 2);

  if (z === 0) {
    while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, y]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, (+y) + 1]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, (+y) + 2]}`) !== -1
    ) || x === null) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 8);
    }
    computerPlayer.computerGameBoard.placeShip3(x, y, true);
  } else if (z === 1) {
    while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, y]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x) + 1, y]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x) + 2, y]}`) !== -1
    ) || x === null) {
      x = Math.floor(Math.random() * 8);
      y = Math.floor(Math.random() * 10);
    }
    computerPlayer.computerGameBoard.placeShip3(x, y, false);
  }
}

function computerPlaceShip2() {
  let x = null;
  let y = null;
  const z = Math.floor(Math.random() * 2);

  if (z === 0) {
    while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, y]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, (+y) + 1]}`) !== -1
    ) || x === null) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 9);
    }
    computerPlayer.computerGameBoard.placeShip2(x, y, true);
  } else if (z === 1) {
    while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x, y]}`) !== -1
            || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x) + 1, y]}`) !== -1
    ) || x === null) {
      x = Math.floor(Math.random() * 9);
      y = Math.floor(Math.random() * 10);
    }
    computerPlayer.computerGameBoard.placeShip2(x, y, false);
  }
}

function updatePlayerBoard(board = player.playerGameBoard) {
  const boardShipsLocation = board.shipsLocation;
  // go through players ships location array
  boardShipsLocation.forEach((element) => {
    // get x and y
    const bothXY = element.split(',');
    const [x, y] = bothXY;
    // get the cell at x and y
    const targetCell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    // give that cell a class of ship
    targetCell.classList.add('ship');
  });
  const computerShots = computerPlayer.pastAttacks;
  // go through players ships location array
  computerShots.forEach((element) => {
    // get x and y
    const bothXY = element.split(',');
    const [x, y] = bothXY;
    // get the cell at x and y
    const targetCell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    // give that cell a class of ship
    targetCell.classList.add('computerShot');
  });
  for (let i = 0; i < player.playerGameBoard.ships.length; i += 1) {
    player.playerGameBoard.ships[i].isSunk();
    if (player.playerGameBoard.ships[i].sunk === true) {
      const element = player.playerGameBoard.shipsLocation[i];
      // get x and y
      const bothXY = element.split(',');
      const [x, y] = bothXY;
      // get the cell at x and y
      const targetCell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
      // give that cell a class of ship
      targetCell.classList.add('shipSunk');
    }
  }
}

function clearBoards() {
  let container = document.querySelector('.playerBoard');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container = document.querySelector('.computerBoard');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  if (document.querySelector('.button')) {
    document.querySelector('.button').remove();
  }
}

function createComputerBoard() {
  const computerBoard = document.querySelector('.computerBoard');
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-x', j);
      cell.setAttribute('data-y', i);
      cell.addEventListener('click', (e) => {
        if (computerTurn === false && !(e.target.classList.contains('hit') || e.target.classList.contains('miss'))) {
          attackEvent(e.target);
        }
      });
      computerBoard.appendChild(cell);
    }
  }
}

function createPlayerBoard() {
  const playerBoard = document.querySelector('.playerBoard');
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.classList.add('playerCellVertical');
      cell.setAttribute('data-x', j);
      cell.setAttribute('data-y', i);
      playerBoard.appendChild(cell);
    }
  }
}

function cellPlaceShip(element, button, playerCell) {
  const x = element.getAttribute('data-x');
  const y = element.getAttribute('data-y');
  let shipAmount = player.playerGameBoard.shipsLocation.length;
  if (shipAmount === 0) {
    player.playerGameBoard.placeShip5((+x), (+y), isVertical);
  } else if (shipAmount === 5) {
    player.playerGameBoard.placeShip4((+x), (+y), isVertical);
  } else if (shipAmount === 9) {
    player.playerGameBoard.placeShip3((+x), (+y), isVertical);
  } else if (shipAmount === 12) {
    player.playerGameBoard.placeShip3((+x), (+y), isVertical);
  } else if (shipAmount === 15) {
    player.playerGameBoard.placeShip2((+x), (+y), isVertical);
  }

  updatePlayerBoard();
  shipAmount = player.playerGameBoard.shipsLocation.length;

  if (shipAmount === 5) {
    playerCell.forEach((elements) => {
      elements.classList.add('four');
    });
  } else if (shipAmount === 9) {
    playerCell.forEach((elements) => {
      elements.classList.add('three');
      elements.classList.remove('four');
    });
  } else if (shipAmount === 15) {
    playerCell.forEach((elements) => {
      elements.classList.add('two');
      elements.classList.remove('three');
    });
  }

  if (shipAmount === 17) {
    button.remove();
    clearBoards();
    createComputerBoard();
    createPlayerBoard();
    updatePlayerBoard();
    document.querySelectorAll('.playerCellVertical').forEach((elements) => { elements.classList.remove('playerCellVertical'); });
    instruction.textContent = 'Player\'s Turn';
  }
}

function rotateVisual(playerCell) {
  if (isVertical === true) {
    playerCell.forEach((element) => {
      element.classList.add('playerCellHorizontal');
      element.classList.remove('playerCellVertical');
    });
    isVertical = false;
  } else if (isVertical === false) {
    playerCell.forEach((element) => {
      element.classList.add('playerCellVertical');
      element.classList.remove('playerCellHorizontal');
    });
    isVertical = true;
  }
}

function setupGame() {
  const body = document.querySelector('body');
  const container = document.querySelector('.content');
  const button = document.createElement('button');
  const playerCell = document.querySelectorAll('.playerCellVertical');
  button.classList.add('button');
  button.addEventListener('click', () => rotateVisual(playerCell));
  button.textContent = 'Rotate';
  container.appendChild(button);
  instruction.classList.add('instruction');
  instruction.textContent = 'Place Your Ships';
  body.appendChild(instruction);
  playerCell.forEach((element) => { element.addEventListener('click', (e) => cellPlaceShip(e.target, button, playerCell)); });
  computerPlaceShip5();
  computerPlaceShip4();
  computerPlaceShip3();
  computerPlaceShip3();
  computerPlaceShip2();
}

function createTempComputerBoard() {
  const computerBoard = document.querySelector('.computerBoard');
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-x', j);
      cell.setAttribute('data-y', i);
      computerBoard.appendChild(cell);
    }
  }
}

function updateBoard(board, x, y, cell) {
  const boardShipsLocation = board.shipsLocation;

  if (boardShipsLocation.indexOf(`${[x, y]}`) !== -1) {
    // can hit that square
    cell.classList.add('hit');
  } else if (boardShipsLocation.indexOf(`${[x, y]}`) === -1) {
    // can't hit that square
    cell.classList.add('miss');
  }
  for (let i = 0; i < computerPlayer.computerGameBoard.ships.length; i += 1) {
    computerPlayer.computerGameBoard.ships[i].isSunk();
    if (computerPlayer.computerGameBoard.ships[i].sunk === true) {
      const element = computerPlayer.computerGameBoard.shipsLocation[i];
      // get x and y
      const bothXY = element.split(',');
      const [a, b] = bothXY;
      // get the cell at x and y
      const targetCell = document.querySelector(`.computerBoard [data-x="${a}"][data-y="${b}"]`);
      // give that cell a class of ship
      targetCell.classList.add('shipSunk');
    }
  }
}

function gameLoop() {
  // wipe everything clean to start
  clearBoards();
  // render players & gameboards
  player = new _factories_playerFactory__WEBPACK_IMPORTED_MODULE_1__["default"]('You');
  computerPlayer = new _factories_computerPlayerFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
  player.createGameBoard();
  computerPlayer.createGameBoard();

  createPlayerBoard();
  createTempComputerBoard();
  setupGame();
  updatePlayerBoard();
}
gameLoop();

function endGame(players) {
  const winningMessageElement = document.getElementById('winningMessage');
  const winningMessageTextElement = document.getElementById('winningMessageText');
  const restartButton = document.getElementById('restartButton');
  winningMessageTextElement.innerText = `${players} win!`;
  winningMessageElement.classList.add('show');
  restartButton.addEventListener('click', () => {
    gameLoop();
    winningMessageElement.classList.remove('show');
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function attackEvent(element) {
  const x = element.getAttribute('data-x');
  const y = element.getAttribute('data-y');
  let playerHit = false;
  let computerMiss = false;

  player.fireShot(x, y, computerPlayer.computerGameBoard);
  if (computerPlayer.computerGameBoard.shipsLocation
    .indexOf(player.pastAttacks[player.pastAttacks.length - 1]) !== -1) {
    // triggers if the fired shot hit
    playerHit = true;
  }
  // update the computers board visually
  updateBoard(computerPlayer.computerGameBoard, x, y, element);
  if (computerPlayer.computerGameBoard.allShipsSunk()) {
    // end the game and say player won
    endGame(player.name);
  }
  if (playerHit === false) {
    computerTurn = true;
    instruction.textContent = 'Computer\'s Turn';
    while (computerMiss === false) {
      await delay(2000);
      computerPlayer.fireShot(player.playerGameBoard);
      if (player.playerGameBoard.shipsLocation
        .indexOf(computerPlayer.pastAttacks[computerPlayer.pastAttacks.length - 1]) !== -1) {
        // triggers if the fired shot hit
        computerPlayer.lastAttackHit = 1;
      } else {
        computerMiss = true;
      }
      // update the player board visually
      updatePlayerBoard();
      if (player.playerGameBoard.allShipsSunk()) {
        // end the game and say computer won
        endGame(computerPlayer.name);
      }
    }
    computerTurn = false;
    instruction.textContent = 'Player\'s Turn';
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDhJQUE4QztBQUMxRiw0Q0FBNEMsZ0pBQStDO0FBQzNGLDRDQUE0QywwSUFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9GQUFvRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFL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QSwyQ0FBMkMsU0FBUztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvQ1NTL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9DU1Mvc3R5bGUuY3NzP2ExY2YiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9jb21wdXRlclBsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9Gb250cy9Sb2JvdG8tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9Gb250cy9Sb2JvdG8tTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9kaXN0L0ltYWdlcy9yYWRhckdpZi5naWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90b01lZGl1bSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjpyb290IHtcbiAgICAtLXNoaXA6IHJnYigwLCAwLCAyMTYpO1xuICAgIC0taGl0OiByZ2IoMTk2LCAwLCAwKTtcbiAgICAtLXN1bms6IHJnYigxMjgsIDAsIDApO1xuICAgIC0tbWlzczogZ3JleTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigwLCAwLCA5MSk7XG59XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IHJnYigxODksIDE5MSwgMTkzKTtcbn1cblxuaDMge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvTWVkaXVtJztcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBib3R0b207XG59XG5cbi5wbGF5ZXJCb2FyZCxcbi5jb21wdXRlckJvYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcbiAgICBnYXA6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDkxLCAwLjcxMyk7XG59XG5cbi5wbGF5ZXJCb2FyZFdyYXAsXG4uY29tcHV0ZXJCb2FyZFdyYXAge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jZWxsIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItY29sb3I6IHJnYigxODksIDE5MSwgMTkzKTtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDIwcHg7XG4gICAgY29sdW1uLWdhcDogOHZ3O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICBmb250LXdlaWdodDogMTAwMDtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcbn1cblxuLmhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0KTtcbn1cblxuLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xufVxuXG4uc2hpcFN1bmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1bmspO1xufVxuXG4uY29tcHV0ZXJTaG90IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcbn1cblxuLmNvbXB1dGVyU2hvdC5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xufVxuXG4uY29tcHV0ZXJTaG90LnNoaXAuc2hpcFN1bmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1bmspO1xufVxuXG4ud2lubmluZy1tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ud2lubmluZy1tZXNzYWdlLnNob3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wbGF5ZXJDZWxsVmVydGljYWw6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xuICAgIGhlaWdodDogNTIzJTtcblxufVxuXG4ucGxheWVyQ2VsbEhvcml6b250YWw6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xuICAgIHdpZHRoOiA1MjMlO1xufVxuXG4ucGxheWVyQ2VsbFZlcnRpY2FsLmZvdXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xuICAgIGhlaWdodDogNDEwJTtcbn1cblxuLnBsYXllckNlbGxIb3Jpem9udGFsLmZvdXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xuICAgIHdpZHRoOiA0MTAlO1xufVxuXG4ucGxheWVyQ2VsbFZlcnRpY2FsLnRocmVlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcbiAgICBoZWlnaHQ6IDMwMCU7XG59XG5cbi5wbGF5ZXJDZWxsSG9yaXpvbnRhbC50aHJlZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XG4gICAgd2lkdGg6IDMwMCU7XG59XG5cbi5wbGF5ZXJDZWxsVmVydGljYWwudHdvOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcbiAgICBoZWlnaHQ6IDE5MCU7XG59XG5cbi5wbGF5ZXJDZWxsSG9yaXpvbnRhbC50d286aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xuICAgIHdpZHRoOiAxOTAlO1xufVxuXG4uaW5zdHJ1Y3Rpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMzAwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvQ1NTL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBcUM7QUFDekM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNENBQXNDO0lBQ3RDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLFFBQVE7SUFDUix1Q0FBdUM7QUFDM0M7O0FBRUE7O0lBRUkseURBQWdEO0lBQ2hELDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsU0FBUztJQUNULGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZiw4Q0FBOEM7SUFDOUMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybCgvc3JjL0ZvbnRzL1JvYm90by1MaWdodC50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9NZWRpdW0nO1xcbiAgICBzcmM6IHVybCgvc3JjL0ZvbnRzL1JvYm90by1NZWRpdW0udHRmKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1zaGlwOiByZ2IoMCwgMCwgMjE2KTtcXG4gICAgLS1oaXQ6IHJnYigxOTYsIDAsIDApO1xcbiAgICAtLXN1bms6IHJnYigxMjgsIDAsIDApO1xcbiAgICAtLW1pc3M6IGdyZXk7XFxuICAgIC0tYmFja2dyb3VuZDogcmdiKDAsIDAsIDkxKTtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjogcmdiKDE4OSwgMTkxLCAxOTMpO1xcbn1cXG5cXG5oMyB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b01lZGl1bSc7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBib3R0b207XFxufVxcblxcbi5wbGF5ZXJCb2FyZCxcXG4uY29tcHV0ZXJCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgOTEsIDAuNzEzKTtcXG59XFxuXFxuLnBsYXllckJvYXJkV3JhcCxcXG4uY29tcHV0ZXJCb2FyZFdyYXAge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Rpc3QvSW1hZ2VzL3JhZGFyR2lmLmdpZik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItY29sb3I6IHJnYigxODksIDE5MSwgMTkzKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDh2dztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBmb250LXdlaWdodDogMTAwMDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MpO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0KTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcXG59XFxuXFxuLnNoaXBTdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuayk7XFxufVxcblxcbi5jb21wdXRlclNob3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcXG59XFxuXFxuLmNvbXB1dGVyU2hvdC5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0KTtcXG59XFxuXFxuLmNvbXB1dGVyU2hvdC5zaGlwLnNoaXBTdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuayk7XFxufVxcblxcbi53aW5uaW5nLW1lc3NhZ2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ud2lubmluZy1tZXNzYWdlLnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucGxheWVyQ2VsbFZlcnRpY2FsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XFxuICAgIGhlaWdodDogNTIzJTtcXG5cXG59XFxuXFxuLnBsYXllckNlbGxIb3Jpem9udGFsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XFxuICAgIHdpZHRoOiA1MjMlO1xcbn1cXG5cXG4ucGxheWVyQ2VsbFZlcnRpY2FsLmZvdXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcXG4gICAgaGVpZ2h0OiA0MTAlO1xcbn1cXG5cXG4ucGxheWVyQ2VsbEhvcml6b250YWwuZm91cjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xcbiAgICB3aWR0aDogNDEwJTtcXG59XFxuXFxuLnBsYXllckNlbGxWZXJ0aWNhbC50aHJlZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xcbiAgICBoZWlnaHQ6IDMwMCU7XFxufVxcblxcbi5wbGF5ZXJDZWxsSG9yaXpvbnRhbC50aHJlZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xcbiAgICB3aWR0aDogMzAwJTtcXG59XFxuXFxuLnBsYXllckNlbGxWZXJ0aWNhbC50d286aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcXG4gICAgaGVpZ2h0OiAxOTAlO1xcbn1cXG5cXG4ucGxheWVyQ2VsbEhvcml6b250YWwudHdvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XFxuICAgIHdpZHRoOiAxOTAlO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkRmFjdG9yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXB1dGVyUGxheWVyKCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDb21wdXRlcicsXG4gICAgY29tcHV0ZXJHYW1lQm9hcmQ6IG51bGwsXG4gICAgY3JlYXRlR2FtZUJvYXJkKCkge1xuICAgICAgdGhpcy5jb21wdXRlckdhbWVCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB9LFxuICAgIHBhc3RBdHRhY2tzOiBbXSxcbiAgICBsYXN0QXR0YWNrSGl0OiAwLFxuICAgIGNlbGxIaXQ6IG51bGwsXG4gICAgZmlyZVNob3QoZ2FtZWJvYXJkKSB7XG4gICAgICAvLyBjb21wdXRlciBtYWtlcyByYW5kb20gYXR0YWNrc1xuICAgICAgbGV0IHggPSBudWxsO1xuICAgICAgbGV0IHkgPSBudWxsO1xuICAgICAgaWYgKHRoaXMubGFzdEF0dGFja0hpdCA9PT0gMCkge1xuICAgICAgICB3aGlsZSAodGhpcy5wYXN0QXR0YWNrcy5pbmRleE9mKGAke1t4LCB5XX1gKSAhPT0gLTEgfHwgeCA9PT0gbnVsbCkge1xuICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmxhc3RBdHRhY2tIaXQgPT09IDEgfHwgdGhpcy5sYXN0QXR0YWNrSGl0ID09PSAyKSB7XG4gICAgICAgIGlmICh0aGlzLmxhc3RBdHRhY2tIaXQgPT09IDEpIHtcbiAgICAgICAgICAvLyB0aGUgY2VsbCB0aGF0IHdhcyBoaXRcbiAgICAgICAgICB0aGlzLmNlbGxIaXQgPSB0aGlzLnBhc3RBdHRhY2tzW3RoaXMucGFzdEF0dGFja3MubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gaGl0IGFuIGFqYWNlbnQgc3F1YXJlXG4gICAgICAgIGNvbnN0IGJvdGhYWSA9IHRoaXMuY2VsbEhpdC5zcGxpdCgnLCcpO1xuICAgICAgICBbeCwgeV0gPSBib3RoWFk7XG4gICAgICAgIC8vIHRyeSBoaXR0aW5nIGFib3ZlXG4gICAgICAgIGlmICh0aGlzLnBhc3RBdHRhY2tzLmluZGV4T2YoYCR7W3gsIHkgLSAxXX1gKSA9PT0gLTEgJiYgeSAtIDEgPj0gMCkge1xuICAgICAgICAgIHkgLT0gMTtcbiAgICAgICAgICB0aGlzLmxhc3RBdHRhY2tIaXQgPSAyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFzdEF0dGFja3MuaW5kZXhPZihgJHtbeCwgKCt5KSArIDFdfWApID09PSAtMSAmJiAoK3kpICsgMSA8PSA5KSB7XG4gICAgICAgIC8vIHRyeSBoaXR0aW5nIGJlbG93XG4gICAgICAgICAgeSA9ICgreSkgKyAxO1xuICAgICAgICAgIHRoaXMubGFzdEF0dGFja0hpdCA9IDI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYXN0QXR0YWNrcy5pbmRleE9mKGAke1soK3gpICsgMSwgeV19YCkgPT09IC0xICYmICgreCkgKyAxIDw9IDkpIHtcbiAgICAgICAgICAvLyB0cnkgaGl0dGluZyB0byB0aGUgcmlnaHRcbiAgICAgICAgICB4ID0gKCt4KSArIDE7XG4gICAgICAgICAgdGhpcy5sYXN0QXR0YWNrSGl0ID0gMjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhc3RBdHRhY2tzLmluZGV4T2YoYCR7W3ggLSAxLCB5XX1gKSA9PT0gLTEgJiYgeCAtIDEgPj0gMCkge1xuICAgICAgICAgIC8vIHRyeSBoaXR0aW5nIHRvIHRoZSBsZWZ0XG4gICAgICAgICAgeCAtPSAxO1xuICAgICAgICAgIHRoaXMubGFzdEF0dGFja0hpdCA9IDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaWYgYWxsIGFqYWNlbnQgc3F1YXJlcyB0cmllZFxuICAgICAgICAgIHdoaWxlICh0aGlzLnBhc3RBdHRhY2tzLmluZGV4T2YoYCR7W3gsIHldfWApICE9PSAtMSkge1xuICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubGFzdEF0dGFja0hpdCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5wYXN0QXR0YWNrcy5wdXNoKGAke1t4LCB5XX1gKTtcbiAgICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBGYWN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICByZXR1cm4ge1xuICAgIGJvYXJkOiBbXSxcbiAgICBzaGlwc0xvY2F0aW9uOiBbXSxcbiAgICBzaGlwczogW10sXG4gICAgbWlzc2VkQXR0YWNrczogW10sXG4gICAgY3JlYXRlQm9hcmQoc2l6ZSA9IDEwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGogKz0gMSkge1xuICAgICAgICAgIHRoaXMuYm9hcmQucHVzaChgJHtbaSwgal19YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlU2hpcDUoeCwgeSwgaXNWZXJ0aWNhbCkge1xuICAgICAgLy8gZm9yIHZlcnRpY2FsXG4gICAgICBpZiAoaXNWZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAodGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsIHldfWApID09PSAtMVxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgKCt5KSArIDFdfWApID09PSAtMVxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgKCt5KSArIDJdfWApID09PSAtMVxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgKCt5KSArIDNdfWApID09PSAtMVxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgKCt5KSArIDRdfWApID09PSAtMVxuICAgICAgICAgICAgICAgICAgICAmJiB5IDwgNikge1xuICAgICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcCg1KTtcbiAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3gsIHldfWApO1xuICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4LCB5ICsgMV19YCk7XG4gICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3gsIHkgKyAyXX1gKTtcbiAgICAgICAgICB0aGlzLnNoaXBzTG9jYXRpb24ucHVzaChgJHtbeCwgeSArIDNdfWApO1xuICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4LCB5ICsgNF19YCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNWZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gZm9yIGhvcml6b250YWxcbiAgICAgICAgaWYgKHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCB5XX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7WygreCkgKyAxLCB5XX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7WygreCkgKyAyLCB5XX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7WygreCkgKyAzLCB5XX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7WygreCkgKyA0LCB5XX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgJiYgeCA8IDYpIHtcbiAgICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoNSk7XG4gICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcblxuICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4LCB5XX1gKTtcbiAgICAgICAgICB0aGlzLnNoaXBzTG9jYXRpb24ucHVzaChgJHtbeCArIDEsIHldfWApO1xuICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4ICsgMiwgeV19YCk7XG4gICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3ggKyAzLCB5XX1gKTtcbiAgICAgICAgICB0aGlzLnNoaXBzTG9jYXRpb24ucHVzaChgJHtbeCArIDQsIHldfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBwbGFjZVNoaXA0KHgsIHksIGlzVmVydGljYWwpIHtcbiAgICAgIC8vIGZvciB2ZXJ0aWNhbFxuICAgICAgaWYgKGlzVmVydGljYWwgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCB5XX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsICgreSkgKyAxXX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsICgreSkgKyAyXX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsICgreSkgKyAzXX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgJiYgeSA8IDcpIHtcbiAgICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoNCk7XG4gICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3gsIHldfWApO1xuICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4LCB5ICsgMV19YCk7XG4gICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3gsIHkgKyAyXX1gKTtcbiAgICAgICAgICB0aGlzLnNoaXBzTG9jYXRpb24ucHVzaChgJHtbeCwgeSArIDNdfWApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzVmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIGZvciBob3Jpem9udGFsXG4gICAgICAgIGlmICh0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgeV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpICsgMSwgeV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpICsgMiwgeV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpICsgMywgeV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgICAgICYmIHggPCA3KSB7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKDQpO1xuICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcblxuICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4LCB5XX1gKTtcbiAgICAgICAgICB0aGlzLnNoaXBzTG9jYXRpb24ucHVzaChgJHtbeCArIDEsIHldfWApO1xuICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4ICsgMiwgeV19YCk7XG4gICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3ggKyAzLCB5XX1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcGxhY2VTaGlwMyh4LCB5LCBpc1ZlcnRpY2FsKSB7XG4gICAgICAvLyBmb3IgdmVydGljYWxcbiAgICAgIGlmIChpc1ZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgeV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCAoK3kpICsgMV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCAoK3kpICsgMl19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgICAgICYmIHkgPCA4KSB7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKDMpO1xuICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3gsIHldfWApO1xuICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4LCB5ICsgMV19YCk7XG4gICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3gsIHkgKyAyXX1gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc1ZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAvLyBmb3IgaG9yaXpvbnRhbFxuICAgICAgICBpZiAodGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsIHldfWApID09PSAtMVxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbKCt4KSArIDEsIHldfWApID09PSAtMVxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbKCt4KSArIDIsIHldfWApID09PSAtMVxuICAgICAgICAgICAgICAgICAgICAmJiB4IDwgOCkge1xuICAgICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcCgzKTtcbiAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcblxuICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4LCB5XX1gKTtcbiAgICAgICAgICB0aGlzLnNoaXBzTG9jYXRpb24ucHVzaChgJHtbeCArIDEsIHldfWApO1xuICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4ICsgMiwgeV19YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlU2hpcDIoeCwgeSwgaXNWZXJ0aWNhbCkge1xuICAgICAgLy8gZm9yIHZlcnRpY2FsXG4gICAgICBpZiAoaXNWZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAodGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsIHldfWApID09PSAtMVxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgKCt5KSArIDFdfWApID09PSAtMVxuICAgICAgICAgICAgICAgICAgICAmJiB5IDwgOSkge1xuICAgICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcCgyKTtcbiAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3gsIHldfWApO1xuICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4LCB5ICsgMV19YCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNWZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIGZvciBob3Jpem9udGFsXG4gICAgICAgIGlmICh0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgeV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpICsgMSwgeV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgICAgICYmIHggPCA5KSB7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKDIpO1xuICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG5cbiAgICAgICAgICB0aGlzLnNoaXBzTG9jYXRpb24ucHVzaChgJHtbeCwgeV19YCk7XG4gICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3ggKyAxLCB5XX1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICBpZiAodGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsIHldfWApID09PSAtMSkge1xuICAgICAgICB0aGlzLm1pc3NlZEF0dGFja3MucHVzaChgJHtbeCwgeV19YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBsb2NhdGlvbkluZGV4ID0gdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsIHldfWApO1xuICAgICAgICB0aGlzLnNoaXBzW2xvY2F0aW9uSW5kZXhdLmhpdCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWxsU2hpcHNTdW5rKCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuc2hpcHNbaV0uaXNTdW5rKCk7XG4gICAgICAgIGlmICh0aGlzLnNoaXBzW2ldLnN1bmsgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIobmFtZSkge1xuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgcGxheWVyR2FtZUJvYXJkOiBudWxsLFxuICAgIHBhc3RBdHRhY2tzOiBbXSxcbiAgICBjcmVhdGVHYW1lQm9hcmQoKSB7XG4gICAgICB0aGlzLnBsYXllckdhbWVCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB9LFxuICAgIGZpcmVTaG90KHgsIHksIGdhbWVib2FyZCkge1xuICAgICAgdGhpcy5wYXN0QXR0YWNrcy5wdXNoKGAke1t4LCB5XX1gKTtcbiAgICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH0sXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xuICByZXR1cm4ge1xuICAgIGxlbmd0aCxcbiAgICBoaXROdW06IDAsXG4gICAgc3VuazogZmFsc2UsXG4gICAgaGl0KCkge1xuICAgICAgdGhpcy5oaXROdW0gKz0gMTtcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIGlmICh0aGlzLmhpdE51bSA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgQ29tcHV0ZXJQbGF5ZXIgZnJvbSAnLi9mYWN0b3JpZXMvY29tcHV0ZXJQbGF5ZXJGYWN0b3J5JztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9mYWN0b3JpZXMvcGxheWVyRmFjdG9yeSc7XG5pbXBvcnQgJy4vQ1NTL3N0eWxlLmNzcyc7XG5cbmxldCBwbGF5ZXIgPSBuZXcgUGxheWVyKCdIdWdvJyk7XG5sZXQgY29tcHV0ZXJQbGF5ZXIgPSBuZXcgQ29tcHV0ZXJQbGF5ZXIoKTtcbmxldCBpc1ZlcnRpY2FsID0gdHJ1ZTtcbmxldCBjb21wdXRlclR1cm4gPSBmYWxzZTtcbmNvbnN0IGluc3RydWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblxucGxheWVyLmNyZWF0ZUdhbWVCb2FyZCgpO1xuY29tcHV0ZXJQbGF5ZXIuY3JlYXRlR2FtZUJvYXJkKCk7XG5cbmZ1bmN0aW9uIGNvbXB1dGVyUGxhY2VTaGlwNSgpIHtcbiAgbGV0IHggPSBudWxsO1xuICBsZXQgeSA9IG51bGw7XG4gIGNvbnN0IHogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICBpZiAoeiA9PT0gMCkge1xuICAgIHdoaWxlICgoY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCB5XX1gKSAhPT0gLTFcbiAgICAgICAgICAgIHx8IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgKCt5KSArIDFdfWApICE9PSAtMVxuICAgICAgICAgICAgfHwgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCAoK3kpICsgMl19YCkgIT09IC0xXG4gICAgICAgICAgICB8fCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsICgreSkgKyAzXX1gKSAhPT0gLTFcbiAgICAgICAgICAgIHx8IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgKCt5KSArIDRdfWApICE9PSAtMVxuICAgICkgfHwgeCA9PT0gbnVsbCkge1xuICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcbiAgICB9XG4gICAgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwNSh4LCB5LCB0cnVlKTtcbiAgfSBlbHNlIGlmICh6ID09PSAxKSB7XG4gICAgd2hpbGUgKChjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsIHldfWApICE9PSAtMVxuICAgICAgICAgICAgfHwgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpICsgMSwgeV19YCkgIT09IC0xXG4gICAgICAgICAgICB8fCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7WygreCkgKyAyLCB5XX1gKSAhPT0gLTFcbiAgICAgICAgICAgIHx8IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbKCt4KSArIDMsIHldfWApICE9PSAtMVxuICAgICAgICAgICAgfHwgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpICsgNCwgeV19YCkgIT09IC0xXG4gICAgKSB8fCB4ID09PSBudWxsKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cbiAgICBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXA1KHgsIHksIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wdXRlclBsYWNlU2hpcDQoKSB7XG4gIGxldCB4ID0gbnVsbDtcbiAgbGV0IHkgPSBudWxsO1xuICBjb25zdCB6ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgaWYgKHogPT09IDApIHtcbiAgICB3aGlsZSAoKGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgeV19YCkgIT09IC0xXG4gICAgICAgICAgICB8fCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsICgreSkgKyAxXX1gKSAhPT0gLTFcbiAgICAgICAgICAgIHx8IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgKCt5KSArIDJdfWApICE9PSAtMVxuICAgICAgICAgICAgfHwgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCAoK3kpICsgM119YCkgIT09IC0xXG4gICAgKSB8fCB4ID09PSBudWxsKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcpO1xuICAgIH1cbiAgICBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXA0KHgsIHksIHRydWUpO1xuICB9IGVsc2UgaWYgKHogPT09IDEpIHtcbiAgICB3aGlsZSAoKGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgeV19YCkgIT09IC0xXG4gICAgICAgICAgICB8fCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7WygreCkgKyAxLCB5XX1gKSAhPT0gLTFcbiAgICAgICAgICAgIHx8IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbKCt4KSArIDIsIHldfWApICE9PSAtMVxuICAgICAgICAgICAgfHwgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpICsgMywgeV19YCkgIT09IC0xXG4gICAgKSB8fCB4ID09PSBudWxsKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNyk7XG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cbiAgICBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXA0KHgsIHksIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wdXRlclBsYWNlU2hpcDMoKSB7XG4gIGxldCB4ID0gbnVsbDtcbiAgbGV0IHkgPSBudWxsO1xuICBjb25zdCB6ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgaWYgKHogPT09IDApIHtcbiAgICB3aGlsZSAoKGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgeV19YCkgIT09IC0xXG4gICAgICAgICAgICB8fCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsICgreSkgKyAxXX1gKSAhPT0gLTFcbiAgICAgICAgICAgIHx8IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgKCt5KSArIDJdfWApICE9PSAtMVxuICAgICkgfHwgeCA9PT0gbnVsbCkge1xuICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICB9XG4gICAgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwMyh4LCB5LCB0cnVlKTtcbiAgfSBlbHNlIGlmICh6ID09PSAxKSB7XG4gICAgd2hpbGUgKChjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsIHldfWApICE9PSAtMVxuICAgICAgICAgICAgfHwgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpICsgMSwgeV19YCkgIT09IC0xXG4gICAgICAgICAgICB8fCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7WygreCkgKyAyLCB5XX1gKSAhPT0gLTFcbiAgICApIHx8IHggPT09IG51bGwpIHtcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgfVxuICAgIGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcDMoeCwgeSwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyUGxhY2VTaGlwMigpIHtcbiAgbGV0IHggPSBudWxsO1xuICBsZXQgeSA9IG51bGw7XG4gIGNvbnN0IHogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICBpZiAoeiA9PT0gMCkge1xuICAgIHdoaWxlICgoY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCB5XX1gKSAhPT0gLTFcbiAgICAgICAgICAgIHx8IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgKCt5KSArIDFdfWApICE9PSAtMVxuICAgICkgfHwgeCA9PT0gbnVsbCkge1xuICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICB9XG4gICAgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwMih4LCB5LCB0cnVlKTtcbiAgfSBlbHNlIGlmICh6ID09PSAxKSB7XG4gICAgd2hpbGUgKChjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsIHldfWApICE9PSAtMVxuICAgICAgICAgICAgfHwgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpICsgMSwgeV19YCkgIT09IC0xXG4gICAgKSB8fCB4ID09PSBudWxsKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cbiAgICBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXAyKHgsIHksIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQbGF5ZXJCb2FyZChib2FyZCA9IHBsYXllci5wbGF5ZXJHYW1lQm9hcmQpIHtcbiAgY29uc3QgYm9hcmRTaGlwc0xvY2F0aW9uID0gYm9hcmQuc2hpcHNMb2NhdGlvbjtcbiAgLy8gZ28gdGhyb3VnaCBwbGF5ZXJzIHNoaXBzIGxvY2F0aW9uIGFycmF5XG4gIGJvYXJkU2hpcHNMb2NhdGlvbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgLy8gZ2V0IHggYW5kIHlcbiAgICBjb25zdCBib3RoWFkgPSBlbGVtZW50LnNwbGl0KCcsJyk7XG4gICAgY29uc3QgW3gsIHldID0gYm90aFhZO1xuICAgIC8vIGdldCB0aGUgY2VsbCBhdCB4IGFuZCB5XG4gICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gKTtcbiAgICAvLyBnaXZlIHRoYXQgY2VsbCBhIGNsYXNzIG9mIHNoaXBcbiAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgfSk7XG4gIGNvbnN0IGNvbXB1dGVyU2hvdHMgPSBjb21wdXRlclBsYXllci5wYXN0QXR0YWNrcztcbiAgLy8gZ28gdGhyb3VnaCBwbGF5ZXJzIHNoaXBzIGxvY2F0aW9uIGFycmF5XG4gIGNvbXB1dGVyU2hvdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIC8vIGdldCB4IGFuZCB5XG4gICAgY29uc3QgYm90aFhZID0gZWxlbWVudC5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IFt4LCB5XSA9IGJvdGhYWTtcbiAgICAvLyBnZXQgdGhlIGNlbGwgYXQgeCBhbmQgeVxuICAgIGNvbnN0IHRhcmdldENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG4gICAgLy8gZ2l2ZSB0aGF0IGNlbGwgYSBjbGFzcyBvZiBzaGlwXG4gICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlclNob3QnKTtcbiAgfSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLnBsYXllckdhbWVCb2FyZC5zaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHBsYXllci5wbGF5ZXJHYW1lQm9hcmQuc2hpcHNbaV0uaXNTdW5rKCk7XG4gICAgaWYgKHBsYXllci5wbGF5ZXJHYW1lQm9hcmQuc2hpcHNbaV0uc3VuayA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHBsYXllci5wbGF5ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbltpXTtcbiAgICAgIC8vIGdldCB4IGFuZCB5XG4gICAgICBjb25zdCBib3RoWFkgPSBlbGVtZW50LnNwbGl0KCcsJyk7XG4gICAgICBjb25zdCBbeCwgeV0gPSBib3RoWFk7XG4gICAgICAvLyBnZXQgdGhlIGNlbGwgYXQgeCBhbmQgeVxuICAgICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gKTtcbiAgICAgIC8vIGdpdmUgdGhhdCBjZWxsIGEgY2xhc3Mgb2Ygc2hpcFxuICAgICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwU3VuaycpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckJvYXJkcygpIHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJCb2FyZCcpO1xuICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG4gIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckJvYXJkJyk7XG4gIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24nKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24nKS5yZW1vdmUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wdXRlckJvYXJkKCkge1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyQm9hcmQnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBqKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBpKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoY29tcHV0ZXJUdXJuID09PSBmYWxzZSAmJiAhKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpKSB7XG4gICAgICAgICAgYXR0YWNrRXZlbnQoZS50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllckJvYXJkKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJCb2FyZCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJDZWxsVmVydGljYWwnKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBqKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBpKTtcbiAgICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjZWxsUGxhY2VTaGlwKGVsZW1lbnQsIGJ1dHRvbiwgcGxheWVyQ2VsbCkge1xuICBjb25zdCB4ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpO1xuICBjb25zdCB5ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpO1xuICBsZXQgc2hpcEFtb3VudCA9IHBsYXllci5wbGF5ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5sZW5ndGg7XG4gIGlmIChzaGlwQW1vdW50ID09PSAwKSB7XG4gICAgcGxheWVyLnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXA1KCgreCksICgreSksIGlzVmVydGljYWwpO1xuICB9IGVsc2UgaWYgKHNoaXBBbW91bnQgPT09IDUpIHtcbiAgICBwbGF5ZXIucGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcDQoKCt4KSwgKCt5KSwgaXNWZXJ0aWNhbCk7XG4gIH0gZWxzZSBpZiAoc2hpcEFtb3VudCA9PT0gOSkge1xuICAgIHBsYXllci5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwMygoK3gpLCAoK3kpLCBpc1ZlcnRpY2FsKTtcbiAgfSBlbHNlIGlmIChzaGlwQW1vdW50ID09PSAxMikge1xuICAgIHBsYXllci5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwMygoK3gpLCAoK3kpLCBpc1ZlcnRpY2FsKTtcbiAgfSBlbHNlIGlmIChzaGlwQW1vdW50ID09PSAxNSkge1xuICAgIHBsYXllci5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwMigoK3gpLCAoK3kpLCBpc1ZlcnRpY2FsKTtcbiAgfVxuXG4gIHVwZGF0ZVBsYXllckJvYXJkKCk7XG4gIHNoaXBBbW91bnQgPSBwbGF5ZXIucGxheWVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24ubGVuZ3RoO1xuXG4gIGlmIChzaGlwQW1vdW50ID09PSA1KSB7XG4gICAgcGxheWVyQ2VsbC5mb3JFYWNoKChlbGVtZW50cykgPT4ge1xuICAgICAgZWxlbWVudHMuY2xhc3NMaXN0LmFkZCgnZm91cicpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHNoaXBBbW91bnQgPT09IDkpIHtcbiAgICBwbGF5ZXJDZWxsLmZvckVhY2goKGVsZW1lbnRzKSA9PiB7XG4gICAgICBlbGVtZW50cy5jbGFzc0xpc3QuYWRkKCd0aHJlZScpO1xuICAgICAgZWxlbWVudHMuY2xhc3NMaXN0LnJlbW92ZSgnZm91cicpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHNoaXBBbW91bnQgPT09IDE1KSB7XG4gICAgcGxheWVyQ2VsbC5mb3JFYWNoKChlbGVtZW50cykgPT4ge1xuICAgICAgZWxlbWVudHMuY2xhc3NMaXN0LmFkZCgndHdvJyk7XG4gICAgICBlbGVtZW50cy5jbGFzc0xpc3QucmVtb3ZlKCd0aHJlZScpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHNoaXBBbW91bnQgPT09IDE3KSB7XG4gICAgYnV0dG9uLnJlbW92ZSgpO1xuICAgIGNsZWFyQm9hcmRzKCk7XG4gICAgY3JlYXRlQ29tcHV0ZXJCb2FyZCgpO1xuICAgIGNyZWF0ZVBsYXllckJvYXJkKCk7XG4gICAgdXBkYXRlUGxheWVyQm9hcmQoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyQ2VsbFZlcnRpY2FsJykuZm9yRWFjaCgoZWxlbWVudHMpID0+IHsgZWxlbWVudHMuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyQ2VsbFZlcnRpY2FsJyk7IH0pO1xuICAgIGluc3RydWN0aW9uLnRleHRDb250ZW50ID0gJ1BsYXllclxcJ3MgVHVybic7XG4gIH1cbn1cblxuZnVuY3Rpb24gcm90YXRlVmlzdWFsKHBsYXllckNlbGwpIHtcbiAgaWYgKGlzVmVydGljYWwgPT09IHRydWUpIHtcbiAgICBwbGF5ZXJDZWxsLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGxheWVyQ2VsbEhvcml6b250YWwnKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyQ2VsbFZlcnRpY2FsJyk7XG4gICAgfSk7XG4gICAgaXNWZXJ0aWNhbCA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGlzVmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgcGxheWVyQ2VsbC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BsYXllckNlbGxWZXJ0aWNhbCcpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXJDZWxsSG9yaXpvbnRhbCcpO1xuICAgIH0pO1xuICAgIGlzVmVydGljYWwgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldHVwR2FtZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHBsYXllckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyQ2VsbFZlcnRpY2FsJyk7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcm90YXRlVmlzdWFsKHBsYXllckNlbGwpKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICBpbnN0cnVjdGlvbi5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbicpO1xuICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9ICdQbGFjZSBZb3VyIFNoaXBzJztcbiAgYm9keS5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbik7XG4gIHBsYXllckNlbGwuZm9yRWFjaCgoZWxlbWVudCkgPT4geyBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNlbGxQbGFjZVNoaXAoZS50YXJnZXQsIGJ1dHRvbiwgcGxheWVyQ2VsbCkpOyB9KTtcbiAgY29tcHV0ZXJQbGFjZVNoaXA1KCk7XG4gIGNvbXB1dGVyUGxhY2VTaGlwNCgpO1xuICBjb21wdXRlclBsYWNlU2hpcDMoKTtcbiAgY29tcHV0ZXJQbGFjZVNoaXAzKCk7XG4gIGNvbXB1dGVyUGxhY2VTaGlwMigpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZW1wQ29tcHV0ZXJCb2FyZCgpIHtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckJvYXJkJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS14Jywgaik7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgaSk7XG4gICAgICBjb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVCb2FyZChib2FyZCwgeCwgeSwgY2VsbCkge1xuICBjb25zdCBib2FyZFNoaXBzTG9jYXRpb24gPSBib2FyZC5zaGlwc0xvY2F0aW9uO1xuXG4gIGlmIChib2FyZFNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgeV19YCkgIT09IC0xKSB7XG4gICAgLy8gY2FuIGhpdCB0aGF0IHNxdWFyZVxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gIH0gZWxzZSBpZiAoYm9hcmRTaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsIHldfWApID09PSAtMSkge1xuICAgIC8vIGNhbid0IGhpdCB0aGF0IHNxdWFyZVxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc1tpXS5pc1N1bmsoKTtcbiAgICBpZiAoY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNbaV0uc3VuayA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb25baV07XG4gICAgICAvLyBnZXQgeCBhbmQgeVxuICAgICAgY29uc3QgYm90aFhZID0gZWxlbWVudC5zcGxpdCgnLCcpO1xuICAgICAgY29uc3QgW2EsIGJdID0gYm90aFhZO1xuICAgICAgLy8gZ2V0IHRoZSBjZWxsIGF0IHggYW5kIHlcbiAgICAgIGNvbnN0IHRhcmdldENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXJCb2FyZCBbZGF0YS14PVwiJHthfVwiXVtkYXRhLXk9XCIke2J9XCJdYCk7XG4gICAgICAvLyBnaXZlIHRoYXQgY2VsbCBhIGNsYXNzIG9mIHNoaXBcbiAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcFN1bmsnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIC8vIHdpcGUgZXZlcnl0aGluZyBjbGVhbiB0byBzdGFydFxuICBjbGVhckJvYXJkcygpO1xuICAvLyByZW5kZXIgcGxheWVycyAmIGdhbWVib2FyZHNcbiAgcGxheWVyID0gbmV3IFBsYXllcignWW91Jyk7XG4gIGNvbXB1dGVyUGxheWVyID0gbmV3IENvbXB1dGVyUGxheWVyKCk7XG4gIHBsYXllci5jcmVhdGVHYW1lQm9hcmQoKTtcbiAgY29tcHV0ZXJQbGF5ZXIuY3JlYXRlR2FtZUJvYXJkKCk7XG5cbiAgY3JlYXRlUGxheWVyQm9hcmQoKTtcbiAgY3JlYXRlVGVtcENvbXB1dGVyQm9hcmQoKTtcbiAgc2V0dXBHYW1lKCk7XG4gIHVwZGF0ZVBsYXllckJvYXJkKCk7XG59XG5nYW1lTG9vcCgpO1xuXG5mdW5jdGlvbiBlbmRHYW1lKHBsYXllcnMpIHtcbiAgY29uc3Qgd2lubmluZ01lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5pbmdNZXNzYWdlJyk7XG4gIGNvbnN0IHdpbm5pbmdNZXNzYWdlVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmluZ01lc3NhZ2VUZXh0Jyk7XG4gIGNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydEJ1dHRvbicpO1xuICB3aW5uaW5nTWVzc2FnZVRleHRFbGVtZW50LmlubmVyVGV4dCA9IGAke3BsYXllcnN9IHdpbiFgO1xuICB3aW5uaW5nTWVzc2FnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICByZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdhbWVMb29wKCk7XG4gICAgd2lubmluZ01lc3NhZ2VFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBhdHRhY2tFdmVudChlbGVtZW50KSB7XG4gIGNvbnN0IHggPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS14Jyk7XG4gIGNvbnN0IHkgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS15Jyk7XG4gIGxldCBwbGF5ZXJIaXQgPSBmYWxzZTtcbiAgbGV0IGNvbXB1dGVyTWlzcyA9IGZhbHNlO1xuXG4gIHBsYXllci5maXJlU2hvdCh4LCB5LCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZCk7XG4gIGlmIChjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uXG4gICAgLmluZGV4T2YocGxheWVyLnBhc3RBdHRhY2tzW3BsYXllci5wYXN0QXR0YWNrcy5sZW5ndGggLSAxXSkgIT09IC0xKSB7XG4gICAgLy8gdHJpZ2dlcnMgaWYgdGhlIGZpcmVkIHNob3QgaGl0XG4gICAgcGxheWVySGl0ID0gdHJ1ZTtcbiAgfVxuICAvLyB1cGRhdGUgdGhlIGNvbXB1dGVycyBib2FyZCB2aXN1YWxseVxuICB1cGRhdGVCb2FyZChjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZCwgeCwgeSwgZWxlbWVudCk7XG4gIGlmIChjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIC8vIGVuZCB0aGUgZ2FtZSBhbmQgc2F5IHBsYXllciB3b25cbiAgICBlbmRHYW1lKHBsYXllci5uYW1lKTtcbiAgfVxuICBpZiAocGxheWVySGl0ID09PSBmYWxzZSkge1xuICAgIGNvbXB1dGVyVHVybiA9IHRydWU7XG4gICAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPSAnQ29tcHV0ZXJcXCdzIFR1cm4nO1xuICAgIHdoaWxlIChjb21wdXRlck1pc3MgPT09IGZhbHNlKSB7XG4gICAgICBhd2FpdCBkZWxheSgyMDAwKTtcbiAgICAgIGNvbXB1dGVyUGxheWVyLmZpcmVTaG90KHBsYXllci5wbGF5ZXJHYW1lQm9hcmQpO1xuICAgICAgaWYgKHBsYXllci5wbGF5ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvblxuICAgICAgICAuaW5kZXhPZihjb21wdXRlclBsYXllci5wYXN0QXR0YWNrc1tjb21wdXRlclBsYXllci5wYXN0QXR0YWNrcy5sZW5ndGggLSAxXSkgIT09IC0xKSB7XG4gICAgICAgIC8vIHRyaWdnZXJzIGlmIHRoZSBmaXJlZCBzaG90IGhpdFxuICAgICAgICBjb21wdXRlclBsYXllci5sYXN0QXR0YWNrSGl0ID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXB1dGVyTWlzcyA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyB1cGRhdGUgdGhlIHBsYXllciBib2FyZCB2aXN1YWxseVxuICAgICAgdXBkYXRlUGxheWVyQm9hcmQoKTtcbiAgICAgIGlmIChwbGF5ZXIucGxheWVyR2FtZUJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIC8vIGVuZCB0aGUgZ2FtZSBhbmQgc2F5IGNvbXB1dGVyIHdvblxuICAgICAgICBlbmRHYW1lKGNvbXB1dGVyUGxheWVyLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wdXRlclR1cm4gPSBmYWxzZTtcbiAgICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9ICdQbGF5ZXJcXCdzIFR1cm4nO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=