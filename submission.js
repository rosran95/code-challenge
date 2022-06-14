const findSum = function(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

const findFrequency = function(array) {
  let result = {};
  let count = {};

  //iterate through the array
  for(let i = 0; i < array.length; i++) {
    if(count[array[i]] === undefined) {
      count[array[i]] = 1;
    } else {
      count[array[i]] ++;
    }
  }
  let sortArr = Object.entries(count).sort((a,b) => b[1] - a[1]);
result['most'] = sortArr[0][0];
result['least'] = sortArr[sortArr.length -1][0];
return result;
};

const isPalindrome = function(str) {
  let isPalindrome = true;
  let strArr = str.split('');
  let strArr2 = [];
  for(let i = 0; i < strArr.length; i++) {
    strArr2.unshift(strArr[i]);
  }
  //iterate to compare both arrays
  for(let i = 0; i < strArr.length; i++) {
    if(strArr[i] !== strArr2[i]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome
};

const largestPair = function(array) {
  let largestProduct = array[0] * array[1];
  // loop through the array 
  for(let i = 1; i <= array.length - 1; i++) {
    if(largestProduct < (array[i] * array[i + 1])) {
      largestProduct = (array[i] * array[i + 1]);
    }
  }
  return largestProduct;
};

const removeParenth = function(str) {
  let newStr = str.replace('(', '');
  let finalStr = newStr.replace(')', '');
  return finalStr;
};

const scoreScrabble = function(str) {
  let scoring = {
  'a': 1,
  'e': 1,
  'i': 1,
  'o': 1,
  'u': 1,
  'l': 1,
  'n': 1,
  'r': 1,
  's': 1,
  't': 1,
  'd': 2,
  'g': 2,
  'b': 3,
  'c': 3,
  'm': 3,
  'p': 3,
  'f': 4,
  'h': 4,
  'v': 4,
  'w': 4,
  'y': 4,
  'k': 5,
  'j': 8,
  'x': 8,
  'q': 10,
  'z': 10,
   }
  let strArr = str.split('');
  let score = 0;
  //iteration across string array
  for(let i = 0; i < strArr.length; i++) {
    score = score + scoring[strArr[i]];
  } 
  return score;
};
