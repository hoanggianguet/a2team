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
var write_service_1 = require('./write.service');
var http_1 = require('@angular/http');
var WriteComponent = (function () {
    function WriteComponent(_writeService) {
        this._writeService = _writeService;
        this._arrayAnswer = ["", "", ""];
    }
    WriteComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ONInit");
        this._writeService.getItemWrite()
            .subscribe(function (itemWrites) { return _this._arrayItemWrite = itemWrites; }, function (error) { return _this.errorMessage = error; });
    };
    WriteComponent.prototype.clickMe = function () {
        var count = 0;
        for (var i = 0; i < this._arrayItemWrite.length; i++) {
            if (this._arrayAnswer[i] == this._arrayItemWrite[i]._result) {
                count++;
            }
            else {
                this.result = false;
                break;
            }
        }
        console.log(count + "");
        if (count == 3) {
            this.result = true;
        }
    };
    WriteComponent.prototype.ngOnChanges = function () {
        console.log("OnChanges");
    };
    WriteComponent.prototype.ngAfterContentInit = function () {
        // this.test = this._arrayItemWrite.length;
    };
    WriteComponent = __decorate([
        core_1.Component({
            templateUrl: './app/components/tests/writing/write.component.html',
            styleUrls: ['./app/components/tests/writing/write.component.css'],
            providers: [write_service_1.WriteService, http_1.HttpModule]
        }), 
        __metadata('design:paramtypes', [write_service_1.WriteService])
    ], WriteComponent);
    return WriteComponent;
}());
exports.WriteComponent = WriteComponent;
//# sourceMappingURL=write.component.js.map