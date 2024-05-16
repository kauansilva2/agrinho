// Function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
  return width * height;
}

// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
  return (base * height) / 2;
}

// Function to calculate the area of a circle
function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

// Function to convert temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function to convert temperature from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Function to calculate the cost of a product
function calculateCost(price, quantity) {
  return price * quantity;
}

// Function to calculate the average of an array of numbers
function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

// Function to check if a number is prime
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// Function to find the largest prime factor of a number
function largestPrimeFactor(number) {
  if (number < 2) return null;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      if (isPrime(i)) return i;
      return largestPrimeFactor(number / i);
    }
  }
  return number;
}

// Function to find the Fibonacci sequence up to a given number
function fibonacciSequence(number) {
  const sequence = [0, 1];
  while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= number) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  return sequence;
}

// Function to find the factorial of a number
function factorial(number) {
  if (number < 0) return null;
  if (number === 0 || number === 1) return 1;
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

// Function to convert a number to a Roman numeral
function toRoman(number) {
  const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = '';
  for (let i = 0; i < numbers.length; i++) {
    while (number >= numbers[i]) {
      result += romanNumerals[i];
      number -= numbers[i];
    }
  }
  return result;
}

// Function to convert a Roman numeral to a number
function fromRoman(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    if (i + 1 < roman.length && romanNumerals[roman[i
