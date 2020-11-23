function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Dashboard-dashboard-module-module"], {
  /***/
  "./src/app/Dashboard/astro-question/astro-question.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/Dashboard/astro-question/astro-question.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AstroQuestionComponent */

  /***/
  function srcAppDashboardAstroQuestionAstroQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AstroQuestionComponent", function () {
      return AstroQuestionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var src_app_shared_service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/service/authentication/authentication.service */
    "./src/app/shared/service/authentication/authentication.service.ts");
    /* harmony import */


    var src_app_shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/service/commonService/common.service */
    "./src/app/shared/service/commonService/common.service.ts");
    /* harmony import */


    var _astro_question_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./astro-question.service */
    "./src/app/Dashboard/astro-question/astro-question.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["questionSideNav"];

    function AstroQuestionComponent_th_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AstroQuestionComponent_td_64_Template(rf, ctx) {
      if (rf & 1) {
        var _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstroQuestionComponent_td_64_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r200);

          var row_r198 = ctx.$implicit;

          var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return ctx_r199.editQuestion(_r182, row_r198);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AstroQuestionComponent_th_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SrNo. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AstroQuestionComponent_td_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r202 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r202 + 1, " ");
      }
    }

    function AstroQuestionComponent_th_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Report Type ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AstroQuestionComponent_td_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r203 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r203.reportSubType, "");
      }
    }

    function AstroQuestionComponent_th_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AstroQuestionComponent_td_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r204 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r204.firstName, " ");
      }
    }

    function AstroQuestionComponent_th_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AstroQuestionComponent_td_76_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r205 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r205.mobileNumber, " ");
      }
    }

    function AstroQuestionComponent_tr_77_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
      }
    }

    function AstroQuestionComponent_tr_78_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
      }
    }

    function AstroQuestionComponent_tr_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r184.value, "\"");
      }
    }

    var _c1 = function _c1() {
      return [5, 10, 25, 100];
    };

    var AstroQuestionComponent =
    /*#__PURE__*/
    function () {
      function AstroQuestionComponent(_authService, _formBuilder, _authenticationService, _commonService, _astroReportService) {
        _classCallCheck(this, AstroQuestionComponent);

        this._authService = _authService;
        this._formBuilder = _formBuilder;
        this._authenticationService = _authenticationService;
        this._commonService = _commonService;
        this._astroReportService = _astroReportService;
        this.displayedColumns = ['edit', 'srNo', 'reportSubType', 'firstName', 'mobileNumber'];
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('over');
        this.characters = 0;
      }

      _createClass(AstroQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validateForm = this._formBuilder.group({
            firstName: [{
              value: null,
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lastName: [{
              value: null,
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            comment: [{
              value: null,
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            mobileNumber: [{
              value: null,
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            // gender: [{value : null, disabled: true}, [Validators.required]],
            reportSubType: [{
              value: null,
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            employment: [{
              value: null,
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            message: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
          });
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.users);
          this.userData = this._authenticationService.getUser();
          this.getQuestionByAstrologer();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "getQuestionByAstrologer",
        value: function getQuestionByAstrologer() {
          var _this = this;

          if (this.userData != null) {
            var reqBody = {
              "astrologerId": this.userData._id
            };

            this._astroReportService.getQuestionByAstroId(reqBody).subscribe(function (responseData) {
              console.log("getQuestionByAstroId ResponseBody ", responseData);
              var resonseMessage = responseData.message;
              var responseBody = responseData.data;

              if (responseData.status == 200) {
                var obj = [];
                responseBody.map(function (everyData) {
                  obj.push({
                    _id: everyData._id,
                    astrologerId: everyData.astrologerId,
                    comment: everyData.comment,
                    createdAt: everyData.createdAt,
                    employment: everyData.employment,
                    firstName: everyData.firstName,
                    lastName: everyData.lastName,
                    mobileNumber: everyData.mobileNumber,
                    reportSubType: everyData.reportSubType,
                    reportType: everyData.reportType,
                    userId: everyData.userId
                  });
                  _this.users = obj;
                });
                console.log("this.users ", _this.users);
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.users);

                _this.ngAfterViewInit();

                _this._commonService.tostMessage(resonseMessage);
              } else if (responseData.status == 300) {
                _this._commonService.tostMessage(resonseMessage);

                _this._authService.logOut();
              } else {
                _this._commonService.tostMessage(resonseMessage);
              }
            });
          } else {
            alert("Astro login required");
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();

          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
        }
      }, {
        key: "editQuestion",
        value: function editQuestion(reference, data) {
          reference.toggle();
          console.log("Side bar data", data);
          this.validateForm.patchValue({
            firstName: data.firstName,
            lastName: data.lastName,
            comment: data.comment,
            mobileNumber: data.mobileNumber,
            // gender :  data.gender,
            reportSubType: data.reportSubType,
            employment: data.employment
          });
          this.selectedUser = data;
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
          console.log("this.selectedUser ", this.selectedUser);
          var formData = new FormData();
          formData.append('message', value['message']);
          formData.append('userId', this.selectedUser.userId);
          formData.append('astrologerId', this.selectedUser.astrologerId);
          formData.append('queryId', this.selectedUser._id);
          formData.append('reportType', this.selectedUser.reportType);

          this._astroReportService.replyReports(formData).subscribe(function (responseData) {
            console.log("responseDataa ", responseData);
            var resonseMessage = responseData.message;

            if (responseData.status == 200) {
              _this2._commonService.tostMessage(resonseMessage);

              _this2.validateForm.reset();

              _this2.sidenav.close();
            } else if (responseData.status == 300) {
              _this2._commonService.tostMessage(resonseMessage);

              _this2._authService.logOut();
            } else {
              _this2._commonService.tostMessage(resonseMessage);
            }
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm(e) {
          e.preventDefault();
          this.validateForm.controls['message'].reset();

          for (var key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
          }
        }
      }, {
        key: "count",
        value: function count(value) {
          this.characters = 0 + value.length;
        }
      }, {
        key: "closeDrawer",
        value: function closeDrawer(reference) {
          reference.toggle();
          this.validateForm.reset();
        }
      }]);

      return AstroQuestionComponent;
    }();

    AstroQuestionComponent.ɵfac = function AstroQuestionComponent_Factory(t) {
      return new (t || AstroQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_astro_question_service__WEBPACK_IMPORTED_MODULE_8__["QuestionReportService"]));
    };

    AstroQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AstroQuestionComponent,
      selectors: [["app-astro-question"]],
      viewQuery: function AstroQuestionComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        }
      },
      decls: 81,
      vars: 9,
      consts: [[1, "drawer-container"], ["position", "end", "disableClose", "", 3, "mode"], ["questionSideNav", ""], ["mat-mini-fab", "", "color", "primary", "aria-label", "Close Menu", 1, "close-drawer", 3, "click"], [1, "form-wrapper"], [1, "separator", "mb-5"], [1, "edit-form-title", "text"], ["name", "validateForm", "novalidate", "", 3, "formGroup"], [1, "form-field-width"], ["matInput", "", "formControlName", "firstName", "required", ""], ["matInput", "", "formControlName", "lastName", "required", ""], ["matInput", "", "formControlName", "mobileNumber", "required", ""], ["matInput", "", "formControlName", "reportSubType", "required", ""], ["matInput", "", "formControlName", "employment", "required", ""], ["matInput", "", "formControlName", "comment", "required", ""], [1, "form-field-full-width"], ["matInput", "", "formControlName", "message", "maxlength", "2000", "required", "", 3, "keyup"], ["message", ""], ["align", "start"], [1, "mt-5"], ["mat-raised-button", "", "color", "primary", "aria-label", "LOGIN", 1, "submit-button", "mt-3", "mr-5", 3, "disabled", "click"], ["mat-stroked-button", "", "color", "warn", 1, "mt-3", 3, "click"], [1, "container", "wrapper-box"], ["mat-mini-fab", "", "color", "primary", "routerLink", "/dashboard", 1, "my-3"], [1, "separator", "mb-1"], [1, "dashboard-title", "text"], ["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "mb-5"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "edit"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "edit-report", "mat-cell", "", "data-label", "Edit", 3, "click", 4, "matCellDef"], ["matColumnDef", "srNo"], ["mat-cell", "", "data-label", "SrNo.", 4, "matCellDef"], ["matColumnDef", "reportSubType"], ["mat-cell", "", "data-label", "Report Type", 4, "matCellDef"], ["matColumnDef", "firstName"], ["mat-cell", "", "data-label", "Name", 4, "matCellDef"], ["matColumnDef", "mobileNumber"], ["mat-cell", "", "data-label", "Mobile Number", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", "data-label", "Edit", 1, "edit-report", 3, "click"], ["mat-cell", "", "data-label", "SrNo."], ["mat-cell", "", "data-label", "Report Type"], ["mat-cell", "", "data-label", "Name"], ["mat-cell", "", "data-label", "Mobile Number"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
      template: function AstroQuestionComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstroQuestionComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r207);

            var _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.closeDrawer(_r182);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reply Question Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mobile Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Report Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Employment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Question");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Answer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "textarea", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AstroQuestionComponent_Template_textarea_keyup_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r207);

            var _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

            return ctx.count(_r183.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-hint", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstroQuestionComponent_Template_button_click_43_listener() {
            return ctx.submitForm(ctx.validateForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Create ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstroQuestionComponent_Template_button_click_45_listener($event) {
            return ctx.resetForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Reset ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "keyboard_arrow_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AstroQuestionComponent_Template_input_keyup_58_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "table", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](62, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AstroQuestionComponent_th_63_Template, 2, 0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AstroQuestionComponent_td_64_Template, 3, 0, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](65, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AstroQuestionComponent_th_66_Template, 2, 0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AstroQuestionComponent_td_67_Template, 2, 1, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](68, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, AstroQuestionComponent_th_69_Template, 2, 0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AstroQuestionComponent_td_70_Template, 2, 1, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](71, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AstroQuestionComponent_th_72_Template, 2, 0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, AstroQuestionComponent_td_73_Template, 2, 1, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](74, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AstroQuestionComponent_th_75_Template, 2, 0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, AstroQuestionComponent_td_76_Template, 2, 1, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, AstroQuestionComponent_tr_77_Template, 1, 0, "tr", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, AstroQuestionComponent_tr_78_Template, 1, 0, "tr", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, AstroQuestionComponent_tr_79_Template, 3, 1, "tr", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "mat-paginator", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mode.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.characters, " / 2000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.validateForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatHint"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
      styles: [".drawer-container[_ngcontent-%COMP%]   button.close-drawer[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-drawer[_ngcontent-%COMP%] {\n  max-width: 75%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\n.form-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   .form-field-width[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-right: 10px;\n  line-height: 25px;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   .form-field-full-width[_ngcontent-%COMP%] {\n  width: 83%;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   .edit-form-title[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover {\n  background: #eba61a87;\n}\n\n.edit-report[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.dashboard-title[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 25px;\n}\n\n.wrapper-box[_ngcontent-%COMP%] {\n  margin-bottom: 25%;\n}\n\n@media only screen and (max-width: 991px) {\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  th.mat-header-cell[_ngcontent-%COMP%]:last-of-type, td.mat-cell[_ngcontent-%COMP%]:last-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:last-of-type, th.mat-header-cell[_ngcontent-%COMP%]:first-of-type, td.mat-cell[_ngcontent-%COMP%]:first-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\n    padding: 10px;\n  }\n\n  .mat-table[_ngcontent-%COMP%] {\n    background-color: transparent;\n  }\n\n  .mat-header-row[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mat-row[_ngcontent-%COMP%] {\n    height: 100%;\n    margin: 0 0 10px;\n    display: block;\n    background-color: #fff;\n  }\n  .mat-row[_ngcontent-%COMP%]:hover {\n    background-color: #eba61a87;\n  }\n\n  td.mat-cell[_ngcontent-%COMP%] {\n    padding: 10px;\n    display: block;\n    text-align: right;\n  }\n  td.mat-cell[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    float: left;\n    font-weight: 700;\n    font-size: 16px;\n  }\n  td.mat-cell[data-label=edit][_ngcontent-%COMP%] {\n    padding: 10px 10px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGFzaGJvYXJkL2FzdHJvLXF1ZXN0aW9uL0M6XFxTYWlBc3Ryb1dvcmxkLTJcXHNhaUFzdHJvV29ybGRHaXRIdWJcXHNhaUFzdHJvV2ViQXBwL3NyY1xcYXBwXFxEYXNoYm9hcmRcXGFzdHJvLXF1ZXN0aW9uXFxhc3Ryby1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRGFzaGJvYXJkL2FzdHJvLXF1ZXN0aW9uL2FzdHJvLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EYXNoYm9hcmQvYXN0cm8tcXVlc3Rpb24vQzpcXFNhaUFzdHJvV29ybGQtMlxcc2FpQXN0cm9Xb3JsZEdpdEh1Ylxcc2FpQXN0cm9XZWJBcHAvc3JjXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsaUJBQUE7QUNGSjs7QURNQTtFQUNFLFdBQUE7QUNIRjs7QURLQTtFQUNFLGNBQUE7QUNGRjs7QURJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDREY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBRENFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDRTtFQUNFLFVBQUE7QUNDSjs7QURDRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FER0E7RUFDRSxxQkUvQlk7QUQrQmQ7O0FERUE7RUFDQyxlQUFBO0FDQ0Q7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QURNQTtFQUNFO0lBQ0UsV0FBQTtFQ0hGOztFREtBO0lBQ0UsYUFBQTtFQ0ZGOztFRElBO0lBQ0UsNkJBQUE7RUNERjs7RURHQTtJQUNFLGFBQUE7RUNBRjs7RURFQTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxzQkVyRUk7RURzRU47RURBRTtJQUNJLDJCRXJFTTtFRHVFWjs7RURFQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUNDRjtFREFFO0lBQ0kseUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VDRU47RURBRTtJQUNJLG9CQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL0Rhc2hib2FyZC9hc3Ryby1xdWVzdGlvbi9hc3Ryby1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5kcmF3ZXItY29udGFpbmVye1xyXG4gIGJ1dHRvbi5jbG9zZS1kcmF3ZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWF0LWRyYXdlcntcclxuICBtYXgtd2lkdGg6IDc1JTtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZm9ybS13cmFwcGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAuZm9ybS1maWVsZC13aWR0aHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcbiAgLmZvcm0tZmllbGQtZnVsbC13aWR0aHtcclxuICAgIHdpZHRoOiA4MyU7XHJcbiAgfVxyXG4gIC5lZGl0LWZvcm0tdGl0bGV7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAkaG92ZXItY29sb3I7XHJcbn1cclxuLmVkaXQtcmVwb3J0e1xyXG4gY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kYXNoYm9hcmQtdGl0bGV7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi53cmFwcGVyLWJveHtcclxuICBtYXJnaW4tYm90dG9tOiAyNSU7XHJcbn1cclxuLy8gdGQsIHRoIHtcclxuLy8gICB3aWR0aDogNSU7XHJcbi8vIH1cclxuXHJcblxyXG4vLyBtZWRpYSBxdWVyeVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIHRkLCB0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgdGgubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSwgdGQubWF0LWNlbGw6bGFzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6bGFzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGV7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAubWF0LXRhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbiAgLm1hdC1oZWFkZXItcm93IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuICAubWF0LXJvdyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG92ZXItY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ZC5tYXQtY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgICZbZGF0YS1sYWJlbD1cImVkaXRcIl0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwO1xyXG4gICAgfVxyXG4gIH1cclxuICB9XHJcbiIsIi5kcmF3ZXItY29udGFpbmVyIGJ1dHRvbi5jbG9zZS1kcmF3ZXIge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1kcmF3ZXIge1xuICBtYXgtd2lkdGg6IDc1JTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0td3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3JtLXdyYXBwZXIgLmZvcm0tZmllbGQtd2lkdGgge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuLmZvcm0td3JhcHBlciAuZm9ybS1maWVsZC1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDgzJTtcbn1cbi5mb3JtLXdyYXBwZXIgLmVkaXQtZm9ybS10aXRsZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ViYTYxYTg3O1xufVxuXG4uZWRpdC1yZXBvcnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXNoYm9hcmQtdGl0bGUge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ud3JhcHBlci1ib3gge1xuICBtYXJnaW4tYm90dG9tOiAyNSU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgdGQsIHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIHRoLm1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUsIHRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSwgdGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLm1hdC10YWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWhlYWRlci1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWF0LXJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAubWF0LXJvdzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViYTYxYTg3O1xuICB9XG5cbiAgdGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgdGQubWF0LWNlbGw6OmJlZm9yZSB7XG4gICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICB0ZC5tYXQtY2VsbFtkYXRhLWxhYmVsPWVkaXRdIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMDtcbiAgfVxufSIsIiRibGFjayA6ICMwMDA7XHJcbiRwcmltYXJ5IDogI2Y5YTgyNTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kb2ZmLXdoaXRlOiAjZThlOGU4O1xyXG4kaG92ZXItY29sb3I6ICNlYmE2MWE4NztcclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AstroQuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-astro-question',
          templateUrl: './astro-question.component.html',
          styleUrls: ['./astro-question.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }, {
          type: src_app_shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
        }, {
          type: _astro_question_service__WEBPACK_IMPORTED_MODULE_8__["QuestionReportService"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }],
        sidenav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['questionSideNav']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Dashboard/astro-question/astro-question.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Dashboard/astro-question/astro-question.service.ts ***!
    \********************************************************************/

  /*! exports provided: QuestionReportService */

  /***/
  function srcAppDashboardAstroQuestionAstroQuestionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionReportService", function () {
      return QuestionReportService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/constant/rest-url.constants */
    "./src/app/shared/constant/rest-url.constants.ts");
    /* harmony import */


    var _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../..//shared/service/restApi/rest.service */
    "./src/app/shared/service/restApi/rest.service.ts");
    /* harmony import */


    var src_app_shared_service_restApi_profileUpdate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/service/restApi/profileUpdate.service */
    "./src/app/shared/service/restApi/profileUpdate.service.ts");

    var QuestionReportService =
    /*#__PURE__*/
    function () {
      function QuestionReportService(restService, _profileUpdateService) {
        _classCallCheck(this, QuestionReportService);

        this.restService = restService;
        this._profileUpdateService = _profileUpdateService;
      }

      _createClass(QuestionReportService, [{
        key: "getQuestionByAstroId",
        value: function getQuestionByAstroId(data) {
          return this.restService.create(_shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].getQuestionByAstroId, data);
        }
      }, {
        key: "replyReports",
        value: function replyReports(data) {
          return this._profileUpdateService.createFormData(_shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].replyReports, data);
        }
      }]);

      return QuestionReportService;
    }();

    QuestionReportService.ɵfac = function QuestionReportService_Factory(t) {
      return new (t || QuestionReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_service_restApi_profileUpdate_service__WEBPACK_IMPORTED_MODULE_3__["ProfileUpdateService"]));
    };

    QuestionReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: QuestionReportService,
      factory: QuestionReportService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
        }, {
          type: src_app_shared_service_restApi_profileUpdate_service__WEBPACK_IMPORTED_MODULE_3__["ProfileUpdateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Dashboard/astro-report/astro-report.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Dashboard/astro-report/astro-report.component.ts ***!
    \******************************************************************/

  /*! exports provided: AstroReportComponent */

  /***/
  function srcAppDashboardAstroReportAstroReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AstroReportComponent", function () {
      return AstroReportComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var src_app_shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/service/commonService/common.service */
    "./src/app/shared/service/commonService/common.service.ts");
    /* harmony import */


    var _astro_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./astro-report.service */
    "./src/app/Dashboard/astro-report/astro-report.service.ts");
    /* harmony import */


    var src_app_shared_service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/service/authentication/authentication.service */
    "./src/app/shared/service/authentication/authentication.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["reportSideNav"];

    function AstroReportComponent_th_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AstroReportComponent_td_64_Template(rf, ctx) {
      if (rf & 1) {
        var _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstroReportComponent_td_64_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r174);

          var row_r172 = ctx.$implicit;

          var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return ctx_r173.editQuestion(_r156, row_r172);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AstroReportComponent_th_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SrNo. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AstroReportComponent_td_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r176 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r176 + 1, " ");
      }
    }

    function AstroReportComponent_th_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Report Type ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AstroReportComponent_td_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r177 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r177.reportSubType, "");
      }
    }

    function AstroReportComponent_th_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AstroReportComponent_td_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r178 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r178.firstName, " ");
      }
    }

    function AstroReportComponent_th_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AstroReportComponent_td_76_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r179 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r179.mobileNumber, " ");
      }
    }

    function AstroReportComponent_tr_77_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
      }
    }

    function AstroReportComponent_tr_78_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
      }
    }

    function AstroReportComponent_tr_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r158.value, "\"");
      }
    }

    var _c1 = function _c1() {
      return [5, 10, 25, 100];
    };

    var AstroReportComponent =
    /*#__PURE__*/
    function () {
      function AstroReportComponent(_authService, _commonService, _astroReportService, _authenticationService, _formBuilder) {
        _classCallCheck(this, AstroReportComponent);

        this._authService = _authService;
        this._commonService = _commonService;
        this._astroReportService = _astroReportService;
        this._authenticationService = _authenticationService;
        this._formBuilder = _formBuilder;
        this.displayedColumns = ['edit', 'srNo', 'reportSubType', 'firstName', 'mobileNumber'];
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('over');
        this.characters = 0;
      }

      _createClass(AstroReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validateForm = this._formBuilder.group({
            firstName: [{
              value: null,
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lastName: [{
              value: null,
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            comment: [{
              value: null,
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            mobileNumber: [{
              value: null,
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            reportSubType: [{
              value: null,
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            employment: [{
              value: null,
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            message: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
          });
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.users);
          this.userData = this._authenticationService.getUser();
          this.getReportByAstrologer();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "getReportByAstrologer",
        value: function getReportByAstrologer() {
          var _this3 = this;

          if (this.userData != null) {
            var reqBody = {
              "astrologerId": this.userData._id
            };

            this._astroReportService.getReportByAstroId(reqBody).subscribe(function (responseData) {
              console.log("getQuestionByAstroId ResponseBody ", responseData);
              var resonseMessage = responseData.message;
              var responseBody = responseData.data;

              if (responseData.status == 200) {
                var obj = [];
                responseBody.map(function (everyData) {
                  obj.push({
                    _id: everyData._id,
                    astrologerId: everyData.astrologerId,
                    comment: everyData.comment,
                    createdAt: everyData.createdAt,
                    employment: everyData.employment,
                    firstName: everyData.firstName,
                    lastName: everyData.lastName,
                    mobileNumber: everyData.mobileNumber,
                    reportSubType: everyData.reportSubType,
                    reportType: everyData.reportType,
                    userId: everyData.userId
                  });
                  _this3.users = obj;
                });
                console.log("this.users ", _this3.users);
                _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this3.users);

                _this3.ngAfterViewInit();

                _this3._commonService.tostMessage(resonseMessage);
              } else if (responseData.status == 300) {
                _this3._commonService.tostMessage(resonseMessage);

                _this3._authService.logOut();
              } else {
                _this3._commonService.tostMessage(resonseMessage);
              }
            });
          } else {
            alert("Astro login required");
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();

          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
        }
      }, {
        key: "editQuestion",
        value: function editQuestion(reference, data) {
          reference.toggle();
          console.log("Side bar data", data);
          this.validateForm.patchValue({
            firstName: data.firstName,
            lastName: data.lastName,
            comment: data.comment,
            mobileNumber: data.mobileNumber,
            // gender :  data.gender,
            reportSubType: data.reportSubType,
            employment: data.employment
          });
          this.selectedUser = data;
        }
      }, {
        key: "submitForm",
        value: function submitForm(value) {
          var _this4 = this;

          for (var key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
          }

          console.log("submit Form ", value);
          console.log("this.selectedUser ", this.selectedUser);
          var formData = new FormData();
          formData.append('message', value['message']); // formData.append('attachment', value['attachment']);

          formData.append('userId', this.selectedUser.userId);
          formData.append('astrologerId', this.selectedUser.astrologerId);
          formData.append('queryId', this.selectedUser._id);
          formData.append('reportType', this.selectedUser.reportType);

          this._astroReportService.replyReports(formData).subscribe(function (responseData) {
            console.log("responseDataa ", responseData);
            var resonseMessage = responseData.message;

            if (responseData.status == 200) {
              _this4._commonService.tostMessage(resonseMessage);

              _this4.validateForm.reset();

              _this4.sidenav.close();
            } else if (responseData.status == 300) {
              _this4._commonService.tostMessage(resonseMessage);

              _this4._authService.logOut();
            } else {
              _this4._commonService.tostMessage(resonseMessage);
            }
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm(e) {
          e.preventDefault();
          this.validateForm.controls['message'].reset(); // this.validateForm.controls['attachment'].reset();

          for (var key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
          }
        }
      }, {
        key: "count",
        value: function count(value) {
          this.characters = 0 + value.length;
        }
      }, {
        key: "closeDrawer",
        value: function closeDrawer(reference) {
          reference.toggle();
          this.validateForm.reset();
        }
      }]);

      return AstroReportComponent;
    }();

    AstroReportComponent.ɵfac = function AstroReportComponent_Factory(t) {
      return new (t || AstroReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_astro_report_service__WEBPACK_IMPORTED_MODULE_7__["AstroReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]));
    };

    AstroReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AstroReportComponent,
      selectors: [["app-astro-report"]],
      viewQuery: function AstroReportComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        }
      },
      decls: 81,
      vars: 9,
      consts: [[1, "drawer-container"], ["position", "end", "disableClose", "", 3, "mode"], ["reportSideNav", ""], ["mat-mini-fab", "", "color", "primary", "aria-label", "Close Menu", 1, "close-drawer", 3, "click"], [1, "form-wrapper"], [1, "separator", "mb-5"], [1, "edit-form-title", "text"], ["name", "validateForm", "novalidate", "", 3, "formGroup"], [1, "form-field-width"], ["matInput", "", "formControlName", "firstName", "required", ""], ["matInput", "", "formControlName", "lastName", "required", ""], ["matInput", "", "formControlName", "mobileNumber", "required", ""], ["matInput", "", "formControlName", "reportSubType", "required", ""], ["matInput", "", "formControlName", "employment", "required", ""], ["matInput", "", "formControlName", "comment", "required", ""], [1, "form-field-full-width"], ["matInput", "", "formControlName", "message", "maxlength", "4000", "required", "", 3, "keyup"], ["message", ""], ["align", "start"], [1, "mt-5"], ["mat-raised-button", "", "color", "primary", "aria-label", "LOGIN", 1, "submit-button", "mt-3", "mr-5", 3, "disabled", "click"], ["mat-stroked-button", "", "color", "warn", 1, "mt-3", 3, "click"], [1, "container", "wrapper-box"], ["mat-mini-fab", "", "color", "primary", "routerLink", "/dashboard", 1, "my-3"], [1, "separator", "mb-1"], [1, "dashboard-title", "text"], ["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "mb-5"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "edit"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "edit-report", "mat-cell", "", "data-label", "Edit", 3, "click", 4, "matCellDef"], ["matColumnDef", "srNo"], ["mat-cell", "", "data-label", "SrNo.", 4, "matCellDef"], ["matColumnDef", "reportSubType"], ["mat-cell", "", "data-label", "Report Type", 4, "matCellDef"], ["matColumnDef", "firstName"], ["mat-cell", "", "data-label", "Name", 4, "matCellDef"], ["matColumnDef", "mobileNumber"], ["mat-cell", "", "data-label", "Mobile Number", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", "data-label", "Edit", 1, "edit-report", 3, "click"], ["mat-cell", "", "data-label", "SrNo."], ["mat-cell", "", "data-label", "Report Type"], ["mat-cell", "", "data-label", "Name"], ["mat-cell", "", "data-label", "Mobile Number"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
      template: function AstroReportComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstroReportComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r181);

            var _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.closeDrawer(_r156);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reply Report Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mobile Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Report Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Employment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Question");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Answer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "textarea", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AstroReportComponent_Template_textarea_keyup_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r181);

            var _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

            return ctx.count(_r157.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-hint", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstroReportComponent_Template_button_click_43_listener() {
            return ctx.submitForm(ctx.validateForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Create ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstroReportComponent_Template_button_click_45_listener($event) {
            return ctx.resetForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Reset ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "keyboard_arrow_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Reports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AstroReportComponent_Template_input_keyup_58_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "table", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](62, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AstroReportComponent_th_63_Template, 2, 0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AstroReportComponent_td_64_Template, 3, 0, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](65, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AstroReportComponent_th_66_Template, 2, 0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AstroReportComponent_td_67_Template, 2, 1, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](68, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, AstroReportComponent_th_69_Template, 2, 0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AstroReportComponent_td_70_Template, 2, 1, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](71, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AstroReportComponent_th_72_Template, 2, 0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, AstroReportComponent_td_73_Template, 2, 1, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](74, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AstroReportComponent_th_75_Template, 2, 0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, AstroReportComponent_td_76_Template, 2, 1, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, AstroReportComponent_tr_77_Template, 1, 0, "tr", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, AstroReportComponent_tr_78_Template, 1, 0, "tr", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, AstroReportComponent_tr_79_Template, 3, 1, "tr", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "mat-paginator", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mode.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.characters, " / 4000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.validateForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatHint"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
      styles: [".drawer-container[_ngcontent-%COMP%]   button.close-drawer[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-drawer[_ngcontent-%COMP%] {\n  max-width: 75%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\n.form-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   .form-field-width[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-right: 10px;\n  line-height: 25px;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   .form-field-full-width[_ngcontent-%COMP%] {\n  width: 83%;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   .edit-form-title[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover {\n  background: #eba61a87;\n}\n\n.edit-report[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.dashboard-title[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 25px;\n}\n\n.wrapper-box[_ngcontent-%COMP%] {\n  margin-bottom: 25%;\n}\n\n@media only screen and (max-width: 991px) {\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  th.mat-header-cell[_ngcontent-%COMP%]:last-of-type, td.mat-cell[_ngcontent-%COMP%]:last-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:last-of-type, th.mat-header-cell[_ngcontent-%COMP%]:first-of-type, td.mat-cell[_ngcontent-%COMP%]:first-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\n    padding: 10px;\n  }\n\n  .mat-table[_ngcontent-%COMP%] {\n    background-color: transparent;\n  }\n\n  .mat-header-row[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mat-row[_ngcontent-%COMP%] {\n    height: 100%;\n    margin: 0 0 10px;\n    display: block;\n    background-color: #fff;\n  }\n  .mat-row[_ngcontent-%COMP%]:hover {\n    background-color: #eba61a87;\n  }\n\n  td.mat-cell[_ngcontent-%COMP%] {\n    padding: 10px;\n    display: block;\n    text-align: right;\n  }\n  td.mat-cell[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    float: left;\n    font-weight: 700;\n    font-size: 16px;\n  }\n  td.mat-cell[data-label=edit][_ngcontent-%COMP%] {\n    padding: 10px 10px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGFzaGJvYXJkL2FzdHJvLXJlcG9ydC9DOlxcU2FpQXN0cm9Xb3JsZC0yXFxzYWlBc3Ryb1dvcmxkR2l0SHViXFxzYWlBc3Ryb1dlYkFwcC9zcmNcXGFwcFxcRGFzaGJvYXJkXFxhc3Ryby1yZXBvcnRcXGFzdHJvLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRGFzaGJvYXJkL2FzdHJvLXJlcG9ydC9hc3Ryby1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Rhc2hib2FyZC9hc3Ryby1yZXBvcnQvQzpcXFNhaUFzdHJvV29ybGQtMlxcc2FpQXN0cm9Xb3JsZEdpdEh1Ylxcc2FpQXN0cm9XZWJBcHAvc3JjXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsaUJBQUE7QUNGSjs7QURNQTtFQUNFLFdBQUE7QUNIRjs7QURLQTtFQUNFLGNBQUE7QUNGRjs7QURJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDREY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBRENFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDRTtFQUNFLFVBQUE7QUNDSjs7QURDRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FESUE7RUFDRSxxQkVoQ1k7QUQrQmQ7O0FER0E7RUFDQyxlQUFBO0FDQUQ7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURPQTtFQUNFO0lBQ0UsV0FBQTtFQ0pGOztFRE1BO0lBQ0UsYUFBQTtFQ0hGOztFREtBO0lBQ0UsNkJBQUE7RUNGRjs7RURJQTtJQUNFLGFBQUE7RUNERjs7RURHQTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxzQkV0RUk7RURzRU47RURDRTtJQUNJLDJCRXRFTTtFRHVFWjs7RURHQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUNBRjtFRENFO0lBQ0kseUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VDQ047RURDRTtJQUNJLG9CQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL0Rhc2hib2FyZC9hc3Ryby1yZXBvcnQvYXN0cm8tcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmRyYXdlci1jb250YWluZXJ7XHJcbiAgYnV0dG9uLmNsb3NlLWRyYXdlcntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtZHJhd2Vye1xyXG4gIG1heC13aWR0aDogNzUlO1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mb3JtLXdyYXBwZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC5mb3JtLWZpZWxkLXdpZHRoe1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICAuZm9ybS1maWVsZC1mdWxsLXdpZHRoe1xyXG4gICAgd2lkdGg6IDgzJTtcclxuICB9XHJcbiAgLmVkaXQtZm9ybS10aXRsZXtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5tYXQtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAkaG92ZXItY29sb3I7XHJcbn1cclxuLmVkaXQtcmVwb3J0e1xyXG4gY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kYXNoYm9hcmQtdGl0bGV7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi53cmFwcGVyLWJveHtcclxuICBtYXJnaW4tYm90dG9tOiAyNSU7XHJcbn1cclxuLy8gdGQsIHRoIHtcclxuLy8gICB3aWR0aDogNSU7XHJcbi8vIH1cclxuXHJcblxyXG4vLyBtZWRpYSBxdWVyeVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIHRkLCB0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgdGgubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSwgdGQubWF0LWNlbGw6bGFzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6bGFzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGV7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAubWF0LXRhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbiAgLm1hdC1oZWFkZXItcm93IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuICAubWF0LXJvdyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG92ZXItY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ZC5tYXQtY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgICZbZGF0YS1sYWJlbD1cImVkaXRcIl0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwO1xyXG4gICAgfVxyXG4gIH1cclxuICB9XHJcbiIsIi5kcmF3ZXItY29udGFpbmVyIGJ1dHRvbi5jbG9zZS1kcmF3ZXIge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1kcmF3ZXIge1xuICBtYXgtd2lkdGg6IDc1JTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0td3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3JtLXdyYXBwZXIgLmZvcm0tZmllbGQtd2lkdGgge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuLmZvcm0td3JhcHBlciAuZm9ybS1maWVsZC1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDgzJTtcbn1cbi5mb3JtLXdyYXBwZXIgLmVkaXQtZm9ybS10aXRsZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ViYTYxYTg3O1xufVxuXG4uZWRpdC1yZXBvcnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXNoYm9hcmQtdGl0bGUge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ud3JhcHBlci1ib3gge1xuICBtYXJnaW4tYm90dG9tOiAyNSU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgdGQsIHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIHRoLm1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUsIHRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSwgdGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLm1hdC10YWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWhlYWRlci1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWF0LXJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAubWF0LXJvdzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViYTYxYTg3O1xuICB9XG5cbiAgdGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgdGQubWF0LWNlbGw6OmJlZm9yZSB7XG4gICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICB0ZC5tYXQtY2VsbFtkYXRhLWxhYmVsPWVkaXRdIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMDtcbiAgfVxufSIsIiRibGFjayA6ICMwMDA7XHJcbiRwcmltYXJ5IDogI2Y5YTgyNTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kb2ZmLXdoaXRlOiAjZThlOGU4O1xyXG4kaG92ZXItY29sb3I6ICNlYmE2MWE4NztcclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AstroReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-astro-report',
          templateUrl: './astro-report.component.html',
          styleUrls: ['./astro-report.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_shared_service_commonService_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
        }, {
          type: _astro_report_service__WEBPACK_IMPORTED_MODULE_7__["AstroReportService"]
        }, {
          type: src_app_shared_service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }],
        sidenav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['reportSideNav']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Dashboard/astro-report/astro-report.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Dashboard/astro-report/astro-report.service.ts ***!
    \****************************************************************/

  /*! exports provided: AstroReportService */

  /***/
  function srcAppDashboardAstroReportAstroReportServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AstroReportService", function () {
      return AstroReportService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/constant/rest-url.constants */
    "./src/app/shared/constant/rest-url.constants.ts");
    /* harmony import */


    var _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../..//shared/service/restApi/rest.service */
    "./src/app/shared/service/restApi/rest.service.ts");
    /* harmony import */


    var src_app_shared_service_restApi_profileUpdate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/service/restApi/profileUpdate.service */
    "./src/app/shared/service/restApi/profileUpdate.service.ts");

    var AstroReportService =
    /*#__PURE__*/
    function () {
      function AstroReportService(restService, _profileUpdateService) {
        _classCallCheck(this, AstroReportService);

        this.restService = restService;
        this._profileUpdateService = _profileUpdateService;
      }

      _createClass(AstroReportService, [{
        key: "getReportByAstroId",
        value: function getReportByAstroId(data) {
          return this.restService.create(_shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].getReportByAstroId, data);
        }
      }, {
        key: "replyReports",
        value: function replyReports(data) {
          return this._profileUpdateService.createFormData(_shared_constant_rest_url_constants__WEBPACK_IMPORTED_MODULE_1__["RestUrl"].replyReports, data);
        }
      }]);

      return AstroReportService;
    }();

    AstroReportService.ɵfac = function AstroReportService_Factory(t) {
      return new (t || AstroReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_service_restApi_profileUpdate_service__WEBPACK_IMPORTED_MODULE_3__["ProfileUpdateService"]));
    };

    AstroReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AstroReportService,
      factory: AstroReportService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AstroReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_service_restApi_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
        }, {
          type: src_app_shared_service_restApi_profileUpdate_service__WEBPACK_IMPORTED_MODULE_3__["ProfileUpdateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Dashboard/astro-report/edit-report/edit-report.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/Dashboard/astro-report/edit-report/edit-report.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: EditReportComponent */

  /***/
  function srcAppDashboardAstroReportEditReportEditReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditReportComponent", function () {
      return EditReportComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EditReportComponent =
    /*#__PURE__*/
    function () {
      function EditReportComponent() {
        _classCallCheck(this, EditReportComponent);
      }

      _createClass(EditReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditReportComponent;
    }();

    EditReportComponent.ɵfac = function EditReportComponent_Factory(t) {
      return new (t || EditReportComponent)();
    };

    EditReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditReportComponent,
      selectors: [["app-edit-report"]],
      decls: 2,
      vars: 0,
      template: function EditReportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit-report works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Rhc2hib2FyZC9hc3Ryby1yZXBvcnQvZWRpdC1yZXBvcnQvZWRpdC1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-report',
          templateUrl: './edit-report.component.html',
          styleUrls: ['./edit-report.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Dashboard/astrologer-dashboard/astrologer-dashboard.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/Dashboard/astrologer-dashboard/astrologer-dashboard.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AstrologerDashboardComponent */

  /***/
  function srcAppDashboardAstrologerDashboardAstrologerDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AstrologerDashboardComponent", function () {
      return AstrologerDashboardComponent;
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


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var AstrologerDashboardComponent =
    /*#__PURE__*/
    function () {
      function AstrologerDashboardComponent(_route) {
        _classCallCheck(this, AstrologerDashboardComponent);

        this._route = _route;
      }

      _createClass(AstrologerDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "astroReport",
        value: function astroReport() {
          this._route.navigate(['dashboard/astroReport']);
        }
      }, {
        key: "astroQuestion",
        value: function astroQuestion() {
          this._route.navigate(['dashboard/astroQuestion']);
        }
      }, {
        key: "chatUser",
        value: function chatUser() {
          this._route.navigate(['/chat']);
        }
      }]);

      return AstrologerDashboardComponent;
    }();

    AstrologerDashboardComponent.ɵfac = function AstrologerDashboardComponent_Factory(t) {
      return new (t || AstrologerDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AstrologerDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AstrologerDashboardComponent,
      selectors: [["app-astrologer-dashboard"]],
      decls: 44,
      vars: 0,
      consts: [[1, "container"], [1, "astro-dashboard-wrapper"], [1, "separator", "my-5"], [1, "dashboard-title", "text"], [1, "row"], [1, "col-md-3", "my-3"], [1, "card1", 3, "click"], ["href", "#", 1, "go-corner"], [1, "go-arrow"], [1, "card1"]],
      template: function AstrologerDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstrologerDashboardComponent_Template_mat_card_click_7_listener() {
            return ctx.astroReport();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "assignment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u2192 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstrologerDashboardComponent_Template_mat_card_click_16_listener() {
            return ctx.astroQuestion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "question_answer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Question ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u2192 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "call");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Call ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u2192 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstrologerDashboardComponent_Template_mat_card_click_35_listener() {
            return ctx.chatUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Chat ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u2192 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: [".astro-dashboard-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 78px;\n}\n.astro-dashboard-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: orange;\n}\n.astro-dashboard-wrapper[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #000;\n}\n.astro-dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 25px;\n}\n.go-corner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  overflow: hidden;\n  top: 0;\n  right: 0;\n  background-color: #f9a825;\n  border-radius: 0 4px 0 32px;\n}\n.go-arrow[_ngcontent-%COMP%] {\n  margin-top: -4px;\n  margin-right: -4px;\n  color: white;\n  font-family: courier, sans;\n}\n.card1[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  background-color: #fff;\n  border-radius: 4px;\n  text-decoration: none;\n  z-index: 0;\n  overflow: hidden;\n}\n.card1[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: -16px;\n  right: -16px;\n  background: #f9a825;\n  height: 32px;\n  width: 32px;\n  border-radius: 32px;\n  transform: scale(1);\n  transform-origin: 50% 50%;\n  transition: transform 0.7s ease-out;\n}\n.card1[_ngcontent-%COMP%]:hover:before {\n  transform: scale(30);\n}\n.card1[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.card1[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-out;\n  color: rgba(255, 255, 255, 0.8);\n}\n.card1[_ngcontent-%COMP%]:hover   h1[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-out;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGFzaGJvYXJkL2FzdHJvbG9nZXItZGFzaGJvYXJkL0M6XFxTYWlBc3Ryb1dvcmxkLTJcXHNhaUFzdHJvV29ybGRHaXRIdWJcXHNhaUFzdHJvV2ViQXBwL3NyY1xcYXBwXFxEYXNoYm9hcmRcXGFzdHJvbG9nZXItZGFzaGJvYXJkXFxhc3Ryb2xvZ2VyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRGFzaGJvYXJkL2FzdHJvbG9nZXItZGFzaGJvYXJkL2FzdHJvbG9nZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRyxhQUFBO0FDRUw7QURBRTtFQUNHLGVBQUE7RUFDQSxXQUFBO0FDRUw7QURBRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDRUo7QURPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFmUztFQWdCVCwyQkFBQTtBQ0pGO0FET0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDSkY7QURPQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0pGO0FETUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkF6Q087RUEwQ1AsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtBQ0pKO0FET0U7RUFDRSxvQkFBQTtBQ0xKO0FEU0E7RUFDSSxlQUFBO0FDTko7QURPRTtFQUNFLDZCQUFBO0VBQ0EsK0JBQUE7QUNMSjtBRE9FO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9EYXNoYm9hcmQvYXN0cm9sb2dlci1kYXNoYm9hcmQvYXN0cm9sb2dlci1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXN0cm8tZGFzaGJvYXJkLXdyYXBwZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDc4cHg7XHJcbiAgaDEge1xyXG4gICAgIGNvbG9yIDogb3JhbmdlO1xyXG4gIH1cclxuICAubWF0LWljb24ge1xyXG4gICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLmRhc2hib2FyZC10aXRsZXtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuJHByaW1hcnkgOiAjZjlhODI1O1xyXG4kd2hpdGUgOiAjZmZmO1xyXG4kYmxhY2s6ICMwMDA7XHJcblxyXG5cclxuLmdvLWNvcm5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggMCAzMnB4O1xyXG59XHJcblxyXG4uZ28tYXJyb3cge1xyXG4gIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtNHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogY291cmllciwgc2FucztcclxufVxyXG5cclxuLmNhcmQxIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdG9wOiAtMTZweDtcclxuICAgIHJpZ2h0OiAtMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC43cyBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gICY6aG92ZXI6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMzApO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQxOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICBwIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICB9XHJcbiAgaDEge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbn1cclxuIiwiLmFzdHJvLWRhc2hib2FyZC13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA3OHB4O1xufVxuLmFzdHJvLWRhc2hib2FyZC13cmFwcGVyIGgxIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cbi5hc3Ryby1kYXNoYm9hcmQtd3JhcHBlciAubWF0LWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmFzdHJvLWRhc2hib2FyZC13cmFwcGVyIC5kYXNoYm9hcmQtdGl0bGUge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZ28tY29ybmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YTgyNTtcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggMCAzMnB4O1xufVxuXG4uZ28tYXJyb3cge1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBtYXJnaW4tcmlnaHQ6IC00cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGNvdXJpZXIsIHNhbnM7XG59XG5cbi5jYXJkMSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB6LWluZGV4OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHRvcDogLTE2cHg7XG4gIHJpZ2h0OiAtMTZweDtcbiAgYmFja2dyb3VuZDogI2Y5YTgyNTtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuN3MgZWFzZS1vdXQ7XG59XG4uY2FyZDE6aG92ZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgzMCk7XG59XG5cbi5jYXJkMTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJkMTpob3ZlciBwIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG4uY2FyZDE6aG92ZXIgaDEge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgY29sb3I6ICNmZmZmZmY7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AstrologerDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-astrologer-dashboard',
          templateUrl: './astrologer-dashboard.component.html',
          styleUrls: ['./astrologer-dashboard.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Dashboard/dashboard-module.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/Dashboard/dashboard-module.module.ts ***!
    \******************************************************/

  /*! exports provided: DashboardModuleModule */

  /***/
  function srcAppDashboardDashboardModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModuleModule", function () {
      return DashboardModuleModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../material-module */
    "./src/app/material-module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/Dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _astrologer_dashboard_astrologer_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./astrologer-dashboard/astrologer-dashboard.component */
    "./src/app/Dashboard/astrologer-dashboard/astrologer-dashboard.component.ts");
    /* harmony import */


    var _auth_canActivateAuth_gaurd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../auth/canActivateAuth.gaurd */
    "./src/app/auth/canActivateAuth.gaurd.ts");
    /* harmony import */


    var _astro_report_astro_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./astro-report/astro-report.component */
    "./src/app/Dashboard/astro-report/astro-report.component.ts");
    /* harmony import */


    var _astro_report_edit_report_edit_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./astro-report/edit-report/edit-report.component */
    "./src/app/Dashboard/astro-report/edit-report/edit-report.component.ts");
    /* harmony import */


    var _astro_question_astro_question_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./astro-question/astro-question.component */
    "./src/app/Dashboard/astro-question/astro-question.component.ts");

    var DashboardModuleModule = function DashboardModuleModule() {
      _classCallCheck(this, DashboardModuleModule);
    };

    DashboardModuleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardModuleModule
    });
    DashboardModuleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardModuleModule_Factory(t) {
        return new (t || DashboardModuleModule)();
      },
      providers: [_auth_canActivateAuth_gaurd__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
      imports: [[_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModuleModule, {
        declarations: [_astrologer_dashboard_astrologer_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["AstrologerDashboardComponent"], _astro_report_astro_report_component__WEBPACK_IMPORTED_MODULE_7__["AstroReportComponent"], _astro_report_edit_report_edit_report_component__WEBPACK_IMPORTED_MODULE_8__["EditReportComponent"], _astro_question_astro_question_component__WEBPACK_IMPORTED_MODULE_9__["AstroQuestionComponent"]],
        imports: [_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModuleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_astrologer_dashboard_astrologer_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["AstrologerDashboardComponent"], _astro_report_astro_report_component__WEBPACK_IMPORTED_MODULE_7__["AstroReportComponent"], _astro_report_edit_report_edit_report_component__WEBPACK_IMPORTED_MODULE_8__["EditReportComponent"], _astro_question_astro_question_component__WEBPACK_IMPORTED_MODULE_9__["AstroQuestionComponent"]],
          imports: [_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
          providers: [_auth_canActivateAuth_gaurd__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Dashboard/dashboard-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Dashboard/dashboard-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
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


    var _astrologer_dashboard_astrologer_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./astrologer-dashboard/astrologer-dashboard.component */
    "./src/app/Dashboard/astrologer-dashboard/astrologer-dashboard.component.ts");
    /* harmony import */


    var _astro_report_astro_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./astro-report/astro-report.component */
    "./src/app/Dashboard/astro-report/astro-report.component.ts");
    /* harmony import */


    var _astro_question_astro_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./astro-question/astro-question.component */
    "./src/app/Dashboard/astro-question/astro-question.component.ts");
    /* harmony import */


    var _auth_canActivateAuth_gaurd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth/canActivateAuth.gaurd */
    "./src/app/auth/canActivateAuth.gaurd.ts");

    var routes = [{
      path: '',
      component: _astrologer_dashboard_astrologer_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AstrologerDashboardComponent"]
    }, {
      path: 'astroReport',
      component: _astro_report_astro_report_component__WEBPACK_IMPORTED_MODULE_3__["AstroReportComponent"],
      canActivate: [_auth_canActivateAuth_gaurd__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'astroQuestion',
      component: _astro_question_astro_question_component__WEBPACK_IMPORTED_MODULE_4__["AstroQuestionComponent"],
      canActivate: [_auth_canActivateAuth_gaurd__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardRoutingModule
    });
    DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardRoutingModule_Factory(t) {
        return new (t || DashboardRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Dashboard-dashboard-module-module-es5.js.map