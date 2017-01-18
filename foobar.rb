# ruby
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
