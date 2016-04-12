var fizzBuzz = function (n) {
  if ( n % 15 === 0 ) {
    return "fizzbuzz";
  } else if ( n % 3 === 0 ) {
    return "fizz";
  } else if ( n % 5 === 0 ) {
    return "buzz";
  } else {
    return n;
  }

};

for (var n = 1; n <= 100; n = n + 1 ) {
  console.log(fizzBuzz(n));
}
