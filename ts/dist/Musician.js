"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Music = exports.Musician = void 0;
var Musician = /** @class */ (function () {
    function Musician(fistName, lastName, age) {
        this._albums = [];
        this.firstName = fistName;
        this.lastName = lastName;
        this.age = age;
    }
    Musician.prototype.addAlbum = function (album) {
        this._albums.push(album);
    };
    Object.defineProperty(Musician.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (style) {
            this._style = style;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Musician.prototype, "albums", {
        get: function () {
            return this._albums;
        },
        enumerable: false,
        configurable: true
    });
    Musician.prototype.toString = function () {
        if (this.style !== undefined) {
            return this.firstName + " " + this.lastName + " plays " + Music[this.style];
        }
        return this.firstName + " " + this.lastName + " plays";
    };
    return Musician;
}());
exports.Musician = Musician;
var Music;
(function (Music) {
    Music[Music["JAZZ"] = 0] = "JAZZ";
    Music[Music["ROCK"] = 1] = "ROCK";
})(Music = exports.Music || (exports.Music = {}));
