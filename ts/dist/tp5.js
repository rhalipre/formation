"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
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
_.each(musicians, function (musician) {
    if (musician instanceof JazzMusician_1.JazzMusician) {
        musician.swing();
    }
    else if (musician instanceof RockStar_1.RockStar) {
        musician.shout();
    }
});
