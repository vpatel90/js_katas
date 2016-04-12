var pigatize = function (text) {
    if ( startsWithVowel(text) ) {
        console.log(text + "way");
    } else {
        var s = text[0];
        text = text.replace(/^[a-zA-Z]{1}/, "");
        console.log(text + s + "ay");
    }
};

var startsWithVowel = function (text) {
    if ( text.search(/[aeiouAEIOU]/) === 0 ) {
        return true;
    } else {
        return false;
    }
};

pigatize("hello");
pigatize("world");
pigatize("Elephant");
pigatize("apple");
pigatize("potato");
pigatize("sheep");
pigatize("parrot");
pigatize("I");
pigatize("umbrella");
pigatize("orange");
