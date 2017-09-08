// Do not change any of the function names

function getBiggest(x, y) {
  if (x > y) {
    return x;
  }
    return y;
}

function greeting(language) {
  if (language === 'German'){
    return 'Guten Tag!';
  } else if (language === 'Spanish'){
    return 'Hola!';
  } else return 'Hello!';
}

function isTenOrFive(num) {

  if (num === 10 || num === 5)  {
    return true;
  }
  return false;
}

function isInRange(num) {
  if (num < 50 && num > 20) {
    return true;
  }
  return false;
}

function isInteger(num) {
  if (Math.floor(num) < num) {
    return false;
  } else {
  return true;
}
}

function fizzBuzz(num) {
  if ((num % 3 === 0) && (num % 5 === 0)){
    return 'fizzbuzz';
  } else if (num % 3 === 0){
    return 'fizz';
  } else if (num % 5 === 0){
    return 'buzz';
  } else return num;
}

function isPrime(num) {
  if (num < 2) return false;
  for (var div = 2; div < num; div++){
    if (num % div === 0) {
      return false;
    }
    return true;
  }
}

function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
  }
  return arr;
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  arr.unshift (item);
  return arr;
}

function wordsToSentence(words) {
  return words.join(' ');
}


function contains(arr, item){
  return arr.includes(item);
}


function addNumbers(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
  }
  return sum;
}

function averageTestScore(testScores){
  var avg = 0;
  for (var i = 0; i < testScores.length; i++){
    avg = avg + testScores[i];
  }
  return (avg/testScores.length);
}

function largestNumber(numbers) {
  var largest = numbers[0];
  for (var i = 1; i < numbers.length; i++){
    if (largest < numbers[i]){
      largest = numbers[i];
    }
  }
  return largest;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
