/*global describe, it*/
var chai = require("chai");

var assert = chai.assert;

var coinChanger = function (total) {
    var coins = [];
    var myTotal = total;
    var values = [25,10,5,1];

    for (var i = 0; i < values.length; i++){
        coins = find_coins(values[i], myTotal,coins);
        myTotal = total - sumArray(coins);
    }
    return coins;
};

var find_coins = function(value, total, coins) {
    var totalCoins = Math.floor(total/value);
    for (var n = 0; n < totalCoins; n++) {
        coins.push(value);
    }
    return coins;
};

var sumArray = function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
};



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
