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
var TestComponent = (function () {
    function TestComponent() {
        this.tests = TESTS;
    }
    TestComponent = __decorate([
        core_1.Component({
            selector: 'quick-test',
            template: "\n        <h2>Quick Test</h2>\n        <div class=\"container\">\n            <ul class='list-test' *ngFor=\"let item of tests\">\n                <li><a routerLink=\"/{{item.name}}\">{{item.content}}</a></li>  \n            </ul>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
var TESTS = [
    { "name": "chooseAns", "content": "Choose correct answer" },
    { "name": "readAndWrite", "content": "Read and complete sentences" },
    { "name": "complete", "content": "Complete sentences" },
    { "name": "tOrF", "content": "True or False" },
    { "name": "listen", "content": "Listen and choose answer" }
];
//# sourceMappingURL=test.component.js.map