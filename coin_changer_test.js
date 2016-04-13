/*global describe, it*/
var chai = require("chai");

var assert = chai.assert;


describe("Array", function() {
    it("should start empty", function() {
        var arr = [];
        assert.equal(arr.length, 0);
    });
});

describe("Pennies", function() {
    it("should have 4 pennies", function() {
        var total = 4;
        var expected = [1,1,1,1];
        assert.deepEqual(expected, coinChanger(total));
    });
});

describe("Nickles", function() {
    it("should have 1 nickle", function() {
        var total = 5;
        var expected = [5];
        assert.deepEqual(expected, coinChanger(total));
    });
});

describe("Dimes", function() {
    it("should have 2 dimes", function() {
        var total = 20;
        var expected = [10,10];
        assert.deepEqual(expected, coinChanger(total));
    });
});

describe("quarters", function() {
    it("should have 2 quarters", function() {
        var total = 50;
        var expected = [25,25];
        assert.deepEqual(expected, coinChanger(total));
    });
});

describe("all", function() {
    it("should have 3 quarters 2 dimes and 4 pennies", function() {
        var total = 99;
        var expected = [25,25,25,10,10,1,1,1,1];
        assert.deepEqual(expected, coinChanger(total));
    });
});
