function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/comments/comment.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/comments/comment.service.ts ***!
    \*********************************************/

  /*! exports provided: CommentService */

  /***/
  function srcAppCommentsCommentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentService", function () {
      return CommentService;
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


    var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base.service */
    "./src/app/base.service.ts");

    var CommentService =
    /*#__PURE__*/
    function () {
      function CommentService(service) {
        _classCallCheck(this, CommentService);

        this.service = service;
      }

      _createClass(CommentService, [{
        key: "getComments",
        value: function getComments(obj) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', obj.get('page') || '1');
          return this.service.get({
            url: 'api/comments',
            params: params
          });
        }
      }, {
        key: "createComment",
        value: function createComment(comment) {
          return this.service.post({
            url: 'api/comments',
            form: comment
          });
        }
      }, {
        key: "getCommentsByArticleId",
        value: function getCommentsByArticleId(articleId, articleType) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('parent_id', articleId).set('parent_type', articleType);
          return this.service.get({
            url: 'api/comments',
            params: params
          });
        }
      }, {
        key: "deleteCommentById",
        value: function deleteCommentById(id) {
          return this.service.delete("api/comments/".concat(id));
        }
      }]);

      return CommentService;
    }();

    CommentService.ɵfac = function CommentService_Factory(t) {
      return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
    };

    CommentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CommentService,
      factory: CommentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feedback/feedback.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/feedback/feedback.service.ts ***!
    \**********************************************/

  /*! exports provided: FeedbackService */

  /***/
  function srcAppFeedbackFeedbackServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackService", function () {
      return FeedbackService;
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


    var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base.service */
    "./src/app/base.service.ts");

    var FeedbackService =
    /*#__PURE__*/
    function () {
      function FeedbackService(service) {
        _classCallCheck(this, FeedbackService);

        this.service = service;
      }

      _createClass(FeedbackService, [{
        key: "getFeedBack",
        value: function getFeedBack(obj) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', obj.get('page') || '1');
          return this.service.get({
            url: 'api/feedback',
            params: params
          });
        }
      }, {
        key: "createFeedback",
        value: function createFeedback(feedback) {
          return this.service.post({
            url: 'api/feedback',
            form: feedback
          });
        }
      }, {
        key: "deleteFeedbackById",
        value: function deleteFeedbackById(id) {
          return this.service.delete("api/feedback/".concat(id));
        }
      }]);

      return FeedbackService;
    }();

    FeedbackService.ɵfac = function FeedbackService_Factory(t) {
      return new (t || FeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
    };

    FeedbackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FeedbackService,
      factory: FeedbackService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map