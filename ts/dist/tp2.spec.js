"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tp2_1 = require("./tp2");
var spy = jest.spyOn(console, 'log');
describe('TP2', function () {
    it('returnPeopleAndLength with table in parameter', function () {
        var people = tp2_1.returnPeopleAndLength();
        expect(people.length).toBe(2);
        expect(people[0][0]).toBe('Miles');
        expect(people[0][1]).toBe(5);
        expect(people[1][0]).toBe('Mick');
        expect(people[1][1]).toBe(4);
    });
    it('returnPeopleAndLength with arguments', function () {
        var people = tp2_1.returnPeopleAndLength(['Emmanuel']);
        expect(people.length).toBe(1);
        expect(people[0][0]).toBe('Emmanuel');
        expect(people[0][1]).toBe(8);
    });
    it('displayPeopleAndLength with table in parameter', function () {
        tp2_1.displayPeopleAndLength(['Emmanuel']);
        expect(spy).toHaveBeenNthCalledWith(1, 'Emmanuel contient 8 caractères');
    });
    it('displayPeopleAndLength without litterals and more than 9 characters', function () {
        tp2_1.displayPeopleAndLength(['Emmanuel', 'Jean-Pierre']);
        expect(spy).toBeCalledWith('Emmanuel contient 8 caractères');
        expect(spy).toBeCalledWith('Jean-Pierre contient 11 caractères');
    });
    it('displayPeopleAndLength without arguments', function () {
        tp2_1.displayPeopleAndLength();
        expect(spy).toBeCalledWith('Miles contient 5 caractères');
        expect(spy).toBeCalledWith('Mick contient 4 caractères');
    });
    it('displayPeopleAndLength with table and literal in parameter', function () {
        tp2_1.displayPeopleAndLength(['Zenika', 'ZenikaZenika'], true);
        expect(spy).toBeCalledWith('Zenika contient six caractères');
    });
});
