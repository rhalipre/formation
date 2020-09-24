"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Album_1 = require("./Album");
var Musician_1 = require("./Musician");
var JazzMusician_1 = require("./JazzMusician");
var RockStar_1 = require("./RockStar");
var Display_1 = __importDefault(require("./Display"));
describe('TP4', function () {
    var spy;
    beforeEach(function () {
        spy = jest.spyOn(console, 'log');
        spy.mockClear();
    });
    it('Album properties testing', function () {
        var al = new Album_1.Album('Kind Of Blue');
        expect(al.title).toBe('Kind Of Blue');
    });
    it('Album toString method testing', function () {
        var al = new Album_1.Album('Kind Of Blue');
        expect(al.toString()).toBe('Kind Of Blue');
    });
    it('Enum Music testing', function () {
        expect(Musician_1.Music[0]).toBe('JAZZ');
        expect(Musician_1.Music[1]).toBe('ROCK');
    });
    it('Musician properties testing', function () {
        var musician = new Musician_1.Musician('Miles', 'Davis', 89);
        expect(musician.firstName).toBe('Miles');
        expect(musician.lastName).toBe('Davis');
        expect(musician.age).toBe(89);
        expect(musician.albums).toHaveLength(0);
        // TODO modifier cette instruction ?
        // t.falsy(musician.style);
    });
    it('Musician addAlbum testing', function () {
        var musician = new Musician_1.Musician('Miles', 'Davis', 89);
        musician.addAlbum(new Album_1.Album('Kind Of Blue'));
        musician.addAlbum(new Album_1.Album('Tutu'));
        expect(musician.albums).toHaveLength(2);
    });
    it('JazzMusician properties testing', function () {
        var musician = new JazzMusician_1.JazzMusician('Miles', 'Davis', 89);
        expect(musician.style).toBe(Musician_1.Music.JAZZ);
    });
    it('JazzMusician toString method testing', function () {
        var musician = new JazzMusician_1.JazzMusician('Miles', 'Davis', 89);
        expect(musician.toString()).toBe('Miles Davis plays JAZZ');
    });
    it('RockStar properties testing', function () {
        var musician = new RockStar_1.RockStar('Mick', 'Jagger', 72);
        expect(musician.style).toBe(Musician_1.Music.ROCK);
    });
    it('RockStar toString method testing', function () {
        var musician = new RockStar_1.RockStar('Mick', 'Jagger', 72);
        expect(musician.toString()).toBe('Mick Jagger plays ROCK');
    });
    it('display method testing with musicians', function () {
        var musicians = [new JazzMusician_1.JazzMusician('Miles', 'Davis', 89), new RockStar_1.RockStar('Mick', 'Jagger', 72)];
        Display_1.default(musicians);
        expect(spy).toBeCalledTimes(2);
        expect(spy.mock.calls[0][0]).toBe('Miles Davis plays JAZZ');
        expect(spy.mock.calls[1][0]).toBe('Mick Jagger plays ROCK');
    });
    it('display method testing with albums', function () {
        var albums = [new Album_1.Album('Kind Of Blue'), new Album_1.Album('Tutu')];
        Display_1.default(albums);
        expect(spy).toBeCalledTimes(2);
        expect(spy.mock.calls[0][0]).toBe('Kind Of Blue');
        expect(spy.mock.calls[1][0]).toBe('Tutu');
    });
});
