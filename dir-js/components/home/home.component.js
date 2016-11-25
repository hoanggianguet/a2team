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
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
        this.titlePage = "Sách mềm - Phần mềm hỗ trợ sách giáo khoa";
        this.myInterval = 2000;
        this.index = 0;
        this.slides = [];
        this.imgUrl = [
            "./app/assets/carousel-image/class.jpg",
            "./app/assets/carousel-image/book.jpg",
            "./app/assets/carousel-image/fun.png",
            "./app/assets/carousel-image/check.png"
        ];
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    HomeComponent.prototype.addSlide = function () {
        var i = this.slides.length;
        this.slides.push({
            image: this.imgUrl[i],
            text: "" + ['Giáo viên ', 'Học sinh ', 'Phụ huynh ', 'Lớp học '][this.slides.length % 4],
            detail: "" + ['Có thêm công cụ giảng bài sinh động',
                'Hứng thú, ôn luyện và làm bài tập ',
                'Cùng thầy cô giúp đỡ con cái học tập',
                'Năng động, sôi nổi'][this.slides.length % 4]
        });
    };
    HomeComponent.prototype.gotoBook = function () {
        var link = ['books'];
        this.router.navigate(link);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'css-carousel',
            templateUrl: './app/components/home/home.component.html',
            styleUrls: ['./app/components/home/home.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map