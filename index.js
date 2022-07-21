// Add answers here

// #### 1. Los or New?

function nameOfCity(string) {
  if (
    string.toUpperCase().slice(0, 3) === "NEW" ||
    string.toUpperCase().slice(0, 3) === "LOS"
  ) {
    return string;
  } else {
    return "The city name does not begin with Los or New";
  }
}

nameOfCity("New York"); //➞ 'New York'
nameOfCity("newark"); // ➞ 'newark'
nameOfCity("London"); //➞ 'The city name does not begin with Los or New'

console.log(nameOfCity("New York"));
console.log(nameOfCity("newark"));
console.log(nameOfCity("London"));

console.log("------------------------------------");

// #### 2. isDivisible?

function isDivisible(integer) {
  if (integer % 100 == 0) {
    return true;
  } else {
    return false;
  }
}

isDivisible(1);
isDivisible(1000);
isDivisible(100);

console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));

console.log("------------------------------------");

// #### 4. What's the weather?

function isRaining(parameter) {
  const weatherCheck =
    parameter == true
      ? "wet day - you need an umbrella"
      : "dry day - leave your umbrella at home";
  return weatherCheck;
}

isRaining(true);
console.log(isRaining(false));

console.log("------------------------------------");

// ### Loops

function geometricalSequence() {
  let string = 0;
  let n = 9;
  let start = 1;
  let r = 2;
  for (let i = 0; i < n; i++) {
    string += start * Math.pow(r, i);
    string += " ";
  }
  return string;
}

geometricalSequence(); //➞ '1 2 4 8 16 32 64 128 256'

console.log(geometricalSequence());

console.log("------------------------------------");

// #### 2. Multiples

function multiplesOfThree() {
  let n = 5;
  let input = 3;
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += input * [i];
    result += " ";
  }
  return result;
}

multiplesOfThree();
console.log(multiplesOfThree());

console.log("------------------------------------");

// ### Math

function powerOf(integer) {
  return Math.pow(integer, integer);
}

powerOf(3);
powerOf(4);

console.log(powerOf(3));
console.log(powerOf(4));

console.log("------------------------------------");

// ### Problem Solving

function vowelCount(string) {
  const vowel = "aeiouAEIOU";
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowel.includes(string[i])) {
      counter++;
    }
  }
  return counter;
}

vowelCount("hello");
vowelCount("test");
vowelCount("fbw");

console.log(vowelCount("hello"));
console.log(vowelCount("test"));
console.log(vowelCount("fbw"));

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
