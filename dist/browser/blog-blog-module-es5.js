function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js ***!
    \****************************************************************************/

  /*! exports provided: MAT_DATEPICKER_SCROLL_STRATEGY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_DATEPICKER_VALIDATORS, MAT_DATEPICKER_VALUE_ACCESSOR, MatCalendar, MatCalendarBody, MatCalendarCell, MatCalendarHeader, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerInputEvent, MatDatepickerIntl, MatDatepickerModule, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatMultiYearView, MatYearView, matDatepickerAnimations, yearsPerPage, yearsPerRow */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015DatepickerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY", function () {
      return MAT_DATEPICKER_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY", function () {
      return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
      return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALIDATORS", function () {
      return MAT_DATEPICKER_VALIDATORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALUE_ACCESSOR", function () {
      return MAT_DATEPICKER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCalendar", function () {
      return MatCalendar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCalendarBody", function () {
      return MatCalendarBody;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCalendarCell", function () {
      return MatCalendarCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCalendarHeader", function () {
      return MatCalendarHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepicker", function () {
      return MatDatepicker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerContent", function () {
      return MatDatepickerContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerInput", function () {
      return MatDatepickerInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerInputEvent", function () {
      return MatDatepickerInputEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerIntl", function () {
      return MatDatepickerIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerModule", function () {
      return MatDatepickerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerToggle", function () {
      return MatDatepickerToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerToggleIcon", function () {
      return MatDatepickerToggleIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMonthView", function () {
      return MatMonthView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMultiYearView", function () {
      return MatMultiYearView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatYearView", function () {
      return MatYearView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matDatepickerAnimations", function () {
      return matDatepickerAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "yearsPerPage", function () {
      return yearsPerPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "yearsPerRow", function () {
      return yearsPerRow;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/datepicker-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     * @param {?} provider
     * @return {?}
     */


    var _c0 = ["mat-calendar-body", ""];

    function MatCalendarBody_tr_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("padding-top", ctx_r125._cellPadding)("padding-bottom", ctx_r125._cellPadding);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r125.numCols);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r125.label, " ");
      }
    }

    function MatCalendarBody_tr_1_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("padding-top", ctx_r129._cellPadding)("padding-bottom", ctx_r129._cellPadding);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r129._firstRowOffset);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r129._firstRowOffset >= ctx_r129.labelMinRequiredCells ? ctx_r129.label : "", " ");
      }
    }

    function MatCalendarBody_tr_1_td_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarBody_tr_1_td_2_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r134);

          var item_r131 = ctx.$implicit;

          var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          return ctx_r133._cellClicked(item_r131);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r131 = ctx.$implicit;
        var colIndex_r132 = ctx.index;

        var rowIndex_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;

        var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx_r130._cellWidth)("padding-top", ctx_r130._cellPadding)("padding-bottom", ctx_r130._cellPadding);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-calendar-body-disabled", !item_r131.enabled)("mat-calendar-body-active", ctx_r130._isActiveCell(rowIndex_r128, colIndex_r132));

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", item_r131.cssClasses)("tabindex", ctx_r130._isActiveCell(rowIndex_r128, colIndex_r132) ? 0 : 0 - 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", item_r131.ariaLabel)("aria-disabled", !item_r131.enabled || null)("aria-selected", ctx_r130.selectedValue === item_r131.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-calendar-body-selected", ctx_r130.selectedValue === item_r131.value)("mat-calendar-body-today", ctx_r130.todayValue === item_r131.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r131.displayValue, " ");
      }
    }

    function MatCalendarBody_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MatCalendarBody_tr_1_td_1_Template, 2, 6, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatCalendarBody_tr_1_td_2_Template, 3, 20, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r127 = ctx.$implicit;
        var rowIndex_r128 = ctx.index;

        var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rowIndex_r128 === 0 && ctx_r126._firstRowOffset);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", row_r127);
      }
    }

    function MatMonthView_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r137 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", day_r137.long);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](day_r137.narrow);
      }
    }

    var _c1 = ["*"];

    function MatCalendar_ng_template_0_Template(rf, ctx) {}

    function MatCalendar_mat_month_view_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-month-view", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_month_view_2_Template_mat_month_view_activeDateChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r143);

          var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r142.activeDate = $event;
        })("selectedChange", function MatCalendar_mat_month_view_2_Template_mat_month_view_selectedChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r143);

          var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r144._dateSelected($event);
        })("_userSelection", function MatCalendar_mat_month_view_2_Template_mat_month_view__userSelection_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r143);

          var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r145._userSelected();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r139.activeDate)("selected", ctx_r139.selected)("dateFilter", ctx_r139.dateFilter)("maxDate", ctx_r139.maxDate)("minDate", ctx_r139.minDate)("dateClass", ctx_r139.dateClass);
      }
    }

    function MatCalendar_mat_year_view_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-year-view", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_activeDateChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r147);

          var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r146.activeDate = $event;
        })("monthSelected", function MatCalendar_mat_year_view_3_Template_mat_year_view_monthSelected_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r147);

          var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r148._monthSelectedInYearView($event);
        })("selectedChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_selectedChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r147);

          var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r149._goToDateInView($event, "month");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r140.activeDate)("selected", ctx_r140.selected)("dateFilter", ctx_r140.dateFilter)("maxDate", ctx_r140.maxDate)("minDate", ctx_r140.minDate);
      }
    }

    function MatCalendar_mat_multi_year_view_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-multi-year-view", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r151);

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r150.activeDate = $event;
        })("yearSelected", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_yearSelected_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r151);

          var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r152._yearSelectedInMultiYearView($event);
        })("selectedChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_selectedChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r151);

          var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r153._goToDateInView($event, "year");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r141.activeDate)("selected", ctx_r141.selected)("dateFilter", ctx_r141.dateFilter)("maxDate", ctx_r141.maxDate)("minDate", ctx_r141.minDate);
      }
    }

    var _c2 = ["button"];

    function MatDatepickerToggle__svg_svg_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "path", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    }

    var _c3 = [[["", "matDatepickerToggleIcon", ""]]];
    var _c4 = ["[matDatepickerToggleIcon]"];

    function createMissingDateImplError(provider) {
      return Error("MatDatepicker: No provider found for ".concat(provider, ". You must import one of the following ") + "modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a " + "custom implementation.");
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/datepicker-intl.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Datepicker data that requires internationalization.
     */


    var MatDatepickerIntl =
    /*#__PURE__*/
    function () {
      function MatDatepickerIntl() {
        _classCallCheck(this, MatDatepickerIntl);

        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        /**
         * A label for the calendar popup (used by screen readers).
         */

        this.calendarLabel = 'Calendar';
        /**
         * A label for the button used to open the calendar popup (used by screen readers).
         */

        this.openCalendarLabel = 'Open calendar';
        /**
         * A label for the previous month button (used by screen readers).
         */

        this.prevMonthLabel = 'Previous month';
        /**
         * A label for the next month button (used by screen readers).
         */

        this.nextMonthLabel = 'Next month';
        /**
         * A label for the previous year button (used by screen readers).
         */

        this.prevYearLabel = 'Previous year';
        /**
         * A label for the next year button (used by screen readers).
         */

        this.nextYearLabel = 'Next year';
        /**
         * A label for the previous multi-year button (used by screen readers).
         */

        this.prevMultiYearLabel = 'Previous 20 years';
        /**
         * A label for the next multi-year button (used by screen readers).
         */

        this.nextMultiYearLabel = 'Next 20 years';
        /**
         * A label for the 'switch to month view' button (used by screen readers).
         */

        this.switchToMonthViewLabel = 'Choose date';
        /**
         * A label for the 'switch to year view' button (used by screen readers).
         */

        this.switchToMultiYearViewLabel = 'Choose month and year';
      }
      /**
       * Formats a range of years.
       * @param {?} start
       * @param {?} end
       * @return {?}
       */


      _createClass(MatDatepickerIntl, [{
        key: "formatYearRange",
        value: function formatYearRange(start, end) {
          return "".concat(start, " \u2013 ").concat(end);
        }
      }]);

      return MatDatepickerIntl;
    }();

    MatDatepickerIntl.ɵfac = function MatDatepickerIntl_Factory(t) {
      return new (t || MatDatepickerIntl)();
    };
    /** @nocollapse */


    MatDatepickerIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({
      factory: function MatDatepickerIntl_Factory() {
        return new MatDatepickerIntl();
      },
      token: MatDatepickerIntl,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/calendar-body.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An internal class that represents the data corresponding to a single calendar cell.
     * \@docs-private
     */


    var MatCalendarCell =
    /**
     * @param {?} value
     * @param {?} displayValue
     * @param {?} ariaLabel
     * @param {?} enabled
     * @param {?=} cssClasses
     */
    function MatCalendarCell(value, displayValue, ariaLabel, enabled) {
      var cssClasses = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      _classCallCheck(this, MatCalendarCell);

      this.value = value;
      this.displayValue = displayValue;
      this.ariaLabel = ariaLabel;
      this.enabled = enabled;
      this.cssClasses = cssClasses;
    };

    if (false) {}
    /**
     * An internal component used to display calendar data in a table.
     * \@docs-private
     */


    var MatCalendarBody =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       */
      function MatCalendarBody(_elementRef, _ngZone) {
        _classCallCheck(this, MatCalendarBody);

        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * The number of columns in the table.
         */

        this.numCols = 7;
        /**
         * The cell number of the active cell in the table.
         */

        this.activeCell = 0;
        /**
         * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
         * maintained even as the table resizes.
         */

        this.cellAspectRatio = 1;
        /**
         * Emits when a new value is selected.
         */

        this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
      }
      /**
       * @param {?} cell
       * @return {?}
       */


      _createClass(MatCalendarBody, [{
        key: "_cellClicked",
        value: function _cellClicked(cell) {
          if (cell.enabled) {
            this.selectedValueChange.emit(cell.value);
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var columnChanges = changes['numCols'];
          var rows = this.rows,
              numCols = this.numCols;

          if (changes['rows'] || columnChanges) {
            this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
          }

          if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
            this._cellPadding = "".concat(50 * this.cellAspectRatio / numCols, "%");
          }

          if (columnChanges || !this._cellWidth) {
            this._cellWidth = "".concat(100 / numCols, "%");
          }
        }
        /**
         * @param {?} rowIndex
         * @param {?} colIndex
         * @return {?}
         */

      }, {
        key: "_isActiveCell",
        value: function _isActiveCell(rowIndex, colIndex) {
          /** @type {?} */
          var cellNumber = rowIndex * this.numCols + colIndex; // Account for the fact that the first row may not have as many cells.

          if (rowIndex) {
            cellNumber -= this._firstRowOffset;
          }

          return cellNumber == this.activeCell;
        }
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @return {?}
         */

      }, {
        key: "_focusActiveCell",
        value: function _focusActiveCell() {
          var _this = this;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var activeCell = _this._elementRef.nativeElement.querySelector('.mat-calendar-body-active');

              if (activeCell) {
                activeCell.focus();
              }
            });
          });
        }
      }]);

      return MatCalendarBody;
    }();

    MatCalendarBody.ɵfac = function MatCalendarBody_Factory(t) {
      return new (t || MatCalendarBody)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]));
    };

    MatCalendarBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatCalendarBody,
      selectors: [["", "mat-calendar-body", ""]],
      hostAttrs: ["role", "grid", "aria-readonly", "true", 1, "mat-calendar-body"],
      inputs: {
        numCols: "numCols",
        activeCell: "activeCell",
        cellAspectRatio: "cellAspectRatio",
        label: "label",
        rows: "rows",
        todayValue: "todayValue",
        selectedValue: "selectedValue",
        labelMinRequiredCells: "labelMinRequiredCells"
      },
      outputs: {
        selectedValueChange: "selectedValueChange"
      },
      exportAs: ["matCalendarBody"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
      attrs: _c0,
      decls: 2,
      vars: 2,
      consts: [["aria-hidden", "true", 4, "ngIf"], ["role", "row", 4, "ngFor", "ngForOf"], ["aria-hidden", "true"], [1, "mat-calendar-body-label"], ["role", "row"], ["aria-hidden", "true", "class", "mat-calendar-body-label", 3, "paddingTop", "paddingBottom", 4, "ngIf"], ["role", "gridcell", "class", "mat-calendar-body-cell mat-focus-indicator", "role", "button", 3, "ngClass", "tabindex", "mat-calendar-body-disabled", "mat-calendar-body-active", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "mat-calendar-body-label"], ["role", "gridcell", "role", "button", 1, "mat-calendar-body-cell", "mat-focus-indicator", 3, "ngClass", "tabindex", "click"], [1, "mat-calendar-body-cell-content"]],
      template: function MatCalendarBody_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatCalendarBody_tr_0_Template, 3, 6, "tr", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MatCalendarBody_tr_1_Template, 3, 2, "tr", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx._firstRowOffset < ctx.labelMinRequiredCells);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rows);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatCalendarBody.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }];
    };

    MatCalendarBody.propDecorators = {
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      rows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      todayValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      labelMinRequiredCells: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      numCols: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      activeCell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      cellAspectRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedValueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatCalendarBody, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: '[mat-calendar-body]',
          template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\n  <td class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"numCols\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{label}}\n  </td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n  <!--\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n    The aspect ratio of the table cells is maintained by setting the top and bottom padding as a\n    percentage of the width (a variant of the trick described here:\n    https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n  -->\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\n      aria-hidden=\"true\"\n      class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"_firstRowOffset\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}\n  </td>\n  <td *ngFor=\"let item of row; let colIndex = index\"\n      role=\"gridcell\"\n      class=\"mat-calendar-body-cell mat-focus-indicator\"\n      [ngClass]=\"item.cssClasses\"\n      [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n      [class.mat-calendar-body-disabled]=\"!item.enabled\"\n      [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n      [attr.aria-label]=\"item.ariaLabel\"\n      [attr.aria-disabled]=\"!item.enabled || null\"\n      [attr.aria-selected]=\"selectedValue === item.value\"\n      (click)=\"_cellClicked(item)\"\n      [style.width]=\"_cellWidth\"\n      [style.paddingTop]=\"_cellPadding\"\n      role=\"button\"\n      [style.paddingBottom]=\"_cellPadding\">\n      <div class=\"mat-calendar-body-cell-content\"\n        [class.mat-calendar-body-selected]=\"selectedValue === item.value\"\n        [class.mat-calendar-body-today]=\"todayValue === item.value\">\n        {{item.displayValue}}\n      </div>\n  </td>\n</tr>\n",
          host: {
            'class': 'mat-calendar-body',
            'role': 'grid',
            'aria-readonly': 'true'
          },
          exportAs: 'matCalendarBody',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }];
      }, {
        numCols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        activeCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        cellAspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedValueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        todayValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        labelMinRequiredCells: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/month-view.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DAYS_PER_WEEK = 7;
    /**
     * An internal component used to display a single month in the datepicker.
     * \@docs-private
     * @template D
     */

    var MatMonthView =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       * @param {?} _dateFormats
       * @param {?} _dateAdapter
       * @param {?=} _dir
       */
      function MatMonthView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
        _classCallCheck(this, MatMonthView);

        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        /**
         * Emits when a new date is selected.
         */

        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when any date is selected.
         */

        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when any date is activated.
         */

        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }

        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        }

        this._activeDate = this._dateAdapter.today();
      }
      /**
       * The date to display in this month view (everything other than the month and year is ignored).
       * @return {?}
       */


      _createClass(MatMonthView, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this2 = this;

          this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this2._init();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._rerenderSubscription.unsubscribe();
        }
        /**
         * Handles when a new date is selected.
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_dateSelected",
        value: function _dateSelected(date) {
          if (this._selectedDate != date) {
            /** @type {?} */
            var selectedYear = this._dateAdapter.getYear(this.activeDate);
            /** @type {?} */


            var selectedMonth = this._dateAdapter.getMonth(this.activeDate);
            /** @type {?} */


            var selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);

            this.selectedChange.emit(selectedDate);
          }

          this._userSelection.emit();
        }
        /**
         * Handles keydown events on the calendar body when calendar is in month view.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleCalendarBodyKeydown",
        value: function _handleCalendarBodyKeydown(event) {
          // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
          // disabled ones from being selected. This may not be ideal, we should look into whether
          // navigation should skip over disabled dates, and if so, how to implement that efficiently.
          // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
          // disabled ones from being selected. This may not be ideal, we should look into whether
          // navigation should skip over disabled dates, and if so, how to implement that efficiently.

          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var isRtl = this._isRtl();

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["LEFT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["RIGHT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["DOWN_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["HOME"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["END"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["PAGE_UP"]:
              this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["PAGE_DOWN"]:
              this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["SPACE"]:
              if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                this._dateSelected(this._dateAdapter.getDate(this._activeDate));

                this._userSelection.emit(); // Prevent unexpected default actions such as form submission.


                event.preventDefault();
              }

              return;

            default:
              // Don't prevent default or focus active cell on keys that we don't explicitly handle.
              return;
          }

          if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
          }

          this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


          event.preventDefault();
        }
        /**
         * Initializes this month view.
         * @return {?}
         */

      }, {
        key: "_init",
        value: function _init() {
          this._selectedDate = this._getDateInCurrentMonth(this.selected);
          this._todayDate = this._getDateInCurrentMonth(this._dateAdapter.today());
          this._monthLabel = this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();
          /** @type {?} */

          var firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);

          this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;

          this._initWeekdays();

          this._createWeekCells();

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @return {?}
         */

      }, {
        key: "_focusActiveCell",
        value: function _focusActiveCell() {
          this._matCalendarBody._focusActiveCell();
        }
        /**
         * Initializes the weekdays.
         * @private
         * @return {?}
         */

      }, {
        key: "_initWeekdays",
        value: function _initWeekdays() {
          /** @type {?} */
          var firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
          /** @type {?} */


          var narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
          /** @type {?} */


          var longWeekdays = this._dateAdapter.getDayOfWeekNames('long'); // Rotate the labels for days of the week based on the configured first day of the week.

          /** @type {?} */


          var weekdays = longWeekdays.map(
          /**
          * @param {?} long
          * @param {?} i
          * @return {?}
          */
          function (long, i) {
            return {
              long: long,
              narrow: narrowWeekdays[i]
            };
          });
          this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
        }
        /**
         * Creates MatCalendarCells for the dates in this month.
         * @private
         * @return {?}
         */

      }, {
        key: "_createWeekCells",
        value: function _createWeekCells() {
          /** @type {?} */
          var daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
          /** @type {?} */


          var dateNames = this._dateAdapter.getDateNames();

          this._weeks = [[]];

          for (var i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell == DAYS_PER_WEEK) {
              this._weeks.push([]);

              cell = 0;
            }
            /** @type {?} */


            var date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
            /** @type {?} */


            var enabled = this._shouldEnableDate(date);
            /** @type {?} */


            var ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
            /** @type {?} */


            var cellClasses = this.dateClass ? this.dateClass(date) : undefined;

            this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses));
          }
        }
        /**
         * Date filter for the month
         * @private
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_shouldEnableDate",
        value: function _shouldEnableDate(date) {
          return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date));
        }
        /**
         * Gets the date in this month that the given Date falls on.
         * Returns null if the given Date is in another month.
         * @private
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_getDateInCurrentMonth",
        value: function _getDateInCurrentMonth(date) {
          return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
        }
        /**
         * Checks whether the 2 dates are non-null and fall within the same month of the same year.
         * @private
         * @param {?} d1
         * @param {?} d2
         * @return {?}
         */

      }, {
        key: "_hasSameMonthAndYear",
        value: function _hasSameMonthAndYear(d1, d2) {
          return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
        /**
         * Determines whether the user has the RTL layout direction.
         * @private
         * @return {?}
         */

      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this._dir && this._dir.value === 'rtl';
        }
      }, {
        key: "activeDate",
        get: function get() {
          return this._activeDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

          this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

          if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
            this._init();
          }
        }
        /**
         * The currently selected date.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          this._selectedDate = this._getDateInCurrentMonth(this._selected);
        }
        /**
         * The minimum selectable date.
         * @return {?}
         */

      }, {
        key: "minDate",
        get: function get() {
          return this._minDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The maximum selectable date.
         * @return {?}
         */

      }, {
        key: "maxDate",
        get: function get() {
          return this._maxDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
      }]);

      return MatMonthView;
    }();

    MatMonthView.ɵfac = function MatMonthView_Factory(t) {
      return new (t || MatMonthView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8));
    };

    MatMonthView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatMonthView,
      selectors: [["mat-month-view"]],
      viewQuery: function MatMonthView_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendarBody, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
        }
      },
      inputs: {
        activeDate: "activeDate",
        selected: "selected",
        minDate: "minDate",
        maxDate: "maxDate",
        dateFilter: "dateFilter",
        dateClass: "dateClass"
      },
      outputs: {
        selectedChange: "selectedChange",
        _userSelection: "_userSelection",
        activeDateChange: "activeDateChange"
      },
      exportAs: ["matMonthView"],
      decls: 7,
      vars: 7,
      consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col", 4, "ngFor", "ngForOf"], ["colspan", "7", "aria-hidden", "true", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "selectedValue", "labelMinRequiredCells", "activeCell", "selectedValueChange", "keydown"], ["scope", "col"]],
      template: function MatMonthView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatMonthView_th_3_Template, 2, 2, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tbody", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_6_listener($event) {
            return ctx._dateSelected($event);
          })("keydown", function MatMonthView_Template_tbody_keydown_6_listener($event) {
            return ctx._handleCalendarBodyKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._weekdays);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("selectedValue", ctx._selectedDate)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], MatCalendarBody],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatMonthView.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"]]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }];
    };

    MatMonthView.propDecorators = {
      activeDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _userSelection: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      activeDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _matCalendarBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatCalendarBody]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatMonthView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-month-view',
          template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr>\n      <th scope=\"col\" *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th>\n    </tr>\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_monthLabel\"\n         [rows]=\"_weeks\"\n         [todayValue]=\"_todayDate!\"\n         [selectedValue]=\"_selectedDate!\"\n         [labelMinRequiredCells]=\"3\"\n         [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\"\n         (selectedValueChange)=\"_dateSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
          exportAs: 'matMonthView',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      }, {
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _userSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        _matCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendarBody]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/multi-year-view.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var yearsPerPage = 24;
    /** @type {?} */

    var yearsPerRow = 4;
    /**
     * An internal component used to display a year selector in the datepicker.
     * \@docs-private
     * @template D
     */

    var MatMultiYearView =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       * @param {?} _dateAdapter
       * @param {?=} _dir
       */
      function MatMultiYearView(_changeDetectorRef, _dateAdapter, _dir) {
        _classCallCheck(this, MatMultiYearView);

        this._changeDetectorRef = _changeDetectorRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        /**
         * Emits when a new year is selected.
         */

        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits the selected year. This doesn't imply a change on the selected date
         */

        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when any date is activated.
         */

        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }

        this._activeDate = this._dateAdapter.today();
      }
      /**
       * The date to display in this multi-year view (everything other than the year is ignored).
       * @return {?}
       */


      _createClass(MatMultiYearView, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this3 = this;

          this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this3._init();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._rerenderSubscription.unsubscribe();
        }
        /**
         * Initializes this multi-year view.
         * @return {?}
         */

      }, {
        key: "_init",
        value: function _init() {
          var _this4 = this;

          this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today()); // We want a range years such that we maximize the number of
          // enabled dates visible at once. This prevents issues where the minimum year
          // is the last item of a page OR the maximum year is the first item of a page.
          // The offset from the active year to the "slot" for the starting year is the
          // *actual* first rendered year in the multi-year view.

          /** @type {?} */

          var activeYear = this._dateAdapter.getYear(this._activeDate);
          /** @type {?} */


          var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
          this._years = [];

          for (var i = 0, row = []; i < yearsPerPage; i++) {
            row.push(minYearOfPage + i);

            if (row.length == yearsPerRow) {
              this._years.push(row.map(
              /**
              * @param {?} year
              * @return {?}
              */
              function (year) {
                return _this4._createCellForYear(year);
              }));

              row = [];
            }
          }

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Handles when a new year is selected.
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "_yearSelected",
        value: function _yearSelected(year) {
          this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));
          /** @type {?} */

          var month = this._dateAdapter.getMonth(this.activeDate);
          /** @type {?} */


          var daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));

          this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
        }
        /**
         * Handles keydown events on the calendar body when calendar is in multi-year view.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleCalendarBodyKeydown",
        value: function _handleCalendarBodyKeydown(event) {
          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var isRtl = this._isRtl();

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["LEFT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["RIGHT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["DOWN_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["HOME"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["END"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["PAGE_UP"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["PAGE_DOWN"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["SPACE"]:
              this._yearSelected(this._dateAdapter.getYear(this._activeDate));

              break;

            default:
              // Don't prevent default or focus active cell on keys that we don't explicitly handle.
              return;
          }

          if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
          }

          this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


          event.preventDefault();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_getActiveCell",
        value: function _getActiveCell() {
          return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
        }
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @return {?}
         */

      }, {
        key: "_focusActiveCell",
        value: function _focusActiveCell() {
          this._matCalendarBody._focusActiveCell();
        }
        /**
         * Creates an MatCalendarCell for the given year.
         * @private
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "_createCellForYear",
        value: function _createCellForYear(year) {
          /** @type {?} */
          var yearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(year, 0, 1));

          return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year));
        }
        /**
         * Whether the given year is enabled.
         * @private
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "_shouldEnableYear",
        value: function _shouldEnableYear(year) {
          // disable if the year is greater than maxDate lower than minDate
          if (year === undefined || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
            return false;
          } // enable if it reaches here and there's no filter defined


          if (!this.dateFilter) {
            return true;
          }
          /** @type {?} */


          var firstOfYear = this._dateAdapter.createDate(year, 0, 1); // If any date in the year is enabled count the year as enabled.


          for (var date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
              return true;
            }
          }

          return false;
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
        /**
         * Determines whether the user has the RTL layout direction.
         * @private
         * @return {?}
         */

      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this._dir && this._dir.value === 'rtl';
        }
      }, {
        key: "activeDate",
        get: function get() {
          return this._activeDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

          this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

          if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
            this._init();
          }
        }
        /**
         * The currently selected date.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          this._selectedYear = this._selected && this._dateAdapter.getYear(this._selected);
        }
        /**
         * The minimum selectable date.
         * @return {?}
         */

      }, {
        key: "minDate",
        get: function get() {
          return this._minDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The maximum selectable date.
         * @return {?}
         */

      }, {
        key: "maxDate",
        get: function get() {
          return this._maxDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
      }]);

      return MatMultiYearView;
    }();

    MatMultiYearView.ɵfac = function MatMultiYearView_Factory(t) {
      return new (t || MatMultiYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8));
    };

    MatMultiYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatMultiYearView,
      selectors: [["mat-multi-year-view"]],
      viewQuery: function MatMultiYearView_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendarBody, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
        }
      },
      inputs: {
        activeDate: "activeDate",
        selected: "selected",
        minDate: "minDate",
        maxDate: "maxDate",
        dateFilter: "dateFilter"
      },
      outputs: {
        selectedChange: "selectedChange",
        yearSelected: "yearSelected",
        activeDateChange: "activeDateChange"
      },
      exportAs: ["matMultiYearView"],
      decls: 5,
      vars: 6,
      consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "rows", "todayValue", "selectedValue", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]],
      template: function MatMultiYearView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tbody", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
            return ctx._yearSelected($event);
          })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) {
            return ctx._handleCalendarBodyKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx._years)("todayValue", ctx._todayYear)("selectedValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
        }
      },
      directives: [MatCalendarBody],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatMultiYearView.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }];
    };

    MatMultiYearView.propDecorators = {
      activeDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      yearSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      activeDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _matCalendarBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatCalendarBody]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatMultiYearView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-multi-year-view',
          template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]=\"_years\"\n         [todayValue]=\"_todayYear\"\n         [selectedValue]=\"_selectedYear!\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_getActiveCell()\"\n         (selectedValueChange)=\"_yearSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
          exportAs: 'matMultiYearView',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      }, {
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        _matCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendarBody]
        }]
      });
    })();

    if (false) {}
    /**
     * @template D
     * @param {?} dateAdapter
     * @param {?} date1
     * @param {?} date2
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */


    function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
      /** @type {?} */
      var year1 = dateAdapter.getYear(date1);
      /** @type {?} */

      var year2 = dateAdapter.getYear(date2);
      /** @type {?} */

      var startingYear = getStartingYear(dateAdapter, minDate, maxDate);
      return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
    }
    /**
     * When the multi-year view is first opened, the active year will be in view.
     * So we compute how many years are between the active year and the *slot* where our
     * "startingYear" will render when paged into view.
     * @template D
     * @param {?} dateAdapter
     * @param {?} activeDate
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */


    function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
      /** @type {?} */
      var activeYear = dateAdapter.getYear(activeDate);
      return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
    }
    /**
     * We pick a "starting" year such that either the maximum year would be at the end
     * or the minimum year would be at the beginning of a page.
     * @template D
     * @param {?} dateAdapter
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */


    function getStartingYear(dateAdapter, minDate, maxDate) {
      /** @type {?} */
      var startingYear = 0;

      if (maxDate) {
        /** @type {?} */
        var maxYear = dateAdapter.getYear(maxDate);
        startingYear = maxYear - yearsPerPage + 1;
      } else if (minDate) {
        startingYear = dateAdapter.getYear(minDate);
      }

      return startingYear;
    }
    /**
     * Gets remainder that is non-negative, even if first number is negative
     * @param {?} a
     * @param {?} b
     * @return {?}
     */


    function euclideanModulo(a, b) {
      return (a % b + b) % b;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/year-view.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An internal component used to display a single year in the datepicker.
     * \@docs-private
     * @template D
     */


    var MatYearView =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       * @param {?} _dateFormats
       * @param {?} _dateAdapter
       * @param {?=} _dir
       */
      function MatYearView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
        _classCallCheck(this, MatYearView);

        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        /**
         * Emits when a new month is selected.
         */

        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits the selected month. This doesn't imply a change on the selected date
         */

        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when any date is activated.
         */

        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }

        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        }

        this._activeDate = this._dateAdapter.today();
      }
      /**
       * The date to display in this year view (everything other than the year is ignored).
       * @return {?}
       */


      _createClass(MatYearView, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this5 = this;

          this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this5._init();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._rerenderSubscription.unsubscribe();
        }
        /**
         * Handles when a new month is selected.
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "_monthSelected",
        value: function _monthSelected(month) {
          /** @type {?} */
          var normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);

          this.monthSelected.emit(normalizedDate);
          /** @type {?} */

          var daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);

          this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
        }
        /**
         * Handles keydown events on the calendar body when calendar is in year view.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleCalendarBodyKeydown",
        value: function _handleCalendarBodyKeydown(event) {
          // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
          // disabled ones from being selected. This may not be ideal, we should look into whether
          // navigation should skip over disabled dates, and if so, how to implement that efficiently.
          // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
          // disabled ones from being selected. This may not be ideal, we should look into whether
          // navigation should skip over disabled dates, and if so, how to implement that efficiently.

          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var isRtl = this._isRtl();

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["LEFT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["RIGHT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["DOWN_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["HOME"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["END"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["PAGE_UP"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["PAGE_DOWN"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["SPACE"]:
              this._monthSelected(this._dateAdapter.getMonth(this._activeDate));

              break;

            default:
              // Don't prevent default or focus active cell on keys that we don't explicitly handle.
              return;
          }

          if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
          }

          this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


          event.preventDefault();
        }
        /**
         * Initializes this year view.
         * @return {?}
         */

      }, {
        key: "_init",
        value: function _init() {
          var _this6 = this;

          this._selectedMonth = this._getMonthInCurrentYear(this.selected);
          this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
          this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
          /** @type {?} */

          var monthNames = this._dateAdapter.getMonthNames('short'); // First row of months only contains 5 elements so we can fit the year label on the same row.


          this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(
          /**
          * @param {?} row
          * @return {?}
          */
          function (row) {
            return row.map(
            /**
            * @param {?} month
            * @return {?}
            */
            function (month) {
              return _this6._createCellForMonth(month, monthNames[month]);
            });
          });

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @return {?}
         */

      }, {
        key: "_focusActiveCell",
        value: function _focusActiveCell() {
          this._matCalendarBody._focusActiveCell();
        }
        /**
         * Gets the month in this year that the given Date falls on.
         * Returns null if the given Date is in another year.
         * @private
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_getMonthInCurrentYear",
        value: function _getMonthInCurrentYear(date) {
          return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
        }
        /**
         * Creates an MatCalendarCell for the given month.
         * @private
         * @param {?} month
         * @param {?} monthName
         * @return {?}
         */

      }, {
        key: "_createCellForMonth",
        value: function _createCellForMonth(month, monthName) {
          /** @type {?} */
          var ariaLabel = this._dateAdapter.format(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1), this._dateFormats.display.monthYearA11yLabel);

          return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month));
        }
        /**
         * Whether the given month is enabled.
         * @private
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "_shouldEnableMonth",
        value: function _shouldEnableMonth(month) {
          /** @type {?} */
          var activeYear = this._dateAdapter.getYear(this.activeDate);

          if (month === undefined || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
            return false;
          }

          if (!this.dateFilter) {
            return true;
          }
          /** @type {?} */


          var firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1); // If any date in the month is enabled count the month as enabled.


          for (var date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
              return true;
            }
          }

          return false;
        }
        /**
         * Tests whether the combination month/year is after this.maxDate, considering
         * just the month and year of this.maxDate
         * @private
         * @param {?} year
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "_isYearAndMonthAfterMaxDate",
        value: function _isYearAndMonthAfterMaxDate(year, month) {
          if (this.maxDate) {
            /** @type {?} */
            var maxYear = this._dateAdapter.getYear(this.maxDate);
            /** @type {?} */


            var maxMonth = this._dateAdapter.getMonth(this.maxDate);

            return year > maxYear || year === maxYear && month > maxMonth;
          }

          return false;
        }
        /**
         * Tests whether the combination month/year is before this.minDate, considering
         * just the month and year of this.minDate
         * @private
         * @param {?} year
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "_isYearAndMonthBeforeMinDate",
        value: function _isYearAndMonthBeforeMinDate(year, month) {
          if (this.minDate) {
            /** @type {?} */
            var minYear = this._dateAdapter.getYear(this.minDate);
            /** @type {?} */


            var minMonth = this._dateAdapter.getMonth(this.minDate);

            return year < minYear || year === minYear && month < minMonth;
          }

          return false;
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
        /**
         * Determines whether the user has the RTL layout direction.
         * @private
         * @return {?}
         */

      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this._dir && this._dir.value === 'rtl';
        }
      }, {
        key: "activeDate",
        get: function get() {
          return this._activeDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

          this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

          if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
            this._init();
          }
        }
        /**
         * The currently selected date.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          this._selectedMonth = this._getMonthInCurrentYear(this._selected);
        }
        /**
         * The minimum selectable date.
         * @return {?}
         */

      }, {
        key: "minDate",
        get: function get() {
          return this._minDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The maximum selectable date.
         * @return {?}
         */

      }, {
        key: "maxDate",
        get: function get() {
          return this._maxDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
      }]);

      return MatYearView;
    }();

    MatYearView.ɵfac = function MatYearView_Factory(t) {
      return new (t || MatYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8));
    };

    MatYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatYearView,
      selectors: [["mat-year-view"]],
      viewQuery: function MatYearView_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendarBody, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
        }
      },
      inputs: {
        activeDate: "activeDate",
        selected: "selected",
        minDate: "minDate",
        maxDate: "maxDate",
        dateFilter: "dateFilter"
      },
      outputs: {
        selectedChange: "selectedChange",
        monthSelected: "monthSelected",
        activeDateChange: "activeDateChange"
      },
      exportAs: ["matYearView"],
      decls: 5,
      vars: 8,
      consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "selectedValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]],
      template: function MatYearView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tbody", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) {
            return ctx._monthSelected($event);
          })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) {
            return ctx._handleCalendarBodyKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("selectedValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
        }
      },
      directives: [MatCalendarBody],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatYearView.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"]]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }];
    };

    MatYearView.propDecorators = {
      activeDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      monthSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      activeDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _matCalendarBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatCalendarBody]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatYearView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-year-view',
          template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth!\"\n         [selectedValue]=\"_selectedMonth!\"\n         [labelMinRequiredCells]=\"2\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_dateAdapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
          exportAs: 'matYearView',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      }, {
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        _matCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendarBody]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/calendar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default header for MatCalendar
     * @template D
     */


    var MatCalendarHeader =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _intl
       * @param {?} calendar
       * @param {?} _dateAdapter
       * @param {?} _dateFormats
       * @param {?} changeDetectorRef
       */
      function MatCalendarHeader(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
        _classCallCheck(this, MatCalendarHeader);

        this._intl = _intl;
        this.calendar = calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this.calendar.stateChanges.subscribe(
        /**
        * @return {?}
        */
        function () {
          return changeDetectorRef.markForCheck();
        });
      }
      /**
       * The label for the current calendar view.
       * @return {?}
       */


      _createClass(MatCalendarHeader, [{
        key: "currentPeriodClicked",

        /**
         * Handles user clicks on the period label.
         * @return {?}
         */
        value: function currentPeriodClicked() {
          this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
        }
        /**
         * Handles user clicks on the previous button.
         * @return {?}
         */

      }, {
        key: "previousClicked",
        value: function previousClicked() {
          this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
        }
        /**
         * Handles user clicks on the next button.
         * @return {?}
         */

      }, {
        key: "nextClicked",
        value: function nextClicked() {
          this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
        }
        /**
         * Whether the previous period button is enabled.
         * @return {?}
         */

      }, {
        key: "previousEnabled",
        value: function previousEnabled() {
          if (!this.calendar.minDate) {
            return true;
          }

          return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
        }
        /**
         * Whether the next period button is enabled.
         * @return {?}
         */

      }, {
        key: "nextEnabled",
        value: function nextEnabled() {
          return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
        }
        /**
         * Whether the two dates represent the same view in the current view mode (month or year).
         * @private
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */

      }, {
        key: "_isSameView",
        value: function _isSameView(date1, date2) {
          if (this.calendar.currentView == 'month') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
          }

          if (this.calendar.currentView == 'year') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
          } // Otherwise we are in 'multi-year' view.


          return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
        }
      }, {
        key: "periodButtonText",
        get: function get() {
          if (this.calendar.currentView == 'month') {
            return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
          }

          if (this.calendar.currentView == 'year') {
            return this._dateAdapter.getYearName(this.calendar.activeDate);
          } // The offset from the active year to the "slot" for the starting year is the
          // *actual* first rendered year in the multi-year view, and the last year is
          // just yearsPerPage - 1 away.

          /** @type {?} */


          var activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
          /** @type {?} */


          var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
          /** @type {?} */

          var maxYearOfPage = minYearOfPage + yearsPerPage - 1;
          /** @type {?} */

          var minYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
          /** @type {?} */


          var maxYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));

          return this._intl.formatYearRange(minYearName, maxYearName);
        }
        /**
         * @return {?}
         */

      }, {
        key: "periodButtonLabel",
        get: function get() {
          return this.calendar.currentView == 'month' ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
        }
        /**
         * The label for the previous button.
         * @return {?}
         */

      }, {
        key: "prevButtonLabel",
        get: function get() {
          return {
            'month': this._intl.prevMonthLabel,
            'year': this._intl.prevYearLabel,
            'multi-year': this._intl.prevMultiYearLabel
          }[this.calendar.currentView];
        }
        /**
         * The label for the next button.
         * @return {?}
         */

      }, {
        key: "nextButtonLabel",
        get: function get() {
          return {
            'month': this._intl.nextMonthLabel,
            'year': this._intl.nextYearLabel,
            'multi-year': this._intl.nextMultiYearLabel
          }[this.calendar.currentView];
        }
      }]);

      return MatCalendarHeader;
    }();

    MatCalendarHeader.ɵfac = function MatCalendarHeader_Factory(t) {
      return new (t || MatCalendarHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatCalendar;
      })), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
    };

    MatCalendarHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatCalendarHeader,
      selectors: [["mat-calendar-header"]],
      exportAs: ["matCalendarHeader"],
      ngContentSelectors: _c1,
      decls: 9,
      vars: 8,
      consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["mat-button", "", "type", "button", "cdkAriaLive", "polite", 1, "mat-calendar-period-button", 3, "click"], [1, "mat-calendar-arrow"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "disabled", "click"]],
      template: function MatCalendarHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_2_listener() {
            return ctx.currentPeriodClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_7_listener() {
            return ctx.previousClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_8_listener() {
            return ctx.nextClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.periodButtonLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.periodButtonText, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-calendar-invert", ctx.calendar.currentView != "month");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.previousEnabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.nextEnabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkAriaLive"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatCalendarHeader.ctorParameters = function () {
      return [{
        type: MatDatepickerIntl
      }, {
        type: MatCalendar,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatCalendar;
          })]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatCalendarHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-calendar-header',
          template: "<div class=\"mat-calendar-header\">\n  <div class=\"mat-calendar-controls\">\n    <button mat-button type=\"button\" class=\"mat-calendar-period-button\"\n            (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\"\n            cdkAriaLive=\"polite\">\n      {{periodButtonText}}\n      <div class=\"mat-calendar-arrow\"\n           [class.mat-calendar-invert]=\"calendar.currentView != 'month'\"></div>\n    </button>\n\n    <div class=\"mat-calendar-spacer\"></div>\n\n    <ng-content></ng-content>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\"\n            [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\"\n            [attr.aria-label]=\"prevButtonLabel\">\n    </button>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\"\n            [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\"\n            [attr.aria-label]=\"nextButtonLabel\">\n    </button>\n  </div>\n</div>\n",
          exportAs: 'matCalendarHeader',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: MatDatepickerIntl
        }, {
          type: MatCalendar,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return MatCalendar;
            })]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * A calendar that is used as part of the datepicker.
     * \@docs-private
     * @template D
     */


    var MatCalendar =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _intl
       * @param {?} _dateAdapter
       * @param {?} _dateFormats
       * @param {?} _changeDetectorRef
       */
      function MatCalendar(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
        var _this7 = this;

        _classCallCheck(this, MatCalendar);

        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Used for scheduling that focus should be moved to the active cell on the next tick.
         * We need to schedule it, rather than do it immediately, because we have to wait
         * for Angular to re-evaluate the view children.
         */

        this._moveFocusOnNextTick = false;
        /**
         * Whether the calendar should be started in month or year view.
         */

        this.startView = 'month';
        /**
         * Emits when the currently selected date changes.
         */

        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits the year chosen in multiyear view.
         * This doesn't imply a change on the selected date.
         */

        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits the month chosen in year view.
         * This doesn't imply a change on the selected date.
         */

        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when any date is selected.
         */

        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits whenever there is a state change that the header may need to respond to.
         */

        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();

        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }

        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        }

        this._intlChanges = _intl.changes.subscribe(
        /**
        * @return {?}
        */
        function () {
          _changeDetectorRef.markForCheck();

          _this7.stateChanges.next();
        });
      }
      /**
       * A date representing the period (month or year) to start the calendar in.
       * @return {?}
       */


      _createClass(MatCalendar, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](this.headerComponent || MatCalendarHeader);
          this.activeDate = this.startAt || this._dateAdapter.today(); // Assign to the private property since we don't want to move focus on init.

          this._currentView = this.startView;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (this._moveFocusOnNextTick) {
            this._moveFocusOnNextTick = false;
            this.focusActiveCell();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._intlChanges.unsubscribe();

          this.stateChanges.complete();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var change = changes['minDate'] || changes['maxDate'] || changes['dateFilter'];

          if (change && !change.firstChange) {
            /** @type {?} */
            var view = this._getCurrentViewComponent();

            if (view) {
              // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
              // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
              this._changeDetectorRef.detectChanges();

              view._init();
            }
          }

          this.stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "focusActiveCell",
        value: function focusActiveCell() {
          this._getCurrentViewComponent()._focusActiveCell();
        }
        /**
         * Updates today's date after an update of the active date
         * @return {?}
         */

      }, {
        key: "updateTodaysDate",
        value: function updateTodaysDate() {
          /** @type {?} */
          var currentView = this.currentView;
          /** @type {?} */

          var view;

          if (currentView === 'month') {
            view = this.monthView;
          } else if (currentView === 'year') {
            view = this.yearView;
          } else {
            view = this.multiYearView;
          }

          view.ngAfterContentInit();
        }
        /**
         * Handles date selection in the month view.
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_dateSelected",
        value: function _dateSelected(date) {
          if (date && !this._dateAdapter.sameDate(date, this.selected)) {
            this.selectedChange.emit(date);
          }
        }
        /**
         * Handles year selection in the multiyear view.
         * @param {?} normalizedYear
         * @return {?}
         */

      }, {
        key: "_yearSelectedInMultiYearView",
        value: function _yearSelectedInMultiYearView(normalizedYear) {
          this.yearSelected.emit(normalizedYear);
        }
        /**
         * Handles month selection in the year view.
         * @param {?} normalizedMonth
         * @return {?}
         */

      }, {
        key: "_monthSelectedInYearView",
        value: function _monthSelectedInYearView(normalizedMonth) {
          this.monthSelected.emit(normalizedMonth);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_userSelected",
        value: function _userSelected() {
          this._userSelection.emit();
        }
        /**
         * Handles year/month selection in the multi-year/year views.
         * @param {?} date
         * @param {?} view
         * @return {?}
         */

      }, {
        key: "_goToDateInView",
        value: function _goToDateInView(date, view) {
          this.activeDate = date;
          this.currentView = view;
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
        /**
         * Returns the component instance that corresponds to the current calendar view.
         * @private
         * @return {?}
         */

      }, {
        key: "_getCurrentViewComponent",
        value: function _getCurrentViewComponent() {
          return this.monthView || this.yearView || this.multiYearView;
        }
      }, {
        key: "startAt",
        get: function get() {
          return this._startAt;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The currently selected date.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The minimum selectable date.
         * @return {?}
         */

      }, {
        key: "minDate",
        get: function get() {
          return this._minDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The maximum selectable date.
         * @return {?}
         */

      }, {
        key: "maxDate",
        get: function get() {
          return this._maxDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The current active date. This determines which time period is shown and which date is
         * highlighted when using keyboard navigation.
         * @return {?}
         */

      }, {
        key: "activeDate",
        get: function get() {
          return this._clampedActiveDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
          this.stateChanges.next();

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Whether the calendar is in month view.
         * @return {?}
         */

      }, {
        key: "currentView",
        get: function get() {
          return this._currentView;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._currentView = value;
          this._moveFocusOnNextTick = true;

          this._changeDetectorRef.markForCheck();
        }
      }]);

      return MatCalendar;
    }();

    MatCalendar.ɵfac = function MatCalendar_Factory(t) {
      return new (t || MatCalendar)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
    };

    MatCalendar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatCalendar,
      selectors: [["mat-calendar"]],
      viewQuery: function MatCalendar_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatMonthView, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatYearView, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatMultiYearView, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.monthView = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.yearView = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.multiYearView = _t.first);
        }
      },
      hostAttrs: [1, "mat-calendar"],
      inputs: {
        startView: "startView",
        startAt: "startAt",
        selected: "selected",
        minDate: "minDate",
        maxDate: "maxDate",
        headerComponent: "headerComponent",
        dateFilter: "dateFilter",
        dateClass: "dateClass"
      },
      outputs: {
        selectedChange: "selectedChange",
        yearSelected: "yearSelected",
        monthSelected: "monthSelected",
        _userSelection: "_userSelection"
      },
      exportAs: ["matCalendar"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 5,
      consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content", 3, "ngSwitch"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "selectedChange", "_userSelection", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "monthSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "yearSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "selectedChange", "_userSelection"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "monthSelected", "selectedChange"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "yearSelected", "selectedChange"]],
      template: function MatCalendar_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatCalendar_mat_month_view_2_Template, 1, 6, "mat-month-view", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatCalendar_mat_year_view_3_Template, 1, 5, "mat-year-view", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MatCalendar_mat_multi_year_view_4_Template, 1, 5, "mat-multi-year-view", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkPortalOutlet", ctx._calendarHeaderPortal);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.currentView);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "month");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "year");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "multi-year");
        }
      },
      directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], MatMonthView, MatYearView, MatMultiYearView],
      styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatCalendar.ctorParameters = function () {
      return [{
        type: MatDatepickerIntl
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }];
    };

    MatCalendar.propDecorators = {
      headerComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      startAt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      startView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      yearSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      monthSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _userSelection: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      monthView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatMonthView]
      }],
      yearView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatYearView]
      }],
      multiYearView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatMultiYearView]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatCalendar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-calendar',
          template: "\n<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template>\n\n<div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\">\n  <mat-month-view\n      *ngSwitchCase=\"'month'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      (selectedChange)=\"_dateSelected($event)\"\n      (_userSelection)=\"_userSelected()\">\n  </mat-month-view>\n\n  <mat-year-view\n      *ngSwitchCase=\"'year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      (monthSelected)=\"_monthSelectedInYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'month')\">\n  </mat-year-view>\n\n  <mat-multi-year-view\n      *ngSwitchCase=\"'multi-year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'year')\">\n  </mat-multi-year-view>\n</div>\n",
          host: {
            'class': 'mat-calendar'
          },
          exportAs: 'matCalendar',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}\n"]
        }]
      }], function () {
        return [{
          type: MatDatepickerIntl
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      }, {
        startView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _userSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        startAt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        headerComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        monthView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatMonthView]
        }],
        yearView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatYearView]
        }],
        multiYearView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatMultiYearView]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/datepicker-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the Material datepicker.
     * \@docs-private
     * @type {?}
     */


    var matDatepickerAnimations = {
      /**
       * Transforms the height of the datepicker's calendar.
       */
      transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
        opacity: 0,
        transform: 'scale(1, 0.8)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
        opacity: 1,
        transform: 'scale(1, 1)'
      }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
        opacity: 0
      })))]),

      /**
       * Fades in the content of the calendar.
       */
      fadeInCalendar: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["trigger"])('fadeInCalendar', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
        opacity: 1
      })), // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
      // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/datepicker.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate a unique ID for each datepicker instance.
     * @type {?}
     */

    var datepickerUid = 0;
    /**
     * Injection token that determines the scroll handling while the calendar is open.
     * @type {?}
     */

    var MAT_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('mat-datepicker-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_DATEPICKER_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]],
      useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
    }; // Boilerplate for applying mixins to MatDatepickerContent.

    /**
     * \@docs-private
     */

    var MatDatepickerContentBase =
    /**
     * @param {?} _elementRef
     */
    function MatDatepickerContentBase(_elementRef) {
      _classCallCheck(this, MatDatepickerContentBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatDatepickerContentMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinColor"])(MatDatepickerContentBase);
    /**
     * Component used as the content for the datepicker dialog and popup. We use this instead of using
     * MatCalendar directly as the content so we can control the initial focus. This also gives us a
     * place to put additional features of the popup that are not part of the calendar itself in the
     * future. (e.g. confirmation buttons).
     * \@docs-private
     * @template D
     */


    var MatDatepickerContent =
    /*#__PURE__*/
    function (_MatDatepickerContent) {
      _inherits(MatDatepickerContent, _MatDatepickerContent);

      /**
       * @param {?} elementRef
       * @param {?=} _changeDetectorRef
       */
      function MatDatepickerContent(elementRef, _changeDetectorRef) {
        var _this8;

        _classCallCheck(this, MatDatepickerContent);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(MatDatepickerContent).call(this, elementRef));
        _this8._changeDetectorRef = _changeDetectorRef;
        /**
         * Current state of the animation.
         */

        _this8._animationState = 'enter';
        /**
         * Emits when an animation has finished.
         */

        _this8._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        return _this8;
      }
      /**
       * @return {?}
       */


      _createClass(MatDatepickerContent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._calendar.focusActiveCell();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._animationDone.complete();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_startExitAnimation",
        value: function _startExitAnimation() {
          this._animationState = 'void'; // @breaking-change 11.0.0 Remove null check for `_changeDetectorRef`.

          if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
          }
        }
      }]);

      return MatDatepickerContent;
    }(_MatDatepickerContentMixinBase);

    MatDatepickerContent.ɵfac = function MatDatepickerContent_Factory(t) {
      return new (t || MatDatepickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
    };

    MatDatepickerContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatDatepickerContent,
      selectors: [["mat-datepicker-content"]],
      viewQuery: function MatDatepickerContent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendar, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._calendar = _t.first);
        }
      },
      hostAttrs: [1, "mat-datepicker-content"],
      hostVars: 3,
      hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcomponentHostSyntheticListener"]("@transformPanel.done", function MatDatepickerContent_animation_transformPanel_done_HostBindingHandler() {
            return ctx._animationDone.next();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵupdateSyntheticHostBinding"]("@transformPanel", ctx._animationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-datepicker-content-touch", ctx.datepicker.touchUi);
        }
      },
      inputs: {
        color: "color"
      },
      exportAs: ["matDatepickerContent"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 11,
      consts: [["cdkTrapFocus", "", 3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "selectedChange", "yearSelected", "monthSelected", "_userSelection"]],
      template: function MatDatepickerContent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-calendar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedChange", function MatDatepickerContent_Template_mat_calendar_selectedChange_0_listener($event) {
            return ctx.datepicker.select($event);
          })("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_0_listener($event) {
            return ctx.datepicker._selectYear($event);
          })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_0_listener($event) {
            return ctx.datepicker._selectMonth($event);
          })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_0_listener() {
            return ctx.datepicker.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._minDate)("maxDate", ctx.datepicker._maxDate)("dateFilter", ctx.datepicker._dateFilter)("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx.datepicker._selected)("dateClass", ctx.datepicker.dateClass)("@fadeInCalendar", "enter");
        }
      },
      directives: [MatCalendar, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkTrapFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}\n"],
      encapsulation: 2,
      data: {
        animation: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    MatDatepickerContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }];
    };

    MatDatepickerContent.propDecorators = {
      _calendar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatCalendar]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-datepicker-content',
          template: "<mat-calendar cdkTrapFocus\n    [id]=\"datepicker.id\"\n    [ngClass]=\"datepicker.panelClass\"\n    [startAt]=\"datepicker.startAt\"\n    [startView]=\"datepicker.startView\"\n    [minDate]=\"datepicker._minDate\"\n    [maxDate]=\"datepicker._maxDate\"\n    [dateFilter]=\"datepicker._dateFilter\"\n    [headerComponent]=\"datepicker.calendarHeaderComponent\"\n    [selected]=\"datepicker._selected\"\n    [dateClass]=\"datepicker.dateClass\"\n    [@fadeInCalendar]=\"'enter'\"\n    (selectedChange)=\"datepicker.select($event)\"\n    (yearSelected)=\"datepicker._selectYear($event)\"\n    (monthSelected)=\"datepicker._selectMonth($event)\"\n    (_userSelection)=\"datepicker.close()\">\n</mat-calendar>\n",
          host: {
            'class': 'mat-datepicker-content',
            '[@transformPanel]': '_animationState',
            '(@transformPanel.done)': '_animationDone.next()',
            '[class.mat-datepicker-content-touch]': 'datepicker.touchUi'
          },
          animations: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar],
          exportAs: 'matDatepickerContent',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
          inputs: ['color'],
          styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      }, {
        _calendar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendar]
        }]
      });
    })();

    if (false) {} // TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
    // template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
    // if angular adds support for `exportAs: '$implicit'` on directives.

    /**
     * Component responsible for managing the datepicker popup/dialog.
     * @template D
     */


    var MatDatepicker =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _dialog
       * @param {?} _overlay
       * @param {?} _ngZone
       * @param {?} _viewContainerRef
       * @param {?} scrollStrategy
       * @param {?} _dateAdapter
       * @param {?} _dir
       * @param {?} _document
       */
      function MatDatepicker(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _document) {
        _classCallCheck(this, MatDatepicker);

        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._document = _document;
        /**
         * The view that the calendar should start in.
         */

        this.startView = 'month';
        this._touchUi = false;
        /**
         * Emits selected year in multiyear view.
         * This doesn't imply a change on the selected date.
         */

        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits selected month in year view.
         * This doesn't imply a change on the selected date.
         */

        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the datepicker has been opened.
         */

        this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the datepicker has been closed.
         */

        this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this._opened = false;
        /**
         * The id for the datepicker calendar.
         */

        this.id = "mat-datepicker-".concat(datepickerUid++);
        this._validSelected = null;
        /**
         * The element that was focused before the datepicker was opened.
         */

        this._focusedElementBeforeOpen = null;
        /**
         * Subscription to value changes in the associated input element.
         */

        this._inputSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        /**
         * Emits when the datepicker is disabled.
         */

        this._disabledChange = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        /**
         * Emits new selected date when selected date changes.
         */

        this._selectedChanged = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();

        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }

        this._scrollStrategy = scrollStrategy;
      }
      /**
       * The date to open the calendar to initially.
       * @return {?}
       */


      _createClass(MatDatepicker, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._destroyPopup();

          this.close();

          this._inputSubscription.unsubscribe();

          this._disabledChange.complete();
        }
        /**
         * Selects the given date
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(date) {
          /** @type {?} */
          var oldValue = this._selected;
          this._selected = date;

          if (!this._dateAdapter.sameDate(oldValue, this._selected)) {
            this._selectedChanged.next(date);
          }
        }
        /**
         * Emits the selected year in multiyear view
         * @param {?} normalizedYear
         * @return {?}
         */

      }, {
        key: "_selectYear",
        value: function _selectYear(normalizedYear) {
          this.yearSelected.emit(normalizedYear);
        }
        /**
         * Emits selected month in year view
         * @param {?} normalizedMonth
         * @return {?}
         */

      }, {
        key: "_selectMonth",
        value: function _selectMonth(normalizedMonth) {
          this.monthSelected.emit(normalizedMonth);
        }
        /**
         * Register an input with this datepicker.
         * @param {?} input The datepicker input to register with this datepicker.
         * @return {?}
         */

      }, {
        key: "_registerInput",
        value: function _registerInput(input) {
          var _this9 = this;

          if (this._datepickerInput) {
            throw Error('A MatDatepicker can only be associated with a single input.');
          }

          this._datepickerInput = input;
          this._inputSubscription = this._datepickerInput._valueChange.subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this9._selected = value;
          });
        }
        /**
         * Open the calendar.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          if (this._opened || this.disabled) {
            return;
          }

          if (!this._datepickerInput) {
            throw Error('Attempted to open an MatDatepicker with no associated input.');
          }

          if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
          }

          this.touchUi ? this._openAsDialog() : this._openAsPopup();
          this._opened = true;
          this.openedStream.emit();
        }
        /**
         * Close the calendar.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          var _this10 = this;

          if (!this._opened) {
            return;
          }

          if (this._popupComponentRef && this._popupRef) {
            /** @type {?} */
            var instance = this._popupComponentRef.instance;

            instance._startExitAnimation();

            instance._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this10._destroyPopup();
            });
          }

          if (this._dialogRef) {
            this._dialogRef.close();

            this._dialogRef = null;
          }
          /** @type {?} */


          var completeClose =
          /**
          * @return {?}
          */
          function completeClose() {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (_this10._opened) {
              _this10._opened = false;

              _this10.closedStream.emit();

              _this10._focusedElementBeforeOpen = null;
            }
          };

          if (this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();

            setTimeout(completeClose);
          } else {
            completeClose();
          }
        }
        /**
         * Open the calendar as a dialog.
         * @private
         * @return {?}
         */

      }, {
        key: "_openAsDialog",
        value: function _openAsDialog() {
          var _this11 = this;

          // Usually this would be handled by `open` which ensures that we can only have one overlay
          // open at a time, however since we reset the variables in async handlers some overlays
          // may slip through if the user opens and closes multiple times in quick succession (e.g.
          // by holding down the enter key).
          if (this._dialogRef) {
            this._dialogRef.close();
          }

          this._dialogRef = this._dialog.open(MatDatepickerContent, {
            direction: this._dir ? this._dir.value : 'ltr',
            viewContainerRef: this._viewContainerRef,
            panelClass: 'mat-datepicker-dialog',
            // These values are all the same as the defaults, but we set them explicitly so that the
            // datepicker dialog behaves consistently even if the user changed the defaults.
            hasBackdrop: true,
            disableClose: false,
            width: '',
            height: '',
            minWidth: '',
            minHeight: '',
            maxWidth: '80vw',
            maxHeight: '',
            position: {},
            autoFocus: true,
            restoreFocus: true
          });

          this._dialogRef.afterClosed().subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this11.close();
          });

          this._dialogRef.componentInstance.datepicker = this;
          this._dialogRef.componentInstance.color = this.color;
        }
        /**
         * Open the calendar as a popup.
         * @private
         * @return {?}
         */

      }, {
        key: "_openAsPopup",
        value: function _openAsPopup() {
          var _this12 = this;

          /** @type {?} */
          var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](MatDatepickerContent, this._viewContainerRef);

          this._destroyPopup();

          this._createPopup();
          /** @type {?} */


          var ref = this._popupComponentRef =
          /** @type {?} */
          this._popupRef.attach(portal);

          ref.instance.datepicker = this;
          ref.instance.color = this.color; // Update the position once the calendar has rendered.

          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            _this12._popupRef.updatePosition();
          });
        }
        /**
         * Create the popup.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPopup",
        value: function _createPopup() {
          var _this13 = this;

          /** @type {?} */
          var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mat-datepicker-popup'
          });
          this._popupRef = this._overlay.create(overlayConfig);

          this._popupRef.overlayElement.setAttribute('role', 'dialog');

          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            // Closing on alt + up is only valid when there's an input associated with the datepicker.
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] || _this13._datepickerInput && event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"];
          }))).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (event) {
              event.preventDefault();
            }

            _this13.close();
          });
        }
        /**
         * Destroys the current popup overlay.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPopup",
        value: function _destroyPopup() {
          if (this._popupRef) {
            this._popupRef.dispose();

            this._popupRef = this._popupComponentRef = null;
          }
        }
        /**
         * Create the popup PositionStrategy.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPopupPositionStrategy",
        value: function _createPopupPositionStrategy() {
          return this._overlay.position().flexibleConnectedTo(this._datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn('.mat-datepicker-content').withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition().withPositions([{
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          }, {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom'
          }, {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top'
          }, {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom'
          }]);
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
      }, {
        key: "startAt",
        get: function get() {
          // If an explicit startAt is set we start there, otherwise we start at whatever the currently
          // selected value is.
          return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * Color palette to use on the datepicker's calendar.
         * @return {?}
         */

      }, {
        key: "color",
        get: function get() {
          return this._color || (this._datepickerInput ? this._datepickerInput._getThemePalette() : undefined);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._color = value;
        }
        /**
         * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
         * than a popup and elements have more padding to allow for bigger touch targets.
         * @return {?}
         */

      }, {
        key: "touchUi",
        get: function get() {
          return this._touchUi;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._touchUi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the datepicker pop-up should be disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled === undefined && this._datepickerInput ? this._datepickerInput.disabled : !!this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);

          if (newValue !== this._disabled) {
            this._disabled = newValue;

            this._disabledChange.next(newValue);
          }
        }
        /**
         * Whether the calendar is open.
         * @return {?}
         */

      }, {
        key: "opened",
        get: function get() {
          return this._opened;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          value ? this.open() : this.close();
        }
        /**
         * The currently selected date.
         * @return {?}
         */

      }, {
        key: "_selected",
        get: function get() {
          return this._validSelected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._validSelected = value;
        }
        /**
         * The minimum selectable date.
         * @return {?}
         */

      }, {
        key: "_minDate",
        get: function get() {
          return this._datepickerInput && this._datepickerInput.min;
        }
        /**
         * The maximum selectable date.
         * @return {?}
         */

      }, {
        key: "_maxDate",
        get: function get() {
          return this._datepickerInput && this._datepickerInput.max;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_dateFilter",
        get: function get() {
          return this._datepickerInput && this._datepickerInput._dateFilter;
        }
      }]);

      return MatDatepicker;
    }();

    MatDatepicker.ɵfac = function MatDatepicker_Factory(t) {
      return new (t || MatDatepicker)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATEPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8));
    };

    MatDatepicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatDatepicker,
      selectors: [["mat-datepicker"]],
      inputs: {
        startView: "startView",
        startAt: "startAt",
        color: "color",
        touchUi: "touchUi",
        disabled: "disabled",
        opened: "opened",
        calendarHeaderComponent: "calendarHeaderComponent",
        panelClass: "panelClass",
        dateClass: "dateClass"
      },
      outputs: {
        yearSelected: "yearSelected",
        monthSelected: "monthSelected",
        openedStream: "opened",
        closedStream: "closed"
      },
      exportAs: ["matDatepicker"],
      decls: 0,
      vars: 0,
      template: function MatDatepicker_Template(rf, ctx) {},
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatDatepicker.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [MAT_DATEPICKER_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    MatDatepicker.propDecorators = {
      calendarHeaderComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      startAt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      startView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      touchUi: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      yearSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      monthSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      openedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['opened']
      }],
      closedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['closed']
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepicker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-datepicker',
          template: '',
          exportAs: 'matDatepicker',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATEPICKER_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      }, {
        startView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        openedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['opened']
        }],
        closedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['closed']
        }],
        startAt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        touchUi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        calendarHeaderComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/datepicker-input.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_DATEPICKER_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatDatepickerInput;
      }),
      multi: true
    };
    /**
     * \@docs-private
     * @type {?}
     */

    var MAT_DATEPICKER_VALIDATORS = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatDatepickerInput;
      }),
      multi: true
    };
    /**
     * An event used for datepicker input and change events. We don't always have access to a native
     * input or change event because the event may have been triggered by the user clicking on the
     * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
     * @template D
     */

    var MatDatepickerInputEvent =
    /**
     * @param {?} target
     * @param {?} targetElement
     */
    function MatDatepickerInputEvent(target, targetElement) {
      _classCallCheck(this, MatDatepickerInputEvent);

      this.target = target;
      this.targetElement = targetElement;
      this.value = this.target.value;
    };

    if (false) {}
    /**
     * Directive used to connect an input to a MatDatepicker.
     * @template D
     */


    var MatDatepickerInput =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _dateAdapter
       * @param {?} _dateFormats
       * @param {?} _formField
       */
      function MatDatepickerInput(_elementRef, _dateAdapter, _dateFormats, _formField) {
        var _this14 = this;

        _classCallCheck(this, MatDatepickerInput);

        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._formField = _formField;
        /**
         * Emits when a `change` event is fired on this `<input>`.
         */

        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when an `input` event is fired on this `<input>`.
         */

        this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the value changes (either due to user input or programmatic change).
         */

        this._valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the disabled state has changed
         */

        this._disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

        this._onTouched =
        /**
        * @return {?}
        */
        function () {};

        this._cvaOnChange =
        /**
        * @return {?}
        */
        function () {};

        this._validatorOnChange =
        /**
        * @return {?}
        */
        function () {};

        this._datepickerSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        /**
         * The form control validator for whether the input parses.
         */

        this._parseValidator =
        /**
        * @return {?}
        */
        function () {
          return _this14._lastValueValid ? null : {
            'matDatepickerParse': {
              'text': _this14._elementRef.nativeElement.value
            }
          };
        };
        /**
         * The form control validator for the min date.
         */


        this._minValidator =
        /**
        * @param {?} control
        * @return {?}
        */
        function (control) {
          /** @type {?} */
          var controlValue = _this14._getValidDateOrNull(_this14._dateAdapter.deserialize(control.value));

          return !_this14.min || !controlValue || _this14._dateAdapter.compareDate(_this14.min, controlValue) <= 0 ? null : {
            'matDatepickerMin': {
              'min': _this14.min,
              'actual': controlValue
            }
          };
        };
        /**
         * The form control validator for the max date.
         */


        this._maxValidator =
        /**
        * @param {?} control
        * @return {?}
        */
        function (control) {
          /** @type {?} */
          var controlValue = _this14._getValidDateOrNull(_this14._dateAdapter.deserialize(control.value));

          return !_this14.max || !controlValue || _this14._dateAdapter.compareDate(_this14.max, controlValue) >= 0 ? null : {
            'matDatepickerMax': {
              'max': _this14.max,
              'actual': controlValue
            }
          };
        };
        /**
         * The form control validator for the date filter.
         */


        this._filterValidator =
        /**
        * @param {?} control
        * @return {?}
        */
        function (control) {
          /** @type {?} */
          var controlValue = _this14._getValidDateOrNull(_this14._dateAdapter.deserialize(control.value));

          return !_this14._dateFilter || !controlValue || _this14._dateFilter(controlValue) ? null : {
            'matDatepickerFilter': true
          };
        };
        /**
         * The combined form control validator for this input.
         */


        this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
        /**
         * Whether the last value set on the input was valid.
         */

        this._lastValueValid = false;

        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }

        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        } // Update the displayed date when the locale changes.


        this._localeSubscription = _dateAdapter.localeChanges.subscribe(
        /**
        * @return {?}
        */
        function () {
          _this14.value = _this14.value;
        });
      }
      /**
       * The datepicker that this input is associated with.
       * @param {?} value
       * @return {?}
       */


      _createClass(MatDatepickerInput, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._datepickerSubscription.unsubscribe();

          this._localeSubscription.unsubscribe();

          this._valueChange.complete();

          this._disabledChange.complete();
        }
        /**
         * \@docs-private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._validatorOnChange = fn;
        }
        /**
         * \@docs-private
         * @param {?} c
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(c) {
          return this._validator ? this._validator(c) : null;
        }
        /**
         * @deprecated
         * \@breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
         * @return {?}
         */

      }, {
        key: "getPopupConnectionElementRef",
        value: function getPopupConnectionElementRef() {
          return this.getConnectedOverlayOrigin();
        }
        /**
         * Gets the element that the datepicker popup should be connected to.
         * @return {?} The element to connect the popup to.
         */

      }, {
        key: "getConnectedOverlayOrigin",
        value: function getConnectedOverlayOrigin() {
          return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._cvaOnChange = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onKeydown",
        value: function _onKeydown(event) {
          /** @type {?} */
          var isAltDownArrow = event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["DOWN_ARROW"];

          if (this._datepicker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
            this._datepicker.open();

            event.preventDefault();
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_onInput",
        value: function _onInput(value) {
          /** @type {?} */
          var lastValueWasValid = this._lastValueValid;
          /** @type {?} */

          var date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);

          this._lastValueValid = !date || this._dateAdapter.isValid(date);
          date = this._getValidDateOrNull(date);

          if (!this._dateAdapter.sameDate(date, this._value)) {
            this._value = date;

            this._cvaOnChange(date);

            this._valueChange.emit(date);

            this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
          } else if (lastValueWasValid !== this._lastValueValid) {
            this._validatorOnChange();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onChange",
        value: function _onChange() {
          this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
        }
        /**
         * Returns the palette used by the input's form field, if any.
         * @return {?}
         */

      }, {
        key: "_getThemePalette",
        value: function _getThemePalette() {
          return this._formField ? this._formField.color : undefined;
        }
        /**
         * Handles blur events on the input.
         * @return {?}
         */

      }, {
        key: "_onBlur",
        value: function _onBlur() {
          // Reformat the input only if we have a valid value.
          if (this.value) {
            this._formatValue(this.value);
          }

          this._onTouched();
        }
        /**
         * Formats a value and sets it on the input element.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_formatValue",
        value: function _formatValue(value) {
          this._elementRef.nativeElement.value = value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
      }, {
        key: "matDatepicker",
        set: function set(value) {
          var _this15 = this;

          if (!value) {
            return;
          }

          this._datepicker = value;

          this._datepicker._registerInput(this);

          this._datepickerSubscription.unsubscribe();

          this._datepickerSubscription = this._datepicker._selectedChanged.subscribe(
          /**
          * @param {?} selected
          * @return {?}
          */
          function (selected) {
            _this15.value = selected;

            _this15._cvaOnChange(selected);

            _this15._onTouched();

            _this15.dateInput.emit(new MatDatepickerInputEvent(_this15, _this15._elementRef.nativeElement));

            _this15.dateChange.emit(new MatDatepickerInputEvent(_this15, _this15._elementRef.nativeElement));
          });
        }
        /**
         * Function that can be used to filter out dates within the datepicker.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "matDatepickerFilter",
        set: function set(value) {
          this._dateFilter = value;

          this._validatorOnChange();
        }
        /**
         * The value of the input.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          value = this._dateAdapter.deserialize(value);
          this._lastValueValid = !value || this._dateAdapter.isValid(value);
          value = this._getValidDateOrNull(value);
          /** @type {?} */

          var oldDate = this.value;
          this._value = value;

          this._formatValue(value);

          if (!this._dateAdapter.sameDate(oldDate, value)) {
            this._valueChange.emit(value);
          }
        }
        /**
         * The minimum valid date.
         * @return {?}
         */

      }, {
        key: "min",
        get: function get() {
          return this._min;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._min = this._getValidDateOrNull(this._dateAdapter.deserialize(value));

          this._validatorOnChange();
        }
        /**
         * The maximum valid date.
         * @return {?}
         */

      }, {
        key: "max",
        get: function get() {
          return this._max;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._max = this._getValidDateOrNull(this._dateAdapter.deserialize(value));

          this._validatorOnChange();
        }
        /**
         * Whether the datepicker-input is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return !!this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
          /** @type {?} */

          var element = this._elementRef.nativeElement;

          if (this._disabled !== newValue) {
            this._disabled = newValue;

            this._disabledChange.emit(newValue);
          } // We need to null check the `blur` method, because it's undefined during SSR.


          if (newValue && element.blur) {
            // Normally, native input elements automatically blur if they turn disabled. This behavior
            // is problematic, because it would mean that it triggers another change detection cycle,
            // which then causes a changed after checked error if the input element was focused before.
            element.blur();
          }
        }
      }]);

      return MatDatepickerInput;
    }();

    MatDatepickerInput.ɵfac = function MatDatepickerInput_Factory(t) {
      return new (t || MatDatepickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], 8));
    };

    MatDatepickerInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatDatepickerInput,
      selectors: [["input", "matDatepicker", ""]],
      hostVars: 5,
      hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MatDatepickerInput_input_HostBindingHandler($event) {
            return ctx._onInput($event.target.value);
          })("change", function MatDatepickerInput_change_HostBindingHandler() {
            return ctx._onChange();
          })("blur", function MatDatepickerInput_blur_HostBindingHandler() {
            return ctx._onBlur();
          })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) {
            return ctx._onKeydown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("disabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", (ctx._datepicker == null ? null : ctx._datepicker.opened) && ctx._datepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null);
        }
      },
      inputs: {
        value: "value",
        matDatepicker: "matDatepicker",
        matDatepickerFilter: "matDatepickerFilter",
        min: "min",
        max: "max",
        disabled: "disabled"
      },
      outputs: {
        dateChange: "dateChange",
        dateInput: "dateInput"
      },
      exportAs: ["matDatepickerInput"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
        provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MAT_INPUT_VALUE_ACCESSOR"],
        useExisting: MatDatepickerInput
      }])]
    });
    /** @nocollapse */

    MatDatepickerInput.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"]]
        }]
      }, {
        type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }];
    };

    MatDatepickerInput.propDecorators = {
      matDatepicker: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      matDatepickerFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      min: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      max: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      dateInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: 'input[matDatepicker]',
          providers: [MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
            provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MAT_INPUT_VALUE_ACCESSOR"],
            useExisting: MatDatepickerInput
          }],
          host: {
            '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
            '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
            '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
            '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
            '[disabled]': 'disabled',
            '(input)': '_onInput($event.target.value)',
            '(change)': '_onChange()',
            '(blur)': '_onBlur()',
            '(keydown)': '_onKeydown($event)'
          },
          exportAs: 'matDatepickerInput'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      }, {
        dateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        dateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        matDatepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        matDatepickerFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/datepicker-toggle.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Can be used to override the icon of a `matDatepickerToggle`.
     */


    var MatDatepickerToggleIcon = function MatDatepickerToggleIcon() {
      _classCallCheck(this, MatDatepickerToggleIcon);
    };

    MatDatepickerToggleIcon.ɵfac = function MatDatepickerToggleIcon_Factory(t) {
      return new (t || MatDatepickerToggleIcon)();
    };

    MatDatepickerToggleIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatDatepickerToggleIcon,
      selectors: [["", "matDatepickerToggleIcon", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerToggleIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[matDatepickerToggleIcon]'
        }]
      }], null, null);
    })();
    /**
     * @template D
     */


    var MatDatepickerToggle =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _intl
       * @param {?} _changeDetectorRef
       * @param {?} defaultTabIndex
       */
      function MatDatepickerToggle(_intl, _changeDetectorRef, defaultTabIndex) {
        _classCallCheck(this, MatDatepickerToggle);

        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        /** @type {?} */

        var parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
      }
      /**
       * Whether the toggle button is disabled.
       * @return {?}
       */


      _createClass(MatDatepickerToggle, [{
        key: "ngOnChanges",

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (changes['datepicker']) {
            this._watchStateChanges();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.unsubscribe();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this._watchStateChanges();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_open",
        value: function _open(event) {
          if (this.datepicker && !this.disabled) {
            this.datepicker.open();
            event.stopPropagation();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_watchStateChanges",
        value: function _watchStateChanges() {
          var _this16 = this;

          /** @type {?} */
          var datepickerDisabled = this.datepicker ? this.datepicker._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])();
          /** @type {?} */

          var inputDisabled = this.datepicker && this.datepicker._datepickerInput ? this.datepicker._datepickerInput._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])();
          /** @type {?} */

          var datepickerToggled = this.datepicker ? Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this.datepicker.openedStream, this.datepicker.closedStream) : Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])();

          this._stateChanges.unsubscribe();

          this._stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this._intl.changes, datepickerDisabled, inputDisabled, datepickerToggled).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this16._changeDetectorRef.markForCheck();
          });
        }
      }, {
        key: "disabled",
        get: function get() {
          if (this._disabled === undefined && this.datepicker) {
            return this.datepicker.disabled;
          }

          return !!this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
        }
      }]);

      return MatDatepickerToggle;
    }();

    MatDatepickerToggle.ɵfac = function MatDatepickerToggle_Factory(t) {
      return new (t || MatDatepickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'));
    };

    MatDatepickerToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatDatepickerToggle,
      selectors: [["mat-datepicker-toggle"]],
      contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatDatepickerToggleIcon, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
        }
      },
      viewQuery: function MatDatepickerToggle_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._button = _t.first);
        }
      },
      hostAttrs: [1, "mat-datepicker-toggle"],
      hostVars: 7,
      hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focus", function MatDatepickerToggle_focus_HostBindingHandler() {
            return ctx._button.focus();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabindex", ctx.disabled ? null : 0 - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
        }
      },
      inputs: {
        tabIndex: "tabIndex",
        disabled: "disabled",
        datepicker: ["for", "datepicker"],
        disableRipple: "disableRipple"
      },
      exportAs: ["matDatepickerToggle"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c4,
      decls: 4,
      vars: 6,
      consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple", "click"], ["button", ""], ["class", "mat-datepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
      template: function MatDatepickerToggle_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatDatepickerToggle_Template_button_click_0_listener($event) {
            return ctx._open($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatDatepickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx._customIcon);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatDatepickerToggle.ctorParameters = function () {
      return [{
        type: MatDatepickerIntl
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
          args: ['tabindex']
        }]
      }];
    };

    MatDatepickerToggle.propDecorators = {
      datepicker: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['for']
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      _customIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
        args: [MatDatepickerToggleIcon]
      }],
      _button: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['button']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-datepicker-toggle',
          template: "<button\n  #button\n  mat-icon-button\n  type=\"button\"\n  [attr.aria-haspopup]=\"datepicker ? 'dialog' : null\"\n  [attr.aria-label]=\"_intl.openCalendarLabel\"\n  [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n  [disabled]=\"disabled\"\n  [disableRipple]=\"disableRipple\"\n  (click)=\"_open($event)\">\n\n  <svg\n    *ngIf=\"!_customIcon\"\n    class=\"mat-datepicker-toggle-default-icon\"\n    viewBox=\"0 0 24 24\"\n    width=\"24px\"\n    height=\"24px\"\n    fill=\"currentColor\"\n    focusable=\"false\">\n    <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\n  </svg>\n\n  <ng-content select=\"[matDatepickerToggleIcon]\"></ng-content>\n</button>\n",
          host: {
            'class': 'mat-datepicker-toggle',
            // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
            // consumer may have provided, while still being able to receive focus.
            '[attr.tabindex]': 'disabled ? null : -1',
            '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
            '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
            '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
            '(focus)': '_button.focus()'
          },
          exportAs: 'matDatepickerToggle',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}\n"]
        }]
      }], function () {
        return [{
          type: MatDatepickerIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
            args: ['tabindex']
          }]
        }];
      }, {
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        datepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['for']
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        _customIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatDatepickerToggleIcon]
        }],
        _button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['button']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/datepicker-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatDatepickerModule = function MatDatepickerModule() {
      _classCallCheck(this, MatDatepickerModule);
    };

    MatDatepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: MatDatepickerModule
    });
    MatDatepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function MatDatepickerModule_Factory(t) {
        return new (t || MatDatepickerModule)();
      },
      providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatDatepickerModule, {
        declarations: function declarations() {
          return [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]];
        },
        exports: function exports() {
          return [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]],
          exports: [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader],
          declarations: [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader],
          providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
          entryComponents: [MatDatepickerContent, MatCalendarHeader]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=datepicker.js.map

    /***/

  },

  /***/
  "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js":
  /*!************************************************************************************************!*\
    !*** ./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js ***!
    \************************************************************************************************/

  /*! exports provided: EditorComponent, EditorModule, TINYMCE_SCRIPT_SRC, ɵa */

  /***/
  function node_modulesTinymceTinymceAngular__ivy_ngcc__Fesm2015TinymceTinymceAngularJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
      return EditorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorModule", function () {
      return EditorModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TINYMCE_SCRIPT_SRC", function () {
      return TINYMCE_SCRIPT_SRC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return Events;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /**
     * Copyright (c) 2017-present, Ephox, Inc.
     *
     * This source code is licensed under the Apache 2 license found in the
     * LICENSE file in the root directory of this source tree.
     *
     */


    function EditorComponent_ng_template_0_Template(rf, ctx) {}

    var getTinymce = function getTinymce() {
      var w = typeof window !== 'undefined' ? window : undefined;
      return w && w.tinymce ? w.tinymce : null;
    };

    var Events = function Events() {
      _classCallCheck(this, Events);

      this.onBeforePaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onCut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDblclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDragDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDragGesture = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onFocusIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onFocusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onKeyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBeforeAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBeforeExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBeforeGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBeforeRenderUI = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBeforeSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onClearUndos = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDeactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDirty = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onLoadContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onNodeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onPostProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onPostRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onPreInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onPreProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onProgressState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onRedo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onSaveContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onSetAttrib = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onObjectResizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onObjectResized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onObjectSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onVisualAid = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    Events.ɵfac = function Events_Factory(t) {
      return new (t || Events)();
    };

    Events.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: Events,
      outputs: {
        onBeforePaste: "onBeforePaste",
        onBlur: "onBlur",
        onClick: "onClick",
        onContextMenu: "onContextMenu",
        onCopy: "onCopy",
        onCut: "onCut",
        onDblclick: "onDblclick",
        onDrag: "onDrag",
        onDragDrop: "onDragDrop",
        onDragEnd: "onDragEnd",
        onDragGesture: "onDragGesture",
        onDragOver: "onDragOver",
        onDrop: "onDrop",
        onFocus: "onFocus",
        onFocusIn: "onFocusIn",
        onFocusOut: "onFocusOut",
        onKeyDown: "onKeyDown",
        onKeyPress: "onKeyPress",
        onKeyUp: "onKeyUp",
        onMouseDown: "onMouseDown",
        onMouseEnter: "onMouseEnter",
        onMouseLeave: "onMouseLeave",
        onMouseMove: "onMouseMove",
        onMouseOut: "onMouseOut",
        onMouseOver: "onMouseOver",
        onMouseUp: "onMouseUp",
        onPaste: "onPaste",
        onSelectionChange: "onSelectionChange",
        onActivate: "onActivate",
        onAddUndo: "onAddUndo",
        onBeforeAddUndo: "onBeforeAddUndo",
        onBeforeExecCommand: "onBeforeExecCommand",
        onBeforeGetContent: "onBeforeGetContent",
        onBeforeRenderUI: "onBeforeRenderUI",
        onBeforeSetContent: "onBeforeSetContent",
        onChange: "onChange",
        onClearUndos: "onClearUndos",
        onDeactivate: "onDeactivate",
        onDirty: "onDirty",
        onExecCommand: "onExecCommand",
        onGetContent: "onGetContent",
        onHide: "onHide",
        onInit: "onInit",
        onLoadContent: "onLoadContent",
        onNodeChange: "onNodeChange",
        onPostProcess: "onPostProcess",
        onPostRender: "onPostRender",
        onPreInit: "onPreInit",
        onPreProcess: "onPreProcess",
        onProgressState: "onProgressState",
        onRedo: "onRedo",
        onRemove: "onRemove",
        onReset: "onReset",
        onSaveContent: "onSaveContent",
        onSetAttrib: "onSetAttrib",
        onObjectResizeStart: "onObjectResizeStart",
        onObjectResized: "onObjectResized",
        onObjectSelected: "onObjectSelected",
        onSetContent: "onSetContent",
        onShow: "onShow",
        onSubmit: "onSubmit",
        onUndo: "onUndo",
        onVisualAid: "onVisualAid"
      }
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onBeforePaste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onContextMenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onCopy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onCut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDblclick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDrag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDragDrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDragGesture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDragOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onFocusIn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onFocusOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onKeyDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onKeyPress", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onKeyUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onMouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onMouseEnter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onMouseLeave", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onMouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onMouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onMouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onMouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onPaste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onSelectionChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onActivate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onAddUndo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onBeforeAddUndo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onBeforeExecCommand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onBeforeGetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onBeforeRenderUI", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onBeforeSetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onClearUndos", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDeactivate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDirty", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onExecCommand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onGetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onLoadContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onNodeChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onPostProcess", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onPostRender", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onPreInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onPreProcess", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onProgressState", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onRedo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onRemove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onReset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onSaveContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onSetAttrib", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onObjectResizeStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onObjectResized", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onObjectSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onSetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onSubmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onUndo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onVisualAid", void 0);
    var validEvents = ['onActivate', 'onAddUndo', 'onBeforeAddUndo', 'onBeforeExecCommand', 'onBeforeGetContent', 'onBeforeRenderUI', 'onBeforeSetContent', 'onBeforePaste', 'onBlur', 'onChange', 'onClearUndos', 'onClick', 'onContextMenu', 'onCopy', 'onCut', 'onDblclick', 'onDeactivate', 'onDirty', 'onDrag', 'onDragDrop', 'onDragEnd', 'onDragGesture', 'onDragOver', 'onDrop', 'onExecCommand', 'onFocus', 'onFocusIn', 'onFocusOut', 'onGetContent', 'onHide', 'onInit', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onLoadContent', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onNodeChange', 'onObjectResizeStart', 'onObjectResized', 'onObjectSelected', 'onPaste', 'onPostProcess', 'onPostRender', 'onPreProcess', 'onProgressState', 'onRedo', 'onRemove', 'onReset', 'onSaveContent', 'onSelectionChange', 'onSetAttrib', 'onSetContent', 'onShow', 'onSubmit', 'onUndo', 'onVisualAid'];
    /**
     * Copyright (c) 2017-present, Ephox, Inc.
     *
     * This source code is licensed under the Apache 2 license found in the
     * LICENSE file in the root directory of this source tree.
     *
     */

    var bindHandlers = function bindHandlers(ctx, editor, initEvent) {
      validEvents.forEach(function (eventName) {
        var eventEmitter = ctx[eventName];

        if (eventName === 'onInit') {
          ctx.ngZone.run(function () {
            return eventEmitter.emit({
              event: initEvent,
              editor: editor
            });
          });
        } else {
          editor.on(eventName.substring(2), function (event) {
            return ctx.ngZone.run(function () {
              return eventEmitter.emit({
                event: event,
                editor: editor
              });
            });
          });
        }
      });
    };

    var unique = 0;

    var uuid = function uuid(prefix) {
      var date = new Date();
      var time = date.getTime();
      var random = Math.floor(Math.random() * 1000000000);
      unique++;
      return prefix + '_' + random + unique + String(time);
    };

    var isTextarea = function isTextarea(element) {
      return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
    };

    var normalizePluginArray = function normalizePluginArray(plugins) {
      if (typeof plugins === 'undefined' || plugins === '') {
        return [];
      }

      return Array.isArray(plugins) ? plugins : plugins.split(' ');
    };

    var mergePlugins = function mergePlugins(initPlugins, inputPlugins) {
      return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
    }; // tslint:disable-next-line:no-empty


    var noop = function noop() {};

    var isNullOrUndefined = function isNullOrUndefined(value) {
      return value === null || value === undefined;
    };
    /**
     * Copyright (c) 2017-present, Ephox, Inc.
     *
     * This source code is licensed under the Apache 2 license found in the
     * LICENSE file in the root directory of this source tree.
     *
     */


    var createState = function createState() {
      return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
      };
    };

    var CreateScriptLoader = function CreateScriptLoader() {
      var state = createState();

      var injectScriptTag = function injectScriptTag(scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;

        var handler = function handler() {
          scriptTag.removeEventListener('load', handler);
          callback();
        };

        scriptTag.addEventListener('load', handler);

        if (doc.head) {
          doc.head.appendChild(scriptTag);
        }
      };

      var load = function load(doc, url, callback) {
        if (state.scriptLoaded) {
          callback();
        } else {
          state.listeners.push(callback);

          if (!doc.getElementById(state.scriptId)) {
            injectScriptTag(state.scriptId, doc, url, function () {
              state.listeners.forEach(function (fn) {
                return fn();
              });
              state.scriptLoaded = true;
            });
          }
        }
      }; // Only to be used by tests.


      var reinitialize = function reinitialize() {
        state = createState();
      };

      return {
        load: load,
        reinitialize: reinitialize
      };
    };

    var ScriptLoader = CreateScriptLoader();
    var TINYMCE_SCRIPT_SRC = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('TINYMCE_SCRIPT_SRC');
    var EDITOR_COMPONENT_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return EditorComponent;
      }),
      multi: true
    };

    var EditorComponent =
    /*#__PURE__*/
    function (_Events) {
      _inherits(EditorComponent, _Events);

      function EditorComponent(elementRef, ngZone, platformId, tinymceScriptSrc) {
        var _this17;

        _classCallCheck(this, EditorComponent);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(EditorComponent).call(this));
        _this17.platformId = platformId;
        _this17.tinymceScriptSrc = tinymceScriptSrc;
        _this17.cloudChannel = '5';
        _this17.apiKey = 'no-api-key';
        _this17.id = '';
        _this17.onTouchedCallback = noop;
        _this17.onChangeCallback = noop;
        _this17._elementRef = elementRef;
        _this17.ngZone = ngZone;
        _this17.initialise = _this17.initialise.bind(_assertThisInitialized(_this17));
        return _this17;
      }

      _createClass(EditorComponent, [{
        key: "writeValue",
        value: function writeValue(value) {
          if (this._editor && this._editor.initialized) {
            this._editor.setContent(isNullOrUndefined(value) ? '' : value);
          } else {
            this.initialValue = value === null ? undefined : value;
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChangeCallback = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouchedCallback = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          if (this._editor) {
            this._editor.setMode(isDisabled ? 'readonly' : 'design');
          } else if (isDisabled) {
            this.init = Object.assign({}, this.init, {
              readonly: true
            });
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.id = this.id || uuid('tiny-angular');
            this.inline = typeof this.inline !== 'undefined' ? typeof this.inline === 'boolean' ? this.inline : true : this.init && this.init.inline;
            this.createElement();

            if (getTinymce() !== null) {
              this.initialise();
            } else if (this._element && this._element.ownerDocument) {
              ScriptLoader.load(this._element.ownerDocument, this.getScriptSrc(), this.initialise);
            }
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (getTinymce() !== null) {
            getTinymce().remove(this._editor);
          }
        }
      }, {
        key: "createElement",
        value: function createElement() {
          var tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
          this._element = document.createElement(this.inline ? tagName : 'textarea');

          if (this._element) {
            this._element.id = this.id;

            if (isTextarea(this._element)) {
              this._element.style.visibility = 'hidden';
            }

            this._elementRef.nativeElement.appendChild(this._element);
          }
        }
      }, {
        key: "initialise",
        value: function initialise() {
          var _this18 = this;

          var finalInit = Object.assign({}, this.init, {
            target: this._element,
            inline: this.inline,
            readonly: this.disabled,
            plugins: mergePlugins(this.init && this.init.plugins, this.plugins),
            toolbar: this.toolbar || this.init && this.init.toolbar,
            setup: function setup(editor) {
              _this18._editor = editor;
              editor.on('init', function (e) {
                _this18.initEditor(e, editor);
              });

              if (_this18.init && typeof _this18.init.setup === 'function') {
                _this18.init.setup(editor);
              }
            }
          });

          if (isTextarea(this._element)) {
            this._element.style.visibility = '';
          }

          this.ngZone.runOutsideAngular(function () {
            getTinymce().init(finalInit);
          });
        }
      }, {
        key: "getScriptSrc",
        value: function getScriptSrc() {
          return isNullOrUndefined(this.tinymceScriptSrc) ? "https://cdn.tiny.cloud/1/".concat(this.apiKey, "/tinymce/").concat(this.cloudChannel, "/tinymce.min.js") : this.tinymceScriptSrc;
        }
      }, {
        key: "initEditor",
        value: function initEditor(initEvent, editor) {
          var _this19 = this;

          if (typeof this.initialValue === 'string') {
            this.ngZone.run(function () {
              return editor.setContent(_this19.initialValue);
            });
          }

          editor.on('blur', function () {
            return _this19.ngZone.run(function () {
              return _this19.onTouchedCallback();
            });
          });
          editor.on('change keyup undo redo', function () {
            _this19.ngZone.run(function () {
              return _this19.onChangeCallback(editor.getContent({
                format: _this19.outputFormat
              }));
            });
          });
          bindHandlers(this, editor, initEvent);
        }
      }, {
        key: "disabled",
        set: function set(val) {
          this._disabled = val;

          if (this._editor && this._editor.initialized) {
            this._editor.setMode(val ? 'readonly' : 'design');
          }
        },
        get: function get() {
          return this._disabled;
        }
      }, {
        key: "editor",
        get: function get() {
          return this._editor;
        }
      }]);

      return EditorComponent;
    }(Events);

    EditorComponent.ɵfac = function EditorComponent_Factory(t) {
      return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TINYMCE_SCRIPT_SRC, 8));
    };

    EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EditorComponent,
      selectors: [["editor"]],
      inputs: {
        cloudChannel: "cloudChannel",
        apiKey: "apiKey",
        id: "id",
        disabled: "disabled",
        initialValue: "initialValue",
        init: "init",
        inline: "inline",
        outputFormat: "outputFormat",
        tagName: "tagName",
        plugins: "plugins",
        toolbar: "toolbar"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EDITOR_COMPONENT_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      template: function EditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EditorComponent_ng_template_0_Template, 0, 0, "ng-template");
        }
      },
      styles: ["[_nghost-%COMP%] { display: block; }"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], EditorComponent.prototype, "disabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditorComponent.prototype, "cloudChannel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditorComponent.prototype, "apiKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditorComponent.prototype, "init", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditorComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], EditorComponent.prototype, "initialValue", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], EditorComponent.prototype, "outputFormat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], EditorComponent.prototype, "inline", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], EditorComponent.prototype, "tagName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], EditorComponent.prototype, "plugins", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditorComponent.prototype, "toolbar", void 0);
    EditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(TINYMCE_SCRIPT_SRC)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], Object, String])], EditorComponent);

    var EditorModule = function EditorModule() {
      _classCallCheck(this, EditorModule);
    };

    EditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EditorModule
    });
    EditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function EditorModule_Factory(t) {
        return new (t || EditorModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'editor',
          template: '<ng-template></ng-template>',
          providers: [EDITOR_COMPONENT_VALUE_ACCESSOR],
          styles: [':host { display: block; }']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [TINYMCE_SCRIPT_SRC]
          }]
        }];
      }, {
        cloudChannel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        apiKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        initialValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        init: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        outputFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tagName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        plugins: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        toolbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditorModule, {
        declarations: function declarations() {
          return [EditorComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]];
        },
        exports: function exports() {
          return [EditorComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
          declarations: [EditorComponent],
          exports: [EditorComponent]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=tinymce-tinymce-angular.js.map

    /***/

  },

  /***/
  "./src/app/blog/blog-detail/blog-detail.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/blog/blog-detail/blog-detail.component.ts ***!
    \***********************************************************/

  /*! exports provided: BlogDetailComponent */

  /***/
  function srcAppBlogBlogDetailBlogDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogDetailComponent", function () {
      return BlogDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../blog.service */
    "./src/app/blog/blog.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var ng2_adsense__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-adsense */
    "./node_modules/ng2-adsense/__ivy_ngcc__/fesm2015/ng2-adsense.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _shared_comment_comment_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/comment/comment/comment.component */
    "./src/app/shared/comment/comment/comment.component.ts");
    /* harmony import */


    var _pipe_blog_type_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../pipe/blog-type.pipe */
    "./src/app/pipe/blog-type.pipe.ts");
    /* harmony import */


    var _pipe_html_format_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../pipe/html-format.pipe */
    "./src/app/pipe/html-format.pipe.ts");

    var _c0 = function _c0(a1) {
      return ["/blogs", a1, "edit"];
    };

    function BlogDetailComponent_section_3_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u7F16\u8F91");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var blog_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, blog_r24._id));
      }
    }

    function BlogDetailComponent_section_3_span_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogDetailComponent_section_3_span_17_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var blog_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.deleteBlog(blog_r24._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u5220\u9664");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        tags: a0
      };
    };

    var _c2 = function _c2(a1) {
      return ["/blogs", a1];
    };

    function BlogDetailComponent_section_3_ng_container_26_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-badge", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, tag_r32)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r32 || "", " ");
      }
    }

    function BlogDetailComponent_section_3_ng_container_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlogDetailComponent_section_3_ng_container_26_a_1_Template, 3, 6, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var tag_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tag_r32 != "recommand");
      }
    }

    function BlogDetailComponent_section_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "blogType");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BlogDetailComponent_section_3_span_16_Template, 5, 3, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BlogDetailComponent_section_3_span_17_Template, 5, 0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ng-adsense", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "htmlFormat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u6587\u7AE0\u5747\u6765\u81EA\u7F51\u7EDC\u6536\u96C6\uFF0C\u5982\u6709\u4FB5\u6743\u8BF7\u8054\u7CFB\u7F51\u7AD9\u5220\u9664");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BlogDetailComponent_section_3_ng_container_26_Template, 2, 1, "ng-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-comment", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var blog_r24 = ctx.ngIf;

        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r24.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, blog_r24.blogType || ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 11, blog_r24.createdAt, "yyyy-MM-dd"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.user);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.user);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageLevelAds", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 14, blog_r24.content, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", blog_r24.tags);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blog_id", blog_r24._id);
      }
    }

    function BlogDetailComponent_li_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mdb-card-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "htmlFormat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var re_blog_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, re_blog_r35._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](re_blog_r35.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 7, re_blog_r35.content, "nohtml"), 0, 70));
      }
    }

    function BlogDetailComponent_a_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-badge", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, tag_r36.key)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", tag_r36.key, "(", tag_r36.num, ")");
      }
    }

    var BlogDetailComponent =
    /*#__PURE__*/
    function () {
      function BlogDetailComponent(authService, route, router, blogService, titleService, metaService, platformId) {
        _classCallCheck(this, BlogDetailComponent);

        this.authService = authService;
        this.route = route;
        this.router = router;
        this.blogService = blogService;
        this.titleService = titleService;
        this.metaService = metaService;
        this.platformId = platformId;
      }

      _createClass(BlogDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.authService.me().subscribe(function (data) {
            _this20.user = data.user;
          });
          this.getBlogById();
          this.getSiteTags();
        }
      }, {
        key: "getBlogById",
        value: function getBlogById() {
          var _this21 = this;

          this.blog$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            return _this21.blogService.getBlogById(params.get('id'));
          }));
          this.blog$.subscribe(function (blog) {
            _this21.getRelativeBlogs(blog);

            _this21.titleService.setTitle(blog.title);

            _this21.metaService.updateTag({
              name: 'description',
              content: blog.title
            });

            var keyWords = _this21.metaService.getTag('name= "keywords"') && _this21.metaService.getTag('name= "keywords"').content || '创新方法,创新驿站,创新驿路,创新事件,创新,创新的事情,创新方法论,';
            keyWords += blog.tags.join(',');

            _this21.metaService.updateTag({
              name: 'keywords',
              content: keyWords
            });
          });
        }
      }, {
        key: "getRelativeBlogs",
        value: function getRelativeBlogs(blog) {
          this.relatedBlogs$ = this.blogService.getRelativeBlogs(blog._id, blog.tags[0]);
        }
      }, {
        key: "getSiteTags",
        value: function getSiteTags() {
          this.tagCloud$ = this.blogService.tagCloud();
        }
      }, {
        key: "deleteBlog",
        value: function deleteBlog(id) {
          var _this22 = this;

          if (confirm('确认要删除此blog吗？')) {
            this.blogService.deleteBlogById(id).subscribe(function (res) {
              _this22.router.navigate(["/blogs/"]);
            });
          }
        }
      }, {
        key: "scrollTop",
        value: function scrollTop() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            // Client only code.
            window.scrollTo(0, 0);
          }
        }
      }]);

      return BlogDetailComponent;
    }();

    BlogDetailComponent.ɵfac = function BlogDetailComponent_Factory(t) {
      return new (t || BlogDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_5__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
    };

    BlogDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogDetailComponent,
      selectors: [["app-blog-detail"]],
      decls: 25,
      vars: 10,
      consts: [[1, "container", "py-5"], [1, "row"], [1, "col-12", "col-md-8", "px-0"], [4, "ngIf"], [1, "col-0", "col-md-4"], [1, "list-group", "list-group-flush"], ["class", "list-group-item px-0 pb-0", 4, "ngFor", "ngForOf"], [1, "mt-3"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "pageLevelAds"], ["mat-fab", "", "color", "warn", 1, "scrollBtn", 2, "right", "35px", "bottom", "35px", "position", "fixed", "z-index", "9999", 3, "click"], ["fas", "", "icon", "arrow-up"], [1, "px-3", "bg-white"], [1, "py-4"], [1, "small", "mt-3"], [1, "mx-2", "grey-text"], [1, "fas", "fa-tag", "pr-2"], [1, "clearfix", "d-none", "d-md-inline-block"], [1, "far", "fa-clock", "pr-2"], ["class", "mx-2", 4, "ngIf"], [1, "mt-2", 3, "innerHTML"], [1, "py-2"], [1, "pb-3"], [1, "fas", "fa-tags", "grey-text"], [4, "ngFor", "ngForOf"], [1, "my-5", "px-0"], ["blog_type", "Blog", 3, "blog_id"], [1, "mx-2"], [1, "grey-text", 3, "routerLink"], [1, "far", "fa-edit", "pr-2"], [1, "grey-text", 3, "click"], [1, "far", "fa-trash-alt", "pr-2"], ["class", "text-default mx-2", 3, "routerLink", 4, "ngIf"], [1, "text-default", "mx-2", 3, "routerLink"], ["pill", "true", "color", "light-blue"], [1, "list-group-item", "px-0", "pb-0"], [3, "routerLink"], ["color", "cyan", 1, "my-2", "py-1", "px-1", "mx-2"]],
      template: function BlogDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlogDetailComponent_section_3_Template, 29, 17, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mdb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mdb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u76F8\u5173\u6587\u7AE0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mdb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BlogDetailComponent_li_12_Template, 9, 12, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mdb-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mdb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u7F51\u7AD9\u6807\u7B7E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mdb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BlogDetailComponent_a_20_Template, 3, 7, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ng-adsense", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogDetailComponent_Template_button_click_23_listener() {
            return ctx.scrollTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mdb-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.blog$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, ctx.relatedBlogs$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 8, ctx.tagCloud$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageLevelAds", true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MdbCardHeaderComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MdbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng2_adsense__WEBPACK_IMPORTED_MODULE_8__["AdsenseComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["FasDirective"], _shared_comment_comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBadgeComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MdbCardTitleComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MdbCardTextComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _pipe_blog_type_pipe__WEBPACK_IMPORTED_MODULE_11__["BlogTypePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _pipe_html_format_pipe__WEBPACK_IMPORTED_MODULE_12__["HtmlFormatPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy1kZXRhaWwvYmxvZy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-detail',
          templateUrl: './blog-detail.component.html',
          styleUrls: ['./blog-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _blog_service__WEBPACK_IMPORTED_MODULE_5__["BlogService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog-form/blog-deactivate.guard.ts":
  /*!*********************************************************!*\
    !*** ./src/app/blog/blog-form/blog-deactivate.guard.ts ***!
    \*********************************************************/

  /*! exports provided: BlogDeactivateGuard */

  /***/
  function srcAppBlogBlogFormBlogDeactivateGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogDeactivateGuard", function () {
      return BlogDeactivateGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlogDeactivateGuard =
    /*#__PURE__*/
    function () {
      function BlogDeactivateGuard() {
        _classCallCheck(this, BlogDeactivateGuard);
      }

      _createClass(BlogDeactivateGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component) {
          return component.canDeactivate ? component.canDeactivate() : true;
        }
      }]);

      return BlogDeactivateGuard;
    }();

    BlogDeactivateGuard.ɵfac = function BlogDeactivateGuard_Factory(t) {
      return new (t || BlogDeactivateGuard)();
    };

    BlogDeactivateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BlogDeactivateGuard,
      factory: BlogDeactivateGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogDeactivateGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog-form/blog-form.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/blog/blog-form/blog-form.component.ts ***!
    \*******************************************************/

  /*! exports provided: BlogFormComponent */

  /***/
  function srcAppBlogBlogFormBlogFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogFormComponent", function () {
      return BlogFormComponent;
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


    var _shared_editor_editor_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/editor/editor-config */
    "./src/app/shared/editor/editor-config.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../blog.service */
    "./src/app/blog/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _cfg_cfg_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../cfg/cfg.service */
    "./src/app/cfg/cfg.service.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @tinymce/tinymce-angular */
    "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function BlogFormComponent_mat_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r41 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", type_r41.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r41.title);
      }
    }

    function BlogFormComponent_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r42 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", tag_r42.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r42.title);
      }
    }

    function BlogFormComponent_img_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r39.blogForm.value.bannerUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var BlogFormComponent =
    /*#__PURE__*/
    function () {
      function BlogFormComponent(fb, blogService, router, route, location, cfgService) {
        _classCallCheck(this, BlogFormComponent);

        this.fb = fb;
        this.blogService = blogService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.cfgService = cfgService;
        this.conf = new _shared_editor_editor_config__WEBPACK_IMPORTED_MODULE_2__["EditorConfig"]();
        this.uploadFile = '';
        this.blogForm = this.fb.group({
          _id: [''],
          title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          blogType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          blogAccess: ['public', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          tags: [''],
          bannerUrl: [''],
          createdAt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.validateFlag = false;
      }

      _createClass(BlogFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getBlogById();
          this.getBlogType();
          this.getBlogTags();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this23 = this;

          if (this.blogForm.value._id && this.blogForm.value._id != '') {
            this.blogService.updateBlog(this.blogForm.value, this.blogForm.value._id).subscribe(function (res) {
              _this23.validateFlag = true;

              _this23.router.navigate(["/blogs/".concat(res._id)]);
            });
          } else {
            delete this.blogForm.value._id;
            this.blogService.createBlog(this.blogForm.value).subscribe(function (res) {
              _this23.validateFlag = true;

              _this23.router.navigate(["/blogs/".concat(res._id)]);
            });
          }
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(files) {
          var _this24 = this;

          this.blogService.postBannerFile(files.item(0)).subscribe(function (res) {
            if (res.filename) {
              if (confirm('需要替代展示图片吗？')) {
                _this24.blogForm.patchValue({
                  bannerUrl: "/".concat(res.filename)
                });
              } else {
                var selBox = document.createElement('textarea');
                selBox.style.position = 'fixed';
                selBox.style.left = '0';
                selBox.style.top = '0';
                selBox.style.opacity = '0';
                selBox.value = res.filename;
                document.body.appendChild(selBox);
                selBox.focus();
                selBox.select();
                document.execCommand('copy');
                document.body.removeChild(selBox);
                alert("\u56FE\u7247\u4E0A\u4F20\u5730\u5740\u4E3A\uFF1A/".concat(res.filename, ", \u5DF2\u590D\u5236\u5230\u7C98\u8D34\u677F"));
              }
            } else {
              alert('格式不正确或服务器错误，请重试');
            }
          });
        }
      }, {
        key: "getBlogById",
        value: function getBlogById() {
          var _this25 = this;

          var id = this.route.snapshot.paramMap.get('id');

          if (id) {
            this.blogService.getBlogById(id).subscribe(function (res) {
              _this25.blogForm.patchValue({
                _id: res._id,
                title: res.title,
                content: res.content,
                blogAccess: res.blogAccess,
                blogType: res.blogType,
                tags: res.tags,
                bannerUrl: res.bannerUrl,
                createdAt: res.createdAt
              });
            });
          }
        }
      }, {
        key: "getBlogType",
        value: function getBlogType() {
          var _this26 = this;

          this.cfgService.getCfgList({
            page: 1,
            key: 'ARTICLE_TYPE'
          }).subscribe(function (res) {
            _this26.blogTypes = JSON.parse(res[0].valu);
          });
        }
      }, {
        key: "getBlogTags",
        value: function getBlogTags() {
          var _this27 = this;

          this.cfgService.getCfgList({
            page: 1,
            key: 'ARTICLE_TAG'
          }).subscribe(function (res) {
            _this27.blogTags = JSON.parse(res[0].valu);
          });
        }
      }, {
        key: "goback",
        value: function goback() {
          this.location.back();
        }
      }, {
        key: "canDeactivate",
        value: function canDeactivate() {
          // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
          if (!this.blogForm.dirty || this.validateFlag) {
            return true;
          } // Otherwise ask the user with the dialog service and return its
          // observable which resolves to true or false when the user decides


          var confirmation = window.confirm('您的数据还未保存，是否取消保存?');
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(confirmation);
        }
      }]);

      return BlogFormComponent;
    }();

    BlogFormComponent.ɵfac = function BlogFormComponent_Factory(t) {
      return new (t || BlogFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cfg_cfg_service__WEBPACK_IMPORTED_MODULE_7__["CfgService"]));
    };

    BlogFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogFormComponent,
      selectors: [["app-blog-form"]],
      decls: 40,
      vars: 9,
      consts: [[1, "container", "py-4"], [3, "formGroup", "ngSubmit"], [1, "md-form"], ["type", "text", "id", "form_title", "mdbInput", "", "formControlName", "title", 1, "md-textarea", "form-control"], ["for", "form_title"], ["placeholder", "\u8BF7\u9009\u62E9\u6587\u7AE0\u7C7B\u578B", "formControlName", "blogType"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "\u8BF7\u9009\u62E9\u6587\u7AE0\u6807\u7B7E", "formControlName", "tags", "multiple", ""], ["for", "form_content"], ["id", "form_content", "formControlName", "content", 3, "init"], ["class", "pb-4", "style", "max-width: 100%;max-height: 150px;", 3, "src", 4, "ngIf"], ["type", "text", "id", "form_banner", "formControlName", "bannerUrl", "mdbInput", "", 1, "form-control"], ["for", "form_banner"], [1, "md-form", "row"], [1, "col-md-6"], ["placeholder", "\u8BF7\u9009\u62E9\u9690\u79C1\u7C7B\u578B", "formControlName", "blogAccess"], ["value", "public"], ["value", "private"], ["type", "text", "mdbInput", "", "placeholder", "\u9009\u62E9\u53D1\u5E03\u65F6\u95F4", "formControlName", "createdAt", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""], ["mdbBtn", "", "color", "info", "type", "submit", 1, "my-4", 3, "disabled"], ["mdbBtn", "", "color", "light", "type", "button", 1, "my-4", "mx-4", 3, "click"], ["mat-fab", "", "color", "primary", 1, "scrollBtn", 2, "right", "35px", "bottom", "35px", "position", "fixed", "z-index", "9999"], ["fas", "", "icon", "file-upload fa-lg"], ["type", "file", "id", "form_file", "accept", "image/*", 2, "position", "absolute", "left", "0", "top", "0", "width", "56px", "height", "56px", "opacity", "0", 3, "ngModel", "ngModelChange", "change"], [3, "value"], [1, "pb-4", 2, "max-width", "100%", "max-height", "150px", 3, "src"]],
      template: function BlogFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BlogFormComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u8F93\u5165\u6587\u7AE0\u6807\u9898");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BlogFormComponent_mat_option_8_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BlogFormComponent_mat_option_11_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u6587\u7AE0\u5185\u5BB9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "editor", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BlogFormComponent_img_16_Template, 1, 1, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u5C55\u793A\u56FE\u7247");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u516C\u5F00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u79C1\u5BC6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-datepicker-toggle", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-datepicker", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u63D0\u4EA4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogFormComponent_Template_button_click_35_listener() {
            return ctx.goback();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u8FD4\u56DE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mdb-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogFormComponent_Template_input_ngModelChange_39_listener($event) {
            return ctx.uploadFile = $event;
          })("change", function BlogFormComponent_Template_input_change_39_listener($event) {
            return ctx.handleFileInput($event.target.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.blogForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogTags);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("init", ctx.conf);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blogForm.value.bannerUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.blogForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.uploadFile);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MdbInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_10__["EditorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MdbBtnDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["FasDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy1mb3JtL2Jsb2ctZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-form',
          templateUrl: './blog-form.component.html',
          styleUrls: ['./blog-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: _cfg_cfg_service__WEBPACK_IMPORTED_MODULE_7__["CfgService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog-index/blog-index.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/blog/blog-index/blog-index.component.ts ***!
    \*********************************************************/

  /*! exports provided: BlogIndexComponent */

  /***/
  function srcAppBlogBlogIndexBlogIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogIndexComponent", function () {
      return BlogIndexComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../blog.service */
    "./src/app/blog/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/pagination/pagination.component */
    "./src/app/shared/pagination/pagination.component.ts");
    /* harmony import */


    var _pipe_blog_type_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pipe/blog-type.pipe */
    "./src/app/pipe/blog-type.pipe.ts");

    var _c0 = function _c0(a1) {
      return ["/blogs", a1];
    };

    var _c1 = function _c1(a1) {
      return ["/blogs", a1, "edit"];
    };

    function BlogIndexComponent_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "blogType");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u7F16\u8F91");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogIndexComponent_tr_19_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var blog_r45 = ctx.$implicit;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.deleteBlog(blog_r45._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u5220\u9664");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var blog_r45 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, blog_r45._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r45._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, blog_r45._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r45.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, blog_r45.blogType || ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 10, blog_r45.createdAt, "yyyy-MM-dd"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r45.tags);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, blog_r45._id));
      }
    }

    function BlogIndexComponent_app_pagination_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pagination", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }

      if (rf & 2) {
        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icur", ctx_r44.currentPage)("total", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r44.blogCount$));
      }
    }

    var _c2 = function _c2() {
      return ["/blogs", "new"];
    };

    var BlogIndexComponent =
    /*#__PURE__*/
    function () {
      function BlogIndexComponent(authService, blogService, route, router) {
        _classCallCheck(this, BlogIndexComponent);

        this.authService = authService;
        this.blogService = blogService;
        this.route = route;
        this.router = router;
        this.currentPage = 1;
      }

      _createClass(BlogIndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.blogs$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            _this28.listParam = {
              page: params.get('page') || 1,
              blogType: params.get('blogType'),
              blogNum: 'all'
            };
            _this28.currentPage = Number.parseInt(params.get('page') || '1');
            window.scrollTo(0, 0);
            return _this28.blogService.getBlogList(_this28.listParam);
          }));
          this.blogCount$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            return _this28.blogService.getBlogCount(_this28.listParam);
          }));
          this.authService.me().subscribe(function (data) {
            _this28.user = data.user;
          });
        }
      }, {
        key: "deleteBlog",
        value: function deleteBlog(id) {
          var _this29 = this;

          console.log(this.blogs$[2]);

          if (confirm('确认要删除此blog吗？')) {
            this.blogService.deleteBlogById(id).subscribe(function (res) {
              _this29.blogs$ = _this29.blogService.getBlogList(_this29.listParam);
            });
          }
        }
      }, {
        key: "scrollTop",
        value: function scrollTop() {
          window.scrollTo(0, 0);
        }
      }]);

      return BlogIndexComponent;
    }();

    BlogIndexComponent.ɵfac = function BlogIndexComponent_Factory(t) {
      return new (t || BlogIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    BlogIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogIndexComponent,
      selectors: [["app-blog-index"]],
      decls: 22,
      vars: 6,
      consts: [[1, "container"], [1, "text-center", "pt-4"], ["type", "button", "mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 3, "routerLink"], [1, "my-5"], ["mdbTable", "", "responsive", "true", "hover", "true"], [4, "ngFor", "ngForOf"], [3, "icur", "total", 4, "ngIf"], [3, "routerLink"], ["type", "button", "mdbBtn", "", "color", "info", "mdbWavesEffect", "", 1, "btn-sm", 3, "routerLink"], ["type", "button", "mdbBtn", "", "color", "danger", "mdbWavesEffect", "", 1, "btn-sm", 3, "click"], [3, "icur", "total"]],
      template: function BlogIndexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u521B\u5EFABLOG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "blogType");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "createdAt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BlogIndexComponent_tr_19_Template, 20, 19, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BlogIndexComponent_app_pagination_21_Template, 2, 4, "app-pagination", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 3, ctx.blogs$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blogCount$);
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _pipe_blog_type_pipe__WEBPACK_IMPORTED_MODULE_8__["BlogTypePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy1pbmRleC9ibG9nLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-index',
          templateUrl: './blog-index.component.html',
          styleUrls: ['./blog-index.component.scss']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog-list/blog-list.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/blog/blog-list/blog-list.component.ts ***!
    \*******************************************************/

  /*! exports provided: BlogListComponent */

  /***/
  function srcAppBlogBlogListBlogListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogListComponent", function () {
      return BlogListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../blog.service */
    "./src/app/blog/blog.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/pagination/pagination.component */
    "./src/app/shared/pagination/pagination.component.ts");
    /* harmony import */


    var _pipe_html_format_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../pipe/html-format.pipe */
    "./src/app/pipe/html-format.pipe.ts");
    /* harmony import */


    var _pipe_blog_type_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../pipe/blog-type.pipe */
    "./src/app/pipe/blog-type.pipe.ts");

    var _c0 = function _c0(a1) {
      return ["/blogs", a1];
    };

    function BlogListComponent_div_2_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var blog_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", blog_r18.bannerUrl || "../../../../../assets/no-page.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, blog_r18._id));
      }
    }

    function BlogListComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "htmlFormat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "blogType");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BlogListComponent_div_2_div_16_Template, 5, 4, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var blog_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](blog_r18.bannerUrl == "" ? "col-12" : "col-lg-7 col-xl-8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, blog_r18._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r18.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 12, blog_r18.content, "nohtml"), 0, 300));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 15, blog_r18.blogType || ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 17, blog_r18.createdAt, "yyyy-MM-dd"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", blog_r18.bannerUrl != "");
      }
    }

    function BlogListComponent_app_pagination_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pagination", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icur", ctx_r17.currentPage)("total", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r17.blogCount$));
      }
    }

    var BlogListComponent =
    /*#__PURE__*/
    function () {
      function BlogListComponent(authService, blogService, titleService, metaService, route, router) {
        _classCallCheck(this, BlogListComponent);

        this.authService = authService;
        this.blogService = blogService;
        this.titleService = titleService;
        this.metaService = metaService;
        this.route = route;
        this.router = router;
        this.currentPage = 1;
      }

      _createClass(BlogListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.blogs$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            var listParam = {
              page: params.get('page') || 1,
              blogType: params.get('blogType'),
              tags: params.get('tags')
            };
            _this30.currentPage = Number.parseInt(params.get('page') || '1');
            window.scrollTo(0, 0);
            return _this30.blogService.getBlogList(listParam);
          }));
          this.blogCount$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            var listParam = {
              blogType: params.get('blogType'),
              tags: params.get('tags')
            };
            return _this30.blogService.getBlogCount(listParam);
          }));
          this.authService.me().subscribe(function (data) {
            _this30.user = data.user;
          });
          this.titleService.setTitle('创新驿路');
          this.metaService.updateTag({
            name: 'description',
            content: '创新驿路-提供最新创新方法，创新事务'
          });
          this.metaService.updateTag({
            name: 'keywords',
            content: "创新方法,创新驿站,创新驿路,创新事件,创新,创新的事情,创新方法论"
          });
        }
      }, {
        key: "deleteBlog",
        value: function deleteBlog(id) {
          var _this31 = this;

          if (confirm('确认要删除此blog吗？')) {
            this.blogService.deleteBlogById(id).subscribe(function (res) {
              _this31.router.navigated = false;

              _this31.router.navigate([_this31.router.url]);
            });
          }
        }
      }, {
        key: "scrollTop",
        value: function scrollTop() {
          window.scrollTo(0, 0);
        }
      }]);

      return BlogListComponent;
    }();

    BlogListComponent.ɵfac = function BlogListComponent_Factory(t) {
      return new (t || BlogListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    BlogListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogListComponent,
      selectors: [["app-blog-list"]],
      decls: 7,
      vars: 4,
      consts: [[1, "container"], [1, "my-5"], ["class", "bg-white px-3 py-3 my-4", 4, "ngFor", "ngForOf"], [3, "icur", "total", 4, "ngIf"], ["mat-fab", "", "color", "warn", 1, "scrollBtn", 2, "right", "35px", "bottom", "35px", "position", "fixed", "z-index", "9999", 3, "click"], ["fas", "", "icon", "arrow-up"], [1, "bg-white", "px-3", "py-3", "my-4"], [1, "row"], [1, "font-weight-bold", "mb-3"], [3, "routerLink"], [1, "dark-grey-text"], [1, "font-weight-bold"], ["class", "col-lg-5 col-xl-4", 4, "ngIf"], [1, "col-lg-5", "col-xl-4"], ["mdbWavesEffect", "", 1, "view", "overlay", "rounded", "mb-lg-0", "mb-4", "waves-light"], ["alt", "image", 1, "img-fluid", 3, "src"], [1, "mask", "rgba-white-slight"], [3, "icur", "total"]],
      template: function BlogListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlogListComponent_div_2_Template, 17, 22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlogListComponent_app_pagination_4_Template, 2, 4, "app-pagination", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogListComponent_Template_button_click_5_listener() {
            return ctx.scrollTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mdb-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.blogs$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blogCount$);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["FasDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["WavesDirective"], _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"], _pipe_html_format_pipe__WEBPACK_IMPORTED_MODULE_10__["HtmlFormatPipe"], _pipe_blog_type_pipe__WEBPACK_IMPORTED_MODULE_11__["BlogTypePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: [".scrollBtn[_ngcontent-%COMP%]:hover {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLWxpc3QvRTpcXHdvcmtzcGFjZVxcZnJvbnRlbmRcXGlubm92YXRpb24tcm9hZC9zcmNcXGFwcFxcYmxvZ1xcYmxvZy1saXN0XFxibG9nLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jsb2cvYmxvZy1saXN0L2Jsb2ctbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy1saXN0L2Jsb2ctbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxCdG46aG92ZXJ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufSIsIi5zY3JvbGxCdG46aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-list',
          templateUrl: './blog-list.component.html',
          styleUrls: ['./blog-list.component.scss']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/blog/blog-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: BlogRoutingModule */

  /***/
  function srcAppBlogBlogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function () {
      return BlogRoutingModule;
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


    var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./blog-list/blog-list.component */
    "./src/app/blog/blog-list/blog-list.component.ts");
    /* harmony import */


    var _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog-detail/blog-detail.component */
    "./src/app/blog/blog-detail/blog-detail.component.ts");
    /* harmony import */


    var _blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./blog-form/blog-form.component */
    "./src/app/blog/blog-form/blog-form.component.ts");
    /* harmony import */


    var _blog_index_blog_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blog-index/blog-index.component */
    "./src/app/blog/blog-index/blog-index.component.ts");
    /* harmony import */


    var _blog_form_blog_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./blog-form/blog-deactivate.guard */
    "./src/app/blog/blog-form/blog-deactivate.guard.ts");
    /* harmony import */


    var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../auth/auth-guard.service */
    "./src/app/auth/auth-guard.service.ts");

    var routes = [{
      path: '',
      component: _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_2__["BlogListComponent"]
    }, {
      path: 'index',
      canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
      component: _blog_index_blog_index_component__WEBPACK_IMPORTED_MODULE_5__["BlogIndexComponent"]
    }, {
      path: 'new',
      canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
      component: _blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_4__["BlogFormComponent"],
      canDeactivate: [_blog_form_blog_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__["BlogDeactivateGuard"]]
    }, {
      path: ':id',
      children: [{
        path: '',
        component: _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_3__["BlogDetailComponent"]
      }, {
        path: 'edit',
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_4__["BlogFormComponent"],
        canDeactivate: [_blog_form_blog_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__["BlogDeactivateGuard"]]
      }]
    }];

    var BlogRoutingModule = function BlogRoutingModule() {
      _classCallCheck(this, BlogRoutingModule);
    };

    BlogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BlogRoutingModule
    });
    BlogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BlogRoutingModule_Factory(t) {
        return new (t || BlogRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog.module.ts":
  /*!*************************************!*\
    !*** ./src/app/blog/blog.module.ts ***!
    \*************************************/

  /*! exports provided: BlogModule */

  /***/
  function srcAppBlogBlogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogModule", function () {
      return BlogModule;
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog-routing.module */
    "./src/app/blog/blog-routing.module.ts");
    /* harmony import */


    var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./blog-list/blog-list.component */
    "./src/app/blog/blog-list/blog-list.component.ts");
    /* harmony import */


    var _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blog-detail/blog-detail.component */
    "./src/app/blog/blog-detail/blog-detail.component.ts");
    /* harmony import */


    var _blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./blog-form/blog-form.component */
    "./src/app/blog/blog-form/blog-form.component.ts");
    /* harmony import */


    var _pipe_blog_type_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../pipe/blog-type.pipe */
    "./src/app/pipe/blog-type.pipe.ts");
    /* harmony import */


    var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @tinymce/tinymce-angular */
    "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");
    /* harmony import */


    var _shared_comment_comment_comment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/comment/comment/comment.component */
    "./src/app/shared/comment/comment/comment.component.ts");
    /* harmony import */


    var _shared_comment_comment_item_comment_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/comment/comment-item/comment-item.component */
    "./src/app/shared/comment/comment-item/comment-item.component.ts");
    /* harmony import */


    var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../shared/sidebar/sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");
    /* harmony import */


    var _blog_index_blog_index_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./blog-index/blog-index.component */
    "./src/app/blog/blog-index/blog-index.component.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./blog.service */
    "./src/app/blog/blog.service.ts");

    var BlogModule = function BlogModule() {
      _classCallCheck(this, BlogModule);
    };

    BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BlogModule
    });
    BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BlogModule_Factory(t) {
        return new (t || BlogModule)();
      },
      providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _pipe_blog_type_pipe__WEBPACK_IMPORTED_MODULE_7__["BlogTypePipe"], _blog_service__WEBPACK_IMPORTED_MODULE_15__["BlogService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_8__["EditorModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogModule, {
        declarations: [_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_4__["BlogListComponent"], _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_5__["BlogDetailComponent"], _blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_6__["BlogFormComponent"], _pipe_blog_type_pipe__WEBPACK_IMPORTED_MODULE_7__["BlogTypePipe"], _shared_comment_comment_comment_component__WEBPACK_IMPORTED_MODULE_9__["CommentComponent"], _shared_comment_comment_item_comment_item_component__WEBPACK_IMPORTED_MODULE_10__["CommentItemComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"], _blog_index_blog_index_component__WEBPACK_IMPORTED_MODULE_12__["BlogIndexComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_8__["EditorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_8__["EditorModule"]],
          providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _pipe_blog_type_pipe__WEBPACK_IMPORTED_MODULE_7__["BlogTypePipe"], _blog_service__WEBPACK_IMPORTED_MODULE_15__["BlogService"]],
          declarations: [_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_4__["BlogListComponent"], _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_5__["BlogDetailComponent"], _blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_6__["BlogFormComponent"], _pipe_blog_type_pipe__WEBPACK_IMPORTED_MODULE_7__["BlogTypePipe"], _shared_comment_comment_comment_component__WEBPACK_IMPORTED_MODULE_9__["CommentComponent"], _shared_comment_comment_item_comment_item_component__WEBPACK_IMPORTED_MODULE_10__["CommentItemComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"], _blog_index_blog_index_component__WEBPACK_IMPORTED_MODULE_12__["BlogIndexComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/comments/comment.ts":
  /*!*************************************!*\
    !*** ./src/app/comments/comment.ts ***!
    \*************************************/

  /*! exports provided: Comment */

  /***/
  function srcAppCommentsCommentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Comment", function () {
      return Comment;
    });

    var Comment = function Comment() {
      _classCallCheck(this, Comment);
    };
    /***/

  },

  /***/
  "./src/app/pipe/blog-type.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipe/blog-type.pipe.ts ***!
    \****************************************/

  /*! exports provided: BlogTypePipe */

  /***/
  function srcAppPipeBlogTypePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogTypePipe", function () {
      return BlogTypePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlogTypePipe =
    /*#__PURE__*/
    function () {
      function BlogTypePipe() {
        _classCallCheck(this, BlogTypePipe);
      }

      _createClass(BlogTypePipe, [{
        key: "transform",
        value: function transform(type) {
          var tmp = '无';

          switch (type) {
            case 'note':
              tmp = '日志';
              break;

            case 'document':
              tmp = '文档';
              break;

            case 'skill':
              tmp = '技术';
              break;

            case 'recommand':
              tmp = '推荐';
              break;

            case 'innovationMethod':
              tmp = '创新方法论';
              break;

            case 'innovationTech':
              tmp = '创新技术';
              break;

            case 'innovationThing':
              tmp = '创新好物';
              break;

            case 'innovation':
              tmp = '创新';
              break;

            case 'translation':
              tmp = '翻译';
              break;

            default:
              tmp = '创新资讯';
          }

          return tmp;
        }
      }]);

      return BlogTypePipe;
    }();

    BlogTypePipe.ɵfac = function BlogTypePipe_Factory(t) {
      return new (t || BlogTypePipe)();
    };

    BlogTypePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "blogType",
      type: BlogTypePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogTypePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'blogType'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/comment/comment-item/comment-item.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/comment/comment-item/comment-item.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CommentItemComponent */

  /***/
  function srcAppSharedCommentCommentItemCommentItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentItemComponent", function () {
      return CommentItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _comments_comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../comments/comment */
    "./src/app/comments/comment.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CommentItemComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u7559\u8A00 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r49 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r49.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 3, comment_r49.createdAt, "shortDate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r49.body);
      }
    }

    var CommentItemComponent =
    /*#__PURE__*/
    function () {
      function CommentItemComponent() {
        _classCallCheck(this, CommentItemComponent);

        this.OnDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CommentItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "commentDelete",
        value: function commentDelete(id) {
          this.OnDelete.emit(new _comments_comment__WEBPACK_IMPORTED_MODULE_1__["Comment"]());
        }
      }]);

      return CommentItemComponent;
    }();

    CommentItemComponent.ɵfac = function CommentItemComponent_Factory(t) {
      return new (t || CommentItemComponent)();
    };

    CommentItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommentItemComponent,
      selectors: [["app-comment-item"]],
      inputs: {
        comments: "comments"
      },
      outputs: {
        OnDelete: "OnDelete"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "my-5"], [1, "row"], ["class", "col-lg-12", 4, "ngFor", "ngForOf"], [1, "col-lg-12"], [1, "mdb-feed"], [1, "news"], [1, "excerpt"], [1, "brief"], [1, "name"], [1, "date"], [1, "added-text"]],
      template: function CommentItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentItemComponent_div_2_Template, 13, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: [".brief[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem;\n}\n\n.name[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: baseline;\n  font-weight: 500;\n}\n\n.date[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: none;\n  padding-left: 0.7rem;\n  font-size: 0.86rem;\n  font-weight: 300;\n  color: #9e9e9e;\n}\n\n.added-text[_ngcontent-%COMP%] {\n  max-height: 100px;\n  margin-top: 10px;\n  overflow: hidden;\n  line-height: 1.67;\n  height: 100px;\n  font-size: 15px;\n  color: #333;\n  font-family: \"FZLanTingHeiS-R-GB\", Microsoft YaHei, verdana, arial, helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbW1lbnQvY29tbWVudC1pdGVtL0U6XFx3b3Jrc3BhY2VcXGZyb250ZW5kXFxpbm5vdmF0aW9uLXJvYWQvc3JjXFxhcHBcXHNoYXJlZFxcY29tbWVudFxcY29tbWVudC1pdGVtXFxjb21tZW50LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21tZW50L2NvbW1lbnQtaXRlbS9jb21tZW50LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDR0Y7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlGQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tbWVudC9jb21tZW50LWl0ZW0vY29tbWVudC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyaWVmIHtcclxuICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XHJcbn1cclxuLm5hbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uZGF0ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogLjdyZW07XHJcbiAgZm9udC1zaXplOiAuODZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogIzllOWU5ZTtcclxufVxyXG5cclxuLmFkZGVkLXRleHQge1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBsaW5lLWhlaWdodDogMS42NztcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LWZhbWlseTogJ0ZaTGFuVGluZ0hlaVMtUi1HQicsIE1pY3Jvc29mdCBZYUhlaSwgdmVyZGFuYSwgYXJpYWwsIGhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufSIsIi5icmllZiB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG5cbi5uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5kYXRlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwLjdyZW07XG4gIGZvbnQtc2l6ZTogMC44NnJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM5ZTllOWU7XG59XG5cbi5hZGRlZC10ZXh0IHtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LWZhbWlseTogXCJGWkxhblRpbmdIZWlTLVItR0JcIiwgTWljcm9zb2Z0IFlhSGVpLCB2ZXJkYW5hLCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comment-item',
          templateUrl: './comment-item.component.html',
          styleUrls: ['./comment-item.component.scss']
        }]
      }], function () {
        return [];
      }, {
        comments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        OnDelete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/comment/comment/comment.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/comment/comment/comment.component.ts ***!
    \*************************************************************/

  /*! exports provided: CommentComponent */

  /***/
  function srcAppSharedCommentCommentCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentComponent", function () {
      return CommentComponent;
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


    var _comments_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comments/comment.service */
    "./src/app/comments/comment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _comment_item_comment_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../comment-item/comment-item.component */
    "./src/app/shared/comment/comment-item/comment-item.component.ts");

    var CommentComponent =
    /*#__PURE__*/
    function () {
      function CommentComponent(fb, commentService, router, route, snackBar) {
        _classCallCheck(this, CommentComponent);

        this.fb = fb;
        this.commentService = commentService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.commentForm = this.fb.group({
          body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(CommentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCommentsByArticleId();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var that = this;
          this.commentForm.value.parent_id = this.blog_id;
          this.commentForm.value.parent_type = 'Blog';
          this.commentService.createComment(this.commentForm.value).subscribe(function (res) {
            that.comments.unshift(res);
            that.commentForm.reset();
            that.snackBar.open('评论成功', '关闭', {
              duration: 20000
            });
          });
        }
      }, {
        key: "getCommentsByArticleId",
        value: function getCommentsByArticleId() {
          var that = this;
          that.commentService.getCommentsByArticleId(this.blog_id, this.blog_type).subscribe(function (res) {
            that.comments = res;
          });
        }
      }]);

      return CommentComponent;
    }();

    CommentComponent.ɵfac = function CommentComponent_Factory(t) {
      return new (t || CommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_comments_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
    };

    CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommentComponent,
      selectors: [["app-comment"]],
      inputs: {
        blog_id: "blog_id",
        blog_type: "blog_type"
      },
      decls: 24,
      vars: 3,
      consts: [[1, "form-gradient", "mb-5"], [2, "box-shadow", "none"], [1, "mx-4"], [3, "formGroup", "ngSubmit"], [1, "md-form"], ["fas", "", "icon", "pencil-alt", 1, "prefix", "grey-text"], ["type", "text", "id", "comment-body", "rows", "5", "mdbInput", "", "formControlName", "body", 1, "md-textarea", "form-control"], ["for", "comment-body"], [1, "row", "d-flex", "align-items-center", "mb-3", "mt-4"], [1, "md-form", 2, "flex", "1"], ["fas", "", "icon", "user", 1, "prefix", "grey-text"], ["type", "text", "id", "comment-name", "mdbInput", "", "formControlName", "name", 1, "form-control"], ["for", "comment-name"], ["fas", "", "icon", "envelope", 1, "prefix", "grey-text"], ["type", "email", "id", "comment-email", "mdbInput", "", "formControlName", "email", 1, "form-control"], ["for", "comment-email"], [1, "float-right"], ["type", "submit", "mdbBtn", "", "color", "primary", "rounded", "true", 1, "z-depth-1a", 3, "disabled"], [3, "comments"]],
      template: function CommentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-card-body", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CommentComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mdb-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "textarea", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u7559\u8A00\u4FE1\u606F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mdb-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u6635\u79F0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mdb-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u90AE\u7BB1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u53D1\u9001");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-comment-item", 18);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.commentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.commentForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comments", ctx.comments);
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["FasDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbBtnDirective"], _comment_item_comment_item_component__WEBPACK_IMPORTED_MODULE_6__["CommentItemComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21tZW50L2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comment',
          templateUrl: './comment.component.html',
          styleUrls: ['./comment.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _comments_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }];
      }, {
        blog_id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        blog_type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/editor/editor-config.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/editor/editor-config.ts ***!
    \************************************************/

  /*! exports provided: EditorConfig */

  /***/
  function srcAppSharedEditorEditorConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorConfig", function () {
      return EditorConfig;
    });

    var EditorConfig = function EditorConfig() {
      _classCallCheck(this, EditorConfig);

      this.height = 500;
      this.menubar = true;
      this.plugins = ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'];
      this.toolbar = 'undo redo | formatselect | bold italic backcolor | \
    alignleft aligncenter alignright alignjustify | \
    bullist numlist outdent indent | removeformat | help';
    };
    /***/

  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
    \*****************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 31,
      vars: 0,
      consts: [["borderColor", "border-light", 1, "mb-3"], [1, "bg-white"], [1, "px-2", "py-2", "d-flex", "border-bottom"], [2, "flex", "1"], [1, "fa", "fa-angle-double-right"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u5E7F\u544A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mdb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mdb-card-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u94FE\u63A5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u94FE\u63A5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u94FE\u63A5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u94FE\u63A5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u94FE\u63A5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardHeaderComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardTextComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=blog-blog-module-es5.js.map