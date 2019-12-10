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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GamecontrolComponent = /** @class */ (function () {
    function GamecontrolComponent() {
    }
    GamecontrolComponent.prototype.ngOnInit = function () {
    };
    GamecontrolComponent.prototype.clicked = function () {
        setInterval(printStuff(), 6);
    };
    GamecontrolComponent.prototype.printStuff = function () {
        console.log("hi");
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], GamecontrolComponent.prototype, "odd", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], GamecontrolComponent.prototype, "even", void 0);
    GamecontrolComponent = __decorate([
        core_1.Component({
            selector: 'app-gamecontrol',
            templateUrl: './gamecontrol.component.html',
            styleUrls: ['./gamecontrol.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], GamecontrolComponent);
    return GamecontrolComponent;
}());
exports.GamecontrolComponent = GamecontrolComponent;
//# sourceMappingURL=gamecontrol.component.js.map