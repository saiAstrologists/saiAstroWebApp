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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["sidenav"];

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(dialog) {
        _classCallCheck(this, AppComponent);

        this.dialog = dialog;
        this.title = 'saiAstroWorld';
        this.reason = '';
      }

      _createClass(AppComponent, [{
        key: "close",
        value: function close(reason) {
          this.reason = reason;
          this.sidenav.close();
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], {
            width: '500px'
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
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
      decls: 130,
      vars: 1,
      consts: [[1, "sidenav-container", 3, "backdropClick"], ["disableClose", "", 1, "drawer-container", 3, "fixedInViewport", "keydown.escape"], ["sidenav", ""], [1, "side-bar-logo"], ["src", "../assets/images/logo/PNG/font120px.png", 1, "mb-2"], ["id", "list-tab", "role", "tablist", 1, "list-group", "side-bar-quick-link"], ["id", "astro-talk", "data-toggle", "list", "href", "#astro-talk", "role", "tab", "aria-controls", "astro-talk", 1, "list-group-item", "list-group-item-action", "active"], ["id", "horoscope", "data-toggle", "list", "href", "#horoscope", "role", "tab", "aria-controls", "horoscope", 1, "list-group-item", "list-group-item-action"], ["id", "kundli", "data-toggle", "list", "href", "#kundli", "role", "tab", "aria-controls", "kundli", 1, "list-group-item", "list-group-item-action"], ["id", "astro-mall", "data-toggle", "list", "href", "#astro-mall", "role", "tab", "aria-controls", "astro-mall", 1, "list-group-item", "list-group-item-action"], ["id", "blog", "data-toggle", "list", "href", "#blog", "role", "tab", "aria-controls", "blog", 1, "list-group-item", "list-group-item-action"], [1, "toolbar-wrapper"], ["mat-button", "", 1, "menu-button", 3, "click"], ["aria-hidden", "false"], ["src", "../assets/images/logo/PNG/font120px.png"], [1, "example-spacer"], [1, "quick-link"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", 1, "hm-wallet"], ["mat-raised-button", "", 1, "hm-cart"], [1, "fixed-plugin"], [1, "example-button-row"], ["mat-mini-fab", "", "aria-label", "Example icon-button with a heart icon"], [1, "footer-wrapper", "py-5"], [1, "footer-top"], [1, "container"], [1, "row"], [1, "col-md-3", "footer-about", "wow", "fadeInUp", "animated", 2, "visibility", "visible", "animation-name", "fadeInUp"], [1, "col-md-4", "offset-md-1", "footer-contact", "wow", "fadeInDown", "animated", 2, "visibility", "visible", "animation-name", "fadeInDown"], [1, "fa", "fa-map-marker-alt"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope"], ["href", "mailto:hello@domain.com"], [1, "fa", "fa-skype"], [1, "col-md-4", "footer-links", "wow", "fadeInUp", "animated", 2, "visibility", "visible", "animation-name", "fadeInUp"], [1, "col"], [1, "col-md-6"], ["href", "#top-content", 1, "scroll-link"], ["href", "#"], [1, "footer-bottom", "pt-5"], [1, "col", "footer-social"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Talk to Astrologer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Horoscope 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Kundli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "AstroMall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-toolbar", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r15.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "view_headline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Talk to Astrologer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Chat with Astrologer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Horoscope 2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Kundli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "AstroMall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_39_listener() {
            return ctx.openDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "account_balance_wallet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "assignment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "question_answer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "footer", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "About us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " We are a young company always looking for new and creative ideas to help you with our products in your everyday work. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\xA9 Company Inc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Demo Address 10, 10136 Turin Italy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Phone: (0039) 123 45 67 890");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "hello@domain.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Skype: you_online");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "How it works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Our clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Plans & pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Affiliates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Terms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 43);

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
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]],
      styles: [".sidenav-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.facebook-color[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: #fff;\n}\n\n.instagram-color[_ngcontent-%COMP%] {\n  background-color: purple;\n  color: #fff;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\n.example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky;\n  \n  top: 0;\n  \n  z-index: 1000;\n  \n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   .mat-icon.hm-wallet[_ngcontent-%COMP%] {\n  margin: 0px 20px;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   button.menu-button[_ngcontent-%COMP%] {\n  min-width: 36px;\n  left: -11px;\n  padding: 0px !important;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  font-size: 14px;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.toolbar-wrapper[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n\n.fixed-plugin[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 115px;\n  right: 15px;\n  line-height: 48px;\n  width: 64px;\n  background: rgba(0, 0, 0, 0.08);\n  z-index: 1031;\n  border-radius: 8px 0 0 8px;\n  text-align: center;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .follow-text[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .side-bar-quick-link[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.side-bar-quick-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1rem 50px;\n}\n\n.mat-sidenav[_ngcontent-%COMP%] {\n  width: 230px;\n}\n\n.mat-sidenav[_ngcontent-%COMP%]   .side-bar-logo[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mat-sidenav[_ngcontent-%COMP%]   .side-bar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  padding-top: 10px;\n}\n\n.footer-wrapper[_ngcontent-%COMP%] {\n  background-color: #f9a825;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 20px;\n}\n\n.footer-wrapper[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n}\n\n@media (max-width: 1024px) {\n  .fixed-plugin[_ngcontent-%COMP%] {\n    right: 0px;\n  }\n\n  .toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n\n@media (max-width: 768px) {\n  .fixed-plugin[_ngcontent-%COMP%] {\n    right: 0px;\n  }\n\n  .toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding: 0 0px;\n  }\n\n  .quick-link[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n\n  .side-bar-quick-link[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n@media (max-width: 640px) {\n  .toolbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .mat-icon.hm-wallet[_ngcontent-%COMP%] {\n    margin: 0px 14px;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    font-size: 12px;\n    min-width: 48px;\n    padding: 0px;\n    line-height: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFNhaUFzdHJvV29ybGQtMlxcc2FpQXN0cm9Xb3JsZEdpdEh1Ylxcc2FpQXN0cm9XZWJBcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDSkY7O0FET0E7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNKRjs7QURNQTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtBQ0hGOztBRFlBO0VBQ0UsZUFBQTtBQ1RGOztBRFlBO0VBQ0UsY0FBQTtBQ1RGOztBRFlBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUEwQix5QkFBQTtFQUMxQixNQUFBO0VBQVEseUNBQUE7RUFDUixhQUFBO0VBQWUsK0RBQUE7QUNOZjs7QURPQTtFQUNFLGdCQUFBO0FDTEY7O0FEU0E7RUFDRSxtQkFBQTtBQ05GOztBRE9FO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0xKOztBRFVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDUEY7O0FEVUE7RUFDQSxVQUFBO0FDUEE7O0FEVUE7RUFDRSxtQkFBQTtBQ1BGOztBRFVBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFNFO0VBQ0UsV0FBQTtBQ1BKOztBRFVHO0VBQ0UsbUJBdkZPO0FDK0VaOztBRFlBO0VBR0UsYUFBQTtBQ1hGOztBRGNBO0VBQ0Usa0JBQUE7QUNYRjs7QURjQTtFQUNFLFlBQUE7QUNYRjs7QURZRTtFQUNFLGtCQUFBO0FDVko7O0FEV007RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNUTjs7QURjQTtFQUNFLHlCQWhITztBQ3FHVDs7QURhSTtFQUNFLHFCQUFBO0FDWE47O0FEYUk7RUFDRSxXQXhIRTtBQzZHUjs7QURjRTtFQUNFLGtCQUFBO0FDWko7O0FEY007RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNaUjs7QURjTTtFQUNFLHNCQUFBO0FDWlI7O0FEc0JBO0VBQ0U7SUFDRSxVQUFBO0VDbkJGOztFRHFCQTtJQUNFLFVBQUE7RUNsQkY7QUFDRjs7QURxQkE7RUFDRTtJQUNFLFVBQUE7RUNuQkY7O0VEcUJBO0lBQ0UsY0FBQTtFQ2xCRjs7RURxQkE7SUFDRSxhQUFBO0VDbEJGOztFRG9CQTtJQUNFLFVBQUE7RUNqQkY7O0VEb0JBO0lBQ0UsY0FBQTtFQ2pCRjtBQUNGOztBRHFCQTtFQUdNO0lBQ0UsVUFBQTtFQ3JCTjtFRHVCSTtJQUNFLGdCQUFBO0VDckJOO0VEdUJJO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQ3JCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiR3aGl0ZTogI2ZmZjtcclxuJG9mZi13aGl0ZTogI2U4ZThlODtcclxuJHByaW1hcjogI2Y5YTgyNTtcclxuXHJcbi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLmZhY2Vib29rLWNvbG9ye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmluc3RhZ3JhbS1jb2xvcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyLXJvd3tcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi8vIG1hdC10b29sYmFyLXJvdyAubWF0LWJ1dHRvbiB7XHJcbi8vIGxlZnQ6IC0zcHg7XHJcbi8vIC8qIHRvcDogMHB4OyAqL1xyXG4vLyBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4vLyB9XHJcblxyXG4uZXhhbXBsZS1pY29uIHtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi50b29sYmFyLXdyYXBwZXIge1xyXG5wb3NpdGlvbjogc3RpY2t5O1xyXG5wb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIEZvciBtYWNPUy9pT1MgU2FmYXJpICovXHJcbnRvcDogMDsgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXHJcbnotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cclxuLm1hdC1pY29uLmhtLXdhbGxldCB7XHJcbiAgbWFyZ2luOiAwcHggMjBweDtcclxufVxyXG59XHJcblxyXG4udG9vbGJhci13cmFwcGVyIGJ1dHRvbntcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICYubWVudS1idXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiAzNnB4O1xyXG4gICAgbGVmdDogLTExcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG59XHJcblxyXG4udG9vbGJhci13cmFwcGVyIHNwYW57XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi50b29sYmFyLXdyYXBwZXIgc3BhbiBpbWd7XHJcbndpZHRoIDogMzAlO1xyXG59XHJcblxyXG4udG9vbGJhci13cmFwcGVyIC5ub3RpZmljYXRpb24taWNvbntcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAxMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBsaW5lLWhlaWdodDogNDhweDtcclxuICB3aWR0aDogNjRweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gIHotaW5kZXg6IDEwMzE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAuZm9sbG93LXRleHQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgIH1cclxuXHJcbiAgIGJ1dHRvbntcclxuICAgICBiYWNrZ3JvdW5kOiAkb2ZmLXdoaXRlO1xyXG4gICB9XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW5cclxuXHJcbi5zaWRlLWJhci1xdWljay1saW5re1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaWRlLWJhci1xdWljay1saW5rIGEge1xyXG4gIHBhZGRpbmc6IDFyZW0gNTBweDtcclxufVxyXG5cclxuLm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgLnNpZGUtYmFyLWxvZ28ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBpbWd7XHJcbiAgICAgIHdpZHRoOjgwJTtcclxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyLXdyYXBwZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcjtcclxuICBwIHtcclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBhOmhvdmVye1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZm9vdGVyLWJvdHRvbSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAuZm9vdGVyLXNvY2lhbCB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAuZml4ZWQtcGx1Z2luIHtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC50b29sYmFyLXdyYXBwZXIgc3BhbiBpbWd7XHJcbiAgICB3aWR0aCA6IDc1JTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5maXhlZC1wbHVnaW4ge1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLnRvb2xiYXItd3JhcHBlciBzcGFue1xyXG4gICAgcGFkZGluZzogMCAwcHg7XHJcbiAgfVxyXG5cclxuICAucXVpY2stbGlua3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC50b29sYmFyLXdyYXBwZXIgc3BhbiBpbWd7XHJcbiAgICB3aWR0aCA6IDQwJTtcclxuICB9XHJcblxyXG4gIC5zaWRlLWJhci1xdWljay1saW5rIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG5cclxuICAudG9vbGJhci13cmFwcGVye1xyXG4gICAgICBzcGFuIGltZ3tcclxuICAgICAgICB3aWR0aCA6IDg1JTtcclxuICAgICAgfVxyXG4gICAgICAubWF0LWljb24uaG0td2FsbGV0IHtcclxuICAgICAgICBtYXJnaW46IDBweCAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA0OHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5mYWNlYm9vay1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaW5zdGFncmFtLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICBjb2xvcjogI2ZmZjtcbn1cblxubWF0LXRvb2xiYXItcm93IHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uZXhhbXBsZS1pY29uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnRvb2xiYXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cbiAgdG9wOiAwO1xuICAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cbiAgei1pbmRleDogMTAwMDtcbiAgLyogRW5zdXJlIHRoYXQgeW91ciBhcHAncyBjb250ZW50IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgdG9vbGJhciAqL1xufVxuLnRvb2xiYXItd3JhcHBlciAubWF0LWljb24uaG0td2FsbGV0IHtcbiAgbWFyZ2luOiAwcHggMjBweDtcbn1cblxuLnRvb2xiYXItd3JhcHBlciBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLnRvb2xiYXItd3JhcHBlciBidXR0b24ubWVudS1idXR0b24ge1xuICBtaW4td2lkdGg6IDM2cHg7XG4gIGxlZnQ6IC0xMXB4O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRvb2xiYXItd3JhcHBlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udG9vbGJhci13cmFwcGVyIHNwYW4gaW1nIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLnRvb2xiYXItd3JhcHBlciAubm90aWZpY2F0aW9uLWljb24ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uZml4ZWQtcGx1Z2luIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDExNXB4O1xuICByaWdodDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA2NHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB6LWluZGV4OiAxMDMxO1xuICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZpeGVkLXBsdWdpbiAuZm9sbG93LXRleHQge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5maXhlZC1wbHVnaW4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuLmZpeGVkLXBsdWdpbiAuc2lkZS1iYXItcXVpY2stbGluayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaWRlLWJhci1xdWljay1saW5rIGEge1xuICBwYWRkaW5nOiAxcmVtIDUwcHg7XG59XG5cbi5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyMzBweDtcbn1cbi5tYXQtc2lkZW5hdiAuc2lkZS1iYXItbG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYXQtc2lkZW5hdiAuc2lkZS1iYXItbG9nbyBpbWcge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YTgyNTtcbn1cbi5mb290ZXItd3JhcHBlciBwIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9vdGVyLXdyYXBwZXIgcCBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uZm9vdGVyLXdyYXBwZXIgLmZvb3Rlci1ib3R0b20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGVyLXdyYXBwZXIgLmZvb3Rlci1ib3R0b20gLmZvb3Rlci1zb2NpYWwgYSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZm9vdGVyLXdyYXBwZXIgLmZvb3Rlci1ib3R0b20gLmZvb3Rlci1zb2NpYWwgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmZpeGVkLXBsdWdpbiB7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxuXG4gIC50b29sYmFyLXdyYXBwZXIgc3BhbiBpbWcge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZml4ZWQtcGx1Z2luIHtcbiAgICByaWdodDogMHB4O1xuICB9XG5cbiAgLnRvb2xiYXItd3JhcHBlciBzcGFuIHtcbiAgICBwYWRkaW5nOiAwIDBweDtcbiAgfVxuXG4gIC5xdWljay1saW5rIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnRvb2xiYXItd3JhcHBlciBzcGFuIGltZyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuXG4gIC5zaWRlLWJhci1xdWljay1saW5rIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC50b29sYmFyLXdyYXBwZXIgc3BhbiBpbWcge1xuICAgIHdpZHRoOiA4NSU7XG4gIH1cbiAgLnRvb2xiYXItd3JhcHBlciAubWF0LWljb24uaG0td2FsbGV0IHtcbiAgICBtYXJnaW46IDBweCAxNHB4O1xuICB9XG4gIC50b29sYmFyLXdyYXBwZXIgYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtaW4td2lkdGg6IDQ4cHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG59Il19 */"]
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
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
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
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"], _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], // MatSliderModule,
      // MatSidenavModule,
      // MatFormFieldModule,
      // MatSelectModule,
      // MatToolbarModule,
      // MatIconModule,
      _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"], _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], // MatSliderModule,
        // MatSidenavModule,
        // MatFormFieldModule,
        // MatSelectModule,
        // MatToolbarModule,
        // MatIconModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"], _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], // MatSliderModule,
          // MatSidenavModule,
          // MatFormFieldModule,
          // MatSelectModule,
          // MatToolbarModule,
          // MatIconModule,
          _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _shared_service_http_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_10__["HttpIntercepterBasicAuthService"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_3_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.submitForm(ctx_r10.validateForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mobile Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_form_3_mat_error_7_Template, 2, 0, "mat-error", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_form_3_mat_error_8_Template, 2, 0, "mat-error", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "User");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Astrolloger");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Login type is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "vpn_key");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_form_3_mat_error_25_Template, 2, 0, "mat-error", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_form_3_mat_error_26_Template, 6, 0, "mat-error", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Forgot Password? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " LOGIN ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.validateForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.validateForm.get("mobile").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.validateForm.get("mobile").hasError("required") && ctx_r4.validateForm.get("mobile").hasError("mobileErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.validateForm.get("password").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.validateForm.get("password").hasError("required") && ctx_r4.validateForm.get("password").hasError("passErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/auth/forgot-password-2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.validateForm.invalid);
      }
    }

    function LoginComponent_div_4_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " OTP is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_4_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.otpSubmitForm(ctx_r13.otpForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "OTP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_4_mat_error_8_Template, 2, 0, "mat-error", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Submit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r5.otpForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.otpForm.get("otp").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.otpForm.invalid);
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(_formBuilder, dialogRef, _loginService) {
        _classCallCheck(this, LoginComponent);

        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this._loginService = _loginService;
        this.isVisible = false;

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
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.mobileNumber]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.passwordPattern]],
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.otpForm = this._formBuilder.group({
            otp: ['']
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(value) {
          var _this = this;

          for (var key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
          }

          console.log("submit Form ", value); // this._route.navigate(['/profile']);

          this._loginService.login(value).subscribe(function (responseData) {
            console.log("responseData login ", responseData);
            var resonseMessage = responseData.message;

            if (responseData.status == 200) {
              _this.isVisible = true;
            } else {
              alert(resonseMessage);
            }
          });
        }
      }, {
        key: "otpSubmitForm",
        value: function otpSubmitForm(value) {
          alert("OTP Submited Successfuly");
          this.dialogRef.close(value);
        }
      }, {
        key: "signUpSubmitForm",
        value: function signUpSubmitForm(value) {
          alert("Registered Successfuly");
          this.dialogRef.close(value);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_4__["loginService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 16,
      vars: 2,
      consts: [["mat-align-tabs", "center"], ["label", "Login"], [1, "form-wrapper"], ["name", "validateForm", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "otp-wrapper", 4, "ngIf"], [1, "separator", "login"], [1, "text"], [1, "d-flex", "justify-content-center"], ["mat-stroked-button", "", 1, "google"], ["src", "../../assets/images/social/google.png"], ["label", "Sign Up"], [3, "outputSignUpData"], ["name", "validateForm", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-field-width"], ["matInput", "", "formControlName", "mobile", "minlength", "10", "maxlength", "10"], ["matSuffix", "", 1, "secondary-text"], [4, "ngIf"], [1, "form-field-width", "mt-2"], ["name", "type", "formControlName", "type"], ["value", "1"], ["value", "2"], ["matInput", "", "type", "password", "formControlName", "password"], [1, "d-flex", "mt-5", "justify-content-end"], [1, "forgot-password", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", "aria-label", "LOGIN", 1, "submit-button", "mt-3", 3, "disabled"], [1, "otp-wrapper"], ["name", "otpForm", "novalidate", "", 3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "otp"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_form_3_Template, 32, 7, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 11, 3, "div", 4);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-sign-up", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("outputSignUpData", function LoginComponent_Template_app_sign_up_outputSignUpData_15_listener($event) {
            return ctx.signUpSubmitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"]],
      styles: [".form-wrapper[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.form-field-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton.google[_ngcontent-%COMP%], button.facebook[_ngcontent-%COMP%] {\n  text-transform: none;\n  color: #000;\n  font-size: 13px;\n}\n\nbutton.google[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], button.facebook[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  margin: 0 8px 0 0;\n}\n\nbutton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20%;\n  padding-bottom: 5px;\n  padding-right: 10px;\n}\n\nbutton.google[_ngcontent-%COMP%] {\n  border: 1px solid #D73D32;\n  margin-bottom: 8px;\n}\n\nbutton.facebook[_ngcontent-%COMP%] {\n  background-color: #3f5c9a;\n}\n\n.register[_ngcontent-%COMP%] {\n  margin: 32px auto 24px auto;\n  width: 250px;\n  font-weight: 600;\n}\n\n.register[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n@media (max-width: 768px) {\n  .form-wrapper[_ngcontent-%COMP%] {\n    padding: 20px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFNhaUFzdHJvV29ybGQtMlxcc2FpQXN0cm9Xb3JsZEdpdEh1Ylxcc2FpQXN0cm9XZWJBcHAvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDQSxXQUFBO0FDQUE7O0FEd0NFO0VBRUksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3RDTjs7QUR3Q007RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUN0Q1Y7O0FEeUNFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUN2Q0o7O0FEMENFO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQ3hDTjs7QUQyQ0U7RUFDSSx5QkFBQTtBQ3pDTjs7QUQ2Q0E7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQzFDRjs7QUQ0Q0U7RUFDSSxpQkFBQTtBQzFDTjs7QURtREE7RUFDRTtJQUNFLGlCQUFBO0VDakRGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS13cmFwcGVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1maWVsZC13aWR0aHtcclxud2lkdGg6MTAwJTtcclxufVxyXG5cclxuLy8gLnNlcGFyYXRvciB7XHJcbi8vICAgZm9udC1zaXplOiAxNXB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgd2lkdGg6IDEwMHB4O1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbi8vICAgLnRleHQge1xyXG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuLy8gICAgICAgei1pbmRleDogOTk5OTtcclxuXHJcbi8vICAgICAgICY6YmVmb3JlLFxyXG4vLyAgICAgICAmOmFmdGVyIHtcclxuLy8gICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4vLyAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICAgICAgICB3aWR0aDogMzBweDtcclxuLy8gICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICAgIHRvcDogMTBweDtcclxuLy8gICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgJjpiZWZvcmUge1xyXG4vLyAgICAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgICY6YWZ0ZXIge1xyXG4vLyAgICAgICAgICAgbGVmdDogMTAwJTtcclxuLy8gICAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuYnV0dG9uIHtcclxuXHJcbiAgJi5nb29nbGUsXHJcbiAgJi5mYWNlYm9vayB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG5cclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICBtYXJnaW46IDAgOHB4IDAgMDtcclxuICAgICAgfVxyXG4gIH1cclxuICBpbWd7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAmLmdvb2dsZSB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNENzNEMzI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG4gICYuZmFjZWJvb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDkyLCAxNTQpO1xyXG4gIH1cclxufVxyXG5cclxuLnJlZ2lzdGVyIHtcclxuICBtYXJnaW46IDMycHggYXV0byAyNHB4IGF1dG87XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gIC50ZXh0IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAubGluayB7XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5mb3JtLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5mb3JtLXdyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZm9ybS1maWVsZC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24uZ29vZ2xlLCBidXR0b24uZmFjZWJvb2sge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbmJ1dHRvbi5nb29nbGUgbWF0LWljb24sIGJ1dHRvbi5mYWNlYm9vayBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDAgOHB4IDAgMDtcbn1cbmJ1dHRvbiBpbWcge1xuICB3aWR0aDogMjAlO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuYnV0dG9uLmdvb2dsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNENzNEMzI7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmJ1dHRvbi5mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjVjOWE7XG59XG5cbi5yZWdpc3RlciB7XG4gIG1hcmdpbjogMzJweCBhdXRvIDI0cHggYXV0bztcbiAgd2lkdGg6IDI1MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnJlZ2lzdGVyIC50ZXh0IHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvcm0td3JhcHBlciB7XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG4gIH1cbn0iXX0= */"]
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
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
        }, {
          type: _login_service__WEBPACK_IMPORTED_MODULE_4__["loginService"]
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
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
        }]
      }], null, null);
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
          return "/users/register";
        }
      }, {
        key: "signUp",
        get: function get() {
          return "/users/register";
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
          var token = JSON.parse(sessionStorage.getItem('token')); // console.log("get token console ",token);

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


    var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../authentication/authentication.service */
    "./src/app/shared/service/authentication/authentication.service.ts");

    var HttpIntercepterBasicAuthService =
    /*#__PURE__*/
    function () {
      function HttpIntercepterBasicAuthService(basicAuthenticationService) {
        _classCallCheck(this, HttpIntercepterBasicAuthService);

        this.basicAuthenticationService = basicAuthenticationService;
      }

      _createClass(HttpIntercepterBasicAuthService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this2 = this;

          var basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
          console.log("basicAuthHeaderString +++++++++++++ ", basicAuthHeaderString);
          request = request.clone({
            setHeaders: {
              'Content-Type': 'application/json'
            }
          }); // if (basicAuthHeaderString) {
          //   request = request.clone({
          //     setHeaders: {
          //       Authorization: basicAuthHeaderString,
          //       'Content-Type': 'application/json'
          //     }
          //   });
          // } else {
          //   request = request.clone({
          //     setHeaders: {
          //       'Content-Type': 'application/json'
          //     }
          //   });
          // }

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            return _this2.handleResponse(request, event);
          }, function (error) {
            return _this2.handleError(request, error);
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
        value: function handleError(req, event) {
          if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
            if (event.headers.get('Authorization')) {
              //  console.log('handleError',event.headers.get('Authorization'));
              sessionStorage.setItem('token', event.headers.get('Authorization'));
            }
          }
        }
      }]);

      return HttpIntercepterBasicAuthService;
    }();

    HttpIntercepterBasicAuthService.ɵfac = function HttpIntercepterBasicAuthService_Factory(t) {
      return new (t || HttpIntercepterBasicAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
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
          type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // import { callBackendApi } from '../../constant/rest-url.constants';


    var RestService = function RestService(http) {
      var _this3 = this;

      _classCallCheck(this, RestService);

      this.http = http;

      this.create = function (route, body) {
        console.log("route", route, "body", body);
        return _this3.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlAddress + route, body);
      };
    };

    RestService.ɵfac = function RestService_Factory(t) {
      return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
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
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function SignUpComponent_form_1_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login type is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_1_mat_error_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile number is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_1_mat_error_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid mobile number! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_1_mat_error_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_1_mat_error_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_1_mat_error_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_form_1_mat_error_41_Template(rf, ctx) {
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

    function SignUpComponent_form_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_form_1_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.submitForm(ctx_r26.signUpValidateForm.value);
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SignUpComponent_form_1_mat_error_17_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mobile Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SignUpComponent_form_1_mat_error_24_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignUpComponent_form_1_mat_error_25_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "mail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SignUpComponent_form_1_mat_error_32_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SignUpComponent_form_1_mat_error_33_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "vpn_key");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SignUpComponent_form_1_mat_error_40_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, SignUpComponent_form_1_mat_error_41_Template, 6, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Sign Up ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r17.signUpValidateForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.signUpValidateForm.get("type").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.signUpValidateForm.get("mobile").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.signUpValidateForm.get("mobile").hasError("required") && ctx_r17.signUpValidateForm.get("mobile").hasError("mobileErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.signUpValidateForm.get("email").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.signUpValidateForm.get("email").hasError("email"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.signUpValidateForm.get("password").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.signUpValidateForm.get("password").hasError("required") && ctx_r17.signUpValidateForm.get("password").hasError("passErr"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r17.signUpValidateForm.invalid);
      }
    }

    function SignUpComponent_div_2_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " OTP is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_div_2_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.otpSubmitForm(ctx_r29.otpForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "OTP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignUpComponent_div_2_mat_error_8_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Submit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r18.otpForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.otpForm.get("otp").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r18.otpForm.invalid);
      }
    }

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(_formBuilder, _signUpService) {
        _classCallCheck(this, SignUpComponent);

        this._formBuilder = _formBuilder;
        this._signUpService = _signUpService;
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
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.mobileNumber]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.passwordPattern]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
          this.otpForm = this._formBuilder.group({
            otp: ['']
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(value) {
          var _this4 = this;

          for (var key in this.signUpValidateForm.controls) {
            this.signUpValidateForm.controls[key].markAsDirty();
            this.signUpValidateForm.controls[key].updateValueAndValidity();
          }

          console.log("submit Form ", value);

          this._signUpService.signUp(value).subscribe(function (responseData) {
            console.log("responseData login ", responseData);
            var resonseMessage = responseData.message;

            if (responseData.status == 200) {
              _this4.isVisible = true;
            } else {
              alert(resonseMessage);
            }
          });
        }
      }, {
        key: "otpSubmitForm",
        value: function otpSubmitForm(value) {
          this.outputSignUpData.emit(value); // this.dialogRef.close(value);
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
      return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sign_up_service__WEBPACK_IMPORTED_MODULE_3__["signUpService"]));
    };

    SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignUpComponent,
      selectors: [["app-sign-up"]],
      outputs: {
        outputSignUpData: "outputSignUpData"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "form-wrapper"], ["name", "validateForm", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "otp-wrapper", 4, "ngIf"], ["name", "validateForm", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-field-width"], ["matInput", "", "formControlName", "name"], ["matSuffix", "", 1, "secondary-text"], [1, "form-field-width", "mt-2"], ["name", "type", "formControlName", "type"], ["value", "1"], ["value", "2"], [4, "ngIf"], ["matInput", "", "formControlName", "mobile"], ["matInput", "", "formControlName", "email"], ["matInput", "", "type", "password", "formControlName", "password"], ["mat-raised-button", "", "color", "primary", "aria-label", "CREATE AN ACCOUNT", 1, "submit-button", "mt-5", 3, "disabled"], [1, "otp-wrapper"], ["name", "otpForm", "novalidate", "", 3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "otp"], ["mat-raised-button", "", "color", "primary", "aria-label", "LOGIN", 1, "submit-button", "mt-3", 3, "disabled"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_form_1_Template, 44, 9, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpComponent_div_2_Template, 11, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
      styles: [".form-wrapper[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.form-field-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 768px) {\n  .form-wrapper[_ngcontent-%COMP%] {\n    padding: 20px 0px;\n  }\n\n  .form-field-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .pr-3[_ngcontent-%COMP%] {\n    padding-right: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9DOlxcU2FpQXN0cm9Xb3JsZC0yXFxzYWlBc3Ryb1dvcmxkR2l0SHViXFxzYWlBc3Ryb1dlYkFwcC9zcmNcXGFwcFxcc2lnbi11cFxcc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0MsV0FBQTtBQ0NEOztBREdBO0VBQ0U7SUFDRSxpQkFBQTtFQ0FGOztFREVBO0lBQ0UsV0FBQTtFQ0NGOztFRENDO0lBQ0UsNkJBQUE7RUNFSDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0td3JhcHBlciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmZvcm0tZmllbGQtd2lkdGh7XHJcbiB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZvcm0td3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICB9XHJcbiAgLmZvcm0tZmllbGQtd2lkdGh7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICB9XHJcbiAgIC5wci0ze1xyXG4gICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbn1cclxuIiwiLmZvcm0td3JhcHBlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mb3JtLWZpZWxkLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9ybS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgfVxuXG4gIC5mb3JtLWZpZWxkLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wci0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"]
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