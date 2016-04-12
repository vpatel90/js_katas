var ageVerifier = function (arr) {
  arr.forEach(function(age) {
    if ( age < 21 ) {
      console.log("Too young");
    } else {
      console.log("Proceed");
    }
  });
};

var array = [4,5,21,53,77,99];
ageVerifier(array);
