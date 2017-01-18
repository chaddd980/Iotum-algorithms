# Question:
# Write a function that prints the numbers from 1 to 100.
# But for multiples of three print “Foo” instead of the number
# and for the multiples of five print “Bar”. For numbers which are
# multiples of both three and five print “FooBar”.
# language of choice = ruby

count = 1
while count <= 100
  output = ""
  if count % 3 != 0 && count % 5 != 0
    output = count
  elsif count % 3 == 0
    output = "foo"
  end
  if count % 5 == 0
    output += "bar"
  end
  puts output
  count += 1
end
