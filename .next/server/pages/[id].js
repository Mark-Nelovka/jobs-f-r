"use strict";
(() => {
var exports = {};
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 9278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgArrowBackIcon = function SvgArrowBackIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 10,
    height: 18,
    viewBox: "0 0 18 32"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#384564",
    d: "M17.174.713c.83.914.796 2.362-.076 3.231L5.995 15.464a.77.77 0 0 0 0 1.067l11.109 11.52c.87.868.901 2.316.07 3.23-.831.93-2.21.96-3.078.076L.695 17.719c-.898-.914-.93-2.408-.071-3.352L14.096.637c.87-.884 2.249-.838 3.078.076z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowBackIcon);

/***/ }),

/***/ 8114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgShapeIcon = function SvgShapeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 18,
    height: 20,
    viewBox: "0 0 30 32"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#70778b",
    d: "m21.664 23.855-11.408-6.667c.08-.37.144-.739.144-1.124s-.064-.755-.144-1.125l11.28-6.602A4.77 4.77 0 0 0 24.8 9.638c2.656 0 4.8-2.153 4.8-4.819S27.456 0 24.8 0A4.803 4.803 0 0 0 20 4.819c0 .386.064.755.144 1.125l-11.28 6.602A4.77 4.77 0 0 0 5.6 11.245c-2.656 0-4.8 2.153-4.8 4.819s2.144 4.819 4.8 4.819a4.77 4.77 0 0 0 3.264-1.301l11.392 6.683c-.08.337-.128.691-.128 1.044 0 2.586 2.096 4.691 4.672 4.691s4.672-2.104 4.672-4.691c0-2.586-2.096-4.691-4.672-4.691-1.216 0-2.304.482-3.136 1.237z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgShapeIcon);

/***/ }),

/***/ 8653:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DetailedJob),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4508);
/* harmony import */ var _API_changeSaveApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5333);
/* harmony import */ var _General_getDateCreatePost__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(595);
/* harmony import */ var _omponents_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(231);
/* harmony import */ var _omponents_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(501);
/* harmony import */ var _assets_images_Save_icon_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9007);
/* harmony import */ var _assets_images_Shape_icon_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8114);
/* harmony import */ var _assets_images_Arrow_back_icon_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9278);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_state__WEBPACK_IMPORTED_MODULE_5__, _API_changeSaveApi__WEBPACK_IMPORTED_MODULE_6__]);
([_state__WEBPACK_IMPORTED_MODULE_5__, _API_changeSaveApi__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function DetailedJob({ data , status  }) {
    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("idle");
    const allJobs = (0,_state__WEBPACK_IMPORTED_MODULE_5__/* .useGlobalState */ .j1)("allItems");
    const location = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { id  } = location.query;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setState("loading");
        if (data) {
            const changeDate = (0,_General_getDateCreatePost__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(data);
            setItem(changeDate);
            setState("resolve");
            return;
        }
        setState("rejected");
    }, [
        data,
        status,
        id
    ]);
    const changeSave = async (event)=>{
        const { id , dataset  } = event.currentTarget;
        const itemWithChangeSave = item.map((it)=>{
            return {
                ...it,
                saved: !JSON.parse(dataset.saved)
            };
        });
        setItem(itemWithChangeSave);
        if (allJobs[0].length > 0) {
            const findIndx = allJobs[0].findIndex((it)=>it._id === id);
            allJobs[0].splice(findIndx, 1, itemWithChangeSave[0]);
            (0,_state__WEBPACK_IMPORTED_MODULE_5__/* .setGlobalState */ .bU)("allItems", allJobs[0]);
        }
        await (0,_API_changeSaveApi__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
            action: "save",
            id,
            save: JSON.parse(dataset.saved)
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            state === "loading" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_omponents_loader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            state === "resolve" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "detailed-section-container",
                    children: [
                        item.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "detailed__container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "header-container",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "detailed__header-title",
                                            children: "Job Details"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "detailed__save-container",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    onClick: changeSave,
                                                    "data-saved": item[0].saved,
                                                    id: item[0]._id,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_images_Save_icon_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                            "data-saved": item[0].saved,
                                                            className: item[0].saved ? "job-list__save-icon--save" : "job-list__save-icon",
                                                            width: "16",
                                                            height: "20",
                                                            alt: "save icon"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Save to my list"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_images_Shape_icon_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                            width: "18",
                                                            height: "20",
                                                            alt: "share icon"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Share"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "detailed__additional-separator"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "detailed__save-container-sm",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            onClick: changeSave,
                                            "data-saved": item[0].saved,
                                            id: item[0]._id,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_images_Save_icon_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                    "data-saved": item[0].saved,
                                                    className: item[0].saved ? "job-list__save-icon--save" : "job-list__save-icon",
                                                    width: "16",
                                                    height: "20",
                                                    alt: "save icon"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Save to my list"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_images_Shape_icon_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            width: "18",
                                            height: "20",
                                            alt: "share icon"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Share"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "apply-button-sm",
                                    children: "Apply now"
                                }),
                                item.length > 0 && item.map((job)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "detailed__text-title-container-sm",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "detailed__text-title",
                                                        children: job.title
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "detailed__sub-text-title-sm-container",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "detailed__time-posted-sm",
                                                                children: job.createdAt
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "detailed__salary-container-sm",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: "Brutto, per year"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: job.salary
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "detailed__text-title-container",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "detailed__text-title",
                                                        children: job.title
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "detailed__salary-container",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: job.salary
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "Brutto, per year"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "detailed__time-posted",
                                                children: job.createdAt
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "detailed__info",
                                                children: job.description
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "detailed__titles",
                                                children: "Responsopilities"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "detailed__info",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "The ideal candidate will have five or more years of experience in cardiac surgery. This candidate should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular assist device placement, and extra corporeal membrane oxygenation."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "detailed__titles",
                                                children: "Compensation & Benefits:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                children: job.benefits.map((ben)=>{
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "detailed__benefits-item",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "detailed__benefits-item--before"
                                                            }),
                                                            ben
                                                        ]
                                                    }, ben);
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "apply-button",
                                                children: "Apply now"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "detailed__additional-info-container",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "detailed__titles",
                                                        children: "Additional info"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "detailed__additional-separator"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "detailed__employment-title",
                                                        children: "Employment type"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "detailed__employment-list",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Full time"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Part time"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Temporary"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "detailed__benefits-title",
                                                        children: "Benefits"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "detailed__benefits-list",
                                                        children: job.benefits.map((ben)=>{
                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: ben
                                                            }, ben);
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "detailed__titles",
                                                children: "Attached images"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "detailed__additional-separator"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "detailed__attached-images-list",
                                                children: job.pictures.map((img, i)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            src: img,
                                                            width: "200",
                                                            height: "300",
                                                            alt: "Attached images"
                                                        })
                                                    }, i);
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "detailed__additional-info-container-sm",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "detailed__titles",
                                                        children: "Additional info"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "detailed__additional-separator"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "detailed__employment-title",
                                                        children: "Employment type"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "detailed__employment-list",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Full time"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Part time"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Temporary"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "detailed__benefits-title",
                                                        children: "Benefits"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "detailed__benefits-list",
                                                        children: job.benefits.map((ben)=>{
                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: ben
                                                            }, ben);
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }, job._id);
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    onClick: ()=>location.push("/"),
                                    className: "detailed__button-back-page",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_images_Arrow_back_icon_svg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            width: "10",
                                            height: "18"
                                        }),
                                        "RETURN TO JOB BOARD"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_omponents_map__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            data: item
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
async function getStaticProps({ params  }) {
    const { id  } = params;
    const res = await fetch(`https://jobs-back.onrender.com/${id}`);
    const { data , status  } = await res.json();
    return {
        props: {
            status,
            data
        }
    };
}
const getStaticPaths = async ()=>{
    const res = await fetch("https://jobs-back.onrender.com");
    const data = await res.json();
    const paths = data.data.map((item)=>({
            params: {
                id: item._id.toString()
            }
        }));
    return {
        paths,
        fallback: false
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ map)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./assets/images/Location-icon.svg
var Location_icon = __webpack_require__(3697);
;// CONCATENATED MODULE: ./сomponents/map/map.tsx


const Map = (data)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "map__container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "map__title",
                children: "Contacts"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "map__title-separator"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "map-list",
                children: data.data.map(({ _id , name , title , phone , email  })=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "map__title-container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: title
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "map__location-container",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Location_icon/* default */.Z, {
                                                width: 13,
                                                height: 18,
                                                alt: "location icon"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Vienna, Austria"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "map__links-container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: `tel:${phone}`,
                                            children: phone
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            target: "_blank",
                                            href: `mailto:${email}`,
                                            rel: "noreferrer",
                                            children: email
                                        })
                                    })
                                ]
                            })
                        ]
                    }, _id);
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                title: "Campus",
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6103.938294607758!2d-74.23079022389726!3d40.09840081761352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c178a380d7effd%3A0x151bbae2ec9fbe04!2zOTAwIExha2V3b29kIEF2ZSwgTGFrZXdvb2QsIE5KIDA4NzAxLCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1663759734805!5m2!1suk!2sua",
                width: "100%",
                height: "218",
                loading: "lazy",
                allowFullScreen: false,
                referrerPolicy: "no-referrer-when-downgrade"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./сomponents/map/index.ts

/* harmony default export */ const map = (Map);


/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

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

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,923], () => (__webpack_exec__(8653)));
module.exports = __webpack_exports__;

})();