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
var book_service_1 = require('./book.service');
var BookComponent = (function () {
    function BookComponent(router, bookService) {
        this.router = router;
        this.bookService = bookService;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getBooks().then(function (res) {
            _this.books = res;
        });
    };
    BookComponent.prototype.gotoDetail = function () {
        var link = ['/books', 1];
        this.router.navigate(link);
    };
    BookComponent = __decorate([
        core_1.Component({
            selector: 'list-book',
            providers: [book_service_1.BookService],
            templateUrl: './app/components/book/book.component.html',
            styleUrls: ['./app/components/book/book.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, book_service_1.BookService])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map