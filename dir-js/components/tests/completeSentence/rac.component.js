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
var RacComponent = (function () {
    function RacComponent() {
        this._clicked = false;
        this._guide = false;
        this._guideAnswer = ["rain", "football", "car"];
    }
    RacComponent.prototype.check1 = function () {
        this._clicked = true;
        console.log("Giang");
        if (this._answer1 == "rain" && this._answer2 == "football" && this._answer3 == "car") {
            this._result = true;
        }
        else {
            this._result = false;
        }
        console.log(this._answer1 + " " + this._answer2 + " " + this._answer3);
        console.log(this._result + " ");
    };
    RacComponent.prototype.hint = function () {
        if (this._guide == false) {
            this._guide = true;
        }
        else {
            this._guide = false;
        }
        console.log(this._guide + "");
    };
    RacComponent = __decorate([
        core_1.Component({
            templateUrl: './app/components/tests/completeSentence/rac.component.html',
            styleUrls: ['./app/components/tests/completeSentence/rac.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], RacComponent);
    return RacComponent;
}());
exports.RacComponent = RacComponent;
//# sourceMappingURL=rac.component.js.map