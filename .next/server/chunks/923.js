"use strict";
exports.id = 923;
exports.ids = [923];
exports.modules = {

/***/ 3697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLocationIcon = function SvgLocationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 13,
    height: 18,
    viewBox: "0 0 23 32"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#878d9d",
    d: "M11.556 32S0 21.281 0 12.444 5.174 0 11.556 0c6.382 0 11.556 3.608 11.556 12.444S11.556 32 11.556 32zm0-14.222a6.222 6.222 0 1 0 0-12.445 6.222 6.222 0 0 0 0 12.445z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgLocationIcon);

/***/ }),

/***/ 9007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSaveIcon = function SvgSaveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 20,
    viewBox: "0 0 25 32"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "#70778b",
    strokeWidth: 2.783,
    d: "M1.391 5.565a3.71 3.71 0 0 1 3.71-3.71h14.841a3.71 3.71 0 0 1 3.71 3.71v22.252c0 1.622-1.935 2.463-3.121 1.356l-6.743-6.296a1.856 1.856 0 0 0-2.532 0l-6.743 6.296c-1.186 1.107-3.121.266-3.121-1.356V5.565z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSaveIcon);

/***/ }),

/***/ 5333:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChangeSaveApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function ChangeSaveApi({ action , id , save  }) {
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch("https://jobs-back.onrender.com", {
        action,
        id,
        save
    });
    return data;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getDateCreatePost)
/* harmony export */ });
function getDateCreatePost(data) {
    const timeForSort = [];
    const dateNow = new Date();
    const itemsChanged = data.map((element)=>{
        const formatingDate = new Date(element.createdAt).getTime().toString();
        timeForSort.push(formatingDate);
        return {
            ...element,
            createdAt: formatingDate
        };
    });
    const sortedItems = timeForSort.sort((a, b)=>+b - +a).map((el)=>{
        const findItemDate = itemsChanged.find((e)=>e.createdAt === el);
        const date = new Date(+findItemDate.createdAt).toJSON();
        return {
            ...findItemDate,
            createdAt: date
        };
    }).map((item)=>{
        const dateCreatePost = new Date(item.createdAt);
        const getYear = dateNow.getFullYear() - dateCreatePost.getFullYear();
        if (getYear > 0) {
            return {
                ...item,
                createdAt: `Posted ${getYear} years ago`
            };
        }
        const getMonth = dateNow.getMonth() - dateCreatePost.getMonth();
        if (getMonth > 0) {
            return {
                ...item,
                createdAt: `Posted ${getMonth} months ago`
            };
        }
        const getDays = dateNow.getDate() - dateCreatePost.getDate();
        if (getDays > 0) {
            return {
                ...item,
                createdAt: `Posted ${getDays} days ago`
            };
        }
        return {
            ...item,
            createdAt: "Posted today"
        };
    });
    return sortedItems;
}


/***/ }),

/***/ 4508:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bU": () => (/* binding */ setGlobalState),
/* harmony export */   "j1": () => (/* binding */ useGlobalState)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var react_hooks_global_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6148);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hooks_global_state__WEBPACK_IMPORTED_MODULE_0__]);
react_hooks_global_state__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const initialState = {
    allItems: []
};
const { setGlobalState , useGlobalState  } = (0,react_hooks_global_state__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(initialState);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ loader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-spinners"
var external_react_spinners_ = __webpack_require__(8176);
;// CONCATENATED MODULE: ./сomponents/loader/loader.tsx


const Loader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "loader__container",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_spinners_.HashLoader, {
            size: "88px",
            color: "#3a24c9"
        })
    });
};

;// CONCATENATED MODULE: ./сomponents/loader/index.ts

/* harmony default export */ const loader = (Loader);


/***/ })

};
;