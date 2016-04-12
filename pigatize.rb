def pigatize(text)
  if starts_with_vowel?(text)
  else
  end
end

def starts_with_vowel?(text)
  return false if text[0].scan(/[aeiou]/).empty?
  return true
end
