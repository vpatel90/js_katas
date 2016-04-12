var startsWithVowel = function (text) {
  if ( text[0].search(/[aeiou]/) < 0 ) {
    console.log("false")
  } else {
    console.log("true")
  }
};

startsWithVowel("ello")
