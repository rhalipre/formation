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
exports.Album = exports.RockStar = exports.JazzMusician = exports.Musician = exports.display = exports.Music = void 0;
var Music;
(function (Music) {
    Music[Music["JAZZ"] = 0] = "JAZZ";
    Music[Music["ROCK"] = 1] = "ROCK";
})(Music = exports.Music || (exports.Music = {}));
function display(array) {
    array.forEach(function (element) { return console.log(element.toString()); });
}
exports.display = display;
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
var JazzMusician = /** @class */ (function (_super) {
    __extends(JazzMusician, _super);
    function JazzMusician(firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.style = Music.JAZZ;
        return _this;
    }
    return JazzMusician;
}(Musician));
exports.JazzMusician = JazzMusician;
var RockStar = /** @class */ (function (_super) {
    __extends(RockStar, _super);
    function RockStar(firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.style = Music.ROCK;
        return _this;
    }
    return RockStar;
}(Musician));
exports.RockStar = RockStar;
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
