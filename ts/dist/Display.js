"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("./Utils");
function display(array) {
    array.forEach(function (element) { return Utils_1.log(element.toString()); });
}
exports.default = display;
