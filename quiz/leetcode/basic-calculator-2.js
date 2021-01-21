const calculate = (s) => {
  const maths = s.replace(/\s/g, '').split(/([\+\-\*\/])/);
  const { numbers, operators } = maths.reduce(
    (cals, v) => {
      if (/\d/.test(v)) cals.numbers.push(Number(v));
      else cals.operators.push(v);
      return cals;
    },
    { numbers: [], operators: [] }
  );
  const stack = [numbers.shift()];

  operators.forEach((operator, i) => {
    switch (operator) {
      case '+':
        stack.push(numbers[i]);
        break;
      case '-':
        stack.push(-numbers[i]);
        break;
      case '*':
        stack.push(stack.pop() * numbers[i]);
        break;
      case '/':
        stack.push(parseInt(stack.pop() / numbers[i], 10));
        break;
    }
  });

  return stack.reduce((acc, v) => acc + v);
};
