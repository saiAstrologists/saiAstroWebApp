(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "./src/app/blog/blog-detail/blog-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/blog/blog-detail/blog-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: BlogDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailComponent", function() { return BlogDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog/blog.service.ts");



class BlogDetailComponent {
    constructor(blogService) {
        this.blogService = blogService;
    }
    ngOnInit() {
        let blogData = this.blogService.getBlogDetail();
        if (blogData) {
            this.blogDetail = blogData;
        }
    }
}
BlogDetailComponent.ɵfac = function BlogDetailComponent_Factory(t) { return new (t || BlogDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"])); };
BlogDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogDetailComponent, selectors: [["app-blog-detail"]], decls: 4, vars: 1, consts: [[1, "blog-detail-wrapper"], [1, "container"], [1, "blog-main-view"], [3, "innerHtml"]], template: function BlogDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.blogDetail == null ? null : ctx.blogDetail.blogBody, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: [".blog-detail-wrapper {\n  margin: 3rem 0 0;\n}\n.blog-detail-wrapper .blog-main-view p > img {\n  max-width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLWRldGFpbC9DOlxcU2FpQXN0cm9Xb3JsZC0yXFxzYWlBc3Ryb1dvcmxkR2l0SHViXFxzYWlBc3Ryb1dlYkFwcC9zcmNcXGFwcFxcYmxvZ1xcYmxvZy1kZXRhaWxcXGJsb2ctZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9nL2Jsb2ctZGV0YWlsL2Jsb2ctZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBRENRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy1kZXRhaWwvYmxvZy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1kZXRhaWwtd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDNyZW0gMCAwO1xyXG4gICAgLmJsb2ctbWFpbi12aWV3IHtcclxuICAgICAgICBwID4gaW1nIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmJsb2ctZGV0YWlsLXdyYXBwZXIge1xuICBtYXJnaW46IDNyZW0gMCAwO1xufVxuLmJsb2ctZGV0YWlsLXdyYXBwZXIgLmJsb2ctbWFpbi12aWV3IHAgPiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-detail',
                templateUrl: './blog-detail.component.html',
                styleUrls: ['./blog-detail.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/blog/blog-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/blog/blog-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-detail/blog-detail.component */ "./src/app/blog/blog-detail/blog-detail.component.ts");






const routes = [
    {
        path: '',
        component: _blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"]
    },
    {
        path: 'blog-detail',
        component: _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_3__["BlogDetailComponent"]
    }
];
class BlogRoutingModule {
}
BlogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogRoutingModule });
BlogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogRoutingModule_Factory(t) { return new (t || BlogRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog/blog.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");






function BlogComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_div_4_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r231); const list_r228 = ctx.$implicit; const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r230.viewBlogDetail(list_r228); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r228 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r228.blogTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", list_r228.blogBody, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class BlogComponent {
    constructor(blogService, route) {
        this.blogService = blogService;
        this.route = route;
    }
    ngOnInit() {
        this.getBlogList();
    }
    // blogList(): Observable<any> {
    //   return this.restService.get(RestUrl.blogList);
    // }
    getBlogList() {
        this.blogService.blogList().subscribe(response => {
            if (response) {
                this.blogList = response;
            }
        });
    }
    viewBlogDetail(list) {
        this.blogService.setBlogDetail(list);
        this.route.navigate(['blog/blog-detail']);
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 5, vars: 1, consts: [[1, "blog-wrapper"], [1, "container"], [1, "blog-listing"], [1, "row"], ["class", "col-md-4 list", 4, "ngFor", "ngForOf"], [1, "col-md-4", "list"], [1, "blog-view", 3, "click"], [1, "blog-detail", 3, "innerHtml"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlogComponent_div_4_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"]], styles: [".blog-wrapper {\n  margin-top: 3rem;\n}\n\n.blog-listing .blog-view {\n  min-height: 370PX;\n  max-height: 370PX;\n  overflow: hidden;\n  margin: 0 0 2rem;\n  background-color: #fff;\n  cursor: pointer;\n}\n\n.blog-listing .blog-view h3 {\n  font-weight: 700;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.blog-listing .blog-view .blog-detail {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.blog-listing .blog-view .blog-detail img {\n  max-width: 100%;\n  width: 100%;\n  height: auto;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9DOlxcU2FpQXN0cm9Xb3JsZC0yXFxzYWlBc3Ryb1dvcmxkR2l0SHViXFxzYWlBc3Ryb1dlYkFwcC9zcmNcXGFwcFxcYmxvZ1xcYmxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQ1I7O0FEQVE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNFWjs7QURBUTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDRVo7O0FERFk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0doQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9nLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG4uYmxvZy1saXN0aW5nIHtcclxuICAgIC5ibG9nLXZpZXcge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM3MFBYO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDM3MFBYO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMnJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJsb2ctZGV0YWlsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJSA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmJsb2ctd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG5cbi5ibG9nLWxpc3RpbmcgLmJsb2ctdmlldyB7XG4gIG1pbi1oZWlnaHQ6IDM3MFBYO1xuICBtYXgtaGVpZ2h0OiAzNzBQWDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIDAgMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJsb2ctbGlzdGluZyAuYmxvZy12aWV3IGgzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmJsb2ctbGlzdGluZyAuYmxvZy12aWV3IC5ibG9nLWRldGFpbCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmxvZy1saXN0aW5nIC5ibG9nLXZpZXcgLmJsb2ctZGV0YWlsIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }, { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/blog/blog.module.ts":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-routing.module */ "./src/app/blog/blog-routing.module.ts");
/* harmony import */ var _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-detail/blog-detail.component */ "./src/app/blog/blog-detail/blog-detail.component.ts");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material-module */ "./src/app/material-module.ts");







class BlogModule {
}
BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogModule });
BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogModule_Factory(t) { return new (t || BlogModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogModule, { declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"], _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_3__["BlogDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogRoutingModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"], _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_3__["BlogDetailComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogRoutingModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blog/blog.service.ts":
/*!**************************************!*\
  !*** ./src/app/blog/blog.service.ts ***!
  \**************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constant/rest-url.constants */ "./src/app/shared/constant/rest-url.constants.ts");
/* harmony import */ var _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/restApi/rest.service */ "./src/app/shared/service/restApi/rest.service.ts");




class BlogService {
    constructor(restService) {
        this.restService = restService;
    }
    blogList() {
        return this.restService.get(_shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].blogList);
    }
    getBlogDetail() {
        return this.blogData;
    }
    setBlogDetail(data) {
        this.blogData = data;
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=blog-blog-module-es2015.js.map