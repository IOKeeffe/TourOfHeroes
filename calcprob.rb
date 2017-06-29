def calculatorParse(str)
  operands = str.split("").select{ |char| char == "+" || char == "*"}
  regex = Regexp.new("[\+\*]")
  numbers = str.split(regex).map(&:to_i)
  started = false

  total
end

def doMath|(num1, num2, &blk)
  operands.each.with_index do |operand, idx|
    if operand == "*"
      unless started
        started = true
        total = numbers[idx]
      end
      blk.call(num1, num2)
    end
  end
end

str = "53+10*20+4"
p calculatorParse(str)
