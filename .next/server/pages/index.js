"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgArrowPagLeft = function SvgArrowPagLeft(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 14,
    height: 18,
    viewBox: "0 0 21 32"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#7D859C",
    d: "M18.662 2.69a3.765 3.765 0 0 0-5.324 0L2.69 13.338a3.765 3.765 0 0 0 0 5.324L13.338 29.31a3.765 3.765 0 0 0 5.324-5.324L10.676 16l7.986-7.986a3.765 3.765 0 0 0 0-5.324z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowPagLeft);

/***/ }),

/***/ 1218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgArrowPagRight = function SvgArrowPagRight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 14,
    height: 18,
    viewBox: "0 0 21 32"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#7D859C",
    d: "M2.671 2.69a3.765 3.765 0 0 1 5.324 0l10.648 10.648a3.765 3.765 0 0 1 0 5.324L7.995 29.31a3.765 3.765 0 0 1-5.324-5.324L10.657 16 2.671 8.014a3.765 3.765 0 0 1 0-5.324z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowPagRight);

/***/ }),

/***/ 7419:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ changeRatingApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function changeRatingApi({ action , id , title  }) {
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch("https://jobs-back.onrender.com", {
        action,
        id,
        rating: title
    });
    return data;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ addNewKeys)
/* harmony export */ });
function addNewKeys(result) {
    const addNewKeys = result.map((item)=>{
        return {
            ...item,
            save: item.saved === true ? true : false,
            rating: item.rating === "0" ? "0" : item.rating
        };
    });
    return addNewKeys;
}


/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4508);
/* harmony import */ var _API_changeSaveApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5333);
/* harmony import */ var _API_changeRatingApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7419);
/* harmony import */ var _General_getDateCreatePost__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(595);
/* harmony import */ var _General_addNewKeys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2158);
/* harmony import */ var _omponents_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6311);
/* harmony import */ var _omponents_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(501);
/* harmony import */ var _assets_images_Location_icon_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3697);
/* harmony import */ var _assets_images_Save_icon_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9007);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_state__WEBPACK_IMPORTED_MODULE_5__, _API_changeSaveApi__WEBPACK_IMPORTED_MODULE_6__, _API_changeRatingApi__WEBPACK_IMPORTED_MODULE_7__, _omponents_pagination__WEBPACK_IMPORTED_MODULE_8__]);
([_state__WEBPACK_IMPORTED_MODULE_5__, _API_changeSaveApi__WEBPACK_IMPORTED_MODULE_6__, _API_changeRatingApi__WEBPACK_IMPORTED_MODULE_7__, _omponents_pagination__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function Home({ status , data  }) {
    const [first, setFirst] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const [last, setLast] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(5);
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("idle");
    const allItems = (0,_state__WEBPACK_IMPORTED_MODULE_5__/* .useGlobalState */ .j1)("allItems");
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setState("loading");
        if (status === 200 && allItems[0].length === 0) {
            const itemsWithNewKeys = (0,_General_addNewKeys__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(data);
            const dataWithChangedDate = (0,_General_getDateCreatePost__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(itemsWithNewKeys);
            (0,_state__WEBPACK_IMPORTED_MODULE_5__/* .setGlobalState */ .bU)("allItems", dataWithChangedDate);
            setState("resolve");
            return;
        }
        if (status !== 200) {
            setState("rejected");
            return;
        }
        setState("resolve");
    }, [
        data,
        status,
        allItems
    ]);
    const addRating = async (event)=>{
        const { title  } = event.target;
        const { id  } = event.currentTarget;
        const changeRating = allItems[0].map((it)=>it._id === id ? {
                ...it,
                rating: title
            } : it);
        (0,_state__WEBPACK_IMPORTED_MODULE_5__/* .setGlobalState */ .bU)("allItems", changeRating);
        await (0,_API_changeRatingApi__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
            id,
            title,
            action: "rating"
        });
    };
    const changeSave = async (event)=>{
        const { id , dataset  } = event.currentTarget;
        const itemsWithSave = allItems[0].map((it)=>it._id === id ? {
                ...it,
                saved: !JSON.parse(dataset.saved)
            } : it);
        (0,_state__WEBPACK_IMPORTED_MODULE_5__/* .setGlobalState */ .bU)("allItems", itemsWithSave);
        await (0,_API_changeSaveApi__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
            action: "save",
            id,
            save: JSON.parse(dataset.saved)
        });
    };
    const getItemsForNewPage = (id)=>{
        const lastIndex = id * 5;
        const firstIndex = lastIndex - 5;
        if (id === data.length) {
            setFirst(firstIndex);
            setLast(lastIndex);
            return;
        }
        if (lastIndex > allItems.length) {
            setFirst(firstIndex);
            setLast(lastIndex);
            return;
        }
        setFirst(firstIndex);
        setLast(lastIndex);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [
            state === "loading" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_omponents_loader__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: "section",
                    children: [
                        state === "idle" && "waiting to fething",
                        state === "resolve" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "job-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "job-list",
                                    children: allItems[0].slice(first, last).map(({ _id , pictures , title , name , address , createdAt , saved , rating  })=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "job-list__item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "job-list__image-container",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        src: pictures[0],
                                                        alt: "img",
                                                        width: 85,
                                                        height: 85
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "job-list__info-container",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "star-rating-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    onClick: addRating,
                                                                    id: String(_id),
                                                                    className: "star-rating__wrap",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            className: "star-rating__input",
                                                                            type: "radio",
                                                                            name: "rating",
                                                                            value: "5",
                                                                            id: String(_id)
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            className: rating === "5" ? "star-rating__ico--active" : "star-rating__ico",
                                                                            htmlFor: String(_id),
                                                                            title: "5",
                                                                            id: String(_id)
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            className: "star-rating__input",
                                                                            type: "radio",
                                                                            name: "rating",
                                                                            value: "4",
                                                                            id: String(_id)
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            className: rating >= "4" ? "star-rating__ico--active" : "star-rating__ico",
                                                                            htmlFor: String(_id),
                                                                            title: "4",
                                                                            id: String(_id)
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            className: "star-rating__input",
                                                                            id: String(_id),
                                                                            type: "radio",
                                                                            name: "rating",
                                                                            value: "3"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            className: rating >= "3" ? "star-rating__ico--active" : "star-rating__ico",
                                                                            htmlFor: String(_id),
                                                                            title: "3",
                                                                            id: String(_id)
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            className: "star-rating__input",
                                                                            id: String(_id),
                                                                            type: "radio",
                                                                            name: "rating",
                                                                            value: "2"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            className: rating >= "2" ? "star-rating__ico--active" : "star-rating__ico",
                                                                            htmlFor: String(_id),
                                                                            title: "2"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            className: "star-rating__input",
                                                                            id: String(_id),
                                                                            type: "radio",
                                                                            name: "rating",
                                                                            value: "1"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            className: rating >= "1" ? "star-rating__ico--active" : "star-rating__ico",
                                                                            htmlFor: "star-rating-1",
                                                                            title: "1",
                                                                            id: String(_id)
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "job-list__save-container-sm",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: createdAt
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "job-list__title-container",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                    href: `/${_id}`,
                                                                    children: title
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: name
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: address
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: "job-list__location-container",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_images_Location_icon_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                                                width: 13,
                                                                                height: 18,
                                                                                alt: "location icon"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Vienna, Austria"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "star-rating",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        onClick: addRating,
                                                        id: String(_id),
                                                        className: "star-rating__wrap",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "star-rating__input",
                                                                type: "radio",
                                                                name: "rating",
                                                                value: "5",
                                                                id: String(_id)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: rating === "5" ? "star-rating__ico--active" : "star-rating__ico",
                                                                htmlFor: String(_id),
                                                                title: "5",
                                                                id: String(_id)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "star-rating__input",
                                                                type: "radio",
                                                                name: "rating",
                                                                value: "4",
                                                                id: String(_id)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: rating >= "4" ? "star-rating__ico--active" : "star-rating__ico",
                                                                htmlFor: String(_id),
                                                                title: "4",
                                                                id: String(_id)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "star-rating__input",
                                                                id: String(_id),
                                                                type: "radio",
                                                                name: "rating",
                                                                value: "3"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: rating >= "3" ? "star-rating__ico--active" : "star-rating__ico",
                                                                htmlFor: String(_id),
                                                                title: "3",
                                                                id: String(_id)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "star-rating__input",
                                                                id: String(_id),
                                                                type: "radio",
                                                                name: "rating",
                                                                value: "2"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: rating >= "2" ? "star-rating__ico--active" : "star-rating__ico",
                                                                htmlFor: String(_id),
                                                                title: "2"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "star-rating__input",
                                                                id: String(_id),
                                                                type: "radio",
                                                                name: "rating",
                                                                value: "1"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: rating >= "1" ? "star-rating__ico--active" : "star-rating__ico",
                                                                htmlFor: "star-rating-1",
                                                                title: "1",
                                                                id: String(_id)
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "job-list__save-container",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: changeSave,
                                                            id: _id,
                                                            "data-saved": saved,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_images_Save_icon_svg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                "data-saved": saved,
                                                                width: 16,
                                                                height: 20,
                                                                alt: "Save icon",
                                                                className: saved ? "job-list__save-icon--save" : "job-list__save-icon"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: createdAt
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, _id);
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_omponents_pagination__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    getItem: (id)=>getItemsForNewPage(id)
                                })
                            ]
                        })
                    ]
                })
            }),
            state === "rejected" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {
                statusCode: status
            })
        ]
    });
}
async function getServerSideProps() {
    const res = await fetch("https://jobs-back.onrender.com");
    const { data , status  } = await res.json();
    return {
        props: {
            status,
            data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6311:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2731);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pagination__WEBPACK_IMPORTED_MODULE_0__]);
_pagination__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_pagination__WEBPACK_IMPORTED_MODULE_0__/* .Pagination */ .t);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2731:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4508);
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1081);
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(notiflix__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_Arrow_pag_left_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5361);
/* harmony import */ var _assets_images_Arrow_pag_right_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1218);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_state__WEBPACK_IMPORTED_MODULE_2__]);
_state__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Pagination = ({ getItem  })=>{
    const [pageActive, setPageActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [allPageCount, setAllPageCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [pageCount, setPageCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const allItems = (0,_state__WEBPACK_IMPORTED_MODULE_2__/* .useGlobalState */ .j1)("allItems");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const arrForPageCount = [];
        if (allPageCount.length === 0) {
            const getPageCount = allItems[0].length / 5;
            for(let i = 1; i < getPageCount + 1; i += 1){
                arrForPageCount.push(i);
            }
            setAllPageCount(arrForPageCount);
            setPageCount(arrForPageCount.slice(0, 5));
        }
    }, [
        allItems,
        allPageCount.length
    ]);
    const setPage = (event)=>{
        const { ariaLabel , id  } = event.currentTarget;
        let count = null;
        switch(ariaLabel){
            case "increment":
                if (pageActive === allPageCount.length) {
                    notiflix__WEBPACK_IMPORTED_MODULE_3___default().Notify.info("This page is last");
                    return;
                }
                setPageActive((prevState)=>prevState + 1);
                getItem(+id + 1);
                if (pageActive + 1 > pageCount[pageCount.length - 1]) {
                    count = allPageCount.slice(+id, +id + 5);
                    setPageCount(count);
                    return;
                }
                break;
            case "decrement":
                if (pageActive === 1) {
                    return;
                }
                setPageActive((prevState)=>prevState - 1);
                getItem(+id - 1);
                if (pageActive - 1 < pageCount[0]) {
                    count = allPageCount.slice(+id - 6, +id - 1);
                    setPageCount(count);
                    return;
                }
                break;
            default:
                setPageActive(+id);
                getItem(+id);
                if (+id === allPageCount.length) {
                    count = allPageCount.slice(allPageCount[allPageCount.length - 6], allPageCount[allPageCount.length]);
                    setPageCount(count);
                }
                break;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pagination-container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: setPage,
                className: "pagination__arrow-left-button",
                "aria-label": "decrement",
                id: String(pageActive),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_images_Arrow_pag_left_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    alt: "arrow left",
                    width: "14",
                    height: "18",
                    id: String(pageActive)
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "pagination__number-list",
                children: [
                    pageCount.map((pageNumber, inx)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            onClick: setPage,
                            id: String(pageNumber),
                            className: pageActive === pageNumber ? "pagination__number-list__item--active" : "pagination__number-list__item ",
                            children: pageNumber
                        }, inx);
                    }),
                    !pageCount.includes(allPageCount[allPageCount.length - 3]) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: pageCount.includes(allPageCount[allPageCount.length - 3]) ? allItems[0].length - 1 : "..."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                id: String(allPageCount.length),
                                className: pageActive === allPageCount.length ? "pagination__number-list__item--active" : "pagination__number-list__item ",
                                onClick: setPage,
                                children: allPageCount.length
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: setPage,
                className: "pagination__arrow-right-button",
                id: String(pageActive),
                "aria-label": "increment",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_images_Arrow_pag_right_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    id: String(pageActive),
                    alt: "arrow right",
                    width: "14",
                    height: "18"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ 1081:
/***/ ((module) => {

module.exports = require("notiflix");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 8176:
/***/ ((module) => {

module.exports = require("react-spinners");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6148:
/***/ ((module) => {

module.exports = import("react-hooks-global-state");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,923], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();