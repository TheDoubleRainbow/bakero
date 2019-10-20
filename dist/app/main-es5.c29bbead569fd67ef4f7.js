(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/answer-button/answer-button.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/answer-button/answer-button.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button [disabled]=\"disabled\" type=\"button\" class=\"button\">Answer</button>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/answer-map/answer-map.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/answer-map/answer-map.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<agm-map [latitude]=\"mapData.lat\" [longitude]=\"mapData.lng\" mapTypeId=\"satellite\" [zoom]=\"zoom\"\n  (mapClick)=\"setMarker($event.coords.lat, $event.coords.lng)\">\n  <agm-marker [latitude]=\"marker?.lat\" [longitude]=\"marker?.lng\">\n  </agm-marker>\n</agm-map>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/answer-marker-stats/answer-marker-stats.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/answer-marker-stats/answer-marker-stats.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"stats.display\" class=\"stats\">\n  <div class=\"stats__item\">\n    <span>Stats in selected point:</span>\n  </div>\n  <div class=\"stats__item\">\n    <span>Temperature:</span> <span class=\"stats__value\">{{stats.temp}}</span>\n  </div>\n  <div class=\"stats__item\">\n    <span>Pressure:</span> <span class=\"stats__value\">{{stats.pressure}}</span>\n  </div>\n  <div class=\"stats__item\">\n    <span>Humidity:</span> <span class=\"stats__value\">{{stats.humidity}}%</span>\n  </div>\n  <div class=\"stats__item\">\n    <span>Elevation:</span> <span class=\"stats__value\">{{stats.elevation}}m</span>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/answer-popup/answer-popup.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/answer-popup/answer-popup.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"popup-wrap\">\n  <div class=\"popup\">\n    <div class=\"map\">\n      <agm-map [latitude]=\"popupData.right.lat\" [longitude]=\"popupData.right.lng\" mapTypeId=\"hybrid\" [zoom]=\"4\">\n        <agm-marker [latitude]=\"popupData.right.lat\" [longitude]=\"popupData.right.lng\"></agm-marker>\n        <agm-marker [latitude]=\"popupData.user.lat\" [longitude]=\"popupData.user.lng\"></agm-marker>\n      </agm-map>\n    </div>\n    <div class=\"score\">\n      <span class=\"score-text\">Your score is</span> {{popupData.score}}\n    </div>\n    <div class=\"controls\">\n      <button (click)=\"nextLevel()\" class=\"next-round-btn\">\n        Next round\n      </button>\n    </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"game\">\n    <app-answer-popup *ngIf=\"showAnswerModal\" (onNextLevel)=\"onNextRound()\" [popupData]=\"{right: {lat: round.latitude*1, lng: round.longitude*1}, user: userPoint, score: score}\" ></app-answer-popup>\n    <app-header></app-header>\n    <div class=\"game-container\">\n        <div class=\"game__question\">\n            <div class=\"game__block block\">\n                <div class=\"block__title\">\n                    Surface photo\n                </div>\n                <div class=\"block__content\">\n                    <app-question-image [img]=\"'./../../assets/img/' + round.photo\"></app-question-image>\n                </div>\n            </div>\n            <div class=\"game__block block\">\n                <div class=\"block__title\">\n                    Satellite photo\n                </div>\n                <div class=\"block__content\">\n                    <app-question-map [mapData]=\"{lat: round.latitude*1, lng: round.longitude*1}\"></app-question-map>\n                </div>\n            </div>\n            <div class=\"game__block block\">\n                <div class=\"block__title\">\n                    Stats\n                </div>\n                <div class=\"block__content\">\n                    <app-question-stats [stats]=\"stats\"></app-question-stats>\n                </div>\n            </div>\n        </div>\n        <div class=\"game__answer\">\n            <app-answer-marker-stats [stats]=\"markerStats\"></app-answer-marker-stats>\n            <div class=\"game__block block\">\n                <div class=\"block__title\">\n                    Map to answer\n                </div>\n                <div class=\"block__content\">\n                    <app-answer-map (onMapClick)=\"onAnsverMapClick($event)\"></app-answer-map>\n                </div>\n            </div>\n            <app-answer-button (click)=\"answer()\" [disabled]=\"answerDisabled\"></app-answer-button>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n    <div class=\"header-container\">\n        <div class=\"header__logo-wrap\">\n            <img class=\"header__logo\" src=\"./../../assets/img/logo.svg\">\n        </div>\n        <div class=\"header__user-data\">\n            <div class=\"header__score-wrap\">\n                <span class=\"header__score-label\">Your score:</span> <span> 4502</span>\n            </div>\n            <div class=\"header__user\">\n                <span>{{user.name}}</span>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-image/question-image.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-image/question-image.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div [style.backgroundImage] = \"'url(' + img + ')'\" class=\"image\" ></div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-map/question-map.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-map/question-map.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<agm-map    [disableDoubleClickZoom]=\"false\" \n            [disableDefaultUI]=\"false\" \n            [mapDraggable]=\"false\" \n            [clickableIcons]=\"false\" \n            [latitude]=\"mapData.lat\" \n            [longitude]=\"mapData.lng\"\n            [streetViewControl]=\"false\"\n            [zoomControl]=\"false\"\n            mapTypeId=\"satellite\"\n            [zoom]=\"6\"\n>\n    <agm-marker [latitude]=\"mapData.lat\" [longitude]=\"mapData.lng\"></agm-marker>\n</agm-map>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-stats/question-stats.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-stats/question-stats.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"stats\">\n    <div class=\"stats__item\">\n        <span>Temperature:</span> <span class=\"stats__value\">{{stats.temp}}</span>\n    </div>\n    <div class=\"stats__item\">\n        <span>Pressure:</span> <span class=\"stats__value\">{{stats.pressure}}</span>\n    </div>\n    <div class=\"stats__item\">\n        <span>Humidity:</span> <span class=\"stats__value\">{{stats.humidity}}%</span>\n    </div>\n    <div class=\"stats__item\">\n        <span>Elevation:</span> <span class=\"stats__value\">{{stats.elevation}}m</span>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"start\">\n    <div class=\"start__login login\">\n        <div class=\"login__header\">\n            <img src=\"../../assets/img/logo.svg\" />\n        </div>\n        <div class=\"login__label\">\n            Sign in\n        </div>\n        <form [formGroup]=\"loginForm\" class=\"login__form\" (ngSubmit)=\"onLogin(loginForm)\">\n            <div class=\"login__field\">\n                <input class=\"login__input\" formControlName=\"name\" placeholder=\"Nickname\" type=\"text\" />\n            </div>\n            <div class=\"login__field\">\n                <button class=\"login__button\" type=\"submit\">Play</button>\n            </div>\n        </form>\n        <div class=\"login__tip\">\n            Try to find the place on the map using 3 kinds of clue\n        </div>\n    </div>\n</main>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/answer-button/answer-button.component.scss": 
        /*!************************************************************!*\
          !*** ./src/app/answer-button/answer-button.component.scss ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".button {\n  background: #F91010;\n  border: none;\n  color: white;\n  padding: 8px;\n  font-size: 18px;\n  border-radius: 5px;\n  width: 100%;\n  cursor: pointer;\n}\n\n.button:disabled {\n  background: #373737;\n  color: #555555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bGFkL1Byb2plY3RzL1dFQi9iYWtlcm8vc3JjL2FwcC9hbnN3ZXItYnV0dG9uL2Fuc3dlci1idXR0b24uY29tcG9uZW50LnNjc3MiLCJhbnN3ZXItYnV0dG9uL2Fuc3dlci1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJhbnN3ZXItYnV0dG9uL2Fuc3dlci1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjkxMDEwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzczNzM3O1xuICAgIGNvbG9yOiAjNTU1NTU1O1xufSIsIi5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRjkxMDEwO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICMzNzM3Mzc7XG4gIGNvbG9yOiAjNTU1NTU1O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/answer-button/answer-button.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/answer-button/answer-button.component.ts ***!
          \**********************************************************/
        /*! exports provided: AnswerButtonComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerButtonComponent", function () { return AnswerButtonComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AnswerButtonComponent = /** @class */ (function () {
                function AnswerButtonComponent() {
                    this.disabled = true;
                }
                AnswerButtonComponent.prototype.ngOnInit = function () {
                };
                return AnswerButtonComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AnswerButtonComponent.prototype, "disabled", void 0);
            AnswerButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-answer-button',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./answer-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/answer-button/answer-button.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./answer-button.component.scss */ "./src/app/answer-button/answer-button.component.scss")).default]
                })
            ], AnswerButtonComponent);
            /***/ 
        }),
        /***/ "./src/app/answer-map/answer-map.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/answer-map/answer-map.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 650px;\n  width: 780px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bGFkL1Byb2plY3RzL1dFQi9iYWtlcm8vc3JjL2FwcC9hbnN3ZXItbWFwL2Fuc3dlci1tYXAuY29tcG9uZW50LnNjc3MiLCJhbnN3ZXItbWFwL2Fuc3dlci1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsWUFBQTtBQ0NEIiwiZmlsZSI6ImFuc3dlci1tYXAvYW5zd2VyLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuIGhlaWdodDogNjUwcHg7XG4gd2lkdGg6IDc4MHB4O1xufSIsImFnbS1tYXAge1xuICBoZWlnaHQ6IDY1MHB4O1xuICB3aWR0aDogNzgwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/answer-map/answer-map.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/answer-map/answer-map.component.ts ***!
          \****************************************************/
        /*! exports provided: AnswerMapComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerMapComponent", function () { return AnswerMapComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _open_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../open-weather.service */ "./src/app/open-weather.service.ts");
            var AnswerMapComponent = /** @class */ (function () {
                function AnswerMapComponent(dataService) {
                    this.dataService = dataService;
                    this.mapData = {
                        title: 'Answer map',
                        lat: 50,
                        lng: 50
                    };
                    this.onMapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.marker = null;
                    this.zoom = 3;
                }
                AnswerMapComponent.prototype.setMarker = function (lat, lng) {
                    this.marker = { lat: lat, lng: lng };
                    this.onMapClick.emit({ lat: lat, lng: lng });
                };
                AnswerMapComponent.prototype.initMap = function () {
                };
                AnswerMapComponent.prototype.ngOnInit = function () {
                };
                return AnswerMapComponent;
            }());
            AnswerMapComponent.ctorParameters = function () { return [
                { type: _open_weather_service__WEBPACK_IMPORTED_MODULE_2__["OpenWeatherService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AnswerMapComponent.prototype, "mapData", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], AnswerMapComponent.prototype, "onMapClick", void 0);
            AnswerMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-answer-map',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./answer-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/answer-map/answer-map.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./answer-map.component.scss */ "./src/app/answer-map/answer-map.component.scss")).default]
                })
            ], AnswerMapComponent);
            /***/ 
        }),
        /***/ "./src/app/answer-marker-stats/answer-marker-stats.component.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/answer-marker-stats/answer-marker-stats.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".stats {\n  position: absolute;\n  width: 250px;\n  top: 28px;\n  left: 530px;\n  background: #373737;\n  border-radius: 5px;\n  z-index: 20;\n  padding: 0 15px 15px 15px;\n}\n.stats__item {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.stats__value {\n  width: 30%;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bGFkL1Byb2plY3RzL1dFQi9iYWtlcm8vc3JjL2FwcC9hbnN3ZXItbWFya2VyLXN0YXRzL2Fuc3dlci1tYXJrZXItc3RhdHMuY29tcG9uZW50LnNjc3MiLCJhbnN3ZXItbWFya2VyLXN0YXRzL2Fuc3dlci1tYXJrZXItc3RhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNDSjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNFUjtBRENJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDQ1IiLCJmaWxlIjoiYW5zd2VyLW1hcmtlci1zdGF0cy9hbnN3ZXItbWFya2VyLXN0YXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHRvcDogMjhweDtcbiAgICBsZWZ0OiA1MzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzczNzM3O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB6LWluZGV4OiAyMDtcbiAgICBwYWRkaW5nOiAwIDE1cHggMTVweCAxNXB4O1xuICAgICZfX2l0ZW0ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgJl9fdmFsdWUge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbn0iLCIuc3RhdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNTBweDtcbiAgdG9wOiAyOHB4O1xuICBsZWZ0OiA1MzBweDtcbiAgYmFja2dyb3VuZDogIzM3MzczNztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB6LWluZGV4OiAyMDtcbiAgcGFkZGluZzogMCAxNXB4IDE1cHggMTVweDtcbn1cbi5zdGF0c19faXRlbSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zdGF0c19fdmFsdWUge1xuICB3aWR0aDogMzAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/answer-marker-stats/answer-marker-stats.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/answer-marker-stats/answer-marker-stats.component.ts ***!
          \**********************************************************************/
        /*! exports provided: AnswerMarkerStatsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerMarkerStatsComponent", function () { return AnswerMarkerStatsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AnswerMarkerStatsComponent = /** @class */ (function () {
                function AnswerMarkerStatsComponent() {
                }
                AnswerMarkerStatsComponent.prototype.ngOnInit = function () {
                };
                return AnswerMarkerStatsComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AnswerMarkerStatsComponent.prototype, "stats", void 0);
            AnswerMarkerStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-answer-marker-stats',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./answer-marker-stats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/answer-marker-stats/answer-marker-stats.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./answer-marker-stats.component.scss */ "./src/app/answer-marker-stats/answer-marker-stats.component.scss")).default]
                })
            ], AnswerMarkerStatsComponent);
            /***/ 
        }),
        /***/ "./src/app/answer-popup/answer-popup.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/answer-popup/answer-popup.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".popup {\n  position: absolute;\n  top: calc(50% - 230px);\n  left: calc(50% - 400px);\n  width: 800px;\n  background: #1F1F1F;\n  border-radius: 5px;\n  color: white;\n  overflow: hidden;\n  box-shadow: 0px 0px 50px #333;\n}\n\n.score {\n  margin: 20px 0;\n  text-align: center;\n  font-size: 20px;\n}\n\n.score-text {\n  color: #BFBFBF;\n}\n\n.controls {\n  text-align: center;\n}\n\n.next-round-btn {\n  background-color: #F91010;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  padding: 10px 80px;\n  margin: 10px auto 30px auto;\n}\n\n.popup-wrap {\n  position: absolute;\n  z-index: 20;\n  height: 100vh;\n  width: 100%;\n  background: rgba(100, 100, 100, 0.8);\n}\n\nagm-map {\n  width: 100%;\n  height: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bGFkL1Byb2plY3RzL1dFQi9iYWtlcm8vc3JjL2FwcC9hbnN3ZXItcG9wdXAvYW5zd2VyLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwiYW5zd2VyLXBvcHVwL2Fuc3dlci1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6ImFuc3dlci1wb3B1cC9hbnN3ZXItcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wdXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMjMwcHgpO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNDAwcHgpO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMUYxRjFGO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggIzMzMztcbn1cblxuLnNjb3JlIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2NvcmUtdGV4dCB7XG4gICAgY29sb3I6ICNCRkJGQkY7XG59XG5cbi5jb250cm9scyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV4dC1yb3VuZC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOTEwMTA7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweCA4MHB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDMwcHggYXV0bztcbn1cblxuLnBvcHVwLXdyYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC44KTtcbn1cblxuYWdtLW1hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNTBweDtcbn0iLCIucG9wdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAyMzBweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNDAwcHgpO1xuICB3aWR0aDogODAwcHg7XG4gIGJhY2tncm91bmQ6ICMxRjFGMUY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggIzMzMztcbn1cblxuLnNjb3JlIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2NvcmUtdGV4dCB7XG4gIGNvbG9yOiAjQkZCRkJGO1xufVxuXG4uY29udHJvbHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXh0LXJvdW5kLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOTEwMTA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDgwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvIDMwcHggYXV0bztcbn1cblxuLnBvcHVwLXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDIwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjgpO1xufVxuXG5hZ20tbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzUwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/answer-popup/answer-popup.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/answer-popup/answer-popup.component.ts ***!
          \********************************************************/
        /*! exports provided: AnswerPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerPopupComponent", function () { return AnswerPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AnswerPopupComponent = /** @class */ (function () {
                function AnswerPopupComponent() {
                    this.popupData = {
                        right: {
                            lat: 40,
                            lng: 40,
                        },
                        user: {
                            lat: 30,
                            lng: 30,
                        },
                        score: 0
                    };
                    this.onNextLevel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                AnswerPopupComponent.prototype.nextLevel = function () {
                    this.onNextLevel.emit();
                };
                AnswerPopupComponent.prototype.ngOnInit = function () {
                };
                return AnswerPopupComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AnswerPopupComponent.prototype, "popupData", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], AnswerPopupComponent.prototype, "onNextLevel", void 0);
            AnswerPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-answer-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./answer-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/answer-popup/answer-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./answer-popup.component.scss */ "./src/app/answer-popup/answer-popup.component.scss")).default]
                })
            ], AnswerPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
            /* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
            var routes = [
                {
                    path: '',
                    redirectTo: '/start',
                    pathMatch: 'full'
                },
                {
                    path: 'start',
                    component: _start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"]
                },
                {
                    path: 'game',
                    component: _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'app';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
            /* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
            /* harmony import */ var _answer_map_answer_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./answer-map/answer-map.component */ "./src/app/answer-map/answer-map.component.ts");
            /* harmony import */ var _question_map_question_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./question-map/question-map.component */ "./src/app/question-map/question-map.component.ts");
            /* harmony import */ var _question_image_question_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./question-image/question-image.component */ "./src/app/question-image/question-image.component.ts");
            /* harmony import */ var _question_stats_question_stats_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./question-stats/question-stats.component */ "./src/app/question-stats/question-stats.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _answer_button_answer_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./answer-button/answer-button.component */ "./src/app/answer-button/answer-button.component.ts");
            /* harmony import */ var _answer_marker_stats_answer_marker_stats_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./answer-marker-stats/answer-marker-stats.component */ "./src/app/answer-marker-stats/answer-marker-stats.component.ts");
            /* harmony import */ var _answer_popup_answer_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./answer-popup/answer-popup.component */ "./src/app/answer-popup/answer-popup.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _start_start_component__WEBPACK_IMPORTED_MODULE_6__["StartComponent"],
                        _game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"],
                        _answer_map_answer_map_component__WEBPACK_IMPORTED_MODULE_8__["AnswerMapComponent"],
                        _question_map_question_map_component__WEBPACK_IMPORTED_MODULE_9__["QuestionMapComponent"],
                        _question_image_question_image_component__WEBPACK_IMPORTED_MODULE_10__["QuestionImageComponent"],
                        _question_stats_question_stats_component__WEBPACK_IMPORTED_MODULE_11__["QuestionStatsComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                        _answer_button_answer_button_component__WEBPACK_IMPORTED_MODULE_15__["AnswerButtonComponent"],
                        _answer_marker_stats_answer_marker_stats_component__WEBPACK_IMPORTED_MODULE_16__["AnswerMarkerStatsComponent"],
                        _answer_popup_answer_popup_component__WEBPACK_IMPORTED_MODULE_17__["AnswerPopupComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                            apiKey: 'AIzaSyBe1z7-kcsUos92LHb3Qfq_km1WVLFrdtE',
                            libraries: ['geometry'],
                        }),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                    ],
                    providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/game.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/game.service.ts ***!
          \*********************************/
        /*! exports provided: GameService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function () { return GameService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _assets_places_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/places.js */ "./src/assets/places.js");
            var GameService = /** @class */ (function () {
                function GameService(router) {
                    this.router = router;
                    this.user = {
                        name: 'Username',
                    };
                    this.roundNum = 3;
                    this.rounds = [];
                    this.round = 0;
                    this.gameStarted = false;
                }
                GameService.prototype.getUser = function () {
                    console.log(_assets_places_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
                    return this.user;
                };
                GameService.prototype.setUserName = function (name) {
                    this.user.name = name;
                };
                GameService.prototype.makeRounds = function () {
                    this.rounds = [];
                    var roundArr = _assets_places_js__WEBPACK_IMPORTED_MODULE_3__["default"];
                    for (var i = 0; i < this.roundNum; i++) {
                        var rand = Math.random() * (roundArr.length);
                        var id = Math.floor(rand);
                        this.rounds.push(roundArr[id]);
                        roundArr.splice(i, 1);
                    }
                };
                GameService.prototype.getCurrenctRound = function () {
                    return this.rounds[this.round];
                };
                GameService.prototype.nextRound = function () {
                    this.round++;
                };
                GameService.prototype.startGame = function () {
                    this.router.navigate(['./', 'game']);
                    this.makeRounds();
                    this.gameStarted = true;
                };
                return GameService;
            }());
            GameService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], GameService);
            /***/ 
        }),
        /***/ "./src/app/game/game.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/game/game.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".game {\n  color: white;\n  background-color: #1F1F1F;\n  min-height: 100vh;\n}\n.game__answer {\n  position: relative;\n}\n.game-container {\n  max-width: 1170px;\n  margin: auto;\n  padding: 40px 0;\n  display: flex;\n  justify-content: space-between;\n}\n.block__content {\n  min-width: 350px;\n  background-color: #373737;\n  border-radius: 5px;\n  margin: 10px 0 15px 0;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bGFkL1Byb2plY3RzL1dFQi9iYWtlcm8vc3JjL2FwcC9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiLCJnYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtBQ0NSO0FER0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDQUo7QURJSTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNEUiIsImZpbGUiOiJnYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjFGMUY7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgICAmX19hbnN3ZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxufVxuXG4uZ2FtZS1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTE3MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ibG9jayB7XG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIG1pbi13aWR0aDogMzUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzM3Mzc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTVweCAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbn0iLCIuZ2FtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGMUYxRjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4uZ2FtZV9fYW5zd2VyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZ2FtZS1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDExNzBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiA0MHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJsb2NrX19jb250ZW50IHtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzczNztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEwcHggMCAxNXB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/game/game.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/game/game.component.ts ***!
          \****************************************/
        /*! exports provided: GameComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function () { return GameComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _open_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../open-weather.service */ "./src/app/open-weather.service.ts");
            /* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
            /* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
            var GameComponent = /** @class */ (function () {
                function GameComponent(dataService, gameService, mapsAPILoader) {
                    this.dataService = dataService;
                    this.gameService = gameService;
                    this.mapsAPILoader = mapsAPILoader;
                    this.stats = {
                    // temp: 23,
                    // pressure: 10.21,
                    // humidity: 20,
                    // elevation: 1200,
                    };
                    this.markerStats = {};
                    this.answerDisabled = true;
                    this.showAnswerModal = false;
                }
                GameComponent.prototype.onAnsverMapClick = function (point) {
                    var _this = this;
                    this.userPoint = point;
                    this.answerDisabled = false;
                    this.dataService.getDataByGeopoint(point.lng, point.lat).subscribe(function (data) {
                        _this.markerStats = {
                            display: true,
                            temp: data.main.temp,
                            pressure: data.main.pressure,
                            humidity: data.main.humidity,
                            elevation: data.elevation.toFixed(1),
                        };
                        _this.markerSelected();
                    });
                };
                GameComponent.prototype.markerSelected = function () {
                    this.answerDisabled = false;
                };
                GameComponent.prototype.getStats = function (lat, lng) {
                    var _this = this;
                    this.dataService.getDataByGeopoint(lng, lat).subscribe(function (data) {
                        _this.stats = {
                            temp: data.main.temp,
                            pressure: data.main.pressure,
                            humidity: data.main.humidity,
                            elevation: data.elevation.toFixed(1),
                        };
                    });
                };
                GameComponent.prototype.answer = function () {
                    var _this = this;
                    this.showAnswerModal = true;
                    this.mapsAPILoader.load().then(function () {
                        console.log(Number(_this.round.latitude), Number(_this.round.longitude));
                        console.log(_this.userPoint.lat, _this.userPoint.lng);
                        var rightPoint = new google.maps.LatLng(Number(_this.round.latitude), Number(_this.round.longitude));
                        var userPoint = new google.maps.LatLng(_this.userPoint.lat, _this.userPoint.lng);
                        _this.distance = google.maps.geometry.spherical.computeDistanceBetween(rightPoint, userPoint);
                        _this.score = ((_this.distance <= 5000000 ? 5000000 - _this.distance : 0) / 1000).toFixed(0);
                        console.log(_this.distance);
                    });
                };
                GameComponent.prototype.onNextRound = function () {
                    this.gameService.nextRound();
                    this.round = this.gameService.getCurrenctRound();
                    this.showAnswerModal = false;
                    this.userPoint = {};
                };
                GameComponent.prototype.ngOnInit = function () {
                    if (!this.gameService.gameStarted) {
                        this.gameService.startGame();
                    }
                    this.round = this.gameService.getCurrenctRound();
                    this.getStats(this.round.latitude, this.round.longitude);
                    console.log(this.round);
                };
                return GameComponent;
            }());
            GameComponent.ctorParameters = function () { return [
                { type: _open_weather_service__WEBPACK_IMPORTED_MODULE_2__["OpenWeatherService"] },
                { type: _game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
                { type: _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"] }
            ]; };
            GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-game',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.component.scss */ "./src/app/game/game.component.scss")).default]
                })
            ], GameComponent);
            /***/ 
        }),
        /***/ "./src/app/header/header.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/header/header.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".header {\n  background-color: #373737;\n  height: 56px;\n  width: 100%;\n  color: white;\n}\n.header__logo {\n  height: 40px;\n  margin-top: 8px;\n}\n.header__user-data {\n  padding-top: 17px;\n  display: flex;\n  justify-content: space-around;\n}\n.header__score-wrap {\n  margin: 0 50px;\n}\n.header__score-label {\n  color: #BFBFBF;\n}\n.header-container {\n  max-width: 1170px;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bGFkL1Byb2plY3RzL1dFQi9iYWtlcm8vc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDQ1I7QURFSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDQVI7QURHSTtFQUNJLGNBQUE7QUNEUjtBRElJO0VBQ0ksY0FBQTtBQ0ZSO0FETUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNISiIsImZpbGUiOiJoZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzczNztcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgJl9fbG9nbyB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cblxuICAgICZfX3VzZXItZGF0YSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxN3B4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG5cbiAgICAmX19zY29yZS13cmFwIHtcbiAgICAgICAgbWFyZ2luOiAwIDUwcHg7XG4gICAgfVxuXG4gICAgJl9fc2NvcmUtbGFiZWwge1xuICAgICAgICBjb2xvcjogI0JGQkZCRjtcbiAgICB9XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDExNzBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59IiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzM3Mzc7XG4gIGhlaWdodDogNTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oZWFkZXJfX2xvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5oZWFkZXJfX3VzZXItZGF0YSB7XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5oZWFkZXJfX3Njb3JlLXdyYXAge1xuICBtYXJnaW46IDAgNTBweDtcbn1cbi5oZWFkZXJfX3Njb3JlLWxhYmVsIHtcbiAgY29sb3I6ICNCRkJGQkY7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMTcwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/header/header.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/header/header.component.ts ***!
          \********************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(gameService) {
                    this.gameService = gameService;
                    this.user = {};
                }
                HeaderComponent.prototype.getUser = function () {
                    this.user = this.gameService.getUser();
                };
                HeaderComponent.prototype.ngOnInit = function () {
                    this.getUser();
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/open-weather.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/open-weather.service.ts ***!
          \*****************************************/
        /*! exports provided: OpenWeatherService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenWeatherService", function () { return OpenWeatherService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var OpenWeatherService = /** @class */ (function () {
                function OpenWeatherService(http) {
                    this.http = http;
                    this.appId = "3266f6cee43fd792d469b260301721c1";
                    this.googleKey = "AIzaSyBe1z7-kcsUos92LHb3Qfq_km1WVLFrdtE";
                }
                OpenWeatherService.prototype.getDataByGeopoint = function (lng, lat) {
                    var date = new Date();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(
                    // this.http.get(`http://api.openweathermap.org/pollution/v1/o3/${lat},${lng}/2019Z.json?appid=${this.appId}`),
                    this.http.get("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=" + this.appId), this.http.get("https://maps.googleapis.com/maps/api/elevation/json?locations=" + lat + "," + lng + "&key=" + this.googleKey)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                        // console.log(data);
                        return Object.assign({}, data[0], { elevation: data[1]['results'][0].elevation });
                    }));
                    // this.http.get("https://maps.googleapis.com/maps/api/elevation/json?locations=${lat},&key=${this.googleKey}");
                };
                return OpenWeatherService;
            }());
            OpenWeatherService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            OpenWeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], OpenWeatherService);
            /***/ 
        }),
        /***/ "./src/app/question-image/question-image.component.scss": 
        /*!**************************************************************!*\
          !*** ./src/app/question-image/question-image.component.scss ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".image {\n  width: 100%;\n  height: 250px;\n  background-size: cover;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bGFkL1Byb2plY3RzL1dFQi9iYWtlcm8vc3JjL2FwcC9xdWVzdGlvbi1pbWFnZS9xdWVzdGlvbi1pbWFnZS5jb21wb25lbnQuc2NzcyIsInF1ZXN0aW9uLWltYWdlL3F1ZXN0aW9uLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoicXVlc3Rpb24taW1hZ2UvcXVlc3Rpb24taW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59IiwiLmltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/question-image/question-image.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/question-image/question-image.component.ts ***!
          \************************************************************/
        /*! exports provided: QuestionImageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionImageComponent", function () { return QuestionImageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var QuestionImageComponent = /** @class */ (function () {
                function QuestionImageComponent() {
                }
                QuestionImageComponent.prototype.ngOnInit = function () {
                };
                return QuestionImageComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], QuestionImageComponent.prototype, "img", void 0);
            QuestionImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-question-image',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-image/question-image.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question-image.component.scss */ "./src/app/question-image/question-image.component.scss")).default]
                })
            ], QuestionImageComponent);
            /***/ 
        }),
        /***/ "./src/app/question-map/question-map.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/question-map/question-map.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bGFkL1Byb2plY3RzL1dFQi9iYWtlcm8vc3JjL2FwcC9xdWVzdGlvbi1tYXAvcXVlc3Rpb24tbWFwLmNvbXBvbmVudC5zY3NzIiwicXVlc3Rpb24tbWFwL3F1ZXN0aW9uLW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJxdWVzdGlvbi1tYXAvcXVlc3Rpb24tbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn0iLCJhZ20tbWFwIHtcbiAgaGVpZ2h0OiAyNTBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/question-map/question-map.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/question-map/question-map.component.ts ***!
          \********************************************************/
        /*! exports provided: QuestionMapComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMapComponent", function () { return QuestionMapComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var QuestionMapComponent = /** @class */ (function () {
                function QuestionMapComponent() {
                    this.mapData = {
                        lat: 51.678418,
                        lng: 7.809007
                    };
                }
                QuestionMapComponent.prototype.ngOnInit = function () {
                };
                return QuestionMapComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], QuestionMapComponent.prototype, "mapData", void 0);
            QuestionMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-question-map',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-map/question-map.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question-map.component.scss */ "./src/app/question-map/question-map.component.scss")).default]
                })
            ], QuestionMapComponent);
            /***/ 
        }),
        /***/ "./src/app/question-stats/question-stats.component.scss": 
        /*!**************************************************************!*\
          !*** ./src/app/question-stats/question-stats.component.scss ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".stats {\n  padding: 0 15px 15px 15px;\n}\n.stats__item {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.stats__value {\n  width: 30%;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bGFkL1Byb2plY3RzL1dFQi9iYWtlcm8vc3JjL2FwcC9xdWVzdGlvbi1zdGF0cy9xdWVzdGlvbi1zdGF0cy5jb21wb25lbnQuc2NzcyIsInF1ZXN0aW9uLXN0YXRzL3F1ZXN0aW9uLXN0YXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNFUjtBRENJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDQ1IiLCJmaWxlIjoicXVlc3Rpb24tc3RhdHMvcXVlc3Rpb24tc3RhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHMge1xuICAgIHBhZGRpbmc6IDAgMTVweCAxNXB4IDE1cHg7XG4gICAgJl9faXRlbSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAmX192YWx1ZSB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufSIsIi5zdGF0cyB7XG4gIHBhZGRpbmc6IDAgMTVweCAxNXB4IDE1cHg7XG59XG4uc3RhdHNfX2l0ZW0ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc3RhdHNfX3ZhbHVlIHtcbiAgd2lkdGg6IDMwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/question-stats/question-stats.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/question-stats/question-stats.component.ts ***!
          \************************************************************/
        /*! exports provided: QuestionStatsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionStatsComponent", function () { return QuestionStatsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var QuestionStatsComponent = /** @class */ (function () {
                function QuestionStatsComponent() {
                }
                QuestionStatsComponent.prototype.ngOnInit = function () {
                };
                return QuestionStatsComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], QuestionStatsComponent.prototype, "stats", void 0);
            QuestionStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-question-stats',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question-stats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-stats/question-stats.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question-stats.component.scss */ "./src/app/question-stats/question-stats.component.scss")).default]
                })
            ], QuestionStatsComponent);
            /***/ 
        }),
        /***/ "./src/app/start/start.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/start/start.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".start {\n  background: url('bg.93438dfcb7848d21a1c8.png');\n  background-size: cover;\n  min-height: 100vh;\n}\n.start__login {\n  background-color: #373737;\n  width: 360px;\n  position: absolute;\n  top: calc(50% - 200px);\n  left: calc(50% - 180px);\n  padding: 40px 0;\n  border-radius: 10px;\n}\n.login__header {\n  text-align: center;\n  padding: 0 0 25px 0;\n}\n.login__label {\n  color: white;\n  text-align: center;\n  padding-bottom: 20px;\n  font-size: 24px;\n}\n.login__field {\n  text-align: center;\n}\n.login__input, .login__button {\n  width: 300px;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 5px;\n  font-size: 18px;\n}\n.login__input {\n  background-color: #ffffff;\n}\n.login__button {\n  margin-top: 20px;\n  background-color: #F91010;\n  color: white;\n  cursor: pointer;\n}\n.login__tip {\n  width: 220px;\n  margin: 26px auto 0 auto;\n  text-align: center;\n  font-size: 14px;\n  color: #BFBFBF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bGFkL1Byb2plY3RzL1dFQi9iYWtlcm8vc3JjL2FwcC9zdGFydC9zdGFydC5jb21wb25lbnQuc2NzcyIsInN0YXJ0L3N0YXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUVBLGVBQUE7RUFDQSxtQkFBQTtBQ0RSO0FETUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDSFI7QURNSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0pSO0FET0k7RUFDSSxrQkFBQTtBQ0xSO0FEUUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTlI7QURTSTtFQUNJLHlCQUFBO0FDUFI7QURVSTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1JSO0FEV0k7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDVlIiLCJmaWxlIjoic3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnQge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi9hc3NldHMvaW1nL2JnLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgICAmX19sb2dpbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzM3Mzc7XG4gICAgICAgIHdpZHRoOiAzNjBweDtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAyMDBweCk7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTgwcHgpO1xuXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG59XG5cbi5sb2dpbiB7XG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwIDAgMjVweCAwO1xuICAgIH1cblxuICAgICZfX2xhYmVsIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuXG4gICAgJl9fZmllbGQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9faW5wdXQsICZfX2J1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgICZfX2lucHV0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICB9XG5cbiAgICAmX19idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjkxMDEwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAmX190aXAge1xuICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgIG1hcmdpbjogMjZweCBhdXRvIDAgYXV0bztcblxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICNCRkJGQkY7XG4gICAgfVxufVxuIiwiLnN0YXJ0IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi8uLi8uLi9hc3NldHMvaW1nL2JnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4uc3RhcnRfX2xvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzczNztcbiAgd2lkdGg6IDM2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAyMDBweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTgwcHgpO1xuICBwYWRkaW5nOiA0MHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5sb2dpbl9faGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDAgMjVweCAwO1xufVxuLmxvZ2luX19sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmxvZ2luX19maWVsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbl9faW5wdXQsIC5sb2dpbl9fYnV0dG9uIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubG9naW5fX2lucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5sb2dpbl9fYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5MTAxMDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubG9naW5fX3RpcCB7XG4gIHdpZHRoOiAyMjBweDtcbiAgbWFyZ2luOiAyNnB4IGF1dG8gMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNCRkJGQkY7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/start/start.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/start/start.component.ts ***!
          \******************************************/
        /*! exports provided: StartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function () { return StartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var StartComponent = /** @class */ (function () {
                function StartComponent(gameService, formBuilder) {
                    this.gameService = gameService;
                    this.formBuilder = formBuilder;
                }
                StartComponent.prototype.onLogin = function (form) {
                    console.log(form);
                    if (form.value.name.length) {
                        this.gameService.setUserName(form.value.name);
                        this.gameService.startGame();
                    }
                };
                StartComponent.prototype.ngOnInit = function () {
                    this.loginForm = this.formBuilder.group({
                        name: ''
                    });
                };
                return StartComponent;
            }());
            StartComponent.ctorParameters = function () { return [
                { type: _game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
            ]; };
            StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-start',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./start.component.scss */ "./src/app/start/start.component.scss")).default]
                })
            ], StartComponent);
            /***/ 
        }),
        /***/ "./src/assets/places.js": 
        /*!******************************!*\
          !*** ./src/assets/places.js ***!
          \******************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ([
                {
                    "name": "Count Dracula’s Castle",
                    "latitude": "45.515835",
                    "longitude": "25.367540",
                    "photo": "places/Count_Dracula’s_Castle.jpg"
                },
                {
                    "name": "Grand Canyon National Park",
                    "latitude": "36.1069663",
                    "longitude": "-112.1129948",
                    "photo": "places/Grand_Canyon_National_Park.jpg"
                },
                {
                    "name": "Area 51",
                    "latitude": "37.233333",
                    "longitude": "-115.808333",
                    "photo": "places/Area_51.png"
                },
                {
                    "name": "Mount Fuji",
                    "latitude": "35.3606255",
                    "longitude": "138.7273634",
                    "photo": "places/Mount_Fuji.jpg"
                },
                {
                    "name": "Uluru",
                    "latitude": "-25.3444277",
                    "longitude": "131.0368822",
                    "photo": "places/Uluru.jpg"
                },
                {
                    "name": "Baikal",
                    "latitude": "53.2485767",
                    "longitude": "107.7642059",
                    "photo": "places/Baikal.png"
                },
                {
                    "name": "Sharm El Sheikh",
                    "latitude": "27.9744318",
                    "longitude": "34.3327827",
                    "photo": "places/Sharm_el_Sheikh.png"
                },
                {
                    "name": "Santorini",
                    "latitude": "36.4315281",
                    "longitude": "25.4244386",
                    "photo": "places/Santorini.png"
                },
                {
                    "name": "Silicon Valley",
                    "latitude": "37.4178009",
                    "longitude": "-122.0255814",
                    "photo": "places/Silicon_valley.png"
                },
                {
                    "name": "Amazon",
                    "latitude": "-2.2071722",
                    "longitude": "-56.1159355",
                    "photo": "places/Amazon.png"
                },
                {
                    "name": "Norway",
                    "latitude": "62.6849853",
                    "longitude": "8.5558236",
                    "photo": "places/Norway.png"
                },
                {
                    "name": "Akihabara",
                    "latitude": "35.700257",
                    "longitude": "139.7715225",
                    "photo": "places/Akihabara.jpg"
                },
                {
                    "name": "Mughal garden",
                    "latitude": "28.6150546",
                    "longitude": "77.1967104",
                    "photo": "places/Mughal_garden.jpg"
                },
                {
                    "name": "Donbas arena",
                    "latitude": "48.0206775",
                    "longitude": "37.8077645",
                    "photo": "places/Donbas_arena.jpg"
                },
                {
                    "name": "Colosseum",
                    "latitude": "41.890072",
                    "longitude": "12.4925342",
                    "photo": "places/Colosseum.jpg"
                },
                {
                    "name": "Kohala coast",
                    "latitude": "19.8297761",
                    "longitude": "-155.9903333",
                    "photo": "places/Kohala_coast.png"
                },
                {
                    "name": "Scotts hut",
                    "latitude": "-77.6361805",
                    "longitude": "166.4173336",
                    "photo": "places/Scotts_hut.png"
                },
                {
                    "name": "Mayan ruins",
                    "latitude": "20.6825265",
                    "longitude": "-88.5686323",
                    "photo": "places/Mayan_ruins.jpg"
                },
                {
                    "name": "Taj Mahal",
                    "latitude": "27.1751448",
                    "longitude": "78.0399482",
                    "photo": "places/Taj_Mahal.png"
                },
                {
                    "name": "Basilica of the Sacred Heart",
                    "latitude": "50.8670916",
                    "longitude": "4.3170831",
                    "photo": "places/Basilica_of_the_Sacred_Heart.jpg"
                },
                {
                    "name": "New Zeland",
                    "latitude": "44.002333",
                    "longitude": "170.480167",
                    "photo": "places/New_Zeland.png"
                }
            ]);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/vlad/Projects/WEB/bakero/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.c29bbead569fd67ef4f7.js.map
//# sourceMappingURL=main-es5.c29bbead569fd67ef4f7.js.map
//# sourceMappingURL=main-es5.c29bbead569fd67ef4f7.js.map