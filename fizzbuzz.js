var fizzBuzz = function (n) {
  if ( n % 15 === 0 ) {
    console.log("fizzbuzz");
  } else if ( n % 3 === 0 ) {
    console.log("fizz");
  } else if ( n % 5 === 0 ) {
    console.log("buzz");
  }

};

fizzBuzz(15);
fizzBuzz(3);
fizzBuzz(5);
