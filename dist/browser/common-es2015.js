(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/comments/comment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/comments/comment.service.ts ***!
  \*********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.service */ "./src/app/base.service.ts");




class CommentService {
    constructor(service) {
        this.service = service;
    }
    getComments(obj) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', obj.get('page') || '1');
        return this.service.get({ url: 'api/comments', params: params });
    }
    createComment(comment) {
        return this.service.post({ url: 'api/comments', form: comment });
    }
    getCommentsByArticleId(articleId, articleType) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('parent_id', articleId).set('parent_type', articleType);
        return this.service.get({ url: 'api/comments', params: params });
    }
    deleteCommentById(id) {
        return this.service.delete(`api/comments/${id}`);
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"])); };
CommentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feedback/feedback.service.ts":
/*!**********************************************!*\
  !*** ./src/app/feedback/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.service */ "./src/app/base.service.ts");




class FeedbackService {
    constructor(service) {
        this.service = service;
    }
    getFeedBack(obj) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', obj.get('page') || '1');
        return this.service.get({ url: 'api/feedback', params: params });
    }
    createFeedback(feedback) {
        return this.service.post({ url: 'api/feedback', form: feedback });
    }
    deleteFeedbackById(id) {
        return this.service.delete(`api/feedback/${id}`);
    }
}
FeedbackService.ɵfac = function FeedbackService_Factory(t) { return new (t || FeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"])); };
FeedbackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FeedbackService, factory: FeedbackService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map