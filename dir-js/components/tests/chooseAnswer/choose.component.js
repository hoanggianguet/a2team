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
var http_1 = require('@angular/http');
var choose_service_1 = require('./choose.service');
var ChooseComponent = (function () {
    function ChooseComponent(dataService) {
        this.dataService = dataService;
        this.title = 'Choose correct answer';
    }
    ChooseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getQuestion().then(function (res) {
            _this.questions = res;
        });
    };
    ChooseComponent.prototype.saveStatus = function (question, choice) {
        question['choice'] = choice;
    };
    ChooseComponent.prototype.check = function () {
        this.correct = 0;
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i]['choice'] == this.questions[i]['answer']) {
                this.correct++;
                this.questions[i]['status'] = "correct";
            }
            else {
                this.questions[i]['status'] = "incorrect";
            }
        }
    };
    ChooseComponent = __decorate([
        core_1.Component({
            templateUrl: './app/components/tests/chooseAnswer/choose.component.html',
            styleUrls: ['./app/components/tests/chooseAnswer/choose.component.css'],
            providers: [
                choose_service_1.DataService,
                http_1.HttpModule
            ]
        }), 
        __metadata('design:paramtypes', [choose_service_1.DataService])
    ], ChooseComponent);
    return ChooseComponent;
}());
exports.ChooseComponent = ChooseComponent;
//# sourceMappingURL=choose.component.js.map