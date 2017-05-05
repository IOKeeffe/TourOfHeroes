def calculatorParse(str)
  operands = str.split("").select{ |char| char == "+" || char == "*"}
  regex = Regexp.new("[\+\*]")
  numbers = str.split(regex).map(&:to_i)
  total = numbers[0]
  operands.each.with_index do |operand, idx|
    if operand == "*"
      total *= numbers[idx+1]
    else
      total += numbers[idx+1]
    end
  end
  total
end

str = "53+10*20+4"
p calculatorParse(str)
