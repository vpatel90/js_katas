def age_verifier(arr)
  arr.each do |age|
    if age < 21
      puts "Too young"
    else
      puts "Proceed"
    end
  end
end

array = [4,5,21,53,77,99]
age_verifier(array)
