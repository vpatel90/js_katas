def fizz_buzz(n)
  if n % 15 == 0
    "fizzbuzz"
  elsif n % 3 == 0
    "fizz"
  elsif n % 5 == 0
    "buzz"
  else
    n
  end
end

100.times do |n|
  puts fizz_buzz(n + 1)
end
