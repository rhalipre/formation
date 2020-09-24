"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorld = void 0;
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.sayHello = function (name) {
        if (name === void 0) { name = 'World'; }
        return "Hello " + name + "!";
    };
    return HelloWorld;
}());
exports.HelloWorld = HelloWorld;
