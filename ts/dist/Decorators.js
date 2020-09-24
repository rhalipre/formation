"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleMusic = exports.Rocker = exports.JazzMan = exports.logged = void 0;
var Utils_1 = require("./Utils");
var Musician_1 = require("./Musician");
function logged(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    if (originalMethod) {
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = originalMethod.apply(target, args);
            Utils_1.log(result);
            return result;
        };
    }
    return descriptor;
}
exports.logged = logged;
function JazzMan(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this.style = Musician_1.Music.JAZZ;
            return _this;
        }
        return class_1;
    }(constructor));
}
exports.JazzMan = JazzMan;
function Rocker(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this.style = Musician_1.Music.ROCK;
            return _this;
        }
        return class_2;
    }(constructor));
}
exports.Rocker = Rocker;
function StyleMusic(style) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_3, _super);
            function class_3() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, args) || this;
                _this.style = style;
                return _this;
            }
            return class_3;
        }(constructor));
    };
}
exports.StyleMusic = StyleMusic;
