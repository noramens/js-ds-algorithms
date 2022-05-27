// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop

function factorial(number) {
  let total = 1;

  for (let i = number; i >= 1; i--) {
    total *= i;
  }

  return total;
}

factorial(5);

function factorialRecursion(number) {
  if (number <= 2) {
    return number;
  }
  return number * factorialRecursion(number - 1);
}

factorialRecursion(5);
