"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberToString = exports.displayPeopleAndLength = exports.returnPeopleAndLength = void 0;
function returnPeopleAndLength(array) {
    if (array === void 0) { array = ['Miles', 'Mick']; }
    return array.map(function (name) { return [name, name.length]; });
}
exports.returnPeopleAndLength = returnPeopleAndLength;
function displayPeopleAndLength(array, literal) {
    if (literal) {
        returnPeopleAndLength(array)
            .filter(function (name) { return name.length <= 9; })
            .forEach(function (_a) {
            var name = _a[0], sizeCar = _a[1];
            return console.log(name + " contient " + NumberToString[sizeCar] + " caract\u00E8res");
        });
    }
    else {
        returnPeopleAndLength(array)
            .forEach(function (_a) {
            var name = _a[0], sizeCar = _a[1];
            return console.log(name + " contient " + sizeCar + " caract\u00E8res");
        });
    }
}
exports.displayPeopleAndLength = displayPeopleAndLength;
var NumberToString;
(function (NumberToString) {
    NumberToString[NumberToString["zero"] = 0] = "zero";
    NumberToString[NumberToString["un"] = 1] = "un";
    NumberToString[NumberToString["deux"] = 2] = "deux";
    NumberToString[NumberToString["trois"] = 3] = "trois";
    NumberToString[NumberToString["quatre"] = 4] = "quatre";
    NumberToString[NumberToString["cin"] = 5] = "cin";
    NumberToString[NumberToString["six"] = 6] = "six";
    NumberToString[NumberToString["sept"] = 7] = "sept";
    NumberToString[NumberToString["huit"] = 8] = "huit";
    NumberToString[NumberToString["neuf"] = 9] = "neuf";
})(NumberToString = exports.NumberToString || (exports.NumberToString = {}));
