/*global describe, it*/
var chai = require("chai");

var assert = chai.assert;

var coinChanger = function (total) {
    var coins = [];
    var myTotal = total;

    coins = find_dimes(myTotal,coins)
    myTotal = total - sumArray(coins)
    coins = find_nickles(myTotal,coins)
    myTotal = total - sumArray(coins)
    coins = find_pennies(myTotal, coins)
    return coins
};

var sumArray = function (array) {
  var sum = 0
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  return sum
}

var find_pennies = function (total, coins) {
  for (n = 0; n < total; n++) {
    coins.push(1)
  }
  return coins
};

var find_nickles = function (total, coins) {
  var totalCoins = Math.floor(total/5)
  for (n = 0; n < totalCoins; n++) {
    coins.push(5)
  }
  return coins
};

var find_dimes = function (total, coins) {
  var totalCoins = Math.floor(total/10)
  for (n = 0; n < totalCoins; n++) {
    coins.push(10)
  }
  return coins
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
