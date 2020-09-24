"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
var Album = /** @class */ (function () {
    function Album(title) {
        this.title = title;
    }
    Album.prototype.toString = function () {
        return this.title;
    };
    return Album;
}());
exports.Album = Album;
