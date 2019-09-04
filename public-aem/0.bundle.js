webpackJsonp([0],{

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
var _jsxFileName = "/Users/prituppalapati/kohls-pocs/src/shared/components/containers/Header/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: "openHamBurgerMenu",
        value: function openHamBurgerMenu() {
            document.getElementById("menuLeft").style.display = "block";
            document.getElementById("menuLeft").style.width = "calc(100vw - 33%)";
            document.body.style.overflow = "hidden";
        }
    }, {
        key: "headerItemList",
        value: function headerItemList() {
            var _this2 = this;

            var headerMenu = this.props.header;

            var navLinks = headerMenu.navigationLinks;
            var htmlData = [];
            navLinks.map(function (item, index) {
                var childHtmlData = '';
                if (item.childLinks.length > 0) {
                    childHtmlData = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "ul",
                        { className: "dropdown-menu dropdown-menu-large row", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 25
                            },
                            __self: _this2
                        },
                        _this2.generateChildHtml(item.childLinks)
                    );
                }
                htmlData.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "li",
                    { className: "dropdown-large", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        },
                        __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "a",
                        { href: "#", className: "link dropdown-toggle", "data-toggle": "dropdown", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 27
                            },
                            __self: _this2
                        },
                        item.title
                    ),
                    childHtmlData
                ));
            });
            return htmlData;
        }
    }, {
        key: "generateChildHtml",
        value: function generateChildHtml(childElements) {
            var _this3 = this;

            var childElemHtml = [];
            var count = 0;
            var finalHtml = [];
            childElements.map(function (item, index) {
                var childHtmlData = void 0;
                if (item.childLinks.length > 0) {
                    childHtmlData = _this3.generateSecondLevelChilds(item.childLinks);
                }
                childElemHtml.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "span",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        },
                        __self: _this3
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "li",
                        { className: "dropdown-header", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 42
                            },
                            __self: _this3
                        },
                        item.title
                    ),
                    childHtmlData
                ));
                count = count + 1;
                if (count % 2 == 0) {
                    finalHtml.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "li",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 45
                            },
                            __self: _this3
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "ul",
                            { className: "megamenu-dropdown", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 45
                                },
                                __self: _this3
                            },
                            childElemHtml
                        )
                    ));
                    childElemHtml = [];
                }
            });

            if (count % 2 != 0) {
                finalHtml.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "li",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "ul",
                        { className: "megamenu-dropdown", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 51
                            },
                            __self: this
                        },
                        childElemHtml
                    )
                ));
                childElemHtml = [];
            }
            return finalHtml;
        }
    }, {
        key: "generateSecondLevelChilds",
        value: function generateSecondLevelChilds(secondLevelChilds) {
            var _this4 = this;

            var childElem = [];
            secondLevelChilds.map(function (item, index) {
                childElem.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "li",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        },
                        __self: _this4
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "a",
                        { href: "#", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            },
                            __self: _this4
                        },
                        item.title
                    )
                ));
            });
            return childElem;
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "header-container hannford", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "container-fluid pl-0 pr-0", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "nav",
                        { className: "navbar navbar-default", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 70
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "container flex-desktop flex-desktop-space-between flex-mobile", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 71
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                { className: "navbar-header", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 72
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "button",
                                    { type: "button", className: "navbar-toggle link collapsed pull-left",
                                        onClick: this.openHamBurgerMenu, "aria-expanded": "false", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 73
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "span",
                                        { className: "sr-only", __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 75
                                            },
                                            __self: this
                                        },
                                        "Toggle navigation"
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "icon-bar", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 76
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "icon-bar", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 77
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "icon-bar", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 78
                                        },
                                        __self: this
                                    })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "logo-container", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 80
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "div",
                                        { className: "logo flex-mobile", __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 81
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "a",
                                            { href: "#", title: "", className: "link", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 82
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "../../../../assets/images/logo_kohl.png", className: "link", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 83
                                                },
                                                __self: this
                                            })
                                        )
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                { className: "collapse navbar-collapse flex-desktop flex-desktop-flex-start menuLeft", id: "menuLeft", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 88
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "ul",
                                    { className: "nav navbar-nav flex-desktop flex-desktop-align-center", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 89
                                        },
                                        __self: this
                                    },
                                    this.headerItemList()
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "cancel hidden-sm hidden-md hidden-lg", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 162
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "span",
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 163
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "../../../../assets/images/cancel.png", className: "link", __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 164
                                            },
                                            __self: this
                                        })
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "right-section flex-desktop flex-desktop-flex-end ", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 167
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "ul",
                                        {
                                            className: "nav navbar-nav list-images hidden-xs desktop-no-margin flex-desktop flex-desktop-align-center flex-desktop-flex-end ", __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 168
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "li",
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 170
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "span",
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 171
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "form",
                                                    { className: "show-search", __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 172
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "div",
                                                        {
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 173
                                                            },
                                                            __self: this
                                                        },
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control search-box",
                                                            placeholder: "Hey Alex, lets find something good", __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 174
                                                            },
                                                            __self: this
                                                        })
                                                    )
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "li",
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 181
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "span",
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 182
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "span",
                                                    { className: "coupon", __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 183
                                                        },
                                                        __self: this
                                                    },
                                                    " $ "
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "p",
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 184
                                                        },
                                                        __self: this
                                                    },
                                                    " Coupons "
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "li",
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 187
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "span",
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 188
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "../../../../assets/images/location.png",
                                                    className: "eProfile link hidden-xs", __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 189
                                                    },
                                                    __self: this
                                                }),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "p",
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 191
                                                        },
                                                        __self: this
                                                    },
                                                    " Account "
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "li",
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 194
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "span",
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 195
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "../../../../assets/images/shop.png", __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 196
                                                    },
                                                    __self: this
                                                }),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "span",
                                                    { className: "badge badge-color", __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 197
                                                        },
                                                        __self: this
                                                    },
                                                    "5"
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "p",
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 199
                                                    },
                                                    __self: this
                                                },
                                                " $87.99 "
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        header: state.body.body.header
    };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(Header));

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=0.bundle.js.map