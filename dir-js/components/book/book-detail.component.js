"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var book_detail_service_1 = require('./book-detail.service');
var book_service_1 = require('./book.service');
var BookDetailComponent = (function () {
    function BookDetailComponent(bookDetailService, bookService, route, location, router) {
        this.bookDetailService = bookDetailService;
        this.bookService = bookService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.bookDetailService.getUnits(id)
                .then(function (book) { return _this.bookService.getBooks(); });
        });
    };
    BookDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    BookDetailComponent = __decorate([
        core_1.Component({
            selector: 'book-detail',
            providers: [book_detail_service_1.BookDetailService, book_service_1.BookService],
            templateUrl: './app/components/book/book-detail.component.html'
        }), 
        __metadata('design:paramtypes', [book_detail_service_1.BookDetailService, book_service_1.BookService, router_1.ActivatedRoute, common_1.Location, router_1.Router])
    ], BookDetailComponent);
    return BookDetailComponent;
}());
exports.BookDetailComponent = BookDetailComponent;
//# sourceMappingURL=book-detail.component.js.map