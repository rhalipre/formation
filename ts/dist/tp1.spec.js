"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tp1_1 = require("./tp1");
describe('TP1', function () {
    var helloWorld;
    beforeEach(function () {
        helloWorld = new tp1_1.HelloWorld();
    });
    it('should say hello to Zenika', function () {
        expect(helloWorld.sayHello('Zenika')).toBe('Hello Zenika!');
    });
    it('should say hello to World', function () {
        expect(helloWorld.sayHello()).toBe('Hello World!');
    });
});
