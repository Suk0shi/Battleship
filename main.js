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
}`, "",{"version":3,"sources":["webpack://./src/CSS/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAAqC;AACzC;;AAEA;IACI,2BAA2B;IAC3B,4CAAsC;IACtC,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;IACrB,sBAAsB;IACtB,YAAY;IACZ,2BAA2B;AAC/B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,mCAAmC;IACnC,yBAAyB;AAC7B;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;;IAEI,aAAa;IACb,uCAAuC;IACvC,QAAQ;IACR,uCAAuC;AAC3C;;AAEA;;IAEI,yDAAgD;IAChD,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,SAAS;IACT,eAAe;IACf,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;CACC,aAAa;CACb,eAAe;CACf,MAAM;CACN,OAAO;CACP,QAAQ;CACR,SAAS;CACT,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,YAAY;CACZ,eAAe;CACf,8CAA8C;CAC9C,sBAAsB;AACvB;;AAEA;CACC,aAAa;AACd;;AAEA;IACI,6BAA6B;IAC7B,YAAY;;AAEhB;;AAEA;IACI,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,YAAY;AAChB","sourcesContent":["@font-face {\n    font-family: 'Roboto';\n    src: url(/src/Fonts/Roboto-Light.ttf);\n}\n\n@font-face {\n    font-family: 'RobotoMedium';\n    src: url(/src/Fonts/Roboto-Medium.ttf);\n    font-weight: bold;\n}\n\n:root {\n    --ship: rgb(0, 0, 216);\n    --hit: rgb(196, 0, 0);\n    --sunk: rgb(128, 0, 0);\n    --miss: grey;\n    --background: rgb(0, 0, 91);\n}\n\n* {\n    font-family: 'Roboto';\n}\n\nbody {\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    background-color: var(--background);\n    color: rgb(189, 191, 193);\n}\n\nh3 {\n    margin: 0;\n}\n\n.heading {\n    font-family: 'RobotoMedium';\n}\n\n.title {\n    margin: 20px;\n    height: 100px;\n    width: 400px;\n    object-fit: cover;\n    object-position: bottom;\n}\n\n.playerBoard,\n.computerBoard {\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    gap: 3px;\n    background-color: rgba(0, 0, 91, 0.713);\n}\n\n.playerBoardWrap,\n.computerBoardWrap {\n    background-image: url(/dist/Images/radarGif.gif);\n    background-position: center;\n}\n\n.cell {\n    border-style: solid;\n    width: 20px;\n    height: 20px;\n    border-color: rgb(189, 191, 193);\n}\n\n.content {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 20px;\n    column-gap: 8vw;\n    justify-items: center;\n    align-self: center;\n    margin-top: 30px;\n}\n\n.button {\n    padding: 10px;\n    border-radius: 10px;\n    background-color: white;\n    color: var(--background);\n    font-weight: 1000;\n    border-style: none;\n}\n\n.miss {\n    background-color: var(--miss);\n}\n\n.hit {\n    background-color: var(--hit);\n}\n\n.ship {\n    background-color: var(--ship);\n}\n\n.shipSunk {\n    background-color: var(--sunk);\n}\n\n.computerShot {\n    background-color: var(--miss);\n}\n\n.computerShot.ship {\n    background-color: var(--hit);\n}\n\n.computerShot.ship.shipSunk {\n    background-color: var(--sunk);\n}\n\n.winning-message {\n\tdisplay: none;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: blue;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: white;\n\tfont-size: 5rem;\n\tfont-family: 'Courier New', Courier, monospace;\n\tflex-direction: column;\n}\n\n.winning-message.show {\n\tdisplay: flex;\n}\n\n.playerCellVertical:hover {\n    background-color: var(--ship);\n    height: 523%;\n    \n}\n\n.playerCellHorizontal:hover {\n    background-color: var(--ship);\n    width: 523%;\n}\n\n.playerCellVertical.four:hover {\n    background-color: var(--ship);\n    height: 410%;\n}\n\n.playerCellHorizontal.four:hover {\n    background-color: var(--ship);\n    width: 410%;\n}\n\n.playerCellVertical.three:hover {\n    background-color: var(--ship);\n    height: 300%;\n}\n\n.playerCellHorizontal.three:hover {\n    background-color: var(--ship);\n    width: 300%;\n}\n\n.playerCellVertical.two:hover {\n    background-color: var(--ship);\n    height: 190%;\n}\n\n.playerCellHorizontal.two:hover {\n    background-color: var(--ship);\n    width: 190%;\n}\n\n.instruction {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    margin-top: 30px;\n    border-style: solid;\n    border-radius: 20px;\n    height: 60px;\n    width: 300px;\n}"],"sourceRoot":""}]);
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
        name: "Computer",
        computerGameBoard: null,
        createGameBoard() {
            this.computerGameBoard = new _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
        },
        pastAttacks: [],
        lastAttackHit: 0,
        cellHit: null,
        fireShot(gameboard) {
            //computer makes random attacks
            let x = null;
            let y = null;
            if (this.lastAttackHit === 0) {
                while (this.pastAttacks.indexOf(`${[x, y]}`) !== -1 || x === null) {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
                }
            }
            else if (this.lastAttackHit === 1 || this.lastAttackHit === 2) {
                if (this.lastAttackHit === 1) {
                    //the cell that was hit
                    this.cellHit = this.pastAttacks[this.pastAttacks.length -1];
                }
                //hit an ajacent square
                let bothXY = this.cellHit.split(",");
                x = bothXY[0];
                y = bothXY[1];
                //try hitting above
                if (this.pastAttacks.indexOf(`${[x, y - 1]}`) === -1 && y - 1 >= 0) {
                    y = y - 1;
                    this.lastAttackHit = 2;
                }
                //try hitting below
                else if (this.pastAttacks.indexOf(`${[x, (+y) + 1]}`) === -1 && (+y) + 1 <= 9) {
                    y = (+y) + 1;
                    this.lastAttackHit = 2;
                }
                //try hitting to the right 
                else if (this.pastAttacks.indexOf(`${[(+x) + 1, y]}`) === -1 && (+x) + 1 <= 9) {
                    x = (+x) + 1;
                    this.lastAttackHit = 2;
                }
                //try hitting to the left
                else if (this.pastAttacks.indexOf(`${[x - 1, y]}`) === -1 && x - 1 >= 0) {
                    x = x - 1;
                    this.lastAttackHit = 2;
                }
                //if all ajacent squares tried
                else {
                    while (this.pastAttacks.indexOf(`${[x, y]}`) !== -1) {
                        x = Math.floor(Math.random() * 10);
                        y = Math.floor(Math.random() * 10);
                    }
                    this.lastAttackHit = 0;
                }
            }

            this.pastAttacks.push(`${[x, y]}`);
            gameboard.receiveAttack(x,y);
        }
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
/* harmony import */ var _factories_shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/shipFactory */ "./src/factories/shipFactory.js");


function Gameboard(x, y) {
    return {
        board: [],
        shipsLocation: [],
        ships: [],
        missedAttacks: [],
        createBoard(size = 10) {
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                  this.board.push(`${[i, j]}`);
                }
            }
        },
        placeShip5(x, y, isVertical) {
            //for vertical 
            if (isVertical === true) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+1]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+2]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+3]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+4]}`) === -1
                && y < 6) {
                    let ship = new _factories_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](5);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x, y+1]}`);
                    this.shipsLocation.push(`${[x, y+2]}`);
                    this.shipsLocation.push(`${[x, y+3]}`);
                    this.shipsLocation.push(`${[x, y+4]}`);
                };
            }
            //for horizontal
            else if (isVertical === false) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+1, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+2, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+3, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+4, y]}`) === -1
                && x < 6) {
                    let ship = new _factories_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](5);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x+1, y]}`);
                    this.shipsLocation.push(`${[x+2, y]}`);
                    this.shipsLocation.push(`${[x+3, y]}`);
                    this.shipsLocation.push(`${[x+4, y]}`);
                };
            }
        },
        placeShip4(x, y, isVertical) {
            //for vertical 
            if (isVertical === true) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+1]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+2]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+3]}`) === -1
                && y < 7) {
                    let ship = new _factories_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](4);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x, y+1]}`);
                    this.shipsLocation.push(`${[x, y+2]}`);
                    this.shipsLocation.push(`${[x, y+3]}`);
                };
            }
            //for horizontal
            else if (isVertical === false) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+1, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+2, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+3, y]}`) === -1
                && x < 7) {
                    let ship = new _factories_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](4);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x+1, y]}`);
                    this.shipsLocation.push(`${[x+2, y]}`);
                    this.shipsLocation.push(`${[x+3, y]}`);
                };
            }
        },
        placeShip3(x, y, isVertical) {
            //for vertical 
            if (isVertical === true) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+1]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+2]}`) === -1
                && y < 8) {
                    let ship = new _factories_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](3);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x, y+1]}`);
                    this.shipsLocation.push(`${[x, y+2]}`);
                };
            }
            //for horizontal
            else if (isVertical === false) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+1, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+2, y]}`) === -1
                && x < 8) {
                    let ship = new _factories_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](3);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x+1, y]}`);
                    this.shipsLocation.push(`${[x+2, y]}`);
                };
            }
        },
        placeShip2(x, y, isVertical) {
            //for vertical 
            if (isVertical === true) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+1]}`) === -1
                && y < 9) {
                    let ship = new _factories_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](2);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x, y+1]}`);
                };
            }
            //for horizontal
            else if (isVertical === false) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+1, y]}`) === -1
                && x < 9) {
                    let ship = new _factories_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"](2);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x+1, y]}`);
                };
            }
        },
        receiveAttack(x, y) {
            if (this.shipsLocation.indexOf(`${[x, y]}`) === -1) {
                this.missedAttacks.push(`${[x, y]}`);
            }
            else {
                let locationIndex = this.shipsLocation.indexOf(`${[x, y]}`)
                this.ships[locationIndex].hit();
            }
        },
        allShipsSunk() {
            for (let i = 0; i < this.ships.length; i++) {
                this.ships[i].isSunk();
                if (this.ships[i].sunk === false) {
                    return false;
                }
            }
            return true;
        }
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
        name: name,
        playerGameBoard: null,
        pastAttacks: [],
        createGameBoard() {
            this.playerGameBoard = new _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
        },
        fireShot(x , y, gameboard) {
            this.pastAttacks.push(`${[x, y]}`);
            gameboard.receiveAttack(x,y);
        }
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
        length: length,
        hitNum: 0,
        sunk: false,
        hit() {
            this.hitNum += 1;
        },
        isSunk() {
            if(this.hitNum === this.length) {
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
/* harmony import */ var _factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/gameboardFactory */ "./src/factories/gameboardFactory.js");
/* harmony import */ var _factories_computerPlayerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/computerPlayerFactory */ "./src/factories/computerPlayerFactory.js");
/* harmony import */ var _factories_playerFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/playerFactory */ "./src/factories/playerFactory.js");
/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSS/style.css */ "./src/CSS/style.css");





let player = new _factories_playerFactory__WEBPACK_IMPORTED_MODULE_2__["default"]('Hugo');
let computerPlayer = new _factories_computerPlayerFactory__WEBPACK_IMPORTED_MODULE_1__["default"]();
let isVertical = true;
let computerTurn = false;
let instruction = document.createElement('h3');

player.createGameBoard();
computerPlayer.createGameBoard();

function setupGame() {
    let body = document.querySelector('body');
    let container = document.querySelector('.content');
    let button = document.createElement('button');
    let playerCell = document.querySelectorAll('.playerCellVertical');
    button.classList.add('button');
    button.addEventListener('click', e => rotateVisual(playerCell))
    button.textContent = 'Rotate';
    container.appendChild(button);
    instruction.classList.add('instruction');
    instruction.textContent = 'Place Your Ships';
    body.appendChild(instruction);
    playerCell.forEach(element => {element.addEventListener('click', (e) => cellPlaceShip(e.target, button, playerCell))});
    computerPlaceShip5();
    computerPlaceShip4();
    computerPlaceShip3();
    computerPlaceShip3();
    computerPlaceShip2();
}

function computerPlaceShip5() {
    let x = null;
    let y = null;
    let z = Math.floor(Math.random() * 2);

    if (z === 0) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+1]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+2]}`) !== -1 
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+3]}`) !== -1 
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+4]}`) !== -1 
        ) || x === null) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 6);
        }
        computerPlayer.computerGameBoard.placeShip5(x,y, true);
    }
    else if (z === 1) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+1,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+2,y]}`) !== -1 
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+3,y]}`) !== -1 
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+4,y]}`) !== -1 
        ) || x === null) {
            x = Math.floor(Math.random() * 6);
            y = Math.floor(Math.random() * 10);
        }
        computerPlayer.computerGameBoard.placeShip5(x,y, false);
    } 
}

function computerPlaceShip4() {
    let x = null;
    let y = null;
    let z = Math.floor(Math.random() * 2);

    if (z === 0) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+1]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+2]}`) !== -1 
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+3]}`) !== -1 
        ) || x === null) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 7);
        }
        computerPlayer.computerGameBoard.placeShip4(x,y, true);
    }
    else if (z === 1) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+1,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+2,y]}`) !== -1 
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+3,y]}`) !== -1 
        ) || x === null) {
            x = Math.floor(Math.random() * 7);
            y = Math.floor(Math.random() * 10);
        }
        computerPlayer.computerGameBoard.placeShip4(x,y, false);
    } 
}

function computerPlaceShip3() {
    let x = null;
    let y = null;
    let z = Math.floor(Math.random() * 2);

    if (z === 0) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+1]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+2]}`) !== -1 
        ) || x === null) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 8);
        }
        computerPlayer.computerGameBoard.placeShip3(x,y, true);
    }
    else if (z === 1) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+1,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+2,y]}`) !== -1 
        ) || x === null) {
            x = Math.floor(Math.random() * 8);
            y = Math.floor(Math.random() * 10);
        }
        computerPlayer.computerGameBoard.placeShip3(x,y, false);
    } 
}

function computerPlaceShip2() {
    let x = null;
    let y = null;
    let z = Math.floor(Math.random() * 2);

    if (z === 0) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+1]}`) !== -1
        ) || x === null) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 9);
        }
        computerPlayer.computerGameBoard.placeShip2(x,y, true);
    }
    else if (z === 1) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+1,y]}`) !== -1
        ) || x === null) {
            x = Math.floor(Math.random() * 9);
            y = Math.floor(Math.random() * 10);
        }
        computerPlayer.computerGameBoard.placeShip2(x,y, false);
    } 
}

function cellPlaceShip(element, button, playerCell) {
    let x = element.getAttribute("data-x");
    let y = element.getAttribute("data-y");
    let shipAmount = player.playerGameBoard.shipsLocation.length;
    if (shipAmount === 0) {
        player.playerGameBoard.placeShip5((+x),(+y), isVertical);
    }
    else if (shipAmount === 5) {
        player.playerGameBoard.placeShip4((+x),(+y), isVertical);
    } 
    else if (shipAmount === 9) {
        player.playerGameBoard.placeShip3((+x),(+y), isVertical);
    }
    else if (shipAmount === 12) {
        player.playerGameBoard.placeShip3((+x),(+y), isVertical);
    }
    else if (shipAmount === 15) {
        player.playerGameBoard.placeShip2((+x),(+y), isVertical);
    }
    
    updatePlayerBoard();
    shipAmount = player.playerGameBoard.shipsLocation.length;

    if (shipAmount === 5) {
        playerCell.forEach(element => {
            element.classList.add('four');
        })
    }
    else if (shipAmount === 9) {
        playerCell.forEach(element => {
            element.classList.add("three");
            element.classList.remove("four");
        })
    } 
    else if (shipAmount === 15) {
        playerCell.forEach(element => {
            element.classList.add("two");
            element.classList.remove("three");
        })
    }

    if (shipAmount === 17) {
        button.remove();
        clearBoards();
        createComputerBoard();
        createPlayerBoard();
        updatePlayerBoard();
        document.querySelectorAll('.playerCellVertical').forEach(element => {element.classList.remove("playerCellVertical")});
        instruction.textContent = `Player's Turn`;
    }
}

function rotateVisual(playerCell) {
    if (isVertical === true) {
        playerCell.forEach(element => {
            element.classList.add("playerCellHorizontal");
            element.classList.remove("playerCellVertical");
        })
        isVertical = false;
    }
    else if (isVertical === false) {
        playerCell.forEach(element => {
            element.classList.add("playerCellVertical");
            element.classList.remove("playerCellHorizontal");
        })
        isVertical = true;
    }
}

function createPlayerBoard() {
    let playerBoard = document.querySelector('.playerBoard');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          let cell = document.createElement("div");
          cell.classList.add("cell");
          cell.classList.add("playerCellVertical");
          cell.setAttribute("data-x", j);
          cell.setAttribute("data-y", i);
          playerBoard.appendChild(cell);
        }
    }
}

function createComputerBoard() {
    let computerBoard = document.querySelector('.computerBoard');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          let cell = document.createElement("div");
          cell.classList.add("cell");
          cell.setAttribute("data-x", j);
          cell.setAttribute("data-y", i);
          cell.addEventListener("click", (e) => {
                if (computerTurn === false && !(e.target.classList.contains('hit') || e.target.classList.contains('miss'))) {
                    attackEvent(e.target);
                }
            });
          computerBoard.appendChild(cell);
        }
    }
}

function createTempComputerBoard() {
    let computerBoard = document.querySelector('.computerBoard');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          let cell = document.createElement("div");
          cell.classList.add("cell");
          cell.setAttribute("data-x", j);
          cell.setAttribute("data-y", i);
          computerBoard.appendChild(cell);
        }
    }
}

async function attackEvent(element) {
    let x = element.getAttribute("data-x");
    let y = element.getAttribute("data-y");
    let playerHit = false;
    let computerMiss = false;
    
    player.fireShot(x, y, computerPlayer.computerGameBoard);
    if (computerPlayer.computerGameBoard.shipsLocation.indexOf(player.pastAttacks[player.pastAttacks.length - 1]) !== -1) {
        //triggers if the fired shot hit
        playerHit = true;
    }
    //update the computers board visually
    updateBoard(computerPlayer.computerGameBoard, x, y, element)
    if (computerPlayer.computerGameBoard.allShipsSunk()) {
        //end the game and say player won
        endGame(player.name);
    }
    if (playerHit === false) {
        computerTurn = true;
        instruction.textContent = `Computer's Turn`;
        while (computerMiss === false) {    
            await delay(2000);
            computerPlayer.fireShot(player.playerGameBoard);
            if (player.playerGameBoard.shipsLocation.indexOf(computerPlayer.pastAttacks[computerPlayer.pastAttacks.length - 1]) !== -1) {
                //triggers if the fired shot hit
                computerPlayer.lastAttackHit = 1;
            }
            else {
                computerMiss = true;
            }
            //update the player board visually
            updatePlayerBoard();
            if (player.playerGameBoard.allShipsSunk()) {
                //end the game and say computer won
                endGame(computerPlayer.name);
            }
        }
        computerTurn = false;
        instruction.textContent = `Player's Turn`;
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function endGame(player) {
    let winningMessageElement = document.getElementById('winningMessage')
    let winningMessageTextElement = document.getElementById('winningMessageText');
    let restartButton = document.getElementById('restartButton')
    winningMessageTextElement.innerText = `${player} win!`;
    winningMessageElement.classList.add('show');
    restartButton.addEventListener('click', () => {
        gameLoop();
        winningMessageElement.classList.remove('show');
    });
}

function updateBoard(board, x, y, cell) {
    let boardShipsLocation = board.shipsLocation;
    let boardShips = board.ships;

    if (boardShipsLocation.indexOf(`${[x, y]}`) !== -1) {
        //can hit that square
        cell.classList.add("hit");
    }
    else if (boardShipsLocation.indexOf(`${[x, y]}`) === -1) {
        //can't hit that square
        cell.classList.add("miss");
    }
    for (let i = 0; i < computerPlayer.computerGameBoard.ships.length; i++) {
        computerPlayer.computerGameBoard.ships[i].isSunk();
        if (computerPlayer.computerGameBoard.ships[i].sunk === true) {
            let element = computerPlayer.computerGameBoard.shipsLocation[i];
            //get x and y 
            let bothXY = element.split(",");
            let x = bothXY[0];
            let y = bothXY[1];
            //get the cell at x and y
            let targetCell = document.querySelector(`.computerBoard [data-x="${x}"][data-y="${y}"]`);
            //give that cell a class of ship
            targetCell.classList.add("shipSunk");
        }
    }
}

function updatePlayerBoard(board = player.playerGameBoard) {
    let boardShipsLocation = board.shipsLocation;
    //go through players ships location array
    boardShipsLocation.forEach(element => {
        //get x and y 
        let bothXY = element.split(",");
        let x = bothXY[0];
        let y = bothXY[1];
        //get the cell at x and y
        let targetCell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
        //give that cell a class of ship
        targetCell.classList.add("ship");
    });
    let computerShots = computerPlayer.pastAttacks;
    //go through players ships location array
    computerShots.forEach(element => {
        //get x and y 
        let bothXY = element.split(",");
        let x = bothXY[0];
        let y = bothXY[1];
        //get the cell at x and y
        let targetCell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
        //give that cell a class of ship
        targetCell.classList.add("computerShot");
    });
    for (let i = 0; i < player.playerGameBoard.ships.length; i++) {
        player.playerGameBoard.ships[i].isSunk();
        if (player.playerGameBoard.ships[i].sunk === true) {
            let element = player.playerGameBoard.shipsLocation[i];
            //get x and y 
            let bothXY = element.split(",");
            let x = bothXY[0];
            let y = bothXY[1];
            //get the cell at x and y
            let targetCell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
            //give that cell a class of ship
            targetCell.classList.add("shipSunk");
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

function gameLoop() {
    //wipe everything clean to start
    clearBoards();
    // render players & gameboards
    player = new _factories_playerFactory__WEBPACK_IMPORTED_MODULE_2__["default"]('You');
    computerPlayer = new _factories_computerPlayerFactory__WEBPACK_IMPORTED_MODULE_1__["default"]();
    player.createGameBoard();
    computerPlayer.createGameBoard();

    createPlayerBoard();
    createTempComputerBoard();
    setupGame();
    updatePlayerBoard();
}
gameLoop();


//add ship sunk visual for player board 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDhJQUE4QztBQUMxRiw0Q0FBNEMsZ0pBQStDO0FBQzNGLDRDQUE0QywwSUFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvRkFBb0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8s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N0U7QUFDQTtBQUNBLEtBQUs7QUFDTCxvQkFBb0IseUNBQXlDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsRUFBRSxhQUFhLEVBQUU7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnRUFBTTtBQUN2Qix5QkFBeUIsd0VBQWM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9DU1Mvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0NTUy9zdHlsZS5jc3M/YTFjZiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2NvbXB1dGVyUGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL0ZvbnRzL1JvYm90by1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL0ZvbnRzL1JvYm90by1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL2Rpc3QvSW1hZ2VzL3JhZGFyR2lmLmdpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvTWVkaXVtJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuOnJvb3Qge1xuICAgIC0tc2hpcDogcmdiKDAsIDAsIDIxNik7XG4gICAgLS1oaXQ6IHJnYigxOTYsIDAsIDApO1xuICAgIC0tc3VuazogcmdiKDEyOCwgMCwgMCk7XG4gICAgLS1taXNzOiBncmV5O1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDAsIDAsIDkxKTtcbn1cblxuKiB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogcmdiKDE4OSwgMTkxLCAxOTMpO1xufVxuXG5oMyB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9NZWRpdW0nO1xufVxuXG4udGl0bGUge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IGJvdHRvbTtcbn1cblxuLnBsYXllckJvYXJkLFxuLmNvbXB1dGVyQm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI1cHgpO1xuICAgIGdhcDogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgOTEsIDAuNzEzKTtcbn1cblxuLnBsYXllckJvYXJkV3JhcCxcbi5jb21wdXRlckJvYXJkV3JhcCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmNlbGwge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4OSwgMTkxLCAxOTMpO1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMjBweDtcbiAgICBjb2x1bW4tZ2FwOiA4dnc7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MpO1xufVxuXG4uaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xufVxuXG4uc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XG59XG5cbi5zaGlwU3VuayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuayk7XG59XG5cbi5jb21wdXRlclNob3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MpO1xufVxuXG4uY29tcHV0ZXJTaG90LnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdCk7XG59XG5cbi5jb21wdXRlclNob3Quc2hpcC5zaGlwU3VuayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuayk7XG59XG5cbi53aW5uaW5nLW1lc3NhZ2Uge1xuXHRkaXNwbGF5OiBub25lO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiA1cmVtO1xuXHRmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ud2lubmluZy1tZXNzYWdlLnNob3cge1xuXHRkaXNwbGF5OiBmbGV4O1xufVxuXG4ucGxheWVyQ2VsbFZlcnRpY2FsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcbiAgICBoZWlnaHQ6IDUyMyU7XG4gICAgXG59XG5cbi5wbGF5ZXJDZWxsSG9yaXpvbnRhbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XG4gICAgd2lkdGg6IDUyMyU7XG59XG5cbi5wbGF5ZXJDZWxsVmVydGljYWwuZm91cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XG4gICAgaGVpZ2h0OiA0MTAlO1xufVxuXG4ucGxheWVyQ2VsbEhvcml6b250YWwuZm91cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XG4gICAgd2lkdGg6IDQxMCU7XG59XG5cbi5wbGF5ZXJDZWxsVmVydGljYWwudGhyZWU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xuICAgIGhlaWdodDogMzAwJTtcbn1cblxuLnBsYXllckNlbGxIb3Jpem9udGFsLnRocmVlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcbiAgICB3aWR0aDogMzAwJTtcbn1cblxuLnBsYXllckNlbGxWZXJ0aWNhbC50d286aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xuICAgIGhlaWdodDogMTkwJTtcbn1cblxuLnBsYXllckNlbGxIb3Jpem9udGFsLnR3bzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XG4gICAgd2lkdGg6IDE5MCU7XG59XG5cbi5pbnN0cnVjdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9DU1Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw0Q0FBc0M7SUFDdEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsUUFBUTtJQUNSLHVDQUF1QztBQUMzQzs7QUFFQTs7SUFFSSx5REFBZ0Q7SUFDaEQsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxTQUFTO0lBQ1QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLE1BQU07Q0FDTixPQUFPO0NBQ1AsUUFBUTtDQUNSLFNBQVM7Q0FDVCxzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osZUFBZTtDQUNmLDhDQUE4QztDQUM5QyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgc3JjOiB1cmwoL3NyYy9Gb250cy9Sb2JvdG8tTGlnaHQudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvTWVkaXVtJztcXG4gICAgc3JjOiB1cmwoL3NyYy9Gb250cy9Sb2JvdG8tTWVkaXVtLnR0Zik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tc2hpcDogcmdiKDAsIDAsIDIxNik7XFxuICAgIC0taGl0OiByZ2IoMTk2LCAwLCAwKTtcXG4gICAgLS1zdW5rOiByZ2IoMTI4LCAwLCAwKTtcXG4gICAgLS1taXNzOiBncmV5O1xcbiAgICAtLWJhY2tncm91bmQ6IHJnYigwLCAwLCA5MSk7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6IHJnYigxODksIDE5MSwgMTkzKTtcXG59XFxuXFxuaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9NZWRpdW0nO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogYm90dG9tO1xcbn1cXG5cXG4ucGxheWVyQm9hcmQsXFxuLmNvbXB1dGVyQm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIGdhcDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDkxLCAwLjcxMyk7XFxufVxcblxcbi5wbGF5ZXJCb2FyZFdyYXAsXFxuLmNvbXB1dGVyQm9hcmRXcmFwIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9kaXN0L0ltYWdlcy9yYWRhckdpZi5naWYpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTg5LCAxOTEsIDE5Myk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBjb2x1bW4tZ2FwOiA4dnc7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdCk7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XFxufVxcblxcbi5zaGlwU3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1bmspO1xcbn1cXG5cXG4uY29tcHV0ZXJTaG90IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XFxufVxcblxcbi5jb21wdXRlclNob3Quc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdCk7XFxufVxcblxcbi5jb21wdXRlclNob3Quc2hpcC5zaGlwU3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1bmspO1xcbn1cXG5cXG4ud2lubmluZy1tZXNzYWdlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRyaWdodDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDVyZW07XFxuXFx0Zm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ud2lubmluZy1tZXNzYWdlLnNob3cge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wbGF5ZXJDZWxsVmVydGljYWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcXG4gICAgaGVpZ2h0OiA1MjMlO1xcbiAgICBcXG59XFxuXFxuLnBsYXllckNlbGxIb3Jpem9udGFsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XFxuICAgIHdpZHRoOiA1MjMlO1xcbn1cXG5cXG4ucGxheWVyQ2VsbFZlcnRpY2FsLmZvdXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcXG4gICAgaGVpZ2h0OiA0MTAlO1xcbn1cXG5cXG4ucGxheWVyQ2VsbEhvcml6b250YWwuZm91cjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xcbiAgICB3aWR0aDogNDEwJTtcXG59XFxuXFxuLnBsYXllckNlbGxWZXJ0aWNhbC50aHJlZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xcbiAgICBoZWlnaHQ6IDMwMCU7XFxufVxcblxcbi5wbGF5ZXJDZWxsSG9yaXpvbnRhbC50aHJlZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xcbiAgICB3aWR0aDogMzAwJTtcXG59XFxuXFxuLnBsYXllckNlbGxWZXJ0aWNhbC50d286aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcXG4gICAgaGVpZ2h0OiAxOTAlO1xcbn1cXG5cXG4ucGxheWVyQ2VsbEhvcml6b250YWwudHdvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XFxuICAgIHdpZHRoOiAxOTAlO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZEZhY3RvcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcHV0ZXJQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogXCJDb21wdXRlclwiLFxuICAgICAgICBjb21wdXRlckdhbWVCb2FyZDogbnVsbCxcbiAgICAgICAgY3JlYXRlR2FtZUJvYXJkKCkge1xuICAgICAgICAgICAgdGhpcy5jb21wdXRlckdhbWVCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcGFzdEF0dGFja3M6IFtdLFxuICAgICAgICBsYXN0QXR0YWNrSGl0OiAwLFxuICAgICAgICBjZWxsSGl0OiBudWxsLFxuICAgICAgICBmaXJlU2hvdChnYW1lYm9hcmQpIHtcbiAgICAgICAgICAgIC8vY29tcHV0ZXIgbWFrZXMgcmFuZG9tIGF0dGFja3NcbiAgICAgICAgICAgIGxldCB4ID0gbnVsbDtcbiAgICAgICAgICAgIGxldCB5ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RBdHRhY2tIaXQgPT09IDApIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5wYXN0QXR0YWNrcy5pbmRleE9mKGAke1t4LCB5XX1gKSAhPT0gLTEgfHwgeCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmxhc3RBdHRhY2tIaXQgPT09IDEgfHwgdGhpcy5sYXN0QXR0YWNrSGl0ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdEF0dGFja0hpdCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvL3RoZSBjZWxsIHRoYXQgd2FzIGhpdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbGxIaXQgPSB0aGlzLnBhc3RBdHRhY2tzW3RoaXMucGFzdEF0dGFja3MubGVuZ3RoIC0xXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9oaXQgYW4gYWphY2VudCBzcXVhcmVcbiAgICAgICAgICAgICAgICBsZXQgYm90aFhZID0gdGhpcy5jZWxsSGl0LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICB4ID0gYm90aFhZWzBdO1xuICAgICAgICAgICAgICAgIHkgPSBib3RoWFlbMV07XG4gICAgICAgICAgICAgICAgLy90cnkgaGl0dGluZyBhYm92ZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhc3RBdHRhY2tzLmluZGV4T2YoYCR7W3gsIHkgLSAxXX1gKSA9PT0gLTEgJiYgeSAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB5ID0geSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEF0dGFja0hpdCA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vdHJ5IGhpdHRpbmcgYmVsb3dcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBhc3RBdHRhY2tzLmluZGV4T2YoYCR7W3gsICgreSkgKyAxXX1gKSA9PT0gLTEgJiYgKCt5KSArIDEgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICB5ID0gKCt5KSArIDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEF0dGFja0hpdCA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vdHJ5IGhpdHRpbmcgdG8gdGhlIHJpZ2h0IFxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGFzdEF0dGFja3MuaW5kZXhPZihgJHtbKCt4KSArIDEsIHldfWApID09PSAtMSAmJiAoK3gpICsgMSA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSAoK3gpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0QXR0YWNrSGl0ID0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy90cnkgaGl0dGluZyB0byB0aGUgbGVmdFxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGFzdEF0dGFja3MuaW5kZXhPZihgJHtbeCAtIDEsIHldfWApID09PSAtMSAmJiB4IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSB4IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0QXR0YWNrSGl0ID0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9pZiBhbGwgYWphY2VudCBzcXVhcmVzIHRyaWVkXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLnBhc3RBdHRhY2tzLmluZGV4T2YoYCR7W3gsIHldfWApICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0QXR0YWNrSGl0ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucGFzdEF0dGFja3MucHVzaChgJHtbeCwgeV19YCk7XG4gICAgICAgICAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LHkpO1xuICAgICAgICB9XG4gICAgfTtcbn0iLCJpbXBvcnQgU2hpcCBmcm9tICcuLi9mYWN0b3JpZXMvc2hpcEZhY3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoeCwgeSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkOiBbXSxcbiAgICAgICAgc2hpcHNMb2NhdGlvbjogW10sXG4gICAgICAgIHNoaXBzOiBbXSxcbiAgICAgICAgbWlzc2VkQXR0YWNrczogW10sXG4gICAgICAgIGNyZWF0ZUJvYXJkKHNpemUgPSAxMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5wdXNoKGAke1tpLCBqXX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlU2hpcDUoeCwgeSwgaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgLy9mb3IgdmVydGljYWwgXG4gICAgICAgICAgICBpZiAoaXNWZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgeV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsICgreSkrMV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsICgreSkrMl19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsICgreSkrM119YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsICgreSkrNF19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgJiYgeSA8IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcCg1KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3gsIHldfWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzTG9jYXRpb24ucHVzaChgJHtbeCwgeSsxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3gsIHkrMl19YCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4LCB5KzNdfWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzTG9jYXRpb24ucHVzaChgJHtbeCwgeSs0XX1gKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9mb3IgaG9yaXpvbnRhbFxuICAgICAgICAgICAgZWxzZSBpZiAoaXNWZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsIHldfWApID09PSAtMVxuICAgICAgICAgICAgICAgICYmIHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpKzEsIHldfWApID09PSAtMVxuICAgICAgICAgICAgICAgICYmIHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpKzIsIHldfWApID09PSAtMVxuICAgICAgICAgICAgICAgICYmIHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpKzMsIHldfWApID09PSAtMVxuICAgICAgICAgICAgICAgICYmIHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpKzQsIHldfWApID09PSAtMVxuICAgICAgICAgICAgICAgICYmIHggPCA2KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAoNSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4LCB5XX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3grMSwgeV19YCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4KzIsIHldfWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzTG9jYXRpb24ucHVzaChgJHtbeCszLCB5XX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3grNCwgeV19YCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2VTaGlwNCh4LCB5LCBpc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICAvL2ZvciB2ZXJ0aWNhbCBcbiAgICAgICAgICAgIGlmIChpc1ZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCB5XX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAmJiB0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgKCt5KSsxXX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAmJiB0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgKCt5KSsyXX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAmJiB0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgKCt5KSszXX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAmJiB5IDwgNykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKDQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3gsIHldfWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzTG9jYXRpb24ucHVzaChgJHtbeCwgeSsxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3gsIHkrMl19YCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4LCB5KzNdfWApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2ZvciBob3Jpem9udGFsXG4gICAgICAgICAgICBlbHNlIGlmIChpc1ZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgeV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7WygreCkrMSwgeV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7WygreCkrMiwgeV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7WygreCkrMywgeV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgJiYgeCA8IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcCg0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4LCB5XX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3grMSwgeV19YCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4KzIsIHldfWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzTG9jYXRpb24ucHVzaChgJHtbeCszLCB5XX1gKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwbGFjZVNoaXAzKHgsIHksIGlzVmVydGljYWwpIHtcbiAgICAgICAgICAgIC8vZm9yIHZlcnRpY2FsIFxuICAgICAgICAgICAgaWYgKGlzVmVydGljYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsIHldfWApID09PSAtMVxuICAgICAgICAgICAgICAgICYmIHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCAoK3kpKzFdfWApID09PSAtMVxuICAgICAgICAgICAgICAgICYmIHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCAoK3kpKzJdfWApID09PSAtMVxuICAgICAgICAgICAgICAgICYmIHkgPCA4KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAoMyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3gsIHldfWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzTG9jYXRpb24ucHVzaChgJHtbeCwgeSsxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3gsIHkrMl19YCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vZm9yIGhvcml6b250YWxcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzVmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCB5XX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAmJiB0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbKCt4KSsxLCB5XX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAmJiB0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbKCt4KSsyLCB5XX1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAmJiB4IDwgOCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKDMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4LCB5XX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3grMSwgeV19YCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4KzIsIHldfWApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlU2hpcDIoeCwgeSwgaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgLy9mb3IgdmVydGljYWwgXG4gICAgICAgICAgICBpZiAoaXNWZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwgeV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsICgreSkrMV19YCkgPT09IC0xXG4gICAgICAgICAgICAgICAgJiYgeSA8IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcCgyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3gsIHldfWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzTG9jYXRpb24ucHVzaChgJHtbeCwgeSsxXX1gKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9mb3IgaG9yaXpvbnRhbFxuICAgICAgICAgICAgZWxzZSBpZiAoaXNWZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsIHldfWApID09PSAtMVxuICAgICAgICAgICAgICAgICYmIHRoaXMuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpKzEsIHldfWApID09PSAtMVxuICAgICAgICAgICAgICAgICYmIHggPCA5KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAoMik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNMb2NhdGlvbi5wdXNoKGAke1t4LCB5XX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xvY2F0aW9uLnB1c2goYCR7W3grMSwgeV19YCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsIHldfWApID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2VkQXR0YWNrcy5wdXNoKGAke1t4LCB5XX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvbkluZGV4ID0gdGhpcy5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsIHldfWApXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc1tsb2NhdGlvbkluZGV4XS5oaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxsU2hpcHNTdW5rKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc1tpXS5pc1N1bmsoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwc1tpXS5zdW5rID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xufSIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkRmFjdG9yeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIobmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHBsYXllckdhbWVCb2FyZDogbnVsbCxcbiAgICAgICAgcGFzdEF0dGFja3M6IFtdLFxuICAgICAgICBjcmVhdGVHYW1lQm9hcmQoKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckdhbWVCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlyZVNob3QoeCAsIHksIGdhbWVib2FyZCkge1xuICAgICAgICAgICAgdGhpcy5wYXN0QXR0YWNrcy5wdXNoKGAke1t4LCB5XX1gKTtcbiAgICAgICAgICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgseSk7XG4gICAgICAgIH1cbiAgICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgICAgIGhpdE51bTogMCxcbiAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgIGhpdCgpIHtcbiAgICAgICAgICAgIHRoaXMuaGl0TnVtICs9IDE7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaGl0TnVtID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZmFjdG9yaWVzL2dhbWVib2FyZEZhY3RvcnlcIjtcbmltcG9ydCBDb21wdXRlclBsYXllciBmcm9tIFwiLi9mYWN0b3JpZXMvY29tcHV0ZXJQbGF5ZXJGYWN0b3J5XCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL2ZhY3Rvcmllcy9wbGF5ZXJGYWN0b3J5XCI7XG5pbXBvcnQgXCIuL0NTUy9zdHlsZS5jc3NcIlxuXG5sZXQgcGxheWVyID0gbmV3IFBsYXllcignSHVnbycpO1xubGV0IGNvbXB1dGVyUGxheWVyID0gbmV3IENvbXB1dGVyUGxheWVyKCk7XG5sZXQgaXNWZXJ0aWNhbCA9IHRydWU7XG5sZXQgY29tcHV0ZXJUdXJuID0gZmFsc2U7XG5sZXQgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXG5wbGF5ZXIuY3JlYXRlR2FtZUJvYXJkKCk7XG5jb21wdXRlclBsYXllci5jcmVhdGVHYW1lQm9hcmQoKTtcblxuZnVuY3Rpb24gc2V0dXBHYW1lKCkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgcGxheWVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXJDZWxsVmVydGljYWwnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiByb3RhdGVWaXN1YWwocGxheWVyQ2VsbCkpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgaW5zdHJ1Y3Rpb24uY2xhc3NMaXN0LmFkZCgnaW5zdHJ1Y3Rpb24nKTtcbiAgICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9ICdQbGFjZSBZb3VyIFNoaXBzJztcbiAgICBib2R5LmFwcGVuZENoaWxkKGluc3RydWN0aW9uKTtcbiAgICBwbGF5ZXJDZWxsLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjZWxsUGxhY2VTaGlwKGUudGFyZ2V0LCBidXR0b24sIHBsYXllckNlbGwpKX0pO1xuICAgIGNvbXB1dGVyUGxhY2VTaGlwNSgpO1xuICAgIGNvbXB1dGVyUGxhY2VTaGlwNCgpO1xuICAgIGNvbXB1dGVyUGxhY2VTaGlwMygpO1xuICAgIGNvbXB1dGVyUGxhY2VTaGlwMygpO1xuICAgIGNvbXB1dGVyUGxhY2VTaGlwMigpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlclBsYWNlU2hpcDUoKSB7XG4gICAgbGV0IHggPSBudWxsO1xuICAgIGxldCB5ID0gbnVsbDtcbiAgICBsZXQgeiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gICAgaWYgKHogPT09IDApIHtcbiAgICAgICAgd2hpbGUgKChjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gseV19YCkgIT09IC0xXG4gICAgICAgIHx8IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwoK3kpKzFdfWApICE9PSAtMVxuICAgICAgICB8fCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsKCt5KSsyXX1gKSAhPT0gLTEgXG4gICAgICAgIHx8IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwoK3kpKzNdfWApICE9PSAtMSBcbiAgICAgICAgfHwgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCgreSkrNF19YCkgIT09IC0xIFxuICAgICAgICApIHx8IHggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwNSh4LHksIHRydWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh6ID09PSAxKSB7XG4gICAgICAgIHdoaWxlICgoY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LHldfWApICE9PSAtMVxuICAgICAgICB8fCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7WygreCkrMSx5XX1gKSAhPT0gLTFcbiAgICAgICAgfHwgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpKzIseV19YCkgIT09IC0xIFxuICAgICAgICB8fCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7WygreCkrMyx5XX1gKSAhPT0gLTEgXG4gICAgICAgIHx8IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbKCt4KSs0LHldfWApICE9PSAtMSBcbiAgICAgICAgKSB8fCB4ID09PSBudWxsKSB7XG4gICAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB9XG4gICAgICAgIGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcDUoeCx5LCBmYWxzZSk7XG4gICAgfSBcbn1cblxuZnVuY3Rpb24gY29tcHV0ZXJQbGFjZVNoaXA0KCkge1xuICAgIGxldCB4ID0gbnVsbDtcbiAgICBsZXQgeSA9IG51bGw7XG4gICAgbGV0IHogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICAgIGlmICh6ID09PSAwKSB7XG4gICAgICAgIHdoaWxlICgoY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LHldfWApICE9PSAtMVxuICAgICAgICB8fCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsKCt5KSsxXX1gKSAhPT0gLTFcbiAgICAgICAgfHwgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCgreSkrMl19YCkgIT09IC0xIFxuICAgICAgICB8fCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsKCt5KSszXX1gKSAhPT0gLTEgXG4gICAgICAgICkgfHwgeCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KTtcbiAgICAgICAgfVxuICAgICAgICBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXA0KHgseSwgdHJ1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHogPT09IDEpIHtcbiAgICAgICAgd2hpbGUgKChjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gseV19YCkgIT09IC0xXG4gICAgICAgIHx8IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbKCt4KSsxLHldfWApICE9PSAtMVxuICAgICAgICB8fCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7WygreCkrMix5XX1gKSAhPT0gLTEgXG4gICAgICAgIHx8IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbKCt4KSszLHldfWApICE9PSAtMSBcbiAgICAgICAgKSB8fCB4ID09PSBudWxsKSB7XG4gICAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNyk7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB9XG4gICAgICAgIGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcDQoeCx5LCBmYWxzZSk7XG4gICAgfSBcbn1cblxuZnVuY3Rpb24gY29tcHV0ZXJQbGFjZVNoaXAzKCkge1xuICAgIGxldCB4ID0gbnVsbDtcbiAgICBsZXQgeSA9IG51bGw7XG4gICAgbGV0IHogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICAgIGlmICh6ID09PSAwKSB7XG4gICAgICAgIHdoaWxlICgoY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LHldfWApICE9PSAtMVxuICAgICAgICB8fCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsKCt5KSsxXX1gKSAhPT0gLTFcbiAgICAgICAgfHwgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCgreSkrMl19YCkgIT09IC0xIFxuICAgICAgICApIHx8IHggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwMyh4LHksIHRydWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh6ID09PSAxKSB7XG4gICAgICAgIHdoaWxlICgoY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LHldfWApICE9PSAtMVxuICAgICAgICB8fCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7WygreCkrMSx5XX1gKSAhPT0gLTFcbiAgICAgICAgfHwgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1soK3gpKzIseV19YCkgIT09IC0xIFxuICAgICAgICApIHx8IHggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwMyh4LHksIGZhbHNlKTtcbiAgICB9IFxufVxuXG5mdW5jdGlvbiBjb21wdXRlclBsYWNlU2hpcDIoKSB7XG4gICAgbGV0IHggPSBudWxsO1xuICAgIGxldCB5ID0gbnVsbDtcbiAgICBsZXQgeiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gICAgaWYgKHogPT09IDApIHtcbiAgICAgICAgd2hpbGUgKChjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gseV19YCkgIT09IC0xXG4gICAgICAgIHx8IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihgJHtbeCwoK3kpKzFdfWApICE9PSAtMVxuICAgICAgICApIHx8IHggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwMih4LHksIHRydWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh6ID09PSAxKSB7XG4gICAgICAgIHdoaWxlICgoY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LHldfWApICE9PSAtMVxuICAgICAgICB8fCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7WygreCkrMSx5XX1gKSAhPT0gLTFcbiAgICAgICAgKSB8fCB4ID09PSBudWxsKSB7XG4gICAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB9XG4gICAgICAgIGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcDIoeCx5LCBmYWxzZSk7XG4gICAgfSBcbn1cblxuZnVuY3Rpb24gY2VsbFBsYWNlU2hpcChlbGVtZW50LCBidXR0b24sIHBsYXllckNlbGwpIHtcbiAgICBsZXQgeCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpO1xuICAgIGxldCB5ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIik7XG4gICAgbGV0IHNoaXBBbW91bnQgPSBwbGF5ZXIucGxheWVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24ubGVuZ3RoO1xuICAgIGlmIChzaGlwQW1vdW50ID09PSAwKSB7XG4gICAgICAgIHBsYXllci5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwNSgoK3gpLCgreSksIGlzVmVydGljYWwpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzaGlwQW1vdW50ID09PSA1KSB7XG4gICAgICAgIHBsYXllci5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwNCgoK3gpLCgreSksIGlzVmVydGljYWwpO1xuICAgIH0gXG4gICAgZWxzZSBpZiAoc2hpcEFtb3VudCA9PT0gOSkge1xuICAgICAgICBwbGF5ZXIucGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcDMoKCt4KSwoK3kpLCBpc1ZlcnRpY2FsKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2hpcEFtb3VudCA9PT0gMTIpIHtcbiAgICAgICAgcGxheWVyLnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAzKCgreCksKCt5KSwgaXNWZXJ0aWNhbCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNoaXBBbW91bnQgPT09IDE1KSB7XG4gICAgICAgIHBsYXllci5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwMigoK3gpLCgreSksIGlzVmVydGljYWwpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGVQbGF5ZXJCb2FyZCgpO1xuICAgIHNoaXBBbW91bnQgPSBwbGF5ZXIucGxheWVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24ubGVuZ3RoO1xuXG4gICAgaWYgKHNoaXBBbW91bnQgPT09IDUpIHtcbiAgICAgICAgcGxheWVyQ2VsbC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb3VyJyk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGVsc2UgaWYgKHNoaXBBbW91bnQgPT09IDkpIHtcbiAgICAgICAgcGxheWVyQ2VsbC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGhyZWVcIik7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmb3VyXCIpO1xuICAgICAgICB9KVxuICAgIH0gXG4gICAgZWxzZSBpZiAoc2hpcEFtb3VudCA9PT0gMTUpIHtcbiAgICAgICAgcGxheWVyQ2VsbC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidHdvXCIpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGhyZWVcIik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHNoaXBBbW91bnQgPT09IDE3KSB7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgY2xlYXJCb2FyZHMoKTtcbiAgICAgICAgY3JlYXRlQ29tcHV0ZXJCb2FyZCgpO1xuICAgICAgICBjcmVhdGVQbGF5ZXJCb2FyZCgpO1xuICAgICAgICB1cGRhdGVQbGF5ZXJCb2FyZCgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyQ2VsbFZlcnRpY2FsJykuZm9yRWFjaChlbGVtZW50ID0+IHtlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwbGF5ZXJDZWxsVmVydGljYWxcIil9KTtcbiAgICAgICAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPSBgUGxheWVyJ3MgVHVybmA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByb3RhdGVWaXN1YWwocGxheWVyQ2VsbCkge1xuICAgIGlmIChpc1ZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgICAgIHBsYXllckNlbGwuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBsYXllckNlbGxIb3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicGxheWVyQ2VsbFZlcnRpY2FsXCIpO1xuICAgICAgICB9KVxuICAgICAgICBpc1ZlcnRpY2FsID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzVmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgIHBsYXllckNlbGwuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBsYXllckNlbGxWZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBsYXllckNlbGxIb3Jpem9udGFsXCIpO1xuICAgICAgICB9KVxuICAgICAgICBpc1ZlcnRpY2FsID0gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllckJvYXJkKCkge1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJCb2FyZCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJDZWxsVmVydGljYWxcIik7XG4gICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgaik7XG4gICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgaSk7XG4gICAgICAgICAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVyQm9hcmQoKSB7XG4gICAgbGV0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXJCb2FyZCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBqKTtcbiAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBpKTtcbiAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb21wdXRlclR1cm4gPT09IGZhbHNlICYmICEoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrRXZlbnQoZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBDb21wdXRlckJvYXJkKCkge1xuICAgIGxldCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyQm9hcmQnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgaik7XG4gICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgaSk7XG4gICAgICAgICAgY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gYXR0YWNrRXZlbnQoZWxlbWVudCkge1xuICAgIGxldCB4ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIik7XG4gICAgbGV0IHkgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEteVwiKTtcbiAgICBsZXQgcGxheWVySGl0ID0gZmFsc2U7XG4gICAgbGV0IGNvbXB1dGVyTWlzcyA9IGZhbHNlO1xuICAgIFxuICAgIHBsYXllci5maXJlU2hvdCh4LCB5LCBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZCk7XG4gICAgaWYgKGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihwbGF5ZXIucGFzdEF0dGFja3NbcGxheWVyLnBhc3RBdHRhY2tzLmxlbmd0aCAtIDFdKSAhPT0gLTEpIHtcbiAgICAgICAgLy90cmlnZ2VycyBpZiB0aGUgZmlyZWQgc2hvdCBoaXRcbiAgICAgICAgcGxheWVySGl0ID0gdHJ1ZTtcbiAgICB9XG4gICAgLy91cGRhdGUgdGhlIGNvbXB1dGVycyBib2FyZCB2aXN1YWxseVxuICAgIHVwZGF0ZUJvYXJkKGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLCB4LCB5LCBlbGVtZW50KVxuICAgIGlmIChjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAvL2VuZCB0aGUgZ2FtZSBhbmQgc2F5IHBsYXllciB3b25cbiAgICAgICAgZW5kR2FtZShwbGF5ZXIubmFtZSk7XG4gICAgfVxuICAgIGlmIChwbGF5ZXJIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbXB1dGVyVHVybiA9IHRydWU7XG4gICAgICAgIGluc3RydWN0aW9uLnRleHRDb250ZW50ID0gYENvbXB1dGVyJ3MgVHVybmA7XG4gICAgICAgIHdoaWxlIChjb21wdXRlck1pc3MgPT09IGZhbHNlKSB7ICAgIFxuICAgICAgICAgICAgYXdhaXQgZGVsYXkoMjAwMCk7XG4gICAgICAgICAgICBjb21wdXRlclBsYXllci5maXJlU2hvdChwbGF5ZXIucGxheWVyR2FtZUJvYXJkKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIucGxheWVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb24uaW5kZXhPZihjb21wdXRlclBsYXllci5wYXN0QXR0YWNrc1tjb21wdXRlclBsYXllci5wYXN0QXR0YWNrcy5sZW5ndGggLSAxXSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy90cmlnZ2VycyBpZiB0aGUgZmlyZWQgc2hvdCBoaXRcbiAgICAgICAgICAgICAgICBjb21wdXRlclBsYXllci5sYXN0QXR0YWNrSGl0ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyTWlzcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3VwZGF0ZSB0aGUgcGxheWVyIGJvYXJkIHZpc3VhbGx5XG4gICAgICAgICAgICB1cGRhdGVQbGF5ZXJCb2FyZCgpO1xuICAgICAgICAgICAgaWYgKHBsYXllci5wbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAvL2VuZCB0aGUgZ2FtZSBhbmQgc2F5IGNvbXB1dGVyIHdvblxuICAgICAgICAgICAgICAgIGVuZEdhbWUoY29tcHV0ZXJQbGF5ZXIubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZXJUdXJuID0gZmFsc2U7XG4gICAgICAgIGluc3RydWN0aW9uLnRleHRDb250ZW50ID0gYFBsYXllcidzIFR1cm5gO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUocGxheWVyKSB7XG4gICAgbGV0IHdpbm5pbmdNZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uaW5nTWVzc2FnZScpXG4gICAgbGV0IHdpbm5pbmdNZXNzYWdlVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmluZ01lc3NhZ2VUZXh0Jyk7XG4gICAgbGV0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydEJ1dHRvbicpXG4gICAgd2lubmluZ01lc3NhZ2VUZXh0RWxlbWVudC5pbm5lclRleHQgPSBgJHtwbGF5ZXJ9IHdpbiFgO1xuICAgIHdpbm5pbmdNZXNzYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgcmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZ2FtZUxvb3AoKTtcbiAgICAgICAgd2lubmluZ01lc3NhZ2VFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQm9hcmQoYm9hcmQsIHgsIHksIGNlbGwpIHtcbiAgICBsZXQgYm9hcmRTaGlwc0xvY2F0aW9uID0gYm9hcmQuc2hpcHNMb2NhdGlvbjtcbiAgICBsZXQgYm9hcmRTaGlwcyA9IGJvYXJkLnNoaXBzO1xuXG4gICAgaWYgKGJvYXJkU2hpcHNMb2NhdGlvbi5pbmRleE9mKGAke1t4LCB5XX1gKSAhPT0gLTEpIHtcbiAgICAgICAgLy9jYW4gaGl0IHRoYXQgc3F1YXJlXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYm9hcmRTaGlwc0xvY2F0aW9uLmluZGV4T2YoYCR7W3gsIHldfWApID09PSAtMSkge1xuICAgICAgICAvL2Nhbid0IGhpdCB0aGF0IHNxdWFyZVxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzW2ldLmlzU3VuaygpO1xuICAgICAgICBpZiAoY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNbaV0uc3VuayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBjb21wdXRlclBsYXllci5jb21wdXRlckdhbWVCb2FyZC5zaGlwc0xvY2F0aW9uW2ldO1xuICAgICAgICAgICAgLy9nZXQgeCBhbmQgeSBcbiAgICAgICAgICAgIGxldCBib3RoWFkgPSBlbGVtZW50LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIGxldCB4ID0gYm90aFhZWzBdO1xuICAgICAgICAgICAgbGV0IHkgPSBib3RoWFlbMV07XG4gICAgICAgICAgICAvL2dldCB0aGUgY2VsbCBhdCB4IGFuZCB5XG4gICAgICAgICAgICBsZXQgdGFyZ2V0Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlckJvYXJkIFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gKTtcbiAgICAgICAgICAgIC8vZ2l2ZSB0aGF0IGNlbGwgYSBjbGFzcyBvZiBzaGlwXG4gICAgICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwU3Vua1wiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUGxheWVyQm9hcmQoYm9hcmQgPSBwbGF5ZXIucGxheWVyR2FtZUJvYXJkKSB7XG4gICAgbGV0IGJvYXJkU2hpcHNMb2NhdGlvbiA9IGJvYXJkLnNoaXBzTG9jYXRpb247XG4gICAgLy9nbyB0aHJvdWdoIHBsYXllcnMgc2hpcHMgbG9jYXRpb24gYXJyYXlcbiAgICBib2FyZFNoaXBzTG9jYXRpb24uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy9nZXQgeCBhbmQgeSBcbiAgICAgICAgbGV0IGJvdGhYWSA9IGVsZW1lbnQuc3BsaXQoXCIsXCIpO1xuICAgICAgICBsZXQgeCA9IGJvdGhYWVswXTtcbiAgICAgICAgbGV0IHkgPSBib3RoWFlbMV07XG4gICAgICAgIC8vZ2V0IHRoZSBjZWxsIGF0IHggYW5kIHlcbiAgICAgICAgbGV0IHRhcmdldENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG4gICAgICAgIC8vZ2l2ZSB0aGF0IGNlbGwgYSBjbGFzcyBvZiBzaGlwXG4gICAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgfSk7XG4gICAgbGV0IGNvbXB1dGVyU2hvdHMgPSBjb21wdXRlclBsYXllci5wYXN0QXR0YWNrcztcbiAgICAvL2dvIHRocm91Z2ggcGxheWVycyBzaGlwcyBsb2NhdGlvbiBhcnJheVxuICAgIGNvbXB1dGVyU2hvdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy9nZXQgeCBhbmQgeSBcbiAgICAgICAgbGV0IGJvdGhYWSA9IGVsZW1lbnQuc3BsaXQoXCIsXCIpO1xuICAgICAgICBsZXQgeCA9IGJvdGhYWVswXTtcbiAgICAgICAgbGV0IHkgPSBib3RoWFlbMV07XG4gICAgICAgIC8vZ2V0IHRoZSBjZWxsIGF0IHggYW5kIHlcbiAgICAgICAgbGV0IHRhcmdldENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG4gICAgICAgIC8vZ2l2ZSB0aGF0IGNlbGwgYSBjbGFzcyBvZiBzaGlwXG4gICAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyU2hvdFwiKTtcbiAgICB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5wbGF5ZXJHYW1lQm9hcmQuc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGxheWVyLnBsYXllckdhbWVCb2FyZC5zaGlwc1tpXS5pc1N1bmsoKTtcbiAgICAgICAgaWYgKHBsYXllci5wbGF5ZXJHYW1lQm9hcmQuc2hpcHNbaV0uc3VuayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBwbGF5ZXIucGxheWVyR2FtZUJvYXJkLnNoaXBzTG9jYXRpb25baV07XG4gICAgICAgICAgICAvL2dldCB4IGFuZCB5IFxuICAgICAgICAgICAgbGV0IGJvdGhYWSA9IGVsZW1lbnQuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgbGV0IHggPSBib3RoWFlbMF07XG4gICAgICAgICAgICBsZXQgeSA9IGJvdGhYWVsxXTtcbiAgICAgICAgICAgIC8vZ2V0IHRoZSBjZWxsIGF0IHggYW5kIHlcbiAgICAgICAgICAgIGxldCB0YXJnZXRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICAgICAgICAgICAgLy9naXZlIHRoYXQgY2VsbCBhIGNsYXNzIG9mIHNoaXBcbiAgICAgICAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBTdW5rXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckJvYXJkcygpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckJvYXJkJyk7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyQm9hcmQnKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbicpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24nKS5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICAgIC8vd2lwZSBldmVyeXRoaW5nIGNsZWFuIHRvIHN0YXJ0XG4gICAgY2xlYXJCb2FyZHMoKTtcbiAgICAvLyByZW5kZXIgcGxheWVycyAmIGdhbWVib2FyZHNcbiAgICBwbGF5ZXIgPSBuZXcgUGxheWVyKCdZb3UnKTtcbiAgICBjb21wdXRlclBsYXllciA9IG5ldyBDb21wdXRlclBsYXllcigpO1xuICAgIHBsYXllci5jcmVhdGVHYW1lQm9hcmQoKTtcbiAgICBjb21wdXRlclBsYXllci5jcmVhdGVHYW1lQm9hcmQoKTtcblxuICAgIGNyZWF0ZVBsYXllckJvYXJkKCk7XG4gICAgY3JlYXRlVGVtcENvbXB1dGVyQm9hcmQoKTtcbiAgICBzZXR1cEdhbWUoKTtcbiAgICB1cGRhdGVQbGF5ZXJCb2FyZCgpO1xufVxuZ2FtZUxvb3AoKTtcblxuXG4vL2FkZCBzaGlwIHN1bmsgdmlzdWFsIGZvciBwbGF5ZXIgYm9hcmQgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9