"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var JazzMusician_1 = require("./JazzMusician");
var RockStar_1 = require("./RockStar");
var Album_1 = require("./Album");
var Display_1 = __importDefault(require("./Display"));
var Utils_1 = require("./Utils");
var miles = new JazzMusician_1.JazzMusician('Miles', 'Davis', 89);
miles.addAlbum(new Album_1.Album('Kind Of Blue'));
miles.addAlbum(new Album_1.Album('Tutu'));
var musicians = [
    miles,
    new RockStar_1.RockStar('Mick', 'Jagger', 72),
];
Utils_1.log('Bienvenue dans ma première application TypeScript');
Display_1.default(musicians);
Display_1.default(miles.albums);
for (var _i = 0, musicians_1 = musicians; _i < musicians_1.length; _i++) {
    var musician = musicians_1[_i];
    if (musician instanceof JazzMusician_1.JazzMusician) {
        musician.swing();
    }
    else if (musician instanceof RockStar_1.RockStar) {
        musician.shout();
    }
}
