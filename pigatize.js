var pigatize = function (text) {
  if ( startsWithVowel(text) === true ) {
    console.log(text + "way");
  } else {
    s = text[0];
    text = text.replace(/^[a-zA-Z]{1}/, "");
    console.log(text + s + "ay");
  }
};

var startsWithVowel = function (text) {
  if ( text[0].search(/[aeiouAEIOU]/) < 0 ) {
    return false;
  } else {
    return true;
  }
};

pigatize("hello")
pigatize("world")
pigatize("Elephant")
pigatize("apple")
pigatize("potato")
pigatize("sheep")
pigatize("parrot")
pigatize("I")
pigatize("umbrella")
pigatize("orange")
