def pigatize(text)
  if starts_with_vowel?(text)
    text + "way"
  else
    s = text.slice!(0)
    text + s + "ay"
  end
end

def starts_with_vowel?(text)
  return false if text[0].downcase.scan(/[aeiou]/).empty?
  return true
end


puts pigatize("hello")
puts pigatize("world")
puts pigatize("Elephant")
puts pigatize("apple")
puts pigatize("potato")
puts pigatize("sheep")
puts pigatize("parrot")
puts pigatize("I")
puts pigatize("umbrella")
puts pigatize("orange")
