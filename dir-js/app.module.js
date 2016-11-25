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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var book_component_1 = require('./components/book/book.component');
var book_detail_component_1 = require('./components/book/book-detail.component');
var home_component_1 = require('./components/home/home.component');
var choose_component_1 = require('./components/tests/chooseAnswer/choose.component');
var test_component_1 = require('./components/tests/test.component');
var write_component_1 = require('./components/tests/writing/write.component');
var rac_component_1 = require('./components/tests/completeSentence/rac.component');
var book_service_1 = require('./components/book/book.service');
var book_detail_service_1 = require('./components/book/book-detail.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng2_bootstrap_1.CarouselModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                book_component_1.BookComponent,
                book_detail_component_1.BookDetailComponent,
                home_component_1.HomeComponent,
                choose_component_1.ChooseComponent,
                test_component_1.TestComponent,
                write_component_1.WriteComponent,
                rac_component_1.RacComponent
            ],
            providers: [
                book_service_1.BookService,
                book_detail_service_1.BookDetailService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map