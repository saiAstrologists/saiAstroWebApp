function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chat/chat.component */
    "./src/app/chat/chat.component.ts");
    /* harmony import */


    var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./wallet/wallet.component */
    "./src/app/wallet/wallet.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    }, {
      path: 'chat',
      component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-pages-module */
        "pages-pages-module").then(__webpack_require__.bind(null,
        /*! ./pages/pages.module */
        "./src/app/pages/pages.module.ts")).then(function (m) {
          return m.PagesModule;
        });
      }
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | Dashboard-dashboard-module-module */
        "Dashboard-dashboard-module-module").then(__webpack_require__.bind(null,
        /*! ./Dashboard/dashboard-module.module */
        "./src/app/Dashboard/dashboard-module.module.ts")).then(function (m) {
          return m.DashboardModuleModule;
        });
      }
    }, {
      path: 'wallet',
      component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_3__["WalletComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.esm.js");
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/database */
    "./node_modules/firebase/database/dist/index.esm.js");
    /* harmony import */


    var _shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/service/commonService/common.service */
    "./src/app/shared/service/commonService/common.service.ts");
    /* harmony import */


    var _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/service/restApi/rest.service */
    "./src/app/shared/service/restApi/rest.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _observables_behaviourSubject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./observables/behaviourSubject.service */
    "./src/app/observables/behaviourSubject.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

    var _c0 = ["sidenav"];

    function AppComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_6_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r254);

          var ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r253.talkToAstro();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Talk to Astrologer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_7_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r256);

          var ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r255.chatToAstro();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Chat with Astrologer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_a_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_8_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r258);

          var ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r257.viewReport();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Get Reports");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_a_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_9_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r260);

          var ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r259.viewQA();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ask Question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_28_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r263);

          var ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r262.talkToAstro();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Talk to Astrologer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_28_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r263);

          var ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r264.chatToAstro();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Chat with Astrologer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_28_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r263);

          var ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r265.viewReport();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Get Reports");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_28_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r263);

          var ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r266.viewQA();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ask Question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Horoscope 2020");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_mat_icon_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "face");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r246);
      }
    }

    function AppComponent_h4_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r247.checkUser.name);
      }
    }

    function AppComponent_h4_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r248.checkUser.contactNo);
      }
    }

    function AppComponent_button_36_Template(rf, ctx) {
      if (rf & 1) {
        var _r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_36_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r268);

          var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r267.dashboard();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_button_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_37_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r269.home();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_button_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_42_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r272);

          var ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r271.openDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_58_Template(rf, ctx) {
      if (rf & 1) {
        var _r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_58_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r275);

          var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r274.chatToAstro();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "chat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_58_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r275);

          var ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r276.talkToAstro();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_58_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r275);

          var ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r277.viewReport();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "assignment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_58_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r275);

          var ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r278.viewQA();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(_commonService, _restService, authService, dialog, _route, _observableDataService) {
        _classCallCheck(this, AppComponent);

        this._commonService = _commonService;
        this._restService = _restService;
        this.authService = authService;
        this.dialog = dialog;
        this._route = _route;
        this._observableDataService = _observableDataService;
        this.title = 'saiAstroWorld';
        this.chatList = [];
        this.userList = [];
        this.isUserLogin = false;
        this.reason = '';
        this.messaging = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          typing: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        }); // this.eventListener();
        // if(sender && receiver){
        //   firebase.database().ref().child('Chats').child(convId).limitToLast(1).on('child_added', (snapShot) => {
        //     console.log(snapShot.val(), 'added');
        //     this.chatList.push(snapShot.val());
        //   })
        // }
        // child added for first time
        // firebase.database().ref().child('Chats').limitToLast(1).on('child_added', snapShot => {
        //   let sender = this.senderId;
        //   let receiver = this.receiverId;
        //   let convId ;
        //   if(sender >  receiver) {
        //     convId = receiver + '-' + sender;
        //   }else {
        //     convId = sender + '-' + receiver;
        //   }
        //   if(snapShot.key == convId){
        //     let value = Object.values(snapShot.val())[Object.values(snapShot.val()).length - 1];
        //     this.chatList.push(value);
        //   }
        // })
        // firebase.database().ref().child('Chats').limitToLast(1).on('child_changed', snapShot => {
        //   console.log(snapShot.val(), 'valkjkukjk');
        //   if(snapShot.key){
        //     let value = Object.values(snapShot.val())[Object.values(snapShot.val()).length - 1];
        //     this.chatList.push(value);
        //   }
        // })
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.checkUser = JSON.parse(sessionStorage.getItem('userData'));
          this.isAstrologerLoggedIn$ = this.authService.isAstrologerLoggedIn;
          this.isLoggedIn$ = this.authService.isLoggedIn;
          console.log("checkUser ++", this.checkUser);

          if (this.checkUser != null) {
            this.isUserLogin = true;
          } else {
            this.isUserLogin = false;
            this.home();
          }

          console.log("this.isUserLogin ++++ ", this.isUserLogin);
          this.isAstrologerLoggedIn$.subscribe(function (res) {
            if (res) {
              _this.AdminLoginHideFlag = true;
            } else {
              _this.AdminLoginHideFlag = false;
            }
          });
          this.getIPAddress();
        }
      }, {
        key: "dashboard",
        value: function dashboard() {
          this._route.navigate(['dashboard']);
        }
      }, {
        key: "home",
        value: function home() {
          this._route.navigate(['home']);
        }
      }, {
        key: "wallet",
        value: function wallet() {
          this._route.navigate(['wallet']);
        }
      }, {
        key: "getIPAddress",
        value: function getIPAddress() {
          var _this2 = this;

          this._commonService.getIPAddress().subscribe(function (res) {
            _this2.countryCode = res.countryCode;
            console.log("Res is ===>>> ", res);
            sessionStorage.setItem("CC", _this2.countryCode); // if(this.countryCode != null){
            //   console.log("Will send countrycode once get !")
            // }
          });
        }
      }, {
        key: "close",
        value: function close(reason) {
          this.reason = reason;
          this.sidenav.close();
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this3 = this;

          var dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], {
            width: '500px',
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);

            if (typeof result != undefined && result != null && result != '') {
              _this3.isUserLogin = true;
              _this3.checkUser = result.userData;
              sessionStorage.setItem('token', result.token);
              sessionStorage.setItem('userData', JSON.stringify(result.userData));

              var isAdminUser = _this3.authService.checkAccess(_this3.checkUser);

              console.log("isAdminUser ", isAdminUser);

              if (!result.profileUpdated && typeof result.profileUpdated != 'undefined') {
                _this3._route.navigate(['home/astroRegistration']);
              } else if (!isAdminUser) {
                _this3._route.navigate(['dashboard']);
              } else {
                console.log("else condition !!!!!");

                _this3.home();
              }
            }
          });
        }
      }, {
        key: "viewReport",
        value: function viewReport() {
          console.log("this.checkUser ", this.checkUser); // if(this.checkUser != null) {

          console.log("view report");

          this._observableDataService.checkUserOperation('Report');

          this._route.navigate(['home/astrologer']); // } else {
          // this._commonService.tostMessage("Please Login to ask report to Astrologers!")
          // }

        }
      }, {
        key: "viewQA",
        value: function viewQA() {
          // if(this.checkUser != null) {
          console.log("QA report");

          this._observableDataService.checkUserOperation('Q&A');

          this._route.navigate(['home/astrologer']); // } else {
          // this._commonService.tostMessage("Please Login to ask question to Astrologers!")
          // }

        }
      }, {
        key: "talkToAstro",
        value: function talkToAstro() {
          // if(this.checkUser != null) {
          console.log("talkToAstro");

          this._observableDataService.checkUserOperation('Call');

          this._route.navigate(['home/astrologer']); // } else {
          // this._commonService.tostMessage("Please Login to talk with Astrologers!")
          // }

        }
      }, {
        key: "chatToAstro",
        value: function chatToAstro() {
          // if(this.checkUser != null) {
          console.log("chatToAstro");

          this._observableDataService.checkUserOperation('Chat');

          this._route.navigate(['home/astrologer']); // } else {
          // this._commonService.tostMessage("Please Login to chat with Astrologers!")
          // }

        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.authService.logOut();
        } // firebase remove afterwards

      }, {
        key: "signupFirebase",
        value: function signupFirebase() {
          firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().createUserWithEmailAndPassword('amit.wohlig@gmail.com', 'Test@123').then(function (response) {
            if (response) {
              console.log(response, 'signup response');
              var userData = {
                id: response.user.uid,
                imageURL: '',
                status: '',
                username: 'Amit Verma'
              };
              console.log(response.user.uid, 'local id');
              firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref().child('Users').child(response.user.uid).set(userData);
            }
          });
        }
      }, {
        key: "signupWithOther",
        value: function signupWithOther() {
          firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().createUserWithEmailAndPassword('amitverma@gmail.com', 'Test@123').then(function (response) {
            if (response) {
              console.log(response, 'signup response');
              var userData = {
                id: response.user.uid,
                imageURL: '',
                status: '',
                username: 'Amit Verma'
              };
              console.log(response.user.uid, 'local id');
              firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref().child('Users').child(response.user.uid).set(userData);
            }
          });
        }
      }, {
        key: "loginFirebase",
        value: function loginFirebase() {
          var _this4 = this;

          firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithEmailAndPassword('amit.wohlig@gmail.com', 'Test@123').then(function (response) {
            console.log(response, 'login response');
            _this4.senderId = response.user.uid;
          });
        }
      }, {
        key: "loginOtherFirebase",
        value: function loginOtherFirebase() {
          var _this5 = this;

          firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithEmailAndPassword('amitverma@gmail.com', 'Test@123').then(function (response) {
            console.log(response, 'login response');
            _this5.senderId = response.user.uid;
          });
        } // sendMessage(){
        // }

      }, {
        key: "getUserList",
        value: function getUserList() {
          var _this6 = this;

          firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Users').on('value', function (snapshot) {
            var snapvalue = snapshot.val();

            if (snapvalue) {
              Object.values(snapvalue).forEach(function (list) {
                if (list) {
                  _this6.userList.push(list);
                }
              });
            }
          });
        }
      }, {
        key: "getAllMessage",
        value: function getAllMessage() {
          var _this7 = this;

          console.log(firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"]); // firebase.database().ref('Chats').orderByChild('sender').equalTo("mpksRVLonrQVNPWZZWJ0z2KsLWl2").on('value', (snapShot)=> {
          //   let snapVal = snapShot.val();
          //   if(snapVal){
          //       Object.values(snapVal).forEach(list => {
          //         if(list['receiver'] == 'W6qE30aqEWb6OzHcWGoxg52U0F53'){
          //           this.chatList.push(list);
          //         }
          //     });
          //   }
          // });

          var sender = this.senderId || 'W6qE30aqEWb6OzHcWGoxg52U0F53';
          var receiver = this.receiverId || 'mpksRVLonrQVNPWZZWJ0z2KsLWl2';
          var convId;

          if (sender > receiver) {
            convId = receiver + '-' + sender;
          } else {
            convId = sender + '-' + receiver;
          }

          firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Chats').child(convId).once('value', function (snapShot) {
            console.log(snapShot.val(), 'value');
            Object.values(snapShot.val()).forEach(function (list) {
              return _this7.chatList.push(list);
            });
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var sender = this.senderId || 'W6qE30aqEWb6OzHcWGoxg52U0F53';
          var receiver = this.receiverId || 'mpksRVLonrQVNPWZZWJ0z2KsLWl2';
          var convId;

          if (sender > receiver) {
            convId = receiver + '-' + sender;
          } else {
            convId = sender + '-' + receiver;
          }

          var reqObj = {
            sender: 'W6qE30aqEWb6OzHcWGoxg52U0F53',
            receiver: 'mpksRVLonrQVNPWZZWJ0z2KsLWl2',
            isseen: false,
            message: this.messaging.value.typing
          };
          var key = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref().child('Chats').push().key;
          firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref().child('Chats').child(convId).child(key).set(reqObj).then(function (sendVal) {
            console.log(sendVal, 'send value');
          }); // event listener
        }
      }, {
        key: "setReceiverId",
        value: function setReceiverId(list) {
          this.receiverId = list.id;
        }
      }, {
        key: "eventListener",
        value: function eventListener() {
          var _this8 = this;

          var sender = this.senderId;
          var receiver = this.receiverId;
          var convId;

          if (sender > receiver) {
            convId = receiver + '-' + sender;
          } else {
            convId = sender + '-' + receiver;
          }

          if (sender && receiver) {
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref().child('Chats').child(convId).orderByKey().limitToLast(1).on('child_added', function (snapShot) {
              console.log(snapShot.val(), 'added');

              _this8.chatList.push(snapShot.val());
            });
          }

          firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref().child('Chats').on('child_added', function (snapShot) {
            console.log(snapShot.val(), 'valkjkukjk');
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observables_behaviourSubject_service__WEBPACK_IMPORTED_MODULE_11__["ObservableDataService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        }
      },
      decls: 125,
      vars: 17,
      consts: [[1, "sidenav-container", 3, "backdropClick"], ["disableClose", "", 1, "drawer-container", 3, "fixedInViewport", "keydown.escape"], ["sidenav", ""], [1, "side-bar-logo"], ["src", "../assets/images/logo/PNG/font120px.png", 1, "mb-2"], ["id", "list-tab", "role", "tablist", 1, "list-group"], ["class", "list-group-item list-group-item-action active", "id", "astro-talk", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "astro-talk", 3, "click", 4, "ngIf"], ["class", "list-group-item list-group-item-action", "id", "astro-chat", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "astro-chat", 3, "click", 4, "ngIf"], ["class", "list-group-item list-group-item-action", "id", "astro-report", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "astro-report", 3, "click", 4, "ngIf"], ["class", "list-group-item list-group-item-action", "id", "astro-question", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "astro-question", 3, "click", 4, "ngIf"], ["id", "horoscope", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "horoscope", 1, "list-group-item", "list-group-item-action"], ["id", "kundli", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "kundli", 1, "list-group-item", "list-group-item-action"], ["id", "astro-mall", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "astro-mall", 1, "list-group-item", "list-group-item-action"], ["id", "blog", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "blog", 1, "list-group-item", "list-group-item-action"], [1, "toolbar-wrapper"], ["mat-button", "", 1, "menu-button", 3, "click"], ["aria-hidden", "false"], [1, "hm-logo"], ["href", "javascript:;"], ["src", "../assets/images/logo/PNG/font120px.png"], [1, "example-spacer"], ["class", "quick-link", 4, "ngIf"], ["class", "hm-user-icon", "mat-button", "", "mat-raised-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["backdropClass", "hm-user-menu-item"], ["menu", "matMenu"], [4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 1, "hm-wallet", "mt-3", 3, "click"], ["mat-raised-button", "", 1, "hm-cart", "mt-3"], [1, "header-social"], [1, "home", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["href", "https://www.facebook.com/Sai-Astro-World-103546981582184", "target", "_blank", 1, "facebook"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "https://twitter.com/saiastroworld", "target", "_blank", 1, "twitter"], [1, "fa", "fa-twitter"], ["href", "https://www.instagram.com/saiastroworld/", "target", "_blank", 1, "instagram"], [1, "fa", "fa-instagram"], ["href", "https://www.youtube.com/c/DrSaiSuvajitAstrologerKnowYourFuture/featured", "target", "_blank", 1, "youtube"], [1, "fa", "fa-youtube"], ["class", "fixed-plugin", 4, "ngIf"], [1, "footer-wrapper", "py-5"], [1, "footer-top"], [1, "container"], [1, "row"], [1, "col-md-3", "footer-about", "wow", "fadeInUp", "animated", 2, "visibility", "visible", "animation-name", "fadeInUp"], [1, "col-md-4", "footer-links", "wow", "fadeInUp", "animated", 2, "visibility", "visible", "animation-name", "fadeInUp"], [1, "col"], [1, "col-md-6"], ["href", "#top-content", 1, "scroll-link"], ["href", "#"], [1, "col-md-3", "footer-contact", "wow", "fadeInDown", "animated", 2, "visibility", "visible", "animation-name", "fadeInDown"], [1, "fa", "fa-envelope"], ["href", "mailto:Info@saiastroworld.com"], [1, "footer-social"], [1, "col-md-2", "wow", "fadeInDown", "animated", 2, "visibility", "visible", "animation-name", "fadeInDown"], [1, "google-play-store", "mb-3"], ["src", "../assets/images/social/google-app.png"], [1, "app-store"], ["src", "../assets/images/social/app-store.png"], ["id", "astro-talk", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "astro-talk", 1, "list-group-item", "list-group-item-action", "active", 3, "click"], ["id", "astro-chat", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "astro-chat", 1, "list-group-item", "list-group-item-action", 3, "click"], ["id", "astro-report", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "astro-report", 1, "list-group-item", "list-group-item-action", 3, "click"], ["id", "astro-question", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "astro-question", 1, "list-group-item", "list-group-item-action", 3, "click"], [1, "quick-link"], [1, "highlight-menu"], ["href", "javascript:;", 3, "click"], [1, "highlight-menu", "font-weight-bold"], ["mat-button", "", "mat-raised-button", "", 1, "hm-user-icon", 3, "matMenuTriggerFor"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fixed-plugin"], [1, "example-button-row"], ["matTooltip", "Chat", "matTooltipPosition", "left", "mat-mini-fab", "", "aria-label", "chat icon", 1, "chat", 3, "click"], ["matTooltip", "Call", "matTooltipPosition", "before", "mat-mini-fab", "", "aria-label", "call icon", 1, "call", 3, "click"], ["matTooltip", "Report", "matTooltipPosition", "before", "mat-mini-fab", "", "aria-label", "report icon", 1, "report", 3, "click"], ["matTooltip", "Ask Question", "matTooltipPosition", "before", "mat-mini-fab", "", "aria-label", "Q&A icon", 1, "qtsans", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-question"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function AppComponent_Template_mat_sidenav_container_backdropClick_0_listener() {
            return ctx.close("backdrop");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function AppComponent_Template_mat_sidenav_keydown_escape_1_listener() {
            return ctx.close("escape");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_a_6_Template, 2, 0, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_a_7_Template, 2, 0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_a_8_Template, 2, 0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_a_9_Template, 2, 0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Horoscope 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Kundli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "AstroMall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-toolbar", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279);

            var _r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r239.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "view_headline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AppComponent_div_28_Template, 17, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppComponent_mat_icon_30_Template, 2, 1, "mat-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-menu", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AppComponent_h4_33_Template, 2, 1, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AppComponent_h4_34_Template, 2, 1, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AppComponent_button_36_Template, 5, 0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppComponent_button_37_Template, 5, 0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_38_listener() {
            return ctx.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "power_settings_new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AppComponent_button_42_Template, 2, 0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_icon_click_43_listener() {
            return ctx.wallet();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "account_balance_wallet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_48_listener() {
            return ctx.home();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AppComponent_div_58_Template, 13, 0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "app-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "footer", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "About us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Sai's AstroWorld is the best astrology website for online Astrology predictions. Talk to Astrologer on call and get answers to all your worries by seeing the future life through Astrology Kundli Predictions from the best Astrologers from India. Get best future predictions related to Marriage, love life, Career or Health over call, chat, query or report. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Quick Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Horoscope");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Refund & Cancellation Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Disclaimer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Terms & Conditions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Pricing Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Info@saiastroworld.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Download our App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixedInViewport", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.AdminLoginHideFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.AdminLoginHideFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.AdminLoginHideFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.AdminLoginHideFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 13, ctx.isAstrologerLoggedIn$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.AdminLoginHideFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.AdminLoginHideFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 15, ctx.isAstrologerLoggedIn$));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["_MatMenu"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDivider"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuItem"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_19__["SpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuTrigger"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltip"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]],
      styles: [".sidenav-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: all 0.3s ease-out;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 0px 10px;\n  margin: 4px 0px;\n}\n\n.facebook-color[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: #fff;\n}\n\n.instagram-color[_ngcontent-%COMP%] {\n  background-color: purple;\n  color: #fff;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%] {\n  height: 95px;\n}\n\n.quick-link[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky;\n  \n  top: 0;\n  \n  z-index: 1000;\n  \n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   .mat-icon.hm-wallet[_ngcontent-%COMP%] {\n  margin: 0px 20px;\n  cursor: pointer;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   .mat-icon.hm-user-icon[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n  font-size: 35px;\n  height: auto;\n  cursor: pointer;\n  margin-top: 15px;\n}\n\n.header-social[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n}\n\n.header-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 13px;\n  font-size: 12px;\n  border: 1px solid #f9a825;\n  border-radius: 51%;\n  margin-right: 5px;\n  color: #fff;\n}\n\n.header-social[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 7px 10px;\n  border: 1px solid #000000;\n  border-radius: 6%;\n}\n\n.header-social[_ngcontent-%COMP%]   a.facebook[_ngcontent-%COMP%] {\n  background: #3b5998;\n}\n\n.header-social[_ngcontent-%COMP%]   a.instagram[_ngcontent-%COMP%] {\n  background: #db2f7b;\n}\n\n.header-social[_ngcontent-%COMP%]   a.twitter[_ngcontent-%COMP%] {\n  background: #007bb5;\n}\n\n.header-social[_ngcontent-%COMP%]   a.youtube[_ngcontent-%COMP%] {\n  background: red;\n}\n\n.header-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border: 1px solid #fff !important;\n}\n\n.hm-user-menu-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  margin-top: 20px;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   button.menu-button[_ngcontent-%COMP%] {\n  min-width: 36px;\n  left: -11px;\n  padding: 0px !important;\n  margin-top: 0px;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   span.highlight-menu[_ngcontent-%COMP%] {\n  border: 2px solid #f2bf2b;\n  border-radius: 44px;\n  padding: 10px;\n  margin-right: 10px;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   span.hm-logo[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fixed-plugin[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 115px;\n  right: 15px;\n  line-height: 48px;\n  width: 64px;\n  background: rgba(0, 0, 0, 0.08);\n  z-index: 1031;\n  border-radius: 8px 0 0 8px;\n  text-align: center;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .follow-text[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n}\n\n.side-bar-quick-link[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.side-bar-quick-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1rem 50px;\n}\n\n.mat-sidenav[_ngcontent-%COMP%] {\n  width: 230px;\n}\n\n.mat-sidenav[_ngcontent-%COMP%]   .side-bar-logo[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mat-sidenav[_ngcontent-%COMP%]   .side-bar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  padding-top: 10px;\n}\n\n.footer-wrapper[_ngcontent-%COMP%] {\n  background-color: #f9a825;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 15px;\n  border: 1px solid #fdfdfd;\n  \n  margin-right: 5px;\n  color: #fff;\n  border-radius: 51%;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a.facebook[_ngcontent-%COMP%] {\n  background: #3b5998;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a.instagram[_ngcontent-%COMP%] {\n  background: #db2f7b;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a.twitter[_ngcontent-%COMP%] {\n  background: #007bb5;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a.youtube[_ngcontent-%COMP%] {\n  background: red;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border: 1px solid #000 !important;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   .google-play-store[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   .app-store[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n  background-color: #f34235;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .call[_ngcontent-%COMP%] {\n  background-color: #88bf43;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .report[_ngcontent-%COMP%] {\n  background-color: #e8a709;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .qtsans[_ngcontent-%COMP%] {\n  background-color: #01bad2;\n}\n\n@media (max-width: 1024px) {\n  .fixed-plugin[_ngcontent-%COMP%] {\n    right: 0px;\n  }\n\n  .toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 768px) {\n  .fixed-plugin[_ngcontent-%COMP%] {\n    right: 0px;\n  }\n\n  .toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding: 0 0px;\n  }\n\n  .quick-link[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .side-bar-quick-link[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 7px 11px !important;\n    font-size: 15px !important;\n    margin-right: 0px !important;\n  }\n}\n\n@media (max-width: 640px) {\n  .toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .mat-icon.hm-wallet[_ngcontent-%COMP%] {\n    margin: 0px 14px;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    font-size: 12px;\n    min-width: 48px;\n    padding: 0px;\n    line-height: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFNhaUFzdHJvV29ybGQtMlxcc2FpQXN0cm9Xb3JsZEdpdEh1Ylxcc2FpQXN0cm9XZWJBcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7QUNKRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNMRjs7QURPQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQ0pGOztBRE1BO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0FDSEY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGOztBRFdBO0VBQ0UsZUFBQTtBQ1JGOztBRFdBO0VBQ0UsY0FBQTtBQ1JGOztBRFdBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUEwQix5QkFBQTtFQUMxQixNQUFBO0VBQVEseUNBQUE7RUFDUixhQUFBO0VBQWUsK0RBQUE7QUNMZjs7QURRSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ05OOztBRFFJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ05OOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDUkY7O0FEU0U7RUFFRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDUko7O0FEU0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNQTjs7QURTSTtFQUNFLG1CQUFBO0FDUE47O0FEU0k7RUFDRSxtQkFBQTtBQ1BOOztBRFNJO0VBQ0UsbUJBQUE7QUNQTjs7QURTSTtFQUNFLGVBQUE7QUNQTjs7QURVRTtFQUNFLGlDQUFBO0FDUko7O0FEZUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQ1pKOztBRGdCQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNiRjs7QURjRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDWko7O0FEaUJBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ2RGOztBRGdCQTtFQUNFLHFCQUFBO0FDYkY7O0FEZUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDWkY7O0FEZ0JFO0VBQ0UsWUFBQTtBQ2JKOztBRGVFO0VBQ0UsV0FBQTtBQ2JKOztBRG9CQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNqQkY7O0FEbUJFO0VBQ0UsV0FBQTtBQ2pCSjs7QURvQkc7RUFDRSxtQkExS087QUN3Slo7O0FEeUJBO0VBQ0UsYUFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxrQkFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxZQUFBO0FDdEJGOztBRHVCRTtFQUNFLGtCQUFBO0FDckJKOztBRHNCTTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ3BCTjs7QUR5QkE7RUFDRSx5QkFwTU87QUM4S1Q7O0FEd0JJO0VBQ0UscUJBQUE7QUN0Qk47O0FEd0JJO0VBQ0UsV0E1TUU7QUNzTFI7O0FEMEJJO0VBQ0UsbUJBQUE7QUN4Qk47O0FENEJJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDMUJOOztBRDJCTTtFQUNFLG1CQUFBO0FDekJSOztBRDJCTTtFQUNFLG1CQUFBO0FDekJSOztBRDJCTTtFQUNFLG1CQUFBO0FDekJSOztBRDJCTTtFQUNFLGVBQUE7QUN6QlI7O0FENEJJO0VBQ0UsaUNBQUE7QUMxQk47O0FENkJFO0VBQ0UsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0FDM0JKOztBRDhDRTtFQUNFLFdBQUE7QUMzQ0o7O0FENkNFO0VBQ0UseUJBQUE7QUMzQ0o7O0FENkNFO0VBQ0UseUJBQUE7QUMzQ0o7O0FENkNFO0VBQ0UseUJBQUE7QUMzQ0o7O0FENkNFO0VBQ0UseUJBQUE7QUMzQ0o7O0FEa0RBO0VBQ0U7SUFDRSxVQUFBO0VDL0NGOztFRGlEQTtJQUNFLFdBQUE7RUM5Q0Y7QUFDRjs7QURpREE7RUFDRTtJQUNFLFVBQUE7RUMvQ0Y7O0VEaURBO0lBQ0UsY0FBQTtFQzlDRjs7RURpREE7SUFDRSxhQUFBO0VDOUNGOztFRGdEQTtJQUNFLFdBQUE7RUM3Q0Y7O0VEK0NBO0lBQ0UsY0FBQTtFQzVDRjs7RURnREk7SUFDRSw0QkFBQTtJQUNBLDBCQUFBO0lBQ0EsNEJBQUE7RUM3Q047QUFDRjs7QURrREE7RUFHTTtJQUNFLFVBQUE7RUNsRE47RURvREk7SUFDRSxnQkFBQTtFQ2xETjtFRG9ESTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUNsRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kd2hpdGU6ICNmZmY7XHJcbiRvZmYtd2hpdGU6ICNlOGU4ZTg7XHJcbiRwcmltYXI6ICNmOWE4MjU7XHJcblxyXG4uc2lkZW5hdi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcblxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIG1hcmdpbjogNHB4IDBweDtcclxufVxyXG4uZmFjZWJvb2stY29sb3J7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uaW5zdGFncmFtLWNvbG9ye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxubWF0LXRvb2xiYXItcm93e1xyXG4gIGhlaWdodDogOTVweDtcclxufVxyXG4ucXVpY2stbGlua3tcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4vLyBtYXQtdG9vbGJhci1yb3cgLm1hdC1idXR0b24ge1xyXG4vLyBsZWZ0OiAtM3B4O1xyXG4vLyAvKiB0b3A6IDBweDsgKi9cclxuLy8gYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuLy8gfVxyXG5cclxuLmV4YW1wbGUtaWNvbiB7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4udG9vbGJhci13cmFwcGVyIHtcclxucG9zaXRpb246IHN0aWNreTtcclxucG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xyXG50b3A6IDA7IC8qIFNldHMgdGhlIHN0aWNreSB0b29sYmFyIHRvIGJlIG9uIHRvcCAqL1xyXG56LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgdGhhdCB5b3VyIGFwcCdzIGNvbnRlbnQgZG9lc24ndCBvdmVybGFwIHRoZSB0b29sYmFyICovXHJcblxyXG4ubWF0LWljb257XHJcbiAgICAmLmhtLXdhbGxldCB7XHJcbiAgICAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgICYuaG0tdXNlci1pY29ue1xyXG4gICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1zb2NpYWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTJweDtcclxuICBhIHtcclxuXHJcbiAgICBwYWRkaW5nOiAxMHB4IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTElO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgICYuaG9tZXtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwYWRkaW5nOiA3cHggMTBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNiU7XHJcbiAgICB9XHJcbiAgICAmLmZhY2Vib29re1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xyXG4gICAgfVxyXG4gICAgJi5pbnN0YWdyYW17XHJcbiAgICAgIGJhY2tncm91bmQ6ICNkYjJmN2I7XHJcbiAgICB9XHJcbiAgICAmLnR3aXR0ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDdiYjU7XHJcbiAgICB9XHJcbiAgICAmLnlvdXR1YmV7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIH1cclxuICB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGUgIWltcG9ydGFudFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4uaG0tdXNlci1tZW51LWl0ZW17XHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi50b29sYmFyLXdyYXBwZXIgYnV0dG9ue1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICAmLm1lbnUtYnV0dG9uIHtcclxuICAgIG1pbi13aWR0aDogMzZweDtcclxuICAgIGxlZnQ6IC0xMXB4O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnRvb2xiYXItd3JhcHBlciBzcGFue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udG9vbGJhci13cmFwcGVyIHNwYW4gYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnRvb2xiYXItd3JhcHBlciBzcGFuLmhpZ2hsaWdodC1tZW51e1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMmJmMmI7XHJcbiAgYm9yZGVyLXJhZGl1czogNDRweDtcclxuICBwYWRkaW5nOjEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udG9vbGJhci13cmFwcGVyIHNwYW57XHJcbiAgJi5obS1sb2dvIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgaW1ne1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmZpeGVkLXBsdWdpbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICB6LWluZGV4OiAxMDMxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLmZvbGxvdy10ZXh0IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICB9XHJcblxyXG4gICBidXR0b257XHJcbiAgICAgYmFja2dyb3VuZDogJG9mZi13aGl0ZTtcclxuICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4uc2lkZS1iYXItcXVpY2stbGlua3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2lkZS1iYXItcXVpY2stbGluayBhIHtcclxuICBwYWRkaW5nOiAxcmVtIDUwcHg7XHJcbn1cclxuXHJcbi5tYXQtc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIC5zaWRlLWJhci1sb2dvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgaW1ne1xyXG4gICAgICB3aWR0aDo4MCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvb3Rlci13cmFwcGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXI7XHJcbiAgcCB7XHJcbiAgICBhIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgYTpob3ZlcntcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvb3Rlci1jb250YWN0IHtcclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZm9vdGVyLXNvY2lhbCB7XHJcbiAgICBhIHtcclxuICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZGZkZmQ7XHJcbiAgICAgIC8qIG1hcmdpbjogMHB4IDEwcHg7ICovXHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTElO1xyXG4gICAgICAmLmZhY2Vib29re1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7XHJcbiAgICAgIH1cclxuICAgICAgJi5pbnN0YWdyYW17XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2RiMmY3YjtcclxuICAgICAgfVxyXG4gICAgICAmLnR3aXR0ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwN2JiNTtcclxuICAgICAgfVxyXG4gICAgICAmLnlvdXR1YmV7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhOmhvdmVyIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5nb29nbGUtcGxheS1zdG9yZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5hcHAtc3RvcmUgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAvLyAuZm9vdGVyLWJvdHRvbSB7XHJcbiAgLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gICAuZm9vdGVyLXNvY2lhbCB7XHJcbiAgLy8gICAgIGEge1xyXG4gIC8vICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIC8vICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICBhOmhvdmVyIHtcclxuICAvLyAgICAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnRcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcblxyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBidXR0b24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5jaGF0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzQyMzU7XHJcbiAgfVxyXG4gIC5jYWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OGJmNDM7XHJcbiAgfVxyXG4gIC5yZXBvcnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4YTcwOTtcclxuICB9XHJcbiAgLnF0c2FucyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiYWQyO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5maXhlZC1wbHVnaW4ge1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLnRvb2xiYXItd3JhcHBlciBzcGFuIGltZ3tcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5maXhlZC1wbHVnaW4ge1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLnRvb2xiYXItd3JhcHBlciBzcGFue1xyXG4gICAgcGFkZGluZzogMCAwcHg7XHJcbiAgfVxyXG5cclxuICAucXVpY2stbGlua3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC50b29sYmFyLXdyYXBwZXIgc3BhbiBpbWd7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbiAgfVxyXG4gIC5zaWRlLWJhci1xdWljay1saW5rIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgICAuZm9vdGVyLXNvY2lhbCB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcblxyXG4gIC50b29sYmFyLXdyYXBwZXJ7XHJcbiAgICAgIHNwYW4gaW1ne1xyXG4gICAgICAgIHdpZHRoIDogODAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5tYXQtaWNvbi5obS13YWxsZXQge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtaW4td2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCIuc2lkZW5hdi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgbWFyZ2luOiA0cHggMHB4O1xufVxuXG4uZmFjZWJvb2stY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmluc3RhZ3JhbS1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbm1hdC10b29sYmFyLXJvdyB7XG4gIGhlaWdodDogOTVweDtcbn1cblxuLnF1aWNrLWxpbmsge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZXhhbXBsZS1pY29uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnRvb2xiYXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cbiAgdG9wOiAwO1xuICAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cbiAgei1pbmRleDogMTAwMDtcbiAgLyogRW5zdXJlIHRoYXQgeW91ciBhcHAncyBjb250ZW50IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgdG9vbGJhciAqL1xufVxuLnRvb2xiYXItd3JhcHBlciAubWF0LWljb24uaG0td2FsbGV0IHtcbiAgbWFyZ2luOiAwcHggMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRvb2xiYXItd3JhcHBlciAubWF0LWljb24uaG0tdXNlci1pY29uIHtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmhlYWRlci1zb2NpYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMnB4O1xufVxuLmhlYWRlci1zb2NpYWwgYSB7XG4gIHBhZGRpbmc6IDEwcHggMTNweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjlhODI1O1xuICBib3JkZXItcmFkaXVzOiA1MSU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXItc29jaWFsIGEuaG9tZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDYlO1xufVxuLmhlYWRlci1zb2NpYWwgYS5mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6ICMzYjU5OTg7XG59XG4uaGVhZGVyLXNvY2lhbCBhLmluc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQ6ICNkYjJmN2I7XG59XG4uaGVhZGVyLXNvY2lhbCBhLnR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xufVxuLmhlYWRlci1zb2NpYWwgYS55b3V0dWJlIHtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuLmhlYWRlci1zb2NpYWwgYTpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmhtLXVzZXItbWVudS1pdGVtIGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udG9vbGJhci13cmFwcGVyIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4udG9vbGJhci13cmFwcGVyIGJ1dHRvbi5tZW51LWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMzZweDtcbiAgbGVmdDogLTExcHg7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi50b29sYmFyLXdyYXBwZXIgc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9vbGJhci13cmFwcGVyIHNwYW4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRvb2xiYXItd3JhcHBlciBzcGFuLmhpZ2hsaWdodC1tZW51IHtcbiAgYm9yZGVyOiAycHggc29saWQgI2YyYmYyYjtcbiAgYm9yZGVyLXJhZGl1czogNDRweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udG9vbGJhci13cmFwcGVyIHNwYW4uaG0tbG9nbyB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi50b29sYmFyLXdyYXBwZXIgc3BhbiBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZpeGVkLXBsdWdpbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNjRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgei1pbmRleDogMTAzMTtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5maXhlZC1wbHVnaW4gLmZvbGxvdy10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG59XG4uZml4ZWQtcGx1Z2luIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG59XG5cbi5zaWRlLWJhci1xdWljay1saW5rIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNpZGUtYmFyLXF1aWNrLWxpbmsgYSB7XG4gIHBhZGRpbmc6IDFyZW0gNTBweDtcbn1cblxuLm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDIzMHB4O1xufVxuLm1hdC1zaWRlbmF2IC5zaWRlLWJhci1sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1hdC1zaWRlbmF2IC5zaWRlLWJhci1sb2dvIGltZyB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uZm9vdGVyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlhODI1O1xufVxuLmZvb3Rlci13cmFwcGVyIHAgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mb290ZXItd3JhcHBlciBwIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5mb290ZXItd3JhcHBlciAuZm9vdGVyLWNvbnRhY3QgcCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uZm9vdGVyLXdyYXBwZXIgLmZvb3Rlci1zb2NpYWwgYSB7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmRmZGZkO1xuICAvKiBtYXJnaW46IDBweCAxMHB4OyAqL1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUxJTtcbn1cbi5mb290ZXItd3JhcHBlciAuZm9vdGVyLXNvY2lhbCBhLmZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogIzNiNTk5ODtcbn1cbi5mb290ZXItd3JhcHBlciAuZm9vdGVyLXNvY2lhbCBhLmluc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQ6ICNkYjJmN2I7XG59XG4uZm9vdGVyLXdyYXBwZXIgLmZvb3Rlci1zb2NpYWwgYS50d2l0dGVyIHtcbiAgYmFja2dyb3VuZDogIzAwN2JiNTtcbn1cbi5mb290ZXItd3JhcHBlciAuZm9vdGVyLXNvY2lhbCBhLnlvdXR1YmUge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG4uZm9vdGVyLXdyYXBwZXIgLmZvb3Rlci1zb2NpYWwgYTpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcbn1cbi5mb290ZXItd3JhcHBlciAuZ29vZ2xlLXBsYXktc3RvcmUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9vdGVyLXdyYXBwZXIgLmFwcC1zdG9yZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5leGFtcGxlLWJ1dHRvbi1yb3cgLmNoYXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM0MjM1O1xufVxuLmV4YW1wbGUtYnV0dG9uLXJvdyAuY2FsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4OGJmNDM7XG59XG4uZXhhbXBsZS1idXR0b24tcm93IC5yZXBvcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThhNzA5O1xufVxuLmV4YW1wbGUtYnV0dG9uLXJvdyAucXRzYW5zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmFkMjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZml4ZWQtcGx1Z2luIHtcbiAgICByaWdodDogMHB4O1xuICB9XG5cbiAgLnRvb2xiYXItd3JhcHBlciBzcGFuIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZml4ZWQtcGx1Z2luIHtcbiAgICByaWdodDogMHB4O1xuICB9XG5cbiAgLnRvb2xiYXItd3JhcHBlciBzcGFuIHtcbiAgICBwYWRkaW5nOiAwIDBweDtcbiAgfVxuXG4gIC5xdWljay1saW5rIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnRvb2xiYXItd3JhcHBlciBzcGFuIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc2lkZS1iYXItcXVpY2stbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZm9vdGVyLXNvY2lhbCBhIHtcbiAgICBwYWRkaW5nOiA3cHggMTFweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAudG9vbGJhci13cmFwcGVyIHNwYW4gaW1nIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC50b29sYmFyLXdyYXBwZXIgLm1hdC1pY29uLmhtLXdhbGxldCB7XG4gICAgbWFyZ2luOiAwcHggMTRweDtcbiAgfVxuICAudG9vbGJhci13cmFwcGVyIGJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWluLXdpZHRoOiA0OHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
        }, {
          type: _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _observables_behaviourSubject_service__WEBPACK_IMPORTED_MODULE_11__["ObservableDataService"]
        }];
      }, {
        sidenav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sidenav']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: config, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "config", function () {
      return config;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./material-module */
    "./src/app/material-module.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _shared_service_http_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/service/http/http-intercepter-basic-auth.service */
    "./src/app/shared/service/http/http-intercepter-basic-auth.service.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _shared_service_http_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/service/http/loader-interceptor.service */
    "./src/app/shared/service/http/loader-interceptor.service.ts");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _auth_canActivateAuth_gaurd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./auth/canActivateAuth.gaurd */
    "./src/app/auth/canActivateAuth.gaurd.ts");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.esm.js");
    /* harmony import */


    var firebase_messaging__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! firebase/messaging */
    "./node_modules/firebase/messaging/dist/index.esm.js");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./chat/chat.component */
    "./src/app/chat/chat.component.ts");
    /* harmony import */


    var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./confirmation/confirmation.component */
    "./src/app/confirmation/confirmation.component.ts");
    /* harmony import */


    var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./wallet/wallet.component */
    "./src/app/wallet/wallet.component.ts"); // import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
    // import { GoogleLoginProvider } from 'angularx-social-login';
    // export const config = {
    //   apiKey: "AIzaSyCwcgfKu2EkT1E_2uRqf7bloO8P6PHRNO0",
    //   authDomain: "simpleintroslider.firebaseapp.com",
    //   databaseURL: "https://SimpleIntroSlider.firebaseio.com",
    //   projectId: "simpleintroslider",
    //   storageBucket: "",
    //   messagingSenderId: "861357045560"
    // };
    // firebase astro world 


    var config = {
      apiKey: "AIzaSyCJ_QJQqYDWVzricXXyjtmEef7N7ty25Ms",
      authDomain: "saisastroworld.firebaseapp.com",
      databaseURL: "https://SaisAstroworld.firebaseio.com",
      projectId: "saisastroworld",
      storageBucket: "",
      messagingSenderId: "785274786840"
    }; // apiKey: "<API_KEY>",
    // authDomain: "<PROJECT_ID>.firebaseapp.com",
    // databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    // projectId: "<PROJECT_ID>",
    // storageBucket: "<BUCKET>.appspot.com",
    // messagingSenderId: "<SENDER_ID>",

    firebase_app__WEBPACK_IMPORTED_MODULE_19__["default"].initializeApp(config);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _auth_canActivateAuth_gaurd__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"], // {
      //   provide: 'SocialAuthServiceConfig',
      //   useValue: {
      //     autoLogin: false,
      //     providers: [
      //       {
      //         id: GoogleLoginProvider.PROVIDER_ID,
      //         provider: new GoogleLoginProvider(
      //           'clientId'
      //         ),
      //       },
      //     ],
      //   } as SocialAuthServiceConfig ,
      // },
      {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _shared_service_http_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_10__["HttpIntercepterBasicAuthService"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _shared_service_http_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["LoaderInterceptorService"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"], _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_21__["ChatComponent"], _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmationComponent"], _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_23__["WalletComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"], _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_21__["ChatComponent"], _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmationComponent"], _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_23__["WalletComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"], _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"]],
          providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _auth_canActivateAuth_gaurd__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"], // {
          //   provide: 'SocialAuthServiceConfig',
          //   useValue: {
          //     autoLogin: false,
          //     providers: [
          //       {
          //         id: GoogleLoginProvider.PROVIDER_ID,
          //         provider: new GoogleLoginProvider(
          //           'clientId'
          //         ),
          //       },
          //     ],
          //   } as SocialAuthServiceConfig ,
          // },
          {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"]
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _shared_service_http_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_10__["HttpIntercepterBasicAuthService"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _shared_service_http_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["LoaderInterceptorService"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/service/commonService/common.service */
    "./src/app/shared/service/commonService/common.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(_route, _commonService) {
        _classCallCheck(this, AuthService);

        this._route = _route;
        this._commonService = _commonService;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.AstrologerLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
      }

      _createClass(AuthService, [{
        key: "checkSession",
        value: function checkSession(userData) {
          if (userData != null && userData.userType == 2) {
            // this condition is checking whether it's admin or normal user
            this.AstrologerLoggedIn.next(false);
            this.loggedIn.next(true);
            return true;
          } else {
            this.AstrologerLoggedIn.next(true);
            this.loggedIn.next(true);
            return true;
          }
        }
      }, {
        key: "checkAccess",
        value: function checkAccess(userData) {
          if (userData != null && userData.userType == 2) {
            // this condition is checking whether it's admin or normal user
            this.AstrologerLoggedIn.next(false);
            this.loggedIn.next(true);
            return false;
          } else {
            this.AstrologerLoggedIn.next(true);
            this.loggedIn.next(true);
            return true;
          }
        }
      }, {
        key: "logOut",
        value: function logOut() {
          location.reload();
          sessionStorage.clear();

          this._route.navigate(['']);

          this._commonService.tostMessage("Log Out Successfully!");
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          return this.loggedIn.asObservable();
        }
      }, {
        key: "isAstrologerLoggedIn",
        get: function get() {
          return this.AstrologerLoggedIn.asObservable();
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/canActivateAuth.gaurd.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/canActivateAuth.gaurd.ts ***!
    \***********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthCanActivateAuthGaurdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, route) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.route = route;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var date = new Date();
          var userValue = JSON.parse(sessionStorage.getItem("userData"));
          console.log("Can Activate servcie  ++++++++++++++ ", userValue); // if(userValue == null) this.authService.logOut();

          var userFlag = this.authService.checkSession(userValue);
          console.log("flag", userFlag);

          if (userFlag) {
            // this.route.navigate(['dashboard']);
            return true;
          } else {
            //  this.route.navigate(['']);
            this.authService.logOut(); // console.log("User Flag retrun ------> false");

            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/chat/chat.component.ts":
  /*!****************************************!*\
    !*** ./src/app/chat/chat.component.ts ***!
    \****************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../node_modules/@angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/service/firebase/firebase.service */
    "./src/app/shared/service/firebase/firebase.service.ts");
    /* harmony import */


    var _observables_behaviourSubject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../observables/behaviourSubject.service */
    "./src/app/observables/behaviourSubject.service.ts");
    /* harmony import */


    var _shared_service_payment_payment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/service/payment/payment.service */
    "./src/app/shared/service/payment/payment.service.ts");
    /* harmony import */


    var _chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat.service */
    "./src/app/chat/chat.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = function _c0(a0) {
      return {
        "background-color": a0
      };
    };

    function ChatComponent_div_0_mat_card_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_0_mat_card_1_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var list_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r5.getChatMsgScreen(list_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, "#" + (list_r4 == null ? null : list_r4.color)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r4 == null ? null : list_r4.shortName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r4 == null ? null : list_r4.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r4 == null ? null : list_r4.lastMessage);
      }
    }

    function ChatComponent_div_0_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_0_mat_card_1_div_1_Template, 8, 6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.allChatList);
      }
    }

    function ChatComponent_div_0_mat_card_2_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r8 = ctx.$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (list_r8 == null ? null : list_r8.receiver) == (ctx_r7.getFirebaseUserData == null ? null : ctx_r7.getFirebaseUserData.id) ? "mine" : "other");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r8 == null ? null : list_r8.message);
      }
    }

    function ChatComponent_div_0_mat_card_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_0_mat_card_2_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.viewchatListScreen();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "keyboard_arrow_left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Online");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatComponent_div_0_mat_card_2_div_12_Template, 3, 2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_0_mat_card_2_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.sendMessage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "send");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.chatName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.chatForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.chatList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.chatForm.invalid);
      }
    }

    function ChatComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_0_mat_card_1_Template, 2, 1, "mat-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_div_0_mat_card_2_Template, 18, 4, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.viewChatScreen);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.viewChatScreen);
      }
    }

    var ChatComponent =
    /*#__PURE__*/
    function () {
      function ChatComponent(firebaseService, observableService, paymentService, chatService) {
        var _this9 = this;

        _classCallCheck(this, ChatComponent);

        this.firebaseService = firebaseService;
        this.observableService = observableService;
        this.paymentService = paymentService;
        this.chatService = chatService;
        this.chatList = [];
        this.chatName = '';
        this.allChatList = [];
        this.viewChatScreen = false;
        this.viewChatOption = true;
        this.chatForm = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          message: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });

        if (sessionStorage.getItem('userFirebaseData')) {
          this.getFirebaseUserData = JSON.parse(sessionStorage.getItem('userFirebaseData'));
        } // this.firebaseService.messageListener();
        // get subject message


        this.observableService.getMessage.asObservable().subscribe(function (messageRes) {
          if (messageRes) {
            _this9.chatList.push(messageRes);

            setTimeout(function () {
              var element = document.getElementById('chatWrap');

              if (element) {
                element.scrollTop = element.scrollHeight;
              }
            }, 100);
          }
        });
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chatListDetail(); // if has receiver id

          if (sessionStorage.getItem('receiverId') && sessionStorage.getItem('chatUserDetail')) {
            var chatUserData = JSON.parse(sessionStorage.getItem('chatUserDetail'));
            this.chatName = chatUserData ? chatUserData.name : '';
            this.viewChatScreen = true;
            this.startTimer();
          } // if has receiver id end

        }
      }, {
        key: "chatListDetail",
        value: function chatListDetail() {
          var _this10 = this;

          this.firebaseService.getChatList().then(function (chatList) {
            if (chatList) {
              _this10.allChatList = chatList;
              console.log(_this10.allChatList, 'all chat list');
            }
          });
        }
      }, {
        key: "getAllMessage",
        value: function getAllMessage() {
          var _this11 = this;

          this.firebaseService.getAllMessages().then(function (response) {
            _this11.chatList = response;
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          this.firebaseService.sendMessages(this.chatForm.value.message);
          this.chatForm.reset();
        }
      }, {
        key: "getChatMsgScreen",
        value: function getChatMsgScreen(chatInfo) {
          console.log(chatInfo, 'chat info');
          this.chatName = chatInfo.name;
          sessionStorage.setItem('receiverId', chatInfo.id);
          this.viewChatScreen = true;
          this.getAllMessage();
          this.startTimer();
        }
      }, {
        key: "viewchatListScreen",
        value: function viewchatListScreen() {
          this.viewChatScreen = false;
          clearInterval(this.timer);
          this.deductChatAmount();
          sessionStorage.removeItem('chatName');
          this.chatListDetail();
        }
      }, {
        key: "placeOrder",
        value: function placeOrder() {
          var _this12 = this;

          var reqObj = {
            "amount": 50,
            "currency": "INR",
            "userId": "balatwo",
            "recieptId": this.makeOrderid()
          };
          this.paymentService.orderPlace(reqObj).subscribe(function (response) {
            console.log(response, 'place order');

            if (response) {
              var options = {
                key: 'rzp_test_ZeUhqzQZ4q0Gbg',
                amount: response['amount'],
                currency: response['currency'],
                name: '',
                description: '',
                image: '/assets/images/logo/PNG/font120px.png',
                order_id: response['id'],
                modal: {
                  // We should prevent closing of the form when esc key is pressed.
                  escape: false
                },
                notes: {// include notes if any
                },
                theme: {
                  color: '#f9a825'
                }
              };

              options.handler = function (response, error) {
                options.response = response;
                console.log(response);
                console.log(options); // call your backend api to verify payment signature & capture transaction

                if (response) {
                  _this12.verifySignature(response);
                }
              };

              options.modal.ondismiss = function () {
                // handle the case when user closes the form while transaction is in progress
                console.log('Transaction cancelled.');
              };

              var rzp = new window['Razorpay'](options);
              rzp.open();
            }
          });
        }
      }, {
        key: "getWalletInfo",
        value: function getWalletInfo() {
          var params = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('userId', "balatwo");
          this.paymentService.walletInfo(params).subscribe(function (response) {
            if (response) {
              console.log(response, 'wallet info');
            }
          });
        }
      }, {
        key: "verifySignature",
        value: function verifySignature(orderDetail) {
          var _this13 = this;

          if (orderDetail) {
            var params = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('signature', orderDetail.razorpay_signature).set('orderId', orderDetail.razorpay_order_id).set("paymentId", orderDetail.razorpay_payment_id);
            this.paymentService.signatureVerify(params).subscribe(function (response) {
              console.log(response, 'response signayture');

              if (response) {
                _this13.updateWallet(orderDetail);
              }
            });
          }
        }
      }, {
        key: "updateWallet",
        value: function updateWallet(orderInfo) {
          if (orderInfo) {
            // let params = new HttpParams().set('userId', 'balatwo').set("orderId", orderInfo.razorpay_order_id);
            var params = {
              userId: 'balatwo',
              orderId: orderInfo.razorpay_order_id
            };
            this.paymentService.updateWalletInfo(params).subscribe(function (response) {
              console.log(response, 'wallet update');
            });
          }
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var sec = 0;
          var min = 0; // start timer

          this.timer = setInterval(function () {
            sec++;

            if (sec > 59) {
              sec = 0;
              min++;
            }

            var chatTime = (min && min < 10 ? '0' + min : min) + ':' + (sec && sec < 10 ? '0' + sec : sec);
            localStorage.setItem('time', min.toString());
            console.log(chatTime, 'chat time');
            return chatTime;
          }, 1000); // start timer end
        } // make order id

      }, {
        key: "makeOrderid",
        value: function makeOrderid() {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < 12; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          if (result) {
            result = "recieptId_" + result;
          }

          console.log(result, 'result');
          return result;
        } // make order id end

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.timer);
          this.deductChatAmount();
        }
      }, {
        key: "deductChatAmount",
        value: function deductChatAmount() {
          var userData = JSON.parse(sessionStorage.getItem('userData'));
          var chatUserData = JSON.parse(sessionStorage.getItem('chatUserDetail'));
          var reqObj = {
            type: 'chat',
            minutes: localStorage.getItem('time') ? parseInt(localStorage.getItem('time')) : '',
            userId: userData.userId,
            astrologerId: chatUserData.userId
          };
          this.chatService.deductChatBalance(reqObj).subscribe(function (response) {
            console.log(response, 'chat response');
            localStorage.removeItem('time');
          });
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observables_behaviourSubject_service__WEBPACK_IMPORTED_MODULE_4__["ObservableDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_payment_payment_service__WEBPACK_IMPORTED_MODULE_5__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"]));
    };

    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["app-chat"]],
      inputs: {
        viewChatOption: "viewChatOption"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "chat-wrapper", 4, "ngIf"], [1, "chat-wrapper"], ["class", "list-wrapper example-card", 4, "ngIf"], ["class", "example-card", 4, "ngIf"], [1, "list-wrapper", "example-card"], ["class", "media", 3, "click", 4, "ngFor", "ngForOf"], [1, "media", 3, "click"], [1, "avatar", 3, "ngStyle"], [1, "media-body"], [1, "pointer"], [1, "example-card"], ["mat-mini-fab", "", "mat-card-avatar", "", "color", "primary", 1, "mr-3", 3, "click"], ["mat-card-avatar", "", 1, "user-header-image"], [3, "formGroup"], ["id", "chatWrap", 1, "chat-list"], ["class", "listing clearfix", 4, "ngFor", "ngForOf"], [1, "message-field"], ["formControlName", "message"], ["mat-mini-fab", "", "color", "primary", 3, "disabled", "click"], [1, "listing", "clearfix"], [3, "ngClass"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatComponent_div_0_Template, 3, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewChatOption);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardAvatar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]],
      styles: [".chat-wrapper[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  padding: 10px 20px 5px;\n  border-bottom: 1px solid #dbdbdb;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-size: 20px;\n  font-weight: 500;\n  display: inline-block;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  margin: 0 20px 0 0;\n  font-size: 20px;\n  line-height: 50px;\n  text-align: center;\n  text-transform: uppercase;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%] {\n  width: 80%;\n  min-height: calc(100vh - 30vh);\n  padding: 0;\n  margin: 2rem auto;\n  position: relative;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%] {\n  padding: 1rem 1rem 0;\n  box-shadow: 0px 1px 2px #dbdbdb;\n  background: whitesmoke;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .user-header-image[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-image: url(\"/assets/images/user/default-user.jpg\");\n  background-size: contain;\n  box-shadow: 0px 1px 5px #e1e1e1;\n  margin-top: -5px;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .chat-list[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 58vh);\n  padding: 1rem 1.5rem 1rem 1rem;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  max-width: 65%;\n  padding: 0.5rem 1rem;\n  border-radius: 10px;\n  background-color: #f9a825;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   .mine[_ngcontent-%COMP%] {\n  float: left;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   .other[_ngcontent-%COMP%] {\n  float: right;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .message-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 1rem;\n  position: absolute;\n  bottom: 20px;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .message-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 90%;\n  max-height: 46px;\n  resize: none;\n  padding: 8px 20px;\n  margin-right: 1rem;\n  border-radius: 22px;\n  vertical-align: middle;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .message-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .message-field[_ngcontent-%COMP%]     span.bmd-form-group {\n  width: 90%;\n  padding: 0;\n  margin-right: 1rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .message-field[_ngcontent-%COMP%]     span.bmd-form-group > textarea {\n  width: 100%;\n}\n.chat-wrapper[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9DOlxcU2FpQXN0cm9Xb3JsZC0yXFxzYWlBc3Ryb1dvcmxkR2l0SHViXFxzYWlBc3Ryb1dlYkFwcC9zcmNcXGFwcFxcY2hhdFxcY2hhdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksc0JBQUE7RUFDQSxnQ0FBQTtBQ0RaO0FESVk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNGaEI7QURLUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNIWjtBRE1JO0VBQ0ksVUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNKUjtBRE1JO0VBQ0ksb0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0FDSlI7QURNSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkRBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNKUjtBRE1JO0VBQ0ksOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNKUjtBRE1JO0VBQ0ksZ0JBQUE7QUNKUjtBREtRO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0haO0FES1E7RUFDSSxXQUFBO0FDSFo7QURLUTtFQUNJLFlBQUE7QUNIWjtBRE1JO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNKUjtBREtRO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDSFo7QURJWTtFQUNJLGFBQUE7QUNGaEI7QURLUTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDSFo7QURJWTtFQUNJLFdBQUE7QUNGaEI7QURPSTtFQUNJLGVBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LXdyYXBwZXIge1xyXG4gICAgLmxpc3Qtd3JhcHBlciB7XHJcbiAgICAgICAgLm1lZGlhIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYmRiZGI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZWRpYS1ib2R5IHtcclxuICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHggMCAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmV4YW1wbGUtY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzB2aCk7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAubWF0LWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAjZGJkYmRiO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgICB9XHJcbiAgICAudXNlci1oZWFkZXItaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3VzZXIvZGVmYXVsdC11c2VyLmpwZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAjZTFlMWUxO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICB9XHJcbiAgICAuY2hhdC1saXN0IHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTh2aCk7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW0gMXJlbSAxcmVtO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICB9XHJcbiAgICAubGlzdGluZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDY1JTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWE4MjU7O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWluZSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3RoZXIge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2UtZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNDZweDtcclxuICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgOjpuZy1kZWVwIHNwYW4uYm1kLWZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgPiAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBvaW50ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufSIsIi5jaGF0LXdyYXBwZXIgLmxpc3Qtd3JhcHBlciAubWVkaWEge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZGJkYjtcbn1cbi5jaGF0LXdyYXBwZXIgLmxpc3Qtd3JhcHBlciAubWVkaWEtYm9keSBoNSB7XG4gIG1hcmdpbjogMCAwIDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY2hhdC13cmFwcGVyIC5saXN0LXdyYXBwZXIgLmF2YXRhciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmNoYXQtd3JhcHBlciAuZXhhbXBsZS1jYXJkIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDMwdmgpO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDJyZW0gYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNoYXQtd3JhcHBlciAubWF0LWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMXJlbSAxcmVtIDA7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4ICNkYmRiZGI7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG4uY2hhdC13cmFwcGVyIC51c2VyLWhlYWRlci1pbWFnZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3VzZXIvZGVmYXVsdC11c2VyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAjZTFlMWUxO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuLmNoYXQtd3JhcHBlciAuY2hhdC1saXN0IHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDU4dmgpO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbSAxcmVtIDFyZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuLmNoYXQtd3JhcHBlciAubGlzdGluZyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uY2hhdC13cmFwcGVyIC5saXN0aW5nID4gc3BhbiB7XG4gIG1heC13aWR0aDogNjUlO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YTgyNTtcbn1cbi5jaGF0LXdyYXBwZXIgLmxpc3RpbmcgLm1pbmUge1xuICBmbG9hdDogbGVmdDtcbn1cbi5jaGF0LXdyYXBwZXIgLmxpc3RpbmcgLm90aGVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmNoYXQtd3JhcHBlciAubWVzc2FnZS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xufVxuLmNoYXQtd3JhcHBlciAubWVzc2FnZS1maWVsZCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC1oZWlnaHQ6IDQ2cHg7XG4gIHJlc2l6ZTogbm9uZTtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jaGF0LXdyYXBwZXIgLm1lc3NhZ2UtZmllbGQgdGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNoYXQtd3JhcHBlciAubWVzc2FnZS1maWVsZCA6Om5nLWRlZXAgc3Bhbi5ibWQtZm9ybS1ncm91cCB7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNoYXQtd3JhcHBlciAubWVzc2FnZS1maWVsZCA6Om5nLWRlZXAgc3Bhbi5ibWQtZm9ybS1ncm91cCA+IHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hhdC13cmFwcGVyIC5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat',
          templateUrl: './chat.component.html',
          styleUrls: ['./chat.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
        }, {
          type: _observables_behaviourSubject_service__WEBPACK_IMPORTED_MODULE_4__["ObservableDataService"]
        }, {
          type: _shared_service_payment_payment_service__WEBPACK_IMPORTED_MODULE_5__["PaymentService"]
        }, {
          type: _chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"]
        }];
      }, {
        viewChatOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/chat/chat.service.ts":
  /*!**************************************!*\
    !*** ./src/app/chat/chat.service.ts ***!
    \**************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppChatChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/constant/rest-url.constants */
    "./src/app/shared/constant/rest-url.constants.ts");
    /* harmony import */


    var _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/service/restApi/rest.service */
    "./src/app/shared/service/restApi/rest.service.ts");

    var ChatService =
    /*#__PURE__*/
    function () {
      function ChatService(restService) {
        _classCallCheck(this, ChatService);

        this.restService = restService;
      }

      _createClass(ChatService, [{
        key: "deductChatBalance",
        value: function deductChatBalance(data) {
          return this.restService.create(_shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].deductBalance, data);
        }
      }]);

      return ChatService;
    }();

    ChatService.ɵfac = function ChatService_Factory(t) {
      return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]));
    };

    ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ChatService,
      factory: ChatService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/confirmation/confirmation.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/confirmation/confirmation.component.ts ***!
    \********************************************************/

  /*! exports provided: ConfirmationComponent */

  /***/
  function srcAppConfirmationConfirmationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function () {
      return ConfirmationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ConfirmationComponent_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ConfirmationComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ConfirmationComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " NT$ ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function ConfirmationComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationComponent_div_9_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var list_r66 = ctx.$implicit;
          var i_r67 = ctx.index;

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.selectList(list_r66, i_r67);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r66 = ctx.$implicit;
        var i_r67 = ctx.index;

        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r64.selectedIndex == i_r67));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r66.name);
      }
    }

    function ConfirmationComponent_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " To make this connection you required to add sufficient amount in the wallet ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ConfirmationComponent =
    /*#__PURE__*/
    function () {
      function ConfirmationComponent(modalData, dialogRef) {
        _classCallCheck(this, ConfirmationComponent);

        this.modalData = modalData;
        this.dialogRef = dialogRef;
        this.isValid = false;
        this.minuteLisiting = [{
          name: "5 min",
          value: 5
        }, {
          name: "10 min",
          value: 10
        }, {
          name: "15 min",
          value: 15
        }, {
          name: "20 min",
          value: 20
        }];
      }

      _createClass(ConfirmationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('walletAmount')) {
            this.walletBalance = sessionStorage.getItem('walletAmount');
          }
        }
      }, {
        key: "selectList",
        value: function selectList(listInfo, index) {
          this.selectedIndex = index;
          console.log("listInfo");

          if (sessionStorage.getItem('walletAmount') && listInfo) {
            var totalValue = listInfo.value * 10;

            if (totalValue < parseInt(sessionStorage.getItem('walletAmount'))) {
              this.isValid = false;
            } else {
              this.isValid = true;
            }
          }
        }
      }, {
        key: "connect",
        value: function connect() {
          this.dialogRef.close(true);
        }
      }]);

      return ConfirmationComponent;
    }();

    ConfirmationComponent.ɵfac = function ConfirmationComponent_Factory(t) {
      return new (t || ConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_node_modules_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_node_modules_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    ConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmationComponent,
      selectors: [["app-confirmation"]],
      decls: 14,
      vars: 9,
      consts: [[1, "confirmation-wrapper"], [4, "ngIf"], [1, "minute-listing"], ["class", "list", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "text-center"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-inr"], ["aria-hidden", "true", 1, "fa", "fa-usd"], [1, "list", 3, "ngClass", "click"]],
      template: function ConfirmationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfirmationComponent_span_4_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfirmationComponent_span_5_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ConfirmationComponent_span_6_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ConfirmationComponent_div_9_Template, 3, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ConfirmationComponent_p_10_Template, 2, 0, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationComponent_Template_button_click_12_listener() {
            return ctx.connect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Connect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.modalData == null ? null : ctx.modalData.type, " with ", ctx.modalData == null ? null : ctx.modalData.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.modalData == null ? null : ctx.modalData.countryCode) == "+91");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.modalData == null ? null : ctx.modalData.countryCode) == "+1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.modalData == null ? null : ctx.modalData.countryCode) == "+886");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.modalData == null ? null : ctx.modalData.chat, "/Min");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.minuteLisiting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isValid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".minute-listing[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  text-align: center;\n}\n.minute-listing[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 30px;\n  border: 1px solid #000;\n  border-radius: 4px;\n  margin: 0 10px 0 0;\n  line-height: 30px;\n  text-align: center;\n  display: inline-block;\n  cursor: pointer;\n}\n.minute-listing[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n.minute-listing[_ngcontent-%COMP%]   .list.active[_ngcontent-%COMP%] {\n  background-color: #fbc02d;\n}\n.minute-listing[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.confirmation-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.confirmation-wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybWF0aW9uL0M6XFxTYWlBc3Ryb1dvcmxkLTJcXHNhaUFzdHJvV29ybGRHaXRIdWJcXHNhaUFzdHJvV2ViQXBwL3NyY1xcYXBwXFxjb25maXJtYXRpb25cXGNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNFUjtBRERRO0VBQ0ksU0FBQTtBQ0daO0FERFE7RUFDSSx5QkFBQTtBQ0daO0FERFE7RUFDSSxxQkFBQTtBQ0daO0FEQ0E7RUFDSSxrQkFBQTtBQ0VKO0FEREk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWludXRlLWxpc3Rpbmcge1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAubGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYzAyZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNvbmZpcm1hdGlvbi13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxufSIsIi5taW51dGUtbGlzdGluZyB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWludXRlLWxpc3RpbmcgLmxpc3Qge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWludXRlLWxpc3RpbmcgLmxpc3Q6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMDtcbn1cbi5taW51dGUtbGlzdGluZyAubGlzdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJjMDJkO1xufVxuLm1pbnV0ZS1saXN0aW5nIC5saXN0IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jb25maXJtYXRpb24td3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb25maXJtYXRpb24td3JhcHBlciBoMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-confirmation',
          templateUrl: './confirmation.component.html',
          styleUrls: ['./confirmation.component.scss']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_node_modules_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _node_modules_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/forgot-password/forgot-password.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.component.ts ***!
    \**************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_constant_regex_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/constant/regex-constant */
    "./src/app/shared/constant/regex-constant.ts");
    /* harmony import */


    var _forgot_password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgot-password.service */
    "./src/app/forgot-password/forgot-password.service.ts");
    /* harmony import */


    var _shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/service/commonService/common.service */
    "./src/app/shared/service/commonService/common.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ForgotPasswordComponent_form_1_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile number is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_1_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid mobile number! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_1_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " OTP is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_1_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_form_1_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r303);

          var ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r302.submitForm(ctx_r302.validateForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Get OTP ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r300.validateForm.invalid);
      }
    }

    function ForgotPasswordComponent_form_1_button_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_form_1_button_17_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305);

          var ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r304.verifyOTP(ctx_r304.validateForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Verify OTP ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mobile Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ForgotPasswordComponent_form_1_mat_error_7_Template, 2, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ForgotPasswordComponent_form_1_mat_error_8_Template, 2, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "OTP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ForgotPasswordComponent_form_1_mat_error_15_Template, 2, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ForgotPasswordComponent_form_1_button_16_Template, 2, 1, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ForgotPasswordComponent_form_1_button_17_Template, 2, 0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r295.validateForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r295.validateForm.get("contactNo").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r295.validateForm.get("contactNo").hasError("required") && ctx_r295.validateForm.get("contactNo").hasError("mobileErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r295.validateForm.get("otp").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r295.isOtp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r295.isOtp);
      }
    }

    function ForgotPasswordComponent_form_2_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile number is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_2_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid mobile number! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_2_mat_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login type is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_2_mat_error_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_2_mat_error_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid password! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " *minimum length should be 8 digit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " *must contain Numeric and Alpha characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_2_button_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_form_2_button_22_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313);

          var ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r312.resetUser(ctx_r312.resetForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reset ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r311.resetForm.invalid);
      }
    }

    function ForgotPasswordComponent_form_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mobile Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ForgotPasswordComponent_form_2_mat_error_7_Template, 2, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ForgotPasswordComponent_form_2_mat_error_8_Template, 2, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ForgotPasswordComponent_form_2_mat_error_13_Template, 2, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "New Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "vpn_key");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ForgotPasswordComponent_form_2_mat_error_20_Template, 2, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ForgotPasswordComponent_form_2_mat_error_21_Template, 6, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ForgotPasswordComponent_form_2_button_22_Template, 2, 1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r296.resetForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r296.resetForm.get("contactNo").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r296.resetForm.get("contactNo").hasError("required") && ctx_r296.resetForm.get("contactNo").hasError("mobileErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r296.resetForm.get("userType").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r296.resetForm.get("password").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r296.resetForm.get("password").hasError("required") && ctx_r296.resetForm.get("password").hasError("passErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r296.isOtp);
      }
    }

    var ForgotPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotPasswordComponent(_formBuilder, _forgotPasswordService, _commonService) {
        _classCallCheck(this, ForgotPasswordComponent);

        this._formBuilder = _formBuilder;
        this._forgotPasswordService = _forgotPasswordService;
        this._commonService = _commonService;
        this.isVisible = true;
        this.isOtp = false;
        this.outputResetData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.mobileNumber = function (control) {
          console.log("control.value ----->", control.value);

          if (!control.value) {
            return {
              required: true
            };
          } else if (control.value.match(_shared_constant_regex_constant__WEBPACK_IMPORTED_MODULE_2__["RegexConstant"].ONLY_NUMBER)) {
            return {};
          } else {
            return {
              mobileErr: true,
              error: true
            };
          }
        };

        this.passwordPattern = function (control) {
          console.log("passwordPattern ----->", control.value);

          if (!control.value) {
            return {
              required: true
            };
          } else if (control.value.match(_shared_constant_regex_constant__WEBPACK_IMPORTED_MODULE_2__["RegexConstant"].PASSWORD_REGEX)) {
            return {};
          } else {
            return {
              passErr: true,
              error: true
            };
          }
        };
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validateForm = this._formBuilder.group({
            contactNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.mobileNumber]],
            otp: [{
              value: '',
              disabled: true
            }],
            userType: ['']
          });
          this.resetForm = this._formBuilder.group({
            contactNo: [{
              value: '',
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.mobileNumber]],
            userType: [{
              value: '',
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.passwordPattern]]
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(value) {
          var _this14 = this;

          for (var key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
          }

          console.log("submit Form ", value);

          this._forgotPasswordService.forgetPassword(value).subscribe(function (responseData) {
            console.log("responseData login ", responseData);
            var resonseMessage = responseData.message;

            if (responseData.status == 200) {
              // this.isVisible = true;
              _this14.validateForm.controls['userType'].setValue(responseData.data.userType, {
                onlySelf: true
              });

              _this14.validateForm.controls['otp'].enable();

              _this14.isOtp = true;
              console.log("this.validateForm ++++++++++++", _this14.validateForm);
            } else {
              alert(resonseMessage);
            }
          });
        }
      }, {
        key: "verifyOTP",
        value: function verifyOTP(value) {
          var _this15 = this;

          console.log("verifyOTP login ", value);

          this._commonService.verifyOTP(value).subscribe(function (responseData) {
            console.log("responseData ------> ", responseData);
            var resonseMessage = responseData.message;

            if (responseData.status == 200) {
              _this15.isVisible = false;

              _this15.resetForm.controls['contactNo'].setValue(_this15.validateForm.value.contactNo, {
                onlySelf: true
              });

              _this15.resetForm.controls['userType'].setValue(_this15.validateForm.value.userType == 1 ? "User" : "Astrologer", {
                onlySelf: true
              });

              console.log("this.resetForm ----->", _this15.resetForm);
            } else {
              alert(resonseMessage);
            }
          });
        }
      }, {
        key: "resetUser",
        value: function resetUser(value) {
          var _this16 = this;

          value['contactNo'] = this.resetForm.controls.contactNo.value;
          value['userType'] = this.resetForm.controls.userType.value == "User" ? '1' : '2';
          console.log("resetUser is ", value, "And", this.resetForm);

          this._forgotPasswordService.resetUser(value).subscribe(function (responseData) {
            console.log("responseData ------> ", responseData);
            var resonseMessage = responseData.message;

            if (responseData.status == 200) {
              _this16.validateForm.reset();

              _this16.resetForm.reset();

              _this16.outputResetData.emit(true);
            } else {
              alert(resonseMessage);
            }
          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_forgot_password_service__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]));
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      outputs: {
        outputResetData: "outputResetData"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "form-wrapper"], ["name", "validateForm", "novalidate", "", 3, "formGroup", 4, "ngIf"], ["name", "resetForm", "novalidate", "", 3, "formGroup", 4, "ngIf"], ["name", "validateForm", "novalidate", "", 3, "formGroup"], [1, "form-field-width"], ["matInput", "", "formControlName", "contactNo", "minlength", "10", "maxlength", "10"], ["matSuffix", "", 1, "secondary-text"], [4, "ngIf"], [1, "form-field-width", "mt-2"], ["matInput", "", "formControlName", "otp"], ["mat-raised-button", "", "color", "primary", "class", "submit-button mt-3", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "class", "submit-button mt-3", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "submit-button", "mt-3", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 1, "submit-button", "mt-3", 3, "click"], ["name", "resetForm", "novalidate", "", 3, "formGroup"], ["matInput", "", "formControlName", "userType", "minlength", "10", "maxlength", "10"], ["matInput", "", "type", "password", "formControlName", "password"], ["mat-raised-button", "", "color", "primary", "class", "submit-button mt-5", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "submit-button", "mt-5", 3, "disabled", "click"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_form_1_Template, 18, 6, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotPasswordComponent_form_2_Template, 23, 7, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isVisible);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
      styles: [".form-wrapper[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.form-field-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL0M6XFxTYWlBc3Ryb1dvcmxkLTJcXHNhaUFzdHJvV29ybGRHaXRIdWJcXHNhaUFzdHJvV2ViQXBwL3NyY1xcYXBwXFxmb3Jnb3QtcGFzc3dvcmRcXGZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNBLFdBQUE7QUNDQSIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS13cmFwcGVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1maWVsZC13aWR0aHtcclxud2lkdGg6MTAwJTtcclxufVxyXG4iLCIuZm9ybS13cmFwcGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmZvcm0tZmllbGQtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _forgot_password_service__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordService"]
        }, {
          type: _shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }];
      }, {
        outputResetData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/forgot-password/forgot-password.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.service.ts ***!
    \************************************************************/

  /*! exports provided: ForgotPasswordService */

  /***/
  function srcAppForgotPasswordForgotPasswordServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordService", function () {
      return ForgotPasswordService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/constant/rest-url.constants */
    "./src/app/shared/constant/rest-url.constants.ts");
    /* harmony import */


    var _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/service/restApi/rest.service */
    "./src/app/shared/service/restApi/rest.service.ts");

    var ForgotPasswordService =
    /*#__PURE__*/
    function () {
      function ForgotPasswordService(restService) {
        _classCallCheck(this, ForgotPasswordService);

        this.restService = restService;
      }

      _createClass(ForgotPasswordService, [{
        key: "forgetPassword",
        value: function forgetPassword(data) {
          return this.restService.create(_shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].forgetPassword, data);
        }
      }, {
        key: "resetUser",
        value: function resetUser(data) {
          return this.restService.create(_shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].resetUser, data);
        }
      }]);

      return ForgotPasswordService;
    }();

    ForgotPasswordService.ɵfac = function ForgotPasswordService_Factory(t) {
      return new (t || ForgotPasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]));
    };

    ForgotPasswordService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ForgotPasswordService,
      factory: ForgotPasswordService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_constant_regex_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/constant/regex-constant */
    "./src/app/shared/constant/regex-constant.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/service/commonService/common.service */
    "./src/app/shared/service/commonService/common.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var _shared_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/service/firebase/firebase.service */
    "./src/app/shared/service/firebase/firebase.service.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../forgot-password/forgot-password.component */
    "./src/app/forgot-password/forgot-password.component.ts");

    function LoginComponent_form_3_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile number is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_3_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid mobile number! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_3_mat_error_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_3_mat_error_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid password! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " *minimum length should be 8 digit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " *must contain Numeric and Alpha characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_3_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r234);

          var ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r233.submitForm(ctx_r233.validateForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mobile Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_form_3_mat_error_7_Template, 2, 0, "mat-error", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_form_3_mat_error_8_Template, 2, 0, "mat-error", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "User");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Astrolloger");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Login type is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "vpn_key");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_form_3_mat_error_25_Template, 2, 0, "mat-error", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_form_3_mat_error_26_Template, 6, 0, "mat-error", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_3_Template_a_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r234);

          var ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r235.forgotPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Forgot Password? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " LOGIN ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r227.validateForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r227.validateForm.get("contactNo").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r227.validateForm.get("contactNo").hasError("required") && ctx_r227.validateForm.get("contactNo").hasError("mobileErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r227.validateForm.get("password").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r227.validateForm.get("password").hasError("required") && ctx_r227.validateForm.get("password").hasError("passErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r227.validateForm.invalid);
      }
    }

    function LoginComponent_div_4_app_forgot_password_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-forgot-password", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("outputResetData", function LoginComponent_div_4_app_forgot_password_1_Template_app_forgot_password_outputResetData_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r238);

          var ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r237.resetLogin($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_4_app_forgot_password_1_Template, 1, 0, "app-forgot-password", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r228.isVisible);
      }
    } // import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
    // import { SocialUser } from "angularx-social-login";


    var LoginComponent =
    /*#__PURE__*/
    function () {
      // user: SocialUser;
      // loggedIn: boolean;
      function LoginComponent(router, _commonService, _formBuilder, dialogRef, _loginService, firebaseService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this._commonService = _commonService;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this._loginService = _loginService;
        this.firebaseService = firebaseService;
        this.isVisible = false;
        this.isForgotPassVisible = false; // signUpSubmitForm(value: any){
        //   alert("Registered Successfuly")
        //   console.log("value User ++++++++ ",value)
        //   if(value) {
        //     this.message = "User registered and verified Successfully"
        //   } else {
        //     this.message = "User not verified, please try to register again"
        //   }
        //   // this.dialogRef.close(value);
        // }

        this.mobileNumber = function (control) {
          console.log("control.value ----->", control.value);

          if (!control.value) {
            return {
              required: true
            };
          } else if (control.value.match(_shared_constant_regex_constant__WEBPACK_IMPORTED_MODULE_2__["RegexConstant"].ONLY_NUMBER)) {
            return {};
          } else {
            return {
              mobileErr: true,
              error: true
            };
          }
        };

        this.passwordPattern = function (control) {
          console.log("passwordPattern ----->", control.value);

          if (!control.value) {
            return {
              required: true
            };
          } else if (control.value.match(_shared_constant_regex_constant__WEBPACK_IMPORTED_MODULE_2__["RegexConstant"].PASSWORD_REGEX)) {
            return {};
          } else {
            return {
              passErr: true,
              error: true
            };
          }
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validateForm = this._formBuilder.group({
            contactNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.mobileNumber]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.passwordPattern]],
            userType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.otpForm = this._formBuilder.group({
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }); //  this.authService.authState.subscribe((user) => {
          //   this.user = user;
          //   this.loggedIn = (user != null);
          // });
          // console.log("this.loggedIn ", this.loggedIn);
        }
      }, {
        key: "submitForm",
        value: function submitForm(value) {
          var _this17 = this;

          for (var key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
          }

          console.log("submit Form ", value); // this._route.navigate(['/profile']);

          this._loginService.login(value).subscribe(function (responseData) {
            console.log("responseData login ", responseData);
            var resonseMessage = responseData.message;
            var responseBody = responseData.data;

            if (responseData.status == 200) {
              // call firebase service on login
              var firebaseLoginReq = {
                email: responseBody.userData.email,
                password: responseBody.userData.contactNo,
                name: responseBody.userData.name
              };

              _this17.firebaseService.loginFirebase(firebaseLoginReq).then(function (firebaseResponse) {
                if (responseBody.userData.firebaseUserId !== firebaseResponse.id) {
                  var requestObj = {
                    userId: responseBody.userData.userId,
                    firebaseUserId: firebaseResponse.id
                  };

                  _this17._loginService.loginFirebase(requestObj).subscribe(function (response) {
                    if (response.data && response.data.firebaseUserId) {
                      console.log('firebase login successfully');
                    }
                  });
                }
              }); // call firebase servicet on login end
              // this.isVisible = true;


              _this17._commonService.tostMessage(resonseMessage);

              if (!responseBody.profileUpdated && typeof responseBody.profileUpdated != 'undefined') {
                console.log(responseBody, 'response body'); // this.firebaseService.loginFirebase()

                _this17.dialogRef.close(responseData.data);
              } else {
                _this17.dialogRef.close(responseData.data);
              }
            } else {
              _this17._commonService.tostMessage(resonseMessage);
            }
          });
        } // signInWithGoogle(): void {
        //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
        // }
        // signOut(): void {
        //   this.authService.signOut();
        // }

      }, {
        key: "otpSubmitForm",
        value: function otpSubmitForm(value) {
          this.dialogRef.close(value);
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          this.isVisible = true;
        }
      }, {
        key: "resetLogin",
        value: function resetLogin(event) {
          if (event) {
            this.isVisible = false;
          } else {
            this.isVisible = true;
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_6__["loginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 7,
      vars: 2,
      consts: [["mat-align-tabs", "center"], ["label", "Login"], [1, "form-wrapper"], ["name", "validateForm", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "otp-wrapper", 4, "ngIf"], ["label", "Sign Up"], ["name", "validateForm", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-field-width"], ["matInput", "", "formControlName", "contactNo", "minlength", "10", "maxlength", "10"], ["matSuffix", "", 1, "secondary-text"], [4, "ngIf"], [1, "form-field-width", "mt-2"], ["name", "userType", "formControlName", "userType"], ["value", "1"], ["value", "2"], ["matInput", "", "type", "password", "formControlName", "password"], [1, "d-flex", "mt-5", "justify-content-end"], ["href", "javascript:;", 1, "forgot-password", 3, "click"], ["mat-raised-button", "", "color", "primary", "aria-label", "LOGIN", 1, "submit-button", "mt-3", "mr-3", 3, "disabled"], ["mat-stroked-button", "", "color", "warn", "aria-label", "Cancel", 1, "submit-button", "mt-3", 3, "mat-dialog-close"], [1, "otp-wrapper"], [3, "outputResetData", 4, "ngIf"], [3, "outputResetData"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_form_3_Template, 34, 6, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-sign-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
        }
      },
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_17__["ForgotPasswordComponent"]],
      styles: [".form-wrapper[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.form-field-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  background-color: greenyellow;\n  color: #fff;\n}\n\nbutton.google[_ngcontent-%COMP%], button.facebook[_ngcontent-%COMP%] {\n  text-transform: none;\n  color: #000;\n  font-size: 13px;\n}\n\nbutton.google[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], button.facebook[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  margin: 0 8px 0 0;\n}\n\nbutton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20%;\n  padding-bottom: 5px;\n  padding-right: 10px;\n}\n\nbutton.google[_ngcontent-%COMP%] {\n  border: 1px solid #D73D32;\n  margin-bottom: 8px;\n}\n\nbutton.facebook[_ngcontent-%COMP%] {\n  background-color: #3f5c9a;\n}\n\n.register[_ngcontent-%COMP%] {\n  margin: 32px auto 24px auto;\n  width: 250px;\n  font-weight: 600;\n}\n\n.register[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n@media (max-width: 768px) {\n  .form-wrapper[_ngcontent-%COMP%] {\n    padding: 20px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFNhaUFzdHJvV29ybGQtMlxcc2FpQXN0cm9Xb3JsZEdpdEh1Ylxcc2FpQXN0cm9XZWJBcHAvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDQSxXQUFBO0FDQUE7O0FER0E7RUFDQyw2QkFBQTtFQUNBLFdBQUE7QUNBRDs7QUR3Q0U7RUFFSSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDdENOOztBRHdDTTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ3RDVjs7QUR5Q0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ3ZDSjs7QUQwQ0U7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FDeENOOztBRDJDRTtFQUNJLHlCQUFBO0FDekNOOztBRDZDQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDMUNGOztBRDRDRTtFQUNJLGlCQUFBO0FDMUNOOztBRG1EQTtFQUNFO0lBQ0UsaUJBQUE7RUNqREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkLXdpZHRoe1xyXG53aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uZm9ybS13cmFwcGVyIGgyIHtcclxuIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xyXG4gY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8vIC5zZXBhcmF0b3Ige1xyXG4vLyAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgIG1hcmdpbjogMjRweCBhdXRvO1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgIHdpZHRoOiAxMDBweDtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4vLyAgIC50ZXh0IHtcclxuLy8gICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbi8vICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgcGFkZGluZzogMCA4cHg7XHJcbi8vICAgICAgIHotaW5kZXg6IDk5OTk7XHJcblxyXG4vLyAgICAgICAmOmJlZm9yZSxcclxuLy8gICAgICAgJjphZnRlciB7XHJcbi8vICAgICAgICAgICBjb250ZW50OiAnJztcclxuLy8gICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbi8vICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgICB0b3A6IDEwcHg7XHJcbi8vICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgICY6YmVmb3JlIHtcclxuLy8gICAgICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICAmOmFmdGVyIHtcclxuLy8gICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbi8vICAgICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbmJ1dHRvbiB7XHJcblxyXG4gICYuZ29vZ2xlLFxyXG4gICYuZmFjZWJvb2sge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbiAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDhweCAwIDA7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJi5nb29nbGUge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDczRDMyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICAmLmZhY2Vib29rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA5MiwgMTU0KTtcclxuICB9XHJcbn1cclxuXHJcbi5yZWdpc3RlciB7XHJcbiAgbWFyZ2luOiAzMnB4IGF1dG8gMjRweCBhdXRvO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAudGV4dCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmxpbmsge1xyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuZm9ybS13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gIH1cclxufVxyXG4iLCIuZm9ybS13cmFwcGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmZvcm0tZmllbGQtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0td3JhcHBlciBoMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuYnV0dG9uLmdvb2dsZSwgYnV0dG9uLmZhY2Vib29rIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5idXR0b24uZ29vZ2xlIG1hdC1pY29uLCBidXR0b24uZmFjZWJvb2sgbWF0LWljb24ge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiAwIDhweCAwIDA7XG59XG5idXR0b24gaW1nIHtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbmJ1dHRvbi5nb29nbGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDczRDMyO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5idXR0b24uZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1YzlhO1xufVxuXG4ucmVnaXN0ZXIge1xuICBtYXJnaW46IDMycHggYXV0byAyNHB4IGF1dG87XG4gIHdpZHRoOiAyNTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5yZWdpc3RlciAudGV4dCB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
        }, {
          type: _login_service__WEBPACK_IMPORTED_MODULE_6__["loginService"]
        }, {
          type: _shared_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.service.ts":
  /*!****************************************!*\
    !*** ./src/app/login/login.service.ts ***!
    \****************************************/

  /*! exports provided: loginService */

  /***/
  function srcAppLoginLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginService", function () {
      return loginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/constant/rest-url.constants */
    "./src/app/shared/constant/rest-url.constants.ts");
    /* harmony import */


    var _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/service/restApi/rest.service */
    "./src/app/shared/service/restApi/rest.service.ts");

    var loginService =
    /*#__PURE__*/
    function () {
      function loginService(restService) {
        _classCallCheck(this, loginService);

        this.restService = restService;
      }

      _createClass(loginService, [{
        key: "login",
        value: function login(data) {
          return this.restService.create(_shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].login, data);
        }
      }, {
        key: "loginFirebase",
        value: function loginFirebase(data) {
          return this.restService.create(_shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].loginFirebase, data);
        }
      }]);

      return loginService;
    }();

    loginService.ɵfac = function loginService_Factory(t) {
      return new (t || loginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]));
    };

    loginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: loginService,
      factory: loginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](loginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-module.ts":
  /*!************************************!*\
    !*** ./src/app/material-module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ngx-material-file-input */
    "./node_modules/ngx-material-file-input/__ivy_ngcc__/fesm2015/ngx-material-file-input.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_43__["MaterialFileInputModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_43__["MaterialFileInputModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_43__["MaterialFileInputModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/observables/behaviourSubject.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/observables/behaviourSubject.service.ts ***!
    \*********************************************************/

  /*! exports provided: ObservableDataService */

  /***/
  function srcAppObservablesBehaviourSubjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObservableDataService", function () {
      return ObservableDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ObservableDataService =
    /*#__PURE__*/
    function () {
      function ObservableDataService() {
        _classCallCheck(this, ObservableDataService);

        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.checkOperationSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.astroDetail = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getMessage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.checkUserData = this.messageSource.asObservable();
        this.checkUserOperationFlag = this.checkOperationSource.asObservable();
        this.observedAstroDetail = this.astroDetail.asObservable();
      }

      _createClass(ObservableDataService, [{
        key: "checkUser",
        value: function checkUser(message) {
          this.messageSource.next(message);
        }
      }, {
        key: "checkUserOperation",
        value: function checkUserOperation(message) {
          this.checkOperationSource.next(message);
        }
      }, {
        key: "passAstroDetails",
        value: function passAstroDetails(message) {
          this.astroDetail.next(message);
        }
      }, {
        key: "messageData",
        value: function messageData(message) {
          this.getMessage.next(message);
        }
      }]);

      return ObservableDataService;
    }();

    ObservableDataService.ɵfac = function ObservableDataService_Factory(t) {
      return new (t || ObservableDataService)();
    };

    ObservableDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ObservableDataService,
      factory: ObservableDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObservableDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/constant/regex-constant.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/constant/regex-constant.ts ***!
    \***************************************************/

  /*! exports provided: RegexConstant */

  /***/
  function srcAppSharedConstantRegexConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegexConstant", function () {
      return RegexConstant;
    });

    var RegexConstant =
    /*#__PURE__*/
    function () {
      function RegexConstant() {
        _classCallCheck(this, RegexConstant);
      }

      _createClass(RegexConstant, null, [{
        key: "PASSWORD_REGEX",
        get: function get() {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        }
      }, {
        key: "ONLY_NUMBER",
        get: function get() {
          return /^[0-9]{10}$/;
        }
      }, {
        key: "ONLY_DIGITS",
        get: function get() {
          return /^[0-9]*$/;
        }
      }, {
        key: "EMAIL_REGEX",
        get: function get() {
          return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        }
      }, {
        key: "TWINTYFOUR_HOURS_REGEX",
        get: function get() {
          return /^([0-1]{1}[0-9]|2[0-3]):[0-5][0-9]$/;
        }
      }]);

      return RegexConstant;
    }();
    /***/

  },

  /***/
  "./src/app/shared/constant/rest-url.constants.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/constant/rest-url.constants.ts ***!
    \*******************************************************/

  /*! exports provided: RestUrl */

  /***/
  function srcAppSharedConstantRestUrlConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestUrl", function () {
      return RestUrl;
    });

    var RestUrl =
    /*#__PURE__*/
    function () {
      function RestUrl() {
        _classCallCheck(this, RestUrl);
      }

      _createClass(RestUrl, null, [{
        key: "login",
        get: function get() {
          return "/users/login";
        }
      }, {
        key: "signUp",
        get: function get() {
          return "/users/register";
        }
      }, {
        key: "verifyOTP",
        get: function get() {
          return "/users/verifyotp";
        }
      }, {
        key: "forgetPassword",
        get: function get() {
          return "/users/forgetPwd";
        }
      }, {
        key: "resetUser",
        get: function get() {
          return '/users/resetPwd';
        }
      }, {
        key: "astroCreateProfile",
        get: function get() {
          return '/users/updateprofile';
        }
      }, {
        key: "getAstroListingApi",
        get: function get() {
          return '/users/getastrologerslist';
        } // public static get getAstroListingApi(): string { return '/users/listOfAstrologers'; }

      }, {
        key: "loginFirebase",
        get: function get() {
          return '/users/firebaseId';
        }
      }, {
        key: "getAstro",
        get: function get() {
          return '/users/listOfAstrologers';
        }
      }, {
        key: "makeCall",
        get: function get() {
          return '/users/call';
        }
      }, {
        key: "submitReport",
        get: function get() {
          return '/users/sendreport';
        }
      }, {
        key: "submitQAReport",
        get: function get() {
          return '/users/askquestion';
        } //Admin Dashboard

      }, {
        key: "getReportByAstroId",
        get: function get() {
          return '/users/getreports';
        }
      }, {
        key: "getQuestionByAstroId",
        get: function get() {
          return '/users/getquestions';
        }
      }, {
        key: "replyReports",
        get: function get() {
          return '/users/respondReport';
        } // payment

      }, {
        key: "placeOrder",
        get: function get() {
          return '/place/order';
        }
      }, {
        key: "walletDetail",
        get: function get() {
          return '/get/wallet';
        }
      }, {
        key: "verifySignature",
        get: function get() {
          return '/rayzorpay/verify/signature';
        }
      }, {
        key: "updateWalletInfo",
        get: function get() {
          return '/update/wallet';
        }
      }, {
        key: "deductBalance",
        get: function get() {
          return '/users/deductbalance';
        } //Filters

      }, {
        key: "getAstroByFilterSkill",
        get: function get() {
          return '/users/filter';
        }
      }]);

      return RestUrl;
    }();
    /***/

  },

  /***/
  "./src/app/shared/service/authentication/authentication.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/service/authentication/authentication.service.ts ***!
    \*************************************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppSharedServiceAuthenticationAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../restApi/rest.service */
    "./src/app/shared/service/restApi/rest.service.ts"); // import { RestUrl } from '../../constant/rest-url.constants';


    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http, restService) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.restService = restService;
      } //   login(data) {
      //     return this.restService.create(RestUrl.login, data);
      //  }


      _createClass(AuthenticationService, [{
        key: "getAuthenticatedToken",
        value: function getAuthenticatedToken() {
          var token = JSON.parse(JSON.stringify(sessionStorage.getItem('token')));
          console.log("get token console ", token);
          return token;
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return JSON.parse(sessionStorage.getItem('userData'));
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/service/commonService/common.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/service/commonService/common.service.ts ***!
    \****************************************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppSharedServiceCommonServiceCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../constant/rest-url.constants */
    "./src/app/shared/constant/rest-url.constants.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _restApi_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../restApi/rest.service */
    "./src/app/shared/service/restApi/rest.service.ts");
    /* harmony import */


    var _restApi_profileUpdate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../restApi/profileUpdate.service */
    "./src/app/shared/service/restApi/profileUpdate.service.ts");

    var CommonService =
    /*#__PURE__*/
    function () {
      function CommonService(_snackBar, restService, ipAddressService) {
        _classCallCheck(this, CommonService);

        this._snackBar = _snackBar;
        this.restService = restService;
        this.ipAddressService = ipAddressService;
      }

      _createClass(CommonService, [{
        key: "tostMessage",
        value: function tostMessage(message) {
          this._snackBar.open(message, 'close', {
            duration: 10 * 1000,
            horizontalPosition: "center",
            verticalPosition: "top"
          });
        } // getOTP(data){
        //   console.log("data in sign up", data)
        //   return this.restService.create(RestUrl.verifyOTP, data)
        // }

      }, {
        key: "verifyOTP",
        value: function verifyOTP(data) {
          console.log("data in sign up", data);
          return this.restService.create(_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].verifyOTP, data);
        }
      }, {
        key: "makeCall",
        value: function makeCall(data) {
          return this.restService.create(_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].makeCall, data);
        } // getIPAddress(): Observable<any> {
        //   return this.ipAddressService.getIPAddress("http://api.ipify.org?format=json");
        // }

      }, {
        key: "getIPAddress",
        value: function getIPAddress() {
          return this.restService.getIPAddress("https://extreme-ip-lookup.com/json/?callback");
        }
      }]);

      return CommonService;
    }();

    CommonService.ɵfac = function CommonService_Factory(t) {
      return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_restApi_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_restApi_profileUpdate_service__WEBPACK_IMPORTED_MODULE_4__["ProfileUpdateService"]));
    };

    CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CommonService,
      factory: CommonService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }, {
          type: _restApi_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
        }, {
          type: _restApi_profileUpdate_service__WEBPACK_IMPORTED_MODULE_4__["ProfileUpdateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/service/firebase/firebase.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/service/firebase/firebase.service.ts ***!
    \*************************************************************/

  /*! exports provided: FirebaseService */

  /***/
  function srcAppSharedServiceFirebaseFirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
      return FirebaseService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.esm.js");
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/database */
    "./node_modules/firebase/database/dist/index.esm.js");
    /* harmony import */


    var _observables_behaviourSubject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../observables/behaviourSubject.service */
    "./src/app/observables/behaviourSubject.service.ts");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../login/login.service */
    "./src/app/login/login.service.ts");

    var FirebaseService =
    /*#__PURE__*/
    function () {
      function FirebaseService(observableService, _loginService) {
        _classCallCheck(this, FirebaseService);

        this.observableService = observableService;
        this._loginService = _loginService;
        this.allUserList = [];
        console.log(firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"], 'firebase');

        if (sessionStorage.getItem('userFirebaseData')) {
          this.getFirebaseUserData = JSON.parse(sessionStorage.getItem('userFirebaseData'));
        }

        this.getAllUserList();
        this.messageListener();
      }

      _createClass(FirebaseService, [{
        key: "loginFirebase",
        value: function loginFirebase(data) {
          var _this18 = this;

          var promise = new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithEmailAndPassword(data.email, data.password).then(function (response) {
              console.log(response, 'response');

              if (response.user.uid) {
                firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref().child('Users').child(response.user.uid).once('value', function (snapShot) {
                  console.log(snapShot.val(), 'user data'); // return snapShot.val();

                  sessionStorage.setItem('userFirebaseData', JSON.stringify(snapShot.val()));
                  resolve(snapShot.val());
                });
              }
            }, function (error) {
              _this18.signInFirebase(data);
            });
          });
          return promise;
        }
      }, {
        key: "signInFirebase",
        value: function signInFirebase(data) {
          var _this19 = this;

          var promise = new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().createUserWithEmailAndPassword(data.email, data.password).then(function (response) {
              var userData = {
                id: response.user.uid,
                imageURL: '',
                status: '',
                username: data.name,
                email: data.email,
                contactNo: data.password
              };
              console.log(response.user.uid, 'local id');
              firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref().child('Users').child(response.user.uid).set(userData).then(function (response) {
                console.log(response);
                sessionStorage.setItem('userFirebaseData', JSON.stringify(userData));
                resolve(userData); // if session storage userId

                if (sessionStorage.getItem('userFirebaseData')) {
                  var firebaseData = JSON.parse(sessionStorage.getItem('userFirebaseData'));

                  var _userData = JSON.parse(sessionStorage.getItem('userData'));

                  if (firebaseData && _userData) {
                    var requestObj = {
                      userId: _userData.userId,
                      firebaseUserId: firebaseData.id
                    };

                    _this19._loginService.loginFirebase(requestObj).subscribe(function (response) {
                      if (response.data && response.data.firebaseUserId) {
                        console.log('firebase login successfully');
                      }
                    });
                  }
                } // if session storage userId end

              });
            });
          });
          return promise;
        }
      }, {
        key: "sendMessages",
        value: function sendMessages(message) {
          var _this20 = this;

          if (sessionStorage.getItem('userFirebaseData')) {
            this.getFirebaseUserData = JSON.parse(sessionStorage.getItem('userFirebaseData'));
          }

          var promise = new Promise(function (resolve, reject) {
            var sender = _this20.getFirebaseUserData.id;
            var receiver = sessionStorage.getItem('receiverId');
            var convId;

            if (sender > receiver) {
              convId = receiver + '-' + sender;
            } else {
              convId = sender + '-' + receiver;
            }

            var reqObj = {
              sender: _this20.getFirebaseUserData.id,
              receiver: sessionStorage.getItem('receiverId'),
              isseen: false,
              message: message
            };
            var key = firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref().child('Chats').push().key;

            if (convId && sender && receiver) {
              firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref().child('Chats').child(convId).child(key).set(reqObj).then(function (sendVal) {
                console.log(sendVal, 'send value');
                resolve(reqObj);
              });
            }
          });
          return promise;
        }
      }, {
        key: "getAllMessages",
        value: function getAllMessages() {
          var _this21 = this;

          if (sessionStorage.getItem('userFirebaseData')) {
            this.getFirebaseUserData = JSON.parse(sessionStorage.getItem('userFirebaseData'));
          }

          var promise = new Promise(function (resolve, reject) {
            var sender = _this21.getFirebaseUserData.id;
            var receiver = sessionStorage.getItem('receiverId');
            var convId;

            if (sender > receiver) {
              convId = receiver + '-' + sender;
            } else {
              convId = sender + '-' + receiver;
            }

            firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('Chats').child(convId).once('value', function (snapShot) {
              console.log(snapShot.val(), 'value');
              var chatList = [];

              if (snapShot.val()) {
                Object.values(snapShot.val()).forEach(function (list) {
                  if (list) {
                    chatList.push(list);
                  }
                }); // return chatList;

                resolve(chatList);
              }
            });
          });
          return promise;
        }
      }, {
        key: "messageListener",
        value: function messageListener() {
          var _this22 = this;

          if (sessionStorage.getItem('userFirebaseData')) {
            this.getFirebaseUserData = JSON.parse(sessionStorage.getItem('userFirebaseData'));
          }

          firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref().child('Chats').limitToLast(10).on('child_added', function (snapShot) {
            var sender = _this22.getFirebaseUserData ? _this22.getFirebaseUserData.id : null;
            var receiver = sessionStorage.getItem('receiverId');
            var convId;

            if (sender > receiver) {
              convId = receiver + '-' + sender;
            } else {
              convId = sender + '-' + receiver;
            }

            if (snapShot.key == convId) {
              var value = Object.values(snapShot.val())[Object.values(snapShot.val()).length - 1];

              _this22.observableService.messageData(value);

              return value;
            }
          });
          firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref().child('Chats').on('child_changed', function (snapShot) {
            if (snapShot.key) {
              var sender = _this22.getFirebaseUserData ? _this22.getFirebaseUserData.id : null;
              var receiver = sessionStorage.getItem('receiverId');
              var convId;

              if (sender > receiver) {
                convId = receiver + '-' + sender;
              } else {
                convId = sender + '-' + receiver;
              }

              if (snapShot.key == convId) {
                var value = Object.values(snapShot.val())[Object.values(snapShot.val()).length - 1];

                _this22.observableService.messageData(value);

                return value;
              }
            }
          });
        } // get chat list

      }, {
        key: "getChatList",
        value: function getChatList() {
          var _this23 = this;

          var promise = new Promise(function (resolve, reject) {
            if (sessionStorage.getItem('userFirebaseData')) {
              _this23.getFirebaseUserData = JSON.parse(sessionStorage.getItem('userFirebaseData'));
            }

            var chatList = [];
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('Chats').once('value', function (snapShot) {
              var allConversationList = snapShot.val();

              if (allConversationList) {
                for (var key in allConversationList) {
                  if (key.includes(_this23.getFirebaseUserData.id)) {
                    (function () {
                      var userData = void 0;
                      var lastConversationDetail = Object.values(allConversationList[key])[Object.values(allConversationList[key]).length - 1]; // get user data on login basis 

                      if (_this23.getFirebaseUserData && _this23.getFirebaseUserData.id == lastConversationDetail['sender']) {
                        userData = _this23.allUserList.find(function (list) {
                          return list.id == lastConversationDetail['receiver'];
                        });
                      } else {
                        userData = _this23.allUserList.find(function (list) {
                          return list.id == lastConversationDetail['sender'];
                        });
                      } // get user data end


                      var createChatListObj = {};
                      createChatListObj['lastMessage'] = lastConversationDetail['message'];
                      createChatListObj['name'] = userData ? userData.username : null;
                      createChatListObj['id'] = userData ? userData.id : null;
                      createChatListObj['imageURL'] = userData ? userData.imageURL : null;
                      createChatListObj['shortName'] = userData ? _this23.getShortName(userData.username) : null;
                      createChatListObj['color'] = Math.floor(Math.random() * 16777215).toString(16);
                      chatList.push(createChatListObj);
                    })();
                  }
                }

                resolve(chatList);
              }
            });
          });
          return promise;
        } // get chat list end

      }, {
        key: "getAllUserList",
        value: function getAllUserList() {
          var _this24 = this;

          console.log(firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"], 'firebase');
          firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('Users').once('value', function (snapShot) {
            var userList = snapShot.val();

            if (userList) {
              Object.values(snapShot.val()).forEach(function (list) {
                return _this24.allUserList.push(list);
              });
            }
          });
        } // short name

      }, {
        key: "getShortName",
        value: function getShortName(name) {
          if (name) {
            var namelist = name.split(' ');

            if (namelist && namelist.length > 1) {
              return namelist[0].charAt(0) + namelist[1].charAt(0);
            } else {
              return namelist[0].charAt(0);
            }
          }
        }
      }]);

      return FirebaseService;
    }();

    FirebaseService.ɵfac = function FirebaseService_Factory(t) {
      return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_observables_behaviourSubject_service__WEBPACK_IMPORTED_MODULE_4__["ObservableDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_login_service__WEBPACK_IMPORTED_MODULE_5__["loginService"]));
    };

    FirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FirebaseService,
      factory: FirebaseService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _observables_behaviourSubject_service__WEBPACK_IMPORTED_MODULE_4__["ObservableDataService"]
        }, {
          type: _login_login_service__WEBPACK_IMPORTED_MODULE_5__["loginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/service/http/http-intercepter-basic-auth.service.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/service/http/http-intercepter-basic-auth.service.ts ***!
    \****************************************************************************/

  /*! exports provided: HttpIntercepterBasicAuthService */

  /***/
  function srcAppSharedServiceHttpHttpIntercepterBasicAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpIntercepterBasicAuthService", function () {
      return HttpIntercepterBasicAuthService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _commonService_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../commonService/common.service */
    "./src/app/shared/service/commonService/common.service.ts");
    /* harmony import */


    var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../authentication/authentication.service */
    "./src/app/shared/service/authentication/authentication.service.ts");

    var HttpIntercepterBasicAuthService =
    /*#__PURE__*/
    function () {
      function HttpIntercepterBasicAuthService(_commonService, basicAuthenticationService) {
        _classCallCheck(this, HttpIntercepterBasicAuthService);

        this._commonService = _commonService;
        this.basicAuthenticationService = basicAuthenticationService;
      }

      _createClass(HttpIntercepterBasicAuthService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this25 = this;

          var basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
          console.log("basicAuthHeaderString +++++++++++++ ", basicAuthHeaderString);

          if (basicAuthHeaderString) {
            console.log("if condition");
            request = request.clone({
              setHeaders: {
                'Authorization': basicAuthHeaderString,
                'Content-Type': 'application/json'
              }
            });
          } else {
            console.log("else condition");
            request = request.clone({
              setHeaders: {
                'Content-Type': 'application/json'
              }
            });
          }

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            return _this25.handleResponse(request, event);
          }, function (error) {
            return _this25.handleError(request, error);
          }));
        }
      }, {
        key: "handleResponse",
        value: function handleResponse(req, event) {
          if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
            if (event.headers.get('Authorization')) {
              sessionStorage.setItem('token', event.headers.get('Authorization'));
            }
          }
        }
      }, {
        key: "handleError",
        value: function handleError(req, error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: ".concat(error.error.message);
          } else {
            // server-side error
            // this._commonService.tostMessage(errorMessage)
            errorMessage = "Error Code: ".concat(error.error.status, "\nMessage: ").concat(error.error.message);
          }

          this._commonService.tostMessage(errorMessage);

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage); //   if (event instanceof HttpErrorResponse) {
          //       if(event.headers.get('Authorization')){
          //       //  console.log('handleError',event.headers.get('Authorization'));
          //           sessionStorage.setItem('token', event.headers.get('Authorization'));
          //       }
          // }
        }
      }]);

      return HttpIntercepterBasicAuthService;
    }();

    HttpIntercepterBasicAuthService.ɵfac = function HttpIntercepterBasicAuthService_Factory(t) {
      return new (t || HttpIntercepterBasicAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_commonService_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]));
    };

    HttpIntercepterBasicAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpIntercepterBasicAuthService,
      factory: HttpIntercepterBasicAuthService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpIntercepterBasicAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _commonService_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }, {
          type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/service/http/loader-interceptor.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/service/http/loader-interceptor.service.ts ***!
    \*******************************************************************/

  /*! exports provided: LoaderInterceptorService */

  /***/
  function srcAppSharedServiceHttpLoaderInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderInterceptorService", function () {
      return LoaderInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../loader/loader.service */
    "./src/app/shared/service/loader/loader.service.ts");

    var LoaderInterceptorService =
    /*#__PURE__*/
    function () {
      function LoaderInterceptorService(loaderService) {
        _classCallCheck(this, LoaderInterceptorService);

        this.loaderService = loaderService;
      }

      _createClass(LoaderInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this26 = this;

          //  console.log('HttpRequestHttpRequest');
          this.showLoader();
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
              _this26.onEnd();
            }
          }, function (err) {
            _this26.onEnd();
          }));
        }
      }, {
        key: "onEnd",
        value: function onEnd() {
          this.hideLoader();
        }
      }, {
        key: "showLoader",
        value: function showLoader() {
          this.loaderService.show();
        }
      }, {
        key: "hideLoader",
        value: function hideLoader() {
          this.loaderService.hide();
        }
      }]);

      return LoaderInterceptorService;
    }();

    LoaderInterceptorService.ɵfac = function LoaderInterceptorService_Factory(t) {
      return new (t || LoaderInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]));
    };

    LoaderInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoaderInterceptorService,
      factory: LoaderInterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/service/loader/loader.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/service/loader/loader.service.ts ***!
    \*********************************************************/

  /*! exports provided: LoaderService */

  /***/
  function srcAppSharedServiceLoaderLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoaderService =
    /*#__PURE__*/
    function () {
      function LoaderService() {
        _classCallCheck(this, LoaderService);

        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
      }

      _createClass(LoaderService, [{
        key: "show",
        value: function show() {
          this.loaderSubject.next(true); // console.log("this.loaderSubject show ",this.loaderSubject.subscribe(res=>{
          //   console.log("ressssss",res);
          // }))
        }
      }, {
        key: "hide",
        value: function hide() {
          this.loaderSubject.next(false);
        }
      }, {
        key: "loaderState",
        get: function get() {
          return this.loaderSubject.asObservable();
        }
      }]);

      return LoaderService;
    }();

    LoaderService.ɵfac = function LoaderService_Factory(t) {
      return new (t || LoaderService)();
    };

    LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoaderService,
      factory: LoaderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/service/payment/payment.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/service/payment/payment.service.ts ***!
    \***********************************************************/

  /*! exports provided: PaymentService */

  /***/
  function srcAppSharedServicePaymentPaymentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentService", function () {
      return PaymentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../constant/rest-url.constants */
    "./src/app/shared/constant/rest-url.constants.ts");
    /* harmony import */


    var _restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../restApi/rest.service */
    "./src/app/shared/service/restApi/rest.service.ts");

    var PaymentService =
    /*#__PURE__*/
    function () {
      function PaymentService(restService) {
        _classCallCheck(this, PaymentService);

        this.restService = restService;
      }

      _createClass(PaymentService, [{
        key: "orderPlace",
        value: function orderPlace(data) {
          return this.restService.createPayment(_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].placeOrder, data);
        }
      }, {
        key: "walletInfo",
        value: function walletInfo(data) {
          return this.restService.getPayment(_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].walletDetail, data);
        }
      }, {
        key: "signatureVerify",
        value: function signatureVerify(data) {
          return this.restService.getPayment(_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].verifySignature, data);
        }
      }, {
        key: "updateWalletInfo",
        value: function updateWalletInfo(data) {
          return this.restService.patch(_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].updateWalletInfo, data);
        }
      }]);

      return PaymentService;
    }();

    PaymentService.ɵfac = function PaymentService_Factory(t) {
      return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]));
    };

    PaymentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PaymentService,
      factory: PaymentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/service/restApi/profileUpdate.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/service/restApi/profileUpdate.service.ts ***!
    \*****************************************************************/

  /*! exports provided: ProfileUpdateService */

  /***/
  function srcAppSharedServiceRestApiProfileUpdateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileUpdateService", function () {
      return ProfileUpdateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../authentication/authentication.service */
    "./src/app/shared/service/authentication/authentication.service.ts"); // import { callBackendApi } from '../../constant/rest-url.constants';


    var ProfileUpdateService =
    /*#__PURE__*/
    function () {
      function ProfileUpdateService(http, handler, _authenticationService) {
        var _this27 = this;

        _classCallCheck(this, ProfileUpdateService);

        this.http = http;
        this._authenticationService = _authenticationService;

        this.createProfile = function (route, body) {
          console.log("route", route, " createProfile body", body);
          var setHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': _this27.getAuthenticatedToken
          });
          return _this27.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAddress + route, body, {
            headers: setHeaders
          });
        };

        this.createFormData = function (route, body) {
          console.log("route", route, " createProfile body", body);
          var setHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': _this27.getAuthenticatedToken
          });
          return _this27.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAddress + route, body, {
            headers: setHeaders
          }); //   .pipe(
          //     catchError(this.handleError)
          // );
        };

        this.getIPAddress = function (route) {
          console.log("**GET getIPAddress **", "route", route);
          var setHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          }); // return this.http.get(route,{headers : setHeaders});

          return _this27.http.get(route, {
            headers: setHeaders,
            responseType: 'json'
          });
        };

        this.http = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](handler);
        this.getAuthenticatedToken = this._authenticationService.getAuthenticatedToken();
      }

      _createClass(ProfileUpdateService, [{
        key: "handleError",
        value: function handleError(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: ".concat(error.error.message);
            alert("Client Side Error " + errorMessage);
          } else {
            // server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
            alert("Server Side Error " + errorMessage);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
      }]);

      return ProfileUpdateService;
    }();

    ProfileUpdateService.ɵfac = function ProfileUpdateService_Factory(t) {
      return new (t || ProfileUpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
    };

    ProfileUpdateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProfileUpdateService,
      factory: ProfileUpdateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileUpdateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"]
        }, {
          type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/service/restApi/rest.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/service/restApi/rest.service.ts ***!
    \********************************************************/

  /*! exports provided: RestService */

  /***/
  function srcAppSharedServiceRestApiRestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestService", function () {
      return RestService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // import { callBackendApi } from '../../constant/rest-url.constants';


    var RestService =
    /*#__PURE__*/
    function () {
      function RestService(http) {
        var _this28 = this;

        _classCallCheck(this, RestService);

        this.http = http;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.checkUserData = this.messageSource.asObservable();

        this.create = function (route, body) {
          console.log("route", route, "body", body);
          return _this28.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlAddress + route, body);
        };

        this.get = function (route) {
          console.log("**GET**", "route", route);
          return _this28.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlAddress + route);
        };

        this.getIPAddress = function (route) {
          console.log("**GET getIPAddress **", "route", route);
          return _this28.http.get(route);
        };

        this.createPayment = function (route, body) {
          console.log("route", route, "body", body);
          return _this28.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].paymentUrlAddress + route, body);
        };

        this.getPayment = function (route, headerParam) {
          return _this28.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].paymentUrlAddress + route, {
            params: headerParam
          });
        };

        this.patch = function (route, headerParam) {
          console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].paymentUrlAddress + route, 'url');
          return _this28.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].paymentUrlAddress + route, {}, {
            params: headerParam
          });
        };
      }

      _createClass(RestService, [{
        key: "checkUser",
        value: function checkUser(message) {
          this.messageSource.next(message);
        }
      }]);

      return RestService;
    }();

    RestService.ɵfac = function RestService_Factory(t) {
      return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    RestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RestService,
      factory: RestService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sign-up/sign-up.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sign-up/sign-up.component.ts ***!
    \**********************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_constant_regex_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/constant/regex-constant */
    "./src/app/shared/constant/regex-constant.ts");
    /* harmony import */


    var _sign_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-up.service */
    "./src/app/sign-up/sign-up.service.ts");
    /* harmony import */


    var _shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/service/commonService/common.service */
    "./src/app/shared/service/commonService/common.service.ts");
    /* harmony import */


    var _shared_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/service/firebase/firebase.service */
    "./src/app/shared/service/firebase/firebase.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    function SignUpComponent_form_3_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login type is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_3_mat_error_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Country Code is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_3_mat_error_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile number is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_3_mat_error_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid mobile number! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_3_mat_error_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_3_mat_error_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_3_mat_error_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_3_mat_error_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Please enter a valid password! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " *minimum length should be 8 digit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " *must contain Numeric and Alpha characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_form_3_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r291);

          var ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r290.submitForm(ctx_r290.signUpValidateForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Full Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "account_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "User");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Astrolloger");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SignUpComponent_form_3_mat_error_17_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Select Country Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "+1 (USA)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "+886 (Taiwan)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "+91 (India)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SignUpComponent_form_3_mat_error_28_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Mobile Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SignUpComponent_form_3_mat_error_35_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SignUpComponent_form_3_mat_error_36_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "mail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SignUpComponent_form_3_mat_error_43_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, SignUpComponent_form_3_mat_error_44_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "vpn_key");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, SignUpComponent_form_3_mat_error_51_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, SignUpComponent_form_3_mat_error_52_Template, 6, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Sign Up ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r280.signUpValidateForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r280.signUpValidateForm.get("userType").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r280.signUpValidateForm.get("countryCode").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r280.signUpValidateForm.get("contactNo").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r280.signUpValidateForm.get("contactNo").hasError("required") && ctx_r280.signUpValidateForm.get("contactNo").hasError("mobileErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r280.signUpValidateForm.get("email").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r280.signUpValidateForm.get("email").hasError("email"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r280.signUpValidateForm.get("password").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r280.signUpValidateForm.get("password").hasError("required") && ctx_r280.signUpValidateForm.get("password").hasError("passErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r280.signUpValidateForm.invalid);
      }
    }

    function SignUpComponent_div_4_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " OTP is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_div_4_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r294);

          var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r293.otpSubmitForm(ctx_r293.otpForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "OTP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignUpComponent_div_4_mat_error_8_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Submit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r281.otpForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r281.otpForm.get("otp").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r281.otpForm.invalid);
      }
    }

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(_formBuilder, _signUpService, _commonService, firebaseService) {
        _classCallCheck(this, SignUpComponent);

        this._formBuilder = _formBuilder;
        this._signUpService = _signUpService;
        this._commonService = _commonService;
        this.firebaseService = firebaseService;
        this.isVisible = false;
        this.outputSignUpData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.passwordPattern = function (control) {
          console.log("passwordPattern ----->", control.value);

          if (!control.value) {
            return {
              required: true
            };
          } else if (control.value.match(_shared_constant_regex_constant__WEBPACK_IMPORTED_MODULE_2__["RegexConstant"].PASSWORD_REGEX)) {
            return {};
          } else {
            return {
              passErr: true,
              error: true
            };
          }
        };

        this.mobileNumber = function (control) {
          console.log("control.value ----->", control.value);

          if (!control.value) {
            return {
              required: true
            };
          } else if (control.value.match(_shared_constant_regex_constant__WEBPACK_IMPORTED_MODULE_2__["RegexConstant"].ONLY_NUMBER)) {
            return {};
          } else {
            return {
              mobileErr: true,
              error: true
            };
          }
        };
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signUpValidateForm = this._formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            countryCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            contactNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.mobileNumber]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.passwordPattern]],
            userType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
          this.otpForm = this._formBuilder.group({
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(value) {
          var _this29 = this;

          for (var key in this.signUpValidateForm.controls) {
            this.signUpValidateForm.controls[key].markAsDirty();
            this.signUpValidateForm.controls[key].updateValueAndValidity();
          }

          console.log("submit Form ", value);

          this._signUpService.signUp(value).subscribe(function (responseData) {
            console.log("responseData login ", responseData); // responseData.status = 200;

            var resonseMessage = responseData.message;

            if (responseData.status == 200) {
              _this29.isVisible = true; // fire base register

              var firebaseLoginReq = {
                email: _this29.signUpValidateForm.value.email,
                password: _this29.signUpValidateForm.value.contactNo,
                name: _this29.signUpValidateForm.value.name
              };

              _this29.firebaseService.signInFirebase(firebaseLoginReq); // fire base register end

            } else {
              _this29._commonService.tostMessage(resonseMessage);
            }
          });
        }
      }, {
        key: "otpSubmitForm",
        value: function otpSubmitForm(value) {
          var _this30 = this;

          console.log("submit Form ", value);
          var requestData = {
            contactNo: this.signUpValidateForm.value.contactNo,
            otp: value.otp,
            userType: this.signUpValidateForm.value.userType
          };

          this._commonService.verifyOTP(requestData).subscribe(function (responseData) {
            console.log("responseData login ", responseData);
            responseData.status = 200;
            var resonseMessage = responseData.message;

            if (responseData.status == 200) {
              _this30._commonService.tostMessage(resonseMessage);

              _this30.isVisible = false;
              _this30.message = "User registered and verified Successfully, Please Login!";

              _this30.signUpValidateForm.reset(); // this.outputSignUpData.emit(true);

            } else {
              _this30._commonService.tostMessage(resonseMessage);

              _this30.message = "OTP invalid, please resend your OTP!";

              _this30.signUpValidateForm.reset(); // this.outputSignUpData.emit(false);

            }
          }); // this.dialogRef.close(value);

        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
      return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sign_up_service__WEBPACK_IMPORTED_MODULE_3__["signUpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]));
    };

    SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignUpComponent,
      selectors: [["app-sign-up"]],
      outputs: {
        outputSignUpData: "outputSignUpData"
      },
      decls: 5,
      vars: 3,
      consts: [[1, "form-wrapper"], ["name", "validateForm", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "otp-wrapper", 4, "ngIf"], ["name", "validateForm", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-field-width"], ["matInput", "", "formControlName", "name"], ["matSuffix", "", 1, "secondary-text"], [1, "form-field-width", "mt-2"], ["name", "userType", "formControlName", "userType"], ["value", "1"], ["value", "2"], [4, "ngIf"], ["name", "countryCode", "formControlName", "countryCode"], ["value", "+1"], ["value", "+886"], ["value", "+91"], ["matInput", "", "formControlName", "contactNo"], ["matInput", "", "formControlName", "email"], ["matInput", "", "type", "password", "formControlName", "password"], ["mat-raised-button", "", "color", "primary", "aria-label", "CREATE AN ACCOUNT", 1, "submit-button", "mt-5", "mr-3", 3, "disabled"], ["mat-stroked-button", "", "color", "warn", "aria-label", "Cancel", 1, "submit-button", "mt-3", 3, "mat-dialog-close"], [1, "otp-wrapper"], ["name", "otpForm", "novalidate", "", 3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "otp"], ["mat-raised-button", "", "color", "primary", "aria-label", "LOGIN", 1, "submit-button", "mt-3", 3, "disabled"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignUpComponent_form_3_Template, 57, 10, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignUpComponent_div_4_Template, 11, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogClose"]],
      styles: [".form-wrapper[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.form-field-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-field-width-short[_ngcontent-%COMP%] {\n  width: 74px;\n}\n\n.form-field-width-mobile[_ngcontent-%COMP%] {\n  width: 81%;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  background: #fbc02d;\n  text-align: center;\n  border-radius: 9px;\n  font-size: 17px;\n}\n\n@media (max-width: 768px) {\n  .form-wrapper[_ngcontent-%COMP%] {\n    padding: 20px 0px;\n  }\n\n  .form-field-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .pr-3[_ngcontent-%COMP%] {\n    padding-right: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9DOlxcU2FpQXN0cm9Xb3JsZC0yXFxzYWlBc3Ryb1dvcmxkR2l0SHViXFxzYWlBc3Ryb1dlYkFwcC9zcmNcXGFwcFxcc2lnbi11cFxcc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0MsV0FBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtBQ0NEOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxpQkFBQTtFQ0NGOztFRENBO0lBQ0UsV0FBQTtFQ0VGOztFREFDO0lBQ0UsNkJBQUE7RUNHSDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0td3JhcHBlciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmZvcm0tZmllbGQtd2lkdGh7XHJcbiB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1maWVsZC13aWR0aC1zaG9ydHtcclxuIHdpZHRoOjc0cHg7XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkLXdpZHRoLW1vYmlsZXtcclxuICB3aWR0aDo4MSU7XHJcbiB9XHJcblxyXG4uZm9ybS13cmFwcGVyIGgyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmJjMDJkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuZm9ybS13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gIH1cclxuICAuZm9ybS1maWVsZC13aWR0aHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgIH1cclxuICAgLnByLTN7XHJcbiAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxufVxyXG4iLCIuZm9ybS13cmFwcGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmZvcm0tZmllbGQtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tZmllbGQtd2lkdGgtc2hvcnQge1xuICB3aWR0aDogNzRweDtcbn1cblxuLmZvcm0tZmllbGQtd2lkdGgtbW9iaWxlIHtcbiAgd2lkdGg6IDgxJTtcbn1cblxuLmZvcm0td3JhcHBlciBoMiB7XG4gIGJhY2tncm91bmQ6ICNmYmMwMmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9ybS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgfVxuXG4gIC5mb3JtLWZpZWxkLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wci0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-up',
          templateUrl: './sign-up.component.html',
          styleUrls: ['./sign-up.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _sign_up_service__WEBPACK_IMPORTED_MODULE_3__["signUpService"]
        }, {
          type: _shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }, {
          type: _shared_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]
        }];
      }, {
        outputSignUpData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/sign-up/sign-up.service.ts":
  /*!********************************************!*\
    !*** ./src/app/sign-up/sign-up.service.ts ***!
    \********************************************/

  /*! exports provided: signUpService */

  /***/
  function srcAppSignUpSignUpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "signUpService", function () {
      return signUpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/constant/rest-url.constants */
    "./src/app/shared/constant/rest-url.constants.ts");
    /* harmony import */


    var _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/service/restApi/rest.service */
    "./src/app/shared/service/restApi/rest.service.ts");

    var signUpService =
    /*#__PURE__*/
    function () {
      function signUpService(restService) {
        _classCallCheck(this, signUpService);

        this.restService = restService;
      }

      _createClass(signUpService, [{
        key: "signUp",
        value: function signUp(data) {
          console.log("data in sign up", data);
          return this.restService.create(_shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].signUp, data);
        }
      }]);

      return signUpService;
    }();

    signUpService.ɵfac = function signUpService_Factory(t) {
      return new (t || signUpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]));
    };

    signUpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: signUpService,
      factory: signUpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](signUpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/spinner/spinner.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/spinner/spinner.component.ts ***!
    \**********************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _shared_service_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/service/loader/loader.service */
    "./src/app/shared/service/loader/loader.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SpinnerComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SpinnerComponent =
    /*#__PURE__*/
    function () {
      function SpinnerComponent(spinner, loaderService) {
        _classCallCheck(this, SpinnerComponent);

        this.spinner = spinner;
        this.loaderService = loaderService;
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          // console.log("oninit spinner ");
          // this.show = true;
          // this.spinner.show();
          this.isSpinning$ = this.loaderService.loaderState;
          this.isSpinning$.subscribe(function (res) {
            console.log("res of loader ", res);

            if (res) {
              _this31.show = true;

              _this31.spinner.show();
            } else {
              _this31.show = false;

              _this31.spinner.hide();
            }
          });
        }
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
      return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]));
    };

    SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SpinnerComponent,
      selectors: [["app-spinner"]],
      decls: 1,
      vars: 1,
      consts: [["class", "center", 4, "ngIf"], [1, "center"]],
      template: function SpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 2, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"]],
      styles: [".center[_ngcontent-%COMP%] {\n  z-index: 99999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9DOlxcU2FpQXN0cm9Xb3JsZC0yXFxzYWlBc3Ryb1dvcmxkR2l0SHViXFxzYWlBc3Ryb1dlYkFwcC9zcmNcXGFwcFxcc3Bpbm5lclxcc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICB6LWluZGV4OiA5OTk5OTtcclxufVxyXG4iLCIuY2VudGVyIHtcbiAgei1pbmRleDogOTk5OTk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-spinner',
          templateUrl: './spinner.component.html',
          styleUrls: ['./spinner.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]
        }, {
          type: _shared_service_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/wallet/wallet.component.ts":
  /*!********************************************!*\
    !*** ./src/app/wallet/wallet.component.ts ***!
    \********************************************/

  /*! exports provided: WalletComponent */

  /***/
  function srcAppWalletWalletComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletComponent", function () {
      return WalletComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../node_modules/@angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_service_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/service/payment/payment.service */
    "./src/app/shared/service/payment/payment.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    function WalletComponent_mat_card_17_span_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_mat_card_17_span_5_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var list_r14 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.selectRechargeAmount(list_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r14 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r13.selectedRechargeAmount == list_r14.amount ? "active" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", list_r14.symbol, " ", list_r14.amount, "");
      }
    }

    function WalletComponent_mat_card_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WalletComponent_mat_card_17_span_5_Template, 2, 3, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_mat_card_17_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.rechargeWallet(ctx_r18.walletForm);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Recharge");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r12.walletForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.rechargeList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r12.walletForm.invalid);
      }
    }

    var WalletComponent =
    /*#__PURE__*/
    function () {
      function WalletComponent(paymentService) {
        _classCallCheck(this, WalletComponent);

        this.paymentService = paymentService;
        this.viewWallet = false;
        this.rechargeList = [];
        this.walletForm = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          walletAmount: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        }); // recharge list

        this.rechargeList = [{
          symbol: '₹',
          amount: 100
        }, {
          symbol: '₹',
          amount: 200
        }, {
          symbol: '₹',
          amount: 300
        }, {
          symbol: '₹',
          amount: 500
        }, {
          symbol: '₹',
          amount: 1000
        }, {
          symbol: '₹',
          amount: 2000
        }, {
          symbol: '₹',
          amount: 3000
        }, {
          symbol: '₹',
          amount: 5000
        }]; // recharge list end
      }

      _createClass(WalletComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getWalletInfo();
        }
      }, {
        key: "getWalletInfo",
        value: function getWalletInfo() {
          var _this32 = this;

          if (sessionStorage.getItem('userData')) {
            var userData = JSON.parse(sessionStorage.getItem('userData'));
            var params = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('userId', userData.userId);
            this.paymentService.walletInfo(params).subscribe(function (response) {
              if (response) {
                _this32.walletInfo = response;
              }
            });
          }
        }
      }, {
        key: "addWallet",
        value: function addWallet() {
          this.viewWallet = true;
        }
      }, {
        key: "rechargeWallet",
        value: function rechargeWallet(formData) {
          var _this33 = this;

          if (formData.valid) {
            var userData = JSON.parse(sessionStorage.getItem('userData'));
            var reqObj = {
              "amount": formData.value.walletAmount,
              "currency": "INR",
              "userId": userData.userId,
              "recieptId": this.makeOrderid()
            };
            this.paymentService.orderPlace(reqObj).subscribe(function (response) {
              _this33.walletForm.patchValue({
                walletAmount: ''
              });

              _this33.selectedRechargeAmount = null;
              console.log(response, 'place order');

              if (response) {
                var options = {
                  key: 'rzp_test_ZeUhqzQZ4q0Gbg',
                  amount: response['amount'],
                  currency: response['currency'],
                  name: '',
                  description: '',
                  image: '/assets/images/logo/PNG/font120px.png',
                  order_id: response['id'],
                  modal: {
                    // We should prevent closing of the form when esc key is pressed.
                    escape: false
                  },
                  notes: {// include notes if any
                  },
                  theme: {
                    color: '#f9a825'
                  }
                };

                options.handler = function (response, error) {
                  options.response = response;
                  console.log(response);
                  console.log(options); // call your backend api to verify payment signature & capture transaction

                  if (response) {
                    _this33.verifySignature(response);
                  }
                };

                options.modal.ondismiss = function () {
                  // handle the case when user closes the form while transaction is in progress
                  console.log('Transaction cancelled.');
                };

                var rzp = new window['Razorpay'](options);
                rzp.open();
              }
            });
          }
        }
      }, {
        key: "verifySignature",
        value: function verifySignature(orderDetail) {
          var _this34 = this;

          if (orderDetail) {
            var params = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('signature', orderDetail.razorpay_signature).set('orderId', orderDetail.razorpay_order_id).set("paymentId", orderDetail.razorpay_payment_id);
            this.paymentService.signatureVerify(params).subscribe(function (response) {
              console.log(response, 'response signayture');

              if (response) {
                _this34.updateWallet(orderDetail);
              }
            });
          }
        }
      }, {
        key: "updateWallet",
        value: function updateWallet(orderInfo) {
          if (orderInfo) {
            // let params = new HttpParams().set('userId', 'balatwo').set("orderId", orderInfo.razorpay_order_id);
            var userData = JSON.parse(sessionStorage.getItem('userData'));
            var params = {
              userId: userData.userId,
              orderId: orderInfo.razorpay_order_id
            };
            this.paymentService.updateWalletInfo(params).subscribe(function (response) {
              console.log(response, 'wallet update');
            });
          }
        }
      }, {
        key: "selectRechargeAmount",
        value: function selectRechargeAmount(rechargeAmount) {
          if (rechargeAmount) {
            this.selectedRechargeAmount = rechargeAmount.amount;
            this.walletForm.patchValue({
              walletAmount: rechargeAmount.amount
            });
          }
        } // make order id

      }, {
        key: "makeOrderid",
        value: function makeOrderid() {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < 12; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          if (result) {
            result = "recieptId_" + result;
          }

          console.log(result, 'result');
          return result;
        }
      }]);

      return WalletComponent;
    }();

    WalletComponent.ɵfac = function WalletComponent_Factory(t) {
      return new (t || WalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"]));
    };

    WalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WalletComponent,
      selectors: [["app-wallet"]],
      decls: 18,
      vars: 2,
      consts: [[1, "wallet"], [1, "container"], [1, "row"], [1, "col-10", "offset-md-1"], [1, "wallet-header"], [1, "clearfix"], [1, "float-left"], [1, "wallet-info"], [1, "money-symbol"], [1, "amount"], [1, "d-block", "mt-2"], [1, "float-right"], ["mat-raised-button", "", "color", "primary", 1, "mt-2", 3, "click"], ["class", "add-wallet-money", 4, "ngIf"], [1, "add-wallet-money"], [1, "wallet-img-holder"], ["src", "/assets/images/social/wallet.png", "alt", "", 1, "img-fluid"], [1, "wallet-form", 3, "formGroup"], [1, "recharge-list", "mb-5"], ["class", "list", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "field-wrapper"], [1, "example-full-width", "w-100"], ["matInput", "", "placeholder", "Enter Amount to be added in wallet", "formControlName", "walletAmount"], [1, "text-center"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "list", 3, "ngClass", "click"]],
      template: function WalletComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u20B9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SaiAstro Wallet Balance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_15_listener() {
            return ctx.addWallet();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add Money to Wallet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WalletComponent_mat_card_17_Template, 12, 3, "mat-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.walletInfo == null ? null : ctx.walletInfo.amount) ? ctx.walletInfo == null ? null : ctx.walletInfo.amount : "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewWallet);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
      styles: [".wallet[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n}\n.wallet[_ngcontent-%COMP%]   .wallet-header[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n  background-color: whitesmoke;\n}\n.wallet[_ngcontent-%COMP%]   .money-symbol[_ngcontent-%COMP%] {\n  margin: 0 0.5rem 0 0;\n}\n.wallet[_ngcontent-%COMP%]   .money-symbol[_ngcontent-%COMP%], .wallet[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n.wallet[_ngcontent-%COMP%]   .wallet-img-holder[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 0 auto;\n}\n.wallet[_ngcontent-%COMP%]   .add-wallet-money[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  box-shadow: none;\n}\n.wallet[_ngcontent-%COMP%]   .wallet-form[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.wallet[_ngcontent-%COMP%]   .wallet-form[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%] {\n  width: 235px;\n  margin: 0 auto;\n}\n.wallet[_ngcontent-%COMP%]   .recharge-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  margin: 0 10px 0 0;\n  border: 1px solid #f9a825;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.wallet[_ngcontent-%COMP%]   .recharge-list[_ngcontent-%COMP%]   .list.active[_ngcontent-%COMP%] {\n  background-color: #f9a825;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0L0M6XFxTYWlBc3Ryb1dvcmxkLTJcXHNhaUFzdHJvV29ybGRHaXRIdWJcXHNhaUFzdHJvV2ViQXBwL3NyY1xcYXBwXFx3YWxsZXRcXHdhbGxldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2FsbGV0L3dhbGxldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7QUNFUjtBREFJO0VBQ0ksb0JBQUE7QUNFUjtBREFJO0VBQ0ksZUFBQTtBQ0VSO0FEQUk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQ0VSO0FEQ0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ1I7QURDSTtFQUNJLGtCQUFBO0FDQ1I7QURBUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDRVo7QURHUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RaO0FERVk7RUFDSSx5QkFBQTtBQ0FoQiIsImZpbGUiOiJzcmMvYXBwL3dhbGxldC93YWxsZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FsbGV0IHtcclxuICAgIG1hcmdpbjogMS41cmVtIDA7XHJcbiAgICAud2FsbGV0LWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICB9XHJcbiAgICAubW9uZXktc3ltYm9sIHtcclxuICAgICAgICBtYXJnaW46IDAgMC41cmVtIDAgMDtcclxuICAgIH1cclxuICAgIC5tb25leS1zeW1ib2wsIC5hbW91bnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICAgIC53YWxsZXQtaW1nLWhvbGRlciAge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZC13YWxsZXQtbW9uZXkge1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAwIDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICAgIC53YWxsZXQtZm9ybSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC5maWVsZC13cmFwcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIzNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJlY2hhcmdlLWxpc3Qge1xyXG4gICAgICAgIC5saXN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjlhODI1O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YTgyNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi53YWxsZXQge1xuICBtYXJnaW46IDEuNXJlbSAwO1xufVxuLndhbGxldCAud2FsbGV0LWhlYWRlciB7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cbi53YWxsZXQgLm1vbmV5LXN5bWJvbCB7XG4gIG1hcmdpbjogMCAwLjVyZW0gMCAwO1xufVxuLndhbGxldCAubW9uZXktc3ltYm9sLCAud2FsbGV0IC5hbW91bnQge1xuICBmb250LXNpemU6IDM1cHg7XG59XG4ud2FsbGV0IC53YWxsZXQtaW1nLWhvbGRlciB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLndhbGxldCAuYWRkLXdhbGxldC1tb25leSB7XG4gIG1hcmdpbjogMXJlbSAwIDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ud2FsbGV0IC53YWxsZXQtZm9ybSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53YWxsZXQgLndhbGxldC1mb3JtIC5maWVsZC13cmFwcGVyIHtcbiAgd2lkdGg6IDIzNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi53YWxsZXQgLnJlY2hhcmdlLWxpc3QgLmxpc3Qge1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOWE4MjU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLndhbGxldCAucmVjaGFyZ2UtbGlzdCAubGlzdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlhODI1O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-wallet',
          templateUrl: './wallet.component.html',
          styleUrls: ['./wallet.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_service_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      urlAddress: 'https://apisaiastroworld.com',
      paymentUrlAddress: 'https://apisaiastroworld.com/payment' // urlAddress: 'http://ec2-3-21-75-140.us-east-2.compute.amazonaws.com:3000',
      // paymentUrlAddress: 'http://ec2-3-21-75-140.us-east-2.compute.amazonaws.com:3001'

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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\SaiAstroWorld-2\saiAstroWorldGitHub\saiAstroWebApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map