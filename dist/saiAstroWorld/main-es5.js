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

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
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
    } // { path: '' , component: HomePageComponent}
    ];

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
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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


    var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/service/commonService/common.service */
    "./src/app/shared/service/commonService/common.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _observables_behaviourSubject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./observables/behaviourSubject.service */
    "./src/app/observables/behaviourSubject.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");

    var _c0 = ["sidenav"];

    function AppComponent_mat_icon_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "face");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r109);
      }
    }

    function AppComponent_h4_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r110.checkUser.name);
      }
    }

    function AppComponent_h4_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r111.checkUser.contactNo);
      }
    }

    function AppComponent_button_57_Template(rf, ctx) {
      if (rf & 1) {
        var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_57_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114);

          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r113.openDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(_commonService, dialog, _route, _observableDataService) {
        _classCallCheck(this, AppComponent);

        this._commonService = _commonService;
        this.dialog = dialog;
        this._route = _route;
        this._observableDataService = _observableDataService;
        this.title = 'saiAstroWorld';
        this.isUserLogin = false;
        this.reason = '';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkUser = JSON.parse(sessionStorage.getItem('userData'));
          console.log("checkUser ++", this.checkUser);

          if (this.checkUser != null) {
            this.isUserLogin = true;
          } else {
            this.isUserLogin = false;
          }

          console.log("this.isUserLogin ++++ ", this.isUserLogin);
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
          var _this = this;

          var dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], {
            width: '500px'
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);

            if (typeof result != 'undefined' || result != null) {
              _this.isUserLogin = true;
              _this.checkUser = result.userData;

              _this._observableDataService.checkUser(result.userData);

              sessionStorage.setItem('token', result.token);
              sessionStorage.setItem('userData', JSON.stringify(result.userData));
            }
          });
        }
      }, {
        key: "viewReport",
        value: function viewReport() {
          console.log("this.checkUser ", this.checkUser);

          if (this.checkUser != null) {
            console.log("view report");

            this._observableDataService.checkUserOperation('Report');

            this._route.navigate(['home/astrologer']);
          } else {
            this._commonService.tostMessage("Please Login to ask report to Astrologers!");
          }
        }
      }, {
        key: "viewQA",
        value: function viewQA() {
          if (this.checkUser != null) {
            console.log("QA report");

            this._observableDataService.checkUserOperation('Q&A');

            this._route.navigate(['home/astrologer']);
          } else {
            this._commonService.tostMessage("Please Login to ask question to Astrologers!");
          }
        }
      }, {
        key: "talkToAstro",
        value: function talkToAstro() {
          if (this.checkUser != null) {
            console.log("QA report");

            this._observableDataService.checkUserOperation('Call');

            this._route.navigate(['home/astrologer']);
          } else {
            this._commonService.tostMessage("Please Login to talk with Astrologers!");
          }
        }
      }, {
        key: "chatToAstro",
        value: function chatToAstro() {
          if (this.checkUser != null) {
            console.log("QA report");

            this._observableDataService.checkUserOperation('Chat');

            this._route.navigate(['home/astrologer']);
          } else {
            this._commonService.tostMessage("Please Login to chat with Astrologers!");
          }
        }
      }, {
        key: "logOut",
        value: function logOut() {
          sessionStorage.clear();

          this._route.navigate(['']);

          this.isUserLogin = false;

          this._commonService.tostMessage("Log Out Successfully!");
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_observables_behaviourSubject_service__WEBPACK_IMPORTED_MODULE_5__["ObservableDataService"]));
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
      decls: 155,
      vars: 5,
      consts: [[1, "sidenav-container", 3, "backdropClick"], ["disableClose", "", 1, "drawer-container", 3, "fixedInViewport", "keydown.escape"], ["sidenav", ""], [1, "side-bar-logo"], ["src", "../assets/images/logo/PNG/font120px.png", 1, "mb-2"], ["id", "list-tab", "role", "tablist", 1, "list-group"], ["id", "astro-talk", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "astro-talk", 1, "list-group-item", "list-group-item-action", "active", 3, "click"], ["id", "astro-chat", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "astro-chat", 1, "list-group-item", "list-group-item-action", 3, "click"], ["id", "astro-report", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "astro-report", 1, "list-group-item", "list-group-item-action", 3, "click"], ["id", "astro-question", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "astro-question", 1, "list-group-item", "list-group-item-action", 3, "click"], ["id", "horoscope", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "horoscope", 1, "list-group-item", "list-group-item-action"], ["id", "kundli", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "kundli", 1, "list-group-item", "list-group-item-action"], ["id", "astro-mall", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "astro-mall", 1, "list-group-item", "list-group-item-action"], ["id", "blog", "data-toggle", "list", "href", "javascript:;", "role", "tab", "aria-controls", "blog", 1, "list-group-item", "list-group-item-action"], [1, "toolbar-wrapper"], ["mat-button", "", 1, "menu-button", 3, "click"], ["aria-hidden", "false"], [1, "hm-logo"], ["href", ""], ["src", "../assets/images/logo/PNG/font120px.png"], [1, "example-spacer"], [1, "quick-link"], [1, "highlight-menu"], ["href", "javascript:;", 3, "click"], ["href", "javascript:;"], ["class", "hm-user-icon", "mat-button", "", "mat-raised-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["backdropClass", "hm-user-menu-item"], ["menu", "matMenu"], [4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 1, "hm-wallet", "mt-3"], ["mat-raised-button", "", 1, "hm-cart", "mt-3"], [1, "header-social"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "fixed-plugin"], [1, "example-button-row"], ["matTooltip", "Chat", "matTooltipPosition", "left", "mat-mini-fab", "", "aria-label", "chat icon", 3, "click"], ["matTooltip", "Call", "matTooltipPosition", "before", "mat-mini-fab", "", "aria-label", "call icon", 3, "click"], ["matTooltip", "Report", "matTooltipPosition", "before", "mat-mini-fab", "", "aria-label", "report icon", 3, "click"], ["matTooltip", "Ask Question", "matTooltipPosition", "before", "mat-mini-fab", "", "aria-label", "Q&A icon", 3, "click"], [1, "footer-wrapper", "py-5"], [1, "footer-top"], [1, "container"], [1, "row"], [1, "col-md-3", "footer-about", "wow", "fadeInUp", "animated", 2, "visibility", "visible", "animation-name", "fadeInUp"], [1, "col-md-4", "offset-md-1", "footer-contact", "wow", "fadeInDown", "animated", 2, "visibility", "visible", "animation-name", "fadeInDown"], [1, "fa", "fa-map-marker-alt"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope"], ["href", "mailto:hello@domain.com"], [1, "fa", "fa-skype"], [1, "col-md-4", "footer-links", "wow", "fadeInUp", "animated", 2, "visibility", "visible", "animation-name", "fadeInUp"], [1, "col"], [1, "col-md-6"], ["href", "#top-content", 1, "scroll-link"], ["href", "#"], [1, "footer-bottom", "pt-5"], [1, "col", "footer-social"], ["mat-button", "", "mat-raised-button", "", 1, "hm-user-icon", 3, "matMenuTriggerFor"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_6_listener() {
            return ctx.talkToAstro();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Talk to Astrologer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_8_listener() {
            return ctx.chatToAstro();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Chat with Astrologer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener() {
            return ctx.viewReport();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Get Reports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_12_listener() {
            return ctx.viewQA();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ask Question");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Horoscope 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Kundli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "AstroMall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-toolbar", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);

            var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r107.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "view_headline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_35_listener() {
            return ctx.talkToAstro();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Talk to Astrologer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_38_listener() {
            return ctx.chatToAstro();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Chat with Astrologer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_41_listener() {
            return ctx.viewReport();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Get Reports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_44_listener() {
            return ctx.viewQA();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Ask Question");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Horoscope 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AppComponent_mat_icon_49_Template, 2, 1, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-menu", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AppComponent_h4_52_Template, 2, 1, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AppComponent_h4_53_Template, 2, 1, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_55_listener() {
            return ctx.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AppComponent_button_57_Template, 2, 0, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "account_balance_wallet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_71_listener() {
            return ctx.chatToAstro();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_74_listener() {
            return ctx.talkToAstro();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_77_listener() {
            return ctx.viewReport();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "assignment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_80_listener() {
            return ctx.viewQA();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "question_answer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "app-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "footer", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "About us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " We are a young company always looking for new and creative ideas to help you with our products in your everyday work. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\xA9 Company Inc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Demo Address 10, 10136 Turin Italy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Phone: (0039) 123 45 67 890");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "hello@domain.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Skype: you_online");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "How it works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Our clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Plans & pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Affiliates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Terms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 36);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserLogin);
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenu"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__["SpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"]],
      styles: [".sidenav-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: all 0.3s ease-out;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 0px 10px;\n  margin: 4px 0px;\n}\n\n.facebook-color[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: #fff;\n}\n\n.instagram-color[_ngcontent-%COMP%] {\n  background-color: purple;\n  color: #fff;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%] {\n  height: 95px;\n}\n\n.quick-link[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky;\n  \n  top: 0;\n  \n  z-index: 1000;\n  \n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   .mat-icon.hm-wallet[_ngcontent-%COMP%] {\n  margin: 0px 20px;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   .mat-icon.hm-user-icon[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n  font-size: 35px;\n  height: auto;\n  cursor: pointer;\n  margin-top: 15px;\n}\n\n.header-social[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n}\n\n.header-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 20px;\n}\n\n.header-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f9a825 !important;\n}\n\n.hm-user-menu-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  margin-top: 20px;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   button.menu-button[_ngcontent-%COMP%] {\n  min-width: 36px;\n  left: -11px;\n  padding: 0px !important;\n  margin-top: 0px;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   span.highlight-menu[_ngcontent-%COMP%] {\n  border: 2px solid #f2bf2b;\n  border-radius: 44px;\n  padding: 10px;\n  margin-right: 10px;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   span.hm-logo[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fixed-plugin[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 115px;\n  right: 15px;\n  line-height: 48px;\n  width: 64px;\n  background: rgba(0, 0, 0, 0.08);\n  z-index: 1031;\n  border-radius: 8px 0 0 8px;\n  text-align: center;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .follow-text[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  background: #b71c1c;\n}\n\n.side-bar-quick-link[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.side-bar-quick-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1rem 50px;\n}\n\n.mat-sidenav[_ngcontent-%COMP%] {\n  width: 230px;\n}\n\n.mat-sidenav[_ngcontent-%COMP%]   .side-bar-logo[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mat-sidenav[_ngcontent-%COMP%]   .side-bar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  padding-top: 10px;\n}\n\n.footer-wrapper[_ngcontent-%COMP%] {\n  background-color: #f9a825;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 20px;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n}\n\n@media (max-width: 1024px) {\n  .fixed-plugin[_ngcontent-%COMP%] {\n    right: 0px;\n  }\n\n  .toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 768px) {\n  .fixed-plugin[_ngcontent-%COMP%] {\n    right: 0px;\n  }\n\n  .toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding: 0 0px;\n  }\n\n  .quick-link[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .side-bar-quick-link[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n@media (max-width: 640px) {\n  .toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .mat-icon.hm-wallet[_ngcontent-%COMP%] {\n    margin: 0px 14px;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    font-size: 12px;\n    min-width: 48px;\n    padding: 0px;\n    line-height: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFNhaUFzdHJvV29ybGQtMlxcc2FpQXN0cm9Xb3JsZEdpdEh1Ylxcc2FpQXN0cm9XZWJBcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7QUNKRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNMRjs7QURPQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQ0pGOztBRE1BO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0FDSEY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGOztBRFdBO0VBQ0UsZUFBQTtBQ1JGOztBRFdBO0VBQ0UsY0FBQTtBQ1JGOztBRFdBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUEwQix5QkFBQTtFQUMxQixNQUFBO0VBQVEseUNBQUE7RUFDUixhQUFBO0VBQWUsK0RBQUE7QUNMZjs7QURRSTtFQUNFLGdCQUFBO0FDTk47O0FEUUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTk47O0FEV0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNSRjs7QURTRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ1BKOztBRFNFO0VBQ0UseUJBQUE7QUNQSjs7QURjRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FDWEo7O0FEZUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDWkY7O0FEYUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ1hKOztBRGdCQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNiRjs7QURlQTtFQUNFLHFCQUFBO0FDWkY7O0FEY0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDWEY7O0FEZUU7RUFDRSxZQUFBO0FDWko7O0FEY0U7RUFDRSxXQUFBO0FDWko7O0FEbUJBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ2hCRjs7QURrQkU7RUFDRSxXQUFBO0FDaEJKOztBRG1CRztFQUNFLG1CQWhKTztBQytIWjs7QURxQkE7RUFDRSxtQkFBQTtBQ2xCRjs7QUR1QkE7RUFDRSxhQUFBO0FDcEJGOztBRHVCQTtFQUNFLGtCQUFBO0FDcEJGOztBRHVCQTtFQUNFLFlBQUE7QUNwQkY7O0FEcUJFO0VBQ0Usa0JBQUE7QUNuQko7O0FEb0JNO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDbEJOOztBRHVCQTtFQUNFLHlCQTdLTztBQ3lKVDs7QURzQkk7RUFDRSxxQkFBQTtBQ3BCTjs7QURzQkk7RUFDRSxXQXJMRTtBQ2lLUjs7QUR1QkU7RUFDRSxrQkFBQTtBQ3JCSjs7QUR1Qk07RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNyQlI7O0FEdUJNO0VBQ0Usc0JBQUE7QUNyQlI7O0FEK0JBO0VBQ0U7SUFDRSxVQUFBO0VDNUJGOztFRDhCQTtJQUNFLFdBQUE7RUMzQkY7QUFDRjs7QUQ4QkE7RUFDRTtJQUNFLFVBQUE7RUM1QkY7O0VEOEJBO0lBQ0UsY0FBQTtFQzNCRjs7RUQ4QkE7SUFDRSxhQUFBO0VDM0JGOztFRDZCQTtJQUNFLFdBQUE7RUMxQkY7O0VENkJBO0lBQ0UsY0FBQTtFQzFCRjtBQUNGOztBRDhCQTtFQUdNO0lBQ0UsVUFBQTtFQzlCTjtFRGdDSTtJQUNFLGdCQUFBO0VDOUJOO0VEZ0NJO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQzlCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiR3aGl0ZTogI2ZmZjtcclxuJG9mZi13aGl0ZTogI2U4ZThlODtcclxuJHByaW1hcjogI2Y5YTgyNTtcclxuXHJcbi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuXHJcbmg0IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgbWFyZ2luOiA0cHggMHB4O1xyXG59XHJcbi5mYWNlYm9vay1jb2xvcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5pbnN0YWdyYW0tY29sb3J7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhci1yb3d7XHJcbiAgaGVpZ2h0OiA5NXB4O1xyXG59XHJcbi5xdWljay1saW5re1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi8vIG1hdC10b29sYmFyLXJvdyAubWF0LWJ1dHRvbiB7XHJcbi8vIGxlZnQ6IC0zcHg7XHJcbi8vIC8qIHRvcDogMHB4OyAqL1xyXG4vLyBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4vLyB9XHJcblxyXG4uZXhhbXBsZS1pY29uIHtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi50b29sYmFyLXdyYXBwZXIge1xyXG5wb3NpdGlvbjogc3RpY2t5O1xyXG5wb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIEZvciBtYWNPUy9pT1MgU2FmYXJpICovXHJcbnRvcDogMDsgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXHJcbnotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cclxuXHJcbi5tYXQtaWNvbntcclxuICAgICYuaG0td2FsbGV0IHtcclxuICAgICAgbWFyZ2luOiAwcHggMjBweDtcclxuICAgIH1cclxuICAgICYuaG0tdXNlci1pY29ue1xyXG4gICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1zb2NpYWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTJweDtcclxuICBhIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyICFpbXBvcnRhbnRcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmhtLXVzZXItbWVudS1pdGVte1xyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4udG9vbGJhci13cmFwcGVyIGJ1dHRvbntcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgJi5tZW51LWJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDM2cHg7XHJcbiAgICBsZWZ0OiAtMTFweDtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi50b29sYmFyLXdyYXBwZXIgc3BhbntcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRvb2xiYXItd3JhcHBlciBzcGFuIGF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi50b29sYmFyLXdyYXBwZXIgc3Bhbi5oaWdobGlnaHQtbWVudXtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjJiZjJiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ0cHg7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnRvb2xiYXItd3JhcHBlciBzcGFue1xyXG4gICYuaG0tbG9nbyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG4gIGltZ3tcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5maXhlZC1wbHVnaW4ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDExNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgei1pbmRleDogMTAzMTtcclxuICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5mb2xsb3ctdGV4dCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgfVxyXG5cclxuICAgYnV0dG9ue1xyXG4gICAgIGJhY2tncm91bmQ6ICRvZmYtd2hpdGU7XHJcbiAgIH1cclxufVxyXG5cclxuLnRvb2x0aXB7XHJcbiAgYmFja2dyb3VuZDogI2I3MWMxYztcclxufVxyXG5cclxuXHJcblxyXG4uc2lkZS1iYXItcXVpY2stbGlua3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2lkZS1iYXItcXVpY2stbGluayBhIHtcclxuICBwYWRkaW5nOiAxcmVtIDUwcHg7XHJcbn1cclxuXHJcbi5tYXQtc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIC5zaWRlLWJhci1sb2dvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgaW1ne1xyXG4gICAgICB3aWR0aDo4MCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvb3Rlci13cmFwcGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXI7XHJcbiAgcCB7XHJcbiAgICBhIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgYTpob3ZlcntcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvb3Rlci1ib3R0b20ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLmZvb3Rlci1zb2NpYWwge1xyXG4gICAgICBhIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmZpeGVkLXBsdWdpbiB7XHJcbiAgICByaWdodDogMHB4O1xyXG4gIH1cclxuICAudG9vbGJhci13cmFwcGVyIHNwYW4gaW1ne1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZpeGVkLXBsdWdpbiB7XHJcbiAgICByaWdodDogMHB4O1xyXG4gIH1cclxuICAudG9vbGJhci13cmFwcGVyIHNwYW57XHJcbiAgICBwYWRkaW5nOiAwIDBweDtcclxuICB9XHJcblxyXG4gIC5xdWljay1saW5re1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnRvb2xiYXItd3JhcHBlciBzcGFuIGltZ3tcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zaWRlLWJhci1xdWljay1saW5rIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG5cclxuICAudG9vbGJhci13cmFwcGVye1xyXG4gICAgICBzcGFuIGltZ3tcclxuICAgICAgICB3aWR0aCA6IDgwJTtcclxuICAgICAgfVxyXG4gICAgICAubWF0LWljb24uaG0td2FsbGV0IHtcclxuICAgICAgICBtYXJnaW46IDBweCAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA0OHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIG1hcmdpbjogNHB4IDBweDtcbn1cblxuLmZhY2Vib29rLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5pbnN0YWdyYW0tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5tYXQtdG9vbGJhci1yb3cge1xuICBoZWlnaHQ6IDk1cHg7XG59XG5cbi5xdWljay1saW5rIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmV4YW1wbGUtaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi50b29sYmFyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIC8qIEZvciBtYWNPUy9pT1MgU2FmYXJpICovXG4gIHRvcDogMDtcbiAgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXG4gIHotaW5kZXg6IDEwMDA7XG4gIC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cbn1cbi50b29sYmFyLXdyYXBwZXIgLm1hdC1pY29uLmhtLXdhbGxldCB7XG4gIG1hcmdpbjogMHB4IDIwcHg7XG59XG4udG9vbGJhci13cmFwcGVyIC5tYXQtaWNvbi5obS11c2VyLWljb24ge1xuICBtYXJnaW46IDBweCAxMHB4O1xuICBmb250LXNpemU6IDM1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uaGVhZGVyLXNvY2lhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG59XG4uaGVhZGVyLXNvY2lhbCBhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5oZWFkZXItc29jaWFsIGE6aG92ZXIge1xuICBjb2xvcjogI2Y5YTgyNSAhaW1wb3J0YW50O1xufVxuXG4uaG0tdXNlci1tZW51LWl0ZW0gaDQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50b29sYmFyLXdyYXBwZXIgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi50b29sYmFyLXdyYXBwZXIgYnV0dG9uLm1lbnUtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAzNnB4O1xuICBsZWZ0OiAtMTFweDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnRvb2xiYXItd3JhcHBlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b29sYmFyLXdyYXBwZXIgc3BhbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udG9vbGJhci13cmFwcGVyIHNwYW4uaGlnaGxpZ2h0LW1lbnUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjJiZjJiO1xuICBib3JkZXItcmFkaXVzOiA0NHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50b29sYmFyLXdyYXBwZXIgc3Bhbi5obS1sb2dvIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuLnRvb2xiYXItd3JhcHBlciBzcGFuIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZml4ZWQtcGx1Z2luIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDExNXB4O1xuICByaWdodDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA2NHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB6LWluZGV4OiAxMDMxO1xuICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZpeGVkLXBsdWdpbiAuZm9sbG93LXRleHQge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5maXhlZC1wbHVnaW4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuLnRvb2x0aXAge1xuICBiYWNrZ3JvdW5kOiAjYjcxYzFjO1xufVxuXG4uc2lkZS1iYXItcXVpY2stbGluayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaWRlLWJhci1xdWljay1saW5rIGEge1xuICBwYWRkaW5nOiAxcmVtIDUwcHg7XG59XG5cbi5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyMzBweDtcbn1cbi5tYXQtc2lkZW5hdiAuc2lkZS1iYXItbG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYXQtc2lkZW5hdiAuc2lkZS1iYXItbG9nbyBpbWcge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YTgyNTtcbn1cbi5mb290ZXItd3JhcHBlciBwIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9vdGVyLXdyYXBwZXIgcCBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uZm9vdGVyLXdyYXBwZXIgLmZvb3Rlci1ib3R0b20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGVyLXdyYXBwZXIgLmZvb3Rlci1ib3R0b20gLmZvb3Rlci1zb2NpYWwgYSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZm9vdGVyLXdyYXBwZXIgLmZvb3Rlci1ib3R0b20gLmZvb3Rlci1zb2NpYWwgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmZpeGVkLXBsdWdpbiB7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxuXG4gIC50b29sYmFyLXdyYXBwZXIgc3BhbiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZpeGVkLXBsdWdpbiB7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxuXG4gIC50b29sYmFyLXdyYXBwZXIgc3BhbiB7XG4gICAgcGFkZGluZzogMCAwcHg7XG4gIH1cblxuICAucXVpY2stbGluayB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC50b29sYmFyLXdyYXBwZXIgc3BhbiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnNpZGUtYmFyLXF1aWNrLWxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLnRvb2xiYXItd3JhcHBlciBzcGFuIGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICAudG9vbGJhci13cmFwcGVyIC5tYXQtaWNvbi5obS13YWxsZXQge1xuICAgIG1hcmdpbjogMHB4IDE0cHg7XG4gIH1cbiAgLnRvb2xiYXItd3JhcHBlciBidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1pbi13aWR0aDogNDhweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH1cbn0iXX0= */"]
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
          type: _shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _observables_behaviourSubject_service__WEBPACK_IMPORTED_MODULE_5__["ObservableDataService"]
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

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
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
      providers: [{
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
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"], _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"], _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"]],
          providers: [{
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

    function ForgotPasswordComponent_form_3_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile number is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_3_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid mobile number! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_3_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " OTP is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_3_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_form_3_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r138);

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r137.submitForm(ctx_r137.validateForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Get OTP ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r135.validateForm.invalid);
      }
    }

    function ForgotPasswordComponent_form_3_button_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_form_3_button_17_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r140);

          var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r139.verifyOTP(ctx_r139.validateForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Verify OTP ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_3_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ForgotPasswordComponent_form_3_mat_error_7_Template, 2, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ForgotPasswordComponent_form_3_mat_error_8_Template, 2, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "OTP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ForgotPasswordComponent_form_3_mat_error_15_Template, 2, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ForgotPasswordComponent_form_3_button_16_Template, 2, 1, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ForgotPasswordComponent_form_3_button_17_Template, 2, 0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r130.validateForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r130.validateForm.get("contactNo").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r130.validateForm.get("contactNo").hasError("required") && ctx_r130.validateForm.get("contactNo").hasError("mobileErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r130.validateForm.get("otp").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r130.isOtp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r130.isOtp);
      }
    }

    function ForgotPasswordComponent_form_4_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile number is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_4_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid mobile number! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_4_mat_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login type is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_4_mat_error_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_form_4_mat_error_21_Template(rf, ctx) {
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

    function ForgotPasswordComponent_form_4_button_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_form_4_button_22_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148);

          var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r147.resetUser(ctx_r147.resetForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reset ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r146.resetForm.invalid);
      }
    }

    function ForgotPasswordComponent_form_4_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ForgotPasswordComponent_form_4_mat_error_7_Template, 2, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ForgotPasswordComponent_form_4_mat_error_8_Template, 2, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ForgotPasswordComponent_form_4_mat_error_13_Template, 2, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "New Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "vpn_key");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ForgotPasswordComponent_form_4_mat_error_20_Template, 2, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ForgotPasswordComponent_form_4_mat_error_21_Template, 6, 0, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ForgotPasswordComponent_form_4_button_22_Template, 2, 1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r131.resetForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r131.resetForm.get("contactNo").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r131.resetForm.get("contactNo").hasError("required") && ctx_r131.resetForm.get("contactNo").hasError("mobileErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r131.resetForm.get("userType").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r131.resetForm.get("password").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r131.resetForm.get("password").hasError("required") && ctx_r131.resetForm.get("password").hasError("passErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r131.isOtp);
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
          var _this2 = this;

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
              _this2.validateForm.controls['userType'].setValue(responseData.data.userType, {
                onlySelf: true
              });

              _this2.validateForm.controls['otp'].enable();

              _this2.isOtp = true;
              console.log("this.validateForm ++++++++++++", _this2.validateForm);
            } else {
              alert(resonseMessage);
            }
          });
        }
      }, {
        key: "verifyOTP",
        value: function verifyOTP(value) {
          var _this3 = this;

          console.log("verifyOTP login ", value);

          this._commonService.verifyOTP(value).subscribe(function (responseData) {
            console.log("responseData ------> ", responseData);
            var resonseMessage = responseData.message;

            if (responseData.status == 200) {
              _this3.isVisible = false;

              _this3.resetForm.controls['contactNo'].setValue(_this3.validateForm.value.contactNo, {
                onlySelf: true
              });

              _this3.resetForm.controls['userType'].setValue(_this3.validateForm.value.userType == 1 ? "User" : "Astrologer", {
                onlySelf: true
              });

              console.log("this.resetForm ----->", _this3.resetForm);
            } else {
              alert(resonseMessage);
            }
          });
        }
      }, {
        key: "resetUser",
        value: function resetUser(value) {
          var _this4 = this;

          value['contactNo'] = this.resetForm.controls.contactNo.value;
          value['userType'] = this.resetForm.controls.userType.value == "User" ? '1' : '2';
          console.log("resetUser is ", value, "And", this.resetForm);

          this._forgotPasswordService.resetUser(value).subscribe(function (responseData) {
            console.log("responseData ------> ", responseData);
            var resonseMessage = responseData.message;

            if (responseData.status == 200) {
              _this4.validateForm.reset();

              _this4.resetForm.reset();

              _this4.outputResetData.emit(true);
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
      decls: 5,
      vars: 2,
      consts: [[1, "form-wrapper"], ["name", "validateForm", "novalidate", "", 3, "formGroup", 4, "ngIf"], ["name", "resetForm", "novalidate", "", 3, "formGroup", 4, "ngIf"], ["name", "validateForm", "novalidate", "", 3, "formGroup"], [1, "form-field-width"], ["matInput", "", "formControlName", "contactNo", "minlength", "10", "maxlength", "10"], ["matSuffix", "", 1, "secondary-text"], [4, "ngIf"], [1, "form-field-width", "mt-2"], ["matInput", "", "formControlName", "otp"], ["mat-raised-button", "", "color", "primary", "class", "submit-button mt-3", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "class", "submit-button mt-3", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "submit-button", "mt-3", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 1, "submit-button", "mt-3", 3, "click"], ["name", "resetForm", "novalidate", "", 3, "formGroup"], ["matInput", "", "formControlName", "userType", "minlength", "10", "maxlength", "10"], ["matInput", "", "type", "password", "formControlName", "password"], ["mat-raised-button", "", "color", "primary", "class", "submit-button mt-5", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "submit-button", "mt-5", 3, "disabled", "click"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "forgot-password works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForgotPasswordComponent_form_3_Template, 18, 6, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForgotPasswordComponent_form_4_Template, 23, 7, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

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


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
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


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
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
        var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_3_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r101.submitForm(ctx_r101.validateForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mobile Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_form_3_mat_error_7_Template, 2, 0, "mat-error", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_form_3_mat_error_8_Template, 2, 0, "mat-error", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "User");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Astrolloger");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Login type is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "vpn_key");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_form_3_mat_error_25_Template, 2, 0, "mat-error", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_form_3_mat_error_26_Template, 6, 0, "mat-error", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_3_Template_a_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r103.forgotPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Forgot Password? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " LOGIN ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r95.validateForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r95.validateForm.get("contactNo").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r95.validateForm.get("contactNo").hasError("required") && ctx_r95.validateForm.get("contactNo").hasError("mobileErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r95.validateForm.get("password").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r95.validateForm.get("password").hasError("required") && ctx_r95.validateForm.get("password").hasError("passErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r95.validateForm.invalid);
      }
    }

    function LoginComponent_div_4_app_forgot_password_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-forgot-password", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("outputResetData", function LoginComponent_div_4_app_forgot_password_1_Template_app_forgot_password_outputResetData_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106);

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r105.resetLogin($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_4_app_forgot_password_1_Template, 1, 0, "app-forgot-password", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r96.isVisible);
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, _commonService, _formBuilder, dialogRef, _loginService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this._commonService = _commonService;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this._loginService = _loginService;
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
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(value) {
          var _this5 = this;

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
              // this.isVisible = true;
              _this5._commonService.tostMessage(resonseMessage);

              if (!responseBody.profileUpdated && typeof responseBody.profileUpdated != 'undefined') {
                _this5.router.navigate(['astroRegistration']);

                _this5.dialogRef.close(responseData.data);
              } else {
                _this5.dialogRef.close(responseData.data);
              }
            } else {
              _this5._commonService.tostMessage(resonseMessage);
            }
          });
        }
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
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_6__["loginService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 16,
      vars: 2,
      consts: [["mat-align-tabs", "center"], ["label", "Login"], [1, "form-wrapper"], ["name", "validateForm", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "otp-wrapper", 4, "ngIf"], [1, "separator", "login"], [1, "text"], [1, "d-flex", "justify-content-center"], ["mat-stroked-button", "", 1, "google"], ["src", "../../assets/images/social/google.png"], ["label", "Sign Up"], ["name", "validateForm", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-field-width"], ["matInput", "", "formControlName", "contactNo", "minlength", "10", "maxlength", "10"], ["matSuffix", "", 1, "secondary-text"], [4, "ngIf"], [1, "form-field-width", "mt-2"], ["name", "userType", "formControlName", "userType"], ["value", "1"], ["value", "2"], ["matInput", "", "type", "password", "formControlName", "password"], [1, "d-flex", "mt-5", "justify-content-end"], ["href", "javascript:;", 1, "forgot-password", 3, "click"], ["mat-raised-button", "", "color", "primary", "aria-label", "LOGIN", 1, "submit-button", "mt-3", 3, "disabled"], [1, "otp-wrapper"], [3, "outputResetData", 4, "ngIf"], [3, "outputResetData"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_form_3_Template, 32, 6, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "OR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Log in with Google");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-tab", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-sign-up");

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
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"]],
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

    var CommonService =
    /*#__PURE__*/
    function () {
      function CommonService(_snackBar, restService) {
        _classCallCheck(this, CommonService);

        this._snackBar = _snackBar;
        this.restService = restService;
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
        }
      }]);

      return CommonService;
    }();

    CommonService.ɵfac = function CommonService_Factory(t) {
      return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_restApi_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]));
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
          var _this6 = this;

          var basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
          console.log("basicAuthHeaderString +++++++++++++ ", basicAuthHeaderString); // request = request.clone({
          //   setHeaders: {
          //     'content-type': 'application/json'
          //   }
          // });

          if (basicAuthHeaderString) {
            console.log("if condition");
            request = request.clone({
              setHeaders: {
                'Authorization': basicAuthHeaderString,
                // 'token': basicAuthHeaderString,
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
            return _this6.handleResponse(request, event);
          }, function (error) {
            return _this6.handleError(request, error);
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
          var _this7 = this;

          //  console.log('HttpRequestHttpRequest');
          this.showLoader();
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
              _this7.onEnd();
            }
          }, function (err) {
            _this7.onEnd();
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
        var _this8 = this;

        _classCallCheck(this, RestService);

        this.http = http;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.checkUserData = this.messageSource.asObservable();

        this.create = function (route, body) {
          console.log("route", route, "body", body);
          return _this8.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlAddress + route, body);
        };

        this.get = function (route) {
          console.log("**GET**", "route", route);
          return _this8.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlAddress + route);
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


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function SignUpComponent_form_3_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login type is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_3_mat_error_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile number is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_3_mat_error_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid mobile number! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_3_mat_error_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_3_mat_error_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_3_mat_error_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_3_mat_error_41_Template(rf, ctx) {
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
        var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_form_3_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r125.submitForm(ctx_r125.signUpValidateForm.value);
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mobile Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SignUpComponent_form_3_mat_error_24_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignUpComponent_form_3_mat_error_25_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "mail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SignUpComponent_form_3_mat_error_32_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SignUpComponent_form_3_mat_error_33_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "vpn_key");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SignUpComponent_form_3_mat_error_40_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, SignUpComponent_form_3_mat_error_41_Template, 6, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Sign Up ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r116.signUpValidateForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r116.signUpValidateForm.get("userType").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r116.signUpValidateForm.get("contactNo").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r116.signUpValidateForm.get("contactNo").hasError("required") && ctx_r116.signUpValidateForm.get("contactNo").hasError("mobileErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r116.signUpValidateForm.get("email").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r116.signUpValidateForm.get("email").hasError("email"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r116.signUpValidateForm.get("password").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r116.signUpValidateForm.get("password").hasError("required") && ctx_r116.signUpValidateForm.get("password").hasError("passErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r116.signUpValidateForm.invalid);
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
        var _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_div_4_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r129);

          var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r128.otpSubmitForm(ctx_r128.otpForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "OTP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignUpComponent_div_4_mat_error_8_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Submit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r117.otpForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r117.otpForm.get("otp").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r117.otpForm.invalid);
      }
    }

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(_formBuilder, _signUpService, _commonService) {
        _classCallCheck(this, SignUpComponent);

        this._formBuilder = _formBuilder;
        this._signUpService = _signUpService;
        this._commonService = _commonService;
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
          var _this9 = this;

          for (var key in this.signUpValidateForm.controls) {
            this.signUpValidateForm.controls[key].markAsDirty();
            this.signUpValidateForm.controls[key].updateValueAndValidity();
          }

          console.log("submit Form ", value);

          this._signUpService.signUp(value).subscribe(function (responseData) {
            console.log("responseData login ", responseData); // responseData.status = 200;

            var resonseMessage = responseData.message;

            if (responseData.status == 200) {
              _this9.isVisible = true;
            } else {
              _this9._commonService.tostMessage(resonseMessage);
            }
          });
        }
      }, {
        key: "otpSubmitForm",
        value: function otpSubmitForm(value) {
          var _this10 = this;

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
              _this10._commonService.tostMessage(resonseMessage);

              _this10.isVisible = false;
              _this10.message = "User registered and verified Successfully, Please Login!";

              _this10.signUpValidateForm.reset(); // this.outputSignUpData.emit(true);

            } else {
              _this10._commonService.tostMessage(resonseMessage);

              _this10.message = "OTP invalid, please resend your OTP!";

              _this10.signUpValidateForm.reset(); // this.outputSignUpData.emit(false);

            }
          }); // this.dialogRef.close(value);

        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
      return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sign_up_service__WEBPACK_IMPORTED_MODULE_3__["signUpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]));
    };

    SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignUpComponent,
      selectors: [["app-sign-up"]],
      outputs: {
        outputSignUpData: "outputSignUpData"
      },
      decls: 5,
      vars: 3,
      consts: [[1, "form-wrapper"], ["name", "validateForm", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "otp-wrapper", 4, "ngIf"], ["name", "validateForm", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-field-width"], ["matInput", "", "formControlName", "name"], ["matSuffix", "", 1, "secondary-text"], [1, "form-field-width", "mt-2"], ["name", "userType", "formControlName", "userType"], ["value", "1"], ["value", "2"], [4, "ngIf"], ["matInput", "", "formControlName", "contactNo"], ["matInput", "", "formControlName", "email"], ["matInput", "", "type", "password", "formControlName", "password"], ["mat-raised-button", "", "color", "primary", "aria-label", "CREATE AN ACCOUNT", 1, "submit-button", "mt-5", 3, "disabled"], [1, "otp-wrapper"], ["name", "otpForm", "novalidate", "", 3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "otp"], ["mat-raised-button", "", "color", "primary", "aria-label", "LOGIN", 1, "submit-button", "mt-3", 3, "disabled"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignUpComponent_form_3_Template, 44, 9, "form", 1);

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
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]],
      styles: [".form-wrapper[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.form-field-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  background: #fbc02d;\n  text-align: center;\n  border-radius: 9px;\n  font-size: 17px;\n}\n\n@media (max-width: 768px) {\n  .form-wrapper[_ngcontent-%COMP%] {\n    padding: 20px 0px;\n  }\n\n  .form-field-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .pr-3[_ngcontent-%COMP%] {\n    padding-right: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9DOlxcU2FpQXN0cm9Xb3JsZC0yXFxzYWlBc3Ryb1dvcmxkR2l0SHViXFxzYWlBc3Ryb1dlYkFwcC9zcmNcXGFwcFxcc2lnbi11cFxcc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0MsV0FBQTtBQ0NEOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxpQkFBQTtFQ0NGOztFRENBO0lBQ0UsV0FBQTtFQ0VGOztFREFDO0lBQ0UsNkJBQUE7RUNHSDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0td3JhcHBlciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmZvcm0tZmllbGQtd2lkdGh7XHJcbiB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uZm9ybS13cmFwcGVyIGgyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmJjMDJkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuZm9ybS13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gIH1cclxuICAuZm9ybS1maWVsZC13aWR0aHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgIH1cclxuICAgLnByLTN7XHJcbiAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxufVxyXG4iLCIuZm9ybS13cmFwcGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmZvcm0tZmllbGQtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0td3JhcHBlciBoMiB7XG4gIGJhY2tncm91bmQ6ICNmYmMwMmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9ybS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgfVxuXG4gIC5mb3JtLWZpZWxkLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wci0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"]
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
          var _this11 = this;

          // console.log("oninit spinner ");
          // this.show = true;
          // this.spinner.show();
          this.isSpinning$ = this.loaderService.loaderState;
          this.isSpinning$.subscribe(function (res) {
            console.log("res of loader ", res);

            if (res) {
              _this11.show = true;

              _this11.spinner.show();
            } else {
              _this11.show = false;

              _this11.spinner.hide();
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
      urlAddress: 'http://ec2-3-21-75-140.us-east-2.compute.amazonaws.com:3000'
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
